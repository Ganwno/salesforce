"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[659],{

/***/ 12699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
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

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92195);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22181);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39965);
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


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_TokenSelect; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 7 modules
var input = __webpack_require__(68863);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
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
    modalWidth: type === 'pairs' ? 228 : 420,
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
                src: type === 'lpToken' ? item.iconLp : item.icon,
                size: 25,
                tokenId: item.id
              }), type === 'pairs' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                className: "title",
                style: {
                  paddingLeft: 10,
                  fontSize: 16,
                  fontWeight: 500
                },
                children: [item.symbol, "/USD"]
              }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "info",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  className: "title",
                  children: type === 'token' ? item.symbol : item.lpSymbol
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  className: "fullname",
                  children: item.fullName
                })]
              })]
            }), type !== 'pairs' && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
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

/***/ })

}]);