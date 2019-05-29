Vue.component('my-component-a', {
  template: '<div class="my-component-a">component A</div>'
});

Vue.component('my-component-b', {
  template: '<div class="my-component-b">component B</div>'
});

new Vue({
  el: '#app',
  data: {
    componentTypes: ['my-component-a', 'my-component-b'],
    current: 0
  },
  computed: {
    component: function() {
      //currentと一致するindexのコンポーネントに切り替える
      return this.componentTypes[this.current];
    }
  }
});
