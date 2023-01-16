"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9169],{

/***/ 59690:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_ChartHeader; }
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
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(48054);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
;// CONCATENATED MODULE: ./src/pages/trade/components/ChartHeader/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/ChartHeader/index.tsx












var ChartItemLayout = {
  xl: 3,
  md: 4,
  sm: 12,
  xs: 12
};

var Statistic = function Statistic(_ref) {
  var title = _ref.title,
      loading = _ref.loading,
      value = _ref.value,
      prefix = _ref.prefix;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorText = _theme$useToken$token.colorText,
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

  var _theme$useToken2 = theme/* default.useToken */.Z.useToken(),
      _theme$useToken2$toke = _theme$useToken2.token,
      colorText = _theme$useToken2$toke.colorText,
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
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
        title: "",
        prefix: "",
        value: "Mark:"
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
        title: "24H Volume",
        value: "--"
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Statistic, {
        title: "24H Fee",
        prefix: "$:"
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
      xl: 7,
      md: 10,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "hay-Statistis",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            color: colorText,
            fontSize: 14
          },
          children: ["L $", tokenPair.totalLongSizeLabel, " | ", tokenPair.longFundingRateLabel]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            color: colorText,
            fontSize: 14
          },
          children: ["S $", tokenPair.totalShortSizeLabel, " | ", tokenPair.shortFundingRateLabel]
        })]
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
      xl: 4,
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

/***/ }),

/***/ 88979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_LimitOrder; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 1 modules
var spin = __webpack_require__(57953);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 47 modules
var table = __webpack_require__(83259);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// CONCATENATED MODULE: ./src/pages/trade/components/LimitOrder/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var LimitOrdermodules = ({"container":"container___vZ_s_","editText":"editText___Emn9Y","longText":"longText___hKdKh","shortText":"shortText___db6yz","table_wrap":"table_wrap___qTGMy","tableTh":"tableTh___muicR"});
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/LimitOrder/index.tsx








 //本来考虑穿过去处理 发现useEffect。。





var LimitOrder = function LimitOrder() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('future'),
      LimitOrderList = _useModel2.LimitOrderList,
      loading = _useModel2.loading,
      updateLimitOrder = _useModel2.updateLimitOrder;

  var _useState = (0,react.useState)(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      cancelingId = _useState2[0],
      setCancelId = _useState2[1];

  console.log(LimitOrderList, 'LimitOrderListLimitOrderListLimitOrderList');

  var handleCancel = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(record) {
      var _yield$cancelIncrease, _yield$cancelIncrease2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!chain || !wallet)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setCancelId(record.id);
              _context.next = 5;
              return (0,contract/* cancelIncreaseOrder */.VU)({
                chain: chain,
                wallet: wallet,
                _orderIndex: String(record.orderIndex)
              });

            case 5:
              _yield$cancelIncrease = _context.sent;
              _yield$cancelIncrease2 = slicedToArray_default()(_yield$cancelIncrease, 2);
              ret = _yield$cancelIncrease2[0];
              err = _yield$cancelIncrease2[1];

              if (!err) {
                _context.next = 13;
                break;
              }

              message/* default.error */.ZP.error(err.error);
              setCancelId('');
              return _context.abrupt("return");

            case 13:
              _context.next = 15;
              return updateLimitOrder();

            case 15:
              setCancelId('');

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
    title: 'Positions',
    dataIndex: 'execStatusName',
    key: 'execStatusName',
    align: 'right',
    render: function render(text, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: record.execStatus === 3 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: record.isLong ? LimitOrdermodules.longText : LimitOrdermodules.shortText,
            children: record.isLong ? 'L' : 'S'
          }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: record.indexSymbol
          })]
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
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: LimitOrdermodules.tableTh,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "Margin"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "Value"
      })]
    }),
    dataIndex: 'Margin',
    key: 'Margin',
    render: function render(text, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: LimitOrdermodules.tableTh,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          children: [text, " ", record.collateralSymbol]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          children: ["$", record.MarginValue]
        })]
      });
    },
    align: 'right'
  }, {
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
        children: "Manage"
      });
    },
    key: 'action',
    align: 'right',
    render: function render(_, record) {
      console.log(record.submiting);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
        spinning: record.id === cancelingId,
        size: "small",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: LimitOrdermodules.editText,
          onClick: function onClick() {
            handleCancel(record);
          },
          children: "Cancel"
        })
      });
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: LimitOrdermodules.container,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
        columns: columns,
        dataSource: LimitOrderList,
        size: "small",
        loading: loading,
        rowKey: "id"
      })
    })
  });
};

/* harmony default export */ var components_LimitOrder = (LimitOrder);

