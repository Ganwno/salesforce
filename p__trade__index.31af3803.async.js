"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[939],{

/***/ 98051:
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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var es_theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(4393);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 23 modules
var tabs = __webpack_require__(49502);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 3 modules
var segmented = __webpack_require__(92783);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(80882);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(52677);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(49677);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
;// CONCATENATED MODULE: ./src/pages/trade/components/Swap/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/services/contract/index.ts + 5 modules
var contract = __webpack_require__(95575);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useDebounceFn/index.js + 4 modules
var useDebounceFn = __webpack_require__(40238);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/Swap/index.tsx


















var Swap = function Swap(_ref) {
  objectDestructuringEmpty_default()(_ref);

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      poolTokenExtList = _useModel.poolTokenExtList,
      osdData = _useModel.osdData,
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      updataTokens = _useModel.updataTokens;

  var _useModel2 = (0,_umi_production_exports.useModel)('tradeHistory'),
      updatePthData = _useModel2.updatePthData,
      updateThData = _useModel2.updateThData;

  var _useModel3 = (0,_umi_production_exports.useModel)('tradeTokenList'),
      inToken = _useModel3.swapIndex,
      setInToken = _useModel3.setSwapIndex,
      selectList = _useModel3.swapIndexArr;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      outToken = _useState2[0],
      setOutToken = _useState2[1];

  var _useModel4 = (0,_umi_production_exports.useModel)('initModel'),
      maxSlippage = _useModel4.maxSlippage;

  var _useSearchParams = (0,_umi_production_exports.useSearchParams)(),
      _useSearchParams2 = slicedToArray_default()(_useSearchParams, 1),
      query = _useSearchParams2[0];

  var queOut = query.get('swapOut'); // const [inToken, setInToken] = useState<API.BasicToken>();

  var _useState3 = (0,react.useState)(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      inAmount = _useState4[0],
      setInAmount = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = slicedToArray_default()(_useState5, 2),
      outAmount = _useState6[0],
      setOutAmount = _useState6[1]; // const [selectType, setSelectType] = useState<'in' | 'out' | ''>('');


  var _useState7 = (0,react.useState)(''),
      _useState8 = slicedToArray_default()(_useState7, 2),
      amountType = _useState8[0],
      setAmountType = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      submiting = _useState10[0],
      setSubmiting = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = slicedToArray_default()(_useState11, 2),
      calcing = _useState12[0],
      setCalcing = _useState12[1];

  var _useState13 = (0,react.useState)('0'),
      _useState14 = slicedToArray_default()(_useState13, 2),
      impact = _useState14[0],
      setImpact = _useState14[1];

  var inRef = (0,react.useRef)();

  var _useState15 = (0,react.useState)(),
      _useState16 = slicedToArray_default()(_useState15, 2),
      succRet = _useState16[0],
      setSuccRet = _useState16[1]; // update token


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

  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
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
      console.log(inAmount, typeof_default()(inAmount), inToken.userOraclePrice);
      return (Number(inAmount) * Number(inToken.userOraclePrice)).toFixed(2);
    }
  }, [inAmount, inToken]);
  var outAmountUSD = (0,react.useMemo)(function () {
    if (outAmount && outToken) {
      return (Number(outAmount) * Number(outToken.userOraclePrice)).toFixed(2);
    }
  }, [outAmount, outToken]);
  (0,react.useEffect)(function () {
    if (inAmount && outAmount && inToken && outToken && !calcing) {
      var ret = (0,contract/* calcImpact */.wf)({
        inToken: inToken,
        outToken: outToken,
        outAmount: outAmount,
        inAmount: inAmount
      });
      setImpact(ret);
      return;
    }

    setImpact('0');
  }, [inAmount, outAmount, inToken, outToken, calcing]);
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
              setCalcing(true);
              _context.next = 5;
              return (0,contract/* calcSwapAmountOut */.rv)({
                walletName: (wallet === null || wallet === void 0 ? void 0 : wallet.name) || '',
                chainId: chain.id,
                amount: inAmount,
                inToken: inToken,
                outToken: outToken
              });

            case 5:
              _yield$calcSwapAmount = _context.sent;
              _yield$calcSwapAmount2 = slicedToArray_default()(_yield$calcSwapAmount, 2);
              _out = _yield$calcSwapAmount2[0];
              error = _yield$calcSwapAmount2[1];

              if (!error) {
                _context.next = 13;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setOutAmount('');
              return _context.abrupt("return");

            case 13:
              setOutAmount(_out);
              setAmountType('in');
              setCalcing(false);

            case 16:
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
              setCalcing(true);
              _context2.next = 5;
              return (0,contract/* calcSwapAmountIn */.F_)({
                walletName: (wallet === null || wallet === void 0 ? void 0 : wallet.name) || '',
                chainId: chain.id,
                amount: outAmount,
                inToken: inToken,
                outToken: outToken
              });

            case 5:
              _yield$calcSwapAmount3 = _context2.sent;
              _yield$calcSwapAmount4 = slicedToArray_default()(_yield$calcSwapAmount3, 2);
              _in = _yield$calcSwapAmount4[0];
              error = _yield$calcSwapAmount4[1];

              if (!error) {
                _context2.next = 13;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setInAmount('');
              return _context2.abrupt("return");

            case 13:
              setInAmount(_in);
              setAmountType('out');
              setCalcing(false);

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
              updatePthData();
              updateThData();

            case 17:
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
          setInAmount(value);
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
            children: ["Pay ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: ["$:", inAmountUSD]
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
              className: "linkColor",
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
      maxValue: Infinity,
      header: outToken && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "label",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 12,
            color: colorTextSecondary
          },
          onClick: function onClick() {},
          children: ["Receive: $ ", outAmountUSD]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 12,
            color: colorTextSecondary
          },
          children: ["PoolBalance: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: poolBalance && Number(poolBalance).toFixed(4)
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
      wrapClassName: "primary",
      className: "primary",
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
          handleSubmit();
        }
      }],
      children: "Swap"
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

/* harmony default export */ var components_Swap = (Swap);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(66419);
;// CONCATENATED MODULE: ./src/pages/trade/components/Long/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(32808);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 13 modules
var input_number = __webpack_require__(43262);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(50888);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var esm_slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
;// CONCATENATED MODULE: ./node_modules/rc-switch/es/index.js




var _excluded = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"];




var Switch = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var _classNames;

  var _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
      className = _ref.className,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      loadingIcon = _ref.loadingIcon,
      checkedChildren = _ref.checkedChildren,
      unCheckedChildren = _ref.unCheckedChildren,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  var _useMergedState = (0,useMergedState/* default */.Z)(false, {
    value: checked,
    defaultValue: defaultChecked
  }),
      _useMergedState2 = (0,esm_slicedToArray/* default */.Z)(_useMergedState, 2),
      innerChecked = _useMergedState2[0],
      setInnerChecked = _useMergedState2[1];

  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;

    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }

    return mergedChecked;
  }

  function onInternalKeyDown(e) {
    if (e.which === KeyCode/* default.LEFT */.Z.LEFT) {
      triggerChange(false, e);
    } else if (e.which === KeyCode/* default.RIGHT */.Z.RIGHT) {
      triggerChange(true, e);
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }

  function onInternalClick(e) {
    var ret = triggerChange(!innerChecked, e); // [Legacy] trigger onClick with value

    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
  }

  var switchClassName = classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-checked"), innerChecked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return /*#__PURE__*/react.createElement("button", (0,esm_extends/* default */.Z)({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled: disabled,
    className: switchClassName,
    ref: ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-inner")
  }, /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-inner-checked")
  }, checkedChildren), /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-inner-unchecked")
  }, unCheckedChildren)));
});
Switch.displayName = 'Switch';
/* harmony default export */ var es = (Switch);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(97647);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave/index.js + 4 modules
var wave = __webpack_require__(45353);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(10274);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/switch/style/index.js



const genSwitchSmallStyle = token => {
  const {
    componentCls
  } = token;
  const switchInnerCls = `${componentCls}-inner`;
  return {
    [componentCls]: {
      [`&${componentCls}-small`]: {
        minWidth: token.switchMinWidthSM,
        height: token.switchHeightSM,
        lineHeight: `${token.switchHeightSM}px`,
        [`${componentCls}-inner`]: {
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: `calc(${token.switchInnerMarginMinSM}px - 100% + ${token.switchPinSizeSM + token.switchPadding * 2}px)`,
            marginInlineEnd: `calc(${token.switchInnerMarginMaxSM}px + 100% - ${token.switchPinSizeSM + token.switchPadding * 2}px)`
          },
          [`${switchInnerCls}-unchecked`]: {
            marginTop: -token.switchHeightSM,
            marginInlineStart: token.switchInnerMarginMaxSM,
            marginInlineEnd: token.switchInnerMarginMinSM
          }
        },
        [`${componentCls}-handle`]: {
          width: token.switchPinSizeSM,
          height: token.switchPinSizeSM
        },
        [`${componentCls}-loading-icon`]: {
          top: (token.switchPinSizeSM - token.switchLoadingIconSize) / 2,
          fontSize: token.switchLoadingIconSize
        },
        [`&${componentCls}-checked`]: {
          [`${componentCls}-inner`]: {
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: token.switchInnerMarginMinSM,
              marginInlineEnd: token.switchInnerMarginMaxSM
            },
            [`${switchInnerCls}-unchecked`]: {
              marginInlineStart: `calc(${token.switchInnerMarginMaxSM}px + 100% - ${token.switchPinSizeSM + token.switchPadding * 2}px)`,
              marginInlineEnd: `calc(${token.switchInnerMarginMinSM}px - 100% + ${token.switchPinSizeSM + token.switchPadding * 2}px)`
            }
          },
          [`${componentCls}-handle`]: {
            insetInlineStart: `calc(100% - ${token.switchPinSizeSM + token.switchPadding}px)`
          }
        },
        [`&:not(${componentCls}-disabled):active`]: {
          [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
            [`${switchInnerCls}-unchecked`]: {
              marginInlineStart: token.switchInnerMarginMaxSM + token.marginXXS / 2,
              marginInlineEnd: token.switchInnerMarginMinSM - token.marginXXS / 2
            }
          },
          [`&${componentCls}-checked ${switchInnerCls}`]: {
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: token.switchInnerMarginMinSM - token.marginXXS / 2,
              marginInlineEnd: token.switchInnerMarginMaxSM + token.marginXXS / 2
            }
          }
        }
      }
    }
  };
};
const genSwitchLoadingStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`${componentCls}-loading-icon${token.iconCls}`]: {
        position: 'relative',
        top: (token.switchPinSize - token.fontSize) / 2,
        color: token.switchLoadingIconColor,
        verticalAlign: 'top'
      },
      [`&${componentCls}-checked ${componentCls}-loading-icon`]: {
        color: token.switchColor
      }
    }
  };
};
const genSwitchHandleStyle = token => {
  const {
    componentCls
  } = token;
  const switchHandleCls = `${componentCls}-handle`;
  return {
    [componentCls]: {
      [switchHandleCls]: {
        position: 'absolute',
        top: token.switchPadding,
        insetInlineStart: token.switchPadding,
        width: token.switchPinSize,
        height: token.switchPinSize,
        transition: `all ${token.switchDuration} ease-in-out`,
        '&::before': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          backgroundColor: token.colorWhite,
          borderRadius: token.switchPinSize / 2,
          boxShadow: token.switchHandleShadow,
          transition: `all ${token.switchDuration} ease-in-out`,
          content: '""'
        }
      },
      [`&${componentCls}-checked ${switchHandleCls}`]: {
        insetInlineStart: `calc(100% - ${token.switchPinSize + token.switchPadding}px)`
      },
      [`&:not(${componentCls}-disabled):active`]: {
        [`${switchHandleCls}::before`]: {
          insetInlineEnd: token.switchHandleActiveInset,
          insetInlineStart: 0
        },
        [`&${componentCls}-checked ${switchHandleCls}::before`]: {
          insetInlineEnd: 0,
          insetInlineStart: token.switchHandleActiveInset
        }
      }
    }
  };
};
const genSwitchInnerStyle = token => {
  const {
    componentCls
  } = token;
  const switchInnerCls = `${componentCls}-inner`;
  return {
    [componentCls]: {
      [switchInnerCls]: {
        display: 'block',
        overflow: 'hidden',
        borderRadius: 100,
        height: '100%',
        [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
          display: 'block',
          color: token.colorTextLightSolid,
          fontSize: token.fontSizeSM,
          transition: `margin-inline-start ${token.switchDuration} ease-in-out, margin-inline-end ${token.switchDuration} ease-in-out`,
          pointerEvents: 'none'
        },
        [`${switchInnerCls}-checked`]: {
          marginInlineStart: `calc(${token.switchInnerMarginMin}px - 100% + ${token.switchPinSize + token.switchPadding * 2}px)`,
          marginInlineEnd: `calc(${token.switchInnerMarginMax}px + 100% - ${token.switchPinSize + token.switchPadding * 2}px)`
        },
        [`${switchInnerCls}-unchecked`]: {
          marginTop: -token.switchHeight,
          marginInlineStart: token.switchInnerMarginMax,
          marginInlineEnd: token.switchInnerMarginMin
        }
      },
      [`&${componentCls}-checked ${switchInnerCls}`]: {
        [`${switchInnerCls}-checked`]: {
          marginInlineStart: token.switchInnerMarginMin,
          marginInlineEnd: token.switchInnerMarginMax
        },
        [`${switchInnerCls}-unchecked`]: {
          marginInlineStart: `calc(${token.switchInnerMarginMax}px + 100% - ${token.switchPinSize + token.switchPadding * 2}px)`,
          marginInlineEnd: `calc(${token.switchInnerMarginMin}px - 100% + ${token.switchPinSize + token.switchPadding * 2}px)`
        }
      },
      [`&:not(${componentCls}-disabled):active`]: {
        [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
          [`${switchInnerCls}-unchecked`]: {
            marginInlineStart: token.switchInnerMarginMax + token.switchPadding * 2,
            marginInlineEnd: token.switchInnerMarginMin - token.switchPadding * 2
          }
        },
        [`&${componentCls}-checked ${switchInnerCls}`]: {
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: token.switchInnerMarginMin - token.switchPadding * 2,
            marginInlineEnd: token.switchInnerMarginMax + token.switchPadding * 2
          }
        }
      }
    }
  };
};
const genSwitchStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'relative',
      display: 'inline-block',
      boxSizing: 'border-box',
      minWidth: token.switchMinWidth,
      height: token.switchHeight,
      lineHeight: `${token.switchHeight}px`,
      verticalAlign: 'middle',
      background: token.colorTextQuaternary,
      border: '0',
      borderRadius: 100,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid}`,
      userSelect: 'none',
      [`&:hover:not(${componentCls}-disabled)`]: {
        background: token.colorTextTertiary
      }
    }), (0,style/* genFocusStyle */.Qy)(token)), {
      [`&${componentCls}-checked`]: {
        background: token.switchColor,
        [`&:hover:not(${componentCls}-disabled)`]: {
          background: token.colorPrimaryHover
        }
      },
      [`&${componentCls}-loading, &${componentCls}-disabled`]: {
        cursor: 'not-allowed',
        opacity: token.switchDisabledOpacity,
        '*': {
          boxShadow: 'none',
          cursor: 'not-allowed'
        }
      },
      // rtl style
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      }
    })
  };
};
// ============================== Export ==============================
/* harmony default export */ var switch_style = ((0,genComponentStyleHook/* default */.Z)('Switch', token => {
  const switchHeight = token.fontSize * token.lineHeight;
  const switchHeightSM = token.controlHeight / 2;
  const switchPadding = 2; // This is magic
  const switchPinSize = switchHeight - switchPadding * 2;
  const switchPinSizeSM = switchHeightSM - switchPadding * 2;
  const switchToken = (0,statistic/* merge */.TS)(token, {
    switchMinWidth: switchPinSize * 2 + switchPadding * 4,
    switchHeight,
    switchDuration: token.motionDurationMid,
    switchColor: token.colorPrimary,
    switchDisabledOpacity: token.opacityLoading,
    switchInnerMarginMin: switchPinSize / 2,
    switchInnerMarginMax: switchPinSize + switchPadding + switchPadding * 2,
    switchPadding,
    switchPinSize,
    switchBg: token.colorBgContainer,
    switchMinWidthSM: switchPinSizeSM * 2 + switchPadding * 2,
    switchHeightSM,
    switchInnerMarginMinSM: switchPinSizeSM / 2,
    switchInnerMarginMaxSM: switchPinSizeSM + switchPadding + switchPadding * 2,
    switchPinSizeSM,
    switchHandleShadow: `0 2px 4px 0 ${new dist_module/* TinyColor */.C('#00230b').setAlpha(0.2).toRgbString()}`,
    switchLoadingIconSize: token.fontSizeIcon * 0.75,
    switchLoadingIconColor: `rgba(0, 0, 0, ${token.opacityLoading})`,
    switchHandleActiveInset: '-30%'
  });
  return [genSwitchStyle(switchToken),
  // inner style
  genSwitchInnerStyle(switchToken),
  // handle style
  genSwitchHandleStyle(switchToken),
  // loading style
  genSwitchLoadingStyle(switchToken),
  // small style
  genSwitchSmallStyle(switchToken)];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/switch/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const switch_Switch = /*#__PURE__*/react.forwardRef((_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      size: customizeSize,
      disabled: customDisabled,
      loading,
      className = ''
    } = _a,
    props = __rest(_a, ["prefixCls", "size", "disabled", "loading", "className"]);
   false ? 0 : void 0;
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const size = react.useContext(SizeContext/* default */.Z);
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = (customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled) || loading;
  const prefixCls = getPrefixCls('switch', customizePrefixCls);
  const loadingIcon = /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-handle`
  }, loading && /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
    className: `${prefixCls}-loading-icon`
  }));
  // Style
  const [wrapSSR, hashId] = switch_style(prefixCls);
  const classes = classnames_default()({
    [`${prefixCls}-small`]: (customizeSize || size) === 'small',
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement(wave/* default */.Z, null, /*#__PURE__*/react.createElement(es, Object.assign({}, props, {
    prefixCls: prefixCls,
    className: classes,
    disabled: mergedDisabled,
    ref: ref,
    loadingIcon: loadingIcon
  }))));
});
switch_Switch.__ANT_SWITCH = true;
if (false) {}
/* harmony default export */ var es_switch = (switch_Switch);
// EXTERNAL MODULE: ./node_modules/react-slider/dist/es/prod/components/ReactSlider/ReactSlider.mjs + 1 modules
var ReactSlider = __webpack_require__(47729);
;// CONCATENATED MODULE: ./src/pages/trade/components/TPSL/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/trade/components/TPSL/index.tsx











