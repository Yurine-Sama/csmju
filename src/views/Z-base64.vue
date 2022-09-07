<template>
  <div>
    <input ref="fileupload" type="file" @change="onFileSelected" />
    <img v-if="imgUrl" :src="imgUrl" class="w-24" />
    <img @change="endcode()" alt="" />
    <button @click="encode">encode</button>
    <button @click="getdata">getdata</button>

    <p>
      {{ this.base64 }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],

      image: "",
      base64: "",

      imgUrl: "",
      file: null,

      inputBase64: "",
    };
  },
  methods: {
    getdata() {
      let token = "2c32ddd497924dfcabb3bec972341808";

      axios
        .get("https://api.mju.ac.th/Student/api/STUDENTe8ee4f3759cc4763a8f231965a2da6db23052020/6104101399", {
          headers: {
           AuthenticationPath: `https://passport.mju.ac.th?W=${token}`,
          },
        })
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
        });
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      this.file = event.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    encode() {
      var file = this.file;

      var reader = new FileReader();

      reader.onload = function() {
        var base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        this.base64 = base64String;
        //alert(this.base64);
      };
      reader.readAsDataURL(file);
    },
  },
  mounted() {
    this.decode();
  },
};
</script>


