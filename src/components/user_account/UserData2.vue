<template>
  <div class="wrap">
    <div class="cont">
      <UserDataHeader2 nav1="settings"/>
      <UserSettings2/>
    </div>
  </div>
</template>

<script>
import UserDataHeader2 from './UserDataHeader2'
import UserSettings2 from './UserSettings2'
export default {
  name: "UserData",
  components: {
    UserDataHeader2,
    UserSettings2,
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