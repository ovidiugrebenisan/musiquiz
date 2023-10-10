
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { SearchResult } from "~/components/SearchResult";

interface SearchResultType {
    artistID: number;
    imageURL: string;
    comment: string;
    countryCode: string;
}
 
export default function SearchResults() {
    const router = useRouter();
    const { searchedArtist }  = router.query;
    if (!searchedArtist || Array.isArray(searchedArtist)) {
        return <div>Loading...</div>
    }

    const searchResultsData = api.mbdb.getSearchResultData.useQuery(searchedArtist, {
        refetchOnWindowFocus: false,
    })

    if (!searchResultsData.isSuccess) {
        return <div>Loading data...</div>
    }
    console.log(searchResultsData.data)
    const responseData = searchResultsData.data as SearchResultType[]

    return (
        <>
        <p className="absolute left-1/2 top-[15rem] h-[110px] w-[1160px] -translate-x-1/2 -translate-y-1/2
        text-center font-metropolis text-[4rem] font-black leading-none text-white">Here is what we found based on your search:</p>

        <div className="absolute top-[25rem] left-[30rem]  right-[30rem]
         flex flex-wrap justify-center gap-y-20 gap-x-20">
            {responseData.map((result) => (
                <SearchResult 
                    key={result.artistID} 
                    artistID={result.artistID}
                    country={result.countryCode}  // Adjust prop name as needed
                    description={result.comment}  // Adjust prop name as needed
                    imageURL={result.imageURL}
                />
            ))}
        </div>
        </>
    )
    
}