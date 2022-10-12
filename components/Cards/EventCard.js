import Link from "next/link";

export default function EventsCard({title,text,link}) {
    
    return (
        <>
        <Link href={link}>
            <div class="mt-8 bg-lightbg w-full lg:w-2/3 min-h-40 p-4 hover:cursor-pointer hover:text-green">
                <p class="text-xl font-semibold capitalize pb-2 ">
                    {title}
                </p>
                <p>{text}</p>
            </div>
        </Link>
        </>
    )
}