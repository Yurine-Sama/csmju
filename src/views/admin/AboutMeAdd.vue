<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="AboutMeShow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="mt-6 text-center">
              <h1 class="py-6 text-3xl font-bold ">
                CSMJU | การเพิ่มข้อมูลเกี่ยวกับเรา
              </h1>
            </div>
            <br class="shadow-xl" />
            <div class="relative flex flex-col w-full mb-2 break-words rounded">
              <!-- Simulator  -->
              <div class="w-full lg:w-12/12 ">
                <div class="px-2">
                  <label
                    class="block mt-4 mb-2 text-gray-500 text-lg font-semibold"
                    >การจัดการข้อมูลเกี่ยวกับเราบนหน้าเว็บไซต์หลัก</label
                  >
                  <div class="flex flex-wrap mb-4 border rounded-lg">
                    <div class="w-full px-4 md:w-12/12 pt-2 pb-4 my-2">
                      <label
                        class="block mb-5  mt-3 text-gray-700 text-xl"
                        for="Title"
                        ><b>หัวข้อ :</b></label
                      >
                      <input
                        v-model="title"
                        class="w-full px-3 py-2 leading-tight text-gray-700"
                        type="text"
                        placeholder="Title for About me"
                      />
                      <div
                        v-if="v$.title.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.title.$errors[0].$message }}
                      </div>
                    </div>
                    <div class="w-full px-4 md:w-12/12 pt-2 pb-4 my-2">
                      <label
                        class="block mb-5  mt-3 text-gray-700 text-xl"
                        for="Title"
                        ><b>คำอธิบาย :</b></label
                      >
                      <textarea
                        v-model="description"
                        class="w-full px-3 py-2 leading-tight text-gray-700"
                        rows="5"
                        placeholder="Description for About me"
                      ></textarea>
                      <div
                        v-if="v$.description.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.description.$errors[0].$message }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-4 pb-4">
                <button
                  @click="submit()"
                  class="px-6 py-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow-lg outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  <i class="fas fa-save"></i>
                  บันทึกข้อมูล
                </button>
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
import useValidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const date = new Date().getDate();
    return {
      v$: useValidate(),
      title: "",
      description: "",
      date: date + "/" + (month + 1) + "/" + year,
    };
  },
  methods: {
    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let data = new FormData();
        data.append("Topic", this.title);
        data.append("Detail", this.description);
        data.append("Picture", null);
        data.append("Update_Date", this.date);
        http.post(`	about/create`, data).then(() => {
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
            this.$router.push({ name: "AboutMeShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      title: {
        required: helpers.withMessage("ป้อนหัวข้อก่อน", required),
      },
      description: {
        required: helpers.withMessage("ป้อนคำอธิบายก่อน", required),
      },
    };
  },
};
</script>
