<template>

    <div class="container-profile">
      <HeaderProfile profile="activePage"/>
      <UserAcc/>
    </div>

</template>

<script>
import HeaderProfile from '../components/HeaderProfile';
import UserAcc from '../components/UserAcc'
export default {
  name: 'Profile',
  components: {
    HeaderProfile,
    UserAcc,
  }
}
</script>

<style lang="scss" scoped>

    .container-profile{
      display: flex;
      flex-direction: row;

    }
</style>