<template>
  <div class="container-profile">
    <HeaderProfile search="activePage"/>
    <UsersSearch/>
  </div>
</template>

<script>
import HeaderProfile from '../components/HeaderProfile';
import UsersSearch from '../components/UsersSearch'
export default {
  name: "Search",
  components: {
    HeaderProfile,
    UsersSearch,
  }
}
</script>

<style lang="scss" scoped>
    .container-profile{
      display: flex;
      flex-direction: row;

    }
</style>