import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
      toast.success("Code executed successfully!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-center">Code Editor</h1>
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        defaultValue="// Write your code here"
        onChange={handleEditorChange}
        theme="vs-dark"
      />
      <div className="flex justify-center">
        <Button variant="primary" onClick={handleRunCode}>
          Run Code
        </Button>
      </div>
    </div>
  );
};

export default CodeEditor;