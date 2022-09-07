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
            ผลการเรียนรู้ PLO หลักสูตร
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Assessment of Learning Outcomes
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
                      "
                      v-on:click="toggleTabs(3)"
                      v-bind:class="{
                        'text-emerald-500 bg-white': openTab !== 3,
                        'text-white bg-emerald-500': openTab === 3,
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
                      v-on:click="toggleTabs(2)"
                      v-bind:class="{
                        'text-emerald-500 bg-white': openTab !== 2,
                        'text-white bg-emerald-500': openTab === 2,
                      }"
                    >
                      <i class="mr-1 text-base fas fa-bullseye"></i>
                      ปรัชญา
                      <router-view />
                    </a>
                  </router-link>
                </li>

                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                  <router-link to="/about/importance">
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
                      ความสำคัญ
                      <router-view />
                    </a>
                  </router-link>
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
                      v-on:click="toggleTabs(10)"
                      v-bind:class="{
                        'text-emerald-500 bg-white': openTab !== 10,
                        'text-white bg-emerald-500': openTab === 10,
                      }"
                    >
                      <i class="mr-1 text-base fas fa-bullseye"></i>
                      วัตถุประสงค์
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
                    <i class="mr-1 text-base fas fa-history"></i>
                    ผลการเรียนรู้ PLO หลักสูตร
                  </a>
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
                        วัตถุประสงค์สาขาวิชาวิทยาการคอมพิวเตอร์
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

                      <p class="my-6 rem2 font-semibold">
                        ผลลัพธ์การเรียนรู้ที่เฉพาะเจาะจง (Specific Learning
                        Outcomes: SLO)
                      </p>

                      <p class="my-6 px-4">
                        <b>PLO 1</b> : มีความรู้
                        ความสามารถทั้งภาคทฤษฎีและภาคปฏิบัติทางวิชาการและเป็นนักปฏิบัติที่เชี่ยวชาญทางด้านวิทยาการคอมพิวเตอร์
                      </p>
                      <p class="my-6 px-4">
                        <b>PLO 2</b> : มีทักษะในการแสวงหาความรู้โดยอิสระ
                        และนำไปประยุกต์ใช้งานทางด้านวิทยาการคอมพิวเตอร์
                        ได้อย่างถูกต้องและมีประสิทธิภาพ
                      </p>
                      <p class="my-6 px-4">
                        <b>PLO 3</b> :
                        มีทักษะที่สามารถนำไปใช้ในการประกอบอาชีพทั้งภาครัฐ เอกชน
                        และเป็นนักเทคโนโลยี ที่สามารถเป็นผู้ประกอบการในอนาคตได้
                      </p>
                      <p class="my-6 px-4">
                        <b>PLO 4</b> : มีความสามารถในเชิงสหวิทยาการทั้งการคิด
                        วิเคราะห์และแก้ไขปัญหาอย่างเป็นระบบ
                        เพื่อสร้างผลงานวิจัยและนวัตกรรมที่มีคุณภาพ
                        โดยมุ่งเน้นด้านการเกษตรหรือเทคโนโลยีในศตวรรษที่ 21
                        ทางด้านวิชาวิทยาการคอมพิวเตอร์ ผลลัพธ์การเรียนรู้ทั่วไป
                        (Generic Learning Outcomes) ของหลักสูตร
                      </p>
                      <p class="my-6 px-4">
                        <b>PLO 5</b> : มีความเป็นผู้นำ
                        กล้าคิดตัดสินใจโดยใช้เกณฑ์หรือมาตรฐาน
                        รู้จักบทบาทและหน้าที่ของตนเองในสังคม
                      </p>
                      <p class="my-6 px-4">
                        <b>PLO 6</b> : มีวินัย เคารพกฎเกณฑ์ขององค์กรและสังคม
                        มีสามารถในการใช้ภาษา
                        อีกทั้งสามารถบูรณาการความรู้ที่เพิ่มศักยภาพและขีดสมรรถนะของชุมชน
                      </p>
                      <p class="my-6 px-4">
                        <b>PLO 7</b> : มีคุณธรรม จริยธรรม ศีลธรรมในการครองชีพ
                        และมีจรรยาบรรณในวิชาชีพ
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
  },
  mounted() {
    this.changeId();
  },
};
</script>