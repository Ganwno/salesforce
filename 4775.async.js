"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4775],{

/***/ 84775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EditLiq; }
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
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 1 modules
var spin = __webpack_require__(57953);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(48054);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(31530);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowDownOutlined.js + 1 modules
var ArrowDownOutlined = __webpack_require__(77171);
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
;// CONCATENATED MODULE: ./src/pages/pools/components/EditLiq/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/ahooks/es/useDebounceFn/index.js + 4 modules
var useDebounceFn = __webpack_require__(40238);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/pools/components/EditLiq/index.tsx





var _excluded = ["defaultAction"],
    _excluded2 = ["show", "onClose"];














var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var DescItem = function DescItem(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return /*#__PURE__*/_jsxs(Row, {
    children: [/*#__PURE__*/_jsx(Col, {
      children: label
    }), /*#__PURE__*/_jsx(Col, {
      children: children
    })]
  });
};

var ActionCard = function ActionCard(_ref2) {
  var defalutPool = _ref2.defalutPool,
      actionType = _ref2.actionType;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      poolTokenExtList = _useModel.poolTokenExtList,
      updataTokens = _useModel.updataTokens;

  if (!wallet || !chain) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      boxShadow = _theme$useToken$token.boxShadow,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

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

  var _useState7 = (0,react.useState)(defalutPool),
      _useState8 = slicedToArray_default()(_useState7, 2),
      currentPool = _useState8[0],
      setCurrentPool = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      calcing = _useState10[0],
      setCalcing = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      data = _useState12[0],
      setData = _useState12[1];

  var maxable = (0,react.useMemo)(function () {
    return {
      label: 'Balance',
      value: currentPool.userTokenBalance
    };
  }, [currentPool]);
  var payUSD = (0,react.useMemo)(function () {
    if (currentPool && amountIn) {
      return (Number(amountIn) * Number(currentPool.userOraclePrice)).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return '';
  }, [currentPool, amountIn]);

  var _handleInChange = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var _yield$calcAddLiqOut, _yield$calcAddLiqOut2, _data, err;

    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setCalcing(true);
            _context.next = 3;
            return (0,contract/* calcAddLiqOut */.UL)({
              chain: chain,
              wallet: wallet,
              token: currentPool,
              amount: amountIn
            });

          case 3:
            _yield$calcAddLiqOut = _context.sent;
            _yield$calcAddLiqOut2 = slicedToArray_default()(_yield$calcAddLiqOut, 2);
            _data = _yield$calcAddLiqOut2[0];
            err = _yield$calcAddLiqOut2[1];
            setCalcing(false);

            if (!err) {
              _context.next = 11;
              break;
            }

            message/* default.error */.ZP.error(err.error);
            return _context.abrupt("return");

          case 11:
            if (_data) {
              setData({
                amountOut: _data.amountOut || '',
                increasedPoolShare: _data.increasedPoolShare || ''
              });
            }

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [chain, wallet, currentPool, amountIn]);

  var _useDebounceFn = (0,useDebounceFn/* default */.Z)(_handleInChange, {
    wait: 500
  }),
      handleOutChange = _useDebounceFn.run;

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
    handleOutChange();
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var _yield$addLiq, _yield$addLiq2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setSubmiting(true);
              _context2.next = 3;
              return (0,contract/* addLiq */.vL)({
                chain: chain,
                wallet: wallet,
                token: currentPool,
                amount: amountIn
              });

            case 3:
              _yield$addLiq = _context2.sent;
              _yield$addLiq2 = slicedToArray_default()(_yield$addLiq, 2);
              ret = _yield$addLiq2[0];
              err = _yield$addLiq2[1];

              if (!ret) {
                _context2.next = 12;
                break;
              }

              if (!ret.hash) {
                _context2.next = 12;
                break;
              }

              message/* default.success */.ZP.success('addLiq' + ret.hash);
              _context2.next = 12;
              return updataTokens();

            case 12:
              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              setSubmiting(false);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: submiting,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "hayMarginWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        amount: amountIn,
        currentToken: currentPool,
        tokenList: poolTokenExtList,
        onAmountChange: changeAmount,
        onTokenChange: function onTokenChange(token) {
          setCurrentPool(token);
          handleOutChange();
        },
        header: currentPool && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12
            },
            children: ["Pay: ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: ["$", payUSD]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {
              return changeAmount(Number(maxable.value));
            },
            children: [maxable.label, ": ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: maxable.value
            })]
          })]
        }),
        maxValue: Number(maxable.value) || 0
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "arrow",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDownOutlined/* default */.Z, {
          style: {
            color: colorTextSecondary
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "card",
        style: {
          background: colorInfoBg,
          marginLeft: 0
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12
            },
            children: [currentPool.lpSymbol, " token to receive"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12
            },
            children: "Pool share"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "value",
          children: [calcing ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default.Button */.Z.Button, {
            active: true
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 24,
              fontWeight: 500
            },
            children: data && data.amountOut || ' '
          }), calcing ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default.Button */.Z.Button, {
            active: true
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 24,
              fontWeight: 500
            },
            children: [data && data.increasedPoolShare || ' ', "%"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
        height: 50,
        onClick: handleSubmit,
        conditions: [{
          condition: !!errorMsg,
          text: errorMsg,
          type: 'default',
          onClick: function onClick() {}
        }, {
          condition: !amountIn,
          text: 'Input Amount',
          type: 'primary',
          onClick: function onClick() {}
        }],
        children: "Add Liquidity"
      })]
    })
  });
};

