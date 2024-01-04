

function ToolTipContainer({children, x, y, contentRef}){
 
    return(
        <div style={{position: 'absolute', left:15, top:0,
         transform: `translate3d(${x}px, ${y}px, 0)`}}>

            <div ref={contentRef} className="tooltip">
              {children}
            </div>

        </div>
    )


}

export default ToolTipContainer