<template>
  <div class="">
    <main class="profile-page custom">
      <section class="relative pb-16 bg-blueGray-200 rounded-lg">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
            >
              <div class="px-6 mt-6">
                <div class="flex flex-wrap rounded-lg">
                  <div class="w-full lg:w-3/12">
                    <div class="mr-4 text-center rounded-lg bg-emerald-500">
                      <h3
                        class="text-6xl font-semibold leading-normal text-white"
                      >
                        Password
                      </h3>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12">
                    <h3 class="mt-1 text-2xl font-semibold">
                      แก้ไขรหัสผ่านผู้ใช้งาน
                    </h3>

                    <h3 class="text-xl font-normal">| Change your password</h3>
                  </div>
                  <div class="w-full lg:w-3/12">
                    <div class="mt-4 text-right">
                      <router-link to="Dashboard">
                        <i
                          class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                        ></i>
                      </router-link>
                    </div>
                  </div>
                </div>

                <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                  <div class="flex flex-wrap">
                    <!-- from input -->
                    <div class="w-full lg:w-6/12 pr-4">
                      <div class="p-8">
                        <img :src="cover" class="shadow-none w-full" alt="" />
                      </div>
                    </div>
                    <!-- Simulator  -->
                    <div class="w-full mt-2 lg:w-6/12">
                      <div class="border-l pr-2 pl-4">
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >รหัสผ่านเดิม</label
                            >
                            <input
                              v-model="old_password"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="password"
                              placeholder="Old password"
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
                              class="block my-3 mb-4 text-blueGray-500 text-md border-b font-semibold"
                              for="Title"
                              >รหัสผ่านที่ต้องการเปลี่ยน (Change your new
                              password)</label
                            >
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >รหัสผ่านใหม่</label
                            >
                            <input
                              v-model="password_1"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="password"
                              placeholder="New password"
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
                              >ยืนยันรหัสผ่าน</label
                            >
                            <input
                              v-model="password_2"
                              class="w-full px-3  placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="password"
                              placeholder="Confirm password"
                            />
                            <!-- <div
                              v-if="v$.first_nameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.first_nameEn.$errors[0].$message }}
                            </div> -->
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
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
//import http from "@/services/APIService";
//import useValidate from "@vuelidate/core";
import cover from "@/assets/img/password.svg";
//import { required, email, minLength, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      cover,
      //v$: useValidate(),
    };
  },
  methods: {
    home() {
      this.$router.push({ name: "ServiceTeacher" });
    },
    profile() {
      this.$router.push({ name: "Profile" });
    },
  },
  mounted() {},
};
</script>
