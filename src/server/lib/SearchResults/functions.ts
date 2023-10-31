import axios from "axios"
import { randomNumber } from "~/utils/helper_functions";
import type { MusicResponse } from "./definitions";

export async function getArtistBackgroundImageURL(artistMBID: string): Promise<string | null> {
    try {
        const response = await axios.get<MusicResponse>(
            `https://webservice.fanart.tv/v3/music/${artistMBID}?api_key=${process.env.FANART_API_KEY}`
        );

        // Validate if 'artistbackground' property exists and is non-empty
        if (response.data.artistbackground) {
            // Example: Return the URL of the first background image
            const upperLimit = response.data.artistbackground.length
            const randomPicture = response.data.artistbackground[randomNumber(upperLimit)]?.url
            return randomPicture!
        } else {
            console.log("No artist background found");
            return null;
        }
    } catch (error) {
        console.error("Error fetching artist background", error);
        return null;
    }
}