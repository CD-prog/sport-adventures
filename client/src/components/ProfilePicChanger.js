import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Avatar} from 'antd';

class ProfilePicChanger extends Component {
  render() {
    return (
      <div className="ProfilePicChanger">
        <h3>Component connection</h3>
        <Avatar size={64} icon="user" />
      </div>
    );
  }
}

export default ProfilePicChanger;