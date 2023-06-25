<template>
  <main class="main">
    <TheSidebar class="sidebar" />
    <RouterView class="content" />
  </main>
</template>

<script setup>
import TheSidebar from "@/components/layout/TheSidebar.vue";
</script>

<style lang="scss">
.main {
  display: flex;
}
.content {
  max-width: 70%;
  margin: 0 auto;
  flex: 1 1 auto;
  padding-bottom: 100px;
  @media (max-width: ($lg)) {
    max-width: 100%;
  }
}
</style>
