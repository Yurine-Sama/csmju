import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import VCalendar from "v-calendar";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// styles--------------------------------------------------

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// Routing -------------------------------------------------
// mouting point for the whole app

import App from "@/App.vue";

// layouts

import HomeLayout from "@/layouts/Home.vue";
import Admin from "@/layouts/Admin.vue";
import Main from "@/layouts/Main.vue";
import Auth from "@/layouts/Auth.vue";
import Service from "@/layouts/Service.vue";
import Service_forPersonnel from "@/layouts/Service_forPersonnel.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";

import Banner from "@/views/admin/Banner.vue";

import ChangePassword from "@/views/admin/ChangePassword.vue";

import RoomShow from "@/views/admin/RoomShow.vue";
import RoomAdd from "@/views/admin/RoomAdd.vue";
import RoomEdit from "@/views/admin/RoomEdit.vue";

import AboutMeShow from "@/views/admin/AboutMeShow.vue";
import AboutMeAdd from "@/views/admin/AboutMeAdd.vue";
import AboutMeEdit from "@/views/admin/AboutMeEdit.vue";

import SubjectShow from "@/views/admin/SubjectShow.vue";
import SubjectAdd from "@/views/admin/SubjectAdd.vue";
import SubjectEdit from "@/views/admin/SubjectEdit.vue";

import EquipmentShow from "@/views/admin/EquipmentShow.vue";
import EquipmentAdd from "@/views/admin/EquipmentAdd.vue";
import EquipmentEdit from "@/views/admin/EquipmentEdit.vue";

import Feed from "@/views/admin/FeedShow.vue";
import AddFeed from "@/views/admin/FeedAdd.vue";
import EditFeed from "@/views/admin/FeedEdit.vue";

import Complaining from "@/views/admin/ComplainShow.vue";

import AlumnusShow from "@/views/admin/AlumnusShow.vue";
import AlumnusAdd from "@/views/admin/AlumnusAdd.vue";
import AlumnusEdit from "@/views/admin/AlumnusEdit.vue";

import StudentShow from "@/views/admin/StudentShow.vue";
import StudentAdd from "@/views/admin/StudentAdd.vue";
import StudentEdit from "@/views/admin/StudentEdit.vue";

import PersonnelShow from "@/views/admin/PersonnelShow.vue";
import PersonnelAdd from "@/views/admin/PersonnelAdd.vue";
import PersonnelEdit from "@/views/admin/PersonnelEdit.vue";

import ActivityShow from "@/views/admin/ActivityShow.vue";
import ActivityAdd from "@/views/admin/ActivityAdd.vue";
import ActivityEdit from "@/views/admin/ActivityEdit.vue";

import BookingShow from "@/views/admin/BookingShow.vue";
import BookingAdd from "@/views/admin/BookingAdd.vue";
import BookingEdit from "@/views/admin/BookingEdit.vue";

import RepairShow from "@/views/admin/RepairShow.vue";
import RepairAdd from "@/views/admin/RepairAdd.vue";
import RepairEdit from "@/views/admin/RepairEdit.vue";

import AlbumShow from "@/views/admin/AlbumShow.vue";
import AlbumAdd from "@/views/admin/AlbumAdd.vue";
import AlbumEdit from "@/views/admin/AlbumEdit.vue";

import CourseAlertShow from "@/views/admin/CourseAlertShow.vue";

// views for Auth layout
import Login_User from "@/views/auth/Login_User.vue";
import Service_Student from "@/views/auth/Service_Student.vue";
import Service_Teacher from "@/views/auth/Service_Teacher.vue";

//Service For Student
import Course from "@/views/auth/forStudent/CourseAlert.vue";
import Maintenance from "@/views/auth/forStudent/MaintainStudent.vue";
import ProfileStudent from "@/views/auth/forStudent/ProfileStudent.vue";
import RoomReserveStudent from "@/views/auth/forStudent/RoomReserveStudent.vue";

