import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import NowWatchingView from "@/views/NowWatchingView.vue";
import TopRatedView from "@/views/TopRatedView.vue";
import PopularView from "@/views/PopularView.vue";
import ComingSoonView from "@/views/ComingSoonView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import SingleView from "@/views/SingleView.vue";
import SimilarView from "@/views/SimilarView.vue";
import RandomMovieView from "@/views/RandomMovieView.vue";
import InfinityMoviesView from "@/views/InfinityMoviesView.vue";
import GenresView from "@/views/GenresView.vue";
import MoviesByGenresView from "@/views/MoviesByGenresView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

export const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "Home",
      path: "/conquer-cinema/",
      component: HomeView,
    },
    {
      name: "Now Watching",
      path: "/conquer-cinema/now-watching/:page?",
      component: NowWatchingView,
    },
    {
      name: "Top Rated",
      path: "/conquer-cinema/top-rated",
      component: TopRatedView,
    },
    {
      name: "Popular",
      path: "/conquer-cinema/popular",
      component: PopularView,
    },
    {
      name: "Coming Soon",
      path: "/conquer-cinema/coming-soon",
      component: ComingSoonView,
    },
    {
      name: "Favorites",
      path: "/conquer-cinema/favorites",
      component: FavoritesView,
    },
    {
      name: "Similar",
      path: "/conquer-cinema/similar/:id",
      component: SimilarView,
    },
    {
      name: "NotFound",
      path: "/conquer-cinema/:pathMatch(.*)*",
      component: NotFoundView,
    },
    {
      name: "Random",
      path: "/conquer-cinema/random",
      component: RandomMovieView,
    },
    {
      name: "Infinity",
      path: "/conquer-cinema/infinity",
      component: InfinityMoviesView,
    },
    {
      name: "Genres",
      path: "/conquer-cinema/genres",
      component: GenresView,
    },
    {
      name: "MoviesByGenre",
      path: "/conquer-cinema/genres/:id",
      component: MoviesByGenresView,
    },
    {
      name: "Current",
      path: "/conquer-cinema/cur/:id",
      component: SingleView,
    },
  ],
});

router.beforeEach(() => {
  window.scrollTo({ top: 0 });
});
