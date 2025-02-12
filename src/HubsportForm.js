import React, { useState } from "react";
// import HubspotForm from "react-hubspot-form";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";
import { Modal } from "react-bootstrap";

export default function HubsportForm() {
  const [modalForStaus, setModalForStatus] = useState(false);
  const data = useHubspotForm({
    portalId: "145391758",
    // formId: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    formId: "76d651f6-6b56-4c9b-9809-588c4c07704c",
    target: "#my-hubspot-form",
  });

  return (
    <div>
      {console.log(data)}
      {console.log(data.loaded)}
      {console.log("Error", data.error)}
      {console.log("formCreated", data.formCreated)}
      <h1>Embed Form Below</h1>
      <div id="my-hubspot-form"></div>
      <button onClick={() => setModalForStatus(true)}>Hello</button>
      <Modal
        size="lg"
        show={modalForStaus}
        onHide={() => setModalForStatus(false)}
        centered
      >
        <Modal.Body>
          <iframe
            src="https://share-eu1.hsforms.com/2dtZR9mtWTJuYCViMTAdwTA2ek8zy"
            width="100%"
            height="800px"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
