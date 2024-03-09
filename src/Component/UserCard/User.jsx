import styles from "./User.module.css"

const User=()=>{
    let userData= JSON.parse(localStorage.getItem("register"))
    let genreData=JSON.parse(localStorage.getItem("genre"))
    return (
        <>
        <div className={styles.container}>

            <div className={styles.profilePic}>

            </div>

            <div className={styles.profileDetail}>
                <div>
                <h2>{userData.name}</h2>
                <h2>{userData.email}</h2>
                <h1>{userData.username}</h1>
                </div>

                <div className={styles.genre}>
                    
                    {
                        genreData.map((e)=>(
                            <button className={styles.genrebtn}>{e}</button>

                        ))
                    }
                    
            
                </div>

            </div>

        </div>
        </>
    )
}

export default User;
