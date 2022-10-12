import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBarButton(props) {
    const router = useRouter()
    var styleDiv = "h-full w-full lg:w-1/6 pt-4 pl-2"
    styleDiv += () => {router.pathname === props.link ? "bg-blueNavAccent" : "bg-blueNavDark"}
    return (
      <>
        <div className={styleDiv}>
            <p className={router.pathname === props.link ? "text-green capitalize " : "capitalize text-white hover:text-green"}>
                <Link href={props.link}>
                    {props.nombre}
                </Link>
            </p>
        </div>
      </>
    )
  }