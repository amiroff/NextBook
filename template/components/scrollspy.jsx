/**
 * @class Scrollspy
 * Taken verbatim from https://github.com/telega/react-scrollspy-ez
 * and stripped of TS interfaces.
 */

import React from 'react'
import classnames from 'classnames'

const SPY_INTERVAL = 100

export default class Scrollspy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  timer = 0

  spy() {
    const items = this.props.ids
      .map((id) => {
        const element = document.getElementById(id)
        if (element) {
          return {
            inView: this.isInView(element),
            element
          }
        } else {
          return
        }
      })
      .filter((item) => item)

    const firstTrueItem = items.find((item) => !!item && item.inView)

    if (!firstTrueItem) {
      return // dont update state
    } else {
      const update = items.map((item) => {
        return { ...item, inView: item === firstTrueItem }
      })

      this.setState({ items: update })
    }
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.spy(), SPY_INTERVAL)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  isInView = (element) => {
    if (!element) {
      return false
    }
    const { offset } = this.props
    const rect = element.getBoundingClientRect()

    return rect.top >= 0 - offset && rect.bottom <= window.innerHeight + offset
  }

  scrollTo(element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  renderItems() {
    const { itemElement, activeItemClassName, itemClassName } = this.props
    return this.state.items.map((item, k) => {
      return itemElement
        ? React.cloneElement(itemElement, {
            key: k,
            className: classnames(
              this.props.includeParentClasses && item.element.className
                ? item.element.className
                : null,
              itemClassName,
              item.inView ? activeItemClassName : null
            ),
            onClick: () => this.scrollTo(item.element),
            children: item.element.innerText
          })
        : null
    })
  }

  render() {
    const { itemContainerClassName, containerElement } = this.props
    return containerElement
      ? React.cloneElement(containerElement, {
          className: classnames(itemContainerClassName),
          children: this.renderItems()
        })
      : null
  }
}

Scrollspy.defaultProps = {
  offset: 2,
  ids: [],
  containerElement: <ul />,
  itemElement: <li />,
  includeParentClasses: false
}
