import * as React from 'react';
import './App.css';
import LogEntry from './LogEntry';
import Main from './Main';
import Sidebar from './Sidebar';

interface AppState {
  logMessages: LogEntry[];
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      logMessages: [
        {
          type: 'v2',
          message: 'Log message 1',
          timestamp: new Date(),
          level: 'Info',
          applicationGroup: 'Platform',
          applicationName: 'DummyApi'
        },
        {
          type: 'v2',
          message: 'Log message 2',
          timestamp: new Date(),
          level: 'Info',
          applicationGroup: 'Platform',
          applicationName: 'DummyApi'
        },
        {
          type: 'v2',
          message: 'Log message 3',
          timestamp: new Date(),
          level: 'Info',
          applicationGroup: 'Platform',
          applicationName: 'DummyApi'
        }
      ]
    };

    this.addLogMessage = this.addLogMessage.bind(this);
  }

  addLogMessage() {
    const messagesCopy = this.state.logMessages.slice();
    this.setState(
      {
        logMessages: [
          {
            type: 'v2',
            message: 'Log message NEW!',
            timestamp: new Date(),
            level: 'Info',
            applicationGroup: 'Platform',
            applicationName: 'DummyApi'
          },
          ...messagesCopy]
      });
  }

  render() {
    return (
      <div id="root">
        <button onClick={this.addLogMessage}>
          Add test log item (main)
        </button>
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="main">
          <Main logMessages={this.state.logMessages} />
        </div>
      </div>
    );
  }
}

export default App;
