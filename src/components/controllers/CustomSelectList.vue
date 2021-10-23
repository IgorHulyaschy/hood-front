<template>
  <div class="select-box">
    <div class="options-container">
      <div class="option" @click="close('ua')">
        <input type="radio" class="radio" id="ua" name="category" />
        <label class="flag" for="ua"
          ><img src="../../assets/flags/ukraine.png" />Ukraine</label
        >
      </div>

      <div class="option" @click="close('rus')">
        <input type="radio" class="radio" id="rus" name="category" />
        <label class="flag" for="rus"
          ><img src="../../assets/flags/russia.png" alt="" />Russia</label
        >
      </div>

      <div class="option" @click="close('usa')">
        <input type="radio" class="radio" id="usa" name="category" />
        <label class="flag" for="usa"
          ><img src="../../assets/flags/usa.png" alt="" />USA</label
        >
      </div>

      <div class="option" @click="close('cnd')">
        <input type="radio" class="radio" id="cnd" name="category" />
        <label class="flag" for="cnd"
          ><img src="../../assets/flags/canada.png" alt="" />Canada</label
        >
      </div>

      <div class="option" @click="close('blr')">
        <input type="radio" class="radio" id="blr" name="category" />
        <label class="flag" for="blr"
          ><img src="../../assets/flags/belarus.png" alt="" />Belarus</label
        >
      </div>

      <div class="option" @click="close('frc')">
        <input type="radio" class="radio" id="frc" name="category" />
        <label for="frc"
          ><img src="../../assets/flags/france.png" alt="" />France</label
        >
      </div>
    </div>

    <div class="selected" @click="selectList">
      Select Country
    </div>
  </div>
</template>

<script>
import apiService from '../../api/api'
export default {
  name: "CustomSelectList",
  methods: {
    selectList() {

      const optionsContainer = document.querySelector(".options-container");
      optionsContainer.classList.toggle("active");
      
    },
    close(e){
      const selected = document.querySelector(".selected");
      const optionsContainer = document.querySelector(".options-container");
      switch(e){
        
        case 'ua': 
          selected.innerHTML = document.querySelector("label[for=ua]").innerHTML;
          optionsContainer.classList.remove("active");
          break;
        case 'rus': 
          selected.innerHTML = document.querySelector("label[for=rus]").innerHTML;
          optionsContainer.classList.remove("active");
          break;
        case 'usa': 
          selected.innerHTML = document.querySelector("label[for=usa]").innerHTML;
          optionsContainer.classList.remove("active");
          break;
        case 'cnd': 
          selected.innerHTML = document.querySelector("label[for=cnd]").innerHTML;
          optionsContainer.classList.remove("active");
          break;
        case 'blr': 
          selected.innerHTML = document.querySelector("label[for=blr]").innerHTML;
          optionsContainer.classList.remove("active");
          break;
        case 'frc': 
          selected.innerHTML = document.querySelector("label[for=frc]").innerHTML;
          optionsContainer.classList.remove("active");
          break;
      }
    },
    closeList(e) {
      const selected = document.querySelector(".selected");
      const optionsContainer = document.querySelector(".options-container");
        if(e == 'ru'){
          selected.innerHTML = e.querySelector("label").innerHTML;
          optionsContainer.classList.remove("active");
        }
    },
  },
  beforeCreate(){
      const token = `JWT ${localStorage.getItem('accessToken')}`

    apiService.get('user/profile',{headers: {Authorization: token}})
      .then((res) => {
        const country = res.data.user.country
        console.log(country)
        const selected = document.querySelector('.selected')
        switch(country){
          case 'Ukraine': 
            selected.innerHTML = document.querySelector("label[for=ua]").innerHTML;
            break;
          case 'Russia':
            selected.innerHTML = document.querySelector("label[for=rus]").innerHTML;
            break;
          case 'USA':
            selected.innerHTML = document.querySelector("label[for=usa]").innerHTML;
            break;
          case 'Canada':
            selected.innerHTML = document.querySelector("label[for=cnd]").innerHTML;
            break;
          case 'Belarus':
            selected.innerHTML = document.querySelector("label[for=blr]").innerHTML;
            break;
          case 'France':
            selected.innerHTML = document.querySelector("label[for=frc]").innerHTML;
            break;
        }
      })
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/controllers/variables";
img{
  margin-right:5px;
}
.select-box .options-container {
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  overflow: hidden;
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  order: 1;
}

.selected {
  margin-bottom: 8px;
  position: relative;
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  order: 0;
  height: 16px;
  font-size: $font-size;
  display: flex;
  align-items: center;
}

.selected::after {
  content: "";
  background: url("../../assets/arrow-down2.svg");
  background-size: 15px;
  background-repeat: no-repeat;
  position: absolute;
  height: 16px;
  width: 16px;
  right: 5px;
  top: 11px;
  transition: all 0.4s;
}

.select-box .options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
}

.select-box .options-container.active + .selected::after {
  transform: rotateX(180deg);
}

.select-box .options-container::-webkit-scrollbar {
  width: 8px;
  background: #b3b3b3;
}

.select-box .options-container::-webkit-scrollbar-thumb {
  background: #525861;
  border-radius: 8px;
}

.select-box .option,
.selected {
  cursor: pointer;
}

.select-box .option:hover {
  background: #d6d6d6;
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}
</style>
