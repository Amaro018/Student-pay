<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed(({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
}));
</script>

<template>
  <label class="swap swap-rotate">
    <input v-model="isDark" type="checkbox">
    <icon name="material-symbols:sunny" class="swap-on" size="24" />
    <icon name="material-symbols:dark-mode" class="swap-off" size="24" />
  </label>
</template>
