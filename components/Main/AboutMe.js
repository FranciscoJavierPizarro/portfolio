import AboutCard from "./../Cards/AboutCard"
import Graph from "./../Graph"
export default function AboutMe() {
    const info = [
        {
          title: "Estado actual",
          text: ["Actualmente estoy estudiando el 3º año en mi carrera de ingeniería informática en Unizar, concretamente la especialidad en computación.",
          "Formo parte de la asociación CodeLabZGZ, además de la escuela de CTFs.La primera es la asociación de estudiantes de ingeniería informática, la segunda es una asociación extracurricular donde aprendemos a resolver CTFs bajo la supervisión de algunos profesores."],
        },
        {
            title: "Logros",
            text: ["Mención de honor en bachiller.","Haber realizado mis primeras prácticas en empresa habiendo cursado solo la mitad de la carrera."
            ,"Haber obtenido la matrícula de honor en la asignatura de sistemas operativos en la carrera.",
            "Haber participado en el programa de altas capacidades durante 3º y 4º ESO."],
        },
        {
            title: "Soft skills",
            text: ["Habilidad para resolver problemas de forma única y eficiente.",
            "Habilidad de liderazgo y buena comunicación en lo referente a trabajar en equipo.",
            "Habilidad de aprendizaje extremadamente rápido.",
            "Cualificado para trabajar sin problemas en inglés.(Cambridge B2)."],
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
                    Tecnologías favoritas:
                </p>
                <ul class="list-disc ml-4">
                    <li>
                        Python: Para scripting y ciberseguridad.
                    </li>
                    <li>
                        NextJS: Para desarrollo de web o de servidores.
                    </li>
                    <li>
                        C++: Para aplicaciones de alto rendimiento y control preciso de bajo nivel.
                    </li>
                </ul>
            </div>
            {/* <div class="w-2/3">
                <Graph/>
            </div> */}
        </div>
        </>
    )
}