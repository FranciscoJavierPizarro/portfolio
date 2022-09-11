import Image from "next/image"
import jav from "/public/javier.jpg";
export default function Imagen() {
    return (
        <>
        <div className="mt-2 sm:mt-0 w-12 h-12 sm:w-24 sm:h-24 relative">
         <Image src={jav} layout="responsive" className="object-contain" alt="Javier Pizarro"/>
        </div> 
        </>
    )
}