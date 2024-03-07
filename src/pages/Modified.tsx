import Image from "next/image"

export default function Test() {
    return (
        <>
        <div className="bg-black">
       <Image src="/quiz_bg.png" alt="background image" fill={true}/> 
       </div>
       </>
    )
}