import type { RouteRecordRaw } from 'vue-router';
import { index, ValidationPage, StatisticsPage, HomePage } from '@/pages';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: index,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'validation',
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
