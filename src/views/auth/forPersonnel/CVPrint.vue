<template>
  <div class="body-page">
    <page size="A4">
      <div
        id="printMe"
        class="bg-white :border custom :border-blueGray-300 :shadow-lg "
      >
        <div class="bg-blueGray-100 px-0 pt-2 pb-4">
          <div class=" flex flex-warp">
            <div class="ml-0 px-0 w-full lg:w-3/12 ">
              <img
                alt="..."
                :src="image"
                class="mt-2 rounded-full shadow-lg max-w-100-px h-100-px center-img bg-emerald-500"
              />
            </div>
            <div class="ml-3 px-0 w-full lg:w-6/12 ">
              <h1 class="mt-4 font-normal text-xl text-blueGray-800">
                {{ this.position }}{{ this.first_name }}
                {{ this.last_name }}
              </h1>
              <h1 class="mt-2 font-semibold text-lg text-blueGray-800">
                {{ this.titleEn }} {{ this.first_nameEn }}
                {{ this.last_nameEn }}
              </h1>
            </div>
            <div class="text-right mt-4 mr-4 w-full lg:w-3/12 ">
              <div class="text-sm text-blueGray-400">
                <span>{{ this.address }}&nbsp; </span>
                <i class="fas fa-home text-emerald-500"></i>
              </div>
              <div class="text-sm text-blueGray-400">
                <span>{{ this.phone }}&nbsp; </span>
                <i class="fas fa-phone-alt text-emerald-500"></i>
              </div>
              <div class="text-sm text-blueGray-400">
                <span>{{ this.email }}&nbsp; </span>
                <i class="fas fa-envelope text-emerald-500"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white px-4 pt-4 pb-6">
          <div class=" flex flex-warp">
            <div class="ml-3 px-4 w-full lg:w-12/12 ">
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-user text-emerald-500"></i>
                  ประวัติโดยย่อ / Biological
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm  leading-normal break-words text-blueGray-500"
                >
                  {{ this.bio }}
                </p>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-user-graduate text-emerald-500"></i>
                  การศึกษา / Education
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  <b>{{ this.year1 }} </b>
                  {{ this.graduate1 }}
                  {{ this.institution1 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  <b>{{ this.year2 }} </b>
                  {{ this.graduate2 }}
                  {{ this.institution2 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  <b>{{ this.year3 }} </b>
                  {{ this.graduate3 }}
                  {{ this.institution3 }}
                </p>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-briefcase text-emerald-500"></i>
                  ประสบการณ์การทำงาน / Experience
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ exp_1 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ exp_2 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ exp_3 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ exp_4 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ exp_5 }}
                </p>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-tools text-emerald-500"></i>
                  ทักษะ / Skills
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ skill_1 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ skill_2 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ skill_3 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ skill_4 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ skill_5 }}
                </p>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-tools text-emerald-500"></i>
                  ความเชี่ยวชาญ / Expertise
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ expert_1 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ expert_2 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ expert_3 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ expert_4 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ expert_5 }}
                </p>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-award text-emerald-500"></i>
                  ผลงาน / Portfolio
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ port_1 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ port_2 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ port_3 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ port_4 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ port_5 }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </page>
  </div>
</template>

