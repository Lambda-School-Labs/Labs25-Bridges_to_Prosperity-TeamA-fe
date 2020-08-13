import React, { useState, useEffect } from 'react';
import BridgeSite from './BridgeSite.js';

function BridgeSiteList(props) {
  return (
    <>
      {props.mapData.map(bridge => (
        <BridgeSite
          key={bridge.id}
          bridge={bridge}
          toggleEditing={props.toggleEditing}
        />
      ))}
    </>
  );
}

export default BridgeSiteList;
