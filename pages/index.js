import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div className="">
      <Navbar/>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}