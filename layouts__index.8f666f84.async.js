"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[717],{

/***/ 16165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63017);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41755);



var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];




var Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, _excluded);
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .warning */ .Kp)(Boolean(Component || children), 'Should have `component` prop or `children`.');
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useInsertStyles */ .C3)();
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Context__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(rootClassName, prefixCls, className);
  var svgClassString = classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, "".concat(prefixCls, "-spin"), !!spin));
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var innerSvgProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, _utils__WEBPACK_IMPORTED_MODULE_3__/* .svgBaseProps */ .vD), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }
  // component > children
  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, innerSvgProps), children);
    }
    if (children) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .warning */ .Kp)(Boolean(viewBox) || react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) && react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, innerSvgProps), {}, {
        viewBox: viewBox
      }), children);
    }
    return null;
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
    role: "img"
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
/* harmony default export */ __webpack_exports__["Z"] = (Icon);

/***/ }),

/***/ 80331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_jazzicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44111);
/* harmony import */ var react_jazzicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jazzicon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);




var TokenIcon = function TokenIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 25 : _ref$size,
      src = _ref.src,
      _ref$symbol = _ref.symbol,
      symbol = _ref$symbol === void 0 ? '' : _ref$symbol,
      _ref$tokenId = _ref.tokenId,
      tokenId = _ref$tokenId === void 0 ? 'ii' : _ref$tokenId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: src ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: src,
      alt: symbol,
      style: {
        height: size
      }
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((react_jazzicon__WEBPACK_IMPORTED_MODULE_0___default()), {
      diameter: size,
      seed: (0,react_jazzicon__WEBPACK_IMPORTED_MODULE_0__.jsNumberForAddress)(tokenId)
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (TokenIcon);

/***/ }),

/***/ 46536:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ layouts_Layout; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 4 modules
var config_provider = __webpack_require__(58720);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/layout.js + 2 modules
var layout = __webpack_require__(84321);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__(7293);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/index.js


const Layout = layout/* default */.ZP;
Layout.Header = layout/* Header */.h4;
Layout.Footer = layout/* Footer */.$_;
Layout.Content = layout/* Content */.VY;
Layout.Sider = Sider/* default */.Z;
/* harmony default export */ var es_layout = (Layout);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 13 modules
var input_number = __webpack_require__(43262);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(75081);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/statistic/index.js + 5 modules
var statistic = __webpack_require__(55054);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 5 modules
var dropdown = __webpack_require__(71648);
// EXTERNAL MODULE: ./node_modules/antd/es/popover/index.js + 3 modules
var popover = __webpack_require__(74627);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 20 modules
var modal = __webpack_require__(60974);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/Icon.js
var Icon = __webpack_require__(16165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var esm_objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/TwitterOutlined.js
// This icon file is generated automatically.
var TwitterOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" } }] }, "name": "twitter", "theme": "outlined" };
/* harmony default export */ var asn_TwitterOutlined = (TwitterOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/TwitterOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var TwitterOutlined_TwitterOutlined = function TwitterOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_TwitterOutlined
  }));
};
TwitterOutlined_TwitterOutlined.displayName = 'TwitterOutlined';
/* harmony default export */ var icons_TwitterOutlined = (/*#__PURE__*/react.forwardRef(TwitterOutlined_TwitterOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/GithubOutlined.js
// This icon file is generated automatically.
var GithubOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" } }] }, "name": "github", "theme": "outlined" };
/* harmony default export */ var asn_GithubOutlined = (GithubOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/GithubOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var GithubOutlined_GithubOutlined = function GithubOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_GithubOutlined
  }));
};
GithubOutlined_GithubOutlined.displayName = 'GithubOutlined';
/* harmony default export */ var icons_GithubOutlined = (/*#__PURE__*/react.forwardRef(GithubOutlined_GithubOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(63606);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(80882);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/layouts/components/TabIcon.tsx




var TradeSvg = function TradeSvg(_ref) {
  var startColor = _ref.startColor,
      endColor = _ref.endColor,
      name = _ref.name;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "21",
    height: "13",
    viewBox: "0 0 21 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M0.5 9.57457L4.75536 6.38305V8.51073H15.1808C15.7683 8.51073 16.2446 8.98702 16.2446 9.57457C16.2446 10.1621 15.7683 10.6384 15.1808 10.6384H4.75536V12.7661L0.5 9.57457Z",
      fill: "url(#".concat(name, ")")
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M5.8192 4.25536L16.2446 4.25536V6.38305L20.5 3.19152L16.2446 0V2.12768L5.8192 2.12768C5.23166 2.12768 4.75536 2.60398 4.75536 3.19152C4.75536 3.77907 5.23166 4.25536 5.8192 4.25536Z",
      fill: "url(#".concat(name, ")")
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        id: name,
        x1: "21.1204",
        y1: "6.38305",
        x2: "-2.4562",
        y2: "6.38305",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: startColor
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: "1",
          stopColor: endColor
        })]
      })
    })]
  });
};

var SwapSvg = function SwapSvg(_ref2) {
  var startColor = _ref2.startColor,
      endColor = _ref2.endColor,
      name = _ref2.name;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "18",
    height: "17",
    viewBox: "0 0 18 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M16.2682 5.82054L10.4984 8.84532C9.96579 9.12244 9.64083 9.67479 9.64083 10.2901V16.1396C9.64083 16.7671 10.2768 17.1823 10.8105 16.893L16.5803 13.8682C17.1 13.591 17.4379 13.0387 17.4379 12.4234V6.58613C17.4379 5.94641 16.8019 5.54436 16.2682 5.82054ZM7.48337 8.83311L1.7136 5.82054C1.17995 5.54436 0.543945 5.94641 0.543945 6.57485V12.4497C0.543945 13.065 0.868905 13.6174 1.40156 13.8935L7.17133 16.9061C7.70399 17.1823 8.34099 16.768 8.34099 16.1405V10.2788C8.34099 9.66258 8.01603 9.11023 7.48337 8.83405V8.83311ZM15.7356 4.45281C16.0088 4.31472 16.138 4.07612 16.1132 3.84973C16.138 3.61113 16.0088 3.38568 15.7356 3.24759L9.86243 0.284798C9.59016 0.147736 9.28542 0.0785491 8.97699 0.0837712C8.66495 0.0837712 8.35291 0.146709 8.09255 0.284798L2.21942 3.23444C2.10115 3.28923 2.0024 3.37551 1.93531 3.48265C1.86822 3.5898 1.83571 3.71314 1.8418 3.83751C1.83391 3.96379 1.86551 4.08946 1.93266 4.19888C1.99981 4.30829 2.09954 4.3966 2.21942 4.45281L8.09255 7.40244C8.35291 7.54053 8.66495 7.60347 8.97699 7.60347C9.28903 7.60347 9.60108 7.54053 9.86144 7.40244L15.7346 4.45281H15.7356Z",
      fill: "url(#".concat(name, ")")
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        id: name,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: startColor
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: "1",
          stopColor: endColor
        })]
      })
    })]
  });
};

var PoolSvg = function PoolSvg(_ref3) {
  var startColor = _ref3.startColor,
      endColor = _ref3.endColor,
      name = _ref3.name;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M12.0569 0.644953C11.4917 0.351137 10.8163 0.761223 10.8163 1.39818V15.2648C10.8163 15.9673 11.6209 16.3658 12.1798 15.94L15.0186 13.7771C15.2294 13.6165 15.3531 13.3667 15.3531 13.1018V2.8741C15.3531 2.55737 15.1768 2.26698 14.8957 2.12088L12.0569 0.644953ZM8.70622 12.705C8.70622 13.0474 8.50048 13.3563 8.18451 13.4883L6.22946 14.305C5.67018 14.5387 5.05329 14.1278 5.05329 13.5217V2.59843C5.05329 2.03525 5.59163 1.62817 6.13351 1.7816L8.08856 2.33515C8.45398 2.43862 8.70622 2.7722 8.70622 3.15199V12.705ZM0.148969 11.7874C0.148204 12.3411 0.669158 12.7473 1.20597 12.6116L2.3023 12.3344C2.67917 12.2392 2.94318 11.9001 2.94318 11.5114V4.39842C2.94318 3.97948 2.63758 3.62317 2.22352 3.55938L1.13763 3.39206C0.623784 3.31289 0.160127 3.71002 0.159409 4.22993L0.148969 11.7874Z",
      fill: "url(#".concat(name, ")")
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        id: name,
        x1: "15.8248",
        y1: "8.48943",
        x2: "-2.10009",
        y2: "8.48943",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: startColor
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: "1",
          stopColor: endColor
        })]
      })
    })]
  });
};

