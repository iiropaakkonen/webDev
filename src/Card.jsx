import iroh from "./assets/iroh.png";

function Card() {

    return(
        <div className="card">
            <img className="iroh" src={iroh} alt="a picture of Iiro Pääkkönen"></img>
            <h2 className="card-title">Iiro Pääkkönen</h2>
            <p className="card-text">I am an IT-MSc Student at the University of Turku.</p>
        </div>
    );
}
export default Card