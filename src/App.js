import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import { makeStyles } from '@material-ui/styles';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import UniswapLogo from './assets/uniswap.png';
import Btc from './assets/Btc';
import Mkr from './assets/Mkr';
import Dai from './assets/Dai';
import Spank from './assets/Spank';
import Zrx from './assets/Zrx';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

const exchangeAddresses = {
  DAI: '0x09cabec1ead1c0ba254b09efb3ee13841712be14',
  SPANK: '0x4e395304655f0796bc3bc63709db72173b9ddf98',
  ZRX: '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf',
  MKR: '0x2c4bd064b998838076fa341a83d007fc2fa50957',
  WBTC: '0x4d2f5cfba55ae412221182d8475bc85799a5644b',
};

//TODO: SET WEB3 Provider!!!@@@

const web3 = new Web3(new Web3.providers.HttpProvider());

const useStyles = makeStyles(theme => ({
  root: {
    background:
      'linear-gradient(90deg, rgba(247,227,248,1) 0%, rgba(222,146,228,1) 100%)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 12,
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
    marginBottom: 100,
  },
  box: {
    position: 'relative',
    top: '20%',
    transform: 'scale(0.33)',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    marginTop: 40,
    color: 'white',
  },
  inputField: {
    width: 430,
    '& .MuiOutlinedInput-root': {
      fontFamily: 'Nunito Sans',
      color: 'white',
      '& fieldset': {
        borderColor: '#393939',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '& .Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
  buttonContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
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
  const [ethFees, setEthFees] = useState('');
  const [tokenFees, setTokenFees] = useState('');
  const [usdVal, setUsdVal] = useState('');
  const [networkError, setNetworkError] = useState(null);

  const mapTokenToInput = token => {
    setInput(exchangeAddresses[token]);
    setIsValidInput(true);
  };

  useEffect(() => {
    if (/^(0x)+[0-9a-fA-F]{40}$/i.test(input)) {
      setIsValidInput(true);
      return;
    }
    setIsValidInput(false);
  }, [input]);

  useEffect(() => {
    tokens.start(i => ({
      y: [20, 0],
      opacity: [0, 1],
      transition: {
        delay: i * 0.15 + 0.4,
      },
    }));
  }, [tokens]);

  const fetchData = async () => {
    const blockNum = await web3.eth.getBlockNumber();
    axios({
      method: 'post',
      url:
        'https://us-central1-terminal-prd.cloudfunctions.net/null_1812b22548cc-4d63-839c-bc50198a8e28',
      data: {
        'address': input,
        'block': blockNum,
      },
      headers: {
        'ApiKey': 'IYFLu2akdq6D4WhIqhZVVw==',
        'ApiSecret': 'lnlZOjCeKJm2OOh5vQ2FxNwwRYm7PCt10XNEU/8Bkyw=',
      },
    })
      .then(res => {
        setEthFees();
      })
      .catch(error => {
        setNetworkError('fail :(');
      });
  };

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
                  value={input}
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
                      onClick={() => mapTokenToInput('DAI')}
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
                      onClick={() => mapTokenToInput('ZRX')}
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
                      onClick={() => mapTokenToInput('WBTC')}
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
                      onClick={() => mapTokenToInput('SPANK')}
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
                      onClick={() => mapTokenToInput('MKR')}
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
