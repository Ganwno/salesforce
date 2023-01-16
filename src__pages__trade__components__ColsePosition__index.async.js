"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1306],{

/***/ 87603:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_ArrowRightOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ArrowRightOutlined.js
// This icon file is generated automatically.
var ArrowRightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" } }] }, "name": "arrow-right", "theme": "outlined" };
/* harmony default export */ var asn_ArrowRightOutlined = (ArrowRightOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowRightOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ArrowRightOutlined_ArrowRightOutlined = function ArrowRightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ArrowRightOutlined
  }));
};
ArrowRightOutlined_ArrowRightOutlined.displayName = 'ArrowRightOutlined';
/* harmony default export */ var icons_ArrowRightOutlined = (/*#__PURE__*/react.forwardRef(ArrowRightOutlined_ArrowRightOutlined));

/***/ }),

/***/ 30436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_ColsePosition; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13769);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 1 modules
var spin = __webpack_require__(57953);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(31530);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowRightOutlined.js + 1 modules
var ArrowRightOutlined = __webpack_require__(87603);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(66419);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
;// CONCATENATED MODULE: ./src/pages/trade/components/ColsePosition/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/ColsePosition/index.tsx





var _excluded = ["defaultAction"],
    _excluded2 = ["show", "onClose"];














var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var DescItem = function DescItem(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    className: "InputCardTip",
    style: {
      fontSize: 13
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      children: label
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      children: children
    })]
  });
};

