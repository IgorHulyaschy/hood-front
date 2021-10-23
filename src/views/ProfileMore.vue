<template>
  <div class="container-profile">
    <HeaderProfile profile="activePage" />
    <UserAccMore />
  </div>
</template>

<script>
import HeaderProfile from "../components/HeaderProfile";
import UserAccMore from "../components/UserAccMore";
export default {
  name: "ProfileMore",
  components: {
    HeaderProfile,
    UserAccMore,
  },
};
</script>

<style lang="scss" scoped>
.container-profile {
  display: flex;
  flex-direction: row;
}
</style>
