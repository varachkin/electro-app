import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box className='timer-body'>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary" fontSize={22}>
          {props.timer.toString()}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function Timer({handler, time}) {
  const [progress, setProgress] = React.useState(100);
  const [timer, setTimer] = React.useState(time);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimer(prevTimer => prevTimer !== 0 ? prevTimer - 1 : 0);
      setProgress((prevProgress) => (prevProgress > 0 ? prevProgress - 100/time : 0));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(()=>{
    if(progress === 0){
       handler();
    }
  }, [progress])

  return <CircularProgressWithLabel value={progress} timer={timer} size={55} />;
}