/***/ }),

/***/ 789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_Swap; }
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
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/pages/trade/components/Swap/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useDebounceFn/index.js + 4 modules
var useDebounceFn = __webpack_require__(40238);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/Swap/index.tsx

















var Swap = function Swap(_ref) {
  var setCurrentChart = _ref.setCurrentChart;

  var _useSearchParams = (0,_umi_production_exports.useSearchParams)(),
      _useSearchParams2 = slicedToArray_default()(_useSearchParams, 1),
      query = _useSearchParams2[0];

  var queOut = query.get('swapOut');

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

  var _useModel2 = (0,_umi_production_exports.useModel)('initModel'),
      maxSlippage = _useModel2.maxSlippage;

  var _useState13 = (0,react.useState)('0'),
      _useState14 = slicedToArray_default()(_useState13, 2),
      impact = _useState14[0],
      setImpact = _useState14[1];

  var inRef = (0,react.useRef)();

  var _useState15 = (0,react.useState)(),
      _useState16 = slicedToArray_default()(_useState15, 2),
      succRet = _useState16[0],
      setSuccRet = _useState16[1];

  var selectList = (0,react.useMemo)(function () {
    if (osdData) {
      return [].concat(toConsumableArray_default()(poolTokenExtList), [osdData]);
    }

    return poolTokenExtList;
  }, [poolTokenExtList, osdData]); // update token

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

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
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
      return (Number(inAmount) * Number(inToken.userOraclePrice)).toFixed(2);
    }
  }, [inAmount, inToken]);
  var outAmountUSD = (0,react.useMemo)(function () {
    if (outAmount && outToken) {
      return (Number(outAmount) * Number(outToken.userOraclePrice)).toFixed(2);
    }
  }, [outAmount, outToken]);

  var _calcImpact = (0,react.useCallback)(function () {
    if (inAmount && outAmount && inToken && outToken) {
      var ret = (0,contract/* calcImpact */.wf)({
        inToken: inToken,
        outToken: outToken,
        outAmount: outAmount,
        inAmount: inAmount
      });
      setImpact(ret);
    }

    setImpact('0');
  }, [inAmount, outAmount, inToken, outToken]);

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
              _context.next = 4;
              return (0,contract/* calcSwapAmountOut */.rv)({
                walletName: (wallet === null || wallet === void 0 ? void 0 : wallet.name) || '',
                chainId: chain.id,
                amount: inAmount,
                inToken: inToken,
                outToken: outToken
              });

            case 4:
              _yield$calcSwapAmount = _context.sent;
              _yield$calcSwapAmount2 = slicedToArray_default()(_yield$calcSwapAmount, 2);
              _out = _yield$calcSwapAmount2[0];
              error = _yield$calcSwapAmount2[1];

              if (!error) {
                _context.next = 12;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setOutAmount('');
              return _context.abrupt("return");

            case 12:
              _calcImpact();

              setOutAmount(_out);
              setAmountType('in');

            case 15:
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
              _context2.next = 4;
              return (0,contract/* calcSwapAmountIn */.F_)({
                walletName: (wallet === null || wallet === void 0 ? void 0 : wallet.name) || '',
                chainId: chain.id,
                amount: outAmount,
                inToken: inToken,
                outToken: outToken
              });

            case 4:
              _yield$calcSwapAmount3 = _context2.sent;
              _yield$calcSwapAmount4 = slicedToArray_default()(_yield$calcSwapAmount3, 2);
              _in = _yield$calcSwapAmount4[0];
              error = _yield$calcSwapAmount4[1];

              if (!error) {
                _context2.next = 12;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setInAmount('');
              return _context2.abrupt("return");

            case 12:
              _calcImpact();

              console.log(_in);
              setInAmount(_in);
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

            case 15:
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
          setInAmount(String(value));
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
            children: ["Pay ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: inAmountUSD
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
              style: {
                color: colorPrimary
              },
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
          children: ["Receive: $ ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: colorPrimary
            },
            children: outAmountUSD
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 12,
            color: colorTextSecondary
          },
          onClick: function onClick() {
            setInAmount(outToken.userTokenBalanceLabel);
          },
          children: ["PoolBalance: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: colorPrimary
            },
            children: poolBalance
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

/***/ }),

/***/ 16297:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_TradeHistory; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
;// CONCATENATED MODULE: ./src/pages/trade/components/TradeHistory/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var TradeHistorymodules = ({});
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 47 modules
var table = __webpack_require__(83259);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/trade/components/TradeHistory/index.tsx











var beautyHash = function beautyHash(hash) {
  return hash.replace(/(\w{7})\w+(\w{5})/, '$1...$2');
};

