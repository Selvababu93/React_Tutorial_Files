function Car(props) {
    // destructuring the props from variables
    // const {brand, color} = props
    // const text = `Hello I'm a ${color} ${brand} Car`

    // Destructring the object from props
    const {carInfo } = props
    const text = `Hello I'm a ${carInfo.color} ${carInfo.brand} Car`
    
    return (
        <h1>
            {text}
        </h1>
    )
}

export default Car