import EventCard from "./../Cards/EventCard"
export default function Events() {
    const events2022 = [
        {
            title: "Locked Shields",
            text: "Ejercicio real de ciberseguridad organizado por la OTAN, fue único debido a que en la ronda civil solo participamos 12 equipos en toda Europa, siendo el nuestro el único representante de España, este ejercicio es conocido por ser el más realista de su tipo. Nuestro equipo desempeñaba el papel de BlueTeam en la red de un país entero ya comprometida, con la labor de preparar durante 24 horas la defensa y llevarla acabo durante otras 24 horas durante las cuales la red es atacada.",
            link: "https://ccdcoe.org/exercises/locked-shields/",
        },
        {
            title: "Google Hashcode",
            text: "Hackathon anual organizado por Google, fue una experiencia divertida de trabajo en equipo, en la que tuvimos que afrontar un problema de optimización dinámica en el cual cada decisión afectaba al estado del problema para las siguientes. Para resolver el problema empleamos el lenguaje python con una aproximación de algoritmo voraz.",
            link: "https://codingcompetitions.withgoogle.com/hashcode",
        },
        {
            title: "Hackforgood",
            text: "Hackathon anual en el cual se plantean soluciones a problemas actuales, en este tuvimos que plantear una solución al problema del consumo energético en la vivienda y defenderla en un formato elevator pitch. Fuimos premiados a nivel de la universidad de Zaragoza.",
            link: "https://hackforgood.net/",
        },

    ]

    const events2019 = [
        {
            title: "Liga versus",
            text: "Liga nacional de debate preuniversiatrio. Para poder participar, tuve que practicar mucho y mejorar mis habilidades en comunicación, así como las de trabajo en equipo y la improvisación. Fue una experiencia muy enriquecedora sobre todo para mis soft skills como líder de equipo y orador entre otras cosas. Dichas softskills me han resultados muy útiles desde entonces",
            link: "https://www.ligaversus.es/",
        },]
    
    const events2015 = [
        {
            title: "Arduino Day ZGZ",
            text: "Evento anual llevado a cabo en Zaragoza, en este evento había muchas charlas relacionadas con Arduino y la informática en general, este evento fue mi motivación para convertirme en ingeniero informático y trabajar en este campo, gracias a este evento también aumente mis conocimientos en programación básica y redes.",
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