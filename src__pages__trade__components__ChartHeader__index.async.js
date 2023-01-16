"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4800],{

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

/***/ 15746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21584);

/* harmony default export */ __webpack_exports__["Z"] = (_grid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 99134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const RowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["Z"] = (RowContext);

/***/ }),

/***/ 21584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 6999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ })

}]);