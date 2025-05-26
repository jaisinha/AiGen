import { useEffect, useState } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import './App.css';
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

function App() {
  const [prompt, setPrompt] = useState(`function sum() {\n  return 1 + 1;\n}`);
  const [review, setReview] = useState(``);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setIsLoading(true); // Show popup
    try {
      const response = await axios.post("https://ai-gen-tk3c.vercel.app/ai/get-review", { prompt });
      setReview(response.data);
    } catch (err) {
      console.error("Error reviewing code:", err);
      setReview("An error occurred while getting the review.");
    } finally {
      setIsLoading(false); // Hide popup
    }
  }

  return (
    <>
      {isLoading && (
        <div className="popup">
          <div className="popup-content">Analyzing...</div>
        </div>
      )}

      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={prompt}
              onValueChange={prompt => setPrompt(prompt)}
              highlight={prompt =>
                prism.highlight(prompt, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 20,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
