<template>

    <section>
        <!--工具条-->
        <div class="selectBox" align="center">
            <el-row type="flex" class="row-bg "
                    style="width: 100%; min-width:1000px;height: 65px; background: #f2f2f2;padding-top: 15px;margin-top: 10px;"
                    justify="space-around" :gutter="20">
                <el-col :span="24">
                    <div class="grid-content  text-regular " align="center">
                        <el-col :span="2" style="line-height: 35px;">
                            状态:
                        </el-col>
                        <el-col :span="5" style="margin-left: 20px">
                            <el-select v-model="batch_status" placeholder="请选择批充类型">
                                <el-option label="全部" value=""></el-option>
                                <el-option label="未审核" value="0"></el-option>
                                <el-option label="审核成功" value="1"></el-option>
                                <el-option label="审核失败" value="2"></el-option>
                            </el-select>
                        </el-col>

                        <el-col :span="2" style="line-height: 35px; margin-left: 20px">
                            创建时间:
                        </el-col>
                        <el-col :span="6">
                            <el-date-picker
                                    v-model="start_time"
                                    type="datetime"
                                    placeholder="选择开始时间">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="1" style="line-height: 35px;">
                            至
                        </el-col>
                        <el-col :span="6">
                            <el-date-picker
                                    v-model="end_time"
                                    type="datetime"
                                    placeholder="选择结束时间"
                            >
                            </el-date-picker>
                        </el-col>
                    </div>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg "
                    style="width: 100%; min-width:1000px;height: 65px; background: #f2f2f2;padding-top: 15px;margin-bottom: 10px;"
                    justify="space-around" :gutter="20">
                <el-col :span="24">
                    <el-col :span="2" style="line-height: 35px;">
                        活动名称:
                    </el-col>
                    <el-col :span="5" style="margin-left: 20px">
                        <el-input v-model="batch_name" type="text" :maxlength="10" placeholder="请输入活动名称" ></el-input>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" @click="search">
                            查找
                        </el-button>
                    </el-col>
                </el-col>
            </el-row>


        </div>
        <div class="table">
            <el-table
                    :data="dataList"
                    height=""
                    border
                    style="width: 1300px;margin: 0 auto;">
                <el-table-column
                        prop="id"
                        label="ID"
                        width="100"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="business_name"
                        label="活动名称"
                        width="200"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="create_time"
                        label="创建时间"
                        width="120"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="batch_type"
                        label="批充类型"
                        width="180"
                        align="center"
                        :formatter="batchTypeFormat"
                >
                </el-table-column>
                <el-table-column
                        prop="batch_score"
                        label="单个流量值（M）"
                        width="180"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="batch_phone_num"
                        label="手机号码个数（M）"
                        width="200"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="batch_money"
                        label="所需总资金（元）"
                        width="180"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="状态"
                        width="160"
                        align="center"
                        :formatter="batchStatusFormat"
                >
                </el-table-column>
                <el-table-column
                        prop="batch_desc"
                        label="备注"
                        width="200"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="200"
                        align="center">
                    <template scope="scope">
                        <el-button type="primary"
                                   @click="rechargeAudit(scope.row.id,1)" size="small"  v-if="scope.row.batch_status == 0">
                            审核通过
                        </el-button>
                        <el-button type="danger"
                                   @click="rechargeAudit(scope.row.id,2)" size="small"  v-if="scope.row.batch_status == 0">
                            驳回
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!--工具条-->
        <el-col :span="24" class="toolbar" v-if = "total > 0 ">

            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="page_size"
                           :total="total" style="float:right;">
            </el-pagination>
        </el-col>
    </section>
</template>

