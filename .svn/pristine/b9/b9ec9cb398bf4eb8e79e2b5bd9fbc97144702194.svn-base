<template>
    <view>
        <van-form @submit="onSubmit">
            <van-cell-group>
                <van-field v-model="form.PalletNo" label="托盘号"/>
            </van-cell-group>

            <van-cell-group>
               <!-- <van-field v-model="scanCode" label="条码"  @keyup.enter.native="scanMaterial($event)"/>-->
                <van-field v-model="scanCode" label="条码"  @input.enter.native="scanMaterial($event)"/>
            </van-cell-group>

            <van-cell-group>
                <van-select label="入库类型"
                            v-model="form.ReceiveType"
                            :columns="inventoryStatusList">
                </van-select>
            </van-cell-group>

            <div style="margin: 50px;">
                <van-button :loading="loading" round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
        <uni-table border stripe emptyText="暂无更多数据">
            <uni-tr>
                <uni-th align="center">物料名称</uni-th>
                <uni-th align="center">批次号</uni-th>
                <uni-th align="center">收货数量</uni-th>
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

  export default {
    name: "receiveOrder",
    components: {
      'van-select': select,
      uniTable,
      uniTr,
      uniTh,
      uniTd
    },
    data() {
      return {
        form: {
          PalletNo: '',
          ReceiveType: '普通入库',
          items: [],
        },
        scanCode:'',
        inventoryStatusList: ['普通入库', '特殊入库', '空托盘入库'],
        loading: false,
        columns: [
          {key: 'materialsCode'},
          {key: 'batchNo'},
          {key: 'number'},
          {key:'delete'}
        ]
      }
    },
    methods: {
      deleteFn(item,index){
        let list = this.form.items.filter((ite,idx)=>{
          return idx !== index
        })
        this.form.items = list;
      },
      //监听键盘事件 拿到扫码出来的字符串
      scanMaterial(code){
        let scanCode  = this.scanCode;
        /**
         * materialsCode 物料码
         * batchNo 批次号
         * unit 单包重量
         * number 整托重量就是收货数量
         * produceDate 生产日期
         * validityDate 有效期
         * size 尺寸
         * */
        let [materialsCode,batchNo,unit,number,produceDate,validityDate,size] = scanCode.split('/');
        this.form.items.push({
          materialsCode,batchNo,unit,number,produceDate,validityDate,size
        });
		this.scanCode = '';
      },
      initFn() {
        this.form = {
          PalletNo: '',
          ReceiveType: '普通入库',
          items: [],
        }
      },
      onSubmit() {
        this.loading = true;
        let _this = this;
        axios.post(this.apiUrl.apiUrl + '/ReceiveOrder/Add0rUpdate', {..._this.form
        }).then(res=>{
          this.loading = false;
          if(res.data.code === 200){
			  debugger
            this.$toast.loading({
              message:res.data.msg || '新增成功'
            });
          }else{
            this.$toast.loading({
              message:res.data.msg || '新增失败'
            });
          }
        }).finally(()=>{
          this.initFn()
        })
      }
      }
  }
</script>

<style scoped>

</style>
