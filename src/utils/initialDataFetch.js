import Axios from 'axios'


export default async function fetchData() {

  const completeLocation = `${url}?key=${key}&q=Cape Town`

      try {
        const response = await Axios.get(completeLocation)
        return response.data
    } catch (error) {
    console.log(error)
  }
}