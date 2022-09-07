<template>
  <div
    class="custom relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
  >
    <div class="px-4 py-3 mb-0 border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex-1 flex-grow w-full max-w-full px-4">
          <h3 class="text-base font-semibold text-blueGray-700">
            ผู้ใช้งานเข้าสู่ระบบ
            <span class="italic text-emerald-600 text-sm">
              ( จำนวน {{ this.total }} บัญชี )
            </span>
          </h3>
        </div>
        <!-- <div
          class="relative flex-1 flex-grow w-full max-w-full px-4 text-right"
        >
          <button
            class="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none"
            type="button"
          >
            See all
          </button>
        </div> -->
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
            >
              ลำดับ (ID)
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
            >
              ชื่อผู้ใช้งาน
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
            >
              ประเภทผู้ใช้งาน
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
            >
              วันที่ / เวลา
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
            >
              อุปกรณ์ที่ใช้งาน
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in products" :key="user.LoginId">
            <th
              class="p-4 px-6 text-md text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{ user.LoginId }}
            </th>
            <td
              class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{ user.Username }}
            </td>
            <td
              class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{ user.type }}
            </td>
            <td
              class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{ user.Date.slice(0, 9) }}
              <p class="text-sm  text-emerald-600 font-semibold ">
                ( {{ user.Date.slice(10, 19) }} )
              </p>
            </td>

            <td
              class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              {{ user.Device.slice(0, 11) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import http from "@/services/APIService";
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      let response = await http.get(`checklogin`);
      let responseProduct = response.data;
      this.products = responseProduct.data;
      this.total = responseProduct.data.length;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
