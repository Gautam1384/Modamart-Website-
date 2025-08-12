import React, {useEffect, useState} from 'react';
import { getUsers, toggleBlockUser } from './services/AdminService';

export default function UsersPage(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{ load(); },[]);
  const load = async ()=> setUsers(await getUsers());

  const block = async (id) => {
    await toggleBlockUser(id);
    load();
  };

  return (
    <div>
      <div className="card">
        <h3>Users</h3>
        <div style={{color:'#6b7280'}}>Manage platform users</div>
      </div>

      <div className="card">
        <table className="table">
          <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Blocked</th><th>Action</th></tr></thead>
          <tbody>
            {users.map(u=>(
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.blocked ? 'Yes' : 'No'}</td>
                <td><button className="btn btn-primary" onClick={()=>block(u.id)}>{u.blocked ? 'Unblock' : 'Block'}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}