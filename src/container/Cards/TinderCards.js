import React, { Component } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import axios from '../../axios';

class TinderCards extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        axios.get('/tinder/card')
            .then(res => {
                this.setState({people: res.data})
        })
    }

    swiped(direction, nameToDelete)  {
        console.log("removing: " + nameToDelete);
    } 

    outOfFrame(name) {
        console.log(name + " left the screen")
    }

    render() {
        return (
            <div className="tinderCards">
                <div className="tinderCards__cardContainer">
                    {this.state.people.map(person => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => this.swiped(dir, person.name)}
                            onCardLeftScreen={() => this.outOfFrame(person.name)}
                        >
                            <div 
                                style={{ backgroundImage : `url(${person.imgUrl})`}} 
                                className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))}
                </div>
            </div>
        )
    }
}

export default TinderCards
