<script setup lang="ts">
import type { AgenceRecord } from '@/pocketbase-types';
import AgenceCard from '@/components/MaisonCard.vue';

import { allAgenceMaisonbyId, pb } from '@/backend'

const agentListe = await pb.collection('agence').getFullList()

</script>

<template>
  <!-- <MaisonCard v-for="MaisonsRecord in maisonsListe" :key="MaisonsRecord.nomMaison" v-bind="MaisonsRecord" /> -->
  <ul>
  <li v-for="unAgent of agentListe" :v-key="unAgent.id">
    <RouterLink
      :to="{
        name: '/agence/[id]',
        params: {
          id: unAgent.id
        }
      }"
      class="text-black-400 hover:text-indigo-500 hover:text-xl hover:font-bold  "
    >
      {{ unAgent.nom }}
    </RouterLink>
  </li>
</ul>
</template>