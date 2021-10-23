<template>

    <div class="container-profile">
      <HeaderProfile search="activePage"/>
      <UserAcc2/>
    </div>

</template>

<script>
import HeaderProfile from '../components/HeaderProfile';
import UserAcc2 from '../components/user_account/UserAcc2'
export default {
  name: 'UserProfile',
  components: {
    HeaderProfile,
    UserAcc2,
  }
}
</script>

<style lang="scss" scoped>

    .container-profile{
      display: flex;
      flex-direction: row;

    }
</style>