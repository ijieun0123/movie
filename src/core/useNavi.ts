import {useState, useEffect, useCallback} from 'react'
import {useParams} from 'react-router-dom'

const useNavi = () => {
  const {id} = useParams()

  const [value, setValue] = useState(0)
  const onChangeTabs = useCallback((e: React.ChangeEvent<{}>, newValue: number) => setValue(newValue), [value])

  useEffect(() => {
    setValue(0)
  }, [id])

  return {value, onChangeTabs}
}

export default useNavi
