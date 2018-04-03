import * as React from 'react';
import Field from './Field';

interface SidebarProps {
  columns: Field[];
}

class Sidebar extends React.Component<SidebarProps, any> {
  render() {
    return (
      <div>
        <h2>Columns</h2>
        <div>
          {this.props.columns.map(column =>
            <span key={`${column.name}VisibleCheckbox`}>
              <input id={`${column.name}VisibleCheckbox`} type="checkbox" />
              <label htmlFor={`${column.name}VisibleCheckbox`}>{column.name}</label>
              <br />
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Sidebar;
