import type { AppRouteModule } from '../../types';

import { LAYOUT } from '../../constant';

const home: AppRouteModule = {
  path: '/home',
  name: 'About',
  component: LAYOUT,
  redirect: '/home/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ant-design:home-outlined',
    title: '首页',
    orderNo: 1,
  },
  children: [
    {
      path: 'index',
      name: 'Home',
      component: () => import('../../../views/home/home.vue'),
      meta: {
        title: '首页',
        icon: 'ant-design:home-outlined',
        hideMenu: true,
      },
    },
  ],
};

export default home;