//Service For Personnel
import Maintenance_Personnel from "@/views/auth/forPersonnel/Maintain.vue";
import Cv from "@/views/auth/forPersonnel/CV.vue";
import CVPrint from "@/views/auth/forPersonnel/CVPrint.vue";
import RoomReserve from "@/views/auth/forPersonnel/RoomReserve.vue";
import Profile from "@/views/auth/forPersonnel/Profile.vue";

// views without layouts

import Home from "@/views/Home.vue";
import Page404 from "@/views/Page404.vue";
// import About from "@/views/About.vue";

import AboutNew from "@/views/AboutNew.vue";

//all about detail
import ImporTance from "@/views/ImporTance.vue";
import Objectivity from "@/views/Objectivity.vue";
import Philosophy from "@/views/Philosophy.vue";
import PLO from "@/views/PLO.vue";

import Program from "@/views/Program.vue";
import News from "@/views/News.vue";
import NewsExplain from "@/views/NewsExplain.vue";
import Album from "@/views/Album.vue";
import AlbumExplain from "@/views/AlbumExplain.vue";
import Staff from "@/views/Staff.vue";
import Teacher from "@/views/Teacher.vue";
import Contact from "@/views/Contact.vue";
import Download from "@/views/Download.vue";
import QRcode from "@/views/QRcode.vue";
import Classroom from "@/views/Classroom.vue";
import Schedule from "@/views/Schedule.vue";
import Alumnus from "@/views/Alumnus.vue";
import Welcome from "@/views/Welcome.vue";

import store from "./store";

// Authentication Home
function intoGuard(to, from, next) {
  let isAuthenticated = false;
  JSON.parse(window.localStorage.getItem("into"));
  if (localStorage.getItem("into")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next();
  } else {
    next({ name: "Welcome" });
  }
}

// Authentication Student
function authGuard(to, from, next) {
  let isAuthenticated = false;
  let permission = JSON.parse(window.localStorage.getItem("permission"));
  let local_user = JSON.parse(window.localStorage.getItem("user"));

  let user_role = permission.role;
  let status = local_user.status;
  let token = local_user.access_token;

  if (token && user_role == 2 && status == "success") {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next();
  } else {
    localStorage.removeItem("user");
    localStorage.removeItem("permission");
    alert(
      "Warning : You are not authorized to access this page! \n\n คำเตือน : ผู้ใช้งานไม่มีสิทธิ์เข้าถึงหน้านี้...โปรดตรวจสอบข้อมูล!"
    );
    next({ name: "Login" });
  }
}

// Authentication Personnel
function authGuard_Personnel(to, from, next) {
  let isAuthenticated = false;
  let permission = JSON.parse(window.localStorage.getItem("permission"));
  let personnel_user = JSON.parse(window.localStorage.getItem("user"));

  let status = personnel_user.status;
  let user_role = permission.role;
  let token = personnel_user.access_token;

  if (token && user_role == 1 && status == "success") {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next();
  } else {
    localStorage.removeItem("user");
    localStorage.removeItem("permission");
    alert(
      "Warning : You are not authorized to access this page! \n\n คำเตือน : ผู้ใช้งานไม่มีสิทธิ์เข้าถึงหน้านี้...โปรดตรวจสอบข้อมูล!"
    );
    next({ name: "Login" });
  }
}

// Authentication Admin
function authGuard_Admin(to, from, next) {
  let isAuthenticated = false;
  let local_user = JSON.parse(window.localStorage.getItem("user"));
  let user_role = local_user.user.role;
  let token = local_user.token;

  if (token && user_role == 0) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next();
  } else {
    localStorage.removeItem("user");
    alert(
      "Warning : You are not authorized to access this page! \n\n คำเตือน : ผู้ใช้งานไม่มีสิทธิ์เข้าถึงหน้านี้...โปรดตรวจสอบข้อมูล!"
    );
    next({ name: "Login" });
  }
}

