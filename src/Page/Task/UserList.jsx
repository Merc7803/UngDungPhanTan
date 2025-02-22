import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../ReduxToolkit/AuthSlice';
import { assignedTaskToUser } from '../../ReduxToolkit/TaskSlice';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 2,
};

const tasks = [1, 1, 1, 1]

export default function UserList({ handleClose, open }) {

  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");

  useEffect((item) => {
    dispatch(getUserList(localStorage.getItem("jwt")))
  }, [])

  const handleAssignedTask = (user) => [
    dispatch(assignedTaskToUser({userId:user.id, taskId:taskId}))
  ]

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            auth.users.map((item, index) =>
              <><div className='flex items-center justify-between w-full'>
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBa6jZ3AZjwRCe1-pGTXIO162suVHcxfhk-w&s' />
                    </ListItemAvatar>
                    <ListItemText sx={{ color: 'white' }}
                      secondary={`@${item.fullName.split(" ").join("_").toLowerCase()}`}
                      primary={item.fullName} />
                  </ListItem>
                </div>
                <div>
                  <Button onClick={() => handleAssignedTask(item)} className='customButton'>select</Button>
                </div>
              </div>
                {index !== tasks.length - 1 && <Divider variant='inset' />}
              </>
            )
          }

        </Box>
      </Modal>
    </div>
  );
}
