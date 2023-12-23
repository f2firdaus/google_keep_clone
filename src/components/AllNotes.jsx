import React, { useState } from "react";
import { CiPickerEmpty } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const AllNotes = ({ addItems, setAddItems }) => {
  const [showField, setShowField] = useState(false);
  const [updatedInput, setUpdatedInput] = useState("");
  const [updatedtextArea, setUpdatedtextArea] = useState("");
  const deleteNotes = (idx) => {
    const updated = [...addItems];
    updated.splice(idx, 1);
    setAddItems(updated);
    setUpdatedInput("");
    setUpdatedtextArea("");
    localStorage.clear();
  };
  const showAllField = (idx) => {
    setShowField((prev) => (prev === idx ? null : idx));
  };
  const updateAllNotes = (idx) => {
      if (updatedInput.length > 0 && updatedtextArea.length > 0) {
      addItems[idx].title = updatedInput;
      addItems[idx].content = updatedtextArea;

      localStorage.setItem("items", JSON.stringify(addItems));
      
    }
    setShowField(false);
    
  };
  return (
    <div className="note_box">
      {addItems.map((item, idx) => (
        <>
          <div className="inside" key={idx}>
            {showField === idx ? (
              <>
                <div className="input_textarea allnotes_field">
                  <div className="input_box">
                    <input
                      name="title"
                      className="input"
                      type="text"
                      onChange={(e) => setUpdatedInput(e.target.value)}
                      value={updatedInput}
                      placeholder="title"
                    />
                  </div>

                  <div className="textarea">
                    <textarea
                      value={updatedtextArea}
                      onChange={(e) => setUpdatedtextArea(e.target.value)}
                      name="content"
                      id=""
                      cols="30"
                      onBlur={() => updateAllNotes(idx)}
                      rows="2"
                      className="textarea1"
                      placeholder="Take a note"
                    ></textarea>
                  </div>
                </div>
              </>
            ) : (
              <div className="inside-content" onClick={() => showAllField(idx)}>
                <span className="title">{item.title}</span>
                <span>{item.content}</span>
                <span className="more_btn">
                  <button className="more" onClick={() => deleteNotes(idx)}><MdDelete/></button>
                </span>
                <span>
                  <CiPickerEmpty />{" "}
                </span>
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default AllNotes;
