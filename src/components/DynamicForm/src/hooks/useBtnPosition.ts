import { ref, onMounted, Ref } from 'vue';

export function useBtnPosition() {
  const formRef = ref<Ref | null>(null);
  const btnRef = ref<Ref | null>(null);

  // 将按钮追加到表单后面
  onMounted(() => {
    formRef
      .value!.$el.querySelector('.form-create')
      .children[0].appendChild(btnRef.value!.$el.children[0]);
  });

  return {
    formRef,
    btnRef,
  };
}
