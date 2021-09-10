import React from "react";


class ButtonBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={"opciones"}>
                <div className={"opcion"}>
                    <button value={"a"} onClick={this.props.handlerBttn} className={"botones"}>
                        A
                    </button>
                    <p >{this.props.mensajeA}</p>
                    <button value={"b"} onClick={this.props.handlerBttn} className={"botones"}>
                        B
                    </button>
                    <p>{this.props.mensajeB}</p>
                </div>
            </div>
        );
    }
}

export default ButtonBox;