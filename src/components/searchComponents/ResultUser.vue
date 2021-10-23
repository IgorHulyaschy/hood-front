<template>
  
    <div class="user" :id="email">
      <div class="box-avatar">
        <img :src="src" />
      </div>
      <div class="user-info">
        <span class="fullName">{{fname}} {{lname}}</span>
        <span class="geopos">{{country}}</span>
        <span class="stack"
          ><span>Stack:</span>{{stack}}</span
        >
        <span class="baseRate"><span>Base Daily Rate:</span>${{rate}} USD</span>
      </div>
      <div class="nav-profile-user" @click="click">
        <router-link  to="/user/profile" >More</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "ResultUsers",
  props: {
    lname: String,
    fname: String,
    country: String,
    stack: String,
    rate: Number,
    src: String,
    profile: String,
    email: String,
  },
  methods: {
    click(){
      localStorage.setItem('userEmail', this.email)
      
    }
  }

};
</script>

<style lang="scss" scoped>
@import '../../scss/controllers/mixin';

  .user {
    @include margin;
    @include shadow-box;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    .nav-profile-user {
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box-avatar {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: flex;
        border-radius: 50%;
        width: 90%;
        box-sizing: border-box;
      }
    }
    .user-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      width: 70%;
      color: #525861;
      .fullName {
        font-size: 20px;
        font-weight: bold;
      }
      .stack span,
      .baseRate span {
        color: rgb(162, 0, 255);
        font-weight: bold;
      }
    }
  }

</style>
