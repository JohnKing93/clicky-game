import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Planet from "./components/Planet";
import planets from "./planets.json";
import './App.css';

class App extends Component {
  state = {
    planets,
    gameScore: 0,
    topScore: 0
  }

  componentDidMount() {
    const newPlanets = this.resetClicks(this.state.planets);
    this.setState({ planets: this.randomizeOrder(newPlanets) });
  }

  randomizeOrder = oldPlanets => {
    let newPlanets = oldPlanets.sort(() => { return 0.5 - Math.random() });;
    return newPlanets;
  };

  resetClicks = oldPlanets => {
    const newPlanets = oldPlanets.map(planet => {
      planet.clicked = false;
      return planet;
    });
    return newPlanets;
  };

  continueGame = mappedPlanets => {
    console.log("Continue Game");
    this.setState({
      planets: this.randomizeOrder(mappedPlanets),
      gameScore: this.state.gameScore + 1
    });
  }

  gameOver = mappedPlanets => {
    console.log("Game Over");
    const resetPlanets = this.resetClicks(mappedPlanets);
    const newTopScore = this.state.gameScore > this.state.topScore ? this.state.gameScore : this.state.topScore;
    this.setState({
      planets: this.randomizeOrder(resetPlanets),
      gameScore: 0,
      topScore: newTopScore
    });
  }

  handleOnClick = event => {
    let gameOver = false;
    const mappedPlanets = this.state.planets.map(planet => {
      if (planet.id === event) {
        planet.clicked ? gameOver = true : planet.clicked = true;
      }
      return planet;
    });
    gameOver ? this.gameOver(mappedPlanets) : this.continueGame(mappedPlanets);
  };

  render() {
    return (
      <Wrapper>
        <Header 
          gameScore={this.state.gameScore}
          topScore={this.state.topScore}
        />
        <Container>
          {this.state.planets.map(planet => (
            <Planet
              id={planet.id}
              key={planet.id}
              name={planet.name}
              image={planet.image}
              handleOnClick={this.handleOnClick}
            />
          ))}
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
