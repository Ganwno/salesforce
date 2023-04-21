"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[632],{

/***/ 69718:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Borrow; }
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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 7 modules
var collapse = __webpack_require__(15045);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(83062);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(75081);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 3 modules
var segmented = __webpack_require__(92783);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(24969);
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(66419);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/Icon.js
var Icon = __webpack_require__(16165);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/MessageLoading/index.tsx






var Svg = function Svg() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      transform: "translate(20 50)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
        cx: "0",
        cy: "0",
        r: "6",
        fill: "#03cdc1",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("animateTransform", {
          attributeName: "transform",
          type: "scale",
          begin: "-0.3440366972477064s",
          calcMode: "spline",
          keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
          values: "0;1;0",
          keyTimes: "0;0.5;1",
          dur: "0.9174311926605504s",
          repeatCount: "indefinite"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      transform: "translate(40 50)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
        cx: "0",
        cy: "0",
        r: "6",
        fill: "#52c4d1",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("animateTransform", {
          attributeName: "transform",
          type: "scale",
          begin: "-0.2293577981651376s",
          calcMode: "spline",
          keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
          values: "0;1;0",
          keyTimes: "0;0.5;1",
          dur: "0.9174311926605504s",
          repeatCount: "indefinite"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      transform: "translate(60 50)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
        cx: "0",
        cy: "0",
        r: "6",
        fill: "#6abee4",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("animateTransform", {
          attributeName: "transform",
          type: "scale",
          begin: "-0.1146788990825688s",
          calcMode: "spline",
          keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
          values: "0;1;0",
          keyTimes: "0;0.5;1",
          dur: "0.9174311926605504s",
          repeatCount: "indefinite"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      transform: "translate(80 50)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
        cx: "0",
        cy: "0",
        r: "6",
        fill: "#8ab9ff",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("animateTransform", {
          attributeName: "transform",
          type: "scale",
          begin: "0s",
          calcMode: "spline",
          keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
          values: "0;1;0",
          keyTimes: "0;0.5;1",
          dur: "0.9174311926605504s",
          repeatCount: "indefinite"
        })
      })
    })]
  });
};

var MessageLoadingIcon = function MessageLoadingIcon(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, objectSpread2_default()({
    component: Svg
  }, props));
};

/* harmony default export */ var MessageLoading = (MessageLoadingIcon);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 3 modules
var contract = __webpack_require__(8227);
;// CONCATENATED MODULE: ./src/pages/pools/components/Borrow/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/ahooks/es/useDebounceFn/index.js + 4 modules
var useDebounceFn = __webpack_require__(40238);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
;// CONCATENATED MODULE: ./src/pages/pools/components/Borrow/index.tsx






















