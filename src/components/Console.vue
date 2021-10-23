<template>
  <div class="console-wrap">
    <CustomInputText placeholder="Type here to search" v-model="query" />
    <div class="console">
      <div class="dataConsole">
        <div class="id">ID</div>
        <div class="fname">First Name</div>
        <div class="lname">Last Name</div>
        <div class="login">Login</div>
        <div class="category">Category</div>
        <div class="email">E-mail</div>
      </div>
      <div class="users" v-for="user in list" :key="user.id">
        <AdminConsoleUsers 
          :id="user.id"
          :user_id="user.id"
          :fname="user.fname"
          :lname="user.lname"
          :login="user.login"
          :category="user.name"
          :email="user.email"
        />
        </div>
    </div>
  </div>
</template>

<script>
import CustomInputText from "./controllers/CustomInputText";
import AdminConsoleUsers from './adminZone/AdminConsoleUsers'
import apiService from "../api/api";
export default {
  name: "Console",
  components: {
    CustomInputText,
    AdminConsoleUsers,
  },
  data() {
    return {
      query: "",
      list: [{}]
    };
  },
  beforeCreate() {
    apiService
        .get("user/list")
        .then((res) => {
          this.list = res.data.users;
        })
  },

};
</script>

<style lang="scss" scoped>
@import "../scss/controllers/mixin";
.console-wrap {
  width: 80%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .inputForSmthing {
    width: 17%;
    display: flex;
    align-self: flex-end;
  }
  .console {
    width: 100%;
    @include margin;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    .dataConsole {
      width: 100%;
      height: 50px;
      background-color: rgb(230, 230, 230);
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .id{
        width: 5%;
        padding-left:15px;
      }
      .fname {
        width: 17%;
        padding-left: 15px;
      }
      .lname {
        width: 17%;
        padding-left: 15px;
      }
      .login {
        width: 14%;
        padding-left: 15px;
      }
      .category {
        width: 17%;
        padding-left: 15px;
      }
      .email {
        width: 30%;
        padding-left: 15px;
      }
    }
    .users {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      
    }
  }
}
</style>
