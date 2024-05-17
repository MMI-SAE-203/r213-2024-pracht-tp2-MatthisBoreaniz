<script setup lang="ts">
import type { MaisonsRecord } from '@/pocketbase-types';
import MaisonCard from '@/components/MaisonCard.vue';

import { allMaisonsFavoris } from '@/backend'

const maisonsListe = await allMaisonsFavoris()

</script>

<template>
  <h1>bonjour tout le monde</h1>
  <MaisonCard v-for="MaisonsRecord in maisonsListe" :key="MaisonsRecord.id" v-bind="MaisonsRecord" />
</template>
