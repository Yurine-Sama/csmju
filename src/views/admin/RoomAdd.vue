<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right">
              <router-link to="RoomShow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold border-b">
                CSMJU | เพิ่มข้อมูลห้องเรียน
              </h1>
            </div>

            <br class="shadow-xl border-t" />

            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >รหัสห้องเรียน</label
                  >
                  <input
                    v-model="Classroom_Number"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    maxlength="8"
                    placeholder="Classroom Code"
                  />
                  <div
                    v-if="v$.Classroom_Number.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Classroom_Number.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4 mt-8 ">
                <div class="w-full px-4 md:w-8/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ชื่อห้องเรียน</label
                  >
                  <input
                    v-model="Classroom_Name"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Classroom Name"
                  />
                  <div
                    v-if="v$.Classroom_Name.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Classroom_Name.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ประเภทห้องเรียน</label
                  >
                  <select
                    v-model="Classroom_Type"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="ห้องบรรยาย">ห้องบรรยาย</option>
                    <option value="ห้องปฏิบัติการ">ห้องปฏิบัติการ</option>
                    <option value="ห้องประชุม">ห้องประชุม</option>
                    <option value="อื่น ๆ">อื่น ๆ</option>
                  </select>
                  <div
                    v-if="v$.Classroom_Type.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Classroom_Type.$errors[0].$message }}
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-2/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >จำนวนที่นั่ง</label
                  >
                  <select
                    v-model="Classroom_sit"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option v-for="i in 200" :key="i" :value="i">{{
                      i
                    }}</option>
                  </select>
                  <div
                    v-if="v$.Classroom_sit.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Classroom_sit.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ตำแหน่งที่ตั้ง / อาคาร</label
                  >
                  <textarea
                    v-model="Classroom_Detail"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Classroom Location"
                  ></textarea>
                  <div
                    v-if="v$.Classroom_Detail.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Classroom_Detail.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <div class="mt-4">
                    <img
                      v-if="imgUrl"
                      :src="imgUrl"
                      class="h-200-px center-img  rounded-lg shadow-md"
                    />
                  </div>

                  <label class="block my-3 text-gray-700 text-md"
                    >รูปภาพห้องเรียน</label
                  >
                  <input
                    ref="fileupload"
                    @change="onFileChange"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border-b "
                    type="file"
                  />
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

      Classroom_Name: "",
      Classroom_Type: "",
      Classroom_Number: "",
      Classroom_sit: 0,
      Classroom_Detail: "",
      Classroom_Images: "",

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
    submitFormAdd() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let data = new FormData();
        data.append("Classroom_Name", this.Classroom_Name);
        data.append("Classroom_Type", this.Classroom_Type);
        data.append("Classroom_Number", this.Classroom_Number);
        data.append("Classroom_sit", this.Classroom_sit);
        data.append("Classroom_Detail", this.Classroom_Detail);
        data.append("Classroom_Images", this.file);
        http.post(`classroom/create`, data).then(() => {
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
            this.$router.push({ name: "RoomShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      Classroom_Name: {
        required: helpers.withMessage("ป้อนชื่อห้องเรียนก่อน", required),
      },
      Classroom_Type: {
        required: helpers.withMessage("ป้อนประเภทห้องเรียนก่อน", required),
      },
      Classroom_Number: {
        required: helpers.withMessage("ป้อนรหัสห้องเรียนก่อน", required),
      },
      Classroom_sit: {
        required: helpers.withMessage("ป้อนจำนวนที่นั่งก่อน", required),
      },
      Classroom_Detail: {
        required: helpers.withMessage("ป้อนรายละเอียดห้องเรียนก่อน", required),
      },
    };
  },
};
</script>
