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
      { className: 'oc-scrollbar-container ' + className, ref: this.handleRef },
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
  component: 'div'
}, _temp);
export { ScrollBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUGVyZmVjdFNjcm9sbGJhciIsImhhbmRsZXJOYW1lQnlFdmVudCIsIk9iamVjdCIsImZyZWV6ZSIsIlNjcm9sbEJhciIsInByb3BzIiwiaGFuZGxlUmVmIiwicmVmIiwiX2NvbnRhaW5lciIsImNvbnRhaW5lclJlZiIsIl9oYW5kbGVyQnlFdmVudCIsIk1hcCIsImNvbXBvbmVudERpZE1vdW50IiwicHMiLCJvcHRpb24iLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImNhbGxiYWNrIiwiaGFuZGxlciIsInNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJ1cGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInZhbHVlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyIiwiZGVzdHJveSIsInNldFNjcm9sbFRvcCIsInRvcCIsInNjcm9sbFRvcCIsInNldFNjcm9sbExlZnQiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInJlbmRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50IiwiQ29tcCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJvblNjcm9sbFkiLCJvblNjcm9sbFgiLCJvblNjcm9sbFVwIiwib25TY3JvbGxEb3duIiwib25TY3JvbGxMZWZ0Iiwib25TY3JvbGxSaWdodCIsIm9uWVJlYWNoU3RhcnQiLCJvbllSZWFjaEVuZCIsIm9uWFJlYWNoU3RhcnQiLCJvblhSZWFjaEVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLFlBQTFCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsbUJBQTdCO0FBQ0EsT0FBTyxvQkFBUDtBQUNBLE9BQU8sNkNBQVA7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QSxRQUNzQkMsU0FEdEIsVUFDc0JBLFNBRHRCOztBQUVQLFFBQU1DLE9BQU9ELFNBQWI7QUFDQSxXQUNFO0FBQUMsVUFBRDtBQUFBLFFBQU0sdUNBQXFDRCxTQUEzQyxFQUF3RCxLQUFLLEtBQUsvQixTQUFsRTtBQUNHOEI7QUFESCxLQURGO0FBS0QsRzs7O0VBckdvQ3RDLE1BQU0wQyxhLFVBbUJwQ0MsWSxHQUFlO0FBQ3BCSixhQUFXLEVBRFM7QUFFcEJ2QixVQUFRNEIsU0FGWTtBQUdwQmpDLGdCQUFjLHdCQUFNLENBQUcsQ0FISDtBQUlwQmtDLGFBQVdELFNBSlM7QUFLcEJFLGFBQVdGLFNBTFM7QUFNcEJHLGNBQVlILFNBTlE7QUFPcEJJLGdCQUFjSixTQVBNO0FBUXBCSyxnQkFBY0wsU0FSTTtBQVNwQk0saUJBQWVOLFNBVEs7QUFVcEJPLGlCQUFlUCxTQVZLO0FBV3BCUSxlQUFhUixTQVhPO0FBWXBCUyxpQkFBZVQsU0FaSztBQWFwQlUsZUFBYVYsU0FiTztBQWNwQkosYUFBVztBQWRTLEM7U0FuQkhsQyxTIiwiZmlsZSI6InBlcmZlY3Qtc2Nyb2xsYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcywgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3BlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCAnY2xhc3NsaXN0LXBvbHlmaWxsJztcbmltcG9ydCAncGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzcyc7XG5pbXBvcnQgJy4vcGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LnNjc3MnO1xuXG5jb25zdCBoYW5kbGVyTmFtZUJ5RXZlbnQgPSB7XG4gICdwcy1zY3JvbGwteSc6ICdvblNjcm9sbFknLFxuICAncHMtc2Nyb2xsLXgnOiAnb25TY3JvbGxYJyxcbiAgJ3BzLXNjcm9sbC11cCc6ICdvblNjcm9sbFVwJyxcbiAgJ3BzLXNjcm9sbC1kb3duJzogJ29uU2Nyb2xsRG93bicsXG4gICdwcy1zY3JvbGwtbGVmdCc6ICdvblNjcm9sbExlZnQnLFxuICAncHMtc2Nyb2xsLXJpZ2h0JzogJ29uU2Nyb2xsUmlnaHQnLFxuICAncHMteS1yZWFjaC1zdGFydCc6ICdvbllSZWFjaFN0YXJ0JyxcbiAgJ3BzLXktcmVhY2gtZW5kJzogJ29uWVJlYWNoRW5kJyxcbiAgJ3BzLXgtcmVhY2gtc3RhcnQnOiAnb25YUmVhY2hTdGFydCcsXG4gICdwcy14LXJlYWNoLWVuZCc6ICdvblhSZWFjaEVuZCcsXG59O1xuT2JqZWN0LmZyZWV6ZShoYW5kbGVyTmFtZUJ5RXZlbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxCYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3B0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRhaW5lclJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxZOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbFg6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsVXA6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsRG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxMZWZ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbFJpZ2h0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbllSZWFjaFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbllSZWFjaEVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25YUmVhY2hTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25YUmVhY2hFbmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgb3B0aW9uOiB1bmRlZmluZWQsXG4gICAgY29udGFpbmVyUmVmOiAoKSA9PiB7IH0sXG4gICAgb25TY3JvbGxZOiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxYOiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxVcDogdW5kZWZpbmVkLFxuICAgIG9uU2Nyb2xsRG93bjogdW5kZWZpbmVkLFxuICAgIG9uU2Nyb2xsTGVmdDogdW5kZWZpbmVkLFxuICAgIG9uU2Nyb2xsUmlnaHQ6IHVuZGVmaW5lZCxcbiAgICBvbllSZWFjaFN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb25ZUmVhY2hFbmQ6IHVuZGVmaW5lZCxcbiAgICBvblhSZWFjaFN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb25YUmVhY2hFbmQ6IHVuZGVmaW5lZCxcbiAgICBjb21wb25lbnQ6ICdkaXYnLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5faGFuZGxlckJ5RXZlbnQgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcy5fY29udGFpbmVyLCB0aGlzLnByb3BzLm9wdGlvbik7XG4gICAgLy8gaG9vayB1cCBldmVudHNcbiAgICBPYmplY3Qua2V5cyhoYW5kbGVyTmFtZUJ5RXZlbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLnByb3BzW2hhbmRsZXJOYW1lQnlFdmVudFtrZXldXTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gY2FsbGJhY2sodGhpcy5fY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5faGFuZGxlckJ5RXZlbnQuc2V0KGtleSwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGtleSwgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucHMudXBkYXRlKHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyB1bmhvb2sgdXAgZXZlbnNcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9oYW5kbGVyQnlFdmVudCkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuX2hhbmRsZXJCeUV2ZW50LmNsZWFyKCk7XG4gICAgdGhpcy5wcy5kZXN0cm95KHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICAvLyBtZXRob2RzIGNhbiBiZSBpbnZva2VkIGJ5IG91dHNpZGVcbiAgc2V0U2Nyb2xsVG9wKHRvcCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICB0aGlzLnBzLnVwZGF0ZSh0aGlzLl9jb250YWluZXIpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2V0U2Nyb2xsTGVmdChsZWZ0KSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgdGhpcy5wcy51cGRhdGUodGhpcy5fY29udGFpbmVyKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZVJlZiA9IChyZWYpID0+IHtcbiAgICB0aGlzLl9jb250YWluZXIgPSByZWY7XG4gICAgdGhpcy5wcm9wcy5jb250YWluZXJSZWYocmVmKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGNvbXBvbmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBDb21wID0gY29tcG9uZW50O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcCBjbGFzc05hbWU9e2BvYy1zY3JvbGxiYXItY29udGFpbmVyICR7Y2xhc3NOYW1lfWB9IHJlZj17dGhpcy5oYW5kbGVSZWZ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbXA+XG4gICAgKTtcbiAgfVxufVxuIl19