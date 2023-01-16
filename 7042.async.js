(self["webpackChunk"] = self["webpackChunk"] || []).push([[7042],{

/***/ 27511:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": function() { return /* binding */ DescriptionsContext; },
  "Z": function() { return /* binding */ descriptions; }
});

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
const Row = props => {
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
/* harmony default export */ var descriptions_Row = (Row);
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