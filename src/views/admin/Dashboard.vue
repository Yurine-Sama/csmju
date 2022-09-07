<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full mx-auto ">
        <div>
          <!-- Card stats -->
          <div class="flex flex-wrap">
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
              <card-stats
                statSubtitle="จำนวนนักศึกษา (ระบบ)"
                :statTitle="this.student"
                statIconName="far fa-user"
                statIconColor="bg-red-500"
              />
            </div>
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
              <card-stats
                statSubtitle="ระบบประกาศข่าวสาร"
                :statTitle="this.news"
                statArrow="down"
                statPercent="3.48"
                statPercentColor="text-red-500"
                statDescripiron="Since last week"
                statIconName="fas fa-newspaper"
                statIconColor="bg-orange-500"
              />
            </div>

            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
              <card-stats
                statSubtitle="ครุภัณฑ์ในระบบทั้งหมด"
                :statTitle="this.equipment"
                statIconName="fas fa-cubes"
                statIconColor="bg-pink-500"
              />
            </div>

            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
              <card-stats
                statSubtitle="ระบบแจ้งตกค้างรายวิชา"
                :statTitle="this.course"
                statIconName="fas fa-percent"
                statIconColor="bg-emerald-500"
              />
            </div>
          </div>
          <div class="flex flex-wrap mt-6">
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
              <card-stats
                statSubtitle="ระบบจองห้องเรียน"
                :statTitle="this.room"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-emerald-500"
              />
            </div>
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
              <card-stats
                statSubtitle="ระบบแจ้งซ่อม"
                :statTitle="this.repair"
                statArrow="down"
                statPercent="3.48"
                statPercentColor="text-red-500"
                statDescripiron="Since last week"
                statIconName="fas fa-wrench"
                statIconColor="bg-orange-500"
              />
            </div>
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
              <card-stats
                statSubtitle="ระบบติดต่อกลับ"
                :statTitle="this.complaint"
                statArrow="down"
                statPercent="1.10"
                statPercentColor="text-orange-500"
                statDescripiron="Since yesterday"
                statIconName="fas fa-users"
                statIconColor="bg-pink-500"
              />
            </div>
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
              <card-stats
                statSubtitle="ระบบยืม-คืน"
                :statTitle="this.borrow"
                statArrow="up"
                statPercent="12"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="fas fa-handshake"
                statIconColor="bg-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full px-4 mb-12 xl:w-12/12 xl:mb-0">
        <card-page-visits />
      </div>
    </div>
  </div>
</template>
<script>
// import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardStats from "@/components/Cards/CardStats.vue";
import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
import http from "@/services/APIService";

export default {
  name: "dashboard-page",
  components: {
    CardStats,
    CardPageVisits,
  },
  data() {
    return {
      products: [],
      currentPage: 0,
      perPage: 0,

      equipment: 0,
      student: 0,
      news: 0,
      course: 0,
      room: 0,
      complaint: 0,
      repair: 0,
      borrow: 0,
    };
  },
  methods: {
    async getstatData(pageNumber) {
      let response_1 = await http.get(`equipment?page=${pageNumber}`);
      this.equipment = response_1.data.total;

      let response_2 = await http.get(`student?page=${pageNumber}`);
      this.student = response_2.data.total;

      let response_3 = await http.get(`news?page=${pageNumber}`);
      this.news = response_3.data.total;

      let response_4 = await http.get(`residaual`);
      this.course = response_4.data.length;

      let response_5 = await http.get(`bookclassroom`);
      this.room = response_5.data.length;

      let response_6 = await http.get(`complain`);
      this.complaint = response_6.data.length;
    },
  },
  mounted() {
    this.getstatData();
  },
};
</script>
