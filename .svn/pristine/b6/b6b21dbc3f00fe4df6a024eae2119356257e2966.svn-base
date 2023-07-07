<template>
	<van-form @submit="onSubmit" style="margin: 3rem;">
		<van-cell-group v-show='i18n.length[1]==1' required>
			<van-field v-model="length" :label="i18n.length[0]" @input="lengthOnChange" />
		</van-cell-group>
		<van-cell-group v-show='i18n.type[1]==1'>
			<van-select :label="i18n.type[0]" :placeholder="i18n.typeMsg" v-model="type" :columns="types" @defclick="onChange"/>
		</van-cell-group>
		
		<van-cell-group v-show='i18n.height[1]==1' required>
			<van-select :label="i18n.height[0]" :placeholder="i18n.heightMsg" v-model="height" :columns="heights"/>
		</van-cell-group>
		
		<van-cell-group v-show='i18n.code[1]==1'>
			<van-field v-model="barcode" :label="i18n.code[0]" :readonly="status ? 'readonly' : false" @input="getMaterial" />
			<van-field autosize v-model="material" readonly />
		</van-cell-group>
		<van-cell-group v-show='i18n.quantity[1]==1'>
			<van-field v-model="quantity" :label="i18n.quantity[0]" :readonly="status ? false : 'readonly'" />
		</van-cell-group>
		<van-cell-group v-show='i18n.location[1]==1'>
			<van-select :label="i18n.location[0]" :placeholder="i18n.typeMsg" v-model="dock" :rules="[{ required: true, message:i18n.locationMsg }]"
			 required :columns="docks" @defclick="receiveLocOnChange" />
		</van-cell-group>
		<div style="margin: 16px;">
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
				type: this.$t('replenish').types[0],
				types: this.$t('replenish').types,
				barcode: '',
				materialCode: '',
				material: '',
				quantity: '',
				dockId: '',
				dock: '',
				docks: [],
				dockList: [],
				loading: false,
				status: false,
				length:'',
				height:'',
				heights:this.$t('replenish').heights
			}
		},
		computed: {
			i18n() {
				return this.$t('replenish')
			}
		},
		mounted:function(){
				uni.setNavigationBarTitle({
				            title:this.$t('replenish').title
				        });
						},
		onLoad() {
			this.getLocations();
		},
		watch:{
		        
		 length:function (str) {
		       
		        if (str.trim().length!==0){
		            this.debounce(this.lengthOnChange,2000);
		         }
				}
			},
		methods: {
			getLocations() {
				var _this = this;

				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/Dock', {
						condition: {
							isShip: {
								'=': 'Y'
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

						_this.dockList = response.data.data;

						_this.docks = [];

						response.data.data.map(e => {
							let value = e.xCode;
							_this.docks.push(value);

						});

						if (_this.dockList.length > 0) {
							_this.dockId = _this.dockList[0].id;
							_this.dock = _this.dockList[0].xCode;
						}


					})
					.catch(function(error) { // 请求失败处理

						Toast({
							message: _this.$t('replenish').locationErrorMsg
						});
					});
			},
			onChange(index) {
				if (this.types[index] ==  this.$t('replenish').types[0]) {
					this.quantity = '';
					this.status = false;

				} else {
					this.barcode = '';
					this.materialCode = '';
					this.material = '';
					this.quantity = 1;
					this.status = true;
				}

			},
			getMaterial() {

				var _this = this;
				
				let input={
						condition: {
							xCode: {
								'=': this.barcode
							},
						},
						pageNumber: 1,
						pageSize: 1,
						queryType: 2
					};
				
			    if(this.$t('replenish').isBarcode!=undefined&&this.$t('replenish').isBarcode==true)
				{
					input={
						condition: {
							barcode: {
								'=': this.barcode
							},
						},
						pageNumber: 1,
						pageSize: 1,
						queryType: 2
					};
				}
				
				axios.post(this.apiUrl.apiUrl + '/api/app/queryManager/Material', input)
					.then(function(response) {

						if (response.data.data.length > 0) {
							_this.materialCode = response.data.data[0].xCode;
							_this.material = response.data.data[0].xCode + ' ' + response.data.data[0].xName + ' ' + response.data.data[0].spec
						}
					})
					.catch(function(error) { // 请求失败处理
						Toast({
							message: _this.$t('replenish').materialErrorMsg
						});
					});
			},
			receiveLocOnChange(index) {
			
				this.dockId = this.dockList[index].id;
			},
			onSubmit() {
				this.loading = true;
				let _this = this;
                
				if(this.length!='')
				{
					if((Number(this.length)+this.$t('replenish').length[4])>(this.$t('replenish').length[3]))
					{
						this.loading = true;	
						
						Toast({
							message: _this.$t('replenish').lengthErrorMsg
						});
						
						return;
					}
				}
				
				
				let code=this.$t('replenish').typeCodes[this.types.indexOf(this.type)];
				let materialCode = code=="material"?this.materialCode:code;
				
				//var materialCode = this.type == '空托' ? '0000' : this.type == '铁笼' ? '1111' : this.materialCode;
				
				let input={
						materialCode: materialCode,
						quantity: code != 'material'? this.quantity : 0,
						toDockId: this.dockId,
					}
				
				if(this.height!='')
				{
					input['materialPropertyDto']={m_Str1:this.$t('replenish').heightCodes[this.heights.indexOf(this.height)]};
				}
				
				if(this.$t('replenish').isGetDDJ)
				{
					
					
					axios.get(this.apiUrl.middleapiUrl + '/WCSService/GetLanyWay')
						.then(function(response) {
							
							input['materialPropertyDto']={m_Str1:_this.$t('replenish').heightCodes[_this.heights.indexOf(_this.height)],m_Str2:response.data};	
							
							let url='/api/app/autoOutboundManager/autoShip';
							
							if(code== 'material')
							{
								url='/api/app/autoOutboundManager/replenishment';
							}
							
							axios.post(_this.apiUrl.apiUrl + url,input)
									.then(function(response) {
							
										_this.loading = false;
							
											if (code != 'material') {
												_this.barcode = '';
												_this.materialCode = '';
												_this.material = '';
												_this.quantity = 1;
												_this.status = true;
											} else {
												_this.quantity = '';
												_this.status = false;
											}
											if((code!='material'&&response.data==true)||(code=='material'&&response.data.length>0))
											{
											Toast({
												message: _this.$t('replenish').replenishSuccessMsg
											});
											
											_this.length='';
											_this.height='';
											}
							
									})
									.catch(function(error) { // 请求失败处理
										_this.loading = false;
										Toast({
											message: _this.$t('replenish').replenishErrorMsg
										});
									});
								})
								.catch(function(error) { // 请求失败处理
									_this.loading = false;
									Toast({
										message: _this.$t('replenish').lanyErrorMsg
									});
								});
				}else{
				
				
				let url='/api/app/autoOutboundManager/autoShip';
				
				if(code== 'material')
				{
					url='/api/app/autoOutboundManager/replenishment';
				}
			   
			axios.post(this.apiUrl.apiUrl + url,input)
					.then(function(response) {

						_this.loading = false;
			
							if (code != 'material') {
								_this.barcode = '';
								_this.materialCode = '';
								_this.material = '';
								_this.quantity = 1;
								_this.status = true;
							} else {
								_this.quantity = '';
								_this.status = false;
							}
							if((code!='material'&&response.data==true)||(code=='material'&&response.data.length>0))
							{
							Toast({
								message: _this.$t('replenish').replenishSuccessMsg
							});
							
							_this.length='';
							_this.height='';
							}

					})
					.catch(function(error) { // 请求失败处理
						_this.loading = false;
						Toast({
							message: _this.$t('replenish').replenishErrorMsg
						});
					});
				
				}
			},
			debounce:function(fn,wait){
			        if (this.fun!==null){
			            clearTimeout(this.fun)
			        }
			        this.fun = setTimeout(fn,wait)
			    },
			lengthOnChange(){
					if((Number(this.length)+this.$t('replenish').length[4])<=(this.$t('replenish').length[2]))
					{
						this.materialCode=this.$t('replenish').typeCodes[1];
						this.material=this.types[1];
						this.type=this.types[1];
						this.onChange();
						this.heights=this.$t('replenish').heights;
					}else if((Number(this.length)+this.$t('replenish').length[4])<=(this.$t('replenish').length[3])){
						this.materialCode=this.$t('replenish').typeCodes[2];
						this.material=this.types[2];
						this.type=this.types[2];
						this.onChange();
						this.heights=this.$t('replenish').heights2;
					}else
					{
						this.type='';
					}
				}
		}
	}
</script>

<style>
</style>
