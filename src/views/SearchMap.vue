<template>
  <div class="container-profile">
    <HeaderProfile search="activePage"/>
    <SearchFormMap/>
  </div>
</template>

<script>
import HeaderProfile from '../components/HeaderProfile';
import SearchFormMap from '../components/SearchFormMap'
export default {
  name: "Search",
  components: {
    HeaderProfile,
    SearchFormMap,
  }
}
</script>

<style lang="scss" scoped>
    .container-profile{
      display: flex;
      flex-direction: row;

    }
</style>