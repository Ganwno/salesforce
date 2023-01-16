"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9718],{

/***/ 69718:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_Borrow; }
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
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 4 modules
var tooltip = __webpack_require__(66477);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 1 modules
var spin = __webpack_require__(57953);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(31530);
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
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
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
      wallet = _useModel.wallet;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      succRet = _useState2[0],
      setSuccRet = _useState2[1];

  if (poolTokenExtList.length === 0) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  (0,react.useEffect)(function () {
    // if (current) return;
    var find = poolTokenExtList.find(function (item) {
      return item.id === defaultTarget;
    });
    if (find) setCurrent(find);
  }, [defaultTarget]);

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
              });

              if (!(arr.length === 0)) {
                _context.next = 8;
                break;
              }

              setBorrowLimit('0');
              setBorrowRF('-');
              return _context.abrupt("return");

            case 8:
              setCalcing(true);
              _context.next = 11;
              return (0,contract/* calcBorrowLimit */.xO)({
                chain: chain,
                wallet: wallet,
                outToken: current,
                inTokenList: arr,
                amountOut: Number(amount) || 0
              });

            case 11:
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

            case 18:
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
              if (!(!chain || !current || !wallet)) {
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
              });

              if (!(arr.length === 0)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return");

            case 6:
              setSubmiting(true);
              _context2.next = 9;
              return (0,contract/* borrow */.sI)({
                chain: chain,
                wallet: wallet,
                outToken: current,
                inTokenList: arr,
                amountOut: Number(amount) || 0
              });

            case 9:
              _yield$borrow = _context2.sent;
              _yield$borrow2 = slicedToArray_default()(_yield$borrow, 2);
              ret = _yield$borrow2[0];
              err = _yield$borrow2[1];

              if (!ret) {
                _context2.next = 17;
                break;
              }

              setSuccRet({
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);

                  _onClose();
                },
                title: 'Borrow success',
                type: 'borrow',
                hash: ret.hash,
                okText: 'Close'
              });
              _context2.next = 17;
              return updataTokens();

            case 17:
              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              setSubmiting(false);

            case 19:
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
          tokenList: poolTokenExtList,
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
              children: ["Pay(Collateral):$", (0,utils/* calcUSDByTokenAmount */.Xs)(item.amount, item.targetToken.userOraclePriceLabel, 0)]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              onClick: function onClick() {
                update(item.key, 'amount', item.targetToken && item.targetToken.userTokenBalance);
              },
              children: ["Balance: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
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
        tokenList: poolTokenExtList,
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
            children: ["Borrow Limit :", calcing ? /*#__PURE__*/(0,jsx_runtime.jsx)(MessageLoading, {
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
            children: ["Borrowed: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
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
          children: "APR"
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
          title: "Your CDP gets liquidated when RF drops to <= 1.00",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            underline: true,
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: "Risk Factor"
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
          text: 'Select Asset',
          type: 'primary',
          onClick: function onClick() {
            setShowSelect(true);
          }
        }, {
          condition: !amount,
          text: 'Enter Amount',
          type: 'default',
          onClick: function onClick() {
            if (amountRef.current) amountRef.current.focus();
          }
        }, {
          condition: borrowLimit < amount,
          text: 'Exceeded max borrow amount',
          type: 'primary',
          onClick: function onClick() {
            if (amountRef.current) amountRef.current.focus();
          }
        }],
        children: "Add Collateral and Borrow"
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
      updataTokens = _useModel2.updataTokens;

  if (!wallet || !chain) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

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
        console.log(data);

        if (data && coll.amount) {
          outs.push({
            token: data,
            max: Number((0,utils/* formatSat */.gB)(coll.amount, data.tokenDecimal)) || 0,
            amount: 0
          });
        }
      });
      console.log(outs);
      setTokenOuts(outs);
    }
  }, [currentPool]);
  var maxable = (0,react.useMemo)(function () {
    if (currentPool) {
      return {
        label: 'Max payable',
        value: currentPool.userDebt
      };
    } else {
      return {
        label: 'Max payable',
        value: 0
      };
    }
  }, [currentPool]);
  var payUSD = (0,react.useMemo)(function () {
    if (currentPool && amountIn) {
      return (Number(amountIn) * Number(currentPool.userOraclePrice)).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return '';
  }, [currentPool, amountIn]);

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
  })), [chain, wallet, currentPool, amountIn]);

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
                _context4.next = 13;
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
              _context4.next = 13;
              return updataTokens();

            case 13:
              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              setSubmiting(false);

            case 15:
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
            children: ["Wallet Bal: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
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
            header: "Collateral",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
              children: tokenOuts.map(function (item) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
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
      }), tokenOuts.length === 1 && [tokenOuts[0]].map(function (item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            marginTop: 10
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
                onClick: function onClick() {
                  return update(item.token.id, 'amount', item.max);
                },
                children: ["Withdraw: $", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: Number(item.token.userBorrowPrice) * item.amount
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                style: {
                  fontSize: 12,
                  color: colorTextSecondary
                },
                onClick: function onClick() {
                  return update(item.token.id, 'amount', item.max);
                },
                children: ["Max withdraw: ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                  style: {
                    color: colorPrimary
                  },
                  children: [item.max, " "]
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
            children: "APR"
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
            children: "Debt"
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
            title: "Your CDP gets liquidated when RF drops to <= 1.00",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              underline: true,
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: "Risk Factor"
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
          condition: !amountIn && tokenOuts.length > 1 || !amountIn && tokenOuts.length === 1 && !tokenOuts[0].amount,
          text: 'Input Amount',
          type: 'primary',
          onClick: function onClick() {}
        }, {
          condition: !amountIn && tokenOuts.length === 1 && !!tokenOuts[0].amount,
          text: 'Remove collaterall',
          type: 'primary',
          onClick: handleSubmit
        }],
        children: "Repay"
      }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
    })
  });
};

var Content = function Content(props) {
  var defaultAction = props.defaultAction,
      defaultTarget = props.defaultTarget;

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
              children: "Borrow/Add Coll."
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
              children: "Remove Coll./Repay"
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
  var show = props.show,
      onClose = props.onClose;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var components_Borrow = (Borrow);

/***/ })

}]);