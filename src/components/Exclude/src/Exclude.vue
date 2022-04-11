<template>
  <a-modal v-model:visible="sVisible" :closable="false">
    <template #footer>
      <a-button type="primary" :loading="loading" @click="handleOk">不通过</a-button>
      <a-button @click="handleCancel">取消</a-button>
    </template>
    <div class="p-20">
      <p>
        <Icon icon="ant-design:close-circle-filled" :size="14" class="mr-5 !text-red-500" />
        {{ title }}
      </p>
      <a-alert v-if="!!banner" :message="banner" type="warning" class="!p-5" />
      <a-form class="!mt-20" ref="formRef" :model="formState" name="basic" autocomplete="off">
        <a-form-item name="reason" :rules="[{ required: true, message: '请输入排除的理由' }]">
          <a-textarea
            v-model:value="formState.reason"
            :rows="5"
            placeholder="请输入排除的理由（必填）"
          />
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, reactive } from 'vue';
  import { Icon } from '/@/components/Icon/index';

  interface FormState {
    reason: string;
  }

  export default defineComponent({
    name: 'Exclude',
    components: {
      Icon,
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        required: true,
        default: '',
      },
      banner: {
        type: String,
        default: '',
      },
    },
    emits: ['update:visible', 'message'],
    setup(props, { emit }) {
      const formRef = ref<HTMLDivElement | null>(null);
      const loading = ref(false);
      const formState = reactive<FormState>({
        reason: '',
      });

      const sVisible = computed({
        get: () => props.visible,
        set: (val) => {
          emit('update:visible', val);
        },
      });

      const handleCancel = () => {
        sVisible.value = false;
        (formRef as any).value.resetFields();
      };

      const handleOk = () => {
        loading.value = true;
        (formRef as any).value
          .validateFields()
          .then(({ reason }) => {
            emit('message', reason);
            loading.value = false;
            sVisible.value = false;
            (formRef as any).value.resetFields();
          })
          .catch(() => {
            loading.value = false;
          });
      };

      return {
        loading,
        sVisible,
        formState,
        formRef,
        handleCancel,
        handleOk,
      };
    },
  });
</script>

<style lang="less"></style>
