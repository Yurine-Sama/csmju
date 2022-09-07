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
                CSMJU | ระบบจัดการข้อมูลบุคลากร
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
                        placeholder="ป้อนรหัสประชาชน 13 หลัก เช่น 3529XXXXXXXXX"
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
                    <router-link to="PersonnelAdd">
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
                        ชื่อ - นามสกุล
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ประเภท
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        สังกัด
                      </th>

                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ติดต่อ
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        สถานะ
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
                      v-for="teacher in products"
                      :key="teacher.personnelId"
                      class="border-b"
                    >
                      <td
                        class="p-4 px-6 text-xs align-middle  whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-xs text-left align-middle whitespace-nowrap"
                        >
                          <img
                            :src="teacher.personnelPhoto"
                            alt="..."
                            class="w-10 h-10 border-2 rounded-full shadow border-blueGray-50"
                          />
                          <span class="ml-3 text-sm font-semiBold">
                            {{ teacher.titlePosition }} {{ teacher.firstName }}
                            {{ teacher.lastName }}
                            <div class="text-xs font-normal">
                              {{ teacher.titleNameEn }}
                              {{ teacher.fistNameEn }} {{ teacher.lastNameEn }}
                            </div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="w-5 p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-20 font-normal ">
                            {{ teacher.positionType }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-wrap"
                      >
                        <div>
                          <p class="w-20 font-normal truncate-3">
                            {{ teacher.faculty }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal truncate-3">
                            อีเมล : {{ teacher.e_mail }}
                          </p>
                          <p class="font-normal truncate-3">
                            โทร. : {{ teacher.phoneNumber }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-wrap"
                      >
                        <div>
                          <p class="w-20 font-normal truncate-3">
                            {{ teacher.statusWork }}
                          </p>
                        </div>
                      </td>

                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <button
                          @click="Edit(teacher.personnelId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          @click="onclickDelete(teacher.personnelId)"
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
    Edit(id) {
      this.$router.push({ name: "PersonnelEdit" });
      this.$store.state.personnelEdit = id;
    },
    async getProducts() {
      let response = await http.get(`personnel`);
      let responseProduct = response.data;
      this.products = responseProduct;
      this.total = responseProduct.length;
    },
    async getProductsSearch() {
      let response = await http.get(`personnel/cardid/${this.keyword}`);
      let responseProduct = response.data;
      this.products = responseProduct;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
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
              .delete(`personnel/delete/${id}`)
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
        http.get(`personnel/cardid/${this.keyword}`).then((response) => {
          let responseProduct = response.data;
          this.products = responseProduct;
          this.currentPage = responseProduct.current_page;
          this.perPage = responseProduct.per_page;
          this.total = responseProduct.total;
        });
      } else {
        this.$swal.fire("ป้อนรหัสประชาชนที่ต้องการค้นหาก่อน");
      }
    },
    resetSearchForm() {
      this.currentPage = 1;
      this.getProducts(this.currentPage);
      this.keyword = "";
    },
  },

  components: {},
  mounted() {
    this.getProducts();
  },
};
</script>
