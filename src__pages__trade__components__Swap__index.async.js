(self["webpackChunk"] = self["webpackChunk"] || []).push([[6562,659,7225],{

/***/ 12699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_FormButton; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/FormButton/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/FormButton/index.tsx






function checkConditions(conditions) {
  for (var i = 0; i < conditions.length; i++) {
    var condition = conditions[i].condition;

    if (condition) {
      return conditions[i];
    }
  }

  return null;
}

var FormButton = function FormButton(_ref) {
  var _ref$conditions = _ref.conditions,
      conditions = _ref$conditions === void 0 ? [] : _ref$conditions,
      children = _ref.children,
      onClick = _ref.onClick,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$wrapClassName = _ref.wrapClassName,
      wrapClassName = _ref$wrapClassName === void 0 ? '' : _ref$wrapClassName,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      boxShadow = _theme$useToken$token.boxShadow,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useState = (0,react.useState)('primary'),
      _useState2 = slicedToArray_default()(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      danger = _useState4[0],
      setDanger = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = slicedToArray_default()(_useState5, 2),
      text = _useState6[0],
      setText = _useState6[1];

  (0,react.useEffect)(function () {
    var check = checkConditions(conditions);

    if (check) {
      var _text = check.text,
          _type = check.type,
          _danger = check.danger;
      setText(_text);
      setType(_type);
      setDanger(_danger);
    } else {
      setText('');
      setType('primary');
    }
  }, [conditions]);

  var handleClick = function handleClick() {
    var check = checkConditions(conditions);

    if (check) {
      var _onClick = check.onClick;
      if (_onClick) _onClick();
      return;
    }

    onClick();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "FormButtonWrap ".concat(className, " ").concat(type, " ").concat(danger ? 'danger' : ''),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
      type: type,
      danger: danger,
      className: "FormButton ".concat(className),
      onClick: handleClick,
      block: true,
      loading: loading,
      children: text ? text : children
    })
  });
};

/* harmony default export */ var components_FormButton = (FormButton);

/***/ }),

/***/ 90494:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_InputCard; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 13 modules
var input_number = __webpack_require__(43262);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(80882);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MinusCircleFilled.js + 1 modules
var MinusCircleFilled = __webpack_require__(70040);
// EXTERNAL MODULE: ./node_modules/react-slider/dist/es/prod/components/ReactSlider/ReactSlider.mjs + 1 modules
var ReactSlider = __webpack_require__(47729);
// EXTERNAL MODULE: ./src/components/TokenSelect/index.tsx + 1 modules
var TokenSelect = __webpack_require__(73687);
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/InputCard/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/InputCard/index.tsx













