<template>
       <div>
           <el-form ref="form" :model="loginForm" class="loginContainer">
             <h3 class="loginTitle">系统登录</h3>
             <el-form-item>
               <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
             </el-form-item>
             <el-form-item>
               <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
             </el-form-item>
             <el-form-item>
               <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码" style="width:250px;margin-right:5px"></el-input>
               <img :src="captchaUrl" >
             </el-form-item>
               <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
               <el-button type="primary" style="width: 100%">登录</el-button>
           </el-form>
       </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123',
        code: ''
      },
      checked: true
    }
  }
}
</script>
<style >
.loginContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle{
  margin: 0px auto 20px auto;
  text-align: center;
  font-size: 25px;
}
.loginRemember{
  text-align: left;
  margin:0px 0px 15px 0px;
}
</style>
