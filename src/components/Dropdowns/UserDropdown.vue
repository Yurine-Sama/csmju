<template>
  <div class="flex">
    <div class="flex">
      <div class="p-2 mx-4 rounded-full shadow-lg bg-blueGray-100">
        <h4 class="px-4 font-semibold leading-normal text-md text-blueGray-500">
          ผู้ดูแลระบบ |
          <span class="text-lg text-blueGray-700">
            {{ this.introduction }} {{ this.firstname }} {{ this.lastname }}
          </span>
        </h4>
      </div>
    </div>
    <a
      class="block text-blueGray-500"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="flex items-center">
        <span
          class="inline-flex items-center justify-center w-12 h-12 text-sm text-white rounded-full bg-blueGray-200"
        >
          <img
            alt="..."
            class="w-full align-middle border-none rounded-full shadow-lg"
            :src="image"
          />
        </span>
      </div>
    </a>

    <div
      ref="popoverDropdownRef"
      class="z-50 float-left py-2 text-base text-left list-none bg-white rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
        href="https://wwwdev.csmju.com/"
        target="_blank"
        class="block w-full px-4 py-2 text-sm font-normal text-blueGray-700 bg-transparent hover:text-emerald-600 whitespace-nowrap"
      >
        ข้อมูล API
      </a>
      <router-link
        to="changepassword"
        class="block w-full px-4 py-2 text-sm font-normal text-blueGray-700 bg-transparent hover:text-emerald-600 whitespace-nowrap"
      >
        เปลี่ยนรหัสผ่าน
      </router-link>
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <button
        @click="onClickLogout"
        class="block w-full px-4 py-2 text-sm font-semibold hover:text-emerald-600 bg-transparent whitespace-nowrap text-blueGray-700"
      >
        ออกจากระบบ
      </button>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
//import image from "@/assets/img/team-1-800x800.jpg";
import http from "@/services/APIService";

export default {
  data() {
    return {
      dropdownPopoverShow: false,

      personnel_array: [],
      image: "",
      introduction: "",
      firstname: "",
      lastname: "",
    };
  },

  methods: {
    getPersonnelData() {
      http
        .get(`personnel/id/17`)
        .then((response) => {
          this.personnel_array = response.data;
          //Get data from API
          this.introduction = this.personnel_array.titlePosition;
          this.firstname = this.personnel_array.firstName;
          this.lastname = this.personnel_array.lastName;
          this.image = this.personnel_array.personnelPhoto;
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
              //Call Sweet Alert
              const Toast = this.$swal.mixin({
                position: "center",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "error",
                title: "Connection Error",
              });
            }
          }
        });
    },

    toggleDropdown: function(event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownPopoverShow = false;
      }
    },
    onClickLogout() {
      localStorage.removeItem("user");
      localStorage.removeItem("permission");
      this.$router.push({ name: "Login" });
    },
  },

  mounted() {
    document.addEventListener("click", this.close);
    this.getPersonnelData();
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
};
</script>
