import react from 'react';
import '@material-ui/core';
import './bodycss.css'
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
function Body(){
  return(
    <>
    <div className='body'>
       <div className='leftm'>
          <EmojiObjectsOutlinedIcon/>
          <NotificationsNoneOutlinedIcon/>
          <ChevronRightOutlinedIcon/>
          <CreateOutlinedIcon/>
          <ArchiveOutlinedIcon


          />
          <DeleteForeverOutlinedIcon/>
       </div>
       <div className='navigation'>
        <p>Notes</p>
        <p>Reminders</p>
        <p>Text</p>
        <p>Edit labels</p>
        <p>Archive</p>
        <p>Delete</p>
       </div>
       <div className='rightb'>
         sdsd
       </div>
    </div>

    </>
  );
}
export default Body;