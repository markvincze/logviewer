import * as React from 'react';
import LogEntry from './LogEntry';

interface MainProps {
  logMessages: LogEntry[];
}

class Main extends React.Component<MainProps, any> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        We are using Node.js
        This is the main area.
        <h2>List</h2>
        <table>
          <tbody>
            {this.props.logMessages.map(m =>
              <tr key={m.message}>
                {Object.keys(m).map(k => <td key={k}>{m[k].toString()}</td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
