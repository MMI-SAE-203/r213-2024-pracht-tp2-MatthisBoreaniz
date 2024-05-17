<script setup lang="ts">
import type { MaisonsRecord } from '@/pocketbase-types';
import MaisonCard from '@/components/MaisonCard.vue';

import { allMaisonsSorted } from '@/backend'

const maisonsListe = await allMaisonsSorted()

</script>

<template>
  <!-- <MaisonCard v-for="MaisonsRecord in maisonsListe" :key="MaisonsRecord.nomMaison" v-bind="MaisonsRecord" /> -->
  <ul>
  <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-black-400 hover:text-indigo-500 hover:text-xl  "
    >
      {{ uneMaison.nomMaison }}
    </RouterLink>
  </li>
</ul>
</template>