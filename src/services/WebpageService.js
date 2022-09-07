import axios from "axios";


const WebpageService = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  withCredentials: true,
  headers: {
    "Content-type": "multipart/form-data",
    "Accept": "application/json",
    // "Authorization": `Bearer ${token}`
  },
});

// การใช้ interceptors เพื่อแทรกตัว token เข้าไปใน header
WebpageService.interceptors.request.use(config => {

  // อ่าน token จาก localStorage
  let token = ''

  try{
    // let userStorage = localStorage.getItem('local')
    // let userStorageJSON = JSON.parse(userStorage)
    token = process.env.VUE_APP_TOKEN_API
  }catch(error){
    console.log(error);
  }

  // เช็คว่าถ้า token ไม่ null
  if(token){
    config.headers.Authorization = "Bearer "+token
  }

  return config

})

export default WebpageService;