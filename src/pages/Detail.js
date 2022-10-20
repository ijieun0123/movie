import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Stack from '@mui/material/Stack'
import Table from '../organisms/table'
import DetailCard from '../organisms/detailCard'

const ImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 3,
  boxShadow:
    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
}

export default function Detail() {
  const { id } = useParams()

  const [detail, setDetail] = useState([])
  const [genres, setGenres] = useState([])

  const getDetail = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d771ee361528f7664dfcdb3fde78920a`
    )
    const json = await response.json()
    setDetail(json)
    setGenres(json.genres)
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} md={6} lg={5}>
        <img
          style={ImgStyle}
          src={'https://image.tmdb.org/t/p/w500' + detail.backdrop_path}
          alt="이미지"
        />
      </Grid>

      <Grid item xs={12} md={6} lg={7}>
        <Stack spacing={2}>
          <DetailCard title={detail.original_title} detail={detail.overview} />

          <Table
            rating={detail.vote_average}
            release_date={detail.release_date}
            genres={genres}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}
