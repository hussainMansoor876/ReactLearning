import './App.css';
import { UserProfile, DummyComponent } from './UserProfile'
// import * as UserComponent from './UserProfile'

// const Pokedex = () => {
//   return (
//     <header>
//       <h1>Welcome to the Pokedex</h1>
//       <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' title='Pokedex' />
//     </header>
//   )
// }

// const Component1 = () => (
//   <div>
//     <h1>Hello From Component1</h1>
//   </div>
// )

const App = () => {
  const allStudents = [
    {
      name: 'Mansoor Hussain',
      email: 'mansoor.hussain@mach3bi.com',
      age: 23,
      address: '7/47 Model Colony Malir Karachi',
      gender: 'Male',
      phone: '8937784786'
    },
    {
      name: 'Mehmood nwry',
      email: 'mamo22@gmail.com',
      age: 20,
      address: 'Rashid Street Nuserat Ghaza',
      gender: 'Male',
      phone: '47684678'
    },
    {
      name: 'Sarah',
      email: 'sarah@gmail.com',
      age: 20,
      address: 'Farsh alhawa street habrol',
      gender: 'Female',
      phone: '6475348894'
    }
  ]
  return (
    <div>
      {allStudents.map((userInfo, i) => {
        return (
          <div key={i}>
            <UserProfile userInfo={userInfo} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