function TPSL(props) {
  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      boxShadow = _theme$useToken$token.boxShadow,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var maxLeverage = props.maxLeverage,
      leverage = props.leverage,
      setLeverage = props.setLeverage,
      setTPSL = props.setTPSL,
      tpsl = props.tpsl,
      tpPrice = props.tpPrice,
      setTpPrice = props.setTpPrice,
      slPrice = props.slPrice,
      setSlPrice = props.setSlPrice,
      targetPrice = props.targetPrice,
      isLong = props.isLong,
      amountOut = props.amountOut,
      tradeType = props.tradeType,
      cost = props.cost; // const [detailVisible, setDetailVisible] = useState(false)

  var _useState = (0,react.useState)(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      silderVisible = _useState2[0],
      setSilderVisible = _useState2[1];

  var _useState3 = (0,react.useState)(leverage),
      _useState4 = slicedToArray_default()(_useState3, 2),
      dig = _useState4[0],
      setDig = _useState4[1];

  var tpInfo = (0,react.useMemo)(function () {
    var amount = 0;
    var rate = 0;

    if (amountOut !== 0) {
      amount = isLong ? (tpPrice - targetPrice) * amountOut : (targetPrice - tpPrice) * amountOut; // 

      rate = amount / cost * 100;
    }

    return {
      rate: Number(rate.toFixed(2)) + '%',
      priceRate: Number(((tpPrice - targetPrice) / targetPrice * 100).toFixed(2)) + '%',
      amount: Number(amount.toFixed(2))
    };
  }, [tpPrice, targetPrice, amountOut, isLong, cost]);
  var slInfo = (0,react.useMemo)(function () {
    var amount = 0;
    var rate = 0;

    if (amountOut !== 0) {
      amount = isLong ? (targetPrice - slPrice) * amountOut : (slPrice - targetPrice) * amountOut; // 
      // rate = isLong ? (targetPrice - slPrice) / targetPrice * 100  :(slPrice - targetPrice) / targetPrice * 100 

      rate = amount / cost * 100;
    }

    return {
      rate: Number(rate.toFixed(2)) + '%',
      priceRate: Number(((targetPrice - slPrice) / targetPrice * 100).toFixed(2)) + '%',
      amount: Number(amount.toFixed(2))
    };
  }, [slPrice, targetPrice, amountOut, isLong, cost]);
  var tiggerValue = (0,react.useMemo)(function () {
    if (!amountOut) return undefined;

    if (isLong) {
      return Number(targetPrice - cost / amountOut).toFixed(2);
    } else {
      return Number(Number(targetPrice) + cost / amountOut).toFixed(2);
    }
  }, [targetPrice, cost, amountOut, isLong]);

  var onChangeDetailVisible = function onChangeDetailVisible(e) {
    setTPSL(e.target.checked);
  };

  var onChangeSliderVisible = function onChangeSliderVisible(checked) {
    setSilderVisible(checked);
  };

  var onChangeDig = function onChangeDig(value) {
    setDig(value);
    setLeverage(value);
  };

  (0,react.useEffect)(function () {
    if (maxLeverage < leverage) {
      onChangeDig(maxLeverage);
    }
  }, [maxLeverage]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "hayTPSL",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "tpsl row",
      children: [tradeType === 'limit' ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "tpsl",
        children: ["TP/SL ", /*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.Z, {
          onChange: onChangeDetailVisible,
          checked: tpsl,
          className: "checkbox"
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "tpsl"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
          formatter: function formatter(value) {
            return value + '.00x';
          },
          parser: function parser(value) {
            return value.replace('.00x', '');
          },
          value: dig,
          onChange: onChangeDig,
          min: 1,
          max: maxLeverage || 1,
          className: "dig",
          controls: false,
          style: {
            color: '#EB5757',
            textAlign: 'center'
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "txt",
          children: 'Slider'
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch, {
          onChange: onChangeSliderVisible,
          checked: silderVisible
        })]
      })]
    }), silderVisible && /*#__PURE__*/(0,jsx_runtime.jsx)(ReactSlider/* default */.Z, {
      className: "slider",
      thumbClassName: "thumb",
      trackClassName: "track",
      onChange: function onChange(value) {
        return onChangeDig(value);
      },
      value: dig,
      min: 1,
      max: maxLeverage || 1,
      renderThumb: function renderThumb(props, state) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", objectSpread2_default()(objectSpread2_default()({}, props), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "thumbInner",
            style: {
              background: colorText,
              color: colorBgContainer
            },
            children: [state.valueNow, ".00x"]
          })
        }));
      }
    }), tradeType === 'limit' && tpsl && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
        className: "hayInputCard",
        bodyStyle: {
          padding: 0
        },
        style: {
          border: '0.5px solid ' + colorPrimary,
          marginBottom: 10,
          marginTop: 10
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {},
            children: [formatMessage({
              id: 'tp_price'
            }), "(", tpInfo.priceRate, " ", formatMessage({
              id: 'up'
            }), ")"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {},
            children: formatMessage({
              id: 'estimated_profit'
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "value",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
            className: "inputTxt",
            value: tpPrice,
            onChange: setTpPrice,
            min: isLong ? targetPrice : 0,
            max: isLong ? Infinity : targetPrice,
            formatter: function formatter(value) {
              return "$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            },
            bordered: false,
            controls: false
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "amount_green",
            style: {
              color: colorPrimary
            },
            children: ["$", tpInfo.amount, "(", tpInfo.rate, ")"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
        className: "hayInputCard",
        bodyStyle: {
          padding: 0
        },
        style: {
          border: '0.5px solid ' + colorPrimary,
          marginBottom: 10,
          marginTop: 10
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {},
            children: [formatMessage({
              id: 'tigger_price'
            }), "(", slInfo.priceRate, " ", formatMessage({
              id: 'down'
            }), ")"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {},
            children: formatMessage({
              id: 'estimated_loss'
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "value",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
            className: "inputTxt",
            value: slPrice,
            onChange: setSlPrice,
            min: isLong ? tiggerValue : targetPrice,
            max: isLong ? targetPrice : tiggerValue,
            formatter: function formatter(value) {
              return "".concat(isLong ? '≤' : '≥', " $ ").concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            },
            bordered: false,
            controls: false
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "amount_green shortColor",
            children: ["$", slInfo.amount, "(", slInfo.rate, ")"]
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_TPSL = (TPSL);
;// CONCATENATED MODULE: ./src/pages/trade/components/Long/index.tsx



















var Long = function Long(_ref) {
  var isLong = _ref.isLong;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      poolTokenExtList = _useModel.poolTokenExtList,
      osdData = _useModel.osdData,
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      updataTokens = _useModel.updataTokens;

  var _useModel2 = (0,_umi_production_exports.useModel)('tradeTokenList'),
      setOutToken = _useModel2.setLongIndex,
      outToken = _useModel2.longIndex,
      setShortIndex = _useModel2.setShortIndex,
      shortIndex = _useModel2.shortIndex,
      selectOutList = _useModel2.longIndexArr,
      shortIndexArr = _useModel2.shortIndexArr,
      selectInList = _useModel2.selectInList,
      inToken = _useModel2.collateralToken,
      setInToken = _useModel2.setCollateralToken;

  var _useModel3 = (0,_umi_production_exports.useModel)('future'),
      tokenPairs = _useModel3.tokenPairs,
      positionList = _useModel3.positionList,
      updatePositions = _useModel3.updatePositions,
      updatePairs = _useModel3.updatePairs,
      setPositionLoading = _useModel3.setPositionLoading,
      setLimitLoading = _useModel3.setLimitLoading,
      updateLimitOrder = _useModel3.updateLimitOrder; // const [inToken, setInToken] = useState<API.BasicToken>();


  var _useState = (0,react.useState)(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      inAmount = _useState2[0],
      setInAmount = _useState2[1];

  var _useState3 = (0,react.useState)(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      outAmount = _useState4[0],
      setOutAmount = _useState4[1]; // const [selectType, setSelectType] = useState<'in' | 'out' | ''>('');


  var _useState5 = (0,react.useState)(''),
      _useState6 = slicedToArray_default()(_useState5, 2),
      amountType = _useState6[0],
      setAmountType = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      submiting = _useState8[0],
      setSubmiting = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      curPair = _useState10[0],
      setCurPair = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      curPosition = _useState12[0],
      setCurrentPosition = _useState12[1];

  var _useState13 = (0,react.useState)('market'),
      _useState14 = slicedToArray_default()(_useState13, 2),
      tradeType = _useState14[0],
      setTradeType = _useState14[1];

  var _useState15 = (0,react.useState)(1.0),
      _useState16 = slicedToArray_default()(_useState15, 2),
      leverage = _useState16[0],
      _setLeverage = _useState16[1];

  var _useState17 = (0,react.useState)(),
      _useState18 = slicedToArray_default()(_useState17, 2),
      curData = _useState18[0],
      setCurData = _useState18[1];

  var inRef = (0,react.useRef)();

  var _useState19 = (0,react.useState)(),
      _useState20 = slicedToArray_default()(_useState19, 2),
      succRet = _useState20[0],
      setSuccRet = _useState20[1];

  var _useState21 = (0,react.useState)(0),
      _useState22 = slicedToArray_default()(_useState21, 2),
      targetPrice = _useState22[0],
      setTargetPrice = _useState22[1];

  var _useState23 = (0,react.useState)(0),
      _useState24 = slicedToArray_default()(_useState23, 2),
      tpPrice = _useState24[0],
      setTpPrice = _useState24[1];

  var _useState25 = (0,react.useState)(0),
      _useState26 = slicedToArray_default()(_useState25, 2),
      slPrice = _useState26[0],
      setSlPrice = _useState26[1];

  var _useState27 = (0,react.useState)(false),
      _useState28 = slicedToArray_default()(_useState27, 2),
      tpsl = _useState28[0],
      _setTPSL = _useState28[1];

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage; // init 


  var selectList = (0,react.useMemo)(function () {
    if (osdData) {
      return [].concat(toConsumableArray_default()(poolTokenExtList), [osdData]);
    }

    return poolTokenExtList;
  }, [poolTokenExtList, osdData]); // limit 状态 intoken 只能是osd

  (0,react.useEffect)(function () {
    if (tradeType === 'limit' && selectList && selectList.length > 0) {
      if (curPair && curPair.collateralToken.toLowerCase() !== (inToken === null || inToken === void 0 ? void 0 : inToken.id.toLowerCase())) {
        var _find = selectList.find(function (item) {
          return curPair.collateralToken.toLowerCase() === item.id.toLowerCase();
        });

        if (_find) {
          handleSelectChannge(_find, 'in');
        }
      }
    }
  }, [tradeType]); // const selectInList = useMemo(() => {
  //     if (tokenPairs.length > 0 && selectList.length > 0) {
  //         let _tokenPairs = tokenPairs
  //         // if (outToken) {
  //         //     _tokenPairs = _tokenPairs.filter(item => item.indexToken.toLowerCase() === outToken.id.toLowerCase())
  //         // }
  //         const inIds = _tokenPairs.map(item => item.collateralToken.toLowerCase())
  //         console.log('selectList', selectList, '_tokenPairs', _tokenPairs, 'inIds', inIds)
  //         return selectList.filter(item => inIds.includes(item.id.toLowerCase()))
  //     }
  //     return []
  // }, [selectList, tokenPairs, outToken])
  // 状态提升
  // const selectOutList = useMemo(() => {
  //     let _selectOutList: API.BasicToken[] = [];
  //     if (tokenPairs.length > 0 && selectList.length > 0) {
  //         let _tokenPairs = tokenPairs
  //         if (inToken) {
  //             _tokenPairs = _tokenPairs.filter(item => item.collateralToken.toLowerCase() === inToken.id.toLowerCase())
  //         }
  //         const inIds = _tokenPairs.map(item => item.indexToken.toLowerCase())
  //         _selectOutList = selectList.filter(item => inIds.includes(item.id.toLowerCase()))
  //     }
  //     isLong ? setLongIndexArr(_selectOutList) : setShortIndexArr(_selectOutList)
  //     return _selectOutList
  // }, [selectList, tokenPairs, inToken, isLong])

  var handleTokenChange = function handleTokenChange(_outToken, _inToken) {
    if (osdData && _outToken) {
      // const _position = positionList.find(position =>
      //     position.collateralToken.toLowerCase() === _inToken.id.toLocaleLowerCase() && //sb tips
      //     position.indexToken.toLowerCase() === _outToken.id.toLowerCase() &&
      //     position.isLong === isLong
      // );
      // let _pair = tokenPairs.find(pair =>
      //     pair.collateralToken.toLowerCase() === _inToken.id.toLocaleLowerCase() && //sb tips
      //     pair.indexToken.toLowerCase() === _outToken.id.toLowerCase()
      // );
      var _position = positionList.find(function (position) {
        return position.collateralToken.toLowerCase() === _inToken.id.toLocaleLowerCase() && //sb tips
        position.indexToken.toLowerCase() === _outToken.id.toLowerCase() && position.isLong === isLong;
      });

      if (!_position) _position = positionList.find(function (position) {
        return position.collateralToken.toLowerCase() === osdData.id.toLocaleLowerCase() && //sb tips
        position.indexToken.toLowerCase() === _outToken.id.toLowerCase() && position.isLong === isLong;
      });

      var _pair = tokenPairs.find(function (pair) {
        return pair.collateralToken.toLowerCase() === _inToken.id.toLocaleLowerCase() && //sb tips
        pair.indexToken.toLowerCase() === _outToken.id.toLowerCase();
      });

      if (!_pair) tokenPairs.find(function (pair) {
        return pair.collateralToken.toLowerCase() === osdData.id.toLocaleLowerCase() && //sb tips
        pair.indexToken.toLowerCase() === _outToken.id.toLowerCase();
      });
      if (_position) setCurrentPosition(_position);

      if (_pair) {
        setCurPair(_pair);

        if (curPair && curPair.userIndexPrice !== _pair.userIndexPrice) {
          setTargetPrice(Number(_pair.userIndexPrice));
        }

        if (!curPair && _pair.userIndexPrice) {
          setTargetPrice(Number(_pair.userIndexPrice));
        }
      }
    }
  }; // init token


  (0,react.useEffect)(function () {
    if (selectList.length > 0 && tokenPairs.length > 0 && positionList.length > 0 && !inToken && !outToken) {
      var _inToken = selectList.find(function (item) {
        return item.id.toLowerCase() === tokenPairs[0].collateralToken.toLowerCase();
      });

      var _outToken = selectList.find(function (item) {
        return item.id.toLowerCase() === tokenPairs[0].indexToken.toLowerCase();
      });

      if (_inToken && _outToken) {
        handleTokenChange(_outToken, _inToken);
        setInToken(_inToken);
        setOutToken(_outToken);
      }
    }

    if (selectList.length > 0 && tokenPairs.length > 0 && positionList.length > 0 && inToken && outToken) {
      handleTokenChange(outToken, inToken);
    }
  }, [selectList, tokenPairs, positionList, inToken, outToken]);

  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      boxShadow = _theme$useToken$token.boxShadow,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var inAmountUSD = (0,react.useMemo)(function () {
    if (inAmount && curPair && curData) {
      return (Number(inAmount) * Number(inToken === null || inToken === void 0 ? void 0 : inToken.userOraclePrice)).toFixed(2);
    }
  }, [inAmount, curPair, tradeType, targetPrice, curData]);
  var outAmountUSD = (0,react.useMemo)(function () {
    if (outAmount && outToken && curPair) {
      return (Number(outAmount) * (tradeType === 'market' ? Number(curPair === null || curPair === void 0 ? void 0 : curPair.userIndexPrice) : Number(targetPrice))).toFixed(2);
    }
  }, [outAmount, outToken, tradeType, targetPrice, curPair]);

  var _handleInChange = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _yield$calcLimitData, _yield$calcLimitData2, _yield$calcLimitData3, size, _curData, err;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!outToken || !inToken || !chain || !wallet || !osdData || !Number(inAmount) || !curPair || !curPosition)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return (0,contract/* calcLimitData */.Kj)({
                curPair: curPair,
                curPosition: curPosition,
                amount: String(inAmount),
                type: 'in',
                tradeType: tradeType,
                leverage: leverage,
                targetPrice: String(targetPrice),
                chain: chain,
                wallet: wallet,
                osdData: osdData,
                inToken: inToken
              });

            case 4:
              _yield$calcLimitData = _context.sent;
              _yield$calcLimitData2 = slicedToArray_default()(_yield$calcLimitData, 2);
              _yield$calcLimitData3 = _yield$calcLimitData2[0];
              size = _yield$calcLimitData3.size;
              _curData = _yield$calcLimitData3.curData;
              err = _yield$calcLimitData2[1];

              if (!err) {
                _context.next = 13;
                break;
              }

              message/* default.error */.ZP.error(err.error);
              return _context.abrupt("return");

            case 13:
              setOutAmount(size);

              if (_curData) {
                setCurData(_curData);
              }

              setAmountType('in');

            case 16:
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
      var _yield$calcLimitData4, _yield$calcLimitData5, _yield$calcLimitData6, size, _curData, err;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!outToken || !inToken || !chain || !Number(outAmount) || !wallet || !osdData || !curPair || !curPosition || !leverage)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return (0,contract/* calcLimitData */.Kj)({
                curPair: curPair,
                curPosition: curPosition,
                amount: String(outAmount),
                type: 'out',
                tradeType: tradeType,
                leverage: leverage,
                targetPrice: String(targetPrice),
                chain: chain,
                wallet: wallet,
                inToken: inToken,
                osdData: osdData
              });

            case 4:
              _yield$calcLimitData4 = _context2.sent;
              _yield$calcLimitData5 = slicedToArray_default()(_yield$calcLimitData4, 2);
              _yield$calcLimitData6 = _yield$calcLimitData5[0];
              size = _yield$calcLimitData6.size;
              _curData = _yield$calcLimitData6.curData;
              err = _yield$calcLimitData5[1];

              if (!err) {
                _context2.next = 13;
                break;
              }

              message/* default.error */.ZP.error(err.error);
              return _context2.abrupt("return");

            case 13:
              setInAmount(size);

              if (_curData) {
                setCurData(_curData);
              } // const [_in, error] = await calcSwapAmountIn({ walletName: wallet?.name || '', chainId: chain.id, amount: outAmount, inToken, outToken });
              // if (error) {
              //     message.error(error.error);
              //     setInAmount('')
              //     return
              // }
              // console.log(_in)
              // setInAmount(_in)


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
      // let _pair = tokenPairs.find(pair => pair.collateralToken.toLowerCase() === token.id.toLowerCase() && pair.indexToken.toLowerCase() === outToken?.id.toLowerCase());
      // if (!_pair) _pair = tokenPairs.find(pair => pair.collateralToken.toLowerCase() === token.id.toLowerCase());
      // if (!_pair) throw new Error('unKnown Error')
      // let _outToken = selectOutList.find(token => token.id.toLowerCase() === _pair?.indexToken.toLowerCase())
      // if (_outToken) {
      //     handleTokenChange(token, _outToken)
      //     setInToken(token)
      //     setOutToken(_outToken)
      //     handleInChange()
      // }
      setInToken(token);
      handleInChange();
    } else {
      // let _pair = tokenPairs.find(pair => pair.collateralToken.toLowerCase() === inToken?.id.toLowerCase() && pair.indexToken.toLowerCase() === token.id.toLowerCase());
      // if (!_pair) _pair = tokenPairs.find(pair => pair.indexToken.toLowerCase() === token.id.toLowerCase());
      // if (!_pair) throw new Error('unKnown Error')
      // let _inToken = selectInList.find(token => token.id.toLowerCase() === _pair?.collateralToken.toLowerCase())
      // if (_inToken) {
      //     handleTokenChange(_inToken, token)
      //     setOutToken(token)
      //     setInToken(_inToken)
      //     if (inAmount) {
      //         handleInChange()
      //     } else {
      //         handleOutChange();
      //     }
      // }
      setOutToken(token);

      if (inToken) {
        handleTokenChange(token, inToken);
      }

      if (inAmount) {
        handleInChange();
      } else {
        handleOutChange();
      }
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
      var _yield$increasePositi, _yield$increasePositi2, ret, err, _yield$limitIncreaseP, _yield$limitIncreaseP2, _ret, _err, _yield$limitIncreaseA, _yield$limitIncreaseA2, _ret2, _err2;

      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!chain || !wallet || !curData || !inToken || !outAmount || !inAmount || !outToken || !curPair)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              setSubmiting(true);

              if (!(tradeType === 'market')) {
                _context3.next = 14;
                break;
              }

              _context3.next = 6;
              return (0,contract/* increasePosition */.tu)({
                chain: chain,
                wallet: wallet,
                inToken: inToken,
                outToken: outToken,
                isLong: isLong,
                marginDelta: BigInt((0,utils/* amountRaw */.xo)(String(curData._marginDeltaAndFees), curPair.userCollateralTokenDecimal)),
                //curData.marginDelta ,
                _notionalDelta: curData.notionalDelta,
                curPair: curPair
              });

            case 6:
              _yield$increasePositi = _context3.sent;
              _yield$increasePositi2 = slicedToArray_default()(_yield$increasePositi, 2);
              ret = _yield$increasePositi2[0];
              err = _yield$increasePositi2[1];

              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              if (ret) {
                setSuccRet({
                  type: isLong ? 'openLong' : 'openShort',
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                    setInAmount(0);
                    setOutAmount(0);
                    setCurData(undefined);
                  },
                  title: 'Open  Success',
                  hash: (ret === null || ret === void 0 ? void 0 : ret.hash) || '',
                  okText: 'Close'
                });
                updataTokens();
                setPositionLoading(true);
                updatePositions();
                updatePairs();
              }

              _context3.next = 39;
              break;

            case 14:
              if (tpsl) {
                _context3.next = 28;
                break;
              }

              _context3.next = 17;
              return (0,contract/* limitIncreasePosition */.IH)({
                chain: chain,
                wallet: wallet,
                targetPrice: String(targetPrice),
                inToken: inToken,
                outToken: outToken,
                curPair: curPair,
                isLong: isLong,
                notionalDelta: curData.notionalDelta,
                marginDelta: BigInt((0,utils/* amountRaw */.xo)(String(curData._marginDeltaAndFees), curPair.userCollateralTokenDecimal))
              });

            case 17:
              _yield$limitIncreaseP = _context3.sent;
              _yield$limitIncreaseP2 = slicedToArray_default()(_yield$limitIncreaseP, 2);
              _ret = _yield$limitIncreaseP2[0];
              _err = _yield$limitIncreaseP2[1];

              if (!_err) {
                _context3.next = 25;
                break;
              }

              message/* default.error */.ZP.error(_err.error);
              setSubmiting(false);
              return _context3.abrupt("return");

            case 25:
              if (_ret) {
                setSuccRet({
                  type: 'openLong',
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                    setInAmount(0);
                    setOutAmount(0);
                    setTargetPrice(0);
                  },
                  title: 'Open  Success',
                  hash: (_ret === null || _ret === void 0 ? void 0 : _ret.hash) || '',
                  okText: 'Close'
                });
                updataTokens();
                setLimitLoading(true);
                updateLimitOrder();
              }

              _context3.next = 39;
              break;

            case 28:
              _context3.next = 30;
              return (0,contract/* limitIncreaseAndDecreasePosition */.mE)({
                chain: chain,
                wallet: wallet,
                targetPrice: String(targetPrice),
                inToken: inToken,
                outToken: outToken,
                curPair: curPair,
                isLong: isLong,
                notionalDelta: curData.notionalDelta,
                marginDelta: BigInt((0,utils/* amountRaw */.xo)(String(curData._marginDeltaAndFees), curPair.userCollateralTokenDecimal)),
                tpPrice: tpPrice,
                slPrice: slPrice
              });

            case 30:
              _yield$limitIncreaseA = _context3.sent;
              _yield$limitIncreaseA2 = slicedToArray_default()(_yield$limitIncreaseA, 2);
              _ret2 = _yield$limitIncreaseA2[0];
              _err2 = _yield$limitIncreaseA2[1];

              if (!_err2) {
                _context3.next = 38;
                break;
              }

              message/* default.error */.ZP.error(_err2.error);
              setSubmiting(false);
              return _context3.abrupt("return");

            case 38:
              if (_ret2) {
                setSuccRet({
                  type: 'openLong',
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                    setInAmount(0);
                    setOutAmount(0);
                  },
                  title: 'Open  Success',
                  hash: (_ret2 === null || _ret2 === void 0 ? void 0 : _ret2.hash) || '',
                  okText: 'Close'
                });
                updataTokens();
                setLimitLoading(true);
                updateLimitOrder();
              }

            case 39:
              // if (err) {
              //     message.error(err.error)
              //     return
              // }
              // message.success('SWAP SUCCESS' + ret?.hash)
              // updataTokens()
              setSubmiting(false);

            case 40:
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

  (0,react.useEffect)(function () {
    if (tpsl) {
      var _maxPrice = Number((targetPrice * 1.1).toFixed(2));

      var _minPrice = Number((targetPrice * 0.9).toFixed(2));

      setTpPrice(isLong ? _maxPrice : _minPrice);
      setSlPrice(isLong ? _minPrice : _maxPrice);
    }
  }, [targetPrice, tpsl]);
  var TPSLOpt = {
    slPrice: slPrice,
    setSlPrice: setSlPrice,
    tpPrice: tpPrice,
    setTpPrice: setTpPrice,
    tpsl: tpsl,
    setTPSL: function setTPSL(_tpsl) {
      _setTPSL(_tpsl);

      if (_tpsl) {
        var _maxPrice = Number((targetPrice * 1.1).toFixed(2));

        var _minPrice = Number((targetPrice * 0.9).toFixed(2));

        setTpPrice(isLong ? _maxPrice : _minPrice);
        setSlPrice(isLong ? _minPrice : _maxPrice);
      }
    },
    setLeverage: function setLeverage(value) {
      _setLeverage(value);

      if (amountType === 'in') handleInChange();
      if (amountType === 'out') handleOutChange();
    },
    targetPrice: targetPrice,
    amountOut: Number(outAmount),
    isLong: isLong,
    tradeType: tradeType,
    cost: Number(inAmountUSD)
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    className: "hay-swap",
    gutter: [4, 4],
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "tradeTypes",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: tradeType === 'market' ? "active" : '',
        onClick: function onClick() {
          setTradeType('market');
        },
        children: "Market"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: tradeType === 'limit' ? "active" : '',
        onClick: function onClick() {
          setTradeType('limit');
        },
        children: "Limit"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        header: inToken && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: ["Pay margin:  ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: [" $", curData === null || curData === void 0 ? void 0 : curData._marginUSD]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {
              setInAmount(inToken.userTokenBalance);
              handleInChange();
            },
            children: ["Balance: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: Number(inToken.userTokenBalance).toFixed(4)
            })]
          })]
        }),
        amount: Number(inAmount) || 0,
        onAmountChange: function onAmountChange(value) {
          setInAmount(value);
          handleInChange();
        },
        maxValue: inToken ? Number(inToken.userTokenBalance) : 0,
        currentToken: inToken,
        onTokenChange: function onTokenChange(token) {
          return handleSelectChannge(token, 'in');
        },
        tokenList: selectInList,
        canSelectToken: tradeType === 'market'
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        header: outToken && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {},
            children: [" ", isLong ? 'Long' : 'Short', " size: ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              style: {
                fontSize: 12,
                color: isLong ? '#00a980' : '#eb5757'
              },
              children: ["$", outAmountUSD]
            })]
          }), tradeType === 'market' && /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: ["Market Price:  ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              style: {
                color: colorPrimary
              },
              children: ["$", curPair && curPair.userIndexPrice]
            })]
          })]
        }),
        amount: Number(outAmount),
        onAmountChange: function onAmountChange(value) {
          setOutAmount(value);
          handleOutChange();
        },
        showSlider: false,
        maxValue: Infinity,
        currentToken: outToken,
        onTokenChange: function onTokenChange(token) {
          return handleSelectChannge(token, 'out');
        },
        tokenList: selectOutList
      })
    }), tradeType === 'limit' && /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        header: outToken && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {},
            children: " Price"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            children: ["Market Price:  ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: curPair && curPair.userIndexPrice
            })]
          })]
        }),
        amount: Number(targetPrice) || 0,
        onAmountChange: function onAmountChange(value) {
          setTargetPrice(value);
          handleOutChange();
        },
        minValue: isLong ? 0 : Number(curPair && curPair.userIndexPrice),
        maxValue: isLong ? Number(curPair && curPair.userIndexPrice) : Infinity,
        showSelectToken: false,
        showSlider: false
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_TPSL, objectSpread2_default()({
        maxLeverage: curPair && curPair.userMaxLeverage || 1,
        leverage: leverage
      }, TPSLOpt))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "InputCardTips",
        style: {
          color: colorTextSecondary,
          fontSize: 13
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "InputCardTip",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "lable",
            children: formatMessage({
              id: 'entry_price'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "fee",
            children: ["$", tradeType === 'market' ? curPair && curPair.userIndexPrice : targetPrice]
          })]
        }), tradeType === 'market' && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "InputCardTip",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "lable",
            children: formatMessage({
              id: 'liquidation_price'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "value",
            children: curData && "$".concat(curData.liqPrice)
          })]
        }), tradeType === 'market' && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "InputCardTip",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "lable",
            children: "FundingFee"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "value",
            children: [curData && curData._hourFundingRate, "%/1h ($", curData && curData._fundingFee, ")"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "InputCardTip",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "label",
            children: "TradingFee"
          }), curData && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "value",
            children: [curData._tradingFeeRate, "% ($", curData._tradingFee, "  )"]
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FormButton/* default */.Z, {
        onClick: handleSubmit,
        loading: submiting,
        wrapClassName: isLong ? 'long' : 'short',
        className: isLong ? 'long' : 'short',
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
          condition: !!inToken && Number(inAmount) > Number(inToken.userTokenBalance),
          text: 'Low balance',
          type: 'primary',
          onClick: function onClick() {}
        }, {
          condition: tradeType === 'limit' && !!curPair && !!targetPrice && (isLong && Number(targetPrice) >= Number(curPair.userIndexPrice) || !isLong && Number(targetPrice) <= Number(curPair.userIndexPrice)),
          text: formatMessage({
            id: 'Invalid Limit Price'
          }),
          type: 'primary',
          onClick: function onClick() {}
        }, {
          condition: !!inToken && !!curData && Number(curData._marginDeltaAndFees) > inToken.userTokenBalance,
          text: 'Low balance',
          type: 'primary',
          onClick: function onClick() {}
        }],
        children: ["Open ", isLong ? 'Long' : 'Short']
      })
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

