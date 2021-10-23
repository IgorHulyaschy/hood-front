<template>
  <nav class="info">
    <router-link class="navProfile" to="/profile" :id="nav1">Personal information</router-link>
    <router-link class="navProfile" to="/profileMore" :id="nav2">Account information</router-link>
    <router-view/>
  </nav>
</template>

<script>
export default {
  name: 'UserDataHeader',
  props: {
    nav1: String,
    nav2: String,
  }

}
</script>

<style lang="scss" scoped>
@import '../../../scss/controllers/mixin';
  .info{
    display: flex;
    flex-direction: row;
    a:hover {
      font-weight: bold;
    }
    #settings{
      font-weight: bold;
      color: rgb(17, 153, 69);
      border-bottom-color: rgb(18, 218, 94);
    }
    .navProfile{
      color: rgb(212, 212, 212);
      display: flex;
      justify-content: center;
      font-size: 28px;
      @include margin;
      width: 50%;
      border-bottom: solid rgb(212, 212, 212) 2px;
    }
    @include bp-576 {
      a {
        display: block;
        text-align: center;
      }
    }
  }

</style>