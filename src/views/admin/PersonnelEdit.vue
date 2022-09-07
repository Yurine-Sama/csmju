<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="PersonnelShow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold border-b">
                CSMJU | แก้ไขข้อมูลบุคลากร
              </h1>
            </div>

            <br class="shadow-xl border-t" />

            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-8/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >รหัสประจำตัวประชาชน 13 หลัก</label
                  >
                  <input
                    v-model="citizenId"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    maxlength="13"
                    placeholder="Card ID 13 digit"
                  />
                  <div
                    v-if="v$.citizenId.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.citizenId.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-2/12">
                  <label class="block my-3 text-gray-700 text-md">เพศ</label>

                  <select
                    v-model="gender"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                  </select>
                  <div
                    v-if="v$.gender.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.gender.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-2/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >คำนำหน้า (ภาษาไทย)</label
                  >
                  <select
                    v-model="titleName"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="นาย">นาย</option>
                    <option value="นาง">นาง</option>
                    <option value="นางสาว">นางสาว</option>
                  </select>
                  <div
                    v-if="v$.titleName.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.titleName.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-5/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ชื่อ (ภาษาไทย)</label
                  >
                  <input
                    v-model="firstName"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Firstname (Thai)"
                  />
                  <div
                    v-if="v$.firstName.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.firstName.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-5/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >นามสกุล (ภาษาไทย)</label
                  >
                  <input
                    v-model="lastName"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Lastname (Thai)"
                  />
                  <div
                    v-if="v$.lastName.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.lastName.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-2/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >คำนำหน้า (อังกฤษ)</label
                  >
                  <select
                    v-model="titleNameEn"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss">Miss</option>
                  </select>
                  <div
                    v-if="v$.titleNameEn.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.titleNameEn.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-5/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ชื่อ (ภาษาอังกฤษ)</label
                  >
                  <input
                    v-model="fistNameEn"
                    class="capitalize w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Lastname (English)"
                  />
                  <div
                    v-if="v$.fistNameEn.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.fistNameEn.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-5/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >นามสกุล (ภาษาอังกฤษ)</label
                  >
                  <input
                    v-model="lastNameEn"
                    class="capitalize w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Lastname (English)"
                  />
                  <div
                    v-if="v$.lastNameEn.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.lastNameEn.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-8/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ตำแหน่งทางการบริหาร</label
                  >
                  <input
                    v-model="adminPosition"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Admin Position"
                  />
                  <div
                    v-if="v$.adminPosition.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.adminPosition.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ตำแหน่ง (คำนำหน้า)</label
                  >
                  <select
                    v-model="titlePosition"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value=null>-</option>
                    <option value="อาจารย์">อาจารย์</option>
                    <option value="อาจารย์ ดร.">อาจารย์ ดร.</option>
                    <option value="ผู้ช่วยศาสตราจารย์"
                      >ผู้ช่วยศาสตราจารย์</option
                    >
                    <option value="ผู้ช่วยศาสตราจารย์ ดร."
                      >ผู้ช่วยศาสตราจารย์ ดร.</option
                    >
                    <option value="รองศาสตราจารย์">รองศาสตราจารย์</option>
                    <option value="รองศาสตราจารย์ ดร."
                      >รองศาสตราจารย์ ดร.</option
                    >
                    <option value="ศาสตราจารย์">ศาสตราจารย์</option>
                    <option value="ศาสตราจารย์ ดร.">ศาสตราจารย์ ดร.</option>
                  </select>
                  <div
                    v-if="v$.titlePosition.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.titlePosition.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md">ประเภท</label>
                  <select
                    v-model="personnelType"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="ข้าราชการ">ข้าราชการ</option>
                    <option value="พนักงานมหาวิทยาลัย"
                      >พนักงานมหาวิทยาลัย</option
                    >
                  </select>
                  <div
                    v-if="v$.personnelType.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.personnelType.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >จำแนก (การแสดงผล)</label
                  >
                  <select
                    v-model="Type"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="teacher">Teacher</option>
                    <option value="staff">Staff</option>
                    <option value="hidden">Hide</option>
                  </select>
                  <div v-if="v$.Type.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.Type.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ตำแหน่งการปฏิบัติงาน</label
                  >
                  <select
                    v-model="position"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="เจ้าหน้าที่บริหารงานทั่วไป"
                      >เจ้าหน้าที่บริหารงานทั่วไป</option
                    >
                    <option value="นักวิชาการโสตทัศนศึกษา"
                      >นักวิชาการโสตทัศนศึกษา</option
                    >
                    <option value="นักวิชาการคอมพิวเตอร์"
                      >นักวิชาการคอมพิวเตอร์</option
                    >
                    <option value="อาจารย์">อาจารย์</option>
                    <option value="ผู้ช่วยศาสตราจารย์"
                      >ผู้ช่วยศาสตราจารย์</option
                    >
                    <option value="รองศาสตราจารย์">รองศาสตราจารย์</option>
                    <option value="ศาสตราจารย์">ศาสตราจารย์</option>
                  </select>
                  <div
                    v-if="v$.position.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.position.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ประเภทตำแหน่งการปฏิบัติงาน</label
                  >
                  <select
                    v-model="positionType"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="ประเภทวิชาการ">ประเภทวิชาการ</option>
                    <option value="ประเภทสนับสนุน">ประเภทสนับสนุน</option>
                  </select>
                  <div
                    v-if="v$.positionType.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.positionType.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >สังกัด (คณะ / มหาวิทยาลัย)</label
                  >
                  <input
                    v-model="faculty"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Faculty / University"
                  />
                  <div
                    v-if="v$.faculty.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.faculty.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-2/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >การศึกษาสูงสุด</label
                  >
                  <select
                    v-model="educationLevel"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="ตรี">ปริญญาตรี</option>
                    <option value="โท">ปริญญาโท</option>
                    <option value="เอก">ปริญญาเอก</option>
                  </select>
                  <div
                    v-if="v$.educationLevel.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.educationLevel.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-2/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >วุฒิการศึกษา (แบบย่อ)</label
                  >
                  <input
                    v-model="titleEducation"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Title of Education"
                  />
                  <div
                    v-if="v$.titleEducation.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.titleEducation.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-8/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >วุฒิการศึกษา (แบบเต็ม)</label
                  >
                  <input
                    v-model="education"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Education"
                  />
                  <div
                    v-if="v$.education.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.education.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >สาขา / ภาควิชา</label
                  >
                  <input
                    v-model="major"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Major / Division"
                  />
                  <div v-if="v$.major.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.major.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >มหาวิทยาลัย / สถาบัน</label
                  >
                  <input
                    v-model="university"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="University / Institution"
                  />
                  <div
                    v-if="v$.university.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.university.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4 mt-8 ">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >เบอร์ติดต่อ (ทางการ)</label
                  >
                  <input
                    v-model="phoneNumber"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    maxlength="13"
                    placeholder="Phone (Ex. 0887776666-01)"
                  />
                  <div
                    v-if="v$.phoneNumber.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.phoneNumber.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >อีเมล (ทางการ)</label
                  >
                  <input
                    v-model="e_mail"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Email"
                  />
                  <div
                    v-if="v$.e_mail.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.e_mail.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md">สถานะ</label>
                  <select
                    v-model="statusWork"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="ทำงานอยู่">ทำงานอยู่</option>
                    <option value="ถูกระงับ">ถูกระงับ</option>
                    <option value="ลาออก">ลาออก</option>
                    <option value="เลิกจ้าง">เลิกจ้าง</option>
                  </select>
                  <div
                    v-if="v$.statusWork.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.statusWork.$errors[0].$message }}
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <div class="mt-4">
                    <img
                      v-if="imgUrl"
                      :src="imgUrl"
                      class="w-48 h-200-px center-img cropped"
                    />
                  </div>

                  <label class="block my-3 text-gray-700 text-md"
                    >รูปโปรไฟล์</label
                  >
                  <input
                    ref="fileupload"
                    @change="onFileChange"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border-b "
                    type="file"
                  />
                </div>
              </div>
              <div class="py-6 text-center">
                <button
                  @click="submitFormEdit"
                  class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  บันทึกข้อมูล
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

      citizenId: "",
      titleName: "",
      titlePosition: "",
      firstName: "",
      lastName: "",
      titleNameEn: "",
      fistNameEn: "",
      lastNameEn: "",
      gender: "",
      personnelType: "",
      positionType: "",
      position: "",
      faculty: "",
      educationLevel: "",
      titleEducation: "",
      education: "",
      major: "",
      university: "",
      e_mail: "",
      personnelPhoto: "",
      statusWork: "",
      adminPosition: "",
      phoneNumber: "",
      Type: "",

      imgUrl: "",
      file: null,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = e.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    EditProduct() {
      this.id = this.$store.state.personnelEdit;
      http.get(`personnel/id/${this.id}`).then((response) => {
        this.citizenId = response.data.citizenId;
        this.titleName = response.data.titleName;
        this.titlePosition = response.data.titlePosition;
        this.firstName = response.data.firstName;
        this.lastName = response.data.lastName;
        this.titleNameEn = response.data.titleNameEn;
        this.fistNameEn = response.data.fistNameEn;
        this.lastNameEn = response.data.lastNameEn;
        this.gender = response.data.gender;
        this.personnelType = response.data.personnelType;
        this.positionType = response.data.positionType;
        this.position = response.data.position;
        this.faculty = response.data.faculty;
        this.educationLevel = response.data.educationLevel;
        this.titleEducation = response.data.titleEducation;
        this.education = response.data.education;
        this.major = response.data.major;
        this.university = response.data.university;
        this.e_mail = response.data.e_mail;
        this.imgUrl = response.data.personnelPhoto;
        this.statusWork = response.data.statusWork;
        this.adminPosition = response.data.adminPosition;
        this.phoneNumber = response.data.phoneNumber;
        this.Type = response.data.Type;
      });
    },

    submitFormEdit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let data = new FormData();
        data.append("citizenId", this.citizenId);
        data.append("titleName", this.titleName);
        data.append("titlePosition", this.titlePosition);
        data.append("firstName", this.firstName);
        data.append("lastName", this.lastName);
        data.append("titleNameEn", this.titleNameEn);
        data.append("fistNameEn", this.fistNameEn);
        data.append("lastNameEn", this.lastNameEn);
        data.append("gender", this.gender);
        data.append("personnelType", this.personnelType);
        data.append("positionType", this.positionType);
        data.append("position", this.position);
        data.append("faculty", this.faculty);
        data.append("educationLevel", this.educationLevel);
        data.append("titleEducation", this.titleEducation);
        data.append("education", this.education);
        data.append("major", this.major);
        data.append("university", this.university);
        data.append("e_mail", this.e_mail);
        data.append("personnelPhoto", this.file);
        data.append("statusWork", this.statusWork);
        data.append("adminPosition", this.adminPosition);
        data.append("phoneNumber", this.phoneNumber);
        data.append("Type", this.Type);
        data.append("portfolioResearch", null);
        data.append("_method", "PUT");
        http.post(`personnel/update/${this.id}`, data).then(() => {
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
            this.$router.push({ name: "PersonnelShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      citizenId: {
        required: helpers.withMessage("ป้อนรหัสประจำตัวประชาชนก่อน", required),
      },
      titleName: {
        required: helpers.withMessage("ป้อนคำนำหน้าชื่อภาษาไทยก่อน", required),
      },
      titlePosition: {
        required: helpers.withMessage("ป้อนคำนำหน้าตำแหน่งก่อน", required),
      },
      firstName: {
        required: helpers.withMessage("ป้อนชื่อภาษาไทยก่อน", required),
      },
      lastName: {
        required: helpers.withMessage("ป้อนนามสกุลภาษาไทยก่อน", required),
      },
      titleNameEn: {
        required: helpers.withMessage(
          "ป้อนคำนำหน้าชื่อภาษาอังกฤษก่อน",
          required
        ),
      },
      fistNameEn: {
        required: helpers.withMessage("ป้อนชื่อภาษาอังกฤษก่อน", required),
      },
      lastNameEn: {
        required: helpers.withMessage("ป้อนนามสกุลภาษาอังกฤษก่อน", required),
      },
      gender: {
        required: helpers.withMessage("เลือกเพศก่อน", required),
      },
      personnelType: {
        required: helpers.withMessage("เลือกประเภทก่อน", required),
      },
      positionType: {
        required: helpers.withMessage("เลือกประเภทตำแหน่งก่อน", required),
      },
      position: {
        required: helpers.withMessage("ป้อนตำแหน่งก่อน", required),
      },
      faculty: {
        required: helpers.withMessage("ป้อนสังกัดก่อน", required),
      },
      educationLevel: {
        required: helpers.withMessage("ป้อนการศึกษาสูงสุดก่อน", required),
      },
      titleEducation: {
        required: helpers.withMessage("ป้อนวุฒิการศึกษาแบบย่อก่อน", required),
      },
      education: {
        required: helpers.withMessage("ป้อนวุฒิการศึกษาแบบเต็มก่อน", required),
      },
      major: {
        required: helpers.withMessage("ป้อนสาขาก่อน", required),
      },
      university: {
        required: helpers.withMessage("ป้อนสถาบันก่อน", required),
      },
      e_mail: {
        required: helpers.withMessage("ป้อนอีเมลทางการก่อน", required),
      },
      statusWork: {
        required: helpers.withMessage("ป้อนสถานะก่อน", required),
      },
      phoneNumber: {
        required: helpers.withMessage("ป้อนเบอร์ติดต่อก่อน", required),
      },
      Type: {
        required: helpers.withMessage("เลือกการจำแนกก่อน", required),
      },
      adminPosition: {
        required: helpers.withMessage("ป้อนตำแหน่งการบริหารก่อน", required),
      },
    };
  },
  components: {},
  mounted() {
    this.EditProduct();
  },
};
</script>
