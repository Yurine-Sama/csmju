<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container mx-auto">
          <div class="px-6">
            <div class="mt-6 text-center">
              <h1 class="py-6 text-3xl font-bold ">
                CSMJU | ระบบจัดการข้อมูลศิษย์เก่า
              </h1>
            </div>
            <br class="shadow-xl" />
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words">
              <!-- Header  -->
              <div class="px-4 py-3 mb-0 border-0 rounded-t">
                <div class="flex flex-wrap items-center">
                  <div class="w-full px-4 font-semibold text-md md:w-2/12">
                    จำนวน {{ products.total }} รายการ
                  </div>

                  <div class="w-full px-4 py-4 md:w-6/12">
                    <form @submit.prevent="onSubmit">
                      <input
                        v-model="keyword"
                        class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-200 border-0 rounded-md"
                        type="text"
                        placeholder="ป้อนชื่อศิษย์เก่าที่ต้องการค้นหา"
                        aria-label="Search"
                      />
                      <button
                        @click="submitSearchForm"
                        type="submit"
                        class="hidden"
                      >
                        Submit
                      </button>
                    </form>
                  </div>

                  <div class="w-full px-4 text-center md:w-4/12">
                    <button
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
                    </button>
                    <router-link to="AlumnusAdd">
                      <button
                        @click="openModalAddProduct"
                        class="px-4 py-2 mb-1 ml-2 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none "
                        type="button"
                      >
                        <i class="fas fa-plus"></i> เพิ่ม
                      </button>
                    </router-link>
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
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap "
                      >
                        ลำดับ
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อ - นามสกุล
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ศิษย์เก่า (รุ่นที่)
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        สังกัด / องค์กร
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ตำแหน่ง / หน้าที่
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        การจัดการ
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="border-b"
                      v-for="alum in products.data"
                      :key="alum.AlumniId"
                    >
                      <td
                        class="p-4 px-6 text-sm align-middle whitespace-nowrap"
                      >
                        {{ alum.AlumniId }}
                      </td>
                      <td
                        class="p-4 px-6 text-xs align-middle whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-xs text-left align-middle whitespace-nowrap"
                        >
                          <img
                            :src="alum.Alumni_Picture"
                            alt="..."
                            class="w-10 h-10 rounded-full shadow-lg"
                          />
                          <span class="ml-3 text-sm font-semiBold">
                            {{ alum.Firstname_Alumni }}
                            <div class="text-xs font-normal">
                              {{ alum.Lastname_Alumni }}
                            </div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle whitespace-nowrap"
                      >
                        ศิษย์เก่าวิทย์คอม รุ่นที่ {{ alum.StudentCode_Alumni }}
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle whitespace-nowrap"
                      >
                        {{ alum.Workplace }}
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle whitespace-nowrap"
                      >
                        {{ alum.Job_Title }}
                      </td>

                      <td
                        class="p-4 px-6 text-xs align-middle whitespace-nowrap"
                      >
                        <button
                          @click="Edit(alum.AlumniId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          @click="onclickDelete(alum.AlumniId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-trash-alt"></i>
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
      this.$router.push({ name: "AlumnusEdit" });
      this.$store.state.alumnusEdit = AlumniId;
    },
    async getProducts(pageNumber) {
      let response = await http.get(`alumni?page=${pageNumber}`);
      let responseProduct = response.data;
      this.products = responseProduct;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
    },
    async getProductsSearch(pageNumber) {
      let response = await http.get(
        `alumni/name/${this.keyword}?page=${pageNumber}`
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
              .delete(`alumni/delete/${id}`)
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
    submitSearchForm() {
      if (this.keyword != "") {
        http.get(`alumni/name/${this.keyword}`).then((response) => {
          let responseProduct = response.data;
          this.products = responseProduct;
          this.currentPage = responseProduct.current_page;
          this.perPage = responseProduct.per_page;
          this.total = responseProduct.total;
        });
      } else {
        this.$swal.fire("ป้อนชื่อศิษย์เก่าที่ต้องการค้นหาก่อน");
      }
    },
    resetSearchForm() {
      this.currentPage = 1;
      this.getProducts(this.currentPage);
      this.keyword = "";
    },
  },
  components: { VueTailwindPagination },
  mounted() {
    this.currentPage = 1;
    this.getProducts(this.currentPage);
  },
};
</script>
