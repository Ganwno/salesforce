(self["webpackChunk"] = self["webpackChunk"] || []).push([[48],{

/***/ 94315:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HomePage; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(75081);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(4393);
;// CONCATENATED MODULE: ./src/pages/earn/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(83062);
// EXTERNAL MODULE: ./node_modules/format-number/index.js
var format_number = __webpack_require__(10793);
var format_number_default = /*#__PURE__*/__webpack_require__.n(format_number);
;// CONCATENATED MODULE: ./src/components/FormatNumber/index.ts


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
  var formatter = format_number_default()({
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
;// CONCATENATED MODULE: ./src/pages/earn/components/FeeDistribution/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var FeeDistributionmodules = ({});
;// CONCATENATED MODULE: ./src/pages/earn/components/FeeDistribution/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 7 modules
var collapse = __webpack_require__(15045);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 120 modules
var table = __webpack_require__(15914);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/responsiveObserver.js
var _util_responsiveObserver = __webpack_require__(74443);
;// CONCATENATED MODULE: ./node_modules/antd/es/descriptions/Item.js
const DescriptionsItem = _ref => {
  let {
    children
  } = _ref;
  return children;
};
/* harmony default export */ var Item = (DescriptionsItem);
;// CONCATENATED MODULE: ./node_modules/antd/es/descriptions/Cell.js


function notEmpty(val) {
  return val !== undefined && val !== null;
}
const Cell = _ref => {
  let {
    itemPrefixCls,
    component,
    span,
    className,
    style,
    labelStyle,
    contentStyle,
    bordered,
    label,
    content,
    colon
  } = _ref;
  const Component = component;
  if (bordered) {
    return /*#__PURE__*/react.createElement(Component, {
      className: classnames_default()({
        [`${itemPrefixCls}-item-label`]: notEmpty(label),
        [`${itemPrefixCls}-item-content`]: notEmpty(content)
      }, className),
      style: style,
      colSpan: span
    }, notEmpty(label) && /*#__PURE__*/react.createElement("span", {
      style: labelStyle
    }, label), notEmpty(content) && /*#__PURE__*/react.createElement("span", {
      style: contentStyle
    }, content));
  }
  return /*#__PURE__*/react.createElement(Component, {
    className: classnames_default()(`${itemPrefixCls}-item`, className),
    style: style,
    colSpan: span
  }, /*#__PURE__*/react.createElement("div", {
    className: `${itemPrefixCls}-item-container`
  }, (label || label === 0) && /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(`${itemPrefixCls}-item-label`, {
      [`${itemPrefixCls}-item-no-colon`]: !colon
    }),
    style: labelStyle
  }, label), (content || content === 0) && /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(`${itemPrefixCls}-item-content`),
    style: contentStyle
  }, content)));
};
/* harmony default export */ var descriptions_Cell = (Cell);
;// CONCATENATED MODULE: ./node_modules/antd/es/descriptions/Row.js



function renderCells(items, _ref, _ref2) {
  let {
    colon,
    prefixCls,
    bordered
  } = _ref;
  let {
    component,
    type,
    showLabel,
    showContent,
    labelStyle: rootLabelStyle,
    contentStyle: rootContentStyle
  } = _ref2;
  return items.map((_ref3, index) => {
    let {
      props: {
        label,
        children,
        prefixCls: itemPrefixCls = prefixCls,
        className,
        style,
        labelStyle,
        contentStyle,
        span = 1
      },
      key
    } = _ref3;
    if (typeof component === 'string') {
      return /*#__PURE__*/react.createElement(descriptions_Cell, {
        key: `${type}-${key || index}`,
        className: className,
        style: style,
        labelStyle: Object.assign(Object.assign({}, rootLabelStyle), labelStyle),
        contentStyle: Object.assign(Object.assign({}, rootContentStyle), contentStyle),
        span: span,
        colon: colon,
        component: component,
        itemPrefixCls: itemPrefixCls,
        bordered: bordered,
        label: showLabel ? label : null,
        content: showContent ? children : null
      });
    }
    return [/*#__PURE__*/react.createElement(descriptions_Cell, {
      key: `label-${key || index}`,
      className: className,
      style: Object.assign(Object.assign(Object.assign({}, rootLabelStyle), style), labelStyle),
      span: 1,
      colon: colon,
      component: component[0],
      itemPrefixCls: itemPrefixCls,
      bordered: bordered,
      label: label
    }), /*#__PURE__*/react.createElement(descriptions_Cell, {
      key: `content-${key || index}`,
      className: className,
      style: Object.assign(Object.assign(Object.assign({}, rootContentStyle), style), contentStyle),
      span: span * 2 - 1,
      component: component[1],
      itemPrefixCls: itemPrefixCls,
      bordered: bordered,
      content: children
    })];
  });
}
const Row_Row = props => {
  const descContext = react.useContext(DescriptionsContext);
  const {
    prefixCls,
    vertical,
    row,
    index,
    bordered
  } = props;
  if (vertical) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("tr", {
      key: `label-${index}`,
      className: `${prefixCls}-row`
    }, renderCells(row, props, Object.assign({
      component: 'th',
      type: 'label',
      showLabel: true
    }, descContext))), /*#__PURE__*/react.createElement("tr", {
      key: `content-${index}`,
      className: `${prefixCls}-row`
    }, renderCells(row, props, Object.assign({
      component: 'td',
      type: 'content',
      showContent: true
    }, descContext))));
  }
  return /*#__PURE__*/react.createElement("tr", {
    key: index,
    className: `${prefixCls}-row`
  }, renderCells(row, props, Object.assign({
    component: bordered ? ['th', 'td'] : 'td',
    type: 'item',
    showLabel: true,
    showContent: true
  }, descContext)));
};
/* harmony default export */ var descriptions_Row = (Row_Row);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/descriptions/style/index.js