var EarnSvg = function EarnSvg(_ref4) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      name = _ref4.name;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "18",
    height: "16",
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M6.21113 4.95222C6.66134 4.95222 7.07402 4.83967 7.44919 4.61457C7.82436 4.38947 8.12449 4.08934 8.3496 3.71417C8.5747 3.339 8.68725 2.9292 8.68725 2.48477C8.68725 2.0288 8.5747 1.61322 8.3496 1.23806C8.12449 0.862888 7.82436 0.562753 7.44919 0.337652C7.07402 0.112551 6.66134 0 6.21113 0C5.76093 0 5.34536 0.112551 4.96442 0.337652C4.58925 0.562753 4.28912 0.862888 4.06402 1.23806C3.84469 1.61322 3.73502 2.0288 3.73502 2.48477C3.73502 2.9292 3.84469 3.339 4.06402 3.71417C4.28912 4.08934 4.58925 4.38947 4.96442 4.61457C5.33959 4.83967 5.75516 4.95222 6.21113 4.95222ZM12.2889 4.95222C12.7448 4.95222 13.1604 4.83967 13.5356 4.61457C13.9107 4.38947 14.2109 4.08934 14.436 3.71417C14.6611 3.339 14.7736 2.9292 14.7736 2.48477C14.7736 2.0288 14.6611 1.61322 14.436 1.23806C14.2109 0.862888 13.9107 0.562753 13.5356 0.337652C13.1604 0.112551 12.7448 0 12.2889 0C11.8387 0 11.426 0.112551 11.0508 0.337652C10.6756 0.562753 10.3755 0.862888 10.1504 1.23806C9.9253 1.61322 9.81275 2.0288 9.81275 2.48477C9.81275 2.9292 9.9253 3.339 10.1504 3.71417C10.3755 4.08934 10.6756 4.38947 11.0508 4.61457C11.426 4.83967 11.8387 4.95222 12.2889 4.95222ZM3.17227 10.4066C3.62247 10.4066 4.03516 10.294 4.41033 10.0689C4.78549 9.84384 5.08563 9.54371 5.31073 9.16854C5.53583 8.79337 5.64838 8.38069 5.64838 7.93049C5.64838 7.48028 5.53583 7.0676 5.31073 6.69243C5.08563 6.31149 4.78549 6.00847 4.41033 5.78337C4.03516 5.55827 3.62247 5.44572 3.17227 5.44572C2.72207 5.44572 2.3065 5.55827 1.92556 5.78337C1.55039 6.00847 1.25025 6.31149 1.02515 6.69243C0.800051 7.0676 0.6875 7.48028 0.6875 7.93049C0.6875 8.37492 0.800051 8.7876 1.02515 9.16854C1.25025 9.54371 1.55039 9.84384 1.92556 10.0689C2.30072 10.294 2.7163 10.4066 3.17227 10.4066ZM9.25866 10.4066C9.70886 10.4066 10.1187 10.2969 10.4881 10.0776C10.8632 9.8525 11.1634 9.55237 11.3885 9.1772C11.6136 8.79626 11.7261 8.38069 11.7261 7.93049C11.7261 7.48028 11.6136 7.0676 11.3885 6.69243C11.1634 6.31149 10.8632 6.00847 10.4881 5.78337C10.1187 5.55827 9.70886 5.44572 9.25866 5.44572C8.80268 5.44572 8.38711 5.55827 8.01194 5.78337C7.63678 6.00847 7.33664 6.31149 7.11154 6.69243C6.88644 7.0676 6.77389 7.48028 6.77389 7.93049C6.77389 8.38069 6.88644 8.79626 7.11154 9.1772C7.33664 9.55237 7.63678 9.8525 8.01194 10.0776C8.38711 10.2969 8.80268 10.4066 9.25866 10.4066ZM15.3364 10.4066C15.7808 10.4066 16.1906 10.2969 16.5658 10.0776C16.9467 9.8525 17.2497 9.55237 17.4748 9.1772C17.6999 8.79626 17.8125 8.38069 17.8125 7.93049C17.8125 7.48028 17.6999 7.0676 17.4748 6.69243C17.2497 6.31149 16.9467 6.00847 16.5658 5.78337C16.1906 5.55827 15.7808 5.44572 15.3364 5.44572C14.8804 5.44572 14.4648 5.55827 14.0897 5.78337C13.7203 6.00847 13.423 6.31149 13.1979 6.69243C12.9728 7.0676 12.8603 7.48028 12.8603 7.93049C12.8603 8.38069 12.9728 8.79626 13.1979 9.1772C13.423 9.55237 13.7203 9.8525 14.0897 10.0776C14.4648 10.2969 14.8804 10.4066 15.3364 10.4066ZM6.21113 15.861C6.66134 15.861 7.07402 15.7484 7.44919 15.5233C7.82436 15.2982 8.12449 14.9952 8.3496 14.6143C8.5747 14.2391 8.68725 13.8264 8.68725 13.3762C8.68725 12.926 8.5747 12.5133 8.3496 12.1381C8.12449 11.763 7.82436 11.4628 7.44919 11.2377C7.07402 11.0126 6.66134 10.9001 6.21113 10.9001C5.76093 10.9001 5.34536 11.0126 4.96442 11.2377C4.58925 11.4628 4.28912 11.763 4.06402 12.1381C3.84469 12.5133 3.73502 12.926 3.73502 13.3762C3.73502 13.8264 3.84469 14.2391 4.06402 14.6143C4.28912 14.9894 4.58925 15.2896 4.96442 15.5147C5.33959 15.7455 5.75516 15.861 6.21113 15.861ZM12.2889 15.861C12.7448 15.861 13.1604 15.7484 13.5356 15.5233C13.9107 15.2982 14.2109 14.9952 14.436 14.6143C14.6611 14.2391 14.7736 13.8264 14.7736 13.3762C14.7736 12.926 14.6611 12.5133 14.436 12.1381C14.2109 11.763 13.9107 11.4628 13.5356 11.2377C13.1604 11.0126 12.7448 10.9001 12.2889 10.9001C11.8387 10.9001 11.426 11.0126 11.0508 11.2377C10.6756 11.4628 10.3755 11.763 10.1504 12.1381C9.9253 12.5133 9.81275 12.926 9.81275 13.3762C9.81275 13.8264 9.9253 14.2391 10.1504 14.6143C10.3755 14.9952 10.6756 15.2982 11.0508 15.5233C11.426 15.7484 11.8387 15.861 12.2889 15.861Z",
      fill: "url(#".concat(name, ")")
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        id: name,
        x1: "18.3437",
        y1: "7.93049",
        x2: "-1.84375",
        y2: "7.93049",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: startColor
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: "1",
          stopColor: endColor
        })]
      })
    })]
  });
};

var Grid = function Grid(_ref5) {
  var startColor = _ref5.startColor,
      endColor = _ref5.endColor,
      name = _ref5.name;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    style: {
      fill: 'currentcolor'
    },
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "19003",
    width: "18",
    height: "18",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M288 160H160a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32z m288 0h-128a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32z m288 0h-128a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM288 448H160a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32z m288 0h-128a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32z m288 0h-128a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32zM288 736H160a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32z m288 0h-128a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32z m288 0h-128a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32z",
      "p-id": "19004"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {})]
  });
};

var TabIcon = function TabIcon(_ref6) {
  var name = _ref6.name,
      active = _ref6.active,
      defalutColor = _ref6.defalutColor;
  var colors = {
    startColor: defalutColor,
    endColor: defalutColor,
    name: name.replace('-', '')
  };

  if (active) {
    colors.startColor = '#03CDC1';
    colors.endColor = '#8AB9FF';
  }

  if (name === 'icon-block') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SwapSvg, objectSpread2_default()({}, colors));
  }

  if (name === 'icon-book') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(PoolSvg, objectSpread2_default()({}, colors));
  }

  if (name === 'icon-swap') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(TradeSvg, objectSpread2_default()({}, colors));
  }

  if (name === 'icon-circles') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(EarnSvg, objectSpread2_default()({}, colors));
  }

  if (name === 'icon-grid') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid, objectSpread2_default()({}, colors));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(PoolSvg, objectSpread2_default()({}, colors));
};

