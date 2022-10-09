import Link from "next/link";
import Image from "next/image";
export default function TechCard({title,img,link}) {
    
    return (
        <>
        <Link href={link}>
            <div class="mt-8 bg-lightbg w-28 h-32 p-4 hover:cursor-pointer hover:text-green">
                <div className="flex flex-col items-center justify-between w-full h-full hover:shadow cursor-pointer">
                    <div className="w-12 h-12 relative rounded-xl">
                        <Image src={img} width={12} height={12} layout="responsive" className="object-contain" alt={title}/>
                    </div>
                    <br/>
                    <div className="flex flex-col pt-4 w-full h-full">
                        <p className="font-semibold capitalize truncate text-sm w-full text-center">
                        {title}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}