var InputCard = function InputCard(_ref) {
  var currentToken = _ref.currentToken,
      _ref$tokenList = _ref.tokenList,
      tokenList = _ref$tokenList === void 0 ? [] : _ref$tokenList,
      amount = _ref.amount,
      onAmountChange = _ref.onAmountChange,
      onTokenChange = _ref.onTokenChange,
      header = _ref.header,
      _ref$minValue = _ref.minValue,
      minValue = _ref$minValue === void 0 ? 0 : _ref$minValue,
      maxValue = _ref.maxValue,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'token' : _ref$type,
      _ref$showRemove = _ref.showRemove,
      showRemove = _ref$showRemove === void 0 ? false : _ref$showRemove,
      idKey = _ref.idKey,
      handleRemove = _ref.handleRemove,
      _ref$canSelectToken = _ref.canSelectToken,
      canSelectToken = _ref$canSelectToken === void 0 ? true : _ref$canSelectToken,
      _ref$showSelectToken = _ref.showSelectToken,
      showSelectToken = _ref$showSelectToken === void 0 ? true : _ref$showSelectToken,
      _ref$showSlider = _ref.showSlider,
      showSlider = _ref$showSlider === void 0 ? true : _ref$showSlider;

  var _useState = (0,react.useState)(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      showSelect = _useState2[0],
      setShowSelect = _useState2[1];

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      boxShadow = _theme$useToken$token.boxShadow,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      borderRadius = _theme$useToken$token.borderRadius,
      colorWhite = _theme$useToken$token.colorWhite; // const handelPrecentChange=(value:number)=>{
  //     setPercent(value);
  //     console.log()
  //     onAmountChange(maxValue*value/100)
  // }


  var handelInputChange = function handelInputChange(value) {
    onAmountChange(value);
  };

  var percent = (0,react.useMemo)(function () {
    if (maxValue === 0) return 0;
    return amount / (maxValue - minValue) * 100;
  }, [amount, maxValue]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "hayInputCard",
    style: {
      background: colorInfoBg,
      marginLeft: 0,
      borderRadius: borderRadius
    },
    children: [header, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "hayInputvalue",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
        className: "inputTxt",
        value: amount || '',
        onChange: handelInputChange,
        min: minValue,
        max: maxValue,
        placeholder: "0.00",
        bordered: false,
        controls: false
      }), showSelectToken && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: currentToken ? 'chooseBtn' : 'chooseBtnWait ',
          onClick: function onClick() {
            canSelectToken && setShowSelect(true);
          },
          style: {
            color: currentToken ? colorText : colorInfoBg,
            boxShadow: boxShadow,
            background: currentToken ? colorBgContainer : colorPrimary
          },
          children: [currentToken ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
              src: type === 'token' ? currentToken.icon : currentToken.iconLp,
              tokenId: currentToken.id,
              size: 20
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "symbol",
              children: type === 'token' ? currentToken.symbol : currentToken.lpSymbol
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            className: "symbol",
            style: {
              color: colorWhite
            },
            children: "Select Asset"
          }), canSelectToken ? /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {
            style: {
              color: currentToken ? "" : colorWhite
            }
          }) : '']
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TokenSelect/* default */.Z, {
          tokenList: tokenList,
          onClose: function onClose() {
            return setShowSelect(false);
          },
          show: showSelect,
          onChange: onTokenChange,
          type: type
        })]
      })]
    }), showSlider && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "hayInputSliderWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ReactSlider/* default */.Z, {
        className: "slider",
        thumbClassName: "thumb",
        trackClassName: "track",
        onChange: function onChange(value) {
          return onAmountChange(value / 100 * (maxValue - minValue));
        },
        value: percent,
        renderThumb: function renderThumb(props, state) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", objectSpread2_default()(objectSpread2_default()({}, props), {}, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "thumbInner",
              style: {
                background: colorText,
                color: colorBgContainer
              },
              children: [state.valueNow, "%"]
            })
          }));
        }
      }), showRemove && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "remove",
        onClick: function onClick() {
          return handleRemove && handleRemove(idKey);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(MinusCircleFilled/* default */.Z, {
          style: {
            fontSize: 16,
            color: colorPrimary
          }
        })
      })]
    })]
  });
};

/* harmony default export */ var components_InputCard = (InputCard);

/***/ }),

/***/ 93417:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ResponPopup; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 20 modules
var modal = __webpack_require__(60974);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(85265);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/ResponPopup/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/ResponPopup/index.tsx





var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var Popup = function Popup(_ref) {
  var show = _ref.show,
      modalWidth = _ref.modalWidth,
      onClose = _ref.onClose,
      children = _ref.children,
      _ref$closable = _ref.closable,
      closable = _ref$closable === void 0 ? false : _ref$closable,
      _ref$maskClosable = _ref.maskClosable,
      maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? null : _ref$title;

  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: md ? /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
      open: show,
      onCancel: onClose,
      width: modalWidth || 420,
      title: title,
      footer: null,
      closable: closable,
      maskClosable: maskClosable,
      style: {
        padding: 0
      },
      className: "hayPopup",
      children: children
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
      title: title,
      open: show,
      placement: "bottom",
      onClose: onClose,
      closable: closable,
      maskClosable: maskClosable,
      style: {
        height: 'auto'
      },
      bodyStyle: {
        height: 'auto',
        maxHeight: '90vh'
      },
      contentWrapperStyle: {
        height: 'auto'
      },
      children: children
    })
  });
};

/* harmony default export */ var ResponPopup = (Popup);

/***/ }),

/***/ 21035:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92195);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22181);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7075);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52781);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63606);
/* harmony import */ var _ResponPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93417);
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12699);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41687);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);









