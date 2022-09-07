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
                CSMJU | แก้ไขข้อมูลนักศึกษา
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
                    placeholder="รหัสนักศึกษา 10 หลัก"
                  />
                  <div
                    v-if="v$.Lastname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Lastname.$errors[0].$message }}
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
                    placeholder="ชื่อภาษาไทย"
                  />
                  <div
                    v-if="v$.Firstname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Firstname.$errors[0].$message }}
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
                    placeholder="นามสกุลภาษาไทย"
                  />
                  <div
                    v-if="v$.Lastname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Lastname.$errors[0].$message }}
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
                    placeholder="ชื่อภาษาอังกฤษ"
                  />
                  <div
                    v-if="v$.Firstname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Firstname.$errors[0].$message }}
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
                    placeholder="ชื่อภาษาอังกฤษ"
                  />
                  <div
                    v-if="v$.Lastname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Lastname.$errors[0].$message }}
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
                    placeholder="เบอร์โทรศัพท์"
                  />
                  <div
                    v-if="v$.Firstname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Firstname.$errors[0].$message }}
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
                    placeholder="อีเมล"
                  />
                  <div
                    v-if="v$.Lastname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Lastname.$errors[0].$message }}
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
                    placeholder="ที่อยู่สามารถติดต่อได้"
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
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="file"
                  />
                </div>
              </div>
              <div class="py-6 text-center">
                <button
                  @click="submitFormEdit()"
                  class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  อัพเดทข้อมูล
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

      id: 0,

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

    EditProduct() {
      this.id = this.$store.state.studentEdit;
      http.get(`student/id/${this.id}`).then((response) => {
        this.code = response.data.studentCode;
        this.first_nameTh = response.data.nameTh;
        this.last_nameTh = response.data.surnameTh;
        this.first_nameEn = response.data.nameEn;
        this.last_nameEn = response.data.surnameEn;
        this.email = response.data.EmailStudent;
        this.phone = response.data.mobile;
        this.address = response.data.Address;
        this.imgUrl = response.data.PictureProfile;
      });
    },

    submitFormEdit() {
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
      data.append("_method", "PUT");
      http.post(`student/update/${this.id}`, data).then(() => {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "แก้ไขข้อมูลเรียบร้อย",
        }).then(() => {
          this.$router.push({ name: "StudentShow" });
        });
      });
    },
  },
  validations() {
    return {
      Firstname: {
        required: helpers.withMessage("ป้อนรายละเอียดข่าวก่อน", required),
      },
      Lastname: {
        required: helpers.withMessage("ป้อนวันที่ก่อน", required),
      },

      Workplace: {
        required: helpers.withMessage("ป้อนหัวข้อข่าวก่อน", required),
      },

      Position: {
        required: helpers.withMessage("ป้อนประเภทข่าวก่อน", required),
      },
    };
  },
  components: {},
  mounted() {
    this.EditProduct();
  },
};
</script>
