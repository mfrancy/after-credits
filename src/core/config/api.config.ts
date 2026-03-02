import { environment } from "../../environments/environments"

export const api_routes = {
    getMoviePopular: {
        baseUrl: environment.apiBaseUrl + `/movie/popular` 
    },
    getUpcomingMovie: {
        baseUrl: environment.apiBaseUrl + `/movie/upcoming` 
    },
    getbyDate(date: string) {
        return {
            baseUrl: environment.apiBaseUrl + `/movie/upcoming` 
        }
    }
}