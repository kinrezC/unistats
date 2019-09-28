import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import UniswapLogo from './assets/uniswap.png';
import BG from './assets/uniswap2.png';
import Btc from './assets/Btc';
import Mkr from './assets/Mkr';
import Dai from './assets/Dai';
import Spank from './assets/Spank';
import Zrx from './assets/Zrx';
import { Select, Modal, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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
  contentContainer: {
    width: '50%',
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
  uniswapLogo: {
    height: 300,
    width: 300,
  },
  gridContainer: {
    height: 500,
    width: '100%',
  },
  logoContainers: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logos: {
    height: 96,
    width: 96,
    '& > g': {
      transform: 'scale(3)',
    },
  },
  placeholder: {
    marginTop: 50,
    marginBottom: '25%',
    height: 200,
    width: 200,
    backgroundColor: 'blue',
  },
}));

const App = () => {
  const classes = useStyles();
  const constraintsRef = useRef(null);

  return (
    <div className={classes.root}>
      <div className={classes.appContainer}>
        <div className={classes.contentContainer}>
          <motion.div>
            <img
              src={UniswapLogo}
              className={classes.uniswapLogo}
              alt="uniLogo"
            />
          </motion.div>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignContent="center"
            alignItems="center"
            className={classes.gridContainer}
          >
            <motion.div>
              <div className={classes.placeholder} />
            </motion.div>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              alignConent="center"
            >
              <Grid item xs={4} className={classes.logoContainers}>
                <motion.div>
                  <Dai className={classes.logos} />
                </motion.div>
              </Grid>
              <Grid item xs={4} className={classes.logoContainers}>
                <motion.div>
                  <Zrx className={classes.logos} />
                </motion.div>
              </Grid>
              <Grid item xs={4} className={classes.logoContainers}>
                <motion.div>
                  <Btc className={classes.logos} />
                </motion.div>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              alignContent="center"
            >
              <Grid item xs={2} className={classes.logoContainers}>
                <motion.div>
                  <Spank className={classes.logos} />
                </motion.div>
              </Grid>
              <Grid item xs={2} className={classes.logoContainers}>
                <motion.div>
                  <Mkr className={classes.logos} />
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default App;
