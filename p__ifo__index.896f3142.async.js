"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[979],{

/***/ 15664:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HomePage; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9783);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
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
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(66419);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/statistic/index.js + 5 modules
var statistic = __webpack_require__(55054);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(4393);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/popover/index.js + 3 modules
var popover = __webpack_require__(74627);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 3 modules
var tag = __webpack_require__(51904);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(75081);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowDownOutlined.js + 1 modules
var ArrowDownOutlined = __webpack_require__(77171);
// EXTERNAL MODULE: ./node_modules/@ant-design/plots/es/components/area/index.js + 680 modules
var components_area = __webpack_require__(26288);
;// CONCATENATED MODULE: ./src/pages/ifo/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/utils/errorHandler.ts
var errorHandler = __webpack_require__(86625);
// EXTERNAL MODULE: ./src/utils/requestLogs.ts
var requestLogs = __webpack_require__(50033);
// EXTERNAL MODULE: ./src/services/contract/contract.ts
var contract_contract = __webpack_require__(21762);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// CONCATENATED MODULE: ./src/services/contract/common.ts




var approve = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(chain, wallet, ERC20TokenAddress, spenderAddress, approveAmount) {
    var override,
        tokenContract,
        curAllowance,
        approveResp,
        preNonce,
        _args = arguments;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            override = _args.length > 5 && _args[5] !== undefined ? _args[5] : {};
            tokenContract = (0,contract_contract/* getContract */.uN)(chain.id, 'ERC20Contract', false, wallet.name, ERC20TokenAddress);
            _context.next = 4;
            return tokenContract.allowance(wallet.account, spenderAddress);

          case 4:
            curAllowance = _context.sent;

            if (!curAllowance.gte(approveAmount)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              override: override
            });

          case 7:
            _context.next = 9;
            return tokenContract.approve(spenderAddress, approveAmount, override);

          case 9:
            approveResp = _context.sent;
            preNonce = approveResp.nonce;
            override.nonce = preNonce + 1;
            _context.next = 14;
            return approveResp.wait();

          case 14:
            return _context.abrupt("return", {
              override: override
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function approve(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();


// EXTERNAL MODULE: ./node_modules/ethers/node_modules/@ethersproject/constants/lib.esm/addresses.js
var addresses = __webpack_require__(84076);
// EXTERNAL MODULE: ./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var bignumber = __webpack_require__(91747);
;// CONCATENATED MODULE: ./src/services/contract/ifo.ts










var fetchSaleInfo = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(params) {
    var res, SaleTokenDec, OTDec, chain, wallet, contract, ret, startAt, endAt, saleTokenAmount, marketValue, saleVolume, capMarketValue, totalRaised, _saleTokenAmount, price, _maxMarketValue, saleBalance;

    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = [null, null];
            SaleTokenDec = 30;
            OTDec = 18;
            _context.prev = 3;
            chain = params.chain, wallet = params.wallet;
            contract = (0,contract_contract/* getContract */.uN)(chain.id, 'ReadOnlySaleToken');
            (0,requestLogs/* reuqestLog */.$)('SaleToken.saleInfo', 'start');
            _context.next = 9;
            return contract.saleInfo();

          case 9:
            ret = _context.sent;
            (0,requestLogs/* reuqestLog */.$)('SaleToken.saleInfo', 'over', ret);
            startAt = ret.startAt, endAt = ret.endAt, saleTokenAmount = ret.saleTokenAmount, marketValue = ret.marketValue, saleVolume = ret.saleVolume, capMarketValue = ret.capMarketValue;
            totalRaised = (0,utils/* bigint2Number */.Sn)(saleVolume, SaleTokenDec);
            _saleTokenAmount = (0,utils/* bigint2Number */.Sn)(saleTokenAmount, OTDec);
            price = (0,utils/* bigint2Number */.Sn)(saleVolume, SaleTokenDec + 8); //saleVolume/_saleTokenAmount

            _maxMarketValue = (0,utils/* bigint2Number */.Sn)(capMarketValue, SaleTokenDec);
            saleBalance = Number(_saleTokenAmount) - Number(totalRaised);
            res[0] = {
              startAt: dayjs_min_default()(Number(startAt.toString()) * 1000).format('MMM D, YYYY'),
              endAt: Number(endAt.toString()) * 1000,
              saleTokenAmount: saleTokenAmount.toString(),
              marketValue: (0,utils/* bigint2Number */.Sn)(marketValue, 30),
              saleVolume: totalRaised,
              currentPrice: price,
              //totalRaised/1e8
              FDV: Number(price) * 1e9,
              saleBalance: saleBalance.toFixed(4),
              maxPrice: Number(_maxMarketValue) / Number(_saleTokenAmount),
              isSaleEnd: Number(endAt.toString()) * 1000 >= new Date().getTime()
            };
            (0,requestLogs/* reuqestLog */.$)('SaleToken.saleInfo', 'over', res[0]);
            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](3);
            res[1] = (0,errorHandler/* getErrorMsg */.a)(_context.t0, 'SaleToken.saleInfo');

          case 24:
            return _context.abrupt("return", res);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 21]]);
  }));

  return function fetchSaleInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

