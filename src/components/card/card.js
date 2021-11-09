import { useState } from "react";
import Button from "../Button/button";

const Card = () => {

    const [valor, setValor] = useState(0)


    //função para adicinar 1 em cada click no button
    function Adicionar(){
        setValor(valor + 1);
    }
    // remove um em cada click
    function Remover(){
        setValor(valor - 1);
    }
    // end
    return(
        <div className="card">
            <div className="card-header">
                    Meu primeiro Card
            </div>
            <div className="card-body">

                    {/* button de adicionar,
                    deixado indentação dentro da
                    propria tag para melhor
                        intendimento */}
                    <Button
                        className="btn btn-success"
                        onClick={Adicionar}
                    > 
                        Adicionar
                    </Button>
                    {/* end adicionar */}
                    

                    {/* button de remover */}
                    <Button
                        className="btn btn-danger"
                        onClick={Remover}
                    > 
                            Remover
                    </Button>
                    {/* end */}
                    
                    <p>{valor}</p>  {/* pega o valor de useState */}
            </div>
        </div>
    )
}
// importando para app.js
export default Card;


        