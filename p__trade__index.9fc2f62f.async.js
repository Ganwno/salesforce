(self["webpackChunk"] = self["webpackChunk"] || []).push([[939],{

/***/ 68215:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

// EXTERNAL MODULE: ./src/services/contract/index.ts + 70 modules
var contract = __webpack_require__(12636);
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
      outToken = _useModel3.swapIndex,
      setOutToken = _useModel3.setSwapIndex,
      selectList = _useModel3.swapIndexArr; // const [outToken, setOutToken] = useState<API.BasicToken>();


  var _useModel4 = (0,_umi_production_exports.useModel)('initModel'),
      maxSlippage = _useModel4.maxSlippage;

  var _useSearchParams = (0,_umi_production_exports.useSearchParams)(),
      _useSearchParams2 = slicedToArray_default()(_useSearchParams, 1),
      query = _useSearchParams2[0];

  var queOut = query.get('swapOut');

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      inToken = _useState2[0],
      setInToken = _useState2[1];

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
      maxValue: Number(poolBalance) || 0,
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
          handleSubmit;
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

  var handleTokenChange = function handleTokenChange(_outToken) {
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
        return position.collateralToken.toLowerCase() === osdData.id.toLocaleLowerCase() && //sb tips
        position.indexToken.toLowerCase() === _outToken.id.toLowerCase() && position.isLong === isLong;
      });

      var _pair = tokenPairs.find(function (pair) {
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
        handleTokenChange(_outToken);
        setInToken(_inToken);
        setOutToken(_outToken);
      }
    }

    if (selectList.length > 0 && tokenPairs.length > 0 && positionList.length > 0 && inToken && outToken) {
      handleTokenChange(outToken);
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
      handleTokenChange(token);

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
        showSlider: isLong
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
      // @ts-ignore
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
    initOnReady();
  }, [theme, symbol, props.width]); // useEffect(() => {
  //   window.addEventListener('resize', handleResize)
  //   return window.removeEventListener('resize', handleResize)
  // }, [])

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    id: "tv_chart_container",
    style: {
      background: t.bg
    }
  });
}

/* harmony default export */ var tradeview = (Tradeview);
// EXTERNAL MODULE: ./src/components/TokenSelect/index.tsx + 1 modules
var TokenSelect = __webpack_require__(73687);
// EXTERNAL MODULE: ./node_modules/antd/es/list/index.js + 2 modules
var list = __webpack_require__(51158);
// EXTERNAL MODULE: ./node_modules/antd/es/statistic/index.js + 5 modules
var es_statistic = __webpack_require__(55054);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(75081);
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
            children: [data.oldLeverage, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowRightOutlined, {}), " ", data.newLeverage]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Margin Rate",
            children: [data.oldMr, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowRightOutlined, {}), " ", data.newMr]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Maintenance Margin Rate",
            children: data.mmr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "EST Liq. Price",
            children: ["$", userLiqPrice, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowRightOutlined, {}), "  $", data.newLiqPrice]
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
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('future'),
      updatePositions = _useModel2.updatePositions,
      setPairsLoading = _useModel2.setPairsLoading,
      updatePairs = _useModel2.updatePairs;

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

  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
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
              _context.next = 16;
              return updatePositions();

            case 16:
              setSubmiting(false);

            case 17:
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
            children: [margin, " ", /*#__PURE__*/(0,jsx_runtime.jsx)(icons_ArrowRightOutlined, {}), "  $", data.leftMargin]
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
              children: [data._hourFundingRate, "% (", data.fundingFee, " ", collateralToken.symbol, ")"]
            })
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

