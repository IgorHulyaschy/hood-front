<template>
  <div class="wrap-cont">
    <div>
      <span>E-mail</span>
      <CustomInputText placeholder="email" v-model="info.email" />
    </div>
    <div>
      <span>Country</span>
      <CustomInputText placeholder="country" v-model="info.country" />
    </div>
    
  </div>
  <div class="wrap-cont">
    <div>
      <span>Stack</span>
      <CustomInputText placeholder="stack" v-model="info.stack" />
    </div>
    <div>
      <span>Base Daily Rate</span>
      <CustomInputText placeholder="daily rate" v-model="info.rate" />
    </div>
  </div>
  <div class="resetpass">
    <router-link to="password-recovery">Change password ></router-link>
    <router-link to="editprofile">Edit Profile ></router-link>
    <router-link @click="logout" to="signIn"> Log out ></router-link>
  </div>
</template>

<script>
import CustomInputText from "../../controllers/CustomInputText";
import apiService from "../../../api/api";
export default {
  name: "UserDataInfo",
  components: {
    CustomInputText,
  },
  data: () => ({
    info: {},
  }),
  beforeCreate() {
    const token = `JWT ${localStorage.getItem("accessToken")}`;
    console.log(token);
    apiService
      .get("user/profile", { headers: { Authorization: token } })
      .then((res) => {
        this.info = res.data.user;
      });
  },
  methods: {
    logout(){
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/controllers/mixin";
.wrap-cont {
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
    margin-right: 40px;

    span {
      margin-top: 40px;
      color: rgb(182, 182, 182);
    }
  }
}
@include bp-576 {
  .wrap-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    div {
      margin-right: 0;
    }
  }
}
.resetpass {
  width: 60%;
  @include margin;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  a {
    color: rgb(17, 153, 69);
  }
  a:hover{
    font-weight: bold;
  }
}
</style>
