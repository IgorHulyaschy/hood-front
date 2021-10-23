<template>
  <section class="wrapper-user-photo">
    <div class="avatar">
      <img :src="src" class="avatar-photo" alt="">

    </div>
  </section>
</template>

<script>
import apiService from '../../api/api'
export default {
  name: 'UserPhoto',
  beforeCreate(){
    const email = localStorage.getItem('userEmail')
    apiService.getWithParams(`user/profile/${email}`)
      .then((res) => {
        console.log(res.data)
        this.src = res.data.photo
        
      }) 
  },
  
  data() {
    return {
      src: '',
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/controllers/mixin';
.wrapper-user-photo{
  width: 20%;
  @include margin;
  .avatar{
    @include margin;
    width: 100%;
    .avatar-photo{
      @include margin;
      width: 100%;
      border-radius: 50%;
    }    
  }
  a{
    color: rgb(17, 153, 69);
  }
}
@include bp-576 {
  .wrapper-user-photo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
}

</style>