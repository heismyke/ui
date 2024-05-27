import React from 'react'
import AdminData from '../data/AdminData'

function AdminPanel() {
    
  return (
      <>
          
          <div className='bg-gray-200 flex flex-1 items-center'>
          {AdminData.map(user => (
            <div key={user.id} className='p-2 gap-4 flex flex-col '>
            <h2 className='font-bold'><strong>Name: </strong>{user.name}</h2>
            <p><strong>Department:</strong> {user.department}</p>
            <p><strong>Course:</strong> {user.course}</p>
            <p><strong>Email:</strong> {user.email}</p>
            </div>
         ))}
         </div>
      </>
  )
}

export default AdminPanel