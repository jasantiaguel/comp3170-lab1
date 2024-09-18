import { createElement } from "react"
import './App.css'

function App() {

  const heading = createElement('h1', { id: "myheading"}, 'Hello, World!')

  return (
    <>
      <h1 className="heading">MyTunes</h1>
        <div className="content">
          <img src="https://i.scdn.co/image/ab6761610000e5ebc9d43ed95cf5550a1cb7aa43" alt="musiq soulchild" />
          
          <div className="albums">
            <h2>Musiq Soulchild Albums</h2>
            <details>
              <summary>Aijuswanaseing</summary>
              <ol>
                <li>Scratch Introlude</li>
                <li>You and Me</li>
                <li>Just Friends</li>
                <li>My Girl</li>
                <li>Speechless</li>
                <li>Aimewitue</li>
              </ol>
            </details>
            <details>
              <summary>OnMyRadio</summary>
              <ol>
                <li>backagain</li>
                <li>ifuleave</li>
                <li>special</li>
                <li>loveofmylife</li>
                <li>someone</li>
                <li>sobeautiful</li>
              </ol>
            </details>
          </div>
        </div>
    </>
  );
}

export default App
