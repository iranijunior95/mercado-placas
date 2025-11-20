import { Card } from "react-bootstrap";
import { maskMonetaryValue } from "../../utils/maskMonetaryValue";
import "./style.css";

function CardPreview(props){
    return (
        <Card className="card-preview">
            <Card.Body>
                <div className="header-card-preview">
                    <h1>oferta</h1>
                </div>

                <div 
                    className="body-card-preview"
                    style={{ background: props.corDeFundo }}
                >
                    <h2>{ props.nomeProduto }</h2>

                    <h3>{ maskMonetaryValue(props.preco) }</h3>

                    <p>{ props.descricaoValidade }</p>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardPreview;