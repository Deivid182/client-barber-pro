import { createRouter, createWebHistory } from 'vue-router';
import ReservationsLayout from "../layouts/reservations-layout.vue";
import HomeView from '../views/home-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/reservations",
      name: "reservations",
      component: ReservationsLayout,
      children: [
        {
          path: "new",
          component: () => import("../layouts/new-reservation-layout.vue"),
          children: [
            {
              path: "",
              name: "new",
              component: () => import("../views/services-view.vue")
            },
            {
              path: "details",
              name: "details",
              component: () => import("../views/reservation-details-view.vue")
            },
          ]
        }
      ]
    }
  ]
})

export default router
