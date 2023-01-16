"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1183],{

/***/ 76870:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FormatNumber; }
/* harmony export */ });
/* unused harmony export formatNumberForDisplay */
/* harmony import */ var format_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10793);
/* harmony import */ var format_number__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(format_number__WEBPACK_IMPORTED_MODULE_0__);


function roundNumber(_ref) {
  var value = _ref.value,
      round = _ref.round;

  if (!value) {
    return 0;
  }

  var roundTimes = Math.pow(10, round);
  return Math.round(value * roundTimes) / roundTimes;
}

function roundCoinPrice(_ref2) {
  var value = _ref2.value,
      _ref2$round = _ref2.round,
      round = _ref2$round === void 0 ? 2 : _ref2$round;

  if (!value) {
    return 0;
  }

  if (value < 1) {
    round = 4;
  }

  if (value < 0.001) {
    round = 6;
  }

  if (value < 0.00001) {
    round = 8;
  }

  return roundNumber({
    value: value,
    round: round
  });
}

var formatNumberForDisplay = function formatNumberForDisplay(_ref3) {
  var value = _ref3.value,
      prefix = _ref3.prefix,
      suffix = _ref3.suffix,
      _ref3$round = _ref3.round,
      round = _ref3$round === void 0 ? 2 : _ref3$round,
      padRight = _ref3.padRight,
      useAbbr = _ref3.useAbbr;

  if (!value) {
    return 0;
  }

  var numberValue = Number(value);

  if (numberValue < 0.00001) {
    return value;
  }

  var valueOption = {
    value: numberValue
  };

  if (useAbbr) {
    if (value > Math.pow(10, 3)) {
      valueOption.value = value / Math.pow(10, 3);
      valueOption.valueSuffix = 'k';
    }

    if (value > Math.pow(10, 6)) {
      valueOption.value = value / Math.pow(10, 6);
      valueOption.valueSuffix = 'm';
    }

    if (value > Math.pow(10, 9)) {
      valueOption.value = value / Math.pow(10, 9);
      valueOption.valueSuffix = 'bn';
    }

    if (value > Math.pow(10, 12)) {
      valueOption.value = value / Math.pow(10, 12);
      valueOption.valueSuffix = 'tn';
    }

    if (value > Math.pow(10, 15)) {
      valueOption.value = value / Math.pow(10, 15);
      valueOption.valueSuffix = 'p';
    }

    if (value > Math.pow(10, 18)) {
      valueOption.value = value / Math.pow(10, 18);
      valueOption.valueSuffix = 'e';
    }
  }

  var suffixes = [valueOption.valueSuffix, suffix ? " ".concat(suffix) : undefined].filter(Boolean);
  var formatter = format_number__WEBPACK_IMPORTED_MODULE_0___default()({
    prefix: prefix,
    suffix: suffixes.length ? suffixes.join('') : undefined,
    truncate: 20,
    padRight: padRight
  });
  return valueOption.value <= Math.pow(10, 18) ? formatter(roundCoinPrice({
    value: valueOption.value,
    round: round
  })) : '∞';
};
function FormatNumber(props) {
  var value = props.value,
      prefix = props.prefix,
      suffix = props.suffix,
      round = props.round,
      padRight = props.padRight,
      useAbbr = props.useAbbr;
  return formatNumberForDisplay({
    value: value,
    prefix: prefix,
    suffix: suffix,
    round: round,
    padRight: padRight,
    useAbbr: useAbbr
  }).toString();
}

/***/ }),

/***/ 36913:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_TableList; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 7 modules
var collapse = __webpack_require__(15045);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 47 modules
var table = __webpack_require__(83259);
// EXTERNAL MODULE: ./node_modules/antd/es/descriptions/index.js + 4 modules
var descriptions = __webpack_require__(27511);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
;// CONCATENATED MODULE: ./src/components/TableList/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/TableList/index.tsx






var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
var Panel = collapse/* default.Panel */.Z.Panel;

var RenderItem = function RenderItem(_ref) {
  var options = _ref.options,
      text = _ref.text,
      record = _ref.record,
      index = _ref.index;
  var render = options.render,
      key = options.key;
  if (render) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: render(text, record, index)
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: text
  });
};

