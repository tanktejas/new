import MenuIcon from '@material-ui/icons/Menu';
import '@material-ui/core';
import './bodycss.css'
import img from './img.png'; 
import SearchIcon from '@material-ui/icons/Search';
import './navbar.css';
import RefreshIcon from '@material-ui/icons/Refresh';
import DnsIcon from '@material-ui/icons/Dns';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useState } from 'react';
import Notes from './notes';
function App(props) {
  const [visnot,setNot]=useState(false);
  const [style,sets]=useState({
    backgroundColor:"none"
  });
  const [style1,sets1]=useState({  
    backgroundColor:"none"
  });
   const [style2,sets2]=useState({
    backgroundColor:"none"
  });
  const [style3,sets3]=useState({
    backgroundColor:"none"
  });  
  const [style4,sets4]=useState({
    backgroundColor:"none"
  });
  const [style5,sets5]=useState({
    backgroundColor:"none"
  });
  function funforshow(){
       if(visnot){
         setNot(false);
       }else{
         setNot(true);
       }
  }
  function funforbac(){
       sets({
         backgroundColor:"rgb(228, 216, 197)"
       });   
 
         setNot(true);
     
  }
  function funforremove(){  
     sets({
       backgroundColor:"rgb(255, 255, 255)"
     })
      
         setNot(false);
       
  }
  
 

  function funforbac1(){
    sets1({
      backgroundColor:"rgb(228, 216, 197)"
    });   
 
         setNot(true);
  
}
function funforremove1(){  
  sets1({
    backgroundColor:"rgb(255, 255, 255)"
  })
   
         setNot(false);
 
}
function funforbac2(){
  sets2({
    backgroundColor:"rgb(228, 216, 197)"
  });   
 
         setNot(true);
   
}
function funforremove2(){  
sets2({
  backgroundColor:"rgb(255, 255, 255)"
})
 
         setNot(false);
   
}
function funforbac3(){
  sets3({
    backgroundColor:"rgb(228, 216, 197)"
  });   
 
         setNot(true);
   
}
function funforremove3(){  
sets3({
  backgroundColor:"rgb(255, 255, 255)"
})
 
         setNot(false);
 
}
function funforbac4(){
  sets4({
    backgroundColor:"rgb(228, 216, 197)"
  });   
 
         setNot(true);
 
}
function funforremove4(){  
sets4({
  backgroundColor:"rgb(255, 255, 255)"
})
setNot(false);

}
function funforbac5(){
  sets5({
    backgroundColor:"rgb(228, 216, 197)"
  });   
 
         setNot(true);
   
}
function funforremove5(){  
sets5({
  backgroundColor:"rgb(255, 255, 255)"
})
 
         setNot(false);
      
}
function funforbacuniq(){
  
  setNot(true);
   
}
function funforremoveuniq(){
  setNot(false);

}
  return (
     <>
      <div className='navbar'>
       <div className='st'>
       <Tooltip title="menu">
        <MenuIcon className='menu' onClick={()=>funforshow()}
        />   
        </Tooltip>
        <img src={img}></img>
       </div>         
       <div className='nd'> 
       <Tooltip title="search">
          <SearchIcon/>     
          </Tooltip>  
         <input type='text' placeholder='Search'> 
         </input>
       </div>
       <div className='rd'>
       <Tooltip title="Refresh">
       <RefreshIcon/>  
       </Tooltip>  
       <Tooltip title='List view'>
       <DnsIcon/>  
       </Tooltip>
       <Tooltip title={
           <div className='toolforsetting'>
               <div>
               <button>dark mode</button>
               </div>
               <div>
               <button>dark mode</button>
               </div>
               <div>
               <button>dark mode</button>
               </div>
                
           </div>
       } interactive>
       <SettingsIcon/>  
       </Tooltip>
       <Tooltip title='Google Apps'>
       <AppsIcon/>
       </Tooltip>
       <Tooltip title='Google Account'>
       <PersonIcon/>
       </Tooltip>
       </div>
      </div>
      <hr></hr>

    {/* here main body  */}

    <div className='body'>
       <div className='leftm'>
          <EmojiObjectsOutlinedIcon onClick={()=>funforshow()} onMouseEnter={()=>funforbac()} onMouseLeave={()=> funforremove()}/>
          <NotificationsNoneOutlinedIcon onClick={()=>funforshow()} onMouseEnter={()=>funforbac1()} onMouseLeave={()=> funforremove1()}/>
          <ChevronRightOutlinedIcon onClick={()=>funforshow()} onMouseEnter={()=>funforbac2()} onMouseLeave={()=> funforremove2()}/>
          <CreateOutlinedIcon onClick={()=>funforshow()} onMouseEnter={()=>funforbac3()} onMouseLeave={()=> funforremove3()}/> 
          <ArchiveOutlinedIcon onClick={()=>funforshow()} onMouseEnter={()=>funforbac4()} onMouseLeave={()=> funforremove4()}/>
          <DeleteForeverOutlinedIcon onClick={()=>funforshow()} onMouseEnter={()=>funforbac5()} onMouseLeave={()=> funforremove5()}/>
       </div>
      {visnot &&  <div className='navigation' id='navigation1' onMouseEnter={()=>funforbacuniq()} onMouseLeave={()=> funforremoveuniq()}>
        <p style={style}>Notes</p>
        <p style={style1}>Reminders</p>
        <p style={style2}>Text</p>
        <p style={style3}>Edit labels</p>
        <p style={style4}>Archive</p>
        <p style={style5}>Delete</p>
       </div>}
       <div className='rightb'>
     <Notes/>
       </div>
    </div>
     </>
  );
}
  
export default App;
