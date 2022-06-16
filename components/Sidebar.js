import styled from "styled-components"
import {Avatar,IconButton,Button} from "@material-ui/core"
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
  return (
  < Container>
  <Header>
  <a href="data/DAN_MUSEE_KATHUMO_CV.pdf" download="cv.pdf">Download my Cv</a>
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
    <SidebarButton>Start new Chat</SidebarButton>
    
  
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