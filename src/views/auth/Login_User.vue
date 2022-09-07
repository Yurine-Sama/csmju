<template>
  <div class="container h-full px-4 mx-auto custom -mt-10">
    <div class="flex items-center content-center justify-center h-full">
      <div class="w-full px-4 lg:w-4/12">
        <div
          class="cssanimation sequence fadeInBottom relative flex flex-col w-full min-w-0  break-words border-0 rounded-lg shadow-lg bg-blueGray-200 "
        >
          <div class="px-6 py-6 mb-0 rounded-t">
            <div class="mb-3 text-center">
              <h4 class="text-xl font-bold text-blueGray-500">
                เข้าสู่ระบบ
              </h4>
            </div>

            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form @submit.prevent="onSubmit">
              <div
                class="relative w-full mb-3"
              >
                <label
                  class="block mb-2 text-md font-normal uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  <b>
                    ชื่อผู้ใช้งาน
                  </b>
                  <span class="text-xs">
                    (Username)
                  </span>
                </label>
                <div class="wrapper">
                  <input
                    v-model="username"
                    type="username"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="รหัสนักศึกษา เช่น 6104101301"
                  />

                  <div class="tooltip rounded-lg text-center text-sm">
                    บุคลากรสาขาวิชาฯ กรอกเป็น email
                  </div>
                </div>
              </div>
              <div
                v-if="v$.username.$error"
                class="mt-2 text-sm text-right text-red-500"
              >
                {{ v$.username.$errors[0].$message }}
              </div>

              <div
                class="relative w-full mb-3"
              >
                <label
                  class="block mb-2 text-md font-normal uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  <b>
                    รหัสผ่าน
                  </b>
                  <span class="text-xs">
                    (Password)
                  </span>
                </label>
                <input
                  v-model="password"
                  :type="type"
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  placeholder="รหัสผ่าน เช่น mju@12061998"
                />
                <button @click="submit" type="submit" class="hidden">
                  Submit
                </button>
              </div>
              <div
                v-if="v$.password.$error"
                class="mt-2 text-sm text-right text-red-500"
              >
                {{ v$.password.$errors[0].$message }}
              </div>

              <div
                class="relative w-full mb-3"
              >
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    @click="showPassword"
                    type="checkbox"
                    class="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                  />
                  <span class="ml-2 text-sm text-blueGray-600">
                    แสดงรหัสผ่าน (Show)
                  </span>
                </label>
              </div>

              <div
                class="mb-3 mt-6 block w-full overflow-x-auto"
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
              <div class="mt-6 text-center">
                <button
                  @click="submit"
                  class="w-full px-6 py-3 mb-1 mr-1 text-sm text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  เข้าสู่ระบบ
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
import vueRecaptcha from "vue3-recaptcha2";
import useValidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import http from "@/services/MJUService";
import httpAdmin from "@/services/AuthService";
import httpLogin from "@/services/WebpageService";

