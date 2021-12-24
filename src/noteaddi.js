import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import Tooltip from '@material-ui/core/Tooltip';
import './colo.css';
import react, { useState } from 'react';
import './notestyle.css'
import cssformain from './mainnotes.css';
 

function Note(props){
  const [vis,setvis]=useState(true);
  const [styl,setstyle]=useState({
      backgroundColor:'white'
  });
  console.log(props.title) 
  function delnote(){
      setvis(false);
  }
  function changeNotecolor(color){
    setstyle({
        backgroundColor:color
    })
  }
     return (
        <>  
{   vis && <div className='note1' style={styl}>
                <div className='con'>
                <h3>
                   {props.title
                   }
                   </h3>  
                </div>
                <div className='ti'>
                    {props.text}
                </div>  
                <div className='iconfornote'>
                <Tooltip title='Delete Note'>
                    <DeleteForeverIcon onClick={()=>delnote()}/>
                </Tooltip>  
                <Tooltip title={
                   <div className='maincolo'>
            <div className='red' onClick={()=>changeNotecolor('rgb(230, 130, 130)')}>
      
            </div>
            <div className='orange' onClick={()=>changeNotecolor('rgba(231, 187, 150, 0.705)')}>
                
            </div>
            <div className='blue' onClick={()=>changeNotecolor('rgba(163, 163, 238, 0.562)')}>
                
            </div>
            <div className='white' onClick={()=>changeNotecolor('white')}>
                      
            </div>
            <div className='yellow' onClick={()=>changeNotecolor('rgba(245, 243, 132, 0.658)')}>
                      
            </div>
            <div className='brown' onClick={()=>changeNotecolor('rgba(165, 82, 82, 0.822)')}>
                      
            </div>
         </div>
                } interactive>
                <ColorLensIcon/>  
                </Tooltip>
                </div>
    </div>            
      
}
 </>
 )
}

export default Note;