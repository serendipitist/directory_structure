import React from 'react';

const Folder = props => (
  <div className="tree">
  <span>--</span>
    <p type="button" className="node" onClick={props.addChild}>{props.title === 'Root' ? 'Folder': 'SubFolder' + props.number }</p>
    <div id="children-pane">
      {props.children}
    </div>
  </div>
);

export default Folder;
