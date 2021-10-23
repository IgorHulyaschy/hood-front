<template>
  <div class="wrapper-menu">
      <img class="logo-small" src="../assets/logo-small2.png">
      <nav class="menu">
        <router-link to="#"><i class="fas fa-users-cog" id="activePage"></i></router-link>
      </nav>
    </div>
</template>

<script>
export default {
  name: "AdminZoneAside",
  mounted() {
    let svgImg = document.createElement('script')
    svgImg.setAttribute('src', 'https://kit.fontawesome.com/4a93b75334.js')
    svgImg.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(svgImg)
  },
}
</script>
<style lang="scss" scoped>
@import '../scss/controllers/mixin';
    .wrapper-menu{
      display: flex;
      flex-direction: column;
      width: 90px;
      height: 100vh;
      background-color: black;
      .logo-small{
        @include margin;
        width: 90px;
        height: 75px;
      }
      .menu{
        display: flex;
        justify-content: center;
        align-self: center;
        flex-direction: column;
        width: 100%;
        @include margin;
        i{
          @include margin;
          cursor: pointer;
          display: flex;
          justify-content: center;
          width: 100%;
          color: grey;
          font-size: 35px;
        }
        i:hover{
          color: white;
        }
        i:active{
          color: white;
          border-left: solid white 4px;
        }
        #activePage{
          color: white;
          border-left: solid white 4px;
        }
        
      }
    }
</style>