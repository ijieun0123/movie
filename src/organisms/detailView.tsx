import {useState, useEffect} from 'react'
import {useAppSelector, useAppDispatch} from '../app/store'
import {useParams} from 'react-router-dom'
import {DETAIL} from '../features/detailSlice'
import {Grid, Box} from '@material-ui/core'
import Stack from '@mui/material/Stack'
import Table from '../molecules/table'
import DetailCard from '../molecules/detailCard'
import api from '../axios/api'
import styled from 'styled-components';

const CustomImage = styled.img`
  width: 100%;
  height: 100%;
  objectFit: cover;
  boxShadow:
    0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  borderRadius: 5px;
`

const DetailView = () => {
  const detail = useAppSelector(state => state.detail.detail)

  const {id} = useParams()
  const dispatch = useAppDispatch()

  const getDetail = () => {
    api
      .getDetail(id)
      .then(res => {
        console.log(res.data)
        const detail = res.data
        dispatch(
          DETAIL({
            backdrop_path: detail.backdrop_path,
            title: detail.title,
            overview: detail.overview,
            vote_average: detail.vote_average,
            release_date: detail.release_date,
            genres: detail.genres,
          })
        )
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getDetail()
  }, [id])

  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} md={6} lg={5}>
        <CustomImage
          src={
            detail.backdrop_path
              ? process.env.REACT_APP_IMG_URL + detail.backdrop_path
              : process.env.PUBLIC_URL + '/img/no_photo.png'
          }
          alt="이미지"
        />
      </Grid>

      <Grid item xs={12} md={6} lg={7}>
        <Stack spacing={2}>
          <DetailCard title={detail.title} detail={detail.overview} />

          <Table
            rating={detail.vote_average}
            release_date={detail.release_date}
            genres={detail.genres}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default DetailView
