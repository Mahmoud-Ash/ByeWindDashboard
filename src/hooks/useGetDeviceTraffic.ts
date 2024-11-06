import axios from "axios"
import { useEffect, useState } from "react"

type TrafficDatum = {
  [month: string]: number
}
type TrafficData = {
  name: string;
  traffic: TrafficDatum
}

const useGetDeviceTraffic = () => {
  const [data, setData] = useState<{ name: string, value: number }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetcTrafficData = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get("https://mahmoud-ash.github.io/host-API/deviceTraffic.json")
        const proccessedData = [...data.map((datum: TrafficData) => ({
          name: datum.name,
          value: Object.values(datum.traffic).reduce((acc, value) => acc + value, 0)
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

export default useGetDeviceTraffic