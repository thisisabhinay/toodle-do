<script setup lang="ts">
import "./index.css"
import { RouterLink, RouterView } from "vue-router"
import { NConfigProvider, type GlobalThemeOverrides } from "naive-ui"

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#334155",
    primaryColorHover: "#4098fc",
    primaryColorPressed: "#1060c9",
    primaryColorSuppl: "#4098fc"
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" class="h-full">
    <div class="grid grid-cols-1 grid-rows-1 justify-items-center">
      <header class="py-10 w-full max-w-5xl flex items-center justify-between">
        <img alt="Vue logo" class="h-7 w-7" src="@/assets/logo.svg" />

        <nav class="flex items-center gap-5">
          <RouterLink class="hover:underline" to="/">Home</RouterLink>
          <RouterLink class="hover:underline" to="/about">About</RouterLink>
        </nav>
      </header>

      <div class="grid grid-cols-1 auto-rows-max gap-40 w-full max-w-5xl">
        <RouterView />
      </div>
    </div>
  </n-config-provider>
</template>

<style scoped></style>
