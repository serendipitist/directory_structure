import React, { Component } from 'react';
import Folder from './folder';

class FolderTree extends React.Component {
  state = {
    numChildren: 1
  }

  render () {
    const children = [];

    for (var i = 1; i < this.state.numChildren; i += 1) {
      children.push(<div><Folder key={i}  title={'child'} number={i}/></div>);
    };

    return (
      <Folder addChild={this.onAddChild} key={i} title={this.props.title}>
        {children}
      </Folder>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }
}

export default FolderTree;
