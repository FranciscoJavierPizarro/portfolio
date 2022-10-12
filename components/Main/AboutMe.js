import AboutCard from "./../Cards/AboutCard"
import Graph from "./../Graph"
export default function AboutMe() {
    const info = [
        {
          title: "Current status",
          text: ["Currently i am studing the 3º year of my Computer science degree in Unizar",
          "I belong to the CodeLabZGZ association, in addition to the CTF school.The first one is the computer science degree students association, the second one is a extracurricilar asocciation where we learn to solve CTFs under the supervision of some teachers"],
        },
        {
            title: "Achievements",
            text: ["Honors mention in bachiller.","Passed with honors operative systems subject in college","Participated in high capacieties program during 3º and 4º ESO"],
        },
        {
            title: "Soft skills",
            text: ["Ability to solve problems in unique and optimal ways.",
            "Leadership ability and good communication skills in terms of working in teams.",
            "Ability to learn very quickly.",
            "Qualified to be able to work in English.(Cambridge B2)."],
        },
    ]
    
    const list = info.map((item, idx) => (
        <AboutCard
        key={idx}
        title = {item.title}
        text = {item.text}
        />
    ))

    return (
        <>
        <div class="w-full mr-8 lg:mr-30 xl:mr-60 text-white ml-8">
            <p class="bold text-2xl">Francisco Javier Pizarro Martínez</p>
            {list}
            <div class="mt-8 bg-lightbg w-full lg:w-2/3 h-40 p-4">
                <p class="text-xl font-semibold capitalize pb-2">
                    Favorite technologies:
                </p>
                <ul class="list-disc ml-4">
                    <li>
                        Python: For scripting and cybersec.
                    </li>
                    <li>
                        NextJS: For web/server development.
                    </li>
                    <li>
                        C++: For apps with high performance and low level control.
                    </li>
                </ul>
            </div>
            <div class="w-2/3">
                {/* <Graph/> */}
            </div>
        </div>
        </>
    )
}