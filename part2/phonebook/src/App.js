import { useState } from 'react'

const Filter = ({value, onChange}) => 
  <div>
    filter shown with <input value={value} onChange={onChange}/>
  </div>

const PersonForm = ({addName, newName, handleNameChange, newNumber, handleNumberChange}) => 
  <form onSubmit={addName}>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>

const Persons = ({name, number}) =>
  <li>{name} {number}</li>


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if(persons.includes(persons.find(person => person.name === newName))) {
      alert(`${newName} is already added to phonebook`)
    } else {

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearchChange = (event) => setNewSearch(event.target.value)

  const personToShow = persons.filter(person => 
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <ul>
        {personToShow.map(person => 
          <Persons key={person.id} name={person.name} number={person.number} />
        )}
      </ul>

    </div>
  )
}

export default App