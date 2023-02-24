"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[423],{

/***/ 95710:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HomePage; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 3 modules
var segmented = __webpack_require__(92783);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 7 modules
var input = __webpack_require__(68863);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 120 modules
var table = __webpack_require__(15914);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(68795);
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(70794);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(66419);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/pages/pools/components/Details/index.tsx + 3 modules
var Details = __webpack_require__(13111);
// EXTERNAL MODULE: ./src/pages/pools/components/NewPool/index.tsx + 1 modules
var NewPool = __webpack_require__(87896);
// EXTERNAL MODULE: ./src/pages/pools/components/Borrow/index.tsx + 2 modules
var Borrow = __webpack_require__(69718);
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./src/assets/svg/osd.svg
var osd = __webpack_require__(12168);
// EXTERNAL MODULE: ./src/pages/pools/components/EditLiq/index.tsx + 1 modules
var EditLiq = __webpack_require__(84775);
;// CONCATENATED MODULE: ./src/pages/portfolio/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/portfolio/index.tsx













var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;




function HomePage() {
  var screens = useBreakpoint();

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      colorBgMask = _theme$useToken$token.colorBgMask,
      colorFill = _theme$useToken$token.colorFill,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary,
      borderRadius = _theme$useToken$token.borderRadius;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useState = (0,react.useState)(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      serachWord = _useState2[0],
      setSerachWord = _useState2[1];

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      poolTokenExtList = _useModel.poolTokenExtList,
      initLoading = _useModel.initLoading;

  var _useState3 = (0,react.useState)([]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0,react.useState)(null),
      _useState6 = slicedToArray_default()(_useState5, 2),
      current = _useState6[0],
      setCurrent = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      showDetail = _useState8[0],
      setShowDatail = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      showNewPool = _useState10[0],
      setShowNewPool = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = slicedToArray_default()(_useState11, 2),
      showEditLip = _useState12[0],
      setShowEditLip = _useState12[1];

  var _useState13 = (0,react.useState)(),
      _useState14 = slicedToArray_default()(_useState13, 2),
      editLipAction = _useState14[0],
      setEditLipAction = _useState14[1];

  var _useState15 = (0,react.useState)(),
      _useState16 = slicedToArray_default()(_useState15, 2),
      editLipActionPool = _useState16[0],
      setEditLipActionPool = _useState16[1]; // Borrow


  var _useState17 = (0,react.useState)(false),
      _useState18 = slicedToArray_default()(_useState17, 2),
      showBorrowAction = _useState18[0],
      setShowBorrowAction = _useState18[1];

  var _useState19 = (0,react.useState)('borrow'),
      _useState20 = slicedToArray_default()(_useState19, 2),
      borrowAction = _useState20[0],
      setBorrowAction = _useState20[1];

  var _useState21 = (0,react.useState)(),
      _useState22 = slicedToArray_default()(_useState21, 2),
      borrowActionTarget = _useState22[0],
      setBorrowActionTarget = _useState22[1]; //


  var loading = (0,react.useMemo)(function () {
    return poolTokenExtList.length === 0 || initLoading;
  }, [poolTokenExtList, initLoading]);
  (0,react.useEffect)(function () {
    var tmp = poolTokenExtList;

    if (serachWord) {
      tmp = tmp.filter(function (item) {
        return item.fullName.toLowerCase().indexOf(serachWord.toLowerCase()) > -1 || item.id.toLowerCase().indexOf(serachWord.toLowerCase()) > -1;
      });
    }

    setList(tmp);
  }, [poolTokenExtList, serachWord]);

  var ShowDetail = function ShowDetail(record) {
    setCurrent(record);
    setShowDatail(true);
  };

  var handleBorrow = function handleBorrow(record) {
    setBorrowAction('borrow');
    setBorrowActionTarget(record.id);
    setShowBorrowAction(true);
  };

  var handleRepay = function handleRepay(record) {
    setBorrowAction('repay');
    setBorrowActionTarget(record.id);
    setShowBorrowAction(true);
  };

  var handleAddLiq = function handleAddLiq(record) {
    setEditLipAction('add');
    setEditLipActionPool(record);
    setShowEditLip(true);
  };

  var handleRemoveLiq = function handleRemoveLiq(record) {
    setEditLipAction('remove');
    setEditLipActionPool(record);
    setShowEditLip(true);
  };

  var columns = [{
    title: 'Collateral/Value',
    dataIndex: 'size',
    key: 'poolInfo',
    align: 'left',
    render: function render(_, record) {
      var collaterals = record.positions.collaterals;
      var amount = collaterals.reduce(function (a, b) {
        var _data = poolTokenExtList.find(function (item) {
          return item.id.toLowerCase() === b.token.toLowerCase();
        });

        if (_data) {
          var _amount = Number((0,utils/* formatSat */.gB)(b.amount, _data.tokenDecimal)) * Number(_data.userOraclePrice);

          return a + _amount;
        }

        return a + 0;
      }, 0);
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "title",
          children: collaterals.map(function (coll) {
            var _data = poolTokenExtList.find(function (item) {
              return item.id.toLowerCase() === coll.token.toLowerCase();
            });

            return /*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
              src: (_data === null || _data === void 0 ? void 0 : _data.icon) || '',
              tokenId: _data === null || _data === void 0 ? void 0 : _data.id,
              size: 24
            });
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "desc",
          children: ["$", amount.toFixed(2)]
        })]
      });
    }
  }, {
    title: 'Borrowed',
    dataIndex: 'size',
    key: 'poolInfo',
    align: 'right',
    render: function render(_, record) {
      var poolOsd = record.poolOsd,
          userDebt = record.userDebt,
          userBorrowPrice = record.userBorrowPrice,
          symbol = record.symbol,
          icon = record.icon,
          id = record.id;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "colSize",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "title",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
            src: icon,
            tokenId: id,
            size: 16
          }), " ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "space",
            children: [(0,utils/* formatNumberToKMBT */.BF)(Number(userDebt), 2), " ", symbol, "  "]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "desc",
          children: ["$", (0,utils/* formatNumberToKMBT */.BF)(Number(userDebt) * Number(userBorrowPrice), 2)]
        })]
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: formatMessage({
        id: 'apr'
      })
    }),
    dataIndex: 'apr',
    key: 'apr',
    align: 'right',
    width: 125,
    render: function render(text) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "colBorrow",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "title",
          children: [text, "%"]
        })
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: ["Risk Factor", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Liq. RF "]
    }),
    dataIndex: 'size',
    key: 'poolInfo',
    align: 'right',
    render: function render(_, record) {
      var poolDebt = record.poolDebt,
          userDebt = record.userDebt;
      var collaterals = record.positions.collaterals;
      var rf = new bignumber/* default */.Z(0);
      collaterals.forEach(function (_ref) {
        var token = _ref.token,
            amount = _ref.amount;
        var tokenData = poolTokenExtList.find(function (item) {
          return item.id.toLowerCase() === token.toLowerCase();
        });

        if (tokenData) {
          var userBorrowPrice = tokenData.userBorrowPrice,
              assets = tokenData.assets,
              tokenDecimal = tokenData.tokenDecimal;

          var _amount = (0,utils/* formatSat */.gB)(amount.toString(), tokenDecimal);

          rf = rf.plus(new bignumber/* default */.Z(_amount).multipliedBy(userBorrowPrice).multipliedBy(assets.collateralCredit));
        }
      });

      if (parseFloat(userDebt) <= 0) {
        rf = rf.gt(0) ? new bignumber/* default */.Z(Infinity) : new bignumber/* default */.Z(0);
      } else {
        rf = rf.div(userDebt).div(record.userBorrowPrice).div(record.assets.borrowCredit);
      }

      var color = '#00A980';

      if (rf.lte(1.05)) {
        color = '#EB5757';
      } else if (rf.lte(1.1)) {
        color = ' #F2994A';
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "colSize",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "title",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              color: color
            },
            children: rf.toString() === 'Infinity' ? '--' : rf.toFixed(2)
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "title",
          children: "1.00"
        })]
      });
    }
  }, {
    title: formatMessage({
      id: 'borrow'
    }),
    dataIndex: 'borrow',
    key: 'borrow',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "action",
        children: [parseFloat(record.userUpdatedAt) > 0 &&
        /*#__PURE__*/
        // <BorrowBtn setShowPanelIndex={(n: number) => showBorrowingPanel(n, record)} />
        (0,jsx_runtime.jsx)(es_button/* default */.Z, {
          onClick: function onClick(e) {
            e.stopPropagation();
            handleBorrow(record);
          },
          type: "link",
          style: {
            fontWeight: 500
          },
          children: " Edit"
        }), (parseFloat(record.userDebt) > 0 || parseFloat(record.userTotalCol) > 0) &&
        /*#__PURE__*/
        // <RepayBtn setShowPanelIndex={(n: number) => showBorrowingPanel(n, record)} />
        (0,jsx_runtime.jsx)(es_button/* default */.Z, {
          onClick: function onClick(e) {
            e.stopPropagation();
            handleRepay(record);
          },
          type: "link",
          style: {
            fontWeight: 500
          },
          children: " Repay"
        })]
      });
    }
  }];
  var columnsMin = [{
    title: 'Pools',
    dataIndex: 'pools_price',
    key: 'pools_price',
    align: 'center',
    className: 'colHeader',
    ellipsis: true,
    render: function render(text, record) {
      var icon = record.icon,
          symbol = record.symbol,
          fullName = record.fullName,
          userOraclePriceLabel = record.userOraclePriceLabel,
          id = record.id;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "colToken",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "info",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
            src: icon,
            tokenId: id,
            size: 30
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "title",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "symbol",
              children: symbol
            })
          })]
        })
      });
    }
  }, {
    title: formatMessage({
      id: 'apr'
    }) + '/' + formatMessage({
      id: 'tvl'
    }),
    dataIndex: 'poolSize',
    key: 'fee',
    align: 'right',
    ellipsis: true,
    render: function render(text, record) {
      var fees = record.fees,
          swapFee = record.swapFee;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "colFee",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "title",
          children: ["$", (0,utils/* formatNumberToKMBT */.BF)(Number(text), 2)]
        })
      });
    }
  }, {
    title: "".concat(formatMessage({
      id: 'price'
    }), "/").concat(formatMessage({
      id: 'day_diff'
    })),
    dataIndex: 'userOraclePriceLabel',
    key: 'poolInfo',
    align: 'right',
    ellipsis: true,
    render: function render(text, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "colSize",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "amount",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
            className: "symbol",
            children: ["$", text]
          })
        })
      });
    }
  }];
  var WalletbalanceColumns = [{
    title: 'Asset',
    dataIndex: 'pools_price',
    key: 'pools_price',
    align: 'left',
    className: 'colHeader',
    ellipsis: true,
    render: function render(text, record) {
      var icon = record.icon,
          symbol = record.symbol,
          fullName = record.fullName,
          userOraclePriceLabel = record.userOraclePriceLabel,
          id = record.id;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "colToken",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "info",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
            src: icon,
            tokenId: id,
            size: 30
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "title",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "symbol",
              children: symbol
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "fullname",
              children: fullName
            })]
          })]
        })
      });
    }
  }, {
    title: 'Balance',
    dataIndex: 'fee',
    key: 'fee',
    align: 'right',
    render: function render(_, record) {
      var symbol = record.symbol,
          userTokenBalanceLabel = record.userTokenBalanceLabel,
          userTokenBalanceUSDLabel = record.userTokenBalanceUSDLabel;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "colFee",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "title",
          children: [userTokenBalanceLabel, symbol]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "subtitle",
          children: ["$", userTokenBalanceUSDLabel]
        })]
      });
    }
  }, {
    title: 'Action',
    dataIndex: 'id',
    key: 'id',
    align: 'right',
    render: function render(text) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "colFee",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
          onClick: function onClick(e) {
            _umi_production_exports.history.push('/trade?swapOut=' + text);
          },
          type: "link",
          style: {
            fontWeight: 500,
            textAlign: 'right'
          },
          children: " Swap"
        })
      });
    }
  }];
  var DepositsColumns = [{
    title: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "poolTableHeader",
      children: "Pools/Price(24H)"
    }),
    dataIndex: 'pools_price',
    key: 'pools_price',
    align: 'center',
    ellipsis: true,
    className: 'colHeader',
    render: function render(text, record) {
      var icon = record.icon,
          symbol = record.symbol,
          fullName = record.fullName,
          userOraclePriceLabel = record.userOraclePriceLabel,
          id = record.id;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "colToken",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "info",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
            src: icon,
            tokenId: id,
            size: 30
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "title",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "symbol",
              children: symbol
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "fullname",
              children: fullName
            })]
          })]
        })
      });
    }
  }, {
    title: formatMessage({
      id: 'pool_size'
    }),
    dataIndex: 'size',
    key: 'poolInfo',
    align: 'right',
    ellipsis: true,
    render: function render(_, record) {
      var poolOsd = record.poolOsd,
          poolReserve = record.poolReserve,
          poolSize = record.poolSize,
          symbol = record.symbol,
          icon = record.icon,
          id = record.id;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "colSize",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "title",
          children: ["$", (0,utils/* formatNumberToKMBT */.BF)(Number(poolSize), 2)]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "desc",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
            src: icon,
            tokenId: id,
            size: 14
          }), " ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "space",
            children: [(0,utils/* formatNumberToKMBT */.BF)(Number(poolReserve), 2), "  "]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
            src: osd/* default */.Z,
            tokenId: id,
            size: 14
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "space2",
            children: (0,utils/* formatNumberToKMBT */.BF)(Number(poolOsd), 2)
          })]
        })]
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: ["LP | Pool share", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Value"]
    }),
    dataIndex: 'share',
    key: 'share',
    align: 'right',
    ellipsis: true,
    render: function render(_, record) {
      var poolDebt = record.poolDebt,
          userLpBalance = record.userLpBalance,
          poolSize = record.poolSize,
          lpSymbol = record.lpSymbol,
          userLpRate = record.userLpRate,
          id = record.id;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "colSize",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "title",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "symbol",
            children: [" ", userLpBalance, " ", lpSymbol, " | ", userLpRate, "%"]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "fullname",
            children: ["$", ((Number(poolSize) + Number(poolDebt)) * Number(userLpRate) / 100).toFixed(2)]
          })]
        })
      });
    }
  }, {
    title: formatMessage({
      id: 'borrow'
    }),
    dataIndex: 'borrow',
    key: 'borrow',
    ellipsis: true,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "action",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
          size: "small",
          onClick: function onClick(e) {
            e.stopPropagation();
            handleAddLiq(record);
          },
          type: "link",
          style: {
            fontWeight: 500
          },
          children: " Add"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
          size: "small",
          onClick: function onClick(e) {
            e.stopPropagation();
            handleRemoveLiq(record);
          },
          type: "link",
          style: {
            fontWeight: 500
          },
          children: " Withdraw"
        })]
      });
    }
  }];

  var _useState23 = (0,react.useState)('Wallet balance'),
      _useState24 = slicedToArray_default()(_useState23, 2),
      value = _useState24[0],
      setValue = _useState24[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "porfilePage",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      className: "search_wrap",
      gutter: [12, 12],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        md: 16,
        sm: 24,
        xs: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
          size: screens.md ? 'large' : 'small' // options={['Wallet balance', 'Pool Deposits', 'Borrow Positions']}
          ,
          value: value,
          onChange: setValue,
          style: {
            background: 'transparent'
          },
          options: [{
            label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                padding: 4
              },
              className: "SegmentedWrap",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: "Wallet balance"
              })
            }),
            value: 'Wallet balance'
          }, {
            label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                padding: 4
              },
              className: "SegmentedWrap",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: "Pool Deposits"
              })
            }),
            value: 'Pool Deposits'
          }, {
            label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                padding: 4
              },
              className: "SegmentedWrap",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: "Borrow Positions"
              })
            }),
            value: 'Borrow Positions'
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        className: "search",
        md: 8,
        sm: 24,
        xs: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          placeholder: formatMessage({
            id: 'search_tips'
          }),
          onChange: function onChange(e) {
            return setSerachWord(e.target.value);
          },
          className: "search_input",
          allowClear: true,
          prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(SearchOutlined/* default */.Z, {})
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "tableWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
        columns: WalletbalanceColumns,
        dataSource: list,
        className: "table",
        loading: loading,
        rowKey: "id",
        style: {
          display: value === 'Wallet balance' ? 'block' : 'none'
        },
        onHeaderRow: function onHeaderRow(columns, index) {
          return {
            className: 'HeaderRow',
            style: {
              background: colorFill,
              color: colorTextSecondary
            }
          };
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
        columns: screens.md ? DepositsColumns : [DepositsColumns[0], DepositsColumns[1], DepositsColumns[3]],
        dataSource: list.filter(function (item) {
          return Number(item.userLpBalance) > 0;
        }),
        className: "table",
        loading: loading,
        rowKey: "id",
        style: {
          display: value === 'Pool Deposits' ? 'block' : 'none'
        },
        onHeaderRow: function onHeaderRow(columns, index) {
          return {
            className: 'HeaderRow',
            style: {
              background: colorFill,
              color: colorTextSecondary
            }
          };
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
        columns: screens.md ? columns : [columns[0], columns[3], columns[4]],
        dataSource: list.filter(function (v) {
          return parseFloat(v.userDebt) > 0 || Number(v.userTotalCol) > 0;
        }),
        className: "table",
        loading: loading,
        rowKey: "id",
        style: {
          display: value === 'Borrow Positions' ? 'block' : 'none'
        },
        onHeaderRow: function onHeaderRow(columns, index) {
          return {
            className: 'HeaderRow',
            style: {
              background: colorFill,
              color: colorTextSecondary
            }
          };
        } // loading={loading}
        // loading={{
        //   spinning:
        //     (poolTokenDatas && poolTokenDatas.length < 1 && tokenList.length > 0) || loadingData,
        //   indicator: <Loading3QuartersOutlined spin style={{ fontSize: 30 }} />,
        // }}

      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NewPool/* default */.Z, {
      show: showNewPool,
      details: current,
      onCancel: function onCancel() {
        return setShowNewPool(false);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Borrow/* default */.Z, {
      show: showBorrowAction,
      onClose: function onClose() {
        return setShowBorrowAction(false);
      },
      defaultAction: borrowAction,
      defaultTarget: borrowActionTarget
    }), editLipActionPool && editLipAction && /*#__PURE__*/(0,jsx_runtime.jsx)(EditLiq/* default */.Z, {
      currentPool: editLipActionPool,
      show: showEditLip,
      onClose: function onClose() {
        return setShowEditLip(false);
      },
      defaultAction: editLipAction
    }, editLipActionPool.id), /*#__PURE__*/(0,jsx_runtime.jsx)(Details/* default */.Z, {
      show: showDetail,
      details: current,
      onCancel: function onCancel() {
        return setShowDatail(false);
      },
      handleAddLiq: handleAddLiq,
      handleBorrow: handleBorrow,
      handleRepay: handleRepay,
      handleRemoveLiq: handleRemoveLiq
    })]
  });
}

/***/ })

}]);