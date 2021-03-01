//Elis Tech Apple
//Elis Financials PayPal
//Elis Retail Target
//Elis AirBnB
//Elis Netflix
import { Card, Button } from 'react-bootstrap'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const sectors = {
    technology   : ["Apple", "Microsoft", "Google", "Pinterest", "Fastly"],
    financials   : ["Square", "Bank of America", "Berkshire Hathaway", "Salesforce", "BTC"],
    retail       : ["Costco", "Chipotle", "Home Depot", "Starbucks", "McDonalds"],
    property     : ["Amazon", "Zillow", "Shewin-Williams", 'Home Depot', 'AirBnB'],
    industry     : ['Kansas City Southern', "AMD", "Tesla", "Ecolab", "Rockwell Automation"],
    entertainment: ["Disney", "Nintendo", "Netflix", "Blizzard", "Corsair"]
}



export function Tech() {

let meta = sectors.technology

let map = meta.map(item => (
<Link to={`/${item}`} style={{ border: '3px solid pink', margin: '16px', height: '250px', background: 'linear-gradient(to top, #AAEDED , #001089) no-repeat fixed', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
<Card >
  <Card.Body>
      <Card.Title>{item}</Card.Title>
      <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
      </Card.Text>

  </Card.Body>
</Card>
</Link>
))

return(
    <section style={{border: '3px solid red', display: 'flex', flexDirection: 'column', }}>
        <h2>
            Technology
        </h2>

        <h3>
            Meta
        </h3>
            { map }
        <h3>
            All
        </h3>
    </section>

)
}

export function Financial() {
return(

    <h2>Financial</h2>

) 
}

export function Health() {
return <h2>Health</h2>;
}

export function Property() {
return <h2>Property</h2>;
}

export function Industrial() {
return <h2>Industrial</h2>;
}

export function Retail() {
return <h2>Retail</h2>
}



