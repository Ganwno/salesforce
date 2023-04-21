(self["webpackChunk"] = self["webpackChunk"] || []).push([[48],{

/***/ 54033:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66419);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91747);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41687);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);







var NumberFormat = function NumberFormat(props) {
  var _useIntl = (0,umi__WEBPACK_IMPORTED_MODULE_2__.useIntl)(),
      formatNumber = _useIntl.formatNumber;

  var prefix = props.prefix,
      suffix = props.suffix;
  var beautyNumber = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var value = props.value,
        _props$precision = props.precision,
        precision = _props$precision === void 0 ? 10 : _props$precision,
        kmt = props.kmt,
        _props$isBig = props.isBig,
        isBig = _props$isBig === void 0 ? false : _props$isBig,
        decimal = props.decimal;
    var _value = value;
    if (Number.isNaN(Number(_value))) return '--';

    if (isBig && decimal) {
      _value = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .bigint2Number */ .Sn)(ethers__WEBPACK_IMPORTED_MODULE_4__/* .BigNumber.from */ .O$.from(_value), decimal);
    }

    if (kmt) {
      return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .formatNumberToKMBT */ .BF)(Number(_value), precision);
    } else {
      return formatNumber(Number(_value), {
        maximumFractionDigits: precision,
        minimumFractionDigits: 0
      });
    }
  }, [props]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [prefix, beautyNumber, suffix]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (NumberFormat);

/***/ }),

/***/ 31396:
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
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 5 modules
var theme = __webpack_require__(92195);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 8 modules
var message = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(39965);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UpOutlined.js + 1 modules
var UpOutlined = __webpack_require__(48115);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(80882);
;// CONCATENATED MODULE: ./src/pages/earn/components/FeeDistributionV2/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(41687);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 7 modules
var collapse = __webpack_require__(15045);
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
      list = _ref2.list,
      _ref2$loading = _ref2.loading,
      loading = _ref2$loading === void 0 ? false : _ref2$loading,
      expandedRowKeys = _ref2.expandedRowKeys;

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
      loading: loading,
      dataSource: list,
      pagination: false,
      rowKey: rowKey,
      expandable: {
        defaultExpandAllRows: true,
        expandedRowKeys: expandedRowKeys,
        indentSize: 0,
        expandIcon: function expandIcon() {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
        }
      },
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
// EXTERNAL MODULE: ./src/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(80331);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 3 modules
var segmented = __webpack_require__(92783);
// EXTERNAL MODULE: ./src/components/FormButton/index.tsx + 1 modules
var FormButton = __webpack_require__(12699);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
;// CONCATENATED MODULE: ./src/pages/earn/components/StakeOSD/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/InputCard/index.tsx + 1 modules
var InputCard = __webpack_require__(90494);
// EXTERNAL MODULE: ./src/components/SuccessResult/index.tsx
var SuccessResult = __webpack_require__(21035);
// EXTERNAL MODULE: ./src/services/contract/stake.ts
var stake = __webpack_require__(84495);
// EXTERNAL MODULE: ./src/components/NumberFormat/index.tsx
var NumberFormat = __webpack_require__(54033);
;// CONCATENATED MODULE: ./src/pages/earn/components/StakeOSD/index.tsx

















var StakeOSD_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var AddContent = function AddContent(_ref) {
  var defaultStake = _ref.currentStake,
      actionType = _ref.actionType,
      _onClose = _ref.onClose;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('stake'),
      setFeeDistributionLoading = _useModel2.setFeeDistributionLoading,
      updateFeeDistribution = _useModel2.updateFeeDistribution;

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
      succRet = _useState10[0],
      setSuccRet = _useState10[1];

  var maxRemovable = (0,react.useMemo)(function () {
    if (actionType === 'remove') {
      return Number(currentStake.stakeAmountNum);
    } else {
      return Number(currentStake.balance);
    }
  }, [actionType, currentStake]);
  (0,react.useEffect)(function () {
    setErrorMsg('');
  }, [currentStake, amountIn]);

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _yield$stakeOsd, _yield$stakeOsd2, res, error, _yield$unStakeOsd, _yield$unStakeOsd2, _res, _error;

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
              return (0,stake/* stakeOsd */.vc)({
                chain: chain,
                wallet: wallet,
                amount: amountIn,
                osd: currentStake
              });

            case 4:
              _yield$stakeOsd = _context.sent;
              _yield$stakeOsd2 = slicedToArray_default()(_yield$stakeOsd, 2);
              res = _yield$stakeOsd2[0];
              error = _yield$stakeOsd2[1];

              if (!error) {
                _context.next = 12;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setSubmiting(false);
              return _context.abrupt("return");

            case 12:
              if (res) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);

                    _onClose();
                  },
                  type: 'addMargin',
                  title: 'Stake Success',
                  hash: res.hash,
                  okText: 'Close'
                });
                setFeeDistributionLoading(true);
                updateFeeDistribution();
              }

              _context.next = 26;
              break;

            case 15:
              _context.next = 17;
              return (0,stake/* unStakeOsd */.Ob)({
                chain: chain,
                wallet: wallet,
                amount: amountIn,
                osd: currentStake
              });

            case 17:
              _yield$unStakeOsd = _context.sent;
              _yield$unStakeOsd2 = slicedToArray_default()(_yield$unStakeOsd, 2);
              _res = _yield$unStakeOsd2[0];
              _error = _yield$unStakeOsd2[1];

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

                    _onClose();
                  },
                  type: 'removeMargin',
                  title: 'Unstake Success',
                  hash: _res.hash,
                  okText: 'Close'
                });
                setFeeDistributionLoading(true);
                updateFeeDistribution();
              }

            case 26:
              setSubmiting(false);

            case 27:
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
          minValue: 0,
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
                onClick: function onClick() {
                  return changeAmount(maxRemovable);
                },
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
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Total Staked",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: currentStake.totalStakeNum,
              precision: 4,
              suffix: " ".concat(currentStake.symbol, " token")
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Staking APR",
            children: currentStake.apr
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Your Staked Position",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: currentStake.stakeAmountNum,
              precision: 4,
              suffix: " " + currentStake.symbol
            })
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

var Content = function Content(props) {
  var defaultAction = props.defaultAction;

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      actionType = _useState12[0],
      setActionType = _useState12[1];

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
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
            actionType: "add"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddContent, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
            actionType: "remove"
          }))
        })]
      })
    })]
  });
};

var StackAction = function StackAction(props) {
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

/* harmony default export */ var StakeOSD = (StackAction);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13769);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
;// CONCATENATED MODULE: ./src/pages/earn/components/StakeVOT/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/earn/components/StakeVOT/index.tsx





var _excluded = ["defaultAction"],
    _excluded2 = ["show", "onClose"];













