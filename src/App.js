import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import UniswapLogo from './assets/uniswap.png';
import BG from './assets/uniswap2.png';
import Btc from './assets/Btc';
import Mkr from './assets/Mkr';
import Dai from './assets/Dai';
import Spank from './assets/Spank';
import Zrx from './assets/Zrx';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

const exchangeAddresses = {
  DAI: '0x0',
  DAI: '0x0',
  DAI: '0x0',
  DAI: '0x0',
  DAI: '0x0',
};

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
    width: 850,
    minWidth: 850,
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
  uniswapLogo: {
    height: 100,
    width: 100,
  },
  gridContainer: {
    height: 500,
    width: 850,
    minWidth: 850,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 50,
  },
  logoContainers: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logos: {
    height: 80,
    width: 80,
    '& > g': {
      transform: 'scale(2.5)',
    },
  },
  boxContainer: {
    width: '100%',
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  box: {
    position: 'relative',
    top: '5%',
    transform: 'scale(0.33)',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 100,
  },
  inputField: {
    width: 400,
  },
  buttonContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 80,
  },
}));

const App = () => {
  const classes = useStyles();
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const r4 = useRef(null);
  const r5 = useRef(null);
  const tokens = useAnimation();
  const [input, setInput] = useState('');
  const [isValidInput, setIsValidInput] = useState(false);

  const mapTokenToInput = token => {
    setInput(exchangeAddresses[token]);
  };

  useEffect(() => {
    tokens.start(i => ({
      y: [20, 0],
      opacity: [0, 1],
      transition: {
        delay: i * 0.15 + 0.4,
      },
    }));
  }, [tokens]);

  return (
    <div className={classes.root}>
      <div className={classes.appContainer}>
        <div className={classes.contentContainer}>
          <div className={classes.titleContainer}>
            <motion.div
              transition={{ delay: 1.5 }}
              animate={{ opacity: [0, 1] }}
            >
              <Typography variant="h2">UNI</Typography>
            </motion.div>
            <motion.div
              transition={{ delay: 1.5 }}
              animate={{ opacity: [0, 1] }}
            >
              <img
                src={UniswapLogo}
                className={classes.uniswapLogo}
                alt="uniLogo"
              />
            </motion.div>
            <motion.div
              transition={{ delay: 1.5 }}
              animate={{ opacity: [0, 1] }}
            >
              <Typography variant="h2">FEE</Typography>
            </motion.div>
          </div>
          <motion.div
            animate={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ duration: 0.2 }}
            className={classes.gridContainer}
          >
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignContent="center"
              alignItems="center"
              className={classes.grid}
            >
              <motion.div
                className={classes.boxContainer}
                animate={tokens}
                custom={6}
              >
                <TextField
                  variant="outlined"
                  className={classes.inputField}
                  label="Exchange Address"
                />
              </motion.div>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                alignConent="center"
              >
                <Grid item xs={4} className={classes.logoContainers}>
                  <motion.div ref={r1} animate={tokens} custom={1}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Dai className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item xs={4} className={classes.logoContainers}>
                  <motion.div ref={r3} animate={tokens} custom={3}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Zrx className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item xs={4} className={classes.logoContainers}>
                  <motion.div ref={r5} animate={tokens} custom={5}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Btc className={classes.logos} />
                    </motion.div>
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
                  <motion.div ref={r2} animate={tokens} custom={2}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Spank className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item xs={2} className={classes.logoContainers}>
                  <motion.div ref={r4} animate={tokens} custom={4}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => mapTokenToInput('DAI')}
                    >
                      <Mkr className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
            <div className={classes.buttonContainer}>
              <Button
                disabled={!isValidInput}
                variant="contained"
                color="primary"
                className={classes.submitButton}
              >
                Get Historical Fees!
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