var SuccessIcon = function SuccessIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
      d: "M30 0C24.0666 0 18.2664 1.75947 13.3329 5.05591C8.39943 8.35235 4.55426 13.0377 2.28363 18.5195C0.0129984 24.0013 -0.581101 30.0333 0.576455 35.8527C1.73401 41.6721 4.59123 47.0176 8.78681 51.2132C12.9824 55.4088 18.3279 58.266 24.1473 59.4235C29.9667 60.5811 35.9987 59.987 41.4805 57.7164C46.9623 55.4457 51.6476 51.6006 54.9441 46.6671C58.2405 41.7336 60 35.9334 60 30C60 22.0435 56.8393 14.4129 51.2132 8.78679C45.5871 3.1607 37.9565 0 30 0ZM30 56.25C24.8082 56.25 19.7331 54.7105 15.4163 51.8261C11.0995 48.9417 7.73497 44.842 5.74817 40.0454C3.76137 35.2489 3.24154 29.9709 4.2544 24.8789C5.26726 19.7869 7.76733 15.1096 11.4385 11.4384C15.1096 7.76732 19.7869 5.26725 24.8789 4.25439C29.9709 3.24152 35.2489 3.76136 40.0454 5.74816C44.842 7.73496 48.9417 11.0995 51.8261 15.4163C54.7105 19.7331 56.25 24.8082 56.25 30C56.25 36.9619 53.4844 43.6387 48.5616 48.5615C43.6387 53.4844 36.9619 56.25 30 56.25Z",
      fill: "url(#paint0_linear_978_9103)"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
      width: "60",
      height: "60",
      viewBox: "-10.74 -18.39  60 60",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
        d: "M38.7502 0.937816C38.3989 0.588595 37.9237 0.392578 37.4284 0.392578C36.933 0.392578 36.4578 0.588595 36.1065 0.937816L15.294 21.6566L4.044 10.4066C3.70087 10.0361 3.22463 9.81709 2.72004 9.79775C2.21545 9.77841 1.72385 9.96031 1.35337 10.3034C0.982898 10.6466 0.763902 11.1228 0.744562 11.6274C0.725223 12.132 0.907123 12.6236 1.25025 12.9941L15.294 27.0003L38.7502 3.60032C38.926 3.42601 39.0655 3.21863 39.1607 2.99014C39.2559 2.76166 39.3049 2.51659 39.3049 2.26907C39.3049 2.02154 39.2559 1.77647 39.1607 1.54798C39.0655 1.3195 38.926 1.11212 38.7502 0.937816Z",
        fill: "url(#paint0_linear_978_9104)"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("linearGradient", {
          id: "paint0_linear_978_9104",
          x1: "40.5011",
          y1: "13.6964",
          x2: "-4.95665",
          y2: "13.6964",
          gradientUnits: "userSpaceOnUse",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("stop", {
            stopColor: "#03CDC1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("stop", {
            offset: "1",
            stopColor: "#8AB9FF"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("linearGradient", {
        id: "paint0_linear_978_9103",
        x1: "61.8613",
        y1: "30",
        x2: "-8.86861",
        y2: "30",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("stop", {
          stopColor: "#03CDC1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("stop", {
          offset: "1",
          stopColor: "#8AB9FF"
        })]
      })
    })]
  });
};

var SuccessResult = function SuccessResult(_ref) {
  var onClose = _ref.onClose,
      show = _ref.show,
      title = _ref.title,
      okText = _ref.okText,
      hash = _ref.hash;

  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_2__.useModel)('chain'),
      chain = _useModel.chain;

  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useToken */ .Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      fontSizeLG = _theme$useToken$token.fontSizeLG,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary,
      colorPrimary = _theme$useToken$token.colorPrimary;

  if (!chain) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ResponPopup__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    onClose: onClose,
    show: show,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
      status: "success",
      title: title,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SuccessIcon, {}),
      subTitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Paragraph */ .Z.Paragraph, {
        copyable: {
          icon: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            style: {
              color: colorPrimary
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            style: {
              color: colorPrimary
            }
          }, "copied-icon")],
          tooltips: ['copy', 'you copyed!!'],
          text: hash
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Link */ .Z.Link, {
          className: "linkColor",
          style: {
            fontWeight: 500
          },
          href: "".concat(chain.exporerTxUrl, "/").concat(hash, "?network=").concat(chain.network),
          target: "_blank",
          children: ["Browse: ", hash && hash.replace(/(\w{16})\w+(\w{16})/, '$1...$2')]
        })
      }),
      style: {
        padding: 0,
        fontWeight: 500
      },
      extra: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_FormButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        conditions: [],
        onClick: onClose,
        children: okText
      }, "close")]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SuccessResult);

/***/ }),

