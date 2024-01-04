import ButtonWithToolTips from "./ButtonWithToolTips";
import './App.css'
function App() {
 
  return(
    <>
      <ButtonWithToolTips tooltipcontent={
        <div>
          This Tooltip does not fit above the button <br/>
          This is why its deployed below instead
        </div>
      }> Hover over me (tool tip above)
       
      </ButtonWithToolTips>
      <div style={{height:50}}/>

      <ButtonWithToolTips tooltipcontent={
        <div>
          This Tooltip fits above the content
        </div>
      }> Hover over me (tool tip below)
      </ButtonWithToolTips>

      <ButtonWithToolTips tooltipcontent={
        <div>
          This tooltip fits above the content
        </div>
      }> Hover over me (tool tip below)

      </ButtonWithToolTips>
    </>
  )

}

export default App;
