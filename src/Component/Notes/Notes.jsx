import { useState } from "react";
import styles from "./Notes.module.css";
import { useEffect } from "react";

export const Notes = () => {
  const [notes, setNotes] = useState(()=>{
    let prevData= JSON.parse(localStorage.getItem("notes")) || ""
    return prevData;
  });

  const handleChange = (e) => {
    // console.log(e.target.value)
    let notesData = e.target.value;
    setNotes(() => notesData);
    console.log(notes);
  };
  useEffect(()=>localStorage.setItem("notes", JSON.stringify(notes)), [notes]);
//   let prevData = JSON.parse(localStorage.getItem("notes")) || "";


// useEffect(()=>{
//    setNotes(()=>(prevData))
// },[])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>All notes</h1>
        </div>
        <div className={styles.textArea}>
          <textarea
            name="notes"
            id=""
            value={notes}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
      </div>
    </>
  );
};
