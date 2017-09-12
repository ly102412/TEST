<template>

    <section>
        <!--工具条-->
        <div class="selectBox" align="center">
            <el-row type="flex" class="row-bg " style="width: 100%; min-width:1229px;height: 65px; background: #f2f2f2;padding-top: 15px;margin-bottom: 10px;margin-top: 10px;" justify="space-around" :gutter="20">
                <el-col :span="24">
                    <div class="grid-content  text-regular " align="center">

                        <el-col :span="4" :push="2">
                            <el-input style="width: 193px;" v-model="batch_name" placeholder="输入兑换码名称"></el-input>
                        </el-col>
                        <el-col :span="2" :push="2">
                            <p style="text-align: right;
    line-height: 0.5rem;"> 开始时间:</p>
                        </el-col>
                        <el-col :span="4" :push="2">
                            <el-date-picker
                                    v-model="startTime"
                                    type="datetime"
                                    placeholder="选择日期时间">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4" :push="2">
                            <el-date-picker
                                    v-model="endTime"
                                    type="datetime"
                                    placeholder="选择日期时间">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="3" :push="2">
                            <el-button class="blue-btn" @click="search" v-loading.fullscreen.lock="fullscreenLoading">
                                查找
                            </el-button>
                        </el-col>
                        <el-col :span="5":pull="1" style="float: right">
                            <el-button type="success" @click="dialogFormVisible = true">创建流量兑换码</el-button>
                        </el-col>
                    </div>
                </el-col>
            </el-row>
            <el-dialog title="新增流量兑换码"  class="dialog-titel " :visible.sync="dialogFormVisible" size="small">
                <el-form :model="form" >
                </el-form>
                <el-form :model="coupon" :rules="rules" ref="coupon" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="兑换码名称:" prop="coupon_name">
                        <el-input v-model="coupon.coupon_name"></el-input>
                    </el-form-item>
                    <el-form-item label="兑换码数量:" prop="sum_number">
                        <el-input v-model.number="coupon.sum_number"></el-input>
                    </el-form-item>
                    <el-form-item label="兑换码面值:" prop="package_size" class="ccvalue">
                        <el-input v-model.number="coupon.package_size"></el-input>
                        <p>M</p>
                    </el-form-item>
                    <el-form-item label="兑换码有效期:" required>
                        <el-col :span="11">
                            <el-form-item prop="use_start_time">
                                <el-date-picker type="datetime" placeholder="选择日期时间" v-model="coupon.use_start_time" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="use_end_time">
                                <el-date-picker type="datetime" placeholder="选择日期时间" v-model="coupon.use_end_time" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false;resetForm('coupon')" style="float: left">取 消</el-button>
                    <el-button type="primary" @click="submitForm('coupon')">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <div class="table ">
            <el-table
                    :data="dataArr"
                    height=""
                    border
                    style="width: 1091px;margin: 0 auto;" >
                <el-table-column
                        prop="id"
                        label="批次号"
                        width="80"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="coupon_name"
                        label="兑换码名称"
                        width="110"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="sum_number"
                        label="兑换码数量（个）"
                        width="80"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="package_size"
                        label="兑换码面值（M）"
                        width="100"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop=""
                        label="总流量（M）"
                        width="130"
                        align="center">
                    <template scope="scope">
                        {{scope.row.sum_number*scope.row.package_size}}M
                    </template>
                </el-table-column>
                <el-table-column
                        prop="coupon_num"
                        label="已兑换数量（个）"
                        width="80"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="use_start_time"
                        label="开始时间"
                        width="120"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="use_end_time"
                        label="结束时间"
                        width="120"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="activity"
                        label="状态"
                        width="80"
                        align="center">
                    <template scope="scope">
                        {{scope.row.activity?'已上架':'已下架'}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="noData"
                        label="操作"
                        width="80"
                        align="center" >
                    <template scope="scope">
                        <el-button  type="text" :class="scope.row.activity?'colorRed':'colorGreen'"
                                   @click="clearingClick(scope.row)" size="small">
                            {{scope.row.activity?'下架':'上架'}}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        prop=""
                        label=""
                        width="110"
                        align="center">
                    <template scope="scope">
                        <el-button type="text" @click="handleClick(scope.$index, scope.row)" size="small">查看兑换码
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <!-- <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button> -->
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="page_size"  :total="total" style="float:right; margin-right: 13%">
            </el-pagination>
        </el-col>
    </section>
</template>

<script>
  import NProgress from 'nprogress';
  import {getRedeemCodeList,getOnlineOffline,createCoupon} from '../../api/api';
  import moment from 'moment';

  export default {
    data() {
      var checkNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入数字值'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入整数'));
          }else {
            if(value<1){
              callback(new Error('请输入正整数'));
            }else{
              callback();
            }
          }
        }, 1000);
      };
      return {
        rules: {
          coupon_name: [
            { required: true, message: '请输入兑换码名称', trigger: 'blur' },
            { max: 50, message: '最多 50 个字符', trigger: 'blur' }
          ],
          sum_number: [
            { required: true,validator: checkNum, trigger: 'blur' }
          ],
          package_size: [
            { required: true, validator:checkNum, trigger: 'blur' }
          ],
          use_start_time: [
            { type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }
          ],
          use_end_time: [
            { type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }
          ],
        },
        dataArr:[],// 列表
        staff_name:'',
        noData:'aa',
        startTime:'',
        endTime:'',
        fullscreenLoading:'',
        detailsArr:[],
        batch_name: '', // 批次号
        dialogVisible: true,// 控制弹出层显示隐藏
        filters: {
          name: ''
        },
        coupon: {
          coupon_name:'',
          package_size:'',
          use_start_time:'',
          use_end_time:'',
          sum_number:'',
        },
        total: 0,
        page_number: 1,
        page_size: 10,
        listLoading: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '522px'
      }

    },
    methods: {
      handleCurrentChange: function (val) {
        this.page_number = val;
        console.log(this.page_number)
        this.inquireTable();
      },
      search(){ // 搜索
        if(this.startTime){
          this.start_time = moment(this.startTime).format("YYYY-MM-DD HH:mm:ss");
        }else{
          this.start_time = ''
        }
        if(this.endTime){
          this.end_time = moment(this.endTime).format("YYYY-MM-DD HH:mm:ss");
        }else{
          this.end_time = ''
        }
        let startTimeNum = moment(this.startTime).format("YYYYMMDDHHmmss");
        let endTimeNum = moment(this.endTime).format("YYYYMMDDHHmmss");
        console.log(endTimeNum+" "+startTimeNum)
        if(startTimeNum&&endTimeNum&&endTimeNum-startTimeNum<0){
          this.$message({
            showClose: true,
            message: '开始时间不能大于结束时间',
            type: 'warning'
          });
          return
        }
        this.fullscreenLoading = true;
        this.inquireTable()
      },
      inquireTable(){ // 查询表单
        let _this = this;
        let params = {
          page_number: this.page_number,
          page_size: this.page_size,
          id:this.batch_name, // 售卡单号
          start_time : this.start_time ,
          end_time : this.end_time
        };
        NProgress.start();
        getRedeemCodeList(params).then((res) => {
          _this.total = res.data.data.rows || 0;
          _this.closeFullScreen();
          NProgress.done();
          this.dataArr = res.data.data.list
//          console.log(res.data)
        });
      },
      submitForm(formName) { // 新增兑换卡验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.createRedeemCard();
            console.log('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) { // 清空表单
        this.$refs[formName].resetFields();
      },
      createRedeemCard(){ // 新增兑换卡
        let startTimeNum = moment(this.coupon.use_start_time).format("YYYYMMDDHHmmss");
        let endTimeNum = moment(this.coupon.use_end_time).format("YYYYMMDDHHmmss");
        console.log(endTimeNum+" "+startTimeNum)
        if(startTimeNum&&endTimeNum&&endTimeNum-startTimeNum<0){
          this.$message({
            showClose: true,
            message: '开始时间不能大于结束时间',
            type: 'warning'
          });
          return
        }
        this.dialogFormVisible = false;

        this.coupon.use_start_time = moment(this.coupon.use_start_time).format("YYYY-MM-DD HH:mm:ss");
        this.coupon.use_end_time = moment(this.coupon.use_end_time).format("YYYY-MM-DD HH:mm:ss");
        let params = {
          coupon_name:this.coupon.coupon_name,
          package_size:this.coupon.package_size,
          sum_number:this.coupon.sum_number, //
          use_start_time : this.coupon.use_start_time ,
          use_end_time : this.coupon.use_end_time
        };
        NProgress.start();
        createCoupon(params).then((res) => {
          console.log(res.status)
          if(res.status){ //失败
            this.$message({
              showClose: true,
              message: '提交失败',
              type: 'error'
            });
          }else {//成功
            this.resetForm('coupon');
            this.$message({
              showClose: true,
              message: '提交成功',
              type: 'success'
            });
            this.inquireTable();
          }
          this.closeFullScreen();
          NProgress.done();
        });
      },
      clearingClick (arr){ // 手动结算
        let params = {
          coupon_id: arr.id,
          activity: arr.activity?0:1
        };
        NProgress.start();
        getOnlineOffline(params).then((res) => {
          console.log(res.data.status)
          NProgress.done();
          if(res.data.status == 0){
            this.inquireTable()
          }
        });
      },
      closeFullScreen() {
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 500);
      },
      handleClick (index, arr){ // 跳转明细
        this.$router.push({name: '流量兑换码', query: {coupon_id: arr.id}})
      },
    },
    mounted() {
      this.inquireTable();
    }

  }

