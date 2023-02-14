
import { Link } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles.jsx';

const DirectoryItem = ( {category} ) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body>
        <Link className='title' to={`shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;