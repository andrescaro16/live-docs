import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import React from "react";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit justify-center items-center gap-2">
          <p className="document-title">Document title</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
