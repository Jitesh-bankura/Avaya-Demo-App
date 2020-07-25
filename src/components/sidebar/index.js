import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Sidebar() {
return (
    <>
    <Link to="/users"><Button primary className='button-design'>Users</Button></Link>
<Link to="/comments"><Button primary className='button-design'>Comments</Button></Link>
<Link to="/posts"><Button primary className='button-design'>Posts</Button></Link>
</>
)
}
export default Sidebar;