var StakeVOT_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var StakeVOT_AddContent = function AddContent(_ref) {
  var _ref$recordIndex = _ref.recordIndex,
      recordIndex = _ref$recordIndex === void 0 ? 0 : _ref$recordIndex,
      actionType = _ref.actionType,
      defaultStake = _ref.defaultStake;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('stake'),
      updateFeeDistribution = _useModel2.updateFeeDistribution,
      FeeDistribution = _useModel2.FeeDistribution,
      setFeeDistributionLoading = _useModel2.setFeeDistributionLoading;

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

  var _useState7 = (0,react.useState)(),
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
    if (!currentStake) return '0';

    if (actionType === 'remove') {
      if (!currentStake.children) {
        return 0;
      } else {
        if (currentStake.children[recordIndex]) {
          return Number(currentStake.children[recordIndex].stakeAmountNum);
        } else {
          return 0;
        }
      }
    } else {
      return Number(currentStake.balance);
    }
  }, [actionType, currentStake]);
  var getTokenInfo = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var _yield$fetchFeeDistri, _yield$fetchFeeDistri2, ret, err;

    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(chain && wallet)) {
              _context.next = 9;
              break;
            }

            _context.next = 3;
            return (0,stake/* fetchFeeDistribution */.Os)({
              chain: chain,
              wallet: wallet,
              tokenList: [chain.vot]
            });

          case 3:
            _yield$fetchFeeDistri = _context.sent;
            _yield$fetchFeeDistri2 = slicedToArray_default()(_yield$fetchFeeDistri, 2);
            ret = _yield$fetchFeeDistri2[0];
            err = _yield$fetchFeeDistri2[1];

            if (ret && ret[0]) {
              setCurrentStake(ret[0]);
            }

            if (err) {
              setErrorMsg(err.error);
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [chain, wallet]);
  (0,react.useEffect)(function () {
    if (FeeDistribution) {
      setCurrentStake(function (prev) {
        if (prev) return prev;
        var vot = FeeDistribution.find(function (item) {
          return item.symbol === 'vOT';
        });

        if (vot) {
          return vot;
        }
      });
    }
  }, [FeeDistribution]);
  (0,react.useEffect)(function () {
    getTokenInfo();
  }, [getTokenInfo]);

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var _yield$stakeVot, _yield$stakeVot2, res, error, _yield$unStakeVot, _yield$unStakeVot2, _res, _error;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (currentStake) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              setSubmiting(true);

              if (!(actionType === 'add')) {
                _context2.next = 17;
                break;
              }

              _context2.next = 6;
              return (0,stake/* stakeVot */.ex)({
                chain: chain,
                wallet: wallet,
                amount: amountIn,
                vot: currentStake
              });

            case 6:
              _yield$stakeVot = _context2.sent;
              _yield$stakeVot2 = slicedToArray_default()(_yield$stakeVot, 2);
              res = _yield$stakeVot2[0];
              error = _yield$stakeVot2[1];

              if (!error) {
                _context2.next = 14;
                break;
              }

              message/* default.error */.ZP.error(error.error);
              setSubmiting(false);
              return _context2.abrupt("return");

            case 14:
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

              _context2.next = 28;
              break;

            case 17:
              _context2.next = 19;
              return (0,stake/* unStakeVot */.eT)({
                chain: chain,
                wallet: wallet,
                amount: amountIn,
                index: recordIndex,
                vot: currentStake
              });

            case 19:
              _yield$unStakeVot = _context2.sent;
              _yield$unStakeVot2 = slicedToArray_default()(_yield$unStakeVot, 2);
              _res = _yield$unStakeVot2[0];
              _error = _yield$unStakeVot2[1];

              if (!_error) {
                _context2.next = 27;
                break;
              }

              message/* default.error */.ZP.error(_error.error);
              setSubmiting(false);
              return _context2.abrupt("return");

            case 27:
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
              }

            case 28:
              _context2.next = 30;
              return getTokenInfo();

            case 30:
              setFeeDistributionLoading(true);
              updateFeeDistribution();
              setSubmiting(false);

            case 33:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  var DescItem = function DescItem(_ref4) {
    var label = _ref4.label,
        children = _ref4.children;
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
          minValue: 0,
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
                onClick: function onClick() {
                  return changeAmount(maxRemovable);
                },
                children: maxRemovable
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: currentStake && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            flexDirection: 'column',
            color: colorTextSecondary,
            background: colorInfoBg,
            borderRadius: borderRadius,
            padding: paddingSM,
            fontSize: fontSizeSM
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Total Staked",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: currentStake.totalStakeNum,
              precision: 4,
              suffix: " ".concat(currentStake.symbol, " token")
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Staking APR",
            children: currentStake.apr
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
            label: "Your Staked Position",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: currentStake.stakeAmountNum,
              precision: 4,
              suffix: " " + currentStake.symbol
            })
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

var StakeVOT_Content = function Content(_ref5) {
  var defaultAction = _ref5.defaultAction,
      rest = objectWithoutProperties_default()(_ref5, _excluded);

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
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StakeVOT_AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "add"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StakeVOT_AddContent, objectSpread2_default()(objectSpread2_default()({}, objectSpread2_default()({}, rest)), {}, {
            actionType: "remove"
          }))
        })]
      })
    })]
  });
};

var StakeVOT_StackAction = function StackAction(_ref6) {
  var show = _ref6.show,
      onClose = _ref6.onClose,
      rest = objectWithoutProperties_default()(_ref6, _excluded2);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: false,
      maskClosable: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StakeVOT_Content, objectSpread2_default()({}, rest))
    })
  });
};

/* harmony default export */ var StakeVOT = (StakeVOT_StackAction);
;// CONCATENATED MODULE: ./src/pages/earn/components/WithdrawLite/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/earn/components/WithdrawLite/index.tsx















var WithdrawLite_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

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

var WithdrawLite_AddContent = function AddContent(_ref2) {
  var amount = _ref2.amount,
      onClose = _ref2.onClose,
      icon = _ref2.icon,
      symbol = _ref2.symbol,
      handleSubmit = _ref2.handleSubmit,
      _ref2$desc = _ref2.desc,
      desc = _ref2$desc === void 0 ? [] : _ref2$desc;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet,
      updateStake = _useModel.updateStake;

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
      succRet = _useState8[0],
      setSuccRet = _useState8[1];

  var changeAmount = function changeAmount(value) {
    setAmountIn(value);
  };

  var _handleSubmit = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var ret, err, res;
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
              _context.next = 7;
              return handleSubmit();

            case 7:
              res = _context.sent;
              res[0] = ret;
              res[1] = err;
              setSubmiting(false);

              if (ret) {
                onClose();
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _handleSubmit() {
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
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                src: icon,
                size: 25
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
                style: {
                  fontSize: 18,
                  fontWeight: 500,
                  marginLeft: 8
                },
                children: [" ", symbol]
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            flexDirection: 'column',
            color: colorTextSecondary,
            background: colorInfoBg,
            borderRadius: borderRadius,
            padding: paddingSM,
            fontSize: fontSizeSM
          },
          children: desc.map(function (item) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(DescItem, {
              label: item.label,
              children: item.children
            }, item.label);
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
          height: 50,
          onClick: _handleSubmit,
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

var WithdrawLite_Content = function Content(props) {
  var title = props.title;

  var _useState9 = (0,react.useState)('yield'),
      _useState10 = slicedToArray_default()(_useState9, 2),
      actionType = _useState10[0],
      setActionType = _useState10[1];

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
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(WithdrawLite_AddContent, objectSpread2_default()({}, props))
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
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(WithdrawLite_Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var WithdrawLite = (Withdraw);
;// CONCATENATED MODULE: ./src/components/DescItem/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DescItem/index.tsx




var DescItem_DescItem = function DescItem(_ref) {
  var label = _ref.label,
      children = _ref.children;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      colorTextSecondary = _theme$useToken.token.colorTextSecondary;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "hayDescItem",
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

/* harmony default export */ var components_DescItem = (DescItem_DescItem);
// EXTERNAL MODULE: ./node_modules/react-slider/dist/es/prod/components/ReactSlider/ReactSlider.mjs + 1 modules
var ReactSlider = __webpack_require__(47729);
;// CONCATENATED MODULE: ./src/components/Slider/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Slider/index.tsx





var Slider = function Slider(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ReactSlider/* default */.Z, objectSpread2_default()({
    className: "haySlider",
    thumbClassName: "thumb",
    trackClassName: "track",
    renderThumb: function renderThumb(props, state) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", objectSpread2_default()(objectSpread2_default()({}, props), {}, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "thumbInner",
          children: state.valueNow
        })
      }));
    }
  }, props));
};

/* harmony default export */ var components_Slider = (Slider);
;// CONCATENATED MODULE: ./src/components/SwitchIcon/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/SwitchIcon/index.tsx





