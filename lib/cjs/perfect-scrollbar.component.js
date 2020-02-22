'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /* eslint-disable no-underscore-dangle, react/no-unused-prop-types, react/forbid-prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _perfectScrollbar = require('perfect-scrollbar');

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

require('classlist-polyfill');

require('perfect-scrollbar/css/perfect-scrollbar.css');

require('./perfect-scrollbar.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    this.ps = new _perfectScrollbar2.default(this._container, this.props.option);
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
    return _react2.default.createElement(
      Comp,
      { className: 'oc-scrollbar-container ' + className, ref: this.handleRef, style: this.props.style },
      children
    );
  };

  return ScrollBar;
}(_react2.default.PureComponent), _class.defaultProps = {
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
exports.default = ScrollBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImhhbmRsZXJOYW1lQnlFdmVudCIsIk9iamVjdCIsImZyZWV6ZSIsIlNjcm9sbEJhciIsInByb3BzIiwiaGFuZGxlUmVmIiwicmVmIiwiX2NvbnRhaW5lciIsImNvbnRhaW5lclJlZiIsIl9oYW5kbGVyQnlFdmVudCIsIk1hcCIsImNvbXBvbmVudERpZE1vdW50IiwicHMiLCJQZXJmZWN0U2Nyb2xsYmFyIiwib3B0aW9uIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJjYWxsYmFjayIsImhhbmRsZXIiLCJzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50RGlkVXBkYXRlIiwidXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJ2YWx1ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhciIsImRlc3Ryb3kiLCJzZXRTY3JvbGxUb3AiLCJ0b3AiLCJzY3JvbGxUb3AiLCJzZXRTY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbExlZnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbXBvbmVudCIsIkNvbXAiLCJzdHlsZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsIm9uU2Nyb2xsWSIsIm9uU2Nyb2xsWCIsIm9uU2Nyb2xsVXAiLCJvblNjcm9sbERvd24iLCJvblNjcm9sbExlZnQiLCJvblNjcm9sbFJpZ2h0Iiwib25ZUmVhY2hTdGFydCIsIm9uWVJlYWNoRW5kIiwib25YUmVhY2hTdGFydCIsIm9uWFJlYWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7OzttQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCO0FBQ3pCLGlCQUFlLFdBRFU7QUFFekIsaUJBQWUsV0FGVTtBQUd6QixrQkFBZ0IsWUFIUztBQUl6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cUNELFNBQTNDLEVBQXdELEtBQUssS0FBS2hDLFNBQWxFLEVBQTZFLE9BQU8sS0FBS0QsS0FBTCxDQUFXb0MsS0FBL0Y7QUFDR0o7QUFESCxLQURGO0FBS0QsRzs7O0VBdkdvQ0ssZ0JBQU1DLGEsVUFvQnBDQyxZLEdBQWU7QUFDcEJOLGFBQVcsRUFEUztBQUVwQnZCLFVBQVE4QixTQUZZO0FBR3BCcEMsZ0JBQWMsd0JBQU0sQ0FBRyxDQUhIO0FBSXBCcUMsYUFBV0QsU0FKUztBQUtwQkUsYUFBV0YsU0FMUztBQU1wQkcsY0FBWUgsU0FOUTtBQU9wQkksZ0JBQWNKLFNBUE07QUFRcEJLLGdCQUFjTCxTQVJNO0FBU3BCTSxpQkFBZU4sU0FUSztBQVVwQk8saUJBQWVQLFNBVks7QUFXcEJRLGVBQWFSLFNBWE87QUFZcEJTLGlCQUFlVCxTQVpLO0FBYXBCVSxlQUFhVixTQWJPO0FBY3BCTixhQUFXLEtBZFM7QUFlcEJFLFNBQU87QUFmYSxDO2tCQXBCSHJDLFMiLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzLCByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0ICdjbGFzc2xpc3QtcG9seWZpbGwnO1xuaW1wb3J0ICdwZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzJztcbmltcG9ydCAnLi9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuc2Nzcyc7XG5cbmNvbnN0IGhhbmRsZXJOYW1lQnlFdmVudCA9IHtcbiAgJ3BzLXNjcm9sbC15JzogJ29uU2Nyb2xsWScsXG4gICdwcy1zY3JvbGwteCc6ICdvblNjcm9sbFgnLFxuICAncHMtc2Nyb2xsLXVwJzogJ29uU2Nyb2xsVXAnLFxuICAncHMtc2Nyb2xsLWRvd24nOiAnb25TY3JvbGxEb3duJyxcbiAgJ3BzLXNjcm9sbC1sZWZ0JzogJ29uU2Nyb2xsTGVmdCcsXG4gICdwcy1zY3JvbGwtcmlnaHQnOiAnb25TY3JvbGxSaWdodCcsXG4gICdwcy15LXJlYWNoLXN0YXJ0JzogJ29uWVJlYWNoU3RhcnQnLFxuICAncHMteS1yZWFjaC1lbmQnOiAnb25ZUmVhY2hFbmQnLFxuICAncHMteC1yZWFjaC1zdGFydCc6ICdvblhSZWFjaFN0YXJ0JyxcbiAgJ3BzLXgtcmVhY2gtZW5kJzogJ29uWFJlYWNoRW5kJyxcbn07XG5PYmplY3QuZnJlZXplKGhhbmRsZXJOYW1lQnlFdmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGFpbmVyUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbFk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsWDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxVcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbExlZnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsUmlnaHQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uWVJlYWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uWVJlYWNoRW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblhSZWFjaFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblhSZWFjaEVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBvcHRpb246IHVuZGVmaW5lZCxcbiAgICBjb250YWluZXJSZWY6ICgpID0+IHsgfSxcbiAgICBvblNjcm9sbFk6IHVuZGVmaW5lZCxcbiAgICBvblNjcm9sbFg6IHVuZGVmaW5lZCxcbiAgICBvblNjcm9sbFVwOiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxEb3duOiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxMZWZ0OiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxSaWdodDogdW5kZWZpbmVkLFxuICAgIG9uWVJlYWNoU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBvbllSZWFjaEVuZDogdW5kZWZpbmVkLFxuICAgIG9uWFJlYWNoU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBvblhSZWFjaEVuZDogdW5kZWZpbmVkLFxuICAgIGNvbXBvbmVudDogJ2RpdicsXG4gICAgc3R5bGU6IHt9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5faGFuZGxlckJ5RXZlbnQgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcy5fY29udGFpbmVyLCB0aGlzLnByb3BzLm9wdGlvbik7XG4gICAgLy8gaG9vayB1cCBldmVudHNcbiAgICBPYmplY3Qua2V5cyhoYW5kbGVyTmFtZUJ5RXZlbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLnByb3BzW2hhbmRsZXJOYW1lQnlFdmVudFtrZXldXTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gY2FsbGJhY2sodGhpcy5fY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5faGFuZGxlckJ5RXZlbnQuc2V0KGtleSwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGtleSwgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucHMudXBkYXRlKHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyB1bmhvb2sgdXAgZXZlbnNcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9oYW5kbGVyQnlFdmVudCkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuX2hhbmRsZXJCeUV2ZW50LmNsZWFyKCk7XG4gICAgdGhpcy5wcy5kZXN0cm95KHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICAvLyBtZXRob2RzIGNhbiBiZSBpbnZva2VkIGJ5IG91dHNpZGVcbiAgc2V0U2Nyb2xsVG9wKHRvcCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICB0aGlzLnBzLnVwZGF0ZSh0aGlzLl9jb250YWluZXIpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2V0U2Nyb2xsTGVmdChsZWZ0KSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgdGhpcy5wcy51cGRhdGUodGhpcy5fY29udGFpbmVyKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZVJlZiA9IChyZWYpID0+IHtcbiAgICB0aGlzLl9jb250YWluZXIgPSByZWY7XG4gICAgdGhpcy5wcm9wcy5jb250YWluZXJSZWYocmVmKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGNvbXBvbmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBDb21wID0gY29tcG9uZW50O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcCBjbGFzc05hbWU9e2BvYy1zY3JvbGxiYXItY29udGFpbmVyICR7Y2xhc3NOYW1lfWB9IHJlZj17dGhpcy5oYW5kbGVSZWZ9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db21wPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==