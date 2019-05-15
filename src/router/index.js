import Vue from "vue";
import Router from "vue-router";

import MainPage from "../pages/MainPage";
import Route1SlotA from "../components/route-1-slot-a";
import Route1SlotB from "../components/route-1-slot-b";
import Route2SlotA from "../components/route-2-slot-a";
import Route2SlotB from "../components/route-2-slot-b";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: MainPage,
      name: "mainPage",
      children: [
        {
          path: "route-1/:id",
          name: "route-1",
          components: {
            a: Route1SlotA,
            b: Route1SlotB
          },
          props: {
            a: true,
            b: true
          }
        },
        {
          path: "route-2",
          name: "route-2",
          components: {
            a: Route2SlotA,
            b: Route2SlotB
          }
        }
      ]
    }
  ]
});
