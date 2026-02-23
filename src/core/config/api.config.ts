import { environment } from "../../environments/environments"

export const api_routes = {
    getMoviePopular: {
        baseUrl: environment.apiBaseUrl + `/movie/popular` 
    }
}