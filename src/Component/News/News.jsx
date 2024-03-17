import styles from "./News.module.css";
import NewsApi from "../../Api/NewsApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const News=()=>{


const [news,setNews]=useState([])

  const fetchData=async()=>{
        const res= await NewsApi();

    console.log(res)
    setNews(()=>res)
        // return res
    }
//     data()
    useEffect(()=>{
       fetchData()
    },[])
    const navigate=useNavigate();

    const openUrl=()=>{
        // navigate(news.url)
        window.open(news.url, '_blank');

    }
    return(
        <>
        <div  onClick={openUrl} className={styles.container}>
            <div className={styles.top}>
                <div className={styles.img} >
                    <img src={news.image} alt="Looks like News apis 100 limit crossed today"  />
                </div>
                <div className={styles.title}>
                    <h3>{news.title}</h3>
                </div>
            
            </div>
            <div className={styles.bottom}>
                <h4>{news.description?.substring(0,200)}</h4>

            </div>
            
        </div>
        
        </>
    )
}