import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const chat: AppRouteModule = {
  path: '/chat',
  name: 'Chat',
  component: LAYOUT,
  redirect: '/chat/add-user',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: 'chat',
    orderNo: 100000,
  },
  children: [
    {
      path: 'add-user',
      name: 'add-user',
      component: () => import('/@/views/chart/AddUser.vue'),
      meta: {
        title: '增加用户',
      },
    },
  ],
};

export default chat;
