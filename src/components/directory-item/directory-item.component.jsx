
import { Link, useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles.jsx';

const DirectoryItem = ( {category} ) => {
  const { imageUrl, title } = category;
  const route = `shop/${title}`
  const navigate = useNavigate()

  const navigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;