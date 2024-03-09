import styles from "./Home.module.css";

import User from "../UserCard/User";
import { Notes } from "../Notes/Notes";
import { News } from "../News/News";

import Weather from "../Weather/Weather";

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <User />
          <Notes />
          <News />
          <Weather />
          
        </div>
        
        
        <button type="submit" className={styles.browse}>
          Browse
        </button>
      </div>
    </>
  );
};
