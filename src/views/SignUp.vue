<template>
  <HeaderForSigns rout="/signIn" text="Already have an acoount? " nav="Log in"/>
  <FormSignUp/>
</template>

<script>
import HeaderForSigns from '../components/HeaderForSigns';
import FormSignUp from '../components/forms/FormSignUp';
export default {
  name: 'SignUp',
  components: {
    HeaderForSigns,
    FormSignUp,
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  
}
</style>