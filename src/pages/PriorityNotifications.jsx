
import {useEffect,useState} from 'react';
import {fetchNotifications} from '../services/api';

const weights={Placement:3,Result:2,Event:1};

export default function PriorityNotifications(){
const [data,setData]=useState([]);

useEffect(()=>{
fetchNotifications().then(res=>{
const arr=(res.data.notifications||[]).sort((a,b)=>{
const w=(weights[b.Type]||0)-(weights[a.Type]||0);
if(w!==0)return w;
return new Date(b.Timestamp)-new Date(a.Timestamp);
});
setData(arr.slice(0,10));
});
},[]);

return <div>
<h2>Top 10 Priority Notifications</h2>
{data.map((n,i)=>
<div key={i} style={{border:'1px solid green',padding:10,margin:10}}>
<b>{n.Type}</b>
<p>{n.Message}</p>
<small>{n.Timestamp}</small>
</div>
)}
</div>
}