var ColsePosition_Content = function Content(props) {
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
      md = _useBreakpoint.md;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

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
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [_('positions'), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), _('funding_rate')]
    }),
    dataIndex: 'positions',
    key: 'positions',
    align: 'left',
    render: function render(text, record) {
      var indexTokenObj = record.indexTokenObj,
          isLong = record.isLong,
          leverage = record.leverage,
          userFundingRate = record.userFundingRate;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "type",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: isLong ? 'longColor' : 'shortColor',
          children: isLong ? 'L' : 'S'
        }), ' ', indexTokenObj.symbol, " ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "text",
          children: [leverage, "x"]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "text",
          children: [userFundingRate, "%/1h"]
        })]
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [_('size'), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), " ", _('pnl'), "/", _('roe')]
    }),
    dataIndex: 'userSize',
    key: 'userSize',
    align: 'right',
    render: function render(text, record) {
      var indexTokenObj = record.indexTokenObj,
          isPositive = record.isPositive,
          pnlStr = record.pnlStr,
          roeStr = record.roeStr,
          userNotional = record.userNotional;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: ["$", userNotional]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: isPositive ? 'longColor' : 'shortColor',
          children: [pnlStr, " (", roeStr, ")"]
        })]
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: _('margin')
    }),
    dataIndex: 'userMargin',
    key: 'userMargin',
    align: 'right',
    render: function render(text, record) {
      var collateralTokenObj = record.collateralTokenObj,
          userMarginUSD = record.userMarginUSD;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: ["$", userMarginUSD]
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
      var userLiqPrice = record.userLiqPrice;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: ["$", text, /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "$", userLiqPrice]
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
      var userMmr = record.userMmr,
          mr_str = record.mr_str;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [mr_str, /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), userMmr, "%"]
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
    children: [md ? /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
      columns: columns,
      dataSource: positionList.filter(function (v) {
        return v.size > 0 && v.userSize;
      }),
      className: "table",
      rowKey: "id",
      loading: (wallet === null || wallet === void 0 ? void 0 : wallet.isConnected) && positionLoading
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.ZP, {
      itemLayout: "horizontal",
      dataSource: positionList.filter(function (v) {
        return v.size > 0 && v.userSize;
      }),
      style: {
        paddingBottom: 24
      },
      renderItem: function renderItem(item) {
        var isPositive = item.isPositive,
            isLong = item.isLong,
            leverage = item.leverage,
            indexTokenObj = item.indexTokenObj,
            _item$userSize = item.userSize,
            userSize = _item$userSize === void 0 ? 0 : _item$userSize,
            collateralTokenObj = item.collateralTokenObj,
            userMargin = item.userMargin,
            userMmr = item.userMmr,
            mr_str = item.mr_str,
            userEntryIndexPrice = item.userEntryIndexPrice,
            userLiqPrice = item.userLiqPrice,
            pair = item.pair;
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
                value: item.pnlStr,
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
                value: item.roeStr
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "Size",
                value: "".concat(Number(userSize).toFixed(4), "  ").concat(indexTokenObj === null || indexTokenObj === void 0 ? void 0 : indexTokenObj.symbol)
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              className: "textLeft",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "Margin(".concat(collateralTokenObj === null || collateralTokenObj === void 0 ? void 0 : collateralTokenObj.symbol, ")"),
                value: userMargin
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              className: "textLeft",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "MR/MMR",
                valueStyle: {
                  color: '#eb5757'
                },
                value: "".concat(mr_str, " | ").concat(userMmr, "%")
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "Entry Price",
                prefix: "$",
                value: Number(userEntryIndexPrice).toFixed(2)
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 8,
              className: "textLeft",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_statistic/* default */.Z, {
                title: "Liq. Price",
                prefix: "$",
                value: Number(userLiqPrice).toFixed(2)
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

;// CONCATENATED MODULE: ./src/pages/trade/components/ChartHeader/index.tsx












var ChartHeader_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
var ChartItemLayout = {
  xl: 3,
  md: 6,
  sm: 12,
  xs: 12
};

var Statistic = function Statistic(_ref) {
  var title = _ref.title,
      loading = _ref.loading,
      value = _ref.value,
      prefix = _ref.prefix;

  var _theme$useToken = es_theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorText = _theme$useToken$token.colorText,
      colorPrimary = _theme$useToken$token.colorPrimary,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "hay-Statistis",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
      style: {
        color: colorText,
        fontSize: 14
      },
      children: [prefix, loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default.Button */.Z.Button, {
        active: true,
        size: "small"
      }) : value]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
      style: {
        color: colorTextSecondary,
        fontSize: 12
      },
      children: title
    })]
  });
};

