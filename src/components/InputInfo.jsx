export default function InputInfo({ word, error }){
    return(<div class="info">
          {
            error == false? `${word} characters` : <p style={{ color : "red"}}>Please enter atleast 500 characters</p>
          }
        </div>)
}