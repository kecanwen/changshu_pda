<template>
    <view>
        <van-form @submit="onSubmit">
            <van-cell-group>
                <van-field v-model="form.BracketCode " label="栈板号"  @input.enter.native="scanMaterial($event)"/>
            </van-cell-group>

            <van-cell-group>
                <van-field v-model="form.PalletNo" label="托盘号" @input.enter.native="scanMaterial2($event)"/>
            </van-cell-group>

            <van-cell-group>
                <van-field v-model="form.Number" label="数量"/>
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
                <uni-th align="center">生产日期</uni-th>
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
                BracketCode:'',
                PalletNo: '',
                Number:'',
                items: [],
            },
            scanCode:'',
            inventoryStatusList: ['普通入库', '特殊入库', '空托盘入库'],
            loading: false,
            columns: [
                {key: 'materialsCode'},
                {key: 'produceDate'},
                {key: 'delete'}
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
        //监听扫描事件 拿到扫码出来的字符串 去后端请求接口
        scanMaterial(code){
            axios.get(this.apiUrl.apiUrl + `/ReceiveOrder/FinishForMes?BracketCode=${this.form.BracketCode}`).then(res=>{
                this.form.items = res.data && res.data.data;
            })
        },
        scanMaterial2(code){
           //this.PalletNo = code;
        },
        initFn() {
            this.form = {
                BracketCode:'',
                PalletNo: '',
                Number:'',
                items: [],
            }
        },
        onSubmit() {
            this.loading = true;
            let _this = this;
            axios.post(this.apiUrl.apiUrl + '/ReceiveOrder/FinishPalletTkIn', {..._this.form
            }).then(res=>{
                this.loading = false;
                if(res.data.code === 200){
                    this.$toast({
                        message:res.data.msg || '新增成功'
                    });
                }else{
                    this.$toast({
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
