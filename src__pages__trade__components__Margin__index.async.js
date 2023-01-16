"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3799],{

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

/***/ 79886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_Margin; }
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
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
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
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
;// CONCATENATED MODULE: ./src/pages/trade/components/Margin/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/Margin/index.tsx

















var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var AddContent = function AddContent(_ref) {
  var currentPostion = _ref.currentPostion,
      actionType = _ref.actionType,
      _onClose = _ref.onClose;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('future'),
      updatePositions = _useModel2.updatePositions,
      setPairsLoading = _useModel2.setPairsLoading;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      colorTextSecondary = _theme$useToken.token.colorTextSecondary;

  var margin = currentPostion.userMargin,
      collateralToken = currentPostion.collateralTokenObj,
      indexToken = currentPostion.indexTokenObj,
      isLong = currentPostion.isLong,
      pair = currentPostion.pair,
      userLiqPrice = currentPostion.userLiqPrice;
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

  var _useState7 = (0,react.useState)(),
      _useState8 = slicedToArray_default()(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      succRet = _useState10[0],
      setSuccRet = _useState10[1];

  var maxRemovable = (0,react.useMemo)(function () {
    if (actionType === 'remove') {
      return (0,contract/* calcMaxDecreaseMarginStr */.xu)(currentPostion);
    }

    return '0';
  }, [actionType]);
  (0,react.useEffect)(function () {
    var _formatEditPosition = (0,contract/* formatEditPosition */.tm)({
      isAdd: actionType === 'add',
      currentPostion: currentPostion,
      amountIn: String(amountIn)
    }),
        _formatEditPosition2 = slicedToArray_default()(_formatEditPosition, 2),
        _data = _formatEditPosition2[0],
        err = _formatEditPosition2[1];

    if (err) {
      console.log(err.error);
      setErrorMsg(err.error);
      return;
    }

    setData(_data);
    setErrorMsg('');
  }, [currentPostion, amountIn]);

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _yield$increaseMargin, _yield$increaseMargin2, res, error, _yield$decreaseMargin, _yield$decreaseMargin2, _res, _error;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSubmiting(true);

              if (!(actionType === 'add')) {
                _context.next = 15;
                break;
              }

              _context.next = 4;
              return (0,contract/* increaseMargin */.Ue)({
                chain: chain,
                wallet: wallet,
                collateralToken: collateralToken,
                indexToken: indexToken.id,
                isLong: isLong,
                amountIn: String(amountIn)
              });

            case 4:
              _yield$increaseMargin = _context.sent;
              _yield$increaseMargin2 = slicedToArray_default()(_yield$increaseMargin, 2);
              res = _yield$increaseMargin2[0];
              error = _yield$increaseMargin2[1];

              if (!error) {
                _context.next = 12;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 12:
              // message.success('add' + res.hash)
              setSuccRet({
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);
                },
                type: 'addMargin',
                title: 'Add Margin Success',
                hash: res.hash,
                okText: 'Close'
              });
              _context.next = 26;
              break;

            case 15:
              _context.next = 17;
              return (0,contract/* decreaseMargin */.CL)({
                chain: chain,
                wallet: wallet,
                collateralToken: collateralToken,
                indexToken: indexToken.id,
                isLong: isLong,
                amountIn: String(amountIn)
              });

            case 17:
              _yield$decreaseMargin = _context.sent;
              _yield$decreaseMargin2 = slicedToArray_default()(_yield$decreaseMargin, 2);
              _res = _yield$decreaseMargin2[0];
              _error = _yield$decreaseMargin2[1];

              if (!_error) {
                _context.next = 25;
                break;
              }

              message/* default.error */.ZP.error(_error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 25:
              setSuccRet({
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);

                  _onClose();
                },
                type: 'removeMargin',
                title: 'Remove Margin Success',
                hash: _res.hash,
                okText: 'Close'
              }); // message.success('remove' + res.hash)

            case 26:
              setPairsLoading(true);
              _context.next = 29;
              return updatePositions();

            case 29:
              setSubmiting(false);

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  var DescItem = function DescItem(_ref3) {
    var label = _ref3.label,
        children = _ref3.children;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      className: "InputCardTip",
      style: {
        fontSize: 13,
        color: colorTextSecondary
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        children: label
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        children: children
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
    spinning: submiting,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [10, 10],
      className: "hayMarginWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          tokenList: [],
          currentToken: collateralToken,
          onTokenChange: function onTokenChange() {},
          canSelectToken: false,
          amount: amountIn,
          onAmountChange: changeAmount,
          minValue: 0,
          maxValue: actionType === 'add' ? Number(userTokenBalance) : Number(maxRemovable),
          header: actionType === 'add' ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                color: colorTextSecondary,
                fontSize: 13
              },
              children: [_({
                id: 'current_margin'
              }), ": $", margin]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                color: colorTextSecondary,
                fontSize: 13
              },
              children: [_({
                id: 'wallet_bal'
              }), ":\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "linkColor",
                onClick: function onClick() {
                  return changeAmount(Number(userTokenBalance));
                },
                children: userTokenBalance
              })]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                color: colorTextSecondary,
                fontSize: 13
              },
              children: [_({
                id: 'max_removable'
              }), ":", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "linkColor",
                onClick: function onClick() {
                  return changeAmount(parseFloat(maxRemovable));
                },
                children: maxRemovable
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                color: colorTextSecondary,
                fontSize: 13
              },
              children: [_({
                id: 'current_margin'
              }), ": ", margin]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: data && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Leverage",
            children: [data.oldLeverage, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRightOutlined/* default */.Z, {}), " ", data.newLeverage]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Margin Rate",
            children: [data.oldMr, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRightOutlined/* default */.Z, {}), " ", data.newMr]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Maintenance Margin Rate",
            children: data.mmr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "EST Liq. Price",
            children: ["$", userLiqPrice, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRightOutlined/* default */.Z, {}), "  $", data.newLiqPrice]
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
          children: actionType === 'add' ? _({
            id: 'incrase_margin'
          }) : _({
            id: 'withdraw_margin'
          })
        })
      })]
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var Content = function Content(props) {
  var defaultAction = props.defaultAction;

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
              children: "Add Margin"
            })
          }),
          value: 'add'
        }, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "Remove Margin"
            })
          }),
          value: 'remove'
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
          transform: "translateX(".concat(actionType === 'add' ? '0' : '-100', "%)"),
          transition: 'transform .4s ease-in-out'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
            actionType: "add"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
            actionType: "remove"
          }))
        })]
      })
    })]
  });
};

var Margin = function Margin(props) {
  var show = props.show,
      onClose = props.onClose;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: true,
      maskClosable: false,
      title: "Edit Margin",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var components_Margin = (Margin);

/***/ })

}]);