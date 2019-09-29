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
import Box from './assets/Box';
import { Grid } from '@material-ui/core';

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
    minWidth: 700,
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
    height: 300,
    width: 300,
  },
  gridContainer: {
    height: 500,
    width: '100%',
    minWidth: 700,
    background: 'rgba(255, 255, 255, 0.2)',
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
}));

const App = () => {
  const classes = useStyles();
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const r4 = useRef(null);
  const r5 = useRef(null);
  const tokens = useAnimation();

  useEffect(() => {
    tokens.start(i => ({
      y: [20, 0],
      opacity: [0, 1],
      transition: {
        delay: i * 0.15 + 0.3,
      },
    }));
  }, [tokens]);

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
              <motion.div className={classes.boxContainer}>
                <Box className={classes.box} />
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
                      drag
                      dragConstraints={r1}
                      dragElastic={1}
                      dragMomentum={false}
                    >
                      <Dai className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item xs={4} className={classes.logoContainers}>
                  <motion.div ref={r3} animate={tokens} custom={3}>
                    <motion.div
                      drag
                      dragConstraints={r3}
                      dragElastic={1}
                      dragMomentum={false}
                    >
                      <Zrx className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item xs={4} className={classes.logoContainers}>
                  <motion.div ref={r5} animate={tokens} custom={5}>
                    <motion.div
                      drag
                      dragConstraints={r5}
                      dragElastic={1}
                      dragMomentum={false}
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
                      drag
                      dragConstraints={r2}
                      dragElastic={1}
                      dragMomentum={false}
                    >
                      <Spank className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
                <Grid item xs={2} className={classes.logoContainers}>
                  <motion.div ref={r4} animate={tokens} custom={4}>
                    <motion.div
                      drag
                      dragConstraints={r4}
                      dragElastic={1}
                      dragMomentum={false}
                    >
                      <Mkr className={classes.logos} />
                    </motion.div>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
