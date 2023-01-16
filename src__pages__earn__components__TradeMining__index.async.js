"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6348],{

/***/ 13596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ StakeAction; }
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
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 1 modules
var spin = __webpack_require__(57953);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(31530);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
;// CONCATENATED MODULE: ./src/pages/earn/components/StakeAction/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/earn/components/StakeAction/index.tsx





var _excluded = ["defaultAction"],
    _excluded2 = ["show", "onClose"];












var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var AddContent = function AddContent(_ref) {
  var defaultStake = _ref.currentStake,
      actionType = _ref.actionType;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      updateStake = _useModel.updateStake,
      stakeInfoList = _useModel.stakeInfoList;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary,
      fontSizeSM = _theme$useToken$token.fontSizeSM,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      borderRadius = _theme$useToken$token.borderRadius,
      paddingSM = _theme$useToken$token.paddingSM;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

  if (!chain || !wallet) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});

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

  var _useState7 = (0,react.useState)(defaultStake),
      _useState8 = slicedToArray_default()(_useState7, 2),
      currentStake = _useState8[0],
      setCurrentStake = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      data = _useState10[0],
      setData = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      succRet = _useState12[0],
      setSuccRet = _useState12[1];

  var maxRemovable = (0,react.useMemo)(function () {
    if (actionType === 'remove') {
      return Number(currentStake.userAccountStaked);
    } else {
      return Number(currentStake.userLpBalance);
    }
  }, [actionType, currentStake]);
  (0,react.useEffect)(function () {
    // const [_data, err] = formatEditPosition({
    //     isAdd: actionType === 'add',
    //     currentStake,
    //     amountIn: String(amountIn)
    // })
    // if (err) {
    //     console.log(err.error)
    //     setErrorMsg(err.error);
    //     return
    // }
    // setData(_data)
    setErrorMsg('');
  }, [currentStake, amountIn]);

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _yield$stake, _yield$stake2, res, error, _yield$unStake, _yield$unStake2, _res, _error;

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
              return (0,contract/* stake */.LK)({
                chain: chain,
                wallet: wallet,
                stakeItem: currentStake,
                amountIn: amountIn
              });

            case 4:
              _yield$stake = _context.sent;
              _yield$stake2 = slicedToArray_default()(_yield$stake, 2);
              res = _yield$stake2[0];
              error = _yield$stake2[1];

              if (!error) {
                _context.next = 12;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 12:
              // message.success('add' + res.hash)
              if (res) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'addMargin',
                  title: 'Stake Success',
                  hash: res.hash,
                  okText: 'Close'
                });
              }

              _context.next = 26;
              break;

            case 15:
              _context.next = 17;
              return (0,contract/* unStake */.fD)({
                chain: chain,
                wallet: wallet,
                stakeItem: currentStake,
                amountIn: amountIn
              });

            case 17:
              _yield$unStake = _context.sent;
              _yield$unStake2 = slicedToArray_default()(_yield$unStake, 2);
              _res = _yield$unStake2[0];
              _error = _yield$unStake2[1];

              if (!_error) {
                _context.next = 25;
                break;
              }

              message/* default.error */.ZP.error(_error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 25:
              if (_res) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'removeMargin',
                  title: 'Unstake Success',
                  hash: _res.hash,
                  okText: 'Close'
                });
              } // message.success('remove' + res.hash)


            case 26:
              _context.next = 28;
              return updateStake();

            case 28:
              setSubmiting(false);

            case 29:
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
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 13,
          color: colorTextSecondary
        },
        children: [" ", label]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 13,
          color: colorTextSecondary
        },
        children: [" ", children]
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
        className: "card",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          tokenList: stakeInfoList,
          currentToken: currentStake,
          onTokenChange: function onTokenChange(token) {
            setCurrentStake(token);
          },
          amount: amountIn,
          onAmountChange: changeAmount,
          minValue: 0,
          type: "lpToken",
          maxValue: maxRemovable,
          header: actionType === 'add' ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["Balance:\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "linkColor",
                onClick: function onClick() {
                  return changeAmount(maxRemovable);
                },
                children: maxRemovable
              })]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["Staked: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "linkColor",
                children: maxRemovable
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              color: colorTextSecondary,
              fontSize: fontSizeSM
            },
            children: "Stake ".concat(currentStake.lpSymbol, " to earn a ").concat(currentStake.stakeApr, " APR yield from OT fee distribution")
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            flexDirection: 'column',
            color: colorTextSecondary,
            background: colorInfoBg,
            borderRadius: borderRadius,
            padding: paddingSM,
            fontSize: fontSizeSM
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Total Staked",
            children: [currentStake.userTotalStaked, " ", currentStake.lpSymbol, " token"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Staking APR",
            children: currentStake.stakeApr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Your Staked Position",
            children: [currentStake.userAccountStaked, " ", currentStake.lpSymbol]
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
            id: 'stake'
          }) : _({
            id: 'unstake'
          })
        })
      })]
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var Content = function Content(_ref4) {
  var defaultAction = _ref4.defaultAction,
      rest = objectWithoutProperties_default()(_ref4, _excluded);

  var _useState13 = (0,react.useState)(),
      _useState14 = slicedToArray_default()(_useState13, 2),
      actionType = _useState14[0],
      setActionType = _useState14[1];

  (0,react.useEffect)(function () {
    setActionType(defaultAction);
  }, [defaultAction]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [10, 10],
    className: "Stake-Comp",
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
              children: "Stake"
            })
          }),
          value: 'add'
        }, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "Unstake"
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
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "add"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "remove"
          }))
        })]
      })
    })]
  });
};