var SwitcIcon = function SwitcIcon(_ref) {
  var onClick = _ref.onClick;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorInfoBg = _theme$useToken$token.colorInfoBg,
      colorBgContainer = _theme$useToken$token.colorBgContainer;

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "haySwitchIcon",
    onClick: onClick,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "icon",
      style: {
        background: colorInfoBg,
        border: " 3px solid ".concat(colorBgContainer)
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M11.3787 6.65628L6.51183 11.4023C6.43809 11.4743 6.3582 11.5253 6.27217 11.5555C6.18614 11.5852 6.09397 11.6001 5.99565 11.6001C5.89733 11.6001 5.80515 11.5852 5.71912 11.5555C5.63309 11.5253 5.55321 11.4743 5.47947 11.4023L0.612614 6.65628C0.477424 6.52444 0.406634 6.35977 0.400243 6.16226C0.394343 5.96426 0.465134 5.79336 0.612614 5.64954C0.747804 5.50572 0.91667 5.43069 1.11921 5.42446C1.32224 5.4187 1.4975 5.48774 1.64498 5.63156L5.25825 9.15515L5.25825 1.1192C5.25825 0.915454 5.32879 0.744548 5.46988 0.606481C5.61146 0.468892 5.78672 0.400098 5.99565 0.400098C6.20458 0.400098 6.37959 0.468892 6.52068 0.606481C6.66226 0.744548 6.73305 0.915454 6.73305 1.1192L6.73305 9.15515L10.3463 5.63156C10.4815 5.49972 10.6536 5.43069 10.8625 5.42446C11.0714 5.4187 11.2435 5.48774 11.3787 5.63156C11.5262 5.76339 11.5999 5.93118 11.5999 6.13493C11.5999 6.33867 11.5262 6.51246 11.3787 6.65628Z",
          fill: "url(#paint0_linear_21741_2689)"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
            id: "paint0_linear_21741_2689",
            x1: "5.9999",
            y1: "0.0526531",
            x2: "5.9999",
            y2: "13.2556",
            gradientUnits: "userSpaceOnUse",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
              stopColor: "#03CDC1"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
              offset: "1",
              stopColor: "#8AB9FF"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var SwitchIcon = (SwitcIcon);
// EXTERNAL MODULE: ./src/services/contract/pools.ts
var pools = __webpack_require__(23553);
// EXTERNAL MODULE: ./src/assets/svg/ot.svg
var svg_ot = __webpack_require__(37373);
// EXTERNAL MODULE: ./src/assets/svg/vot.svg
var svg_vot = __webpack_require__(96776);
// EXTERNAL MODULE: ./src/assets/svg/osd.svg
var svg_osd = __webpack_require__(12168);
// EXTERNAL MODULE: ./src/hooks/useIntervalAsync.ts
var useIntervalAsync = __webpack_require__(49395);
// EXTERNAL MODULE: ./src/services/contract/contract.ts
var contract_contract = __webpack_require__(21762);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(66419);
;// CONCATENATED MODULE: ./src/pages/earn/components/VestingOTPopup/index.tsx




























var Convert = function Convert(props) {
  var _props$defaultToken = props.defaultToken,
      defaultToken = _props$defaultToken === void 0 ? 'vot' : _props$defaultToken;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorPrimary = _theme$useToken$token.colorPrimary,
      colorBgContainer = _theme$useToken$token.colorBgContainer,
      colorText = _theme$useToken$token.colorText,
      colorTextSecondary = _theme$useToken$token.colorTextSecondary;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('stake'),
      updateFeeDistribution = _useModel2.updateFeeDistribution,
      setFeeDistributionLoading = _useModel2.setFeeDistributionLoading;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      OTInfo = _useState2[0],
      setOTInfo = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      VOTInfo = _useState4[0],
      setVOTInfo = _useState4[1];

  var _useState5 = (0,react.useState)({
    minUnlockDuration: 0,
    maxPenaltyPercent: 0,
    maxUnlockDuration: 0,
    minPenaltyPercent: 0
  }),
      _useState6 = slicedToArray_default()(_useState5, 2),
      ConvertStrategy = _useState6[0],
      setConvertStrategy = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      submiting = _useState8[0],
      setSubmiting = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      inToken = _useState10[0],
      setInToken = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      outToken = _useState12[0],
      setOutToken = _useState12[1];

  var _useState13 = (0,react.useState)(),
      _useState14 = slicedToArray_default()(_useState13, 2),
      amountIn = _useState14[0],
      setAmountIn = _useState14[1];

  var _useState15 = (0,react.useState)(),
      _useState16 = slicedToArray_default()(_useState15, 2),
      lockDur = _useState16[0],
      setLockDur = _useState16[1];

  var _useState17 = (0,react.useState)(),
      _useState18 = slicedToArray_default()(_useState17, 2),
      succRet = _useState18[0],
      setSuccRet = _useState18[1];

  var selectList = (0,react.useMemo)(function () {
    if (OTInfo && VOTInfo) {
      return [OTInfo, VOTInfo];
    }

    return [];
  }, [OTInfo, VOTInfo]); // init

  (0,react.useEffect)(function () {
    var init = /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var ret;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(chain && wallet)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return (0,stake/* fetchVotToOtConf */.Op)({
                  chain: chain,
                  wallet: wallet
                });

              case 3:
                ret = _context.sent;
                setConvertStrategy(ret);
                setLockDur(function (prev) {
                  if (!prev) return ret.maxUnlockDuration;
                  return prev;
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function init() {
        return _ref.apply(this, arguments);
      };
    }();

    if (chain && wallet) {
      init();
    }
  }, [chain, wallet]);
  var getTokens = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
    var _yield$fetchLiteToken, _yield$fetchLiteToken2, ot, vot;

    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(chain && wallet)) {
              _context2.next = 9;
              break;
            }

            _context2.next = 3;
            return (0,pools/* fetchLiteTokenInfo */.TN)({
              chain: chain,
              wallet: wallet,
              tokenList: [chain === null || chain === void 0 ? void 0 : chain.ot, chain === null || chain === void 0 ? void 0 : chain.vot]
            });

          case 3:
            _yield$fetchLiteToken = _context2.sent;
            _yield$fetchLiteToken2 = slicedToArray_default()(_yield$fetchLiteToken, 2);
            ot = _yield$fetchLiteToken2[0];
            vot = _yield$fetchLiteToken2[1];
            setOTInfo(objectSpread2_default()(objectSpread2_default()({}, ot), {}, {
              icon: svg_ot/* default */.Z
            }));
            setVOTInfo(objectSpread2_default()(objectSpread2_default()({}, vot), {}, {
              icon: svg_vot/* default */.Z
            }));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [chain, wallet]);
  var update = (0,useIntervalAsync/* default */.Z)(getTokens, 10000);
  (0,react.useEffect)(function () {
    if (OTInfo && VOTInfo) {
      setInToken(function (token) {
        if (!token) {
          return defaultToken === 'ot' ? OTInfo : VOTInfo;
        }

        return token.address === OTInfo.address ? OTInfo : VOTInfo;
      });
      setOutToken(function (token) {
        if (!token) {
          return defaultToken === 'vot' ? OTInfo : VOTInfo;
        }

        return token.address === OTInfo.address ? OTInfo : VOTInfo;
      });
    }
  }, [OTInfo, VOTInfo]);

  var changeAmount = function changeAmount(amount, type) {
    if (type === 'in') {
      if (amount > 0) {
        setAmountIn(String(amount));
      } else {
        setAmountIn(undefined);
      }
    }
  };

  var handleTokenChange = function handleTokenChange(token, type) {
    if (type === 'in') {
      if (token.address === (inToken === null || inToken === void 0 ? void 0 : inToken.address)) {
        return;
      }

      var _inToken = inToken;
      setOutToken(_inToken);
      setInToken(token);
    }

    if (type === 'out') {
      if (token.address === (outToken === null || outToken === void 0 ? void 0 : outToken.address)) {
        return;
      }

      var _outToken = outToken;
      setInToken(_outToken);
      setOutToken(token);
    }
  };

  var inAmountUSD = (0,react.useMemo)(function () {
    if (OTInfo && amountIn) {
      console.log(amountIn);
      return Number(amountIn) * Number(OTInfo.poolPriceUSD);
    }

    return 0;
  }, [OTInfo, amountIn]);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
      var _yield$otToVot, _yield$otToVot2, ret, err, _yield$votToOt, _yield$votToOt2, _ret, _err;

      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!inToken || !outToken || !amountIn || !chain || !wallet || !OTInfo || !VOTInfo)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              setSubmiting(true);

              if (!(inToken.address === OTInfo.address)) {
                _context3.next = 12;
                break;
              }

              _context3.next = 6;
              return (0,stake/* otToVot */.XV)({
                chain: chain,
                wallet: wallet,
                amountIn: amountIn,
                inToken: inToken,
                outToken: outToken
              });

            case 6:
              _yield$otToVot = _context3.sent;
              _yield$otToVot2 = slicedToArray_default()(_yield$otToVot, 2);
              ret = _yield$otToVot2[0];
              err = _yield$otToVot2[1];

              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              if (ret) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'closePosition',
                  title: "".concat(formatMessage({
                    id: 'convert'
                  }), " ").concat(formatMessage({
                    id: 'Success'
                  })),
                  hash: ret.hash,
                  okText: formatMessage({
                    id: 'close'
                  })
                });
                setFeeDistributionLoading(true);
                updateFeeDistribution();
                update();
              }

            case 12:
              if (!(inToken.address === VOTInfo.address)) {
                _context3.next = 21;
                break;
              }

              _context3.next = 15;
              return (0,stake/* votToOt */.ES)({
                chain: chain,
                wallet: wallet,
                amountIn: amountIn,
                inToken: inToken,
                lockDur: lockDur
              });

            case 15:
              _yield$votToOt = _context3.sent;
              _yield$votToOt2 = slicedToArray_default()(_yield$votToOt, 2);
              _ret = _yield$votToOt2[0];
              _err = _yield$votToOt2[1];

              if (_err) {
                message/* default.error */.ZP.error(_err.error);
              }

              if (_ret) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'closePosition',
                  title: "".concat(formatMessage({
                    id: 'convert'
                  }), " ").concat(formatMessage({
                    id: 'Success'
                  })),
                  hash: _ret.hash,
                  okText: formatMessage({
                    id: 'close'
                  })
                });
                setFeeDistributionLoading(true);
                updateFeeDistribution();
                update();
              }

            case 21:
              setSubmiting(false);

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  var convertRate = (0,react.useMemo)(function () {
    if (ConvertStrategy.maxUnlockDuration === 0) return 1;
    return 0.5 + (lockDur - ConvertStrategy.minUnlockDuration) / (ConvertStrategy.maxUnlockDuration - ConvertStrategy.minUnlockDuration) / 2;
  }, [lockDur, ConvertStrategy]);
  var PenaltyPercentage = (0,react.useMemo)(function () {
    return (1 - convertRate) * 100;
  }, [convertRate]);
  var amountOut = (0,react.useMemo)(function () {
    if (inToken && amountIn && OTInfo) {
      if (inToken.address === OTInfo.address) {
        return amountIn;
      } else {
        return Number(amountIn) * convertRate;
      }
    }

    return 0;
  }, [inToken, amountIn, OTInfo, convertRate]);
  var outAmountUSD = (0,react.useMemo)(function () {
    if (OTInfo && amountOut) {
      return Number(amountOut) * Number(OTInfo.poolPriceUSD);
    }

    return 0;
  }, [OTInfo, amountOut]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
    spinning: submiting || selectList.length === 0,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [10, 10],
      className: "hayVestOT",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          tokenList: selectList,
          currentToken: inToken,
          onTokenChange: function onTokenChange(token) {
            handleTokenChange(token, 'in');
          },
          canSelectToken: true,
          amount: Number(amountIn),
          onAmountChange: function onAmountChange(amount) {
            return changeAmount(amount, 'in');
          },
          minValue: 0,
          showSlider: false,
          maxValue: Number(inToken === null || inToken === void 0 ? void 0 : inToken.balance) || Infinity,
          header: inToken ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: [formatMessage({
                id: 'ifo_buy_label_pay'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                value: inAmountUSD,
                prefix: "$",
                precision: 2
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary,
                cursor: 'pointer'
              },
              onClick: function onClick() {
                setAmountIn(inToken.balance);
              },
              children: [formatMessage({
                id: 'balance'
              }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                style: {
                  color: colorPrimary
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                  value: inToken.balance,
                  precision: 4
                })
              })]
            })]
          }) : ''
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        style: {
          height: 0,
          zIndex: 100,
          marginTop: -8
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchIcon, {
          onClick: function onClick() {
            if (outToken) handleTokenChange(outToken, 'in');
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        style: {
          marginTop: -16
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          tokenList: selectList,
          currentToken: outToken,
          onTokenChange: function onTokenChange(token) {
            handleTokenChange(token, 'out');
          },
          canSelectToken: true,
          amount: Number(amountOut),
          onAmountChange: function onAmountChange(amount) {
            return changeAmount(amount, 'out');
          },
          minValue: 0,
          maxValue: Infinity,
          showSlider: false,
          disabled: true,
          header: outToken ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: [formatMessage({
                id: 'receive'
              }), ":", /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                value: outAmountUSD,
                prefix: "$",
                precision: 2
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: [formatMessage({
                id: 'balance'
              }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                style: {
                  color: colorPrimary
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                  value: outToken.balance,
                  precision: 4
                })
              })]
            })]
          }) : ''
        })
      }), inToken && inToken.address === (VOTInfo === null || VOTInfo === void 0 ? void 0 : VOTInfo.address) && /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
        span: 24,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Slider, {
          onChange: function onChange(value) {
            return setLockDur(value);
          },
          value: lockDur,
          min: ConvertStrategy.minUnlockDuration,
          max: ConvertStrategy.maxUnlockDuration,
          step: (ConvertStrategy.maxUnlockDuration - ConvertStrategy.minUnlockDuration) / 165,
          renderThumb: function renderThumb(props, state) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("div", objectSpread2_default()(objectSpread2_default()({}, props), {}, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "thumbInner",
                style: {
                  background: colorBgContainer,
                  color: colorText
                },
                children: [state.valueNow, " D"]
              })
            }));
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_DescItem, {
          label: formatMessage({
            id: 'PenaltyPercentage'
          }),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
            value: PenaltyPercentage,
            suffix: "%",
            precision: 2
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
          height: 50,
          onClick: handleSubmit,
          loading: submiting,
          conditions: [{
            condition: !amountIn || !amountOut,
            text: formatMessage({
              id: "entry_amount"
            }),
            type: 'default',
            onClick: function onClick() {}
          }, {
            condition: !!amountIn && !!inToken && Number(amountIn) > Number(inToken.balance),
            text: formatMessage({
              id: "lack_balance"
            }),
            type: 'primary',
            danger: true,
            onClick: function onClick() {}
          }],
          children: inToken && OTInfo && inToken.address === OTInfo.address ? formatMessage({
            id: 'Convert OT to vOT'
          }) : formatMessage({
            id: 'Convert vOT to OT'
          })
        })
      })]
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var Redeem = function Redeem(props) {
  var _props$defaultToken2 = props.defaultToken,
      defaultToken = _props$defaultToken2 === void 0 ? 'vot' : _props$defaultToken2,
      recordIndex = props.recordIndex,
      _onClose = props.onClose;

  var _theme$useToken2 = theme/* default.useToken */.Z.useToken(),
      _theme$useToken2$toke = _theme$useToken2.token,
      colorPrimary = _theme$useToken2$toke.colorPrimary,
      colorBgContainer = _theme$useToken2$toke.colorBgContainer,
      colorInfoBg = _theme$useToken2$toke.colorInfoBg,
      colorBgLayout = _theme$useToken2$toke.colorBgLayout,
      colorText = _theme$useToken2$toke.colorText,
      colorTextSecondary = _theme$useToken2$toke.colorTextSecondary;

  var _useIntl2 = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  var _useModel3 = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel3.chain,
      wallet = _useModel3.wallet;

  var _useModel4 = (0,_umi_production_exports.useModel)('stake'),
      updateFeeDistribution = _useModel4.updateFeeDistribution,
      setFeeDistributionLoading = _useModel4.setFeeDistributionLoading;

  var _useState19 = (0,react.useState)(true),
      _useState20 = slicedToArray_default()(_useState19, 2),
      submiting = _useState20[0],
      setSubmiting = _useState20[1];

  var _useState21 = (0,react.useState)(),
      _useState22 = slicedToArray_default()(_useState21, 2),
      inToken = _useState22[0],
      setInToken = _useState22[1];

  var _useState23 = (0,react.useState)(),
      _useState24 = slicedToArray_default()(_useState23, 2),
      outToken = _useState24[0],
      setOutToken = _useState24[1];

  var _useState25 = (0,react.useState)(),
      _useState26 = slicedToArray_default()(_useState25, 2),
      amountIn = _useState26[0],
      setAmountIn = _useState26[1];

  var _useState27 = (0,react.useState)(),
      _useState28 = slicedToArray_default()(_useState27, 2),
      ErrorTip = _useState28[0],
      setErrorTip = _useState28[1];

  var _useState29 = (0,react.useState)(),
      _useState30 = slicedToArray_default()(_useState29, 2),
      redeemInfo = _useState30[0],
      setRedeemInfo = _useState30[1];

  var _useState31 = (0,react.useState)(),
      _useState32 = slicedToArray_default()(_useState31, 2),
      currentRecord = _useState32[0],
      setCurrentRecord = _useState32[1];

  var _useState33 = (0,react.useState)(),
      _useState34 = slicedToArray_default()(_useState33, 2),
      succRet = _useState34[0],
      setSuccRet = _useState34[1];

  var getTokens = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
    var contract, _records, records, _curRecord, sortedRecord, _redeemInfo, _now, _yield$fetchLiteToken3, _yield$fetchLiteToken4, vot, osd, ot;

    return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(chain && wallet)) {
              _context4.next = 35;
              break;
            }

            _context4.prev = 1;
            contract = (0,contract_contract/* getContract */.uN)(chain.id, 'StakeVOTReader');
            _context4.next = 5;
            return contract.getStakeRecords(wallet.account);

          case 5:
            _records = _context4.sent;
            records = _records.map(function (item, index) {
              return {
                stakeAt: item.stakeAt.toString(),
                index: index,
                amount: item.amount.toString()
              };
            });

            if (!(records.length === 0)) {
              _context4.next = 9;
              break;
            }

            throw new Error("no stake position");

          case 9:
            if (recordIndex !== undefined && recordIndex < records.length) {
              _curRecord = records[Number(recordIndex)];
            } else {
              sortedRecord = toConsumableArray_default()(records);
              sortedRecord.sort(function (a, b) {
                if (Number(a.stakeAt) > Number(b.stakeAt)) {
                  return 1;
                } else {
                  return -1;
                }
              });
              console.log(sortedRecord, records[0], 'sortedRecord');
              _curRecord = sortedRecord[0];
            }

            _context4.next = 12;
            return contract.redeemInfo();

          case 12:
            _redeemInfo = _context4.sent;
            _now = new Date().getTime() / 1000;

            if (_redeemInfo.isCanRedeem) {
              _context4.next = 16;
              break;
            }

            throw new Error('currently unable to redeem');

          case 16:
            if (!(_now - Number(_curRecord.stakeAt) < _redeemInfo.minStakeDuration.toNumber())) {
              _context4.next = 18;
              break;
            }

            throw new Error("Insufficient duration for stake");

          case 18:
            if (!_redeemInfo.circulatingSupply.eq('0')) {
              _context4.next = 20;
              break;
            }

            throw new Error('currently unable to redeem');

          case 20:
            setCurrentRecord(_curRecord);
            _context4.next = 23;
            return (0,pools/* fetchLiteTokenInfo */.TN)({
              chain: chain,
              wallet: wallet,
              tokenList: [chain === null || chain === void 0 ? void 0 : chain.vot, chain === null || chain === void 0 ? void 0 : chain.osd, chain === null || chain === void 0 ? void 0 : chain.ot]
            });

          case 23:
            _yield$fetchLiteToken3 = _context4.sent;
            _yield$fetchLiteToken4 = slicedToArray_default()(_yield$fetchLiteToken3, 3);
            vot = _yield$fetchLiteToken4[0];
            osd = _yield$fetchLiteToken4[1];
            ot = _yield$fetchLiteToken4[2];

            if (vot && osd) {
              setInToken(objectSpread2_default()(objectSpread2_default()({}, vot), {}, {
                icon: svg_vot/* default */.Z,
                poolPriceUSD: ot.poolPriceUSD
              }));
              setOutToken(objectSpread2_default()(objectSpread2_default()({}, osd), {}, {
                icon: svg_osd/* default */.Z,
                poolPriceUSD: '1'
              }));
              setRedeemInfo(objectSpread2_default()(objectSpread2_default()({}, _redeemInfo), {}, {
                circulatingSupplyNum: Number((0,utils/* bigint2Number */.Sn)(_redeemInfo.circulatingSupply, vot.tokenDecimal)),
                treasuryNum: Number((0,utils/* bigint2Number */.Sn)(_redeemInfo.treasury, osd.tokenDecimal))
              }));
            }

            _context4.next = 34;
            break;

          case 31:
            _context4.prev = 31;
            _context4.t0 = _context4["catch"](1);
            setErrorTip(_context4.t0.message || 'unknown error');

          case 34:
            setSubmiting(false);

          case 35:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 31]]);
  })), [chain, wallet, recordIndex]);
  (0,react.useEffect)(function () {
    getTokens();
  }, [getTokens]);

  var changeAmount = function changeAmount(amount, type) {
    if (type === 'in') {
      if (amount > 0) {
        setAmountIn(String(amount));
      } else {
        setAmountIn(undefined);
      }
    }
  };

  var inAmountUSD = (0,react.useMemo)(function () {
    if (inToken && amountIn) {
      return Number(amountIn) * Number(inToken.poolPriceUSD);
    }

    return 0;
  }, [inToken, amountIn]);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
      var _yield$redeemVot, _yield$redeemVot2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!inToken || !outToken || !amountIn || !chain || !wallet || !currentRecord)) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              setSubmiting(true);
              _context5.next = 5;
              return (0,stake/* redeemVot */.QA)({
                chain: chain,
                wallet: wallet,
                amount: Number(amountIn),
                vot: inToken,
                index: currentRecord.index
              });

            case 5:
              _yield$redeemVot = _context5.sent;
              _yield$redeemVot2 = slicedToArray_default()(_yield$redeemVot, 2);
              ret = _yield$redeemVot2[0];
              err = _yield$redeemVot2[1];

              if (err) {
                message/* default.success */.ZP.success(err.error);
              }

              if (ret) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);

                    _onClose();
                  },
                  type: 'closePosition',
                  title: "".concat(formatMessage({
                    id: 'redeem'
                  }), " ").concat(formatMessage({
                    id: 'Success'
                  })),
                  hash: ret.hash,
                  okText: formatMessage({
                    id: 'close'
                  })
                });
                setFeeDistributionLoading(true);
                updateFeeDistribution();
              }

              setSubmiting(false);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleSubmit() {
      return _ref5.apply(this, arguments);
    };
  }();

  var feeRate = (0,react.useMemo)(function () {
    if (!redeemInfo || !inToken) return 100;
    if (redeemInfo !== null && redeemInfo !== void 0 && redeemInfo.circulatingSupply.eq(0)) return 100;
    console.log(redeemInfo.circulatingSupplyNum, Number(amountIn), 'redeemInfo.circulatingSupplyNum');
    return Math.max(0.5, Number(amountIn) / redeemInfo.circulatingSupplyNum * 100);
  }, [amountIn, redeemInfo, inToken]);
  var maxAmount = (0,react.useMemo)(function () {
    if (currentRecord && inToken) {
      return (0,utils/* bigint2Number */.Sn)(BigInt(currentRecord.amount), inToken.tokenDecimal);
    }

    return 0;
  }, [currentRecord, inToken]);
  var amountOut = (0,react.useMemo)(function () {
    if (inToken && amountIn && redeemInfo && outToken) {
      var redeemOsdAmount = Number(amountIn) * redeemInfo.treasuryNum / redeemInfo.circulatingSupplyNum;
      return redeemOsdAmount * (1 - feeRate / 100);
    }

    return 0;
  }, [inToken, amountIn, redeemInfo, feeRate, outToken]);
  var outAmountUSD = (0,react.useMemo)(function () {
    if (outToken && amountOut) {
      return Number(amountOut) * Number(outToken.poolPriceUSD);
    }

    return 0;
  }, [outToken, amountOut]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
    spinning: submiting,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [10, 10],
      className: "hayVestOT",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          tokenList: [],
          currentToken: inToken,
          onTokenChange: function onTokenChange() {},
          canSelectToken: false,
          amount: Number(amountIn),
          onAmountChange: function onAmountChange(amount) {
            return changeAmount(amount, 'in');
          },
          minValue: 0,
          showSlider: false,
          maxValue: Infinity,
          header: inToken ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: [formatMessage({
                id: 'redeem_pay'
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                value: inAmountUSD,
                prefix: "$",
                precision: 2
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary,
                cursor: 'pointer'
              },
              onClick: function onClick() {
                setAmountIn(maxAmount);
              },
              children: [formatMessage({
                id: 'balance'
              }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                style: {
                  color: colorPrimary
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                  value: maxAmount,
                  precision: 4
                })
              })]
            })]
          }) : ''
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputCard/* default */.Z, {
          tokenList: [],
          currentToken: outToken,
          onTokenChange: function onTokenChange() {},
          canSelectToken: false,
          amount: Number(amountOut),
          onAmountChange: function onAmountChange(amount) {
            return changeAmount(amount, 'out');
          },
          minValue: 0,
          maxValue: Infinity,
          showSlider: false,
          disabled: true,
          header: outToken ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: [formatMessage({
                id: 'receive'
              }), ":", /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                value: outAmountUSD,
                prefix: "$",
                precision: 2
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 12,
                color: colorTextSecondary
              },
              children: [formatMessage({
                id: 'balance'
              }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                style: {
                  color: colorPrimary
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                  value: outToken.balance,
                  precision: 4
                })
              })]
            })]
          }) : ''
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
        span: 24,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          children: formatMessage({
            id: "redeemDesc",
            defaultMessage: 'Redemption is a process to burn your vOT holdings in return for your share of OT treasury, vOT/OT holders own 100% of OT treasury.'
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Link */.Z.Link, {
          style: {
            color: colorPrimary
          },
          underline: true,
          href: "https://onchaintrade.gitbook.io/ot/tokenomics/tokenomics-zksync-era/ot-and-vot#redemption",
          target: '_blank',
          children: formatMessage({
            id: 'ifo_card1_title_link'
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            background: colorBgLayout,
            padding: 8,
            borderRadius: 6
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_DescItem, {
            label: formatMessage({
              id: 'feeRate'
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: feeRate >= 100 ? '--' : feeRate,
              suffix: "%"
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        span: 24,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormButton/* default */.Z, {
          height: 50,
          onClick: handleSubmit,
          loading: submiting,
          conditions: [{
            condition: !!ErrorTip,
            text: ErrorTip || "",
            type: 'primary',
            danger: true,
            onClick: function onClick() {}
          }, {
            condition: !amountIn || !amountOut,
            text: formatMessage({
              id: "entry_amount"
            }),
            type: 'default',
            onClick: function onClick() {}
          }, {
            condition: !!amountIn && !!inToken && Number(amountIn) > Number(inToken.balance),
            text: formatMessage({
              id: "lack_balance"
            }),
            type: 'primary',
            danger: true,
            onClick: function onClick() {}
          }],
          children: formatMessage({
            id: 'Burn vOT and Redeem'
          })
        })
      })]
    }), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
};

var VestingOTPopup_Content = function Content(props) {
  var defaultAction = props.defaultAction;

  var _useIntl3 = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl3.formatMessage;

  var _useState35 = (0,react.useState)(),
      _useState36 = slicedToArray_default()(_useState35, 2),
      actionType = _useState36[0],
      setActionType = _useState36[1];

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
          if (e) {
            setActionType(e);
          }
        },
        block: true,
        options: [{
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            className: "SegmentedWrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: formatMessage({
                id: 'convert'
              })
            })
          }),
          value: 'convert'
        }, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              padding: 4
            },
            className: "SegmentedWrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: formatMessage({
                id: 'redeem'
              })
            })
          }),
          value: 'redeem'
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
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          style: {
            display: actionType === 'convert' ? 'block' : 'none'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Convert, objectSpread2_default()({}, props))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: "24",
          style: {
            display: actionType === 'redeem' ? 'block' : 'none'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Redeem, objectSpread2_default()({}, props))
        })]
      })
    })]
  });
};

