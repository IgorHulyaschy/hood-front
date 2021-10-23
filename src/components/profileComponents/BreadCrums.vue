<template>
  <header>
    <span class="path"><router-link to="/">Home</router-link> > {{location}}</span>
    <nav class="account-main">
      {{info.fname}} {{info.lname}}
    </nav>
  </header>
</template>

<script>
import apiService from '../../api/api'
import router from '../../router/index'
export default {
  
  name: 'BreadCrums',
  props: {
    location: String,
  },
  beforeCreate() {
    const token = `JWT ${localStorage.getItem("accessToken")}`;
    apiService
      .get("user/profile", { headers: { Authorization: token } })
      .then((res) =>{
        this.info = res.data.user
      })
      .catch(() =>{
        const refreshToken = `JWT ${localStorage.getItem('refreshToken')}`
        apiService.get('refresh', {headers: {Authorization: refreshToken}})
          .then((res) => {
            localStorage.setItem('accessToken', res.data.accessToken)
            localStorage.setItem('refreshToken', res.data.refreshToken)
            const accessToken = localStorage.getItem('accessToken')
            apiService.get('user/profile',{headers: {Authorization: accessToken}})
              .then((res) => {
                this.info = res.data.user
              })
          })
          .catch(() => {
            router.push('signIn')
          })
      })
  },
  data:() => ({
      info: {
      },
  })
}
</script>

<style lang="scss" scoped>
@import '../../scss/controllers/mixin';
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: solid 1px rgb(212, 212, 212);
    background-color: rgb(255, 255, 255);
    border-bottom-right-radius: 5px;
    .path, .account-main{
      padding: 10px;
      margin: 0px;
    }
  }
</style>