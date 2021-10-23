<template>
  <input type="text" class="inputForSmthing" :placeholder="placeholder" :value="modelValue"  @input="(event) => $emit('update:modelValue', event.target.value)" :id="id">
</template>
<script>
export default {
  name: 'CustomInputText',
  props: {
    placeholder: String,
    id: String,
    modelValue: String,
  },
}

</script>

<style lang="scss"  scoped>
  
    .inputForSmthing{
      padding:10px;
      border:0;
      box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
      border-left: 4px solid transparent;
      box-sizing: border-box;
      width: 100%;
    }
    .inputForSmthing:focus{
      border-left-color: rgb(162, 0, 255);
      border-width: 4px;
    }
  

</style>