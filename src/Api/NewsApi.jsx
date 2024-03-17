
const NewsApi= async()=>{
  
    // const res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API}`)
    const res= await fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=${import.meta.env.VITE_NEWS_API}`)
    const resJson= await res.json()
    // console.log(resJson)
    return resJson.articles[0]
}

export default NewsApi;

