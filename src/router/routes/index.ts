import type { AppRouteRecordRaw, AppRouteModule } from '../types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from './basic';

import { mainOutRoutes } from './mainOut';
import { PageEnum } from '../../enums/pageEnum';
import { t } from '../../hooks/web/useI18n';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('../../views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};

export const DashboardRoute: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('../../views/sys/dashboard/dashboard.vue'),
  meta: {
    title: '门户聚合',
  },
};

// Basic routing without permission
export const basicRoutes = [
  LoginRoute,
  DashboardRoute,
  RootRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