var StackAction = function StackAction(_ref5) {
  var show = _ref5.show,
      onClose = _ref5.onClose,
      rest = objectWithoutProperties_default()(_ref5, _excluded2);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: false,
      maskClosable: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, rest))
    })
  });
};

/* harmony default export */ var StakeAction = (StackAction);

/***/ }),

/***/ 14256:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TradeMining; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./src/components/FormatNumber/index.ts
var FormatNumber = __webpack_require__(76870);
;// CONCATENATED MODULE: ./src/pages/earn/components/TradeMining/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/components/TableList/index.tsx + 1 modules
var TableList = __webpack_require__(36913);
// EXTERNAL MODULE: ./src/assets/svg/ot.svg
var ot = __webpack_require__(37373);
// EXTERNAL MODULE: ./src/pages/earn/components/StakeAction/index.tsx + 1 modules
var StakeAction = __webpack_require__(13596);
// EXTERNAL MODULE: ./src/pages/earn/components/Withdraw/index.tsx + 1 modules
var Withdraw = __webpack_require__(83630);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/earn/components/TradeMining/index.tsx














var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
function TradeMining() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      tradeStake = _useModel.tradeStake;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      stakeAction = _useState2[0],
      setStakeAction = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      witndrawProps = _useState4[0],
      setWitndrawProp = _useState4[1];

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      colorInfoBg = _theme$useToken.token.colorInfoBg;

  var data = {
    conf: {
      cardName: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 24,
          fontWeight: 500
        },
        children: "Trade mining"
      }),
      rowKey: 'name',
      header: {
        title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16,
            fontWeight: 500
          },
          children: "Trade mining"
        }),
        dataIndex: 'name',
        key: 'name',
        render: function render(text) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 16,
              fontWeight: 500
            },
            children: text
          });
        }
      },
      desc: [{
        title: formatMessage({
          id: 'h_volume'
        }),
        dataIndex: 'userVolume',
        key: 'userVolume',
        align: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber/* default */.Z, {
            value: text,
            useAbbr: true
          });
        }
      }, {
        title: formatMessage({
          id: 'your_24h_volume'
        }),
        dataIndex: 'userAccountVolume',
        key: 'userAccountVolume',
        align: 'right',
        render: function render(text) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber/* default */.Z, {
            value: text,
            useAbbr: true
          });
        }
      }, {
        title: "24".concat(formatMessage({
          id: 'h_yield'
        })),
        dataIndex: 'userTradeYield',
        key: 'userTradeYield',
        align: 'right',
        render: function render(text) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "yield_wrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "yield",
              style: {
                background: colorInfoBg
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                src: ot/* default */.Z,
                className: "yield_icon"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber/* default */.Z, {
                value: text
              })]
            })
          });
        }
      }],
      edit: [{
        title: formatMessage({
          id: 'withdraw_yield'
        }),
        dataIndex: 'yield',
        key: 'yield',
        align: 'center',
        render: function render(text, record) {
          var userTradeRewards = record.userTradeRewards;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
            type: md ? 'link' : 'primary',
            disabled: parseFloat(record.userTradeRewards) <= 0,
            onClick: function onClick() {
              setWitndrawProp({
                amount: userTradeRewards,
                onClose: function onClose() {
                  return setWitndrawProp(undefined);
                },
                show: true,
                title: 'Trade Yield',
                type: 'trade'
              });
            },
            children: [userTradeRewards || '0', " OT"]
          });
        }
      }]
    },
    list: tradeStake
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "stakeTableWrap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TableList/* default */.Z, objectSpread2_default()({}, data)), stakeAction && /*#__PURE__*/(0,react.createElement)(StakeAction["default"], objectSpread2_default()(objectSpread2_default()({}, stakeAction), {}, {
      key: stakeAction.currentStake.id
    })), witndrawProps && /*#__PURE__*/(0,react.createElement)(Withdraw["default"], objectSpread2_default()(objectSpread2_default()({}, witndrawProps), {}, {
      key: witndrawProps.current && witndrawProps.current.id
    }))]
  });
}

/***/ })

}]);