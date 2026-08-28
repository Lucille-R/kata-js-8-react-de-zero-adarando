import './App.css';
import Entete from './components/Entete';
import randonnees from './randonnees.json';
import ListeRandos from './components/ListeRandos';

const App = () => {
  return (
    <>
      <Entete />
      <ListeRandos randonnees={randonnees} />
    </>
  );
};

export default App;