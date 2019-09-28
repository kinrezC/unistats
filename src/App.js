import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import UniswapLogo from './assets/uniswap.png';
import { Select, Modal } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage:
      'linear-gradient(320deg, rgba(254,0,176,0.32816876750700286) 0%, rgba(12,168,227,0.33) 100%)',
    margin: 0,
    position: 'absolute',
    padding: 0,
    height: '100%',
    minHeight: 980,
    minWidth: '100%',
    top: 0,
    left: 0,
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    position: 'absolute',
    width: 750,
    background: 'white',
    opacity: 0.7,
    height: 650,
  },
}));

const App = () => {
  const classes = useStyles();
  const [token, setToken] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalOpen = () => {
    setModalIsOpen(true);
  };

  const setModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.appContainer}>
        <Select open={false} onClick={setModalOpen} />
        <Modal
          open={modalIsOpen}
          onClose={setModalClose}
          className={classes.modal}
        >
          <div className={classes.modalBackground}>Hello</div>
        </Modal>
      </div>
    </div>
  );
};

export default App;
