<template>
  <div class="container px-4 mx-auto">
    <div
      class="
        relative
        flex flex-col
        w-full
        min-w-0
        mb-6
        -mt-64
        break-words
        bg-white
        rounded-lg
        shadow-xl
      "
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            ความสำคัญ
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Importance
          </p>
        </div>

        <div class="py-6 mt-10 border-t border-blueGray-200">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 lg:w-12/12">
              <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                  <router-link to="/about">
                    <a
                      class="
                        block
                        px-5
                        py-3
                        font-bold
                        leading-normal
                        uppercase
                        rounded
                        shadow-lg
                        cursor-pointer
                      "
                      v-on:click="toggleTabs(2)"
                      v-bind:class="{
                        'text-emerald-500 bg-white': openTab !== 2,
                        'text-white bg-emerald-500': openTab === 2,
                      }"
                    >
                      <i class="mr-1 text-base fas fa-history"></i>

                      ประวัติความเป็นมา

                      <router-view />
                    </a>
                  </router-link>
                </li>
                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                  <router-link to="/about/philosophy">
                    <a
                      class="
                        block
                        px-5
                        py-3
                        font-bold
                        leading-normal
                        uppercase
                        rounded
                        shadow-lg
                      "
                      v-on:click="toggleTabs(3)"
                      v-bind:class="{
                        'text-emerald-500 bg-white': openTab !== 3,
                        'text-white bg-emerald-500': openTab === 3,
                      }"
                    >
                      <i class="mr-1 text-base fas fa-bullseye"></i>
                      ปรัชญา
                      <router-view />
                    </a>
                  </router-link>
                </li>

                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                  <a
                    class="
                      block
                      px-5
                      py-3
                      font-bold
                      leading-normal
                      uppercase
                      rounded
                      shadow-lg
                    "
                    v-on:click="toggleTabs(1)"
                    v-bind:class="{
                      'text-emerald-500 bg-white': openTab !== 1,
                      'text-white bg-emerald-500': openTab === 1,
                    }"
                  >
                    <i class="mr-1 text-base fas fa-bullseye"></i>
                    ความสำคัญ
                  </a>
                </li>

                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                  <router-link to="/about/objectivity">
                    <a
                      class="
                        block
                        px-5
                        py-3
                        font-bold
                        leading-normal
                        uppercase
                        rounded
                        shadow-lg
                      "
                      v-on:click="toggleTabs(4)"
                      v-bind:class="{
                        'text-emerald-500 bg-white': openTab !== 4,
                        'text-white bg-emerald-500': openTab === 4,
                      }"
                    >
                      <i class="mr-1 text-base fas fa-bullseye"></i>

                      วัตถุประสงค์
                      <router-view />
                    </a>
                  </router-link>
                </li>
                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                  <router-link to="/about/plo">
                    <a
                      class="
                        block
                        px-5
                        py-3
                        font-bold
                        leading-normal
                        uppercase
                        rounded
                        shadow-lg
                      "
                      v-on:click="toggleTabs(10)"
                      v-bind:class="{
                        'text-emerald-500 bg-white': openTab !== 10,
                        'text-white bg-emerald-500': openTab === 10,
                      }"
                    >
                      <i class="mr-1 text-base fas fa-history"></i>
                      ผลการเรียนรู้ PLO หลักสูตร
                      <router-view />
                    </a>
                  </router-link>
                </li>
              </ul>

              <div class="relative flex flex-col w-full">
                <div class="flex-auto px-0 py-5">
                  <div
                    class="text-justify tab-content tab-space text-blueGray-700"
                  >
                    <div
                      class="cssanimation sequence fadeInBottom"
                      v-bind:class="{
                        hidden: openTab !== 1,
                        block: openTab === 1,
                      }"
                    >
                      <p
                        class="
                          mt-8
                          text-2xl
                          font-bold
                          leading-relaxed
                          text-center
                        "
                      >
                        ความสำคัญสาขาวิชาวิทยาการคอมพิวเตอร์
                      </p>
                      <p
                        class="
                          mb-8
                          text-xl
                          font-bold
                          leading-relaxed
                          text-center
                        "
                      >
                        คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                      </p>

                      <p class="my-6 rem2">
                        หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์
                        ได้พัฒนาขึ้นเพื่อยกระดับกำลังคนให้เพิ่มขีดความสามารถด้านวิชาการและวิชาชีพในกลุ่มอุตสาหกรรมดิจิทัล
                        ตอบสนองการเรียนรู้ในศตวรรษที่ 21
                        และกระแสการเปลี่ยนแปลงทางด้านเทคโนโลยีสารสนเทศ
                        ซึ่งเป็นไปตามทิศทางการพัฒนาทางด้านเศรษฐกิจและสังคม
                        โดยสร้างความเชี่ยวชาญและทักษะที่หลากหลายได้แก่
                        การพัฒนาระบบอย่างเต็มรูปแบบ (Full Stack Developer)
                        วิทยาศาสตร์ข้อมูล (Data Scientist)
                        การพัฒนาด้านปัญญาประดิษฐ์ (Artificial Intelligence
                        Engineer) และการบริหารจัดการดูแลระบบเครือข่ายคอมพิวเตอร์
                        (System Administrator)
                        อีกทั้งยังสามารถบูรณาการองค์ความรู้โดยเฉพาะอย่างยิ่งทางการเกษตร
                        และวิทยาศาสตร์ประยุกต์
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
</template>

<script>
export default {
  data() {
    return {
      about_arr: [],
      openTab: 0,
      obj: [],
    };
  },
  components: {},
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    changeId() {
      this.openTab = this.$store.state.aboutid;
    },
    objectivityMenu() {
      this.$router.push({ name: "objectivity" });
    },
  },
  mounted() {
    this.changeId();
  },
};
</script>