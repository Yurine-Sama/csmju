<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="AlumnusShow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold ">
                CSMJU | แก้ไขข้อมูลศิษย์เก่า
              </h1>
            </div>

            <br class="shadow-xl" />

            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label
                    class="block my-3 text-gray-700 text-md"
                    for="eFirstname"
                    >ชื่อ</label
                  >
                  <input
                    v-model="eFirstname"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Product name"
                  />
                  <div
                    v-if="v$.Firstname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Firstname.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label
                    class="block my-3 text-gray-700 text-md"
                    for="eLastname"
                    >นามสกุล</label
                  >
                  <input
                    v-model="eLastname"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Product name"
                  />
                  <div
                    v-if="v$.Lastname.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Lastname.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="eCode"
                    >ศิษย์เก่ารุ่นที่</label
                  >
                  <select
                    v-model="eCode"
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
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label
                    class="block my-3 text-gray-700 text-md"
                    for="eWorkplace"
                    >สังกัดหน่วยงาน / บริษัท</label
                  >
                  <input
                    v-model="eWorkplace"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Product name"
                  />
                  <div
                    v-if="v$.Workplace.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Workplace.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label
                    class="block my-3 text-gray-700 text-md"
                    for="ePosition"
                    >ตำแหน่งงาน</label
                  >
                  <input
                    v-model="ePosition"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Product name"
                  />
                  <div
                    v-if="v$.Position.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Position.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="eCaption"
                    >ประวัติส่วนตัว / คติประจำใจ</label
                  >
                  <textarea
                    v-model="eCaption"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Product description"
                  ></textarea>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="eContact"
                    >การติดต่อ</label
                  >
                  <input
                    v-model="eContact"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Product name"
                  />
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <div class="mt-4">
                    <img
                      v-if="eimgUrl"
                      :src="eimgUrl"
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
                  @click="submitFormEdit(AlumniId)"
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
      born: new Date().getFullYear() - 1997,

      eAlumniId: 0,
      eFirstname: "",
      eLastname: "",
      eCode: "",
      eWorkplace: "",
      ePosition: "",
      eCaption: "",
      eContact: "",
      eimgUrl: "",

      imgSrc: "",
      fileName: "",

      file: null,
    };
  },
  methods: {
    /***********************************************************************
     * ส่วนของการแก้ไขข้อมูลสินค้า
     ************************************************************************/
    // สร้างฟังก์ชันสำหรับเปิด popup แก้ไขสินค้า
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = e.target.files[0];
      this.eimgUrl = URL.createObjectURL(file);
    },

    EditProduct() {
      this.AlumniId = this.$store.state.alumnusEdit;
      http.get(`alumni/id/${this.AlumniId}`).then((response) => {
        // console.log(response.data)
        this.eAlumniId = response.data.AlumniId;
        this.eFirstname = response.data.Firstname_Alumni;
        this.eLastname = response.data.Lastname_Alumni;
        this.eCode = response.data.StudentCode_Alumni;
        this.eWorkplace = response.data.Workplace;
        this.ePosition = response.data.Job_Title;
        this.eCaption = response.data.Caption;
        this.eContact = response.data.Contact;

        this.eimgUrl = response.data.Alumni_Picture;
      });
    },

    // สร้างฟังก์ขันสำหรับอัพเดทข้อมูล
    submitFormEdit(AlumniId) {
      // console.log(id)

      let data = new FormData();
      data.append("Firstname_Alumni", this.eFirstname);
      data.append("Lastname_Alumni", this.eLastname);
      data.append("StudentCode_Alumni", this.eCode);
      data.append("Workplace", this.eWorkplace);
      data.append("Job_Title", this.ePosition);
      data.append("Caption", this.eCaption);
      data.append("Contact", this.eContact);
      data.append("Alumni_Picture", this.file);

      // Send Patch request to laravel
      data.append("_method", "PUT");
      http
        .post(`alumni/update/${AlumniId}`, data)
        .then((response) => {
          console.log(response.data);

          // เรียกใช้งาน popup ของ sweetalert2
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: "อัพเดทข้อมูลเรียบร้อย",
          }).then(() => {
            this.$router.push({ name: "AlumnusShow" });
          });
        })
        .catch((error) => {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
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
    this.EditProduct(this.AlumniId);
  },
};
</script>