var Panel = collapse/* default.Panel */.Z.Panel;
var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var BorrowContent = function BorrowContent(_ref) {
  var defaultTarget = _ref.defaultTarget,
      _onClose = _ref.onClose;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      poolTokenExtList = _useModel.poolTokenExtList,
      updataTokens = _useModel.updataTokens,
      wallet = _useModel.wallet,
      updateStake = _useModel.updateStake;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      succRet = _useState2[0],
      setSuccRet = _useState2[1];

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  if (poolTokenExtList.length === 0) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  (0,react.useEffect)(function () {
    // if (current) return;
    var find = poolTokenExtList.find(function (item) {
      return item.id === defaultTarget;
    });
    if (find) setCurrent(find);
  }, [defaultTarget]);
  var canBorrowList = (0,react.useMemo)(function () {
    return poolTokenExtList.filter(function (item) {
      return item.assets.collateralCredit > 0;
    });
  }, [poolTokenExtList]);

  var _useState3 = (0,react.useState)([{
    key: 0,
    amount: '',
    amountUSD: '',
    precent: 0,
    showSelect: false,
    targetToken: undefined
  }]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      dynamicForm = _useState4[0],
      setDynamicForm = _useState4[1];

  var add = function add() {
    var _tmp = {
      key: new Date().getTime(),
      amount: '',
      amountUSD: '',
      precent: 0,
      showSelect: false,
      targetToken: undefined
    };
    setDynamicForm([].concat(toConsumableArray_default()(dynamicForm), [_tmp]));
  };

  var _useState5 = (0,react.useState)('0'),
      _useState6 = slicedToArray_default()(_useState5, 2),
      borrowLimit = _useState6[0],
      setBorrowLimit = _useState6[1];

  var _useState7 = (0,react.useState)('-'),
      _useState8 = slicedToArray_default()(_useState7, 2),
      borrowRF = _useState8[0],
      setBorrowRF = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      calcing = _useState10[0],
      setCalcing = _useState10[1];

  var _calcBorrowInfo = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var arr, _yield$calcBorrowLimi, _yield$calcBorrowLimi2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!current || !chain || !wallet)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              arr = [];
              dynamicForm.forEach(function (item) {
                if (item.targetToken && item.amount) {
                  arr.push({
                    amount: item.amount,
                    targetToken: item.targetToken
                  });
                }
              }); // if (arr.length === 0) {
              //     setBorrowLimit('0')
              //     setBorrowRF('-')
              //     return
              // }

              setCalcing(true);
              _context.next = 7;
              return (0,contract/* calcBorrowLimit */.xO)({
                chain: chain,
                wallet: wallet,
                outToken: current,
                inTokenList: arr,
                amountOut: Number(amount) || 0,
                tokenList: poolTokenExtList
              });

            case 7:
              _yield$calcBorrowLimi = _context.sent;
              _yield$calcBorrowLimi2 = slicedToArray_default()(_yield$calcBorrowLimi, 2);
              ret = _yield$calcBorrowLimi2[0];
              err = _yield$calcBorrowLimi2[1];
              setCalcing(false);

              if (ret) {
                setBorrowLimit(ret.limit);
                setBorrowRF(ret.risk);
              }

              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _calcBorrowInfo() {
      return _ref2.apply(this, arguments);
    };
  }();

  var calcBorrowInfo = (0,useDebounceFn/* default */.Z)(_calcBorrowInfo, {
    wait: 1000
  });

  var update = function update(id, key, value) {
    var _tmp = dynamicForm.map(function (item) {
      if (item.key === id) {
        var newItem = item;
        newItem[key] = value; // 处理联动

        if (item.targetToken) {
          if (key === 'precent') {
            newItem.amount = (Number(item.targetToken.userTokenBalanceLabel) * value / 100).toFixed();
          }

          if (key === "amount") {
            newItem.precent = Math.round(value / Number(item.targetToken.userTokenBalanceLabel) * 100);
          }
        }

        return newItem;
      }

      return item;
    });

    setDynamicForm(_tmp);
    calcBorrowInfo.run();
  };

  var _handleRemove = function handleRemove(id) {
    setDynamicForm(dynamicForm.filter(function (item) {
      return item.key !== id;
    }));
    calcBorrowInfo.run();
  };

  (0,react.useEffect)(function () {
    calcBorrowInfo.run();
  }, []);

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      boxShadow = _theme$useToken$token.boxShadow,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var amountRef = (0,react.useRef)();

  var _useState11 = (0,react.useState)(null),
      _useState12 = slicedToArray_default()(_useState11, 2),
      current = _useState12[0],
      setCurrent = _useState12[1];

  var _useState13 = (0,react.useState)(''),
      _useState14 = slicedToArray_default()(_useState13, 2),
      amount = _useState14[0],
      setAmount = _useState14[1];

  var _useState15 = (0,react.useState)(false),
      _useState16 = slicedToArray_default()(_useState15, 2),
      submiting = _useState16[0],
      setSubmiting = _useState16[1];

  var changeValue = function changeValue(value) {
    setAmount(value);
    calcBorrowInfo.run();
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var arr, _yield$borrow, _yield$borrow2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!chain || !current || !wallet || !wallet.isConnected)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              arr = [];
              dynamicForm.forEach(function (item) {
                if (item.targetToken && item.amount) {
                  arr.push({
                    amount: item.amount,
                    targetToken: item.targetToken
                  });
                }
              }); // if (arr.length === 0) return

              setSubmiting(true);
              _context2.next = 7;
              return (0,contract/* borrow */.sI)({
                chain: chain,
                wallet: wallet,
                outToken: current,
                inTokenList: arr,
                amountOut: Number(amount) || 0
              });

            case 7:
              _yield$borrow = _context2.sent;
              _yield$borrow2 = slicedToArray_default()(_yield$borrow, 2);
              ret = _yield$borrow2[0];
              err = _yield$borrow2[1];

              if (!ret) {
                _context2.next = 16;
                break;
              }

              setSuccRet({
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);

                  _onClose();
                },
                title: formatMessage({
                  id: 'pools_borr_borrow_success'
                }),
                type: 'borrow',
                hash: ret.hash,
                okText: formatMessage({
                  id: 'pools_borr_success_close'
                })
              });
              updateStake();
              _context2.next = 16;
              return updataTokens();

            case 16:
              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              setSubmiting(false);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [10, 10],
    children: [dynamicForm.map(function (item) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: "24",
        className: "cardWrap",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          amount: Number(item.amount),
          tokenList: canBorrowList,
          onAmountChange: function onAmountChange(value) {
            update(item.key, 'amount', value);
          },
          onTokenChange: function onTokenChange(token) {
            return update(item.key, 'targetToken', token);
          },
          currentToken: item.targetToken,
          maxValue: item.targetToken && Number(item.targetToken.userTokenBalance) || 0,
          header: item.targetToken ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: [formatMessage({
                id: 'pools_borr_pay'
              }), ":$", (0,utils/* calcUSDByTokenAmount */.Xs)(item.amount, item.targetToken.userBorrowPrice, 2)]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              onClick: function onClick() {
                update(item.key, 'amount', item.targetToken && item.targetToken.userTokenBalance);
              },
              children: [formatMessage({
                id: 'pools_borr_bal'
              }), ": ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                style: {
                  color: colorPrimary
                },
                children: Number(item.targetToken.userTokenBalance)
              })]
            })]
          }) : '',
          idKey: item.key,
          showRemove: dynamicForm.length > 1,
          handleRemove: function handleRemove(idKey) {
            return _handleRemove(idKey);
          }
        })
      }, item.key);
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 24,
      className: "add",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.Z, {
        onClick: add,
        style: {
          color: colorPrimary
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        amount: Number(amount),
        tokenList: canBorrowList,
        onAmountChange: function onAmountChange(value) {
          changeValue(value);
        },
        onTokenChange: function onTokenChange(token) {
          return setCurrent(token);
        },
        currentToken: current,
        maxValue: Number(borrowLimit) || 0,
        header: current && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {
              setAmount(borrowLimit);
              calcBorrowInfo.run();
            },
            children: [formatMessage({
              id: 'pools_borr_limit'
            }), " :", calcing ? /*#__PURE__*/(0,jsx_runtime.jsx)(MessageLoading, {
              style: {
                color: colorPrimary
              }
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: borrowLimit
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: [formatMessage({
              id: 'pools_borr_borrowed'
            }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: current && Number(current === null || current === void 0 ? void 0 : current.userDebt).toFixed(4)
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
      span: 24,
      className: "tips",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "tip",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 12,
            color: colorTextSecondary
          },
          children: formatMessage({
            id: 'apr'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 12,
            color: colorTextSecondary
          },
          children: [current === null || current === void 0 ? void 0 : current.apr, "%"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "tip",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
          title: formatMessage({
            id: 'pools_borr_rf_tip'
          }),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            underline: true,
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: formatMessage({
              id: 'pools_borr_rf'
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 12,
            color: colorTextSecondary
          },
          children: borrowRF
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
        onClick: handleSubmit,
        loading: submiting,
        conditions: [{
          condition: !current,
          text: formatMessage({
            id: 'select_asset'
          }),
          type: 'primary',
          onClick: function onClick() {// setShowSelect(true) 
          }
        }, {
          condition: !amount,
          text: formatMessage({
            id: 'entry_amount'
          }),
          type: 'default',
          onClick: function onClick() {
            if (amountRef.current) amountRef.current.focus();
          }
        }, {
          condition: parseFloat(borrowRF) < 1,
          text: formatMessage({
            id: 'pools_repay_btn_rf'
          }),
          type: 'primary',
          danger: true,
          onClick: function onClick() {}
        }, {
          condition: borrowLimit < amount,
          text: formatMessage({
            id: 'pools_borr_btn_exceeded'
          }),
          type: 'primary',
          onClick: function onClick() {
            if (amountRef.current) amountRef.current.focus();
          }
        }],
        children: formatMessage({
          id: 'pools_borr_btn'
        })
      })
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var ReapyContent = function ReapyContent(_ref4) {
  var defaultTarget = _ref4.defaultTarget,
      _onClose2 = _ref4.onClose;

  var _useModel2 = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel2.chain,
      wallet = _useModel2.wallet,
      poolTokenExtList = _useModel2.poolTokenExtList,
      updataTokens = _useModel2.updataTokens,
      updateStake = _useModel2.updateStake;

  var _useIntl2 = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  if (!wallet || !chain) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});

  var _useIntl3 = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl3.formatMessage;

  var _theme$useToken2 = theme/* default.useToken */.Z.useToken(),
      _theme$useToken2$toke = _theme$useToken2.token,
      colorPrimary = _theme$useToken2$toke.colorPrimary,
      boxShadow = _theme$useToken2$toke.boxShadow,
      colorInfoBg = _theme$useToken2$toke.colorInfoBg,
      colorBgContainer = _theme$useToken2$toke.colorBgContainer,
      colorText = _theme$useToken2$toke.colorText,
      colorTextSecondary = _theme$useToken2$toke.colorTextSecondary,
      colorErrorText = _theme$useToken2$toke.colorErrorText;

  var _useState17 = (0,react.useState)(false),
      _useState18 = slicedToArray_default()(_useState17, 2),
      submiting = _useState18[0],
      setSubmiting = _useState18[1];

  var _useState19 = (0,react.useState)(0),
      _useState20 = slicedToArray_default()(_useState19, 2),
      amountIn = _useState20[0],
      setAmountIn = _useState20[1];

  var _useState21 = (0,react.useState)(''),
      _useState22 = slicedToArray_default()(_useState21, 2),
      errorMsg = _useState22[0],
      setErrorMsg = _useState22[1];

  var _useState23 = (0,react.useState)(),
      _useState24 = slicedToArray_default()(_useState23, 2),
      currentPool = _useState24[0],
      setCurrentPool = _useState24[1];

  var _useState25 = (0,react.useState)([]),
      _useState26 = slicedToArray_default()(_useState25, 2),
      tokenOuts = _useState26[0],
      setTokenOuts = _useState26[1];

  var _useState27 = (0,react.useState)(false),
      _useState28 = slicedToArray_default()(_useState27, 2),
      calcing = _useState28[0],
      setCalcing = _useState28[1];

  var _useState29 = (0,react.useState)(),
      _useState30 = slicedToArray_default()(_useState29, 2),
      succRet = _useState30[0],
      setSuccRet = _useState30[1];

  var _useState31 = (0,react.useState)(),
      _useState32 = slicedToArray_default()(_useState31, 2),
      data = _useState32[0],
      setData = _useState32[1];

  (0,react.useEffect)(function () {
    // if (current) return;
    var find = poolTokenExtList.find(function (item) {
      return item.id === defaultTarget;
    });
    if (find) setCurrentPool(find);
  }, [defaultTarget]);
  (0,react.useEffect)(function () {
    if (currentPool) {
      var collaterals = currentPool.positions.collaterals;
      var outs = [];
      collaterals.forEach(function (coll) {
        var data = poolTokenExtList.find(function (item) {
          return item.id.toLowerCase() === coll.token.toLowerCase();
        });

        if (data && Number(coll.amount) > 0) {
          outs.push({
            token: data,
            max: Number((0,utils/* formatSat */.gB)(coll.amount, data.tokenDecimal, 0)) || 0,
            amount: 0,
            visibility: collaterals.length === 1
          });
        }
      });
      setTokenOuts(outs);
    }
  }, [currentPool]);
  var maxable = (0,react.useMemo)(function () {
    if (currentPool) {
      return {
        label: formatMessage({
          id: 'pools_reapy_max'
        }),
        value: currentPool.userDebt
      };
    } else {
      return {
        label: formatMessage({
          id: 'pools_reapy_max'
        }),
        value: 0
      };
    }
  }, [currentPool]);

  var _handleInChange = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
    var _yield$calcRepayRiskR, _yield$calcRepayRiskR2, _data, err;

    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!currentPool || !chain || !wallet)) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return");

          case 2:
            setCalcing(true);
            _context3.next = 5;
            return (0,contract/* calcRepayRiskRate */._p)({
              amountIn: amountIn,
              tokenIn: currentPool,
              tokenOuts: tokenOuts,
              chain: chain,
              wallet: wallet
            });

          case 5:
            _yield$calcRepayRiskR = _context3.sent;
            _yield$calcRepayRiskR2 = slicedToArray_default()(_yield$calcRepayRiskR, 2);
            _data = _yield$calcRepayRiskR2[0];
            err = _yield$calcRepayRiskR2[1];
            setCalcing(false);

            if (!err) {
              _context3.next = 13;
              break;
            }

            message/* default.error */.ZP.error(err.error);
            return _context3.abrupt("return");

          case 13:
            if (_data) {
              setData(_data);
            }

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [chain, wallet, currentPool, amountIn, tokenOuts]);

  var rmColl = (0,react.useMemo)(function () {
    return tokenOuts.reduce(function (a, b) {
      return a + b.amount;
    }, 0);
  }, [tokenOuts]);

  var _useDebounceFn = (0,useDebounceFn/* default */.Z)(_handleInChange, {
    wait: 500
  }),
      handleOutChange = _useDebounceFn.run;

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
    handleOutChange();
  };

  var update = function update(id, key, value) {
    var _tmp = tokenOuts.map(function (item) {
      if (item.token.id === id) {
        var newItem = item;
        newItem[key] = value;
        return newItem;
      }

      return item;
    });

    setTokenOuts(_tmp);
    handleOutChange();
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref6 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var _yield$repay, _yield$repay2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (currentPool) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              setSubmiting(true);
              _context4.next = 5;
              return (0,contract/* repay */.S4)({
                chain: chain,
                wallet: wallet,
                amountIn: amountIn,
                tokenOuts: tokenOuts,
                tokenIn: currentPool
              });

            case 5:
              _yield$repay = _context4.sent;
              _yield$repay2 = slicedToArray_default()(_yield$repay, 2);
              ret = _yield$repay2[0];
              err = _yield$repay2[1];

              if (!ret) {
                _context4.next = 14;
                break;
              }

              setSuccRet({
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);

                  _onClose2();
                },
                title: 'Repay success',
                type: 'repay',
                hash: ret.hash,
                okText: 'Close'
              });
              updateStake();
              _context4.next = 14;
              return updataTokens();

            case 14:
              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              setSubmiting(false);

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleSubmit() {
      return _ref6.apply(this, arguments);
    };
  }();

  var canReapyList = (0,react.useMemo)(function () {
    return poolTokenExtList.filter(function (item) {
      return Number(item.userTotalCol) > 0;
    });
  }, [poolTokenExtList]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: submiting,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "hayMarginWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        amount: amountIn,
        currentToken: currentPool,
        tokenList: canReapyList,
        onAmountChange: changeAmount,
        onTokenChange: function onTokenChange(token) {
          setCurrentPool(token);
          handleOutChange();
        },
        header: currentPool && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {
              return changeAmount(Number(maxable.value));
            },
            children: [maxable.label, ": ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              style: {
                color: colorPrimary
              },
              children: [maxable.value, " ", currentPool.symbol]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12
            },
            onClick: function onClick() {
              return changeAmount(Number(maxable.value));
            },
            children: [formatMessage({
              id: 'pools_reapy_wallet_bal'
            }), ": ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: currentPool.userTokenBalanceLabel
            })]
          })]
        }),
        maxValue: Number(maxable.value) || 0
      }), tokenOuts.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "collapseWrap",
        style: {
          background: colorInfoBg,
          borderRadius: 8,
          marginTop: 10
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
          defaultActiveKey: ['1'],
          ghost: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Panel, {
            header: formatMessage({
              id: 'pools_reapy_coll'
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
              children: tokenOuts.map(function (item) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
                  onClick: function onClick() {
                    return update(item.token.id, 'visibility', !item.visibility);
                  },
                  type: "default",
                  style: {
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 35
                  },
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                    size: 25,
                    src: item.token.icon,
                    tokenId: item.token.id
                  }),
                  children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    style: {
                      marginLeft: 4
                    },
                    children: item.token.symbol
                  }), "  "]
                }, item.token.id);
              })
            })
          }, "1")
        })
      }), tokenOuts.map(function (item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            marginTop: 10,
            display: tokenOuts.length > 1 && !item.visibility ? 'none' : 'block'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
            amount: item.amount,
            currentToken: item.token,
            tokenList: poolTokenExtList,
            onAmountChange: function onAmountChange(value) {
              return update(item.token.id, 'amount', value);
            },
            onTokenChange: function onTokenChange(token) {
              update(item.token.id, 'token', token);
            },
            header: item.token && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "label",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                style: {
                  fontSize: 12
                },
                children: [formatMessage({
                  id: 'pools_reapy_withdraw'
                }), ": $", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: (Number(item.token.userBorrowPrice) * item.amount).toFixed(4)
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                style: {
                  fontSize: 12,
                  color: colorTextSecondary
                },
                onClick: function onClick() {
                  return update(item.token.id, 'amount', item.max);
                },
                children: [formatMessage({
                  id: 'pools_reapy_max_withdraw'
                }), ": ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                  style: {
                    color: colorPrimary
                  },
                  children: [item.max.toFixed(4), " "]
                })]
              })]
            }),
            maxValue: Number(item.max) || 0,
            canSelectToken: false
          })
        }, item.token.id);
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "tips",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "tip",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: formatMessage({
              id: 'apr'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: [currentPool === null || currentPool === void 0 ? void 0 : currentPool.apr, "%"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "tip",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: formatMessage({
              id: 'pools_reapy_debt'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: [currentPool === null || currentPool === void 0 ? void 0 : currentPool.userDebt, " ", currentPool === null || currentPool === void 0 ? void 0 : currentPool.symbol]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "tip",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
            title: formatMessage({
              id: 'pools_borr_rf_tip'
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              underline: true,
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: formatMessage({
                id: 'pools_borr_rf'
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: parseFloat(data) >= 1 ? colorTextSecondary : colorErrorText
            },
            children: data
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
          condition: !amountIn && rmColl === 0,
          text: formatMessage({
            id: 'entry_amount'
          }),
          type: 'primary',
          onClick: function onClick() {}
        }, {
          condition: parseFloat(data) < 1,
          text: formatMessage({
            id: 'pools_repay_btn_rf'
          }),
          type: 'primary',
          danger: true,
          onClick: function onClick() {}
        }, {
          condition: !!amountIn && rmColl === 0,
          text: formatMessage({
            id: 'pools_repay_btn_repay'
          }),
          type: 'primary',
          onClick: handleSubmit
        }, {
          condition: !amountIn && rmColl > 0,
          text: formatMessage({
            id: 'pools_repay_btn_rm_coll'
          }),
          type: 'primary',
          onClick: handleSubmit
        }],
        children: formatMessage({
          id: 'pools_repay_btn'
        })
      }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
    })
  });
};

