<template>
  <div class="absolute bottom-0 -left-2px h-1 progress"
       :style="`width: ${Math.floor(100 * ($slidev.nav.currentPage / ($slidev.nav.total - 1)))}%;`"></div>
</template>