var TradeHistory = function TradeHistory(_ref) {
  var type = _ref.type;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
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
    width: 180,
    render: function render(text) {
      return dayjs_min_default()(text * 1000).format('YYYY/MM/DD, HH:mm A');
    }
  }, {
    title: '',
    dataIndex: 'content',
    key: 'content'
  }, {
    title: '',
    dataIndex: 'account',
    key: 'account',
    width: 162,
    render: function render(text) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ['owner', ":\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "primary",
          href: "".concat(chain && chain.exporerAccountUrl, "/").concat(text, "?network=").concat(chain && chain.network),
          target: "_blank",
          rel: "noreferrer",
          style: {
            color: colorPrimary
          },
          children: beautyHash(text)
        })]
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

/***/ }),

/***/ 910:
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
// EXTERNAL MODULE: ./node_modules/antD/es/grid/index.js
var grid = __webpack_require__(63913);
// EXTERNAL MODULE: ./node_modules/antD/es/theme/index.js + 5 modules
var es_theme = __webpack_require__(30275);
// EXTERNAL MODULE: ./node_modules/antD/es/row/index.js + 1 modules
var row = __webpack_require__(83614);
// EXTERNAL MODULE: ./node_modules/antD/es/col/index.js + 1 modules
var col = __webpack_require__(58330);
// EXTERNAL MODULE: ./node_modules/antD/es/card/index.js + 15 modules
var card = __webpack_require__(25980);
// EXTERNAL MODULE: ./node_modules/antD/es/tabs/index.js + 5 modules
var tabs = __webpack_require__(24667);
// EXTERNAL MODULE: ./node_modules/antD/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(95638);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(80882);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/pages/trade/components/Swap/index.tsx + 1 modules
var Swap = __webpack_require__(789);
// EXTERNAL MODULE: ./src/pages/trade/components/Long/index.tsx + 1 modules
var Long = __webpack_require__(22933);
// EXTERNAL MODULE: ./src/pages/trade/components/TradeHistory/index.tsx + 1 modules
var TradeHistory = __webpack_require__(16297);
// EXTERNAL MODULE: ./src/pages/trade/components/LimitOrder/index.tsx + 1 modules
var LimitOrder = __webpack_require__(88979);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
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
      theme = props.theme;
  var locale = (0,_umi_production_exports.getLocale)(); // const [w, setW] = useState(676)
  // const handleResize = (e) => {
  //   console.log(e.target.innerWidth)
  //   const { innerWidth } = e.target
  //   if (innerWidth < 676 && innerWidth > 300) {
  //     setW(innerWidth)
  //   }
  // }

  var initOnReady = function initOnReady() {
    // let datafeedUrl = 'https://demo-feed-data.tradingview.com'
    var datafeedUrl = 'https://zksync-data-feed.onchain.trade/data-feed'; // if (dataUrl !== '') {
    //   datafeedUrl = dataUrl.startsWith('https://') ? dataUrl : `https://${dataUrl}`
    // }
    // @ts-ignore

    var interval = '5';
    var datafeed = new window.Datafeeds.UDFCompatibleDatafeed(datafeedUrl);
    var dark = {
      bg: '#1E2439',
      text: '#fff'
    };
    var light = {
      bg: '#fff',
      text: '#000'
    };
    var t = theme === 'dark' ? dark : light;
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
      // { label: '1m', resolution: '1' },
      {
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
    id: "tv_chart_container"
  });
}

/* harmony default export */ var tradeview = (Tradeview);
// EXTERNAL MODULE: ./src/components/TokenSelect/index.tsx + 1 modules
var TokenSelect = __webpack_require__(73687);
// EXTERNAL MODULE: ./src/pages/trade/components/Positions/index.tsx + 1 modules
var Positions = __webpack_require__(64170);
// EXTERNAL MODULE: ./src/pages/trade/components/ChartHeader/index.tsx + 1 modules
var ChartHeader = __webpack_require__(59690);
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
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