/* harmony default export */ var components_TabIcon = (TabIcon);
// EXTERNAL MODULE: ./src/config/index.ts + 7 modules
var config = __webpack_require__(577);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 70 modules
var contract = __webpack_require__(12636);
;// CONCATENATED MODULE: ./src/assets/svg/logo.svg
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgLogo = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ width: 3051, height: 1192, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M201.794 0c-45.488 0-82.362 36.875-82.362 82.362 0 45.487 36.874 82.361 82.362 82.361H471.23a83.248 83.248 0 0 0-.726 10.982v89.393C247.139 301.291 69.674 482.343 43.762 713.771L.519 1099.97c-5.062 45.21 27.48 85.96 72.685 91.02 45.205 5.06 85.954-27.48 91.015-72.69l43.243-386.2c16.544-147.749 124.133-265.235 263.042-299.044v676.084c0 45.49 36.875 82.36 82.362 82.36 45.487 0 82.362-36.87 82.362-82.36V432.806c144.725 34.311 256.579 157.118 272.047 310.972l37.56 373.602c4.55 45.26 44.928 78.26 90.185 73.71 45.26-4.55 78.26-44.93 73.71-90.19l-37.56-373.6c-23.96-238.327-206.068-425.714-435.942-462.316v-89.279c0-3.723-.247-7.389-.726-10.982h266.817c45.487 0 82.362-36.874 82.362-82.361S946.806 0 901.319 0H201.794ZM1494.06 382.521c-37.77 70.626-56.66 153.16-56.66 247.601 0 95.263 18.89 178.207 56.66 248.833 37.78 70.626 89.11 124.825 153.98 162.605 65.7 36.95 138.79 55.43 219.27 55.43 80.48 0 153.16-18.48 218.04-55.43 65.7-37.78 117.44-91.979 155.21-162.605 38.6-70.626 57.9-153.57 57.9-248.833 0-94.441-19.3-176.975-57.9-247.601-37.77-70.625-89.51-124.416-155.21-161.371-64.88-37.777-137.56-56.665-218.04-56.665-80.48 0-153.57 18.888-219.27 56.665-64.87 36.955-116.2 90.746-153.98 161.371Zm161.38 406.509c-19.71-45.988-29.57-98.958-29.57-158.908 0-59.95 9.86-112.508 29.57-157.676 20.53-45.989 48.86-81.302 84.99-105.939 36.96-25.458 79.25-38.187 126.88-38.187 47.63 0 89.52 12.729 125.65 38.187 36.96 24.637 65.29 59.95 85 105.939 20.53 45.168 30.79 97.726 30.79 157.676 0 59.95-10.26 112.92-30.79 158.908-19.71 45.989-48.04 81.713-85 107.171-36.13 24.637-78.02 36.955-125.65 36.955-47.63 0-89.92-12.318-126.88-36.955-36.13-25.458-64.46-61.182-84.99-107.171ZM3051 180.499h-726.79v158.908h273.47v742.803h179.85V339.407H3051V180.499Z", fill: "url(#logo_svg__a)" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "logo_svg__a", x1: 3145.65, y1: 595.754, x2: -450.969, y2: 595.754, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#03CDC1" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#8AB9FF" }))));

/* harmony default export */ var logo = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA1MSIgaGVpZ2h0PSIxMTkyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAxLjc5NCAwYy00NS40ODggMC04Mi4zNjIgMzYuODc1LTgyLjM2MiA4Mi4zNjIgMCA0NS40ODcgMzYuODc0IDgyLjM2MSA4Mi4zNjIgODIuMzYxSDQ3MS4yM2E4My4yNDggODMuMjQ4IDAgMCAwLS43MjYgMTAuOTgydjg5LjM5M0MyNDcuMTM5IDMwMS4yOTEgNjkuNjc0IDQ4Mi4zNDMgNDMuNzYyIDcxMy43NzFMLjUxOSAxMDk5Ljk3Yy01LjA2MiA0NS4yMSAyNy40OCA4NS45NiA3Mi42ODUgOTEuMDIgNDUuMjA1IDUuMDYgODUuOTU0LTI3LjQ4IDkxLjAxNS03Mi42OWw0My4yNDMtMzg2LjJjMTYuNTQ0LTE0Ny43NDkgMTI0LjEzMy0yNjUuMjM1IDI2My4wNDItMjk5LjA0NHY2NzYuMDg0YzAgNDUuNDkgMzYuODc1IDgyLjM2IDgyLjM2MiA4Mi4zNiA0NS40ODcgMCA4Mi4zNjItMzYuODcgODIuMzYyLTgyLjM2VjQzMi44MDZjMTQ0LjcyNSAzNC4zMTEgMjU2LjU3OSAxNTcuMTE4IDI3Mi4wNDcgMzEwLjk3MmwzNy41NiAzNzMuNjAyYzQuNTUgNDUuMjYgNDQuOTI4IDc4LjI2IDkwLjE4NSA3My43MSA0NS4yNi00LjU1IDc4LjI2LTQ0LjkzIDczLjcxLTkwLjE5bC0zNy41Ni0zNzMuNmMtMjMuOTYtMjM4LjMyNy0yMDYuMDY4LTQyNS43MTQtNDM1Ljk0Mi00NjIuMzE2di04OS4yNzljMC0zLjcyMy0uMjQ3LTcuMzg5LS43MjYtMTAuOTgyaDI2Ni44MTdjNDUuNDg3IDAgODIuMzYyLTM2Ljg3NCA4Mi4zNjItODIuMzYxUzk0Ni44MDYgMCA5MDEuMzE5IDBIMjAxLjc5NFpNMTQ5NC4wNiAzODIuNTIxYy0zNy43NyA3MC42MjYtNTYuNjYgMTUzLjE2LTU2LjY2IDI0Ny42MDEgMCA5NS4yNjMgMTguODkgMTc4LjIwNyA1Ni42NiAyNDguODMzIDM3Ljc4IDcwLjYyNiA4OS4xMSAxMjQuODI1IDE1My45OCAxNjIuNjA1IDY1LjcgMzYuOTUgMTM4Ljc5IDU1LjQzIDIxOS4yNyA1NS40MyA4MC40OCAwIDE1My4xNi0xOC40OCAyMTguMDQtNTUuNDMgNjUuNy0zNy43OCAxMTcuNDQtOTEuOTc5IDE1NS4yMS0xNjIuNjA1IDM4LjYtNzAuNjI2IDU3LjktMTUzLjU3IDU3LjktMjQ4LjgzMyAwLTk0LjQ0MS0xOS4zLTE3Ni45NzUtNTcuOS0yNDcuNjAxLTM3Ljc3LTcwLjYyNS04OS41MS0xMjQuNDE2LTE1NS4yMS0xNjEuMzcxLTY0Ljg4LTM3Ljc3Ny0xMzcuNTYtNTYuNjY1LTIxOC4wNC01Ni42NjUtODAuNDggMC0xNTMuNTcgMTguODg4LTIxOS4yNyA1Ni42NjUtNjQuODcgMzYuOTU1LTExNi4yIDkwLjc0Ni0xNTMuOTggMTYxLjM3MVptMTYxLjM4IDQwNi41MDljLTE5LjcxLTQ1Ljk4OC0yOS41Ny05OC45NTgtMjkuNTctMTU4LjkwOCAwLTU5Ljk1IDkuODYtMTEyLjUwOCAyOS41Ny0xNTcuNjc2IDIwLjUzLTQ1Ljk4OSA0OC44Ni04MS4zMDIgODQuOTktMTA1LjkzOSAzNi45Ni0yNS40NTggNzkuMjUtMzguMTg3IDEyNi44OC0zOC4xODcgNDcuNjMgMCA4OS41MiAxMi43MjkgMTI1LjY1IDM4LjE4NyAzNi45NiAyNC42MzcgNjUuMjkgNTkuOTUgODUgMTA1LjkzOSAyMC41MyA0NS4xNjggMzAuNzkgOTcuNzI2IDMwLjc5IDE1Ny42NzYgMCA1OS45NS0xMC4yNiAxMTIuOTItMzAuNzkgMTU4LjkwOC0xOS43MSA0NS45ODktNDguMDQgODEuNzEzLTg1IDEwNy4xNzEtMzYuMTMgMjQuNjM3LTc4LjAyIDM2Ljk1NS0xMjUuNjUgMzYuOTU1LTQ3LjYzIDAtODkuOTItMTIuMzE4LTEyNi44OC0zNi45NTUtMzYuMTMtMjUuNDU4LTY0LjQ2LTYxLjE4Mi04NC45OS0xMDcuMTcxWk0zMDUxIDE4MC40OTloLTcyNi43OXYxNTguOTA4aDI3My40N3Y3NDIuODAzaDE3OS44NVYzMzkuNDA3SDMwNTFWMTgwLjQ5OVoiIGZpbGw9InVybCgjYSkiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIzMTQ1LjY1IiB5MT0iNTk1Ljc1NCIgeDI9Ii00NTAuOTY5IiB5Mj0iNTk1Ljc1NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMwM0NEQzEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4QUI5RkYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/layouts/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(66419);
;// CONCATENATED MODULE: ./src/layouts/layout.tsx











var Header = es_layout.Header,
    Content = es_layout.Content,
    Footer = es_layout.Footer;
var Text = typography/* default.Text */.Z.Text,
    Link = typography/* default.Link */.Z.Link;


var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;







var DocIcon = function DocIcon() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    width: "23",
    height: "18",
    viewBox: "0 0 23 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M10.1266 14.4094C10.2131 14.4096 10.2988 14.4267 10.3787 14.46C10.4586 14.4932 10.5312 14.5418 10.5923 14.6031C10.6534 14.6644 10.7019 14.7371 10.7349 14.8171C10.7679 14.8972 10.7848 14.9829 10.7847 15.0694C10.7846 15.156 10.7674 15.2417 10.7342 15.3216C10.7009 15.4015 10.6523 15.4741 10.591 15.5352C10.5297 15.5963 10.457 15.6447 10.377 15.6778C10.297 15.7108 10.2112 15.7277 10.1247 15.7276C9.9499 15.7273 9.78236 15.6576 9.65894 15.5339C9.53551 15.4101 9.46632 15.2424 9.46656 15.0676C9.46681 14.8928 9.53649 14.7252 9.66026 14.6018C9.78404 14.4784 9.95177 14.4092 10.1266 14.4094ZM20.4616 10.3341C20.3751 10.334 20.2894 10.3169 20.2094 10.2837C20.1295 10.2506 20.0569 10.202 19.9957 10.1407C19.9346 10.0795 19.8861 10.0068 19.853 9.92681C19.8199 9.84683 19.803 9.76111 19.803 9.67456C19.8031 9.58801 19.8202 9.50232 19.8534 9.42238C19.8865 9.34245 19.9351 9.26982 19.9964 9.20867C20.0576 9.14751 20.1303 9.09902 20.2103 9.06595C20.2903 9.03289 20.376 9.0159 20.4626 9.01596C20.6374 9.01609 20.8049 9.08564 20.9285 9.20933C21.052 9.33302 21.1213 9.5007 21.1212 9.6755C21.121 9.85029 21.0515 10.0179 20.9278 10.1414C20.8041 10.2649 20.6364 10.3342 20.4616 10.3341ZM20.4616 7.63783C19.9212 7.63833 19.4031 7.85322 19.021 8.23534C18.6389 8.61745 18.424 9.13557 18.4235 9.67597C18.4235 9.89441 18.46 10.1119 18.5313 10.3238L11.7991 13.9079C11.6124 13.6368 11.3626 13.4152 11.0713 13.2622C10.7799 13.1092 10.4557 13.0293 10.1266 13.0294C9.34938 13.0294 8.64156 13.4747 8.29843 14.1694L2.25059 10.98C1.61121 10.6444 1.13308 9.59253 1.18371 8.6344C1.20996 8.13471 1.38246 7.74658 1.6459 7.59658C1.81277 7.50283 2.0134 7.51033 2.22715 7.62189L2.26653 7.64346C3.86966 8.48721 9.11406 11.25 9.33531 11.3522C9.67563 11.5107 9.865 11.5744 10.4463 11.2988L21.2876 5.66063C21.4469 5.60063 21.6326 5.44782 21.6326 5.21626C21.6326 4.89563 21.3007 4.76907 21.2997 4.76907C20.6829 4.47375 19.7351 4.03031 18.8107 3.59719C16.8344 2.67187 14.5947 1.62374 13.6113 1.10811C12.7619 0.663733 12.0785 1.03874 11.9566 1.11374L11.7203 1.23092C7.29343 3.42 1.3684 6.35439 1.03089 6.5597C0.428079 6.9272 0.0540147 7.65939 0.00526447 8.56784C-0.0697359 10.0088 0.66433 11.5116 1.71527 12.0619L8.11093 15.3601C8.18139 15.8445 8.4238 16.2875 8.79388 16.608C9.16395 16.9285 9.63699 17.1052 10.1266 17.1057C10.6613 17.1048 11.1742 16.8941 11.5552 16.5189C11.9362 16.1437 12.1547 15.634 12.1638 15.0994L19.2082 11.281C19.5644 11.5604 20.0079 11.7132 20.4616 11.7132C21.002 11.7127 21.5201 11.4978 21.9023 11.1157C22.2844 10.7335 22.4993 10.2154 22.4998 9.67503C22.4993 9.13464 22.2844 8.61652 21.9023 8.2344C21.5201 7.85228 21.002 7.63739 20.4616 7.63689",
      fill: "#0094FF"
    })
  });
};

