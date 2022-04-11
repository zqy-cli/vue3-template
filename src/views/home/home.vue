<template>
  <div :class="[prefixCls]" class="p-20 h-full">
    <div class="bg-white rounded-md shadow-lg"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { TaskItem } from '/@/views/home/type/homeType';
  import { task } from '/@/views/home/data/data';

  export default defineComponent({
    name: 'Home',
    components: {},
    setup() {
      const { prefixCls } = useDesign('home');
      const taskList = ref<TaskItem[]>(task);

      return {
        prefixCls,
        taskList,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-home';

  .@{prefix-cls}{}
</style>
