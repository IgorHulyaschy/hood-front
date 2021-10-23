<template>
  <section class="wrapper-user-col2">
        <div class="setting"><span>Last name</span>
          <CustomInputText placeholder="Last name..." v-model="info.lname"/>
        </div>
        
        <div class="setting"><span>Stack</span>
          <CustomInputText placeholder="Category..." v-model="info.stack"/>
        </div>
        <div class="setting"><span>Mobile phone</span>
          <CustomInputText placeholder="Phone number..." id="phoneOperator" v-model="info.phone"/>
        </div>
      </section>
</template>

<script>
import CustomInputText from '../controllers/CustomInputText'
import apiService from '../../api/api'

export default {
  name: 'UserCol22',
  components: {
    CustomInputText,
  },
  data:() => ({
    info: {},
  }),
  created(){
    const email = localStorage.getItem('userEmail')
    apiService.getWithParams(`user/profile/${email}`)
      .then((res) => {
        console.log(res.data)
        this.info = res.data
      })
  }

}
</script>

<style lang="scss" scoped>
@import '../../scss/controllers/mixin';
.wrapper-user-col2{
  width: 30%;
  @include margin;
  .setting{
    display: flex;
    flex-direction: column;
    width: 100%;
    .select-list{
      padding:10px;
      border:0;
      box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
      font: inherit;
      letter-spacing: inherit;
      word-spacing: inherit;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
    }
    span{
      @include margin;
      color: rgb(182, 182, 182);
    }
    #phoneOperator {
      margin-bottom: 30px;
    }
  }
}
@include bp-576 {
  .wrapper-user-col2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-top: 0;
  }
}
</style>