var Discord = function Discord() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    width: "21",
    height: "16",
    viewBox: "0 0 21 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M17.4424 1.64637C16.1307 1.03268 14.7431 0.596622 13.3163 0.349731C13.1385 0.671059 12.9309 1.10325 12.7877 1.44707C11.2492 1.21575 9.72493 1.21575 8.21478 1.44707C8.07165 1.10332 7.85931 0.671059 7.67993 0.349731C6.25165 0.596736 4.86287 1.0339 3.55064 1.64957C0.939389 5.59559 0.231499 9.44348 0.585405 13.2369C2.31736 14.5303 3.99579 15.316 5.64595 15.8301C6.05605 15.2661 6.41858 14.6691 6.72978 14.045C6.1373 13.8195 5.56613 13.5415 5.02306 13.2144C5.16597 13.1085 5.30552 12.9981 5.4415 12.8834C8.73228 14.4226 12.3079 14.4226 15.5595 12.8834C15.696 12.9973 15.8355 13.1077 15.9778 13.2144C15.4339 13.5424 14.8616 13.8209 14.268 14.0467C14.5809 14.6732 14.9428 15.2709 15.3518 15.8317C17.0035 15.3176 18.6835 14.5319 20.4155 13.2369C20.8308 8.83942 19.7061 5.02676 17.4424 1.64629V1.64637ZM7.17814 10.904C6.19025 10.904 5.38009 9.98176 5.38009 8.85871C5.38009 7.73567 6.17298 6.81184 7.17814 6.81184C8.18337 6.81184 8.99345 7.73403 8.97618 8.85871C8.97775 9.98176 8.18337 10.904 7.17814 10.904ZM13.8227 10.904C12.8349 10.904 12.0248 9.98176 12.0248 8.85871C12.0248 7.73567 12.8176 6.81184 13.8227 6.81184C14.828 6.81184 15.6381 7.73403 15.6208 8.85871C15.6208 9.98176 14.828 10.904 13.8227 10.904Z",
      fill: "#5865F2"
    })
  });
};

