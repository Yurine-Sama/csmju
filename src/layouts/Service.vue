<template>
  <div>
    <service-navbar />

    <main>
      <section class="relative w-full h-full min-h-screen py-16">
        <div>
          <main class="profile-page custom">
            <section class="relative block h-500-px">
              <div
                class="absolute top-0 w-full h-full bg-center bg-cover"
                :style="`background-image: url('${bgupdate}');`"
              >
                <span
                  id="blackOverlay"
                  class="absolute w-full h-full bg-black opacity-50"
                ></span>
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none h-70-px"
                style="transform: translateZ(0);"
              >
                <svg
                  class="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    class="fill-current text-blueGray-200"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </section>

            <section class="relative pt-16 bg-blueGray-200">
              <div class="container mx-auto">
                <div class="flex flex-wrap ">
                  <div
                    class="cssanimation sequence fadeInBottom relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words rounded-lg shadow-xl bg-blueGray-800 lg:w-12/12"
                  >
                    <div class="px-6">
                      <div class="flex flex-wrap text-center lg:text-left">
                        <div
                          class="relative w-full px-6 lg:w-4/12 cssanimation sequence fadeInBottom"
                        >
                          <div class="relative text-center">
                            <img
                              alt="..."
                              v-if="imgUrl"
                              :src="imgUrl"
                              class="-mt-20 bg-white cropped-profile border-2 rounded-full shadow-lg h-200-px center-img max-w-200-px"
                            />
                          </div>
                          <div class="relative px-3 py-6 mt-2 text-center">
                            <button
                              @click="Profile"
                              class="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                              type="button"
                            >
                              แก้ไขโปรไฟล์
                            </button>
                          </div>
                        </div>
                        <div
                          class="relative w-full lg:w-4/12 cssanimation sequence fadeInBottom"
                        >
                          <div class="flex py-4 pt-6">
                            <div
                              class="py-3 border-l-2 text-center lg:text-left"
                            >
                              <h3
                                class="ml-3 mb-3 text-lg font-normal leading-normal text-blueGray-100"
                              >
                                รหัสนักศึกษา : {{ this.studentID }}
                              </h3>
                              <h3
                                class="ml-3 mb-2 text-4xl font-semibold leading-normal text-blueGray-100"
                              >
                                {{ this.first_name }} {{ this.last_name }}
                              </h3>
                              <h3
                                class="ml-3 mb-2 text-2xl font-semibold leading-normal text-blueGray-100"
                              >
                                {{ this.first_nameEn }} {{ this.last_nameEn }}
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div
                          class="relative w-full px-6 lg:w-4/12 cssanimation sequence fadeInBottom"
                        >
                          <div class="flex justify-center py-4 pt-4">
                            <div
                              class="p-3 mt-4 text-left border-2 rounded-lg shadow-lg bg-blueGray-100 border-blueGray-300"
                            >
                              <h3
                                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700 "
                              >
                                ข้อมูลการติดต่อ
                              </h3>
                              <div
                                class="py-1 border-t border-blueGray-300"
                              ></div>
                              <p
                                class="mb-2 font-normal leading-normal text-md text-blueGray-700"
                              >
                                เบอร์โทร : {{ this.phone }}
                              </p>
                              <p
                                class="mb-2 font-normal leading-normal text-md text-blueGray-700"
                              >
                                E-mail : {{ this.email }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>

        <foot absolute />
      </section>
    </main>
  </div>
</template>
<script>
import Foot from "@/components/Footers/Foot.vue";
import ServiceNavbar from "@/components/Navbars/ServiceNavbar.vue";
import team from "@/assets/img/user_null.svg";
import http from "@/services/WebpageService";
import bgupdate from "@/assets/img/bg-update.jpg";
export default {
  data() {
    return {
      bgupdate,
      team,
      studentID: "",
      first_name: "",
      last_name: "",
      first_nameEn: "",
      last_nameEn: "",
      email: "",
      phone: "",
      address: "",

      imgUrl: "",
      file: null,

      profile: [],
    };
  },
  components: {
    Foot,
    ServiceNavbar,
  },
  mounted() {
    this.ShowProfile();
    //this.LoginCheck();
  },
  methods: {
    Profile() {
      this.$router.push({
        name: "ProfileStudent",
      });
    },
    ShowProfile() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));
      let email_cut = local_user.email;
      let studentID = email_cut.slice(3, 13);
      let csStudent = studentID.substring(3, 6);

      //Check Student ID => ComSci 410
      if (csStudent == "410") {
        http.get(`student/${studentID}`).then((response) => {
          this.profile = response.data.data[0];
          let fromCheck = response.data.from;
          if (fromCheck != null) {
            this.studentID = this.profile.studentCode;
            this.first_name = this.profile.nameTh;
            this.last_name = this.profile.surnameTh;
            this.first_nameEn = this.profile.nameEn;
            this.last_nameEn = this.profile.surnameEn;
            this.email = this.profile.EmailStudent;
            this.phone = this.profile.mobile;
            this.address = this.profile.Address;
            this.imgUrl = this.profile.PictureProfile;
          } else {
            this.first_name = local_user.name;
            this.last_name = local_user.surname;
            this.phone = local_user.mobile;
            this.email = local_user.email;
            this.imgUrl = this.team;
            let email_cut = local_user.email;
            this.studentID = email_cut.slice(3, 13);
          }
        });
      } else {
        const Toast = this.$swal.mixin({
          position: "center",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "error",
          title: "Your account is not found.",
        }).then(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("permission");
          this.$router.push({ name: "Login" });
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
      http.post(`checklogin/create`, data).then((response) => {
        this.$store.state.id_login = response.data.LoginId;
      });
    },
  },
};
</script>
