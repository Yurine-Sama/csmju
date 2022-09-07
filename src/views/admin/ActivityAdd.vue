<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="activityshow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold ">เพิ่มข้อมูลกิจกรรม</h1>
            </div>

            <br class="shadow-xl" />
            <form
              ref="addProductForm"
              @submit.prevent="onSubmit"
              enctype="multipart/form-data"
            >
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >วันที่ประกาศกิจกรรม</label
                  >
                  <div class="flex w-full mt-2">
                    <v-date-picker v-model="Activity_Start">
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
                    v-if="v$.Activity_Start.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Activity_Start.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="Dates"
                    >วันที่ประกาศกิจกรรม</label
                  >
                  <div class="flex w-full mt-2">
                    <v-date-picker v-model="Dates">
                      <template #default="{ inputValue, inputEvents }">
                        <input
                          class="px-3 py-1 border border-gray-500 text-gray-700 text-md focus:outline-none focus:border-blue-500"
                          :value="inputValue"
                          v-on="inputEvents"
                        />
                      </template>
                    </v-date-picker>
                  </div>
                  <div v-if="v$.Dates.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.Dates.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="Title"
                    >ชื่อกิจกรรม</label
                  >
                  <input
                    v-model="Activity_Title"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Title"
                  />
                  <div
                    v-if="v$.Activity_Title.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Activity_Title.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="Title"
                    >ผู้รับผิดชอบ</label
                  >
                  <input
                    v-model="Activity_Organizer"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Organizer"
                  />
                  <div
                    v-if="v$.Activity_Organizer.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Activity_Organizer.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >รายละเอียดกิจกรรม</label
                  >
                  <textarea
                    v-model="Activity_Detail"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Description"
                  ></textarea>
                  <div
                    v-if="v$.Activity_Detail.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Activity_Detail.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >รูปแบบกิจกรรม</label
                  >
                  <input
                    v-model="Activity_Location"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Location / Platform"
                  />
                  <div
                    v-if="v$.Activity_Location.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Activity_Location.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <div class="mt-4">
                    <img
                      v-if="imgUrl"
                      :src="imgUrl"
                      class="w-auto h-350-px rounded-lg shadow-lg center-img bg-emerald-500 border"
                    />
                  </div>

                  <label class="block my-3 text-gray-700 text-md" for="image"
                    >รูปภาพ</label
                  >
                  <div
                    class="relative flex items-center justify-center h-32 bg-gray-100 border-b border-blue-700 "
                  >
                    <input
                      ref="fileupload"
                      type="file"
                      @change="onFileChange"
                      class="w-full h-50-px opacity-0 p-3 bg-white"
                    />
                  </div>
                </div>
              </div>

              <div class="py-6 text-center">
                <button
                  @click="onResetForm"
                  class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                  type="button"
                >
                  ล้าง
                </button>
                <button
                  @click="submit"
                  class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  ยืนยัน
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
//import axios from 'axios';
export default {
  data() {
    return {
      v$: useValidate(),

      Activity_Start: "",
      Activity_TimeStart: "",
      Activity_TimeEnd: "",
      Activity_Organizer: "",
      Activity_Location: "",
      Activity_Detail: "",
      Activity_Title: "",
      Activity_Picture: "",

      fileName: "",
      imgUrl: "",
      file: null,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = e.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    onResetForm() {
      this.$refs.addProductForm.reset();
      (this.Activity_Start = ""),
        (this.Activity_TimeStart = ""),
        (this.Activity_TimeEnd = ""),
        (this.Activity_Organizer = ""),
        (this.Activity_Location = ""),
        (this.Activity_Detail = ""),
        (this.Activity_Title = ""),
        (this.Activity_Picture = ""),
        (this.fileName = "");
      this.imgUrl = "";
      this.file = "";
      this.$refs.fileupload.value = null;
    },

    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.Dates = this.year + "-" + this.month + "-" + this.day;
        this.Time = this.hour + ":" + this.minute + ":" + this.second;
        let data = new FormData();
        data.append("Activity_Start", this.Activity_Start);
        data.append("Activity_TimeStart", this.Activity_TimeStart);
        data.append("Activity_TimeEnd", this.Activity_TimeEnd);
        data.append("Activity_Organizer", this.Activity_Organizer);
        data.append("Activity_Location", this.Activity_Location);
        data.append("Activity_Detail", this.Activity_Detail);
        data.append("Activity_Title", this.Activity_Title);
        data.append("Activity_Picture", this.Activity_Picture);
        //Post in Web
        http.post(`activity/create`, data).then(() => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: "เพิ่มข้อมูลใหม่เรียบร้อย",
          }).then(() => {
            this.$router.push({ name: "ActivityShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      Activity_Start: {
        required: helpers.withMessage("ป้อนวันที่ประกาศกิจกรรมก่อน", required),
      },
      Activity_Organizer: {
        required: helpers.withMessage("ป้อนชื่อผู้จัดกิจกรรมก่อน", required),
      },
      Activity_Location: {
        required: helpers.withMessage("ป้อนสถานที่จัดกิจกรรมก่อน", required),
      },
      Activity_Detail: {
        required: helpers.withMessage("ป้อนรายละเอียดกิจกรรมก่อน", required),
      },
      Activity_Title: {
        required: helpers.withMessage("ป้อนชื่อกิจกรรมก่อน", required),
      },
    };
  },
  components: {},
  mounted() {
    // อ่านสินค้าจาก API
  },
};
</script>
