import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <Box>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" width='100%'>
          <Link className="navbar-brand" to={'/'}>
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to={'/searchexercises'}>
                Search Exercises
              </Link>
              <Link className="nav-link" to={'/login'}>
                Login
              </Link>
              <Link className="nav-link" to={'/signup'}>
                Sign Up
              </Link>
              <Link className="nav-link" to={'/workoutcreator'}>
                Workout Creator
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Box>
  )
}