import { defineConfig } from 'umi';
import routes from './src/routes'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      'target': 'https://wihe8kqc.lc-cn-n1-shared.com', //leanCloud BaseUrl
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
  // mock: false,
  theme: {
    // "@select-item-selected-font-weight": "none",
    // "@select-item-selected-color": "#1890FF",
    // "@select-item-selected-bg": "#FFFFFF",
    // "@select-item-active-bg": "#F9F9F9",

  },
  routes: routes,
  fastRefresh: {},
});
