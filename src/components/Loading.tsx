import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Loading: React.FC = () => {
  return (
    <div className='grid place-content-center h-screen'>
        <CircularProgress  size={80}/>
    </div>
  )
}

export default Loading