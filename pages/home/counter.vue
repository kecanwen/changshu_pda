<template>
	<van-form>
    <van-cell-group :title="i18n.warehousIn">
	<van-cell>
	<a href="/#/pages/home/counterRep" class="replenishment" type='button'>
      <van-col span="8" v-show='i18n.replenishment[1]==1'>
      	<p>{{i18n.replenishment[0]}}</p>
      </van-col>
	  </a>
	  <a href="/#/pages/home/counterReceipt" class="receipt">
      <van-col span="8" offset="8" v-show='i18n.receipt[1]==1'>
      	<p>{{i18n.receipt[0]}}</p>
      </van-col> 
	  </a>
	  </van-cell>
    </van-cell-group>
    <van-cell-group :title="i18n.warehousOut">
		<van-cell>
	<a href="/#/pages/home/counterDP" class="offAway">
     <van-col span="8" v-show='i18n.offAway[1]==1'>
    	<p>{{i18n.offAway[0]}}</p>
    </van-col>
	</a>
	<a href="/#/pages/home/picking" class="picking">
    <van-col span="8" offset="8" v-show='i18n.picking[1]==1'>
    	<p>{{i18n.picking[0]}}</p>
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
		      return this.$t('counter')  
		    }  
		  },
		activated:function(){
		  		uni.setNavigationBarTitle({
		  		            title:this.$t('counter').title
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