/* harmony default export */ var components_Long = (Long);
;// CONCATENATED MODULE: ./src/pages/trade/components/TradeHistory/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var TradeHistorymodules = ({});
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 120 modules
var table = __webpack_require__(15914);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var esm_objectSpread2 = __webpack_require__(1413);
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
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ArrowRightOutlined
  }));
};
ArrowRightOutlined_ArrowRightOutlined.displayName = 'ArrowRightOutlined';
/* harmony default export */ var icons_ArrowRightOutlined = (/*#__PURE__*/react.forwardRef(ArrowRightOutlined_ArrowRightOutlined));
;// CONCATENATED MODULE: ./src/pages/trade/components/TradeHistory/index.tsx











var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var beautyHash = function beautyHash(hash) {
  return hash.replace(/(\w{7})\w+(\w{5})/, '$1...$2');
};

var TradeHistory = function TradeHistory(_ref) {
  var type = _ref.type;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain;

  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
      colorPrimary = _theme$useToken.token.colorPrimary;

  var _useModel2 = (0,_umi_production_exports.useModel)('tradeHistory'),
      mthParams = _useModel2.mthParams,
      setMthParams = _useModel2.setMthParams,
      mthData = _useModel2.mthData,
      pthData = _useModel2.pthData,
      pthParams = _useModel2.pthParams,
      setPthParams = _useModel2.setPthParams,
      pthLoading = _useModel2.pthLoading,
      setPthLoading = _useModel2.setPthLoading,
      mthLoading = _useModel2.mthLoading,
      setMthLoading = _useModel2.setMthLoading;

  var showTotal = function showTotal(total) {
    if (type === 'market') {
      var size = mthParams.size,
          page = mthParams.page;
      var lastPageCount = size * page > total ? total : size * page;
      return "".concat(size * (page - 1), " - ").concat(lastPageCount, " of ").concat(total);
    } else {
      var _size = pthParams.size,
          _page = pthParams.page;

      var _lastPageCount = _size * _page > total ? total : _size * _page;

      return "".concat(_size * (_page - 1), " - ").concat(_lastPageCount, " of ").concat(total);
    }
  };

  var onChange = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(value) {
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (type === 'market') {
                setMthLoading(true);
                setMthParams(objectSpread2_default()(objectSpread2_default()({}, mthParams), {}, {
                  page: value
                }));
              } else {
                setPthLoading(true);
                setPthParams(objectSpread2_default()(objectSpread2_default()({}, pthParams), {}, {
                  page: value
                }));
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var columns = [{
    title: '',
    dataIndex: 'timestamp',
    key: 'timestamp',
    ellipsis: true,
    width: md ? 200 : 130,
    render: function render(text) {
      return md ? dayjs_min_default()(text * 1000).format('YYYY/MM/DD, HH:mm A') : dayjs_min_default()(text * 1000).format('MM/DD, HH:mm A');
    }
  }, {
    title: '',
    dataIndex: 'content',
    key: 'content',
    ellipsis: true
  }, {
    title: '',
    dataIndex: 'hash',
    key: 'hash',
    width: md ? 200 : 40,
    render: function render(text) {
      return md ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ['TX link', ":\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "linkColor",
          href: "".concat(chain && chain.exporerTxUrl, "/").concat(text, "?network=").concat(chain && chain.network),
          target: "_blank",
          rel: "noreferrer",
          children: beautyHash(text)
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        className: "linkColor",
        href: "".concat(chain && chain.exporerTxUrl, "/").concat(text, "?network=").concat(chain && chain.network),
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowRightOutlined, {
          style: {
            color: colorPrimary,
            transform: 'rotate(-0.125turn)'
          }
        })
      });
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: TradeHistorymodules.container,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: TradeHistorymodules.table_wrap,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
        columns: columns,
        dataSource: type === 'market' ? mthData.list : pthData.list,
        className: TradeHistorymodules.table,
        rowKey: "id",
        showHeader: false,
        loading: type === 'market' ? mthLoading : pthLoading,
        size: "small",
        pagination: {
          onChange: onChange,
          total: type === 'market' ? mthData.total : pthData.total,
          showTotal: showTotal
        }
      })
    })
  });
};

