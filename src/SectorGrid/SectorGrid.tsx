import { Card, Button } from 'react-bootstrap'
import {Link} from "react-router-dom";
import '../styles/flex.css'
import {LinkWrapper, SectorGridWrapper} from './SectorGrid.styles'
import { Views } from '../App.data'

export const SectorGrid = () => {

  let sectors = Views.sectors.map(item => (
    <LinkWrapper to={`/${item.name}`} theme={item.theme}>
      <Card >
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                Description
            </Card.Text>

        </Card.Body>
      </Card>
    </LinkWrapper>
  ))

  return (
    
  
    <SectorGridWrapper>
          
      { sectors }

    </SectorGridWrapper>


          

  );
}

