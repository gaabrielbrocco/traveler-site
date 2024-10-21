/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import RecuperarSenha from "@/components/recuperarSenha.vue";
import LandingPage from "@/components/landingPage.vue";

const routes = [
  { path: "/", name: "landingPage", component: LandingPage },
  {
    path: "/recuperar-senha",
    name: "recuperarSenha",
    component: RecuperarSenha,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
