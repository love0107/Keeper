import "../contects/Card.css";

function Card(props) {
    return (

        <div className="Contects">
            <h1 className="heading">Contect</h1>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <img src={props.img} alt="avatar-img" className="circle-img" />
                </div>

                <div className="bottom">
                    <p className="info">{props.tel}</p>
                    <p className="info">{props.mail}</p>
                </div>
            </div>
        </div>

    );
}
export default Card;