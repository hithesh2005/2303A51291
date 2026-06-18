
import {useEffect,useState} from 'react';
import {fetchNotifications} from '../services/api';

export default function AllNotifications(){
const [data,setData]=useState([]);
useEffect(()=>{
fetchNotifications()
.then(res=>setData(res.data.notifications||[]))
.catch(()=>{});
},[]);

return <div>
<h2>All Notifications</h2>
{data.map((n,i)=>
<div key={i} style={{border:'1px solid #ccc',padding:10,margin:10}}>
<b>{n.Type}</b>
<p>{n.Message}</p>
<small>{n.Timestamp}</small>
</div>
)}
</div>
}
