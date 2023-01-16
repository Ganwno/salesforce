(self["webpackChunk"] = self["webpackChunk"] || []).push([[81,890],{

/***/ 80882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_DownOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
// This icon file is generated automatically.
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
/* harmony default export */ var asn_DownOutlined = (DownOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DownOutlined_DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DownOutlined
  }));
};
DownOutlined_DownOutlined.displayName = 'DownOutlined';
/* harmony default export */ var icons_DownOutlined = (/*#__PURE__*/react.forwardRef(DownOutlined_DownOutlined));

/***/ }),

/***/ 68795:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_SearchOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js
// This icon file is generated automatically.
var SearchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
/* harmony default export */ var asn_SearchOutlined = (SearchOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var SearchOutlined_SearchOutlined = function SearchOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_SearchOutlined
  }));
};
SearchOutlined_SearchOutlined.displayName = 'SearchOutlined';
/* harmony default export */ var icons_SearchOutlined = (/*#__PURE__*/react.forwardRef(SearchOutlined_SearchOutlined));

/***/ }),

/***/ 93417:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ResponPopup; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 20 modules
var modal = __webpack_require__(60974);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(85265);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/ResponPopup/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/ResponPopup/index.tsx





var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var Popup = function Popup(_ref) {
  var show = _ref.show,
      modalWidth = _ref.modalWidth,
      onClose = _ref.onClose,
      children = _ref.children,
      _ref$closable = _ref.closable,
      closable = _ref$closable === void 0 ? false : _ref$closable,
      _ref$maskClosable = _ref.maskClosable,
      maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? null : _ref$title;

  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: md ? /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
      open: show,
      onCancel: onClose,
      width: modalWidth || 420,
      title: title,
      footer: null,
      closable: closable,
      maskClosable: maskClosable,
      style: {
        padding: 0
      },
      className: "hayPopup",
      children: children
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
      title: title,
      open: show,
      placement: "bottom",
      onClose: onClose,
      closable: closable,
      maskClosable: maskClosable,
      style: {
        height: 'auto'
      },
      bodyStyle: {
        height: 'auto',
        maxHeight: '90vh'
      },
      contentWrapperStyle: {
        height: 'auto'
      },
      children: children
    })
  });
};

/* harmony default export */ var ResponPopup = (Popup);

/***/ }),

/***/ 80331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jazzicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44111);
/* harmony import */ var react_jazzicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jazzicon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);




var TokenIcon = function TokenIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 25 : _ref$size,
      src = _ref.src,
      _ref$symbol = _ref.symbol,
      symbol = _ref$symbol === void 0 ? '' : _ref$symbol,
      _ref$tokenId = _ref.tokenId,
      tokenId = _ref$tokenId === void 0 ? 'ii' : _ref$tokenId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: src ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: src,
      alt: symbol,
      style: {
        height: size
      }
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((react_jazzicon__WEBPACK_IMPORTED_MODULE_0___default()), {
      diameter: size,
      seed: (0,react_jazzicon__WEBPACK_IMPORTED_MODULE_0__.jsNumberForAddress)(tokenId)
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (TokenIcon);

/***/ }),

/***/ 32761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

/***/ 98082:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styleChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31808);


/* harmony default export */ __webpack_exports__["Z"] = (() => {
  const [flexible, setFlexible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setFlexible((0,_styleChecker__WEBPACK_IMPORTED_MODULE_1__/* .detectFlexGapSupported */ .fk)());
  }, []);
  return flexible;
});

/***/ }),

/***/ 15746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21584);

/* harmony default export */ __webpack_exports__["Z"] = (_grid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 99134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const RowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["Z"] = (RowContext);

/***/ }),

