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
      path: "/",
      component: HomeView,
    },
    {
      name: "Now Watching",
      path: "/now-watching/:page?",
      component: NowWatchingView,
    },
    {
      name: "Top Rated",
      path: "/top-rated",
      component: TopRatedView,
    },
    {
      name: "Popular",
      path: "/popular",
      component: PopularView,
    },
    {
      name: "Coming Soon",
      path: "/coming-soon",
      component: ComingSoonView,
    },
    {
      name: "Favorites",
      path: "/favorites",
      component: FavoritesView,
    },
    {
      name: "Similar",
      path: "/similar/:id",
      component: SimilarView,
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: NotFoundView,
    },
    {
      name: "Random",
      path: "/random",
      component: RandomMovieView,
    },
    {
      name: "Infinity",
      path: "/infinity",
      component: InfinityMoviesView,
    },
    {
      name: "Genres",
      path: "/genres",
      component: GenresView,
    },
    {
      name: "MoviesByGenre",
      path: "/genres/:id",
      component: MoviesByGenresView,
    },
    {
      name: "Current",
      path: "/cur/:id",
      component: SingleView,
    },
  ],
});

router.beforeEach(() => {
  window.scrollTo({ top: 0 });
});
