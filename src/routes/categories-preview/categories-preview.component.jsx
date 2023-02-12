import { Fragment, useContext } from "react"
import CategoryPreview from "../../components/category-preview/CategoryPreview.component"
import { CategoriesContext } from "../../contexts/categories.context"


const CategoriesPreview = () => {

    const {categoriesMap} = useContext(CategoriesContext)
    const categoryArray = Object.entries(categoriesMap)
    
  return (
    <Fragment>
      {categoryArray.map(category=>
        (
          <CategoryPreview key={category[0]} title={category[0]} products={category[1]}/>
        )
      )}
    </Fragment>
  )
}

export default CategoriesPreview
