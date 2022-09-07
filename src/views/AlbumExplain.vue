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
            {{ this.Title }}
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            {{ this.Detail }}
          </p>
          <p
            class="font-semibold leading-normal text-sm text-right text-blueGray-500"
          >
            {{ this.Date }}
          </p>
        </div>

        <div class="pt-6 mt-10 text-center border-t border-blueGray-200"></div>

        <div class="flex flex-wrap">
          <div class="w-full px-2 pb-4 lg:w-12/12 ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words max-h-news h-full"
            >
              <div
                class="flex flex-wrap px-0 mt-2 lg:px-10"
              >
                <div
                  class="w-full px-2 pb-4 lg:w-6/12 "
                  v-for="i in 10"
                  :key="i"
                >
                  <img
                    alt=".."
                    :src="album[i]"
                    class="max-h-400-px  rounded-lg center-img shadow-lg border"
                  />
                </div>

                <div class="mt-10 text-center center-img">
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
      id: 0,
      Title: "",
      Detail: "",

      mybutton: false,
      album: [],
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
      this.id = this.$store.state.albumShowAll;
      http.get(`album/activity/id/${this.id}`).then((response) => {
        this.Title = response.data.Titile;
        this.Detail = response.data.Detail;
        this.album.push(response.data.Pic1);
        this.album.push(response.data.Pic2);
        this.album.push(response.data.Pic3);
        this.album.push(response.data.Pic4);
        this.album.push(response.data.Pic5);
        this.album.push(response.data.Pic6);
        this.album.push(response.data.Pic7);
        this.album.push(response.data.Pic8);
        this.album.push(response.data.Pic9);
        this.album.push(response.data.Pic10);
      });
    },
  },
  components: {},
};
</script>
