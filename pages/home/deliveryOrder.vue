<template>
    <view>
        <van-form @submit="onSubmit">
            <van-cell-group>
                <van-field v-model="form.Destination" label="出库口"  @input.enter.native="scanMaterial($event)"/>
            </van-cell-group>
            <van-cell-group>
                <van-select label="单据类型"
                            v-model="form.WaveType"
                            :columns="orderList">
                </van-select>
            </van-cell-group>
            <van-cell-group>
                <van-select label="物料信息"
                            v-model="form.materialsName"
                            @defclick="getCheckResult2"
                            :columns="materialsList">
                </van-select>
            </van-cell-group>
            <van-cell-group>
                <van-field v-model="form.SumNumber" label="库存总数" disabled/>
            </van-cell-group>
            <van-cell-group>
                <van-field
                    label="出库数量"
                    readonly
                    clickable
                    :value="form.Number"
                    @touchstart.native.stop="showNumber = true"
                />
                <van-number-keyboard
                    v-model="form.Number"
                    :show="showNumber"
                    @blur="checkSomeRule"
                />
            </van-cell-group>
            <div style="margin: 50px;">
                <van-button :loading="loading" round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
        <uni-table border stripe emptyText="暂无更多数据">
            <uni-tr>
                <uni-th align="center">库位</uni-th>
                <uni-th align="center">物料代码</uni-th>
                <uni-th align="center">生产日期</uni-th>
                <uni-th align="center">数量</uni-th>
                <uni-th align="center">操作</uni-th>
            </uni-tr>
            <uni-tr v-for="(item,index) in form.items" :key="item.materialsCode">
                <uni-td align="center" v-for="ite_child in columns" :key="ite_child.key">
                    <span v-if="ite_child.key=='delete'" style="color: #ce3c39" @click="deleteFn(item,index)">删除</span>
                    <span v-else >{{item[ite_child.key]}}</span>
                </uni-td>
            </uni-tr>
        </uni-table>
    </view>
</template>

<script>
import select from '../../components/VanFieldSelectPicker.vue';
import uniTable from '../../components/uni-table/components/uni-table/uni-table';
import uniTr from '../../components/uni-table/components/uni-tr/uni-tr';
import uniTh from '../../components/uni-table/components/uni-th/uni-th';
import uniTd from '../../components/uni-table/components/uni-td/uni-td';
import axios from 'axios';
import deliveryService from "../../server/deliveryOrder";
//import {Toast} from "vant";

export default {
    name: "deliveryOrder",
    components: {
        'van-select': select,
        uniTable,
        uniTr,
        uniTh,
        uniTd
    },
    data() {
        return {
            showNumber:0,
            form: {
                Destination: '',//出库口
                WaveType: '普通出库',//单据类型
                Number:'',//数量
                materialsName:'',//物料信息
                materialsInstance:{},//物料  实体
                SumNumber:'',
                items: [],
            },
            scanCode:'',
            inventoryStatusList: [],
            materialsList:[],
            orderList:['普通出库','特殊出库'],
            loading: false,
            columns: [
                {key: 'CurrentLocation'},
                {key: 'MaterialCode'},
                {key: 'ProduceDate'},
                {key:'Number'},
                {key:'delete'}
            ]
        }
    },
    methods: {
        async checkSomeRule(key){
            this.showNumber = false
            if(Number(this.form.Number) > Number(this.form.SumNumber)){
                Toast({
                    message:'出库数量不能大于库存总数'
                });
                this.form.Number = '';
            }else{
                const { list } = await deliveryService.GetUnitLoadListApi(this.form)
                this.form.items = list;
            }
        },
        scanMaterial(code){

        },
        getCheckResult2(index){
            let instance = this.materialsList[index];
            let {materialsName,Id,materialsCode,SumNumber} = instance;
            this.form = {
                ...this.form,
                materialsInstance:instance,
                SumNumber,
                materialsName,
                materialsCode,
                Id,
                Number:''
            }
        },
        deleteFn(item,index){
            let list = this.form.items.filter((ite,idx)=>{
                return idx !== index
            })
            this.form.items = list;
        },
        //监听键盘事件 拿到扫码出来的字符串
        initFn() {
            this.getOutList();
            this.getMaterialList();
            this.form = {
                PalletNo: '',
                WaveType: '普通出库',
                items: [],
            }
        },
        async getOutList(){
            const { list } = await deliveryService.getOutWareTypeListApi();
            this.inventoryStatusList = list.map(item=>{
                return {
                    ...item,
                    text:item.Name
                }
            });
        },
        async getMaterialList(){
          const { list } = await deliveryService.getMaterialListApi({materialsStr :this.form.materialsName});
          this.materialsList = list.map(item=>{
              return {
                  ...item,
                  text:item.materialsName
              }
          })
        },
        async onSubmit() {
			this.loading = true;
			let _this = this;
			axios.post(this.apiUrl.apiUrl + '/Delivery/Add0rUpdate', {..._this.form
			}).then(res=>{
			  this.loading = false;
			  if(res.data.code === 200){
				  debugger
			    this.$toast.loading({
			      message:res.data.msg || '新增成功',
				  
			    });
				this.initFn();
			  }else{
			    this.$toast.loading({
			      message:res.data.msg || '新增失败'
			    });
			  }
			}).finally(()=>{
			  
			})
            //const { msg } = await deliveryService.Add0rUpdateApi(this.form);
            //alert(msg)
        }
    },
    created(){
        this.initFn()
    }
}
</script>

<style scoped>

</style>
