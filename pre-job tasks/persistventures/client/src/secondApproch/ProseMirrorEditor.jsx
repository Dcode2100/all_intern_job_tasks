import React, { useState } from "react";
// import { EditorState } from "prosemirror-state";
// import { ProseMirror } from "@nytimes/react-prosemirror";
// import { schema } from "prosemirror-schema-basic";
import IdeaInput from "./IdeaInput";
import DropdownList from "./DropdownList";
import SearchBarSecond from "./SearchBarSecond";

function ProseMirrorEditor() {
  const [ideas, setIdeas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [referencedIdeas, setReferencedIdeas] = useState([
    { id: "1", text: "idea1" },
    { id: "2", text: "idea2" },
    { id: "3", text: "idea3" },
    { id: "4", text: "idea4" },
  ]);

  const handleNewIdea = () => {
    setIdeas((prevIdeas) => [...prevIdeas, ""]);
  };

  const handleIdeaChange = (index, idea) => {
    setIdeas((prevIdeas) => {
      const updatedIdeas = [...prevIdeas];
      updatedIdeas[index] = idea;
      return updatedIdeas;
    });
  };

  const handleDropdownSelection = (index, selectedIdea) => {
    setIdeas((prevIdeas) => {
      prevIdeas[index] = prevIdeas[index].replace("<>", "");
      const updatedIdeas = [...prevIdeas];
      updatedIdeas[index] += `<><span class="text-blue-500">${selectedIdea}</span>`;
      return updatedIdeas;
    });
  };
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredIdeas = ideas.filter((idea) =>
    idea.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[70%] m-auto mt-10 border-b-2 ">
      <SearchBarSecond handleSearch={handleSearch} onClick={handleNewIdea} />
      {filteredIdeas.map((idea, index) => (
        <div
          key={index}
          className="flex items-center justify-start relative border-t-2"
        >
          <IdeaInput
            value={idea}
            onChange={(e) => handleIdeaChange(index, e.target.value)}
          />

          {idea.endsWith("<>") && (
            <select
              className="rounded border w-[20%] p-2 h-min transition duration-300 bg-black text-white ease-in-out  "
              onChange={(e) => handleDropdownSelection(index, e.target.value)}
            >
              <option>Select Idea</option>
              {referencedIdeas.map((idea) => (
                <option
                  key={idea.id}
                  value={idea.text}
                  className="bg-black text-white custom-option w-min"
                 
                  style={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  {idea.text}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProseMirrorEditor;