/* harmony default export */ var components_TradeHistory = (TradeHistory);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
;// CONCATENATED MODULE: ./src/pages/trade/components/LimitOrder/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/trade/components/LimitOrder/index.tsx








 //本来考虑穿过去处理 发现useEffect。。





var LimitOrder = function LimitOrder() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('future'),
      LimitOrderList = _useModel2.LimitOrderList,
      updateLimitOrder = _useModel2.updateLimitOrder,
      limitLoading = _useModel2.limitLoading,
      setLimitLoading = _useModel2.setLimitLoading;

  var _useState = (0,react.useState)(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      cancelingId = _useState2[0],
      setCancelId = _useState2[1];

  var handleCancel = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(record) {
      var _yield$cancelIncrease, _yield$cancelIncrease2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!chain || !wallet)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              setCancelId(record.id);
              _context2.next = 5;
              return (0,contract/* cancelIncreaseOrder */.VU)({
                chain: chain,
                wallet: wallet,
                _orderIndex: String(record.orderIndex)
              });

            case 5:
              _yield$cancelIncrease = _context2.sent;
              _yield$cancelIncrease2 = slicedToArray_default()(_yield$cancelIncrease, 2);
              ret = _yield$cancelIncrease2[0];
              err = _yield$cancelIncrease2[1];

              if (!err) {
                _context2.next = 13;
                break;
              }

              message/* default.error */.ZP.error(err.error);
              setCancelId('');
              return _context2.abrupt("return");

            case 13:
              setTimeout( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
                return regeneratorRuntime_default()().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        setLimitLoading(true);
                        _context.next = 3;
                        return updateLimitOrder();

                      case 3:
                        setCancelId('');

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })), 2000);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleCancel(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var columns = [{
    title: 'Time',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: function render(text) {
      return dayjs_min_default()(text * 1000).format('MM/DD, HH:mm:ss');
    },
    align: 'right'
  }, {
    title: 'Order type',
    dataIndex: 'execStatusName',
    key: 'execStatusName',
    align: 'right',
    render: function render(text, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: record.execStatus === 3 && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: record.targetPrice ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: record.isLong ? 'longColor' : 'shortColor',
              children: record.isLong ? 'Limit long' : 'Limit short'
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontWeight: 500
              },
              children: [" ", record.indexSymbol]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: record.isLong ? 'longColor' : 'shortColor',
              children: "TP/SL"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontWeight: 500
              },
              children: [" ", record.indexSymbol]
            }), "  ", record.isLong ? ' long' : ' short']
          })
        })
      });
    }
  }, {
    title: 'Size',
    dataIndex: 'notionalDeltaForUSD',
    key: 'notionalDeltaForUSD',
    render: function render(text) {
      return "$".concat(text);
    },
    align: 'right'
  }, // {
  //   title: <div >
  //     <span>
  //       Margin
  //     </span>
  //     <span>
  //       Value
  //     </span>
  //   </div>,
  //   dataIndex: 'Margin',
  //   key: 'Margin',
  //   render: (text, record) => (<div >
  //     <span>
  //       {text} {record.collateralSymbol}
  //     </span>
  //     <span>
  //       ${record.MarginValue}
  //     </span>
  //   </div>),
  //   align: 'right'
  // },
  {
    title: 'Price',
    dataIndex: 'targetPrice',
    key: 'targetPrice',
    align: 'right',
    render: function render(text, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: record.targetPrice ? "$".concat(record.targetPrice) : "$".concat(record.maxPrice, "-$").concat(record.minPrice)
      });
    }
  }, {
    title: function title() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        onClick: function onClick() {
          setLimitLoading(true);
          updateLimitOrder();
        },
        children: "Manage  "
      });
    },
    key: 'action',
    align: 'right',
    render: function render(_, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
        type: "link",
        onClick: function onClick() {
          handleCancel(record);
        },
        disabled: !record.targetPrice,
        loading: record.id === cancelingId,
        children: "Cancel"
      });
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "limitOrderTableWrap",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
        columns: columns,
        dataSource: LimitOrderList,
        size: "small",
        loading: (wallet === null || wallet === void 0 ? void 0 : wallet.isConnected) && limitLoading,
        rowKey: "id",
        className: "limitOrderTable"
      })
    })
  });
};

