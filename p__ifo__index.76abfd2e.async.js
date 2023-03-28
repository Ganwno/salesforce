"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[979],{

/***/ 77171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_ArrowDownOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ArrowDownOutlined.js
// This icon file is generated automatically.
var ArrowDownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" } }] }, "name": "arrow-down", "theme": "outlined" };
/* harmony default export */ var asn_ArrowDownOutlined = (ArrowDownOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowDownOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ArrowDownOutlined_ArrowDownOutlined = function ArrowDownOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ArrowDownOutlined
  }));
};
ArrowDownOutlined_ArrowDownOutlined.displayName = 'ArrowDownOutlined';
/* harmony default export */ var icons_ArrowDownOutlined = (/*#__PURE__*/react.forwardRef(ArrowDownOutlined_ArrowDownOutlined));

/***/ }),

/***/ 20393:
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
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(97937);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/colors.js
var colors = __webpack_require__(98787);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave/index.js + 4 modules
var wave = __webpack_require__(45353);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/interface/presetColors.js
var presetColors = __webpack_require__(8796);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var util_statistic = __webpack_require__(45503);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/capitalize.js
function capitalize(str) {
  if (typeof str !== 'string') {
    return str;
  }
  const ret = str.charAt(0).toUpperCase() + str.slice(1);
  return ret;
}
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/style/index.js



