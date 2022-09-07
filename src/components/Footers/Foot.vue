<template>
  <footer
    class="pb-6"
    :class="[
      absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative',
    ]"
  >
    <div class="container px-4 mx-auto">
      <hr class="mb-6 border-b-1 border-blueGray-600" />
      <div
        class="flex flex-wrap items-center justify-center md:justify-between"
      >
        <div class="w-full px-4 md:w-4/12">
          <div
            class="py-1 text-sm font-semibold text-center text-blueGray-500 md:text-left"
          >
            Copyright © {{ years }}
            <a
              class="py-1 text-sm font-semibold text-white hover:text-blueGray-300"
            >
              Computer Science MJU
            </a>
          </div>
        </div>
        <div class="w-full px-4 md:w-8/12">
          <ul class="flex flex-wrap justify-center list-none md:justify-end">
            <li>
              <p
                class="block px-3 py-1 text-sm font-semibold text-white hover:text-blueGray-300"
              >
                | Development & Design by HOP Team
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      years: new Date().getFullYear(),
    };
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