/* harmony default export */ var components_LimitOrder = (LimitOrder);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(75081);
;// CONCATENATED MODULE: ./src/components/tradeview/index.tsx





var isPhone = false;

function updateSelectedIntervalButton(button) {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  window.tvWidget.selectedIntervalButton && window.tvWidget.selectedIntervalButton.classList.remove('selected');
  button.classList.add('selected'); // @ts-ignore

  window.tvWidget.selectedIntervalButton = button;
}

function Tradeview(props) {
  // console.log(props)
  var symbol = props.symbol,
      theme = props.theme,
      datafeedUrl = props.datafeedUrl;

  var _useState = (0,react.useState)(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      spinning = _useState2[0],
      setSpinning = _useState2[1];

  var locale = (0,_umi_production_exports.getLocale)();
  var dark = {
    bg: '#1E2439',
    text: '#fff'
  };
  var light = {
    bg: '#fff',
    text: '#000'
  };
  var t = theme === 'dark' ? dark : light;

  var initOnReady = function initOnReady() {
    // let datafeedUrl = 'https://demo-feed-data.tradingview.com'
    // let datafeedUrl = datafeedUrl'https://arbitrum-data-feed.onchain.trade/data-feed'
    // if (dataUrl !== '') {
    //   datafeedUrl = dataUrl.startsWith('https://') ? dataUrl : `https://${dataUrl}`
    // }
    // @ts-ignore
    var interval = '5';
    var datafeed = new window.Datafeeds.UDFCompatibleDatafeed(datafeedUrl + '/data-feed');
    window.tvWidget = new window.TradingView.widget({
      // debug: true, // uncomment this line to see Library errors and warnings in the console
      // fullscreen: true,
      // symbol: 'AAPL',
      symbol: symbol.toLowerCase(),
      interval: interval,
      container: 'tv_chart_container',
      width: props.width || '676px',
      height: '302px',
      //	BEWARE: no trailing slash is expected in feed URL
      // @ts-ignore
      datafeed: datafeed,
      library_path: '/charting_library/',
      locale: locale === 'zh-cn' ? 'zh' : 'en',
      disabled_features: ['use_localstorage_for_settings', 'header_widget_dom_node', 'header_symbol_search', 'header_resolutions', 'header_chart_type', 'header_settings', 'header_indicators', 'header_compare', 'header_undo_redo', 'header_screenshot', 'header_fullscreen_button', 'border_around_the_chart', 'header_saveload', 'drawing_templates', // 'insert_indicator_dialog_shortcut',
      // 'create_volume_indicator_by_default_once'
      'source_selection_markers', 'volume_force_overlay', 'create_volume_indicator_by_default_once', 'create_volume_indicator_by_default', 'study_symbol_ticker_description', 'insert_indicator_dialog_shortcut'],
      enabled_features: ['header_widget'],
      charts_storage_url: 'https://saveload.tradingview.com',
      charts_storage_api_version: '1.1',
      client_id: 'tradingview.com',
      user_id: 'public_user_id',
      preset: 'mobile',
      toolbar_bg: '#ffffff',
      header_widget_buttons_mode: 'adaptive',
      custom_css_url: '/css/tradingView.css',
      loading_screen: {
        backgroundColor: t.bg,
        foregroundColor: '#03cdc1'
      },
      theme: theme,
      overrides: {
        'paneProperties.backgroundType': 'solid',
        'paneProperties.background': t.bg,
        // 'paneProperties.backgroundGradientStartColor': "#ffffff",
        'scalesProperties.lineColor': t.bg,
        // 'scalesProperties.textColor': t.text,
        // 'paneProperties.vertGridProperties.color': t.bg,
        // 'paneProperties.horzGridProperties.color': t.bg,
        'mainSeriesProperties.candleStyle.barColorsOnPrevClose': true,
        'mainSeriesProperties.haStyle.barColorsOnPrevClose': true,
        'mainSeriesProperties.barStyle.barColorsOnPrevClose': true
      }
    }); //
    // @ts-ignore

    window.tvWidget.onChartReady(function () {
      setSpinning(false); // @ts-ignore

      var chart = window.tvWidget.chart();

      var doc = window.tvWidget._iFrame.contentWindow.document.getElementsByTagName('html')[0]; // doc.style.setProperty('--tv-color-pane-background', t.bg)        
      // chart.style.setAttribute('style', `background:${t.bg}`);
      // chart.setAttribute('style', `background:${t.bg}`)
      // console.log('onChartReady')
      // https://1kx-zksync-data-feed.volt.id/data-feed/select


      var buttons = [// { label: 'time', resolution: '15s' },
      {
        label: '1m',
        resolution: '1'
      }, {
        label: '5m',
        resolution: '5'
      }, {
        label: '15m',
        resolution: '15'
      }, // { label: '30m', resolution: '30' },
      {
        label: '1H',
        resolution: '60'
      }, // { label: '4h', resolution: '240' },
      {
        label: '1D',
        resolution: 'D'
      }, // { label: '1w', resolution: '1W' },
      {
        label: '1M',
        resolution: '1M'
      } // { label: '1y', resolution: '12M' },
      ];
      chart.onIntervalChanged().subscribe(null, function () {
        window.tvWidget.changingInterval = false;
      });
      buttons.forEach(function (item) {
        var button = window.tvWidget.createButton(); // console.log('button', Object.keys(button.__proto__), typeof button)
        // console.log('button', button)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions

        item.resolution === interval && updateSelectedIntervalButton(button);
        button.setAttribute('data-resolution', item.resolution);
        button.setAttribute('data-chart-type', 1);
        var calssName = 'cusButton';

        if (item.resolution === interval) {
          calssName = 'cusButton selected';
        }

        button.setAttribute('class', calssName);
        button.innerHTML = '<span>' + item.label + '</span>';
        button.addEventListener('click', function () {
          var chartType = +button.getAttribute('data-chart-type');
          var resolution = button.getAttribute('data-resolution');
          localStorage.setItem('tv-interval-charttype', "".concat(resolution, "-").concat(chartType));

          if (!window.tvWidget.changingInterval && !button.classList.contains('selected')) {
            if (chart.resolution() !== resolution) {
              // console.log('change resolution:', resolution, chart.resolution());
              window.tvWidget.changingInterval = true;
              datafeed._hasExeGetBars = false;
              chart.setResolution(resolution);
            }

            if (chart.chartType() !== chartType) {
              chart.setChartType(chartType);
              datafeed._hasExeGetBars = false;
            }

            updateSelectedIntervalButton(button);
          }
        });
      });
    });
  };

  (0,react.useEffect)(function () {
    setSpinning(true);
    initOnReady();
  }, [theme, symbol, props.width]); // useEffect(() => {
  //   window.addEventListener('resize', handleResize)
  //   return window.removeEventListener('resize', handleResize)
  // }, [])

  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: spinning,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      id: "tv_chart_container",
      style: {
        background: t.bg,
        opacity: spinning ? 0 : 1,
        transition: 'opacity 0.5s ease-out'
      }
    })
  });
}

/* harmony default export */ var tradeview = (Tradeview);
// EXTERNAL MODULE: ./src/components/TokenSelect/index.tsx + 1 modules
var TokenSelect = __webpack_require__(73687);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(83062);
// EXTERNAL MODULE: ./node_modules/antd/es/list/index.js + 2 modules
var list = __webpack_require__(51158);
// EXTERNAL MODULE: ./node_modules/antd/es/statistic/index.js + 5 modules
var es_statistic = __webpack_require__(55054);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ArrowUpOutlined.js
// This icon file is generated automatically.
var ArrowUpOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" } }] }, "name": "arrow-up", "theme": "outlined" };
/* harmony default export */ var asn_ArrowUpOutlined = (ArrowUpOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowUpOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ArrowUpOutlined_ArrowUpOutlined = function ArrowUpOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ArrowUpOutlined
  }));
};
ArrowUpOutlined_ArrowUpOutlined.displayName = 'ArrowUpOutlined';
/* harmony default export */ var icons_ArrowUpOutlined = (/*#__PURE__*/react.forwardRef(ArrowUpOutlined_ArrowUpOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowDownOutlined.js + 1 modules
var ArrowDownOutlined = __webpack_require__(77171);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
;// CONCATENATED MODULE: ./src/pages/trade/components/Margin/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/trade/components/Margin/index.tsx

















var Margin_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var AddContent = function AddContent(_ref) {
  var currentPostion = _ref.currentPostion,
      actionType = _ref.actionType,
      _onClose = _ref.onClose;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('future'),
      updatePositions = _useModel2.updatePositions,
      setPairsLoading = _useModel2.setPairsLoading,
      updatePairs = _useModel2.updatePairs;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
      colorTextSecondary = _theme$useToken.token.colorTextSecondary;

  var collateralToken = currentPostion.collateralTokenObj,
      indexToken = currentPostion.indexTokenObj,
      isLong = currentPostion.isLong,
      pair = currentPostion.pair,
      formatInfo = currentPostion.formatInfo;
  if (!collateralToken || !indexToken || !pair || !chain || !wallet || !formatInfo) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  var userLiqPrice = formatInfo.liqPrice,
      margin = formatInfo.leftMargin;
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
              updatePairs();
              _context.next = 30;
              return updatePositions();

            case 30:
              setSubmiting(false);

            case 31:
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
              }), ": $", Number(margin).toFixed(4)]
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
                children: Number(userTokenBalance).toFixed(4)
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
            children: [data.oldLeverage, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowRightOutlined, {}), " ", data.newLeverage]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Margin Rate",
            children: [data.oldMr, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowRightOutlined, {}), " ", data.newMr]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Maintenance Margin Rate",
            children: data.mmr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "EST Liq. Price",
            children: ["$", Number(userLiqPrice).toFixed(4), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowRightOutlined, {}), "  $", data.newLiqPrice]
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
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 34 modules
var es_select = __webpack_require__(67527);
;// CONCATENATED MODULE: ./src/pages/trade/components/ColsePosition/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/trade/components/ColsePosition/index.tsx


















var ColsePosition_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var DescItem = function DescItem(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    className: "InputCardTip",
    style: {
      fontSize: 13
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
        children: label
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
        children: children
      })
    })]
  });
};

