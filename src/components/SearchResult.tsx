
import  Flag  from 'react-flagkit'

export interface SearchResultsProps {
  artistID: number;
  country: string;
  description: string;
  imageURL: string;
  artistName: string
}

export function SearchResult(props: SearchResultsProps) {
    let imageUrl = props.imageURL;
    if (!props.imageURL) {
        imageUrl="/default.png"
    }
  return (
    <div className="relative h-[322px] w-[640px] bg-cover"
        style={{backgroundImage: `url(${imageUrl})`}}>
        <p className="absolute h-[3.25rem]  w-[25rem] top-[14rem] right-[16.31rem] font-metropolis text-[4rem] text-white
        text-center font-black leading-normal ">{props.artistName}</p>
        <Flag country={props.country} className='h-[4.1875rem] w-[4.1875rem]
        absolute top-[15rem] right-[14.75rem]' />

    </div>
  );
}
