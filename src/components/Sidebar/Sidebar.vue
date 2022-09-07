<template>
  <nav
    class="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl custom md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64"
  >
    <div
      class="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap"
    >
      <!-- Toggler -->
      <button
        class="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="inline-block p-4 px-0 mr-0 font-bold text-left uppercase text-md md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
        to="/admin"
      >
        CSMJU | Administrator
      </router-link>
      <!-- User -->
      <ul class="flex flex-wrap items-center list-none md:hidden">
        <li class="relative inline-block">
          <user-dropdown />
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="absolute top-0 left-0 right-0 z-40 items-center flex-1 h-auto overflow-x-hidden overflow-y-auto rounded shadow md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="inline-block p-4 px-0 mr-0 font-bold text-left uppercase text-md md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                to="/"
              >
                Admin's Menu
              </router-link>
            </div>
            <div class="flex justify-end w-6/12">
              <button
                type="button"
                class="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="pt-0 mb-3">
            <input
              type="text"
              placeholder="Search"
              class="w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
            />
          </div>
        </form>

        <hr class="my-4 md:min-w-full" />
        <h6
          class="block pt-1 pb-4 font-bold no-underline uppercase text-md md:min-w-full text-blueGray-500"
        >
          การจัดการเว็บไซต์
        </h6>
        <ul class="flex flex-col list-none md:flex-col md:min-w-full">
          <li class="items-center">
            <router-link
              to="/admin/dashboard"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-globe"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                ศูนย์การแสดงผล
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/banner"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-tv"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                การแสดงรูปภาพเคลื่อนไหว
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/aboutmeshow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-info-circle"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                การแสดงข้อมูลเกี่ยวกับเรา
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/subjectshow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-address-book"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                การแสดงข้อมูลหลักสูตร
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/roomshow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-building"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                การแสดงข้อมูลห้องเรียน
              </a>
            </router-link>
          </li>
        </ul>

        <hr class="my-4 md:min-w-full" />
        <h6
          class="block pt-1 pb-4 font-bold no-underline uppercase text-md md:min-w-full text-blueGray-500"
        >
          ข้อมูลผู้ใช้งานระบบ
        </h6>
        <ul class="flex flex-col list-none md:flex-col md:min-w-full">
          <li class="items-center">
            <router-link
              to="/admin/StudentShow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-user-graduate"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                ข้อมูลนักศึกษา
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/personnelShow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-user-tie"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                ข้อมูลบุคลากร
              </a>
            </router-link>
          </li>
        </ul>

        <hr class="my-4 md:min-w-full" />
        <h6
          class="block pt-1 pb-4 font-bold no-underline uppercase text-md md:min-w-full text-blueGray-500"
        >
          การจัดการระบบสารสนเทศ
        </h6>

        <ul class="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
          <li class="items-center">
            <router-link to="/admin/feed" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-check-circle"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>

                ระบบประกาศข่าวสาร
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/AlumnusShow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-check-circle"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                ระบบข้อมูลศิษย์เก่า
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/equipmentshow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-check-circle"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                ระบบครุภัณฑ์
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/activityshow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-check-circle"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>

                ระบบบันทึกกิจกรรม
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/bookingshow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-check-circle"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                ระบบจองห้องเรียน
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/repairshow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-check-circle"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>

                ระบบแจ้งซ่อม
              </a>
            </router-link>
          </li>
          <hr class="my-4 md:min-w-full" />
          <h6
            class="block pt-1 pb-4 font-bold no-underline uppercase text-md md:min-w-full text-blueGray-500"
          >
            การจัดการระบบสารสนเทศ (ระบบแจ้งเตือน)
          </h6>
          <li class="items-center">
            <router-link
              to="/admin/CourseAlertShow"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-mail-bulk"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>

                ระบบแจ้งตกค้างรายวิชา
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/complaining"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm fas fa-mail-bulk"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                ระบบการติดต่อกลับ
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
); }

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  data() {
    return {
      collapseShow: "hidden",
    };
  },
  methods: {
    toggleCollapseShow: function(classes) {
      this.collapseShow = classes;
    },
  },
  components: {
    UserDropdown,
  },
};
</script>
