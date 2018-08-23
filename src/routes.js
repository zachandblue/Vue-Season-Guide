import Vue from 'vue';
import Router from 'vue-router';
import SeasonsList from './components/SeasonsList.vue';
import SeasonDetail from '@/components/SeasonDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Seasons List',
      component: SeasonsList
    },
    {
      path: '/season/:id',
      name: 'Season Detail',
      component: SeasonDetail
    }
  ]
});
