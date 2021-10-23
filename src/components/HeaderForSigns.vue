<template>
  <div>
    <header>
      <img class="logo" src="../assets/logo.svg">
      <nav>{{ text }}
        <router-link :to="rout" class="navBut">
          {{ nav }}
        </router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderForSigns",
  props: {
    nav: String,
    text: String,
    rout: String,
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/controllers/mixin';
    header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10px;
      margin-left: 10px;
      @media (max-width: 576px) and (min-width: 1px){
        flex-direction: column;
        align-items: center;
      }
      img{
        margin-left: 10px;
      }
      nav{
        @include margin;
        margin-right: 10px;
        
      }
    }
</style>