var Content = function Content(props) {
  var defaultAction = props.defaultAction,
      defaultTarget = props.defaultTarget;

  var _useIntl4 = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl4.formatMessage;

  var _useState33 = (0,react.useState)(),
      _useState34 = slicedToArray_default()(_useState33, 2),
      actionType = _useState34[0],
      setActionType = _useState34[1];

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
            className: "SegmentedWrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: formatMessage({
                id: 'pools_borr_seg_add'
              })
            })
          }),
          value: 'borrow'
        }, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            className: "SegmentedWrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: formatMessage({
                id: 'pools_borr_seg_rm'
              })
            })
          }),
          value: 'repay'
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
            display: actionType === 'borrow' ? "block" : 'none'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(BorrowContent, objectSpread2_default()({}, props))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          style: {
            display: actionType === 'repay' ? "block" : 'none'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ReapyContent, objectSpread2_default()({}, props))
        })]
      })
    })]
  });
};

var Borrow = function Borrow(props) {
  var _useIntl5 = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl5.formatMessage;

  var show = props.show,
      onClose = props.onClose;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: true,
      title: formatMessage({
        id: 'pools_th_borrow'
      }),
      maskClosable: false,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var components_Borrow = (Borrow);

/***/ }),

/***/ 13111:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Details; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13769);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/list/index.js + 2 modules
var list = __webpack_require__(51158);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/echarts/index.js + 541 modules
var echarts = __webpack_require__(63228);
;// CONCATENATED MODULE: ./src/pages/pools/components/Details/chart.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var chartmodules = ({"chart":"chart___zk4s6"});
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(70794);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/pools/components/Details/chart.tsx






