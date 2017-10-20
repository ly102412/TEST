<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" href="#"></a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler" href="#" @click="sidebarMinimize">&#9776;</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#">首页</a>
      </li>
      <!-- <li class="nav-item px-3">
        <a class="nav-link" href="#">用户中心</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#">设置</a>
      </li> -->
    </ul>
    <ul class="nav navbar-nav ml-auto userMenu">
      <li class="nav-item d-md-down-none">
          <span class="d-md-down-none">{{user_name}}</span>
           <el-dropdown trigger="click">
              <span class="el-dropdown-link userinfo-inner"><a class="nav-link navbar-toggler sidebar-toggler" href="#" @click="">&#9776;</a></span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="changePass">修改密码</el-dropdown-item>
                  <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
      </li>
    </ul>
    <el-dialog title="修改密码"  ref="ruleModal"  v-model="dialogFormVisible" size="tiny">
          <el-form ref="passwordFrom" :rules="rules"  :model="passwordFrom" label-width="80px">
            <el-form-item label="旧密码"  prop="old_passwd">
              <el-input v-model="passwordFrom.old_passwd"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="new_passwd1">
              <el-input v-model="passwordFrom.new_passwd1"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="new_passwd2">
              <el-input v-model="passwordFrom.new_passwd2"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSave" >修改</el-button>
              <el-button @click="dialogFormVisible = false">取消</el-button>
            </el-form-item>
          </el-form>
    </el-dialog>
  </navbar>
</template>
<script>
import navbar from './Navbar'
import { requestChangePass,requestLogout } from '../api/api';

export default {

  name: 'header',
  data(){
    return {
       user_name:"",
       passwordFrom:{
          old_passwd:"",
          new_passwd1:"",
          new_passwd2:""
       },
       rules:{
           old_passwd:[
            {required: true, message: '请输入旧密码', trigger: 'blur'}
          ],
           new_passwd1: [
            {required: true, message: '请输入新密码', trigger: 'blur'}
          ],
           new_passwd2: [
            {required: true, message: '请再次输入新密码', trigger: 'blur'}
          ],
       },
       dialogFormVisible:false
    }
  },
  components: {
    navbar
  },
  methods: {
    handleSave(){
      if(this.passwordFrom.new_passwd1 != this.passwordFrom.new_passwd2){
          this.$notify({
                  title:"密码输入不一致",
                  type: 'error'
                });
          return false 
      }

      let params = {old_passwd:this.passwordFrom.old_passwd,new_passwd:this.passwordFrom.new_passwd1}
      requestChangePass(params).then((data)=>{
          console.log(data)
          if(data['status'] == 0 ){
            this.dialogFormVisible = false
            this.$refs['passwordFrom'].resetFields();
          }
          this.$notify({
            title:data['message'],
            type: data['status'] == 0? 'success' : 'error'
          });
      })
    },
    changePass(){
        this.dialogFormVisible = true
    },
    logout(){
        requestLogout().then((data)=>{
            console.log(data)
            if(data['status'] == 0 ){
                sessionStorage.setItem('user_name','');
                this.$router.push({ path: '/login' });
            }else{
                this.$notify({
                  title:data['message'],
                  type: 'error'
                });
            }
        })
    },
  
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  },
  mounted() {
      this.user_name = sessionStorage.getItem('user_name');
      if(!this.user_name){
          this.$router.push({ path: '/login' });
      }
  }
}
</script>
<style type="text/css">
  .userMenu{
    margin-right: 20px;
  }
</style>