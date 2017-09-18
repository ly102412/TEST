<template>

    <section>
        <!--工具条-->
        <div class="selectBox" align="center">
            <el-row type="flex" class="row-bg "
                    style="width: 100%; min-width:1229px;height: 65px; background: #f2f2f2;padding-top: 15px;margin-bottom: 10px;margin-top: 10px;"
                    justify="space-around" :gutter="20">
                <el-col :span="24">
                    <div class="grid-content  text-regular " align="center">
                        <el-col :span="4">
                            <el-input style="width: 193px;" v-model="batch_name" placeholder="输入兑换码名称"></el-input>
                        </el-col>
                        <el-col :span="2">
                            <p style="text-align: right;
    line-height: 0.5rem;"> 开始时间:</p>
                        </el-col>
                        <el-col :span="4">
                            <el-date-picker
                                    v-model="startTime"
                                    type="datetime"
                                    placeholder="选择日期时间">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <el-date-picker
                                    v-model="endTime"
                                    type="datetime"
                                    placeholder="选择日期时间">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="2">
                            <el-button class="blue-btn" @click="search" v-loading.fullscreen.lock="fullscreenLoading">
                                查找
                            </el-button>
                        </el-col>
                        <el-col :span="3">
                            <el-button type="success" @click="dialogFormVisible = true">创建流量兑换码</el-button>
                        </el-col>
                    </div>
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
                        width="60"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="order_id"
                        label="订单ID"
                        width="250"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="business_id"
                        label="兑换码名称"
                        width="110"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="flow_money"
                        label="优惠价（元）"
                        width="130"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="money"
                        label="原价（元）"
                        width="130"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop=""
                        label="优惠（元）"
                        width="130"
                        align="center">
                    <template scope="scope">
                        {{scope.row.money - scope.row.flow_money}}元
                    </template>
                </el-table-column>
                <el-table-column
                        prop="create_time"
                        label="开始时间"
                        width="120"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="order_status"
                        label="状态"
                        width="100"
                        align="center"
                        :formatter="statusFormat">
                </el-table-column>

                <el-table-column
                        prop=""
                        label="额外费用"
                        width="150"
                        align="center">
                    <template scope="scope">
                        <el-input v-if="scope.row.order_note?true:false" v-model="scope.row.extra_free"
                                  placeholder="请输入内容" :disabled="scope.row.order_status?true:false"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop=""
                        label="操作"
                        width="200"
                        align="center">
                    <template scope="scope">
                        <el-button type="primary" :disabled="statusDisable(scope.row.order_status)" class="colorGreen"
                                   @click="adoptOrder(scope.row)" size="small">
                            {{scope.row.order_status|filter_order_status}}
                        </el-button>
                        <el-upload
                                class="upload"
                                action="/api/service/file/upload"
                                :show-file-list="false"
                                :on-success="(res)=>{return handleUploadSuccess(res,scope.row)}"
                                :on-error="handleUploadFaild"
                                style="display: inline-block"
                                v-if="scope.row.order_status == 1?true:false"
                        >
                            <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <!-- <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button> -->
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="page_size"
                           :total="total" style="float:right; margin-right: 13%">
            </el-pagination>
        </el-col>
    </section>
</template>

<script>
    import NProgress from 'nprogress';
    import {getOrderCodeList, adoptOrder,sendFile} from '../../api/api';
    import moment from 'moment';

    export default {
        data() {
            return {
                dataList: [],  //数据列表
                startTime: '',
                endTime: '',
                fullscreenLoading: '',
                batch_name: '', // 批次号
                total: 0,
                page_number: 1,
                page_size: 10,
                uploadURL:'/api/service/file/upload',  //文件上传的api
                uploadId:null,
                onSuccess:Function,
            }

        },
        methods: {
            // 订单状态
            statusFormat(row, column) {
                if (row.order_status == 0) {
                    return '未确认'
                } else if (row.order_status == 1) {
                    return '确认成功'
                } else if (row.order_status == 2) {
                    return '确认失败'
                }
            },
            //审核失败
            statusDisable(status) {
                if (status != 1) {
                    return false
                } else {
                    return true
                }
            },

            handleCurrentChange: function (val) {
                this.page_number = val;
                console.log(this.page_number)
                this.init();
            },
            search() { // 搜索
                if (this.startTime) {
                    this.start_time = moment(this.startTime).format("YYYY-MM-DD HH:mm:ss");
                } else {
                    this.start_time = ''
                }
                if (this.endTime) {
                    this.end_time = moment(this.endTime).format("YYYY-MM-DD HH:mm:ss");
                } else {
                    this.end_time = ''
                }
                let startTimeNum = moment(this.startTime).format("YYYYMMDDHHmmss");
                let endTimeNum = moment(this.endTime).format("YYYYMMDDHHmmss");
                console.log(endTimeNum + " " + startTimeNum)
                if (startTimeNum && endTimeNum && endTimeNum - startTimeNum < 0) {
                    this.$message({
                        showClose: true,
                        message: '开始时间不能大于结束时间',
                        type: 'warning'
                    });
                    return
                }
                this.fullscreenLoading = true;
                this.init()
            },
            init() { // 查询表单
                let _this = this;
                let params = {
                    page_number: this.page_number,
                    page_size: this.page_size,
                    id: this.batch_name, // 售卡单号
                    start_time: this.start_time,
                    end_time: this.end_time
                };
                NProgress.start();
                getOrderCodeList(params).then((res) => {
                    _this.total = res.data.data.rows || 0;
                    _this.closeFullScreen();
                    NProgress.done();
                    this.dataList = res.data.data.list
//          console.log(res.data)
                });
            },
            adoptOrder(row) { // 手动结算
                let params = {
                    id: row.id,
                    extra_free: row.extra_free
                };
                NProgress.start();
                adoptOrder(params).then((res) => {
                    NProgress.done();
                    if (res.data.status == 0) {
                        this.$notify({
                            title: '消息',
                            message: res.data.message,
                            type: 'success'
                        });
                        this.init()
                    } else {
                        this.$notify({
                            title: '消息',
                            message: res.data.message,
                            type: 'error'
                        });
                    }
                });
            },
            // 图片上传成功后的处理
            handleUploadSuccess(res,file) {
                if (res.status == 0) {
                    this.$message({
                        message: res.message,
                        type: 'success'
                    });
                    let params = {
                        id:file.id,
                        file: res.data.file
                    };
                    NProgress.start();
                    sendFile(params).then((data) =>{
                        NProgress.done();
                    })
                }
            },
            handleUploadFaild(res, filr) {
                this.$message.error('上传失败,请重试');
            },
            closeFullScreen() {
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 500);
            },
            handleClick(index, arr) { // 跳转明细
                // this.$router.push({name: '流量兑换码', query: {coupon_id: arr.id}})
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
