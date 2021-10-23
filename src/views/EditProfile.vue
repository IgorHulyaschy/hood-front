<template>
  <div class="container-profile">
      <HeaderProfile profile="activePage"/>
      <EditConsole/>
    </div>
</template>

<script>
import HeaderProfile from '../components/HeaderProfile';
import EditConsole from '../components/EditConsole'
export default {
  name: 'EditProfile',
  components: {
    HeaderProfile,
    EditConsole
  }
}
</script>

<style lang="scss" scoped>

    .container-profile{
      display: flex;
      flex-direction: row;

    }
</style>