import { use, useEffect, useState } from "react"


export default function Summary({ content }) {

    // const ai = new GoogleGenAI({ apiKey: "AIzaSyB85bKmmDFxDxztVxZq6jQjOOctxZrI5AI" });

    return (<section class="card">

        <div class="result-box">

            <h2 class="result-title">
                Summary Result
            </h2>
            <div class="result-text">
                {content}
            </div>
            <div className="summary-box">



              {  
                content !=null &&
                <button
                    className="copy-btn"
                    onClick={() => {
                        navigator.clipboard.writeText(content);
                        alert("Copied!");
                    }}
                >
                    Copy Summary
                </button>
}
            </div>
        </div>
    </section>)
}
