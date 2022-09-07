<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            ประมวลภาพกิจกรรม
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Workshop Album
          </p>
        </div>

        <div class="py-6 mt-10 text-center border-t border-blueGray-200">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 lg:w-9/12"></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div
            v-for="album in products"
            :key="album.alumnId"
            class="w-full px-2 pb-4 lg:w-4/12"
          >
            <div
              @click="ShowAll(album.alumnId)"
              class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100 h-full"
            >
              <img
                alt="..."
                :src="album.Pic3"
                class="w-full align-middle rounded-t-lg cropped-news text-blueGray-500"
              />
              <blockquote class="relative">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 block w-full h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    class="fill-current text-blueGray-100"
                  ></polygon>
                </svg>
              </blockquote>
              <div class="relative p-4 ">
                <h4 class="h-24 text-xl font-bold truncate-3">
                  {{ album.Titile }}
                </h4>
                <p class="mt-2 font-light truncate-3 text-md">
                  {{ album.Detail }}
                </p>
                <p class="mt-2 font-semibold text-right text-sm">
                  {{ album.Date }}
                </p>
                <div class="mt-2 text-center border-t border-blueGray-200">
                  <button
                    @click="ShowAll(album.alumnId)"
                    class="px-4 py-2 mt-2 mb-1 mr-1 text-xs font-semibold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                    type="button"
                  >
                    อ่านต่อ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/services/WebpageService";
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    this.getProducts(this.currentPage);
  },
  methods: {
    ShowAll(id) {
      this.$router.push({ name: "AlbumExplain" });
      this.$store.state.albumShowAll = id;
    },

    async getProducts() {
      let response = await http.get(`/album/activity`);
      this.products = response.data;
      this.products.data.reverse();
    },
  },
};
</script>
