/* eslint-disable no-underscore-dangle, react/no-unused-prop-types, react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import PerfectScrollbar from 'perfect-scrollbar';
import 'classlist-polyfill';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './perfect-scrollbar.component.scss';

const handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd',
};
Object.freeze(handlerNameByEvent);

export default class ScrollBar extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    option: PropTypes.object,
    containerRef: PropTypes.func,
    onScrollY: PropTypes.func,
    onScrollX: PropTypes.func,
    onScrollUp: PropTypes.func,
    onScrollDown: PropTypes.func,
    onScrollLeft: PropTypes.func,
    onScrollRight: PropTypes.func,
    onYReachStart: PropTypes.func,
    onYReachEnd: PropTypes.func,
    onXReachStart: PropTypes.func,
    onXReachEnd: PropTypes.func,
    component: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
    option: undefined,
    containerRef: () => { },
    onScrollY: undefined,
    onScrollX: undefined,
    onScrollUp: undefined,
    onScrollDown: undefined,
    onScrollLeft: undefined,
    onScrollRight: undefined,
    onYReachStart: undefined,
    onYReachEnd: undefined,
    onXReachStart: undefined,
    onXReachEnd: undefined,
    component: 'div',
    style: {},
  }

  constructor(props) {
    super(props);
    this._handlerByEvent = new Map();
  }

  componentDidMount() {
    this.ps = new PerfectScrollbar(this._container, this.props.option);
    // hook up events
    Object.keys(handlerNameByEvent).forEach((key) => {
      const callback = this.props[handlerNameByEvent[key]];
      if (callback) {
        const handler = () => callback(this._container);
        this._handlerByEvent.set(key, handler);
        this._container.addEventListener(key, handler, false);
      }
    });
  }

  componentDidUpdate() {
    this.ps.update(this._container);
  }

  componentWillUnmount() {
    // unhook up evens
    Object.keys(this._handlerByEvent).forEach((value, key) => {
      this._container.removeEventListener(key, value, false);
    });
    this._handlerByEvent.clear();
    this.ps.destroy(this._container);
  }

  // methods can be invoked by outside
  setScrollTop(top) {
    if (this._container) {
      this._container.scrollTop = top;
      this.ps.update(this._container);

      return true;
    }
    return false;
  }

  setScrollLeft(left) {
    if (this._container) {
      this._container.scrollLeft = left;
      this.ps.update(this._container);

      return true;
    }
    return false;
  }

  handleRef = (ref) => {
    this._container = ref;
    this.props.containerRef(ref);
  }

  render() {
    const { children, className, component } = this.props;
    const Comp = component;
    return (
      <Comp className={`oc-scrollbar-container ${className}`} ref={this.handleRef} style={this.props.style}>
        {children}
      </Comp>
    );
  }
}
