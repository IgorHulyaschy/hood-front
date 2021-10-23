<template>
  <HeaderForSigns rout="/signIn" text="Back to" nav="Sign in"/>
  <FormMessage/>
</template>

<script>
import HeaderForSigns from '../components/HeaderForSigns'
import FormMessage from '../components/forms/FormMessage'
export default {
  name: 'ResetMessage',
  components: {
    HeaderForSigns,
    FormMessage
  }
}
</script>

<style>
.container{
  display: flex;
  flex-direction: column;
  
}
</style>