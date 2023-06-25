<template>
	<van-form>
		<van-row gutter="24" v-for="item in tabbars" v-show="item.index==currIndex ? true:false">
			<van-col span="8" v-show='i18n.receipt[1]==1&&i18n.receipt[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/receipt" class="receipt"></a>
				<p>{{i18n.receipt[0]}}</p>
			</van-col>
			
			<!--new pos-->
			<van-col span="8" v-show='i18n.pickticket[1]==1&&i18n.pickticket[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/pickticket" class="pickticket"></a>
				<p>{{i18n.pickticket[0]}}</p>
			</van-col>

			<van-col span="8" v-show='i18n.picking[1]==1&&i18n.picking[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/picking" class="picking"></a>
				<p>{{i18n.picking[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.counting[1]==1&&i18n.counting[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/counting" class="counting"></a>
				<p>{{i18n.counting[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.putaway[1]==1&&i18n.putaway[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/putaway" class="putaway"></a>
				<p>{{i18n.putaway[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.replenishment[1]==1&&i18n.replenishment[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/replenishment" class="replenishment"></a>
				<p>{{i18n.replenishment[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.sampling[1]==1&&i18n.sampling[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/sampling" class="sampling"></a>
				<p>{{i18n.sampling[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.displacement[1]==1&&i18n.displacement[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/displacement" class="displacement"></a>
				<p>{{i18n.displacement[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.vehicleIn[1]==1&&i18n.vehicleIn[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/vehicleIn" class="vehicleIn"></a>
				<p>{{i18n.vehicleIn[0]}}</p>
			</van-col>

			<van-col span="8" v-show='i18n.autoReceipt[1]==1&&i18n.autoReceipt[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/autoReceipt" class="autoReceipt"></a>
				<p>{{i18n.autoReceipt[0]}}</p>
			</van-col>

			<van-col span="8" v-show='i18n.flatReceipt[1]==1&&i18n.flatReceipt[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/flatReceipt" class="flatReceipt"></a>
				<p>{{i18n.flatReceipt[0]}}</p>
			</van-col>
			<!--ping ku jian huo origi pos-->
			<van-col span="8" v-show='i18n.mvCount[1]==1&&i18n.mvCount[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/mvCount" class="mvCount"></a>
				<p>{{i18n.mvCount[0]}}</p>
			</van-col>

			<van-col span="8" v-show='i18n.flat[1]==1&&i18n.flat[2].indexOf(item.index)>-1'><a href="/#/pages/home/flat"
					class="flat"></a>
				<p>{{i18n.flat[0]}}</p>
			</van-col>

			<van-col span="8" v-show='i18n.counter[1]==1&&i18n.counter[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/counter" class="counter"></a>
				<p>{{i18n.counter[0]}}</p>
			</van-col>


			<van-col span="8" v-show='i18n.flatBatchReceipt[1]==1&&i18n.flatBatchReceipt[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/flatBatchReceipt" class="flatBatchReceipt"></a>
				<p>{{i18n.flatBatchReceipt[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.shipOrder[1]==1&&i18n.shipOrder[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/shipOrder" class="shipOrder"></a>
				<p>{{i18n.shipOrder[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.flatPicking[1]==1&&i18n.flatPicking[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/flatPicking" class="flatPicking"></a>
				<p>{{i18n.flatPicking[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.flatGroupDisk[1]==1&&i18n.flatGroupDisk[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/flatGroupDisk" class="flatGroupDisk"></a>
				<p>{{i18n.flatGroupDisk[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.batchReceipt[1]==1&&i18n.batchReceipt[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/batchReceipt" class="batchReceipt"></a>
				<p>{{i18n.batchReceipt[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.groupDisk[1]==1&&i18n.groupDisk[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/groupDisk" class="groupDisk"></a>
				<p>{{i18n.groupDisk[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.autoHandle[1]==1&&i18n.autoHandle[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/autoHandle" class="autoHandle"></a>
				<p>{{i18n.autoHandle[0]}}</p>
			</van-col>
			<van-col span="8" v-show='i18n.autoTransferHandle[1]==1&&i18n.autoTransferHandle[2].indexOf(item.index)>-1'>
				<a href="/#/pages/home/autoTransferHandle" class="autoTransferHandle"></a>
				<p>{{i18n.autoTransferHandle[0]}}</p>
			</van-col>

			<van-col span="8" v-show='i18n.relocation[1]==1&&i18n.relocation[2].indexOf(item.index)>-1'><a
					href="/#/pages/home/relocation" class="relocation"></a>
				<p>{{i18n.relocation[0]}}</p>
			</van-col>

			<van-col span="8" v-show='i18n.signout[1]==1&&i18n.signout[2].indexOf(item.index)>-1'><a
					href="/#/pages/index/login" class="signout" @click="onClick"></a>
				<p>{{i18n.signout[0]}}</p>
			</van-col>
		</van-row>

		<div class='bottom-block'></div>
		<van-tabbar v-model="active" class="active_tab">
			<van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(item.index,item.name)">
				<span :class="currIndex == index ? active:''">{{item.title}}</span>
				<template slot="icon" slot-scope="props">
					<img :src="props.active ? item.active : item.normal">
				</template>
			</van-tabbar-item>
		</van-tabbar>


	</van-form>

</template>

<script>
	import {
		Col,
		Row
	} from 'vant';

	export default {
		data() {
			return {
				active: 0,
				currIndex: 0,
				tabbars: this.$t('index').tabbars[1].filter(item => item.isShow == 1)
			}
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		activated: function() {
			uni.setNavigationBarTitle({
				title: this.$t('index').title
			});
		},
		methods: {
			onClick() {
				window.localStorage.setItem('userid', '');
				window.localStorage.setItem('username', '');
				window.localStorage.setItem('token', '');
				window.localStorage.setItem('expired', '');
			},
			tab(index, val) {
				this.currIndex = index;
				this.$router.push(val);
			}
		}
	}
</script>

<style>
	p {
		text-align: center;
		font-size: 13px;
		width: 70.38px
	}

	span {
		font-size: 13px;
		font-weight: 800;
	}

	.van-col {
		padding-left: 16px;
	}

	.receipt {
		background-image: url("/static/receipt.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.groupDisk {
		background-image: url("/static/groupDisk.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.picking {
		background-image: url("/static/picking.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.counting {
		background-image: url("/static/counting.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.putaway {
		background-image: url("/static/putaway.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.replenishment {
		background-image: url("/static/replenishment.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.sampling {
		background-image: url("/static/sampling.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.Displacement {
		background-image: url("/static/displacement.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.vehicleIn {
		background-image: url("/static/vehicleIn.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.counter {
		background-image: url("/static/counter.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.autoReceipt {
		background-image: url("/static/autoReceipt.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.flatPicking {
		background-image: url("/static/autoReceipt.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.flat {
		background-image: url("/static/flat.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.flatReceipt {
		background-image: url("/static/flatReceipt.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.autoHandle {
		background-image: url("/static/autoHandle.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.autoTransferHandle {
		background-image: url("/static/autoTransferHandle.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.flatBatchReceipt {
		background-image: url("/static/flatBatchReceipt.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.flatGroupDisk {
		background-image: url("/static/flatGroupDisk.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.pickticket {
		background-image: url("/static/pickticket.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.mvCount {
		background-image: url("/static/mvCount.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.shipOrder {
		background-image: url("/static/shipOrder.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.relocation {
		background-image: url("/static/relocation.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: 62.5rem;
	}

	.signout {
		background-image: url("/static/signout.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.van-col {
		margin-top: 2.5rem
	}

	.batchReceipt {
		background-image: url("/static/batchReceipt.png");
		background-repeat: no-repeat;
		line-height: 0;
		padding: 2.2rem;
		background-size: 4.5rem 4.5rem;
		display: inline-block;
		text-indent: -62.5rem;
	}

	.bottom-block {
		height: 5rem;
	}
</style>
