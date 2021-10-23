<template>
  <div class="content">
    <section class="wrapper">
      <form>
        <span>Sign in</span>
        <CustomInputText placeholder="Email" v-model="data.email" />
        <CustomInputPass placeholder="Password" v-model="data.password" />
        <div class="error" v-if="error">Incorrect password or email</div>
        <NavToRecoverPass />
        <CustomBut value="Sign in" @click="submit" />
      </form>
    </section>
  </div>
</template>

<script>
import CustomBut from "../controllers/CustomBut";
import CustomInputText from "../controllers/CustomInputText";
import CustomInputPass from "../controllers/CustomInputPass";
import NavToRecoverPass from "../controllers/NavToRecoverPass";
import apiService from "../../api/api";
import router from "../../router/index";
import env from "dotenv";
env.config();
export default {
  name: "FormSignIn",
  components: {
    CustomInputText,
    CustomBut,
    CustomInputPass,
    NavToRecoverPass,
  },
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
      error: false
    };
  },
  methods: {
    async submit() {
      console.log(process.env.EMAIL)
      if (
        this.data.email === process.env.EMAIL &&
        this.data.password === process.env.PASSWORD
      ) {
        router.push("adminZone");
      } else {
        apiService
          .post("logIn", this.data)
          .then((res) => {
            localStorage.setItem("accessToken", res.data.tokens.accessToken);
            localStorage.setItem("refreshToken", res.data.tokens.refreshToken);
            return router.push("profile");
          })
          .catch(() => {
            this.error= true
          });
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
      .error{
        @include margin;
        color: rgb(194, 34, 34);
      }
      span {
        display: flex;
        align-self: flex-start;
        color: rgb(0, 0, 0);
        font-size: 32px;
      }
      input[type="text"] {
        @include margin;
      }
      input[type="password"] {
        @include margin;
      }
      input[type="button"] {
        display: flex;
        align-self: flex-end;
        @include margin;
      }
      a {
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
