import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import { makeStyles } from '@material-ui/styles';
import { motion, useAnimation } from 'framer-motion';
import UniswapLogo from './assets/uniswap.png';
import Btc from './assets/btc.png';
import Mkr from './assets/maker.png';
import Dai from './assets/dai.png';
import Spank from './assets/spank.png';
import Zrx from './assets/0x.png';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

const exchangeAddresses = {
  DAI: '0x09cabec1ead1c0ba254b09efb3ee13841712be14',
  SPANK: '0x4e395304655f0796bc3bc63709db72173b9ddf98',
  ZRX: '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf',
  MKR: '0x2c4bd064b998838076fa341a83d007fc2fa50957',
  WBTC: '0x4d2f5cfba55ae412221182d8475bc85799a5644b',
};

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://terminal.co/networks/ethereum_main/3428b88273cdf858',
  ),
);

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
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
    width: 830,
    minWidth: 830,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uniswapLogo: {
    height: 45,
    width: 45,
    marginTop: 24,
    marginRight: 10,
    marginLeft: 24,
  },
  gridContainer: {
    height: 500,
    width: 830,
    minWidth: 830,
  },
  logoContainers: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logos: {
    height: 125,
    width: 125,
  },
  inputField: {
    width: 800,
  },
  buttonContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
  },
  resultsContainer: {
    position: 'absolute',
    bottom: 150,
  },
  ethFees: {
    marginBottom: 12,
  },
  topBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  unistatsText: {
    color: '#DC6BE5',
    fontFamily: 'Nunito Sans',
    letterSpacing: 0,
    fontSize: 38,
    marginTop: 20,
    fontWeight: 235,
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontFamily: 'Nunito Sans',
    fontSize: 36,
    fontWeight: 600,
    textAlign: 'center',
  },
  submitButton: {
    with: 800,
    minWidth: 800,
    height: 75,
    backgroundColor: '#DC6BE5',
    '&:hover': {
      backgroundColor: '#DC6BE5',
    },
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Nunito Sans',
    letterSpacing: 1.2,
  },
  logoWrapper: {
    marginBottom: 70,
    width: 803,
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
        'https://us-central1-terminal-prd.cloudfunctions.net/null_4540beace001-406e-b869-7aef5d3ccce6',
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
        setEthFees(res.ethFees);
        setTokenFees(res.tokenFees);
        console.log(ethFees, tokenFees);
      })
      .catch(error => {
        setNetworkError('Failed to fetch data.');
        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <motion.div
        transition={{ delay: 1.5 }}
        animate={{ opacity: [0, 1] }}
        className={classes.topBar}
      >
        <img
          src={UniswapLogo}
          alt="uniswap-logo"
          className={classes.uniswapLogo}
        />
        <Typography className={classes.unistatsText}>UNISTATS</Typography>
      </motion.div>
      <div className={classes.appContainer}>
        <div className={classes.contentContainer}>
          <motion.div animate={tokens} custom={1} style={{ marginBottom: 55 }}>
            <Typography className={classes.infoText}>
              Choose one of the tokens below or enter a custom exchange address
              to get the historical fees.
            </Typography>
          </motion.div>
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
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.logoWrapper}
              >
                <Grid item className={classes.logoContainers}>
                  <motion.div ref={r1} animate={tokens} custom={1}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => mapTokenToInput('DAI')}
                    >
                      <img src={Dai} alt="dai" className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item className={classes.logoContainers}>
                  <motion.div ref={r2} animate={tokens} custom={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => mapTokenToInput('SPANK')}
                    >
                      <img src={Spank} alt="spank" className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item className={classes.logoContainers}>
                  <motion.div ref={r3} animate={tokens} custom={3}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => mapTokenToInput('ZRX')}
                    >
                      <img src={Zrx} alt="Zrx" className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item className={classes.logoContainers}>
                  <motion.div ref={r4} animate={tokens} custom={4}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => mapTokenToInput('MKR')}
                    >
                      <img src={Mkr} alt="maker" className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item className={classes.logoContainers}>
                  <motion.div ref={r5} animate={tokens} custom={5}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => mapTokenToInput('WBTC')}
                    >
                      <img src={Btc} alt="Btc" className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
            <motion.div animate={tokens} custom={6}>
              <Grid container justify="center" alignContent="center">
                <TextField
                  variant="outlined"
                  className={classes.inputField}
                  label="Exchange Address"
                  value={input}
                />
              </Grid>
            </motion.div>
            <motion.div
              className={classes.buttonContainer}
              animate={tokens}
              custom={7}
            >
              <Button
                variant="contained"
                className={classes.submitButton}
                onClick={() => {
                  setNetworkError(false);
                  fetchData();
                }}
              >
                <Typography className={classes.submitText}>
                  Get Historical Fees
                </Typography>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className={classes.resultsContainer}>
          {networkError && <Typography variant="h5">{networkError}</Typography>}
          {ethFees && (
            <div className={classes.resContainer}>
              <Typography variant="h5" className={classes.ethFees}>
                {`${ethFees} accrued in ETH`}
              </Typography>
              <Typography variant="h5">
                {`${tokenFees} accrued in ERC20 Tokens`}
              </Typography>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default App;
