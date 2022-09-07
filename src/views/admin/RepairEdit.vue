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
              <h1 class="py-6 text-3xl font-bold ">แก้ไขข้อมูลข่าวสาร</h1>
            </div>

            <br class="shadow-xl" />
            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="eTitle"
                    >หัวข้อข่าว</label
                  >
                  <input
                    v-model="eTitle"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Product name"
                  />
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="eType"
                    >ประเภทข่าว</label
                  >
                  <input
                    v-model="eType"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Product name"
                  />
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="eDates"
                    >วันที่</label
                  >
                  <input
                    v-model="eDates"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Product name"
                  />
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="eDetail"
                    >รายละเอียด</label
                  >
                  <textarea
                    v-model="eDetail"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Product description"
                  ></textarea>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="elinks"
                    >ลิงค์ที่เกี่ยวข้อง</label
                  >
                  <input
                    v-model="elinks"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Product name"
                  />
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <div class="mt-4">
                    <img v-if="eimgUrl" :src="eimgUrl" class="w-full" />
                  </div>

                  <label class="block my-3 text-gray-700 text-md" for="image"
                    >ภาพสินค้า</label
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
                  @click="submitFormEdit(enewsId)"
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
      // รับค่าวัน-เดือน-ปี
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),

      v$: useValidate(),

      enewsId: "",
      eDetail: "",
      eDates: "",
      eTime: "",
      ePicture: "xxx",
      eTitle: "",
      elinks: "",
      eType: "",
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
      this.newsId = this.$store.state.newsEdit;
      http.get(`news/update/${this.newsId}`).then((response) => {
        // console.log(response.data)
        this.enewsId = response.data.newsId;
        this.eTitle = response.data.News_Title;
        this.eType = response.data.News_Type;
        this.eDates = response.data.News_Date;
        this.eDetail = response.data.News_Detail;
        this.elinks = response.data.News_links;
        this.eimgUrl = response.data.News_Picture;
      });
    },

    // สร้างฟังก์ขันสำหรับอัพเดทข้อมูล
    submitFormEdit(newsId) {
      // console.log(id)
      this.eDates = this.year + "-" + this.month + "-" + this.day;
      let data = new FormData();
      data.append("News_Title", this.eTitle);
      data.append("News_Type", this.eType);
      data.append("News_Date", this.eDates);
      data.append("News_Detail", this.eDetail);
      data.append("News_links", this.elinks);
      data.append("News_Picture", this.file);
      data.append("News_File", this.eimgUrl);

      // Send Patch request to laravel
      data.append("_method", "PUT");
      http
        .post(`newsedit/${newsId}`, data)
        .then(() => {
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
            this.$router.push({ name: "Feed" });
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
    this.EditProduct(this.newsId);
  },
};
</script>
