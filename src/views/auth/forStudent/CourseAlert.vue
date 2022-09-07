<template>
  <div class="">
    <main class="profile-page custom">
      <section class="relative pb-16 bg-blueGray-200">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12">
              <div class="px-6 mt-6">
                <div class="flex flex-wrap rounded-lg bg-blueGray-100">
                  <div class="w-full lg:w-3/12">
                    <div class="mr-4 text-center rounded-lg bg-emerald-500">
                      <h3 class="text-6xl font-semibold leading-normal text-white">
                        MIS
                      </h3>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12">
                    <h3 class="mt-1 text-2xl font-semibold">
                      ระบบแจ้งตกค้างรายวิชา
                    </h3>

                    <h3 class="text-xl font-normal">
                      | Course Residualisation System
                    </h3>
                  </div>
                  <div class="w-full lg:w-3/12">
                    <div class="mt-4 text-right">
                      <!-- <button
                        @click="ListMaintenance"
                        class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-emerald-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        รายการ
                      </button> -->

                      <button @click="back"
                        class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                        type="button">
                        ย้อนกลับ
                      </button>
                    </div>
                  </div>
                </div>

                <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 lg:order-2">
                      <div class="p-4">
                        <img :src="cover" class="shadow-none" alt="" />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 lg:order-1">
                      <form>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-12/12">
                            <label class="block my-3 text-gray-700 text-md">กลุ่มรายวิชาเฉพาะ
                            </label>
                            <select v-model="s_type" @keyup="getSubject"
                              class="w-full px-3 py-2 leading-tight text-gray-700 ">
                              <option value="1">กลุ่มรายวิชาภายในสาขา</option>
                              <option value="2">กลุ่มรายวิชาภายนอกสาขา</option>
                            </select>
                            <div v-if="v$.s_type.$error" class="mt-2 text-sm text-red-500">
                              {{ v$.s_type.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-8/12">
                            <label class="block my-3 text-gray-700 text-md">รหัสรายวิชา</label>
                            <input v-model="s_code" @keyup="getSubject"
                              class="w-full px-3 py-2 leading-tight text-gray-700" type="text" maxlength="8"
                              placeholder="Subject Code" />
                            <div v-if="v$.s_code.$error" class="mt-2 text-sm text-red-500">
                              {{ v$.s_code.$errors[0].$message }}
                            </div>
                          </div>
                          <div class="w-full px-4 md:w-4/12">
                            <label class="block my-3 text-gray-700 text-md">กลุ่มเรียน</label>
                            <input v-model="s_section" class="w-full px-3 py-2 leading-tight text-gray-700"
                              type="number" placeholder="Section" />
                            <div v-if="v$.s_section.$error" class="mt-2 text-sm text-red-500">
                              {{ v$.s_section.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-12/12">
                            <label class="block my-3 text-gray-700 text-md">ชื่อรายวิชา</label>
                            <input v-model="s_name" class="w-full px-3 py-2 leading-tight text-gray-700" type="text"
                              placeholder="Subject Name" />
                            <div v-if="v$.s_name.$error" class="mt-2 text-sm text-red-500">
                              {{ v$.s_name.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-12/12">
                            <label class="block my-3 text-gray-700 text-md" for="Dates">อาจารย์ผู้รับผิดชอบ</label>
                            <select v-if="showSelect" v-model="advisor" id="advisor"
                              class="w-full px-3 py-2 leading-tight text-gray-700"></select>
                            <input v-if="showInput" v-model="advisor"
                              class="w-full px-3 py-2 leading-tight text-gray-700" type="text"
                              placeholder="Subject Advisor" />

                            <div v-if="v$.advisor.$error" class="mt-2 text-sm text-red-500">
                              {{ v$.advisor.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md">เหตุผลในการยืนคำร้องแจ้งตก-ค้างรายวิชา</label>
                            <textarea v-model="s_detail" class="w-full px-3 py-2 leading-tight text-gray-700" rows="5"
                              placeholder="Explain your detail"></textarea>
                            <div v-if="v$.s_detail.$error" class="mt-2 text-sm text-red-500">
                              {{ v$.s_detail.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="py-6 text-center">
                          <button @click="clearForm"
                            class="px-6 py-3 mb-1 mr-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button">
                            ล้าง
                          </button>
                          <button @click="submit"
                            class="px-6 py-3 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button">
                            ยืนยัน
                          </button>
                        </div>
                      </form>
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
import cover from "@/assets/img/enroll_class.png";
import http from "@/services/WebpageService";
import useValidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),
      cover,
      s_type: [{ value: "" }],
      s_code: "",
      s_name: "",
      s_section: "",
      s_detail: "",
      subject_arr: [],
      advisor_array: [],

      advisor: "",
      profile: [],

      showSelect: true,
      showInput: false,

      studentID: "",
      fromCheck: null,
    };
  },
  methods: {
    getSubject() {
      if (this.s_type == "1") {
        this.showSelect = true;
        this.showInput = false;
        http.get(`subject/code/${this.s_code}`).then((response) => {
          this.subject_arr = response.data[0];
          if (this.s_code == "") {
            this.s_name = "";
            this.advisor = "";
          } else {
            this.s_name =
              this.subject_arr.Subject_NameTh +
              ` (${this.subject_arr.Subject_NameEn})`;
          }
        });
      } else if (this.s_type == "2") {
        this.showSelect = false;
        this.showInput = true;
      }
    },
    Personnal() {
      let dateDropdown = document.getElementById("advisor");
      http.get(`personnel/teacher`).then((response) => {
        this.advisor_array = response.data;
        for (let i = 0; i <= this.advisor_array.length; i++) {
          let dateOption = document.createElement("option");
          dateOption.text = `${this.advisor_array[i].titlePosition} ${this.advisor_array[i].firstName} ${this.advisor_array[i].lastName} `;
          dateOption.value = `${this.advisor_array[i].titlePosition} ${this.advisor_array[i].firstName} ${this.advisor_array[i].lastName} `;
          dateDropdown.add(dateOption);
          this.advisor_array[i].Classroom_Name -= 1;
        }
      });
    },
    listMenu() {
      this.$router.push({ name: "CourseAlertList" });
    },
    clearForm() {
      this.s_type = "";
      this.s_code = "";
      this.s_name = "";
      this.s_section = "";
      this.s_detail = "";
      this.advisor = "";
    },
    getProfile() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));
      let email_cut = local_user.email;
      this.studentID = email_cut.slice(3, 13);
      http.get(`student/${this.studentID}`).then((response) => {
        this.profile = response.data.data[0];
        this.fromCheck = response.data.from;

        if (this.fromCheck != 1) {
          const Swal = this.$swal.mixin({
            position: "center",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
          });
          Swal.fire({
            icon: "warning",
            title: `กรุณากรอกข้อมูลส่วนตัวของท่านก่อนใช้งานระบบ`,
          });
          this.$router.push({ name: "ProfileStudent" });
        }
      });
    },
    back() {
      this.$router.push({ name: "ServiceStudent" });
    },
    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const swalWithBootstrapButtons = this.$swal.mixin({
          customClass: {
            title: "font-weight-bold",
            confirmButton:
              "px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
            cancelButton:
              "px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          },
          buttonsStyling: false,
        });
        swalWithBootstrapButtons
          .fire({
            title: "ตรวจสอบข้อมูลการแจ้งตก-ค้างรายวิชา",
            html:
              ` <p class="custom text-left font-normal text-sm"> <b>รหัสรายวิชา :</b> ${this.s_code} <b>กลุ่มเรียน :</b>  ${this.s_section}</p>` +
              ` <p class="custom text-left font-normal text-sm"> <b>ห้องเรียน :</b> ${this.s_name}</p>` +
              ` <p class="custom text-left font-normal text-sm">  <b>อาจารย์ผู้รับผิดชอบ :</b> ${this.advisor} </p>` +
              ` <p class="custom text-left font-normal text-sm"> <b>รายละเอียด :</b> ${this.s_detail}</p>`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              let mes = `${this.s_detail} \nรหัสวิชา : ${this.s_code} อาจารย์ผู้รับผิดชอบ : ${this.advisor}`;
              let data = new FormData();
              data.append("Residaual_Detail", mes);
              data.append("nameTh", this.profile.nameTh);
              data.append("surnameTh", this.profile.surnameTh);
              data.append("EmailStudent", this.profile.EmailStudent);
              data.append("mobile", this.profile.mobile);
              data.append("studentCode", this.studentID);
              data.append("Subject60", this.s_code + " " + this.s_name);
              let sec = "-";
              if (this.s_type == "1") {
                data.append("Sec_Internal", this.s_section);
                data.append("Sec_Another", sec);
                data.append("Subject_Internal", `${this.s_name} (${this.s_code}) อาจารย์ผู้รับผิดชอบ : ${this.advisor}`);
                data.append("Subject_External", sec);
              } else if (this.s_type == "2") {
                data.append("Sec_Internal", sec);
                data.append("Sec_Another", this.s_section);
                data.append("Subject_Internal", sec);
                data.append("Subject_External", `${this.s_name} (${this.s_code}) อาจารย์ผู้รับผิดชอบ : ${this.advisor}`);
              }
              http
                .post(`residaual/create`, data)
                .then(() => {
                  swalWithBootstrapButtons
                    .fire(
                      "บันทึกเรียบร้อย!",
                      "ดำเนินการแจ้งตก-ค้างรายวิชาเรียบร้อย",
                      "success"
                    )
                    .then(() => {
                      this.$router.push({ name: "ServiceStudent" });
                    });
                })
                .catch((error) => {
                  if (error) {
                    //Call Sweet Alert
                    swalWithBootstrapButtons.fire(
                      "ข้อมูลไม่ถูกต้อง!",
                      "กรุณาตรวจสอบข้อมูลอีกครั้ง",
                      "error"
                    );
                  }
                });
            } else if (result.dismiss === this.$swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                "ยกเลิกเรียบร้อย!",
                "คุณได้ยกเลิกการแจ้งตก-ค้างรายวิชา",
                "error"
              );
            }
          });
      }
    },
  },
  mounted() {
    this.Personnal();
    this.getProfile();
  },
  validations() {
    return {
      s_code: {
        required: helpers.withMessage("ป้อนรหัสรายวิชาก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) => `รหัสรายวิชาต้องไม่น้อยกว่า ${$params.min} ตัว`,
          minLength(5)
        ),
      },
      s_section: {
        required: helpers.withMessage("ป้อนกลุ่มเรียนก่อน", required),
      },
      s_type: {
        required: helpers.withMessage("เลือกกลุ่มรายวิชาก่อน", required),
      },
      s_name: {
        required: helpers.withMessage("ป้อนชื่อรายวิชาก่อน", required),
      },
      advisor: {
        required: helpers.withMessage("ป้อนอาจารย์ผู้รับผิดชอบก่อน", required),
      },
      s_detail: {
        required: helpers.withMessage("ป้อนเหตุผลการยื่นคำร้องก่อน", required),
      },
    };
  },
};
</script>
