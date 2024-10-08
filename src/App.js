import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
const [person, setPerson] = useState(0); //чтоб показывал первый элемент
const {id, name, description, age, image} = data[person];// так как будем показывать только один элемент на странице
//метод мар() не используем, ф все прописываем в константе

const previousPerson = () => { //предыдущая кнопка
  setPerson((person => {
    person--;
    if (person < 0) { //чтоб возвращался к последней и счет шел заново
      return data.length -1;
    }
    return(person)

  }))
}

const nextPerson = () => { //кнопка на следующий элемент
  setPerson((person => {
    person++;
    if (person > data.length -1) { // чтоб при окончании слайдов, возвращался на первый элемент
      person = 0;
    }
    return(person)

  }))
}

  return (
    <div>

      <div className='container'>
        <img src={image} width='350px' alt='Rerson'/>
      </div>

      <div className='container'>
        <h1>{id} - {name}</h1>
      </div>
      
      <div className='container'>
        <h2>{description}</h2>
      </div>

      <div className='container'>
        <h2>{age} years old</h2>
      </div>

      <div className='btn container'>
        <button onClick={previousPerson}>Previous</button>
        <button onClick={nextPerson}>Next</button>
      </div>

    </div>
  );
}

export default App;
