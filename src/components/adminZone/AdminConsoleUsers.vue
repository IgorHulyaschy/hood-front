<template>
  <div class="user">
    <div class="id">{{user_id}}</div>
    <div class="fname">{{ fname }}</div>
    <div class="lname">{{ lname }}</div>
    <div class="login">{{ login }}</div>
    <div class="category">{{ category }}</div>
    <div class="email">{{ email }} <input :id="id" type="button" value="delete" @click="deleteUser(id)"/></div>
  </div>
</template>

<script>
import apiService from '../../api/api';

export default {
  name: "AdminConsoleUsers",
  props: {
    id: String,
    user_id: Number,
    fname: String,
    lname: String,
    login: String,
    category: String,
    email: String,
  },
  methods: {
    async deleteUser(id){
      console.log(id)
      apiService.delete('user/delete', {data:{id: id}})
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .id {
    width: 5%;
    padding-left: 15px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    input[type="button"]{
      display: flex;
      align-self: flex-end;
      background-color: #fff;
      border: 1px solid red;
      border-radius: 3px;
      margin-right: 5px;
    }
    input[type="button"]:hover{
      background-color: red;
      color:white;
    }
    input[type="button"]:active{
      font-weight: bold;
      background-color: white;
      color: black;
    }
  }
}
</style>
