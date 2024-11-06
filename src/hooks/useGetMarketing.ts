import axios from "axios"
import { useEffect, useState } from "react"

const useGetMarketing = () => {
  const [data, setData] = useState<{ name: string, value: number }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("https://mahmoud-ash.github.io/host-API/marketing&SEO.json")
        const proccessedData = [...data.map((datum: { month: string, value: number }) => ({
          name: datum.month.slice(0, 3),
          value: datum.value
        }))]
        setData(proccessedData)
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

export default useGetMarketing