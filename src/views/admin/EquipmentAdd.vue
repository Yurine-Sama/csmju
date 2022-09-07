<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="EquipmentShow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold border-b">
                CSMJU | เพิ่มข้อมูลครุภัณฑ์
              </h1>
            </div>

            <br class="shadow-xl border-t" />

            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-8/12">
                  <label class="block my-3 text-gray-700 text-md">
                    รหัสครุภัณฑ์</label
                  >
                  <input
                    v-model="Equipment_Code"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    maxlength="30"
                    placeholder="Equipment Code (Ex. วท-xxxx)"
                  />
                  <div
                    v-if="v$.Equipment_Code.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Code.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-2/12">
                  <label class="block my-3 text-gray-700 text-md">จำนวน</label>
                  <select
                    v-model="Equipment_Quantity"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option v-for="i in 100" :key="i" :value="i">{{
                      i
                    }}</option>
                  </select>
                  <div
                    v-if="v$.Equipment_Quantity.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Quantity.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ชื่อครุภัณฑ์</label
                  >
                  <input
                    v-model="Equipment_Name"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Equipment Name"
                  />
                  <div
                    v-if="v$.Equipment_Name.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Name.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >แบรนด์ / ยี่ห้อ</label
                  >
                  <input
                    v-model="Equipment_Brand"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Equipment Brand"
                  />
                  <div
                    v-if="v$.Equipment_Brand.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Brand.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >หมายเลขครุภัณฑ์</label
                  >
                  <input
                    v-model="Equipment_Serialnumber"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Serial Number"
                  />
                  <div
                    v-if="v$.Equipment_Serialnumber.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Serialnumber.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md">ราคา</label>
                  <input
                    v-model="Equipment_Price"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Price (Baht)"
                  />
                  <div
                    v-if="v$.Equipment_Price.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Price.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ผู้จัดซื้อ / หน่วยงาน</label
                  >
                  <input
                    v-model="Equipment_Users"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Users / Department"
                  />
                  <div
                    v-if="v$.Equipment_Users.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Users.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >วันที่จัดซื้อ</label
                  >
                  <div class="flex w-full mt-2">
                    <v-date-picker v-model="Equipment_Date">
                      <template #default="{ inputValue, inputEvents }">
                        <input
                          class="px-3 py-1 border border-gray-500 text-gray-700 text-md focus:outline-none focus:border-blue-500"
                          :value="inputValue"
                          v-on="inputEvents"
                        />
                      </template>
                    </v-date-picker>
                  </div>
                  <div
                    v-if="v$.Equipment_Date.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Date.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4 mt-8 ">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ห้องเก็บ / ที่อยู่</label
                  >
                  <input
                    v-model="Equipment_Room"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    maxlength="10"
                    placeholder="Room / Address"
                  />
                  <div
                    v-if="v$.Equipment_Room.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Room.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ผู้รับผิดชอบ</label
                  >
                  <input
                    v-model="Equipment_Caretaker"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Caretaker"
                  />
                  <div
                    v-if="v$.Equipment_Caretaker.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Caretaker.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4 mt-8 ">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md">ประเภท</label>
                  <select
                    v-model="Equipment_Type"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="ครุภัณฑ์เงินกู้">ครุภัณฑ์เงินกู้</option>
                    <option value="ครุภัณฑ์ทั่วไป">ครุภัณฑ์ทั่วไป</option>
                  </select>
                  <div
                    v-if="v$.Equipment_Type.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Type.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >สภาพการใช้งาน</label
                  >
                  <select
                    v-model="Equipment_Status"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="พร้อมใช้งาน">พร้อมใช้งาน</option>
                    <option value="ซ่อมบำรุง">ซ่อมบำรุง</option>
                    <option value="จำหน่าย">จำหน่าย</option>
                    <option value="ศูนย์หาย">ศูนย์หาย</option>
                  </select>
                  <div
                    v-if="v$.Equipment_Status.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Status.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >รายละเอียดครุภัณฑ์</label
                  >
                  <textarea
                    v-model="Equipment_Detail"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Detail"
                  ></textarea>
                  <div
                    v-if="v$.Equipment_Detail.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Detail.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-red-500 text-md"
                    >* หมายเหตุ :</label
                  >
                  <textarea
                    v-model="Equipment_Note"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="* Note :"
                  ></textarea>
                  <div
                    v-if="v$.Equipment_Note.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Equipment_Note.$errors[0].$message }}
                  </div>
                </div>
              </div>

              <div class="py-6 text-center">
                <button
                  @click="submitFormAdd"
                  class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  บันทึกข้อมูล
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/services/APIService";
import useValidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),

      id: "",

      Equipment_Code: "",
      Equipment_Quantity: "",
      Equipment_Name: "",
      Equipment_Brand: "",
      Equipment_Price: "",
      Equipment_Date: "",
      Equipment_Room: "",
      Equipment_Users: "",
      Equipment_Caretaker: "",
      Equipment_Status: "",
      Equipment_Type: "",
      Equipment_Detail: "",

      Equipment_Serialnumber: "",
      Equipment_Note: "",
    };
  },
  methods: {
    submitFormAdd() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let formatDate = this.Equipment_Date.toISOString().slice(0, 10);
        let data = new FormData();
        data.append("Equipment_Code", this.Equipment_Code);
        data.append("Equipment_Quantity", this.Equipment_Quantity);
        data.append("Equipment_Name", this.Equipment_Name);
        data.append("Equipment_Brand", this.Equipment_Brand);
        data.append("Equipment_Price", this.Equipment_Price);
        data.append("Equipment_Date", formatDate);
        data.append("Equipment_Room", this.Equipment_Room);
        data.append("Equipment_Users", this.Equipment_Users);
        data.append("Equipment_Caretaker", this.Equipment_Caretaker);
        data.append("Equipment_Status", this.Equipment_Status);
        data.append("Equipment_Type", this.Equipment_Type);
        data.append("Equipment_Detail", this.Equipment_Detail);
        data.append("Equipment_Serialnumber", this.Equipment_Serialnumber);
        data.append("Equipment_Note", this.Equipment_Note);

        http.post(`equipment/create`, data).then(() => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: "เพิ่มข้อมูลเรียบร้อย",
          }).then(() => {
            this.$router.push({ name: "EquipmentShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      Equipment_Code: {
        required: helpers.withMessage("ป้อนรหัสครุภัณฑ์ก่อน", required),
      },
      Equipment_Quantity: {
        required: helpers.withMessage("ป้อนจำนวนครุภัณฑ์ก่อน", required),
      },
      Equipment_Name: {
        required: helpers.withMessage("ป้อนชื่อครุภัณฑ์ก่อน", required),
      },
      Equipment_Brand: {
        required: helpers.withMessage("ป้อนยี่ห้อครุภัณฑ์ก่อน", required),
      },
      Equipment_Price: {
        required: helpers.withMessage("ป้อนราคาครุภัณฑ์ก่อน", required),
      },
      Equipment_Date: {
        required: helpers.withMessage("ป้อนวันที่ซื้อครุภัณฑ์ก่อน", required),
      },
      Equipment_Room: {
        required: helpers.withMessage("ป้อนที่จัดเก็บครุภัณฑ์ก่อน", required),
      },
      Equipment_Users: {
        required: helpers.withMessage("ป้อนผู้จัดซื้อครุภัณฑ์ก่อน", required),
      },
      Equipment_Caretaker: {
        required: helpers.withMessage("ป้อนผู้รับผิดชอบครุภัณฑ์ก่อน", required),
      },
      Equipment_Status: {
        required: helpers.withMessage("ป้อนสถานะครุภัณฑ์ก่อน", required),
      },
      Equipment_Type: {
        required: helpers.withMessage("ป้อนประเภทครุภัณฑ์ก่อน", required),
      },
      Equipment_Detail: {
        required: helpers.withMessage("ป้อนรายละเอียดครุภัณฑ์ก่อน", required),
      },
      Equipment_Serialnumber: {
        required: helpers.withMessage("ป้อนหมายเลขครุภัณฑ์ก่อน", required),
      },
      Equipment_Note: {
        required: helpers.withMessage("ป้อนหมายเหตุครุภัณฑ์ก่อน", required),
      },
    };
  },
  components: {},
  mounted() {},
};
</script>
