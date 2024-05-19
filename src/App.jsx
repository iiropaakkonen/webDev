import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";

function App() {
  
  return(
    <>
    <Header/>
    <Card/>
    <Button/>
    <Student name="Susan" age={23} isStudent={true}></Student>
    <Student name="Troy" age={25} isStudent={true}></Student>
    <Student name="Harold" age={30} isStudent={false}></Student>
    <Student age={19}></Student>
    <Footer/>
    </>
  );
}

export default App
