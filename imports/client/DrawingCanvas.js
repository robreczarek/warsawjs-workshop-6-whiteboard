import React from 'react';
import { findDOMNode } from 'react-dom';
import { fabric } from 'fabric';

import FabricObjects from '../lib/fabric-objects';

export default class DrawingCanvas extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isDrawingMode: true,
    }
  }

  componentWillUpdate(nextProps) {
    this._canvas.isDrawingMode = nextProps.isDrawingMode;
  }

  componentDidMount() {
    const canvas = new fabric.Canvas(findDOMNode(this), {
      isDrawingMode: this.props.isDrawingMode,
      selection: false,
    });

    this._canvas = canvas;

    this._canvas.on('object:added', async ({ target: fabricObject }) => {
      try {
        const id = await FabricObjects.getInsert(fabricObject.toObject());
        fabricObject.id = id;
      } catch (e) {
        console.log(String(e));
      }
    });

    this._canvas.on('object:modified', async ({ target: fabricObject }) => {
      try {
        await FabricObjects.genUpdate(fabricObject.id, fabricObject.toObject());
      } catch(e) {
        console.log(String(e));
      }
    });
  }

  render() {
    return (
      <canvas width="800" height="600"></canvas>
    );
  }
}
