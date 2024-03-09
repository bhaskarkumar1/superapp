
const city="hyderabad"
const WeatherApi=async ()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`

    const data= await fetch(url)
    const res=await data.json();

return res
}

export default WeatherApi;