</script>

<style scoped rel="stylesheet" lang="less">
    .el-dialog--small {
        width: 44%!important;
    }
.shadow{
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right:0;
    background: rgba(0,0,0,.4);
    z-index: 2;
}
.colorRed{color:red;}
.colorGreen{color:#13ce66;}
.width-44{
    width:44% !important;
}
.ccvalue{
    position: relative;
    p{
        position: absolute;
        right: -1.2rem;
        top: -0.8rem;
        width: 1.1rem;
        background: #fff;
        height: 1.1rem;
    }
}
.row-style{
    height:30px;
    line-height: 30px;
    margin-bottom: 27px;
    .smallipt{
        width:127px;
    }
}
    .dialog-titel{
        font-size: 18px;
        /*height: 40px;*/
        padding-left: 17px;
        line-height: 40px;
        /*position: relative;*/
        /*border-bottom: 1px solid #ccc;*/
        /*margin-bottom: 37px;*/
    }

.popupModule{
    background: #fff;
    z-index: 2;
    width:522px;
    height:495px;
    border-radius: 10px;
    position: fixed;
    left: 35%;
    top:10%;
    font-size: 14px;

    .title{
        font-size: 18px;
        height: 40px;
        padding-left: 17px;
        line-height: 40px;
        position: relative;
        border-bottom: 1px solid #ccc;
        margin-bottom: 37px;
        .closeBtn{
            width: 20px;
            height: 20px;
            position: absolute;
            right: 10px;
            top: 12px;
            /*background: red;*/
            text-align: center;
            font-size: 13px;
            line-height: 20px;
        }
    }

    .btnBox{
        width:100%;
        position: absolute;
        bottom: 0;
        left:0;
        height:53px;
        border-top: 1px solid #ccc;
        line-height: 53px;
        display: flex;
        justify-content:space-around;
        button{
            height:30px;
            line-height: 5px;
            margin-top: 10px;
        }

    }

}
    .blue-btn {
        background: rgba(22, 155, 213, 1);
        color: #fff;
    }

    .table-expand {
        font-size: 0;
    }

    .table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

</style>
