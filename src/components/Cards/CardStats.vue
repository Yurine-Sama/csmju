<template>
  <div
    class="custom relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative flex-1 flex-grow w-full max-w-full pr-4">
          <h5 class="text-sm font-bold uppercase text-blueGray-400">
            {{ statSubtitle }} 
          </h5>
          <span class="text-2xl font-semibold text-blueGray-700">
            {{ statTitle }}  <span class="text-sm text-emerald-600">รายการ</span>
          </span>
        </div>
        <div class="relative flex-initial w-auto pl-4">
          <div
            class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white rounded-full shadow-lg"
            :class="[statIconColor]"
          >
            <i :class="[statIconName]"></i>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "card-stats",
  props: {
    statSubtitle: {
      type: String,
      default: "Traffic",
    },
    statTitle: {
      type: String,
      default: "350,897",
    },
   
 
    // can be any of the text color utilities
    // from tailwindcss
   
   
    statIconName: {
      type: String,
      default: "far fa-chart-bar",
    },
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: {
      type: String,
      default: "bg-red-500",
    },
  },
};
</script>
