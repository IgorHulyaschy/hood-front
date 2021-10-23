<template>
  <div class="wrap">
    <div class="cont">
      <UserDataHeader nav2="settings"/>
      <UserDataInfo/>
    </div>
  </div>
</template>

<script>
import UserDataInfo from './userDataComponents/UserDataInfo';
import UserDataHeader from './userDataComponents/UserDataHeader'
export default {
  name: "UserDataMore",
  components: {
    UserDataHeader,
    UserDataInfo,
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/controllers/mixin';
.wrap{
  width: 80%;
  .cont{
    width: 70%;
  }
}
@include bp-576 {
  .wrap{
    width: 90%;
    .cont {
      width: 100%;
    }
  }
}
</style>