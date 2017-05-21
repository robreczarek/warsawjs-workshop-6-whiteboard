import React from 'react';
import { findDOMNode } from 'react-dom';
import { fabric } from 'fabric';

export default class DrawingCanvas extends React.Component {

  componentDidMount() {
    this._canvas = new fabric.Canvas(findDOMNode(this), {
      isDrawingMode: true,
      selection: false, // disable group selection
    });
  }

  render() {
    return (
      <canvas width="800" height="600"></canvas>
    );
  }
}
