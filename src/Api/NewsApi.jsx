
const NewsApi= async()=>{
  

    // const res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API}`)
    const res= await fetch(` https://api.worldnewsapi.com/search-news?api-key=${import.meta.env.VITE_NEWS_API}&text=chatgpt`)
   

    const resJson= await res.json()

    return resJson.news[3]
}

export default NewsApi;