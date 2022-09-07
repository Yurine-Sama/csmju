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
                CSMJU | การแสดงข้อมูลกระบวนวิชา
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
                    <form @submit.prevent="onSubmit">
                      <input
                        v-model="keyword"
                        class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-200 border-0 rounded-md"
                        type="text"
                        placeholder="ป้อนรหัสรายวิชาที่ต้องการค้นหา เช่น 1030XXXX"
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
                    <router-link to="SubjectAdd">
                      <button
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
                <table class="items-center w-full bg-transparent ">
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap "
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หน่วยกิต
                      </th>

                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        กลุ่มรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        การจัดการ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="subject in products"
                      :key="subject.subjectId"
                      class="border-b "
                    >
                      <td
                        class="w-5 p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal ">
                            {{ subject.Subject_Code }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="ml-3 text-sm font-semiBold">
                            {{ subject.Subject_NameTh }}
                            <div class="text-xs font-normal">
                              {{ subject.Subject_NameEn }}
                            </div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal truncate-3">
                            {{ subject.Subject_Detail }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-wrap"
                      >
                        <div>
                          <p class="w-48 font-normal truncate-3">
                            {{ subject.Subject_Credit }}
                          </p>
                        </div>
                      </td>

                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <button
                          @click="Edit(subject.subjectId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          @click="onclickDelete(subject.subjectId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default {
  data() {
    return {
      products: [],
      total: 0,
    };
  },
  methods: {
    Edit(id) {
      this.$router.push({ name: "SubjectEdit" });
      this.$store.state.subjectEdit = id;
    },
    async getProducts() {
      let response = await http.get(`subject`);
      let responseProduct = response.data;
      this.products = responseProduct;
      this.total = responseProduct.length;
    },
    async getProductsSearch(pageNumber) {
      let response = await http.get(
        `subject/code/${this.keyword}?page=${pageNumber}`
      );
      let responseProduct = response.data;
      this.products = responseProduct;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
    },
    onPageClick(event) {
      this.currentPage = event;
      if (this.keyword == "") {
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
              .delete(`subject/delete/${id}`)
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
        // เรียกค้นไปยัง api ของ laravel
        http.get(`subject/code/${this.keyword}`).then((response) => {
          let responseProduct = response.data;
          this.products = responseProduct;
          this.currentPage = responseProduct.current_page;
          this.perPage = responseProduct.per_page;
          this.total = responseProduct.total;
        });
      } else {
        this.$swal.fire("ป้อนรหัสรายวิชาที่ต้องการค้นหาก่อน");
      }
    },
    resetSearchForm() {
      this.currentPage = 1;
      this.getProducts(this.currentPage);
      this.keyword = "";
    },
  },

  mounted() {
    this.currentPage = 1;

    this.getProducts(this.currentPage);
  },
};
</script>
