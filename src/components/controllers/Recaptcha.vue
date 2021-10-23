<template>
  <div class="captcha">
    <vue-recaptcha siteKey="6Le51bgaAAAAAIn-V8jmbdOc-FzWXUSwKI3Pdo9Q" 
    :show="show" 
    size="normal" 
    theme="light"
    :tabindex="0"
    @verify="recaptchaVerified"
    @expire="recaptchaExpired"
    @fail="recaptchaFailed"
    ref="vueRecaptcha">
    </vue-recaptcha>
  </div>
</template>

<script>

import vueRecaptcha from 'vue3-recaptcha2';

export default {
  name: 'Recaptcha',
  components: {
	vueRecaptcha
  },
  data() {
	return { show: true }
  },
  methods: {
    recaptchaVerified() {
    },
    recaptchaExpired() {
    this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {
    }
  }
};
</script>

<style lang="scss" >
@import '../../scss/controllers/mixin';
.captcha{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @include margin;
}
@include bp-576{
  .captcha{
    justify-content: center;
  }
}
</style>