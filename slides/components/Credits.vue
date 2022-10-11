<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps({
    link: { default: '' },
    name: { default: '' },
    side: { default: 'right' },
  })

  const link = ref(props.link)
  const name = ref(props.name)
  const side = ref(props.side)
</script>

<template>
  <small class="absolute bottom-0 p-1 bg-dark-800 bg-opacity-90 font-light text-xs text-slate-200 opacity-60" 
         :class="`${side}-0`">
    Photo by <a href="{{ link }}">{{ name }}</a> on <a href="https://unsplash.com/">Unsplash</a>
  </small>
</template>
