import { ItemsType } from '../type/dashboardType';

export const items: ItemsType[] = [
  {
    title: '智能甄别平台',
    icon: 'identify',
    disabled: false,
    type: 'identify',
  },
  {
    title: '监管报送平台',
    icon: 'report',
    disabled: false,
    type: 'report',
  },
  {
    title: '模型智造平台',
    icon: 'model',
    disabled: true,
  },
  {
    title: '内控管理平台',
    icon: 'control',
    disabled: true,
  },
  {
    title: '公开情报平台',
    icon: 'intelligence',
    disabled: true,
  },
  {
    title: '多方联合反洗钱平台',
    icon: 'union',
    disabled: true,
  },
];