/***/ 80331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 73687:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_TokenSelect; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
var input = __webpack_require__(69677);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(68795);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(66419);
;// CONCATENATED MODULE: ./src/components/TokenSelect/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/TokenSelect/index.tsx












var TokenSelect = function TokenSelect(_ref) {
  var show = _ref.show,
      onClose = _ref.onClose,
      tokenList = _ref.tokenList,
      onChange = _ref.onChange,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'token' : _ref$type;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      fontSizeLG = _theme$useToken$token.fontSizeLG,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useState = (0,react.useState)(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      searchWord = _useState2[0],
      setSerachWord = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  (0,react.useEffect)(function () {
    setList(tokenList.filter(function (item) {
      return (0,utils/* searchBasicToken */.y6)(item, searchWord);
    }));
  }, [tokenList, searchWord]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    show: show,
    onClose: onClose,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "hay-tokenSelectWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "header",
        style: {
          background: colorBgContainer
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          placeholder: formatMessage({
            id: 'search_tips'
          }),
          onChange: function onChange(e) {
            return setSerachWord(e.target.value);
          },
          className: "searchInput",
          allowClear: true,
          prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(SearchOutlined/* default */.Z, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "list",
        children: list.map(function (item) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item",
            onClick: function onClick() {
              onChange(item);
              onClose();
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "left",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                src: type === 'token' ? item.icon : item.iconLp,
                size: 25,
                tokenId: item.id
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "info",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  className: "title",
                  children: type === 'token' ? item.symbol : item.lpSymbol
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  className: "fullname",
                  children: item.fullName
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "right",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                className: "balanceToken",
                children: item.userTokenBalanceLabel
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                className: "balanceUSD",
                children: ["$", item.userTokenBalanceUSDLabel]
              })]
            })]
          }, item.id);
        })
      })]
    })
  });
};

/* harmony default export */ var components_TokenSelect = (TokenSelect);

/***/ }),

/***/ 789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_Swap; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
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
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/pages/trade/components/Swap/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useDebounceFn/index.js + 4 modules
var useDebounceFn = __webpack_require__(40238);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/Swap/index.tsx

















