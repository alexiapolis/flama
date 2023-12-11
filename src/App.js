import Navbar from "./Components/Navbar";
import CardContent from "./Components/CardContent";
import CardImage from "./Components/CardImage";
import photo from "./images/Photos/DSC_4214.NEF.jpg";

function App() {
  return (
    <div className="App">
      <div className="container is-fluid">
        <Navbar />
      </div>
      <div>
        <CardContent />
        <CardImage image={photo} />
      </div>
    </div>
  );
}

export default App;
