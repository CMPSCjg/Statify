import { Injectable } from "@angular/core";
import * as axios from "axios";

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    // constructor(private readonly axios: Axios) {}

    async getTopArtists(accessToken: string) {
        const headers = {
            "Authorization": "Bearer " + accessToken
        }
        // const topArtistsResponse = await axios.default.get("https://api.spotify.com/v1/me/top/artists", { headers }).then((data) => {
        //     debugger
        //     console.log('RESPONSE')
        //     console.log({...data})
        // })
        const topArtists = await axios.default.get("https://api.spotify.com/v1/me/top/artists", { headers })
            .then((response) => response.data.items)
        
        return Promise.resolve(topArtists)
    }
}