import {fabric} from 'fabric'
import { BaseControlPoint } from './BaseControlPoint.js'

export const ControlCircle = fabric.util.createClass(fabric.Circle, BaseControlPoint, {
    type: "ControlPoint",
    linePoint: true,
    initialize: function(p, dir, line, options) {
        options = options || {}

        this.set("lineReference", line)
        this.set("dir", dir)
        this.setOptions({
            ...Object.assign({
                fill: null,
                radius: 10,
                strokeWidth: 2,
                stroke: 'rgba(57, 87, 239, 0.8)',
                originX: 'center', originY: 'center'
            }, options),
            left: p.x, top: p.y,
        })
    }
})