var footerlinks = [{
  link: 'https://discord.com/invite/DMpgp35XBD',
  label: 'Discord',
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
    component: Discord
  })
}, {
  link: 'https://twitter.com/onchaintrade',
  label: 'Twitter',
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_TwitterOutlined, {
    style: {
      color: '#499AEA',
      fontSize: 20
    }
  })
}, {
  link: 'https://onchaintrade.gitbook.io/ot/',
  label: 'Docs',
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
    component: DocIcon
  })
}, {
  link: 'https://github.com/1kxexchange/1kx-sourceCode',
  label: 'Code',
  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_GithubOutlined, {
    style: {
      fontSize: 20
    }
  })
}];
var menus = [{
  key: 'trade',
  label: 'Trade',
  path: '/trade',
  icon: 'icon-swap'
}, {
  key: 'pools',
  label: 'Pools',
  path: '/pools',
  // children: <PoolMenu />,
  icon: 'icon-books'
}, {
  key: 'earn',
  label: 'Earn',
  // children: <EarnMenu />,
  path: '/earn',
  icon: 'icon-circles'
}, {
  key: 'portfolio',
  label: 'Portfolio',
  path: '/portfolio',
  icon: 'icon-block'
} // {
//     key: 'stats',
//     label: 'IFO',
//     path: '/ifo',
//     icon: 'icon-chart',
// },
];
function layout_Layout(_ref) {
  var children = _ref.children;
  var screens = useBreakpoint();

  var _useLocation = (0,_umi_production_exports.useLocation)(),
      pathname = _useLocation.pathname;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorBgLayout = _theme$useToken$token.colorBgLayout,
      fontSizeLG = _theme$useToken$token.fontSizeLG,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary,
      colorPrimary = _theme$useToken$token.colorPrimary,
      colorText = _theme$useToken$token.colorText;

  var _useModel = (0,_umi_production_exports.useModel)('initModel'),
      currentTheme = _useModel.theme,
      setThemeInfo = _useModel.setThemeInfo,
      maxSlippage = _useModel.maxSlippage,
      setMaxSlippageInfo = _useModel.setMaxSlippageInfo;

  var _useModel2 = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel2.chain,
      switchChain = _useModel2.switchChain,
      wallet = _useModel2.wallet,
      exitAccount = _useModel2.exitAccount,
      connectAccount = _useModel2.connectAccount,
      switchWalletNet = _useModel2.switchWalletNet,
      poolTokenExtList = _useModel2.poolTokenExtList,
      osdData = _useModel2.osdData,
      initLoading = _useModel2.initLoading,
      updataTokens = _useModel2.updataTokens;

  var _useState = (0,react.useState)(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      tsetTokenLoading = _useState2[0],
      setTestTokenLoing = _useState2[1];

  var tokenList = (0,react.useMemo)(function () {
    if (osdData) {
      return [].concat(toConsumableArray_default()(poolTokenExtList), [osdData]);
    } else {
      return poolTokenExtList;
    }
  }, [poolTokenExtList, osdData]);

  var _useState3 = (0,react.useState)(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isModalOpen = _useState4[0],
      setIsModalOpen = _useState4[1];

  var accountPad = (0,react.useMemo)(function () {
    if (wallet !== null && wallet !== void 0 && wallet.isConnected) {
      return wallet.account.replace(/(\w{5})\w+(\w{5})/, '$1...$2');
    } else {
      return '';
    }
  }, [wallet]);
  var accountPad2 = (0,react.useMemo)(function () {
    if (wallet !== null && wallet !== void 0 && wallet.isConnected) {
      return wallet.account.replace(/(\w{8})\w+(\w{8})/, '$1...$2');
    } else {
      return '';
    }
  }, [wallet]);

  var handleTestToken = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var ret;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(chain && wallet !== null && wallet !== void 0 && wallet.isConnected)) {
                _context.next = 13;
                break;
              }

              setTestTokenLoing(true);
              _context.next = 4;
              return (0,contract/* getFaucet */.dM)(chain, wallet);

            case 4:
              ret = _context.sent;

              if (!ret.hash) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return updataTokens();

            case 8:
              message/* default.success */.ZP.success('hash' + ret.hash);
              _context.next = 12;
              break;

            case 11:
              message/* default.error */.ZP.error(ret.error);

            case 12:
              setTestTokenLoing(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleTestToken() {
      return _ref2.apply(this, arguments);
    };
  }();

  var wallets = (0,react.useMemo)(function () {
    var _list = [];

    if (chain) {
      Object.keys(config/* walletList */.zy).filter(function (walletName) {
        if (config/* walletList */.zy[walletName].supportChains.includes(chain.id)) {
          _list.push(config/* walletList */.zy[walletName]);
        }
      });
    }

    return _list;
  }, [chain]);

  var handleSwitchChain = function handleSwitchChain(chainId) {
    if (chainId === '0x2') {
      if (location.href.indexOf('onchain.trade') > -1) {
        location.replace(location.href.replace(location.host, 'beta.onchain.trade').replace(location.search, '') + '?chainId=0x2&theme=' + currentTheme);
      }
    } else {
      switchChain(chainId);
    }
  };

  var chainItems = config/* chainList.map */.fU.map(function (item) {
    return {
      key: item.id,
      label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        onClick: function onClick() {
          handleSwitchChain(item.id);
        },
        className: "dropItem",
        style: {
          background: colorBgContainer
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: item.icon,
          className: "icon",
          alt: ""
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "text",
          children: item.label
        })]
      })
    };
  });

  var DescItem = function DescItem(_ref3) {
    var label = _ref3.label,
        children = _ref3.children;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 16,
          color: colorTextSecondary
        },
        children: [" ", label]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: children
      })]
    });
  };

  var GridMenus = function GridMenus() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        width: 220,
        padding: 10
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
        label: "Max Slippage",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
          style: {
            padding: '0 0 0 11px',
            maxWidth: 70
          },
          min: 0,
          max: 100,
          precision: 1,
          step: 0.1,
          formatter: function formatter(value) {
            return "".concat(value, "%");
          },
          parser: function parser(value) {
            return value.replace('%', '');
          },
          controls: false,
          value: Number(maxSlippage),
          onChange: setMaxSlippageInfo
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
        label: "Theme",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
          type: "ghost",
          className: "themeIcon",
          onClick: function onClick() {
            return setThemeInfo(currentTheme === 'light' ? 'dark' : 'light');
          },
          children: currentTheme === 'light' ? /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M18.9562 12.6274C19.0149 12.4124 18.9418 12.1829 18.7696 12.0414C18.5973 11.8999 18.358 11.8727 18.1585 11.9721C16.8593 12.619 15.371 12.7782 13.9644 12.4205C12.5578 12.0629 11.3262 11.2123 10.4938 10.0234C9.66131 8.83452 9.2832 7.38633 9.42824 5.94223C9.57328 4.49813 10.2318 3.15405 11.2841 2.15445C11.4457 2.00091 11.5021 1.76676 11.428 1.5565C11.3539 1.34624 11.1633 1.1991 10.9411 1.18076C9.22161 1.03878 7.49725 1.38945 5.96978 2.19172C4.44231 2.994 3.17492 4.2147 2.3159 5.71099C1.45688 7.20729 1.04176 8.91728 1.11913 10.6409C1.19649 12.3645 1.76313 14.0304 2.75275 15.4437C3.74236 16.8571 5.11402 17.9593 6.70722 18.6215C8.30042 19.2837 10.0493 19.4785 11.7491 19.183C13.449 18.8876 15.0295 18.1141 16.3059 16.9532C17.5822 15.7922 18.5015 14.2918 18.9562 12.6274Z",
              fill: "#181D2C",
              stroke: "#181D2C",
              "stroke-width": "1.13113",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M11.0003 0.100006C11.5526 0.100006 12.0003 0.547721 12.0003 1.10001V2.90001C12.0003 3.45229 11.5526 3.90001 11.0003 3.90001C10.448 3.90001 10.0003 3.45229 10.0003 2.90001V1.10001C10.0003 0.547721 10.448 0.100006 11.0003 0.100006Z",
              fill: "white"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M10.9996 15.4998C13.4849 15.4998 15.4996 13.4851 15.4996 10.9998C15.4996 8.5145 13.4849 6.49979 10.9996 6.49979C8.51435 6.49979 6.49963 8.5145 6.49963 10.9998C6.49963 13.4851 8.51435 15.4998 10.9996 15.4998Z",
              fill: "white"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M12.0003 19.0999C12.0003 18.5476 11.5526 18.0999 11.0003 18.0999C10.448 18.0999 10.0003 18.5476 10.0003 19.0999V20.8999C10.0003 21.4522 10.448 21.8999 11.0003 21.8999C11.5526 21.8999 12.0003 21.4522 12.0003 20.8999V19.0999Z",
              fill: "white"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M3.291 3.29091C3.68153 2.90039 4.31469 2.90039 4.70521 3.29091L5.98321 4.56891C6.37374 4.95943 6.37374 5.5926 5.98321 5.98312C5.59269 6.37365 4.95953 6.37365 4.569 5.98312L3.291 4.70512C2.90048 4.3146 2.90048 3.68143 3.291 3.29091Z",
              fill: "white"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M17.4315 16.017C17.0409 15.6265 16.4078 15.6265 16.0173 16.017C15.6267 16.4075 15.6267 17.0407 16.0173 17.4312L17.2953 18.7092C17.6858 19.0998 18.3189 19.0998 18.7095 18.7092C19.1 18.3187 19.1 17.6855 18.7095 17.295L17.4315 16.017Z",
              fill: "white"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M0.0996399 10.9999C0.0996399 10.4477 0.547355 9.99994 1.09964 9.99994H2.89964C3.45192 9.99994 3.89964 10.4477 3.89964 10.9999C3.89964 11.5522 3.45192 11.9999 2.89964 11.9999H1.09964C0.547355 11.9999 0.0996399 11.5522 0.0996399 10.9999Z",
              fill: "white"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M19.1003 9.99994C18.548 9.99994 18.1003 10.4477 18.1003 10.9999C18.1003 11.5522 18.548 11.9999 19.1003 11.9999H20.9003C21.4526 11.9999 21.9003 11.5522 21.9003 10.9999C21.9003 10.4477 21.4526 9.99994 20.9003 9.99994H19.1003Z",
              fill: "white"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M5.98322 16.017C6.37374 16.4075 6.37374 17.0407 5.98321 17.4312L4.70521 18.7092C4.31469 19.0998 3.68152 19.0998 3.291 18.7092C2.90048 18.3187 2.90048 17.6855 3.291 17.295L4.569 16.017C4.95953 15.6265 5.59269 15.6265 5.98322 16.017Z",
              fill: "white"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M18.7095 4.70488C19.1 4.31435 19.1 3.68119 18.7095 3.29067C18.3189 2.90014 17.6858 2.90014 17.2953 3.29067L16.0173 4.56867C15.6267 4.95919 15.6267 5.59235 16.0173 5.98288C16.4078 6.3734 17.0409 6.3734 17.4315 5.98288L18.7095 4.70488Z",
              fill: "white"
            })]
          })
        })
      }), footerlinks.map(function (item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
          label: item.label,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link, {
            href: item.link,
            className: "footerLink",
            target: "_blank",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: "ghost",
              className: "themeIcon",
              children: item.icon
            })
          }, item.label)
        });
      })]
    });
  };

  var PopoverContent = function PopoverContent() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "walletInfo",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "top",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
          style: {
            margin: 0,
            display: 'flex',
            alignItems: 'center'
          },
          copyable: {
            icon: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                width: "16",
                height: "21",
                viewBox: "0 0 16 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                  d: "M2.53929 20.2222H9.65671C10.477 20.2222 11.1016 20.0077 11.5306 19.5788C11.9595 19.1499 12.1739 18.5172 12.1739 17.6808V11.8261H6.71324C6.2307 11.8261 5.8688 11.7054 5.62753 11.4642C5.38626 11.2175 5.26562 10.8529 5.26562 10.3704V4.73277H2.53929C1.71898 4.73277 1.09436 4.94723 0.665441 5.37615C0.236519 5.80507 0.0220584 6.43773 0.0220584 7.27413V17.6808C0.0220584 18.5172 0.236519 19.1499 0.665441 19.5788C1.09436 20.0077 1.71898 20.2222 2.53929 20.2222ZM6.82583 10.676H12.0292C11.9863 10.5098 11.9112 10.3436 11.804 10.1774C11.7021 10.0112 11.5627 9.83961 11.3858 9.66268L7.40487 5.62546C7.22794 5.44317 7.05905 5.29573 6.89821 5.18313C6.73736 5.06518 6.57384 4.9794 6.40763 4.92578V10.2578C6.40763 10.5366 6.54703 10.676 6.82583 10.676ZM13.3159 16.2815H13.525C13.8843 16.2815 14.2113 16.2279 14.5062 16.1206C14.8064 16.0188 15.0638 15.8633 15.2783 15.6542C15.4981 15.4451 15.667 15.1824 15.7849 14.866C15.9029 14.5497 15.9619 14.1717 15.9619 13.7321V6.57445H11.6753C11.2947 6.57445 10.989 6.46186 10.7585 6.23667C10.5333 6.01149 10.4207 5.70856 10.4207 5.32789V0.784007H6.32721C5.51762 0.784007 4.89568 0.998468 4.4614 1.42739C4.03248 1.85095 3.81801 2.46216 3.81801 3.26103V3.59076H5.01631C5.63289 3.59076 6.17172 3.67387 6.63281 3.84007C7.09926 4.00628 7.54427 4.30116 7.96783 4.72472L12.2785 9.03539C12.6913 9.44822 12.9674 9.89859 13.1068 10.3865C13.2462 10.869 13.3159 11.4025 13.3159 11.9869V16.2815ZM11.9085 5.52091H15.8332C15.8171 5.39223 15.7608 5.26356 15.6643 5.13488C15.5731 5.0062 15.4552 4.86412 15.3104 4.70864L12.2785 1.59628C12.1337 1.45152 11.997 1.33356 11.8683 1.24242C11.7397 1.15127 11.611 1.09766 11.4823 1.08157V5.09467C11.4823 5.37883 11.6244 5.52091 11.9085 5.52091Z",
                  fill: "url(#paint0_linear_5327_46876)"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint0_linear_5327_46876",
                    x1: "18.6204",
                    y1: "10",
                    x2: "-4.9562",
                    y2: "10",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                      stopColor: "#03CDC1"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                      offset: "1",
                      stopColor: "#8AB9FF"
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(CheckOutlined/* default */.Z, {}, "copied-icon")
            })],
            text: wallet === null || wallet === void 0 ? void 0 : wallet.account,
            tooltips: ['copy', 'you copyed!!']
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "account",
            style: {
              lineHeight: "36px",
              paddingRight: 27
            },
            children: accountPad2
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          onClick: exitAccount,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M7.31495 0C7.79666 -6.4736e-08 8.18717 0.390505 8.18717 0.872217V3.01983C8.18717 3.50154 7.79666 3.89205 7.31495 3.89205C6.83324 3.89205 6.44273 3.50154 6.44273 3.01983V0.872217C6.44273 0.390505 6.83324 -5.59176e-08 7.31495 0Z",
              fill: "url(#paint0_linear_22039_93194)"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M18.1017 1.83674C16.1157 0.0489987 13.0648 0.19073 11.2515 2.14913L9.9217 3.47896C9.58107 3.81958 9.58107 4.37184 9.9217 4.71246C10.2623 5.05308 10.8146 5.05308 11.1552 4.71246L12.4975 3.3702C12.5062 3.36149 12.5147 3.3526 12.523 3.34353C13.6776 2.08677 15.6203 1.98342 16.9002 3.10269C18.0185 4.38279 17.9149 6.32564 16.659 7.47945C16.6499 7.48778 16.641 7.49631 16.6323 7.50502L15.29 8.84728C14.9494 9.1879 14.9494 9.74016 15.29 10.0808C15.6306 10.4214 16.1829 10.4214 16.5235 10.0808L17.8533 8.75096C19.8111 6.93837 19.9526 3.88759 18.1667 1.90176C18.1462 1.87896 18.1245 1.85726 18.1017 1.83674Z",
              fill: "url(#paint1_linear_22039_93194)"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M7.47957 16.659C6.32581 17.915 4.38308 18.0186 3.10297 16.9004C1.98461 15.6201 2.08794 13.6767 3.34364 12.5231C3.35272 12.5148 3.36161 12.5062 3.37032 12.4975L4.71258 11.1553C5.0532 10.8147 5.0532 10.2624 4.71258 9.92178C4.37196 9.58115 3.8197 9.58115 3.47908 9.92178L2.14926 11.2516C0.191282 13.0644 0.0509228 16.1159 1.83658 18.1015C1.85718 18.1244 1.87898 18.1462 1.90189 18.1668C3.88772 19.9527 6.9385 19.8112 8.75108 17.8534L10.0809 16.5236C10.4215 16.183 10.4215 15.6307 10.0809 15.2901C9.74028 14.9495 9.18802 14.9495 8.8474 15.2901L7.50514 16.6324C7.49643 16.6411 7.48791 16.65 7.47957 16.659Z",
              fill: "url(#paint2_linear_22039_93194)"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M1.32968 1.32975C1.67031 0.989127 2.22256 0.989127 2.56319 1.32975L5.78461 4.55117C6.12523 4.89179 6.12523 5.44405 5.78461 5.78467C5.44399 6.1253 4.89173 6.1253 4.55111 5.78467L1.32968 2.56325C0.989062 2.22263 0.989062 1.67037 1.32968 1.32975Z",
              fill: "url(#paint3_linear_22039_93194)"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M0.872217 6.4428C0.390505 6.4428 -6.47342e-08 6.8333 0 7.31502C1.64764e-08 7.79673 0.390505 8.18723 0.872217 8.18723H3.01983C3.50154 8.18723 3.89205 7.79673 3.89205 7.31502C3.89205 6.8333 3.50154 6.4428 3.01983 6.4428H0.872217Z",
              fill: "url(#paint4_linear_22039_93194)"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M15.4495 14.216C15.1088 13.8753 14.5566 13.8753 14.216 14.216C13.8753 14.5566 13.8753 15.1088 14.216 15.4495L17.4374 18.6709C17.778 19.0115 18.3303 19.0115 18.6709 18.6709C19.0115 18.3303 19.0115 17.778 18.6709 17.4374L15.4495 14.216Z",
              fill: "url(#paint5_linear_22039_93194)"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M12.685 16.1079C13.1667 16.1079 13.5572 16.4984 13.5572 16.9801V19.1278C13.5572 19.6095 13.1667 20 12.685 20C12.2032 20 11.8127 19.6095 11.8127 19.1278V16.9801C11.8127 16.4984 12.2032 16.1079 12.685 16.1079Z",
              fill: "url(#paint6_linear_22039_93194)"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M16.9801 11.8128C16.4984 11.8128 16.1079 12.2033 16.1079 12.685C16.1079 13.1667 16.4984 13.5572 16.9801 13.5572H19.1277C19.6094 13.5572 19.9999 13.1667 19.9999 12.685C19.9999 12.2033 19.6094 11.8128 19.1277 11.8128H16.9801Z",
              fill: "url(#paint7_linear_22039_93194)"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("defs", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint0_linear_22039_93194",
                x1: "20.6203",
                y1: "9.99999",
                x2: "-2.95619",
                y2: "9.99999",
                gradientUnits: "userSpaceOnUse",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  stopColor: "#03CDC1"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  offset: "1",
                  stopColor: "#8AB9FF"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint1_linear_22039_93194",
                x1: "20.6203",
                y1: "9.99999",
                x2: "-2.95619",
                y2: "9.99999",
                gradientUnits: "userSpaceOnUse",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  stopColor: "#03CDC1"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  offset: "1",
                  stopColor: "#8AB9FF"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint2_linear_22039_93194",
                x1: "20.6203",
                y1: "9.99999",
                x2: "-2.95619",
                y2: "9.99999",
                gradientUnits: "userSpaceOnUse",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  stopColor: "#03CDC1"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  offset: "1",
                  stopColor: "#8AB9FF"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint3_linear_22039_93194",
                x1: "20.6203",
                y1: "9.99999",
                x2: "-2.95619",
                y2: "9.99999",
                gradientUnits: "userSpaceOnUse",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  stopColor: "#03CDC1"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  offset: "1",
                  stopColor: "#8AB9FF"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint4_linear_22039_93194",
                x1: "20.6203",
                y1: "9.99999",
                x2: "-2.95619",
                y2: "9.99999",
                gradientUnits: "userSpaceOnUse",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  stopColor: "#03CDC1"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  offset: "1",
                  stopColor: "#8AB9FF"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint5_linear_22039_93194",
                x1: "20.6203",
                y1: "9.99999",
                x2: "-2.95619",
                y2: "9.99999",
                gradientUnits: "userSpaceOnUse",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  stopColor: "#03CDC1"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  offset: "1",
                  stopColor: "#8AB9FF"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint6_linear_22039_93194",
                x1: "20.6203",
                y1: "9.99999",
                x2: "-2.95619",
                y2: "9.99999",
                gradientUnits: "userSpaceOnUse",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  stopColor: "#03CDC1"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  offset: "1",
                  stopColor: "#8AB9FF"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint7_linear_22039_93194",
                x1: "20.6203",
                y1: "9.99999",
                x2: "-2.95619",
                y2: "9.99999",
                gradientUnits: "userSpaceOnUse",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  stopColor: "#03CDC1"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
                  offset: "1",
                  stopColor: "#8AB9FF"
                })]
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
        spinning: initLoading,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "list",
          children: tokenList.map(function (token) {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "item",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
                className: "left",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                  src: token.icon,
                  symbol: token.symbol,
                  tokenId: token.id,
                  size: 30
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "symbolWrap",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                    style: {
                      fontSize: 16,
                      fontWeight: 500,
                      lineHeight: '16px',
                      color: colorText
                    },
                    children: [" ", token.symbol]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                    style: {
                      fontSize: 14,
                      lineHeight: '16px',
                      color: colorText,
                      marginTop: 2
                    },
                    children: ["$", Number(token.userOraclePrice) > 1000000 ? (0,utils/* formatNumberToKMBT */.BF)(Number(token.userOraclePrice), 2) : token.userOraclePrice]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "right",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
                  valueStyle: {
                    fontSize: 16,
                    textAlign: 'right',
                    color: colorTextSecondary,
                    lineHeight: '16px'
                  },
                  value: token.userTokenBalanceLabel
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                  style: {
                    fontSize: 14,
                    lineHeight: '16px',
                    color: colorTextSecondary,
                    marginTop: 2
                  },
                  children: ["$", Number(token.userTokenBalanceUSDLabel) > 1000000 ? (0,utils/* formatNumberToKMBT */.BF)(Number(token.userTokenBalanceUSDLabel), 2) : token.userTokenBalanceUSDLabel]
                })]
              })]
            }, token.id);
          })
        })
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_layout, {
    className: "layout ".concat(currentTheme),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      className: "header",
      id: "header",
      style: {
        background: currentTheme === 'light' ? '' : colorBgLayout,
        position: 'sticky',
        width: '100%',
        top: 0,
        zIndex: 100,
        display: 'flex',
        padding: screens.md ? '0 7%' : '0 15px'
      },
      children: [screens.md && /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Link, {
        to: "/",
        className: "logoWrap",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: logo,
          alt: "",
          className: "logo"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        gutter: 15,
        className: screens.md ? "hright deRight" : 'hright mdRight',
        children: [screens.md && /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          className: "navs",
          children: menus.map(function (item) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Link, {
              to: item.path,
              className: pathname === item.path ? 'active item' : "item",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
                style: {
                  fontSize: 16,
                  color: colorTextSecondary
                },
                children: item.label
              })
            }, item.label);
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
            type: "primary",
            className: "linnerButton",
            disabled: !(chain && wallet !== null && wallet !== void 0 && wallet.isConnected),
            loading: tsetTokenLoading,
            onClick: handleTestToken,
            children: "Test tokens"
          }), chain && /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
            trigger: ['click'],
            menu: {
              items: chainItems,
              selectable: true,
              defaultSelectedKeys: [chain.id]
            },
            overlayStyle: {
              alignItems: 'center',
              justifyContent: 'center'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: "primary",
              className: "linnerButton padding4",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "ButtonWarp",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: chain.icon,
                  alt: "",
                  className: "chainIcon"
                }), screens.md && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: chain.label
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {
                  style: {
                    marginLeft: 6
                  }
                })]
              })
            })
          }), wallet && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: //      <div className="linearButtonWrap" onClick={() => switchWalletNet()}>
            // <div className='linearButton' >Switch Network</div>
            // </div>
            !wallet.isConnected ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: "primary",
              onClick: function onClick(e) {
                return setIsModalOpen(true);
              },
              className: "linnerButton",
              children: "Connect"
            }) : !wallet.isCorrectChain ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: "primary",
              className: "linnerButton",
              danger: true,
              onClick: function onClick() {
                return switchWalletNet();
              },
              children: "Switch Network"
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
              placement: "bottomRight",
              getPopupContainer: function getPopupContainer() {
                return document.getElementById('header') || document.body;
              },
              content: /*#__PURE__*/(0,jsx_runtime.jsx)(PopoverContent, {}),
              trigger: "click",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
                type: "primary",
                onClick: function onClick(e) {
                  return e.preventDefault();
                },
                className: "linnerButton",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: accountPad
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {
                  style: {
                    marginLeft: 6
                  }
                })]
              })
            }) //   <div className="linearButtonWrap" onClick={(e) => setIsModalOpen(true)}>
            //     <div className='linearButton' >Connect</div>
            // </div>

          }), /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
            content: /*#__PURE__*/(0,jsx_runtime.jsx)(GridMenus, {}),
            placement: "bottomRight",
            trigger: "click",
            getPopupContainer: function getPopupContainer() {
              return document.getElementById('header') || document.body;
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "gridIcon",
              style: {
                color: colorTextSecondary
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_TabIcon, {
                name: "icon-grid",
                active: false,
                defalutColor: colorTextSecondary
              })
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {
      style: {
        flex: '1',
        overflowX: 'hidden'
      },
      className: "content",
      children: children
    }), !screens.md ? /*#__PURE__*/(0,jsx_runtime.jsx)(Footer, {
      className: "tabFooter",
      style: {
        background: colorBgLayout,
        zIndex: 1,
        width: '100%',
        flex: '0 0 auto',
        position: 'sticky',
        bottom: 0,
        padding: '12px 0 12px'
      },
      children: menus.map(function (item) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(_umi_production_exports.Link, {
          to: item.path,
          className: pathname === item.path ? 'active item' : "item",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TabIcon, {
            name: item.icon,
            active: pathname === item.path,
            defalutColor: colorTextSecondary
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
            style: {
              lineHeight: '14px',
              fontSize: 12,
              color: colorTextSecondary
            },
            children: item.label
          })]
        }, item.label);
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Footer, {
      className: "footer",
      style: {
        background: currentTheme === 'light' ? 'transparent' : colorBgLayout,
        zIndex: 1,
        width: '100%'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        justify: "space-between",
        align: 'middle',
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            justify: "space-between",
            align: "middle",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
              children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                src: logo,
                alt: "",
                className: "logo"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
              children: ["  ", /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
                children: "\xA92022 ot.exchange. All rights reserved."
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
              strong: true,
              style: {
                fontSize: fontSizeLG
              },
              children: "A permissionless exchange & money market protocol"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
          gutter: [30, 30],
          children: footerlinks.map(function (item) {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(Link, {
              href: item.link,
              className: "footerLink",
              target: "_blank",
              children: [item.icon, /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
                children: item.label
              })]
            }, item.label);
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
      open: isModalOpen,
      footer: null,
      closable: false,
      maskClosable: true,
      onCancel: function onCancel() {
        return setIsModalOpen(false);
      },
      width: 350,
      bodyStyle: {
        background: colorBgLayout,
        borderRadius: 12
      },
      className: "walletLogin",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
        className: "walletModal",
        gutter: [12, 12],
        children: wallets.map(function (item) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: "24",
            className: "walletModalItem",
            onClick: function onClick() {
              connectAccount(item.name);
              setIsModalOpen(false);
            },
            style: {
              background: colorBgContainer
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              src: item.icon,
              alt: "",
              className: "walletIcon"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
              className: "walletName",
              children: item.label
            })]
          }, item.name);
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/layouts/index.tsx






var darkThemeToken = {
  colorBgContainer: "#1E2439",
  colorBgLayout: '#181D2C',
  colorBorderSecondary: '#1E2439',
  colorBgElevated: '#1E2439'
};
var lightThemeToken = {
  colorBgContainer: "#ffffff",
  colorBgLayout: '#F7F7FB',
  colorInfoBg: '#EFF2FA' // colorBorderSecondary: '#ffffff',

};
function layouts_Layout() {
  var _useModel = (0,_umi_production_exports.useModel)('initModel'),
      currentTheme = _useModel.theme;

  var tokenConfig = currentTheme === 'light' ? lightThemeToken : darkThemeToken;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
    theme: {
      algorithm: currentTheme === 'light' ? theme/* default.defaultAlgorithm */.Z.defaultAlgorithm : theme/* default.darkAlgorithm */.Z.darkAlgorithm,
      token: objectSpread2_default()({
        colorPrimary: '#03cdc1',
        "colorBorder": "#03cdc1",
        fontFamily: 'HarmonyOS Sans',
        "colorSuccess": "#03cdc1",
        colorFill: 'rgba(38, 44, 61, 0.1)'
      }, tokenConfig)
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(layout_Layout, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})
    })
  });
}

