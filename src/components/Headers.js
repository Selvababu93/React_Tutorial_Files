import './Header.css'
import styles from './Header.module.css'

function Header() {
    const myStyle = {
        color: "red",
        backgroundColor : "lightblue",
        padding : "10pz",
        textAlign : "center"
    }
    return (
        <>
        {/* <h1 style={myStyle}>Hello Styling</h1> */}
        <h1 className={styles.bigBlue}>Hello Styling</h1>
        <h2>Add a little CSS styles </h2>
        </>
    )
};

export default Header