<script>
    import NProgress from 'nprogress';
    import {rechargeList,rechargeAudit} from '../../api/api';
    import moment from 'moment';

    export default {
        data() {
            return {
                dataList: [],  //数据列表
                batch_name:'', //批次名称
                batch_type:'', //批次类型
                start_time: '',//开始时间
                end_time: '',  //结束时间
                total: 0,
                page_number: 1,
                page_size: 10,
                batch_status:''
            }

        },
        methods: {
            //批冲状态
            batchStatusFormat(row, column){
                if (row.batch_status == 0) {
                    return '未审核'
                } else if (row.batch_status == 1) {
                    return '审核成功'
                } else if (row.batch_status == 2) {
                    return '审核失败'
                }
            },
            // 批冲类型
            batchTypeFormat(row, column) {
                if (row.batch_type == 1) {
                    return '流量账户批充'
                } else if (row.batch_type == 2) {
                    return '手机流量批充'
                }
            },
            handleCurrentChange: function (val) {
                this.page_number = val;
                console.log(this.page_number)
                this.init();
            },
            search() { // 搜索
                if (this.start_time) {
                    this.start_time = moment(this.start_time).format("YYYY-MM-DD HH:mm:ss");
                } else {
                    this.start_time = ''
                }
                if (this.end_time) {
                    this.end_time = moment(this.end_time).format("YYYY-MM-DD HH:mm:ss");
                } else {
                    this.end_time = ''
                }
                let startTimeNum = moment(this.start_time).format("YYYYMMDDHHmmss");
                let endTimeNum = moment(this.end_time).format("YYYYMMDDHHmmss");

                console.log(endTimeNum + " " + startTimeNum)
                if (startTimeNum && endTimeNum && endTimeNum - startTimeNum < 0) {
                    this.$message({
                        showClose: true,
                        message: '开始时间不能大于结束时间',
                        type: 'warning'
                    });
                    return
                }
                this.init()
            },
            init() { // 查询表单
                let _this = this;
                let params = {
                    page_number: this.page_number,
                    page_size: this.page_size,
                    start_time:this.start_time,
                    end_time: this.end_time,
                    batch_name:this.batch_name,
                    batch_type:2,
                    batch_status:this.batch_status

                };
                NProgress.start();
                rechargeList(params).then((res) => {
                    NProgress.done();
                    this.total = res.data.rows || 0;
                    this.dataList = res.data.list

                });
            },
            rechargeAudit(id,status) { // 审核
                let params = {
                    id:id,
                    batch_status:status
                };
                NProgress.start();
                rechargeAudit(params).then((res) => {
                    NProgress.done();
                    if(res.status == 0){
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        });
                        this.init()

                    }


                });
            },

        },
        mounted() {
            this.init();
        }

    }

</script>

<style scoped rel="stylesheet" lang="less">
    .el-dialog--small {
        width: 44% !important;
    }

    .shadow {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, .4);
        z-index: 2;
    }

    .colorRed {
        color: red;
    }

    .colorGreen {
        color: #fff;
    }

    .width-44 {
        width: 44% !important;
    }

    .ccvalue {
        position: relative;
        p {
            position: absolute;
            right: -1.2rem;
            top: -0.8rem;
            width: 1.1rem;
            background: #fff;
            height: 1.1rem;
        }
    }

    .row-style {
        height: 30px;
        line-height: 30px;
        margin-bottom: 27px;
        .smallipt {
            width: 127px;
        }
    }

    .dialog-titel {
        font-size: 18px;
        /*height: 40px;*/
        padding-left: 17px;
        line-height: 40px;
        /*position: relative;*/
        /*border-bottom: 1px solid #ccc;*/
        /*margin-bottom: 37px;*/
    }

    .popupModule {
        background: #fff;
        z-index: 2;
        width: 522px;
        height: 495px;
        border-radius: 10px;
        position: fixed;
        left: 35%;
        top: 10%;
        font-size: 14px;

        .title {
            font-size: 18px;
            height: 40px;
            padding-left: 17px;
            line-height: 40px;
            position: relative;
            border-bottom: 1px solid #ccc;
            margin-bottom: 37px;
            .closeBtn {
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

        .btnBox {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 53px;
            border-top: 1px solid #ccc;
            line-height: 53px;
            display: flex;
            justify-content: space-around;
            button {
                height: 30px;
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
