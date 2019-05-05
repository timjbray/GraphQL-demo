import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { MovieList } from './MovieList';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App = () => {
  const [show, setShow] = useState();

  return (
    <ApolloProvider client={client}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <div className="App">
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">Tim's Marvelous TV App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="TV Show" id="basic-nav-dropdown">
                {['Silicon Valley', 'The Walking Dead', 'Game of Thrones'].map(s => (
                  <NavDropdown.Item onSelect={() => action(s)}>{s}</NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="App-content">
          <MovieList show={show} />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