var ColsePosition_AddContent = function AddContent(_ref2) {
  var currentPostion = _ref2.currentPostion,
      actionType = _ref2.actionType,
      _onClose = _ref2.onClose;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      poolTokenExtList = _useModel.poolTokenExtList;

  var _useModel2 = (0,_umi_production_exports.useModel)('tradeTokenList'),
      selectInList = _useModel2.selectInList;

  var _useModel3 = (0,_umi_production_exports.useModel)('future'),
      updatePositions = _useModel3.updatePositions,
      setPairsLoading = _useModel3.setPairsLoading,
      updatePairs = _useModel3.updatePairs;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

  var collateralToken = currentPostion.collateralTokenObj,
      indexToken = currentPostion.indexTokenObj,
      isLong = currentPostion.isLong,
      pair = currentPostion.pair,
      formatInfo = currentPostion.formatInfo;
  if (!collateralToken || !indexToken || !pair || !chain || !wallet || !formatInfo) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  var margin = formatInfo.leftMargin,
      size = formatInfo.size;
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

  var _useState7 = (0,react.useState)([{
    value: collateralToken.id,
    label: "0 In ".concat(collateralToken.symbol)
  }]),
      _useState8 = slicedToArray_default()(_useState7, 2),
      options = _useState8[0],
      setOptions = _useState8[1];

  var _useState9 = (0,react.useState)(collateralToken.id),
      _useState10 = slicedToArray_default()(_useState9, 2),
      tokenOut = _useState10[0],
      setTokenOut = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = slicedToArray_default()(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useState13 = (0,react.useState)(),
      _useState14 = slicedToArray_default()(_useState13, 2),
      data = _useState14[0],
      setData = _useState14[1];

  var _useState15 = (0,react.useState)(),
      _useState16 = slicedToArray_default()(_useState15, 2),
      succRet = _useState16[0],
      setSuccRet = _useState16[1];

  var maxRemovable = (0,react.useMemo)(function () {
    if (actionType === 'close') {
      return size;
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
      setErrorMsg(err.error);
      return;
    }

    if (_data) {
      setData(_data);
    }

    setErrorMsg('');
  }, [currentPostion, amountIn]);
  (0,react.useEffect)(function () {
    var getOptions = /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var tmp, i, outToken, _yield$calcSwapAmount, _yield$calcSwapAmount2, amountOut, error;

        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (data) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                setLoading(true);
                tmp = [{
                  value: collateralToken.id,
                  label: "".concat(data.receive, " In ").concat(collateralToken.symbol),
                  disabled: false
                }];
                i = 0;

              case 5:
                if (!(i < selectInList.length)) {
                  _context.next = 19;
                  break;
                }

                outToken = selectInList[i];

                if (!(outToken.id.toLowerCase() === collateralToken.id.toLowerCase())) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("continue", 16);

              case 9:
                _context.next = 11;
                return (0,contract/* calcSwapAmountOut */.rv)({
                  walletName: wallet.name,
                  chainId: chain.id,
                  amount: data.receive,
                  inToken: collateralToken,
                  outToken: outToken
                });

              case 11:
                _yield$calcSwapAmount = _context.sent;
                _yield$calcSwapAmount2 = slicedToArray_default()(_yield$calcSwapAmount, 2);
                amountOut = _yield$calcSwapAmount2[0];
                error = _yield$calcSwapAmount2[1];

                if (amountOut !== null) {
                  tmp.push({
                    value: outToken.id,
                    label: "".concat(amountOut.toString(), " In ").concat(outToken.symbol),
                    disabled: false
                  });
                } else {
                  if (tokenOut === outToken.id) {
                    setTokenOut(collateralToken.id);
                  }

                  tmp.push({
                    value: outToken.id,
                    label: "".concat(error.error.replace('Failed to submit transaction: cannot estimate transaction:', ''), " In ").concat(outToken.symbol),
                    disabled: true
                  });
                }

              case 16:
                i++;
                _context.next = 5;
                break;

              case 19:
                setLoading(false);
                setOptions(tmp);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getOptions() {
        return _ref3.apply(this, arguments);
      };
    }();

    getOptions();
  }, [data]);

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var _yield$decreasePositi, _yield$decreasePositi2, res, error;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setSubmiting(true);
              _context2.next = 3;
              return (0,contract/* decreasePosition */.O0)({
                chain: chain,
                wallet: wallet,
                isLong: isLong,
                amountIn: amountIn,
                currentPosition: currentPostion,
                tokenOut: tokenOut
              });

            case 3:
              _yield$decreasePositi = _context2.sent;
              _yield$decreasePositi2 = slicedToArray_default()(_yield$decreasePositi, 2);
              res = _yield$decreasePositi2[0];
              error = _yield$decreasePositi2[1];

              if (!error) {
                _context2.next = 11;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setSubmiting(false);
              return _context2.abrupt("return");

            case 11:
              // message.success('add' + res.hash)
              if (res) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);

                    _onClose();
                  },
                  type: 'closePosition',
                  title: 'Close Position Success',
                  hash: res.hash,
                  okText: 'Close'
                });
              }

              setPairsLoading(true);
              updatePairs();
              _context2.next = 16;
              return updatePositions();

            case 16:
              setSubmiting(false);

            case 17:
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
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [10, 10],
      className: "hayMarginWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
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
                className: "linkColor",
                onClick: function onClick() {
                  return changeAmount(Number(maxRemovable));
                },
                children: Number(maxRemovable).toFixed(4)
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
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
        className: "haySelect",
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
            children: ["$", Number(margin).toFixed(6), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowRightOutlined, {}), "  $", data.leftMargin]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Margin Rate",
            children: data.mr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "EST Liquidation Price",
            children: ["$", data.liqPrice]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "TradingFee",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              children: [data._tradingFeeRate, "% (", data.tradingFee, " ", collateralToken.symbol, ")"]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "FundingFee",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              children: [Number(currentPostion.formatInfo.marketFundingRate).toFixed(4), "%/1h "]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Receive",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
              value: tokenOut,
              loading: loading,
              style: {
                color: data.isPositive ? '#00a980' : '#eb5757',
                minWidth: 200
              },
              bordered: false,
              options: options,
              onChange: function onChange(value) {
                return setTokenOut(value);
              }
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

var ColsePosition_Content = function Content(props) {
  var defaultAction = props.defaultAction;

  var _useState17 = (0,react.useState)(),
      _useState18 = slicedToArray_default()(_useState17, 2),
      actionType = _useState18[0],
      setActionType = _useState18[1];

  (0,react.useEffect)(function () {
    setActionType(defaultAction);
  }, [defaultAction]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [10, 10],
    className: "Close-Comp",
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
          span: "24"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ColsePosition_AddContent, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
            actionType: "close"
          }))
        })]
      })
    })]
  });
};

var ColsePosition = function ColsePosition(props) {
  var show = props.show,
      onClose = props.onClose;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: true,
      maskClosable: false,
      title: "Close Position",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ColsePosition_Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var components_ColsePosition = (ColsePosition);
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
;// CONCATENATED MODULE: ./src/pages/trade/components/Positions/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/trade/components/Positions/index.tsx



 // import CloseOrder from '../closePosition'

// import { formatLeverage, formatMr, formatPnl } from '../perp/utils'








var Positions_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

function Positions() {
  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _ = function _(text) {
    return formatMessage({
      id: text
    });
  };

  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
      colorTextSecondary = _theme$useToken.token.colorTextSecondary;

  var _useBreakpoint = Positions_useBreakpoint(),
      md = _useBreakpoint.md,
      xl = _useBreakpoint.xl;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      initLoading = _useModel.initLoading;

  var _useModel2 = (0,_umi_production_exports.useModel)('future'),
      positionList = _useModel2.positionList,
      positionLoading = _useModel2.positionLoading;

  var _useState = (0,react.useState)(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      marginVisible = _useState2[0],
      setMarginVisible = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      closeOrderVisible = _useState4[0],
      setCloseOrderVisible = _useState4[1];

  var _useState5 = (0,react.useState)(),
      _useState6 = slicedToArray_default()(_useState5, 2),
      currentPosition = _useState6[0],
      setCurrentPosition = _useState6[1];

  var showMarginModal = function showMarginModal(record) {
    setCurrentPosition(record);
    setMarginVisible(true);
  };

  var closeOrder = function closeOrder(record) {
    setCurrentPosition(record);
    setCloseOrderVisible(true);
  };

  var columns = [{
    title: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: _('positions')
    }),
    dataIndex: 'positions',
    key: 'positions',
    align: 'left',
    render: function render(text, record) {
      var indexTokenObj = record.indexTokenObj,
          isLong = record.isLong,
          formatInfo = record.formatInfo;
      var marketFundingRate = formatInfo.marketFundingRate,
          leverage = formatInfo.leverage,
          notional = formatInfo.notional,
          size = formatInfo.size;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "type",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: isLong ? 'longColor' : 'shortColor',
          children: isLong ? 'L' : 'S'
        }), " ", Number(size).toFixed(4), indexTokenObj.symbol, " ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "text",
          children: [leverage, "x"]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "text",
          children: ["$", Number(notional).toFixed(2)]
        })]
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [_('pnl'), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), _('roe')]
    }),
    dataIndex: 'userSize',
    key: 'userSize',
    align: 'right',
    render: function render(text, record) {
      var formatInfo = record.formatInfo;
      var pnl = formatInfo.pnl,
          pnlRate = formatInfo.pnlRate,
          isPositive = formatInfo.isPositive;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: isPositive ? 'longColor' : 'shortColor',
          children: ["$", Number(pnl).toFixed(2), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), " ", isPositive ? /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowUpOutlined, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDownOutlined/* default */.Z, {}), pnlRate, "%"]
        })
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_('margin'), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Funding Rate"]
    }),
    dataIndex: 'userMargin',
    key: 'userMargin',
    align: 'right',
    render: function render(text, record) {
      var collateralTokenObj = record.collateralTokenObj,
          formatInfo = record.formatInfo;
      var leftMargin = formatInfo.leftMargin,
          margin = formatInfo.margin,
          fundignFee = formatInfo.fundignFee,
          marketFundingRate = formatInfo.marketFundingRate;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(tooltip/* default */.Z, {
          title: "Left Margin:".concat(Number(leftMargin).toFixed(2), "; margin:").concat(Number(margin).toFixed(2), ";FundignFee:").concat(Number(fundignFee).toFixed(2)),
          children: ["$", Number(leftMargin).toFixed(2), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), Number(marketFundingRate).toFixed(4), "%/1h"]
        })
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_('entry_price'), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), _('liq_price')]
    }),
    dataIndex: 'userEntryIndexPrice',
    key: 'userEntryIndexPrice',
    align: 'right',
    render: function render(text, record) {
      var formatInfo = record.formatInfo;
      var entryPrice = formatInfo.entryPrice,
          marketPrice = formatInfo.marketPrice,
          liqPrice = formatInfo.liqPrice;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: ["$", Number(entryPrice).toFixed(4), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "$", Number(liqPrice).toFixed(4)]
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_('mr'), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), _('mmr')]
    }),
    dataIndex: 'mr',
    key: 'mr',
    align: 'right',
    render: function render(text, record) {
      var _record$formatInfo = record.formatInfo,
          mr = _record$formatInfo.mr,
          mmr = _record$formatInfo.mmr;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [mr, /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), mmr]
      });
    }
  }, {
    title: _('manage'),
    dataIndex: 'manage',
    key: 'manage',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "action",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
          type: "link",
          onClick: function onClick() {
            return showMarginModal(record);
          },
          size: "small",
          style: {
            fontSize: 13
          },
          children: _('edit_margin')
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
          type: "link",
          onClick: function onClick() {
            return closeOrder(record);
          },
          size: "small",
          style: {
            fontSize: 13
          },
          children: _('close')
        })]
      });
    }
  }]; // const data:TableListProps<API.PositionItem>={
  //     list:positionList.filter((v) => v.size > 0 && v.userSize),
  //     conf:{
  //         cardName:'',
  //     }
  // }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "positionListWrap",
    children: [xl ? /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
      columns: columns,
      dataSource: positionList.filter(function (v) {
        return !!v.formatInfo;
      }),
      className: "table",
      rowKey: "id",
      loading: (wallet === null || wallet === void 0 ? void 0 : wallet.isConnected) && positionLoading
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.ZP, {
      itemLayout: "horizontal",
      dataSource: positionList.filter(function (v) {
        return !!v.formatInfo;
      }),
      style: {
        paddingBottom: 24
      },
      loading: (wallet === null || wallet === void 0 ? void 0 : wallet.isConnected) && positionLoading || initLoading,
      renderItem: function renderItem(item) {
        var isLong = item.isLong,
            formatInfo = item.formatInfo,
            indexTokenObj = item.indexTokenObj,
            collateralTokenObj = item.collateralTokenObj,
            pair = item.pair;
        var isPositive = formatInfo.isPositive,
            leverage = formatInfo.leverage,
            size = formatInfo.size,
            leftMargin = formatInfo.leftMargin,
            mmr = formatInfo.mmr,
            mr = formatInfo.mr,
            entryPrice = formatInfo.entryPrice,
            liqPrice = formatInfo.liqPrice,
            marketPrice = formatInfo.marketPrice,
            pnl = formatInfo.pnl,
            pnlRate = formatInfo.pnlRate;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default.Item */.ZP.Item, {
          style: {
            padding: '10px 15px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            gutter: [18, 18],
            className: "positionItem",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
              span: 24,
              className: "positionItemTitle",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                src: (indexTokenObj === null || indexTokenObj === void 0 ? void 0 : indexTokenObj.icon) || '',
                size: 16,
                tokenId: indexTokenObj === null || indexTokenObj === void 0 ? void 0 : indexTokenObj.id
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: indexTokenObj === null || indexTokenObj === void 0 ? void 0 : indexTokenObj.symbol
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: isLong ? 'longColor' : 'shortColor',
                children: isLong ? 'L' : 'S'
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: "text",
                style: {
                  color: colorTextSecondary
                },
                children: [leverage, "x"]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 12,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  style: {
                    fontSize: 16,
                    fontWeight: 400
                  },
                  children: "PnL"
                }),
                value: pnl,
                precision: 2,
                prefix: "$",
                valueStyle: {
                  color: isPositive ? '#00a980' : '#eb5757',
                  fontSize: 18,
                  lineHeight: '1'
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 12,
              className: "textLeft",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  style: {
                    fontSize: 16,
                    fontWeight: 400
                  },
                  children: "Roe"
                }),
                valueStyle: {
                  color: isPositive ? '#00a980' : '#eb5757',
                  fontSize: 18,
                  lineHeight: '1'
                },
                value: pnlRate,
                suffix: "%",
                prefix: isPositive ? /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowUpOutlined, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDownOutlined/* default */.Z, {})
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "Size",
                value: "".concat(Number(size).toFixed(4), "  ").concat(indexTokenObj === null || indexTokenObj === void 0 ? void 0 : indexTokenObj.symbol)
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              className: "textLeft",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "Margin(".concat(collateralTokenObj === null || collateralTokenObj === void 0 ? void 0 : collateralTokenObj.symbol, ")"),
                value: leftMargin,
                precision: 2
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              className: "textLeft",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "MR/MMR",
                valueStyle: {
                  color: '#eb5757',
                  fontSize: 14
                },
                value: "".concat(mr, " | ").concat(mmr)
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "Entry Price",
                prefix: "$",
                value: Number(entryPrice).toFixed(2)
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              className: "textLeft",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "Liq. Price",
                prefix: "$",
                value: Number(liqPrice).toFixed(2)
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              className: "textLeft",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "Mark Price",
                prefix: "$",
                value: Number(pair === null || pair === void 0 ? void 0 : pair.userIndexPrice).toFixed(2)
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 9,
              offset: 7,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
                type: "primary",
                block: true,
                onClick: function onClick() {
                  return showMarginModal(item);
                },
                style: {
                  fontSize: 16,
                  height: 36
                },
                children: _('edit_margin')
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
                type: "primary",
                block: true,
                onClick: function onClick() {
                  return closeOrder(item);
                },
                style: {
                  fontSize: 16,
                  height: 36
                },
                children: _('close')
              })
            })]
          })
        });
      }
    }), currentPosition && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Margin, {
      onClose: function onClose() {
        return setMarginVisible(false);
      },
      show: marginVisible,
      currentPostion: currentPosition,
      defaultAction: "add"
    }, currentPosition.id + 'Margin'), currentPosition && /*#__PURE__*/(0,jsx_runtime.jsx)(components_ColsePosition, {
      onClose: function onClose() {
        return setCloseOrderVisible(false);
      },
      show: closeOrderVisible,
      currentPostion: currentPosition,
      defaultAction: "close"
    }, currentPosition.id + 'close')]
  });
}

