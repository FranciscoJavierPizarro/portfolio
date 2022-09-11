export default function AboutCard({title,text}) {
    const list = text.map((item, idx) => (
        <p key={idx}>
            {item}
        </p>
    ))
    return (
        <>
        <div class="mt-8 bg-lightbg w-2/3 h-40 p-4">
            <p class="text-xl font-semibold capitalize pb-2">
                {title}
            </p>
            {list}
        </div>
        </>
    )
}