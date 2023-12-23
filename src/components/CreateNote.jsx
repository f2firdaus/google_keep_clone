import React, { useEffect, useRef, useState } from "react";

const CreateNote = ({
  note,
  setNote,
  setAddItems,
  addItems,
  showInput,
  setShowInput,
}) => {
    const [row, setRow] = useState(2);
    

  const submitKeep = (e) => {
    e.preventDefault();
    if (note.title.trim() !== "" || note.content.trim() !== "") {
      setAddItems([note, ...addItems]);
      setNote({
        title: "",
        content: "",
      });
      setShowInput(false);
      setRow(row+1)
    }
  };
  useEffect(() => {
    if (addItems?.length > 0) {
      localStorage.setItem("items", JSON.stringify(addItems));
    }
  }, [addItems]);
  
  const inputValueChange = (e) => {
    const { name, value } = e.target;

    setNote({
      ...note,
      [name]: value,
    });
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    console.log(items);
    if (items) {
      setAddItems(items);
    }
  }, []);

  return (
    <div className="main-note">
      <form action="" onSubmit={submitKeep}>
        {showInput ? (
          <>
            <div className="input_textarea">
              <div className="input_box">
                <input
                  name="title"
                  className="input"
                  type="text"
                  onChange={inputValueChange}
                  value={note.title}
                  placeholder="title"
                />
              </div>

              <div className="textarea">
                <textarea
                  onSubmit={submitKeep}
                  value={note.content}
                  onChange={inputValueChange}
                  name="content"
                  id=""
                  cols="30"
                  rows={row}
                  className="textarea1"
                  placeholder="Take a note"
                ><br/></textarea>
              </div>
            </div>
            <div className="submit_btns">
              <button type="submit" >Add Keep</button>
            </div>
          </>
        ) : (
          <div className="input_field">
            <input
              type="text"
              className="input1"
              onClick={() => setShowInput(true)}
              placeholder="Keep a Notes"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateNote;
