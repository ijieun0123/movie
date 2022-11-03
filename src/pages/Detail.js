import {useState, useEffect} from 'react'
import Navigation from '../molecules/navigation'
import DetailView from '../organisms/detailView'
import Video from '../organisms/video'
import Review from '../organisms/review'
import Recommend from '../organisms/recommend'
import useNavi from '../core/useNavi'

const Detail = () => {
  const {value, onChangeTabs} = useNavi()

  const valueArr = ['detail', 'recommend', 'review', 'video']

  const PrintDetail = () => {
    if (value === 0) {
      return <DetailView />
    } else if (value === 1) {
      return <Recommend />
    } else if (value === 2) {
      return <Review />
    } else {
      return <Video />
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
