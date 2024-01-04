import { useRef, useState } from "react"
import ToolTips from "./ToolTips"

function ButtonWithToolTips({tooltipcontent, ...rest}){

const [targetRect, setTargetRect]= useState(null)
const buttonRef= useRef(null)

return(
    <>
      <button {...rest}
      ref={buttonRef}
      onPointerEnter={()=>{
           const rect= buttonRef.current.getBoundingClientRect();
           setTargetRect({
               left: rect.left,
               top: rect.top,
               right: rect.right,
               bottom: rect.bottom,
            })

            console.log(rect.height)
         
        }}
      onPointerLeave={() => {
       
        console.log(targetRect.top)
        
        
            setTargetRect(null)
          }
        }/>
      {targetRect!==null && (
        <ToolTips targetRect= {targetRect}>
            {tooltipcontent}
        </ToolTips>
      )}
    
    
    </>
)}

export default ButtonWithToolTips