<template>
  <div style="position: absolute;left: 50%;margin-left: -175px;">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">流量服务平台</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.user_name" auto-complete="off" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.passwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
  </div>

</template>

<script>
  import { requestLogin } from '../api/api';
  import NProgress from 'nprogress'
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          user_name: '',
          passwd: ''
        },
        rules2: {
          user_name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          passwd : [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        let _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true;
            NProgress.start();
            let loginParams = { user_name: this.ruleForm2.user_name, passwd: md5(this.ruleForm2.passwd) };
            requestLogin(loginParams).then(data => {
              console.log(data);
              this.logining = false;
              NProgress.done();
              let { status, message} = data;
              if (status !== 0) {
                // sessionStorage.setItem('is_login', false);
                this.$notify({
                  title:message,
                  type: 'error'
                });
              } else {
                // sessionStorage.setItem('is_login', true);
                sessionStorage.setItem('user_name',data['data']['business_name']);
                  this.$notify({
                      title: message,
                      type: 'success'
                  });
                this.$router.push({ path: '/index' });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
