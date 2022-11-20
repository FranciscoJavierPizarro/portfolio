import styles from '../styles/Home.module.css'
import Layout from '../components/Structural/Layout'
import Navbar from '../components/Bars/Navbar'
import Sidebar from '../components/Bars/Sidebar'
import Imagen from '../components/Imagen'
import AboutMe from '../components/Main/AboutMe'
export default function Home() {
  return (
    <div className="h-full bg-bg">
      <Navbar/>
      <div className=" flex w-full h-full mt-8">
        <div className="w-1/5 hidden sm:block"/>
        <Sidebar/>
        <Imagen/>
        <AboutMe/>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}