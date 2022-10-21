import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Navigation from '../molecules/navigation'
import DetailView from '../organisms/detailView'
import Video from '../organisms/video'
import Review from '../organisms/review'
import Recommend from '../organisms/recommend'
import useNavi from '../core/useNavi'

const Detail = () => {
  const {id} = useParams()

  const {value, onChangeTabs} = useNavi()

  const valueArr = ['detail', 'recommend', 'review', 'video']

  const PrintDetail = () => {
    if (value === 0) {
      return <DetailView id={id} />
    } else if (value === 1) {
      return <Recommend id={id} />
    } else if (value === 2) {
      return <Review id={id} />
    } else {
      return <Video id={id} />
    }
  }

  useEffect(() => {
    PrintDetail()
  }, [value])

  return (
    <>
      <Navigation
        value={value}
        valueArr={valueArr}
        onChangeTabs={onChangeTabs}
      />

      {/* 디테일 뷰 */}
      {PrintDetail()}
    </>
  )
}

export default Detail
