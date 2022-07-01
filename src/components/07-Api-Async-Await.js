export const getImagens = async () => {
    try {
        const apiKey='RV7MZTV2p1YH3zkDxMbrp4d8xbLKDjUu'
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json()

      console.log(data)
      const url = data.images.original.mp4
      return url
      
    }
    catch(error){
            console.log(error);
            return error

    }
}