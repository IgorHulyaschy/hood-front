<template>
  
    <input type="button" :value="value" class="ButforAction">
  
</template>

<script>
export default {
  name: 'CustomBut',
  props: {
    value: String,
  }
}
</script>

<style lang="scss" scoped>
  .ButforAction{
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 22px;
    border-radius: 5px;
    border-color: rgb(162, 0, 255);
    background-color: rgb(162, 0, 255);
    color: white;
    cursor: pointer;
    
  }
  .ButforAction:hover{
    font-weight:bold;
    background-color:white;
    color:rgb(162, 0, 255);
  }
  .ButforAction:active{
    border-color: rgb(162, 0, 255);
    background-color: rgb(162, 0, 255);
    color: white;
  }

</style>