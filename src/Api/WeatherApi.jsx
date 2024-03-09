const API="d66aa2315ba0e92adf6fae8afbc4ad84"
const city="hyderabad"
const WeatherApi=async ()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`

    const data= await fetch(url)
    const res=await data.json();

return res
}

export default WeatherApi;