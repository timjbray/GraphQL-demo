import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { ApolloProvider } from 'react-apollo';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import '../App.css';
import { MovieList } from '../MovieList';
import { testSchema } from '../setupTestSchema';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema: testSchema }),
});

storiesOf('Episodes', module)
  .add('Nav bar', () => (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Tim's Marvelous TV App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="TV Show" id="basic-nav-dropdown">
            {['Series 1', 'Series 2', 'Series 3'].map(s => (
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
  ))
  .add('Episode List', () => (
    <ApolloProvider client={client}>
      <div className="App-content">
        <MovieList />
      </div>
    </ApolloProvider>
  ));
