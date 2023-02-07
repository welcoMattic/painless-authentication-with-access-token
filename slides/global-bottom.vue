<template>
  <footer v-if="$slidev.nav.currentPage > 1">
    <span class="absolute bottom-3 left-4 text-gray-500 font-300">{{ $slidev.nav.currentPage }}</span>
    <Progress></Progress>
<!--    <img src="/images/symfonycon-logo-transparent.png" alt="SymfonyCon Logo" class="absolute bottom-7 right-10 w-32 conference-logo"/>-->
  </footer>
</template>
