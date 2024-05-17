<script setup lang="ts">
import type { MaisonsRecord } from '@/pocketbase-types';
import MaisonCard from '@/components/MaisonCard.vue';

import { allMaisonsSorted } from '@/backend'

const maisonsListe = await allMaisonsSorted()

</script>

<template>
  <MaisonCard v-for="MaisonsRecord in maisonsListe" :key="MaisonsRecord.nomMaison" v-bind="MaisonsRecord" />
</template>