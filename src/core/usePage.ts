import {useState, useEffect, useCallback} from 'react'

const usePage = (value: string) => {
  const [page, setPage] = useState(1)
  const onChangePage = useCallback((e: React.MouseEvent<HTMLButtonElement>, newPage: number) => setPage(newPage), [page])

  useEffect(() => {
    setPage(1)
  }, [value ? value : null])

  return {page, onChangePage}
}

export default usePage
