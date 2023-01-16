(self["webpackChunk"] = self["webpackChunk"] || []).push([[2112],{

/***/ 77171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_ArrowDownOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ArrowDownOutlined.js
// This icon file is generated automatically.
var ArrowDownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" } }] }, "name": "arrow-down", "theme": "outlined" };
/* harmony default export */ var asn_ArrowDownOutlined = (ArrowDownOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowDownOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ArrowDownOutlined_ArrowDownOutlined = function ArrowDownOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ArrowDownOutlined
  }));
};
ArrowDownOutlined_ArrowDownOutlined.displayName = 'ArrowDownOutlined';
/* harmony default export */ var icons_ArrowDownOutlined = (/*#__PURE__*/react.forwardRef(ArrowDownOutlined_ArrowDownOutlined));

/***/ }),

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