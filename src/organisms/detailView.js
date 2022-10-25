import {useState, useEffect} from 'react'
import {Grid} from '@material-ui/core'
import Stack from '@mui/material/Stack'
import Table from '../molecules/table'
import DetailCard from '../molecules/detailCard'
import api from '../axios/api'

const ImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  boxShadow:
    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
}

const DetailView = ({id}) => {
  const [detail, setDetail] = useState([])
  const [genres, setGenres] = useState([])

  const getDetail = () => {
    api
      .getDetail(id)
      .then(res => {
        console.log(res.data)
        const detail = res.data
        setDetail(detail)
        setGenres(detail.genres)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} md={6} lg={5}>
        <img
          style={ImgStyle}
          src={process.env.REACT_APP_IMG_URL + detail.backdrop_path}
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

export default DetailView
