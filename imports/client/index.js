import React from 'react';

import DrawingCanvas from './DrawingCanvas.js';
import FabricObjects from '../lib/fabric-objects';

if (Meteor.isDevelopment) {
  global.FabricObjects = FabricObjects;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawingMode: true,
    };
  }

  render() {

    const { isDrawingMode } = this.state;

    return (
      <div>
        <h1>Drawing Board</h1>
        <DrawingCanvas isDrawingMode={isDrawingMode} />

        <input
          type="checkbox"
          onChange={(e) => {
            this.setState({
              isDrawingMode: e.target.checked,
            });
          }}
          checked={isDrawingMode} />
        <label>Drawing mode</label>

      </div>
    )
  }

}
