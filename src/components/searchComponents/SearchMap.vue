<template>
  <div class="search-container">
    <SearchMenu />
    <section class="result">
      <div class="wrap-moreFilters">
        <div class="map-nav">
          <div class="href-map">
            <router-link to="/search">Return to results</router-link>
          </div>
        </div>
        <div class="wrap-map">
          <Map />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchMenu from "./SearchMenu";
import Map from "../controllers/Map";
export default {
  name: "SearchMap",
  components: {
    SearchMenu,
    Map,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/controllers/mixin";
.search-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .result {
    width: 80%;
    height: 90%;
    display: flex;
    justify-content: center;
    .wrap-moreFilters {
      height: 100%;
      width: 90%;
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
      .user-results {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
      }
      @include bp-576 {
        .user-results {
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
        }
      }
    }
    @include bp-576 {
      width: 90%;
    }
  }
}
@include bp-576 {
  .search-container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .result {
      height: auto;
    }
  }
}
</style>
