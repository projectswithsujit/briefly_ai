import { useState } from "react"
import InputInfo from "./InputInfo"
import Summary from "./Summary";
import Loader from "./Loader/Loader"
import { GoogleGenAI } from "@google/genai";

export default function MainSection() {

  const [text, setText] = useState("")
  const [wordLengthError, setWordLengthError] = useState(false)
  const [submitResult, setSubmitResult] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [loader, setLoader] = useState(false)
  const [dataFetch, setDataFetch] = useState(false)
  const ai = new GoogleGenAI({ apiKey: "AIzaSyB85bKmmDFxDxztVxZq6jQjOOctxZrI5AI" });
  const [res, setRes] = useState("")

  async function handleClick() {
    const wordLength = text.length
    if (wordLength < 500) {
      setWordLengthError(true)
      setSubmitResult(false)
    }
    else {
      setWordLengthError(false);
      setSubmitResult(true);

      setClicked(true);
      setLoader(true);


      // --------------------------------------------------------------------------------

      const apiKey = process.env.GROQ_API_KEY;
      let summarizeText = async () => {
        try {
          const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                  {
                    role: "user",
                    content: `Summarize this text simply:\n${text}`,
                  },
                ],
              }),
            }
          );

          const data = await response.json();

          setRes(data.choices[0].message.content);
        } catch (error) {
          console.log(error);
        }
      };


      
    await summarizeText();





    // --------------------------------------------------------------------------

    setTimeout(() => {
      setDataFetch(true);
      setLoader(false);
    }, 3000);
  }
}



return (<section class="card">

  <div class="card-header">

    <h2 class="card-title">
      Enter Your Text
    </h2>

    <div class="badge">
      AI Text Processor
    </div>

  </div>

  <textarea
    placeholder="Paste your long text here..."
    onChange={(e) => {
      wordLengthError && setWordLengthError(false)
      // setClicked && setClicked(false)
      setText(e.currentTarget.value)
    }}
  ></textarea>


  <div class="actions">

    {
      <InputInfo word={text.length} error={wordLengthError} />
    }

    <button class="summarize-btn" onClick={handleClick}>
      Summarize Text
    </button>

  </div>


  {/* SUMMARY/ RESULT SECTION  */}
  {
    clicked &&
      loader
      ? <Loader />
      : dataFetch
        ? <Summary content={res} />
        : <Summary content={`Your AI-generated summary will appear here.
          The summarized result should be short, clean,
          easy to read, and visually separated from the input section.`} />
  }

</section>)
}