<script setup lang="ts">
const maisonListe: {
    adresse: string;
    collectionId: string;
    collectionName: string;
    created: string;
    favoris: boolean;
    id: string;
    image: string;
    nbChambres: number;
    nbSdb: number;
    nomMaison: string;
    prix: number;
    surface: number;
    updated: string;
}[] = [
  {
    "adresse": "15 rue de la bouillie",
    "collectionId": "qzzwey9w66sl8mu",
    "collectionName": "maisons",
    "created": "2024-05-01 12:53:54.797Z",
    "favoris": false,
    "id": "2p1db734of8p5h4",
    "image": "house_of_the_rising_sun_KQ6uGbBEBG.jpg",
    "nbChambres": 4,
    "nbSdb": 1,
    "nomMaison": "House of The rising sun",
    "prix": 230000,
    "surface": 256,
    "updated": "2024-05-01 13:02:55.394Z"
  },
  {
    "adresse": "1600 Pennsylvania Ave NW, Washington, DC 20500, États-Unis",
    "collectionId": "qzzwey9w66sl8mu",
    "collectionName": "maisons",
    "created": "2024-05-01 13:01:40.422Z",
    "favoris": true,
    "id": "igpfe34v2oejam5",
    "image": "blanche_nemBj8Pxwp.jpg",
    "nbChambres": 132,
    "nbSdb": 35,
    "nomMaison": "White House",
    "prix": 10748247,
    "surface": 5100,
    "updated": "2024-05-01 13:03:27.236Z"
  },
  {
    "adresse": "15 rue de la Comté",
    "collectionId": "qzzwey9w66sl8mu",
    "collectionName": "maisons",
    "created": "2024-05-01 13:06:07.647Z",
    "favoris": true,
    "id": "mf77zzyi7k4k7mx",
    "image": "hobbitinteieur_CNXviFYpQx.jpg",
    "nbChambres": 8,
    "nbSdb": -12,
    "nomMaison": "Maison Hobbit",
    "prix": 120000,
    "surface": 45,
    "updated": "2024-05-01 13:06:21.990Z"
  },
  {
    "adresse": "9 rue des Alpes",
    "collectionId": "qzzwey9w66sl8mu",
    "collectionName": "maisons",
    "created": "2024-05-01 13:09:07.679Z",
    "favoris": false,
    "id": "umuo9mmoky9z5jh",
    "image": "chalet_VEgcVJePwy.jpg",
    "nbChambres": 4,
    "nbSdb": 3,
    "nomMaison": "Chalet en montagne",
    "prix": 257000,
    "surface": 300000,
    "updated": "2024-05-01 13:09:07.679Z"
  },
  {
    "adresse": "15 rue de la méditernanée",
    "collectionId": "qzzwey9w66sl8mu",
    "collectionName": "maisons",
    "created": "2024-05-01 13:10:41.763Z",
    "favoris": true,
    "id": "bdaec2rh2q5kb1c",
    "image": "plage_fgo5UZG7K1.jpg",
    "nbChambres": 3,
    "nbSdb": 4,
    "nomMaison": "Maison sur la plage",
    "prix": 425000,
    "surface": 237,
    "updated": "2024-05-01 13:10:41.763Z"
  }
]

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
