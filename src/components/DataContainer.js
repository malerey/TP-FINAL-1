import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Card from './Card';

import { ArrowRight } from '@styled-icons/feather/ArrowRight';

export const ArrowIcon = styled(ArrowRight)`
color: #2196f3;
width: 30px;
height: 30px;
padding: 10px;
`

const Data = styled.section`
  padding: 30px 50px 80px 50px;
  background-color: #23272a;
  height: 550px;
  overflow: hidden;
 .encabezado {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    h3 {
      font-size: 32px;
      font-weight: 300;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DataContainer = ({resultsTrending, resultsMovie, resultsSerie, categoria, tipo, tiempo, titulo} ) => {
  
  // por que aca estas declarando nuevas variables para las props? 
  // Me llama la atencion porque despues en el JSX usas ambas, por ejemplo { resultsTrending && 

  const cardDataTrending = resultsTrending;
  const cardDataMovie = resultsMovie;
  const cardDataSerie = resultsSerie;

  // En este componente tenemos tres renderizados diferentes de acuerdo a las props, 
  // pero la estructura es muy parecida. 
  // Seria mejor adaptarlo para que sirva uno solo en todos los casos. 
  // Por ejemplo, en lugar de 

  // { resultsTrending && tiempo && ( <Link to={categoria + '/' + tipo + '/' + tiempo}>

  // y 

  // { resultsMovie && ( <Link to={categoria + '/' + tipo}>

  // yo haria una variable antes del return

  // let link = '' 
  // if (resultsTrending && tiempo) link = categoria + '/' + tipo + '/' + tiempo
  // else if (resultsMovie) link = categoria + '/' + tipo

  // Y en el JSX:

  // Link to={link}

  return (
    <>
      { resultsTrending && tiempo && (
        <Data>
          <div className='encabezado'>
            <h3>{titulo}</h3>
            <div className='icon'><Link to={categoria + '/' + tipo + '/' + tiempo}><ArrowIcon /></Link></div>
          </div>
          <div className='cards'>
            {cardDataTrending.map(cardInfo => (
              <Card key={cardInfo.id} info={cardInfo} mediaType={cardInfo.media_type}/>
            ))}
          </div>
        </Data>           
      )}

      { resultsMovie && (
        <Data>
          <div className='encabezado'>
            <h3>{titulo}</h3>
            <div className='icon'><Link to={categoria + '/' + tipo}><ArrowIcon /></Link></div>
          </div>
          <div className='cards'>
            {cardDataMovie.map(cardInfo => (
              <Card key={cardInfo.id} info={cardInfo} mediaType={categoria}/>
            ))}
          </div>
        </Data> 
      )}

      { resultsSerie && (
        <Data>
          <div className='encabezado'>
            <h3>{titulo}</h3>
            <div className='icon'><Link to={categoria + '/' + tipo}><ArrowIcon /></Link></div>
          </div>
          <div className='cards'>
            {cardDataSerie.map(cardInfo => (
              <Card key={cardInfo.id} info={cardInfo} mediaType={categoria}/>
            ))}
          </div>
        </Data>           
      )}
    </>
  );
}

export default DataContainer;
