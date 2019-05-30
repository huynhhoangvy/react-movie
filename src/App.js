import React from 'react';
import './App.css';
import {Card, Button, CardColumns, Container, Nav, Navbar, Form, FormControl} from "react-bootstrap";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      isLoading: true,
      movies: [],
      genres: [],
      genresList: [],
      pageNumber : 1,
      searchText : "",
      id: ""
    }

  //bind #1
  // this.getMovieData = this.getMovieData.bind(this)

  }

  componentDidMount() {
    console.log("this is test didmount")
  this.getMovieData ()
  this.getGenresList ()
  }

// bind #2
// getMovieData = async() => {

  async getMovieData() {
  const {pageNumber} = this.state
  console.log("thisispagenum",pageNumber)
  const response = await fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=true&api_key=f25b9d6891f4f18bf76a32be085ea114&year=2000&page=${pageNumber}`)
  const jsonData = await response.json()
  console.log("jsondata first",jsonData)
  const newState = this.setState ({pageNumber: pageNumber + 1, movies: this.state.movies.concat(jsonData.results)}, () => console.log("thisisit",this.state))
  }
  async getGenresList () {
    const response = await fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=f25b9d6891f4f18bf76a32be085ea114&language=en-US`)
    const jsonGenresList = await response.json()
    console.log("hey",jsonGenresList)
    const newState = this.setState({genresList: jsonGenresList.genres}, () => console.log("genres list", this.state))
  }

  getMoviePosterUrl (path) {
    return `https://image.tmdb.org/t/p/w500/${path}`
  }

  getGenresName (id) {
    for (let i = 0; i < this.state.genresList.length; i++) {
      if (id == this.state.genresList[i].id) {
        id = this.state.genresList[i].name
        console.log("halleluja", id)
      }
    }
  }

  renderMovies() {
    return this.state.movies.map(({title, release_date, overview, poster_path, vote_average, id}) => {
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
              <ul><li>{moment(release_date).format("MMM YYYY")}</li></ul>
              <ul><li>{vote_average}</li></ul>
              <ul><li>{id}</li></ul>

            <Button variant="success">More >></Button>
          </Card.Body>
        </Card>
      )
    })
  }

  render () {
    console.log("render here")
    console.log(this.state.movies.length)
    console.log(this.state)
    return (
      <div>
      <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">...</Nav.Link>
            <Nav.Link href="#features">...</Nav.Link>
            <Nav.Link href="#pricing">...</Nav.Link>
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
