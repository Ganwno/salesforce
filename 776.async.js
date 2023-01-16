"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[776],{

/***/ 32761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ chart; }
});

// EXTERNAL MODULE: ./node_modules/echarts/index.js + 541 modules
var echarts = __webpack_require__(63228);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/pages/pools/components/Details/chart.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var chartmodules = ({"chart":"chart___zk4s6"});
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(70794);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
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
  console.log(utilRate, 'utilRateutilRateutilRateutilRate');
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
              console.log(params);
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

/***/ }),

/***/ 62548:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Details; }
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
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/pages/pools/components/Details/chart.tsx + 1 modules
var chart = __webpack_require__(32761);
;// CONCATENATED MODULE: ./src/pages/pools/components/Details/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
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
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(chart["default"], {
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

/***/ 87896:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_NewPool; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13769);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
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
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(49677);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);
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
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 13 modules
var input_number = __webpack_require__(43262);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
;// CONCATENATED MODULE: ./src/pages/pools/components/NewPool/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/pools/components/NewPool/index.tsx







var _excluded = ["show", "onCancel"];











var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var Content = function Content(_ref) {
  objectDestructuringEmpty_default()(_ref);

  // const { tokenList, osdToken } = useModel('tokens');
  // const { poolList } = useModel('pools');
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      poolTokenExtList = _useModel.poolTokenExtList,
      osdData = _useModel.osdData;

  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  var intl = (0,_umi_production_exports.useIntl)();

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
              if (res && res.hash) {//TODO
                // setTxid(res.hash)
                // setResultVisible(true)
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
        children: "Create A New Pool"
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
            children: "Add Amount"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 12,
              color: colorTextSecondary
            },
            onClick: function onClick() {
              return setAmount(current === null || current === void 0 ? void 0 : current.userTokenBalance);
            },
            children: ["Balance: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: colorPrimary
              },
              children: current && Number(current === null || current === void 0 ? void 0 : current.userTokenBalance).toFixed(4)
            })]
          })]
        }),
        onAmountChange: changeValue,
        currentToken: current,
        tokenList: [].concat(toConsumableArray_default()(poolTokenExtList), [osdData]),
        onTokenChange: setCurrent,
        showSlider: false
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
        children: "Set a price(USD)"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 12
        },
        children: ["Liquidity providers earn swap fees on all trades, fees go directly back to respective pools, fees are claimed proportional to your pool share by withdrawing your liquidity from pool. Learn more about ", /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
          href: "https://onchaintrade.gitbook.io/ot/amm-and-lp/single-side-liquidity",
          target: "_blank",
          style: {
            color: colorPrimary
          },
          children: "Liquidity"
        })]
      })
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
            console.log('wtffffff');
            setShowSelect(true);
          }
        }, {
          condition: isExists,
          text: 'Pool Already Exists',
          type: 'primary',
          onClick: function onClick() {
            setShowSelect(true);
          }
        }, {
          condition: !amount,
          text: 'Enter Amount',
          type: 'default',
          onClick: function onClick() {
            console.log('111');
            if (amountRef.current) amountRef.current.focus();
          }
        }, {
          condition: !price,
          text: 'Set Price of ' + (current && (current === null || current === void 0 ? void 0 : current.symbol)),
          type: 'default',
          onClick: function onClick() {
            console.log('111');
            if (priceRef.current) priceRef.current.focus();
          }
        }],
        children: "Add Liquidity"
      })
    })]
  });
};

var NewPool = function NewPool(_ref3) {
  var show = _ref3.show,
      onCancel = _ref3.onCancel,
      rest = objectWithoutProperties_default()(_ref3, _excluded);

  var screens = useBreakpoint();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    show: show,
    onClose: onCancel,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: " modalWrap createPool",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, rest))
    })
  });
};

/* harmony default export */ var components_NewPool = (NewPool);

/***/ }),