var TableList = function TableList(_ref2) {
  var conf = _ref2.conf,
      list = _ref2.list;

  var _useBreakpoint = useBreakpoint(),
      md = _useBreakpoint.md;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      colorTextSecondary = _theme$useToken.token.colorTextSecondary;

  var cardName = conf.cardName,
      header = conf.header,
      desc = conf.desc,
      edit = conf.edit,
      rowKey = conf.rowKey;
  var columns = [conf.header].concat(toConsumableArray_default()(conf.desc), toConsumableArray_default()(conf.edit));
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "hayTableList",
    children: md ? /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
      columns: columns,
      dataSource: list,
      pagination: false,
      rowKey: rowKey,
      onHeaderRow: function onHeaderRow() {
        return {
          style: {
            color: colorTextSecondary
          }
        };
      }
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
      ghost: true,
      expandIconPosition: "end",
      defaultActiveKey: '1',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Panel, {
        header: cardName,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
          ghost: true,
          expandIconPosition: "end",
          children: list.map(function (item, index) {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(Panel, {
              header: /*#__PURE__*/(0,jsx_runtime.jsx)(RenderItem, {
                index: index,
                record: item,
                text: item[header.dataIndex],
                options: header
              }),
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(descriptions/* default */.Z, {
                column: 1,
                contentStyle: {
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'row-reverse'
                },
                children: desc.map(function (col, j) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(descriptions/* default.Item */.Z.Item, {
                    label: col.title,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(RenderItem, {
                      index: j,
                      record: item,
                      text: item[col.dataIndex],
                      options: col
                    })
                  }, col.key);
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
                style: {
                  flexDirection: 'row-reverse',
                  display: 'flex'
                },
                children: edit.map(function (col, j) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                      className: "value",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(RenderItem, {
                        index: j,
                        record: item,
                        text: item[col.dataIndex],
                        options: col
                      })
                    })
                  }, col.key);
                })
              })]
            }, item[rowKey]);
          })
        })
      }, "1")
    })
  });
};

/* harmony default export */ var components_TableList = (TableList);

/***/ }),

/***/ 83630:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_Withdraw; }
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
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 1 modules
var spin = __webpack_require__(57953);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 14 modules
var typography = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(31530);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 68 modules
var contract = __webpack_require__(6377);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./src/assets/svg/ot.svg
var ot = __webpack_require__(37373);
;// CONCATENATED MODULE: ./src/pages/earn/components/Withdraw/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/earn/components/Withdraw/index.tsx
















var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var DescItem = function DescItem(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    className: "InputCardTip",
    style: {
      fontSize: 13
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      children: label
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      children: children
    })]
  });
};

