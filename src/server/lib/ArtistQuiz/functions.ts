import {
  getArtistAlbums,
  getArtistAlbumNoSecType,
  isAlbumOfficial,

} from "./data";




export async function getOfficialAlbums(artistID: number): Promise<number[]> {
  const albums = await getArtistAlbums(artistID);

  const noSecTypeAlbums = (
    await Promise.all(
      albums.map(async (album) => {
        const noSecAlbum = await getArtistAlbumNoSecType(album);
        return !noSecAlbum ? album : null;
      }),
    )
  ).filter((album): album is number => album !== null);

  const officialAlbums = (
    await Promise.all(
      noSecTypeAlbums.map(async (album) => {
        const official_album = await isAlbumOfficial(album);
        return official_album ? album : null;
      }),
    )
  ).filter((album): album is number => album !== null);

  return officialAlbums
}










