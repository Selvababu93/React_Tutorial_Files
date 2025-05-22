import Car from './Car';
import Apple from './classApple';

function Garage() {
    const isDoorOpen = false

    // creating props using variables
    // const brand = 'Ferrari'
    // const color = 'Black'

    // Creating props in using Objects
    // const carInfo = {
    //     brand : "Ferrari",
    //     color : "Black"
    // }
    const carInfo = {}

    // shorten the conditional statememt using variable
    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined

    // Creating props object for class component
    const appleInfo = {
        type : "Fuji",
        color : "Red",
        country : "Switzerland"
    }

    return (
        <div>
        <h1>
            Who lives inside my Garage
        </h1>
        {/* Sending props */}
        {/* <Car  brand={brand} color={color} /> */}

        {/* && operator Conditional Rendering Example */}
        { showCarInfo && <Car carInfo={carInfo} /> }
        
        <Apple appleInfo={appleInfo}/>

        {/* Ternory conditional operator rendering example */}
        {isDoorOpen ?
        <h1>Garage door is open</h1> : <h1>garage door is closed</h1> }
        </div>
    )
};

export default Garage