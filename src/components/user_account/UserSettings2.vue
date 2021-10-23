<template>
  <div class="user-settings">
    <UserPhoto2 />
    <UserCol12/>
    <UserCol22/>
  </div>
</template>

<script>
import UserPhoto2 from './UserPhoto2'
import UserCol12 from './UserCol12'
import UserCol22 from './UserCol22'

export default {
  name: 'UserSettings',
  components: {
    UserPhoto2,
    UserCol12,
    UserCol22,
  },
  
  data() {
    return {
      data: {},
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../scss/controllers/mixin';
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