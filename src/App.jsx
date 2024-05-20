import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

function App() {
  
  return(
    <>
    <Header/>
    <Card/>
    <UserGreeting isLoggedIn={false} username="Irppa"/>
    <List/>
    <Footer/>
    </>
  );
}

export default App
