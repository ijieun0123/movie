import {useState, useEffect} from 'react'

const usePage = value => {
  const [page, setPage] = useState(1)
  const onChangePage = (e, newPage) => setPage(newPage)

  useEffect(() => {
    setPage(1)
  }, [value ? value : null])

  return {page, onChangePage}
}

export default usePage
