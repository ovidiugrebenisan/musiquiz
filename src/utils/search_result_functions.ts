import axios from "axios"
import { randomNumber } from "./helper_functions";

interface MusicResponse {
    name: string;
    mbid_id: string;
    musiclogo: Array<Image>;
    albums: { [key: string]: Album };
    artistthumb: Array<Image>;
    artistbackground: Array<Image>;
    hdmusiclogo: Array<Image>;
    musicbanner: Array<Image>;
}

interface Image {
    id: string;
    url: string;
    likes: string;
    disc?: string;
    size?: string;
}

interface Album {
    albumcover: Array<Image>;
    cdart: Array<CDArt>;
}

interface CDArt extends Image {
    disc: string;
    size: string;
}




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