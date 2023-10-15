// import logo from "./logo.svg";
import "./App.css";
// import DeviceDetector from "device-detector-js";
import { Excalidraw } from "@excalidraw/excalidraw";

function App() {
  // const deviceDetector = new DeviceDetector();
  // const userAgent =
  //   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
  // const device = deviceDetector.parse(userAgent);

  // console.log(deviceDetector.parse(window.navigator.userAgent));
  // console.log(window);
  // var isMobile = test(navigator.userAgent);
  // console.log(isMobile);

  // const isMobile = () => {
  //   return /Android|iPhone/i.test(navigator.userAgent);
  // };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
      {/* <Link to='/'>to</Link> */}
      <div style={{ height: "500px" }}>
        <Excalidraw
          initialData={{
            elements: [
              {
                type: "rectangle",
                version: 141,
                versionNonce: 361174001,
                isDeleted: false,
                id: "oDVXy8D6rom3H1-LLH2-f",
                fillStyle: "hachure",
                strokeWidth: 1,
                strokeStyle: "solid",
                roughness: 1,
                opacity: 100,
                angle: 0,
                x: 100.50390625,
                y: 93.67578125,
                strokeColor: "#000000",
                backgroundColor: "transparent",
                width: 186.47265625,
                height: 141.9765625,
                seed: 1968410350,
                groupIds: [],
              },
            ],
            appState: { zenModeEnabled: true, viewBackgroundColor: "#a5d8ff" },
            scrollToContent: true,
          }}
        />
      </div>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{/Mobi/.test(navigator.userAgent)}</p>
        {isMobile ? <p> Mobile</p> : <p>Desktop</p>}
        {(window.isMobile = true ? <p> Mobile</p> : <p>Desktop</p>)}
      </header>
    </div> */}
    </>
  );
}

export default App;
