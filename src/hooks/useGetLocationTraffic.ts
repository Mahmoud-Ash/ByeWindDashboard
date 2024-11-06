import axios from "axios"
import { useEffect, useState } from "react"


type TrafficData = {
  name: string;
  traffic: number
}

const useGetLocationTraffic = () => {
  const [data, setData] = useState<{ name: string, value: number }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetcTrafficData = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get("https://mahmoud-ash.github.io/host-API/LocationTraffic.json")
        const proccessedData = [...data.map((datum: TrafficData) => ({
          name: datum.name,
          value: datum.traffic
        }))]
        setData(proccessedData)

      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetcTrafficData();
  }, [])

  return { data, isLoading }
}

export default useGetLocationTraffic