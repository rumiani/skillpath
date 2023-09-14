import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const MyEditor = ({ onChange, value, height, showInline }) => {
    const editor = useRef<SunEditorCore>();

    // The sunEditor parameter will be set to the core suneditor instance when this function is called
     const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };
    return (
        <div>
            <p> My Other Contents </p>
            <SunEditor 
            // hideToolbar={true}
            showInline={showInline}
            getSunEditorInstance={getSunEditorInstance} />
        </div>
    );
};
export default MyEditor;