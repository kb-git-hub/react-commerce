import { Fragment, useContext } from "react"
import CategoryPreview from "../../components/category-preview/CategoryPreview.component"
import { CategoriesContext } from "../../contexts/categories.context"

import './shop.styles.scss'

const Shop = () => {

    const {categoriesMap} = useContext(CategoriesContext)
    const categoryArray = Object.entries(categoriesMap)
    
  return (
    <div className="shop-container">

      {categoryArray.map(category=>
        (
          <CategoryPreview key={category[0]} title={category[0]} products={category[1]}/>
        )
      )}
    </div>
  )
}

export default Shop
