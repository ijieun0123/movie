import {useState} from 'react'
import {blue} from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import Star from '../atoms/star'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import {Card, CardHeader, CardContent, Box, Typography} from '@material-ui/core'
import React, {memo} from 'react'

const CardStyle = {
  position: 'relative',
  height: '100%',
}

const ShortenStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 5,
  WebkitBoxOrient: 'vertical',
}

const ExpandMoreIconStyle = {
  position: 'absolute',
  color: '#888',
  right: 15,
  bottom: 15,
  cursor: 'pointer',
}

const ReviewCard = ({author, avatarPath, content, updatedAt, rating}) => {
  const [open, setOpen] = useState(false)

  const onClickMore = () => setOpen(!open)

  return (
    <Card style={CardStyle}>
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
        <Typography variant="body2" style={open ? null : ShortenStyle}>
          {content}
        </Typography>
      </CardContent>

      <Box sx={{ml: 2, mb: 2}}>
        <Star rating={rating} size="medium" />
      </Box>

      {open ? (
        <ExpandLessIcon onClick={onClickMore} sx={ExpandMoreIconStyle} />
      ) : (
        <ExpandMoreIcon onClick={onClickMore} sx={ExpandMoreIconStyle} />
      )}
    </Card>
  )
}

export default memo(ReviewCard)
