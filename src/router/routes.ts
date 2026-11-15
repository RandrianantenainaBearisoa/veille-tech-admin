import type { RouteRecordRaw } from 'vue-router';
import { index, ValidationPage, StatisticsPage } from '@/pages';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: index,
    children: [
      {
        path: '',
        component: ValidationPage,
      },
      {
        path: 'stats',
        component: StatisticsPage,
      },
    ],
  },
];

export default routes;
