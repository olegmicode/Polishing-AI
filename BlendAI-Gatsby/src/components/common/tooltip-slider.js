import React, { useRef, useEffect } from "react"
import raf from "rc-util/lib/raf"
import Tooltip from "rc-tooltip"

const HandleTooltip = props => {
  const {
    value,
    children,
    visible,
    ...restProps
  } = props

  const tooltipRef = useRef()
  const rafRef = useRef(null)

  function cancelKeepAlign() {
    raf.cancel(rafRef.current)
  }

  function keepAlign() {
    rafRef.current = raf(() => {
      tooltipRef.current?.forcePopupAlign()
    })
  }

  useEffect(() => {
    if (visible) {
      keepAlign()
    } else {
      cancelKeepAlign()
    }

    return cancelKeepAlign
  }, [value, visible])

  return (
    <Tooltip
      placement="top"
      overlay={value}
      overlayInnerStyle={{ minHeight: "auto" }}
      ref={tooltipRef}
      visible={visible}
      {...restProps}
    >
      {children}
    </Tooltip>
  )
}

export const handleRender = (node, props) => {
  if (props.value > 200 && props.value < 250) {
    props.dragging = false
  }

  if (props.value === 250) {
    props.value = "+500"
    props.dragging = true
  }

  return (
    <HandleTooltip value={props.value} visible={props.dragging}>
      {node}
    </HandleTooltip>
  )
}
