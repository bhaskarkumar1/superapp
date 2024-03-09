import styles from "./Weather.module.css";
import WeatherApi from "../../Api/WeatherApi";
import { useEffect, useState } from "react";
const Weather = () => {
  const [data, setData] = useState({});
  try {
    const fetchWeather = async () => {
      const res = await WeatherApi();

      console.log(res);
      setData(res);
      // return res
    };

    useEffect(() => {
      fetchWeather();
    }, []);
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            Max<h3>{data.main?.temp_max}</h3>
          </div>
          <div>
            <h1>{"Hyderabad (degree celsius)"}</h1>
          </div>
          <div>
            Min<h3>{data.main?.temp_min}</h3>
          </div>
        </div>
        <div className={styles.mid}>
          <div>
            <h2>{data.weather?.[0]?.description}</h2></div>
            
            <img
              src={`https://openweathermap.org/img/w/${data.weather?.[0]?.icon}.png`}
              alt="waether-img"
            />
          
        </div>
        <div className={styles.bottom}>
          <div>
            <h2>Feels Like</h2>
          </div>
          <div>
            <h2>{data.main?.feels_like}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
