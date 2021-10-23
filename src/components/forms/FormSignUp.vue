<template>
    <div class="content">
    <section class="wrapper">
      <form>
        <span>Sign up</span>
        <section class="name-lastName">
          <div class="nav-input1">
            <CustomInputText placeholder="Name" v-model="fname"/>
            
          </div>
          
          <div class="nav-input2">
            <CustomInputText placeholder="Last Name" v-model="lname"/>
          </div>
        </section>
        <div class="error">{{fnameError}}</div>
        <div class="error"> {{lnameError}}</div>
        <section class="login-password">      
          <CustomInputText placeholder="Login" v-model="login"/>
          <div class="error">{{loginError}}</div>
         
          <CustomInputText  @input="button" placeholder="E-mail" v-model="email"/>
          <div class="error">{{emailError}}</div>
        </section>
        <CustomBut value="Sign up" @click="submit" disabled/>
      </form>
    </section>
  </div>
</template>

<script>
import CustomBut from '../controllers/CustomBut.vue';
import CustomInputText from '../controllers/CustomInputText';
import router from '../../router/index'
import { useField } from 'vee-validate'
import * as yup from 'yup'
import api from '../../api/api'
export default {
  name: 'Form',
  
  components: {
    CustomInputText,
    CustomBut,
  },
  data() {
    const {errorMessage: fnameError, value: fname} = useField('fieldName', yup.string().required().min(3).max(20));
    const {errorMessage: lnameError, value: lname} = useField('fieldName', yup.string().required().min(3).max(20));
    const {errorMessage: loginError, value: login} = useField('fieldName', yup.string().required().min(8).max(20));
    const {errorMessage: emailError, value: email} = useField('fieldName', yup.string().required().min(3).email());
    return {
      lname,
      login,
      email,
      fname,
      fnameError,
      lnameError,
      loginError,
      emailError,
    }
      

  },

  methods: {
    async submit(){
      const res = await api.getWithParams(`user/profile/${this.email}`)
      console.log(res)
      console.log(Boolean({}))
      if(!res.data.email) {
        const data = {};
        data.fname = this.fname
        data.lname = this.lname
        data.login = this.login
        data.email = this.email
        localStorage.setItem('data', JSON.stringify(data))
        router.push('complete-account')
      } else {
        alert('User with the same email already exist')
      }
    },
    button(){
      if(this.fnameError === undefined && this.lnameError === undefined && this.emailError === undefined && this.loginError === undefined){
        const but = document.querySelector('.ButforAction')
        but.removeAttribute('disabled')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/controllers/mixin';
  .content{
    display: flex;
    justify-content: center;
    @include margin;
    .wrapper{
      display: flex;
      align-self: center;
      justify-content: space-around;
      @include margin;
      background-color: white;
      width: 632px;
      height: 500px;
      border-width: 1px;
      border-color: rgb(112, 112, 112);
      box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
      form{
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @include margin;
        .error{
          color: rgb(209, 44, 44);
        }
        span{
          display: flex;
          align-self: flex-start;
          color: rgb(0, 0, 0);
          font-size: 32px;
        }
        input[type="text"]{
          @include margin;
        }
        input[type="password"]{
          @include margin;
        }
        input[type="button"]{
          display: flex;
          align-self: flex-end;
          @include margin;
        }
        .name-lastName{
          width: 100%;
          display: flex;
          flex-direction: row;
          .nav-input1{
            display: flex;
            justify-content: flex-start;
            width: 50%;
            
            .inputForSmthing{
              width: 90%;
            }
          }
          .nav-input2{
            display: flex;
            justify-content: flex-end;
            width: 50%;
            .inputForSmthing{
              width: 90%;
            }
          }
        }
        
        .login-password{
          width: 100%;
          display: flex;
          flex-direction: column;  
        }
      }
      @include bp-576{
        form  {
          width: 80%;
          .name-lastName{
            display: flex;
            flex-direction: column;
            .nav-input1, .nav-input2{
              width: 100%;
              .inputForSmthing{
                width: 100%;
              }
            }
          }
        }
      }
    }   
  }

</style>