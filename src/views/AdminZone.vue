<template>
  <div class="container-profile">
      <AdminMenuAside/>
      <AdminConsole/>
    </div>
</template>

<script>
import AdminMenuAside from '../components/AdminMenuAside';
import AdminConsole from '../components/AdminConsole'
export default {
  name: 'AdminZone',
  components: {
    AdminMenuAside,
    AdminConsole
  }
}
</script>
<style lang="scss" scoped>

    .container-profile{
      display: flex;
      flex-direction: row;

    }
</style>