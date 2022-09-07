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
                      ประวัติโดยย่อ
                    </h3>

                    <h3 class="text-xl font-normal ">
                      | Curiculum Vitae
                    </h3>
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
                      <form ref="addProductForm">
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ตำแหน่ง</label
                            >
                            <input
                              v-model="position"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Position"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ชื่อ</label
                            >
                            <input
                              v-model="first_name"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Firstname"
                            />
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3  text-gray-700 text-md"
                              for="Title"
                              >นามสกุล</label
                            >
                            <input
                              v-model="last_name"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border"
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
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Firstname"
                            />
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
                              placeholder="Lastname"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 mb-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ที่อยู่ / สถานที่ติดต่อ</label
                            >
                            <input
                              v-model="address"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Address"
                            />
                          </div>
                          <div class="w-full px-2 mb-4 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >โทรศัพท์</label
                            >
                            <input
                              v-model="phone"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Phone Number"
                            />
                          </div>
                          <div class="w-full px-2 mb-4 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >อีเมล</label
                            >
                            <input
                              v-model="email"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="email"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ประวัติโดยย่อ</label
                            >
                            <textarea
                              v-model="bio"
                              cols="30"
                              placeholder="Bio"
                              rows="5"
                              class="relative w-full px-3 py-1 border text-base bg-white outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                            ></textarea>
                          </div>
                        </div>
                        <label
                          class="block px-2 my-3 text-gray-700 text-md"
                          for="Title"
                          >การศึกษา
                        </label>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-2/12">
                            <select
                              v-model="year1"
                              id="date-dropdown1"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border"
                            >
                            </select>
                          </div>

                          <div class="w-full px-2 md:w-2/12">
                            <input
                              v-model="graduate1"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight  text-gray-700 border"
                              type="text"
                              placeholder="Graduate"
                            />
                          </div>
                          <div class="w-full px-2 md:w-8/12">
                            <input
                              v-model="institution1"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Institution"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-2/12">
                            <select
                              v-model="year2"
                              id="date-dropdown2"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border"
                            >
                            </select>
                          </div>

                          <div class="w-full px-2 md:w-2/12">
                            <input
                              v-model="graduate2"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight  text-gray-700 border"
                              type="text"
                              placeholder="Graduate"
                            />
                          </div>
                          <div class="w-full px-2 md:w-8/12">
                            <input
                              v-model="institution2"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Institution"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-2/12">
                            <select
                              v-model="year3"
                              id="date-dropdown3"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border"
                            >
                            </select>
                          </div>

                          <div class="w-full px-2 md:w-2/12">
                            <input
                              v-model="graduate3"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight  text-gray-700 border"
                              type="text"
                              placeholder="Graduate"
                            />
                          </div>
                          <div class="w-full px-2 md:w-8/12">
                            <input
                              v-model="institution3"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Institution"
                            />
                          </div>
                        </div>

                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ประสบการณ์การทำงาน</label
                            >
                            <div
                              v-for="(input, index) in experience_array"
                              :key="`expInput-${index}`"
                              class="flex text-center mt-2"
                            >
                              <div class="w-full md:w-8/12">
                                <input
                                  v-model="input.exp"
                                  class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                                  type="text"
                                  placeholder="Exeperience"
                                />
                              </div>
                              <div class="text-right md:w-4/12">
                                <button
                                  @click="addField_exp(input, experience_array)"
                                  class=" mr-2 px-6 py-3  text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                  type="button"
                                >
                                  เพิ่ม
                                </button>

                                <button
                                  v-show="experience_array.length > 1"
                                  @click="
                                    removeField_exp(index, experience_array)
                                  "
                                  class=" px-6 py-3   text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                  type="button"
                                >
                                  ลบ
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ทักษะ</label
                            >
                            <div
                              v-for="(input, index) in skill_array"
                              :key="`skillInput-${index}`"
                              class="flex text-center mt-2"
                            >
                              <div class="w-full md:w-8/12">
                                <input
                                  v-model="input.skill"
                                  class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                                  type="text"
                                  placeholder="Skills"
                                />
                              </div>
                              <div class="text-right md:w-4/12">
                                <button
                                  @click="addField_skill(input, skill_array)"
                                  class=" mr-2 px-6 py-3  text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                  type="button"
                                >
                                  เพิ่ม
                                </button>

                                <button
                                  v-show="skill_array.length > 1"
                                  @click="removeField_skill(index, skill_array)"
                                  class=" px-6 py-3   text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                  type="button"
                                >
                                  ลบ
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ความเชี่ยวชาญ</label
                            >
                            <div
                              v-for="(input, index) in expert_array"
                              :key="`expertInput-${index}`"
                              class="flex text-center mt-2"
                            >
                              <div class="w-full md:w-8/12">
                                <input
                                  v-model="input.expert"
                                  class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                                  type="text"
                                  placeholder="Expertise"
                                />
                              </div>
                              <div class="text-right md:w-4/12">
                                <button
                                  @click="addField_expert(input, expert_array)"
                                  class=" mr-2 px-6 py-3  text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                  type="button"
                                >
                                  เพิ่ม
                                </button>

                                <button
                                  v-show="expert_array.length > 1"
                                  @click="
                                    removeField_expert(index, expert_array)
                                  "
                                  class=" px-6 py-3   text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                  type="button"
                                >
                                  ลบ
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ผลงาน</label
                            >
                            <div
                              v-for="(input, index) in portfolio_array"
                              :key="`portInput-${index}`"
                              class="flex text-center mt-2"
                            >
                              <div class="w-full md:w-8/12">
                                <input
                                  v-model="input.port"
                                  class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                                  type="text"
                                  placeholder="Awards / Honors"
                                />
                              </div>
                              <div class="text-right md:w-4/12">
                                <button
                                  @click="addField_port(input, portfolio_array)"
                                  class=" mr-2 px-6 py-3  text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                  type="button"
                                >
                                  เพิ่ม
                                </button>

                                <button
                                  v-show="portfolio_array.length > 1"
                                  @click="
                                    removeField_port(index, portfolio_array)
                                  "
                                  class=" px-6 py-3   text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                  type="button"
                                >
                                  ลบ
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="py-6 text-center">
                          <button
                            @click="printCV"
                            class="px-6 py-3 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            นำออกเอกสาร
                          </button>
                        </div>
                      </form>
                    </div>
                    <!-- Simulator  -->
                    <div class="w-full lg:w-6/12">
                      <div class="p-4 bg-emerald-300 rounded-lg">
                        <div
                          id="GFG"
                          class="bg-white  border border-blueGray-300 shadow-lg "
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
                              <div class="ml-0 px-0 w-full lg:w-6/12 ">
                                <h1
                                  class="mt-4 font-normal text-xl text-blueGray-800"
                                >
                                  {{ this.position }} {{ this.first_name }}
                                  {{ this.last_name }}
                                </h1>
                                <h1
                                  class="mt-2 font-semibold text-lg text-blueGray-800"
                                >
                                  {{ this.titleEn }} {{ this.first_nameEn }}
                                  {{ this.last_nameEn }}
                                </h1>
                              </div>
                              <div
                                class="text-right mt-5 mr-2 w-full lg:w-4/12 border-l border-blueGray-300"
                              >
                                <div class="text-sm  text-blueGray-400">
                                  <span>{{ this.address }}&nbsp;</span>
                                  <i class="fas fa-home text-emerald-500"></i>
                                </div>
                                <div class="text-sm mt-2  text-blueGray-400">
                                  <span>{{ this.phone }}&nbsp;</span>
                                  <i
                                    class="fas fa-phone-alt text-emerald-500"
                                  ></i>
                                </div>
                                <div class="text-sm  mt-2 text-blueGray-400">
                                  <span>{{ this.email }}&nbsp;</span>
                                  <i
                                    class="fas fa-envelope text-emerald-500"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="bg-white px-4 pt-4 pb-6">
                            <div class=" flex flex-warp">
                              <div class="ml-3 px-4 w-full lg:w-12/12 ">
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i class="fas fa-user text-emerald-500"></i>
                                    ประวัติโดยย่อ / Biological
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm min-h-50-px leading-normal break-words text-blueGray-500"
                                  >
                                    {{ this.bio }}
                                  </p>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-user-graduate text-emerald-500"
                                    ></i>
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
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-briefcase text-emerald-500"
                                    ></i>
                                    ประสบการณ์การทำงาน / Experience
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <div
                                    v-for="exp_loop in experience_array"
                                    :key="exp_loop.exp"
                                  >
                                    <p
                                      class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                    >
                                      {{ exp_loop.exp }}
                                    </p>
                                  </div>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-tools text-emerald-500"
                                    ></i>
                                    ทักษะ / Skills
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <div
                                    v-for="skill_loop in skill_array"
                                    :key="skill_loop.skill"
                                  >
                                    <p
                                      class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                    >
                                      {{ skill_loop.skill }}
                                    </p>
                                  </div>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i class="fas fa-star text-emerald-500"></i>
                                    ความเชี่ยวชาญ / Expertise
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <div
                                    v-for="expert_loop in expert_array"
                                    :key="expert_loop.expert"
                                  >
                                    <p
                                      class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                    >
                                      {{ expert_loop.expert }}
                                    </p>
                                  </div>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-award text-emerald-500"
                                    ></i>
                                    ผลงาน / Portfolio
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <div
                                    v-for="port_loop in portfolio_array"
                                    :key="port_loop.port"
                                  >
                                    <p
                                      class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                    >
                                      • {{ port_loop.port }}
                                    </p>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import http from "@/services/WebpageService";
