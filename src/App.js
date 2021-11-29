import React from 'react';
import imageInSrc from "./imageInSrc.jpg"
import "./style.css"

const App=() => {
  return (
    <>
    <div style={{ border:"solid 1px black", maxWidth:"100vw"}}>

      <h1 class="title">Your name here</h1>

        <br/ >

        <img src={imageInSrc} alt="screenshot" />

          <br/ >

 <img src="/imageInPublic.jpg" alt="screenshot" />

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
</>
  );
}

export default App;
