import myImage from "./assets/test-external-2519778_1920.jpg";
import style from "./css/userprofile.module.css"


function UserProfile() {
    return(
        <div>
            {/* <h1 className={style.heading}>Modular Card</h1> */}
            <div className={style.container}>
                <img className={style.width} src={myImage} />
                <div className={style.textWrap}>
                    <h4>Meena Purohit</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;