const genBorderedStyle = token => {
  const {
    componentCls,
    descriptionsSmallPadding,
    descriptionsDefaultPadding,
    descriptionsMiddlePadding,
    descriptionsBg
  } = token;
  return {
    [`&${componentCls}-bordered`]: {
      [`${componentCls}-view`]: {
        border: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
        '> table': {
          tableLayout: 'auto',
          borderCollapse: 'collapse'
        }
      },
      [`${componentCls}-item-label, ${componentCls}-item-content`]: {
        padding: descriptionsDefaultPadding,
        borderInlineEnd: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
        '&:last-child': {
          borderInlineEnd: 'none'
        }
      },
      [`${componentCls}-item-label`]: {
        backgroundColor: descriptionsBg,
        '&::after': {
          display: 'none'
        }
      },
      [`${componentCls}-row`]: {
        borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
        '&:last-child': {
          borderBottom: 'none'
        }
      },
      [`&${componentCls}-middle`]: {
        [`${componentCls}-item-label, ${componentCls}-item-content`]: {
          padding: descriptionsMiddlePadding
        }
      },
      [`&${componentCls}-small`]: {
        [`${componentCls}-item-label, ${componentCls}-item-content`]: {
          padding: descriptionsSmallPadding
        }
      }
    }
  };
};
const genDescriptionStyles = token => {
  const {
    componentCls,
    descriptionsExtraColor,
    descriptionItemPaddingBottom,
    descriptionsItemLabelColonMarginRight,
    descriptionsItemLabelColonMarginLeft,
    descriptionsTitleMarginBottom
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), genBorderedStyle(token)), {
      [`&-rtl`]: {
        direction: 'rtl'
      },
      [`${componentCls}-header`]: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: descriptionsTitleMarginBottom
      },
      [`${componentCls}-title`]: Object.assign(Object.assign({}, style/* textEllipsis */.vS), {
        flex: 'auto',
        color: token.colorText,
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeLG,
        lineHeight: token.lineHeightLG
      }),
      [`${componentCls}-extra`]: {
        marginInlineStart: 'auto',
        color: descriptionsExtraColor,
        fontSize: token.fontSize
      },
      [`${componentCls}-view`]: {
        width: '100%',
        borderRadius: token.borderRadiusLG,
        table: {
          width: '100%',
          tableLayout: 'fixed'
        }
      },
      [`${componentCls}-row`]: {
        '> th, > td': {
          paddingBottom: descriptionItemPaddingBottom
        },
        '&:last-child': {
          borderBottom: 'none'
        }
      },
      [`${componentCls}-item-label`]: {
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        textAlign: `start`,
        '&::after': {
          content: '":"',
          position: 'relative',
          top: -0.5,
          marginInline: `${descriptionsItemLabelColonMarginLeft}px ${descriptionsItemLabelColonMarginRight}px`
        },
        [`&${componentCls}-item-no-colon::after`]: {
          content: '""'
        }
      },
      [`${componentCls}-item-no-label`]: {
        '&::after': {
          margin: 0,
          content: '""'
        }
      },
      [`${componentCls}-item-content`]: {
        display: 'table-cell',
        flex: 1,
        color: token.colorText,
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        wordBreak: 'break-word',
        overflowWrap: 'break-word'
      },
      [`${componentCls}-item`]: {
        paddingBottom: 0,
        verticalAlign: 'top',
        '&-container': {
          display: 'flex',
          [`${componentCls}-item-label`]: {
            display: 'inline-flex',
            alignItems: 'baseline'
          },
          [`${componentCls}-item-content`]: {
            display: 'inline-flex',
            alignItems: 'baseline'
          }
        }
      },
      '&-middle': {
        [`${componentCls}-row`]: {
          '> th, > td': {
            paddingBottom: token.paddingSM
          }
        }
      },
      '&-small': {
        [`${componentCls}-row`]: {
          '> th, > td': {
            paddingBottom: token.paddingXS
          }
        }
      }
    })
  };
};
// ============================== Export ==============================
/* harmony default export */ var descriptions_style = ((0,genComponentStyleHook/* default */.Z)('Descriptions', token => {
  const descriptionsBg = token.colorFillAlter;
  const descriptionsTitleMarginBottom = token.fontSizeSM * token.lineHeightSM;
  const descriptionsExtraColor = token.colorText;
  const descriptionsSmallPadding = `${token.paddingXS}px ${token.padding}px`;
  const descriptionsDefaultPadding = `${token.padding}px ${token.paddingLG}px`;
  const descriptionsMiddlePadding = `${token.paddingSM}px ${token.paddingLG}px`;
  const descriptionItemPaddingBottom = token.padding;
  const descriptionsItemLabelColonMarginRight = token.marginXS;
  const descriptionsItemLabelColonMarginLeft = token.marginXXS / 2;
  const descriptionToken = (0,statistic/* merge */.TS)(token, {
    descriptionsBg,
    descriptionsTitleMarginBottom,
    descriptionsExtraColor,
    descriptionItemPaddingBottom,
    descriptionsSmallPadding,
    descriptionsDefaultPadding,
    descriptionsMiddlePadding,
    descriptionsItemLabelColonMarginRight,
    descriptionsItemLabelColonMarginLeft
  });
  return [genDescriptionStyles(descriptionToken)];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/descriptions/index.js
/* eslint-disable react/no-array-index-key */










const DescriptionsContext = /*#__PURE__*/react.createContext({});
const DEFAULT_COLUMN_MAP = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};
function getColumn(column, screens) {
  if (typeof column === 'number') {
    return column;
  }
  if (typeof column === 'object') {
    for (let i = 0; i < _util_responsiveObserver/* responsiveArray.length */.c.length; i++) {
      const breakpoint = _util_responsiveObserver/* responsiveArray */.c[i];
      if (screens[breakpoint] && column[breakpoint] !== undefined) {
        return column[breakpoint] || DEFAULT_COLUMN_MAP[breakpoint];
      }
    }
  }
  return 3;
}
function getFilledItem(node, span, rowRestCol) {
  let clone = node;
  if (span === undefined || span > rowRestCol) {
    clone = (0,reactNode/* cloneElement */.Tm)(node, {
      span: rowRestCol
    });
     false ? 0 : void 0;
  }
  return clone;
}
function getRows(children, column) {
  const childNodes = (0,toArray/* default */.Z)(children).filter(n => n);
  const rows = [];
  let tmpRow = [];
  let rowRestCol = column;
  childNodes.forEach((node, index) => {
    var _a;
    const span = (_a = node.props) === null || _a === void 0 ? void 0 : _a.span;
    const mergedSpan = span || 1;
    // Additional handle last one
    if (index === childNodes.length - 1) {
      tmpRow.push(getFilledItem(node, span, rowRestCol));
      rows.push(tmpRow);
      return;
    }
    if (mergedSpan < rowRestCol) {
      rowRestCol -= mergedSpan;
      tmpRow.push(node);
    } else {
      tmpRow.push(getFilledItem(node, mergedSpan, rowRestCol));
      rows.push(tmpRow);
      rowRestCol = column;
      tmpRow = [];
    }
  });
  return rows;
}
function Descriptions(_ref) {
  let {
    prefixCls: customizePrefixCls,
    title,
    extra,
    column = DEFAULT_COLUMN_MAP,
    colon = true,
    bordered,
    layout,
    children,
    className,
    style,
    size,
    labelStyle,
    contentStyle
  } = _ref;
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('descriptions', customizePrefixCls);
  const [screens, setScreens] = react.useState({});
  const mergedColumn = getColumn(column, screens);
  const [wrapSSR, hashId] = descriptions_style(prefixCls);
  const responsiveObserver = (0,_util_responsiveObserver/* default */.Z)();
  // Responsive
  react.useEffect(() => {
    const token = responsiveObserver.subscribe(newScreens => {
      if (typeof column !== 'object') {
        return;
      }
      setScreens(newScreens);
    });
    return () => {
      responsiveObserver.unsubscribe(token);
    };
  }, []);
  // Children
  const rows = getRows(children, mergedColumn);
  const contextValue = react.useMemo(() => ({
    labelStyle,
    contentStyle
  }), [labelStyle, contentStyle]);
  return wrapSSR( /*#__PURE__*/react.createElement(DescriptionsContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(prefixCls, {
      [`${prefixCls}-${size}`]: size && size !== 'default',
      [`${prefixCls}-bordered`]: !!bordered,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, hashId),
    style: style
  }, (title || extra) && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-header`
  }, title && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-title`
  }, title), extra && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-extra`
  }, extra)), /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-view`
  }, /*#__PURE__*/react.createElement("table", null, /*#__PURE__*/react.createElement("tbody", null, rows.map((row, index) => /*#__PURE__*/react.createElement(descriptions_Row, {
    key: index,
    index: index,
    colon: colon,
    prefixCls: prefixCls,
    vertical: layout === 'vertical',
    bordered: bordered,
    row: row
  }))))))));
}
Descriptions.Item = Item;
/* harmony default export */ var descriptions = (Descriptions);
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
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(descriptions, {
                column: 1,
                contentStyle: {
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'row-reverse'
                },
                children: desc.map(function (col, j) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(descriptions.Item, {
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
// EXTERNAL MODULE: ./src/assets/svg/ot.svg
var ot = __webpack_require__(37373);
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13769);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 3 modules
var segmented = __webpack_require__(92783);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/services/contract/index.ts + 5 modules
var contract = __webpack_require__(95575);
;// CONCATENATED MODULE: ./src/pages/earn/components/StakeOT/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
;// CONCATENATED MODULE: ./src/pages/earn/components/StakeOT/index.tsx





var _excluded = ["defaultAction"],
    _excluded2 = ["show", "onClose"];












var StakeOT_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var AddContent = function AddContent(_ref) {
  var defaultStake = _ref.currentStake,
      actionType = _ref.actionType;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      updateStake = _useModel.updateStake;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary,
      fontSizeSM = _theme$useToken$token.fontSizeSM,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      borderRadius = _theme$useToken$token.borderRadius,
      paddingSM = _theme$useToken$token.paddingSM;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

  if (!chain || !wallet) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});

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

  var _useState7 = (0,react.useState)(defaultStake),
      _useState8 = slicedToArray_default()(_useState7, 2),
      currentStake = _useState8[0],
      setCurrentStake = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      data = _useState10[0],
      setData = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      succRet = _useState12[0],
      setSuccRet = _useState12[1];

  var maxRemovable = (0,react.useMemo)(function () {
    if (actionType === 'remove') {
      return Number(currentStake.userAccountStaked);
    } else {
      return Number(currentStake.userTokenBalance);
    }
  }, [actionType, currentStake]);
  (0,react.useEffect)(function () {
    // const [_data, err] = formatEditPosition({
    //     isAdd: actionType === 'add',
    //     currentStake,
    //     amountIn: String(amountIn)
    // })
    // if (err) {
    //     console.log(err.error)
    //     setErrorMsg(err.error);
    //     return
    // }
    // setData(_data)
    setErrorMsg('');
  }, [currentStake, amountIn]);

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _yield$otStake, _yield$otStake2, res, error, _yield$otUnstake, _yield$otUnstake2, _res, _error;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSubmiting(true);

              if (!(actionType === 'add')) {
                _context.next = 15;
                break;
              }

              _context.next = 4;
              return (0,contract/* otStake */.i$)({
                chain: chain,
                wallet: wallet,
                stakeItem: currentStake,
                amountIn: amountIn
              });

            case 4:
              _yield$otStake = _context.sent;
              _yield$otStake2 = slicedToArray_default()(_yield$otStake, 2);
              res = _yield$otStake2[0];
              error = _yield$otStake2[1];

              if (!error) {
                _context.next = 12;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 12:
              // message.success('add' + res.hash)
              if (res) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'addMargin',
                  title: 'Stake Success',
                  hash: res.hash,
                  okText: 'Close'
                });
              }

              _context.next = 26;
              break;

            case 15:
              _context.next = 17;
              return (0,contract/* otUnstake */.Oe)({
                chain: chain,
                wallet: wallet,
                stakeItem: currentStake,
                amountIn: amountIn
              });

            case 17:
              _yield$otUnstake = _context.sent;
              _yield$otUnstake2 = slicedToArray_default()(_yield$otUnstake, 2);
              _res = _yield$otUnstake2[0];
              _error = _yield$otUnstake2[1];

              if (!_error) {
                _context.next = 25;
                break;
              }

              message/* default.error */.ZP.error(_error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 25:
              if (_res) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'removeMargin',
                  title: 'Unstake Success',
                  hash: _res.hash,
                  okText: 'Close'
                });
              } // message.success('remove' + res.hash)


            case 26:
              _context.next = 28;
              return updateStake();

            case 28:
              setSubmiting(false);

            case 29:
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

  var DescItem = function DescItem(_ref3) {
    var label = _ref3.label,
        children = _ref3.children;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      className: "InputCardTip",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 13,
          color: colorTextSecondary
        },
        children: [" ", label]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 13,
          color: colorTextSecondary
        },
        children: [" ", children]
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
    spinning: submiting,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [10, 10],
      className: "hayMarginWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          tokenList: [],
          currentToken: currentStake,
          onTokenChange: function onTokenChange(token) {},
          canSelectToken: false,
          amount: amountIn,
          onAmountChange: changeAmount,
          minValue: 0 // type="lpToken"
          ,
          maxValue: maxRemovable,
          header: actionType === 'add' ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["Balance:\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "linkColor",
                onClick: function onClick() {
                  return changeAmount(maxRemovable);
                },
                children: maxRemovable
              })]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["Staked: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "linkColor",
                children: maxRemovable
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
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
            children: [currentStake.userTotalStaked, " OT token"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Staking APR",
            children: currentStake.apr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Your Staked Position",
            children: [currentStake.userAccountStaked, " OT"]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
          height: 50,
          onClick: handleSubmit,
          conditions: [{
            condition: !!errorMsg,
            text: errorMsg,
            type: 'default',
            onClick: function onClick() {}
          }, {
            condition: !amountIn,
            text: 'Enter Amount',
            type: 'default',
            onClick: function onClick() {}
          }],
          children: actionType === 'add' ? _({
            id: 'stake'
          }) : _({
            id: 'unstake'
          })
        })
      })]
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var Content = function Content(_ref4) {
  var defaultAction = _ref4.defaultAction,
      rest = objectWithoutProperties_default()(_ref4, _excluded);

  var _useState13 = (0,react.useState)(),
      _useState14 = slicedToArray_default()(_useState13, 2),
      actionType = _useState14[0],
      setActionType = _useState14[1];

  (0,react.useEffect)(function () {
    setActionType(defaultAction);
  }, [defaultAction]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [10, 10],
    className: "Stake-Comp",
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
              children: "Stake"
            })
          }),
          value: 'add'
        }, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            className: "SegmentedWrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "Unstake"
            })
          }),
          value: 'remove'
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      style: {
        overflow: 'hidden'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        wrap: false,
        gutter: [20, 20],
        style: {
          transform: "translateX(".concat(actionType === 'add' ? '0' : '-100', "%)"),
          transition: 'transform .4s ease-in-out'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "add"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "remove"
          }))
        })]
      })
    })]
  });
};

