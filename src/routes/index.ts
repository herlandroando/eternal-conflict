import { createMemoryHistory, createRouter } from "vue-router";
import Home from "@/pages/home/Index.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
