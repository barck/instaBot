import routes from './routes';

export default {
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
};