var RemoveActionCard = function RemoveActionCard(_ref5) {
  var defalutPool = _ref5.defalutPool,
      actionType = _ref5.actionType;

  var _useModel2 = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel2.chain,
      wallet = _useModel2.wallet,
      osdData = _useModel2.osdData,
      poolTokenExtList = _useModel2.poolTokenExtList,
      updataTokens = _useModel2.updataTokens;

  if (!wallet || !chain || !osdData) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});

  var _useIntl2 = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl2.formatMessage;

  var _theme$useToken2 = theme/* default.useToken */.Z.useToken(),
      _theme$useToken2$toke = _theme$useToken2.token,
      colorPrimary = _theme$useToken2$toke.colorPrimary,
      boxShadow = _theme$useToken2$toke.boxShadow,
      colorInfoBg = _theme$useToken2$toke.colorInfoBg,
      colorBgContainer = _theme$useToken2$toke.colorBgContainer,
      colorText = _theme$useToken2$toke.colorText,
      colorTextSecondary = _theme$useToken2$toke.colorTextSecondary;

  var _useState13 = (0,react.useState)(false),
      _useState14 = slicedToArray_default()(_useState13, 2),
      submiting = _useState14[0],
      setSubmiting = _useState14[1];

  var _useState15 = (0,react.useState)(0),
      _useState16 = slicedToArray_default()(_useState15, 2),
      amountIn = _useState16[0],
      setAmountIn = _useState16[1];

  var _useState17 = (0,react.useState)(''),
      _useState18 = slicedToArray_default()(_useState17, 2),
      errorMsg = _useState18[0],
      setErrorMsg = _useState18[1];

  var _useState19 = (0,react.useState)(defalutPool),
      _useState20 = slicedToArray_default()(_useState19, 2),
      currentPool = _useState20[0],
      setCurrentPool = _useState20[1];

  var _useState21 = (0,react.useState)(false),
      _useState22 = slicedToArray_default()(_useState21, 2),
      calcing = _useState22[0],
      setCalcing = _useState22[1];

  var _useState23 = (0,react.useState)(),
      _useState24 = slicedToArray_default()(_useState23, 2),
      data = _useState24[0],
      setData = _useState24[1];

  var maxable = (0,react.useMemo)(function () {
    return {
      label: 'Balance',
      value: currentPool.userLpBalance
    };
  }, [currentPool]);
  var payUSD = (0,react.useMemo)(function () {
    if (currentPool && amountIn) {
      return (Number(amountIn) * Number(currentPool.userOraclePrice)).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return '';
  }, [currentPool, amountIn]);

  var _handleInChange = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
    var _yield$calcRemoveLiqI, _yield$calcRemoveLiqI2, _data, err;

    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            setCalcing(true);
            _context3.next = 3;
            return (0,contract/* calcRemoveLiqIn */.kT)({
              chain: chain,
              wallet: wallet,
              token: currentPool,
              amount: amountIn,
              osdData: osdData
            });

          case 3:
            _yield$calcRemoveLiqI = _context3.sent;
            _yield$calcRemoveLiqI2 = slicedToArray_default()(_yield$calcRemoveLiqI, 2);
            _data = _yield$calcRemoveLiqI2[0];
            err = _yield$calcRemoveLiqI2[1];
            setCalcing(false);

            if (!err) {
              _context3.next = 11;
              break;
            }

            message/* default.error */.ZP.error(err.error);
            return _context3.abrupt("return");

          case 11:
            if (_data) {
              setData(objectSpread2_default()({}, _data));
            }

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [chain, wallet, currentPool, amountIn]);

  var _useDebounceFn2 = (0,useDebounceFn/* default */.Z)(_handleInChange, {
    wait: 500
  }),
      handleOutChange = _useDebounceFn2.run;

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
    handleOutChange();
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref7 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var _yield$removeLiq, _yield$removeLiq2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setSubmiting(true);
              _context4.next = 3;
              return (0,contract/* removeLiq */.o$)({
                chain: chain,
                wallet: wallet,
                token: currentPool,
                amount: amountIn
              });

            case 3:
              _yield$removeLiq = _context4.sent;
              _yield$removeLiq2 = slicedToArray_default()(_yield$removeLiq, 2);
              ret = _yield$removeLiq2[0];
              err = _yield$removeLiq2[1];

              if (!ret) {
                _context4.next = 12;
                break;
              }

              if (!ret.hash) {
                _context4.next = 12;
                break;
              }

              message/* default.success */.ZP.success('removeLiq' + ret.hash);
              _context4.next = 12;
              return updataTokens();

            case 12:
              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              setSubmiting(false);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleSubmit() {
      return _ref7.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: submiting,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "hayMarginWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        amount: amountIn,
        currentToken: currentPool,
        tokenList: poolTokenExtList,
        onAmountChange: changeAmount,
        onTokenChange: function onTokenChange(token) {
          setCurrentPool(token);
          handleOutChange();
        },
        header: currentPool && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12
            },
            children: "Burn Pool share:"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {
              return changeAmount(Number(maxable.value));
            },
            children: [maxable.label, ": ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: maxable.value
            })]
          })]
        }),
        maxValue: Number(maxable.value) || 0,
        type: "lpToken"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "arrow",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDownOutlined/* default */.Z, {
          style: {
            color: colorTextSecondary
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "card",
        style: {
          background: colorInfoBg,
          marginLeft: 0
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "label",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12
            },
            children: "Receive:"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "receiveValue",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "valueWrap",
            children: [calcing ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default.Button */.Z.Button, {
              active: true
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 24,
                fontWeight: 500
              },
              children: data && data.outToken || ' '
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                src: currentPool.icon,
                tokenId: currentPool.id,
                size: 20
              }),
              style: {
                display: 'flex',
                alignItems: 'center',
                border: 'none'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                strong: true,
                style: {
                  marginLeft: 5
                },
                children: currentPool.symbol
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "valueWrap",
            children: [calcing ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default.Button */.Z.Button, {
              active: true
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 24,
                fontWeight: 500
              },
              children: data && data.outOsd || ' '
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                src: osdData.icon,
                tokenId: osdData.id,
                size: 20
              }),
              style: {
                display: 'flex',
                alignItems: 'center',
                border: 'none'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                strong: true,
                style: {
                  marginLeft: 5
                },
                children: osdData.symbol
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
        height: 50,
        onClick: handleSubmit,
        conditions: [{
          condition: !!errorMsg,
          text: errorMsg,
          type: 'default',
          onClick: function onClick() {}
        }, {
          condition: !amountIn,
          text: 'Input Amount',
          type: 'primary',
          onClick: function onClick() {}
        }],
        children: "Remove Liquidity"
      })]
    })
  });
};

