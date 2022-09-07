<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <section class="px-6 py-6">
        <div class="mt-0 text-center">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            โครงการ และกิจกรรม
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Scheme of Activities
          </p>
        </div>
      </section>
      <div class="py-6 mt-10 text-center border-t border-blueGray-200">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4 lg:w-12/12"></div>
        </div>
      </div>

      <section class="px-6 ">
        <div class="px-0">
          <div
            class="text-2xl font-semibold mb-4 border-l-2 border-blueGray-500"
          >
            <h3 class="px-4 text-blueGray-700">
              ปฏิทินรายการกิจกรรมทั้งหมด
            </h3>
          </div>
          <v-calendar
            class="max-w-full px-6 custom-calendar "
            :masks="masks"
            :attributes="attributes"
            disable-page-swipe
            is-expanded
          >
            <template v-slot:day-content="{ day, attributes }">
              <div class="z-10 flex flex-col h-full overflow-hidden ">
                <span
                  class="py-6 font-semibold text-gray-900 text-lg  day-label "
                  >{{ day.day }}</span
                >
                <div class="flex-grow overflow-x-auto overflow-y-auto">
                  <p
                    v-for="attr in attributes"
                    :key="attr.key"
                    class="p-2 custom mt-0 font-semibold mb-1 text-md leading-normal rounded-lg "
                    :class="attr.customData.class"
                  >
                    {{ attr.customData.title }}
                  </p>
                </div>
              </div>
            </template>
          </v-calendar>
        </div>
      </section>

      <section class="px-6 mt-16">
        <div class="text-2xl font-semibold mb-4 border-l-2 border-blueGray-500">
          <h3 class="px-4 text-blueGray-700">
            ประกาศกิจกรรมทั้งหมด
          </h3>
        </div>
        <div class="flex flex-wrap">
          <div
            v-for="act in products"
            :key="act.activityId"
            class="w-full p-4 lg:w-4/12"
          >
            <div
              class="relative flex flex-col text-emerald-600 w-full min-w-0 break-words rounded-lg h-full hover:text-blueGray-700"
            >
              <img
                :src="act.Activity_Picture"
                class="w-full align-middle rounded-lg cropped-news duration-150 ease-linear hover:zoom-xs shadow-lg"
              />
              <blockquote class="relative mt-6 ">
                <h4 class="text-xl font-bold  text-justify">
                  {{ act.Activity_Title }}
                </h4>
                <p
                  class="mt-10 font-semibold text-blueGray-400 text-sm text-right px-2"
                >
                  วันที่ : {{ act.Activity_Start }}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import http from "@/services/WebpageService";

export default {
  data() {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    // const m = 12;
    // const y = 2021;

    return {
      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,
      masks: {
        weekdays: "WWW",
        month: "ธันวาคม",
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: "วันนี้",
            class: "bg-emerald-500 text-white text-center",
          },
          dates: new Date(year, month, day),
        },
      ],
    };
  },
  mounted() {
    this.currentPage = 1;
    this.getActivity(this.currentPage);
  },
  methods: {
    async getActivity(pageNumber) {
      let response = await http.get(`activity?page=${pageNumber}`);
      let responseProduct = response.data;
      this.products = response.data;
      this.products.reverse();
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
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

  components: {},
};
</script>
