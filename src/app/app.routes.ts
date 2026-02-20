import { Routes } from "@angular/router";
import { MovieDetails } from "./components/movie-details/movie-details";
import { HomePage } from "./pages/home-page/home-page";


export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'movie/:id',
        component: MovieDetails
    }
]