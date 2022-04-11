import { nextTick, onMounted, unref } from 'vue';

export function useTableScrollY(setProps, tableContentRef, isButton = false) {
  onMounted(() => {
    nextTick(() => {
      setTableScrollY();
    });
  });

  const HEIGHT = isButton ? 162 : 120;
  // 动态设置表格滚动高度
  const setTableScrollY = () => {
    const wrapEl = unref(tableContentRef);
    if (!wrapEl) {
      return;
    }
    setProps({ scroll: { y: wrapEl.clientHeight - HEIGHT } });
  };
}
