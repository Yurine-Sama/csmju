<template>
  <nav
    class="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg bg-blueGray-800"
  >
    <div
      class="container flex flex-wrap items-center justify-between px-4 mx-auto custom"
    >
      <div
        class="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
          to="/home"
        >
          <div class="flex">
            <div class="w-auto text-xl">
              CSMJU
            </div>
            <div
              class="invisible w-auto mt-1 ml-3 whitespace-normal lg:visible"
            >
              | Management Information Systems
            </div>
          </div>
        </router-link>
        <button
          class="block h-10 px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          @click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="items-center flex-grow bg-teal-500 lg:flex lg:bg-opacity-0 lg:shadow-none"
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col list-none lg:flex-row lg:ml-auto">
          <li class="flex items-center">
            <router-link
              to="/home"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent whitespace-nowrap"
            >
              หน้าแรก
            </router-link>
          </li>

          <li class="flex items-center">
            <about-page
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent whitespace-nowrap"
            />
          </li>

          <li class="flex items-center">
            <router-link
              to="/program"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent whitespace-nowrap"
            >
              หลักสูตร
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/news"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent whitespace-nowrap"
            >
              ข่าวสาร
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/alumnus"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent whitespace-nowrap"
            >
              ศิษย์เก่า
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              to="/download"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent whitespace-nowrap"
            >
              ดาวน์โหลดเอกสาร
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              to="/contact"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent whitespace-nowrap"
            >
              ติดต่อเรา
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link to="/auth/login">
              <button
                @click="onClickLogout"
                class="px-4 py-2 mb-3 ml-3 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none text-blueGray-700 active:bg-blueGray-50 hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0"
                type="button"
              >
                ออกจากระบบ
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import AboutPage from "@/components/Dropdowns/AboutPage.vue";
import http from "@/services/WebpageService";
export default {
  data() {
    return {
      id_login: 0,
      navbarOpen: false,
      dropdownPopoverShow: false,
    };
  },
  methods: {
    setNavbarOpen: function() {
      this.navbarOpen = !this.navbarOpen;
    },
    onClickLogout() {
      let id = this.$store.state.id_login;
      http.delete(`checklogin/delete/${id}`).then(() => {});
      localStorage.removeItem("user");
      localStorage.removeItem("permission");
      this.$router.push({ name: "Login" });
    },
  },
  components: {
    AboutPage,
  },
};
</script>
