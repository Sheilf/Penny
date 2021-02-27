import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Card, Button } from 'react-bootstrap'

import '../flex.css'
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './CardGrid.css'


export const CardGrid = () => {

  return (
    
  
      <section style={{ textShadow: '1px 1px black', color: 'white', fontWeight: 'bold', display: 'flex', flexWrap: 'wrap',  justifyContent:'center', width: '100%', border: '3px solid purple'}}>
          

          <Link to="/technology" style={{ margin: '16px', width:'25%', height: '250px', background: 'linear-gradient(to top, #AAEDED , #001089) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card >
              <Card.Body>
                  <Card.Title>Technology</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>

              </Card.Body>
            </Card>
          </Link>

          <Link to="/financial" style={{ margin: '16px', width:'25%', height: '250px', background: 'linear-gradient(to top, #AAEDED , #001089) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card>
              <Card.Body>
                  <Card.Title>Financial</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>

              </Card.Body>
            </Card>
          </Link>

          <Link to="/retail" style={{ margin: '16px', width:'25%', height: '250px', background: 'linear-gradient(to top, #AAEDED , #001089) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card>
              <Card.Body>
                  <Card.Title>Retail</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>

              </Card.Body>
            </Card>
          </Link>

          <Link to="/health" style={{ margin: '16px', width:'25%', height: '250px', background: 'linear-gradient(to top, #AAEDED , #001089) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card>
              <Card.Body>
                  <Card.Title>Health</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>

              </Card.Body>
            </Card>
          </Link>

          <Link to="/property" style={{ margin: '16px', width:'25%', height: '250px', background: 'linear-gradient(to top, #AAEDED , #001089) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card>
              <Card.Body>
                  <Card.Title>Property</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>

              </Card.Body>
            </Card>
          </Link>

          <Link to="/industrial" style={{ margin: '16px', width:'25%', height: '250px', background: 'linear-gradient(to top, #AAEDED , #001089) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card>
              <Card.Body>
                  <Card.Title>Industrial</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>

              </Card.Body>
            </Card>
          </Link>

      </section>


          

  );
}

