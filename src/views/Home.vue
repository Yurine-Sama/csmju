<template>
  <div>
    <main-navbar />
    <main>
      <div
        class="relative flex items-center content-center justify-center pt-16 pb-32 custom min-h-screen-75"
      >
        <div class="top-0 w-full h-full bg-center bg-cover">
          <img
            alt="..."
            :src="bg_home"
            class="relative mx-0 shadow-lg cropped center-img"
          />
        </div>

        <div class="container absolute">
          <div class="flex flex-wrap -mt-20">
            <div class="w-full px-4 mt-32 text-left lg:w-6/12">
              <div class="pr-12 flex-wrap">
                <h1
                  class="cssanimation sequence fadeInBottom text-home font-semibold text-white"
                >
                  วิทยาการคอมพิวเตอร์
                </h1>
                <h2
                  class="cssanimation sequence fadeInBottom mt-0 text-4xl text-blueGray-200"
                >
                  คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                </h2>
              </div>
              <div class="my-6 rectangle" id="section1"></div>
              <div class="flex flex-wrap">
                <div
                  class="mt-2 mr-2 text-lg text-blueGray-200 item-center duration-150 ease-linear hover:text-emerald-600 hover:zoom-xs"
                >
                  <i class="px-2 far fa-play-circle fa-lg"></i>
                  <a href="#section2">รับชมวีดีโอแนะนำ</a>
                </div>
                <div class="border-l-2 mx-4"></div>
                <div
                  class="text-lg mt-2 text-blueGray-200 item-center duration-150 ease-linear hover:text-emerald-600 hover:zoom-xs"
                >
                  <i class="px-2 fas fa-arrow-down fa-lg"></i>
                  <router-link to="qrcode" target="_blank">
                    ดาวน์โหลดแอปพลิเคชัน CSMJU
                  </router-link>
                </div>
              </div>
            </div>
            <div class="w-full text-left lg:w-6/12">
              <div class="top-0 w-full h-full bg-center bg-cover">
                <Carousel :autoplay="this.speed" :wrap-around="true">
                  <Slide v-for="image in banner_array" :key="image.Banner_ID">
                    <div
                      class="cssanimation sequence fadeInBottom relative mx-0 shadow-lg bg-emerald-500 carousel__item cropped-bg round-lg"
                    >
                      <a :href="image.Link" target="_blank">
                        <img class="cropped-bg" :src="image.Banner_File" />
                      </a>
                    </div>
                  </Slide>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="pb-20 lg:-mt-64 bg-blueGray-200 custom">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div class="w-full px-4 text-center md:w-6/12">
              <router-link to="program" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white"
                >
                  <div class="flex-auto p-1">
                    <img
                      alt="..."
                      :src="menu1"
                      class="relative mx-0 shadow-lg lg:cropped-card1"
                    />
                  </div>
                </div>
              </router-link>
            </div>

            <div class="w-full px-4 text-center md:w-6/12">
              <a href="http://www.admissions.mju.ac.th/" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white"
                >
                  <div class="flex-auto p-1">
                    <img
                      alt="..."
                      :src="menu2"
                      class="relative mx-0 shadow-lg lg:cropped-card1"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full px-4 text-center md:w-4/12">
              <router-link to="about" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white"
                >
                  <div class="flex-auto p-1">
                    <img
                      alt="..."
                      :src="menu3"
                      class="relative mx-0 shadow-lg lg:cropped-card2"
                    />
                  </div>
                </div>
              </router-link>
            </div>
            <div class="w-full px-4 text-center md:w-4/12">
              <router-link to="activity" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white"
                >
                  <div class="flex-auto p-1">
                    <img
                      alt="..."
                      :src="menu4"
                      class="relative mx-0 shadow-lg lg:cropped-card2"
                    />
                  </div>
                </div>
              </router-link>
            </div>
            <div class="w-full px-4 text-center md:w-4/12">
              <router-link to="contact" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white"
                >
                  <div class="flex-auto p-1">
                    <img
                      alt="..."
                      :src="menu5"
                      class="relative mx-0 shadow-lg lg:cropped-card2"
                    />
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <hr />

          <h1 class="px-6 pt-20 mt-4 mb-4 text-3xl">
            <b>News Update</b> | ข่าวสารล่าสุด
          </h1>

          <div class="flex flex-wrap mt-12 mb-12">
            <div
              v-for="n in 3"
              :key="n"
              class="w-full px-4 text-center md:w-4/12"
            >
              <router-link to="news" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom"
                >
                  <div class="flex-auto p-4">
                    <img
                      alt="..."
                      :src="News_Picture[n - 1]"
                      class="relative row-end-auto mx-0 shadow-lg cropped-card2"
                    />
                  </div>
                  <h3 class="px-4 mb-2 text-lg font-semibold truncate">
                    {{ News_Title[n - 1] }}
                  </h3>
                  <p class="px-4 pb-4 text-left truncate-3">
                    {{ News_Detail[n - 1] }}
                  </p>
                </div>
              </router-link>
            </div>
          </div>

          <h1 class="px-6 pt-20 mt-12 mb-4 text-3xl">
            <b>Curriculum </b> | หลักสูตร
          </h1>
          <div class="mt-12 mb-12">
            <card-home-edu />
          </div>
          <div>
            <h1></h1>
          </div>

          <h1 class="px-6 pt-20 mt-12 mb-4 text-3xl" id="section2">
            <b>Introduction </b> | วีดีโอแนะนำสาขา
          </h1>

          <div class="flex flex-wrap mt-12 mb-12">
            <div class="w-full px-4 text-center md:w-12/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
              >
                <div class="flex-auto px-0">
                  <div
                    class="relative w-full max-w-full overflow-hidden h-500-px pb-72"
                  >
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      src="https://www.youtube.com/embed/88JeU0ShY60"
                      title="Presentation | Com-Sci MJU 2020"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <main-footer />
  </div>
