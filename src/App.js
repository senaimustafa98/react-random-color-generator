import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  return (
    <>
      <h1
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize: '50px',
          margin: '35px',
          border: '5px',
        }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '35px',
          margin: '50px 0px',
        }}
      />
      <div
        id="color-display"
        style={{
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '100px',
          margin: '50px 0px',
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 'ridge black 10px',
          borderRadius: '50px',
          backgroundColor: 'pink',
          justifyContent: 'center',
          minWidth: '10em',
          minHeight: '10em',
          maxWidth: '350px',
          margin: '0 auto',
        }}
      >
        <button
          style={{
            width: '100%',
            height: '100%',
            margin: '0',
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            fontSize: '35px',
            boxSizing: 'border-box',
          }}
          onClick={() => {
            setColor(randomColor());
          }}
        >
          Generate
        </button>
      </div>
    </>
  );
}
