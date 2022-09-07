<template>
  <div class="">
    <main class="profile-page custom">
      <section class="relative pb-16 bg-blueGray-200">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
            >
              <div class="px-6 mt-6">
                <div class="flex flex-wrap rounded-lg bg-blueGray-100">
                  <div class="w-full lg:w-3/12">
                    <div class="mr-4 text-center rounded-lg bg-emerald-500">
                      <h3
                        class="text-6xl font-semibold leading-normal text-white"
                      >
                        Profile
                      </h3>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12">
                    <h3 class="mt-1 text-2xl font-semibold">
                      แก้ไขข้อมูลส่วนตัวผู้ใช้งาน
                    </h3>

                    <h3 class="text-xl font-normal">| Edit your profile</h3>
                  </div>
                  <div class="w-full lg:w-3/12">
                    <div class="mt-4 text-right">
                      <button
                        @click="back"
                        class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        ย้อนกลับ
                      </button>
                    </div>
                  </div>
                </div>

                <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                  <div class="flex flex-wrap">
                    <!-- from input -->
                    <div class="w-full lg:w-6/12 pr-4">
                      <div class="mb-8">
                        <div class="relative text-center px-2">
                          <img
                            alt="..."
                            v-if="imgUrl"
                            :src="imgUrl"
                            class="mt-0 rounded-full shadow-lg h-200-px center-img max-w-200-px cropped bg-emerald-500"
                          />
                          <div class="text-left">
                            <label
                              class="block mt-4 my-3 text-gray-700 text-md"
                              for="image"
                              >อัพโหลดรูปโปรไฟล์</label
                            >
                            <input
                              ref="fileupload"
                              type="file"
                              @change="onFileSelected"
                              class="px-3 py-2 leading-tight text-gray-700 border w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <label
                            class="block my-3 mb-4 text-blueGray-500 text-md border-b font-semibold"
                            for="Title"
                            >ข้อมูลส่วนตัว (Personal Infomation)</label
                          >
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >รหัสประจำตัวประชาชน</label
                          >
                          <input
                            v-model="id_card"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 bg-blueGray-100"
                            type="text"
                            placeholder="ID"
                            readonly
                          />
                        </div>
                      </div>
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-6/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >ชื่อ (ภาษาไทย)</label
                          >
                          <input
                            v-model="first_name"
                            class="w-full px-3 placeholder-blueGray-300  py-2 leading-tight text-gray-700"
                            type="text"
                            placeholder="Firstname"
                          />
                        </div>
                        <div class="w-full px-2 md:w-6/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >นามสกุล (ภาษาไทย)</label
                          >
                          <input
                            v-model="last_name"
                            class="w-full px-3 py-2 placeholder-blueGray-300  leading-tight text-gray-700"
                            type="text"
                            placeholder="Lastname"
                          />
                        </div>
                      </div>
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-6/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >ชื่อ (ภาษาอังกฤษ)</label
                          >
                          <input
                            v-model="first_nameEn"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                            type="text"
                            placeholder="Firstname (English)"
                          />
                          <!-- <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div> -->
                        </div>
                        <div class="w-full px-2 md:w-6/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >นามสกุล (ภาษาอังกฤษ)</label
                          >
                          <input
                            v-model="last_nameEn"
                            class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700"
                            type="text"
                            placeholder="Lastname (English)"
                          />
                          <!-- <div
                              v-if="v$.last_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.last_nameEn.$errors[0].$message }}
                            </div> -->
                        </div>
                      </div>
                    </div>
                    <!-- Simulator  -->
                    <div class="w-full mt-2 lg:w-6/12">
                      <div class="border-l pr-2 pl-4">
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 mb-4 text-blueGray-500 text-md border-b font-semibold"
                              for="Title"
                              >ตำแหน่ง (Position)</label
                            >
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ตำแหน่งทางการศึกษา</label
                            >
                            <input
                              v-model="position"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Position of Education"
                            />
                            <!-- <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div> -->
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ตำแหน่งทางการบริหาร</label
                            >
                            <input
                              v-model="employee"
                              class="w-full px-3 bg-blueGray-200 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Position of Administration"
                              readonly
                            />
                            <!-- <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div> -->
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 mt-3 mb-4 text-blueGray-500 text-md border-b font-semibold"
                              for="Title"
                              >การศึกษา (Graduate)</label
                            >
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ชื่อปริญญา</label
                            >
                            <input
                              v-model="graduate"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Degree"
                            />
                            <!-- <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div> -->
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >สาขา / ภาควิชา</label
                            >
                            <input
                              v-model="major"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Department"
                            />
                            <!-- <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div> -->
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >สถาบันการศึกษา</label
                            >
                            <input
                              v-model="campus"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="University"
                            />
                            <!-- <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div> -->
                          </div>
                        </div>
                        <label
                          class="block ml-2 mt-6 mb-4 text-blueGray-500 text-md border-b font-semibold"
                          for="Title"
                          >การติดต่อ (Contact)</label
                        >
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >เบอร์ติดต่อ</label
                            >
                            <input
                              v-model="phone"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Tel."
                            />
                            <!-- <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div> -->
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >อีเมล</label
                            >
                            <input
                              v-model="email"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Email"
                            />
                            <!-- <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 pr-4">
                      <div class="mt-4 p-4 text-center">
                        <button
                          @click="EditProfile(id)"
                          class="px-6 py-3 mb-1 mx-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
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
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import http from "@/services/WebpageService";
import useValidate from "@vuelidate/core";
//import { required, email, minLength, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),
      uid: "",
      id_card: "",
      first_name: "",
      last_name: "",
      first_nameEn: "",
      last_nameEn: "",
      position: "",
      employee: "",
      graduate: "",
      major: "",
      campus: "",
      email: "",
      phone: "",
      imgUrl: "",
      file: null,
      profile: [],
    };
  },
  methods: {
    back() {
      this.$router.push({ name: "ServiceTeacher" });
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      this.file = event.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    ShowProfile() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));

      http.get(`personnel/cardid/${local_user.card_id}`).then((response) => {
        this.profile = response.data[0];
        this.uid = this.profile.personnelId;
        this.imgUrl = this.profile.personnelPhoto;
        this.id_card = this.profile.citizenId;
        this.first_name = this.profile.firstName;
        this.last_name = this.profile.lastName;
        this.first_nameEn = this.profile.fistNameEn;
        this.last_nameEn = this.profile.lastNameEn;
        this.position = this.profile.position;
        this.employee = this.profile.adminPosition;
        this.graduate = this.profile.education;
        this.major = this.profile.major;
        this.campus = this.profile.university;
        this.email = this.profile.e_mail;
        this.phone = this.profile.phoneNumber;
      });
    },
    EditProfile() {
      let formDataUpdate = new FormData();
      formDataUpdate.append("personnelPhoto", this.file);
      formDataUpdate.append("citizenId", this.id_card);
      formDataUpdate.append("firstName", this.first_name);
      formDataUpdate.append("lastName", this.last_name);
      formDataUpdate.append("fistNameEn", this.first_nameEn);
      formDataUpdate.append("lastNameEn", this.last_nameEn);
      formDataUpdate.append("position", this.position);
      formDataUpdate.append("adminPosition", this.employee);
      formDataUpdate.append("education", this.graduate);
      formDataUpdate.append("major", this.major);
      formDataUpdate.append("university", this.campus);
      formDataUpdate.append("e_mail", this.email);
      formDataUpdate.append("phoneNumber", this.phone);
      formDataUpdate.append("_method", "PUT");
      http
        .post(`personnel/update/${this.uid}`, formDataUpdate)
        .then(() => {
          const Swal = this.$swal.mixin({
            position: "center",
            showConfirmButton: true,
            customClass: {
              title: "font-weight-bold",
              confirmButton:
                "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
              cancelButton:
                "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
            },
            buttonsStyling: false,
          });
          Swal.fire({
            icon: "success",
            title: `แก้ไขข้อมูลเรียบร้อย`,
          }).then(() => {
            this.$router.push({ name: "ServiceTeacher" });
            window.location.reload();
          });
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
  },
  mounted() {
    this.ShowProfile();
  },
};
</script>
