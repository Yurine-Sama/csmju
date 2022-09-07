<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3 class="text-4xl font-semibold leading-normal text-blueGray-700">
            ติดต่อเรา
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Contact Us
          </p>
        </div>

        <div class="py-5 mt-10 text-center border-t border-blueGray-200">
          <div class="flex flex-wrap">
            <div
              class="w-full px-6 mb-4 lg:w-3/12"
            >
              <div
                class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-lg shadow-lg bg-emerald-400"
              >
                <i class="fas fa-phone-alt fa-2x"></i>
              </div>

              <p class="text-lg text-blueGray-500">
                สามารถติดต่อได้ที่เบอร์ :
              </p>
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
              >
                <a href="tel:+6653873890-3">(+66) 053 873890-3</a>
              </h3>

              <p class="mb-4 text-xs text-red-500">
                *หมายเหตุ : กรุณาติดต่อภายในวัน และเวลาราชการ
              </p>
            </div>
            <div
              class="w-full px-6 mb-4 lg:w-3/12"
            >
              <div
                class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-lg shadow-lg bg-emerald-400"
              >
                <i class="fas fa-envelope fa-2x"></i>
              </div>
              <p class="text-lg text-blueGray-500">
                ติดต่อทางอีเมลของเรา :
              </p>
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
              >
                <a href="mailto:cs@mju.ac.th">cs@mju.ac.th </a>
              </h3>
            </div>
          </div>
          <div class="flex flex-wrap mt-10">
            <div
              class="w-full px-6 mb-4 lg:w-3/12"
            >
              <div
                class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-lg shadow-lg bg-emerald-400"
              >
                <i class="fab fa-facebook-f fa-2x"></i>
              </div>

              <p class="text-lg text-blueGray-500">
                ติดต่อทาง Facebook :
              </p>
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
              >
                <a href="https://www.facebook.com/computersciencemju"
                  >วิทยาการคอมพิวเตอร์ ม.แม่โจ้</a
                >
              </h3>
            </div>
            <div
              class="w-full px-6 mb-4 lg:w-3/12"
            >
              <div
                class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-lg shadow-lg bg-emerald-400"
              >
                <i class="fab fa-line fa-3x"></i>
              </div>
              <p class="text-lg text-blueGray-500">
                ติดต่อทาง Line Offical :
              </p>
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
              >
                <a href="https://line.me/R/ti/p/%40053vfccm">CSMJU </a>
              </h3>
            </div>
            <div
              class=" w-full border-blueGray-300 px-6 border-l mb-4 text-left lg:-mt-48 lg:w-6/12"
            >
              <h3
                class="mb-6 text-2xl font-semibold leading-normal text-center text-blueGray-700"
              >
                แจ้งปัญหาของท่านให้เราทราบ / ข้อเสนอแนะ
              </h3>
              <div class="pt-0 mb-3 text-lg text-blueGray-500">
                <p>หัวข้อเรื่อง</p>
                <input
                  v-model="Topic"
                  class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border"
                  type="text"
                  placeholder="ชื่อโครงการ"
                />
                <div v-if="v$.Topic.$error" class="mt-2 text-sm text-red-500">
                  {{ v$.Topic.$errors[0].$message }}
                </div>
              </div>

              <div class="pt-2 mb-3 text-lg text-blueGray-500">
                <p>รายละเอียด</p>
                <textarea
                  v-model="Detail"
                  cols="30"
                  placeholder="เนื้อหา / รายละเอียด"
                  rows="5"
                  class="relative w-full px-3 py-1 text-base bg-white borderoutline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                ></textarea>
                <div v-if="v$.Detail.$error" class="mt-0 text-sm text-red-500">
                  {{ v$.Detail.$errors[0].$message }}
                </div>
              </div>

              <div class="mt-4 ">
                <img
                  v-if="imgUrl"
                  :src="imgUrl"
                  class="w-full cropped-card1 rounded-lg shadow-lg border-b"
                />
              </div>

              <div class="mb-6 text-lg text-blueGray-500">
                <span>แนบรูปภาพ</span>
                <div
                  class="relative flex items-center justify-center h-32 bg-gray-100 border-b border-blue-700 "
                >
                  <input
                    ref="fileupload"
                    type="file"
                    @change="onFileSelected"
                    class="w-full h-full opacity-0 p-3 bg-white"
                  />
                </div>
              </div>

              <div
                class="center-img mb-3 w-full relative text-center items-center block w-full overflow-x-auto"
              >
                <vue-recaptcha
                  v-if="showRecaptcha"
                  siteKey="6Le4YCUeAAAAAO0lm_yXaykPaveKVJCipX7I_M8u"
                  size="normal"
                  theme="light"
                  data-size="compact"
                  :tabindex="0"
                  @verify="recaptchaVerified"
                  @expire="recaptchaExpired"
                  @fail="recaptchaFailed"
                  ref="vueRecaptcha"
                >
                </vue-recaptcha>
              </div>

              <div class="pt-2 mb-3 text-center ">
                <button
                  @click="submit"
                  class="px-6 py-3 mt-3 mb-1 mr-1 shadow-lg font-semibold text-sm text-white uppercase transition-all duration-150 ease-linear rounded-lg outline-none bg-emerald-500 active:bg-teal-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  บันทึก
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
import http from "@/services/WebpageService";
import icon from "@/assets/img/paper.png";
import vueRecaptcha from "vue3-recaptcha2";
import useValidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      icon,
      v$: useValidate(),

      Topic: "",
      Detail: "",

      showRecaptcha: true,
      date: new Date().toString(),

      imgUrl: "",
      file: null,

      verify: null,
    };
  },
  methods: {
    onFileSelected(event) {
      const file = event.target.files[0];
      this.file = event.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },

    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        if (this.verify != null) {
          const swalWithBootstrapButtons = this.$swal.mixin({
            customClass: {
              title: "font-semibold custom",
              confirmButton:
                "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
              cancelButton:
                "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
            },
            buttonsStyling: false,
          });

          swalWithBootstrapButtons
            .fire({
              title: "ยืนยันการส่งข้อมูล",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "ยืนยัน",
              cancelButtonText: "ยกเลิก",
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                let data = new FormData();
                data.append("Complain_Title", this.Topic);
                data.append("Complain_Detail", this.Detail);
                data.append("Complain_Picture", this.file);
                data.append("Complain_Date", this.date);

                http.post("complain/create", data).then(() => {
                  this.Topic = null;
                  this.Detail = null;
                  this.file = null;
                  this.date = null;
                  this.imgUrl = null;
                  this.$refs.fileupload.value = null;

                  swalWithBootstrapButtons.fire(
                    "บันทึกข้อมูลเรียบร้อย!",
                    "",
                    "success"
                  );
                });
              } else if (result.dismiss === this.$swal.DismissReason.cancel) {
                this.Topic = null;
                this.Detail = null;
                this.file = null;
                this.date = null;
                this.imgUrl = null;

                this.$refs.fileupload.value = null;
                swalWithBootstrapButtons.fire(
                  "ยกเลิกการส่งข้อมูลเรียบร้อย!",
                  "",
                  "error"
                );
              }
            });
        } else {
          const Swal = this.$swal.mixin({
            position: "center",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            customClass: {
              title: "font-semibold custom text-blueGray-600",
            },
          });

          Swal.fire({
            icon: "info",
            title: `กดยืนยัน "reCAPTCHA" ก่อน`,
          });
        }
      }
    },
    recaptchaVerified(response) {
      this.verify = response;
    },

    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {},
  },
  validations() {
    return {
      Topic: {
        required: helpers.withMessage("ป้อนหัวข้อก่อน", required),
      },
      Detail: {
        required: helpers.withMessage("ป้อนรายละเอียดก่อน", required),
      },
    };
  },
  components: {
    vueRecaptcha,
  },
};
</script>
