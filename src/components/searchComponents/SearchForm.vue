<template>
  <div class="search-container">
    <SearchMenu @search="search"/>
    <section class="result">
      <div class="wrap-moreFilters">
        <SearchFilter/>
        <div class="search-result">
            <div class="error" v-if="noresult">No matches</div>
            <ul class="user-results" v-if="prelist">
              <li v-for="user in users" :key="user.id">
                <ResultUser
                  :email="user.email"
                  :src="user.photo"
                  :fname="user.fname"
                  :lname="user.lname"
                  :country="user.country"
                  :stack="user.stack"
                  :rate="user.rate"
                />
              </li>
            </ul>
            <ul class="user-results" v-if="searchResult">
              <li v-for="user in result" :key="user.id">
                <ResultUser
                  :email="user.email"
                  :src="user.photo"
                  :fname="user.fname"
                  :lname="user.lname"
                  :country="user.country"
                  :stack="user.stack"
                  :rate="user.rate"
                />
              </li>
            </ul>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchMenu from "./SearchMenu";
import SearchFilter from './SearchFilter';
import ResultUser from './ResultUser'
import apiService from '../../api/api'

export default {
  name: "SearchForm",
  components: {
    SearchMenu,
    SearchFilter,
    ResultUser,
  },
  data() {
    return {
      users: [{}],
      terms: {},
      prelist: true,
      searchResult: false,
      result: [{}],
      noresult: false,
      user: {},
    }
  },
  beforeCreate(){
    apiService.get('user/list')
      .then((res)=> {
        this.users = res.data.users;
      })
  },
  methods:{
    search(){
      this.noresult = false;
      if(localStorage.getItem('query')){
        this.terms.search = localStorage.getItem('query')
        
      }
      if(localStorage.getItem('country')){
        this.terms.country = localStorage.getItem('country')
      }
      if(localStorage.getItem('category')){
        this.terms.categoryId = localStorage.getItem('category')
      }
      if(localStorage.getItem('stack')){
        this.terms.stack = localStorage.getItem('stack')
      }
      apiService.post('user/search', this.terms)
        .then((res) => {
          if(res.data.users.length === 0){
            this.searchResult = false;
            this.prelist = false;
            this.noresult = true;
          }
          else {
            this.result = res.data.users
            this.searchResult = true;
            this.prelist = false;
            this.noresult = false;
            localStorage.removeItem('query')
            localStorage.removeItem('country')
            localStorage.removeItem('category')
            localStorage.removeItem('stack')
            this.terms.search=''
            this.terms.country=''
            this.terms.stack=''
          }
          
        })
    },
  }
  
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
      .user-results {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
      }
      
      .search-result {
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        .error{
          @include margin;
          width: 100%;
          display: flex;
          align-content: center;
          justify-content: center;
        }
        li{
          list-style-type: none;
          width: 47%
        }
      }
      @include bp-576{
        .user-results{
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
        }
        .search-result {
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
          li{
            @include margin;
            list-style-type: none;
            width: 100%;
          }
        }
      }
    }
    @include bp-576{
      width: 90%;
    }
  }
}
@include bp-576{
  
  .search-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  }
}
</style>