//import html2pdf from "html2pdf.js";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
export default {
  data() {
    return {
      cvId: 0,
      personnel_array: [],
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
    this.getCvData();
    this.getPersonnelData();
    this.dateDropdown1();
    this.dateDropdown2();
    this.dateDropdown3();
  },

  methods: {
    // test() {
    //   var divContents = document.getElementById("GFG").innerHTML;
    //   var a = window.open("", "", "height=620, width=437");

    //   a.document.write(divContents);

    //   // a.document.close();
    //   a.print();
    //   return true;
    // },

    dateDropdown1() {
      let dateDropdown = document.getElementById("date-dropdown1");

      let currentYear = new Date().getFullYear();
      let earliestYear = 1970;
      while (currentYear >= earliestYear) {
        let dateOption = document.createElement("option");
        dateOption.text = currentYear;
        dateOption.value = `• ${currentYear}`;
        dateDropdown.add(dateOption);
        currentYear -= 1;
      }
    },
    dateDropdown2() {
      let dateDropdown = document.getElementById("date-dropdown2");

      let currentYear = new Date().getFullYear();
      let earliestYear = 1970;
      while (currentYear >= earliestYear) {
        let dateOption = document.createElement("option");
        dateOption.text = currentYear;
        dateOption.value = `• ${currentYear}`;
        dateDropdown.add(dateOption);
        currentYear -= 1;
      }
    },
    dateDropdown3() {
      let dateDropdown = document.getElementById("date-dropdown3");

      let currentYear = new Date().getFullYear();
      let earliestYear = 1970;
      while (currentYear >= earliestYear) {
        let dateOption = document.createElement("option");
        dateOption.text = currentYear;
        dateOption.value = `• ${currentYear}`;
        dateDropdown.add(dateOption);
        currentYear -= 1;
      }
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
    getCvData() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));
      http
        .get(`cv/${local_user.card_id}`)
        .then((response) => {
          this.cv_array = response.data[0];
          this.cvId = this.cv_array.cvId;
          if(this.cv_array){
            http.delete(`cv/delete/${this.cvId}`).then(() => {});
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
                title: "Connection Error",
              });
            }
          }
        });
    },
    deleteData() {
      http.delete(`cv/delete/${this.cvId}`).then(() => {});
    },
    printCV() {
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
          title: "ยืนยันการนำออกเอกสาร",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            let local_user = JSON.parse(window.localStorage.getItem("user"));
            let skills = [];
            let exps = [];
            let ports = [];
            let expert = [];
            this.skill_array.forEach((element) => {
              skills.push(element.skill);
            });
            this.experience_array.forEach((element) => {
              exps.push(element.exp);
            });
            this.portfolio_array.forEach((element) => {
              ports.push(element.port);
            });
            this.expert_array.forEach((element) => {
              expert.push(element.expert);
            });

            let data = new FormData();
            data.append("Bio_Personnel", this.bio);
            data.append("Experience", exps);
            data.append("Skill", skills);
            data.append("Portfolio", ports);
            data.append("expertise", expert);
            data.append(
              "BachelorDegree",
              this.year1 + " " + this.graduate1 + " " + this.institution1
            );
            data.append(
              "MastersDegree",
              this.year2 + " " + this.graduate2 + " " + this.institution2
            );
            data.append(
              "DoctoralDegree",
              this.year3 + " " + this.graduate3 + " " + this.institution3
            );
            data.append("Bachelor Degree", null);
            data.append("citizenId", local_user.card_id);
            if (this.cv_array == null) {
              http.post("cv/create", data).then(() => {
                swalWithBootstrapButtons
                  .fire(
                    "นำออกเอกสารเรียบร้อย!",
                    "ระบบกำลังพิมพ์เอกสาร",
                    "success"
                  )
                  .then(() => {
                    let routeData = this.$router.resolve({
                      name: "CVPrint",
                    });
                    window.open(routeData.href, "_blank");
                  });
              });
            } else if (this.cv_array != null) {
              http.post(`cv/update/${this.cvId}`, data).then(() => {
                swalWithBootstrapButtons
                  .fire(
                    "นำออกเอกสารเรียบร้อย!",
                    "ระบบกำลังพิมพ์เอกสาร",
                    "success"
                  )
                  .then(() => {
                    let routeData = this.$router.resolve({
                      name: "CVPrint",
                    });
                    window.open(routeData.href, "_blank");
                  });
              });
            }
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "ยกเลิกเรียบร้อย!",
              "คุณได้ยกเลิกการนำออกเอกสาร",
              "error"
            );
          }
        });
    },
    addField_exp(object, fieldType) {
      let newObject = {};
      for (const [key] of Object.entries(object)) {
        newObject[key] = "";
      }
      fieldType.push(newObject);
    },
    removeField_exp(index, fieldType) {
      fieldType.splice(index, 1);
    },

    addField_skill(object, fieldType) {
      let newObject = {};
      for (const [key] of Object.entries(object)) {
        newObject[key] = "";
      }
      fieldType.push(newObject);
    },
    removeField_skill(index, fieldType) {
      fieldType.splice(index, 1);
    },

    addField_expert(object, fieldType) {
      let newObject = {};
      for (const [key] of Object.entries(object)) {
        newObject[key] = "";
      }
      fieldType.push(newObject);
    },
    removeField_expert(index, fieldType) {
      fieldType.splice(index, 1);
    },

    addField_port(object, fieldType) {
      let newObject = {};
      for (const [key] of Object.entries(object)) {
        newObject[key] = "";
      }
      fieldType.push(newObject);
    },
    removeField_port(index, fieldType) {
      fieldType.splice(index, 1);
    },
    back() {
      this.$router.push({ name: "ServiceTeacher" });
    },
  },
};
</script>