const genTagStatusStyle = (token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [`${token.componentCls}-${status}`]: {
      color: token[`color${cssVariableType}`],
      background: token[`color${capitalizedCssVariableType}Bg`],
      borderColor: token[`color${capitalizedCssVariableType}Border`]
    }
  };
};
// FIXME: special preset colors
const genTagColorStyle = token => presetColors/* PresetColors.reduce */.i.reduce((prev, colorKey) => {
  const lightColor = token[`${colorKey}-1`];
  const lightBorderColor = token[`${colorKey}-3`];
  const darkColor = token[`${colorKey}-6`];
  const textColor = token[`${colorKey}-7`];
  return Object.assign(Object.assign({}, prev), {
    [`${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor
    },
    [`${token.componentCls}-${colorKey}-inverse`]: {
      color: token.colorTextLightSolid,
      background: darkColor,
      borderColor: darkColor
    }
  });
}, {});
const genBaseStyle = token => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal
  } = token;
  const paddingInline = tagPaddingHorizontal - lineWidth;
  const iconMarginInline = paddingXXS - lineWidth;
  return {
    // Result
    [token.componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      display: 'inline-block',
      height: 'auto',
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: `${token.tagLineHeight}px`,
      whiteSpace: 'nowrap',
      background: token.tagDefaultBg,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: 'start',
      // RTL
      '&&-rtl': {
        direction: 'rtl'
      },
      '&, a, a:hover': {
        color: token.tagDefaultColor
      },
      [`${token.componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        color: token.colorTextDescription,
        fontSize: token.tagIconSize,
        cursor: 'pointer',
        transition: `all ${token.motionDurationMid}`,
        '&:hover': {
          color: token.colorTextHeading
        }
      },
      [`&&-has-color`]: {
        borderColor: 'transparent',
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      [`&-checkable`]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        '&:not(&-checked):hover': {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        '&:active, &-checked': {
          color: token.colorTextLightSolid
        },
        '&-checked': {
          backgroundColor: token.colorPrimary,
          '&:hover': {
            backgroundColor: token.colorPrimaryHover
          }
        },
        '&:active': {
          backgroundColor: token.colorPrimaryActive
        }
      },
      [`&-hidden`]: {
        display: 'none'
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    })
  };
};
// ============================== Export ==============================
/* harmony default export */ var tag_style = ((0,genComponentStyleHook/* default */.Z)('Tag', token => {
  const {
    fontSize,
    lineHeight,
    lineWidth,
    fontSizeIcon
  } = token;
  const tagHeight = Math.round(fontSize * lineHeight);
  const tagFontSize = token.fontSizeSM;
  const tagLineHeight = tagHeight - lineWidth * 2;
  const tagDefaultBg = token.colorFillAlter;
  const tagDefaultColor = token.colorText;
  const tagToken = (0,util_statistic/* merge */.TS)(token, {
    tagFontSize,
    tagLineHeight,
    tagDefaultBg,
    tagDefaultColor,
    tagIconSize: fontSizeIcon - 2 * lineWidth,
    tagPaddingHorizontal: 8 // Fixed padding.
  });

  return [genBaseStyle(tagToken), genTagColorStyle(tagToken), genTagStatusStyle(tagToken, 'success', 'Success'), genTagStatusStyle(tagToken, 'processing', 'Info'), genTagStatusStyle(tagToken, 'error', 'Error'), genTagStatusStyle(tagToken, 'warning', 'Warning')];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/CheckableTag.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const CheckableTag = _a => {
  var {
      prefixCls: customizePrefixCls,
      className,
      checked,
      onChange,
      onClick
    } = _a,
    restProps = __rest(_a, ["prefixCls", "className", "checked", "onChange", "onClick"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const handleClick = e => {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = tag_style(prefixCls);
  const cls = classnames_default()(prefixCls, {
    [`${prefixCls}-checkable`]: true,
    [`${prefixCls}-checkable-checked`]: checked
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement("span", Object.assign({}, restProps, {
    className: cls,
    onClick: handleClick
  })));
};
/* harmony default export */ var tag_CheckableTag = (CheckableTag);
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/index.js
var tag_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const PresetColorRegex = new RegExp(`^(${colors/* PresetColorTypes.join */.Y.join('|')})(-inverse)?$`);
const PresetStatusColorRegex = new RegExp(`^(${colors/* PresetStatusColorTypes.join */.E.join('|')})$`);
const InternalTag = (_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      className,
      style,
      children,
      icon,
      color,
      onClose,
      closeIcon,
      closable = false
    } = _a,
    props = tag_rest(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const [visible, setVisible] = react.useState(true);
  // Warning for deprecated usage
  if (false) {}
  react.useEffect(() => {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);
  const isPresetColor = () => {
    if (!color) {
      return false;
    }
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };
  const tagStyle = Object.assign({
    backgroundColor: color && !isPresetColor() ? color : undefined
  }, style);
  const presetColor = isPresetColor();
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = tag_style(prefixCls);
  const tagClassName = classnames_default()(prefixCls, {
    [`${prefixCls}-${color}`]: presetColor,
    [`${prefixCls}-has-color`]: color && !presetColor,
    [`${prefixCls}-hidden`]: !visible,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  const handleCloseClick = e => {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    setVisible(false);
  };
  const renderCloseIcon = () => {
    if (closable) {
      return closeIcon ? /*#__PURE__*/react.createElement("span", {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      });
    }
    return null;
  };
  const isNeedWave = 'onClick' in props || children && children.type === 'a';
  const iconNode = icon || null;
  const kids = iconNode ? /*#__PURE__*/react.createElement(react.Fragment, null, iconNode, /*#__PURE__*/react.createElement("span", null, children)) : children;
  const tagNode = /*#__PURE__*/react.createElement("span", Object.assign({}, props, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, renderCloseIcon());
  return wrapSSR(isNeedWave ? /*#__PURE__*/react.createElement(wave/* default */.Z, null, tagNode) : tagNode);
};
const Tag = /*#__PURE__*/react.forwardRef(InternalTag);
if (false) {}
Tag.CheckableTag = tag_CheckableTag;
/* harmony default export */ var tag = (Tag);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(75081);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowDownOutlined.js + 1 modules
var ArrowDownOutlined = __webpack_require__(77171);
;// CONCATENATED MODULE: ./src/pages/ifo/index.less
// extracted by mini-css-extract-plugin

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
        approveResp,
        preNonce,
        _args = arguments;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            override = _args.length > 5 && _args[5] !== undefined ? _args[5] : {};
            tokenContract = (0,contract_contract/* getContract */.uN)(chain.id, 'ERC20Contract', false, wallet.name, ERC20TokenAddress);
            console.log('122333333', wallet.account, spenderAddress, ERC20TokenAddress, tokenContract); // const curAllowance = await tokenContract.allowance(wallet.account, spenderAddress)

            console.log('122333333', wallet.account, spenderAddress, ERC20TokenAddress); // if (curAllowance.gte(approveAmount)) {
            //     return {
            //         override,
            //     }
            // }

            _context.next = 6;
            return tokenContract.approve(spenderAddress, approveAmount, override);

          case 6:
            approveResp = _context.sent;
            preNonce = approveResp.nonce;
            override.nonce = preNonce + 1;
            _context.next = 11;
            return approveResp.wait();

          case 11:
            return _context.abrupt("return", {
              override: override
            });

          case 12:
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
    var res, SaleTokenDec, OTDec, chain, wallet, contract, ret, allowClaim, startAt, endAt, saleTokenAmount, marketValue, saleVolume, capMarketValue, saleToken, totalRaised, _saleTokenAmount, _price, _minMarketValue, _maxMarketValue, minPrice, price, saleBalance;

    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = [null, null];
            SaleTokenDec = 30;
            OTDec = 18;
            _context.prev = 3;
            chain = params.chain, wallet = params.wallet;
            contract = (0,contract_contract/* getContract */.uN)(chain.id, 'ReadOnlyOTAuction');
            (0,requestLogs/* reuqestLog */.$)('SaleToken.saleInfo', 'start');
            _context.next = 9;
            return contract.saleInfo();

          case 9:
            ret = _context.sent;
            _context.next = 12;
            return contract.allowClaim();

          case 12:
            allowClaim = _context.sent;
            (0,requestLogs/* reuqestLog */.$)('SaleToken.saleInfo', 'over', ret);
            startAt = ret.startAt, endAt = ret.endAt, saleTokenAmount = ret.otSupply, marketValue = ret.floorValue, saleVolume = ret.totalReceived, capMarketValue = ret.capMKTValue, saleToken = ret.OT;
            totalRaised = (0,utils/* bigint2Number */.Sn)(saleVolume, SaleTokenDec);
            _saleTokenAmount = (0,utils/* bigint2Number */.Sn)(saleTokenAmount, OTDec);
            _price = Number((0,utils/* bigint2Number */.Sn)(saleVolume, SaleTokenDec)) / Number(_saleTokenAmount); //saleVolume/_saleTokenAmount; 1kw

            _minMarketValue = (0,utils/* bigint2Number */.Sn)(marketValue, SaleTokenDec);
            _maxMarketValue = (0,utils/* bigint2Number */.Sn)(capMarketValue, SaleTokenDec);
            minPrice = Number(_minMarketValue) / Number(_saleTokenAmount);
            price = Number(_price) > minPrice ? _price : String(minPrice);
            saleBalance = Number(totalRaised) === 0 ? Number(_saleTokenAmount) : Number(_saleTokenAmount) - Number(totalRaised) / Number(_price);
            console.log(Number(totalRaised), new Date(Number(endAt.toString()) * 1000), 'Number(_price)Number(_price)');
            res[0] = {
              startAt: dayjs_min_default()(Number(startAt.toString()) * 1000).format('MMM D, YYYY'),
              startAtTime: Number(startAt.toString()) * 1000,
              isSaleStart: Number(startAt.toString()) * 1000 < new Date().getTime(),
              endAt: Number(endAt.toString()) * 1000,
              saleTokenAmount: saleTokenAmount.toString(),
              marketValue: (0,utils/* bigint2Number */.Sn)(marketValue, 30),
              saleVolume: totalRaised,
              currentPrice: String(price),
              //totalRaised/1e8
              FDV: Number(price) * Number(_saleTokenAmount) * 10,
              // 1/10
              saleBalance: saleBalance.toFixed(4),
              maxPrice: Number(_maxMarketValue) / Number(_saleTokenAmount),
              isSaleEnd: Number(endAt.toString()) * 1000 < new Date().getTime() || allowClaim,
              // || totalRaised === _maxMarketValue,
              saleToken: saleToken,
              saleBalanceUSD: (Number(_maxMarketValue) - Number(totalRaised)).toString() // countDown: dayjs(Number(endAt.toString()) * 1000 - new Date().getTime()).format("D[d] H[hrs] left")

            };
            (0,requestLogs/* reuqestLog */.$)('SaleToken.saleInfo', 'over', res[0]);
            _context.next = 31;
            break;

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](3);
            res[1] = (0,errorHandler/* getErrorMsg */.a)(_context.t0, 'SaleToken.saleInfo');

          case 31:
            return _context.abrupt("return", res);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 28]]);
  }));

  return function fetchSaleInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

var fetchAccountInfo = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(params) {
    var res, chain, wallet, account, contract, ret, userInfo, tokensUserAmount, tokensDecimals, saleVolume, tokens, userBuyTokenAmount, userContribution, userContributionByToken;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = [null, null];
            _context2.prev = 1;
            chain = params.chain, wallet = params.wallet;
            account = '0x9800e60b74289a46a3fc6c2b57bae4d0549413bd'; // wallet.account;

            if (!wallet.isConnected) account = addresses/* AddressZero */.d;
            contract = (0,contract_contract/* getContract */.uN)(chain.id, 'ReadOnlyOTAuction');
            (0,requestLogs/* reuqestLog */.$)('SaleToken.getAccountInfo', 'start', account);
            _context2.next = 9;
            return contract.getAccountInfo(account);

          case 9:
            ret = _context2.sent;
            _context2.next = 12;
            return contract.userPosition(account);

          case 12:
            userInfo = _context2.sent;
            (0,requestLogs/* reuqestLog */.$)('SaleToken.getAccountInfo', 'over', ret, userInfo);
            tokensUserAmount = ret.contributedAmount, tokensDecimals = ret.tokensDecimals, saleVolume = ret.totalReceived, tokens = ret.tokens, userBuyTokenAmount = ret.boughtOTAmount;
            (0,requestLogs/* reuqestLog */.$)('SaleToken.getAccountInfo', 'over', tokensUserAmount.map(function (item) {
              return item.toString();
            })); // TODO hardCode 1e9 totalSupply ,10% for ifo;

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
              userContributionByToken: userContributionByToken,
              isWithdraw: userInfo.claimed
            };
            (0,requestLogs/* reuqestLog */.$)('SaleToken.getAccountInfo', 'over', res[0]);
            _context2.next = 25;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](1);
            res[1] = (0,errorHandler/* getErrorMsg */.a)(_context2.t0, 'SaleToken.getAccountInfo');

          case 25:
            return _context2.abrupt("return", res);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 22]]);
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
            contract = (0,contract_contract/* getContract */.uN)(chain.id, 'OTAuction', false, wallet.name);
            console.log(wallet, 'walll');
            _context3.next = 8;
            return approve(chain, wallet, inToken.id, contract.address, bignumber/* BigNumber.from */.O$.from(_amountRaw));

          case 8:
            (0,requestLogs/* reuqestLog */.$)('SaleToken.buyToken', 'start', inToken.id, _amountRaw);
            _context3.next = 11;
            return contract.buyOT(inToken.id, _amountRaw);

          case 11:
            ret = _context3.sent;
            _context3.next = 14;
            return ret.wait();

          case 14:
            (0,requestLogs/* reuqestLog */.$)('SaleToken.buyToken', 'over', ret);
            res[0] = ret;
            _context3.next = 21;
            break;

          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](1);
            res[1] = (0,errorHandler/* getErrorMsg */.a)(_context3.t0, 'SaleToken.buyToken');

          case 21:
            return _context3.abrupt("return", res);

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 18]]);
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
            contract = (0,contract_contract/* getContract */.uN)(chain.id, 'OTAuction', false, wallet.name);
            (0,requestLogs/* reuqestLog */.$)('SaleToken.withdrawToken', 'start');
            _context4.next = 7;
            return contract.claimOT();

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

