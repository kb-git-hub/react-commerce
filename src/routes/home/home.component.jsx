import Categories from "../../components/categories/categories.component"
import { categoriesList } from "../../data/category-list"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Categories categoriesList={categoriesList}/>
        <Outlet/>
    </div>
  )
}

export default Home