/* harmony default export */ var components_Positions = (Positions);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 12 modules
var skeleton = __webpack_require__(21687);
// EXTERNAL MODULE: ./node_modules/antd/es/popover/index.js + 3 modules
var popover = __webpack_require__(74627);
;// CONCATENATED MODULE: ./src/pages/trade/components/ChartHeader/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/services/graphQL/api.ts
var api = __webpack_require__(87934);
;// CONCATENATED MODULE: ./src/pages/trade/components/ChartHeader/index.tsx
















var ChartHeader_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
var ChartItemLayout = {
  xl: 12,
  md: 24,
  sm: 24,
  xs: 24
};

var Statistic = function Statistic(_ref) {
  var title = _ref.title,
      loading = _ref.loading,
      value = _ref.value,
      prefix = _ref.prefix,
      style = _ref.style;

  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorText = _theme$useToken$token.colorText,
      colorPrimary = _theme$useToken$token.colorPrimary,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "hay-Statistis",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
      style: objectSpread2_default()({
        color: colorText,
        fontSize: 13
      }, style),
      children: [prefix, loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default.Button */.Z.Button, {
        active: true,
        size: "small"
      }) : value]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
      style: objectSpread2_default()({
        color: colorTextSecondary,
        fontSize: 12
      }, style),
      children: title
    })]
  });
};

var defaultChart = 'ETH';

var ChartHeader = function ChartHeader(_ref2) {
  var tokenPair = _ref2.tokenPair,
      currentToken = _ref2.currentToken,
      actionType = _ref2.actionType,
      setShowSelect = _ref2.setShowSelect;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useBreakpoint = ChartHeader_useBreakpoint(),
      md = _useBreakpoint.md,
      xl = _useBreakpoint.xl;

  var _theme$useToken2 = es_theme/* default.useToken */.Z.useToken(),
      _theme$useToken2$toke = _theme$useToken2.token,
      colorText = _theme$useToken2$toke.colorText,
      colorPrimary = _theme$useToken2$toke.colorPrimary,
      colorTextSecondary = _theme$useToken2$toke.colorTextSecondary;

  var _useState = (0,react.useState)('-'),
      _useState2 = slicedToArray_default()(_useState, 2),
      insuranceFunds = _useState2[0],
      setInsuranceFunds = _useState2[1];

  var _useState3 = (0,react.useState)('-'),
      _useState4 = slicedToArray_default()(_useState3, 2),
      Volume24H = _useState4[0],
      setVolume24H = _useState4[1];

  var _useState5 = (0,react.useState)('-'),
      _useState6 = slicedToArray_default()(_useState5, 2),
      Fee24H = _useState6[0],
      setFee24H = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  (0,react.useEffect)(function () {
    asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var p1, p2, _yield$Promise$all, _yield$Promise$all2, _ret, _yield$Promise$all2$, notionalDelta, tradingFee, _tradingFee, _notionalDelta;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(chain && tokenPair)) {
                _context.next = 22;
                break;
              }

              if (!insuranceFunds) setLoading(true);
              _context.next = 4;
              return (0,contract/* collateralInsuranceFunds */.t$)(chain, tokenPair);

            case 4:
              p1 = _context.sent;
              _context.next = 7;
              return (0,api/* fetchFutureVolume */.ac)({
                chain: chain,
                collateralToken: tokenPair.collateralToken,
                indexToken: tokenPair.indexToken
              });

            case 7:
              p2 = _context.sent;
              _context.next = 10;
              return Promise.all([p1, p2]);

            case 10:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = slicedToArray_default()(_yield$Promise$all, 2);
              _ret = _yield$Promise$all2[0];
              _yield$Promise$all2$ = _yield$Promise$all2[1];
              notionalDelta = _yield$Promise$all2$.notionalDelta;
              tradingFee = _yield$Promise$all2$.tradingFee;
              _tradingFee = (0,utils/* formatSat */.gB)(tradingFee, tokenPair.userCollateralTokenDecimal);
              _notionalDelta = (0,utils/* formatSat */.gB)(notionalDelta, tokenPair.userCollateralTokenDecimal);
              setVolume24H((0,utils/* formatNumberToKMBT */.BF)(Number(_notionalDelta)));
              setFee24H((0,utils/* formatNumberToKMBT */.BF)(Number(_tradingFee)));
              setInsuranceFunds(_ret);
              setLoading(false); // https://zksync-data-feed.onchain.trade/day-data/future_volume?collateralToken=0x42f2ADBeb2A9248156EA18bbF486F1a89e88A14F&indexToken=0xa70A6107fD7d5902ff3881076a1f530CDC82C6Dd
              // https://zksync-data-feed.onchain.trade/day-data/future_volume?collateralToken=0xa70A6107fD7d5902ff3881076a1f530CDC82C6Dd&indexToken=0x42f2ADBeb2A9248156EA18bbF486F1a89e88A14F

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [tokenPair, chain]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: xl ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "chartHeader hay-chartHeader  hay-chartHeaderXL",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "select hay-chartHeaderItem",
        onClick: function onClick() {
          return setShowSelect(true);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
          src: (currentToken === null || currentToken === void 0 ? void 0 : currentToken.icon) || ''
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "symbol",
          children: [(currentToken === null || currentToken === void 0 ? void 0 : currentToken.symbol) || defaultChart, actionType !== 'swap' ? '/USD' : '', " "]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
      }), actionType !== 'swap' && tokenPair && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: !xl ? 'textCenter hay-chartHeaderItem' : 'hay-chartHeaderItem ',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
          title: "",
          prefix: "$",
          value: Number(tokenPair.userIndexPrice).toFixed(2),
          style: {
            fontSize: !xl ? 20 : 13,
            color: !xl ? '#00A980' : colorText
          }
        })
      }), actionType !== 'swap' && tokenPair && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "hay-chartHeaderItem",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
            title: "24H Vol",
            value: Volume24H,
            prefix: "$",
            loading: loading
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "hay-chartHeaderItem",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
            title: "24H Fee",
            value: Fee24H,
            prefix: "$",
            loading: loading
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "hay-chartHeaderItem",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "hay-Statistis",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
              content: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
                style: {
                  width: 222,
                  marginBottom: 0
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  children: "long/short open interest and funding rates, "
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
                  style: {
                    color: colorPrimary
                  },
                  href: "https://onchaintrade.gitbook.io/ot/0-slip-perpetual-trading/funding-rate",
                  target: "_blank",
                  children: "learn more"
                })]
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                style: {
                  color: colorText,
                  fontSize: 13
                },
                className: "dot",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("u", {
                  style: {
                    textDecoration: "underline dashed ".concat(colorTextSecondary),
                    fontSize: 13
                  },
                  children: [" L $", tokenPair.totalLongSizeLabel, " | ", tokenPair.longFundingRateLabel]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                color: colorText,
                fontSize: 13
              },
              children: ["S $", tokenPair.totalShortSizeLabel, " | ", tokenPair.shortFundingRateLabel]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "hay-chartHeaderItem textRight",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
            title: "Insurance Pool",
            prefix: "$",
            value: insuranceFunds,
            loading: loading
          })
        })]
      })]
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      className: "chartHeader hay-chartHeader",
      gutter: [0, 12],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 8,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
          gutter: [6, 6],
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            className: "select",
            onClick: function onClick() {
              return setShowSelect(true);
            },
            xl: 14,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
              src: (currentToken === null || currentToken === void 0 ? void 0 : currentToken.icon) || ''
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              className: "symbol",
              children: [(currentToken === null || currentToken === void 0 ? void 0 : currentToken.symbol) || defaultChart, actionType !== 'swap' ? '/USD' : '', " "]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
          }), actionType !== 'swap' && tokenPair && /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: xl ? 10 : 14,
            className: !xl ? 'textCenter' : '',
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
              title: "",
              prefix: "$",
              value: Number(tokenPair.userIndexPrice).toFixed(2),
              style: {
                fontSize: !xl ? 20 : 13,
                color: !xl ? '#00A980' : colorText
              }
            })
          })]
        })
      }), actionType !== 'swap' && tokenPair && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 5,
          className: !xl ? 'textRight' : '',
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            gutter: [6, 6],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
                title: "24H Vol",
                value: Volume24H,
                prefix: "$",
                loading: loading
              })
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
                title: "24H Fee",
                value: Fee24H,
                prefix: "$",
                loading: loading
              })
            }))]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 11,
          className: !xl ? 'textRight' : '',
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            gutter: [6, 6],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
              xl: 14,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "hay-Statistis",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
                  content: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
                    style: {
                      width: 222,
                      marginBottom: 0
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                      children: "long/short open interest and funding rates, "
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
                      style: {
                        color: colorPrimary
                      },
                      href: "https://onchaintrade.gitbook.io/ot/0-slip-perpetual-trading/funding-rate",
                      target: "_blank",
                      children: "learn more"
                    })]
                  }),
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                    style: {
                      color: colorText,
                      fontSize: 13
                    },
                    className: "dot",
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("u", {
                      style: {
                        textDecoration: "underline dashed ".concat(colorTextSecondary),
                        fontSize: 13
                      },
                      children: [" L $", tokenPair.totalLongSizeLabel, " | ", tokenPair.longFundingRateLabel]
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                  style: {
                    color: colorText,
                    fontSize: 13
                  },
                  children: ["S $", tokenPair.totalShortSizeLabel, " | ", tokenPair.shortFundingRateLabel]
                })]
              })
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
              xl: 10,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
                title: "Insurance Pool",
                prefix: "$",
                value: insuranceFunds,
                loading: loading
              })
            }))]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var components_ChartHeader = (ChartHeader);
;// CONCATENATED MODULE: ./src/pages/trade/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/LinearIcon/index.tsx





var TradeSvg = function TradeSvg(_ref) {
  var startColor = _ref.startColor,
      endColor = _ref.endColor,
      name = _ref.name;
  return /*#__PURE__*/_jsxs("svg", {
    width: "21",
    height: "13",
    viewBox: "0 0 21 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("path", {
      d: "M0.5 9.57457L4.75536 6.38305V8.51073H15.1808C15.7683 8.51073 16.2446 8.98702 16.2446 9.57457C16.2446 10.1621 15.7683 10.6384 15.1808 10.6384H4.75536V12.7661L0.5 9.57457Z",
      fill: "url(#".concat(name, ")")
    }), /*#__PURE__*/_jsx("path", {
      d: "M5.8192 4.25536L16.2446 4.25536V6.38305L20.5 3.19152L16.2446 0V2.12768L5.8192 2.12768C5.23166 2.12768 4.75536 2.60398 4.75536 3.19152C4.75536 3.77907 5.23166 4.25536 5.8192 4.25536Z",
      fill: "url(#".concat(name, ")")
    }), /*#__PURE__*/_jsx("defs", {
      children: /*#__PURE__*/_jsxs("linearGradient", {
        id: name,
        x1: "21.1204",
        y1: "6.38305",
        x2: "-2.4562",
        y2: "6.38305",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/_jsx("stop", {
          stopColor: startColor
        }), /*#__PURE__*/_jsx("stop", {
          offset: "1",
          stopColor: endColor
        })]
      })
    })]
  });
};

var SwapSvg = function SwapSvg(_ref2) {
  var startColor = _ref2.startColor,
      endColor = _ref2.endColor,
      name = _ref2.name;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M0.600098 9L4.6001 6V8H14.3999C14.9522 8 15.3999 8.44772 15.3999 9C15.3999 9.55228 14.9522 10 14.3999 10H4.6001V12L0.600098 9Z",
      fill: "url(#paint0_linear_21271_2521)"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M5.6001 4L15.3999 4V6L19.3999 3L15.3999 0V2L5.6001 2C5.04781 2 4.6001 2.44771 4.6001 3C4.6001 3.55228 5.04781 4 5.6001 4Z",
      fill: "url(#paint1_linear_21271_2521)"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        id: "paint0_linear_21271_2521",
        x1: "19.9831",
        y1: "6",
        x2: "-2.17871",
        y2: "6",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: startColor
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: "1",
          stopColor: endColor
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        id: "paint1_linear_21271_2521",
        x1: "19.9831",
        y1: "6",
        x2: "-2.17871",
        y2: "6",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: startColor
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: "1",
          stopColor: endColor
        })]
      })]
    })]
  });
};