var Swap = function Swap(_ref) {
  var setCurrentChart = _ref.setCurrentChart;

  var _useSearchParams = (0,_umi_production_exports.useSearchParams)(),
      _useSearchParams2 = slicedToArray_default()(_useSearchParams, 1),
      query = _useSearchParams2[0];

  var queOut = query.get('swapOut');

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      inToken = _useState2[0],
      setInToken = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      outToken = _useState4[0],
      setOutToken = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = slicedToArray_default()(_useState5, 2),
      inAmount = _useState6[0],
      setInAmount = _useState6[1];

  var _useState7 = (0,react.useState)(''),
      _useState8 = slicedToArray_default()(_useState7, 2),
      outAmount = _useState8[0],
      setOutAmount = _useState8[1]; // const [selectType, setSelectType] = useState<'in' | 'out' | ''>('');


  var _useState9 = (0,react.useState)(''),
      _useState10 = slicedToArray_default()(_useState9, 2),
      amountType = _useState10[0],
      setAmountType = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = slicedToArray_default()(_useState11, 2),
      submiting = _useState12[0],
      setSubmiting = _useState12[1];

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      poolTokenExtList = _useModel.poolTokenExtList,
      osdData = _useModel.osdData,
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      updataTokens = _useModel.updataTokens;

  var _useModel2 = (0,_umi_production_exports.useModel)('initModel'),
      maxSlippage = _useModel2.maxSlippage;

  var _useState13 = (0,react.useState)('0'),
      _useState14 = slicedToArray_default()(_useState13, 2),
      impact = _useState14[0],
      setImpact = _useState14[1];

  var inRef = (0,react.useRef)();

  var _useState15 = (0,react.useState)(),
      _useState16 = slicedToArray_default()(_useState15, 2),
      succRet = _useState16[0],
      setSuccRet = _useState16[1];

  var selectList = (0,react.useMemo)(function () {
    if (osdData) {
      return [].concat(toConsumableArray_default()(poolTokenExtList), [osdData]);
    }

    return poolTokenExtList;
  }, [poolTokenExtList, osdData]); // update token

  (0,react.useEffect)(function () {
    if (queOut) {
      var _find = selectList.find(function (item) {
        return item.id === queOut;
      });

      setOutToken(_find);
    }
  }, [queOut]);
  (0,react.useEffect)(function () {
    if (inToken) {
      var _find = selectList.find(function (item) {
        return item.id === inToken.id;
      });

      setInToken(_find);
    }

    if (outToken) {
      var _find2 = selectList.find(function (item) {
        return item.id === outToken.id;
      });

      setOutToken(_find2);
    }
  }, [selectList]);

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      boxShadow = _theme$useToken$token.boxShadow,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary,
      borderRadius = _theme$useToken$token.borderRadius;

  var inAmountUSD = (0,react.useMemo)(function () {
    if (inAmount && inToken) {
      return (Number(inAmount) * Number(inToken.userOraclePrice)).toFixed(2);
    }
  }, [inAmount, inToken]);
  var outAmountUSD = (0,react.useMemo)(function () {
    if (outAmount && outToken) {
      return (Number(outAmount) * Number(outToken.userOraclePrice)).toFixed(2);
    }
  }, [outAmount, outToken]);

  var _calcImpact = (0,react.useCallback)(function () {
    if (inAmount && outAmount && inToken && outToken) {
      var ret = (0,contract/* calcImpact */.wf)({
        inToken: inToken,
        outToken: outToken,
        outAmount: outAmount,
        inAmount: inAmount
      });
      setImpact(ret);
    }

    setImpact('0');
  }, [inAmount, outAmount, inToken, outToken]);

  var poolBalance = (0,react.useMemo)(function () {
    if (outToken && poolTokenExtList.length > 0) {
      if (outToken.symbol === 'OSD') {
        if (inToken) {
          var _find3 = poolTokenExtList.find(function (item) {
            return item.id === inToken.id;
          });

          if (_find3) {
            return _find3.poolOsd;
          }
        }
      }

      var _find = poolTokenExtList.find(function (item) {
        return item.id === outToken.id;
      });

      if (_find) {
        return _find.poolReserve;
      }
    } else {
      return '-';
    }
  }, [outToken, inToken]);

  var _handleInChange = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _yield$calcSwapAmount, _yield$calcSwapAmount2, _out, error;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!outToken || !inToken || !chain || !Number(inAmount))) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return (0,contract/* calcSwapAmountOut */.rv)({
                walletName: (wallet === null || wallet === void 0 ? void 0 : wallet.name) || '',
                chainId: chain.id,
                amount: inAmount,
                inToken: inToken,
                outToken: outToken
              });

            case 4:
              _yield$calcSwapAmount = _context.sent;
              _yield$calcSwapAmount2 = slicedToArray_default()(_yield$calcSwapAmount, 2);
              _out = _yield$calcSwapAmount2[0];
              error = _yield$calcSwapAmount2[1];

              if (!error) {
                _context.next = 12;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setOutAmount('');
              return _context.abrupt("return");

            case 12:
              _calcImpact();

              setOutAmount(_out);
              setAmountType('in');

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _handleInChange() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _useDebounceFn = (0,useDebounceFn/* default */.Z)(_handleInChange, {
    wait: 500
  }),
      handleInChange = _useDebounceFn.run;

  var _handleOutChange = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var _yield$calcSwapAmount3, _yield$calcSwapAmount4, _in, error;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!outToken || !inToken || !chain || !Number(outAmount) || !(wallet !== null && wallet !== void 0 && wallet.isConnected))) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return (0,contract/* calcSwapAmountIn */.F_)({
                walletName: (wallet === null || wallet === void 0 ? void 0 : wallet.name) || '',
                chainId: chain.id,
                amount: outAmount,
                inToken: inToken,
                outToken: outToken
              });

            case 4:
              _yield$calcSwapAmount3 = _context2.sent;
              _yield$calcSwapAmount4 = slicedToArray_default()(_yield$calcSwapAmount3, 2);
              _in = _yield$calcSwapAmount4[0];
              error = _yield$calcSwapAmount4[1];

              if (!error) {
                _context2.next = 12;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setInAmount('');
              return _context2.abrupt("return");

            case 12:
              _calcImpact();

              console.log(_in);
              setInAmount(_in);
              setAmountType('out');

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function _handleOutChange() {
      return _ref3.apply(this, arguments);
    };
  }();

  var _useDebounceFn2 = (0,useDebounceFn/* default */.Z)(_handleOutChange, {
    wait: 500
  }),
      handleOutChange = _useDebounceFn2.run;

  var handleSelectChannge = function handleSelectChannge(token, selectType) {
    if (selectType === 'in') {
      if ((outToken === null || outToken === void 0 ? void 0 : outToken.id) === token.id) {
        setOutToken(undefined);
      }

      setInToken(token);
      handleInChange();
    } else {
      if ((inToken === null || inToken === void 0 ? void 0 : inToken.id) === token.id) {
        setInToken(undefined);
      }

      setOutToken(token);
      setCurrentChart(token);

      if (inAmount) {
        handleInChange();
      } else {
        handleOutChange();
      }
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
      var _yield$swap, _yield$swap2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!chain || !wallet || !amountType || !inToken || !outAmount || !inAmount || !outToken)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              setSubmiting(true);
              _context3.next = 5;
              return (0,contract/* swap */.LF)({
                chain: chain,
                wallet: wallet,
                inAmount: inAmount,
                outAmount: outAmount,
                inToken: inToken,
                outToken: outToken,
                amountType: amountType,
                maxSlippage: String(maxSlippage)
              });

            case 5:
              _yield$swap = _context3.sent;
              _yield$swap2 = slicedToArray_default()(_yield$swap, 2);
              ret = _yield$swap2[0];
              err = _yield$swap2[1];
              setSubmiting(false);

              if (!err) {
                _context3.next = 13;
                break;
              }

              message/* default.error */.ZP.error(err.error);
              return _context3.abrupt("return");

            case 13:
              // message.success('SWAP SUCCESS' + ret?.hash)
              setSuccRet({
                type: 'swap',
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);
                  setInAmount('');
                  setOutAmount('');
                },
                title: 'Swap Success',
                hash: (ret === null || ret === void 0 ? void 0 : ret.hash) || '',
                okText: 'Close'
              });
              updataTokens();

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSubmit() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handelSwitch = function handelSwitch() {
    setInToken(outToken);
    setOutToken(inToken);
    setOutAmount(inAmount);
    setInAmount('');
    handleOutChange();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "hay-swap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "inputCard",
      style: {
        background: colorInfoBg,
        marginLeft: 0,
        borderRadius: borderRadius
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        amount: Number(inAmount),
        onAmountChange: function onAmountChange(value) {
          setInAmount(String(value));
          handleInChange();
        },
        maxValue: inToken ? Number(inToken.userTokenBalance) : 0,
        header: inToken && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {},
            children: ["Pay ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: inAmountUSD
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {
              setInAmount(String(inToken.userTokenBalance));
              handleInChange();
            },
            children: ["Balance: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: inToken.userTokenBalanceLabel
            })]
          })]
        }),
        showSlider: false,
        tokenList: selectList,
        onTokenChange: function onTokenChange(token) {
          return handleSelectChannge(token, 'in');
        },
        currentToken: inToken
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "switchIcon",
      onClick: handelSwitch,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "icon",
        style: {
          background: colorInfoBg,
          border: " 2.4px solid ".concat(colorBgContainer)
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
            d: "M11.3787 6.65628L6.51183 11.4023C6.43809 11.4743 6.3582 11.5253 6.27217 11.5555C6.18614 11.5852 6.09397 11.6001 5.99565 11.6001C5.89733 11.6001 5.80515 11.5852 5.71912 11.5555C5.63309 11.5253 5.55321 11.4743 5.47947 11.4023L0.612614 6.65628C0.477424 6.52444 0.406634 6.35977 0.400243 6.16226C0.394343 5.96426 0.465134 5.79336 0.612614 5.64954C0.747804 5.50572 0.91667 5.43069 1.11921 5.42446C1.32224 5.4187 1.4975 5.48774 1.64498 5.63156L5.25825 9.15515L5.25825 1.1192C5.25825 0.915454 5.32879 0.744548 5.46988 0.606481C5.61146 0.468892 5.78672 0.400098 5.99565 0.400098C6.20458 0.400098 6.37959 0.468892 6.52068 0.606481C6.66226 0.744548 6.73305 0.915454 6.73305 1.1192L6.73305 9.15515L10.3463 5.63156C10.4815 5.49972 10.6536 5.43069 10.8625 5.42446C11.0714 5.4187 11.2435 5.48774 11.3787 5.63156C11.5262 5.76339 11.5999 5.93118 11.5999 6.13493C11.5999 6.33867 11.5262 6.51246 11.3787 6.65628Z",
            fill: "url(#paint0_linear_21741_2689)"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
              id: "paint0_linear_21741_2689",
              x1: "5.9999",
              y1: "0.0526531",
              x2: "5.9999",
              y2: "13.2556",
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
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
      amount: Number(outAmount),
      onAmountChange: function onAmountChange(value) {
        setOutAmount(String(value));
        handleOutChange();
      },
      maxValue: Number(poolBalance) || 0,
      header: outToken && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "label",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 12,
            color: colorTextSecondary
          },
          onClick: function onClick() {},
          children: ["Receive: $ ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: colorPrimary
            },
            children: outAmountUSD
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 12,
            color: colorTextSecondary
          },
          onClick: function onClick() {
            setInAmount(outToken.userTokenBalanceLabel);
          },
          children: ["PoolBalance: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: colorPrimary
            },
            children: poolBalance
          })]
        })]
      }),
      showSlider: false,
      tokenList: selectList,
      onTokenChange: function onTokenChange(token) {
        return handleSelectChannge(token, 'out');
      },
      currentToken: outToken
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "InputCardTips",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "InputCardTip",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 13,
            color: colorTextSecondary
          },
          children: "Price Impact + Fee"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 13,
            color: colorTextSecondary
          },
          children: [impact, "%"]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
      onClick: handleSubmit,
      loading: submiting,
      conditions: [{
        condition: !(wallet !== null && wallet !== void 0 && wallet.isConnected),
        text: 'Connect Wallet',
        type: 'primary',
        onClick: function onClick() {
          message/* default.error */.ZP.error('Connect Wallet');
        }
      }, {
        condition: !inToken || !outToken,
        text: 'Select Asset',
        type: 'primary',
        onClick: function onClick() {}
      }, {
        condition: !inAmount || !outAmount,
        text: 'Enter Amount',
        type: 'primary',
        onClick: function onClick() {}
      }, {
        condition: parseFloat(impact) > maxSlippage,
        text: 'Swap Anyway',
        type: 'primary',
        danger: true,
        onClick: function onClick() {
          handleSubmit;
        }
      }],
      children: "Swap"
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