export default {
  data() {
    return {
      v$: useValidate(),
      username: "",
      password: "",
      type: "password",

      showRecaptcha: true,
      verify: null,
    };
  },
  methods: {
    recaptchaVerified(response) {
      this.verify = response;
    },

    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {},
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    submit() {
      this.v$.$validate();
      if (this.verify != null) {
        if (
          // eslint-disable-next-line no-useless-escape
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.username)
        ) {
          //Login Personnel Service - Check Form Email
          if (!this.v$.$error) {
            http
              .post("login/mju/ad", {
                username: this.username,
                password: this.password,
              })
              .then((response) => {
                let setRole = { role: 1 };
                localStorage.setItem("user", JSON.stringify(response.data));
                localStorage.setItem("permission", JSON.stringify(setRole));
                if (
                  response.data.status == "success" &&
                  response.data.type[0] == "personnel"
                ) {
                  const Toast = this.$swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                  });
                  Toast.fire({
                    icon: "success",
                    title: "กำลังเข้าสู่ระบบ",
                  }).then(() => {
                    this.LoginCheck();
                    this.$router.push({ name: "ServiceTeacher" });
                  });
                } else if (response.data.status == "fail") {
                  this.AdminLogin();
                }
              })
              .catch((error) => {
                if (error.response) {
                  if (
                    error.response.status == 401 ||
                    error.response == undefined
                  ) {
                    //Call Sweet Alert
                    const Toast = this.$swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 1000,
                      timerProgressBar: true,
                    });

                    Toast.fire({
                      icon: "error",
                      title: "ชื่อผู้ใช้ / รหัสผ่านไม่ถูกต้อง",
                    }).then(() => {
                      this.password = "";
                    });
                  }
                } else if (error.response == undefined) {
                  //Call Sweet Alert
                  const Toast = this.$swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                  });

                  Toast.fire({
                    icon: "error",
                    title: "ชื่อผู้ใช้ / รหัสผ่านไม่ถูกต้อง",
                  }).then(() => {
                    // Login  Success => Dashboard
                    this.password = "";
                  });
                }
              });
          } else {
            const Toast = this.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
            });

            Toast.fire({
              icon: "error",
              title: "ไม่สามารถเชื่อมต่อกับระบบได้",
            });
          }
        } else {
          //Login Student Service - Check Form Not Email
          if (!this.v$.$error) {
            http
              .post("login/mju/ad", {
                username: "mju" + this.username,
                password: this.password,
              })
              .then((response) => {
                if (response.data.status == "success") {
                  //Data User LocalStorage
                  let setRole = { role: 2 };
                  localStorage.setItem("user", JSON.stringify(response.data));
                  localStorage.setItem("permission", JSON.stringify(setRole));
                  const Toast = this.$swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                  });

                  Toast.fire({
                    icon: "success",
                    title: "กำลังเข้าสู่ระบบ",
                  }).then(() => {
                    this.LoginCheck();
                    this.$router.push({ name: "ServiceStudent" });
                  });
                } else {
                  const Toast = this.$swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                  });

                  Toast.fire({
                    icon: "error",
                    title: "ชื่อผู้ใช้ / รหัสผ่านไม่ถูกต้อง",
                  }).then(() => {
                    this.password = "";
                  });
                }
              })
              .catch((error) => {
                if (error.response) {
                  if (error.response.status == 500) {
                    //Call Sweet Alert
                    const Toast = this.$swal.mixin({
                      toast: true,
                      position: "top-end",
                      showConfirmButton: false,
                      timer: 1000,
                      timerProgressBar: true,
                    });

                    Toast.fire({
                      icon: "error",
                      title: "ไม่สามารถเชื่อมต่อกับระบบได้",
                    });
                  }
                }
              });
          } else {
            const Toast = this.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
            });

            Toast.fire({
              icon: "error",
              title: "ข้อมูลไม่ถูกต้อง",
            });
          }
        }
      } else {
        const Swal = this.$swal.mixin({
          position: "center",
          showConfirmButton: false,
          timer: 1500,
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
    },
    LoginCheck() {
      let user = JSON.parse(window.localStorage.getItem("user"));
      let username = user.name + " " + user.surname;
      let type = user.type[0];
      let date =
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear();

      let time =
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
      let device = navigator.userAgent;
      let data = new FormData();
      data.append("Username", username);
      data.append("type", type);
      data.append("Date", date + " " + time);
      data.append("Device", device);
      data.append("studentCode", null);
      httpLogin.post(`checklogin/create`, data).then((response) => {
        this.$store.state.id_login = response.data.LoginId;
      });
    },
    async AdminLogin() {
      httpAdmin
        .post("login", {
          email: this.username,
          password: this.password,
        })
        .then((response) => {
          //Data User LocalStorage
          localStorage.setItem("user", JSON.stringify(response.data));
          if (response.data.user.role == 0) {
            const Toast = this.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: "success",
              title: "กำลังเข้าสู่ระบบ",
            }).then(() => {
              this.$router.push({ name: "Dashboard" });
            });
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 401 || error.response == undefined) {
              //Call Sweet Alert
              const Toast = this.$swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "error",
                title: "ชื่อผู้ใช้ / รหัสผ่านไม่ถูกต้อง",
              }).then(() => {
                // Login  Success => Dashboard

                this.password = "";
              });
            }
          } else if (error.response == undefined) {
            //Call Sweet Alert
            const Toast = this.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
            });

            Toast.fire({
              icon: "error",
              title: "ชื่อผู้ใช้ / รหัสผ่านไม่ถูกต้อง",
            }).then(() => {
              this.password = "";
            });
          }
        });
    },
  },
  components: {
    vueRecaptcha,
  },
  mounted() {
    //Check Backward
    if (localStorage.getItem("user")) {
      history.forward();
    }
  },
  validations() {
    return {
      password: {
        required: helpers.withMessage("ป้อนรหัสผ่านก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) => `รหัสผ่านต้องไม่น้อยกว่า ${$params.min} ตัวอักษร`,
          minLength(5)
        ),
      },
      username: {
        required: helpers.withMessage("ป้อนชื่อผู้ใช้ก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) =>
            `ชื่อผู้ใช้ต้องไม่น้อยกว่า ${$params.min} ตัวอักษรและตัวเลข`,
          minLength(10)
        ),
      },
    };
  },
};
</script>
