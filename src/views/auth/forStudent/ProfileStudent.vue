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
                      <div class="px-2">
                        <div class="relative text-center">
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
                              class="px-3 py-2 leading-tight text-gray-700 border-b w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mt-8 flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >รหัสประจำตัวประชาชน</label
                          >
                          <input
                            v-model="card_id"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border bg-blueGray-100"
                            type="text"
                            placeholder="Card ID"
                            readonly
                          />
                        </div>
                      </div>
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >รหัสนักศึกษา</label
                          >
                          <input
                            v-model="studentID"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border bg-blueGray-100"
                            type="text"
                            placeholder="Student ID"
                            readonly
                          />
                        </div>
                      </div>
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <label class="block my-3 text-red-500 text-sm"
                            >**หมายเหตุ :
                            กรณีที่ต้องการแก้ไขข้อมูลส่วนตัวในส่วนที่จำกัดไว้
                            กรุณาแจ้งบุคลากรสาขาวิชา**</label
                          >
                        </div>
                      </div>
                    </div>
                    <!-- Simulator  -->
                    <div class="w-full mt-2 lg:w-6/12">
                      <div class="border-l pr-2 pl-4">
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ชื่อ (ภาษาไทย)</label
                            >
                            <input
                              v-model="first_name"
                              class="w-full px-3 placeholder-blueGray-300 bg-blueGray-100 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Firstname"
                              readonly
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
                              class="w-full px-3 py-2 placeholder-blueGray-300 bg-blueGray-100 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Lastname"
                              readonly
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
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Firstname (English)"
                            />
                            <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div>
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >นามสกุล (ภาษาอังกฤษ)</label
                            >
                            <input
                              v-model="last_nameEn"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Lastname (English)"
                            />
                            <div
                              v-if="v$.last_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.last_nameEn.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >อีเมล</label
                            >
                            <input
                              v-model="email"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Email"
                            />
                            <div
                              v-if="v$.email.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.email.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >มือถือ
                              <span class="text-sm text-red-500 italic"
                                >**ไม่ต้องใส่ขีด (-)**</span
                              ></label
                            >
                            <input
                              v-model="phone"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Phone"
                              maxlength="10"
                            />
                            <div
                              v-if="v$.phone.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.phone.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ที่อยู่ (สามารถติดต่อได้)</label
                            >
                            <textarea
                              v-model="address"
                              cols="30"
                              placeholder="address"
                              rows="5"
                              class="relative w-full px-3 py-1 border-b text-base bg-white outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                            ></textarea>
                            <div
                              v-if="v$.address.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.address.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 pr-4">
                      <div class="mt-4 p-4 text-center">
                        <button
                          @click="CreateProfile"
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
import { required, email, minLength, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),
      card_id: "",

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

      ID: "",

      fromCheck: null,
    };
  },
  methods: {
    onFileSelected(event) {
      const file = event.target.files[0];
      this.file = event.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    ShowProfile() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));
      let email_cut = local_user.email;
      let studentID = email_cut.slice(3, 13);

      http.get(`student/${studentID}`).then((response) => {
        this.profile = response.data.data[0];
        this.fromCheck = response.data.from;
        if (this.fromCheck !== null) {
          this.ID = this.profile.studentId;
          this.studentID = this.profile.studentCode;
          this.first_name = this.profile.nameTh;
          this.last_name = this.profile.surnameTh;
          this.first_nameEn = this.profile.nameEn;
          this.last_nameEn = this.profile.surnameEn;
          this.email = this.profile.EmailStudent;
          this.phone = this.profile.mobile;
          this.address = this.profile.Address;
          this.imgUrl = this.profile.PictureProfile;
          this.card_id = local_user.card_id;
        } else {
          this.first_name = local_user.name;
          this.last_name = local_user.surname;
          this.phone = local_user.mobile;
          let email_cut = local_user.email;
          this.studentID = email_cut.slice(3, 13);
          this.card_id = local_user.card_id;
        }
      });
    },
    CreateProfile() {
      this.v$.$validate();
      if (!this.v$.$error) {
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
            title: "ยืนยันการบันทึกข้อมูล",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              if (this.fromCheck !== null) {
                //Update Profile
                this.EditProfile(this.ID);
              } else {
                //Create Profile
                let formDataCreate = new FormData();
                formDataCreate.append("studentCode", this.studentID);
                formDataCreate.append("nameTh", this.first_name);
                formDataCreate.append("surnameTh", this.last_name);
                formDataCreate.append("nameEn", this.first_nameEn);
                formDataCreate.append("surnameEn", this.last_nameEn);
                formDataCreate.append("EmailStudent", this.email);
                formDataCreate.append("mobile", this.phone);
                formDataCreate.append("Address", this.address);
                formDataCreate.append("PictureProfile", this.file);
                http.post("student/create", formDataCreate).then(() => {
                  swalWithBootstrapButtons
                    .fire("บันทึกข้อมูลเรียบร้อย!", "", "success")
                    .then(() => {
                      this.$router.push({ name: "ServiceStudent" });
                      window.location.reload();
                    });
                });
              }
            } else if (result.dismiss === this.$swal.DismissReason.cancel) {
              this.topic = null;
              this.detail = null;
              this.file = null;
              this.date = null;
              this.imgUrl = null;
              this.file = "";
              this.$refs.fileupload.value = null;
              swalWithBootstrapButtons.fire(
                "ยกเลิกการส่งข้อมูลเรียบร้อย!",
                "",
                "error"
              );
            }
          });
      }
    },
    back() {
      this.$router.push({ name: "ServiceStudent" });
    },
    EditProfile(id) {
      let formDataUpdate = new FormData();
      formDataUpdate.append("studentCode", this.studentID);
      formDataUpdate.append("nameTh", this.first_name);
      formDataUpdate.append("surnameTh", this.last_name);
      formDataUpdate.append("nameEn", this.first_nameEn);
      formDataUpdate.append("surnameEn", this.last_nameEn);
      formDataUpdate.append("EmailStudent", this.email);
      formDataUpdate.append("mobile", this.phone);
      formDataUpdate.append("Address", this.address);
      formDataUpdate.append("PictureProfile", this.file);
      formDataUpdate.append("_method", "PUT");
      http.post(`student/update/${id}`, formDataUpdate).then(() => {
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
        })
          .then(() => {
            this.$router.push({ name: "ServiceStudent" });
            window.location.reload();
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
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
      });
    },
  },
  validations() {
    return {
      first_nameEn: {
        required: helpers.withMessage(
          "ป้อนชื่อจริง(ภาษาอังกฤษ) ก่อน",
          required
        ),
      },
      last_nameEn: {
        required: helpers.withMessage("ป้อนนามสกุล(ภาษาอังกฤษ) ก่อน", required),
      },
      email: {
        required: helpers.withMessage("ป้อนอีเมลก่อน", required),
        email: helpers.withMessage("รูปแบบอีเมลที่ป้อนไม่ถูกต้อง", email),
      },
      phone: {
        required: helpers.withMessage("ป้อนเบอร์ติดต่อก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) =>
            `เบอร์ติดต่อตัวเลขต้องไม่น้อยกว่า ${$params.min} ตัว`,
          minLength(10)
        ),
      },
      address: {
        required: helpers.withMessage(
          "ป้อนที่อยู่ที่สามารถติดต่อได้ก่อน",
          required
        ),
      },
    };
  },

  mounted() {
    this.ShowProfile();
  },
};
</script>
