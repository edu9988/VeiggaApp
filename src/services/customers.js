import axios from 'axios'

const user_id = process.env.EXPO_PUBLIC_USER_ID
const access_token = process.env.EXPO_PUBLIC_ACCESS_TOKEN
const email = process.env.EXPO_PUBLIC_EMAIL
const baseURL = `https://api.tiendanube.com/v1/${user_id}/customers`
const config = {
  headers: {
    Authentication: `bearer ${access_token}`,
    "User-Agent": `VeiggaApp (${email})` 
  }
}

const getAll = async () => {
  let data = []
  let url = `${baseURL}?page=1&per_page=200`
  while(true){
    try{
      const response = await axios.get(url, config)
      const responseData = await response.data
      data.push( ...responseData )

      const link = response.headers['link']
      if( link === undefined || link.indexOf( 'rel="next"' ) === -1 ){
        break
      }
      else{
        const start = link.indexOf( '<' )
        const end = link.indexOf( '>' )
        url = link.slice(start+1, end)
        console.log('customer next url:', url)
      }
    }
    catch(error){
      console.log('customer getAll error:', error)
      break
    }
  }
  console.log('customer data.length:',data.length)
  return data
}

const post = async (newCustomer) => {
  try{
    return await axios.post(baseURL, newCustomer, config)
  }
  catch(error){
    console.error('customer post error:', error)
  }
}

const put = async (id, updatedCustomer) => {
  try{
    return await axios.put(`${baseURL}/${id}`, updatedCustomer, config)
  }
  catch(error){
    console.error('customer put error:', error)
  }
}

const deleteById = async (id) => {
  return await axios.delete(`${baseURL}/${id}`, config)
}

export default { getAll, post, put, deleteById }
