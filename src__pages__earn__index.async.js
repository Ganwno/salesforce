"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[843,2863,3025],{

/***/ 85940:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BorrowMining; }
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
;// CONCATENATED MODULE: ./src/pages/earn/components/BorrowMining/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
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
;// CONCATENATED MODULE: ./src/pages/earn/components/BorrowMining/index.tsx















var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
function BorrowMining() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      stakeInfoList = _useModel.stakeInfoList;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      colorInfoBg = _theme$useToken.token.colorInfoBg;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      stakeAction = _useState2[0],
      setStakeAction = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      witndrawProps = _useState4[0],
      setWitndrawProp = _useState4[1];

  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  var data = {
    conf: {
      cardName: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 24,
          fontWeight: 500
        },
        children: formatMessage({
          id: 'borrow_mining'
        })
      }),
      rowKey: 'id',
      header: {
        title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16,
            fontWeight: 500
          },
          children: formatMessage({
            id: 'borrow_mining'
          })
        }),
        dataIndex: 'stake',
        key: 'stake',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
              src: record.iconLp,
              tokenId: record.id
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 16,
                fontWeight: 500,
                marginLeft: 6
              },
              children: record.symbol
            })]
          });
        }
      },
      desc: [{
        title: formatMessage({
          id: 'total_borrowed'
        }),
        dataIndex: 'poolDebt',
        key: 'poolDebt',
        align: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber/* default */.Z, {
            value: text,
            suffix: record.symbol
          });
        }
      }, {
        title: formatMessage({
          id: 'your_borrow'
        }),
        dataIndex: 'userDebt',
        key: 'userDebt',
        align: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber/* default */.Z, {
            value: text,
            suffix: record.symbol
          });
        }
      }, {
        title: "24".concat(formatMessage({
          id: 'h_yield'
        })),
        dataIndex: 'userBorrowDayStaked',
        key: 'userBorrowDayStaked',
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
      }, {
        title: formatMessage({
          id: 'apr'
        }),
        dataIndex: 'borrowYieldApr',
        key: 'borrowYieldApr',
        align: 'right'
      }],
      edit: [{
        title: 'Total yield',
        dataIndex: 'yield',
        key: 'yield',
        align: 'center',
        render: function render(text, record) {
          var userAccountBorrowYield = record.userAccountBorrowYield;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
            type: md ? 'link' : 'primary',
            disabled: parseFloat(record.userAccountBorrowYield) <= 0,
            onClick: function onClick() {
              setWitndrawProp({
                amount: userAccountBorrowYield,
                onClose: function onClose() {
                  return setWitndrawProp(undefined);
                },
                show: true,
                current: record,
                title: 'Borrow Yield',
                type: 'borrow'
              });
            },
            children: [userAccountBorrowYield || 0, " OT"]
          });
        }
      }]
    },
    list: stakeInfoList
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

/***/ }),

/***/ 21421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HomePage; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 1 modules
var spin = __webpack_require__(57953);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 10 modules
var card = __webpack_require__(98225);
;// CONCATENATED MODULE: ./src/pages/earn/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/pages/earn/components/FeeDistribution/index.tsx + 2 modules
var FeeDistribution = __webpack_require__(87705);
// EXTERNAL MODULE: ./src/pages/earn/components/Stake/index.tsx + 1 modules
var Stake = __webpack_require__(16139);
// EXTERNAL MODULE: ./src/pages/earn/components/BorrowMining/index.tsx + 1 modules
var BorrowMining = __webpack_require__(85940);
// EXTERNAL MODULE: ./src/pages/earn/components/TradeMining/index.tsx + 1 modules
var TradeMining = __webpack_require__(14256);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/earn/index.tsx









function HomePage() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      earnLoading = _useModel.earnLoading;

  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: earnLoading,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "earnPage",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        gutter: [0, 20],
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
            bodyStyle: {
              padding: 0
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FeeDistribution["default"], {})
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
            bodyStyle: {
              padding: 0
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Stake["default"], {})
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
            bodyStyle: {
              padding: 0
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(BorrowMining["default"], {})
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
            bodyStyle: {
              padding: 0
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(TradeMining["default"], {})
          })
        })]
      })
    })
  });
}

/***/ })

}]);