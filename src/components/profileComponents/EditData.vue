<template>
  <div class="wrap-edit">
    <div class="title">
      Edit account information
    </div>
    <div class="wrap-inputs">
      <div class="col1">
        <div class="setting">
          <span>First name</span>
          <CustomInputText placeholder="First name..." v-model="data.fname" />

        </div>
        <div class="setting">
          <span>Base Daily Rate</span>
          <CustomInputText placeholder="Daily Rate..." v-model="data.rate" />
        </div>
        <div class="setting">
          <span>Phone number</span>
          <CustomInputText placeholder="Phone number..." v-model="data.phone" />
        </div>
        <div class="setting">
          <span>Login</span>
          <CustomInputText placeholder="Login..." v-model="data.login" />
        </div>
        <input type="file" @change="photoDownload" />
      </div>
      <div class="col2">
        <div class="setting">
          <span>Last name</span>
          <CustomInputText placeholder="Last name..." v-model="data.lname" />
        </div>
        <div class="setting">
          <span>Country</span>
          <CustomInputText placeholder="Country..." v-model="data.country" />
        </div>

        <div class="setting">
          <span>Stack</span>
          <CustomInputText placeholder="Stack..." v-model="data.stack" />
        </div>
        <div class="setting">
          <span>Category</span>
          <select class="select-list">
            <option>Front-end</option>
            <option>Back-end</option>
            <option>BA</option>
            <option>Project Manager</option>
          </select>
        </div>
        <CustomBut value="Save" @click="saveChanges" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomInputText from "../controllers/CustomInputText";
import CustomBut from "../controllers/CustomBut";
import apiService from "../../api/api";
import router from "../../router/index";

export default {
  name: "EditData",
  components: {
    CustomInputText,
    CustomBut,
  },
  beforeCreate() {
    const token = `JWT ${localStorage.getItem("accessToken")}`;
    apiService
      .get("/user/profile", { headers: { Authorization: token } })
      .then((res) => {
        this.data = res.data.user;
        let list = document.querySelector(".select-list");
        if (res.data.user.categoryId === 1) {
          list.selectedIndex = 0;
        }
        if (res.data.user.categoryId === 2) {
          list.selectedIndex = 1;
        }
        if (res.data.user.categoryId === 3) {
          list.selectedIndex = 2;
        }
        if (res.data.user.categoryId === 4) {
          list.selectedIndex = 3;
        }
        if (res.data.user.categoryId === 5) {
          list.selectedIndex = 4;
        }
      });
  },
  methods: {
    async saveChanges() {
      const categoryId =
        document.querySelector(".select-list").selectedIndex + 1;
      this.data.categoryId = categoryId;
      const token = `JWT ${localStorage.getItem("accessToken")}`;
      apiService
        .putWithToken("user/profile", this.data, {
          headers: { Authorization: token },
        })
        .then(() => {
          if(!localStorage.getItem('photo')){
            router.push("profile");
          }
          else {
            this.photo = localStorage.getItem('photo')
            this.data.photo = this.photo
            localStorage.removeItem('photo')
            apiService.putWithToken('user/photo',this.data, { headers: { Authorization: token },})
              .then(()=> {
                router.push("profile");
              })
          }
          
        });
    },
    photoDownload(e) {
      function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(localStorage.setItem('photo', reader.result));
          reader.onerror = (error) => reject(error);
        });
        
      }
      getBase64(e.target.files[0]) 
    }
  },
  data() {
    return {
      data: {},
      photo: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/controllers/mixin";
.wrap-edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  .title {
    display: flex;
    justify-content: center;
    @include margin;
    width: 100%;
    font-size: 32px;
  }
  .wrap-inputs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .col1 {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      width: 50%;
      .setting {
        @include margin;
        display: flex;
        flex-direction: column;
        width: 80%;

        .inputForSmthing {
          width: 50%;
        }
        span {
          display: flex;
          @include margin;
          color: rgb(182, 182, 182);
        }
      }
    }
    .col2 {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      width: 50%;
      .setting {
        @include margin;
        display: flex;
        flex-direction: column;
        width: 80%;
        .select-list {
          width: 50%;
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
        .inputForSmthing {
          width: 50%;
        }
        span {
          @include margin;
          color: rgb(182, 182, 182);
        }
      }
    }
  }
}
</style>