/***/ 21584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53124);
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99134);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6999);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function parseFlex(flex) {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__/* .ConfigContext */ .E_);
  const {
    gutter,
    wrap,
    supportFlexGap
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_RowContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  const {
      prefixCls: customizePrefixCls,
      span,
      order,
      offset,
      push,
      pull,
      className,
      children,
      flex,
      style
    } = props,
    others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
  const prefixCls = getPrefixCls('col', customizePrefixCls);
  const [wrapSSR, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_4__/* .useColStyle */ .c)(prefixCls);
  let sizeClassObj = {};
  sizes.forEach(size => {
    let sizeProps = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = Object.assign(Object.assign({}, sizeClassObj), {
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    });
  });
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, {
    [`${prefixCls}-${span}`]: span !== undefined,
    [`${prefixCls}-order-${order}`]: order,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-push-${push}`]: push,
    [`${prefixCls}-pull-${pull}`]: pull
  }, className, sizeClassObj, hashId);
  const mergedStyle = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }
  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    const verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", Object.assign({}, others, {
    style: Object.assign(Object.assign({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children));
});
if (false) {}
/* harmony default export */ __webpack_exports__["Z"] = (Col);

/***/ }),

/***/ 92820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53124);
/* harmony import */ var _util_hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98082);
/* harmony import */ var _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74443);
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99134);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6999);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const RowAligns = (/* unused pure expression or super */ null && (['top', 'middle', 'bottom', 'stretch']));
const RowJustify = (/* unused pure expression or super */ null && (['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']));
function useMergePropByScreen(oriProp, screen) {
  const [prop, setProp] = react__WEBPACK_IMPORTED_MODULE_1__.useState(typeof oriProp === 'string' ? oriProp : '');
  const clacMergeAlignOrJustify = () => {
    if (typeof oriProp === 'string') {
      setProp(oriProp);
    }
    if (typeof oriProp !== 'object') {
      return;
    }
    for (let i = 0; i < _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray.length */ .c.length; i++) {
      const breakpoint = _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray */ .c[i];
      // if do not match, do nothing
      if (!screen[breakpoint]) continue;
      const curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    clacMergeAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
}
const Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      justify,
      align,
      className,
      style,
      children,
      gutter = 0,
      wrap
    } = props,
    others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);
  const {
    getPrefixCls,
    direction
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__/* .ConfigContext */ .E_);
  const [screens, setScreens] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  // to save screens info when responsiveObserve callback had been call
  const [curScreens, setCurScreens] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  });
  // ================================== calc reponsive data ==================================
  const mergeAlign = useMergePropByScreen(align, curScreens);
  const mergeJustify = useMergePropByScreen(justify, curScreens);
  const supportFlexGap = (0,_util_hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const gutterRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(gutter);
  const responsiveObserver = (0,_util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  // ================================== Effect ==================================
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const token = responsiveObserver.subscribe(screen => {
      setCurScreens(screen);
      const currentGutter = gutterRef.current || 0;
      if (!Array.isArray(currentGutter) && typeof currentGutter === 'object' || Array.isArray(currentGutter) && (typeof currentGutter[0] === 'object' || typeof currentGutter[1] === 'object')) {
        setScreens(screen);
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  // ================================== Render ==================================
  const getGutter = () => {
    const results = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray.length */ .c.length; i++) {
          const breakpoint = _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray */ .c[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };
  const prefixCls = getPrefixCls('row', customizePrefixCls);
  const [wrapSSR, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_5__/* .useRowStyle */ .V)(prefixCls);
  const gutters = getGutter();
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, {
    [`${prefixCls}-no-wrap`]: wrap === false,
    [`${prefixCls}-${mergeJustify}`]: mergeJustify,
    [`${prefixCls}-${mergeAlign}`]: mergeAlign,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  // Add gutter related style
  const rowStyle = {};
  const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  const verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }
  if (supportFlexGap) {
    // Set gap direct if flex gap support
    [, rowStyle.rowGap] = gutters;
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }
  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  const [gutterH, gutterV] = gutters;
  const rowContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    gutter: [gutterH, gutterV],
    wrap,
    supportFlexGap
  }), [gutterH, gutterV, wrap, supportFlexGap]);
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RowContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Provider */ .Z.Provider, {
    value: rowContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", Object.assign({}, others, {
    className: classes,
    style: Object.assign(Object.assign({}, rowStyle), style),
    ref: ref
  }), children)));
});
if (false) {}
/* harmony default export */ __webpack_exports__["Z"] = (Row);

/***/ }),

/***/ 6999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ useRowStyle; },
/* harmony export */   "c": function() { return /* binding */ useColStyle; }
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67968);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45503);

// ============================== Row-Shared ==============================
const genGridRowStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: 'flex',
      flexFlow: 'row wrap',
      minWidth: 0,
      '&::before, &::after': {
        display: 'flex'
      },
      '&-no-wrap': {
        flexWrap: 'nowrap'
      },
      // The origin of the X-axis
      '&-start': {
        justifyContent: 'flex-start'
      },
      // The center of the X-axis
      '&-center': {
        justifyContent: 'center'
      },
      // The opposite of the X-axis
      '&-end': {
        justifyContent: 'flex-end'
      },
      '&-space-between': {
        justifyContent: 'space-between'
      },
      '&-space-around ': {
        justifyContent: 'space-around'
      },
      // Align at the top
      '&-top': {
        alignItems: 'flex-start'
      },
      // Align at the center
      '&-middle': {
        alignItems: 'center'
      },
      '&-bottom': {
        alignItems: 'flex-end'
      }
    }
  };
};
// ============================== Col-Shared ==============================
const genGridColStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: 'relative',
      maxWidth: '100%',
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: 'none'
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineEnd: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: 'block',
        flex: `0 0 ${i / gridColumns * 100}%`,
        maxWidth: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${screenSize}px)`]: Object.assign({}, genGridStyle(token, sizeCls))
});
// ============================== Export ==============================
const useRowStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('Grid', token => [genGridRowStyle(token)]);
const useColStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('Grid', token => {
  const gridToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* .merge */ .TS)(token, {
    gridColumns: 24 // Row is divided into 24 parts in Grid
  });

  const gridMediaSizesMap = {
    '-sm': gridToken.screenSMMin,
    '-md': gridToken.screenMDMin,
    '-lg': gridToken.screenLGMin,
    '-xl': gridToken.screenXLMin,
    '-xxl': gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ''), genGridStyle(gridToken, '-xs'), Object.keys(gridMediaSizesMap).map(key => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => Object.assign(Object.assign({}, pre), cur), {})];
});