var ChartHeader = function ChartHeader(_ref2) {
  var tokenPair = _ref2.tokenPair;

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

  var _useState3 = (0,react.useState)(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0,react.useEffect)(function () {
    asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _ret;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(chain && tokenPair)) {
                _context.next = 7;
                break;
              }

              setLoading(true);
              _context.next = 4;
              return (0,contract/* collateralInsuranceFunds */.t$)(chain, tokenPair);

            case 4:
              _ret = _context.sent;
              setInsuranceFunds(_ret);
              setLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [tokenPair, chain]);
  (0,react.useEffect)(function () {
    //
    //   const getInsuranceFunds = async () => {
    //     const res = await FutureLib.collateralInsuranceFunds(props.chainId, collateralToken)
    //     setInsuranceFunds(result)
    //   }
    if (chain && tokenPair) {// getInsuranceFunds()
    }
  }, [tokenPair]);
  if (!tokenPair) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
      xl: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
        title: "Mark",
        prefix: "$",
        value: Number(tokenPair.userIndexPrice).toFixed(2)
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
      xl: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
        title: "24H Volume",
        value: "--"
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
      xl: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
        title: "24H Fee",
        prefix: "$:"
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
      xl: 6,
      md: 6,
      offset: md && !xl ? 12 : 0,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "hay-Statistis",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
          content: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
            style: {
              width: 222
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
              fontSize: 14
            },
            className: "dot",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("u", {
              style: {
                textDecoration: "underline dashed ".concat(colorTextSecondary)
              },
              children: [" L $", tokenPair.totalLongSizeLabel, " | ", tokenPair.longFundingRateLabel]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            color: colorText,
            fontSize: 14
          },
          children: ["S $", tokenPair.totalShortSizeLabel, " | ", tokenPair.shortFundingRateLabel]
        })]
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
      xl: 3,
      md: 6,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
        title: "Insurance Pool",
        prefix: "$",
        value: insuranceFunds,
        loading: loading
      })
    }))]
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
var defaultChart = 'ETH';
function HomePage() {
  var _useBreakpoint = trade_useBreakpoint(),
      md = _useBreakpoint.md;

  var _useModel = (0,_umi_production_exports.useModel)('initModel'),
      theme = _useModel.theme;

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
    if (!currentToken && tokenArr.length > 0 && actionType === 'swap') {
      var _find = tokenArr.find(function (item) {
        return item.symbol.toLowerCase() === defaultChart.toLowerCase();
      });

      if (_find) {
        setCurrentToken(_find);
      }
    }
  }, [tokenArr, actionType]);
  var ChartRef = (0,react.useRef)();
  (0,react.useEffect)(function () {
    var resizeChart = function resizeChart() {
      var _ChartRef$current;

      setChartWidth(((_ChartRef$current = ChartRef.current) === null || _ChartRef$current === void 0 ? void 0 : _ChartRef$current.offsetWidth) || 0);
    };

    resizeChart();
    window.addEventListener('resize', resizeChart);
    return function () {
      return window.removeEventListener('resize', resizeChart);
    };
  }, []);
  var currentChartPair = (0,react.useMemo)(function () {
    if (currentToken && tokenPairs.length && collateralToken && actionType !== 'swap') {
      // const _find = tokenPairs.find(item => item.indexToken.toLowerCase() === currentToken.id.toLowerCase()&&item.collateralToken.toLowerCase()===collateralToken.id.toLowerCase());
      var _find = tokenPairs.find(function (item) {
        return item.indexToken.toLowerCase() === currentToken.id.toLowerCase();
      });

      if (_find) return _find;
    }
  }, [currentToken, tokenPairs, actionType, collateralToken]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "tradePage",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [20, 20],
      style: {
        width: "100%",
        flexDirection: md ? 'row' : 'column-reverse'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({
        span: 15
      }, leftLayout), {}, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
          gutter: [24, 24],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
              bodyStyle: {
                padding: '14px 12px'
              },
              bordered: false,
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
                className: "chartHeader",
                gutter: [0, 12],
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, trade_ChartItemLayout), {}, {
                  xl: 5,
                  className: "select",
                  onClick: function onClick() {
                    return setShowSelect(true);
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                    src: (currentToken === null || currentToken === void 0 ? void 0 : currentToken.icon) || ''
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                    className: "symbol",
                    children: [(currentToken === null || currentToken === void 0 ? void 0 : currentToken.symbol) || defaultChart, actionType !== 'swap' ? '/USD' : '', " "]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
                })), actionType !== 'swap' && currentChartPair && /*#__PURE__*/(0,jsx_runtime.jsx)(components_ChartHeader, {
                  tokenPair: currentChartPair
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                ref: ChartRef,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(tradeview, {
                  datafeedUrl: (chain === null || chain === void 0 ? void 0 : chain.dataFeedUrl) || 'https://zksync-data-feed.onchain.trade/data-feed',
                  theme: theme,
                  symbol: (currentToken === null || currentToken === void 0 ? void 0 : currentToken.symbol) || defaultChart,
                  width: chartWidth || 676
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
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
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({
        span: 9
      }, rightLayout), {}, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
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

/***/ }),

/***/ 74627:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ popover; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 4 modules
var tooltip = __webpack_require__(66477);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/getRenderPropValue.js
const getRenderPropValue = propValue => {
  if (!propValue) {
    return null;
  }
  if (typeof propValue === 'function') {
    return propValue();
  }
  return propValue;
};
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/rc-tooltip/es/index.js + 2 modules
var es = __webpack_require__(43763);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(50438);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/interface/presetColors.js
var presetColors = __webpack_require__(8796);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/placementArrow.js
var placementArrow = __webpack_require__(97414);
;// CONCATENATED MODULE: ./node_modules/antd/es/popover/style/index.js




const genBaseStyle = token => {
  const {
    componentCls,
    popoverBg,
    popoverColor,
    width,
    fontWeightStrong,
    popoverPadding,
    boxShadowSecondary,
    colorTextHeading,
    borderRadiusLG: borderRadius,
    zIndexPopup,
    marginXS,
    colorBgElevated
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      top: 0,
      // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
      left: {
        _skip_check_: true,
        value: 0
      },
      zIndex: zIndexPopup,
      fontWeight: 'normal',
      whiteSpace: 'normal',
      textAlign: 'start',
      cursor: 'auto',
      userSelect: 'text',
      '--antd-arrow-background-color': colorBgElevated,
      '&-rtl': {
        direction: 'rtl'
      },
      '&-hidden': {
        display: 'none'
      },
      [`${componentCls}-content`]: {
        position: 'relative'
      },
      [`${componentCls}-inner`]: {
        backgroundColor: popoverBg,
        backgroundClip: 'padding-box',
        borderRadius,
        boxShadow: boxShadowSecondary,
        padding: popoverPadding
      },
      [`${componentCls}-title`]: {
        minWidth: width,
        marginBottom: marginXS,
        color: colorTextHeading,
        fontWeight: fontWeightStrong
      },
      [`${componentCls}-inner-content`]: {
        color: popoverColor
      }
    })
  },
  // Arrow Style
  (0,placementArrow/* default */.ZP)(token, {
    colorBg: 'var(--antd-arrow-background-color)'
  }),
  // Pure Render
  {
    [`${componentCls}-pure`]: {
      position: 'relative',
      maxWidth: 'none',
      [`${componentCls}-content`]: {
        display: 'inline-block'
      }
    }
  }];
};
const genColorStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: presetColors/* PresetColors.map */.i.map(colorKey => {
      const lightColor = token[`${colorKey}-6`];
      return {
        [`&${componentCls}-${colorKey}`]: {
          '--antd-arrow-background-color': lightColor,
          [`${componentCls}-inner`]: {
            backgroundColor: lightColor
          },
          [`${componentCls}-arrow`]: {
            background: 'transparent'
          }
        }
      };
    })
  };
};
const genWireframeStyle = token => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorSplit,
    paddingSM,
    controlHeight,
    fontSize,
    lineHeight,
    padding
  } = token;
  const titlePaddingBlockDist = controlHeight - Math.round(fontSize * lineHeight);
  const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
  const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
  const popoverPaddingHorizontal = padding;
  return {
    [componentCls]: {
      [`${componentCls}-inner`]: {
        padding: 0
      },
      [`${componentCls}-title`]: {
        margin: 0,
        padding: `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px`,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      [`${componentCls}-inner-content`]: {
        padding: `${paddingSM}px ${popoverPaddingHorizontal}px`
      }
    }
  };
};
/* harmony default export */ var popover_style = ((0,genComponentStyleHook/* default */.Z)('Popover', token => {
  const {
    colorBgElevated,
    colorText,
    wireframe
  } = token;
  const popoverToken = (0,statistic/* merge */.TS)(token, {
    popoverBg: colorBgElevated,
    popoverColor: colorText,
    popoverPadding: 12 // Fixed Value
  });

  return [genBaseStyle(popoverToken), genColorStyle(popoverToken), wireframe && genWireframeStyle(popoverToken), (0,zoom/* initZoomMotion */._y)(popoverToken, 'zoom-big')];
}, _ref => {
  let {
    zIndexPopupBase
  } = _ref;
  return {
    zIndexPopup: zIndexPopupBase + 30,
    width: 177
  };
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/popover/PurePanel.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const getOverlay = (prefixCls, title, content) => {
  if (!title && !content) return undefined;
  return /*#__PURE__*/react.createElement(react.Fragment, null, title && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-title`
  }, getRenderPropValue(title)), /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-inner-content`
  }, getRenderPropValue(content)));
};
function RawPurePanel(props) {
  const {
    hashId,
    prefixCls,
    className,
    style,
    placement = 'top',
    title,
    content,
    children
  } = props;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(hashId, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className),
    style: style
  }, /*#__PURE__*/react.createElement(es/* Popup */.G, Object.assign({}, props, {
    className: hashId,
    prefixCls: prefixCls
  }), children || getOverlay(prefixCls, title, content)));
}
function PurePanel(props) {
  const {
      prefixCls: customizePrefixCls
    } = props,
    restProps = __rest(props, ["prefixCls"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const [wrapSSR, hashId] = popover_style(prefixCls);
  return wrapSSR( /*#__PURE__*/react.createElement(RawPurePanel, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    hashId: hashId
  })));
}
;// CONCATENATED MODULE: ./node_modules/antd/es/popover/index.js
var popover_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







