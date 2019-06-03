import React from 'react';
import './App.css';
import { Card, Button, CardColumns, Container, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import moment from "moment";
import PaginationComponent from "react-reactstrap-pagination";

import Modal from "react-modal";
import YouTube from '@u-wave/react-youtube';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      movies: [],
      genres: [],
      genresList: [],
      searchText: "",
      id: "",
      selectedPagination: 1,
      modalIsOpen: false,
      selectedMovieId: null,
    }

    //bind #1
    // this.getMovieData = this.getMovieData.bind(this)

  }

  componentDidMount() {
    console.log("this is test didmount")
    this.getGenresList()
    this.getMovieData()
  }

  // bind #2
  // getMovieData = async() => {

  async getMovieData() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=true&api_key=f25b9d6891f4f18bf76a32be085ea114&year=2005&page=${this.state.selectedPagination}`)
    const jsonData = await response.json()
    console.log("jsondata first", jsonData)
    const newState = this.setState({ movies: jsonData.results }, () => console.log("thisisit", this.state))
  }

  async getGenresList() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=f25b9d6891f4f18bf76a32be085ea114&language=en-US`)
    const jsonGenresList = await response.json()
    console.log("hey", jsonGenresList)
    const newState = this.setState({ genresList: jsonGenresList.genres }, () => console.log("genres list", this.state))
  }

  async search() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=true&api_key=f25b9d6891f4f18bf76a32be085ea114&year=2005&page=${this.state.selectedPagination}&query=${this.state.searchText}`)
    const jsonData = await response.json()
    const newState = this.setState({ movies: jsonData.results })
  }

  getMoviePosterUrl(path) {
    return `https://image.tmdb.org/t/p/w500/${path}`
  }

  getGenresName(id) {
    for (let i = 0; i < this.state.genresList.length; i++) {
      if (id === this.state.genresList[i].id) {
        id = this.state.genresList[i].name
        console.log("halleluja", id)
      }
    }
  }

  handlePagination = selectedPagination => {
    this.setState({ selectedPagination: selectedPagination }, this.getMovieData)
  }

  // Click to open modal
  async openModal(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=f25b9d6891f4f18bf76a32be085ea114`)
    const jsonData = await response.json()
    
    this.setState({
      selectedMovieId: jsonData.results[0].key,
      modalIsOpen: true,
    })
  }

  renderMovies() {
    return this.state.movies.map(({ title, release_date, overview, poster_path, vote_average, id }) => {
      return (
        // <Card bg="secondary">
        <Card bg="secondary" key={title}>
          {/* <Card.Img top width="100%" variant="top" src={this.getMoviePosterUrl(poster_path)}  /> */}
          <Card.Img width="100%" variant="top" src={this.getMoviePosterUrl(poster_path)} />
          <Card.Body>
            <Card.Title style={{ fontSize: 40, fontWeight: "bold" }}>{title}</Card.Title>
            <Card.Text>
              {overview}
            </Card.Text>
            <ul><li>Release date: {moment(release_date).format("MMM YYYY")}</li></ul>
            <ul><li>Rating: {vote_average}</li></ul>
            <ul><li>Genres: {id}</li></ul>
            <Button onClick={() => this.openModal(id)} variant="dark">Trailer >></Button>
          </Card.Body>
        </Card>
      )
    })
  }

  render() {
    console.log("render here")
    console.log(this.state.movies.length)
    console.log(this.state)
    return (
      <div className="main">
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">TMDB</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Genres</Nav.Link>
            <Nav.Link href="#features">...</Nav.Link>
            <Nav.Link href="#pricing">...</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchText} onChange={(e) => {
              this.setState({ searchText: e.target.value })
              console.log("heyyyy", e.target.value)
            }} />
            <Button variant="outline-light" onClick={this.search}>Search</Button>
          </Form>
        </Navbar>
        <Container>

          <CardColumns id="movieCards" className="">
            {this.renderMovies()}
          </CardColumns>

          {/* <button onClick={this.getMovieData}>Get more movies</button> */}
          {/* bind #3 */}
          {/* <PaginationComponent totalItems={50} pageSize={5} onSelect={this.handleSelected} /> */}
          <PaginationComponent totalItems={15} pageSize={1} onSelect={this.handlePagination} maxPaginationNumbers={5} />

        </Container>

        <Modal
          closeTimeoutMS={200}
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.setState({ modalIsOpen: false })}
        >
          <YouTube
            video={this.state.selectedMovieId}
            height="100%"
            width="100%"
            autoplay
          />
        </Modal>
      </div>
    );
  }
}

export default App;
