import iroh from "./assets/iirokuva.jpg";

function Card() {

    var infoText = "I am an IT-MSc Student at the University of Turku. I completed my Bachelor of Science degree in June 2024. My major is Software Engineering and I am passionate about both software and web development.";
    return(
        <div className="card">
            <img className="iroh" src={iroh} alt="a picture of Iiro Pääkkönen"></img>
            <h2 className="card-title">Iiro Pääkkönen</h2>
            <p className="card-text">{infoText}</p>
        </div>
    );
}
export default Card