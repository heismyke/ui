import React from 'react'
import imageData from '../constants/images'
function ProfilePicture() {
  return (
      <>
         <div className='w-[100px] h-[100px] rounded-full bg-green-500'>
              <img src={imageData.memoji } className='w-full h-full rounded-full' alt='profile'/>
          </div>
      </>
  )
}

export default ProfilePicture