const routes = [
  //Admin-layout
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/changepassword",
        name: "ChangePassword",
        component: ChangePassword,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/albumshow",
        name: "AlbumShow",
        component: AlbumShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/albumadd",
        name: "AlbumAdd",
        component: AlbumAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/albumEdit",
        name: "AlbumEdit",
        component: AlbumEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/subjectshow",
        name: "SubjectShow",
        component: SubjectShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/subjectadd",
        name: "SubjectAdd",
        component: SubjectAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/subjectedit",
        name: "SubjectEdit",
        component: SubjectEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/repairshow",
        name: "RepairShow",
        component: RepairShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/repairadd",
        name: "RepairAdd",
        component: RepairAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/repairedit",
        name: "RepairEdit",
        component: RepairEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/bookingshow",
        name: "BookingShow",
        component: BookingShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/bookingadd",
        name: "BookingAdd",
        component: BookingAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/bookingdit",
        name: "BookingEdit",
        component: BookingEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/roomshow",
        name: "RoomShow",
        component: RoomShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/roomadd",
        name: "RoomAdd",
        component: RoomAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/roomedit",
        name: "RoomEdit",
        component: RoomEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/aboutmeshow",
        name: "AboutMeShow",
        component: AboutMeShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/aboutmeadd",
        name: "AboutMeAdd",
        component: AboutMeAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/aboutmeedit",
        name: "AboutMeEdit",
        component: AboutMeEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/aboutmeshow",
        name: "AboutMeShow",
        component: AboutMeShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/banner",
        name: "Banner",
        component: Banner,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: Dashboard,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/feed",
        name: "Feed",
        component: Feed,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/addfeed",
        component: AddFeed,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/editfeed",
        name: "EditFeed",
        component: EditFeed,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/alumnusshow",
        name: "AlumnusShow",
        component: AlumnusShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/alumnusadd",
        name: "AlumnusAdd",
        component: AlumnusAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/alumnusedit",
        name: "AlumnusEdit",
        component: AlumnusEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/equipmentshow",
        name: "EquipmentShow",
        component: EquipmentShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/equipmentadd",
        name: "EquipmentAdd",
        component: EquipmentAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/equipmentedit",
        name: "EquipmentEdit",
        component: EquipmentEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/complaining",
        name: "Complaining",
        component: Complaining,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/studentshow",
        name: "StudentShow",
        component: StudentShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/studentAdd",
        name: "StudentAdd",
        component: StudentAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/studentEdit",
        name: "StudentEdit",
        component: StudentEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/personnelshow",
        name: "PersonnelShow",
        component: PersonnelShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/personnelAdd",
        name: "PersonnelAdd",
        component: PersonnelAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/personnelEdit",
        name: "PersonnelEdit",
        component: PersonnelEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/CourseAlertShow",
        name: "CourseAlertShow",
        component: CourseAlertShow,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/activityAdd",
        name: "ActivitylAdd",
        component: ActivityAdd,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/activityEdit",
        name: "ActivityEdit",
        component: ActivityEdit,
        beforeEnter: authGuard_Admin,
      },
      {
        path: "/admin/activityShow",
        name: "ActivityShow",
        component: ActivityShow,
        beforeEnter: authGuard_Admin,
      },
    ],
  },
  //Login-layout
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        name: "Login",
        component: Login_User,
        beforeEnter: intoGuard,
      },
    ],
  },
  //Student-layout
  {
    path: "/service",
    redirect: "/service/service_student",
    component: Service,
    children: [
      {
        path: "/service/service_student",
        name: "ServiceStudent",
        component: Service_Student,
        beforeEnter: authGuard,
      },
      {
        path: "/service/service_student/maintenance",
        name: "Maintenance",
        component: Maintenance,
        beforeEnter: authGuard,
      },
      {
        path: "/service/service_student/profilestudent",
        name: "ProfileStudent",
        component: ProfileStudent,
        beforeEnter: authGuard,
      },
      {
        path: "/service/service_student/course",
        name: "Course",
        component: Course,
        beforeEnter: authGuard,
      },
      {
        path: "/service/service_student/roomreserve",
        name: "RoomReserveStudent",
        component: RoomReserveStudent,
        beforeEnter: authGuard,
      },
    ],
  },
  //Personnel-layout
  {
    path: "/service_forpersonnel",
    redirect: "/service/service_personnel",
    component: Service_forPersonnel,
    children: [
      {
        path: "/service/service_teacher",
        name: "ServiceTeacher",
        component: Service_Teacher,
        beforeEnter: authGuard_Personnel,
      },
      {
        path: "/service/service_teacher/maintenance_forpersonnel",
        name: "Maintenance_Personnel",
        component: Maintenance_Personnel,
        beforeEnter: authGuard_Personnel,
      },
      {
        path: "/service/service_teacher/cv",
        name: "CV",
        component: Cv,
        beforeEnter: authGuard_Personnel,
      },
      {
        path: "/service/service_teacher/roomreserve",
        name: "RoomReserve",
        component: RoomReserve,
        beforeEnter: authGuard_Personnel,
      },
      {
        path: "/service/service_teacher/profile",
        name: "Profile",
        component: Profile,
        beforeEnter: authGuard_Personnel,
      },
    ],
  },
  //Main-Menu-layout
  {
    path: "/main",
    redirect: "/main",
    component: Main,
    children: [
      {
        path: "/download",
        component: Download,
        beforeEnter: intoGuard,
      },
      {
        path: "/about",
        component: AboutNew,
        beforeEnter: intoGuard,
      },

      // {
      //   path: "/aboutNew",
      //   name: "aboutNew",
      //   component: AboutNew,
      //   beforeEnter: intoGuard,
      // },

      {
        //ความสำคัญ
        path: "/about/importance",
        name: "importance",
        component: ImporTance,
        beforeEnter: intoGuard,
      },
      {
        // วัตถุประสงค์
        path: "/about/objectivity",
        name: "objectivity",
        component: Objectivity,
        beforeEnter: intoGuard,
      },
      {
        // ปรัชญา
        path: "/about/philosophy",
        name: "philosophy",
        component: Philosophy,
        beforeEnter: intoGuard,
      },
      {
        path: "/about/plo",
        name: "plo",
        component: PLO,
        beforeEnter: intoGuard,
      },
      {
        path: "/program",
        component: Program,
        beforeEnter: intoGuard,
      },
      {
        path: "/news",
        name: "News",
        component: News,
        beforeEnter: intoGuard,
      },
      {
        path: "/newsexplain",
        name: "NewsExplain",
        component: NewsExplain,
        beforeEnter: intoGuard,
      },
      {
        path: "/album",
        name: "Album",
        component: Album,
        beforeEnter: intoGuard,
      },
      {
        path: "/albumexplain",
        name: "AlbumExplain",
        component: AlbumExplain,
        beforeEnter: intoGuard,
      },
      {
        path: "/staff",
        component: Staff,
        beforeEnter: intoGuard,
      },
      {
        path: "/teacher",
        component: Teacher,
        beforeEnter: intoGuard,
      },
      {
        path: "/contact",
        component: Contact,
        beforeEnter: intoGuard,
      },
      {
        path: "/classroom",
        component: Classroom,
        beforeEnter: intoGuard,
      },
      {
        path: "/schedule",
        component: Schedule,
        beforeEnter: intoGuard,
      },
      {
        path: "/alumnus",
        component: Alumnus,
        beforeEnter: intoGuard,
      },
    ],
  },
  //Home-layout
  {
    path: "/",
    redirect: "/home",
    component: HomeLayout,
    children: [
      {
        path: "/service/service_teacher/cvprint",
        name: "CVPrint",
        component: CVPrint,
        beforeEnter: authGuard_Personnel,
      },
      {
        path: "/home",
        name: "Home",
        component: Home,
        beforeEnter: intoGuard,
      },
      {
        path: "/",
        name: "Welcome",
        component: Welcome,
      },
      {
        path: "/qrcode",
        component: QRcode,
        beforeEnter: intoGuard,
      },
      //Error 404
      {
        path: "/:catchAll(.*)",
        component: Page404,
        meta: {
          title: "Not Found This Page",
          description: "ไม่พบหน้า",
        },
        beforeEnter: intoGuard,
      },
    ],
  },

  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Create Constant Var--------------------------------------------------------------------

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VCalendar, {});
app.use(VueSweetalert2);
app.mount("#app");
