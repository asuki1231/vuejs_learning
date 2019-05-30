var mixin = {
  created: function() {
    this.hello();
  },
  methods: {
    hello: function() {
      console.log('hello from mixin');
    }
  }
};

Vue.component('my-component-a', {
  mixins: [mixin],
  template: '<div class="my-component-a">component A</div>'
});

Vue.component('my-component-b', {
  mixins: [mixin],
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

// mixin
// 別々のコンポーネントで同じ処理をしている場合、共通化した処理を混ぜ込める
