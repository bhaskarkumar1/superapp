
import styles from "./MoviesGenre.module.css";
import { IoIosWarning } from "react-icons/io";
import { IconContext } from "react-icons";
import BlockCards from "../BlockCards/BlockCards";

import Data from "../../util/MoviesGenreData"
const MoviesGenre = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftDesign}>
            <div>
            <h1 className={styles.title}>Super app</h1></div>

            <div className={styles.category}>
              <h1>
                Choose your  Entertainment 
                category
              </h1>
            </div>

            <div className={styles.userChoice}>
                <div className={styles.userContainer}> userChoice</div>


            <span className={styles.error}>
            <IconContext.Provider value={{ size: 25}}>
            <IoIosWarning />
</IconContext.Provider>
                
                
&nbsp; Minimum 3 category required</span>
            </div>
         
          </div>
        </div>

        {/* right part */}
        <div className={styles.rightContainer}>
        <div className={styles.rightDesign}>
          {
            Data.map((obj)=>(
              // console.log(obj)
              <BlockCards key={obj.id} name={obj.name} src={obj.src} color={obj.color}  />
            ))
          }
      
        </div>
          
        <button className={styles.button}>Next page</button>
        </div>
      </div>
    </>
  );
};

export default MoviesGenre;
