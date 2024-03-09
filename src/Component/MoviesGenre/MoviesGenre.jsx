import React, { useState } from "react";
import styles from "./MoviesGenre.module.css";
import { useNavigate } from 'react-router-dom';

import BlockCards from "../BlockCards/BlockCards";

import { RxCross1 } from "react-icons/rx";

import Data from "../../util/MoviesGenreData";
const MoviesGenre = () => {
  const [category, setCategory] = useState([]);
  const navigate=useNavigate()
  const handleClick = (name) => {
    // console.log("blockcards clicked name: ",name )

    // now I donot want to add the same data if its already pushed in the category array
    const currentName = (element) => {
      return element === name;
    };

    let isPresent = category.filter(currentName);
    // console.log(name,isPresent)
    if (isPresent.length === 0) {
      setCategory((category) => [...category, name]);
      // console.log("category:",category)
    } else {
      handleRemove(name);
    }
  };

  console.log("category:", category);
  // what ever int the category you need to show  it in user choice

  const handleRemove = (element) => {
    console.log("Removed function got triggered", element);

    let newArray = category.filter((value) => value !== element);
    // console.log(newArray)
    setCategory(() => newArray);
    // it will remove the element from category app
    // category.remove(element)
  };

  const [error, setError] = useState("");
  const handleError = () => {
    if (category.length < 3) {
      setError(
        () => "⚠️ Minimum 3 category required"
      );
    }else{
      setError(()=>(""))
      //local storeage
      localStorage.setItem("genre",JSON.stringify(category))
    navigate("/home");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftDesign}>
            <div>
              <h1 className={styles.title}>Super app</h1>
            </div>

            <div className={styles.category}>
              <h1>Choose your Entertainment category</h1>
            </div>

            <div className={styles.userChoice}>
              <div className={styles.userContainer}>
                {/* userChoice */}
                {/* just render what you have in that category array */}
                {category.map((element, i) => (
                  <button
                    onClick={() => handleRemove(element)}
                    key={i}
                    className={styles.userSelected}
                  >
                    {element} {<RxCross1 />}
                  </button>
                ))}
              </div>

              <span className={styles.error}>{error}</span>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className={styles.rightContainer}>
          <div className={styles.rightDesign}>
            {Data.map((obj) => (
              // console.log(obj)
              <BlockCards
                setCategory={setCategory}
                handleClick={handleClick}
                key={obj.id}
                name={obj.name}
                src={obj.src}
                color={obj.color}
              />
            ))}
          </div>

          <button onClick={handleError} className={styles.button}>
            Next page
          </button>
        </div>
      </div>
    </>
  );
};

export default MoviesGenre;
