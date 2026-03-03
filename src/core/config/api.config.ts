import { environment } from "../../environments/environments"

export const api_routes = {
    getMoviePopular(): string {
        return `${environment.apiBaseUrl}/movie/popular` 
    },
    getUpcomingMovie(): string {
        return `${environment.apiBaseUrl}/movie/upcoming` 
        
    },
    getByDate(date: string) {
        return  `${environment.apiBaseUrl}/discover/movie?include_adult=true&language=pt-BR&page=1&sort_by=vote_count.desc&year=${date}` 
    }
}