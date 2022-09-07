<template>
  <div class="container px-4 mx-auto custom">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6 ">
        <div class="mt-10 mb-6 text-center ">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            เจ้าหน้าที่สาขาวิชาวิทยาการคอมพิวเตอร์
          </h3>
          <h3
            class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
          >
            คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
          </h3>
        </div>
        <hr />
        <div class="flex flex-wrap py-6">
          <div
            v-for="personnel in personnel_array"
            v-bind:key="personnel.personnelId"
            class="w-full px-4 text-center lg:w-3/12 bg-blueGray-100 border rounded-md shadow-sm"
          >
            <div class="relative px-12 py-12 ">
              <img
                :src="personnel.personnelPhoto"
                class="h-auto center-img max-w-full align-middle bg-teal-500 border-none rounded-full shadow-xl"
              />
            </div>

            <h3
              class="mb-0 text-lg font-semibold leading-normal text-blueGray-700"
            >
              {{ personnel.titlePosition }} {{ personnel.firstName }}
              {{ personnel.lastName }}
            </h3>
            <p class="mb-4 text-sm font-semibold text-blueGray-500">
              {{ personnel.fistNameEn }} {{ personnel.lastNameEn }}
            </p>

            <div class="mt-3 mb-0 text-blueGray-400">
              <div class="mb-2">
                <i class="mr-2 text-lg fas fa-briefcase "></i>
                ตำแหน่ง
                <p class="text-blueGray-700">
                  {{ personnel.adminPosition }}
                </p>
              </div>

              <div class="mb-2">
                <i class="mr-2 text-lg fas fa-university "></i>
                การศึกษา
                <p class="text-blueGray-700">
                  {{ personnel.education }} {{ personnel.major }}
                </p>
                <p class="text-blueGray-700">
                  {{ personnel.university }}
                </p>
              </div>

              <div class="mb-2">
                <i class="mr-2 text-lg fas fa-phone-alt "></i>
                การติดต่อ
                <p class="text-blueGray-700">
                  {{ personnel.phoneNumber }}
                </p>
                <p class="text-blueGray-700">{{ personnel.e_mail }}</p>
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
export default {
  data() {
    return {
      //team2,

      personnel_array: [],
      personnel: {
        personnelId: 0,

        //Name Thai Top
        titlePosition: "",
        firstName: "",
        lastName: "",

        //Name English sub
        fistNameEn: "",
        lastNameEn: "",

        //Position
        adminPosition: "",

        //Education
        education: "",
        major: "",
        university: "",

        //tel
        phoneNumber: "",

        //email
        e_mail: "",

        //profile picture
        personnelPhoto: "",
      },
    };
  },
  mounted() {
    this.getPersonnelData();
  },
  methods: {
    getPersonnelData() {
      http
        .get(`personnel/staff`)
        .then((response) => {
          this.personnel_array = response.data;
          for (let i = 0; i < this.personnel_array.length; i++) {
            if (this.personnel_array[i].adminPosition == "-") {
              this.personnel_array[i].adminPosition = this.personnel_array[
                i
              ].position;
            }
          }
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
                title: "ระบบไม่สามารถเชื่อมต่อได้",
              });
            }
          }
        });
    },
  },
  components: {},
};
</script>
