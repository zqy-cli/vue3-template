<template>
  <div :class="[prefixCls]">
    <div
      :class="`${prefixCls}-header`"
      class="flex justify-center items-center flex-col select-none"
    >
      <h1 :class="`${prefixCls}-sub-title`" class="mb-0 leading-none">AML</h1>
      <h1 :class="`${prefixCls}-title`" class="text-white">新一代反洗钱监管工作平台</h1>
    </div>
    <div
      :class="`${prefixCls}-content`"
      class="flex justify-between items-start flex-wrap my-0 mx-auto w-9/12"
    >
      <div
        v-for="item in itemsList"
        :key="item.title"
        class="
          item
          transition-all
          duration-300
          border border-solid
          rounded-lg
          border-gray-400
          hover:border-white
          flex
          justify-center
          items-center
          flex-col
          select-none
        "
        :class="{
          label: item.disabled,
          'cursor-pointer': !item.disabled,
          'bg-white': item.disabled,
          'bg-opacity-10': item.disabled,
        }"
        @click="handleClick(item)"
      >
        <img :src="getImageUrl(item.icon)" class="w-100" :alt="item.title" />
        <span class="mt-10 text-2xl text-white">{{ item.title }}</span>
      </div>
      <i class="item"></i>
      <i class="item"></i>
    </div>
    <footer
      :class="`${prefixCls}-footer`"
      class="text-white flex justify-center items-center select-none"
    >
      <span>智器云南京信息科技有限公司</span>
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useRouter } from 'vue-router';
  import { ItemsType } from '/@/views/sys/dashboard/type/dashboardType';
  import { items } from '/@/views/sys/dashboard/data/data';
  import { openWindow } from '/@/utils';

  export default defineComponent({
    name: 'Dashboard',
    components: {},
    setup() {
      const { prefixCls } = useDesign('dashboard');
      const itemsList = ref<ItemsType[]>(items);
      const router = useRouter();

      const getImageUrl = (icon) => {
        return new URL(`../../../assets/svg/dashboard/${icon}.svg`, import.meta.url).href;
      };

      const handleClick = ({ type, disabled }: ItemsType) => {
        if (disabled) return;
        if (type === 'report') {
          router.push({ name: 'Home' });
          return;
        }
        if (type === 'identify') {
          openWindow('http://172.30.6.196/login');
        }
      };

      return {
        prefixCls,
        itemsList,
        getImageUrl,
        handleClick,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-dashboard';

  .@{prefix-cls} {
    height: 100vh;
    background-image: url('../../../assets/images/dashboard_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    &-header {
      height: 40vh;
    }

    &-sub-title {
      color: rgb(255 255 255 / 40%);
      font-size: 80px;
      letter-spacing: 1rem;
    }

    &-title {
      font-size: 48px;
    }

    &-content {
      height: 50vh;
      overflow: auto;

      .item {
        width: 220px;
        height: 220px;
        margin-bottom: 20px;
        margin-right: 20px;
      }

      .label {
        position: relative;

        &::before {
          /* 做一个书签效果 */
          position: absolute;
          right: 20px;
          top: -1px;
          z-index: 1;
          content: '';
          width: 40px;
          height: 60px;
          border: 20px solid #fff;
          border-radius: 5px;
          border-bottom-color: transparent; /* 下边框透明，变成空缺的角 */
          filter: drop-shadow(-1px 1px 2px #666);
        }

        &::after {
          content: '蓄势待发';
          position: absolute;
          right: 20px;
          top: 0;
          z-index: 2;
          width: 40px;
          text-align: center;
        }
      }
    }

    &-footer {
      height: 10vh;
      font-size: 18px;
    }
  }
</style>
