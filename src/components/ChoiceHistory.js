import React from "react";

class ChoiceHistory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
    return(
        <div className={"recordatorio"}>
            <p>Selección anterior: {this.props.previo[this.props.previo.length-1]}</p>
            <p>Historial de opciones elegidas: {this.props.previo}</p>
        </div>
        )
    }
}
export default ChoiceHistory;