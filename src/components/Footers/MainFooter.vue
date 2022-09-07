<template>
  <footer class="relative pt-8 pb-6 bg-blueGray-200 custom">
    <div class="container px-0 mx-auto">
      <div class="flex flex-wrap text-center lg:text-left">
  
      </div>

      <hr class="my-6 border-blueGray-300" />

      <div
        class="flex flex-wrap items-center justify-center md:justify-between"
      >
        <div class="w-full px-4 mx-auto text-center md:w-4/12">
          <div class="py-1 text-sm font-semibold text-blueGray-500">
            Copyright © {{years}} Computer Science MJU
            <br />
            by HOP Team | All Rights Reserved.
          </div>
          
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
   data() {
    return {
      years : new Date().getFullYear()
    };
  },
};
</script>
