import React, { useRef, useState } from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
import Tooltip from "rc-tooltip"

const RangeSlider = () => {
    const [price, setPrice] = useState(10);

    const handle = (node, props) => {
        return (
            <Tooltip
                overlay={props.value}
                overlayInnerStyle={{ minHeight: "auto" }}
                visible={true}
                placement="top"
                prefixCls="rc-slider-tooltip"
            >
               {node}
            </Tooltip>
        )
    }
    return (
        <div>
            Slider
            <Slider
                value={price}
                onChange={value => setPrice(value)}
                min={10}
                max={100}
                step={1}
                handleRender={handle}
            />
        </div>
    )
}

export default RangeSlider