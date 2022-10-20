import './Detail.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Table from '../organisms/table'

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
    <Box className="detail">
      <Box className="img_box">
        <img
          src={'https://image.tmdb.org/t/p/w500' + detail.backdrop_path}
          alt="이미지"
        />
      </Box>

      <div className="text_box">
        <h1>{detail.original_title}</h1>
        <p>{detail.overview}</p>

        <div className="date_rate">
          <p className="date">{detail.release_date}</p>
          <p className="rate">{detail.vote_average}</p>
        </div>

        <div className="genres_box">
          <h3 className="genres_title">genres</h3>

          <ul className="genres_lists">
            {genres.map((genre, i) => {
              return <li>{genre.name}</li>
            })}
          </ul>
        </div>
      </div>

      <Table
        rating={detail.vote_average}
        release_date={detail.release_date}
        genres={genres}
      />
    </Box>
  )
}
