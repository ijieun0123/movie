import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Star from '../atoms/star'
import React, {memo} from 'react'

interface RecommendItemProp {
  imgSrc: string,
  srcSet: string,
  title: string,
  rating: number
}

const RecommendItem = ({imgSrc, srcSet, title, rating}: RecommendItemProp) => {
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

export default memo(RecommendItem)
