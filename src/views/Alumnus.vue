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
            ศิษย์เก่า
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Student Alumnus
          </p>
        </div>

        <div class="py-6 mt-10 text-center border-t border-blueGray-200">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 lg:w-9/12"></div>
          </div>
        </div>

        <div class="flex flex-wrap ">
          <div
            v-for="alum in products.data"
            :key="alum.AlumniId"
            class="w-full h-full lg:w-3/12"
          >
            <div
              class="flex flex-col w-full min-w-0 break-words  border rounded-lg bg-blueGray-100"
            >
              <div class="p-4">
                <img
                  alt="..."
                  :src="alum.Alumni_Picture"
                  class="w-full align-middle p-2 rounded-full bg-blueGray-200 shadow-md"
                />
              </div>
              <div class="relative w-full px-4  rounded-b  bg-blueGray-100">
                <div class="relative py-4 ">
                  <div calss="">
                    <p
                      class="px-2 pt-2 mb-1 text-lg font-bold text-center text-white border-2 rounded-lg shadow-lg text-shadow h-70-px bg-emerald-500 border-blueGray-300"
                    >
                      {{ alum.Job_Title }}
                    </p>
                  </div>
                  <div class="mt-2">
                    <p
                      class="px-2 mb-2 mt-2 pt-2 font-normal border-b border-white h-50-px text-blueGray-700 text-md"
                    >
                      <i class="fas fa-briefcase"></i>
                      {{ alum.Workplace }}
                    </p>
                  </div>
                  <div>
                    <h4
                      class="text-lg font-semibold text-center text-blueGray-700"
                    >
                      {{ alum.Firstname_Alumni }}
                      {{ alum.Lastname_Alumni }}
                    </h4>
                    <p
                      class="mb-2 font-normal text-center text-blueGray-700 text-md"
                    >
                     ศิษย์เก่าวิทย์คอม รุ่นที่ {{ alum.StudentCode_Alumni }}
                    </p>
                  </div>
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
    async getProducts(pageNumber) {
      let response = await http.get(`alumni?page=${pageNumber}`);
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
  components: {
    VueTailwindPagination,
  },
};
</script>
