import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
return (
    <>
    <Link to="/users">users</Link>
<Link to="/comments">comments</Link>
<Link to="/posts">posts</Link>
</>
)
}
export default Sidebar;