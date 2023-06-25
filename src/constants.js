import { id } from "@/functions";
import { HomeIcon } from "@heroicons/vue/24/outline";
import { TrophyIcon } from "@heroicons/vue/24/outline";
import { CalendarIcon } from "@heroicons/vue/24/outline";
import { ArrowTrendingUpIcon } from "@heroicons/vue/24/outline";
import { EyeIcon } from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { ArrowPathRoundedSquareIcon } from "@heroicons/vue/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/outline";
import { FilmIcon } from "@heroicons/vue/24/outline";

export const BUTTON_TYPE_DEFAULT = "default";
export const BUTTON_TYPE_PRIMARY = "primary";
export const BUTTON_TYPE_DANGER = "danger";
export const BUTTON_TYPE_SUCCESS = "success";
export const BUTTON_TYPE_FAVORITE = "favorite";

export const menuItems = [
  {
    id: id(),
    name: "Домашня",
    icon: HomeIcon,
    path: "/",
  },
  {
    id: id(),
    name: "Зараз дивляться",
    icon: EyeIcon,
    path: "/now-watching",
  },
  {
    id: id(),
    name: "Найбільший рейтинг",
    icon: TrophyIcon,
    path: "/top-rated",
  },
  {
    id: id(),
    name: "Популярні",
    icon: ArrowTrendingUpIcon,
    path: "/popular",
  },
  {
    id: id(),
    name: "Скоро з'являться",
    icon: CalendarIcon,
    path: "/coming-soon",
  },
  {
    id: id(),
    name: "Категорії",
    icon: FilmIcon,
    path: "/genres",
  },
];
export const libraryItems = [
  {
    id: id(),
    name: "Улюблені",
    icon: HeartIcon,
    path: "/favorites",
  },
];
export const interactiveItems = [
  {
    id: id(),
    name: "Рандомайзер",
    icon: ArrowPathRoundedSquareIcon,
    path: "/random",
  },
  {
    id: id(),
    name: "Нескінченні фільми",
    icon: ChevronDoubleDownIcon,
    path: "/infinity",
  },
];

export const SORT_PARAMS = [
  {
    id: id(),
    name: "Популярність (спад.)",
    value: "popularity.desc",
  },
  {
    id: id(),
    name: "Популярність (зрос.)",
    value: "popularity.asc",
  },
  {
    id: id(),
    name: "Прибуток (спад.)",
    value: "revenue.desc",
  },
  {
    id: id(),
    name: "Прибуток (зрос.)",
    value: "revenue.asc",
  },
  {
    id: id(),
    name: "Дата релізу (спад.)",
    value: "primary_release_date.desc",
  },
  {
    id: id(),
    name: "Дата релізу (зрос.)",
    value: "primary_release_date.asc",
    icon: ArrowTrendingUpIcon,
  },
  {
    id: id(),
    name: "Рейтинг (спад.)",
    value: "vote_average.desc",
  },
  {
    id: id(),
    name: "Рейтинг (зрос.)",
    value: "vote_average.asc",
  },
  {
    id: id(),
    name: "К-сть відгуків (спад.)",
    value: "vote_count.desc",
  },
  {
    id: id(),
    name: "К-сть відгуків (зрос.)",
    value: "vote_count.asc",
  },
];
