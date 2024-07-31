// import React, { useState } from "react";
// import QRCode from "qrcode.react";

// const QRCodeGenerator = () => {
//   const [text, setText] = useState("");
//   const [qrImage, setQrImage] = useState("");

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleGenerateQR = () => {
//     if (text) {
//       // Create a canvas element
//       const canvas = document.createElement("canvas");
//       QRCode.toCanvas(canvas, text);

//       // Convert canvas to Base64 string
//       const dataURL = canvas.toDataURL();

//       setQrImage(dataURL);

//       // Generate the QR code
//       // setQrImage(`data:image/png;base64,${QRCode.toDataURL(text)}`);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Enter text or URL"
//       />
//       <button onClick={handleGenerateQR}>Generate QR Code</button>
//       {qrImage && <img src={qrImage} alt="QR Code" />}
//     </div>
//   );
// };

// export default QRCodeGenerator;

import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrImage, setQrImage] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);

    setQrImage(<QRCode value={e.target.value} />);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text or URL"
      />
      {text && <QRCode value={text} />}
      <span className="mx-5"> {qrImage}</span>
      {qrImage && <img src={qrImage} alt="QR Code" />}
    </div>
  );
};

export default QRCodeGenerator;