/***/ }),

/***/ 71230:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92820);

/* harmony default export */ __webpack_exports__["Z"] = (_grid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 57953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ spin; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/throttle-debounce/esm/index.js
var esm = __webpack_require__(27856);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 20 modules
var es = __webpack_require__(10248);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/spin/style/index.js



const antSpinMove = new es/* Keyframes */.E4('antSpinMove', {
  to: {
    opacity: 1
  }
});
const antRotate = new es/* Keyframes */.E4('antRotate', {
  to: {
    transform: 'rotate(405deg)'
  }
});
const genSpinStyle = token => ({
  [`${token.componentCls}`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
    position: 'absolute',
    display: 'none',
    color: token.colorPrimary,
    textAlign: 'center',
    verticalAlign: 'middle',
    opacity: 0,
    transition: `transform ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
    '&-spinning': {
      position: 'static',
      display: 'inline-block',
      opacity: 1
    },
    '&-nested-loading': {
      position: 'relative',
      [`> div > ${token.componentCls}`]: {
        position: 'absolute',
        top: 0,
        insetInlineStart: 0,
        zIndex: 4,
        display: 'block',
        width: '100%',
        height: '100%',
        maxHeight: token.contentHeight,
        [`${token.componentCls}-dot`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: '50%',
          margin: -token.spinDotSize / 2
        },
        [`${token.componentCls}-text`]: {
          position: 'absolute',
          top: '50%',
          width: '100%',
          paddingTop: (token.spinDotSize - token.fontSize) / 2 + 2,
          textShadow: `0 1px 2px ${token.colorBgContainer}` // FIXME: shadow
        },

        [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
          marginTop: -(token.spinDotSize / 2) - 10
        },
        '&-sm': {
          [`${token.componentCls}-dot`]: {
            margin: -token.spinDotSizeSM / 2
          },
          [`${token.componentCls}-text`]: {
            paddingTop: (token.spinDotSizeSM - token.fontSize) / 2 + 2
          },
          [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
            marginTop: -(token.spinDotSizeSM / 2) - 10
          }
        },
        '&-lg': {
          [`${token.componentCls}-dot`]: {
            margin: -(token.spinDotSizeLG / 2)
          },
          [`${token.componentCls}-text`]: {
            paddingTop: (token.spinDotSizeLG - token.fontSize) / 2 + 2
          },
          [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
            marginTop: -(token.spinDotSizeLG / 2) - 10
          }
        }
      },
      [`${token.componentCls}-container`]: {
        position: 'relative',
        transition: `opacity ${token.motionDurationSlow}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 10,
          width: '100%',
          height: '100%',
          background: token.colorBgContainer,
          opacity: 0,
          transition: `all ${token.motionDurationSlow}`,
          content: '""',
          pointerEvents: 'none'
        }
      },
      [`${token.componentCls}-blur`]: {
        clear: 'both',
        opacity: 0.5,
        userSelect: 'none',
        pointerEvents: 'none',
        [`&::after`]: {
          opacity: 0.4,
          pointerEvents: 'auto'
        }
      }
    },
    // tip
    // ------------------------------
    [`&-tip`]: {
      color: token.spinDotDefault
    },
    // dots
    // ------------------------------
    [`${token.componentCls}-dot`]: {
      position: 'relative',
      display: 'inline-block',
      fontSize: token.spinDotSize,
      width: '1em',
      height: '1em',
      '&-item': {
        position: 'absolute',
        display: 'block',
        width: (token.spinDotSize - token.marginXXS / 2) / 2,
        height: (token.spinDotSize - token.marginXXS / 2) / 2,
        backgroundColor: token.colorPrimary,
        borderRadius: '100%',
        transform: 'scale(0.75)',
        transformOrigin: '50% 50%',
        opacity: 0.3,
        animationName: antSpinMove,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        animationDirection: 'alternate',
        '&:nth-child(1)': {
          top: 0,
          insetInlineStart: 0
        },
        '&:nth-child(2)': {
          top: 0,
          insetInlineEnd: 0,
          animationDelay: '0.4s'
        },
        '&:nth-child(3)': {
          insetInlineEnd: 0,
          bottom: 0,
          animationDelay: '0.8s'
        },
        '&:nth-child(4)': {
          bottom: 0,
          insetInlineStart: 0,
          animationDelay: '1.2s'
        }
      },
      '&-spin': {
        transform: 'rotate(45deg)',
        animationName: antRotate,
        animationDuration: '1.2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }
    },
    // Sizes
    // ------------------------------
    // small
    [`&-sm ${token.componentCls}-dot`]: {
      fontSize: token.spinDotSizeSM,
      i: {
        width: (token.spinDotSizeSM - token.marginXXS / 2) / 2,
        height: (token.spinDotSizeSM - token.marginXXS / 2) / 2
      }
    },
    // large
    [`&-lg ${token.componentCls}-dot`]: {
      fontSize: token.spinDotSizeLG,
      i: {
        width: (token.spinDotSizeLG - token.marginXXS) / 2,
        height: (token.spinDotSizeLG - token.marginXXS) / 2
      }
    },
    [`&${token.componentCls}-show-text ${token.componentCls}-text`]: {
      display: 'block'
    }
  })
});
// ============================== Export ==============================
/* harmony default export */ var spin_style = ((0,genComponentStyleHook/* default */.Z)('Spin', token => {
  const spinToken = (0,statistic/* merge */.TS)(token, {
    spinDotDefault: token.colorTextDescription,
    spinDotSize: token.controlHeightLG / 2,
    spinDotSizeSM: token.controlHeightLG * 0.35,
    spinDotSizeLG: token.controlHeight
  });
  return [genSpinStyle(spinToken)];
}, {
  contentHeight: 400
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/spin/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const SpinSizes = (/* unused pure expression or super */ null && (['small', 'default', 'large']));
// Render indicator
let defaultIndicator = null;
function renderIndicator(prefixCls, props) {
  const {
    indicator
  } = props;
  const dotClassName = `${prefixCls}-dot`;
  // should not be render default indicator when indicator value is null
  if (indicator === null) {
    return null;
  }
  if ((0,reactNode/* isValidElement */.l$)(indicator)) {
    return (0,reactNode/* cloneElement */.Tm)(indicator, {
      className: classnames_default()(indicator.props.className, dotClassName)
    });
  }
  if ((0,reactNode/* isValidElement */.l$)(defaultIndicator)) {
    return (0,reactNode/* cloneElement */.Tm)(defaultIndicator, {
      className: classnames_default()(defaultIndicator.props.className, dotClassName)
    });
  }
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(dotClassName, `${prefixCls}-dot-spin`)
  }, /*#__PURE__*/react.createElement("i", {
    className: `${prefixCls}-dot-item`
  }), /*#__PURE__*/react.createElement("i", {
    className: `${prefixCls}-dot-item`
  }), /*#__PURE__*/react.createElement("i", {
    className: `${prefixCls}-dot-item`
  }), /*#__PURE__*/react.createElement("i", {
    className: `${prefixCls}-dot-item`
  }));
}
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
const Spin = props => {
  const {
      spinPrefixCls: prefixCls,
      spinning: customSpinning = true,
      delay = 0,
      className,
      size = 'default',
      tip,
      wrapperClassName,
      style,
      children,
      hashId
    } = props,
    restProps = __rest(props, ["spinPrefixCls", "spinning", "delay", "className", "size", "tip", "wrapperClassName", "style", "children", "hashId"]);
  const [spinning, setSpinning] = react.useState(() => customSpinning && !shouldDelay(customSpinning, delay));
  react.useEffect(() => {
    const updateSpinning = (0,esm/* debounce */.D)(delay, () => {
      setSpinning(customSpinning);
    });
    updateSpinning();
    return () => {
      var _a;
      (_a = updateSpinning === null || updateSpinning === void 0 ? void 0 : updateSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(updateSpinning);
    };
  }, [delay, customSpinning]);
  const isNestedPattern = react.useMemo(() => typeof children !== 'undefined', [children]);
  const {
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const spinClassName = classnames_default()(prefixCls, {
    [`${prefixCls}-sm`]: size === 'small',
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-spinning`]: spinning,
    [`${prefixCls}-show-text`]: !!tip,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  const containerClassName = classnames_default()(`${prefixCls}-container`, {
    [`${prefixCls}-blur`]: spinning
  });
  // fix https://fb.me/react-unknown-prop
  const divProps = (0,omit/* default */.Z)(restProps, ['indicator', 'prefixCls']);
  const spinElement = /*#__PURE__*/react.createElement("div", Object.assign({}, divProps, {
    style: style,
    className: spinClassName,
    "aria-live": "polite",
    "aria-busy": spinning
  }), renderIndicator(prefixCls, props), tip ? /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-text`
  }, tip) : null);
  if (isNestedPattern) {
    return /*#__PURE__*/react.createElement("div", Object.assign({}, divProps, {
      className: classnames_default()(`${prefixCls}-nested-loading`, wrapperClassName, hashId)
    }), spinning && /*#__PURE__*/react.createElement("div", {
      key: "loading"
    }, spinElement), /*#__PURE__*/react.createElement("div", {
      className: containerClassName,
      key: "container"
    }, children));
  }
  return spinElement;
};
const SpinFC = props => {
  const {
    prefixCls: customizePrefixCls
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const spinPrefixCls = getPrefixCls('spin', customizePrefixCls);
  const [wrapSSR, hashId] = spin_style(spinPrefixCls);
  const spinClassProps = Object.assign(Object.assign({}, props), {
    spinPrefixCls,
    hashId
  });
  return wrapSSR( /*#__PURE__*/react.createElement(Spin, Object.assign({}, spinClassProps)));
};
SpinFC.setDefaultIndicator = indicator => {
  defaultIndicator = indicator;
};
if (false) {}
/* harmony default export */ var spin = (SpinFC);

/***/ }),

/***/ 7996:
/***/ (function(module) {

/*
  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/

/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_seed(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/

var MersenneTwister = function(seed) {
	if (seed == undefined) {
		seed = new Date().getTime();
	}

	/* Period parameters */
	this.N = 624;
	this.M = 397;
	this.MATRIX_A = 0x9908b0df;   /* constant vector a */
	this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
	this.LOWER_MASK = 0x7fffffff; /* least significant r bits */

	this.mt = new Array(this.N); /* the array for the state vector */
	this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */

	if (seed.constructor == Array) {
		this.init_by_array(seed, seed.length);
	}
	else {
		this.init_seed(seed);
	}
}

/* initializes mt[N] with a seed */
/* origin name init_genrand */
MersenneTwister.prototype.init_seed = function(s) {
	this.mt[0] = s >>> 0;
	for (this.mti=1; this.mti<this.N; this.mti++) {
		var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
		this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
		+ this.mti;
		/* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
		/* In the previous versions, MSBs of the seed affect   */
		/* only MSBs of the array mt[].                        */
		/* 2002/01/09 modified by Makoto Matsumoto             */
		this.mt[this.mti] >>>= 0;
		/* for >32 bit machines */
	}
}

/* initialize by an array with array-length */
/* init_key is the array for initializing keys */
/* key_length is its length */
/* slight change for C++, 2004/2/26 */
MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
	var i, j, k;
	this.init_seed(19650218);
	i=1; j=0;
	k = (this.N>key_length ? this.N : key_length);
	for (; k; k--) {
		var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30)
		this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
		+ init_key[j] + j; /* non linear */
		this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
		i++; j++;
		if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
		if (j>=key_length) j=0;
	}
	for (k=this.N-1; k; k--) {
		var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
		this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
		- i; /* non linear */
		this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
		i++;
		if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
	}

	this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
}

