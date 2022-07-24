
import React from 'react';
import { createStyles } from '@mantine/core';
import { ParallaxBanner } from 'react-scroll-parallax';

const useStyles = createStyles((theme) => ({
  lax: {
    // filter: 'sepia(100%) hue-rotate(190deg) saturate(400%)',
    opacity: '0.9'
  }
}));

export function Banner() {
  const { classes } = useStyles();

  return (
    <ParallaxBanner
      className={classes.lax}
      layers={[
        { image: 'https://goriverhawks.com/images/2020/12/1/parallax2_bg.jpg', speed: -50 },

      ]}
      style={{ aspectRatio: '2 / 1', height: 200 }}
    />
  )
}