/* harmony default export */ var components_Swap = (Swap);

/***/ }),

/***/ 40238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_useDebounceFn; }
});

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useLatest/index.js

function useLatest(value) {
  const ref = (0,react.useRef)(value);
  ref.current = value;
  return ref;
}
/* harmony default export */ var es_useLatest = (useLatest);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/utils/index.js
const isObject = value => value !== null && typeof value === 'object';
const isFunction = value => typeof value === 'function';
const isString = value => typeof value === 'string';
const isBoolean = value => typeof value === 'boolean';
const isNumber = value => typeof value === 'number';
const isUndef = value => typeof value === 'undefined';
;// CONCATENATED MODULE: ./node_modules/ahooks/es/utils/isDev.js
const isDev =  false || "production" === 'test';
/* harmony default export */ var utils_isDev = (isDev);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useUnmount/index.js




const useUnmount = fn => {
  if (utils_isDev) {
    if (!isFunction(fn)) {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }
  const fnRef = es_useLatest(fn);
  (0,react.useEffect)(() => () => {
    fnRef.current();
  }, []);
};
/* harmony default export */ var es_useUnmount = (useUnmount);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useDebounceFn/index.js






function useDebounceFn(fn, options) {
  var _a;
  if (utils_isDev) {
    if (!isFunction(fn)) {
      console.error(`useDebounceFn expected parameter is a function, got ${typeof fn}`);
    }
  }
  const fnRef = es_useLatest(fn);
  const wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000;
  const debounced = (0,react.useMemo)(() => debounce_default()((...args) => {
    return fnRef.current(...args);
  }, wait, options), []);
  es_useUnmount(() => {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  };
}
/* harmony default export */ var es_useDebounceFn = (useDebounceFn);

/***/ }),

/***/ 62705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(55639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 44239:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(62705),
    getRawTag = __webpack_require__(89607),
    objectToString = __webpack_require__(2333);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 27561:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(67990);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 31957:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 89607:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(62705);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 2333:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 55639:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(31957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 67990:
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 23279:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(13218),
    now = __webpack_require__(7771),
    toNumber = __webpack_require__(14841);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 13218:
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 37005:
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 33448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(44239),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 7771:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(55639);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 14841:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(27561),
    isObject = __webpack_require__(13218),
    isSymbol = __webpack_require__(33448);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ })

}]);