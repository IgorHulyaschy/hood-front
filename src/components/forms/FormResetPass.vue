<template>
  <div class="content">
    <section class="wrapper">
      <form>
        <span>Reset your password</span>
        <CustomInputPass placeholder="New password" v-model="newpass" @input="pass"/>
        <div class="passlock">
          <div id="first"></div>
          <div id="second"></div>
          <div id="third"></div>
        </div>
        <CustomInputPass placeholder="Confirm password" v-model="confirm" />
        <div v-if="errorPass" class="msg" >Passwords must be the same</div>
        <CustomBut value="Reset" @click="submit" />
      </form>
    </section>
  </div>
</template>

<script>
import CustomBut from "../controllers/CustomBut";
import CustomInputPass from "../controllers/CustomInputPass";
import apiService from "../../api/api";
import router from '../../router';
export default {
  name: "FormResetPass",
  components: {
    CustomBut,
    CustomInputPass,
  },
  data: () => ({
    newpass: "",
    confirm: "",
    errorPass: false,
  }),
  methods: {
    async submit() {
      if (this.newpass != this.confirm) {
        this.errorPass=true
        return this.errorPass
      } else {
        const email = localStorage.getItem("email");
        const data = {};
        data.email = email;
        data.password = this.newpass;
        console.log(data)
        apiService
          .put("user/password", data)
          .then(() => {
            localStorage.removeItem("email");
            router.push('reset-message')
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    pass() {
      let block1 = document.querySelector('#first')
      let block2 = document.querySelector('#second')
      let block3 = document.querySelector('#third')
      if(/(?=.*[0-9])/.test(this.newpass) || /(?=.*[a-z])/.test(this.newpass) || /(?=.*[A-Z])/.test(this.newpass) || /(?=.*[!@#$%^&*.,])/.test(this.newpass)){
        if(/(?=.*[A-Z])/.test(this.newpass) &&  /(?=.*[0-9])/.test(this.newpass) &&  /(?=.*[a-z])/.test(this.newpass)){
          if(/(?=.*[!@#$%^&*.,])/.test(this.newpass)){
            block1.style.display = 'block'
          block2.style.display = 'block'
          block3.style.display = 'block'
          block1.setAttribute('class', 'green')
          block2.setAttribute('class', 'green')
          block3.setAttribute('class', 'green')
          } else {
            block1.style.display = 'block'
            block2.style.display = 'block'
            block3.style.display = 'none'
            block1.setAttribute('class', 'orange')
            block2.setAttribute('class', 'orange')
            block3.removeAttribute('class')
          }
        } else{
          block1.style.display = 'block'
          block2.style.display = 'none'
          block3.style.display = 'none'
          block1.setAttribute('class', 'red')
          block2.removeAttribute('class')
          block3.removeAttribute('class')
        }
        
        
      }
      if(this.newpass.length === 0){
        block1.style.display = 'none'
        block2.style.display = 'none'
        block3.style.display = 'none'
        block1.removeAttribute('class')
        block2.removeAttribute('class')
        block3.removeAttribute('class')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/controllers/mixin";
.content {
  display: flex;
  justify-content: center;
  @include margin;
  .wrapper {
    display: flex;
    align-self: center;
    justify-content: space-around;
    @include margin;
    background-color: white;
    width: 632px;
    height: 500px;
    border-width: 1px;
    border-color: rgb(112, 112, 112);
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    form {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include margin;
      .passlock{
          margin-top: 5px;
          width: 100%;
          display: flex;
          flex-direction: row;

          div{
            display: none;
            height: 10px;
            width: 32%;
            border-radius: 5px;
            border: rgb(212, 212, 212) solid 1px;
          }
          .red{
            background-color: red;
          }
          .orange{
            background-color: orange;
            display:flex;
            align-self: center;
          }
          .green{
            background-color: green;
          }
        }
      .msg {
        color: rgb(209, 27, 27);
      }
      span {
        display: flex;
        align-self: flex-start;
        color: rgb(0, 0, 0);
        font-size: 32px;
      }
      input[type="password"] {
        @include margin;
      }
      input[type="button"] {
        display: flex;
        align-self: flex-end;
        @include margin;
      }
    }
    @include bp-576 {
      form {
        width: 80%;
      }
    }
  }
}
</style>
