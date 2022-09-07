<template>
  <nav
    class="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow custom navbar-expand-lg"
  >
    <div
      class="container flex flex-wrap items-center justify-between px-4 mx-auto"
    >
      <div
        class="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/home">
          <img src="@/assets/img/logo.png" alt="" class="h-12 reletive" />
        </router-link>
        <button
          class="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          @click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div
        class="items-center flex-grow lg:flex"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col list-none z-3 lg:flex-row lg:ml-auto">
          <li class="flex items-center">
            <router-link
              to="/home"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
            >
              หน้าแรก
            </router-link>
          </li>

          <li class="flex items-center">
            <about-dropdown />
          </li>

          <li class="flex items-center">
            <router-link
              to="/news"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700 hover:text-emerald-600"
            >
              ข่าวสาร
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/program"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
            >
              หลักสูตร
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/alumnus"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700 hover:text-emerald-600"
            >
              ศิษย์เก่า
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              to="/download"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700 hover:text-emerald-600"
            >
              ดาวน์โหลดเอกสาร
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              to="/contact"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700 hover:text-emerald-600"
            >
              ติดต่อเรา
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link to="/auth/login">
              <button
                @click="checkLogin()"
                class="px-4 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-emerald-500 rounded-lg shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
                type="button"
              >
                เข้าสู่ระบบ
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AboutDropdown from "@/components/Dropdowns/AboutMain.vue";
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      navbarOpen: false,
      dropdownPopoverShow: false,
    };
  },
  methods: {
    checkLogin() {
      let user = JSON.parse(window.localStorage.getItem("user"));
      let permission = JSON.parse(window.localStorage.getItem("permission"));

      let status = user.status;
      let type = user.type[0];
      let role = permission.role;

      if (status == "success" && type == "student" && role == 2) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "กำลังเข้าสู่ระบบ",
        }).then(() => {
          this.$router.push({ name: "ServiceStudent" });
        });
      } else if (status == "success" && type == "personnel" && role == 1) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "กำลังเข้าสู่ระบบ",
        }).then(() => {
          this.$router.push({ name: "ServiceTeacher" });
        });
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    setNavbarOpen: function() {
      this.navbarOpen = !this.navbarOpen;
    },
    toggleDropdown: function() {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
  components: {
    //IndexDropdown,
    AboutDropdown,
  },
};
</script>
