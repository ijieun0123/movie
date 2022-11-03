import {useState} from 'react'
import {blue} from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import Star from '../atoms/star'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import {Card, CardHeader, CardContent, Box, Typography} from '@material-ui/core'
import React, {memo} from 'react'
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)({
  position: 'relative',
  height: '100%',
}) as typeof Card

const CustomTypo = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 5,
  WebkitBoxOrient: 'vertical',
}) as typeof Typography

const ExpandMoreIconStyle = {
  position: 'absolute',
  color: '#888',
  right: 15,
  bottom: 15,
  cursor: 'pointer',
}

interface ReviewCardProp {
  author: string,
  avatarPath: string,
  content: string,
  updatedAt: string,
  rating: number
}

const ReviewCard = ({author, avatarPath, content, updatedAt, rating}: ReviewCardProp) => {
  const [open, setOpen] = useState(false)

  const onClickMore = () => setOpen(!open)

  return (
    <CustomCard>
      <CardHeader
        avatar={
          avatarPath ? (
            <Avatar
              alt="Remy Sharp"
              src={process.env.REACT_APP_IMG_URL + avatarPath}
            />
          ) : (
            <Avatar sx={{bgcolor: blue[500]}} aria-label="recipe">
              {author.slice(0, 1)}
            </Avatar>
          )
        }
        title={author}
        subheader={updatedAt}
      />

      <CardContent>
        {open
          ? 
          <Typography variant="body2"> 
            {content}
          </Typography>
          : 
          <CustomTypo variant="body2">
            {content}
          </CustomTypo>
        }
      </CardContent>

      <Box sx={{ml: 2, mb: 2}}>
        <Star rating={rating} size="medium" />
      </Box>

      {open ? (
        <ExpandLessIcon onClick={onClickMore} sx={ExpandMoreIconStyle} />
      ) : (
        <ExpandMoreIcon onClick={onClickMore} sx={ExpandMoreIconStyle} />
      )}
    </CustomCard>
  )
}

export default memo(ReviewCard)