var StackAction = function StackAction(_ref5) {
  var show = _ref5.show,
      onClose = _ref5.onClose,
      rest = objectWithoutProperties_default()(_ref5, _excluded2);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: false,
      maskClosable: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, objectSpread2_default()({}, rest))
    })
  });
};

/* harmony default export */ var StakeOT = (StackAction);
;// CONCATENATED MODULE: ./src/pages/earn/components/Withdraw/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/earn/components/Withdraw/index.tsx
















var Withdraw_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

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

var Withdraw_AddContent = function AddContent(_ref2) {
  var current = _ref2.current,
      type = _ref2.type,
      amount = _ref2.amount,
      _onClose = _ref2.onClose,
      curBorrow = _ref2.curBorrow;

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
                lpAddress: current && current.token.liquidity || ''
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
                lpAddress: curBorrow && curBorrow.token.assets.tokenAddress || ''
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
            children: [current.totalStaked, " ", current.token.lpSymbol, " token"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Staking APR",
            children: current.apr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Your Staked Position",
            children: [current.accountStaked, " ", current.token.lpSymbol]
          })]
        })
      }), curBorrow && /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
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
            label: "Total Borrowed",
            children: [curBorrow.totalBorrowed, " ", curBorrow.token.symbol, " token"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Borrow APR",
            children: curBorrow.apr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Your Borrowed ",
            children: [curBorrow.accountBorrowed, " ", curBorrow.token.symbol]
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

var Withdraw_Content = function Content(props) {
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
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Withdraw_AddContent, objectSpread2_default()({}, props))
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
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Withdraw_Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var components_Withdraw = (Withdraw);
;// CONCATENATED MODULE: ./src/pages/earn/components/FeeDistribution/index.tsx

















var FeeDistribution_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
function FeeDistribution() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      feeDistributionList = _useModel.feeDistributionList;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _ = function _(text) {
    return formatMessage({
      id: text
    });
  };

  var _useBreakpoint = FeeDistribution_useBreakpoint(),
      md = _useBreakpoint.md;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      stakeAction = _useState2[0],
      setStakeAction = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      witndrawProps = _useState4[0],
      setWitndrawProp = _useState4[1];

  var columns = [{
    title: _('fee_distribution'),
    dataIndex: 'name',
    key: 'fee_distribution',
    render: function render(text, record, i) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: FeeDistributionmodules.token,
        children: [i === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: ot/* default */.Z
        }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: FeeDistributionmodules.symbol,
          children: text
        })]
      });
    }
  }];
  var data = {
    conf: {
      cardName: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 24,
          fontWeight: 500
        },
        children: _('fee_distribution')
      }),
      rowKey: 'name',
      header: {
        title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16,
            fontWeight: 500
          },
          children: _('fee_distribution')
        }),
        dataIndex: 'name',
        key: 'name',
        render: function render(text, record, i) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center'
            },
            children: [i === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
              src: ot/* default */.Z,
              tokenId: record.name
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 16,
                fontWeight: 500,
                marginLeft: 6
              },
              children: text
            })]
          });
        }
      },
      desc: [{
        title: _('total_staked'),
        dataIndex: 'userTotalStaked',
        key: 'total_staked',
        align: 'right',
        render: function render(text) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
            value: text
          });
        }
      }, {
        title: _('your_stake'),
        dataIndex: 'userAccountStaked',
        key: 'your_stake',
        align: 'right',
        render: function render(text) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
            value: text
          });
        }
      }, {
        title: _('apr'),
        dataIndex: 'apr',
        key: 'apr',
        align: 'right'
      }, {
        title: _('rewards') + (feeDistributionList[0] ? "(".concat(feeDistributionList[0].time, ")") : ''),
        dataIndex: 'userExpectedRewards',
        key: 'userExpectedRewards',
        onCell: function onCell(text, index) {
          if (index === 1) {
            return {
              colSpan: 0
            };
          }
        }
      }],
      edit: [{
        title: _('unstake'),
        dataIndex: 'unstake',
        key: 'unstake',
        align: 'center',
        render: function render(text, record, i) {
          if (i === 1) return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              fontSize: 14,
              "float": 'right'
            },
            children: [_('boost_per'), " ", record.per]
          });
          return record.name === 'OT' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
            type: md ? 'link' : 'primary',
            onClick: function onClick() {
              setStakeAction({
                show: true,
                onClose: function onClose() {
                  setStakeAction(undefined);
                },
                currentStake: record,
                defaultAction: 'remove'
              });
            },
            disabled: parseFloat(record.userAccountStaked) <= 0,
            children: [formatMessage({
              id: 'unstake'
            }), " OT"]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
        },
        onCell: function onCell(text, index) {
          if (index === 1) {
            return {
              colSpan: 4
            };
          }
        }
      }, {
        title: _('stake'),
        dataIndex: 'stake_a',
        key: 'stake_a',
        align: 'center',
        render: function render(text, record, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: record.name === 'OT' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
              type: md ? 'link' : 'primary',
              onClick: function onClick() {
                setStakeAction({
                  show: true,
                  onClose: function onClose() {
                    setStakeAction(undefined);
                  },
                  currentStake: record,
                  defaultAction: 'add'
                });
              },
              children: [formatMessage({
                id: 'stake'
              }), " OT"]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {})
          });
        },
        onCell: function onCell(text, index) {
          if (index === 1) {
            return {
              colSpan: 4
            };
          }
        }
      }, {
        title: _('withdraw'),
        dataIndex: 'userRewards',
        key: 'yield',
        align: 'center',
        render: function render(text, record) {
          return record.name === 'OT' ? parseFloat(text) > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: FeeDistributionmodules.withdraw,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
              title: "in ".concat(record.rewardSymbols.join(', '), "."),
              color: "#03CDC1",
              overlayClassName: FeeDistributionmodules.tooltip,
              getPopupContainer: function getPopupContainer() {
                return document.getElementById('J_Page') || document.body;
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
                type: md ? 'link' : 'primary',
                onClick: function onClick() {
                  setWitndrawProp({
                    amount: text,
                    onClose: function onClose() {
                      return setWitndrawProp(undefined);
                    },
                    show: true,
                    current: record,
                    title: 'Distribution yield',
                    type: 'fee'
                  });
                },
                children: ["$", text]
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
            type: md ? 'link' : 'primary',
            disabled: true,
            onClick: function onClick() {},
            children: "--"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
        },
        onCell: function onCell(text, index) {
          if (index === 1) {
            return {
              colSpan: 0
            };
          }
        }
      }]
    },
    list: feeDistributionList
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "stakeTableWrap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TableList, objectSpread2_default()({}, data)), stakeAction && /*#__PURE__*/(0,react.createElement)(StakeOT, objectSpread2_default()(objectSpread2_default()({}, stakeAction), {}, {
      key: 'fee'
    })), witndrawProps && /*#__PURE__*/(0,react.createElement)(components_Withdraw, objectSpread2_default()(objectSpread2_default()({}, witndrawProps), {}, {
      key: 'fee'
    }))]
  });
}
;// CONCATENATED MODULE: ./src/pages/earn/components/Stake/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/earn/components/StakeAction/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/earn/components/StakeAction/index.tsx





