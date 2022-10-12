import EventCard from "./../Cards/EventCard"
export default function Events() {
    const events2022 = [
        {
            title: "Locked Shields",
            text: "Real cybersecurity exercise organized by NATO, it was unique because in the civilian round we participated 12 teams across Europe, being ours the only representative of Spain, this exercise is characterized by being the most realistic of its kind. Our team played the role of the blue team in a network of an entire country already compromised, which would later be attacked again.",
            link: "https://ccdcoe.org/exercises/locked-shields/",
        },
        {
            title: "Google Hashcode",
            text: "Annual hackathon organized by google, it was a very fun teamwork experience, in which we had to face a dynamic optimization problem in which each decision made changed the values of the problem. In order to solve the problem we used the programming language python.",
            link: "https://codingcompetitions.withgoogle.com/hashcode",
        },
        {
            title: "Hackforgood",
            text: "Hackathon anual.",
            link: "https://hackforgood.net/",
        },

    ]

    const events2019 = [
        {
            title: "Liga versus",
            text: "National pre-college debate league. In order to participate, I had to practice a lot and improve my communication skills, as well as teamwork and improvisation. It was a very enriching experience for my soft skills as a debater and team leader among others things.",
            link: "https://www.ligaversus.es/",
        },]
    
    const events2015 = [
        {
            title: "Arduino Day ZGZ",
            text: "Annual event held in Zaragoza, in this event there were many talks on different topics related to Arduino and computing in general, this event was the motivation for me to become a computer science engineer and work in this field, thanks to this event I also expanded my knowledge in basic programming and networks.",
            link: "https://arduinodayzgz.es/evento_2015.html",
        },]
    
    const list2022 = events2022.map((item, idx) => (
        <EventCard
        key={idx}
        title = {item.title}
        text = {item.text}
        link = {item.link}
        />
    ))

    const list2019 = events2019.map((item, idx) => (
        <EventCard
        key={idx}
        title = {item.title}
        text = {item.text}
        link = {item.link}
        />
    ))

    const list2015 = events2015.map((item, idx) => (
        <EventCard
        key={idx}
        title = {item.title}
        text = {item.text}
        link = {item.link}
        />
    ))

    return (
        <>
        <div class="w-full mr-8 lg:mr-30 xl:mr-60 text-white ml-16">
            <h4 className="font-extrabold">
                2022
            </h4>
            {list2022}
            <h4 className="font-extrabold mt-8">
                2019
            </h4>
            {list2019}
            <h4 className="font-extrabold mt-8">
                2015
            </h4>
            {list2015}
            
        </div>
        </>
    )
}