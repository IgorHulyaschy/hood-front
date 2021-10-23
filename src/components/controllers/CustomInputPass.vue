<template>
  <input type="password" class="inputForSmthing" :placeholder="placeholder" :value="modelValue" @input="(event) => $emit('update:modelValue', event.target.value)"/>
</template>

<script>
export default {
  name: 'CustomInputPass',
  props:{
    placeholder: String,
    modelValue: String,
  }
}
</script>

<style>
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