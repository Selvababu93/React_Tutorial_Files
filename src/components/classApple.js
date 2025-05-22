import React from "react";


class Apple extends React.Component{
    render() {
        const {appleInfo} = this.props
        const {country, type, color} = appleInfo
        const text = `I'm Apple from ${country} and my variant is ${type} also my color is ${color} btw am derived from class componennt`
        return <h2>{text}</h2>
    }
};

export default Apple