var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-underscore-dangle, react/no-unused-prop-types, react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import PerfectScrollbar from 'perfect-scrollbar';
import 'classlist-polyfill';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './perfect-scrollbar.component.scss';

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar = (_temp = _class = function (_React$PureComponent) {
  _inherits(ScrollBar, _React$PureComponent);

  function ScrollBar(props) {
    _classCallCheck(this, ScrollBar);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleRef = function (ref) {
      _this._container = ref;
      _this.props.containerRef(ref);
    };

    _this._handlerByEvent = new Map();
    return _this;
  }

  ScrollBar.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.ps = new PerfectScrollbar(this._container, this.props.option);
    // hook up events
    Object.keys(handlerNameByEvent).forEach(function (key) {
      var callback = _this2.props[handlerNameByEvent[key]];
      if (callback) {
        var handler = function handler() {
          return callback(_this2._container);
        };
        _this2._handlerByEvent.set(key, handler);
        _this2._container.addEventListener(key, handler, false);
      }
    });
  };

  ScrollBar.prototype.componentDidUpdate = function componentDidUpdate() {
    this.ps.update(this._container);
  };

  ScrollBar.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    // unhook up evens
    Object.keys(this._handlerByEvent).forEach(function (value, key) {
      _this3._container.removeEventListener(key, value, false);
    });
    this._handlerByEvent.clear();
    this.ps.destroy(this._container);
  };

  // methods can be invoked by outside


  ScrollBar.prototype.setScrollTop = function setScrollTop(top) {
    if (this._container) {
      this._container.scrollTop = top;
      this.ps.update(this._container);

      return true;
    }
    return false;
  };

  ScrollBar.prototype.setScrollLeft = function setScrollLeft(left) {
    if (this._container) {
      this._container.scrollLeft = left;
      this.ps.update(this._container);

      return true;
    }
    return false;
  };

  ScrollBar.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        component = _props.component;

    var Comp = component;
    return React.createElement(
      Comp,
      { className: 'oc-scrollbar-container ' + className, ref: this.handleRef, style: this.props.style },
      children
    );
  };

  return ScrollBar;
}(React.PureComponent), _class.defaultProps = {
  className: '',
  option: undefined,
  containerRef: function containerRef() {},
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
  style: {}
}, _temp);
export { ScrollBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUGVyZmVjdFNjcm9sbGJhciIsImhhbmRsZXJOYW1lQnlFdmVudCIsIk9iamVjdCIsImZyZWV6ZSIsIlNjcm9sbEJhciIsInByb3BzIiwiaGFuZGxlUmVmIiwicmVmIiwiX2NvbnRhaW5lciIsImNvbnRhaW5lclJlZiIsIl9oYW5kbGVyQnlFdmVudCIsIk1hcCIsImNvbXBvbmVudERpZE1vdW50IiwicHMiLCJvcHRpb24iLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImNhbGxiYWNrIiwiaGFuZGxlciIsInNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJ1cGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInZhbHVlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyIiwiZGVzdHJveSIsInNldFNjcm9sbFRvcCIsInRvcCIsInNjcm9sbFRvcCIsInNldFNjcm9sbExlZnQiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInJlbmRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50IiwiQ29tcCIsInN0eWxlIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsIm9uU2Nyb2xsWSIsIm9uU2Nyb2xsWCIsIm9uU2Nyb2xsVXAiLCJvblNjcm9sbERvd24iLCJvblNjcm9sbExlZnQiLCJvblNjcm9sbFJpZ2h0Iiwib25ZUmVhY2hTdGFydCIsIm9uWVJlYWNoRW5kIiwib25YUmVhY2hTdGFydCIsIm9uWFJlYWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsWUFBMUI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixtQkFBN0I7QUFDQSxPQUFPLG9CQUFQO0FBQ0EsT0FB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U0FEWDtBQUFBLFFBQ3NCQyxTQUR0QixVQUNzQkEsU0FEdEI7O0FBRVAsUUFBTUMsT0FBT0QsU0FBYjtBQUNBLFdBQ0U7QUFBQyxVQUFEO0FBQUEsUUFBTSx1Q0FBcUNELFNBQTNDLEVBQXdELEtBQUssS0FBSy9CLFNBQWxFLEVBQTZFLE9BQU8sS0FBS0QsS0FBTCxDQUFXbUMsS0FBL0Y7QUFDR0o7QUFESCxLQURGO0FBS0QsRzs7O0VBdkdvQ3RDLE1BQU0yQyxhLFVBb0JwQ0MsWSxHQUFlO0FBQ3BCTCxhQUFXLEVBRFM7QUFFcEJ2QixVQUFRNkIsU0FGWTtBQUdwQmxDLGdCQUFjLHdCQUFNLENBQUcsQ0FISDtBQUlwQm1DLGFBQVdELFNBSlM7QUFLcEJFLGFBQVdGLFNBTFM7QUFNcEJHLGNBQVlILFNBTlE7QUFPcEJJLGdCQUFjSixTQVBNO0FBUXBCSyxnQkFBY0wsU0FSTTtBQVNwQk0saUJBQWVOLFNBVEs7QUFVcEJPLGlCQUFlUCxTQVZLO0FBV3BCUSxlQUFhUixTQVhPO0FBWXBCUyxpQkFBZVQsU0FaSztBQWFwQlUsZUFBYVYsU0FiTztBQWNwQkwsYUFBVyxLQWRTO0FBZXBCRSxTQUFPO0FBZmEsQztTQXBCSHBDLFMiLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzLCByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0ICdjbGFzc2xpc3QtcG9seWZpbGwnO1xuaW1wb3J0ICdwZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzJztcbmltcG9ydCAnLi9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuc2Nzcyc7XG5cbmNvbnN0IGhhbmRsZXJOYW1lQnlFdmVudCA9IHtcbiAgJ3BzLXNjcm9sbC15JzogJ29uU2Nyb2xsWScsXG4gICdwcy1zY3JvbGwteCc6ICdvblNjcm9sbFgnLFxuICAncHMtc2Nyb2xsLXVwJzogJ29uU2Nyb2xsVXAnLFxuICAncHMtc2Nyb2xsLWRvd24nOiAnb25TY3JvbGxEb3duJyxcbiAgJ3BzLXNjcm9sbC1sZWZ0JzogJ29uU2Nyb2xsTGVmdCcsXG4gICdwcy1zY3JvbGwtcmlnaHQnOiAnb25TY3JvbGxSaWdodCcsXG4gICdwcy15LXJlYWNoLXN0YXJ0JzogJ29uWVJlYWNoU3RhcnQnLFxuICAncHMteS1yZWFjaC1lbmQnOiAnb25ZUmVhY2hFbmQnLFxuICAncHMteC1yZWFjaC1zdGFydCc6ICdvblhSZWFjaFN0YXJ0JyxcbiAgJ3BzLXgtcmVhY2gtZW5kJzogJ29uWFJlYWNoRW5kJyxcbn07XG5PYmplY3QuZnJlZXplKGhhbmRsZXJOYW1lQnlFdmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGFpbmVyUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbFk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsWDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxVcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbExlZnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsUmlnaHQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uWVJlYWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uWVJlYWNoRW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblhSZWFjaFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblhSZWFjaEVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBvcHRpb246IHVuZGVmaW5lZCxcbiAgICBjb250YWluZXJSZWY6ICgpID0+IHsgfSxcbiAgICBvblNjcm9sbFk6IHVuZGVmaW5lZCxcbiAgICBvblNjcm9sbFg6IHVuZGVmaW5lZCxcbiAgICBvblNjcm9sbFVwOiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxEb3duOiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxMZWZ0OiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxSaWdodDogdW5kZWZpbmVkLFxuICAgIG9uWVJlYWNoU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBvbllSZWFjaEVuZDogdW5kZWZpbmVkLFxuICAgIG9uWFJlYWNoU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBvblhSZWFjaEVuZDogdW5kZWZpbmVkLFxuICAgIGNvbXBvbmVudDogJ2RpdicsXG4gICAgc3R5bGU6IHt9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5faGFuZGxlckJ5RXZlbnQgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcy5fY29udGFpbmVyLCB0aGlzLnByb3BzLm9wdGlvbik7XG4gICAgLy8gaG9vayB1cCBldmVudHNcbiAgICBPYmplY3Qua2V5cyhoYW5kbGVyTmFtZUJ5RXZlbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLnByb3BzW2hhbmRsZXJOYW1lQnlFdmVudFtrZXldXTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gY2FsbGJhY2sodGhpcy5fY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5faGFuZGxlckJ5RXZlbnQuc2V0KGtleSwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGtleSwgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucHMudXBkYXRlKHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyB1bmhvb2sgdXAgZXZlbnNcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9oYW5kbGVyQnlFdmVudCkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuX2hhbmRsZXJCeUV2ZW50LmNsZWFyKCk7XG4gICAgdGhpcy5wcy5kZXN0cm95KHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICAvLyBtZXRob2RzIGNhbiBiZSBpbnZva2VkIGJ5IG91dHNpZGVcbiAgc2V0U2Nyb2xsVG9wKHRvcCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICB0aGlzLnBzLnVwZGF0ZSh0aGlzLl9jb250YWluZXIpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2V0U2Nyb2xsTGVmdChsZWZ0KSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgdGhpcy5wcy51cGRhdGUodGhpcy5fY29udGFpbmVyKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZVJlZiA9IChyZWYpID0+IHtcbiAgICB0aGlzLl9jb250YWluZXIgPSByZWY7XG4gICAgdGhpcy5wcm9wcy5jb250YWluZXJSZWYocmVmKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGNvbXBvbmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBDb21wID0gY29tcG9uZW50O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcCBjbGFzc05hbWU9e2BvYy1zY3JvbGxiYXItY29udGFpbmVyICR7Y2xhc3NOYW1lfWB9IHJlZj17dGhpcy5oYW5kbGVSZWZ9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db21wPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==