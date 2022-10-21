import { MDBContainer, MDBRipple } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import "./VideoBg.scss";

import { client } from "../../client";
import { Link } from "react-router-dom";

const VideoBg = () => {
  const [videoBg, setVideoBg] = useState([]);
  //ADD DYNAMIC VID SRC
  useEffect(() => {
    const query = '*[_type == "home"]';
    // thats why we use this .then here to catch the promise
    //passing in the data mapped parameter to setAboutCards
    client.fetch(query).then((data) => setVideoBg(data)); //returns a promise
  }, []);
  //MAKE SURE TO ADD EMPTY ARRAY TO AVOID INFINITE LOOP;

  return (
    <MDBContainer fluid className="shadow-5-strong bg-info py-2">
      <MDBRipple className='w-100 bg-image hover-overlay shadow-5-strong rounded'
        rippleTag='div'
      rippleColor='light'>
        {videoBg.map((video, index) => (
          
          <div  key={video + index}className="w-100">
            <video
              playsInline={true}
              controls={false}
              autoPlay={true}
              loop={true}
              className="app__video-Bg"
              loading="lazy"
            >
              <source src={video?.homevideo} type="video/webm" />
            </video>
            {/* Hover Jumbo Tron */}
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>{video?.title}</h1>
              <h4 className='mb-3'>{video?.description}</h4>
              <Link className='btn btn-outline-info btn-lg' to='/memberShip' role='button'>
                MemberShip
              </Link>
            </div>
          </div>
        </div>
          </div>
        ))}

      </MDBRipple>
    </MDBContainer>
  );
};

export default VideoBg;

/**
 * JavaScript References 
 * 
 * hooks-state-ReactJS - Docs From 
 * https://reactjs.org/docs/hooks-state.html
 * hooks-useEffect()-ReactJS - Docs From 
 * https://reactjs.org/docs/hooks-effect.html
 * hooks-Reference-ReactJS - Docs From 
 * https://reactjs.org/docs/hooks-reference.html
 * Components and Props -ReactJS - Docs From 
 * https://reactjs.org/docs/components-and-props.html
 * 
 * https://blog.logrocket.com/solve-react-useeffect-hook-infinite-loop-patterns/
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 * 
 * 
 * Assets (Videos, Images , Converters)
 * 
 */



//REFERENCES
/***
 *
 * 1. [MDB-Colors](https://mdbootstrap.com/docs/react/content-styles/colors/)
 * 2. [Pankaj, 2022] (https://www.digitalocean.com/community/tutorials/java-remove-character-string )
 * 3. [MDB - NavBar](https://mdbootstrap.com/docs/react/navigation/navbar/)
 * 4. [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 */