/* generates a random number on [0,0xffffffff]-interval */
/* origin name genrand_int32 */
MersenneTwister.prototype.random_int = function() {
	var y;
	var mag01 = new Array(0x0, this.MATRIX_A);
	/* mag01[x] = x * MATRIX_A  for x=0,1 */

	if (this.mti >= this.N) { /* generate N words at one time */
		var kk;

		if (this.mti == this.N+1)  /* if init_seed() has not been called, */
			this.init_seed(5489);  /* a default initial seed is used */

		for (kk=0;kk<this.N-this.M;kk++) {
			y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
			this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
		}
		for (;kk<this.N-1;kk++) {
			y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
			this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
		}
		y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
		this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];

		this.mti = 0;
	}

	y = this.mt[this.mti++];

	/* Tempering */
	y ^= (y >>> 11);
	y ^= (y << 7) & 0x9d2c5680;
	y ^= (y << 15) & 0xefc60000;
	y ^= (y >>> 18);

	return y >>> 0;
}

/* generates a random number on [0,0x7fffffff]-interval */
/* origin name genrand_int31 */
MersenneTwister.prototype.random_int31 = function() {
	return (this.random_int()>>>1);
}

/* generates a random number on [0,1]-real-interval */
/* origin name genrand_real1 */
MersenneTwister.prototype.random_incl = function() {
	return this.random_int()*(1.0/4294967295.0);
	/* divided by 2^32-1 */
}

