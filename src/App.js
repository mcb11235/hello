import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName= {"John"}
        lastName= {"Smith"}
        age={34}
        hairColor={"Brown"} />
        <PersonCard 
        firstName= {"Jim"}
        lastName= {"Smith"}
        age={42}
        hairColor={"Blond"} />
        <PersonCard 
        firstName= {"Jane"}
        lastName= {"Smith"}
        age={36}
        hairColor={"Blonde"} />
        <PersonCard 
        firstName= {"John"}
        lastName= {"Smith"}
        age={24}
        hairColor={"Brown"} />
    </div>
  );
}

export default App;