var StakeAction_excluded = ["defaultAction"],
    StakeAction_excluded2 = ["show", "onClose"];












var StakeAction_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var StakeAction_AddContent = function AddContent(_ref) {
  var defaultStake = _ref.currentStake,
      actionType = _ref.actionType;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      updateStake = _useModel.updateStake,
      stakingLPInfo = _useModel.stakingLPInfo;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary,
      fontSizeSM = _theme$useToken$token.fontSizeSM,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      borderRadius = _theme$useToken$token.borderRadius,
      paddingSM = _theme$useToken$token.paddingSM;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      _ = _useIntl.formatMessage;

  if (!chain || !wallet) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});

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

  var _useState7 = (0,react.useState)(defaultStake),
      _useState8 = slicedToArray_default()(_useState7, 2),
      currentStake = _useState8[0],
      setCurrentStake = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      data = _useState10[0],
      setData = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      succRet = _useState12[0],
      setSuccRet = _useState12[1];

  var maxRemovable = (0,react.useMemo)(function () {
    if (actionType === 'remove') {
      return Number(currentStake.accountStaked);
    } else {
      return Number(currentStake.token.userLpBalance);
    }
  }, [actionType, currentStake]);
  (0,react.useEffect)(function () {
    // const [_data, err] = formatEditPosition({
    //     isAdd: actionType === 'add',
    //     currentStake,
    //     amountIn: String(amountIn)
    // })
    // if (err) {
    //     console.log(err.error)
    //     setErrorMsg(err.error);
    //     return
    // }
    // setData(_data)
    setErrorMsg('');
  }, [currentStake, amountIn]);

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _yield$stake, _yield$stake2, res, error, _yield$unStake, _yield$unStake2, _res, _error;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSubmiting(true);

              if (!(actionType === 'add')) {
                _context.next = 15;
                break;
              }

              _context.next = 4;
              return (0,contract/* stake */.LK)({
                chain: chain,
                wallet: wallet,
                stakeItem: currentStake,
                amountIn: amountIn
              });

            case 4:
              _yield$stake = _context.sent;
              _yield$stake2 = slicedToArray_default()(_yield$stake, 2);
              res = _yield$stake2[0];
              error = _yield$stake2[1];

              if (!error) {
                _context.next = 12;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 12:
              // message.success('add' + res.hash)
              if (res) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'addMargin',
                  title: 'Stake Success',
                  hash: res.hash,
                  okText: 'Close'
                });
              }

              _context.next = 26;
              break;

            case 15:
              _context.next = 17;
              return (0,contract/* unStake */.fD)({
                chain: chain,
                wallet: wallet,
                stakeItem: currentStake,
                amountIn: amountIn
              });

            case 17:
              _yield$unStake = _context.sent;
              _yield$unStake2 = slicedToArray_default()(_yield$unStake, 2);
              _res = _yield$unStake2[0];
              _error = _yield$unStake2[1];

              if (!_error) {
                _context.next = 25;
                break;
              }

              message/* default.error */.ZP.error(_error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 25:
              if (_res) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'removeMargin',
                  title: 'Unstake Success',
                  hash: _res.hash,
                  okText: 'Close'
                });
              } // message.success('remove' + res.hash)


            case 26:
              _context.next = 28;
              return updateStake();

            case 28:
              setSubmiting(false);

            case 29:
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

  var DescItem = function DescItem(_ref3) {
    var label = _ref3.label,
        children = _ref3.children;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      className: "InputCardTip",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 13,
          color: colorTextSecondary
        },
        children: [" ", label]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 13,
          color: colorTextSecondary
        },
        children: [" ", children]
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
    spinning: submiting,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [10, 10],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          tokenList: stakingLPInfo.map(function (item) {
            return item.token;
          }),
          currentToken: currentStake.token,
          onTokenChange: function onTokenChange(token) {
            var _token = stakingLPInfo.find(function (item) {
              return item.token.id === token.id;
            });

            if (_token) setCurrentStake(_token);
          },
          amount: amountIn,
          onAmountChange: changeAmount,
          minValue: 0,
          type: "lpToken",
          maxValue: maxRemovable,
          header: actionType === 'add' ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["Balance:\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "linkColor",
                onClick: function onClick() {
                  return changeAmount(maxRemovable);
                },
                children: maxRemovable
              })]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              onClick: function onClick() {
                return changeAmount(maxRemovable);
              },
              children: ["Staked: ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "linkColor",
                children: maxRemovable
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            color: colorTextSecondary,
            fontSize: fontSizeSM
          },
          children: "Stake ".concat(currentStake.lpSymbol, " to earn a ").concat(currentStake.stakeApr, " APR yield from OT fee distribution")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
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
            children: [currentStake.totalStaked, " ", currentStake.token.lpSymbol, " token"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Staking APR",
            children: currentStake.apr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DescItem, {
            label: "Your Staked Position",
            children: [currentStake.accountStaked, " ", currentStake.token.lpSymbol]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
          height: 50,
          onClick: handleSubmit,
          conditions: [{
            condition: !!errorMsg,
            text: errorMsg,
            type: 'default',
            onClick: function onClick() {}
          }, {
            condition: !amountIn,
            text: 'Enter Amount',
            type: 'default',
            onClick: function onClick() {}
          }],
          children: actionType === 'add' ? _({
            id: 'stake'
          }) : _({
            id: 'unstake'
          })
        })
      })]
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var StakeAction_Content = function Content(_ref4) {
  var defaultAction = _ref4.defaultAction,
      rest = objectWithoutProperties_default()(_ref4, StakeAction_excluded);

  var _useState13 = (0,react.useState)(),
      _useState14 = slicedToArray_default()(_useState13, 2),
      actionType = _useState14[0],
      setActionType = _useState14[1];

  (0,react.useEffect)(function () {
    setActionType(defaultAction);
  }, [defaultAction]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [10, 10],
    className: "Stake-Comp",
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
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "Stake"
            })
          }),
          value: 'add'
        }, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "Unstake"
            })
          }),
          value: 'remove'
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: "24",
      style: {
        overflow: 'hidden'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        wrap: false,
        gutter: [20, 20],
        style: {
          transform: "translateX(".concat(actionType === 'add' ? '0' : '-100', "%)"),
          transition: 'transform .4s ease-in-out'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StakeAction_AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "add"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StakeAction_AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "remove"
          }))
        })]
      })
    })]
  });
};

