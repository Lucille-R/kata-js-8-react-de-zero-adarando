import './App.css';
import Entete from './components/Entete';
import ListeRandos from './components/ListeRandos';
import randonnees from './randonnees.json';

const App = () => {
  return (
    <>
      <Entete nbRandonnees={randonnees.length} />
      <ListeRandos tableauRandonnees={randonnees} />
    </>
  );
};

export default App;