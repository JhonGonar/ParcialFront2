import React from "react";
import listOfMssg from './data.json';
import ButtonBox from "./ButtonBox";
import ChoiceHistory from "./ChoiceHistory";

class MainMessage extends React.Component{


    constructor(props) {

        super(props);
        this.state = {

            currentMssg : listOfMssg[0].historia,
            optionA : listOfMssg[0].opciones.a,
            optionB : listOfMssg[0].opciones.b,
            prevChoices: [],
            iterCounter : 0,
            lastChoice: '',
        }
        //resto de funciones
    }
    /*componentDidMount() {
        this.iterCounter++;
    }*/
    /*componentDidUpdate() {
        this.setState({
            iterCounter: this.state.iterCounter++
        })
        console.log(this.state.iterCounter, "veces actualziadas \n", this.indexList)
    }*/
    componentDidMount() {
        alert("Bienvenido")
    }

    handlerBttn = (e) =>{
        if (this.state.prevChoices.length === 4 && this.state.iterCounter>5) {
            alert("Fin de la historia");

            /*this.setState({
                iterCounter: 5,
                //fin: true,
            })*/

        }
        else if(e.target.value === "a"){
            this.setState({
                iterCounter : this.state.iterCounter+1

            }, ()=>{this.setState({
                currentMssg : listOfMssg[this.state.iterCounter].historia,
                optionA : listOfMssg[this.state.iterCounter].opciones.a,
                optionB : listOfMssg[this.state.iterCounter].opciones.b,
                iterCounter : this.state.iterCounter+1
            })})
        }else {
            this.setState({
                iterCounter: this.state.iterCounter + 2,

            }, ()=>{this.setState(
                {
                    currentMssg: listOfMssg[this.state.iterCounter].historia,
                    optionA: listOfMssg[this.state.iterCounter].opciones.a,
                    optionB: listOfMssg[this.state.iterCounter].opciones.b,
                }
            )
            })
        }

        this.setState({

                prevChoices : [...this.state.prevChoices, e.target.value],
                lastChoice : e.target.value.toUpperCase()
        })
        /*this.indexList = listOfMssg.findIndex(x => x.id===`${2}${e.target.value}`);
        console.log(this.state.prevChoices, this.indexList)*/

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    /*handleIter = (e)=>{
        this.indexList = listOfMssg.findIndex(x => x.id===`${this.iterCounter+1}${e.target.value.toLowerCase()}`)
        console.log(this.state.currentMssg, this.indexList)
    }*/


    render() {
        return(
        <>
        <div className={"historia"}>
            <p >{this.state.currentMssg}</p>
        </div>
        <div>
            <ButtonBox mensajeA={this.state.optionA} mensajeB={this.state.optionB} handlerBttn={this.handlerBttn} />
            <ChoiceHistory previo={this.state.prevChoices} />
        </div>
        </>
        );
    }
}

export default MainMessage;