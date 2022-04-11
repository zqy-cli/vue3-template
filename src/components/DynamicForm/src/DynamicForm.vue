<template>
  <div>
    <form-create :rule="rule" v-model:api="fApi" :option="options" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, toRefs, unref } from 'vue';
  import { formOptions } from '/@/components/DynamicForm/src/types/props';

  const props = {
    formOptions: {
      type: Object as PropType<formOptions>,
      default() {
        return {};
      },
    },
  };
  export default defineComponent({
    name: 'DynamicForm',
    props,
    setup(props) {
      const { formOptions } = toRefs(props);
      const { rule, fApi, options } = unref(formOptions);
      return {
        rule,
        fApi,
        options,
      };
    },
  });
</script>
