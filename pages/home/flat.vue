<template>
	<van-form>
    <van-cell-group :title="i18n.warehousIn">
	<van-cell>
	<a href="/#/pages/home/flatReceipt" class="flatReceipt" type='button'>
      <van-col span="10" v-show='i18n.flatReceipt[1]==1'>
      	<p>{{i18n.flatReceipt[0]}}</p>
      </van-col>
	  </a>
	  <a href="/#/pages/home/flatBatchReceipt" class="flatBatchReceipt" type='button'>
	    <van-col span="10" offset="4" v-show='i18n.flatBatchReceipt[1]==1'>
	    	<p>{{i18n.flatBatchReceipt[0]}}</p>
	    </van-col>
	    </a>
	  </van-cell>
	  <van-cell>
	  <a href="/#/pages/home/flatGroupDisk" class="flatGroupDisk" type='button'>
	    <van-col span="10" v-show='i18n.flatGroupDisk[1]==1'>
	    	<p>{{i18n.flatGroupDisk[0]}}</p>
	    </van-col>
	    </a>
	    </van-cell>
	 </van-cell-group>
	<van-cell-group :title="i18n.warehousOut">
	<van-cell>
	<a href="/#/pages/home/pickticket" class="pickticket">
	 <van-col span="10" v-show='i18n.pickticket[1]==1'>
		<p>{{i18n.pickticket[0]}}</p>
	</van-col>
	</a>
	<a href="/#/pages/home/mvCount" class="mvCount">
	<van-col span="10" offset="4" v-show='i18n.mvCount[1]==1'>
		<p>{{i18n.mvCount[0]}}</p>
	</van-col>
	</a>
	</van-cell>
		<van-cell>
	  <a href="/#/pages/home/flatPicking" class="flatPicking" type='button'>
	    <van-col span="10" v-show='i18n.flatPicking[1]==1'>
	    	<p>{{i18n.flatPicking[0]}}</p>
	    </van-col>
	    </a>
	    </van-cell>
    </van-cell-group>
   
	</van-form>
</template>

<script>
	
	export default {
		data() {
			return {
				
			}
		},
		computed: {
		    i18n () {  
		      return this.$t('flat')  
		    }  
		  },
		activated:function(){
		  		uni.setNavigationBarTitle({
		  		            title:this.$t('flat').title
		  		        });
		  				},
		methods: {

		}
	}
</script>

<style>
	a{
		
	color: #1989fa;
	
		                        
	},
	p{
		margin: 20px;
		font-size:17px;
	}
	.van-cell{
		margin: 20px;
	}
</style>
