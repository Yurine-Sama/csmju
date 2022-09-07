/* eslint-disable vue/no-parsing-error */
<template>
  <div class="flex items-center min-h-screen p-6 bg-white dark:bg-gray-900">
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg  dark:bg-gray-800"
    >
      <div class="flex flex-auto border-b-2 pb-4 border-blueGray-500">
        <img class="h-70-px" src="@/assets/img/logo.png" />
      </div>
      <div
        class="cssanimation sequence fadeInBottom flex flex-col items-center py-10 overflow-y-auto custom md:flex-col"
      >
        <div class="border-2 p-4">
          <img class="h-200-px" src="@/assets/img/qrcode.png" />
        </div>
        <div
          class="px-6 py-2 text-2xl mt-10 text-blueGray-700 dark:text-gray-300"
        >
          ดาวน์โหลดแอปพลิเคชัน CSMJU
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwwwdev.csmju.com%2Fimages%2Ffile%2FCsmjuApp.apk%3Ffbclid%3DIwAR2LvXgDpv1MZltf9ByUO2OnkgRD7qWeyD6wvUTDQamw1U0py6AXDvx4GSo&h=AT2CSFXRh6ofVq_oL3Lq8nBySK_4vFddfmd_xvZbG7zmVEjkHyxPa5gyqfhQfYjFZKBh790g3b3dTzzLUFqgixEHWrfUCAiQFVpxmnxo_VFGv-mvbiHjkVgv2X8250JnF5d-4PBVx86E3Gu0Dl36kg"
            class="text-center text-emerald-600 font-semibold text-3xl"
          >
            คลิกที่นี่
          </a>
        </div>

        <div class="text-sm mt-6">
          <p
            class=" pb-2 text-blueGray-400 dark:text-gray-300"
          >
            หากคุณยังไม่มีแอปพลิเคชันสาขาวิชาวิทยาการคอมพิวเตอร์ ม.แม่โจ้
            กรุณาดาวน์โหลดที่ลิงค์ หรือแสกน QR Code ที่อยู่ทางด้านบน

            <a class="text-emerald-600 text-md" href="home">กลับหน้าหลัก</a>
          </p>
          <div class="text-center">
            <i class="text-red-500"
              >(หมายเหตุ : รองรับเฉพาะระบบปฏิบัติการ Android เท่านั้น)</i
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
