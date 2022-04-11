<template>
  <div class="min-h-100 rounded-md p-20" :class="{ 'shadow-lg': shadow }">
    <BasicTitle :title="title" />
    <Description @register="register" class="mt-4" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, toRefs, unref } from 'vue';
  import { DescItem, Description, useDescription } from '/@/components/Description';
  import { BasicTitle } from '/@/components/Title';

  export default defineComponent({
    name: 'DetailInfo',
    components: {
      Description,
      BasicTitle,
    },
    props: {
      title: {
        type: String,
        default: '',
      },
      data: {
        type: Object as PropType<Recordable<{}>>,
        default: () => {},
      },
      schema: {
        type: Object as PropType<DescItem[]>,
        default: () => {},
      },
      column: {
        type: Number,
        default: 3,
      },
      shadow: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const { data, schema, column } = toRefs(props);
      const [register] = useDescription({
        data: data,
        schema: unref(schema),
        column: unref(column),
      });

      return {
        register,
      };
    },
  });
</script>

<style lang="less"></style>
