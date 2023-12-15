import axios from "axios"
import { randomNumber } from "~/utils/helper_functions";
import type { MusicResponse } from "../definitions";


export async function getArtistBackgroundImageURL(artistMBID: string): Promise<string | null> {
    try {
        const response = await axios.get<MusicResponse>(
            `https://webservice.fanart.tv/v3/music/${artistMBID}?api_key=${process.env.FANART_API_KEY}`
        );

        // Validate if 'artistbackground' property exists and is non-empty
        if (response.data.artistbackground) {
            // Example: Return the URL of the first background image
            const upperLimit = response.data.artistbackground.length
            const randomPicture = response.data.artistbackground[randomNumber(upperLimit)]?.url as string
            return randomPicture
        } else {
            console.log("No artist background found");
            return null;
        }
    } catch (error) {
        console.error("Error fetching artist background", error);
        return null;
    }
}

export async function getArtistLogo(artistMBID: string): Promise<string | null > {
    try {
        const response = await axios.get<MusicResponse>(
            `https://webservice.fanart.tv/v3/music/${artistMBID}?api_key=${process.env.FANART_API_KEY}`
        );

        // Validate if 'artistbackground' property exists and is non-empty
        if (response.data.hdmusiclogo) {
            // Example: Return the URL of the first background image
            const upperLimit = response.data.hdmusiclogo.length
            const randomLogo = response.data.hdmusiclogo[randomNumber(upperLimit)]?.url
            return randomLogo!
        } else if (response.data.musiclogo) {
            const upperLimit = response.data.musiclogo.length
            const randomLogo = response.data.musiclogo[randomNumber(upperLimit)]?.url
            return randomLogo!
        } else {
            console.log("No artist background logo");
            return null;
        }
    } catch (error) {
        console.error("Error fetching artist background", error);
        return null;
    }
}
