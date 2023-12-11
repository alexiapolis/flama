import Navbar from "./Components/Navbar";
import CardContent from "./Components/CardContent";
import CardImage from "./Components/CardImage";
import photo from "./images/Photos/DSC_3305.NEF.jpg";

function App() {
  return (
    <div className="App">
      <div className="container is-fluid">
        <Navbar />
      </div>
      <div className="columns">
        <div className="column">
          <CardContent />
        </div>
        <div className="column">
          <CardImage image={photo} />
        </div>
      </div>
    </div>
  );
}

export default App;
