<template>
  <div
    class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg bg-blueGray-700"
  >
    <div class="px-4 py-3 mb-0 bg-transparent rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex-1 flex-grow w-full max-w-full">
          <h6 class="mb-1 text-xs font-semibold uppercase text-blueGray-100">
            ภาพรวม
          </h6>
          <h2 class="text-xl font-semibold text-white">
            การใช้งาน API ต่อ ยอดผู้ใช้ในระบบ
          </h2>
        </div>
      </div>
    </div>
    <div class="flex-auto p-4">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";

export default {
  mounted: function() {
    this.$nextTick(function() {
      var config = {
        type: "line",
        data: {
          labels: [
            "วันอาทิตย์",
            "วันจันทร์",
            "วันอังคาร",
            "วันพุธ",
            "วันพฤหัสบดี",
            "วันศุกร์",
            "วันเสาร์"
            
           
          ],
          datasets: [
            {
              label: "บัญชีผู้ใช้งาน",
              backgroundColor: "#4c51bf",
              borderColor: "#4c51bf",
              data: [65, 78, 66, 44, 24, 12, 40],
              fill: false,
            },
            {
              label: "การใช้งาน API",
              fill: false,
              backgroundColor: "#fff",
              borderColor: "#fff",
              data: [40, 68, 86, 74,56,34,12],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Sales Charts",
            fontColor: "white",
          },
          legend: {
            labels: {
              fontColor: "white",
            },
            align: "end",
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white",
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white",
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "rgba(255, 255, 255, 0.15)",
                  zeroLineColor: "rgba(33, 37, 41, 0)",
                  zeroLineBorderDash: [],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };
      var ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
    });
  },
};
</script>