var COLOR = '#20BBBB';
var xMin = 0;
var xMax = 100;

var Chart = function Chart(_ref) {
  var detail = _ref.detail;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var utilRate = detail.utilRate,
      assets = detail.assets,
      id = detail.id;
  var base = assets.base,
      optimal = assets.optimal,
      slope1 = assets.slope1,
      slope2 = assets.slope2;

  var generateData = function generateData() {
    var yMin = base;
    var x = optimal;
    var y = slope1;
    var yMax = slope2;
    var k1 = new bignumber/* default */.Z(y).minus(yMin).div(new bignumber/* default */.Z(x).minus(xMin));
    var k2 = new bignumber/* default */.Z(yMax).minus(y).div(new bignumber/* default */.Z(xMax).minus(x));
    var data = [];

    for (var i = xMin; i < xMax + 1; i++) {
      if (i < x) {
        data.push(k1.multipliedBy(new bignumber/* default */.Z(i).minus(xMin)).plus(yMin).toFixed(2));
      } else {
        data.push(k2.multipliedBy(new bignumber/* default */.Z(i).minus(x)).plus(y).toFixed(2));
      }
    }

    return data;
  };

  (0,react.useEffect)(function () {
    var chartDom = document.getElementById('J_Chart');
    if (!chartDom) return;
    var myChart = echarts/* init */.S1(chartDom);
    var option = {
      xAxis: {
        type: 'category',
        show: false,
        data: Object.keys(Array.from({
          length: xMax + 1
        })),
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: true
        },
        axisPointer: {
          // label: {
          //   formatter: function (params) {
          //     return `Borrow APR: ${params.value}%`
          //   },
          // },
          value: null
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        data: generateData(),
        type: 'line',
        showSymbol: false,
        lineStyle: {
          color: COLOR
        },
        itemStyle: {
          color: COLOR
        },
        markLine: {
          symbol: ['none', 'none'],
          label: {
            formatter: function formatter(params) {
              return "".concat(formatMessage({
                id: 'utilization_rate'
              }), ":\n ").concat(params.value, "%");
            }
          },
          data: [{
            xAxis: utilRate.multipliedBy(100).toNumber()
          }]
        }
      }],
      tooltip: {
        trigger: 'axis',
        valueFormatter: function valueFormatter(params) {
          return 'Utilization Rate: ' + params + '%';
        },
        formatter: function formatter(params) {
          return "Utilization Rate: ".concat(params[0].axisValue, "% Borrow APR: ").concat(params[0].value, "%");
        }
      }
    };
    myChart.setOption(option);
  }, [id]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    id: "J_Chart",
    className: chartmodules.chart
  });
};

