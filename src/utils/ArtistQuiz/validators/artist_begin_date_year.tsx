import { prisma } from "~/server/db";


export async function artist_begin_date_year(artistID: number): Promise<number | null> {
    const data  = await prisma.artist.findFirst({
        where: {
          id: artistID,
        },
        select: {
          begin_date_year: true,
        },
      });

    if (data && data.begin_date_year) {
        return data.begin_date_year
    }

    return null
}