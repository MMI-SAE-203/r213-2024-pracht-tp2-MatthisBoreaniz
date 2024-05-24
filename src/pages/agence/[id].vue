<script setup lang="ts">
  import AgenceCard from '@/components/AgenceCard.vue'

  import { useRoute } from 'vue-router/auto'
    import { allAgenceMaisonbyId } from '@/backend'
import MaisonCard from '@/components/MaisonCard.vue';
  

  const route = useRoute('/agence/[id]')
  console.log('id :', route.params.id)

  const unAgent = await allAgenceMaisonbyId(route.params.id)
  // @ts-ignore
  const listeMaison = unAgent.expand["maisons(agence)"]
  console.log('listeMaison :', listeMaison);
  
</script>
<template>
  <div>
    <h1 class="text-xl">Voici l'agent</h1>
    <AgenceCard v-bind="unAgent" />

    <p class="p-5">Voici les maisons gérées par cette agence</p>
    <!-- (affiche uniquement le nom de la maison qui redirige vers la page de la maison) -->
    <ul class="p-20"> 
      <li v-for="uneMaison of listeMaison" :v-key="uneMaison.id">
        <RouterLink
          :to="{
            name: '/offres/[id]',
            params: {
              id: uneMaison.id
            }
          }"
          class="text-black-400 hover:text-indigo-500 hover:text-xl hover:font-bold bg-gray-200 p-2 m-2 rounded-lg hover:bg-gray-100 hover:border-2 hover:border-gray-300"
        >
          {{ uneMaison.nomMaison }}
        </RouterLink>
      </li>
    </ul>

    <!-- affiche la card de la maison -->
   
    <MaisonCard v-for="uneMaison of listeMaison" :key="uneMaison.id" v-bind="uneMaison" />
  </div>

</template>