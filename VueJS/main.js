var Vue = require('vue');
var hello = require("vue!./components/hellow.vue");

new Vue({
	el: '#mainContainer',
	components:{
		'hello': hello
	}

})