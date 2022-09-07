<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3
            class="mb-2 text-3xl font-semibold leading-normal text-blueGray-700"
          >
            {{ this.eTitle }}
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            วันที่ประกาศ : {{ this.eDates }} | ประเภทข่าว :
            {{ this.eType }}
          </p>
        </div>

        <div class="pt-6 mt-10 text-center border-t border-blueGray-200"></div>

        <div class="flex flex-wrap">
          <div class="w-full px-2 pb-4 lg:w-12/12 ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words max-h-news h-full"
            >
              <div
                class="px-0 mt-2 lg:px-10"
              >
                <img
                  v-if="eimgUrl"
                  :src="eimgUrl"
                  class="max-h-400-px  rounded-lg center-img shadow-lg border"
                />
                <h3 class="mt-8 font-semibold mb-4">
                  รายละเอียดข่าว :
                </h3>
                <p class="rem2 whitespace-normal text-justify leading-norma">
                  {{ this.eDetail }}
                </p>
                <h3 class="mt-8 font-semibold mb-4">
                  ลิงค์ที่เกี่ยวข้อง :
                </h3>
                <a
                  :href="elinks"
                  target="_blank"
                  class="whitespace-normal text-justify leading-norma"
                >
                  {{ this.elinks }}
                </a>
                <div class="mt-10 text-center">
                  <a href="javascript:history.go(-1)">
                    <button
                      class=" px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="button"
                    >
                      ย้อนกลับ
                    </button>
                  </a>
                  <button
                    @click="topFunction()"
                    id="myBtn"
                    class=" px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                  >
                    ขึ้นด้านบน
                  </button>
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
import http from "@/services/WebpageService";
export default {
  data() {
    return {
      enewsId: 0,
      eTitle: "",
      eType: "",
      eDates: "",
      eDetail: "",
      elinks: "",
      eimgUrl: "",
      mybutton: false,
    };
  },
  mounted() {
    this.getPersonnelData();
    this.mybutton = document.getElementById("myBtn");
  },
  methods: {
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    getPersonnelData() {
      http;
      this.newsId = this.$store.state.newsShowAll;
      http.get(`news/id/${this.newsId}`).then((response) => {
        this.enewsId = response.data.newsId;
        this.eTitle = response.data.News_Title;
        this.eType = response.data.News_Type;
        this.eDates = response.data.News_Date;
        this.eDetail = response.data.News_Detail;
        this.elinks = response.data.News_links;
        this.eimgUrl = response.data.News_Picture;
      });
    },
  },
  components: {},
};
</script>
