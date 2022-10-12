import ExperienceCard from "./../Cards/ExperienceCard"
export default function Experiencee() {
    const experience2022 = [
        {
            title: "SUMMER INTERNSHIP NOLOGIN",
            text: [`During this summer between the 1º of july and the 12º of august I had been working in Nologin a cybersecurity bunisness, along this internship I had learn a lot of things from everyday basics like how the real world works using platforms like Jira and Rocketchat and how is the everyday workflow to really especiallited software and hardware like usign a EDR, also siemens and orchestrator.`,"",
            `Some of my tasks were developing code in order to improve or desing new tools for the company, also checking scheduled reports to find if there was something strange. Along the way I learned how git really works and how to administrate and configure some really special systems like professional firewalls and other kinds of unusual systems.`,"",
            `In words of my mentor after the internship ended: “You are very good rushing the core of the task and taking a creative approach to get around it"`],
            link: "https://www.nologin.es/es/",
            img:  "/nlg.png"
        },
    ]

    const list2022 = experience2022.map((item, idx) => (
        <ExperienceCard
        key={idx}
        title = {item.title}
        text = {item.text}
        link = {item.link}
        img = {item.img}
        />
    ))

    return (
        <>
        <div className="w-full mr-8 lg:mr-30 xl:mr-60 text-white ml-16">
            <h4 className="font-extrabold">
                2022
            </h4>
            {list2022}
            
            
        </div>
        </>
    )
}