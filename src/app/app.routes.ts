import { Routes } from "@angular/router";
import { HomePage } from "./pages/home-page/home-page";
import { MoviePage } from "./pages/movie-page/movie-page";


export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        pathMatch: 'full'
    },
    {
        path: 'movie/:id',
        component: MoviePage,
        pathMatch: 'full'
    }
]