var StakeAction_StackAction = function StackAction(_ref5) {
  var show = _ref5.show,
      onClose = _ref5.onClose,
      rest = objectWithoutProperties_default()(_ref5, StakeAction_excluded2);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: false,
      maskClosable: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StakeAction_Content, objectSpread2_default()({}, rest))
    })
  });
};

/* harmony default export */ var StakeAction = (StakeAction_StackAction);
;// CONCATENATED MODULE: ./src/pages/earn/components/Stake/index.tsx















var Stake_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var _ = function _(text) {
  return text;
};

function StakeInfo() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      stakingLPInfo = _useModel.stakingLPInfo;

  var _useBreakpoint = Stake_useBreakpoint(),
      md = _useBreakpoint.md;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      colorInfoBg = _theme$useToken.token.colorInfoBg;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      stakeAction = _useState2[0],
      setStakeAction = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      witndrawProps = _useState4[0],
      setWitndrawProp = _useState4[1];

  var data = {
    conf: {
      cardName: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 24,
          fontWeight: 500
        },
        children: "Trade mining"
      }),
      rowKey: 'id',
      header: {
        title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16,
            fontWeight: 500
          },
          children: formatMessage({
            id: 'stake'
          })
        }),
        dataIndex: 'stake',
        key: 'stake',
        render: function render(text, record) {
          var _record$token = record.token,
              iconLp = _record$token.iconLp,
              id = _record$token.id,
              lpSymbol = _record$token.lpSymbol;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
              src: iconLp,
              tokenId: id
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 16,
                fontWeight: 500,
                marginLeft: 6
              },
              children: lpSymbol
            })]
          });
        }
      },
      desc: [{
        title: formatMessage({
          id: 'total_staked'
        }),
        dataIndex: 'totalStaked',
        key: 'totalStaked',
        align: 'right',
        render: function render(text, record) {
          var lpSymbol = record.token.lpSymbol;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
            value: text,
            suffix: lpSymbol
          });
        }
      }, {
        title: formatMessage({
          id: 'your_stake'
        }),
        dataIndex: 'accountStaked',
        key: 'accountStaked',
        align: 'right',
        render: function render(text, record) {
          var lpSymbol = record.token.lpSymbol;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
            value: text,
            suffix: lpSymbol
          });
        }
      }, {
        title: "24".concat(formatMessage({
          id: 'h_yield'
        })),
        dataIndex: 'yield24H',
        key: 'yield24H',
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
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
                value: text
              })]
            })
          });
        }
      }, {
        title: formatMessage({
          id: 'apr'
        }),
        dataIndex: 'apr',
        key: 'apr',
        align: 'right'
      }],
      edit: [{
        title: formatMessage({
          id: 'unstake'
        }),
        dataIndex: 'unstake',
        key: 'unstake',
        align: 'center',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
            type: md ? 'link' : 'primary',
            disabled: parseFloat(record.accountStaked) <= 0,
            onClick: function onClick() {
              setStakeAction({
                show: true,
                onClose: function onClose() {
                  setStakeAction(undefined);
                },
                currentStake: record,
                defaultAction: 'remove'
              });
            },
            children: formatMessage({
              id: 'unstake'
            })
          });
        }
      }, {
        title: formatMessage({
          id: 'stake'
        }),
        dataIndex: 'stake',
        key: 'stake',
        align: 'center',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
            type: md ? 'link' : 'primary',
            onClick: function onClick() {
              setStakeAction({
                show: true,
                onClose: function onClose() {
                  setStakeAction(undefined);
                },
                currentStake: record,
                defaultAction: 'add'
              });
            },
            children: formatMessage({
              id: 'stake'
            })
          });
        }
      }, {
        title: 'OT yield',
        dataIndex: 'yield',
        key: 'yield',
        align: 'center',
        render: function render(text, record) {
          var accountYield = record.accountYield;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
            type: md ? 'link' : 'primary',
            disabled: parseFloat(accountYield) <= 0,
            onClick: function onClick() {
              setWitndrawProp({
                amount: accountYield,
                onClose: function onClose() {
                  return setWitndrawProp(undefined);
                },
                show: true,
                current: record,
                title: 'Staking Yield',
                type: 'stake'
              });
            },
            children: [Number(accountYield).toFixed(6) || 0, " OT"]
          });
        }
      }]
    },
    list: stakingLPInfo
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "stakeTableWrap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TableList, objectSpread2_default()({}, data)), stakeAction && /*#__PURE__*/(0,react.createElement)(StakeAction, objectSpread2_default()(objectSpread2_default()({}, stakeAction), {}, {
      key: stakeAction.currentStake.id
    })), witndrawProps && /*#__PURE__*/(0,react.createElement)(components_Withdraw, objectSpread2_default()(objectSpread2_default()({}, witndrawProps), {}, {
      key: witndrawProps.current && witndrawProps.current.id
    }))]
  });
}
;// CONCATENATED MODULE: ./src/pages/earn/components/BorrowMining/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/earn/components/BorrowMining/index.tsx















