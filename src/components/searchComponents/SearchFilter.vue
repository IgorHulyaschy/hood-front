<template>
  <div class="map-nav">
    <div class="href-map">
      <router-link to="/search-map">Show map</router-link>
    </div>
    <div class="moreFilters">
      <a href="#"><i class="fas fa-signal"></i></a>
      <CustomRadio name="filter" value="byprice" id="byprice" v-model="selected"/><label for="byprice"
        >by price</label
      >
      <CustomRadio name="filter" value="byrating" id="byrating" v-model="selected"/><label for="byrating"
        >by rating</label
      >
    </div>
  </div>
</template>

<script>
import CustomRadio from "../controllers/CustomRadio";
export default {
  name: "SearchFilter",
  components: {
    CustomRadio,
  },
  data:() => ({
    selected: '',
  }),
};
</script>

<style lang="scss" scoped>
@import '../../scss/controllers/mixin';
@import '../../scss/controllers/inputs';
@include custom-checkbox;
.map-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10%;
  .href-map {
    @include margin;
    display: flex;
    justify-content: flex-start;
  }
  .moreFilters {
    @include margin;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    a {
      color: rgb(17, 153, 69);
      margin-right: 15px;
    }
    label {
      margin-right: 15px;
    }
  }
}
</style>
