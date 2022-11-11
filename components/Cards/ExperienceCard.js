import Link from "next/link";
import Image from "next/image";
export default function ExperienceCard({title,text,link,img}) {
    const texts = text.map((item, idx) => (
        item != "" && <p key={idx}>{item} </p> || <br/>
    ))

    return (
        <>
        {link != "" &&
        <Link href={link}>
            <div class="mt-8 bg-lightbg w-full lg:w-2/3 min-h-40 p-4 hover:cursor-pointer hover:text-green">
                <p class="text-xl w-full font-semibold capitalize pb-2 ">
                    {title}
                </p>
                <div className="py-4">{texts}</div>
                <div className="w-36 h-24 relative mx-auto rounded-xl pb-2">
                    <Image src={img} width={36} height={24} layout="responsive" className="object-contain" alt={title}/>
                </div>
            </div>
        </Link>}
        {link == "" &&
        
        <div class="mt-8 bg-lightbg w-full lg:w-2/3 min-h-40 p-4 hover:cursor-pointer hover:text-green">
            <p class="text-xl w-full font-semibold capitalize pb-2 ">
                {title}
            </p>
            <div className="py-4">{texts}</div>
            
        </div>
        }
        </>
    )
}