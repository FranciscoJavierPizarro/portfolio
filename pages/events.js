import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Eventss from '../components/Eventss'
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