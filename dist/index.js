'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var withViewportSize = function withViewportSize(WrappedComponent) {
  var ViewportSize = /*#__PURE__*/function (_PureComponent) {
    _inherits(ViewportSize, _PureComponent);

    function ViewportSize(props) {
      var _this;

      _classCallCheck(this, ViewportSize);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewportSize).call(this, props));
      _this.state = {
        width: 0,
        height: 0
      };
      _this.updateViewportDimensions = _this.updateViewportDimensions.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ViewportSize, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateViewportDimensions();
        window.addEventListener('resize', this.updateViewportDimensions);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.updateViewportDimensions);
      }
    }, {
      key: "updateViewportDimensions",
      value: function updateViewportDimensions() {
        this.setState({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            width = _this$state.width,
            height = _this$state.height;
        return React__default.createElement(WrappedComponent, _extends({}, this.props, {
          viewport: {
            width: width,
            height: height
          }
        }));
      }
    }]);

    return ViewportSize;
  }(React.PureComponent);

  return ViewportSize;
};

module.exports = withViewportSize;
