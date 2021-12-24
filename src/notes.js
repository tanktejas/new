import react, { useState } from 'react';
import cssformain from './mainnotes.css';
 import Note from './noteaddi';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
 import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
 import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
 import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
 import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
 import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { Hidden } from '@material-ui/core';
import { use } from 'express/lib/application';

function Notes(){
     const [visibility,setvis]=useState(false);
     const [note,setnote]=useState("");
     const [rowoftextarea,setrow]=useState(1);
     const [rowoffirsttextarea,setrowoffirst]=useState(1);
     const [title,settitle]=useState("");
     const [flag,setflag]=useState(true);
     const [finalele,setfinal]=useState([]);
    function visiblemenu(){
     setflag(true);
        setvis(true);
    }
    function hidemenu(e){
        setvis(false);
        setflag(false);  
        settitle('');
        setnote('');  
    }
    function setval(e){
         setnote(e.target.value);
         const arr=e.target.value.split('\n');
          setrow(arr.length);
    }   
    function funforchange(e){ 
        settitle(e.target.value);
        const arr=e.target.value.split('\n');
        setrowoffirst(arr.length);
    }
    function addnote(){
        setvis(false);
      
         const titlefornote=title;
       
         const text=note;
         const obj={  
             titlea:titlefornote,
             texta:text 
         }  
         setfinal((prev)=>{  
             prev.push(obj);
             console.log(prev);  
            return prev;    
        })  
         settitle('');
         setnote('');
         setrowoffirst(1);
         setrow(1);
    }
    return(
       <>        
                          
           <div className='mainnotes'  >
           <div className='inner'>
           { visibility &&    <textarea className='title' placeholder='Title' value={title}  rows={rowoffirsttextarea} cols='34' onFocus={()=> visiblemenu()} onChange={(e)=> funforchange(e)}> 
                 {/* Title
            <Tooltip title='Bookmark'>    
           <BookmarkBorderOutlinedIcon/>          
           </Tooltip>     */}
           </textarea>
            } 
             <textarea cols='34' rows={rowoftextarea} className='takenote' placeholder='Take a note...' onFocus={()=> visiblemenu()}   value={note}  onChange={(e)=>setval(e)} >  
             </textarea>        
              { visibility && flag && <div className='icon'>
            <Tooltip title='Remind me'>
                <AddAlertOutlinedIcon className='fir'/>
                </Tooltip>  
                   <Tooltip title='Collaborator'>
                <GroupWorkOutlinedIcon/>
                </Tooltip>  
                   <Tooltip title='Color'>  
                <BrushOutlinedIcon/>
                </Tooltip>
                   <Tooltip title='Image'>
                <ImageOutlinedIcon/>
                </Tooltip>
                   <Tooltip title='Archive'>
                <ArchiveOutlinedIcon/>
                </Tooltip>
                   <Tooltip title='Menu'>
                <MoreVertOutlinedIcon/>
                </Tooltip>
                   <Tooltip title='Undo'>
                <UndoOutlinedIcon/>
                </Tooltip>
                   <Tooltip title='Redo'>
                <RedoOutlinedIcon/>
                </Tooltip>
                <Tooltip title='Clear Note'>
                 <CancelOutlinedIcon className='add' onClick={()=>hidemenu()}/>  
                </Tooltip>
                   <Tooltip title='Add Notes'>
                <NoteAddOutlinedIcon className='add' onClick={()=>addnote()}/>
                </Tooltip>
            </div>}
           </div>
           
         </div>  
         <div className='notesready'>
         {
         finalele.map((ele)=>{  
       return (
        <>   
          <Note title={ele.titlea} text={ele.texta}/>
          </> 
          )
       })
     }
     </div>
     </>)
}

export default Notes;