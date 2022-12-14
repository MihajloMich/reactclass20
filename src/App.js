import Student from "./Components/Student"

const App = () => {
   const name = "Mia Koluci"
  const age =  34
  const toShow = true
  const fruits = ['apple', 'android', 'banana']
  const student = {
   name,
   age,
   fruits,
}

  return (<>
    <div>Hello World</div>
    <Student name={name} age={age} shouldTheComponentShow={toShow}/>
    </>);
}

export default App;
