<template>
  <section>
    <div
      class="relative custom min-w-screen flex items-center justify-center px-5 "
    >
      <div class="w-full max-w-3xl">
        <div class="-mx-2 flex flex-wrap relative">
          <div class="w-full lg:w-3/12 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10 h-200-px">
                  <h3
                    class="font-bold text-orange-500 duration-150 ease-linear text-55 hover:zoom"
                  >
                    4
                  </h3>
                  <div class="text-2xl">
                    องค์ความรู้แห่งศาสตร์วิทยาการคอมพิวเตอร์
                  </div>
                </div>
                <div class="relative bottom-0 inset-x-0">
                  <canvas id="chart1" height="100"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-3/12 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10 h-200-px">
                  <h3
                    class="font-bold text-orange-500 duration-150 ease-linear text-55 hover:zoom"
                  >
                    8
                  </h3>
                  <div class="px-4 text-2xl ">
                    โมดูลการเรียนรู้เชิงแนวคิดและปฎิบัติจริง
                  </div>
                </div>
                <div class="relative bottom-0 inset-x-0">
                  <canvas id="chart2" height="100"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-3/12 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10 h-200-px">
                  <h3
                    class="font-bold text-orange-500 duration-150 ease-linear text-55 hover:zoom "
                  >
                    60+
                  </h3>
                  <div class="text-2xl ">
                    รายวิชาที่เปิดสอน โดยเลือกเรียนตามความสนใจ
                  </div>
                </div>
                <div class="relative bottom-0 inset-x-0">
                  <canvas id="chart3" height="100"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-3/12 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10 h-200-px">
                  <h3
                    class="font-bold text-orange-500 duration-150 ease-linear text-55 hover:zoom "
                  >
                    2,000+
                  </h3>
                  <div class="text-2xl ">
                    นักศึกษาที่สำเร็จการศึกษาแล้วทั้งสิ้น
                  </div>
                </div>
                <div class="relative bottom-0 inset-x-0">
                  <canvas id="chart4" height="100"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from "chart.js";
export default {
  data: () => ({
    chart1: null,
    chart2: null,
    chart3: null,
    chart4: null,
  }),
  mounted() {
    const chartOptions = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: false,
            scaleLabel: false,
            ticks: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: false,
            scaleLabel: false,
            ticks: {
              display: false,
              suggestedMin: 0,
              suggestedMax: 1,
            },
          },
        ],
      },
    };
    //

    var ctx = document.getElementById("chart1");
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [1, 2, 3, 4],
        datasets: [
          {
            backgroundColor: "rgba(246, 153, 63, 0.1)",
            borderColor: "rgba(246, 153, 63, 0.8)",
            borderWidth: 3,
            data: [1, 3, 2, 4],
          },
        ],
      },
      options: chartOptions,
    });

    ctx = document.getElementById("chart2");
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [1, 2, 3, 4],
        datasets: [
          {
            backgroundColor: "rgba(246, 153, 63, 0.1)",
            borderColor: "rgba(246, 153, 63, 0.8)",
            borderWidth: 3,
            data: [10, 4, 4, 8],
          },
        ],
      },
      options: chartOptions,
    });

    ctx = document.getElementById("chart3");
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [1, 2, 3, 4],
        datasets: [
          {
            backgroundColor: "rgba(246, 153, 63, 0.1)",
            borderColor: "rgba(246, 153, 63, 0.8)",
            borderWidth: 3,
            data: [6, 4, 8, 4],
          },
        ],
      },
      options: chartOptions,
    });

    ctx = document.getElementById("chart4");
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [1, 2, 3, 4],
        datasets: [
          {
            backgroundColor: "rgba(246, 153, 63, 0.1)",
            borderColor: "rgba(246, 153, 63, 0.8)",
            borderWidth: 3,
            data: [2, 3, 2, 5],
          },
        ],
      },
      options: chartOptions,
    });
  },
};
</script>


