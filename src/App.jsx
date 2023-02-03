import Categories from "./components/categories/categories.component"
import {categoriesList} from './data/category-list'

const App = () => {
  return (
    <div className="App">
      <Categories categoriesList={categoriesList}/>
    </div>
  )
}

export default App