var BorrowMining_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
function BorrowMining() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      borrowMingInfo = _useModel.borrowMingInfo;

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

  var _useBreakpoint = BorrowMining_useBreakpoint(),
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
          var _record$token = record.token,
              id = _record$token.id,
              iconLp = _record$token.iconLp,
              symbol = _record$token.symbol;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
              src: iconLp,
              tokenId: id
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 16,
                fontWeight: 500,
                marginLeft: 6
              },
              children: symbol
            })]
          });
        }
      },
      desc: [{
        title: formatMessage({
          id: 'total_borrowed'
        }),
        dataIndex: 'totalBorrowed',
        key: 'totalBorrowed',
        align: 'right',
        render: function render(text, record) {
          var symbol = record.token.symbol;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
            value: text,
            suffix: symbol
          });
        }
      }, {
        title: formatMessage({
          id: 'your_borrow'
        }),
        dataIndex: 'accountBorrowed',
        key: 'accountBorrowed',
        align: 'right',
        render: function render(text, record) {
          var symbol = record.token.symbol;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
            value: text,
            suffix: symbol
          });
        }
      }, {
        title: "24".concat(formatMessage({
          id: 'h_yield'
        })),
        dataIndex: 'yield24H',
        key: 'yield24H',
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
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
                value: text
              })]
            })
          });
        }
      }, {
        title: formatMessage({
          id: 'apr'
        }),
        dataIndex: 'apr',
        key: 'apr',
        align: 'right'
      }],
      edit: [{
        title: 'Total yield',
        dataIndex: 'yield',
        key: 'yield',
        align: 'center',
        render: function render(text, record) {
          var accountYield = record.accountYield;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
            type: md ? 'link' : 'primary',
            disabled: parseFloat(accountYield) <= 0,
            onClick: function onClick() {
              setWitndrawProp({
                amount: accountYield,
                onClose: function onClose() {
                  return setWitndrawProp(undefined);
                },
                show: true,
                curBorrow: record,
                title: 'Borrow Yield',
                type: 'borrow'
              });
            },
            children: [Number(accountYield).toFixed(6) || 0, " OT"]
          });
        }
      }]
    },
    list: borrowMingInfo
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "stakeTableWrap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TableList, objectSpread2_default()({}, data)), stakeAction && /*#__PURE__*/(0,react.createElement)(StakeAction, objectSpread2_default()(objectSpread2_default()({}, stakeAction), {}, {
      key: stakeAction.currentStake.id
    })), witndrawProps && /*#__PURE__*/(0,react.createElement)(components_Withdraw, objectSpread2_default()(objectSpread2_default()({}, witndrawProps), {}, {
      key: witndrawProps.current && witndrawProps.current.id
    }))]
  });
}
;// CONCATENATED MODULE: ./src/pages/earn/components/TradeMining/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/earn/components/TradeMining/index.tsx