/* harmony default export */ var chart = (Chart);
;// CONCATENATED MODULE: ./src/pages/pools/components/Details/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
;// CONCATENATED MODULE: ./src/pages/pools/components/Details/index.tsx


var _excluded = ["show", "onCancel"];










var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var DetailContent = function DetailContent(_ref) {
  var details = _ref.details,
      handleAddLiq = _ref.handleAddLiq,
      handleBorrow = _ref.handleBorrow,
      handleRemoveLiq = _ref.handleRemoveLiq,
      handleRepay = _ref.handleRepay;
  if (!details) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});

  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  var symbol = details.symbol,
      userLpSupply = details.userLpSupply,
      poolReserve = details.poolReserve,
      poolOsd = details.poolOsd,
      icon = details.icon,
      apr = details.apr,
      lendingApr = details.lendingApr;
  var intl = (0,_umi_production_exports.useIntl)();

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      fontSizeLG = _theme$useToken$token.fontSizeLG,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var detailList = [{
    key: intl.formatMessage({
      id: 'pool_size'
    }),
    value: Number(poolReserve).toFixed(2) + ' | ' + Number(poolOsd).toFixed(2)
  }, {
    key: symbol + intl.formatMessage({
      id: 'lp_supply'
    }),
    value: Number(userLpSupply).toFixed(2)
  }, {
    key: intl.formatMessage({
      id: 'borrowed'
    }) + ' | ' + intl.formatMessage({
      id: 'utilization_rate'
    }),
    value: ''
  }, {
    key: intl.formatMessage({
      id: 'reward_apr'
    }),
    value: ''
  }, {
    key: intl.formatMessage({
      id: 'spot_volume'
    }),
    value: ''
  }, {
    key: intl.formatMessage({
      id: 'swap_fee'
    }),
    value: ''
  }, {
    key: intl.formatMessage({
      id: 'swap_fee_apr'
    }),
    value: ''
  }, {
    key: intl.formatMessage({
      id: 'total_supply_apr'
    }),
    value: ''
  }, {
    key: intl.formatMessage({
      id: 'revenue'
    }),
    value: ''
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [20, 20],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: md ? '12' : '24',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.ZP, {
        dataSource: detailList,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(list/* default.Item */.ZP.Item, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: item.key
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: item.value
            })]
          });
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: md ? '12' : '24',
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "right",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "chart_wrap",
          style: {
            background: colorInfoBg
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "title",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
              src: details.icon,
              size: 20,
              tokenId: details.id
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              style: {
                marginLeft: 4
              },
              children: details.symbol
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "chart",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(chart, {
              detail: details
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "aprs",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                children: [" ", intl.formatMessage({
                  id: 'borrow_apr'
                }), ": ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                  className: "shortColor",
                  children: [apr, "%"]
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                children: [intl.formatMessage({
                  id: 'lending_apr'
                }), ": ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                  className: "longColor",
                  children: [lendingApr, "%"]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
          gutter: [10, 12],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: "12",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: "primary",
              size: "large",
              block: true,
              className: "btn",
              onClick: function onClick() {
                return handleBorrow(details);
              },
              children: intl.formatMessage({
                id: 'borrow'
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: "12",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: "primary",
              size: "large",
              block: true,
              className: "btn",
              onClick: function onClick() {
                return handleRepay(details);
              },
              children: intl.formatMessage({
                id: 'repay'
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: "12",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: "primary",
              size: "large",
              block: true,
              className: "btn",
              onClick: function onClick() {
                return handleAddLiq(details);
              },
              children: intl.formatMessage({
                id: 'deposit'
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: "12",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: "primary",
              size: "large",
              block: true,
              className: "btn",
              onClick: function onClick() {
                return handleRemoveLiq(details);
              },
              children: intl.formatMessage({
                id: 'remove'
              })
            })
          })]
        })]
      })
    })]
  });
};

