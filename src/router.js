import {createRouter, createWebHashHistory} from 'vue-router';
import ComponentToTest from './components/ComponentToTest.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: ComponentToTest,
    },
  ],
});

