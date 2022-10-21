import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const useNavi = () => {
  const {id} = useParams()

  const [value, setValue] = useState(0)
  const onChangeTabs = (e, newValue) => setValue(newValue)

  useEffect(() => {
    setValue(0)
  }, [id])

  return {value, onChangeTabs}
}

export default useNavi
