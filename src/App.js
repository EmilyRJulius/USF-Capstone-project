import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NewUser from "./Users/NewUser";
import Login from "./Users/UserLogin";
import CharacterSheet from "./Character-sheet/Character-sheet";
import axios from 'axios';
import { NavLink, Switch } from "react-router-dom/cjs/react-router-dom.min";
import CharactersList from "./CharactersList";
import Home from "./Home";

function App() {
  // const character = async() => {
  //   try{
  //     const response = await axios.get('http://localhost:5000/1/1')
  //     console.log(response)
  //   }catch(err){
  //     console.log(err)
  //   }
  // };
  // console.log(character);
  const curr_user = async() =>{
    try{
      const response = await axios.get('http://localhost:5000/login')
      return response
    }catch(error){
      console.log(error)
    }
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/create-character">Create New Character</NavLink>
        </nav>
        <Switch>
          <Route path="/create-character"><CharacterSheet isEditing={false} /></Route>
          <Route exact path="/:curr_user/characters"><CharactersList /></Route>
          <Route exact path="/signup" ><NewUser /></Route>
          <Route path="/login"><Login /></Route>
          <Route path= "/:curr_user/:character_id"><CharacterSheet isEditing={true}/></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
