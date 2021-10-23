<template>
  <input
    type="radio"
    :name="name"
    :id="id"
    :selected="selected"
    v-model="selected"
  />
</template>

<script>
export default {
  name: "CustomRadio",
  props: {
    name: String,
    id: String,
 
  },
};
</script>

<style lang="scss"></style>
