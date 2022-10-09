import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Tecnologias from '../components/Tecnologias'
export default function Knowledge() {
    return (
      <div className="h-full bg-bg">
        <Navbar/>
        <div class=" flex w-full h-full mt-8">
          <div class="w-1/5 hidden sm:block"/>
          <Sidebar/>
          <Tecnologias/>
        </div>
      </div>
    )
  }

Knowledge.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}