import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Imagen from '../components/Imagen'
import AboutMe from '../components/AboutMe'
export default function Home() {
  return (
    <div className="h-full bg-bg">
      <Navbar/>
      <div class=" flex w-full h-full mt-8">
        <div class="w-1/5 hidden sm:block"/>
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