import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

import './text-sphere.css';

const TextShpere = ({ tags }) => {
  const isTagCloudLoaded = useRef(false);
  const container = '.tagcloud';
  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    keep: true,
  };

  useEffect(() => {
    if (isTagCloudLoaded.current) return;

    TagCloud(container, tags, options);
    isTagCloudLoaded.current = true;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="tagcloud"></span>
  );
};

export default TextShpere;
