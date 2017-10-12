<template>

    <section>
        <div class="table">
            <el-table
                    :data="dataList"
                    height=""
                    border
                    style="width: 1300px;margin: 0 auto;">
                <el-table-column
                        prop="batch_name"
                        label="活动名称"
                        width="200"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="batch_phone"
                        label="手机号码"
                        width="180"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="score_type"
                        label="流量类型"
                        width="180"
                        align="center"
                        :formatter="batchTypeFormat"
                >
                </el-table-column>
                <el-table-column
                        prop="batch_score"
                        label="充值流量值（M）"
                        width="180"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="recharge_status"
                        label="状态"
                        width="200"
                        align="center"
                        :formatter="rechargeStatusFormat"
                >
                </el-table-column>
            </el-table>
        </div>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="page_size"
                           :total="total" style="float:right;">
            </el-pagination>
        </el-col>
    </section>
</template>

<script>
    import NProgress from 'nprogress';
    import {rechargeDetail} from '../../api/api';
    import moment from 'moment';

    export default {
        data() {
            return {
                dataList: [],  //数据列表
                batch_recharge_record_id: '', // 订单号
                total: 0,
                page_number: 1,
                page_size: 10,
                batch_name:''
            }

        },
        methods: {
            // 批冲类型
            batchTypeFormat(row, column) {
                if (row.score_type == 1) {
                    return '流量账户批充'
                } else if (row.score_type == 2) {
                    return '手机流量批冲'
                }
            },
            // 充值状态
            rechargeStatusFormat(row, column) {
                if (row.recharge_status == 0) {
                    return '待充值'
                } else if (row.recharge_status == 1) {
                    return '流量充值中'
                }else if (row.recharge_status == 2) {
                    return '充值成功'
                }else if (row.recharge_status == 3) {
                    return '充值失败'
                }
            },
            handleCurrentChange: function (val) {
                this.page_number = val;
                console.log(this.page_number)
                this.init();
            },
            init() { // 查询表单
                let _this = this;
                let params = {
                    page_number: this.page_number,
                    page_size: this.page_size,
                    batch_recharge_record_id: this.batch_recharge_record_id, // 批次ID
                };

                NProgress.start();
                rechargeDetail(params).then((res) => {
                    _this.total = res.data.rows || 0;
                    NProgress.done();
                    this.dataList = res.data.list
                    for(let i= 0;i <this.dataList.length;i++){
                        this.dataList[i].batch_name = this.batch_name
                    }
                    console.log(this.dataList);
                });
            }
        },
        mounted() {
            this.batch_recharge_record_id = this.$route.query.id
            this.batch_name = this.$route.query.name
            console.log('batch_name==='+this.batch_name);

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
