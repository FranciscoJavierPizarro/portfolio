import Link from "next/link"
export default function RssButton({content,url}) {
    return (
        <>
        <div className="mx-auto my-auto pt-4 hover:cursor-pointer text-white hover:text-green">
         <Link href={url} className="h-16 w-16">
            {content}
         </Link>
        </div> 
        </>
    )
}