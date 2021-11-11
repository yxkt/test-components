import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    "select-item-selected-font-weight": "none",
    "select-item-selected-color": "#1890FF",
    "select-item-selected-bg": "#FFFFFF",
    "select-item-active-bg": "#F9F9F9",
  },
  routes: [
    {
      path: '/login',
      component: './login',
      name: '登录',
    },


    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
          title: 'JSON格式化',
          exact: true,
        },
        {
          path: '/xiazai',
          component: '@/pages/xiazai',
          exact: true,
          title: '下载功能',
        },
        {
          path: '/upload',
          component: '@/pages/upload',
          exact: true,
          title: '上传功能',
          wrappers: [
            '@/wrappers/auth',
          ],
        },
        {
          path: '/testModal',
          component: '@/pages/testModal',
          exact: true,
          title: '模态框复用',
        },
        {
          path: '/testStyle',
          component: '@/pages/testStyle',
          exact: true,
          title: '测试样式',
        },

        {
          path: '/403',
          component: './403',
        },
        {
          component: './404',
        },
      ]
    },


  ],
  fastRefresh: {},
});
