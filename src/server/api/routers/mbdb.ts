import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";

export interface CoverArt {
  images?: ImagesEntity[] | null;
  release: string;
}
export interface ImagesEntity {
  approved: boolean;
  back: boolean;
  comment: string;
  edit: number;
  front: boolean;
  id: number;
  image: string;
  thumbnails: Thumbnails;
  types?: string[] | null;
}
export interface Thumbnails {
  250: string;
  500: string;
  1200: string;
  large: string;
  small: string;
}

export const getArtistData = createTRPCRouter({
  getArtistData: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artistData = await ctx.prisma.artist.findFirst({
        where: {
          name: input,
        },
        select: {
          begin_date_year: true,
        },
      });

      if (artistData?.begin_date_year) {
        return artistData.begin_date_year;
      }

      return null;
    }),

  getArtistRandomCoverArt: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artistData = await ctx.prisma.artist.findFirst({
        where: {
          name: input,
        },
      });
      if (artistData && artistData.id) {
        const artistReleases = await ctx.prisma.release.findMany({
          where: {
            artist_credit: artistData.id,
          },
        });
        const shuffledReleases = [...artistReleases].sort(
          () => Math.random() - 0.5,
        );
        let coverArt: string | null = null;

        for (const release of shuffledReleases) {
          const releaseId = release.gid;
          const getCoverURL =
            "https://coverartarchive.org/release/" + releaseId;

          try {
            const coverUrlResponse = await axios.get<CoverArt>(getCoverURL);
            const images = coverUrlResponse.data.images;
            if (images) {
              const firstImageEntity = images[0];
              if (firstImageEntity && firstImageEntity.image) {
                coverArt = firstImageEntity.image;
                break; // Exit the loop as we found a valid cover art
              }
            }
          } catch (error) {
            console.warn(
              "Failed to fetch cover art for release ID:",
              releaseId,
            );
            // Continue to the next iteration
          }
        }

        return coverArt;
      }
    }),
  getAllArtists: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artist = await ctx.prisma.artist.findMany({
        where: {
          name: {
            startsWith: input,
          },
        },
        select: {
          name: true,
        },
        distinct: ['name'],
        take: 5
      });
      if (artist) {
        return artist;
      }
      return null;
    }),
});