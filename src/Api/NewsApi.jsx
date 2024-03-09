
const NewsApi= async()=>{
  

    const res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API}`)

    const resJson= await res.json()

    return resJson.articles[1]
}

export default NewsApi;