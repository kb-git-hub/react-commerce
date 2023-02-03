import './categories.styles.scss'
import CategoryItem from '../category-item/category-item.component'

const Categories = ({categoriesList}) => {
  return (
    <div className='categories-container'>
    {categoriesList.map(({title, id, imageUrl})=>(
      <CategoryItem 
        key={id}
        title={title}
        imageUrl={imageUrl}
        />
    ))}
  </div>
  )
}

export default Categories