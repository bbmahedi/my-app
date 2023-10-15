import React, { useState } from "react";

const DragAndDrop = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const handleDragStart = (e, item) => {
    // setCurrentItem(item);
    setCurrentItem({ type: item, name: "" });
  };

  const handleMultiValue = (e, item) => {
    // setCurrentItem(item);
    setCurrentItem({ type: item, label: "", name: "", list: [{ name: "" }] });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (currentItem) {
      setItems([...items, currentItem]);
      setCurrentItem(null);
    }
  };

  const handleLabel = (i, e) => {
    const values = [...items];
    values[i].name = e.target.value;
    setItems(values);
  };

  const handleMultiLabel = (i, j, e) => {
    const values = [...items];
    values[i].list[j].name = e.target.value;
    setItems(values);
  };

  //   const list = [
  //     { id: 1, name: "Person" },
  //     { id: 2, name: "Virtual" },
  //   ];

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "1px dashed #ccc",
          minHeight: "100px",
          padding: "10px",
        }}
      >
        {items.length > 0 ? (
          <>
            {items.map((item, i) => (
              <div key={i}>
                <input
                  type="text"
                  placeholder="Write the label name"
                  value={item.name}
                  onChange={(e) => handleLabel(i, e)}
                />
                {item.type === "textarea" ? (
                  <textarea />
                ) : item.type === "radio" ? (
                  <>
                    {item.list.map((item, j) => (
                      <span key={j} className="d-inline-block">
                        <input
                          value={item.id}
                          type="radio"
                          name="radioCheck"
                          //   onClick={handleChange}
                        />
                        <input
                          type="text"
                          placeholder="Write the label name"
                          value={item.name}
                          onChange={(e) => handleMultiLabel(i, j, e)}
                        />
                        <label className="mx-2">{item.name}</label>
                      </span>
                    ))}
                  </>
                ) : (
                  <input type={item.type} value="" />
                )}
              </div>
            ))}

            <br />
            <button>Save</button>
          </>
        ) : (
          "Drop Items Here"
        )}
      </div>

      <input
        type="text"
        draggable
        onDragStart={(e) => handleDragStart(e, "text")}
        className="pointer"
        disabled
      />
      <input
        type="date"
        draggable
        onDragStart={(e) => handleDragStart(e, "date")}
        className="pointer"
      />
      <textarea
        draggable
        onDrag={(e) => handleDragStart(e, "textarea")}
        className="pointer"
      />
      <input
        type="file"
        draggable
        onDragStart={(e) => handleDragStart(e, "file")}
        className="pointer"
      />
      <input
        type="radio"
        draggable
        onDragStart={(e) => handleMultiValue(e, "radio")}
        className="pointer"
      />
      <input
        type="dr"
        draggable
        onDragStart={(e) => handleMultiValue(e, "radio")}
        className="pointer"
      />
      {/* <div
        draggable
        onDragStart={(e) => handleDragStart(e, "Item 1")}
        style={{ border: "1px solid #000", padding: "5px", margin: "5px" }}
      >
        Item 1
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "Item 2")}
        style={{ border: "1px solid #000", padding: "5px", margin: "5px" }}
      >
        Item 2
      </div> */}
    </div>
  );
};

export default DragAndDrop;
