/**
 * @class Scrollspy
 * Taken verbatim from https://github.com/telega/react-scrollspy-ez
 * and stripped of TS interfaces.
 *
 * Lacy - November 2022: Added nextJS router support
 */

import classnames from 'classnames'
import React from 'react'
import debounce from 'utils/debounce'
import throttle from 'utils/throttle'
const THROTTLE_DELAY = 20
const DEBOUNCE_HASH_DELAY = 100

export default class Scrollspy extends React.Component {
	constructor(props) {
		super(props)
		this.elements = []
		this.state = {
			items: [],
			current: ''
		}
	}

	updateHash = (hash) => {
		// enforce hash # prefix
		if (('' + hash).charAt(0) !== '#') hash = '#' + hash;

		// router.replace causes a scroll
		history.replaceState({}, '', hash);

		this.props.onUpdateHash(hash)
	}

	dUpdateHash = debounce(this.updateHash, DEBOUNCE_HASH_DELAY)

	spy() {
		// I don't understand why this was implemented this way, but I optimized it
		if (this.elements) {
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

			let itemInView = items.find((item) => !!item && item.inView)

			if (itemInView && this.state.current !== itemInView?.id) {
				// item updated

				const update = items.map((item) => {
					return { ...item, inView: item === itemInView }
				})

				this.setState({ items: update, current: itemInView?.id })

				// update page hash
				itemInView?.id && this.dUpdateHash(itemInView.id)

			}
		}
	}

	tSpy = throttle(this.spy, THROTTLE_DELAY)

	componentDidMount() {
		this.elements = this.props.ids.map((id) => document.getElementById(id))
		window.addEventListener('scroll', () => this.tSpy(), false);
		window.addEventListener('resize', () => this.tSpy(), false);
		// fire on router change
		// router.events.on('routeChangeComplete', () => this.tSpy())

		// run on mount
		this.spy()
	}

	componentDidUpdate() {
		this.elements = this.props.ids.map((id) => document.getElementById(id))
		this.spy()
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', () => this.tSpy(), false);
		window.removeEventListener('resize', () => this.tSpy(), false);
		// router.events.off('routeChangeComplete', () => this.tSpy())

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
						this.dUpdateHash(item.id)

						// scroll to the element
						this.scrollTo(item.element)
					},
					slug: item.id,
					children: item?.element?.innerText,
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
