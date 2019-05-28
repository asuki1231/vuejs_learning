//子から親
Vue.component('comp-child',{
  template: '<button v-on:click="handleClick">Fire!</button>',
  methods:{
    handleClick: function(){
      this.$emit('childs-event');
    }
  }
});

new Vue({
  el:"#app",
  methods:{
    parentsMethod: function(){
      alert('Event Catch');
    }
  }
});

//1. 親テンプレートにイベントをハンドル
//2. 親コンポーネントにイベント発火時の処理を記載
//3. 子コンポーネントのテンプレートにイベントを発火させるためのDOMなどを仕込む
//4. $emitを使って自身のイベントを発火