var Detail = function Detail(_ref2) {
  var show = _ref2.show,
      onCancel = _ref2.onCancel,
      rest = objectWithoutProperties_default()(_ref2, _excluded);

  var screens = useBreakpoint();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    show: show,
    onClose: onCancel,
    modalWidth: 930,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: " modalWrap poolDetail",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(DetailContent, objectSpread2_default()({}, rest))
    })
  });
};

/* harmony default export */ var Details = (Detail);

/***/ }),

/***/ 84775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ EditLiq; }
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
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(75081);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 12 modules
var skeleton = __webpack_require__(21687);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 3 modules
var segmented = __webpack_require__(92783);
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
// EXTERNAL MODULE: ./src/services/contract/index.ts + 3 modules
var contract = __webpack_require__(8227);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
;// CONCATENATED MODULE: ./src/pages/pools/components/EditLiq/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/ahooks/es/useDebounceFn/index.js + 4 modules
var useDebounceFn = __webpack_require__(40238);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/pools/components/EditLiq/index.tsx



















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
      actionType = _ref2.actionType,
      _onClose = _ref2.onClose;

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
      succRet = _useState12[0],
      setSuccRet = _useState12[1];

  var _useState13 = (0,react.useState)(),
      _useState14 = slicedToArray_default()(_useState13, 2),
      data = _useState14[0],
      setData = _useState14[1];

  var maxable = (0,react.useMemo)(function () {
    return {
      label: _({
        id: 'balance'
      }),
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

              // message.success('addLiq' + ret.hash)
              setSuccRet({
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);

                  _onClose();
                },
                title: _({
                  id: 'pools_liq_add_success'
                }),
                type: 'addLiq',
                hash: ret.hash,
                okText: _({
                  id: 'pools_liq_success_close'
                })
              });
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
    spinning: submiting,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
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
            children: [_({
              id: 'pay'
            }), ": ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
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
            children: [_({
              id: 'pools_liq_receive'
            }, {
              lpSymbol: currentPool.lpSymbol
            }), " "]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12
            },
            children: _({
              id: 'pools_liq_pool_share'
            })
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
          text: _({
            id: 'entry_amount'
          }),
          type: 'primary',
          onClick: function onClick() {}
        }],
        children: _({
          id: 'pools_liq_seg_add'
        })
      })]
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var RemoveActionCard = function RemoveActionCard(_ref5) {
  var defalutPool = _ref5.defalutPool,
      actionType = _ref5.actionType,
      _onClose2 = _ref5.onClose;

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

  var _useState15 = (0,react.useState)(false),
      _useState16 = slicedToArray_default()(_useState15, 2),
      submiting = _useState16[0],
      setSubmiting = _useState16[1];

  var _useState17 = (0,react.useState)(0),
      _useState18 = slicedToArray_default()(_useState17, 2),
      amountIn = _useState18[0],
      setAmountIn = _useState18[1];

  var _useState19 = (0,react.useState)(''),
      _useState20 = slicedToArray_default()(_useState19, 2),
      errorMsg = _useState20[0],
      setErrorMsg = _useState20[1];

  var _useState21 = (0,react.useState)(defalutPool),
      _useState22 = slicedToArray_default()(_useState21, 2),
      currentPool = _useState22[0],
      setCurrentPool = _useState22[1];

  var _useState23 = (0,react.useState)(false),
      _useState24 = slicedToArray_default()(_useState23, 2),
      calcing = _useState24[0],
      setCalcing = _useState24[1];

  var _useState25 = (0,react.useState)(),
      _useState26 = slicedToArray_default()(_useState25, 2),
      succRet = _useState26[0],
      setSuccRet = _useState26[1];

  var _useState27 = (0,react.useState)(),
      _useState28 = slicedToArray_default()(_useState27, 2),
      data = _useState28[0],
      setData = _useState28[1];

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

              // message.success('removeLiq' + ret.hash)
              setSuccRet({
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);

                  _onClose2();
                },
                title: _({
                  id: 'pools_liq_rm_success'
                }),
                type: 'removeLiq',
                hash: ret.hash,
                okText: _({
                  id: 'pools_liq_rm_success_close'
                })
              });
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
    spinning: submiting,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
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
            children: [_({
              id: 'pools_liq_burn_pool_share'
            }), ":"]
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
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12
            },
            children: [_({
              id: 'receive'
            }), ":"]
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
          text: _({
            id: 'entry_amount'
          }),
          type: 'primary',
          onClick: function onClick() {}
        }],
        children: _({
          id: 'pools_liq_seg_rm'
        })
      })]
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var Content = function Content(props) {
  var defaultAction = props.defaultAction;

  var _useIntl3 = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl3.formatMessage;

  var _useState29 = (0,react.useState)(),
      _useState30 = slicedToArray_default()(_useState29, 2),
      actionType = _useState30[0],
      setActionType = _useState30[1];

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
              children: formatMessage({
                id: 'pools_liq_seg_add'
              })
            })
          }),
          value: 'add'
        }, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: formatMessage({
                id: 'pools_liq_seg_rm'
              })
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
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionCard, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
            defalutPool: props.currentPool,
            actionType: "add"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          style: {
            display: actionType === 'remove' ? "block" : 'none'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(RemoveActionCard, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
            defalutPool: props.currentPool,
            actionType: "remove"
          }))
        })]
      })
    })]
  });
};

