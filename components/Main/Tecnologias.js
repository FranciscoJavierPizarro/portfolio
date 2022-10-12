import { techs } from "../../data/techs"
import TechCard from "../Cards/TechCard"

export default function Tecnologias() {

    const list = techs.map((item, idx) => (   
        <TechCard
        key={idx}
        title = {item.name}
        img = {item.img}
        link = {item.link}
        />
    ))
    return (
        <>
        <div className="w-full mr-8 lg:mr-30 xl:mr-60 text-white ml-16">
            <div className="sm:mt-4">
                <p className="">
                    Tecnologias que empleo:
                </p>
            </div>
            <div className="flex flex-wrap gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-12 content-center">
                {list}

            </div>
        </div>
        </>
    )
}