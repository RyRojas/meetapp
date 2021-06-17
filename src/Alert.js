import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.type = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className={`${this.type}-alert`}>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#EEE';
    this.type = 'info';
  }
}

export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.type = 'error';
  }
}

export class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#FFC107';
    this.type = 'warning';
  }
}
