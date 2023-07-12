import { api } from "~/utils/api";

export default function Home() {
  const query = api.mbdb.getArtistAlbum.useQuery("Eddie Money");

  return (
    <div>
      { query.data?.name }
      { query.data?.begin_date_year}

    </div>
  );
}
