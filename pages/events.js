import styles from '../styles/Home.module.css'
import Layout from '../components/Structural/Layout'
import Navbar from '../components/Bars/Navbar'
import Sidebar from '../components/Bars/Sidebar'
import Eventss from '../components/Main/Eventss'
export default function Events() {
    return (
      <div className="h-full bg-bg">
        <Navbar/>
        <div class=" flex w-full h-full mt-8">
          <div class="w-1/5 hidden sm:block"/>
          <Sidebar/>
          <Eventss/>
        </div>
      </div>
    )
  }

Events.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}