<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container mx-auto">
          <div class="px-6">
            <div class="mt-6 text-center">
              <h1 class="py-6 text-3xl font-bold ">CSMJU | แจ้งติดต่อกลับ</h1>
            </div>
            <br class="shadow-xl" />
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words "
            >
              <!-- Header  -->
              <div class="px-4 py-3 mb-0 border-0 rounded-t">
                <div class="flex flex-wrap items-center">
                  <div class="w-full px-4 font-bold text-md md:w-2/12">
                    จำนวน {{ this.total }} รายการ
                  </div>

                  <div class="w-full px-4 py-4 md:w-6/12">
                    <!-- <form @submit.prevent="onSubmit">
                      <input
                        v-model="keyword"
                        class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-200 border-0 rounded-md"
                        type="text"
                        placeholder="ป้อนชื่อที่ต้องการค้นหา"
                        aria-label="Search"
                      />
                      <button
                        @click="submitSearchForm"
                        type="submit"
                        class="hidden"
                      >
                        Submit
                      </button>
                    </form> -->
                  </div>

                  <div class="w-full px-4 text-center md:w-4/12">
                    <!-- <button
                      @click="submitSearchForm"
                      class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none"
                      type="button"
                    >
                      <i class="fas fa-search"></i> ค้นหา
                    </button>
                    <button
                      @click="resetSearchForm"
                      class="px-4 py-2 mb-1 mr-4 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
                      type="button"
                    >
                      <i class="fas fa-broom"></i> ล้าง
                    </button> -->
                  </div>
                </div>
              </div>

              <!-- News Feeds table -->
              <div class="block w-full overflow-x-auto">
                <!-- Projects table -->
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2  border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ลำดับ
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หัวข้อ
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        รายละเอียด
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ไฟล์แนบ / รูปภาพ
                      </th>

                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        สถานะ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="border-b"
                      v-for="feed in products"
                      :key="feed.complainId"
                    >
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        {{ feed.complainId }}
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 "
                      >
                        <h5 class="w-48 font-semibold truncate text-md">
                          {{ feed.Complain_Title }}
                        </h5>
                        <p class="w-48 font-normal">
                          วันที่ : {{ feed.Complain_Date }}
                        </p>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 "
                      >
                        <div>
                          <p class="w-48 font-normal :truncate">
                            {{ feed.Complain_Detail }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <img
                          class="w-24 h-24 bg-gray-200 shadow-lg border"
                          :src="feed.Complain_Picture"
                          alt=""
                        />
                      </td>

                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <button
                          @click="Delete(feed.complainId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="mr-1 fas fa-trash"></i>
                          <span>ลบรายการนี้</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- แสดงผลตัวแบ่งหน้าเพจ-->
                <VueTailwindPagination
                  :current="currentPage"
                  :total="total"
                  :per-page="perPage"
                  @page-changed="onPageClick($event)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/services/APIService";
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
  methods: {
    async getProducts(pageNumber) {
      let response = await http.get(`complain?page=${pageNumber}`);
      let responseProduct = response.data.reverse();
      this.products = responseProduct;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.length;
    },
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api เมื่อมีการค้นหา (search)
    async getProductsSearch(pageNumber) {
      let response = await http.get(
        `complain/${this.keyword}?page=${pageNumber}`
      );
      let responseProduct = response.data;
      this.products = responseProduct;
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

    submitSearchForm() {
      if (this.keyword != "") {
        // เรียกค้นไปยัง api ของ laravel
        http.get(`complain/${this.keyword}`).then((response) => {
          let responseProduct = response.data;
          this.products = responseProduct;
          this.currentPage = responseProduct.current_page;
          this.perPage = responseProduct.per_page;
          this.total = responseProduct.total;
        });
      } else {
        this.$swal.fire("ป้อนชื่อสินค้าที่ต้องการค้นหาก่อน");
      }
    },
    Delete(id) {
      this.$swal
        .fire({
          title: "ยืนยันการลบรายการนี้",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: `ยืนยัน`,
          cancelButtonText: `ยกเลิก`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            http
              .delete(`complain/delete/${id}`)
              .then(() => {
                this.$swal.fire("ลบรายการเรียบร้อย!", "", "success");
                window.location.reload();
                if (this.keyword == "") {
                  this.getProducts(this.currentPage);
                } else {
                  this.getProductsSearch(this.currentPage);
                }
              })
              .catch((error) => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              });
          }
        });
    },
    // สร้างฟังก์ชันสำหรับเคลียร์ข้อมูลการค้นหา
    resetSearchForm() {
      this.currentPage = 1;
      this.getProducts(this.currentPage);
      this.keyword = "";
    },
  },

  components: { VueTailwindPagination },
  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    this.getProducts(this.currentPage);
  },
};
</script>
