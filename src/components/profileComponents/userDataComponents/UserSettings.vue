<template>
  <div class="user-settings">
    <UserPhoto />
    <UserCol1/>
    <UserCol2/>
  </div>
</template>

<script>
import UserPhoto from './settings/UserPhoto'
import UserCol1 from './settings/UserCol1'
import UserCol2 from './settings/UserCol2'

export default {
  name: 'UserSettings',
  components: {
    UserPhoto,
    UserCol1,
    UserCol2,
  },
  
  data() {
    return {
      data: {},
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../../scss/controllers/mixin';
.user-settings{
  @include margin;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
}
@include bp-576 {
  .user-settings{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>