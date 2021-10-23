<template>
  <div class="wrapper-content">
    <BreadCrums location="Search"/>
    <section class="wrapper-profile-content">
      <div class="profile-content">
        <SearchMap/>
      </div>
    </section>
  </div>
</template>

<script>
import BreadCrums from './profileComponents/BreadCrums'
import SearchMap from './searchComponents/SearchMap'
export default {
  name: "SearchFormMap",
  components: {
    BreadCrums,
    SearchMap,
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main";
.wrapper-content {
  width: 95vw;
  height: 100vh;
  background-color: rgb(241, 241, 241);
  .wrapper-profile-content {
    display: flex;
    justify-content: center;
    align-items: center;
    .profile-content {
      @include margin;
      width: 90%;
      height: 80vh;
      background-color: white;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      overflow: auto;
    }
    @include bp-576 {
      .profile-content {
        width: 95%;
        height: 90vh;
      }
    }
  }
}
</style>