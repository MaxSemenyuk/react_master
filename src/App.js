import './App.css';
import Char from "./components/Char";
function App() {
  return (
    <div>
        <Char name = 'Homer Jay Simpson'
              desc = '(born May 12, 1956)[36] is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him.'
              pic = 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'/>;
        <Char name = 'Bartholomew JoJo Simpson'
              desc = 'Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.'
              pic = 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'/>;
        <Char name = 'Marjorie Jacqueline "Marge" Simpson'
              desc = 'Marjorie Jacqueline "Marge" Simpson (née Bouvier[11]) is the homemaker and matriarch of the Simpson family.'
              pic = 'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'/>;
        <Char name = 'Lisa Marie Simpson'
              desc = 'In "Homer and Lisa Exchange Cross Words" she is also known as Lisa Bouvier. She was named after a train called Lil Lisa on her parents 1st anniversary. She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence level of children her age.'
              pic = 'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'/>;
        <Char name = 'Margaret Evelyn Lenny Simpson'
              desc = ' is the 1-year old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. '
              pic = 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'/>;

    </div>
  )
}
export default App;
