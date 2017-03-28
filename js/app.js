const app = new Vue({
	el:	'#app',
	data: {
		keyword: 'javascript',
		onOff: true
	},
	methods: {
		toggleOnOff: function() {
			this.onOff = !this.onOff;
		}
	}
});