"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2933],{

/***/ 22933:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_Long; }
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
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/pages/trade/components/Long/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/pages/trade/components/TPSL/index.tsx + 1 modules
var TPSL = __webpack_require__(41375);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useDebounceFn/index.js + 4 modules
var useDebounceFn = __webpack_require__(40238);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/Long/index.tsx


















var Long = function Long(_ref) {
  var setCurrentChart = _ref.setCurrentChart,
      isLong = _ref.isLong,
      setCurrentChartPair = _ref.setCurrentChartPair;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      inToken = _useState2[0],
      setInToken = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      outToken = _useState4[0],
      setOutToken = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = slicedToArray_default()(_useState5, 2),
      inAmount = _useState6[0],
      setInAmount = _useState6[1];

  var _useState7 = (0,react.useState)(''),
      _useState8 = slicedToArray_default()(_useState7, 2),
      outAmount = _useState8[0],
      setOutAmount = _useState8[1]; // const [selectType, setSelectType] = useState<'in' | 'out' | ''>('');


  var _useState9 = (0,react.useState)(''),
      _useState10 = slicedToArray_default()(_useState9, 2),
      amountType = _useState10[0],
      setAmountType = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = slicedToArray_default()(_useState11, 2),
      submiting = _useState12[0],
      setSubmiting = _useState12[1];

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      poolTokenExtList = _useModel.poolTokenExtList,
      osdData = _useModel.osdData,
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      updataTokens = _useModel.updataTokens;

  var _useModel2 = (0,_umi_production_exports.useModel)('future'),
      tokenPairs = _useModel2.tokenPairs,
      positionList = _useModel2.positionList;

  var _useModel3 = (0,_umi_production_exports.useModel)('initModel'),
      maxSlippage = _useModel3.maxSlippage;

  var _useState13 = (0,react.useState)(),
      _useState14 = slicedToArray_default()(_useState13, 2),
      curPair = _useState14[0],
      setCurPair = _useState14[1];

  var _useState15 = (0,react.useState)(),
      _useState16 = slicedToArray_default()(_useState15, 2),
      curPosition = _useState16[0],
      setCurrentPosition = _useState16[1];

  var _useState17 = (0,react.useState)('market'),
      _useState18 = slicedToArray_default()(_useState17, 2),
      tradeType = _useState18[0],
      setTradeType = _useState18[1];

  var _useState19 = (0,react.useState)(1.0),
      _useState20 = slicedToArray_default()(_useState19, 2),
      leverage = _useState20[0],
      _setLeverage = _useState20[1];

  var _useState21 = (0,react.useState)(),
      _useState22 = slicedToArray_default()(_useState21, 2),
      curData = _useState22[0],
      setCurData = _useState22[1];

  var inRef = (0,react.useRef)();

  var _useState23 = (0,react.useState)(),
      _useState24 = slicedToArray_default()(_useState23, 2),
      succRet = _useState24[0],
      setSuccRet = _useState24[1];

  var _useState25 = (0,react.useState)(0),
      _useState26 = slicedToArray_default()(_useState25, 2),
      targetPrice = _useState26[0],
      setTargetPrice = _useState26[1];

  var _useState27 = (0,react.useState)(0),
      _useState28 = slicedToArray_default()(_useState27, 2),
      tpPrice = _useState28[0],
      setTpPrice = _useState28[1];

  var _useState29 = (0,react.useState)(0),
      _useState30 = slicedToArray_default()(_useState29, 2),
      slPrice = _useState30[0],
      setSlPrice = _useState30[1];

  var _useState31 = (0,react.useState)(false),
      _useState32 = slicedToArray_default()(_useState31, 2),
      tpsl = _useState32[0],
      _setTPSL = _useState32[1];

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage; // init 


  var selectList = (0,react.useMemo)(function () {
    if (osdData) {
      return [].concat(toConsumableArray_default()(poolTokenExtList), [osdData]);
    }

    return poolTokenExtList;
  }, [poolTokenExtList, osdData]);
  var selectInList = (0,react.useMemo)(function () {
    if (tokenPairs.length > 0 && selectList.length > 0) {
      var _tokenPairs = tokenPairs;

      if (outToken) {
        _tokenPairs = _tokenPairs.filter(function (item) {
          return item.indexToken.toLowerCase() === outToken.id.toLowerCase();
        });
      }

      var inIds = _tokenPairs.map(function (item) {
        return item.collateralToken.toLowerCase();
      });

      return selectList.filter(function (item) {
        return inIds.includes(item.id.toLowerCase());
      });
    }

    return [];
  }, [selectList, tokenPairs, outToken]);
  var selectOutList = (0,react.useMemo)(function () {
    if (tokenPairs.length > 0 && selectList.length > 0) {
      var _tokenPairs = tokenPairs;

      if (inToken) {
        _tokenPairs = _tokenPairs.filter(function (item) {
          return item.collateralToken.toLowerCase() === inToken.id.toLowerCase();
        });
      }

      var inIds = _tokenPairs.map(function (item) {
        return item.indexToken.toLowerCase();
      });

      return selectList.filter(function (item) {
        return inIds.includes(item.id.toLowerCase());
      });
    }

    return [];
  }, [selectList, tokenPairs, inToken]);
  (0,react.useEffect)(function () {
    if (selectList.length > 0 && tokenPairs.length > 0 && positionList.length > 0) {
      var _inToken = inToken;
      var _outToken = outToken;

      if (!_inToken && !_outToken) {
        _inToken = selectList.find(function (item) {
          return item.id.toLowerCase() === tokenPairs[0].collateralToken.toLowerCase();
        });
        _outToken = selectList.find(function (item) {
          return item.id.toLowerCase() === tokenPairs[0].indexToken.toLowerCase();
        });
      }

      if (_inToken && _outToken) {
        var _position = positionList.find(function (position) {
          return (//@ts-ignore
            position.collateralToken.toLowerCase() === _inToken.id.toLocaleLowerCase() && //sb tips
            //@ts-ignore
            position.indexToken.toLowerCase() === _outToken.id.toLowerCase() && position.isLong === isLong
          );
        });

        var _pair = tokenPairs.find(function (pair) {
          return (//@ts-ignore
            pair.collateralToken.toLowerCase() === _inToken.id.toLocaleLowerCase() && //sb tips
            //@ts-ignore
            pair.indexToken.toLowerCase() === _outToken.id.toLowerCase()
          );
        });

        if (_position) setCurrentPosition(_position);

        if (_pair) {
          setCurPair(_pair);
          setCurrentChartPair(_pair);
        }

        if (!inToken) setInToken(_inToken);
        if (!outToken) setOutToken(_outToken);
      }
    }
  }, [selectList, tokenPairs, positionList, inToken, outToken]); // update token

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
  (0,react.useEffect)(function () {
    if (curPair) {
      setTargetPrice(Number(curPair.userIndexPrice));
    }
  }, [curPair]);

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      boxShadow = _theme$useToken$token.boxShadow,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var inAmountUSD = (0,react.useMemo)(function () {
    if (inAmount && curPair) {
      return Number(inAmount) * Number(curPair.userCollateralPrice);
    }
  }, [inAmount, curPair, tradeType, targetPrice]);
  var outAmountUSD = (0,react.useMemo)(function () {
    if (outAmount && outToken) {
      return (Number(outAmount) * (tradeType === 'market' ? Number(outToken.userOraclePrice) : Number(targetPrice))).toFixed(2);
    }
  }, [outAmount, outToken, tradeType, targetPrice]);
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
      var _calcLimitData, _calcLimitData2, _calcLimitData2$, size, _curData, err;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(curPair, curPosition);

              if (!(!outToken || !inToken || !chain || !Number(inAmount) || !curPair || !curPosition)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _calcLimitData = (0,contract/* calcLimitData */.Kj)({
                curPair: curPair,
                curPosition: curPosition,
                amount: String(inAmount),
                type: 'in',
                tradeType: tradeType,
                leverage: leverage,
                targetPrice: String(targetPrice)
              }), _calcLimitData2 = slicedToArray_default()(_calcLimitData, 2), _calcLimitData2$ = _calcLimitData2[0], size = _calcLimitData2$.size, _curData = _calcLimitData2$.curData, err = _calcLimitData2[1];

              if (!err) {
                _context.next = 7;
                break;
              }

              message/* default.error */.ZP.error(err.error);
              return _context.abrupt("return");

            case 7:
              setOutAmount(size);

              if (_curData) {
                console.log(_curData, '_curData_curData_curData');
                setCurData(_curData);
              }

              setAmountType('in');

            case 10:
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
      var _calcLimitData3, _calcLimitData4, _calcLimitData4$, size, _curData, err;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!outToken || !inToken || !chain || !Number(outAmount) || !curPair || !curPosition || !leverage)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _calcLimitData3 = (0,contract/* calcLimitData */.Kj)({
                curPair: curPair,
                curPosition: curPosition,
                amount: String(outAmount),
                type: 'out',
                tradeType: tradeType,
                leverage: leverage,
                targetPrice: String(targetPrice)
              }), _calcLimitData4 = slicedToArray_default()(_calcLimitData3, 2), _calcLimitData4$ = _calcLimitData4[0], size = _calcLimitData4$.size, _curData = _calcLimitData4$.curData, err = _calcLimitData4[1];
              console.log(err, size);

              if (!err) {
                _context2.next = 7;
                break;
              }

              message/* default.error */.ZP.error(err.error);
              return _context2.abrupt("return");

            case 7:
              setInAmount(size);

              if (_curData) {
                console.log(_curData);
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

            case 10:
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
      setCurrentChart(token);

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
                _context3.next = 17;
                break;
              }

              _context3.next = 6;
              return (0,contract/* increasePosition */.tu)({
                chain: chain,
                wallet: wallet,
                inToken: inToken,
                outToken: outToken,
                isLong: isLong,
                marginDelta: curData.marginDelta,
                _notionalDelta: curData.notionalDelta
              });

            case 6:
              _yield$increasePositi = _context3.sent;
              _yield$increasePositi2 = slicedToArray_default()(_yield$increasePositi, 2);
              ret = _yield$increasePositi2[0];
              err = _yield$increasePositi2[1];

              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              if (!ret) {
                _context3.next = 15;
                break;
              }

              setSuccRet({
                type: 'openLong',
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);
                  setInAmount(0);
                  setOutAmount(0);
                },
                title: 'Opne  Success',
                hash: (ret === null || ret === void 0 ? void 0 : ret.hash) || '',
                okText: 'Close'
              });
              _context3.next = 15;
              return updataTokens();

            case 15:
              _context3.next = 49;
              break;

            case 17:
              if (tpsl) {
                _context3.next = 35;
                break;
              }

              _context3.next = 20;
              return (0,contract/* limitIncreasePosition */.IH)({
                chain: chain,
                wallet: wallet,
                targetPrice: String(targetPrice),
                inToken: inToken,
                outToken: outToken,
                curPair: curPair,
                isLong: isLong,
                notionalDelta: curData.notionalDelta,
                marginDelta: curData.marginDelta
              });

            case 20:
              _yield$limitIncreaseP = _context3.sent;
              _yield$limitIncreaseP2 = slicedToArray_default()(_yield$limitIncreaseP, 2);
              _ret = _yield$limitIncreaseP2[0];
              _err = _yield$limitIncreaseP2[1];

              if (!_err) {
                _context3.next = 28;
                break;
              }

              message/* default.error */.ZP.error(_err.error);
              setSubmiting(false);
              return _context3.abrupt("return");

            case 28:
              if (!_ret) {
                _context3.next = 33;
                break;
              }

              setSuccRet({
                type: 'openLong',
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);
                  setInAmount(0);
                  setOutAmount(0);
                  setTargetPrice(0);
                },
                title: 'Opne  Success',
                hash: (_ret === null || _ret === void 0 ? void 0 : _ret.hash) || '',
                okText: 'Close'
              });
              console.log('updataTokensupdataTokensupdataTokensupdataTokens');
              _context3.next = 33;
              return updataTokens();

            case 33:
              _context3.next = 49;
              break;

            case 35:
              _context3.next = 37;
              return (0,contract/* limitIncreaseAndDecreasePosition */.mE)({
                chain: chain,
                wallet: wallet,
                targetPrice: String(targetPrice),
                inToken: inToken,
                outToken: outToken,
                curPair: curPair,
                isLong: isLong,
                notionalDelta: curData.notionalDelta,
                marginDelta: curData.marginDelta,
                tpPrice: tpPrice,
                slPrice: slPrice
              });

            case 37:
              _yield$limitIncreaseA = _context3.sent;
              _yield$limitIncreaseA2 = slicedToArray_default()(_yield$limitIncreaseA, 2);
              _ret2 = _yield$limitIncreaseA2[0];
              _err2 = _yield$limitIncreaseA2[1];

              if (!_err2) {
                _context3.next = 45;
                break;
              }

              message/* default.error */.ZP.error(_err2.error);
              setSubmiting(false);
              return _context3.abrupt("return");

            case 45:
              if (!_ret2) {
                _context3.next = 49;
                break;
              }

              setSuccRet({
                type: 'openLong',
                show: true,
                onClose: function onClose() {
                  setSuccRet(objectSpread2_default()(objectSpread2_default()({}, succRet), {}, {
                    show: false
                  }));
                  setInAmount(0);
                  setOutAmount(0);
                },
                title: 'Opne  Success',
                hash: (_ret2 === null || _ret2 === void 0 ? void 0 : _ret2.hash) || '',
                okText: 'Close'
              });
              _context3.next = 49;
              return updataTokens();

            case 49:
              // if (err) {
              //     message.error(err.error)
              //     return
              // }
              // message.success('SWAP SUCCESS' + ret?.hash)
              // updataTokens()
              setSubmiting(false);

            case 50:
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
            onClick: function onClick() {},
            children: ["Pay(Margin+Fee):  ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              style: {
                color: colorPrimary
              },
              children: ["$", inAmountUSD]
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
              children: inToken.userTokenBalance
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
        tokenList: selectInList
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
        header: outToken && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "label",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: isLong ? '#00a980' : '#eb5757'
            },
            onClick: function onClick() {},
            children: [" ", isLong ? 'long' : 'short', ": $", outAmountUSD]
          }), tradeType === 'market' && /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
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
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TPSL["default"], objectSpread2_default()({
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
            children: formatMessage({
              id: 'funding_rate'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "value",
            children: [curData && curData._hourFundingRate, "%/1h"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "InputCardTip",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "label",
            children: "Fees"
          }), curData && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "value",
            children: [curData._tradingFeeRate, "% (", curData._tradingFee, inToken && inToken.symbol, ")"]
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
          condition: !!inToken && inAmount > inToken.userTokenBalance,
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
        }],
        children: ["Open ", isLong ? 'Long' : 'Short']
      })
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

/* harmony default export */ var components_Long = (Long);

/***/ }),

/***/ 41375:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_TPSL; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(32808);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 13 modules
var input_number = __webpack_require__(43262);
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js + 2 modules
var es_switch = __webpack_require__(72269);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 10 modules
var card = __webpack_require__(98225);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/react-slider/dist/es/prod/components/ReactSlider/ReactSlider.mjs + 1 modules
var ReactSlider = __webpack_require__(47729);
;// CONCATENATED MODULE: ./src/pages/trade/components/TPSL/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/TPSL/index.tsx











function TPSL(props) {
  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
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

  var _useState = (0,react.useState)(false),
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
    console.log(value);
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
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "silder_trigger",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z // formatter={(value) => value + 'x'}
          , {
            value: dig,
            onChange: onChangeDig,
            min: 1,
            max: maxLeverage || 1,
            className: "dig"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "txt",
          children: 'slider'
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z, {
          onChange: onChangeSliderVisible
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

/***/ })

}]);