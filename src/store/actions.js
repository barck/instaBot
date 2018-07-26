// import axios from 'axios';
// import api from '@/api';

// export default {
//   GET_SUBJECTS_MAPS({ commit }, name) {
//     return new Promise((resolve, reject) => {
//       axios
//         .get('http://api.vopros.ru/subject/index')
//         .then((r) => {
//           commit('SET_MAPS', { items: r.data.items, name });
//           resolve();
//         })
//         .catch(() => reject());
//     });
//   },
//   GET_RATES_MAPS({ commit }, name) {
//     return new Promise((resolve, reject) => {
//       api.get(api.url.rate)
//         .then((r) => {
//           commit('SET_MAPS', { items: r.items, name });
//           resolve();
//         })
//         .catch(() => reject());
//     });
//   },
//   GET_USER({ commit }) {
//     return new Promise((resolve, reject) => {
//       if (localStorage.getItem('token')) {
//         api.get(api.url.authorization.auth, api.setHeaders())
//           .then((r) => {
//             commit('LOGIN', r);
//             commit('AUTH_LOADING', false);
//             resolve();
//           })
//           .catch(() => reject());
//       } else {
//         resolve();
//       }
//     });
//   }
// };
