<template>
  <section class="wrapper-user-col1">
    <div class="setting">
      <span>First name</span>
      <CustomInputText placeholder="Name..." v-model="info.fname"/>
    </div>
    <div class="setting">
      <span>Username</span>
      <CustomInputText placeholder="login" v-model="info.login" />
    </div>
    <div class="setting">
      <span>Country</span>
      <CustomInputText placeholder="country" v-model="info.country" />
    </div>
  </section>
</template>

<script>
import CustomInputText from '../controllers/CustomInputText'
import apiService from '../../api/api'
export default {
  name: "UserCol1",
  components:{
    CustomInputText,
  },
  data:() => ({
    info: {},
  }
  ),
  created(){
    const email = localStorage.getItem('userEmail')
    apiService.getWithParams(`user/profile/${email}`)
      .then((res) => {
        console.log(res.data)
        this.info = res.data
      })
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/controllers/mixin";
@import "../../scss/controllers/variables";
.wrapper-user-col1 {
  width: 30%;
  @include margin;
  .setting {
    @include setting;
    @include margin;
    span{
      color: rgb(182, 182, 182);
    }
    .select-box {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
    .select-list{
      padding:10px;
      border:0;
      box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
      font: inherit;
      letter-spacing: inherit;
      word-spacing: inherit;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
    }
  }
}
@include bp-576 {
  .wrapper-user-col1 {

    width: 90%;
  }
}
</style>