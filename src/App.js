import './App.css';
import analyzeImage from './functions/azure-image-analysis';
import React, { useState } from 'react';

function App() {

  const [textInputValue, setTextInputValue] = useState('');
  const [displayImage, setDisplayImage] = useState(null); 
  const [caption, setCaption] = useState('');

  async function handleAnalyze(imageUrl) {
    if (!textInputValue) {
      return;
    }

    imageUrl = textInputValue;
    const caption = await analyzeImage(imageUrl);
    setDisplayImage(imageUrl);
    setCaption(caption);
  }

  return (
    <div className="App">
      <h1> ---- Computer Vision ---- </h1>

      <div>
       <label htmlFor="inputField"><p>Insert URL or type prompt:</p></label>
       <input
       className="text-box"
       type="text"
       value={textInputValue}
       onChange={(e) => setTextInputValue(e.target.value)}
       placeholder="Enter URL to analyze or textual prompt to generate an image"
       />
     </div>


     <div>
       <button onClick={handleAnalyze} className="button" type="generate">Analyze</button>
       <button className="button" type="analyze">Generate</button>
     </div>

     {displayImage && (
       <div className="results">
          <p className="caption"><strong>Caption:</strong> {`This is likely ${caption}`} </p>
          <img src={displayImage} alt="Analyzed" className="analyzed-image" />
       </div>
     )}

    </div>
  );
}

export default App;