</template>

<script>
import MainNavbar from "@/components/Navbars/MainNavbar.vue";
import MainFooter from "@/components/Footers/HomeFooter.vue";
import CardHomeEdu from "@/components/Cards/CardHomeEdu.vue";

import http from "@/services/WebpageService";

import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import bg_home from "@/assets/img/bg-home.png";

import menu1 from "@/assets/img/menu1.png";
import menu2 from "@/assets/img/menu2.png";
import menu3 from "@/assets/img/menu3.png";
import menu4 from "@/assets/img/menu4.png";
import menu5 from "@/assets/img/menu5.png";

export default defineComponent({
  name: "Autoplay",
  components: {
    MainNavbar,
    MainFooter,
    CardHomeEdu,

    Carousel,
    Slide,
  },
  data() {
    return {
      speed: 3000,
      images: [
        { id: 1, name: menu3 },
        { id: 2, name: menu4 },
        { id: 3, name: menu5 },
      ],

      bg_home,
      menu1,
      menu2,
      menu3,
      menu4,
      menu5,

      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),

      news_array: [],
      banner_array: [],

      News_Title: [],
      News_Detail: [],
      News_Picture: [],
      // News_Title_2: "",
      // News_Detail_2: "",
      // News_Picture_2: "",
      // News_Title_3: "",
      // News_Detail_3: "",
      // News_Picture_3: "",
    };
  },
  mounted() {
    this.getNewsData();
    this.getBannerData();
    console.log(process.env.VUE_APP_URL);
  },
  methods: {
    getNewsData() {
      http
        .get(`newsapp`)
        .then((response) => {
          this.news_array = response.data;
          this.news_array.reverse();
          for (let i = 0; i < 3; i++) {
            this.News_Title.push(this.news_array[i].News_Title);
            this.News_Detail.push(this.news_array[i].News_Detail);
            this.News_Picture.push(this.news_array[i].News_Picture);
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
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

    getBannerData() {
      http
        .get(`banner`)
        .then((response) => {
          this.banner_array = response.data;
          this.banner_array.reverse();
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
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
  },
});
</script>
