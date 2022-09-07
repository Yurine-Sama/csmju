<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="feed">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold ">เพิ่มข้อมูลข่าวสาร</h1>
            </div>

            <br class="shadow-xl" />
            <form
              ref="addProductForm"
              @submit.prevent="onSubmit"
              enctype="multipart/form-data"
            >
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="Title"
                    >หัวข้อข่าว</label
                  >
                  <input
                    v-model="Title"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Title"
                  />
                  <div v-if="v$.Title.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.Title.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="Type"
                    >ประเภทข่าว</label
                  >
                  <input
                    v-model="Type"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Type"
                  />
                  <div v-if="v$.Type.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.Type.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="Dates"
                    >วันที่</label
                  >
                  <input
                    v-model="Dates"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Date"
                  />
                  <div v-if="v$.Dates.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.Dates.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="Detail"
                    >รายละเอียด</label
                  >
                  <textarea
                    v-model="Detail"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Description"
                  ></textarea>
                  <div
                    v-if="v$.Detail.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Detail.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="links"
                    >ลิงค์ที่เกี่ยวข้อง</label
                  >
                  <input
                    v-model="links"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="URL"
                  />
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <div class="mt-4">
                    <img v-if="imgUrl" :src="imgUrl" class="w-full" />
                  </div>

                  <label class="block my-3 text-gray-700 text-md" for="image"
                    >รูปภาพ</label
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
//import axios from 'axios';
export default {
  data() {
    return {
      // รับค่าวัน-เดือน-ปี
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),

      // รับค่าเวลา 24
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),

      v$: useValidate(),

      Detail: "",
      Dates: "",
      Time: "",
      Title: "",
      links: "",
      Type: "",
      File:"xxx",
      
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
      (this.Detail = ""),
        (this.Date = ""),
        (this.Time = ""),
        (this.Picture = ""),
        (this.Title = ""),
        (this.File = ""),
        (this.links = ""),
        (this.Type = "");

      this.fileName = "";
      this.imgUrl = "";
      this.file = "";
      this.$refs.fileupload.value = null;
    },
    // สร้างฟังก์ชันสำหรับ submit form สินค้า
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // ถ้าไม่มี error ในฟอร์ม
        this.Dates = this.year + "-" + this.month + "-" + this.day;
        this.Time = this.hour + ":" + this.minute + ":" + this.second;
        // alert('succcess')
        // ใช้ FormData ของ HTML 5 API ในการรับค่าจากฟอร์มที่มีการแนบไฟล์
        let data = new FormData();
        data.append("News_Detail", this.Detail);
        data.append("News_Date", this.Dates);
        data.append("News_Time", this.Time);
        data.append("News_Title", this.Title);
        data.append("News_File", this.File);
        data.append("News_links", this.links);
        data.append("News_Type", this.Type);
        
        data.append("News_Picture", this.file);
        
        
        //Post in Web
        http.post(`news/create`, data).then(() => {

          
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
            this.$router.push({ name: "Feed" });
          });
        });
      }
    },
  },
  validations() {
    return {
      Detail: {
        required: helpers.withMessage("ป้อนรายละเอียดข่าวก่อน", required),
      },
      Dates: {
        required: helpers.withMessage("ป้อนวันที่ก่อน", required),
      },

      Title: {
        required: helpers.withMessage("ป้อนหัวข้อข่าวก่อน", required),
      },

      Type: {
        required: helpers.withMessage("ป้อนประเภทข่าวก่อน", required),
      },
    };
  },
  components: {},
  mounted() {
    // อ่านสินค้าจาก API
  },
};
</script>
