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
            ข่าวสาร / ประชาสัมพันธ์
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            News & Announcement
          </p>
        </div>

        <div class="py-6 mt-10 text-center border-t border-blueGray-200">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 lg:w-9/12"></div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div
            v-for="news in products.data"
            :key="news.newsId"
            class="w-full px-2 pb-4 lg:w-4/12"
          >
            <div
              @click="ShowAll(news.newsId)"
              class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100 h-full"
            >
              <img
                alt="..."
                :src="news.News_Picture"
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
                  {{ news.News_Title }}
                </h4>
                <p class="mt-2 font-light truncate-3 text-md">
                  {{ news.News_Detail }}
                </p>
                <div class="mt-2 text-center border-t border-blueGray-200">
                  <button
                    @click="ShowAll(news.newsId)"
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
        <VueTailwindPagination
          :current="currentPage"
          :total="total"
          :per-page="perPage"
          @page-changed="onPageClick($event)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/services/WebpageService";
//import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
export default {
  data() {
    return {
      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,
    };
  },
  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    this.getProducts(this.currentPage);
  },
  methods: {
    /***********************************************************************
     * ส่วนของการอ่านข้อมูลจาก API และแสดงผลในตาราง
     ************************************************************************/
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api ทั้งหมด
    ShowAll(newsId) {
      this.$router.push({ name: "NewsExplain" });
      this.$store.state.newsShowAll = newsId;
    },

    async getProducts(pageNumber) {
      let response = await http.get(`news?page=${pageNumber}`);
      let responseProduct = response.data;
      this.products = response.data;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
      this.products.data.reverse();
    },

    // สร้างฟังก์ชันสำหรับการคลิ๊กเปลี่ยนหน้า
    onPageClick(event) {
      this.currentPage = event;
      // เช็คว่ามีการค้นหาสินค้าอยู่หรือไม่
      if (this.keyword == "") {
        // ไม่ได้ค้นหา
        this.getProducts(this.currentPage);
      } else {
        this.getProductsSearch(this.currentPage);
      }
    },
  },
  components: {
    VueTailwindPagination,
  },
};
</script>
