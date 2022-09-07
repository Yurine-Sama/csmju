<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="bookingshow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold ">แก้ไขข้อมูลจองห้องเรียน</h1>
            </div>

            <br class="shadow-xl" />
            <form
              ref="addProductForm"
              @submit.prevent="onSubmit"
              enctype="multipart/form-data"
            >
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >วันที่ประกาศกิจกรรม</label
                  >
                  <div class="flex w-full mt-2">
                    <v-date-picker v-model="Book_Date">
                      <template #default="{ inputValue, inputEvents }">
                        <input
                          class="px-3 py-1 border border-gray-500 text-gray-700 text-md focus:outline-none focus:border-blue-500"
                          :value="inputValue"
                          v-on="inputEvents"
                        />
                      </template>
                    </v-date-picker>
                  </div>
                  <div
                    v-if="v$.Book_Date.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Book_Date.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md">สถานะ</label>
                  <select
                    v-model="Status_Book"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="รอการอนุมัติ">รอการอนุมัติ</option>
                    <option value="อนุมัติแล้ว">อนุมัติแล้ว</option>
                    <option value="ไม่อนุมัติ">ไม่อนุมัติ</option>
                  </select>
                  <div
                    v-if="v$.Status_Book.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Status_Book.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ชื่อ (ผู้จอง)</label
                  >
                  <input
                    v-model="FirstName"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Firstname"
                  />
                  <div
                    v-if="v$.FirstName.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.FirstName.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >นามสกุล</label
                  >
                  <input
                    v-model="LastName"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Lastname"
                  />
                  <div
                    v-if="v$.LastName.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.LastName.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >รหัสนักศึกษา</label
                  >
                  <input
                    v-model="StudentCode"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Student Code"
                  />
                  <div
                    v-if="v$.StudentCode.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.StudentCode.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md">อีเมล</label>
                  <input
                    v-model="Email"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Email Address"
                  />
                  <div v-if="v$.Email.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.Email.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ห้องเรียน</label
                  >
                  <select
                    v-model="Classroom_Name"
                    id="classroom"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                  </select>
                  <div
                    v-if="v$.Classroom_Name.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Classroom_Name.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >รายละเอียดการจอง</label
                  >
                  <textarea
                    v-model="Book_Detail"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Description"
                  ></textarea>
                  <div
                    v-if="v$.Book_Detail.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Book_Detail.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >อาจารย์ผู้รับผิดชอบ</label
                  >
                  <select
                    v-model="advisor"
                    id="advisor"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                  >
                  </select>
                  <div
                    v-if="v$.advisor.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.advisor.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="py-6 text-center">
                <button
                  @click="onResetForm"
                  class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                  type="button"
                >
                  ล้าง
                </button>
                <button
                  @click="submitForm"
                  class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
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
</template>
<script>
import http from "@/services/APIService";
import useValidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),

      id: 0,

      Classroom_Name: "",
      Book_TimeStart: "-",
      Book_TimeEnd: "-",
      Book_Date: "",
      old_Dates: "",
      Status_Book: "",
      Book_Detail: "",
      FirstName: "",
      LastName: "",
      StudentCode: "",
      Email: "",
      advisor: "",

      room_array: [],
      advisor_array: [],
    };
  },
  methods: {
    Classroom() {
      let dateDropdown = document.getElementById("classroom");
      http.get(`classroom`).then((response) => {
        this.room_array = response.data;
        for (let i = 0; i <= this.room_array.length; i++) {
          let dateOption = document.createElement("option");
          dateOption.text = `${this.room_array[i].Classroom_Name} - จำนวน ${this.room_array[i].Classroom_sit} คน`;
          dateOption.value = this.room_array[i].Classroom_Name;
          dateDropdown.add(dateOption);
          this.room_array[i].Classroom_Name -= 1;
        }
      });
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
    onResetForm() {
      this.$refs.addProductForm.reset();
      (this.Classroom_Name = ""),
        (this.Book_TimeStart = ""),
        (this.Book_TimeEnd = ""),
        (this.Book_Date = ""),
        (this.Status_Book = ""),
        (this.Book_Detail = ""),
        (this.FirstName = ""),
        (this.LastName = ""),
        (this.StudentCode = ""),
        (this.Email = ""),
        (this.advisor = "");
    },
    async getProducts() {
      this.id = this.$store.state.bookingEdit;
      http.get(`bookclassroom/id/${this.id}`).then((response) => {
        this.Classroom_Name = response.data.Classroom_Name;
        this.Book_TimeStart = response.data.Book_TimeStart;
        this.Book_TimeEnd = response.data.Book_TimeEnd;
        this.Book_Date = response.data.Book_Date;
        this.old_Dates = response.data.Book_Date;
        this.Status_Book = response.data.Status_Book;
        this.Book_Detail = response.data.Book_Detail;
        this.FirstName = response.data.FirstName;
        this.LastName = response.data.LastName;
        this.StudentCode = response.data.StudentCode;
        this.Email = response.data.Email;
        this.advisor = response.data.Advisor;
      });
    },
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        if (this.Book_Date != this.old_Dates) {
          this.Book_Date = this.Book_Date.toISOString().slice(0, 10);
        }
        let data = new FormData();
        data.append("Classroom_Name", this.Classroom_Name);
        data.append("Book_TimeStart", this.Book_TimeStart);
        data.append("Book_TimeEnd", this.Book_TimeEnd);
        data.append("Book_Date", this.Book_Date);
        data.append("Status_Book", this.Status_Book);
        data.append("Book_Detail", this.Book_Detail);
        data.append("FirstName", this.FirstName);
        data.append("LastName", this.LastName);
        data.append("StudentCode", this.StudentCode);
        data.append("Email", this.Email);
        data.append("Advisor", this.advisor);
        data.append("_method", "PUT");
        //Post in Web
        http.post(`bookclassroom/update/${this.id}`, data).then(() => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: "แก้ไขข้อมูลเรียบร้อย",
          }).then(() => {
            this.$router.push({ name: "BookingShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      Classroom_Name: {
        required: helpers.withMessage(
          "ป้อนชื่อห้องเรียนที่ต้องจองก่อน",
          required
        ),
      },
      Book_Date: {
        required: helpers.withMessage("ป้อนวันที่ต้องการจองก่อน", required),
      },
      Status_Book: {
        required: helpers.withMessage("ป้อนสถานะการจองก่อน", required),
      },
      Book_Detail: {
        required: helpers.withMessage("ป้อนรายละเอียดการจองก่อน", required),
      },
      FirstName: {
        required: helpers.withMessage("ป้อนชื่อจริงผู้จองก่อน", required),
      },
      LastName: {
        required: helpers.withMessage("ป้อนนามสกุลผู้จองก่อน", required),
      },
      StudentCode: {
        required: helpers.withMessage(
          "ป้อนรหัสนักศึกษาที่ต้องการจองก่อน",
          required
        ),
      },
      Email: {
        required: helpers.withMessage("ป้อนอีเมลผู้จองก่อน", required),
      },
      advisor: {
        required: helpers.withMessage(
          "ป้อนชื่ออาจารย์ผู้รับผิดชอบก่อน",
          required
        ),
      },
    };
  },
  components: {},
  mounted() {
    this.Classroom();
    this.Personnal();
    this.getProducts();
  },
};
</script>