var EditLip = function EditLip(props) {
  var show = props.show,
      onClose = props.onClose;

  var _useIntl4 = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl4.formatMessage;

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: true,
      maskClosable: false,
      title: formatMessage({
        id: 'liquidity'
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var EditLiq = (EditLip);

/***/ }),

/***/ 87896:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_NewPool; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
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
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 11 modules
var input_number = __webpack_require__(17376);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 3 modules
var contract = __webpack_require__(8227);
;// CONCATENATED MODULE: ./src/pages/pools/components/NewPool/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/pools/components/NewPool/index.tsx

















var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var Content = function Content(_ref) {
  var onCancel = _ref.onCancel;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      poolTokenExtList = _useModel.poolTokenExtList,
      osdData = _useModel.osdData;

  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      boxShadow = _theme$useToken$token.boxShadow,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useModel2 = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel2.chain,
      wallet = _useModel2.wallet;

  var amountRef = (0,react.useRef)();
  var priceRef = (0,react.useRef)();

  var _useState = (0,react.useState)(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0,react.useState)(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      amount = _useState4[0],
      setAmount = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = slicedToArray_default()(_useState5, 2),
      price = _useState6[0],
      setPrice = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      submiting = _useState8[0],
      setSubmiting = _useState8[1];

  var changeValue = function changeValue(value) {
    setAmount(value);
  };

  var _useState9 = (0,react.useState)(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      showSelect = _useState10[0],
      setShowSelect = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      succRet = _useState12[0],
      setSuccRet = _useState12[1];

  var isExists = (0,react.useMemo)(function () {
    if (current && poolTokenExtList.length > 0) {
      var _find = poolTokenExtList.find(function (item) {
        return item.id === current.id;
      });

      if (_find) {
        return true;
      }
    }

    return false;
  }, [poolTokenExtList, current]);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _yield$createNewPool, _yield$createNewPool2, res, error;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!chain || !current || !osdData || !wallet)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setSubmiting(true);
              _context.next = 5;
              return (0,contract/* createNewPool */.ZG)({
                chain: chain,
                wallet: wallet,
                amount: amount,
                price: price,
                token: current,
                osdTokenDecimal: osdData.tokenDecimal
              });

            case 5:
              _yield$createNewPool = _context.sent;
              _yield$createNewPool2 = slicedToArray_default()(_yield$createNewPool, 2);
              res = _yield$createNewPool2[0];
              error = _yield$createNewPool2[1];
              setSubmiting(false);

              if (!error) {
                _context.next = 13;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              return _context.abrupt("return");

            case 13:
              if (res && res.hash) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                    onCancel();
                  },
                  title: formatMessage({
                    id: 'pools_np_create_success'
                  }),
                  type: 'borrow',
                  hash: res.hash,
                  okText: formatMessage({
                    id: 'pools_np_success_close'
                  })
                });
              }

            case 14:
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

  if (poolTokenExtList.length === 0) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [10, 10],
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
      span: "24",
      children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Title */.Z.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          margin: 0
        },
        children: formatMessage({
          id: 'pools_np_title'
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      style: {
        padding: 0
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        amount: amount,
        header: current && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: formatMessage({
              id: 'pools_np_add_amount'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {
              return setAmount(current === null || current === void 0 ? void 0 : current.userTokenBalance);
            },
            children: [formatMessage({
              id: 'balance'
            }), ": ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: current && Number(current === null || current === void 0 ? void 0 : current.userTokenBalance).toFixed(4)
            })]
          })]
        }),
        onAmountChange: changeValue,
        currentToken: current,
        tokenList: toConsumableArray_default()(poolTokenExtList),
        onTokenChange: setCurrent,
        showSlider: false,
        tokenSelectProps: {
          searchToken: true
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
      span: "24",
      className: "carduUsd",
      style: {
        background: colorInfoBg
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
        className: "inputTxt",
        value: price,
        onChange: function onChange(value) {
          return setPrice(value);
        },
        min: '0',
        placeholder: "0.00",
        bordered: false,
        controls: false,
        formatter: function formatter(value) {
          return "$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        parser: function parser(value) {
          return value.replace(/\$\s?|(,*)/g, '');
        },
        style: {
          textAlign: 'right'
        },
        ref: priceRef
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 20,
          color: colorTextSecondary,
          textAlign: 'right'
        },
        strong: true,
        children: formatMessage({
          id: 'pools_np_set_price'
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 12
        },
        children: [formatMessage({
          id: 'pools_np_tip'
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Link */.Z.Link, {
          href: "https://onchaintrade.gitbook.io/ot/amm-and-lp/single-side-liquidity",
          target: "_blank",
          style: {
            color: colorPrimary
          },
          children: [" ", formatMessage({
            id: 'pools_np_tip_link'
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
        onClick: handleSubmit,
        loading: submiting,
        conditions: [{
          condition: !current,
          text: formatMessage({
            id: 'select_asset'
          }),
          type: 'primary',
          onClick: function onClick() {
            setShowSelect(true);
          }
        }, {
          condition: isExists,
          text: formatMessage({
            id: 'pools_np_btn_already_exists'
          }),
          type: 'primary',
          onClick: function onClick() {
            setShowSelect(true);
          }
        }, {
          condition: !amount,
          text: formatMessage({
            id: 'entry_amount'
          }),
          type: 'default',
          onClick: function onClick() {
            if (amountRef.current) amountRef.current.focus();
          }
        }, {
          condition: !price,
          text: formatMessage({
            id: 'pools_np_btn_set_price'
          }, {
            symbol: current && (current === null || current === void 0 ? void 0 : current.symbol)
          }),
          type: 'default',
          onClick: function onClick() {
            if (priceRef.current) priceRef.current.focus();
          }
        }],
        children: formatMessage({
          id: 'pools_np_btn'
        })
      })
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var NewPool = function NewPool(props) {
  var show = props.show,
      onCancel = props.onCancel;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    show: show,
    onClose: onCancel,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "modalWrap createPool",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var components_NewPool = (NewPool);

/***/ })

}]);