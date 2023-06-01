"use client";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Checklist from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import { SimpleImage } from "@editorjs/simple-image";

const DEFAULT_INITIAL_DATA = () => {
  return {
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "This is my awesome editor!",
          level: 1,
        },
      },
    ],
  };
};

// const EDITTOR_HOLDER_ID = "editorjs";

const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);
  const [updatedData, setUpdatedData] = useState("");

  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      // holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
        editor.save().then((response) => setUpdatedData(response));
      },
      onChange: () => {
        editor.save().then((response) => setUpdatedData(response));
      },
      autofocus: true,
      tools: {
        header: Header,
        checklist: Checklist,
        code: Code,
        delimiter: Delimiter,
        // image: Image,
        warning: Warning,
        quote: Quote,
      },
    });
  };

  const handleClick = () => {
    console.log(ejInstance.current);
    ejInstance.current
      .save()
      .then((outputData) => {
        setUpdatedData(outputData);
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  // {/* <div id={EDITTOR_HOLDER_ID}> </div> */ */}
  return (
    <>
      <div className="flex px-10">
        <div className="w-1/2">
          <p> JSON </p>
          <pre className="w-full">{JSON.stringify(updatedData, null, 2)}</pre>
        </div>
        <div className="w-1/2">
          <div className="text-center">EDITOR</div>
          <div id="editorjs" className="w-full border-2 border-blue-300 bg-slate-200"></div>
        </div>
      </div>
      {/* <div className="flex justify-center mt-8">
        <button onClick={handleClick} className="px-6 py-2 bg-blue-500 text-slate-200 rounded-md">
          {" "}
          preview
        </button>
      </div> */}
    </>
  );
};

export default Editor;
