
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../../components/accordation';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { getVideoLink } from '../../../client/youtubeApi';
import Test from '../../../assets/Images/linking1.png'
import Viewer from './viewer';

const nodeTypes = {
  video: VideoNode,
  audio: AudioNode,
};

function VideoNode({ data }) {
  return (
    <div>
      {data.src ? (
        <video controls style={{ width: '100%', height: '100%' }}>
          <source src={data.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

function AudioNode({ data }) {
  return (
    <div>
      <audio controls style={{ width: '100%', height: '100%' }}>
        <source src={data.src} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [videoLink, setVideoLink] = useState(null);
  useEffect(() => {
    const videoId = 'JGwWNGJdvx8'; 

    getVideoLink(videoId).then((url) => {
      setVideoLink(url);
    });
  }, []);

  const initialElements = [
    {
      id: '1',
      type: 'video',
      data: { src: videoLink }, // Set the video link as the src
      position: { x: 100, y: 100 },
      style: {
        width: 300,
        height: 200,
      },
    },
    {
      id: '2',
      type: 'audio',
      data: { src: '' },
      position: { x: 400, y: 100 },
      style: {
        width: 300,
        height: 100,
      },
    },
  ];

  return (
    <div className="flex">
      <div className="w-4/5 bg-gray-700 h-12">
        <div className="px-3">
          <Accordion title={Test}>
            <div style={{ height: 'calc(100vh - 100px)' }}>
              <ReactFlow
                elements={initialElements}
                nodeTypes={nodeTypes}
                snapToGrid={true}
                snapGrid={[15, 15]}
                onConnect={(params) => console.log('handle connect', params)}
                onElementsRemove={(elements) =>
                  console.log('handle remove', elements)
                }
              >
                <MiniMap />
                <Controls />
              </ReactFlow>
            </div>
          </Accordion>
        </div>
      </div>
      <div className="bg-gray-900 w-1/4 flex flex-col  px-2 py-2">
      <div className='rounded-md'>
        <div className='bg-gray-900 w-1/4'>
        <div className='bg-gray-900'>
        <iframe width="270" height="315" src="https://www.youtube.com/embed/qIAuuAa4j-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    </div>
    <Viewer/>
      </div>    </div>
  );
}
