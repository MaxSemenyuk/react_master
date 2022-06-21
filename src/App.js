import './App.css';
import Characters from "./components/Characters";

function App() {
  return (
    <div>
      <Characters id = '74,' name = 'Cop Rick' status = 'Alive,' species = 'Human,' gender = 'Male' image = 'https://rickandmortyapi.com/api/character/avatar/74.jpeg'/>
      <Characters id = '484,' name = 'Sheik Rick' status = 'Dead,' species = 'Human,' gender = 'Male' image = 'https://rickandmortyapi.com/api/character/avatar/484.jpeg'/>
      <Characters id = '516,' name = 'Wasp Rick' status = 'Alive,' species = 'Animal,' gender = 'Male' image = 'https://rickandmortyapi.com/api/character/avatar/516.jpeg'/>
      <Characters id = '517,' name = 'Wasp Rick’s Clone' status = 'unknown,' species = 'Animal,' gender = 'Male' image = 'https://rickandmortyapi.com/api/character/avatar/517.jpeg'/>
      <Characters id = '677,' name = 'Japheths Eldest Son' status = 'Dead,' species = 'Humanoid,' gender = 'Male' image = 'https://rickandmortyapi.com/api/character/avatar/677.jpeg'/>
      <Characters id = '760,' name = 'Turkey Rick' status = 'Alive,' species = 'Animal,' gender = 'Male' image = 'https://rickandmortyapi.com/api/character/avatar/760.jpeg'/>
    </div>
  );
}

export default App;
