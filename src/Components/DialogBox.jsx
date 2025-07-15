import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Autocomplete, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

const DialogBox = ({open, handleClose}) => {

    let [ id, setId ] = useState("")
    let [ title, setTitle ] = useState("")
    let [complete, setComplete] = useState(true)
    

    const booleanOptions = [
        { label: "True", value: true },
        { label: "False", value: false },
    ];

    const dispatch = useDispatch()

    let handleSubmit = ()=>{
        if(id !== "" && title.trim() !== ""){
            dispatch({type : "Add", payload : {
                id : Number(id),
                title : title,
                complete : complete
            } })
            handleClose()
            setId("")
            setTitle("")
            setComplete(true)
        }
    }


  return (
    <>
        <Dialog open={open} >
            <DialogTitle>
                <Typography variant='h5' fontWeight={"bolder"} >Add new Task</Typography>
            </DialogTitle>
            <DialogContent sx={{ mt:1}} >
                <TextField 
                    variant='outlined'
                    fullWidth
                    label = "id"
                    type="number"
                    placeholder='Enter new task Id'
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                    sx={{ borderRadius : 3 }}
                />
                <TextField 
                    variant='outlined'
                    fullWidth
                    label = "title"
                    type='text'
                    placeholder='Enter new task..'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    sx={{ mt:2, borderRadius : 3 }}
                />
                <Autocomplete
                    sx={{mt:2}}
                    options= {booleanOptions}
                    value={booleanOptions.find((opt) => opt.value === complete) || null}
                    onChange={(event, newValue) => {
                        if (newValue) setComplete(newValue.value);
                    }}
                    getOptionLabel={(option)=>option.label}
                    renderInput={(params) => <TextField {...params} label="complete" />}
                />
            </DialogContent>
            <DialogActions>
                <Button variant= "contained" onClick={()=>handleClose()} color='error' >
                    Cancel
                </Button>
                <Button variant= "contained" onClick={()=>handleSubmit()} color='success' >
                    submit
                </Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default DialogBox
