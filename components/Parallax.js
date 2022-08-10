
import React from 'react';
import { createStyles } from '@mantine/core';
import { ParallaxBanner } from 'react-scroll-parallax';

const useStyles = createStyles(() => ({
  lax: {
    opacity: '0.8'
  }
}));

export function Banner({ link }) {
  const { classes } = useStyles();
  console.log(link)
  return (
    <ParallaxBanner
      className={classes.lax}
      layers={[
        { image: String(link), speed: -50 },
      ]}
      style={{ aspectRatio: '2 / 1', height: 200 }}
    />
  )
}