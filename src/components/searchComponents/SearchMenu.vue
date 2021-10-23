<template>
  <section class="filter">
    <div class="settings">
      <span class="sett">Search</span>
      <CustomInputText
        placeholder="Type your query..."
        v-model="data.query" @input="storageQuery"
      />
    </div>

    <div class="settings">
      <span class="sett">Location</span>
      <CustomInputText placeholder="Location" v-model="data.country" @input="storageCountry" />
    </div>

    <div class="settings">
      <span class="sett">Category</span>
      <select class="select-list" @change="storageCategory" v-model="selectedIndex">
        <option>Front-end</option>
        <option>Back-end</option>
        <option>BA</option>
        <option>Project Manager</option>
      </select>
    </div>

    <div class="settings">
      <span class="sett">Stack</span>
      <CustomInputText placeholder="Service" v-model="data.stack" @input="storageStack"/>
    </div>

    <div class="settings">
      <span class="sett">Period</span>
      <Calendar id="range" v-model="value" selectionMode="range" :manualInput="false"/>
    </div>
    <div class="settings">
      <CustomBut value="Search" @click="() => $emit('search')"/>
    </div>
  </section>
</template> 

<script>
import CustomInputText from "../controllers/CustomInputText";
import CustomBut from "../controllers/CustomBut";
import Calendar from 'primevue/calendar'
export default {
  name: "SearchMenu",
  components: {
    CustomInputText,
    CustomBut,
    Calendar,
  },
  data() {
    return {
      data: {},
      selectedIndex: 1,
    };
  },
  methods: {
    storageQuery(){
      localStorage.setItem('query', this.data.query)
    },
    storageCountry(){
      localStorage.setItem('country', this.data.country)
    },
    storageCategory(){
      switch(this.selectedIndex){
        case 'Front-end':
          localStorage.setItem('category', 1)
          break;
        case 'Back-end':
          localStorage.setItem('category', 2)
          break;
        case 'BA':
          localStorage.setItem('category', 3)
          break;
        case 'Project Manager':
          localStorage.setItem('category', 4)
          break;
        case 'Full-stack':
          localStorage.setItem('category', 5)
          break;
        
      }
    },
    storageStack(){
      localStorage.setItem('stack', this.data.stack)
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/controllers/mixin";
@import "../../scss/controllers/datepicker";

.filter {
  width: 20%;
  height: 90%;
  border-right: solid 1px rgb(212, 212, 212);
  display: flex;
  flex-direction: column;
  align-items: center;
  .settings {
    width: 85%;
    @include setting;
    box-sizing: border-box;
    #range{
      background-color: #fff;
      opacity: 1;
    }
    .inputForSmthing {
      width: 100%;
      box-sizing: border-box;
    }
    .select-list {
      padding: 10px;
      border: 0;
      box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
      font: inherit;
      letter-spacing: inherit;
      word-spacing: inherit;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
    }
  }
  .ButforAction {
    @include margin;
    width: 100%;
    margin-bottom: 10px;
  }
}
@include bp-576{
  .filter{
    width: 100%;
    height: auto;
  }
}
</style>
