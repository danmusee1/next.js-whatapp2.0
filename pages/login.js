import styled from "styled-components";
import Head from "next/head";

function Login() {
  return (
    <Container>
        <Head>
            <div>login</div>
        </Head>
        <LoginContainer>
            <Logo src= "https://th.bing.com/th/id/R.e23d5560e4819ee17be9a7914a137d83?rik=QbGDLnYx0zhXQw&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2018%2f01%2fWhatsApp-Logo.png&ehk=xDEXm5juiH7BO5Pj%2b6VRJjYZYcE%2bb%2b2ntE4cMtszrq8%3d&risl=&pid=ImgRaw&r=0"/>

        </LoginContainer>
    </Container>
    
  );
}

export default Login;

const Container =styled.div``;
const LoginContainer=styled.div` 

`
;
const Logo= styled.img``;