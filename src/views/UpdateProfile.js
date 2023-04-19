import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import { updateProfile, updateEmail } from 'firebase/auth'
import { auth, db } from '../firebase'
import { setDoc, doc, deleteDoc } from 'firebase/firestore'
import { Alert, AlertTitle, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        <Link color="inherit" href="https://github.com/devinvolk" target='_blank' rel='noreferrer' id='footer-link'>
          See the code here!
        {' '}
        <GitHubIcon fontSize='small' id='github' />
        </Link>
      </Typography>
    );
  }
  
  const theme = createTheme();

export const UpdateProfile = () => {
    const [updatedDisplayName, setUpdatedDisplayName] = useState('')
    const [updatedEmail, setUpdatedEmail] = useState('')
    const [alertMessage, setAlertMessage] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
          await updateProfile(auth.currentUser, {
            displayName: updatedDisplayName,
          })
          await updateEmail(auth.currentUser, updatedEmail)
          await setDoc(doc(db, 'users', auth.currentUser.uid),{
              displayName: updatedDisplayName,
              email: updatedEmail,
            },
            { merge: true }
          )
          setAlertMessage(true)
        } catch (error) {
          console.error('Error updating profile', error)
        }
        setOpenDialog(false)
    }

    const handleOpenDialog = () => {
        setOpenDialog(true);
      }

    const handleDeleteAccount = async () => {
        try {
            await deleteDoc(doc(db, 'users', auth.currentUser.uid))
            await auth.currentUser.delete()
            await auth.signOut()
            navigate('/')
        } catch (error) {
            console.error('Error deleting your account', error)
        }
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        {alertMessage && (
          <Alert severity='success'>
            <AlertTitle>Profile Updated!</AlertTitle>
          </Alert>
        )}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) => {
                    setUpdatedDisplayName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setUpdatedEmail(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleOpenDialog}
            >
              Delete Account
            </Button>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
              <DialogTitle>Confirmation</DialogTitle>
              <DialogContent>
                <Typography>
                  Are you sure you want to delete your account?
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleDeleteAccount} color="error">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
