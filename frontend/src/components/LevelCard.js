import React from "react";
import Avatar from '@mui/material/Avatar';

export default class Level extends React.Component {
  render() {
    return (
      <Avatar>{this.props.letter}</Avatar>
    );
  }
}