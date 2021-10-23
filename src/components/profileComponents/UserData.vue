<template>
  <div class="wrap">
    <div class="cont">
      <UserDataHeader nav1="settings"/>
      <UserSettings/>
    </div>
  </div>
</template>

<script>
import UserDataHeader from './userDataComponents/UserDataHeader'
import UserSettings from './userDataComponents/UserSettings'
export default {
  name: "UserData",
  components: {
    UserDataHeader,
    UserSettings,
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