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

  let data = []
  let url = `${baseURL}?page=1&per_page=200`
  while(true){
    try{
      const response = await axios.get(url, config)
      const responseData = await response.data
      data.push( ...responseData )

      const link = response.headers['link']
      if( link.indexOf( 'rel="next"' ) === -1 ){
        break
      }
      else{
        const start = link.indexOf( '<' )
        const end = link.indexOf( '>' )
        url = link.slice(start+1, end)
        console.log('product next url:', url)
      }
    }
    catch(error){
      console.log('product getAll error:', error)
      break
    }
  }
  console.log('product data.length:',data.length)
  return data
}

export default { getAll }
