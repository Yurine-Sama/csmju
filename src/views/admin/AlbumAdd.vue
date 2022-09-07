<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-6 text-center">
              <h1 class="py-6 text-3xl font-bold ">
                CSMJU | เพิ่มประมวลผลรูปภาพ
              </h1>
            </div>
            <br class="shadow-xl" />
            <div
              class="relative flex flex-col w-full  mb-4 break-words rounded"
            >
              <div class="w-full lg:w-12/12 pr-4">
                <div class="px-2">
                  <div class="relative text-center">
                    <div class="text-left mb-4 file-area">
                      <label
                        class="block mt-4 mb-2 text-gray-700 text-lg font-semibold"
                        for="image"
                        >อัพโหลดรูปภาพ</label
                      >
                      <input
                        ref="fileupload"
                        type="file"
                        @change="onFileSelected"
                        class="px-3 py-8 leading-tight text-gray-700 border rounded shadow w-full"
                      />
                    </div>
                    <img
                      alt="..."
                      v-if="imgUrl"
                      :src="imgUrl"
                      class="mt-2 rounded-lg shadow-lg center-img h-1/2 w-1/2 cropped bg-emerald-500"
                    />
                  </div>
                  <div class="text-center mt-4">
                    <button
                      @click="addPicture"
                      class="px-6 py-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow-lg outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="button"
                    >
                      <i class="fas fa-plus-circle"></i>
                      เพิ่มรูปภาพ
                    </button>
                  </div>
                </div>
              </div>
              <!-- Simulator  -->
              <div class="w-full mt-0 lg:w-12/12 ">
                <div class="border-l pr-2 pl-4">
                  <label
                    class="block mt-4 mb-2 text-gray-700 text-lg font-semibold"
                    for="image"
                    >การแสดงรูปภาพเคลื่อนไหว</label
                  >
                  <div class="flex flex-wrap mb-4">
                    <div
                      v-for="image in banner_array"
                      :key="image.Banner_ID"
                      class="w-full px-2 md:w-4/12 border rounded-lg pt-2 pb-4 bg-blueGray-100"
                    >
                      <div class="p-2 text-sm mx-2">
                        <p
                          class="block font-semibold my-3 pb-2 text-gray-700 text-md text-center"
                          for="Title"
                        >
                          Banner ID : {{ image.Banner_ID }}
                        </p>
                        วันที่เผยแพร่ : {{ image.Banner_Date }}
                      </div>
                      <div class="mb-4">
                        <img
                          :src="image.Banner_File"
                          class="h-200-px center-img rounded-lg shadow-lg border-blueGray-300 border"
                          alt=""
                        />
                      </div>
                      <div class="text-center mt-4">
                        <button
                          @click="deleteBanner(image.Banner_ID)"
                          class="px-4 py-2 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow-lg outline-none bg-red-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-trash-alt"></i>
                          ลบรูปภาพ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
export default {
  data() {
    return {
      banner_array: [],
      imgUrl: "",
      file: null,
    };
  },
  methods: {
    getBanner() {
      http.get(`banner`).then((response) => {
        this.banner_array = response.data;
        this.banner_array.reverse();
      });
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      this.file = event.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    addPicture() {
      var date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      let today = year + "-" + month + "-" + day;
      let time = hour + ":" + minute + ":" + second;

      if (this.file != null) {
        const swalWithBootstrapButtons = this.$swal.mixin({
          customClass: {
            title: "font-weight-bold",
            confirmButton:
              "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
            cancelButton:
              "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          },
          buttonsStyling: false,
        });

        swalWithBootstrapButtons
          .fire({
            title: "ยืนยันการอัพโหลดรูปภาพ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              const formData = new FormData();
              formData.append("Banner_Date", today);
              formData.append("Banner_Time", time);
              formData.append("Banner_File", this.file);
              http.post(`banner/create`, formData).then(() => {
                swalWithBootstrapButtons
                  .fire("การอัพโหลดรูปภาพสำเร็จ!", "", "success")
                  .then(() => {
                    today = null;
                    time = null;
                    this.file = "";
                    this.$refs.fileupload.value = null;
                    window.location.reload();
                  });
              });
            } else if (result.dismiss === this.$swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                "ยกเลิกการอัพโหลดรูปภาพ!",
                "",
                "error"
              );
            }
          });
      } else {
        const Toast = this.$swal.mixin({
          position: "center",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "warning",
          title: "เพิ่มรูปภาพการแสดงผลก่อน",
        });
      }
    },
    deleteBanner(id) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          title: "font-weight-bold",
          confirmButton:
            "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          cancelButton:
            "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "ยืนยันการลบรูปภาพ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            http.delete(`banner/delete/${id}`).then(() => {
              swalWithBootstrapButtons
                .fire("ลบรูปภาพเรียบร้อย!", "", "success")
                .then(() => {
                  this.file = "";
                  this.$refs.fileupload.value = null;
                  window.location.reload();
                });
            });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "ยกเลิกการลบรูปภาพเรียบร้อย!",
              "",
              "error"
            );
          }
        });
    },
  },

  mounted() {},
};
</script>
