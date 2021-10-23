<template>
  <div class="wrapper-for-gradient">
    <div class="gradient">
      <img class="mail-img" src="../../assets/mail.png">
      <span class="capital-font">Your are ready to go</span>
      <span> {{msg}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormMessage',
  props: {
    msg: String,
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/controllers/mixin';
.wrapper-for-gradient{
    display: flex;
    justify-content: center;
    @include margin;
    .gradient{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @include gradient;
      @media (max-width: 576px) and (min-width: 1px){
        width: 80vw;
        height: 80vw;
      }
      .mail-img{
        width: 40%;
        height: 40%;
      }
      .capital-font{
        font-size: 32px;
        font-weight: bold;
        @include margin;
        @media (max-width: 576px) and (min-width: 1px){
          font-size: 24px;
        }
      }
      span{
        display: flex;
        align-self: center;
      }
    }
  }
</style>