<template>
  <HeaderForSigns rout="/signIn" text="Already have an account?" nav="Log in"/>
  <FormCompleteAcc/>
</template>

<script>
import HeaderForSigns from '../components/HeaderForSigns'
import FormCompleteAcc from '../components/forms/FormCompleteAcc'
export default {

  name: 'CompleteAcc',
  components: {
    HeaderForSigns,
    FormCompleteAcc,
  }
}
</script>

<style>

</style>