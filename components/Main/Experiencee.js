import ExperienceCard from "./../Cards/ExperienceCard"
export default function Experiencee() {
    const experience2022 = [
        {
            title: "PRÁCTICAS DE VERANO EN NOLOGIN",
            text: [`Durante este verano entre el 1º de julio y el 12º de agosto estuve trabajando en Nologin una empresa en parte dedicada a la ciberseguridad, durante estas prácticas aprendí muchas de cosas desde aspectos del día a día tales como el funcionamiento real del mundo laboral usando herramientas de comunicación y organización del flujo de trabajo hasta software y hardware muy especialicado y bastante puntero en materia de ciberseguridad.`,"",
            `Algunas de mis tareas eran el desarrollo de código para la implementación de nuevas herramientas en la empresa, también la revisión de reportes automáticos en busca de comportamientos extraños. Durante este periodo aprendí como funciona realmente git así como a administrar y configurar algunos sistemas realmente especiales entre los cuales estan firewalls profesionales y otros tipos de sistemas inusuales.`,"",
            `Esta experiencia ha tenido una gran relevancia a la hora de elegir los ámbitos de la informática a los que me quiero dedicar profesionalmente`],
            link: "https://www.nologin.es/es/",
            img:  "/nlg.png"
        },
    ]

    const experience2023 = [
        {
            title: "DESARROLLO TFG EN ????",
            text: [`Actualmente estoy buscando de manera activa las distintas opciones tanto a nivel de empresa como de universidad para desarrollar mi trabajo fin de grado, durante el verano de este año.`,"",
            "Dicho trabajo se constituye de 300 horas de trabajo, a la hora de elegir entre las distintas opciones tendré en cuenta factores muy relevantes como el tema sobre el cual realizar el TFG, la experiencia de la opción elegida con TFGs anteriores, así como las condiciones ofrecidas para desarrollar el mismo."],
            link: "",
            img:  ""
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

    const list2023 = experience2023.map((item, idx) => (
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
            <h4 className="font-extrabold mt-8">
                2023
            </h4>
            {list2023}
            
        </div>
        </>
    )
}