var VOTPopup = function VOTPopup(props) {
  var show = props.show,
      onClose = props.onClose;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      show: show,
      onClose: onClose,
      closable: true,
      maskClosable: false,
      title: 'vOT',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(VestingOTPopup_Content, objectSpread2_default()({}, props))
    })
  });
};

/* harmony default export */ var VestingOTPopup = (VOTPopup);
;// CONCATENATED MODULE: ./src/assets/svg/withdraw.svg
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

const SvgWithdraw = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ width: 12, height: 16, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("path", { d: "M1.667 15h9m-4.5-14v9.074m0-9.074L9.29 3.593M6.166 1 3.042 3.593", stroke: "url(#withdraw_svg__a)", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "withdraw_svg__a", x1: 10.946, y1: 8, x2: 0.336, y2: 8, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#03CDC1" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#8AB9FF" }))));

/* harmony default export */ var withdraw = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNjY3IDE1aDltLTQuNS0xNHY5LjA3NG0wLTkuMDc0TDkuMjkgMy41OTNNNi4xNjYgMSAzLjA0MiAzLjU5MyIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTAuOTQ2IiB5MT0iOCIgeDI9Ii4zMzYiIHkyPSI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAzQ0RDMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhBQjlGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/pages/earn/components/FeeDistributionV2/index.tsx


























var FeeDistributionV2_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;
function FeeDistribution() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useModel2 = (0,_umi_production_exports.useModel)('stake'),
      FeeDistribution = _useModel2.FeeDistribution,
      FeeDistributionLoading = _useModel2.FeeDistributionLoading,
      updateFeeDistribution = _useModel2.updateFeeDistribution,
      setFeeDistributionLoading = _useModel2.setFeeDistributionLoading;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      _theme$useToken$token = _theme$useToken.token,
      colorFillSecondary = _theme$useToken$token.colorFillSecondary,
      colorPrimary = _theme$useToken$token.colorPrimary;

  var _ = function _(text) {
    return formatMessage({
      id: text
    });
  };

  var _useBreakpoint = FeeDistributionV2_useBreakpoint(),
      md = _useBreakpoint.md;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      stakeAction = _useState2[0],
      setStakeAction = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      stakeVotAction = _useState4[0],
      setStakeVotAction = _useState4[1];

  var _useState5 = (0,react.useState)(),
      _useState6 = slicedToArray_default()(_useState5, 2),
      witndrawProps = _useState6[0],
      setWitndrawProp = _useState6[1];

  var _useState7 = (0,react.useState)(),
      _useState8 = slicedToArray_default()(_useState7, 2),
      VestingOTAction = _useState8[0],
      setVestingOT = _useState8[1];

  var _useState9 = (0,react.useState)(),
      _useState10 = slicedToArray_default()(_useState9, 2),
      succRet = _useState10[0],
      setSuccRet = _useState10[1];

  var convert = function convert(defaultToken) {
    setVestingOT({
      show: true,
      onClose: function onClose() {
        return setVestingOT(undefined);
      },
      defaultAction: 'convert',
      defaultToken: defaultToken
    });
  };

  var redeem = function redeem(index) {
    setVestingOT({
      show: true,
      onClose: function onClose() {
        return setVestingOT(undefined);
      },
      defaultAction: 'redeem',
      recordIndex: index
    });
  };

  var claimOsdReward = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(type) {
      var res, successCallback, _res, _res2, ret, err, _res3, _res4, _ret, _err, _res5, _res6, _ret2, _err2;

      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res = [null, null];

              if (!(!wallet || !chain)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", res);

            case 3:
              successCallback = function successCallback(ret) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                    setWitndrawProp(undefined);
                  },
                  type: 'closePosition',
                  title: 'Withdraw Success',
                  hash: ret.hash,
                  okText: 'Close'
                });
                setFeeDistributionLoading(true);
                updateFeeDistribution();
              };

              if (!(type === 'vot')) {
                _context.next = 11;
                break;
              }

              _context.next = 7;
              return (0,stake/* claimOsdVotReward */.OS)({
                wallet: wallet,
                chain: chain
              });

            case 7:
              res = _context.sent;
              _res = res, _res2 = slicedToArray_default()(_res, 2), ret = _res2[0], err = _res2[1];

              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              if (ret) {
                successCallback(ret);
              }

            case 11:
              if (!(type === 'period')) {
                _context.next = 18;
                break;
              }

              _context.next = 14;
              return (0,stake/* claimOsdPeriodReward */.d3)({
                wallet: wallet,
                chain: chain
              });

            case 14:
              res = _context.sent;
              _res3 = res, _res4 = slicedToArray_default()(_res3, 2), _ret = _res4[0], _err = _res4[1];

              if (_err) {
                message/* default.error */.ZP.error(_err.error);
              }

              if (_ret) {
                successCallback(_ret);
              }

            case 18:
              if (!(type === 'stakeVot')) {
                _context.next = 25;
                break;
              }

              _context.next = 21;
              return (0,stake/* claimVotPeriodReward */._7)({
                wallet: wallet,
                chain: chain
              });

            case 21:
              res = _context.sent;
              _res5 = res, _res6 = slicedToArray_default()(_res5, 2), _ret2 = _res6[0], _err2 = _res6[1];

              if (_err2) {
                message/* default.error */.ZP.error(_err2.error);
              }

              if (_ret2) {
                successCallback(_ret2);
              }

            case 25:
              return _context.abrupt("return", res);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function claimOsdReward(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _useState11 = (0,react.useState)([]),
      _useState12 = slicedToArray_default()(_useState11, 2),
      expandedRowKeys = _useState12[0],
      setExpandedRowKeys = _useState12[1];

  var handleExpend = function handleExpend(key) {
    if (expandedRowKeys.includes(key)) {
      setExpandedRowKeys(function (prev) {
        return prev.filter(function (item) {
          return item !== key;
        });
      });
    } else {
      setExpandedRowKeys([].concat(toConsumableArray_default()(expandedRowKeys), [key]));
    }
  };

  var data = {
    conf: {
      cardName: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 24,
          fontWeight: 500
        },
        children: _('fee_distribution')
      }),
      rowKey: 'address',
      header: {
        title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16,
            fontWeight: 500
          },
          children: _('fee_distribution')
        }),
        dataIndex: 'symbol',
        key: 'symbol',
        render: function render(text, record) {
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          console.log(args, 'args');
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              display: 'flex',
              alignItems: 'center'
            },
            children: record.symbol === 'StakeVOT' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
              style: {
                fontSize: 16,
                fontWeight: 500,
                marginLeft: 6
              },
              children: [record.stakeAt, ",", record.stakeDurationOver ? '>' : '<', "6m"]
            }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                  src: record.icon,
                  tokenId: record.address,
                  size: 20
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
                  style: {
                    fontSize: 16,
                    fontWeight: 500,
                    marginLeft: 6
                  },
                  children: text
                })]
              }), record.children && record.children.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.Z, {
                size: "small",
                style: {
                  color: colorPrimary
                },
                onClick: function onClick() {
                  handleExpend(record.address);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                  children: [record.children.length, expandedRowKeys.includes(record.address) ? /*#__PURE__*/(0,jsx_runtime.jsx)(UpOutlined/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
                }), "  "]
              })]
            })
          });
        }
      },
      desc: [{
        title: _('balance'),
        dataIndex: 'balance',
        key: 'balance',
        align: 'right',
        render: function render(text) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
            value: text,
            precision: 4
          });
        }
      }, {
        title: "".concat(_('your_stake'), "/").concat(_('total_staked')),
        dataIndex: 'stakeAmount',
        key: 'stakeAmount',
        align: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: text,
              isBig: true,
              decimal: record.tokenDecimal
            }), "  /  ", /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: record.totalStake,
              isBig: true,
              decimal: record.tokenDecimal
            })]
          });
        }
      }, {
        title: _('apr'),
        dataIndex: 'apr',
        key: 'apr',
        align: 'right'
      }, {
        title: _('rewards'),
        dataIndex: 'periodReward',
        key: 'periodReward',
        align: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [record.symbol === 'OSD' && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "rewardWrapContent",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "rewardWrap",
                onClick: function onClick() {
                  setWitndrawProp({
                    handleSubmit: function handleSubmit() {
                      return claimOsdReward('period');
                    },
                    show: true,
                    onClose: function onClose() {
                      return setWitndrawProp(undefined);
                    },
                    title: 'withdraw',
                    icon: svg_osd/* default */.Z,
                    symbol: 'OSD',
                    amount: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: text,
                      isBig: true,
                      decimal: record.tokenDecimal,
                      precision: 4
                    }),
                    desc: [{
                      label: formatMessage({
                        id: 'total Stake'
                      }),
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                        value: record.totalStake,
                        isBig: true,
                        decimal: record.tokenDecimal
                      })
                    }, {
                      label: formatMessage({
                        id: 'Staking  APR'
                      }),
                      children: record.apr
                    }, {
                      label: formatMessage({
                        id: 'Your Staked Position'
                      }),
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                        value: record.stakeAmount,
                        isBig: true,
                        decimal: record.tokenDecimal
                      })
                    }]
                  });
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "reward",
                  style: {
                    background: colorFillSecondary
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                    src: svg_osd/* default */.Z,
                    size: 14
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    style: {
                      fontSize: 14,
                      marginLeft: 4
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: text,
                      isBig: true,
                      decimal: record.tokenDecimal,
                      precision: 4
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "reward",
                  style: {
                    background: colorFillSecondary
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                    src: withdraw,
                    alt: "",
                    style: {
                      height: 14
                    }
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "rewardWrap",
                onClick: function onClick() {
                  setWitndrawProp({
                    handleSubmit: function handleSubmit() {
                      return claimOsdReward('vot');
                    },
                    show: true,
                    onClose: function onClose() {
                      return setWitndrawProp(undefined);
                    },
                    title: 'Withdraw',
                    icon: svg_vot/* default */.Z,
                    symbol: 'vOT',
                    amount: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: record.votReward,
                      isBig: true,
                      decimal: record.tokenDecimal
                    }),
                    desc: [{
                      label: formatMessage({
                        id: 'total Stake'
                      }),
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                        value: record.totalStake,
                        isBig: true,
                        decimal: record.tokenDecimal
                      })
                    }, {
                      label: formatMessage({
                        id: 'Staking  APR'
                      }),
                      children: record.apr
                    }, {
                      label: formatMessage({
                        id: 'Your Staked Position'
                      }),
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                        value: record.stakeAmount,
                        isBig: true,
                        decimal: record.tokenDecimal
                      })
                    }]
                  });
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "reward",
                  style: {
                    background: colorFillSecondary
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                    src: svg_vot/* default */.Z,
                    size: 14
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    style: {
                      fontSize: 14,
                      marginLeft: 4
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: record.votReward,
                      isBig: true,
                      decimal: record.tokenDecimal,
                      precision: 4
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "reward",
                  style: {
                    background: colorFillSecondary
                  },
                  onClick: function onClick() {},
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                    src: withdraw,
                    alt: "",
                    style: {
                      height: 14
                    }
                  })
                })]
              })]
            }), record.symbol === 'vOT' && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "rewardWrapContent",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "rewardWrap",
                onClick: function onClick() {
                  setWitndrawProp({
                    handleSubmit: function handleSubmit() {
                      return claimOsdReward('stakeVot');
                    },
                    show: true,
                    onClose: function onClose() {
                      return setWitndrawProp(undefined);
                    },
                    title: 'withdraw',
                    icon: svg_osd/* default */.Z,
                    symbol: 'OSD',
                    amount: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: text,
                      isBig: true,
                      decimal: record.tokenDecimal,
                      precision: 4
                    }),
                    desc: [{
                      label: formatMessage({
                        id: 'total Stake'
                      }),
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                        value: record.totalStake,
                        isBig: true,
                        decimal: record.tokenDecimal
                      })
                    }, {
                      label: formatMessage({
                        id: 'Staking  APR'
                      }),
                      children: record.apr
                    }, {
                      label: formatMessage({
                        id: 'Your Staked Position'
                      }),
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                        value: record.stakeAmount,
                        isBig: true,
                        decimal: record.tokenDecimal
                      })
                    }]
                  });
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "reward",
                  style: {
                    background: colorFillSecondary
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TokenIcon/* default */.Z, {
                    src: svg_osd/* default */.Z,
                    size: 14
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    style: {
                      fontSize: 14,
                      marginLeft: 4
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: text,
                      isBig: true,
                      decimal: record.tokenDecimal,
                      precision: 4
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "reward",
                  style: {
                    background: colorFillSecondary
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                    src: withdraw,
                    alt: "",
                    style: {
                      height: 14
                    }
                  })
                })]
              })
            })]
          });
        }
      }],
      edit: [{
        title: formatMessage({
          id: 'action'
        }),
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [record.symbol === 'OT' && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: md ? 'link' : 'primary',
              onClick: function onClick() {
                return convert('ot');
              },
              children: formatMessage({
                id: 'convert'
              })
            }), record.symbol === 'OSD' && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
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
            }), record.symbol === 'OSD' && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
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
              children: formatMessage({
                id: 'unstake'
              })
            }), record.symbol === 'vOT' && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: md ? 'link' : 'primary',
              onClick: function onClick() {
                return convert('vot');
              },
              children: formatMessage({
                id: 'convert'
              })
            }), record.symbol === 'vOT' && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: md ? 'link' : 'primary',
              onClick: function onClick() {
                return setStakeVotAction({
                  show: true,
                  onClose: function onClose() {
                    setStakeVotAction(undefined);
                  },
                  defaultAction: 'add'
                });
              },
              children: formatMessage({
                id: 'stake'
              })
            }), record.symbol === 'StakeVOT' && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: md ? 'link' : 'primary',
              onClick: function onClick() {
                setStakeVotAction({
                  show: true,
                  onClose: function onClose() {
                    setStakeVotAction(undefined);
                  },
                  recordIndex: record.index || 0,
                  defaultAction: 'remove'
                });
              },
              children: formatMessage({
                id: 'unstake'
              })
            }), record.symbol === 'StakeVOT' && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: md ? 'link' : 'primary',
              disabled: !record.isCanRedeem,
              onClick: function onClick() {
                redeem(record.index);
              },
              children: formatMessage({
                id: 'redeem'
              })
            })]
          });
        }
      }]
    },
    list: FeeDistribution,
    loading: FeeDistributionLoading,
    expandedRowKeys: expandedRowKeys
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "stakeTableWrap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TableList, objectSpread2_default()({}, data)), VestingOTAction && /*#__PURE__*/(0,jsx_runtime.jsx)(VestingOTPopup, objectSpread2_default()({}, VestingOTAction)), stakeAction && /*#__PURE__*/(0,react.createElement)(StakeOSD, objectSpread2_default()(objectSpread2_default()({}, stakeAction), {}, {
      key: 'fee'
    })), stakeVotAction && /*#__PURE__*/(0,react.createElement)(StakeVOT, objectSpread2_default()(objectSpread2_default()({}, stakeVotAction), {}, {
      key: 'fee'
    })), witndrawProps && /*#__PURE__*/(0,react.createElement)(WithdrawLite, objectSpread2_default()(objectSpread2_default()({}, witndrawProps), {}, {
      key: 'fee'
    })), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
  });
}
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
;// CONCATENATED MODULE: ./src/pages/earn/components/Stake/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/services/contract/index.ts + 3 modules
var contract = __webpack_require__(8227);
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
      updataTokens = _useModel.updataTokens,
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
    if (currentStake && stakingLPInfo.length) {
      var _cur = stakingLPInfo.find(function (item) {
        return item.key === currentStake.key;
      });

      if (_cur) setCurrentStake(_cur);
    }
  }, [stakingLPInfo]);
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
              return updataTokens();

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
;// CONCATENATED MODULE: ./src/pages/earn/components/Withdraw/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/earn/components/Withdraw/index.tsx
