/* generates a random number on [0,1)-real-interval */
MersenneTwister.prototype.random = function() {
	return this.random_int()*(1.0/4294967296.0);
	/* divided by 2^32 */
}

/* generates a random number on (0,1)-real-interval */
/* origin name genrand_real3 */
MersenneTwister.prototype.random_excl = function() {
	return (this.random_int() + 0.5)*(1.0/4294967296.0);
	/* divided by 2^32 */
}

/* generates a random number on [0,1) with 53-bit resolution*/
/* origin name genrand_res53 */
MersenneTwister.prototype.random_long = function() {
	var a=this.random_int()>>>5, b=this.random_int()>>>6;
	return(a*67108864.0+b)*(1.0/9007199254740992.0);
}

/* These real versions are due to Isaku Wada, 2002/01/09 added */

module.exports = MersenneTwister;


/***/ }),

/***/ 35342:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(85893);
var React = __importStar(__webpack_require__(67294));
var mersenne_twister_1 = __importDefault(__webpack_require__(7996));
var colorUtils_1 = __webpack_require__(16401);
var colors_1 = __importDefault(__webpack_require__(17241));
var Paper_1 = __importDefault(__webpack_require__(62480));
// constants
var shapeCount = 4;
var svgns = "http://www.w3.org/2000/svg";
var wobble = 30;
var defaultDiameter = 24;
var Jazzicon = /** @class */ (function (_super) {
    __extends(Jazzicon, _super);
    function Jazzicon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.genColor = function (colors) {
            // @ts-ignore
            var rand = _this.generator.random(); // purposefully call the generator once, before using it again on the next line
            var idx = Math.floor(colors.length * _this.generator.random());
            var color = colors.splice(idx, 1)[0];
            return color;
        };
        _this.hueShift = function (colors, generator) {
            var amount = generator.random() * 30 - wobble / 2;
            var rotate = function (hex) { return (0, colorUtils_1.colorRotate)(hex, amount); };
            return colors.map(rotate);
        };
        _this.genShape = function (remainingColors, diameter, i, total) {
            var center = diameter / 2;
            var firstRot = _this.generator.random();
            var angle = Math.PI * 2 * firstRot;
            var velocity = (diameter / total) * _this.generator.random() + (i * diameter) / total;
            var tx = Math.cos(angle) * velocity;
            var ty = Math.sin(angle) * velocity;
            var translate = "translate(" + tx + " " + ty + ")";
            // Third random is a shape rotation on top of all of that.
            var secondRot = _this.generator.random();
            var rot = firstRot * 360 + secondRot * 180;
            var rotate = "rotate(" + rot.toFixed(1) + " " + center + " " + center + ")";
            var transform = translate + " " + rotate;
            var fill = _this.genColor(remainingColors);
            return ((0, jsx_runtime_1.jsx)("rect", { x: "0", y: "0", rx: "0", ry: "0", height: diameter, width: diameter, transform: transform, fill: fill }, i));
        };
        return _this;
    }
    Jazzicon.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.diameter, diameter = _b === void 0 ? defaultDiameter : _b, _c = _a.paperStyles, paperStyles = _c === void 0 ? {} : _c, seed = _a.seed, _d = _a.svgStyles, svgStyles = _d === void 0 ? {} : _d;
        this.generator = new mersenne_twister_1.default(seed);
        var remainingColors = this.hueShift(colors_1.default.slice(), this.generator);
        var shapesArr = Array(shapeCount).fill(undefined);
        return ((0, jsx_runtime_1.jsx)(Paper_1.default, __assign({ color: this.genColor(remainingColors), diameter: diameter, style: paperStyles }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ xmlns: svgns, x: "0", y: "0", height: diameter, width: diameter, style: svgStyles }, { children: shapesArr.map(function (s, i) {
                    return _this.genShape(remainingColors, diameter, i, shapeCount - 1);
                }) }), void 0) }), void 0));
    };
    return Jazzicon;
}(React.PureComponent));
exports["default"] = Jazzicon;
//# sourceMappingURL=Jazzicon.js.map

