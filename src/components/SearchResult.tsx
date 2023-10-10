
export interface SearchResultsProps {
  artistID: number;
  country: string;
  description: string;
  imageURL: string;
}

export function SearchResult(props: SearchResultsProps) {
    let imageUrl = props.imageURL;
    if (!props.imageURL) {
        imageUrl="/default.png"
    }
  return (
    <div className="h-[322px] w-[640px] bg-cover"
        style={{backgroundImage: `url(${imageUrl})`}}>
    </div>
  );
}
