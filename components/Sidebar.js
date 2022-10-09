import RssButton from "./RssButton"
import { FiLinkedin, FiGithub, FiMail, FiMessageSquare} from "react-icons/fi";
export default function Sidebar() {
  const list = [
    {
      url: "https://es.linkedin.com/in/franciscopizarrojavier",
      content: <FiLinkedin className=""/>
    },
    {
      url: "https://github.com/FranciscoJavierPizarro",
      content: <FiGithub className=""/>
    },
    // {
    //   url: "Current status",
    //   content: <FiMail className=""/>
    // },
    {
      url: "https://t.me/pizarrojavier",
      content: <FiMessageSquare className=""/>
    },
  ]    

  const buttons = list.map((item, idx) => (
    <RssButton
    key={idx}
    url = {item.url}
    content = {item.content}
    />
  ))
    return (
      <>
        <div className="absolute bottom-0 w-1/6 h-128 bg-bg flex justify-center">
          <div className="h-full flex-col align-center">

            {/* <RssButton content="a" url="google.es"/> */}
            {buttons}
            <div className="w-1 h-48 border-2 border-white border-solid mx-auto mt-4 hover:border-green"></div>
          </div>
        </div>
      </>
    )
  }