/***/ }),

/***/ 62480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(85893);
var styles = {
    borderRadius: "50px",
    display: "inline-block",
    margin: 0,
    overflow: "hidden",
    padding: 0,
};
var Paper = function (_a) {
    var children = _a.children, color = _a.color, diameter = _a.diameter, styleOverrides = _a.style;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "paper", style: __assign(__assign(__assign({}, styles), { backgroundColor: color, height: diameter, width: diameter }), styleOverrides) }, { children: children }), void 0));
};
exports["default"] = Paper;
//# sourceMappingURL=Paper.js.map

/***/ }),

/***/ 16401:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// from: https://github.com/MetaMask/jazzicon/blob/master/index.js
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HSLToHex = exports.hexToHSL = exports.colorRotate = void 0;
var colorRotate = function (hex, degrees) {
    var hsl = (0, exports.hexToHSL)(hex);
    var hue = hsl.h;
    hue = (hue + degrees) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    hsl.h = hue;
    return (0, exports.HSLToHex)(hsl);
};
exports.colorRotate = colorRotate;
var hexToHSL = function (hex) {
    // Convert hex to RGB first
    var rStr = "0x" + hex[1] + hex[2];
    var gStr = "0x" + hex[3] + hex[4];
    var bStr = "0x" + hex[5] + hex[6];
    // Then to HSL
    var r = parseInt(rStr) / 255;
    var g = parseInt(gStr) / 255;
    var b = parseInt(bStr) / 255;
    var cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { h: h, s: s, l: l };
};
exports.hexToHSL = hexToHSL;
var HSLToHex = function (hsl) {
    var h = hsl.h, s = hsl.s, l = hsl.l;
    s /= 100;
    l /= 100;
    var c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    // Having obtained RGB, convert channels to hex
    var rStr = Math.round((r + m) * 255).toString(16);
    var gStr = Math.round((g + m) * 255).toString(16);
    var bStr = Math.round((b + m) * 255).toString(16);
    // Prepend 0s, if necessary
    if (rStr.length == 1)
        rStr = "0" + rStr;
    if (gStr.length == 1)
        gStr = "0" + gStr;
    if (bStr.length == 1)
        bStr = "0" + bStr;
    return "#" + rStr + gStr + bStr;
};
exports.HSLToHex = HSLToHex;
//# sourceMappingURL=colorUtils.js.map

/***/ }),

/***/ 17241:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = Object.freeze([
    "#01888c",
    "#fc7500",
    "#034f5d",
    "#f73f01",
    "#fc1960",
    "#c7144c",
    "#f3c100",
    "#1598f2",
    "#2465e1",
    "#f19e02", // gold
]);
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ 44111:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jsNumberForAddress = exports["default"] = void 0;
var Jazzicon_1 = __webpack_require__(35342);
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(Jazzicon_1).default; } }));
var jsNumberForAddress_1 = __webpack_require__(586);
Object.defineProperty(exports, "jsNumberForAddress", ({ enumerable: true, get: function () { return __importDefault(jsNumberForAddress_1).default; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 586:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function jsNumberForAddress(address) {
    var addr = address.slice(2, 10);
    var seed = parseInt(addr, 16);
    return seed;
}
exports["default"] = jsNumberForAddress;
//# sourceMappingURL=jsNumberForAddress.js.map

/***/ }),

/***/ 27856:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ debounce; }
/* harmony export */ });
/* unused harmony export throttle */
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}


//# sourceMappingURL=index.js.map


/***/ })

}]);