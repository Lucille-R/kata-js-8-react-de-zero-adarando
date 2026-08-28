import './App.css';
import Entete from './components/Entete';
import CarteRando from './components/CarteRando';
import randonnees from './randonnees.json';

const App = () => {
  return (
    <>
      <Entete />
      <CarteRando randonnee={randonnees[0]} />
    </>
  );
};

export default App;