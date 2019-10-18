import React from 'react';
import { Header, } from 'semantic-ui-react';
import Blogs from "./blogs/Blogs"
const Home = () => (
 <div>
 <Header as="h3" textAlign="center">Home</Header>
 <Blogs/>
 </div>
)
export default Home;