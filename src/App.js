import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, Button, CardColumns, Container, Nav, Navbar, Form, FormControl, CardGroup} from "react-bootstrap";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      isLoading: true,
      movies: [],
      genres: [],
      pageNumber : 1,
      searchText : "",
    }

  //bind #1
  // this.getMovieData = this.getMovieData.bind(this)

  }

componentDidMount() {
this.getMovieData ()
}



// bind #2
// getMovieData = async() => {

  async getMovieData() {
  const {pageNumber} = this.state
  const response = await fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=true&api_key=f25b9d6891f4f18bf76a32be085ea114&year=2000&page=${pageNumber}`)
  const jsonData = await response.json()
  console.log(jsonData)
  const newState = 
  this.setState ({
    pageNumber: pageNumber + 1,
    movies: this.state.movies.concat(jsonData.results)
  }, () => console.log("thisisit",this.state))
}

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

getMoviePosterUrl (path) {
  return `https://image.tmdb.org/t/p/w500/${path}`
}

renderMovies() {
  return this.state.movies.map(({title, 
    release_date, 
    overview, 
    poster_path,
    vote_average, 
    backdrop_path}) => {
    return (
      // <Card bg="secondary">
      <Card bg="secondary" key={title}>
        {/* <Card.Img top width="100%" variant="top" src={this.getMoviePosterUrl(poster_path)}  /> */}
        <Card.Img width="100%" variant="top" src={this.getMoviePosterUrl(poster_path)}  />
        <Card.Body>
          <Card.Title style={{fontSize: 40, fontWeight: "bold"}}>{title}</Card.Title>
          <Card.Text>
            {overview}
          </Card.Text>
            <ul><li>{moment(release_date).fromNow()}</li></ul>
            <ul><li>{vote_average}</li></ul>
          <Button variant="success">More >></Button>
        </Card.Body>
      </Card>
    )
  })
}

  render () {
    console.log(this.state.movies.length)
    console.log(this.state)
    return (
      <div>
      <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      <Container>
        
        <CardColumns>
          {this.renderMovies()}
        </CardColumns>

        {/* <button onClick={this.getMovieData}>Get more movies</button> */}

        {/* bind #3 */}
        <Button onClick={() => this.getMovieData()}>Get more movies</Button>
      </Container>
      </div>
    );
  }
}

export default App;
