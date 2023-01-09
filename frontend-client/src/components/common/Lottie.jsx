import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Lottie = ({ name, loop = true, autoplay = true, className }) => {
  const container = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    player.current = lottie.loadAnimation({
      container: container.current,
      loop,
      autoplay,
      name,
      renderer: 'svg',
      animationData: require(`../../lottie/${name}.json`),
      rendererSettings: {
        progressiveLoad: true,
        hideOnTransparent: true,
      },
    });

    return () => {
      player.current?.destroy();
    };
  }, [autoplay, loop, name]);

  return <div ref={container} className={className} />;
};

export default Lottie;
