Vue.component('my-component', {
  template:
    '<div class="my-component">\
  <p>Name: {{ name }} ATK. {{ atk }}</p>\
  <p>Name: <input v-model="localName"></p>\
  <p>ATK <input size="5" v-model.number="localatk"></p>\
  </div>',
  props: {
    name: String,
    atk: Number
  },
  computed: {
    localName: {
      get: function() {
        return this.name;
      },
      set: function(val) {
        this.$emit('update:name', val);
      }
    },
    localatk: {
      get: function() {
        return this.atk;
      },
      set: function(val) {
        this.$emit('update:atk', val);
      }
    }
  }
});

new Vue({
  el: '#app',
  data: {
    name: 'Bronze Sword',
    atk: 100
  }
});

//props down / event upの自動化
//双方向データバインディング
//いまいち一方通行のprops down / event up との使い分けが不明
