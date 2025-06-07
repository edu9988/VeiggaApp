import axios from 'axios'

const user_id = process.env.EXPO_PUBLIC_USER_ID
const access_token = process.env.EXPO_PUBLIC_ACCESS_TOKEN
const email = process.env.EXPO_PUBLIC_EMAIL
const baseURL = `https://api.tiendanube.com/v1/${user_id}/products`

const getAll = async () => {
  const config = {
    headers: {
      Authentication: `bearer ${access_token}`,
      "User-Agent": `VeiggaApp (${email})` 
    }
  }

  const response = await axios.get(baseURL, config)
  return response.data
}

export default { getAll }
