import axios from "axios"
import { useEffect, useState } from "react"

type TrafficDatum = {
  [month: string]: number
}
type TrafficData = {
  website: string;
  traffic: TrafficDatum
}

const useGetWebTraffic = () => {
  const [data, setData] = useState<TrafficData[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchWebTraf = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get("https://mahmoud-ash.github.io/host-API/websiteTraffic.json")
        const proccessedData = [...data.map((datum: TrafficData) => ({
          website: datum.website,
          traffic: Object.values(datum.traffic).reduce((acc, value) => acc + value, 0)
        }))]
        setData(proccessedData)

      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchWebTraf();
  }, [])

  return { data, isLoading }
}

export default useGetWebTraffic