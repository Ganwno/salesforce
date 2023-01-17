"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[979],{

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

/***/ }),

/***/ 28662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HomePage; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(66419);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/statistic/index.js + 5 modules
var statistic = __webpack_require__(55054);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(4393);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowDownOutlined.js + 1 modules
var ArrowDownOutlined = __webpack_require__(77171);
// EXTERNAL MODULE: ./node_modules/@ant-design/plots/es/components/area/index.js + 680 modules
var components_area = __webpack_require__(26288);
;// CONCATENATED MODULE: ./src/pages/ifo/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/ifo/index.tsx













var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
var Countdown = statistic/* default.Countdown */.Z.Countdown;
var Title = typography/* default.Title */.Z.Title,
    Paragraph = typography/* default.Paragraph */.Z.Paragraph,
    Text = typography/* default.Text */.Z.Text,
    Link = typography/* default.Link */.Z.Link;
var deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

var PalnLayout = {
  xl: 4,
  md: 8,
  sm: 12,
  xs: 24
};
var ProgressLayout = {
  xl: 3,
  md: 8,
  sm: 12,
  xs: 24
};
function HomePage() {
  var _useBreakpoint = useBreakpoint(),
      xs = _useBreakpoint.xs,
      md = _useBreakpoint.md,
      xl = _useBreakpoint.xl,
      xxl = _useBreakpoint.xxl,
      sm = _useBreakpoint.sm;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useState = (0,react.useState)([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  (0,react.useEffect)(function () {
    asyncFetch();
  }, []);

  var asyncFetch = function asyncFetch() {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (response) {
      return response.json();
    }).then(function (json) {
      return setData(json);
    })["catch"](function (error) {
      console.log('fetch data failed', error);
    });
  };

  var config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
    height: 334,
    xAxis: {
      range: [0, 1],
      tickCount: 5,
      grid: {
        line: {
          style: {
            strokeOpacity: 0
          }
        }
      }
    },
    yAxis: {
      position: 'right',
      grid: {
        line: {
          style: {
            strokeOpacity: 0
          }
        }
      }
    },
    color: colorPrimary,
    smooth: true,
    // autoFit: true,
    areaStyle: function areaStyle() {
      return {
        fill: 'l(270) 0:#ffffff 0.5:rgba(3, 205, 193, 0.15) 1:rgba(3, 205, 193, 0.7) ,'
      };
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "ifoPage",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
      bordered: false,
      headStyle: {
        borderBottom: 'none'
      },
      bodyStyle: {
        padding: '0 20px 20px 20px'
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          textAlign: 'center',
          marginBottom: 0
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: ["OT emission ", !xs && 'schedule', ",\xA0"]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
          style: {
            fontSize: 22,
            color: colorPrimary
          },
          underline: true,
          href: "https://onchaintrade.gitbook.io/ot/tokenomics/tokenomics-zksync",
          target: '_blank',
          children: "learn more"
        })]
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "plan",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
          style: {
            marginBottom: 0
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 16
            },
            children: "Make sure you fully understand\xA0"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
            style: {
              fontSize: 16,
              color: colorPrimary
            },
            underline: true,
            href: "https://onchaintrade.gitbook.io/ot/tokenomics/tokenomics-zksync/public-sale",
            target: '_blank',
            children: "terms and mechanism"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 16
            },
            children: "\xA0of this sale before contributing.Onchain.trade code audit report\xA0"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
            style: {
              fontSize: 16,
              color: colorPrimary
            },
            underline: true,
            href: "https://onchaintrade.gitbook.io/ot/audit-reports",
            target: '_blank',
            children: "here"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        className: xs ? "desc xs" : "desc",
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, PalnLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: "IFO"
            }),
            value: '10,000,000(10%)'
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, PalnLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: "IFO",
            value: '10,000,000(10%)'
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, PalnLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: "IFO",
            value: '10,000,000(10%)'
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, PalnLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: "IFO",
            value: '10,000,000(10%)'
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, PalnLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: "IFO",
            value: '10,000,000(10%)'
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, PalnLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: "IFO",
            value: '10,000,000(10%)'
          })
        }))]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
      style: {
        marginTop: 20
      },
      bordered: false,
      headStyle: {
        borderBottom: 'none'
      },
      bodyStyle: {
        padding: '0 20px 20px 20px'
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          textAlign: 'center',
          marginBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: "IFO Progress(1d 13hrs left)"
        })
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        className: xs ? "desc xs" : "desc",
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          xl: 4,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: "IFO"
            }),
            value: '10,000,000(10%)'
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          xl: 4,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Countdown, {
            title: "Day Level",
            value: deadline,
            format: "D[D]:H[hrs]:m[m]:s[s]"
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: "IFO",
            value: 1389089
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: "IFO",
            value: '10'
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: "IFO",
            precision: 2,
            value: 1389089
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          xl: 4,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: "IFO",
            value: 1389089,
            prefix: "$",
            formatter: function formatter(value) {
              return (0,utils/* formatNumberToKMBT */.BF)(Number(value), 2);
            }
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            gutter: [14, 14],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: "12",
              xl: 24,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
                block: true,
                type: "primary",
                children: "Buy OT"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: "12",
              xl: 24,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
                block: true,
                type: "primary",
                disabled: true,
                children: "Withdraw"
              })
            })]
          })
        }))]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          marginBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16
          },
          children: "Will be open for withdrawal 24 hours before liquidity mining starts"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [12, 12],
      style: {
        marginTop: 12
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        xl: 10,
        md: 12,
        sm: 24,
        xs: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
          title: "Buy OT",
          bordered: false,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
            amount: 0,
            onAmountChange: function onAmountChange() {},
            onTokenChange: function onTokenChange() {},
            currentToken: undefined,
            tokenList: [],
            header: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
            maxValue: Infinity,
            showSlider: false
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "arrow",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDownOutlined/* default */.Z, {
              style: {
                color: colorTextSecondary
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
            amount: 0,
            onAmountChange: function onAmountChange() {},
            onTokenChange: function onTokenChange() {},
            currentToken: undefined,
            tokenList: [],
            header: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
            maxValue: Infinity,
            showSlider: false,
            showSelectToken: false
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
            conditions: [],
            onClick: function onClick() {},
            children: "Contribute and buy OT"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        xl: 14,
        md: 12,
        sm: 24,
        xs: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
          title: "OT sale price",
          bordered: false,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_area/* default */.Z, objectSpread2_default()({}, config))
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
      style: {
        marginTop: 20
      },
      bordered: false,
      headStyle: {
        borderBottom: 'none'
      },
      bodyStyle: {
        padding: '0 20px 20px 20px'
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          textAlign: 'center',
          marginBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: "How OT price is determined"
        })
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          marginBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16
          },
          children: "USDC, USDT and DAI are accepted in exchange for OT tokens. 10,000,000 OT (10% of total supply) allocated to this sale. The final price will be confirmed when sale ends:"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "info",
        style: {
          background: colorInfoBg,
          textAlign: 'center',
          lineHeight: "36px",
          marginTop: 10
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16,
            color: colorPrimary
          },
          children: "Final OT price = $ Raised value / 10,000,000"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      style: {
        marginTop: 20
      },
      bordered: false,
      headStyle: {
        borderBottom: 'none'
      },
      bodyStyle: {
        padding: '0 20px 20px 20px'
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          textAlign: 'center',
          marginBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: "IFO(Initial fairlaunch offering) rules"
        })
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          marginBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
            children: ["1. Make sure you fully understand \xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
              style: {
                color: colorPrimary
              },
              underline: true,
              href: "https://onchaintrade.gitbook.io/ot/tokenomics/tokenomics-zksync/public-sale",
              target: '_blank',
              children: "terms and mechanism"
            }), "\xA0of this sale before contributing."]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: "2. Open for everyone, no presale and VC discounts, same price for all contributors ."
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: "3. 10% for public sale without lock time, can be withdrawn before liquidity mining starts."
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: "4. 50% of the raised funds will be added to liquidity pools, the rest 50% will be used for future protocol development, deploying on new chains and code audit, etc."
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
            children: ["5. Contributors for this round are eligible for ", /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
              type: "danger",
              children: "same percentage of OT on Aptos"
            }), " . e.g. Alice contributes in this round and gets 0.1%(100,000) of OT token on zkSync, she will get 0.1% of OT on Aptos as well. Contributors will be airdroped OT-Aptos ERC20 tokens which can be swapped into OT on Aptos after Onchain.trade launches on Aptos mainnet(already live on testnet: beta.onchain.trade)."]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: "6. What can you do with the OT token: you can stake OT to get fee distribution on OT platform. OT holders get rewarded with real yield instead of just holding it for governance purpose."
          })]
        })
      })
    })]
  });
}

/***/ })

}]);