var LinearIcon_Long = function Long(_ref3) {
  var startColor = _ref3.startColor,
      endColor = _ref3.endColor,
      name = _ref3.name;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M17.6001 7.26796C17.3615 7.26796 17.1326 7.15872 16.9639 6.96429C16.7951 6.76985 16.7003 6.50613 16.7003 6.23116V3.54585L11.4094 9.64222C11.2408 9.83533 11.0128 9.94372 10.7751 9.94372C10.5373 9.94372 10.3093 9.83533 10.1407 9.64222L6.98234 6.00306L2.04236 11.6951C1.87292 11.8903 1.64312 12 1.4035 12C1.16387 12 0.934066 11.8903 0.764628 11.6951C0.595189 11.4999 0.5 11.2351 0.5 10.959C0.5 10.6829 0.595189 10.4181 0.764628 10.2228L6.34347 3.79468C6.51206 3.60158 6.74012 3.49319 6.97784 3.49319C7.21556 3.49319 7.44362 3.60158 7.61221 3.79468L10.7706 7.43384L15.4226 2.0736H13.1011C12.8624 2.0736 12.6336 1.96436 12.4648 1.76993C12.2961 1.57549 12.2013 1.31177 12.2013 1.0368C12.2013 0.761823 12.2961 0.498108 12.4648 0.303671C12.6336 0.109234 12.8624 0 13.1011 0H17.6001C17.8388 0 18.0677 0.109234 18.2364 0.303671C18.4052 0.498108 18.5 0.761823 18.5 1.0368V6.22079C18.5011 6.35781 18.4787 6.49375 18.4341 6.62074C18.3894 6.74773 18.3233 6.86325 18.2396 6.96063C18.1559 7.05801 18.0563 7.1353 17.9466 7.18806C17.8368 7.24081 17.7191 7.26796 17.6001 7.26796Z",
      fill: startColor
    })
  });
};

var Short = function Short(_ref4) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      name = _ref4.name;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M17.6001 4.73204C17.3615 4.73204 17.1326 4.84128 16.9639 5.03571C16.7951 5.23015 16.7003 5.49387 16.7003 5.76884V8.45415L11.4094 2.35778C11.2408 2.16467 11.0128 2.05628 10.7751 2.05628C10.5373 2.05628 10.3093 2.16467 10.1407 2.35778L6.98234 5.99694L2.04236 0.304914C1.87292 0.109681 1.64312 2.3548e-07 1.4035 2.3548e-07C1.16387 2.3548e-07 0.934066 0.109681 0.764628 0.304914C0.595189 0.500147 0.5 0.76494 0.5 1.04104C0.5 1.31714 0.595189 1.58194 0.764628 1.77717L6.34347 8.20532C6.51206 8.39842 6.74012 8.50681 6.97784 8.50681C7.21556 8.50681 7.44362 8.39842 7.61221 8.20532L10.7706 4.56616L15.4226 9.9264H13.1011C12.8624 9.9264 12.6336 10.0356 12.4648 10.2301C12.2961 10.4245 12.2013 10.6882 12.2013 10.9632C12.2013 11.2382 12.2961 11.5019 12.4648 11.6963C12.6336 11.8908 12.8624 12 13.1011 12H17.6001C17.8388 12 18.0677 11.8908 18.2364 11.6963C18.4052 11.5019 18.5 11.2382 18.5 10.9632V5.77921C18.5011 5.64219 18.4787 5.50625 18.4341 5.37926C18.3894 5.25227 18.3233 5.13675 18.2396 5.03937C18.1559 4.94199 18.0563 4.8647 17.9466 4.81194C17.8368 4.75919 17.7191 4.73204 17.6001 4.73204V4.73204Z",
      fill: startColor
    })
  });
};

var LinearIcon = function LinearIcon(_ref5) {
  var name = _ref5.name,
      active = _ref5.active,
      defalutColor = _ref5.defalutColor,
      _ref5$startColor = _ref5.startColor,
      startColor = _ref5$startColor === void 0 ? '#03CDC1' : _ref5$startColor,
      _ref5$endColor = _ref5.endColor,
      endColor = _ref5$endColor === void 0 ? '#8AB9FF' : _ref5$endColor;
  var colors = {
    startColor: defalutColor,
    endColor: defalutColor,
    name: name.replace('-', '')
  };

  if (active) {
    colors.startColor = startColor;
    colors.endColor = endColor;
  }

  switch (name) {
    case 'swap':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(SwapSvg, objectSpread2_default()({}, colors));
      break;

    case 'long':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(LinearIcon_Long, objectSpread2_default()({}, colors));
      break;

    case 'short':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Short, objectSpread2_default()({}, colors));
      break;

    default:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }
};

/* harmony default export */ var components_LinearIcon = (LinearIcon);
;// CONCATENATED MODULE: ./src/pages/trade/index.tsx














var trade_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;




var leftLayout = {
  md: 15,
  sm: 24,
  xs: 24
};
var rightLayout = {
  md: 9,
  sm: 24,
  xs: 24
};
var trade_ChartItemLayout = {
  xl: 4,
  md: 6,
  sm: 12,
  xs: 12
};
var trade_defaultChart = 'ETH';
function HomePage() {
  var _useBreakpoint = trade_useBreakpoint(),
      md = _useBreakpoint.md;

  var _useModel = (0,_umi_production_exports.useModel)('initModel'),
      theme = _useModel.theme,
      ContentWidth = _useModel.ContentWidth;

  var _THEME$useToken = es_theme/* default.useToken */.Z.useToken(),
      _THEME$useToken$token = _THEME$useToken.token,
      borderRadius = _THEME$useToken$token.borderRadius,
      colorTextSecondary = _THEME$useToken$token.colorTextSecondary,
      colorInfoBg = _THEME$useToken$token.colorInfoBg;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useModel2 = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel2.chain,
      osdData = _useModel2.osdData;

  var _useModel3 = (0,_umi_production_exports.useModel)('future'),
      tokenPairs = _useModel3.tokenPairs;

  var _useState = (0,react.useState)('swap'),
      _useState2 = slicedToArray_default()(_useState, 2),
      actionType = _useState2[0],
      setActionType = _useState2[1];

  var _useState3 = (0,react.useState)(600),
      _useState4 = slicedToArray_default()(_useState3, 2),
      chartWidth = _useState4[0],
      setChartWidth = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      showSelect = _useState6[0],
      setShowSelect = _useState6[1]; // const [currentChartPair, setCurrentChartPair] = useState<API.TokenPairs>();


  var _useModel4 = (0,_umi_production_exports.useModel)('tradeTokenList'),
      setLongIndex = _useModel4.setLongIndex,
      longIndex = _useModel4.longIndex,
      setShortIndex = _useModel4.setShortIndex,
      shortIndex = _useModel4.shortIndex,
      longIndexArr = _useModel4.longIndexArr,
      shortIndexArr = _useModel4.shortIndexArr,
      swapIndex = _useModel4.swapIndex,
      swapIndexArr = _useModel4.swapIndexArr,
      setSwapIndex = _useModel4.setSwapIndex,
      collateralToken = _useModel4.collateralToken;

  var tokenArr = (0,react.useMemo)(function () {
    if (actionType === 'swap') {
      return swapIndexArr;
    }

    if (actionType === 'long') {
      return longIndexArr;
    }

    if (actionType === 'short') {
      return longIndexArr;
    }

    return [];
  }, [actionType, longIndexArr, shortIndexArr, swapIndexArr]);
  var currentToken = (0,react.useMemo)(function () {
    if (actionType === 'swap') {
      return swapIndex;
    }

    if (actionType === 'long') {
      return longIndex;
    }

    if (actionType === 'short') {
      return longIndex;
    }
  }, [actionType, longIndex, shortIndex, swapIndex]);

  var setCurrentToken = function setCurrentToken(token) {
    if (actionType === 'swap') {
      setSwapIndex(token);
    }

    if (actionType === 'long') {
      setLongIndex(token);
    }

    if (actionType === 'short') {
      setLongIndex(token);
    }
  };

  (0,react.useEffect)(function () {
    if (tokenArr.length > 0 && actionType === 'swap') {
      var symbol = trade_defaultChart.toLowerCase();
      if (currentToken) symbol = currentToken.symbol.toLowerCase();

      var _find = tokenArr.find(function (item) {
        return item.symbol.toLowerCase() === symbol;
      });

      console.log("useIntervalAsync currentToken", currentToken);

      if (_find) {
        setCurrentToken(_find);
      }
    }
  }, [tokenArr, actionType]);
  var ChartRef = (0,react.useRef)();
  (0,react.useEffect)(function () {
    var resizeChart = function resizeChart() {
      setTimeout(function () {
        var _ChartRef$current;

        if (ChartRef.current) setChartWidth(((_ChartRef$current = ChartRef.current) === null || _ChartRef$current === void 0 ? void 0 : _ChartRef$current.clientWidth) || 0);
      }, 400);
    };

    resizeChart();
    window.addEventListener('resize', resizeChart);
    return function () {
      return window.removeEventListener('resize', resizeChart);
    };
  }, [ContentWidth]);
  var currentChartPair = (0,react.useMemo)(function () {
    if (currentToken && tokenPairs.length && collateralToken && actionType !== 'swap') {
      var _find = tokenPairs.find(function (item) {
        return item.indexToken.toLowerCase() === currentToken.id.toLowerCase() && item.collateralToken.toLowerCase() === collateralToken.id.toLowerCase();
      });

      if (!_find) _find = tokenPairs.find(function (item) {
        return item.indexToken.toLowerCase() === currentToken.id.toLowerCase();
      });
      console.log('useIntervalAsync currentChartPair', _find, currentToken, longIndex);
      if (_find) return _find;
    }
  }, [currentToken, tokenPairs, actionType, collateralToken]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "tradePage animation-slide-bottom",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      style: {
        maxWidth: '100%',
        flexDirection: md ? 'row' : 'column-reverse'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, leftLayout), {}, {
        style: {
          flex: 1
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
          gutter: [24, 24],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
              bodyStyle: {
                padding: '14px 12px'
              },
              bordered: false,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_ChartHeader, {
                tokenPair: currentChartPair,
                currentToken: currentToken,
                actionType: actionType,
                setShowSelect: setShowSelect
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  width: '100%',
                  overflow: 'hidden'
                },
                ref: ChartRef,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(tradeview, {
                  datafeedUrl: (chain === null || chain === void 0 ? void 0 : chain.dataFeedUrl) || 'https://zksync-data-feed.onchain.trade/data-feed',
                  theme: theme,
                  symbol: (currentToken === null || currentToken === void 0 ? void 0 : currentToken.symbol) || trade_defaultChart,
                  width: chartWidth || 644
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            style: {
              marginBottom: 24
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
              bodyStyle: {
                padding: 0
              },
              bordered: false,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
                defaultActiveKey: "1",
                tabBarStyle: {
                  padding: '0 10px',
                  background: theme === 'light' ? '#EDEDF1' : '',
                  borderRadius: "".concat(borderRadius, "px ").concat(borderRadius, "px 0 0")
                },
                size: md ? 'middle' : 'small',
                moreIcon: /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {
                  style: {
                    color: colorTextSecondary
                  }
                }),
                items: [{
                  label: "Positions",
                  key: '1',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Positions, {})
                }, {
                  label: "Open Orders",
                  key: '2',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_LimitOrder, {})
                }, {
                  label: "My History",
                  key: '4',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_TradeHistory, {
                    type: "personal"
                  })
                }, {
                  label: "Market Trades",
                  key: '3',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_TradeHistory, {
                    type: "market"
                  })
                }]
              })
            })
          })]
        })
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, rightLayout), {}, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
          style: {
            marginLeft: md ? 20 : 0,
            marginBottom: md ? 0 : 20
          },
          bodyStyle: {
            padding: 12,
            transition: 'height ease 5s'
          },
          bordered: false,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
            style: {
              width: '100%',
              background: colorInfoBg
            },
            value: actionType,
            onChange: function onChange(e) {
              return setActionType(e);
            },
            block: true,
            options: [{
              label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  padding: 4
                },
                className: "SegmentedItem",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_LinearIcon, {
                  name: "swap",
                  defalutColor: colorTextSecondary,
                  active: actionType === 'swap'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: actionType === 'swap' ? 'text linkColor active' : 'text',
                  children: "Swap"
                })]
              }),
              value: 'swap'
            }, {
              label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  padding: 4
                },
                className: "SegmentedItem",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_LinearIcon, {
                  name: "long",
                  defalutColor: colorTextSecondary,
                  active: actionType === 'long',
                  startColor: "#00A980"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: actionType === 'long' ? 'text longColor active' : 'text',
                  children: "Long"
                })]
              }),
              value: 'long'
            }, {
              label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  padding: 4
                },
                className: "SegmentedItem",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_LinearIcon, {
                  name: "short",
                  defalutColor: colorTextSecondary,
                  active: actionType === 'short',
                  startColor: "#EB5757"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: actionType === 'short' ? 'text shortColor active' : 'text',
                  children: "Short"
                })]
              }),
              value: 'short'
            }]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            wrap: false,
            gutter: [12, 12],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 24,
              style: {
                display: actionType === 'swap' ? 'block' : 'none'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Swap, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 24,
              style: {
                display: actionType === 'long' ? 'block' : 'none'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Long, {
                isLong: true
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 24,
              style: {
                display: actionType === 'short' ? 'block' : 'none'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Long, {
                isLong: false
              })
            })]
          })]
        })
      }))]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TokenSelect/* default */.Z, {
      tokenList: tokenArr,
      type: actionType === 'swap' ? 'token' : 'pairs',
      show: showSelect,
      onClose: function onClose() {
        return setShowSelect(false);
      },
      onChange: setCurrentToken
    })]
  });
}

/***/ })

}]);