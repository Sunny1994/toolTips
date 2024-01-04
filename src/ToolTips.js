import { useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import ToolTipContainer from "./ToolTipContainer"

function ToolTips({children, targetRect}){

    const ref= useRef(null)
    const [tooltipheight, setTooltipheight]= useState(0)

    useLayoutEffect(()=>{
 
       const {height}= ref.current.getBoundingClientRect()
       setTooltipheight(height)
       console.log('Measuered tooltip height:'+ height)
    },[])

    let tooltipX=0;
    let tooltipY=0;
    if(targetRect!==null){
        tooltipX= targetRect.left;
        tooltipY= targetRect.bottom
        // if(tooltipY<0){
        //     tooltipY= targetRect.bottom
        // }
    }

    return createPortal(
        <ToolTipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
            {children}
        </ToolTipContainer>,
        document.body
    )
}

export default ToolTips