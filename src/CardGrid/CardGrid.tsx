import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Card, Button } from 'react-bootstrap'

import '../flex.css'
import { useState, useEffect } from 'react'
export const CardGrid = () => {

  return (
    

    <section className="flex-column-centered" style={{width: '100%'}}>
        <h2> Cards </h2>
         

        <Card style={{ width: '18rem', background: 'linear-gradient(to top, #FFF5CA , #FF64FF) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/b6/9c/bb/b69cbb3258ed8f69b4e988eab4946a9a.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>

                <Button variant="primary">Data</Button>
            </Card.Body>
        </Card>

    </section>
  );
}

