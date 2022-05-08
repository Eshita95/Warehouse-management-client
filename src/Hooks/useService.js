import { useEffect, useState } from "react"

const useService = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("https://ancient-reef-62730.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [service, setService]
}
export default useService;