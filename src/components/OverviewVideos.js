import React from 'react';

import styled from 'styled-components';

import Card from './Card';

const VideoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
`

const Video = styled.section`
  width: 100%;
  padding: 30px 50px 80px 50px;
  background-color: #23272a;
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
    justify-content: space-around;
  }
`

const OverviewVideos = ({videos}) => {

  const overviewVideo = videos.results;
  
  return (
    <>
      <VideoContainer>
        <Video>
          <div className='encabezado'>
            <h3>Videos</h3>
          </div>

          {overviewVideo && (
            <div className='cards'>
              {overviewVideo.map(video => (
                <Card key={video.id} video={video}/>))}
            </div>    
          )}
        </Video>
      </VideoContainer>
    </>
  );
}

export default OverviewVideos;