var Withdraw_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var Withdraw_DescItem = function DescItem(_ref) {
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
                src: svg_ot/* default */.Z,
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
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Withdraw_DescItem, {
            label: "Total Staked",
            children: [current.totalStaked, " ", current.token.lpSymbol, " token"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Withdraw_DescItem, {
            label: "Staking APR",
            children: current.apr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Withdraw_DescItem, {
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
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Withdraw_DescItem, {
            label: "Total Borrowed",
            children: [curBorrow.totalBorrowed, " ", curBorrow.token.symbol, " token"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Withdraw_DescItem, {
            label: "Borrow APR",
            children: curBorrow.apr
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Withdraw_DescItem, {
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

var Withdraw_RemoveContent = function RemoveContent() {
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

var Withdraw_Withdraw = function Withdraw(props) {
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

/* harmony default export */ var components_Withdraw = (Withdraw_Withdraw);
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
      rowKey: 'key',
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
                src: svg_ot/* default */.Z,
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
      rowKey: 'key',
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
                src: svg_ot/* default */.Z,
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
                src: svg_ot/* default */.Z,
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
;// CONCATENATED MODULE: ./src/pages/earn/components/VesterOTCard/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/pages/earn/components/VesterOTCard/index.tsx

















var VesterOTCard_useBreakpoint = grid/* default.useBreakpoint */.ZP.useBreakpoint;

var VesterOTCard_ = function _(text) {
  return text;
};

function VerterOTCard() {
  var _useModel = (0,_umi_production_exports.useModel)('chain'),
      chain = _useModel.chain,
      wallet = _useModel.wallet;

  var _useBreakpoint = VesterOTCard_useBreakpoint(),
      md = _useBreakpoint.md;

  var _theme$useToken = theme/* default.useToken */.Z.useToken(),
      colorInfoBg = _theme$useToken.token.colorInfoBg;

  var _useIntl = (0,_umi_production_exports.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useState = (0,react.useState)(),
      _useState2 = slicedToArray_default()(_useState, 2),
      VestingOTAction = _useState2[0],
      setVestingOT = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      ConvertRecord = _useState4[0],
      setConvertRecord = _useState4[1];

  var _useState5 = (0,react.useState)(),
      _useState6 = slicedToArray_default()(_useState5, 2),
      canceling = _useState6[0],
      setCanceling = _useState6[1];

  var _useState7 = (0,react.useState)(),
      _useState8 = slicedToArray_default()(_useState7, 2),
      withdrawing = _useState8[0],
      setWithdrawing = _useState8[1];

  var _useState9 = (0,react.useState)(true),
      _useState10 = slicedToArray_default()(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = slicedToArray_default()(_useState11, 2),
      succRet = _useState12[0],
      setSuccRet = _useState12[1];

  var _fetchConvertRecord = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var ret;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(chain && wallet)) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return (0,stake/* fetchVotInfo */.vB)({
              chain: chain,
              wallet: wallet
            });

          case 3:
            ret = _context.sent;
            setConvertRecord(ret);
            setLoading(false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [chain, wallet]);

  var update = (0,useIntervalAsync/* default */.Z)(_fetchConvertRecord, 10000);

  var withdrawOT = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(record) {
      var _yield$withdrawVotToO, _yield$withdrawVotToO2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!chain || !wallet || !wallet.isConnected)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              setWithdrawing(record.index);
              _context2.next = 5;
              return (0,stake/* withdrawVotToOt */.A$)({
                chain: chain,
                wallet: wallet,
                record: record
              });

            case 5:
              _yield$withdrawVotToO = _context2.sent;
              _yield$withdrawVotToO2 = slicedToArray_default()(_yield$withdrawVotToO, 2);
              ret = _yield$withdrawVotToO2[0];
              err = _yield$withdrawVotToO2[1];

              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              if (ret) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'closePosition',
                  title: 'Withdraw Success',
                  hash: ret.hash,
                  okText: 'Close'
                });
              }

              setLoading(true);
              _context2.next = 14;
              return update();

            case 14:
              setLoading(false);
              setWithdrawing(undefined);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function withdrawOT(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var cancel = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(record) {
      var _yield$cancelVotToOt, _yield$cancelVotToOt2, ret, err;

      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!chain || !wallet || !wallet.isConnected)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              setCanceling(record.index);
              _context3.next = 5;
              return (0,stake/* cancelVotToOt */.tt)({
                chain: chain,
                wallet: wallet,
                record: record
              });

            case 5:
              _yield$cancelVotToOt = _context3.sent;
              _yield$cancelVotToOt2 = slicedToArray_default()(_yield$cancelVotToOt, 2);
              ret = _yield$cancelVotToOt2[0];
              err = _yield$cancelVotToOt2[1];

              if (err) {
                message/* default.error */.ZP.error(err.error);
              }

              if (ret) {
                setSuccRet({
                  show: true,
                  onClose: function onClose() {
                    setSuccRet(undefined);
                  },
                  type: 'closePosition',
                  title: 'Cancel Success',
                  hash: ret.hash,
                  okText: 'Close'
                });
              }

              setLoading(true);
              _context3.next = 14;
              return update();

            case 14:
              setLoading(false);
              setCanceling(undefined);

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function cancel(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var data = {
    conf: {
      cardName: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default.Text */.Z.Text, {
        style: {
          fontSize: 24,
          fontWeight: 500
        },
        children: [formatMessage({
          id: 'vOT-OT conversion record'
        }), " "]
      }),
      rowKey: 'index',
      header: {
        title: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default.Text */.Z.Text, {
          style: {
            fontSize: 16,
            fontWeight: 500
          },
          children: formatMessage({
            id: 'vOT-OT conversion record'
          })
        }),
        dataIndex: 'index',
        key: 'index',
        render: function render(text, record) {
          var lockTime = record.lockTime,
              penaltyPercent = record.penaltyPercent;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: lockTime,
              decimal: 0,
              precision: 6,
              suffix: "d vesting, "
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: penaltyPercent,
              decimal: 0,
              suffix: "".concat(Number(penaltyPercent) ? '%' : '', " penalty")
            })]
          });
        }
      },
      desc: [{
        title: formatMessage({
          id: 'Withdrawn/Amount'
        }),
        dataIndex: 'amount',
        key: 'amount',
        align: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: record.withdrawnAmount,
              decimal: 18,
              isBig: true
            }), "/", /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: text,
              decimal: 18,
              isBig: true
            }), " "]
          });
        }
      }, {
        title: formatMessage({
          id: 'status'
        }),
        dataIndex: 'isOver',
        key: 'isOver',
        align: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [text ? formatMessage({
              id: 'Vested as OT'
            }) : formatMessage({
              id: 'Vesting, {day} days left'
            }, {
              day: 1
            }), " "]
          });
        }
      }],
      edit: [{
        title: formatMessage({
          id: 'action'
        }),
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: md ? 'link' : 'primary',
              loading: withdrawing === record.index,
              disabled: !record.isWithdraw,
              onClick: function onClick() {
                return withdrawOT(record);
              },
              children: formatMessage({
                id: 'withdrawOT'
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z, {
              type: md ? 'link' : 'primary',
              loading: canceling === record.index,
              disabled: record.isOver && record.penaltyPercent.eq(0),
              onClick: function onClick() {
                return cancel(record);
              },
              children: formatMessage({
                id: 'cancel'
              })
            })]
          });
        }
      }]
    },
    list: ConvertRecord
  };

  var convert = function convert() {
    setVestingOT({
      show: true,
      onClose: function onClose() {
        return setVestingOT(undefined);
      },
      defaultAction: 'convert'
    });
  };

  var redeem = function redeem() {
    setVestingOT({
      show: true,
      onClose: function onClose() {
        return setVestingOT(undefined);
      },
      defaultAction: 'redeem'
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "stakeTableWrap",
    children: [VestingOTAction && /*#__PURE__*/(0,jsx_runtime.jsx)(VestingOTPopup, objectSpread2_default()({}, VestingOTAction)), /*#__PURE__*/(0,jsx_runtime.jsx)(components_TableList, objectSpread2_default()(objectSpread2_default()({}, data), {}, {
      loading: loading
    })), succRet && /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessResult/* default */.Z, objectSpread2_default()({}, succRet))]
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
      spinning: false,
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
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(VerterOTCard, {})
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