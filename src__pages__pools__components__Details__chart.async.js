"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[890],{

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

/***/ })

}]);