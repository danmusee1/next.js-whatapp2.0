import styled from "styled-components"
import {Avatar,IconButton,Button} from "@material-ui/core"
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from "email-validator"

function Sidebar() {

  const createChat =()=> {
    const input = prompt(
      "Please enter an email address for the user you want to chat with"
    );
  if (!input) return null;
  if (EmailValidator.validate(input)){
    // add chat into thd db
  }
  };
  return (
  < Container>
  <Header>
    <UserAvatar/>
    <IconsContainer>
      
      <IconButton><ChatIcon/></IconButton>
      <IconButton><MoreVertIcon/></IconButton>
    </IconsContainer>
    </Header>
    <Search>
      <SearchIcon/>
      <SearchInput placeholder="search in chats"/>
    </Search>
    <SidebarButton onClick={createChat}>Start new Chat</SidebarButton>
    
  
  </Container>
  );
}

export default Sidebar;
const SearchInput = styled.input`
outline-width:0;
border:none;
flex:1;
`;
const Container = styled.div``;
const SidebarButton=styled(Button)`
width:100%;

border-top: 1px solid whitesmoke;
border-bottom: 1px solid whitesmoke;
`;
const Search=styled.div`
display:flex;
align-items:center;
padding: 20px;
border-radius: 2px;

`;
const Header= styled.div`
display:flex;
position:sticky;
background-color:white;
top:0;
z-index:1;
justify-content:space-between;
align-items: center;
padding: 15px;
height:80px;
border-bottom: 1px solid whitesmoke;
`;
const UserAvatar=styled(Avatar)`
cursor:pointer;
:hover{
  opacity:0.8;
}
 margin: 10px`;
const IconsContainer=styled.div``;