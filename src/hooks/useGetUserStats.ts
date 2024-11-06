import axios from "axios"
import { useEffect, useState } from "react"

const useGetUserStats = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://mahmoud-ash.github.io/host-API/usersStats.json")
        setData(res.data)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData();
  }, [])

  return { data, isLoading }
}

export default useGetUserStats