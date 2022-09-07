<template>
  <div>
    <main class="profile-page custom">
      <section class="relative ">
        <div class="container px-4 mx-auto">
          <div
            class="relative flex flex-col w-full min-w-0 mt-64 mb-6 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6 mt-6">
              <h1 class="py-6 text-3xl font-bold text-center">
                CSMJU | ระบบครุภัณฑ์
              </h1>

              <br class="shadow-xl" />
              <div class="flex flex-wrap items-center justify-between my-8">
                <div class="w-full md:w-2/12">
                  <h2
                    class="items-center mx-4 text-md font-semibold text-gray-700 md:text-xl "
                  >
                    จำนวน {{ products.total }} รายการ
                  </h2>
                </div>

                <div class="w-full px-4 md:w-6/12">
                  <div class="relative w-full my-4 mr-2">
                    <form @submit.prevent="onSubmit">
                      <input
                        v-model="keyword"
                        class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-200 border-0 rounded-md"
                        type="text"
                        placeholder="ป้อนชื่อครุภัณฑ์ที่ต้องการค้นหา"
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
                  <router-link to="equipmentadd">
                    <button
                      class="px-4 py-2 mb-1 ml-2 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none "
                      type="button"
                    >
                      <i class="fas fa-plus"></i> เพิ่ม
                    </button>
                  </router-link>
                </div>
              </div>

              <!-- ตารางแสดงสินค้า -->
              <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                  <table class="w-full whitespace-no-wrap">
                    <thead>
                      <tr
                        class="text-sm text-blueGray-500 border-b-2 border-blueGray-500"
                      >
                        <th class="px-4 py-3">ลำดับ</th>
                        <th class="px-4 py-3">รหัสครุภัณฑ์</th>
                        <th class="px-4 py-3">ชื่อครุภัณฑ์</th>
                        <th class="px-4 py-3">ราคา</th>
                        <th class="px-4 py-3">วันที่จัดซื้อ</th>
                        <th class="px-4 py-3">แก้ไข / นำออก</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="equipment in products.data"
                        :key="equipment.equipmentId"
                        class="border-b"
                      >
                        <td class="px-4 py-3 text-sm">
                          {{ equipment.equipmentId }}
                        </td>
                        <td class="px-4 py-3 text-sm">
                          {{ equipment.Equipment_Code }}
                        </td>
                        <td class="px-4 py-3">
                          <div class="flex items-center text-sm">
                            <div>
                              <p class="font-semibold">
                                {{ equipment.Equipment_Name }}
                              </p>
                              <p
                                class="text-xs text-gray-600 dark:text-gray-400"
                              >
                                Brand : {{ equipment.Equipment_Brand }}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-3 text-sm">
                          {{ equipment.Equipment_Price }}
                        </td>
                        <td class="px-4 py-3 text-sm">
                          <div class="flex items-center text-sm">
                            <div>
                              <p class="font-semibold">
                                {{ equipment.Equipment_Date }}
                              </p>
                              <p
                                class="text-xs text-gray-600 dark:text-gray-400"
                              >
                                ผู้รับผิดชอบ :
                                {{ equipment.Equipment_Caretaker }}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-3 text-sm">
                          <button
                            @click="Edit(equipment.equipmentId)"
                            class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                            type="button"
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                          <button
                            @click="onclickDelete(equipment.equipmentId)"
                            class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                            type="button"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
      </section>
    </main>
  </div>
</template>
<script>
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import http from "@/services/APIService";
import useValidate from "@vuelidate/core";

export default {
  data() {
    return {
      v$: useValidate(),

      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      keyword: "",

      code: "",
      quantity: "1",
      name: "",
      brand: "",
      serial_no: "",
      price: "",
      date: "",
      room: "",
      users: "",
      caretaker: "",
      status: "ดี",
      note: "-",
      type: "",
      detail: "",
    };
  },
  components: {
    VueTailwindPagination,
  },
  methods: {
    async getProducts(pageNumber) {
      let response = await http.get(`equipment?page=${pageNumber}`);
      let responseProduct = response.data;
      this.products = responseProduct;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
    },
    Edit(id) {
      this.$router.push({ name: "EquipmentEdit" });
      this.$store.state.equipmentEdit = id;
    },
    async getProductsSearch(pageNumber) {
      let response = await http.get(
        `equipment/${this.keyword}?page=${pageNumber}`
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
    submitSearchForm() {
      if (this.keyword != "") {
        // เรียกค้นไปยัง api ของ laravel
        http.get(`equipment/${this.keyword}`).then((response) => {
          let responseProduct = response.data;
          this.products = responseProduct;
          this.currentPage = responseProduct.current_page;
          this.perPage = responseProduct.per_page;
          this.total = responseProduct.total;
        });
      } else {
        this.$swal.fire("ป้อนชื่อครุภัณฑ์ที่ต้องการค้นหาก่อน");
      }
    },
    resetSearchForm() {
      this.currentPage = 1;
      this.getProducts(this.currentPage);
      this.keyword = "";
    },
    onclickDelete(equipmentId) {
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
              .delete(`equipment/delete/${equipmentId}`)
              .then(() => {
                this.$swal.fire("ลบรายการเรียบร้อย!", "", "success");
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
  },
  mounted() {
    this.currentPage = 1;
    this.getProducts(this.currentPage);
  },
};
</script>
