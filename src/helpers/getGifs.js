export const getGif = async(category) => {
    
  const apiKey = '02t8omLuC8ONQFdFStjb0Z6Diw8P6aoW'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=6`
  const resp = await fetch(url)
  const {data= []} = await resp.json();
  console.log(data)

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url
  }))


  return gifs;
};