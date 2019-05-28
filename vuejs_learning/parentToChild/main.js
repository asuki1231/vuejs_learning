Vue.component('comp-child',{
  template: '<p>{{ val }}</p>',
  props: ['val']
});

new Vue({
  el: '#app',
  data:{
    message: 'testMessage'
  },
  created:function(){
    this.message = 'changed';
  }
});


//props down
//1.親テンプレートに属性でデータを持たせる
//2.子コンポーネントで1の属性名を指定
