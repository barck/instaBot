
import IndexPage from '@/components/pages/Index';
import PageNotFound from '@/components/pages/404';
import Vacancies from '@/components/pages/Vacancies';
import DesignerPage from '@/components/pages/vacancies/DesignerPage';
import FrontendPage from '@/components/pages/vacancies/FrontendPage';
import BackendPage from '@/components/pages/vacancies/BackendPage';
import Contacts from '@/components/screens/Contacts';

export default [
  { path: '*', name: '404', component: PageNotFound },
  { path: '/', name: 'index', component: IndexPage },
  { path: '/vacancies', name: 'vacancies', component: Vacancies },
  { path: '/vacancie/designer', name: 'designer', component: DesignerPage },
  { path: '/vacancie/frontend', name: 'frontend', component: FrontendPage },
  { path: '/vacancie/backend', name: 'backend', component: BackendPage },
  { path: '/contacts', name: 'contacts', component: Contacts }
];
