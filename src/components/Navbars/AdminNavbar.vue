<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent custom md:flex-row md:flex-nowrap md:justify-start"
  >
    <div
      class="flex flex-wrap items-center justify-between w-full px-4 mx-autp md:flex-nowrap md:px-10 "
    >
      <!-- Brand -->
      <a
        class="hidden text-2xl font-semibold text-white uppercase lg:inline-block"
        href="javascript:void(0)"
      >
        ศูนย์การแจ้งเตือน
      </a>

      <ul class="flex-col items-center hidden list-none md:flex-row md:flex lg:w-1/2">
        <user-dropdown />
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  components: {
    UserDropdown,
  },
};
</script>
