<template>
  <nav
    class="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg"
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
          Computer Science | MJU
        </router-link>
        <button
          class="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
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
        <ul class="flex flex-col z-3 list-none lg:flex-row lg:ml-auto">
          <li class="flex items-center">
            <router-link
              to="/home"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent hover:text-emerald-600 whitespace-nowrap"
            >
              หน้าแรก
            </router-link>
          </li>

          <li class="flex items-center">
            <about-page
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent hover:text-emerald-600 whitespace-nowrap"
            />
          </li>

          <li class="flex items-center">
            <router-link
              to="/program"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent hover:text-emerald-600 whitespace-nowrap"
            >
              หลักสูตร
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/news"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent hover:text-emerald-600 whitespace-nowrap"
            >
              ข่าวสาร
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/alumnus"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent hover:text-emerald-600 whitespace-nowrap"
            >
              ศิษย์เก่า
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              to="/download"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent hover:text-emerald-600 whitespace-nowrap"
            >
              ดาวน์โหลดเอกสาร
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              to="/contact"
              class="block w-full px-4 py-2 text-sm font-normal text-white bg-transparent hover:text-emerald-600 whitespace-nowrap"
            >
              ติดต่อเรา
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link to="/auth/login">
              <button
                @click="checkLogin()"
                class="px-4 py-2 mb-3 ml-3 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none text-blueGray-700 active:bg-blueGray-50 hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0"
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
import AboutPage from "@/components/Dropdowns/AboutPage.vue";
export default {
  data() {
    return {
      navbarOpen: false,
      dropdownPopoverShow: false,

      local_user: [],
      local_token: "",

      local_teacher: [],
      token: "",
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
  },
  components: {
    AboutPage,
  },
};
</script>
