<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="StudentShow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold border-b">
                CSMJU | เพิ่มข้อมูลนักศึกษา
              </h1>
            </div>

            <br class="shadow-xl border-t" />

            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >รหัสนักศึกษา</label
                  >
                  <input
                    v-model="code"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    maxlength="10"
                    placeholder="Student Code"
                  />
                  <div v-if="v$.code.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.code.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ชื่อ (ภาษาไทย)</label
                  >
                  <input
                    v-model="first_nameTh"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Firstname (Thai)"
                  />
                  <div
                    v-if="v$.first_nameTh.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.first_nameTh.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >นามสกุล (ภาษาไทย)</label
                  >
                  <input
                    v-model="last_nameTh"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Lastname (Thai)"
                  />
                  <div
                    v-if="v$.last_nameTh.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.last_nameTh.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ชื่อ (ภาษาอังกฤษ)</label
                  >
                  <input
                    v-model="first_nameEn"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Firstname (English)"
                  />
                  <div
                    v-if="v$.first_nameEn.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.first_nameEn.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >นามสกุล (ภาษาอังกฤษ)</label
                  >
                  <input
                    v-model="last_nameEn"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Lastname (English)"
                  />
                  <div
                    v-if="v$.last_nameEn.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.last_nameEn.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4 mt-8 ">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >เบอร์ติดต่อ</label
                  >
                  <input
                    v-model="phone"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    maxlength="10"
                    placeholder="Cell Phone"
                  />
                  <div v-if="v$.phone.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.phone.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >อีเมล (ส่วนตัว)</label
                  >
                  <input
                    v-model="email"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Email"
                  />
                  <div v-if="v$.email.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.email.$errors[0].$message }}
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ที่อยู่ (สามารถติดต่อได้)</label
                  >
                  <textarea
                    v-model="address"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <div class="mt-4">
                    <img
                      v-if="imgUrl"
                      :src="imgUrl"
                      class="w-48 h-200-px center-img cropped"
                    />
                  </div>

                  <label class="block my-3 text-gray-700 text-md"
                    >รูปโปรไฟล์</label
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

      code: "",
      first_nameTh: "",
      last_nameTh: "",
      first_nameEn: "",
      last_nameEn: "",
      email: "",
      phone: "",
      address: "",

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
        data.append("studentCode", this.code);
        data.append("nameTh", this.first_nameTh);
        data.append("surnameTh", this.last_nameTh);
        data.append("nameEn", this.first_nameEn);
        data.append("surnameEn", this.last_nameEn);
        data.append("EmailStudent", this.email);
        data.append("mobile", this.phone);
        data.append("Address", this.address);
        data.append("PictureProfile", this.file);
        http.post(`student/create`, data).then(() => {
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
            this.$router.push({ name: "StudentShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      code: {
        required: helpers.withMessage("ป้อนรหัสนักศึกษาก่อน", required),
      },
      first_nameTh: {
        required: helpers.withMessage("ป้อนชื่อภาษาไทยก่อน", required),
      },
      last_nameTh: {
        required: helpers.withMessage("ป้อนนามสกุลภาษาไทยก่อน", required),
      },
      first_nameEn: {
        required: helpers.withMessage("ป้อนชื่อภาษาอังกฤษก่อน", required),
      },
      last_nameEn: {
        required: helpers.withMessage("ป้อนนามสกุลภาษาอังกฤษก่อน", required),
      },
      email: {
        required: helpers.withMessage("ป้อนอีเมลส่วนตัวก่อน", required),
      },
      phone: {
        required: helpers.withMessage("ป้อนเบอร์ติดต่อก่อน", required),
      },
    };
  },
  components: {},
  mounted() {},
};
</script>