var AddContent = function AddContent(_ref2) {
  var currentPostion = _ref2.currentPostion,
      actionType = _ref2.actionType;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('future'),
      updatePositions = _useModel2.updatePositions,
      setPairsLoading = _useModel2.setPairsLoading;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

  var margin = currentPostion.userMargin,
      collateralToken = currentPostion.collateralTokenObj,
      indexToken = currentPostion.indexTokenObj,
      isLong = currentPostion.isLong,
      pair = currentPostion.pair,
      userLiqPrice = currentPostion.userLiqPrice,
      size = currentPostion.size,
      userSize = currentPostion.userSize;
  if (!collateralToken || !indexToken || !pair || !chain || !wallet) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  var userTokenBalance = collateralToken.userTokenBalance;

  var _useState = (0,react.useState)(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      submiting = _useState2[0],
      setSubmiting = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = slicedToArray_default()(_useState3, 2),
      amountIn = _useState4[0],
      setAmountIn = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = slicedToArray_default()(_useState5, 2),
      errorMsg = _useState6[0],
      setErrorMsg = _useState6[1];

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useState7 = (0,react.useState)(),
      _useState8 = slicedToArray_default()(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      succRet = _useState10[0],
      setSuccRet = _useState10[1];

  var maxRemovable = (0,react.useMemo)(function () {
    if (actionType === 'close') {
      return userSize;
    }

    return '0';
  }, [actionType]);
  (0,react.useEffect)(function () {
    var _formatClosePosition = (0,contract/* formatClosePosition */.oD)({
      currentPostion: currentPostion,
      amountIn: String(amountIn)
    }),
        _formatClosePosition2 = slicedToArray_default()(_formatClosePosition, 2),
        _data = _formatClosePosition2[0],
        err = _formatClosePosition2[1];

    if (err) {
      console.log(err.error);
      setErrorMsg(err.error);
      return;
    }

    if (_data) {
      setData(_data);
    }

    setErrorMsg('');
  }, [currentPostion, amountIn]);

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _yield$decreasePositi, _yield$decreasePositi2, res, error;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSubmiting(true);
              _context.next = 3;
              return (0,contract/* decreasePosition */.O0)({
                chain: chain,
                wallet: wallet,
                isLong: isLong,
                amountIn: amountIn,
                currentPosition: currentPostion
              });

            case 3:
              _yield$decreasePositi = _context.sent;
              _yield$decreasePositi2 = slicedToArray_default()(_yield$decreasePositi, 2);
              res = _yield$decreasePositi2[0];
              error = _yield$decreasePositi2[1];

              if (!error) {
                _context.next = 11;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 11:
              // message.success('add' + res.hash)
              if (res) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'closePosition',
                  title: 'Close Position Success',
                  hash: res.hash,
                  okText: 'Close'
                });
              }

              setPairsLoading(true);
              _context.next = 15;
              return updatePositions();

            case 15:
              setSubmiting(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
    spinning: submiting,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [10, 10],
      className: "hayMarginWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        className: "card",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          tokenList: [],
          currentToken: indexToken,
          onTokenChange: function onTokenChange() {},
          canSelectToken: false,
          amount: amountIn,
          onAmountChange: changeAmount,
          minValue: 0,
          maxValue: Number(maxRemovable),
          header: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: [_({
                id: 'close'
              }), " ", isLong ? 'Long' : 'Short', ": $", (0,utils/* calUsdPrice */.Ce)(amountIn, Number(pair.userIndexPrice))]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: [_({
                id: 'position_size'
              }), ":\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "primary",
                onClick: function onClick() {
                  return changeAmount(Number(maxRemovable));
                },
                children: maxRemovable
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        className: "card",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "hayInputCard",
          style: {
            background: colorInfoBg
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: " Price"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: ["Mark:", pair.userIndexPrice, "  "]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "value",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 24,
                fontWeight: 500
              },
              children: [" ", pair.userIndexPrice]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 24,
                fontWeight: 500
              },
              children: " USD"
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: data && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "PnL/ROE",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              className: data.isPositive ? 'linkColor' : 'shortColor',
              children: [data.pnlStr, "/", data.roeStr]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Leverage",
            children: data.leverage
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Margin",
            children: [margin, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRightOutlined/* default */.Z, {}), "  $", data.leftMargin]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Margin Rate",
            children: data.mr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "EST Liquidation Price",
            children: ["$", data.liqPrice]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Receive",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              className: data.isPositive ? 'linkColor' : 'shortColor',
              children: [data.receive, " In ", collateralToken.symbol]
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
          height: 50,
          onClick: handleSubmit,
          conditions: [{
            condition: !!errorMsg,
            text: errorMsg,
            type: 'default',
            onClick: function onClick() {}
          }, {
            condition: !amountIn,
            text: 'Enter Amount',
            type: 'default',
            onClick: function onClick() {}
          }],
          children: "Close Position"
        })
      })]
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var RemoveContent = function RemoveContent() {
  return /*#__PURE__*/_jsx(Row, {
    gutter: [10, 10],
    children: "Rem,ove"
  });
};

var Content = function Content(_ref4) {
  var defaultAction = _ref4.defaultAction,
      rest = objectWithoutProperties_default()(_ref4, _excluded);

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      actionType = _useState12[0],
      setActionType = _useState12[1];

  (0,react.useEffect)(function () {
    setActionType(defaultAction);
  }, [defaultAction]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [10, 10],
    className: "Borrow-Comp",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
        style: {
          width: '100%'
        },
        value: actionType,
        onChange: function onChange(e) {
          return setActionType(e);
        },
        block: true,
        options: [{
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "TP/SL"
            })
          }),
          value: 'tpsl',
          disabled: true
        }, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "Close Position"
            })
          }),
          value: 'close'
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      style: {
        overflow: 'hidden'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        wrap: false,
        gutter: [20, 20],
        style: {
          transform: "translateX(".concat(actionType === 'tpsl' ? '0' : '-100', "%)"),
          transition: 'transform .4s ease-in-out'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "tpsl"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "close"
          }))
        })]
      })
    })]
  });
};

var ColsePosition = function ColsePosition(_ref5) {
  var show = _ref5.show,
      onClose = _ref5.onClose,
      rest = objectWithoutProperties_default()(_ref5, _excluded2);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: true,
      maskClosable: false,
      title: "Colse Position",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, rest))
    })
  });
};

/* harmony default export */ var components_ColsePosition = (ColsePosition);

/***/ })

}]);