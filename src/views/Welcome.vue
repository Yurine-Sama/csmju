<template>
  <div class="relative page custom">
    <div class="countdown-col col">
      <div class="relative newslatter middle">
        <div class="px-4 cssanimation sequence fadeInBottom scroll-hide">
          <img
            class="h-24 center-img shadow-lg bg-no-repeat bg-cover bg-full scroll-hide"
            src="@/assets/img/logo.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="relative w-full overflow-x-auto scroll-hide">
          <div class="w-full block overflow-x-auto"></div>
          <h1
            class="text-center text-shadow line-1 h-70-px anim-typewriter-1 text-white font-normal align-middle mb-12 text-6xl leading-none"
          >
            ยินดีต้อนรับสู่สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
          </h1>
          <div class="mt-16 w-full ">
            <h2
              class="italic delay h-10 line-2 anim-typewriter-2 text-white font-bold text-shadow align-middle mb-12 text-4xl leading-none"
            >
              Welcome to Computer Science ,Maejo University()
            </h2>
          </div>
        </div>

        <form
          class="delay-btn mt-48 relative"
        >
          <button
            @click="homePage"
            type="button"
            class="newslatter-button text-2xl shadow-lg text-white"
          >
            เข้าสู่เว็บไซต์
            <p class="text-lg font-semibold text-blueGray-700">Enter Website</p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    homePage() {
      let localData = { state: 1 };
      localStorage.setItem("into", JSON.stringify(localData));
      this.$router.push({ name: "Home" });
    },
    playSound() {
      const audio = new Audio(
        "https://www.chosic.com/wp-content/uploads/2021/09/Computer-keyboard-fast.mp3"
      );
      audio.play();
    },
  },
  mounted() {
    //this.playSound();
  },
};
</script>
<style>
.col {
  flex: 1;
  height: 100vh;
  position: relative;
}
.countdown-col {
  background: url("@/assets/img/Bg-welcome.svg") no-repeat center;
  background-size: cover;
}
.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.newslatter {
  font-style: normal;
  width: 90%;
}
.newslatter button {
  display: block;
  margin: 10px auto;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  padding: 10px 5px;
  border-radius: 30px;
  border: 2px solid #ddd;
  outline: none;
}
.newslatter-button {
  background: linear-gradient(100deg, #10b981, #0891b2);
  color: #fff;
  cursor: pointer;
  transition: 0.4s;
}
.newslatter-button:hover {
  opacity: 0.7;
}
@media screen and (max-width: 900px) {
  .col {
    flex: 100%;
  }
}

.line-1 {
  position: relative;
  top: 120%;
  width: 50em;
  margin: 0 auto;
  border-right: 3px solid rgba(255, 255, 255, 0.75);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(100%);
}
.line-2 {
  position: relative;
  top: 120%;
  width: 50em;
  margin: 0 auto;
  border-right: 3px solid rgba(255, 255, 255, 0.75);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(100%);
  animation-delay: 6.7s;
}

/* Animation */
.anim-typewriter-1 {
  animation: typewriter 4s steps(44) 2s 1 normal both,
    blinkTextCursor 550ms steps(48) infinite normal;
}
.anim-typewriter-2 {
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}
.delay {
  animation-delay: 5s;
}
.delay-btn {
  animation-delay: 6s;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 25em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