var Content = function Content(_ref8) {
  var defaultAction = _ref8.defaultAction,
      rest = objectWithoutProperties_default()(_ref8, _excluded);

  var _useState25 = (0,react.useState)(),
      _useState26 = slicedToArray_default()(_useState25, 2),
      actionType = _useState26[0],
      setActionType = _useState26[1];

  (0,react.useEffect)(function () {
    setActionType(defaultAction);
  }, [defaultAction]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [10, 10],
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
              children: "Add Liquidity"
            })
          }),
          value: 'add'
        }, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "Remove Liquidity"
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
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          style: {
            display: actionType === 'add' ? "block" : 'none'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionCard, {
            defalutPool: rest.currentPool,
            actionType: "add"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          style: {
            display: actionType === 'remove' ? "block" : 'none'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(RemoveActionCard, {
            defalutPool: rest.currentPool,
            actionType: "remove"
          })
        })]
      })
    })]
  });
};

var EditLip = function EditLip(_ref9) {
  var show = _ref9.show,
      onClose = _ref9.onClose,
      rest = objectWithoutProperties_default()(_ref9, _excluded2);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: true,
      maskClosable: false,
      title: "Liquidity",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, rest))
    })
  });
};

/* harmony default export */ var EditLiq = (EditLip);

/***/ })

}]);