/***/ }),

/***/ 74627:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ popover; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 4 modules
var tooltip = __webpack_require__(66477);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/getRenderPropValue.js
const getRenderPropValue = propValue => {
  if (!propValue) {
    return null;
  }
  if (typeof propValue === 'function') {
    return propValue();
  }
  return propValue;
};
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/rc-tooltip/es/index.js + 2 modules
var es = __webpack_require__(43763);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(50438);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/interface/presetColors.js
var presetColors = __webpack_require__(8796);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/placementArrow.js
var placementArrow = __webpack_require__(97414);
;// CONCATENATED MODULE: ./node_modules/antd/es/popover/style/index.js




const genBaseStyle = token => {
  const {
    componentCls,
    popoverBg,
    popoverColor,
    width,
    fontWeightStrong,
    popoverPadding,
    boxShadowSecondary,
    colorTextHeading,
    borderRadiusLG: borderRadius,
    zIndexPopup,
    marginXS,
    colorBgElevated
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      top: 0,
      // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
      left: {
        _skip_check_: true,
        value: 0
      },
      zIndex: zIndexPopup,
      fontWeight: 'normal',
      whiteSpace: 'normal',
      textAlign: 'start',
      cursor: 'auto',
      userSelect: 'text',
      '--antd-arrow-background-color': colorBgElevated,
      '&-rtl': {
        direction: 'rtl'
      },
      '&-hidden': {
        display: 'none'
      },
      [`${componentCls}-content`]: {
        position: 'relative'
      },
      [`${componentCls}-inner`]: {
        backgroundColor: popoverBg,
        backgroundClip: 'padding-box',
        borderRadius,
        boxShadow: boxShadowSecondary,
        padding: popoverPadding
      },
      [`${componentCls}-title`]: {
        minWidth: width,
        marginBottom: marginXS,
        color: colorTextHeading,
        fontWeight: fontWeightStrong
      },
      [`${componentCls}-inner-content`]: {
        color: popoverColor
      }
    })
  },
  // Arrow Style
  (0,placementArrow/* default */.ZP)(token, {
    colorBg: 'var(--antd-arrow-background-color)'
  }),
  // Pure Render
  {
    [`${componentCls}-pure`]: {
      position: 'relative',
      maxWidth: 'none',
      [`${componentCls}-content`]: {
        display: 'inline-block'
      }
    }
  }];
};
const genColorStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: presetColors/* PresetColors.map */.i.map(colorKey => {
      const lightColor = token[`${colorKey}-6`];
      return {
        [`&${componentCls}-${colorKey}`]: {
          '--antd-arrow-background-color': lightColor,
          [`${componentCls}-inner`]: {
            backgroundColor: lightColor
          },
          [`${componentCls}-arrow`]: {
            background: 'transparent'
          }
        }
      };
    })
  };
};
const genWireframeStyle = token => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorSplit,
    paddingSM,
    controlHeight,
    fontSize,
    lineHeight,
    padding
  } = token;
  const titlePaddingBlockDist = controlHeight - Math.round(fontSize * lineHeight);
  const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
  const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
  const popoverPaddingHorizontal = padding;
  return {
    [componentCls]: {
      [`${componentCls}-inner`]: {
        padding: 0
      },
      [`${componentCls}-title`]: {
        margin: 0,
        padding: `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px`,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      [`${componentCls}-inner-content`]: {
        padding: `${paddingSM}px ${popoverPaddingHorizontal}px`
      }
    }
  };
};
/* harmony default export */ var popover_style = ((0,genComponentStyleHook/* default */.Z)('Popover', token => {
  const {
    colorBgElevated,
    colorText,
    wireframe
  } = token;
  const popoverToken = (0,statistic/* merge */.TS)(token, {
    popoverBg: colorBgElevated,
    popoverColor: colorText,
    popoverPadding: 12 // Fixed Value
  });

  return [genBaseStyle(popoverToken), genColorStyle(popoverToken), wireframe && genWireframeStyle(popoverToken), (0,zoom/* initZoomMotion */._y)(popoverToken, 'zoom-big')];
}, _ref => {
  let {
    zIndexPopupBase
  } = _ref;
  return {
    zIndexPopup: zIndexPopupBase + 30,
    width: 177
  };
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/popover/PurePanel.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const getOverlay = (prefixCls, title, content) => {
  if (!title && !content) return undefined;
  return /*#__PURE__*/react.createElement(react.Fragment, null, title && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-title`
  }, getRenderPropValue(title)), /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-inner-content`
  }, getRenderPropValue(content)));
};
function RawPurePanel(props) {
  const {
    hashId,
    prefixCls,
    className,
    style,
    placement = 'top',
    title,
    content,
    children
  } = props;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(hashId, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className),
    style: style
  }, /*#__PURE__*/react.createElement(es/* Popup */.G, Object.assign({}, props, {
    className: hashId,
    prefixCls: prefixCls
  }), children || getOverlay(prefixCls, title, content)));
}
function PurePanel(props) {
  const {
      prefixCls: customizePrefixCls
    } = props,
    restProps = __rest(props, ["prefixCls"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const [wrapSSR, hashId] = popover_style(prefixCls);
  return wrapSSR( /*#__PURE__*/react.createElement(RawPurePanel, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    hashId: hashId
  })));
}
;// CONCATENATED MODULE: ./node_modules/antd/es/popover/index.js
var popover_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







