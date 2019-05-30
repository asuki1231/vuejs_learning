Vue.component('t-comp', {
  template: '<p class="t-comp">{{ hoge }}</p>',
  props: {
    hoge: String
  }
});

new Vue({
  el: '#app',
  data: {
    hoge: 'test'
  }
});
