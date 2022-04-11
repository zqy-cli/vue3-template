<template #default>
  <a-row>
    <a-col :span="span">
      <a-row>
        <a-col :offset="offset">
          <a-button type="primary" :loading="submitLoading" @click="submit">{{ okText }}</a-button>
          <a-button class="ml-10" @click="reset">{{ cancelText }}</a-button>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CustomBtn',
    props: {
      span: {
        type: Number,
        default: 6,
      },
      offset: {
        type: Number,
        default: 6,
      },
      okText: {
        type: String,
        default: '提交',
      },
      cancelText: {
        type: String,
        default: '重置',
      },
      submitLoading: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['submit', 'reset'],
    setup(_, { emit }) {
      function submit() {
        emit('submit');
      }
      function reset() {
        emit('reset');
      }

      return {
        submit,
        reset,
      };
    },
  });
</script>