var fetchAccountInfo = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(params) {
    var res, chain, wallet, account, contract, ret, tokensUserAmount, tokensDecimals, saleVolume, tokens, userBuyTokenAmount, userContribution, userContributionByToken;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = [null, null];
            _context2.prev = 1;
            chain = params.chain, wallet = params.wallet;
            account = wallet.account;
            if (!wallet.isConnected) account = addresses/* AddressZero */.d;
            contract = (0,contract_contract/* getContract */.uN)(chain.id, 'ReadOnlySaleToken');
            (0,requestLogs/* reuqestLog */.$)('SaleToken.getAccountInfo', 'start', account);
            _context2.next = 9;
            return contract.getAccountInfo(account);

          case 9:
            ret = _context2.sent;
            (0,requestLogs/* reuqestLog */.$)('SaleToken.getAccountInfo', 'over', ret);
            tokensUserAmount = ret.tokensUserAmount, tokensDecimals = ret.tokensDecimals, saleVolume = ret.saleVolume, tokens = ret.tokens, userBuyTokenAmount = ret.userBuyTokenAmount; // TODO hardCode 1e9 totalSupply ,10% for ifo;

            userContribution = 0;
            userContributionByToken = tokensUserAmount.map(function (item, index) {
              var id = tokens[index];
              var decimals = tokensDecimals[index];
              var amount = (0,utils/* bigint2Number */.Sn)(item, decimals);
              userContribution += Number(amount);
              return {
                amount: amount,
                id: id
              };
            });
            res[0] = {
              tokens: tokens.map(function (item) {
                return item.toLowerCase();
              }),
              userBuyTokenAmount: (0,utils/* bigint2Number */.Sn)(userBuyTokenAmount, 18),
              //ot dec=18
              userContribution: userContribution,
              userContributionByToken: userContributionByToken
            };
            (0,requestLogs/* reuqestLog */.$)('SaleToken.getAccountInfo', 'over', res[0]);
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](1);
            res[1] = (0,errorHandler/* getErrorMsg */.a)(_context2.t0, 'SaleToken.getAccountInfo');

          case 21:
            return _context2.abrupt("return", res);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 18]]);
  }));

  return function fetchAccountInfo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var buyOT = /*#__PURE__*/function () {
  var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(params) {
    var res, chain, wallet, inToken, inAmount, _amountRaw, contract, ret;

    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = [null, null];
            _context3.prev = 1;
            chain = params.chain, wallet = params.wallet, inToken = params.inToken, inAmount = params.inAmount;
            _amountRaw = (0,utils/* amountRaw */.xo)(inAmount, inToken.tokenDecimal);
            contract = (0,contract_contract/* getContract */.uN)(chain.id, 'SaleToken', false, wallet.name);
            _context3.next = 7;
            return approve(chain, wallet, inToken.id, contract.address, bignumber/* BigNumber.from */.O$.from(_amountRaw));

          case 7:
            (0,requestLogs/* reuqestLog */.$)('SaleToken.buyToken', 'start', inToken.id, _amountRaw);
            _context3.next = 10;
            return contract.buyToken(inToken.id, _amountRaw);

          case 10:
            ret = _context3.sent;
            _context3.next = 13;
            return ret.wait();

          case 13:
            (0,requestLogs/* reuqestLog */.$)('SaleToken.buyToken', 'over', ret);
            res[0] = ret;
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](1);
            res[1] = (0,errorHandler/* getErrorMsg */.a)(_context3.t0, 'SaleToken.buyToken');

          case 20:
            return _context3.abrupt("return", res);

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 17]]);
  }));

  return function buyOT(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var withdrawOT = /*#__PURE__*/function () {
  var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(params) {
    var res, chain, wallet, contract, ret;
    return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = [null, null];
            _context4.prev = 1;
            chain = params.chain, wallet = params.wallet;
            contract = (0,contract_contract/* getContract */.uN)(chain.id, 'SaleToken', false, wallet.name);
            (0,requestLogs/* reuqestLog */.$)('SaleToken.withdrawToken', 'start');
            _context4.next = 7;
            return contract.withdrawToken();

          case 7:
            ret = _context4.sent;
            _context4.next = 10;
            return ret.wait();

          case 10:
            (0,requestLogs/* reuqestLog */.$)('SaleToken.withdrawToken', 'over', ret);
            res[0] = ret;
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            res[1] = (0,errorHandler/* getErrorMsg */.a)(_context4.t0, 'SaleToken.withdrawToken');

          case 17:
            return _context4.abrupt("return", res);

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 14]]);
  }));

  return function withdrawOT(_x4) {
    return _ref4.apply(this, arguments);
  };
}();


// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./src/assets/svg/ot.svg
var ot = __webpack_require__(37373);
// EXTERNAL MODULE: ./src/hooks/useIntervalAsync.ts
var useIntervalAsync = __webpack_require__(49395);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/ifo/index.tsx






















var useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
var Countdown = statistic/* default.Countdown */.Z.Countdown;
var Title = typography/* default.Title */.Z.Title,
    Paragraph = typography/* default.Paragraph */.Z.Paragraph,
    Text = typography/* default.Text */.Z.Text,
    Link = typography/* default.Link */.Z.Link;
var deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

var PalnLayout = {
  xl: 4,
  md: 8,
  sm: 12,
  xs: 24
};
var ProgressLayout = {
  xl: 3,
  md: 8,
  sm: 12,
  xs: 24
};
var OTInfo = [{
  title: 'IFO',
  value: '10,000,000(10%)'
}, {
  title: 'Liquidity',
  value: '2,500,000(2.5%)'
}, {
  title: 'Team',
  value: '20,000,000(20%)'
}, {
  title: 'Liquidity incentive',
  value: '50,000,000(50%)'
}, {
  title: 'Treasury',
  value: '17,500,000(17.5%)'
}, {
  title: 'Total Supply',
  value: '100,000,000'
}];
function HomePage() {
  var _useBreakpoint = useBreakpoint(),
      xs = _useBreakpoint.xs,
      md = _useBreakpoint.md,
      xl = _useBreakpoint.xl,
      xxl = _useBreakpoint.xxl,
      sm = _useBreakpoint.sm;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      osdData = _useModel.osdData;

  var _useModel2 = (0,_umi_production_exports.useModel)('tradeTokenList'),
      swapTokenList = _useModel2.swapIndexArr;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useState = (0,react.useState)([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      saleInfo = _useState4[0],
      setSaleInfo = _useState4[1];

  var _useState5 = (0,react.useState)(),
      _useState6 = slicedToArray_default()(_useState5, 2),
      accountInfo = _useState6[0],
      setAccountInfo = _useState6[1];

  var _useState7 = (0,react.useState)(),
      _useState8 = slicedToArray_default()(_useState7, 2),
      inToken = _useState8[0],
      setInToken = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      inAmount = _useState10[0],
      setInAmount = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = slicedToArray_default()(_useState11, 2),
      submiting = _useState12[0],
      setSubmiting = _useState12[1];

  var _useState13 = (0,react.useState)(false),
      _useState14 = slicedToArray_default()(_useState13, 2),
      claiming = _useState14[0],
      setClaiming = _useState14[1];

  var _useState15 = (0,react.useState)(),
      _useState16 = slicedToArray_default()(_useState15, 2),
      succRet = _useState16[0],
      setSuccRet = _useState16[1];

  var init = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var _yield$fetchSaleInfo, _yield$fetchSaleInfo2, _ret, error, _yield$fetchAccountIn, _yield$fetchAccountIn2, _account;

    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(chain && wallet)) {
              _context.next = 14;
              break;
            }

            _context.next = 3;
            return fetchSaleInfo({
              chain: chain,
              wallet: wallet
            });

          case 3:
            _yield$fetchSaleInfo = _context.sent;
            _yield$fetchSaleInfo2 = slicedToArray_default()(_yield$fetchSaleInfo, 2);
            _ret = _yield$fetchSaleInfo2[0];
            error = _yield$fetchSaleInfo2[1];
            _context.next = 9;
            return fetchAccountInfo({
              chain: chain,
              wallet: wallet
            });

          case 9:
            _yield$fetchAccountIn = _context.sent;
            _yield$fetchAccountIn2 = slicedToArray_default()(_yield$fetchAccountIn, 1);
            _account = _yield$fetchAccountIn2[0];

            if (_ret) {
              setSaleInfo(_ret);
            }

            if (_account) setAccountInfo(_account);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [chain, wallet]);
  var updata = (0,useIntervalAsync/* default */.Z)(init, 30000);
  (0,react.useEffect)(function () {
    asyncFetch();
  }, []);
  var maxPrice = (0,react.useMemo)(function () {
    if (saleInfo) {
      return saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.maxPrice;
    } else {
      return 0;
    }
  }, [saleInfo]);
  var inTokenList = (0,react.useMemo)(function () {
    if (accountInfo && swapTokenList.length > 0) {
      console.log(swapTokenList.filter(function (item) {
        return accountInfo.tokens.includes(item.id.toLowerCase());
      }));
      return swapTokenList.filter(function (item) {
        return accountInfo.tokens.includes(item.id.toLowerCase());
      });
    }

    return [];
  }, [accountInfo, swapTokenList]);
  (0,react.useEffect)(function () {
    if (inTokenList.length && !inToken) {
      setInToken(inTokenList[0]);
    }

    if (inTokenList.length && inToken) {
      var _find = inTokenList.find(function (item) {
        return item.id === inToken.id;
      });

      if (_find) {
        setInToken(_find);
      }
    }
  }, [inTokenList]);
  var contribution = (0,react.useMemo)(function () {
    console.log(accountInfo, swapTokenList, 'accountInfo,swapTokenList');

    if (accountInfo && swapTokenList.length > 0) {
      return inTokenList.map(function (item) {
        var id = item.id,
            symbol = item.symbol,
            icon = item.icon;

        var _find = accountInfo.userContributionByToken.find(function (_ref2) {
          var id = _ref2.id;
          return id.toLowerCase() === item.id.toLowerCase();
        });

        if (_find) {
          var amount = _find.amount;
          return {
            id: id,
            amount: amount,
            symbol: symbol,
            icon: icon
          };
        }

        return {
          id: id,
          symbol: symbol,
          icon: icon,
          amount: '0.0'
        };
      });
    }

    return [];
  }, [accountInfo, inTokenList]);
  var inAmountUSD = (0,react.useMemo)(function () {
    if (inAmount && inToken) {
      return (Number(inAmount) * Number(inToken.userOraclePrice)).toFixed(2);
    }
  }, [inAmount, inToken]);
  var MinimumReceive = (0,react.useMemo)(function () {
    if (inAmount && inToken) {
      return (Number(inAmount) * Number(inToken.userOraclePrice) / maxPrice).toFixed(6);
    }
  }, [inAmount, inToken]);

  var asyncFetch = function asyncFetch() {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (response) {
      return response.json();
    }).then(function (json) {
      console.log(json, 'setData(json)');
      setData(json.reverse().slice(0, 40));
    })["catch"](function (error) {// console.log('fetch data failed', error);
    });
  };

  var config = (0,react.useMemo)(function () {
    return {
      data: data,
      xField: 'Date',
      yField: 'scales',
      height: 293,
      xAxis: {
        range: [0, 1],
        tickCount: 5,
        grid: null,
        line: null,
        tickLine: null
      },
      yAxis: {
        position: 'right',
        grid: null
      },
      color: colorPrimary,
      smooth: true,
      line: {
        color: '#03CDC1'
      },
      areaStyle: function areaStyle() {
        return {
          fill: 'l(270) 0:rgba(3, 205, 193, 0.15) 0.3:#40d7cd 1:#40d7cd ,'
        };
      }
    };
  }, [data, colorPrimary]);

  var handleBuyOT = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var _yield$buyOT, _yield$buyOT2, ret, error;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!chain || !wallet || !inAmount || !inToken)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              setSubmiting(true);
              _context2.next = 5;
              return buyOT({
                chain: chain,
                wallet: wallet,
                inAmount: inAmount,
                inToken: inToken
              });

            case 5:
              _yield$buyOT = _context2.sent;
              _yield$buyOT2 = slicedToArray_default()(_yield$buyOT, 2);
              ret = _yield$buyOT2[0];
              error = _yield$buyOT2[1];
              setSubmiting(false);

              if (!error) {
                _context2.next = 13;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              return _context2.abrupt("return");

            case 13:
              updata(); // message.success('SWAP SUCCESS' + ret?.hash)

              setSuccRet({
                type: 'swap',
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);
                },
                title: 'Buy OT Success',
                hash: (ret === null || ret === void 0 ? void 0 : ret.hash) || '',
                okText: 'Close'
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleBuyOT() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleClaimOT = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
      var _yield$withdrawOT, _yield$withdrawOT2, ret, error;

      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!chain || !wallet)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              setClaiming(true);
              _context3.next = 5;
              return withdrawOT({
                chain: chain,
                wallet: wallet
              });

            case 5:
              _yield$withdrawOT = _context3.sent;
              _yield$withdrawOT2 = slicedToArray_default()(_yield$withdrawOT, 2);
              ret = _yield$withdrawOT2[0];
              error = _yield$withdrawOT2[1];
              setClaiming(false);

              if (!error) {
                _context3.next = 13;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              return _context3.abrupt("return");

            case 13:
              updata(); // message.success('SWAP SUCCESS' + ret?.hash)

              setSuccRet({
                type: 'swap',
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);
                },
                title: 'Claim OT Success',
                hash: (ret === null || ret === void 0 ? void 0 : ret.hash) || '',
                okText: 'Close'
              });

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleClaimOT() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "ifoPage",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
      bordered: false,
      headStyle: {
        borderBottom: 'none'
      },
      bodyStyle: {
        padding: '0 20px 20px 20px'
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          textAlign: 'center',
          marginBottom: 0,
          paddingTop: 20,
          paddingBottom: 20
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: ["OT emission ", !xs && 'schedule', ",\xA0"]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
          style: {
            fontSize: 22,
            color: colorPrimary
          },
          underline: true,
          href: "https://onchaintrade.gitbook.io/ot/tokenomics/tokenomics-zksync",
          target: '_blank',
          children: "learn more"
        })]
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "plan",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
          style: {
            marginBottom: 20
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 16
            },
            children: "Make sure you fully understand\xA0"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
            style: {
              fontSize: 16,
              color: colorPrimary
            },
            underline: true,
            href: "https://onchaintrade.gitbook.io/ot/tokenomics/tokenomics-zksync/public-sale",
            target: '_blank',
            children: "terms and mechanism"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 16
            },
            children: "\xA0of this sale before contributing.Onchain.trade code audit report\xA0"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
            style: {
              fontSize: 16,
              color: colorPrimary
            },
            underline: true,
            href: "https://onchaintrade.gitbook.io/ot/audit-reports",
            target: '_blank',
            children: "here"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
        className: xs ? "desc xs" : "desc",
        gutter: [12, 12],
        children: OTInfo.map(function (_ref5) {
          var title = _ref5.title,
              value = _ref5.value;
          return /*#__PURE__*/(0,react.createElement)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, PalnLayout), {}, {
            key: title
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: title
            }),
            value: value
          }));
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
      style: {
        marginTop: 12
      },
      bordered: false,
      headStyle: {
        borderBottom: 'none'
      },
      bodyStyle: {
        padding: '0 20px 20px 20px'
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          textAlign: 'center',
          marginBottom: 0,
          paddingTop: 20,
          paddingBottom: 20
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: "IFO Progress"
        })
      }),
      loading: !saleInfo,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        className: xs ? "desc xs" : "desc",
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          xl: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: "Sale Started"
            }),
            value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.startAt
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          xl: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Countdown, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: "Sale ends in"
            }),
            value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.endAt,
            format: "D[D]:H[hrs]:m[m]"
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: "Total raised"
            }),
            value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.saleVolume,
            prefix: '$'
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          xl: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: "Current OT price"
            }),
            value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.currentPrice,
            prefix: '$'
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: "Current OT FDV"
            }) // precision={2}
            ,
            value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.FDV,
            prefix: "$",
            formatter: function formatter(value) {
              return (0,utils/* formatNumberToKMBT */.BF)(Number(value), 2);
            }
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          xl: 3,
          children: accountInfo && /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: "Your contribution"
            }),
            value: accountInfo.userContribution,
            prefix: "$",
            formatter: function formatter(value) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                content: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                  children: contribution.map(function (item) {
                    return /*#__PURE__*/(0,jsx_runtime.jsxs)(tag/* default */.Z, {
                      color: colorPrimary,
                      children: [item.symbol, ":", item.amount]
                    }, item.id);
                  })
                }),
                children: value
              });
            }
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          xl: 4,
          children: accountInfo && /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: "You will get at least"
            }),
            value: accountInfo.userContribution / maxPrice,
            suffix: "OT" // prefix='$'
            // formatter={(value) => formatNumberToKMBT(Number(value), 2)}

          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
          xl: 2,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
            gutter: [14, 14],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: "12",
              xl: 24,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
                type: "primary",
                size: "small",
                disabled: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.isSaleEnd,
                onClick: handleClaimOT,
                loading: claiming,
                children: "Claim OT"
              })
            })
          })
        }))]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          marginBottom: 0,
          marginTop: 24
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16
          },
          children: "Will be open for withdrawal 24 hours before liquidity mining starts"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [12, 12],
      style: {
        marginTop: 12
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        xl: 10,
        md: 12,
        sm: 24,
        xs: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
          title: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "buyTitle linkColor",
            children: "Buy OT"
          }),
          bordered: false,
          bodyStyle: {
            padding: 12
          },
          style: {
            height: '100%'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
            spinning: submiting,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
              amount: inAmount,
              onAmountChange: function onAmountChange(value) {
                setInAmount(value);
              },
              onTokenChange: function onTokenChange(token) {
                setInToken(token);
              },
              currentToken: inToken,
              tokenList: inTokenList,
              header: inToken ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "label",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                  style: {
                    fontSize: 12,
                    color: colorTextSecondary
                  },
                  children: ["Pay:$", inAmountUSD]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                  style: {
                    fontSize: 12,
                    color: colorTextSecondary
                  },
                  onClick: function onClick() {
                    setInAmount(inToken.userTokenBalance);
                  },
                  children: ["Balance: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    style: {
                      color: colorPrimary
                    },
                    children: Number(inToken.userTokenBalanceLabel)
                  })]
                })]
              }) : '',
              maxValue: Infinity,
              showSlider: false
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "arrow",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDownOutlined/* default */.Z, {
                style: {
                  color: colorTextSecondary
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, defineProperty_default()({
              amount: MinimumReceive,
              onAmountChange: function onAmountChange() {},
              onTokenChange: function onTokenChange() {},
              currentToken: objectSpread2_default()(objectSpread2_default()({}, osdData), {}, {
                symbol: 'OT',
                icon: ot/* default */.Z
              }),
              tokenList: inTokenList,
              header: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
              maxValue: Infinity,
              showSlider: false,
              showSelectToken: true,
              canSelectToken: false
            }, "header", accountInfo ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "label",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                style: {
                  fontSize: 12,
                  color: colorTextSecondary
                },
                children: "Minimum receive:"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                style: {
                  fontSize: 12,
                  color: colorTextSecondary
                },
                onClick: function onClick() {},
                children: ["Balance: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  style: {
                    color: colorPrimary
                  },
                  children: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.saleBalance
                })]
              })]
            }) : '')), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "btnWrap",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
                conditions: [{
                  condition: !!(saleInfo && !saleInfo.isSaleEnd),
                  text: 'Contribute and buy OT',
                  type: 'primary',
                  danger: true,
                  onClick: function onClick() {
                    message/* default.error */.ZP.error('only at sale time');
                  }
                }],
                onClick: handleBuyOT,
                loading: submiting,
                children: "Contribute and buy OT"
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        xl: 14,
        md: 12,
        sm: 24,
        xs: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
          title: "OT sale price",
          bordered: false,
          style: {
            height: '100%'
          },
          bodyStyle: {
            padding: 12
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_area/* default */.Z, objectSpread2_default()({}, config))
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
      style: {
        marginTop: 12
      },
      bordered: false,
      headStyle: {
        borderBottom: 'none'
      },
      bodyStyle: {
        padding: '0 20px 20px 20px'
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          textAlign: 'center',
          marginBottom: 0,
          paddingTop: 20,
          paddingBottom: 20
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: "How OT price is determined"
        })
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          marginBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16
          },
          children: "USDC, USDT and DAI are accepted in exchange for OT tokens. 10,000,000 OT (10% of total supply) allocated to this sale. The final price will be confirmed when sale ends:"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "info",
        style: {
          background: colorInfoBg,
          textAlign: 'center',
          lineHeight: "36px",
          marginTop: 10
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16,
            color: colorPrimary
          },
          children: "Final OT price = $ Raised value / 10,000,000"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      style: {
        marginTop: 12
      },
      bordered: false,
      headStyle: {
        borderBottom: 'none'
      },
      bodyStyle: {
        padding: '0 20px 20px 20px'
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          textAlign: 'center',
          marginBottom: 0,
          paddingTop: 20,
          paddingBottom: 20
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: "IFO(Initial fairlaunch offering) rules"
        })
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          marginBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
            children: ["1. Make sure you fully understand \xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
              style: {
                color: colorPrimary
              },
              underline: true,
              href: "https://onchaintrade.gitbook.io/ot/tokenomics/tokenomics-zksync/public-sale",
              target: '_blank',
              children: "terms and mechanism"
            }), "\xA0of this sale before contributing."]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: "2. Open for everyone, no presale and VC discounts, same price for all contributors ."
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: "3. 10% for public sale without lock time, can be withdrawn before liquidity mining starts."
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: "4. 50% of the raised funds will be added to liquidity pools, the rest 50% will be used for future protocol development, deploying on new chains and code audit, etc."
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
            children: ["5. Contributors for this round are eligible for ", /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
              type: "danger",
              children: "same percentage of OT on Aptos"
            }), " . e.g. Alice contributes in this round and gets 0.1%(100,000) of OT token on zkSync, she will get 0.1% of OT on Aptos as well. Contributors will be airdroped OT-Aptos ERC20 tokens which can be swapped into OT on Aptos after Onchain.trade launches on Aptos mainnet(already live on testnet: beta.onchain.trade)."]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: "6. What can you do with the OT token: you can stake OT to get fee distribution on OT platform. OT holders get rewarded with real yield instead of just holding it for governance purpose."
          })]
        })
      })
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
}

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