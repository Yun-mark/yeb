<template>
       <div>
           <el-form ref="loginForm" :rules="rules" :model="loginForm" class="loginContainer">
             <h3 class="loginTitle">系统登录</h3>
             <el-form-item prop="username">
               <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
             </el-form-item>
             <el-form-item prop="password">
               <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
             </el-form-item>
             <el-form-item prop="code">
               <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码" style="width:250px;margin-right:5px"></el-input>
              <img :src="captchaUrl" @click="updateCaptcha">
               </el-form-item>
               <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
               <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
           </el-form>
       </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      captchaUrl: '/captcha?time=' + new Date(),
      loginForm: {
        username: 'admin',
        password: '123',
        code: ''
      },
      checked: true,
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    updateCaptcha () {
      this.captchaUrl = '/captcha?time=' + new Date()
    },
    submitLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$message.success('提交成功！')
        } else {
          this.$message.error('请输入所有字段！')
          return false
        }
      })
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
.el-form-item__content{
  display: flex;
  align-items: center;
}
</style>
