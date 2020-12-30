import Vue from 'vue';
import App from './App';

import {
  MdToolbar,
  MdContent,
  MdTable,
  MdCard,
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdToolbar);
Vue.use(MdContent);
Vue.use(MdTable);
Vue.use(MdCard);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});