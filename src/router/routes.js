
import IndexPage from '@/components/pages/Index';
import PageNotFound from '@/components/pages/404';

export default [
  { path: '*', name: '404', component: PageNotFound },
  { path: '/', name: 'index', component: IndexPage }
];