// CSSINJS

const Overlay = _ref => {
  let {
    title,
    content,
    prefixCls
  } = _ref;
  if (!title && !content) {
    return null;
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, title && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-title`
  }, getRenderPropValue(title)), /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-inner-content`
  }, getRenderPropValue(content)));
};
const Popover = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      title,
      content,
      overlayClassName,
      placement = 'top',
      trigger = 'hover',
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle = {}
    } = props,
    otherProps = popover_rest(props, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const [wrapSSR, hashId] = popover_style(prefixCls);
  const rootPrefixCls = getPrefixCls();
  const overlayCls = classnames_default()(overlayClassName, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement(tooltip/* default */.Z, Object.assign({
    placement: placement,
    trigger: trigger,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    overlayStyle: overlayStyle
  }, otherProps, {
    prefixCls: prefixCls,
    overlayClassName: overlayCls,
    ref: ref,
    overlay: /*#__PURE__*/react.createElement(Overlay, {
      prefixCls: prefixCls,
      title: title,
      content: content
    }),
    transitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'zoom-big', otherProps.transitionName),
    "data-popover-inject": true
  })));
});
if (false) {}
Popover._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
/* harmony default export */ var popover = (Popover);

/***/ }),

/***/ 55054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_statistic; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 12 modules
var skeleton = __webpack_require__(21687);
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/Number.js

