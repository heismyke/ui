import React from 'react'
import "./index.css"
import AdminPanel from './components/AdminPanel'
import ProfilePicture from './components/ProfilePicture'
import Header from './components/Header'
import Records from './components/Records'
function App() {
  return (
    <>
      
      <div className='items-center justify-center mt-5  flex flex-col'>
        <Header />
        <div className='w-[100%] md:w-[80%] h-[200px] gap-4 mt-5 rounded-lg flex'>
          <div className='w-[25%] h-full items-center justify-center flex bg-gray-200 '>
            <ProfilePicture />
          </div>
          <AdminPanel />
        </div>
        <div className='w-[100%] pl-2 md:pl-0 md:w-[80%] space-y-3 py-2 '>
          <p>Profile Picture</p>
          <hr />
          <h2 className='font-bold'>Student Grades</h2>
        </div>
        <div className='w-[100%] md:w-[80%] overflow-x-auto overflow'>
            <Records />
        </div>
      </div>
    </>
  )
}

export default App