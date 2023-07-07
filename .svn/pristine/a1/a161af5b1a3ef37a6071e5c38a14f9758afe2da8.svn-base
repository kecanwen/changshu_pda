<template>
	<van-form @submit="onSubmit" style="margin: 3rem;">
		<van-cell-group v-show='i18n.startPosition[1]==1'>
			<van-field v-model="startPosition" :label="i18n.startPosition[0]" ref="startPosition" :rules="[{ required: true, message: i18n.startPositionMsg }]" required />
		</van-cell-group>
		<van-cell-group v-show='i18n.palletNo[1]==1'>
			<van-field v-model="palletNo" :label="i18n.palletNo[0]" ref="palletNo" @input="onChange" />
		</van-cell-group>
		<van-cell-group  v-show='i18n.endPosition[1]==1'>
			<van-select :label="i18n.endPosition[0]" :placeholder="i18n.dropdownMsg" v-model="endPosition" :rules="[{ required: true, message: i18n.endPositionMsg }]"
			 required :columns="endPositions" @defclick="endPositionOnChange" />
		</van-cell-group>
	
		<div style="margin: 50px;">
			<van-button :loading="loading" round block type="info" native-type="submit">
				{{i18n.submit}}
			</van-button>
		</div>
	
	</van-form>
</template>

<script>
	import select from '../../components/VanFieldSelectPicker.vue';
	
	import axios from 'axios';
	import {
		Toast
	} from 'vant';
	
	
	export default {
		components: {
			'van-select': select
		},
		data() {
			return {
				palletNo: '',
				startPosition: '',
				endPosition: '',
				endPositionCode:'',
				endPositions: [],
				endPositionList:[],
				loading: false
			}
		},
		computed: {
			i18n() {
				return this.$t('displacement')
			}
		},
		mounted:function(){
				uni.setNavigationBarTitle({
				            title:this.$t('displacement').title
				        });
				this.$nextTick(() => {
							this.$refs.startPosition.focus()
						});
						},
		onLoad() {
			this.getLocations();
		},
	
		methods: {
			endPositionOnChange(index){
				this.endPositionCode = this.endPositionList[index].xCode;
			},
			getLocations() {
				var _this = this;
	
				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/location', {
						condition: {
							loctype: {
								'=': 'PROCESS'
							},
							xstatus: {
								'=': 'ENABLED'
							},
						},
						pageNumber: 1,
						pageSize: 100,
						queryType: 2,
						sort: {
							XCode: false
						}
					})
					.then(function(response) {
						
						_this.endPositionList=response.data.data;
									
						response.data.data.map(e => {
							let value = e.xName;
							_this.endPositions.push(value);
					
						});
						
						if (_this.endPositionList.length > 0) {
							_this.endPositionCode = _this.endPositionList[0].xCode;
							_this.endPosition = _this.endPositionList[0].xName;
						}

					})
					.catch(function(error) { // 请求失败处理
					
						Toast({
							message: _this.$t('displacement').locationErrorMsg
						});
					});
			},
			onSubmit() {
	
				let _this = this;
				
				this.loading = true;
				
				axios.get(this.apiUrl.middleapiUrl + '/WCSService/GoPointToPoint', {params:{
						Pallet: this.palletNo,
						fromLocCode: this.startPosition,
						toLocCode: this.endPositionCode
					}})
					.then(function(response) {
						
						_this.loading = false;
	
						if (response.data == true) {
	
							Toast({
								message:  _this.$t('displacement').displacementSuccessMsg
							});
	
							_this.palletNo = '';
							_this.startPosition = '';
							_this.inventoryStatu = _this.endPositionCode;
						}
					})
					.catch(function(error) { // 请求失败处理		
					_this.loading = false;
						Toast({
							message:_this.$t('displacement').displacementErrorMsg
						});
					});
			},
		}
	
	}
</script>

<style>
</style>

