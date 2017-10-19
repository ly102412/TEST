<template lang="html">
  <div class="fadeIn">
    <el-dialog
        title="手机流量批充"
        :visible.sync="dialogVisible"
        size="small"
        :close-on-click-modal="false"
        >
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="12"><div class="fl">单个流量值：</div><div class="fl ml65">{{ruleForm.score}}M</div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="12"><div class="fl">手机号码个数：</div><div class="fl ml50">{{num}}个</div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="12"><div class="fl">所需总资金： </div><div class="fl row-color ml65">{{totle}}元</div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="12"><div class="dialog-notes">为维护流量平台稳步进行，手机流量直充需求提交后，平台需要做直充审核，2个工作日内给出审核结果
请确认无误后提交审核。</div></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="createPhoneCsv">确认提交</el-button>
        </span>
    </el-dialog>

    <el-dialog
        title="资金不足提示"
        :visible.sync="dialogVisible2"
        size="small"
        :close-on-click-modal="false"
        >

        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="18"><div class="prompt">您的账户资金不足，请订购套餐后进行批充</div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="12"><div class="fl tr">账户资金总额：</div><div class="fl ml65">{{business_money}}元</div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="12"><div class="fl tr">所需总资金： </div><div class="fl row-color ml85">{{totle}}元</div></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible2 = false">确认</el-button>
        </span>
    </el-dialog>
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            手机流量批充
          </div>
          <div class="card-block">
            <div class="row">
                <el-form label-width="150px" :model="ruleForm" :rules="rules" ref="ruleForm">
                    <el-form-item label="活动名称：" prop="batch_name" required>
                        <el-row>
                            <el-input v-model="ruleForm.batch_name" type="text" :maxlength="10" placeholder="请输入活动名称" style="width: 300px"></el-input>
                            <el-col><div class="notes">最多输入10个字符</div></el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="赠送流量值：" prop="score" required>
                        <el-select v-model="ruleForm.score" placeholder="请选择赠送流量值" style="width: 300px">
                            <el-option
                              v-for="item in options"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动说明：" prop="batch_desc" required>
                        <el-input
                          type="textarea"
                          :autosize="{ minRows: 4, maxRows: 4}"
                          placeholder="请输入内容"
                          v-model="ruleForm.batch_desc">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="手机号码导入：" prop="flow_num">
                        <el-upload
                                class="upload"
                                action="/api/batch/recharge/csv/upload"
                                :on-preview="handlePreview"
                                :on-success="handleSucc"
                                :before-upload="beforeAvatarUpload"
                                :multiple="false"
                                :show-file-list="false"
                        >
                            <el-button size="small" type="info">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">文本导入仅支持csv格式文档<a href="http://img.tst.ruwe.cn/group1/M00/00/06/Ci-Iq1neyvuAI7OFAAAAGH40ms4582.csv" class="notes">点击下载模板</a></div>
                            <ul class="el-upload-list el-upload-list--text" v-if="file_name">
                                <li class="el-upload-list__item is-success el-list-enter-to">
                                    <a class="el-upload-list__item-name"><i class="el-icon-document"></i>{{file_name}}
    </a>
                                    <label class="el-upload-list__item-status-label"><i class="el-icon-upload-success el-icon-circle-check"></i></label>
                                </li>
                            </ul>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交审核</el-button>
                    </el-form-item>
                </el-form>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    

    import {readPhoneCsv,createPhoneCsv} from '../../api/api'
    import NProgress from 'nprogress'
    export default {
        data () {
            let validateSpace = (rule, value, callback)=>{
                 if(!value){
                    callback(new Error('不能为空'))
                 }

                 if(value.match(/^[ ]+$/)){
                    callback(new Error('不能输入全为空格'))
                 }

                 callback()
            }

            return {
                ruleForm:{
                    batch_name:'', //活动名称
                    score:'',   //流量大小
                    batch_desc:'' //活动说明
                },
                rules:{
                    batch_name: [
                        { validator:validateSpace,required: true, message: '请输入活动名称', trigger: 'blur' },
                        { max: 10, message: '长度不能超过10个字符', trigger: 'blur' }
                    ],
                    batch_desc:[
                        {validator:validateSpace, required: true, message: '请输入活动说明', trigger: 'blur' },
                        { max: 50, message: '长度不能超过50个字符', trigger: 'blur' }
                    ],
                    score: [
                        { required: true, message: '请选择赠送流量值', trigger: 'change' }
                    ]
                },
                options: [
                    {
                        value:'100',
                        label:'100M'
                    },
                    {
                        value:'500',
                        label:'500M'
                    }
                ],
                dialogVisible:false,
                dialogVisible2:false,
                file_path:'',//已经上传的文件
                num:'',//手机号码个数
                totle:'',     //消费的money
                business_money:'',  //账户总金额
                file_name:'' //上传文件的name
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleSucc(response, file, fileList){
                if(response.status == 0){
                    this.$message({
                        message: response.message,
                        type: 'success'
                    });
                }else if(response.status == 1){
                    this.$message({
                        message: response.message,
                        type: 'warning'
                    });
                }
                this.file_name =  response.data.name
                this.file_path = response.data.file
            },
            //第一次确认
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        if(this.file_path){
                            this.readPhoneCsv()
                        }else{
                            this.$message({
                                message: '请导入手机号码',
                                type: 'warning'
                            });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //添加上传文件验证
            beforeAvatarUpload (file) {
                const extension = file.name.split('.')[1] === 'csv'
                const isLt2M = file.size / 1024 / 1024 < 10
                if (!extension) {
                    this.$message({
                        message: '上传文件只能是csv格式!',
                        type: 'warning'
                    });
                }
                if (!isLt2M) {
                    this.$message({
                        message: '上传模板大小不能超过 10MB!',
                        type: 'warning'
                    });
                }
                return extension && isLt2M
            },
            //查询需要消费的money
            readPhoneCsv(){
                let params = {
                    score: this.ruleForm.score,
                    file_path: this.file_path
                }
                NProgress.start()
                readPhoneCsv(params).then((res) => {
                    console.log(res)
                    NProgress.done()
                    if(res.status == 0){
                        this.totle = res.data.totle
                        this.num = res.data.num
                        this.dialogVisible = true
                    }else if(res.status == 2){
                        this.$message({
                            message: res.message,
                            type: 'warning'
                        });
                        this.totle = res.data.totle
                        this.business_money = res.data.business_money
                        this.dialogVisible2 = true
                    }else if(res.status == 1){
                        this.$message({
                            message: res.message,
                            type: 'error'
                        });

                    }
                })
            },
            //第二次确认 创建批冲订单
            createPhoneCsv(){
                let params = {
                    batch_name:this.ruleForm.batch_name,
                    score: this.ruleForm.score,
                    file_path: this.file_path,
                    batch_desc:this.ruleForm.batch_desc
                }
                NProgress.start()
                createPhoneCsv(params).then((res) => {
                    console.log(res)
                    NProgress.done()
                    this.dialogVisible = false
                    if(res.status == 0){
                        this.$message({
                            message: res.message,
                            type: 'success'
                        });
                        setTimeout(function () {
                            window.location.reload()
                        },1000)
                    }else{
                        this.$message({
                            message: res.message,
                            type: 'error'
                        });
                    }

                })
            }

        }
    }
</script>

<style lang="less" scoped>
    .prompt{
        font-size: 22px;
        color: #000;
    }
    .notes{
        font-size: 12px!important;
        color: #37a2cd;
    }
    .el-upload__tip{
        margin-right: 10px;
    }
    .row-bg{
        padding: 10px 0;
        color: #1f2d3d;
        font-size: 18px;
    }
    .row-color{
        color: #ff7e00;
    }
    .fl{
       float: left;
    }
    tr{
        text-align: right;
    }
    .ml65{
        margin-left: 65px;
    }
    .ml50{
        margin-left: 50px;
    }
    .ml85{
        margin-left: 85px;
    }
    .dialog-notes{
        font-size: 12px!important;
    }
</style>