var AddContent = function AddContent(_ref2) {
  var current = _ref2.current,
      type = _ref2.type,
      amount = _ref2.amount,
      _onClose = _ref2.onClose;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      updateStake = _useModel.updateStake;

  var _useModel2 = (0,_umi_production_exports.useModel)('future'),
      updatePositions = _useModel2.updatePositions,
      setPairsLoading = _useModel2.setPairsLoading;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

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

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary,
      fontSizeSM = _theme$useToken$token.fontSizeSM,
      borderRadius = _theme$useToken$token.borderRadius,
      paddingSM = _theme$useToken$token.paddingSM;

  var _useState7 = (0,react.useState)(),
      _useState8 = slicedToArray_default()(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      succRet = _useState10[0],
      setSuccRet = _useState10[1];

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var ret, err, _yield$lpHarvest, _yield$lpHarvest2, _yield$borrowHarvest, _yield$borrowHarvest2, _yield$tradeHarvest, _yield$tradeHarvest2, _yield$revenueHarvest, _yield$revenueHarvest2;

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
              setSubmiting(true);
              ret = null;
              err = null;

              if (!(type === 'stake')) {
                _context.next = 12;
                break;
              }

              _context.next = 8;
              return (0,contract/* lpHarvest */.vA)({
                wallet: wallet,
                chain: chain,
                lpAddress: current && current.liquidity || ''
              });

            case 8:
              _yield$lpHarvest = _context.sent;
              _yield$lpHarvest2 = slicedToArray_default()(_yield$lpHarvest, 2);
              ret = _yield$lpHarvest2[0];
              err = _yield$lpHarvest2[1];

            case 12:
              if (!(type === 'borrow')) {
                _context.next = 19;
                break;
              }

              _context.next = 15;
              return (0,contract/* borrowHarvest */.hf)({
                wallet: wallet,
                chain: chain,
                lpAddress: current && current.assets.tokenAddress || ''
              });

            case 15:
              _yield$borrowHarvest = _context.sent;
              _yield$borrowHarvest2 = slicedToArray_default()(_yield$borrowHarvest, 2);
              ret = _yield$borrowHarvest2[0];
              err = _yield$borrowHarvest2[1];

            case 19:
              if (!(type === 'trade')) {
                _context.next = 26;
                break;
              }

              _context.next = 22;
              return (0,contract/* tradeHarvest */._L)({
                wallet: wallet,
                chain: chain,
                lpAddress: ''
              });

            case 22:
              _yield$tradeHarvest = _context.sent;
              _yield$tradeHarvest2 = slicedToArray_default()(_yield$tradeHarvest, 2);
              ret = _yield$tradeHarvest2[0];
              err = _yield$tradeHarvest2[1];

            case 26:
              if (!(type === 'fee')) {
                _context.next = 33;
                break;
              }

              _context.next = 29;
              return (0,contract/* revenueHarvest */._c)({
                wallet: wallet,
                chain: chain,
                lpAddress: ''
              });

            case 29:
              _yield$revenueHarvest = _context.sent;
              _yield$revenueHarvest2 = slicedToArray_default()(_yield$revenueHarvest, 2);
              ret = _yield$revenueHarvest2[0];
              err = _yield$revenueHarvest2[1];

            case 33:
              if (!err) {
                _context.next = 37;
                break;
              }

              message/* default.error */.ZP.error(err.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 37:
              // message.success('add' + res.hash)
              if (ret) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);

                    _onClose();
                  },
                  type: 'closePosition',
                  title: 'Withdraw Success',
                  hash: ret.hash,
                  okText: 'Close'
                });
              }

              _context.next = 40;
              return updateStake();

            case 40:
              setSubmiting(false);

            case 41:
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
        className: "card",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "hayInputCard",
          style: {
            background: colorInfoBg
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "value",
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 24,
                fontWeight: 500
              },
              children: [" ", amount]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
              type: "default",
              style: {
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                height: 35
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                src: ot/* default */.Z,
                alt: "",
                style: {
                  width: 25,
                  height: 25
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                style: {
                  fontSize: 18,
                  fontWeight: 500,
                  marginLeft: 8
                },
                children: " OT"
              })]
            })]
          })
        })
      }), current && /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            flexDirection: 'column',
            color: colorTextSecondary,
            background: colorInfoBg,
            borderRadius: borderRadius,
            padding: paddingSM,
            fontSize: fontSizeSM
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Total Staked",
            children: [current.userTotalStaked, " ", current.lpSymbol, " token"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Staking APR",
            children: current.stakeApr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Your Staked Position",
            children: [current.userAccountStaked, " ", current.lpSymbol]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
          height: 50,
          onClick: handleSubmit,
          conditions: [],
          children: "Withdraw"
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

var Content = function Content(props) {
  var title = props.title;

  var _useState11 = (0,react.useState)('yield'),
      _useState12 = slicedToArray_default()(_useState11, 2),
      actionType = _useState12[0],
      setActionType = _useState12[1];

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
              children: title
            })
          }),
          value: 'yield'
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      style: {
        overflow: 'hidden'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()({}, props))
    })]
  });
};

var Withdraw = function Withdraw(props) {
  var show = props.show,
      onClose = props.onClose;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: false,
      maskClosable: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var components_Withdraw = (Withdraw);

/***/ }),

/***/ 37373:
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

const SvgOt = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ width: 25, height: 25, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#ot_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M25 12.5C25 19.404 19.404 25 12.5 25S0 19.404 0 12.5 5.596 0 12.5 0 25 5.596 25 12.5Z", fill: "#1D2233" }), /* @__PURE__ */ React.createElement("path", { d: "M8.402 6.463h8.23M6.96 18.543 7.47 14a5.058 5.058 0 0 1 5.026-4.495m5.576 9.04-.442-4.396a5.16 5.16 0 0 0-5.134-4.644m0 9.04v-9.04m0 0V7.561", stroke: "#3AFFF3", strokeWidth: 1.764, strokeLinecap: "round" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "ot_svg__a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h25v25H0z" }))));

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMjUgMTIuNUMyNSAxOS40MDQgMTkuNDA0IDI1IDEyLjUgMjVTMCAxOS40MDQgMCAxMi41IDUuNTk2IDAgMTIuNSAwIDI1IDUuNTk2IDI1IDEyLjVaIiBmaWxsPSIjMUQyMjMzIi8+PHBhdGggZD0iTTguNDAyIDYuNDYzaDguMjNNNi45NiAxOC41NDMgNy40NyAxNGE1LjA1OCA1LjA1OCAwIDAgMSA1LjAyNi00LjQ5NW01LjU3NiA5LjA0LS40NDItNC4zOTZhNS4xNiA1LjE2IDAgMCAwLTUuMTM0LTQuNjQ0bTAgOS4wNHYtOS4wNG0wIDBWNy41NjEiIHN0cm9rZT0iIzNBRkZGMyIgc3Ryb2tlLXdpZHRoPSIxLjc2NCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNXYyNUgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==");


/***/ })

}]);