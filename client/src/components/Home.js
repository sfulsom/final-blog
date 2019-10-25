import React from 'react';
import { Header,Container } from 'semantic-ui-react';
import Blogs from "./blogs/Blogs"
const Home = () => (
 <div class="home">
     <Container>         
 <Header className="Header" as="h1" textAlign="center">Home</Header>
 <Blogs/>
     </Container>
 </div>
)
export default Home;