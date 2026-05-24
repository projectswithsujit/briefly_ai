import "./loader.css"
export default function Loader(){
    return(
  <div class="loader-container">

    <div class="label">
      AI is processing your text
    </div>

    <div class="bar">
      <div class="progress"></div>
    </div>

    <div class="dots">
      Thinking<span>.</span><span>.</span><span>.</span>
    </div>

  </div>)
}