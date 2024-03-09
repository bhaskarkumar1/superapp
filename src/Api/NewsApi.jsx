
const NewsApi= async()=>{
    const API_KEY="b5ac8c5c578d436faf5b7034d6ade57f"

    const res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)

    const resJson= await res.json()

    return resJson.articles[1]
}

export default NewsApi;