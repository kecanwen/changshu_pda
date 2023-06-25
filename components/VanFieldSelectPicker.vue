<template>
	<div>
		<van-field v-model="result" v-bind="$attrs" readonly is-link @click="show = !show" />
		<van-popup v-model="show" position="bottom">
			<van-picker :columns="columns" show-toolbar :title="$attrs.label" @cancel="show = !show" @confirm="onConfirm" />
		</van-popup>
	</div>
</template>

<script>
	
	 import { Locale } from 'vant';
	
	export default {
		model: {
			prop: "selectValue"
		},
		props: {
			columns: {
				type: Array
			},
			selectValue: {
				type: String
			}
		},
		data() {
			return {
				show: false,
				result: this.selectValue
			};
		},
		mounted:function(){
				const messages = {
				   'zh-CN': {
				     vanPicker: {
				       confirm: this.$t('vanPicker').confirm,
				 	   cancel:this.$t('vanPicker').cancel,
				     },
				   },
				 };
				
				Locale.add(messages);
		},
		methods: {
			onConfirm(value, index) {

				this.result = value;
				this.show = !this.show;

				this.$emit('defclick', index);
			},
		},
		watch: {
			selectValue: function(newVal) {
				this.result = newVal;
			},
			result(newVal) {
				this.$emit("input", newVal);
			}
		},
	};
</script>

<style>
	@import 'vant/lib/index.css';
</style>
