import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import PassRecovery from "../views/PassRecovery";
import ResetMessage from "../views/ResetMessage";
import ActivateMessage from "../views/ActivateMessage";
import ResetPassword from "../views/ResetPassword";
import CompleteAcc from "../views/CompleteAcc";
import Profile from "../views/Profile";
import ProfileMore from "../views/ProfileMore";
import Search from '../views/Search'
import SearchMap from '../views/SearchMap'
import AdminZone from '../views/AdminZone'
import EditProfile from '../views/EditProfile'
import UserProfile from '../views/UserProfile'

const routes = [
  {
    path: "/signUp",
    name: "Sign up",
    component: SignUp,
  },
  {
    path: "/user/profile",
    name: "User Profile",
    component: UserProfile,
  },
  {
    path: '/editProfile',
    name: "Edit Profile",
    component: EditProfile
  },
  {
    path: "/adminZone",
    name: "Admin Zone",
    component: AdminZone,
  },
  {
    path: "/search-map",
    name: "Search Map",
    component: SearchMap
  },
  {
    path: "/signIn",
    name: "Sign in",
    component: SignIn,
  },
  {
    path: "/password-recovery",
    name: "Password Recovery",
    component: PassRecovery,
  },
  {
    path: "/reset-message",
    name: "Reset Message",
    component: ResetMessage,
  },
  {
    path: "/activate-message",
    name: "Activate Message",
    component: ActivateMessage,
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    component: ResetPassword,
  },
  {
    path: "/complete-account",
    name: "Complete account",
    component: CompleteAcc,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/profileMore",
    name: "ProfileMore",
    component: ProfileMore,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
