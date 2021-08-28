import React , {useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import  LinearProgress  from '@material-ui/core/LinearProgress';


const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });
  

function Nav_bar({ len }) {
    const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
    //let len = song.duration;
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 1;
        return Math.min((oldProgress + diff)/len, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}

export default Nav_bar
