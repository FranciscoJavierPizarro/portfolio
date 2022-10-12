import { techs, tools, databases } from "../../data/techs"
import TechCard from "../Cards/TechCard"

export default function Tecnologias() {
    const tolist = tools.map((item, idx) => (   
        <TechCard
        key={idx}
        title = {item.name}
        img = {item.img}
        link = {item.link}
        />
    ))
    const telist = techs.map((item, idx) => (   
        <TechCard
        key={idx}
        title = {item.name}
        img = {item.img}
        link = {item.link}
        />
    ))
    const dblist = databases.map((item, idx) => (   
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
                <p className="font-extrabold">
                    Development tools:
                </p>
            </div>
            <div className="flex flex-wrap gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-12 content-center">
                {tolist}
            </div>
            <div className="sm:mt-4">
                <p className="font-extrabold">
                    Languages:
                </p>
            </div>
            <div className="flex flex-wrap gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-12 content-center">
                {telist}
            </div>
            <div className="sm:mt-4">
                <p className="font-extrabold">
                    Databases:
                </p>
            </div>
            <div className="flex flex-wrap gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-12 content-center">
                {dblist}
            </div>
        </div>
        </>
    )
}