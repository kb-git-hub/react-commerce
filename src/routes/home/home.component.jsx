import { categoriesList } from "../../data/category-list"
import { Outlet } from "react-router-dom"
import Directory from "../../components/directory/directory.component"

const Home = () => {
  return (
    <div>
        <Directory categories={categoriesList}/>
        <Outlet/>
    </div>
  )
}

export default Home
