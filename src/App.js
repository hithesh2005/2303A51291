
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import AllNotifications from './pages/AllNotifications';
import PriorityNotifications from './pages/PriorityNotifications';

export default function App(){
return(
<BrowserRouter>
<div style={{padding:20}}>
<h1>Campus Notifications Dashboard</h1>
<Link to="/">All Notifications</Link> | <Link to="/priority">Priority Notifications</Link>
<hr/>
<Routes>
<Route path="/" element={<AllNotifications/>}/>
<Route path="/priority" element={<PriorityNotifications/>}/>
</Routes>
</div>
</BrowserRouter>
)}
