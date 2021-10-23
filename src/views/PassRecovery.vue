<template>
  <HeaderForSigns rout="/signIn" text="Back to" nav="Sign in"/>
  <FormPassRecov/>
</template>

<script>
import HeaderForSigns from '../components/HeaderForSigns'
import FormPassRecov from '../components/forms/FormPassRecov'
export default {
  name: 'PassRecovery',
  components: {
    HeaderForSigns,
    FormPassRecov
  }
}
</script>

<style>
.container{
  display: flex;
  flex-direction: column;
  
}
</style>