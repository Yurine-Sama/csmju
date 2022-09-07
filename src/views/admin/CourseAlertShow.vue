<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div class="container mx-auto">
          <div class="px-6">
            <div class="mt-6 text-center">
              <h1 class="py-6 text-3xl font-bold ">
                CSMJU | ระบบแจ้งตกค้างรายวิชา
              </h1>
            </div>
            <br class="shadow-xl" />
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words">
              <!-- Header  -->
              <div class="px-4 py-3 mb-0 border-0 rounded-t">
                <div class="flex flex-wrap items-center">
                  <div class="w-full px-4 font-semibold text-md md:w-2/12">
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
                <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr class="text-blueGray-500 border-b-2  border-blueGray-500">
                      <th class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap ">
                        ลำดับ
                      </th>
                      <th class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap">
                        ชื่อ - นามสกุล
                      </th>
                      <th class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap">
                        ชื่อรายวิชา
                      </th>
                      <th class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap">
                        กลุ่มเรียน
                      </th>
                      <th class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap">
                        รายยละเอียด
                      </th>
                      <th class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap">
                        ติดต่อ
                      </th>
                      <th class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap">
                        การจัดการ
                      </th>
                      <th class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b" v-for="course in products" :key="course.Id">
                      <td class="p-4 px-6 text-sm align-middle whitespace-nowrap">
                        {{ course.Id }}
                      </td>
                      <td class="p-4 px-6 text-xs align-middle whitespace-nowrap">
                        <div class="flex items-center text-xs text-left align-middle whitespace-nowrap">
                          <span class="ml-3 text-sm">
                            <p class="font-bold">
                              {{ course.nameTh }} {{ course.surnameTh }}
                            </p>

                            <div class="text-xs font-normal">
                              รหัสนักศึกษา : {{ course.studentCode }}
                            </div>
                          </span>
                        </div>
                      </td>
                      <td class="p-4 px-2 text-sm align-middle">
                        <div>
                          <p class="w-48 font-normal">
                            {{ course.Subject_Internal }}
                          </p>
                          <p class=" font-normal text-red-500 text-xs">
                            (รายวิชาภายนอก :
                            {{ course.Subject_External }} )
                          </p>
                        </div>
                      </td>

                      <td class="p-4 px-6 text-sm align-middle whitespace-nowrap">
                        {{ course.Sec_Internal }}
                        <p class="text-red-500 text-xs">
                          กรณีกลุ่มรายวิชานอก : {{ course.Sec_Another }}
                        </p>
                      </td>

                      <td class="p-4 px-2 text-sm align-middle">
                        <div>
                          <p class="w-48 font-normal">
                            {{ course.Residaual_Detail }}
                          </p>
                        </div>
                      </td>
                      <td class="p-4 px-6 text-sm align-middle whitespace-nowrap">
                        <p><b>โทร. :</b> {{ course.mobile }}</p>
                        <p><b>อีเมล :</b> {{ course.EmailStudent }}</p>
                      </td>

                      <td class="p-4 px-6 text-xs align-middle whitespace-nowrap">
                        <button
                          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button">
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button">
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- แสดงผลตัวแบ่งหน้าเพจ-->
                <VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage"
                  @page-changed="onPageClick($event)" />
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
//import '@ocrv/vue-tailwind-pagination/styles'
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import moment from "moment";

//import moment from "moment";
export default {
  data() {
    return {
      /** ตัวแปรสำหรับเก็บข้อมูลสินค้าที่อ่านจาก API */
      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      AlumniId: 0,
      Firstname_Alumni: "",
      Lastname_Alumni: "",
      StudentCode_Alumni: "",
      Workplace: "",
      Contact: "",
      Caption: "",
      Job_Title: "",
      Alumni_Picture: "",
    };
  },
  methods: {
    Edit(AlumniId) {
      this.$router.push({ name: "CourseAlertEdit" });
      this.$store.state.alumnusEdit = AlumniId;
    },
    /***********************************************************************
     * ส่วนของการอ่านข้อมูลจาก API และแสดงผลในตาราง
     ************************************************************************/
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api ทั้งหมด
    async getProducts() {
      let response = await http.get(`residaual`);
      let responseProduct = response.data;
      this.products = responseProduct.reverse();
      // this.currentPage = responseProduct.current_page;
      // this.perPage = responseProduct.per_page;
      this.total = responseProduct.length;
    },
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api เมื่อมีการค้นหา (search)
    async getProductsSearch(pageNumber) {
      let response = await http.get(
        `alumni/name/${this.keyword}?page=${pageNumber}`
      );
      let responseProduct = response.data;
      this.products = responseProduct;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.length;
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
    /***********************************************************************
     * ส่วนของการลบสินค้า
     ************************************************************************/
    // สร้างฟังก์ชันสำหรับลบสินค้า
    onclickDelete(id) {
      this.$swal
        .fire({
          title: "ยืนยันการลบรายการนี้",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: `ยืนยัน`,
          cancelButtonText: `ปิดหน้าต่าง`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            http
              .delete(`alumnidelete/${id}`)
              .then(() => {
                this.$swal.fire("ลบรายการเรียบร้อย!", "", "success");
                // เมื่อแก้ไขรายการเสร็จทำการ ดึงสินค้าล่าสุดมาแสดง
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
    /***********************************************************************
     * ส่วนของการค้นหาสินค้า
     ************************************************************************/
    // สร้างฟังก์ชันค้นหาสินค้า
    submitSearchForm() {
      if (this.keyword != "") {
        // เรียกค้นไปยัง api ของ laravel
        http.get(`alumni/name/${this.keyword}`).then((response) => {
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
    // สร้างฟังก์ชันสำหรับเคลียร์ข้อมูลการค้นหา
    resetSearchForm() {
      this.currentPage = 1;
      this.getProducts(this.currentPage);
      this.keyword = "";
    },
    // สร้างฟังก์ชันสำหรับจัดรูปแบบวันที่ด้วย moment.js
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY hh:mm:ss");
      }
    },
    // สร้างฟังก์ชันแปลงยอดเงินให้เป็นรูปแบบสกุลเงิน (10,000.50)
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