var TradeMining_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
function TradeMining() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      tradeStake = _useModel.tradeStake;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useBreakpoint = TradeMining_useBreakpoint(),
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
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
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
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
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
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormatNumber, {
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
            children: [Number(userTradeRewards).toFixed(6) || '0', " OT"]
          });
        }
      }]
    },
    list: tradeStake
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "stakeTableWrap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TableList, objectSpread2_default()({}, data)), stakeAction && /*#__PURE__*/(0,react.createElement)(StakeAction, objectSpread2_default()(objectSpread2_default()({}, stakeAction), {}, {
      key: stakeAction.currentStake.id
    })), witndrawProps && /*#__PURE__*/(0,react.createElement)(components_Withdraw, objectSpread2_default()(objectSpread2_default()({}, witndrawProps), {}, {
      key: witndrawProps.current && witndrawProps.current.id
    }))]
  });
}
// EXTERNAL MODULE: ./node_modules/rc-queue-anim/es/index.js + 3 modules
var es = __webpack_require__(1289);
;// CONCATENATED MODULE: ./src/pages/earn/index.tsx










function HomePage() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      earnLoading = _useModel.earnLoading;

  return /*#__PURE__*/(0,jsx_runtime.jsx)(es/* default */.Z, {
    type: 'bottom',
    duration: 1000,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
      spinning: earnLoading,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "earnPage animation-slide-bottom",
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
              bordered: false,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(FeeDistribution, {})
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
              bodyStyle: {
                padding: 0
              },
              bordered: false,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StakeInfo, {})
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
              bodyStyle: {
                padding: 0
              },
              bordered: false,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(BorrowMining, {})
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
              bodyStyle: {
                padding: 0
              },
              bordered: false,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(TradeMining, {})
            })
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ 37373:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 10793:
/***/ (function(module) {


module.exports = formatter;
module.exports["default"] = formatter;

function formatter(options) {
  options = options || {};


  // *********************************************************************************************
  // Set defaults for negatives
  // options.negative, options.negativeOut, options.separator retained for backward compatibility
  // *********************************************************************************************

  // type of negative; default left
  options.negativeType = options.negativeType || (options.negative === 'R' ? 'right' : 'left')

  // negative symbols '-' or '()'
  if (typeof options.negativeLeftSymbol !== 'string') {
    switch (options.negativeType) {
      case 'left':
        options.negativeLeftSymbol = '-';
        break;
      case 'brackets':
        options.negativeLeftSymbol = '(';
        break;
      default:
        options.negativeLeftSymbol = '';
    }
  }
  if (typeof options.negativeRightSymbol !== 'string') {
    switch (options.negativeType) {
      case 'right':
        options.negativeRightSymbol = '-';
        break;
      case 'brackets':
        options.negativeRightSymbol = ')';
        break;
      default:
        options.negativeRightSymbol = '';
    }
  }

  // whether negative symbol should be inside/outside prefix and suffix

  if (typeof options.negativeLeftOut !== "boolean") {
    options.negativeLeftOut = (options.negativeOut === false ? false : true);
  }
  if (typeof options.negativeRightOut !== "boolean") {
    options.negativeRightOut = (options.negativeOut === false ? false : true);
  }

  //prefix and suffix
  options.prefix = options.prefix || '';
  options.suffix = options.suffix || '';

  //separators
  if (typeof options.integerSeparator !== 'string') {
    options.integerSeparator = (typeof options.separator === 'string' ? options.separator : ',');
  }
  options.decimalsSeparator = typeof options.decimalsSeparator === 'string' ? options.decimalsSeparator : '';
  options.decimal = options.decimal || '.';

  //padders
  options.padLeft = options.padLeft || -1 //default no padding
  options.padRight = options.padRight || -1 //default no padding

  function format(number, overrideOptions) {
    overrideOptions = overrideOptions || {};

    if (number || number === 0) {
      number = '' + number;//convert number to string if it isn't already
    } else {
      return '';
    }

    //identify a negative number and make it absolute
    var output = [];
    var negative = number.charAt(0) === '-';
    number = number.replace(/^\-/g, '');

    //Prepare output with left hand negative and/or prefix
    if (!options.negativeLeftOut && !overrideOptions.noUnits) {
      output.push(options.prefix);
    }
    if (negative) {
      output.push(options.negativeLeftSymbol);
    }
    if (options.negativeLeftOut && !overrideOptions.noUnits) {
      output.push(options.prefix);
    }

    //Format core number
    number = number.split('.');
    if (options.round != null) round(number, options.round);
    if (options.truncate != null) number[1] = truncate(number[1], options.truncate);
    if (options.padLeft > 0) number[0] = padLeft(number[0], options.padLeft);
    if (options.padRight > 0) number[1] = padRight(number[1], options.padRight);
    if (!overrideOptions.noSeparator && number[1]) number[1] = addDecimalSeparators(number[1], options.decimalsSeparator);
    if (!overrideOptions.noSeparator && number[0]) number[0] = addIntegerSeparators(number[0], options.integerSeparator);
    output.push(number[0]);
    if (number[1]) {
      output.push(options.decimal);
      output.push(number[1]);
    }

    //Prepare output with right hand negative and/or prefix
    if (options.negativeRightOut && !overrideOptions.noUnits) {
      output.push(options.suffix);
    }
    if (negative) {
      output.push(options.negativeRightSymbol);
    }
    if (!options.negativeRightOut && !overrideOptions.noUnits) {
      output.push(options.suffix);
    }

    //join output and return
    return output.join('');
  }

  format.negative = options.negative;
  format.negativeOut = options.negativeOut;
  format.negativeType = options.negativeType;
  format.negativeLeftOut = options.negativeLeftOut;
  format.negativeLeftSymbol = options.negativeLeftSymbol;
  format.negativeRightOut = options.negativeRightOut;
  format.negativeRightSymbol = options.negativeRightSymbol;
  format.prefix = options.prefix;
  format.suffix = options.suffix;
  format.separate = options.separate;
  format.integerSeparator = options.integerSeparator;
  format.decimalsSeparator = options.decimalsSeparator;
  format.decimal = options.decimal;
  format.padLeft = options.padLeft;
  format.padRight = options.padRight;
  format.truncate = options.truncate;
  format.round = options.round;

  function unformat(number, allowedSeparators) {
    allowedSeparators = allowedSeparators || [];
    if (options.allowedSeparators) {
      options.allowedSeparators.forEach(function (s) { allowedSeparators.push (s); });
    }
    allowedSeparators.push(options.integerSeparator);
    allowedSeparators.push(options.decimalsSeparator);
    number = number.replace(options.prefix, '');
    number = number.replace(options.suffix, '');
    var newNumber = number;
    do {
      number = newNumber;
      for (var i = 0; i < allowedSeparators.length; i++) {
        newNumber = newNumber.replace(allowedSeparators[i], '');
      }
    } while (newNumber != number);
    return number;
  }
  format.unformat = unformat;

  function validate(number, allowedSeparators) {
    number = unformat(number, allowedSeparators);
    number = number.split(options.decimal);
    if (number.length > 2) {
      return false;
    } else if (options.truncate != null && number[1] && number[1].length > options.truncate) {
      return false;
    }  else if (options.round != null && number[1] && number[1].length > options.round) {
      return false;
    } else {
      return /^-?\d+\.?\d*$/.test(number);
    }
  }
  return format;
}

//where x is already the integer part of the number
function addIntegerSeparators(x, separator) {
  x += '';
  if (!separator) return x;
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x)) {
    x = x.replace(rgx, '$1' + separator + '$2');
  }
  return x;
}