const StatisticNumber = props => {
  const {
    value,
    formatter,
    precision,
    decimalSeparator,
    groupSeparator = '',
    prefixCls
  } = props;
  let valueNode;
  if (typeof formatter === 'function') {
    // Customize formatter
    valueNode = formatter(value);
  } else {
    // Internal formatter
    const val = String(value);
    const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);
    // Process if illegal number
    if (!cells || val === '-') {
      valueNode = val;
    } else {
      const negative = cells[1];
      let int = cells[2] || '0';
      let decimal = cells[4] || '';
      int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
      if (typeof precision === 'number') {
        decimal = decimal.padEnd(precision, '0').slice(0, precision > 0 ? precision : 0);
      }
      if (decimal) {
        decimal = `${decimalSeparator}${decimal}`;
      }
      valueNode = [/*#__PURE__*/react.createElement("span", {
        key: "int",
        className: `${prefixCls}-content-value-int`
      }, negative, int), decimal && /*#__PURE__*/react.createElement("span", {
        key: "decimal",
        className: `${prefixCls}-content-value-decimal`
      }, decimal)];
    }
  }
  return /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-content-value`
  }, valueNode);
};
/* harmony default export */ var statistic_Number = (StatisticNumber);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/style/index.js


const genStatisticStyle = token => {
  const {
    componentCls,
    marginXXS,
    padding,
    colorTextDescription,
    statisticTitleFontSize,
    colorTextHeading,
    statisticContentFontSize,
    statisticFontFamily
  } = token;
  return {
    [`${componentCls}`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      [`${componentCls}-title`]: {
        marginBottom: marginXXS,
        color: colorTextDescription,
        fontSize: statisticTitleFontSize
      },
      [`${componentCls}-skeleton`]: {
        paddingTop: padding
      },
      [`${componentCls}-content`]: {
        color: colorTextHeading,
        fontSize: statisticContentFontSize,
        fontFamily: statisticFontFamily,
        [`${componentCls}-content-value`]: {
          display: 'inline-block',
          direction: 'ltr'
        },
        [`${componentCls}-content-prefix, ${componentCls}-content-suffix`]: {
          display: 'inline-block'
        },
        [`${componentCls}-content-prefix`]: {
          marginInlineEnd: marginXXS
        },
        [`${componentCls}-content-suffix`]: {
          marginInlineStart: marginXXS
        }
      }
    })
  };
};
// ============================== Export ==============================
/* harmony default export */ var statistic_style = ((0,genComponentStyleHook/* default */.Z)('Statistic', token => {
  const {
    fontSizeHeading3,
    fontSize,
    fontFamily
  } = token;
  const statisticToken = (0,statistic/* merge */.TS)(token, {
    statisticTitleFontSize: fontSize,
    statisticContentFontSize: fontSizeHeading3,
    statisticFontFamily: fontFamily
  });
  return [genStatisticStyle(statisticToken)];
}));
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useForceUpdate.js
var useForceUpdate = __webpack_require__(57838);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/utils.js
// Countdown
const timeUnits = [['Y', 1000 * 60 * 60 * 24 * 365], ['M', 1000 * 60 * 60 * 24 * 30], ['D', 1000 * 60 * 60 * 24], ['H', 1000 * 60 * 60], ['m', 1000 * 60], ['s', 1000], ['S', 1] // million seconds
];

function formatTimeStr(duration, format) {
  let leftDuration = duration;
  const escapeRegex = /\[[^\]]*]/g;
  const keepList = (format.match(escapeRegex) || []).map(str => str.slice(1, -1));
  const templateText = format.replace(escapeRegex, '[]');
  const replacedText = timeUnits.reduce((current, _ref) => {
    let [name, unit] = _ref;
    if (current.includes(name)) {
      const value = Math.floor(leftDuration / unit);
      leftDuration -= value * unit;
      return current.replace(new RegExp(`${name}+`, 'g'), match => {
        const len = match.length;
        return value.toString().padStart(len, '0');
      });
    }
    return current;
  }, templateText);
  let index = 0;
  return replacedText.replace(escapeRegex, () => {
    const match = keepList[index];
    index += 1;
    return match;
  });
}
function formatCountdown(value, config) {
  const {
    format = ''
  } = config;
  const target = new Date(value).getTime();
  const current = Date.now();
  const diff = Math.max(target - current, 0);
  return formatTimeStr(diff, format);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/Countdown.js





const REFRESH_INTERVAL = 1000 / 30;
function getTime(value) {
  return new Date(value).getTime();
}
const Countdown = props => {
  const {
    value,
    format = 'HH:mm:ss',
    onChange,
    onFinish
  } = props;
  const forceUpdate = (0,useForceUpdate/* default */.Z)();
  const countdown = react.useRef(null);
  const stopTimer = () => {
    onFinish === null || onFinish === void 0 ? void 0 : onFinish();
    if (countdown.current) {
      clearInterval(countdown.current);
      countdown.current = null;
    }
  };
  const syncTimer = () => {
    const timestamp = getTime(value);
    if (timestamp >= Date.now()) {
      countdown.current = setInterval(() => {
        forceUpdate();
        onChange === null || onChange === void 0 ? void 0 : onChange(timestamp - Date.now());
        if (timestamp < Date.now()) {
          stopTimer();
        }
      }, REFRESH_INTERVAL);
    }
  };
  react.useEffect(() => {
    syncTimer();
    return () => {
      if (countdown.current) {
        clearInterval(countdown.current);
        countdown.current = null;
      }
    };
  }, [value]);
  const formatter = (formatValue, config) => formatCountdown(formatValue, Object.assign(Object.assign({}, config), {
    format
  }));
  const valueRender = node => (0,reactNode/* cloneElement */.Tm)(node, {
    title: undefined
  });
  return /*#__PURE__*/react.createElement(statistic_Statistic, Object.assign({}, props, {
    valueRender: valueRender,
    formatter: formatter
  }));
};
/* harmony default export */ var statistic_Countdown = (/*#__PURE__*/react.memo(Countdown));
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/Statistic.js







const Statistic = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    valueStyle,
    value = 0,
    title,
    valueRender,
    prefix,
    suffix,
    loading = false,
    onMouseEnter,
    onMouseLeave,
    decimalSeparator = '.',
    groupSeparator = ','
  } = props;
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('statistic', customizePrefixCls);
  const [wrapSSR, hashId] = statistic_style(prefixCls);
  const valueNode = /*#__PURE__*/react.createElement(statistic_Number, Object.assign({
    decimalSeparator: decimalSeparator,
    groupSeparator: groupSeparator,
    prefixCls: prefixCls
  }, props, {
    value: value
  }));
  const cls = classnames_default()(prefixCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement("div", {
    className: cls,
    style: style,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, title && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-title`
  }, title), /*#__PURE__*/react.createElement(skeleton/* default */.Z, {
    paragraph: false,
    loading: loading,
    className: `${prefixCls}-skeleton`
  }, /*#__PURE__*/react.createElement("div", {
    style: valueStyle,
    className: `${prefixCls}-content`
  }, prefix && /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-content-prefix`
  }, prefix), valueRender ? valueRender(valueNode) : valueNode, suffix && /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-content-suffix`
  }, suffix)))));
};
Statistic.Countdown = statistic_Countdown;
/* harmony default export */ var statistic_Statistic = (Statistic);
;// CONCATENATED MODULE: ./node_modules/antd/es/statistic/index.js

/* harmony default export */ var es_statistic = (statistic_Statistic);

/***/ }),

/***/ 27484:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ })

}]);