var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;




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
var ChartItemLayout = {
  xl: 4,
  md: 6,
  sm: 12,
  xs: 12
};
var defaultChart = 'ETH';
function HomePage() {
  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  var _useModel = (0,_umi_production_exports.useModel)('initModel'),
      theme = _useModel.theme;

  var _THEME$useToken = es_theme/* default.useToken */.Z.useToken(),
      _THEME$useToken$token = _THEME$useToken.token,
      borderRadius = _THEME$useToken$token.borderRadius,
      colorTextSecondary = _THEME$useToken$token.colorTextSecondary;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useModel2 = (0,_umi_production_exports.useModel)('chain'),
      poolTokenExtList = _useModel2.poolTokenExtList,
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

  var _useState5 = (0,react.useState)([]),
      _useState6 = slicedToArray_default()(_useState5, 2),
      chartList = _useState6[0],
      setChartList = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      showSelect = _useState8[0],
      setShowSelect = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      currentChart = _useState10[0],
      _setCurrentChart = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      currentChartPair = _useState12[0],
      setCurrentChartPair = _useState12[1];

  var ChartRef = (0,react.useRef)();
  (0,react.useEffect)(function () {
    var resizeChart = function resizeChart() {
      var _ChartRef$current;

      setChartWidth((_ChartRef$current = ChartRef.current) === null || _ChartRef$current === void 0 ? void 0 : _ChartRef$current.offsetWidth); // console.log(ChartRef.current?.offsetWidth,'ChartRef.current?.offsetWidth')
    };

    resizeChart();
    window.addEventListener('resize', resizeChart);
    return function () {
      return window.removeEventListener('resize', resizeChart);
    };
  }, []);
  (0,react.useEffect)(function () {
    if (currentChart && tokenPairs.length && actionType !== 'swap') {
      var _find = tokenPairs.find(function (item) {
        return item.indexToken.toLowerCase() === currentChart.id;
      });

      if (_find) setCurrentChartPair(_find);
    } else {
      setCurrentChartPair(undefined);
    }
  }, [currentChart, tokenPairs, actionType]);
  (0,react.useEffect)(function () {
    if (poolTokenExtList.length) {
      var find = poolTokenExtList.find(function (item) {
        return item.symbol === (currentChart === null || currentChart === void 0 ? void 0 : currentChart.symbol) || item.symbol === defaultChart;
      });

      if (find) {
        _setCurrentChart(find);
      } else {
        _setCurrentChart(poolTokenExtList[0]);
      }

      setChartList(poolTokenExtList);
    }
  }, [poolTokenExtList]);

  var onTabsChange = function onTabsChange(key) {
    console.log(key);
  };

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
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
                className: "chartHeader",
                gutter: [0, 12],
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ChartItemLayout), {}, {
                  className: "select",
                  onClick: function onClick() {
                    return setShowSelect(true);
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                    src: (currentChart === null || currentChart === void 0 ? void 0 : currentChart.icon) || ''
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    className: "symbol",
                    children: (currentChart === null || currentChart === void 0 ? void 0 : currentChart.symbol) || defaultChart
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
                })), /*#__PURE__*/(0,jsx_runtime.jsx)(ChartHeader["default"], {
                  tokenPair: currentChartPair
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                ref: ChartRef,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(tradeview, {
                  theme: theme,
                  symbol: (currentChart === null || currentChart === void 0 ? void 0 : currentChart.symbol) || defaultChart,
                  width: chartWidth
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
              bodyStyle: {
                padding: 0
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
                defaultActiveKey: "1",
                onChange: onTabsChange,
                tabBarStyle: {
                  padding: '0 10px',
                  background: theme === 'light' ? 'rgba(38, 44, 61, 0.1)' : '#000',
                  borderRadius: "".concat(borderRadius, "px ").concat(borderRadius, "px 0 0")
                },
                size: "small",
                items: [{
                  label: "Positions",
                  key: '1',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Positions["default"], {})
                }, {
                  label: "OpenDatas",
                  key: '2',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(LimitOrder["default"], {})
                }, {
                  label: "My History",
                  key: '4',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(TradeHistory["default"], {
                    type: "personal"
                  })
                }, {
                  label: "Market Trades",
                  key: '3',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(TradeHistory["default"], {
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
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
            style: {
              width: '100%'
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
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Swap["default"], {
                setCurrentChart: function setCurrentChart(token) {
                  return _setCurrentChart(token);
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 24,
              style: {
                display: actionType === 'long' ? 'block' : 'none'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Long["default"], {
                isLong: true,
                setCurrentChart: function setCurrentChart(token) {
                  return _setCurrentChart(token);
                },
                setCurrentChartPair: function setCurrentChartPair(token) {}
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 24,
              style: {
                display: actionType === 'short' ? 'block' : 'none'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Long["default"], {
                isLong: false,
                setCurrentChart: function setCurrentChart(token) {
                  return _setCurrentChart(token);
                },
                setCurrentChartPair: function setCurrentChartPair(token) {}
              })
            })]
          })]
        })
      }))]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TokenSelect/* default */.Z, {
      tokenList: chartList,
      show: showSelect,
      onClose: function onClose() {
        return setShowSelect(false);
      },
      onChange: function onChange(token) {
        return _setCurrentChart(token);
      }
    })]
  });
}

/***/ })

}]);