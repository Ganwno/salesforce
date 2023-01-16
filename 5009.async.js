"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5009],{

/***/ 98082:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 92820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92820);

/* harmony default export */ __webpack_exports__["Z"] = (_grid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

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
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(48054);
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