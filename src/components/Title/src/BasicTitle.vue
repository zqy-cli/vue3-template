<template>
  <div class="mb-10 flex items-center">
    <span class="w-5 h-4 mr-10 bg-blue-text"></span>
    <span class="font-bold text-base text-slate-700">{{ title }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BasicTitle',
    props: {
      title: {
        type: String,
        default: '',
      },
    },
  });
</script>
