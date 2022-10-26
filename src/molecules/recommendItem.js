import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Star from '../atoms/star'

const RecommendItem = ({imgSrc, srcSet, title, rating}) => {
  return (
    <ImageListItem>
      <img src={imgSrc} srcSet={srcSet} alt={title} loading="lazy" />
      <ImageListItemBar
        title={title}
        subtitle={<Star rating={rating} size="small" />}
        position="below"
      />
    </ImageListItem>
  )
}

export default RecommendItem
