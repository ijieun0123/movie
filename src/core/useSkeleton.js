import {useState, useEffect} from 'react'

const useSkeleton = getData => {
  const [loading, setLoading] = useState(true)
  const [isSubscribed, setIsSubscribed] = useState(true)

  useEffect(() => {
    if (!loading) return

    if (isSubscribed)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
  }, [loading])

  useEffect(() => {
    getData()
    return () => setIsSubscribed(false)
  }, [])

  return {loading}
}

export default useSkeleton
