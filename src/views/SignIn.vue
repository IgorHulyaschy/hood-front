<template>
  <HeaderForSigns text="Do not have an account?" nav="Sign up" rout="/signUp"/>
  <FormSignIn />
</template>

<script>
import HeaderForSigns from '../components/HeaderForSigns'
import FormSignIn from '../components/forms/FormSignIn'
export default {
  name: "SignIn",
  components:{
    HeaderForSigns,
    FormSignIn,
  }
}
</script>

<style>
  .container{
  display: flex;
  flex-direction: column;
  
}
</style>