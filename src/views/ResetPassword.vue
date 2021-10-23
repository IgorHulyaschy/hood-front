<template>
  <HeaderForSigns text="Do not have an account?" nav="Sign in" rout="/signIn"/>
  <FormResetPass/>
</template>

<script>
import FormResetPass from '../components/forms/FormResetPass'
import HeaderForSigns from '../components/HeaderForSigns'
export default {
  name: "ResetPassword",
  components: {
    FormResetPass,
    HeaderForSigns,
  }
}
</script>

<style>
.container{
  display: flex;
  flex-direction: column;
  
}
</style>