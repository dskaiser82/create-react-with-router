import React from 'react';
import './AllPoke.scss'


class AllPoke extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       poke: []
      };

      // This binding is necessary to make `this` work in the callback
      this.getPoke = this.getPoke.bind(this);
    } //////////////end constructor//////////////////////

    async getPoke(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        const json = await response.json() //.json() is a fetch method Takes a Response stream and 
        
        let vals =  Object.values(json.sprites)
        let filtered = vals.filter(el => el !== null)
        
        this.setState({poke: filtered})
        console.log(this.state.poke)
        
    }

   
    componentDidMount(){
        this.getPoke()
    }


    render() {
      const poke = this.state.poke;
 
      
      return (
      <div className="Pokemon">  
       <h1>Poke List</h1>
        <ul>
        {poke.map((url, index) => 
            <li key={index}>
                <img src={url}/>
            </li>
        )}
        </ul>
      </div>  
      );
    }
  }

  export default AllPoke 