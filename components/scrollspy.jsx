/**
 * @class Scrollspy
 * Taken verbatim from https://github.com/telega/react-scrollspy-ez
 * and stripped of TS interfaces.
 * 
 * Lacy - November 2022: Added nextJS router support
 * TODO: update hashchange on scroll
 */

import React from 'react'
import classnames from 'classnames'
import router from 'next/router'

export default class Scrollspy extends React.Component {
  constructor(props) {
    super(props)
    this.elements = []
    this.state = {
      items: [],
      current: ''
    }
  }

  timer = 0

  spy() {
    // I don't understand why this was implemented this way, but I optimized it
    if(this.elements) {
      const items = this.elements
        .map((element) => {
          if (element) {
            return {
              id: element.id,
              inView: this.isInView(element),
              element
            }
          } else {
            return
          }
        })

      const itemInView = items.find((item) => !!item && item.inView)

      if (!itemInView) {
        return
      }

      if(this.state.current !== itemInView.id) {

        const update = items.map((item) => {
          return { ...item, inView: item === itemInView }
        })

        this.setState({ items: update, current: itemInView.id  })        

      }
    }
  }


  componentDidMount() {
    this.elements = this.props.ids.map((id) => document.getElementById(id))
    window.addEventListener('scroll', () => this.spy(), false);
    window.addEventListener('resize', () => this.spy(), false);
    this.spy()
    }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.spy(), false);
    window.removeEventListener('resize', () => this.spy(), false);
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
            onClick: () => {
              // use next router to update url hash
              router.push({ hash: item.element.id }, null, { shallow: true });

              // scroll to the element
              this.scrollTo(item.element)
            },
            children: item.element.innerText,
            // Truncate the text to n characters
            // children: item.element.innerText.replace(/(.{20})..+/, "$1…")
          })
        : null
    })
  }

  render() {
    const { itemContainerClassName, containerElement } = this.props
    return containerElement && this.state.items
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