// CSSINJS

const Overlay = _ref => {
  let {
    title,
    content,
    prefixCls
  } = _ref;
  if (!title && !content) {
    return null;
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, title && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-title`
  }, getRenderPropValue(title)), /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-inner-content`
  }, getRenderPropValue(content)));
};
const Popover = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      title,
      content,
      overlayClassName,
      placement = 'top',
      trigger = 'hover',
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle = {}
    } = props,
    otherProps = popover_rest(props, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const [wrapSSR, hashId] = popover_style(prefixCls);
  const rootPrefixCls = getPrefixCls();
  const overlayCls = classnames_default()(overlayClassName, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement(tooltip/* default */.Z, Object.assign({
    placement: placement,
    trigger: trigger,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    overlayStyle: overlayStyle
  }, otherProps, {
    prefixCls: prefixCls,
    overlayClassName: overlayCls,
    ref: ref,
    overlay: /*#__PURE__*/react.createElement(Overlay, {
      prefixCls: prefixCls,
      title: title,
      content: content
    }),
    transitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'zoom-big', otherProps.transitionName),
    "data-popover-inject": true
  })));
});
if (false) {}
Popover._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
/* harmony default export */ var popover = (Popover);

/***/ }),

/***/ 55054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_statistic; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 12 modules
var skeleton = __webpack_require__(21687);
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/Number.js

