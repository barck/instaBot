
import IndexPage from '@/components/pages/Index';
import PageNotFound from '@/components/pages/404';
import Vacancies from '@/components/pages/Vacancies';
import TesterPage from '@/components/pages/vacancies/TesterPage';
import FrontendPage from '@/components/pages/vacancies/FrontendPage';
import BackendPage from '@/components/pages/vacancies/BackendPage';
import Hr from '@/components/pages/vacancies/Hr';
import Contacts from '@/components/screens/Contacts';

export default [
  { path: '*', name: '404', component: PageNotFound },
  { path: '/', name: 'index', component: IndexPage },
  { path: '/vacancies', name: 'vacancies', component: Vacancies },
  { path: '/vacancie/tester', name: 'tester', component: TesterPage },
  { path: '/vacancie/frontend', name: 'frontend', component: FrontendPage },
  { path: '/vacancie/backend', name: 'backend', component: BackendPage },
  { path: '/vacancie/hr', name: 'hr', component: Hr },
  { path: '/contacts', name: 'contacts', component: Contacts }
];
