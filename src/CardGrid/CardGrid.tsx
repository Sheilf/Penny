import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Card, Button } from 'react-bootstrap'

import '../flex.css'
import { useState, useEffect } from 'react'


export const CardGrid = () => {

  return (
    

    <section style={{ textShadow: '1px 1px black', color: 'white', fontWeight: 'bold', display: 'flex', flexWrap: 'wrap',  justifyContent:'center', width: '100%', border: '3px solid purple'}}>
         

        <Card style={{ margin: '16px', width:'25%', height: '250px', background: 'linear-gradient(to top, #011BE1 , #001089) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card.Body>
                <Card.Title>Technology</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>

            </Card.Body>
        </Card>

        <Card style={{  margin: '16px', width: '25%',  height: '250px', background: 'linear-gradient(to top, #00EB00 , #23A800) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card.Body>
                <Card.Title>Financial</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>

            </Card.Body>
        </Card>

        <Card style={{  margin: '16px', width: '25%',  height: '250px', background: 'linear-gradient(to top, #FF0000 , #BF0016) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card.Body>
                <Card.Title>Health</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>

            </Card.Body>
        </Card>

        <Card style={{  margin: '16px', width: '25%',  height: '250px', background: 'linear-gradient(to top, #FFE100 , #C7B200) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card.Body>
                <Card.Title>Retail</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>

            </Card.Body>
        </Card>

        <Card style={{  margin: '16px', width: '25%',  height: '250px', background: 'linear-gradient(to top, #FFB800 , #C77000) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card.Body>
                <Card.Title>Industrial</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>

            </Card.Body>
        </Card>
        
        <Card style={{  margin: '16px', width: '25%', height: '250px', background: 'linear-gradient(to top, #5301E0 , #700383) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card.Body>
                <Card.Title>Real Estate</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>

            </Card.Body>
        </Card>
        
    </section>
  );
}

