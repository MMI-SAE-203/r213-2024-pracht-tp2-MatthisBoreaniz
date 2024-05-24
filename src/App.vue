<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import { RouterLink, RouterView } from 'vue-router/auto'

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/" class="text-indigo-500 bg-white-500 hover:text-white hover:bg-red-500 rounded-md "> Accueil </RouterLink>
        </li>
        <li>
          <RouterLink to="/offres" class="text-indigo-500 bg-white-500 hover:text-white hover:bg-red-500 rounded-md "cd> Toutes les offres </RouterLink>
        </li>
        <li>
          <RouterLink to="/agence" class="text-indigo-500 bg-white-500 hover:text-white hover:bg-red-500 rounded-md "cd> Tous les agents </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>
