<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="alumnusshow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold ">
                CSMJU | เพิ่มข้อมูลศิษย์เก่า
              </h1>
            </div>

            <br class="shadow-xl" />
            <form
              ref="addProductForm"
              @submit.prevent="onSubmit"
              enctype="multipart/form-data"
            >
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label
                    class="block my-3 text-gray-700 text-md"
                    for="Firstname"
                    >ชื่อ</label
                  >
                  <input
                    v-model="Firstname"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Firstname"
                  />
                  <div
                    v-if="v$.Firstname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Firstname.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="Lastname"
                    >นามสกุล</label
                  >
                  <input
                    v-model="Lastname"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Lastname"
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
                  <label class="block my-3 text-gray-700 text-md" for="Code"
                    >ศิษย์เก่ารุ่นที่</label
                  >
                  <select
                    v-model="Code"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option
                      v-for="i in this.born"
                      :key="`ศิษย์เก่าวิทย์คอม รุ่นที่ ${i}`"
                      :value="i"
                      >ศิษย์เก่าวิทย์คอม รุ่นที่ {{ i }}</option
                    >
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label
                    class="block my-3 text-gray-700 text-md"
                    for="Workplace"
                    >สังกัดหน่วยงาน / บริษัท</label
                  >
                  <input
                    v-model="Workplace"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Workplace"
                  />
                  <div
                    v-if="v$.Workplace.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Workplace.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="Position"
                    >ตำแหน่งงาน</label
                  >
                  <input
                    v-model="Position"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Position"
                  />
                  <div
                    v-if="v$.Position.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Position.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="Caption"
                    >ประวัติส่วนตัว / คติประจำใจ</label
                  >
                  <textarea
                    v-model="Caption"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Caption"
                  ></textarea>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="Contact"
                    >การติดต่อ</label
                  >
                  <input
                    v-model="Contact"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Contact"
                  />
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <div class="mt-4">
                    <img
                      v-if="imgUrl"
                      :src="imgUrl"
                      class="w-48 h-200-px center-img cropped"
                    />
                  </div>

                  <label class="block my-3 text-gray-700 text-md" for="image"
                    >รูปภาพศิษย์เก่า</label
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
                  @click="onResetForm"
                  class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                  type="button"
                >
                  ล้าง
                </button>
                <button
                  @click="submitForm"
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

export default {
  data() {
    return {
      v$: useValidate(),
      born: new Date().getFullYear() - 1997,

      Firstname: "",
      Lastname: "",
      Code: "",
      Workplace: "",
      Position: "",
      Caption: "",
      Contact: "",

      imgSrc: "",
      fileName: "",
      imgUrl: "",
      file: null,
    };
  },
  methods: {
    /***********************************************************************
     * ส่วนของการเพิ่มสินค้าใหม่
     ************************************************************************/
    // สร้างฟังก์ชันเมื่อผู้ใช้มีการเลือกรูปภาพในช่องภาพสินค้า
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = e.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    // สร้างฟังก์ชันสำหรับเคลียร์ข้อมูลในฟอร์มเพิ่มสินค้า
    onResetForm() {
      // การเคลียร์ค่าทั้งหมดในฟอร์ม เราจะต้อง ref
      // ล้างข้อมูลในฟอร์ม
      this.$refs.addProductForm.reset();
      (this.Firstname = ""),
        (this.Lastname = ""),
        (this.Code = ""),
        (this.Workplace = ""),
        (this.Position = ""),
        (this.Caption = ""),
        (this.Contact = "");

      this.fileName = "";
      this.imgUrl = "";
      this.file = "";
      this.$refs.fileupload.value = null;
    },
    // สร้างฟังก์ชันสำหรับ submit form สินค้า
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let data = new FormData();
        data.append("Firstname_Alumni", this.Firstname);
        data.append("Lastname_Alumni", this.Lastname);
        data.append("StudentCode_Alumni", this.Code);
        data.append("Workplace", this.Workplace);
        data.append("Contact", this.Contact);
        data.append("Caption", this.Caption);
        data.append("Job_Title", this.Position);
        data.append("Alumni_Picture", this.file);
        http.post("alumni/create", data).then(() => {
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
            this.$router.push({ name: "AlumnusShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      Firstname: {
        required: helpers.withMessage("ป้อนชื่อก่อน", required),
      },
      Lastname: {
        required: helpers.withMessage("ป้อนนามสกุลก่อน", required),
      },

      Workplace: {
        required: helpers.withMessage("ป้อนสังกัด / บริษัทก่อน", required),
      },
      Position: {
        required: helpers.withMessage("ป้อนตำแหน่งก่อน", required),
      },
    };
  },
  components: {},
  mounted() {
    // อ่านสินค้าจาก API
  },
};
</script>