//where x is already the decimal part of the number
function addDecimalSeparators(x, separator) {
  x += '';
  if (!separator) return x;
  var rgx = /(\d{3})(\d+)/;
  while (rgx.test(x)) {
    x = x.replace(rgx, '$1' + separator + '$2');
  }
  return x;
}

//where x is the integer part of the number
function padLeft(x, padding) {
  x = x + '';
  var buf = [];
  while (buf.length + x.length < padding) {
    buf.push('0');
  }
  return buf.join('') + x;
}

//where x is the decimals part of the number
function padRight(x, padding) {
  if (x) {
    x += '';
  } else {
    x = '';
  }
  var buf = [];
  while (buf.length + x.length < padding) {
    buf.push('0');
  }
  return x + buf.join('');
}
function truncate(x, length) {
  if (x) {
    x += '';
  }
  if (x && x.length > length) {
    return x.substr(0, length);
  } else {
    return x;
  }
}

//where number is an array with 0th item as integer string and 1st item as decimal string (no negatives)
function round(number, places) {
  if (number[1] && places >= 0 && number[1].length > places) {
    //truncate to correct number of decimal places
    var decim = number[1].slice(0, places);
    //if next digit was >= 5 we need to round up
    if (+(number[1].substr(places, 1)) >= 5) {
      //But first count leading zeros as converting to a number will loose them
      var leadingzeros = "";
      while (decim.charAt(0)==="0") {
        leadingzeros = leadingzeros + "0";
        decim = decim.substr(1);
      }
      //Then we can change decim to a number and add 1 before replacing leading zeros
      decim = (+decim + 1) + '';
      decim = leadingzeros + decim;
      if (decim.length > places) {
        //adding one has made it longer
        number[0] = (+number[0]+ +decim.charAt(0)) + ''; //add value of firstchar to the integer part
        decim = decim.substring(1);   //ignore the 1st char at the beginning which is the carry to the integer part
      }
    }
    number[1] = decim;
  }
  return number;
}


/***/ })

}]);