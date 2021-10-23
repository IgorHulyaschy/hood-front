<template>
  <div class="content">
  <section class="wrapper">
    <form>
      <span>Enter your e-mail to reset your password</span>
      <CustomInputText placeholder="E-mail" v-model="data.email" />
      <div class="error" v-if="error">User with this email does not exist</div>
      <CustomBut value="Send" @click="send"/>
    </form>
  </section>
</div>
</template>

<script>
import CustomBut from '../controllers/CustomBut'
import CustomInputText from '../controllers/CustomInputText'
import router from '../../router/index'
import apiService from '../../api/api'
export default {
  name: 'FormPassRecov',
  components: {
    CustomInputText,
    CustomBut
  },
  data:() => ({
    data: {
      email: '',
    },
    error: false,
  }),
  methods: {
    async send(){
      apiService.post('user/email', this.data)
      .then(() => {
        localStorage.setItem('email', this.data.email)
        router.push('reset-password')
      })
      .catch(() => {
        this.error = true
      })
    },
    
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
        @media (max-width: 576px) and (min-width: 1px){
          width: 80%;
        }
        .error {
          @include margin;
          color: rgb(204, 44, 44);
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
        input[type="button"]{
          display: flex;
          align-self: flex-end;
          @include margin;
        }
      }
    }   
  }

</style>