const StatisticNumber = props => {
  const {
    value,
    formatter,
    precision,
    decimalSeparator,
    groupSeparator = '',
    prefixCls
  } = props;
  let valueNode;
  if (typeof formatter === 'function') {
    // Customize formatter
    valueNode = formatter(value);
  } else {
    // Internal formatter
    const val = String(value);
    const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);
    // Process if illegal number
    if (!cells || val === '-') {
      valueNode = val;
    } else {
      const negative = cells[1];
      let int = cells[2] || '0';
      let decimal = cells[4] || '';
      int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
      if (typeof precision === 'number') {
        decimal = decimal.padEnd(precision, '0').slice(0, precision > 0 ? precision : 0);
      }
      if (decimal) {
        decimal = `${decimalSeparator}${decimal}`;
      }
      valueNode = [/*#__PURE__*/react.createElement("span", {
        key: "int",
        className: `${prefixCls}-content-value-int`
      }, negative, int), decimal && /*#__PURE__*/react.createElement("span", {
        key: "decimal",
        className: `${prefixCls}-content-value-decimal`
      }, decimal)];
    }
  }
  return /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-content-value`
  }, valueNode);
};
/* harmony default export */ var statistic_Number = (StatisticNumber);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/style/index.js


const genStatisticStyle = token => {
  const {
    componentCls,
    marginXXS,
    padding,
    colorTextDescription,
    statisticTitleFontSize,
    colorTextHeading,
    statisticContentFontSize,
    statisticFontFamily
  } = token;
  return {
    [`${componentCls}`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      [`${componentCls}-title`]: {
        marginBottom: marginXXS,
        color: colorTextDescription,
        fontSize: statisticTitleFontSize
      },
      [`${componentCls}-skeleton`]: {
        paddingTop: padding
      },
      [`${componentCls}-content`]: {
        color: colorTextHeading,
        fontSize: statisticContentFontSize,
        fontFamily: statisticFontFamily,
        [`${componentCls}-content-value`]: {
          display: 'inline-block',
          direction: 'ltr'
        },
        [`${componentCls}-content-prefix, ${componentCls}-content-suffix`]: {
          display: 'inline-block'
        },
        [`${componentCls}-content-prefix`]: {
          marginInlineEnd: marginXXS
        },
        [`${componentCls}-content-suffix`]: {
          marginInlineStart: marginXXS
        }
      }
    })
  };
};
// ============================== Export ==============================
/* harmony default export */ var statistic_style = ((0,genComponentStyleHook/* default */.Z)('Statistic', token => {
  const {
    fontSizeHeading3,
    fontSize,
    fontFamily
  } = token;
  const statisticToken = (0,statistic/* merge */.TS)(token, {
    statisticTitleFontSize: fontSize,
    statisticContentFontSize: fontSizeHeading3,
    statisticFontFamily: fontFamily
  });
  return [genStatisticStyle(statisticToken)];
}));
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useForceUpdate.js
var useForceUpdate = __webpack_require__(57838);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/utils.js
// Countdown
const timeUnits = [['Y', 1000 * 60 * 60 * 24 * 365], ['M', 1000 * 60 * 60 * 24 * 30], ['D', 1000 * 60 * 60 * 24], ['H', 1000 * 60 * 60], ['m', 1000 * 60], ['s', 1000], ['S', 1] // million seconds
];

function formatTimeStr(duration, format) {
  let leftDuration = duration;
  const escapeRegex = /\[[^\]]*]/g;
  const keepList = (format.match(escapeRegex) || []).map(str => str.slice(1, -1));
  const templateText = format.replace(escapeRegex, '[]');
  const replacedText = timeUnits.reduce((current, _ref) => {
    let [name, unit] = _ref;
    if (current.includes(name)) {
      const value = Math.floor(leftDuration / unit);
      leftDuration -= value * unit;
      return current.replace(new RegExp(`${name}+`, 'g'), match => {
        const len = match.length;
        return value.toString().padStart(len, '0');
      });
    }
    return current;
  }, templateText);
  let index = 0;
  return replacedText.replace(escapeRegex, () => {
    const match = keepList[index];
    index += 1;
    return match;
  });
}
function formatCountdown(value, config) {
  const {
    format = ''
  } = config;
  const target = new Date(value).getTime();
  const current = Date.now();
  const diff = Math.max(target - current, 0);
  return formatTimeStr(diff, format);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/Countdown.js





const REFRESH_INTERVAL = 1000 / 30;
function getTime(value) {
  return new Date(value).getTime();
}
const Countdown = props => {
  const {
    value,
    format = 'HH:mm:ss',
    onChange,
    onFinish
  } = props;
  const forceUpdate = (0,useForceUpdate/* default */.Z)();
  const countdown = react.useRef(null);
  const stopTimer = () => {
    onFinish === null || onFinish === void 0 ? void 0 : onFinish();
    if (countdown.current) {
      clearInterval(countdown.current);
      countdown.current = null;
    }
  };
  const syncTimer = () => {
    const timestamp = getTime(value);
    if (timestamp >= Date.now()) {
      countdown.current = setInterval(() => {
        forceUpdate();
        onChange === null || onChange === void 0 ? void 0 : onChange(timestamp - Date.now());
        if (timestamp < Date.now()) {
          stopTimer();
        }
      }, REFRESH_INTERVAL);
    }
  };
  react.useEffect(() => {
    syncTimer();
    return () => {
      if (countdown.current) {
        clearInterval(countdown.current);
        countdown.current = null;
      }
    };
  }, [value]);
  const formatter = (formatValue, config) => formatCountdown(formatValue, Object.assign(Object.assign({}, config), {
    format
  }));
  const valueRender = node => (0,reactNode/* cloneElement */.Tm)(node, {
    title: undefined
  });
  return /*#__PURE__*/react.createElement(statistic_Statistic, Object.assign({}, props, {
    valueRender: valueRender,
    formatter: formatter
  }));
};
/* harmony default export */ var statistic_Countdown = (/*#__PURE__*/react.memo(Countdown));
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/Statistic.js







const Statistic = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    valueStyle,
    value = 0,
    title,
    valueRender,
    prefix,
    suffix,
    loading = false,
    onMouseEnter,
    onMouseLeave,
    decimalSeparator = '.',
    groupSeparator = ','
  } = props;
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('statistic', customizePrefixCls);
  const [wrapSSR, hashId] = statistic_style(prefixCls);
  const valueNode = /*#__PURE__*/react.createElement(statistic_Number, Object.assign({
    decimalSeparator: decimalSeparator,
    groupSeparator: groupSeparator,
    prefixCls: prefixCls
  }, props, {
    value: value
  }));
  const cls = classnames_default()(prefixCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement("div", {
    className: cls,
    style: style,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, title && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-title`
  }, title), /*#__PURE__*/react.createElement(skeleton/* default */.Z, {
    paragraph: false,
    loading: loading,
    className: `${prefixCls}-skeleton`
  }, /*#__PURE__*/react.createElement("div", {
    style: valueStyle,
    className: `${prefixCls}-content`
  }, prefix && /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-content-prefix`
  }, prefix), valueRender ? valueRender(valueNode) : valueNode, suffix && /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-content-suffix`
  }, suffix)))));
};
Statistic.Countdown = statistic_Countdown;
/* harmony default export */ var statistic_Statistic = (Statistic);
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/index.js

/* harmony default export */ var es_statistic = (statistic_Statistic);

/***/ })

}]);