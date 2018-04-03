import * as React from 'react';
import LogEntry from './LogEntry';
import Field from './Field';

interface MainProps {
  columns: Field[];
  logMessages: LogEntry[];
}

class Main extends React.Component<MainProps, any> {
  constructor(props: MainProps) {
    super(props);
  } 

  private trunc(str: string, len: number) {
    return (str.length > len) ? str.substr(0, len - 1) + '\u2026' : str;
  }

  render() {
    return (
      <div> 
        <h1>Log Viewer</h1>
        <div id="logTableContainer">
          <table>
            <thead>
              <tr>
              {this.props.columns.filter(c => c.visible).map(column =>
                <th key={column.name}>
                  {column.name}
                </th>)}
              </tr>
            </thead>
            <tbody>
              {this.props.logMessages.map(m =>
                <tr key={m.__id}>
                    {this.props.columns.filter(c => c.visible).map(c =>
                    <td key={c.name}>
                      <div>
                        {
                          (m[c.name]) ? this.trunc(m[c.name].toString(), 300) : ''
                        }
                      </div>
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Main;
