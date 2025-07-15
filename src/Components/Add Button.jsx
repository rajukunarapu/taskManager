import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'
import DialogBox from './DialogBox'

const AddButton = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleClose  = ()=>{
        setIsOpen(false)
    }

  return (
    <>
        <IconButton
          sx={{
            position: "absolute",
            right: 20,
            bottom: 20,
            backgroundColor: "rgba(95, 51, 224, 1)",
            ":hover": { backgroundColor: "rgba(95, 51, 224, 1)" },
          }}
          onClick={()=>setIsOpen(true)}
        >
          <Add />
        </IconButton>

        <DialogBox open={isOpen} handleClose={handleClose} />
    </>
  )
}

export default AddButton