<script>
import http from "@/services/WebpageService";
export default {
  data() {
    return {
      id: 0,
      cv_array: [],
      position: "",
      first_name: "",
      last_name: "",
      titleEn: "",
      first_nameEn: "",
      last_nameEn: "",
      address: "มหาวิทยาลัยแม่โจ้",
      phone: "",
      email: "",

      bio: "",

      exp_1: "",
      exp_2: "",
      exp_3: "",
      exp_4: "",
      exp_5: "",

      skill_1: "",
      skill_2: "",
      skill_3: "",
      skill_4: "",
      skill_5: "",

      port_1: "",
      port_2: "",
      port_3: "",
      port_4: "",
      port_5: "",

      expert_1: "",
      expert_2: "",
      expert_3: "",
      expert_4: "",
      expert_5: "",

      experience_array: [{ exp: "" }],
      skill_array: [{ skill: "" }],
      portfolio_array: [{ port: "" }],
      expert_array: [{ expert: "" }],

      year1: "",
      graduate1: "",
      institution1: "",
      year2: "",
      graduate2: "",
      institution2: "",
      year3: "",
      graduate3: "",
      institution3: "",
    };
  },
  mounted() {
    this.getPersonnelData();
    this.getCvData();
    this.printCV();
  },

  methods: {
    getCvData() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));
      http
        .get(`cv/${local_user.card_id}`)
        .then((response) => {
          this.cv_array = response.data[0];
          //Get data from API
          this.id = this.cv_array.cvId;
          this.bio = this.cv_array.Bio_Personnel;
          this.year1 = this.cv_array.BachelorDegree.slice(0, 6);
          this.graduate1 = this.cv_array.BachelorDegree.slice(6, 9);
          this.institution1 = this.cv_array.BachelorDegree.slice(9);
          this.year2 = this.cv_array.MastersDegree.slice(0, 6);
          this.graduate2 = this.cv_array.MastersDegree.slice(6, 9);
          this.institution2 = this.cv_array.MastersDegree.slice(9);
          this.year3 = this.cv_array.DoctoralDegree.slice(0, 6);
          this.graduate3 = this.cv_array.DoctoralDegree.slice(6, 9);
          this.institution3 = this.cv_array.DoctoralDegree.slice(9);

          this.experience_array = this.cv_array.Experience.split(",");
          this.exp_1 = this.experience_array[0];
          this.exp_2 = this.experience_array[1];
          this.exp_3 = this.experience_array[2];
          this.exp_4 = this.experience_array[3];
          this.exp_5 = this.experience_array[4];

          this.skill_array = this.cv_array.Skill.split(",");
          this.skill_1 = this.skill_array[0];
          this.skill_2 = this.skill_array[1];
          this.skill_3 = this.skill_array[2];
          this.skill_4 = this.skill_array[3];
          this.skill_5 = this.skill_array[4];

          this.expert_array = this.cv_array.expertise.split(",");
          this.expert_1 = this.expert_array[0];
          this.expert_2 = this.expert_array[1];
          this.expert_3 = this.expert_array[2];
          this.expert_4 = this.expert_array[3];
          this.expert_5 = this.expert_array[4];

          this.portfolio_array = this.cv_array.Portfolio.split(",");
          this.port_1 = this.portfolio_array[0];
          this.port_2 = this.portfolio_array[1];
          this.port_3 = this.portfolio_array[2];
          this.port_4 = this.portfolio_array[3];
          this.port_5 = this.portfolio_array[4];
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
              //Call Sweet Alert
              const Toast = this.$swal.mixin({
                position: "center",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "error",
                title: "Connection Error",
              });
            }
          }
        });
    },
    getPersonnelData() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));
      http
        .get(`personnel/cardid/${local_user.card_id}`)
        .then((response) => {
          this.personnel_array = response.data[0];
          //Get data from API
          this.position = this.personnel_array.titlePosition;
          this.first_name = this.personnel_array.firstName;
          this.last_name = this.personnel_array.lastName;

          this.titleEn = this.personnel_array.titleNameEn;
          this.first_nameEn = this.personnel_array.fistNameEn;
          this.last_nameEn = this.personnel_array.lastNameEn;

          this.email = this.personnel_array.e_mail;
          this.phone = this.personnel_array.phoneNumber;

          this.image = this.personnel_array.personnelPhoto;
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
              //Call Sweet Alert
              const Toast = this.$swal.mixin({
                position: "center",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "error",
                title: "Connection Error",
              });
            }
          }
        });
    },
    printCV() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));
      document.title = `CV_Aj-${local_user.email.slice(0, 4)}.pdf`;
      const Swal = this.$swal.mixin({
        customClass: {
          title: "font-weight-bold custom",
          confirmButton:
            "px-6 py-3 mx-4 costom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
        },
        buttonsStyling: false,
      });
      Swal.fire({
        title: "กด CTRL + P",
        html:
          "เลือก More settings | เมนู Paper size เลือก A4 | เมนู Options นำเครื่องหมายถูกต้องตรง Header and footers ออก",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "ยืนยัน",
      }).then((result) => {
        if (result.isConfirmed) {
          var beforePrint = function() {
            console.log("Functionality to run before printing.");
          };

          var afterPrint = function() {
            console.log("Functionality to run after printing");
          };

          if (window.matchMedia) {
            var mediaQueryList = window.matchMedia("print");
            mediaQueryList.addListener(function(mql) {
              if (mql.matches) {
                beforePrint();
              } else {
                afterPrint();
              }
            });
          }
          // http.http.delete(`cv/delete/${this.id}`).then(() => {});
        }
      });
    },
  },
};
</script>
<style>
.body-page {
  background: rgb(204, 204, 204);
}
.page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  /* box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5); */
}
.page[size="A4"] {
  width: 21cm;
  height: 29.7cm;
}

@media print {
  body,
  page {
    margin: 0;
    box-shadow: 0;
  }
}
</style>
