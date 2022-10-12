import EventCard from "./../Cards/EventCard"
export default function Events() {
    const events2022 = [
        {
            title: "Locked Shields",
            text: "Ejercicio real de ciberseguridad organizado por la OTAN, fue algo único ya que en la ronda civil participamos 12 equipos en toda europa, siendo el nuestro el único que representante de España.Este ejercicio se caracteriza por ser el mas realista de su tipo.En el, nuestro equipo desempeñaba la labor del blue team en una red ya comprometida.",
            link: "https://ccdcoe.org/exercises/locked-shields/",
        },
        {
            title: "Google Hashcode",
            text: "Hackathon anual organizado por google, fue una experiencia muy divertida de trabajo en equipo.En esta, tuvimos que afrontar un problema de optimización.",
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
            text: "Liga a nivel nacional de debate preuniversitario.Para poder participar, tuve que mejorar mis capacidades comunicativas, así como el trabajo en equipo y la improvisación, entre otras cosas.",
            link: "https://www.ligaversus.es/",
        },]
    
    const events2015 = [
        {
            title: "Arduino Day ZGZ",
            text: "Evento anual desarrollado en Zaragoza, en el hubo muchas charlas de distintos temas relacionados con Arduino.Este evento marco en mi la motivación para ser ingeniero informático.",
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