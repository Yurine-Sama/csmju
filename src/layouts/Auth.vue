<template>
  <div>
    <navbar />

    <main>
      <section class="relative w-full h-full min-h-screen py-40">
        <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-full"
          :style="`background-image: url('${backgroundLogin}');`"
        ></div>
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
        <foot absolute />
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import Foot from "@/components/Footers/Foot.vue";

import backgroundLogin from "@/assets/img/bg-login.png";

export default {
  data() {
    return {
      backgroundLogin,
    };
  },
  components: {
    Navbar,
    Foot,
  },
};
</script>
