<template>
  <div class="content">
    <section class="wrapper">
      <form>
        <span>Complete your account</span>
        <CustomInputPass
          placeholder="Password"
          @input="pass"
          v-model="newpassword"
        />
        <div class="passlock">
          <div id="first"></div>
          <div id="second"></div>
          <div id="third"></div>
        </div>
        <div class="error">{{newpasswordError}}</div>
        <CustomInputPass placeholder="Confirm password" v-model="confirm" />
        <div class="error" v-if="error">Passwords must match</div>
        <section class="wrapper-checkbox">
          <div class="wrapper-line">
            <CustomCheckBox id="item_1" v-model="checkbox1" />
            <label for="item_1">I agree to HOOD </label>
            <a> Terms of Service</a>
          </div>
          <div class="wrapper-line">
            <CustomCheckBox id="item_2" v-model="checkbox2" />
            <label for="item_2">I agree to HOOD </label>
            <a> Privacy Police</a>
          </div>
        </section>
        <div class="errorCheck" v-if="errorcheckbox">
            Accept the Terms
          </div>
        <div class="captcha">
          <vue-recaptcha siteKey="6Le51bgaAAAAAIn-V8jmbdOc-FzWXUSwKI3Pdo9Q" 
          :show="show" 
          size="normal" 
          theme="light"
          :tabindex="0"
          @verify="recaptchaVerified"
          @expire="recaptchaExpired"
          @fail="recaptchaFailed"
          ref="vueRecaptcha">
          </vue-recaptcha>
        </div>
        <CustomBut value="Done!" @click="submit" disabled/>
      </form>
    </section>
  </div>
</template>
<script>
import vueRecaptcha from 'vue3-recaptcha2';
import CustomBut from "../controllers/CustomBut";
import CustomInputPass from "../controllers/CustomInputPass";
import CustomCheckBox from "../controllers/CustomCheckBox";
import apiService from "../../api/api";
import router from "../../router/index";
import { useField } from 'vee-validate'
import * as yup from 'yup'
export default {
  name: "FormComleteAcc",
  components: {
    CustomInputPass,
    CustomBut,
    CustomCheckBox,
    vueRecaptcha
  },
  methods: {
    pass() {
      let block1 = document.querySelector('#first')
      let block2 = document.querySelector('#second')
      let block3 = document.querySelector('#third')
      if(/(?=.*[0-9])/.test(this.newpassword) || /(?=.*[a-z])/.test(this.newpassword) || /(?=.*[A-Z])/.test(this.newpassword) || /(?=.*[!@#$%^&*.,])/.test(this.newpassword)){
        if(/(?=.*[A-Z])/.test(this.newpassword) &&  /(?=.*[0-9])/.test(this.newpassword) &&  /(?=.*[a-z])/.test(this.newpassword)){
          if(/(?=.*[!@#$%^&*.,])/.test(this.newpassword)){
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
      if(this.newpassword.length === 0){
        block1.style.display = 'none'
        block2.style.display = 'none'
        block3.style.display = 'none'
        block1.removeAttribute('class')
        block2.removeAttribute('class')
        block3.removeAttribute('class')
      }
    },
    async submit() {
      if(this.newpassword !== this.confirm){
        return this.error= true
      }
      if(!this.checkbox1 || !this.checkbox2){
        return this.errorcheckbox = true
      }
      else{
        let data = JSON.parse(localStorage.getItem("data"));
        data.password = this.newpassword;
        apiService.post("user/create", data).then(() => {
        localStorage.removeItem("data");
        router.push("activate-message");
      });
      }
    },
    recaptchaVerified() {
      const but = document.querySelector('.ButforAction')
      but.removeAttribute('disabled')
    },
    recaptchaExpired() {
    this.$refs.vueRecaptcha.reset();
    const but = document.querySelector('.ButforAction')
    but.setAttribute('disabled')
    },
    recaptchaFailed() {
    const but = document.querySelector('.ButforAction')
    but.setAttribute('disabled')
    }
  },
  data(){
    const {errorMessage: newpasswordError, value: newpassword} = useField('fieldName', yup.string().required().min(6).max(20));
    return{
      checkbox1: false,
      checkbox2: false,
      confirm: "",
      newpassword,
      newpasswordError,
      error: false,
      errorcheckbox: false,
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/controllers/mixin";
@import "../../scss/controllers/inputs";
@include custom-checkbox;
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
      .captcha{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        @include margin;
      }
      @include bp-576{
        .captcha{
          justify-content: center;
        }
      }
      .error{
        @include margin;
        color:rgb(211, 35, 35);
      }
      .errorCheck{
        @include margin;
        color:rgb(211, 35, 35);
      }
      .passlock {
        margin-top: 5px;
        width: 100%;
        display: flex;
        flex-direction: row;

        div {
          display: none;
          height: 10px;
          width: 32%;
          border-radius: 5px;
          border: rgb(212, 212, 212) solid 1px;
        }
        .red {
          background-color: red;
        }
        .orange {
          background-color: orange;
          display: flex;
          align-self: center;
        }
        .green {
          background-color: green;
        }
      }
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include margin;
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
      .wrapper-checkbox {
        width: 100%;
        .wrapper-line {
          a {
            margin-left: 5px;
            color: rgb(0, 0, 197);
            margin-top: 0;
          }
          @include margin;
          display: flex;
          flex-direction: row;
        }
      }
    }
    @include bp-576 {
      form {
        width: 80%;
        .wrapper-checkbox {
          width: 100%;
          .wrapper-line {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
