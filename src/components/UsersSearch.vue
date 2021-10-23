<template>
  <div class="wrapper-content">
    <BreadCrums location="Search"/>
    <section class="wrapper-profile-content">
      <div class="profile-content">
        <SearchForm/>
      </div>
    </section>
  </div>
</template>

<script>
import BreadCrums from './profileComponents/BreadCrums'
import SearchForm from './searchComponents/SearchForm'
export default {
  name: "UsersSearch",
  components: {
    BreadCrums,
    SearchForm,
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