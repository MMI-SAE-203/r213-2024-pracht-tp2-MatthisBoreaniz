<script setup lang="ts">

  import type { AgenceResponse } from '@/pocketbase-types'
  const props = defineProps<AgenceResponse>()
  
</script>

<template>
<div class="w-[300px] h-[347px] relative">
<div
  class="w-[300px] h-[347px] absolute left-[-1px] top-[-1px] rounded-[15px] bg-white border border-[#6496e2]"
></div>
<p
  class="w-[271px] h-16 absolute left-[13px] top-[19px] text-4xl font-bold text-center text-black"
>
  {{ prenom }}
</p>
<p
  class="w-[271px] h-16 absolute left-[13px] top-[83px] text-4xl font-bold text-center text-black"
>
  {{nom}}
</p>
<p class="w-[271px] h-16 absolute left-[13px] top-[200px] text-xl text-left text-black">
  <span class="w-[271px] h-16 text-xl font-bold text-left text-black">Adresse : </span
  ><span class="w-[271px] h-16 text-xl text-left text-black">{{adresse}}</span>
</p>
<p class="w-[271px] h-16 absolute left-[13px] top-[264px] text-xl text-left text-black">
  <span class="w-[271px] h-16 text-xl font-bold text-left text-black">Tel. : </span
  ><span class="w-[271px] h-16 text-xl text-left text-black">{{telephone}}</span>
</p>
<svg
  width="271"
  height="5"
  viewBox="0 0 271 5"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="absolute left-2.5 top-[156px]"
  preserveAspectRatio="xMidYMid meet"
>
  <line y1="2.5" x2="271" y2="2.5" stroke="#79B6FF" stroke-width="5"></line>
</svg>
</div>

</template>