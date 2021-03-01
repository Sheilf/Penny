import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const SectorGridWrapper = styled.section`
  text-shadow: 1px 1px black;
  color: white;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const LinkWrapper = styled(Link)`
  margin: 16px;
  width: 25%;
  height: 250px;
  background: ${ props => `linear-gradient(to top, ${props.theme}, ${props.theme}) no-repeat fixed`};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  color: white;
  outline: none;
  
  &:visited{
      color: white;
  }
`;
