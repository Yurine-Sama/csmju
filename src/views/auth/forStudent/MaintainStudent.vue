<template>
  <div class="">
    <main class="profile-page custom">
      <section class="relative pb-16 bg-blueGray-200">
        <div class="container mx-auto">
          <div class="flex flex-wrap ">
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
                        MIS
                      </h3>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12">
                    <h3 class="mt-1 text-2xl font-semibold ">
                      ระบบแจ้งซ่อมอุปกรณ์ / บำรุงรักษา
                    </h3>

                    <h3 class="text-xl font-normal ">
                      | Maintenance System
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
                      <a href="javascript:history.go(-1)">
                        <button
                          class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          ย้อนกลับ
                        </button>
                      </a>
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
                      <form ref="addProductForm">
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-12/12">
                            <label class="block my-3 text-gray-700 text-md"
                              >รหัสครุภัณฑ์
                              <i class="text-red-500 text-sm"
                                >*หมายเหตุ : ไม่จำเป็นต้องกรอก วท. xxxx</i
                              ></label
                            >

                            <input
                              v-model="equip_id"
                              @keyup="getEquipmentInfo"
                              class="w-full px-3 py-2 leading-tight text-gray-700"
                              type="serach"
                              placeholder="Equipment Code"
                            />

                            <div
                              v-if="v$.equip_id.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.equip_id.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-6/12">
                            <label class="block my-3 text-gray-700 text-md"
                              >ชื่ออุปกรณ์</label
                            >
                            <input
                              v-model="equip_name"
                              class="w-full px-3 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Equipment Name"
                            />
                            <div
                              v-if="v$.equip_name.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.equip_name.$errors[0].$message }}
                            </div>
                          </div>
                          <div class="w-full px-4 md:w-6/12">
                            <label class="block my-3 text-gray-700 text-md"
                              >ห้องเก็บอุปกรณ์ / ที่อยู่อุปกรณ์</label
                            >
                            <input
                              v-model="equip_where"
                              class="w-full px-3 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Equipment Location"
                            />
                            <div
                              v-if="v$.equip_where.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.equip_where.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-12/12">
                            <label class="block my-3 text-gray-700 text-md"
                              >รายละเอียด / ความเสียหาย</label
                            >
                            <textarea
                              v-model="equip_detail"
                              class="w-full px-3 py-2 leading-tight text-gray-700"
                              rows="5"
                              placeholder="Equipment broken detail"
                            ></textarea>
                            <div
                              v-if="v$.equip_detail.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.equip_detail.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-12/12">
                            <div class="mt-4">
                              <img
                                v-if="imgUrl"
                                :src="imgUrl"
                                class="w-full cropped-card1 rounded-lg shadow-lg"
                              />
                            </div>

                            <label
                              class="block my-3 text-gray-700 text-md mt-4"
                              for="image"
                              >อัพโหลดรูปภาพ (ถ้ามี)</label
                            >
                            <input
                              ref="fileupload"
                              @change="onFileSelected"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border-b"
                              type="file"
                            />
                          </div>
                        </div>
                        <div class="py-6 text-center">
                          <button
                            @click="clearForm"
                            class="px-6 py-3 mb-1 mr-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            ล้าง
                          </button>
                          <button
                            @click="submit"
                            class="px-6 py-3 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
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
import cover from "@/assets/img/repair.png";
import http from "@/services/WebpageService";
import useValidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),
      cover,
      equip_id: "",
      equip_name: "",
      equip_where: "",
      equip_detail: "",
      equip_price: null,

      equip_arr_code: [],

      studentID: "",
      profile: "",
      fromCheck: null,

      imgUrl: "",
      file: null,
    };
  },
  methods: {
    onFileSelected(event) {
      const file = event.target.files[0];
      this.file = event.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    listMenu() {
      this.$router.push({ name: "MaintainList" });
    },
    back() {
      this.$router.push({ name: "ServiceStudent" });
    },
    getEquipmentInfo() {
      http.get(`equipments/code/${this.equip_id}`).then((response) => {
        this.equip_arr_code = response.data.data[0];
        this.equip_name = `${this.equip_arr_code.Equipment_Brand} | ${this.equip_arr_code.Equipment_Name}`;
        this.equip_where = this.equip_arr_code.Equipment_Room;
        this.equip_price = this.equip_arr_code.Equipment_Price;
      });
    },
    clearForm() {
      this.equip_id = "";
      this.equip_name = "";
      this.equip_where = "";
      this.equip_detail = "";
      this.equip_arr_code = [];
      this.imgUrl = "";
      this.file = null;
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
            title: "ตรวจสอบข้อมูลการแจ้งซ่อมอุปกรณ์",
            html:
              ` <p class="custom text-left font-normal text-sm"> <b>รหัส :</b> ${this.equip_id}</p>` +
              ` <p class="custom text-left font-normal text-sm"> <b>ชื่อ :</b> ${this.equip_name}</p>` +
              ` <p class="custom text-left font-normal text-sm">  <b>รายละเอียด :</b> ${this.equip_detail} </p>`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              let today =
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
              let data = new FormData();
              data.append("equipmentId", this.equip_id);
              data.append("Repair_Date", today);
              data.append("Repair_Time", time);
              data.append(
                "Repair_Detail",
                this.equip_name +
                  " " +
                  this.equip_where +
                  " " +
                  this.equip_detail
              );
              data.append("Repair_Expenses", this.equip_price);
              data.append("personnelId", "-");
              data.append("studentId", this.studentID);
              http
                .post(`repair/create`, data)
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
    this.getEquipmentInfo();
    this.getProfile();
  },
  validations() {
    return {
      equip_id: {
        required: helpers.withMessage(
          "ป้อนรหัสอุปกรณ์ / รหัสครุภัณฑ์ก่อน",
          required
        ),
        minLength: helpers.withMessage(
          ({ $params }) => `รหัสต้องไม่น้อยกว่า ${$params.min} ตัว`,
          minLength(11)
        ),
      },
      equip_name: {
        required: helpers.withMessage(
          "ป้อนชื่ออุปกรณ์ / รหัสครุภัณฑ์ก่อน",
          required
        ),
      },
      equip_where: {
        required: helpers.withMessage(
          "ป้อนที่อยู่ของอุปกรณ์ / รหัสครุภัณฑ์ก่อน",
          required
        ),
      },
      equip_detail: {
        required: helpers.withMessage(
          "ป้อนรายละเอียดความเสียหายก่อน",
          required
        ),
      },
    };
  },
};
</script>