var withdrawCoin = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(params) {
    var res;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res = [null, null];

            try {// const { chain, wallet, } = params;
              // // const contract = getContract(chain.id, 'OTAuction', false, wallet.name)
              // reuqestLog('SaleToken.withdrawProceeds', 'start')
              // const ret = await contract._allowClaim();
              // await ret.wait();
              // reuqestLog('SaleToken.withdrawProceeds', 'over', ret)
              // res[0] = ret
            } catch (err) {
              res[1] = getErrorMsg(err, 'SaleToken.withdrawProceeds');
            }

            return _context5.abrupt("return", res);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function withdrawCoin(_x5) {
    return _ref5.apply(this, arguments);
  };
}()));


// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./src/assets/svg/ot.svg
var ot = __webpack_require__(37373);
// EXTERNAL MODULE: ./src/hooks/useIntervalAsync.ts
var useIntervalAsync = __webpack_require__(49395);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
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
var ButtonLayout = {
  xl: 3,
  md: 3,
  sm: 24,
  xs: 24
};
var ProgressWrapLayout = {
  xl: 21,
  md: 21,
  sm: 24,
  xs: 24
};
var OTInfo = [{
  key: 'ifo_card1_label1',
  title: 'IFO',
  value: '10,000,000(10%)'
}, {
  key: 'ifo_card1_label2',
  title: 'Liquidity',
  value: '2,500,000(2.5%)'
}, {
  key: 'ifo_card1_label3',
  title: 'Team',
  value: '20,000,000(20%)'
}, {
  key: 'ifo_card1_label4',
  title: 'Liquidity incentive',
  value: '50,000,000(50%)'
}, {
  key: 'ifo_card1_label5',
  title: 'Treasury',
  value: '17,500,000(17.5%)'
}, {
  key: 'ifo_card1_label6',
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

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useState = (0,react.useState)([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react.useState)(true),
      _useState4 = slicedToArray_default()(_useState3, 2),
      ChartLoading = _useState4[0],
      setChartLoading = _useState4[1];

  var _useState5 = (0,react.useState)(),
      _useState6 = slicedToArray_default()(_useState5, 2),
      saleInfo = _useState6[0],
      setSaleInfo = _useState6[1];

  var _useState7 = (0,react.useState)(),
      _useState8 = slicedToArray_default()(_useState7, 2),
      accountInfo = _useState8[0],
      setAccountInfo = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      inToken = _useState10[0],
      setInToken = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      inAmount = _useState12[0],
      setInAmount = _useState12[1];

  var _useState13 = (0,react.useState)(false),
      _useState14 = slicedToArray_default()(_useState13, 2),
      submiting = _useState14[0],
      setSubmiting = _useState14[1];

  var _useState15 = (0,react.useState)(false),
      _useState16 = slicedToArray_default()(_useState15, 2),
      claiming = _useState16[0],
      setClaiming = _useState16[1];

  var _useState17 = (0,react.useState)(false),
      _useState18 = slicedToArray_default()(_useState17, 2),
      ShowBuyModal = _useState18[0],
      setShowBuyModal = _useState18[1];

  var _useState19 = (0,react.useState)(),
      _useState20 = slicedToArray_default()(_useState19, 2),
      succRet = _useState20[0],
      setSuccRet = _useState20[1];

  var init = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var _yield$Promise$all, _yield$Promise$all2, _yield$Promise$all2$, _ret, _yield$Promise$all2$2, _account;

    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(chain && wallet)) {
              _context.next = 11;
              break;
            }

            _context.next = 3;
            return Promise.all([fetchSaleInfo({
              chain: chain,
              wallet: wallet
            }), fetchAccountInfo({
              chain: chain,
              wallet: wallet
            })]);

          case 3:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = slicedToArray_default()(_yield$Promise$all, 2);
            _yield$Promise$all2$ = slicedToArray_default()(_yield$Promise$all2[0], 1);
            _ret = _yield$Promise$all2$[0];
            _yield$Promise$all2$2 = slicedToArray_default()(_yield$Promise$all2[1], 1);
            _account = _yield$Promise$all2$2[0];

            if (_ret) {
              setSaleInfo(_ret);
            }

            if (_account) setAccountInfo(_account);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [chain, wallet]);
  var updata = (0,useIntervalAsync/* default */.Z)(init, 30000); // useEffect(() => {
  //     asyncFetch();
  // }, [chain, saleInfo])

  var maxPrice = (0,react.useMemo)(function () {
    if (saleInfo) {
      return saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.maxPrice;
    } else {
      return 0;
    }
  }, [saleInfo]);
  var inTokenList = (0,react.useMemo)(function () {
    if (accountInfo && swapTokenList.length > 0) {
      return swapTokenList.filter(function (item) {
        return accountInfo.tokens.includes(item.id.toLowerCase());
      });
    }

    return [];
  }, [accountInfo, swapTokenList]);
  (0,react.useEffect)(function () {
    if (inTokenList.length && !inToken) {
      var _find = inTokenList.find(function (item) {
        return item.symbol === 'USDC';
      });

      if (_find) {
        setInToken(objectSpread2_default()(objectSpread2_default()({}, _find), {}, {
          userOraclePrice: '1'
        }));
      } else {
        setInToken(objectSpread2_default()(objectSpread2_default()({}, inTokenList[0]), {}, {
          userOraclePrice: '1'
        }));
      }
    }

    if (inTokenList.length && inToken) {
      var _find2 = inTokenList.find(function (item) {
        return item.id === inToken.id;
      });

      if (_find2) {
        setInToken(objectSpread2_default()(objectSpread2_default()({}, _find2), {}, {
          userOraclePrice: '1'
        }));
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
    if (inAmount && inToken && saleInfo) {
      return (Number(inAmount) * Number(inToken.userOraclePrice) / Number(saleInfo.currentPrice)).toFixed(6);
    }
  }, [inAmount, inToken, saleInfo]); // const asyncFetch = async () => {
  //     if (chain) {
  //         const params = { chain };
  //         if (saleInfo?.isSaleEnd) {
  //             params.endAt = saleInfo.endAt / 1000
  //         }
  //         const res = await fetchBuytoken(params);
  //         setData(res)
  //         setChartLoading(false)
  //     }
  // };
  // const config = useMemo(() => {
  //     return {
  //         data,
  //         // loading: data.length === 0,
  //         xField: 'date',
  //         yField: 'price',
  //         height: 293,
  //         xAxis: {
  //             range: [0, 1],
  //             tickCount: 5,
  //             grid: null,
  //             line: null,
  //             tickLine: null
  //         },
  //         yAxis: {
  //             position: 'right',
  //             grid: null,
  //             // min: 0,
  //             // max: 0.4,
  //         },
  //         color: colorPrimary,
  //         smooth: true,
  //         line: {
  //             color: '#03CDC1',
  //         },
  //         appear: {
  //             animation: 'wave-in', // 动画效果
  //             duration: 5000,  // 动画执行时间
  //         },
  //         areaStyle: () => {
  //             return {
  //                 fill: 'l(270) 0:rgba(3, 205, 193, 0.15) 0.3:#40d7cd 1:#40d7cd ,',
  //             };
  //         },
  //     }
  // }, [data, colorPrimary]);

  var minValue = (0,react.useMemo)(function () {
    return saleInfo && Number(saleInfo.saleBalanceUSD) < 10 ? Number(saleInfo.saleBalanceUSD) : 10;
  }, [saleInfo]);

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
                _context2.next = 14;
                break;
              }

              if (error.error.indexOf('SaleVolume must lte CapMarketValue') > -1) {
                error.error = formatMessage({
                  id: 'ifo_error1'
                }, {
                  balance: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.saleBalanceUSD
                }); // `Only $${saleInfo?.saleBalanceUSD} OT left for sale`
              }

              message/* default.error */.ZP.error(error.error);
              return _context2.abrupt("return");

            case 14:
              updata(); // message.success('SWAP SUCCESS' + ret?.hash)

              setSuccRet({
                type: 'swap',
                show: true,
                onClose: function onClose() {
                  setSuccRet(undefined);
                },
                title: formatMessage({
                  id: 'ifo_modal_succ'
                }),
                hash: (ret === null || ret === void 0 ? void 0 : ret.hash) || '',
                okText: formatMessage({
                  id: 'ifo_modal_close'
                })
              });

            case 16:
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

  var showBuyMadal = function showBuyMadal() {
    setShowBuyModal(true);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "ifoPage animation-slide-bottom",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
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
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: formatMessage({
            id: 'ifo_card1_title'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
          style: {
            fontSize: 22,
            color: colorPrimary
          },
          underline: true,
          href: "https://onchaintrade.gitbook.io/ot/tokenomics/tokenomics-arbitrum/ifo",
          target: '_blank',
          children: formatMessage({
            id: 'ifo_card1_title_link'
          })
        })]
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
        className: xs ? "desc xs" : "desc",
        gutter: [12, 12],
        children: OTInfo.map(function (_ref5) {
          var title = _ref5.title,
              value = _ref5.value,
              key = _ref5.key;
          return /*#__PURE__*/(0,react.createElement)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, PalnLayout), {}, {
            key: title
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
            title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              children: formatMessage({
                id: key,
                defaultMessage: title
              })
            }),
            value: value
          }));
        })
      })
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
          paddingBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          children: [formatMessage({
            id: 'ifo_card2_title'
          }), "  ", saleInfo && (saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.isSaleEnd) && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: ["(", formatMessage({
              id: 'ifo_card2_title_ended'
            }), ")"]
          })]
        })
      }),
      loading: !saleInfo,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "plan",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
          style: {
            marginBottom: 14,
            textAlign: 'center'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
            style: {
              fontSize: 16
            },
            children: formatMessage({
              id: 'ifo_card2_desc'
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        className: xs ? "desc xs" : "desc",
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressWrapLayout), {}, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            className: xs ? "desc xs" : "desc",
            gutter: [12, 12],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
              xl: 4,
              children: saleInfo !== null && saleInfo !== void 0 && saleInfo.isSaleStart ? /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  children: formatMessage({
                    id: 'ifo_card2_label1'
                  })
                }),
                value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.startAt
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Countdown, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  children: formatMessage({
                    id: 'ifo_card2_label1_not_start'
                  })
                }),
                value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.startAtTime,
                format: "D[D]:H[hrs]:m[m]:s[s]"
              })
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
              xl: 4,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Countdown, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  children: formatMessage({
                    id: 'ifo_card2_label2'
                  })
                }),
                value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.endAt,
                format: "D[D]:H[hrs]:m[m]"
              })
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
              xl: 3,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  children: formatMessage({
                    id: 'ifo_card2_label3'
                  })
                }),
                value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.saleVolume,
                prefix: '$',
                precision: 2
              })
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
              xl: 3,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  children: formatMessage({
                    id: 'ifo_card2_label4'
                  })
                }),
                value: saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.currentPrice,
                prefix: '$'
              })
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  children: formatMessage({
                    id: 'ifo_card2_label5'
                  })
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
              children: accountInfo && /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                content: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                  children: contribution.map(function (item) {
                    return /*#__PURE__*/(0,jsx_runtime.jsxs)(tag, {
                      color: colorPrimary,
                      children: [item.symbol, ":", item.amount]
                    }, item.id);
                  })
                }),
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
                  title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                    children: formatMessage({
                      id: 'ifo_card2_label6'
                    })
                  }),
                  value: accountInfo.userContribution,
                  prefix: "$",
                  precision: 2
                })
              })
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ProgressLayout), {}, {
              xl: 4,
              children: accountInfo && /*#__PURE__*/(0,jsx_runtime.jsx)(statistic/* default */.Z, {
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  children: formatMessage({
                    id: 'ifo_card2_label7'
                  })
                }),
                value: accountInfo.userContribution / (saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.currentPrice),
                precision: 2,
                suffix: "OT"
              })
            }))]
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, ButtonLayout), {}, {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
            gutter: [14, 14],
            children: saleInfo && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: !saleInfo.isSaleEnd ? /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                span: "24",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
                  type: "primary",
                  disabled: !saleInfo.isSaleStart || wallet && !wallet.isConnected || wallet && !wallet.isCorrectChain,
                  onClick: showBuyMadal,
                  children: formatMessage({
                    id: 'ifo_buy_title'
                  })
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                span: "24",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
                  type: "primary",
                  disabled: !(saleInfo !== null && saleInfo !== void 0 && saleInfo.isSaleEnd) || accountInfo && accountInfo.userContribution === 0 || (accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.isWithdraw) || wallet && !wallet.isConnected || wallet && !wallet.isCorrectChain,
                  onClick: handleClaimOT,
                  loading: claiming,
                  children: accountInfo !== null && accountInfo !== void 0 && accountInfo.isWithdraw ? formatMessage({
                    id: 'ifo_card2_btn_claimed'
                  }) : formatMessage({
                    id: 'ifo_card2_btn'
                  })
                })
              })
            })
          })
        }))]
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
        padding: '15px 20px'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          marginBottom: 0
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 22
          },
          strong: true,
          children: formatMessage({
            id: 'ifo_card3_strong'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16
          },
          children: ["\xA0 \xA0", formatMessage({
            id: 'ifo_card3_normal'
          })]
        })]
      })
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
          children: formatMessage({
            id: 'ifo_card4_title'
          })
        })
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
        style: {
          marginBottom: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Paragraph */.Z.Paragraph, {
            children: [formatMessage({
              id: 'ifo_card4_text1_pre'
            }), " \xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
              style: {
                color: colorPrimary
              },
              underline: true,
              href: "https://onchaintrade.gitbook.io/ot/tokenomics/tokenomics-arbitrum/ifo",
              target: '_blank',
              children: formatMessage({
                id: 'ifo_card4_text1_link'
              })
            }), "\xA0 ", formatMessage({
              id: 'ifo_card4_text1_suf'
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: formatMessage({
              id: 'ifo_card4_text2'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: formatMessage({
              id: 'ifo_card4_text3'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: formatMessage({
              id: 'ifo_card4_text4'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Paragraph */.Z.Paragraph, {
            children: formatMessage({
              id: 'ifo_card4_text5'
            })
          })]
        })
      })
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet)), /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: ShowBuyModal,
      onClose: function onClose() {
        return setShowBuyModal(false);
      },
      title: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "buyTitle linkColor",
        style: {
          display: 'flex'
        },
        children: formatMessage({
          id: 'ifo_buy_title'
        })
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "BuyOTWrap",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
          spinning: submiting,
          className: "BuyOTWrap",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
            amount: inAmount,
            onAmountChange: function onAmountChange(value) {
              Number(value) <= minValue ? setInAmount(minValue) : setInAmount(value);
            },
            onTokenChange: function onTokenChange(token) {
              setInToken(objectSpread2_default()(objectSpread2_default()({}, token), {}, {
                userOraclePrice: '1'
              }));
            },
            currentToken: inToken,
            tokenList: inTokenList,
            minValue: minValue,
            header: inToken ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "label",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                style: {
                  fontSize: 12,
                  color: colorTextSecondary
                },
                children: [formatMessage({
                  id: 'ifo_buy_label_pay'
                }), "$", inAmountUSD]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                style: {
                  fontSize: 12,
                  color: colorTextSecondary
                },
                onClick: function onClick() {
                  Number(inToken.userTokenBalance) < minValue ? setInAmount(minValue) : setInAmount(inToken.userTokenBalance);
                },
                children: [formatMessage({
                  id: 'ifo_buy_label_bal'
                }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
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
              children: formatMessage({
                id: 'ifo_buy_label'
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              onClick: function onClick() {},
              children: [formatMessage({
                id: 'ifo_buy_label_bal'
              }), " ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                style: {
                  color: colorPrimary
                },
                children: ["$", saleInfo === null || saleInfo === void 0 ? void 0 : saleInfo.saleBalanceUSD]
              })]
            })]
          }) : '')), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "btnWrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
              conditions: [{
                condition: !!(saleInfo && saleInfo.isSaleEnd),
                text: formatMessage({
                  id: 'ifo_buy_ended'
                }),
                type: 'primary',
                danger: true,
                onClick: function onClick() {}
              }],
              onClick: handleBuyOT,
              loading: submiting,
              children: formatMessage({
                id: 'ifo_buy_btn'
              })
            })
          })]
        })
      })
    })]
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


/***/ }),

/***/ 74627:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(83062);
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

/***/ })

}]);