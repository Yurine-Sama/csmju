<template>
  <div>
    <a href="#pablo" ref="btnDropdownRef" @click="toggleDropdown($event)">
      เกี่ยวกับ
    </a>
    <div
      ref="popoverDropdownRef"
      class="z-50 float-left py-2 text-base text-left list-none bg-white rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <span
        class="block w-full px-4 pt-2 pb-0 text-sm font-bold bg-transparent whitespace-nowrap text-blueGray-400"
      >
        รู้จักกับเรา
      </span>
      <router-link
        @click="close($event)"
        to="/about"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        ประวัติความเป็นมา
      </router-link>
      <router-link
        v-for="about in about_arr"
        :key="about.AboutId"
        @click="getId(about.AboutId)"
        to="/about"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        {{ about.Topic }}
      </router-link>
      <router-link
        @click="close($event)"
        to="/about"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        ผลการเรียนรู้ (PLO)
      </router-link>

      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        class="block w-full px-4 pt-2 pb-0 text-sm font-bold bg-transparent whitespace-nowrap text-blueGray-400"
      >
        อาคารเรียน
      </span>
      <router-link
        to="/classroom"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
      >
        อาคาร/ห้องเรียน
      </router-link>

      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        class="block w-full px-4 pt-2 pb-0 text-sm font-bold bg-transparent whitespace-nowrap text-blueGray-400"
      >
        บุคลากร
      </span>
      <router-link
        to="/teacher"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        คณาจารย์
      </router-link>
      <router-link
        to="/staff"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        เจ้าหน้าที่
      </router-link>
      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        class="block w-full px-4 pt-2 pb-0 text-sm font-bold bg-transparent whitespace-nowrap text-blueGray-400"
      >
        โครงการ
      </span>

      <router-link
        to="/schedule"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
      >
        ตารางกิจกรรม
      </router-link>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
import http from "@/services/WebpageService";
export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
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
    async getAbout() {
      let response = await http.get(`about`);
      this.about_arr = response.data;
    },
    getId(id) {
      this.$store.state.aboutid = id;
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
    this.getAbout();
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
};
</script>