/***/ 12168:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export ReactComponent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgOsd = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ width: 20, height: 25, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 6.316a4 4 0 0 1 2.689-3.78l6-2.081a4 4 0 0 1 2.622 0l6 2.082A4 4 0 0 1 20 6.316v7.477c0 5.62-4.14 10.383-9.706 11.166a2.111 2.111 0 0 1-.588 0A11.276 11.276 0 0 1 0 13.793V6.316Z", fill: "#03CDC1" }), /* @__PURE__ */ React.createElement("g", { filter: "url(#osd_svg__a)" }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.64 17.046c.526-1.186.788-2.562.788-4.129v-.89c-.007-1.559-.276-2.924-.809-4.095-.532-1.18-1.287-2.08-2.267-2.702-.972-.63-2.09-.944-3.352-.944-1.263 0-2.384.318-3.363.955-.973.63-1.728 1.541-2.267 2.734-.533 1.194-.799 2.57-.799 4.13v.9c.007 1.53.277 2.88.81 4.052.538 1.172 1.298 2.076 2.277 2.713.986.63 2.107.944 3.363.944 1.27 0 2.391-.315 3.363-.944.98-.637 1.732-1.545 2.257-2.724Zm-1.96-2.903c-.118 1.21-.423 2.17-.913 2.881-.638.938-1.554 1.406-2.746 1.406-1.178 0-2.1-.48-2.767-1.439-.497-.722-.807-1.672-.93-2.848h7.356Zm.044-2.629c-.064-1.496-.386-2.665-.967-3.506-.646-.944-1.565-1.416-2.757-1.416-1.164 0-2.076.472-2.735 1.416-.591.848-.92 2.017-.988 3.506h7.447Z", fill: "#fff" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: "osd_svg__a", x: 0.714, y: 2.143, width: 18.572, height: 22.143, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ React.createElement("feOffset", { dy: 0.714 }), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 1.429 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.886275 0 0 0 0.4 0" }), /* @__PURE__ */ React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_7119_29469" }), /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_7119_29469", result: "shape" }))));

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDYuMzE2YTQgNCAwIDAgMSAyLjY4OS0zLjc4bDYtMi4wODFhNCA0IDAgMCAxIDIuNjIyIDBsNiAyLjA4MkE0IDQgMCAwIDEgMjAgNi4zMTZ2Ny40NzdjMCA1LjYyLTQuMTQgMTAuMzgzLTkuNzA2IDExLjE2NmEyLjExMSAyLjExMSAwIDAgMS0uNTg4IDBBMTEuMjc2IDExLjI3NiAwIDAgMSAwIDEzLjc5M1Y2LjMxNloiIGZpbGw9IiMwM0NEQzEiLz48ZyBmaWx0ZXI9InVybCgjYSkiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNjQgMTcuMDQ2Yy41MjYtMS4xODYuNzg4LTIuNTYyLjc4OC00LjEyOXYtLjg5Yy0uMDA3LTEuNTU5LS4yNzYtMi45MjQtLjgwOS00LjA5NS0uNTMyLTEuMTgtMS4yODctMi4wOC0yLjI2Ny0yLjcwMi0uOTcyLS42My0yLjA5LS45NDQtMy4zNTItLjk0NC0xLjI2MyAwLTIuMzg0LjMxOC0zLjM2My45NTUtLjk3My42My0xLjcyOCAxLjU0MS0yLjI2NyAyLjczNC0uNTMzIDEuMTk0LS43OTkgMi41Ny0uNzk5IDQuMTN2LjljLjAwNyAxLjUzLjI3NyAyLjg4LjgxIDQuMDUyLjUzOCAxLjE3MiAxLjI5OCAyLjA3NiAyLjI3NyAyLjcxMy45ODYuNjMgMi4xMDcuOTQ0IDMuMzYzLjk0NCAxLjI3IDAgMi4zOTEtLjMxNSAzLjM2My0uOTQ0Ljk4LS42MzcgMS43MzItMS41NDUgMi4yNTctMi43MjRabS0xLjk2LTIuOTAzYy0uMTE4IDEuMjEtLjQyMyAyLjE3LS45MTMgMi44ODEtLjYzOC45MzgtMS41NTQgMS40MDYtMi43NDYgMS40MDYtMS4xNzggMC0yLjEtLjQ4LTIuNzY3LTEuNDM5LS40OTctLjcyMi0uODA3LTEuNjcyLS45My0yLjg0OGg3LjM1NlptLjA0NC0yLjYyOWMtLjA2NC0xLjQ5Ni0uMzg2LTIuNjY1LS45NjctMy41MDYtLjY0Ni0uOTQ0LTEuNTY1LTEuNDE2LTIuNzU3LTEuNDE2LTEuMTY0IDAtMi4wNzYuNDcyLTIuNzM1IDEuNDE2LS41OTEuODQ4LS45MiAyLjAxNy0uOTg4IDMuNTA2aDcuNDQ3WiIgZmlsbD0iI2ZmZiIvPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSJhIiB4PSIuNzE0IiB5PSIyLjE0MyIgd2lkdGg9IjE4LjU3MiIgaGVpZ2h0PSIyMi4xNDMiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz48ZmVPZmZzZXQgZHk9Ii43MTQiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjQyOSIvPjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjI5MDE5NiAwIDAgMCAwIDAuMjkwMTk2IDAgMCAwIDAgMC44ODYyNzUgMCAwIDAgMC40IDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzExOV8yOTQ2OSIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd183MTE5XzI5NDY5IiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PC9kZWZzPjwvc3ZnPg==");


/***/ })

}]);