"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3262],{

/***/ 80882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_DownOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
// This icon file is generated automatically.
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
/* harmony default export */ var asn_DownOutlined = (DownOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DownOutlined_DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DownOutlined
  }));
};
DownOutlined_DownOutlined.displayName = 'DownOutlined';
/* harmony default export */ var icons_DownOutlined = (/*#__PURE__*/react.forwardRef(DownOutlined_DownOutlined));

/***/ }),

/***/ 43262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ input_number; }
});

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(80882);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/UpOutlined.js
// This icon file is generated automatically.
var UpOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, "name": "up", "theme": "outlined" };
/* harmony default export */ var asn_UpOutlined = (UpOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/UpOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var UpOutlined_UpOutlined = function UpOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_UpOutlined
  }));
};
UpOutlined_UpOutlined.displayName = 'UpOutlined';
/* harmony default export */ var icons_UpOutlined = (/*#__PURE__*/react.forwardRef(UpOutlined_UpOutlined));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/supportUtil.js
function supportBigInt() {
  return typeof BigInt === 'function';
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/numberUtil.js

/**
 * Format string number to readable number
 */

function trimNumber(numStr) {
  var str = numStr.trim();
  var negative = str.startsWith('-');

  if (negative) {
    str = str.slice(1);
  }

  str = str // Remove decimal 0. `1.000` => `1.`, `1.100` => `1.1`
  .replace(/(\.\d*[^0])0*$/, '$1') // Remove useless decimal. `1.` => `1`
  .replace(/\.0*$/, '') // Remove integer 0. `0001` => `1`, 000.1' => `.1`
  .replace(/^0+/, '');

  if (str.startsWith('.')) {
    str = "0".concat(str);
  }

  var trimStr = str || '0';
  var splitNumber = trimStr.split('.');
  var integerStr = splitNumber[0] || '0';
  var decimalStr = splitNumber[1] || '0';

  if (integerStr === '0' && decimalStr === '0') {
    negative = false;
  }

  var negativeStr = negative ? '-' : '';
  return {
    negative: negative,
    negativeStr: negativeStr,
    trimStr: trimStr,
    integerStr: integerStr,
    decimalStr: decimalStr,
    fullStr: "".concat(negativeStr).concat(trimStr)
  };
}
function isE(number) {
  var str = String(number);
  return !Number.isNaN(Number(str)) && str.includes('e');
}
/**
 * [Legacy] Convert 1e-9 to 0.000000001.
 * This may lose some precision if user really want 1e-9.
 */

function getNumberPrecision(number) {
  var numStr = String(number);

  if (isE(number)) {
    var precision = Number(numStr.slice(numStr.indexOf('e-') + 2));
    var decimalMatch = numStr.match(/\.(\d+)/);

    if (decimalMatch !== null && decimalMatch !== void 0 && decimalMatch[1]) {
      precision += decimalMatch[1].length;
    }

    return precision;
  }

  return numStr.includes('.') && validateNumber(numStr) ? numStr.length - numStr.indexOf('.') - 1 : 0;
}
/**
 * Convert number (includes scientific notation) to -xxx.yyy format
 */

function num2str(number) {
  var numStr = String(number);

  if (isE(number)) {
    if (number > Number.MAX_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER);
    }

    if (number < Number.MIN_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER);
    }

    numStr = number.toFixed(getNumberPrecision(numStr));
  }

  return trimNumber(numStr).fullStr;
}
function validateNumber(num) {
  if (typeof num === 'number') {
    return !Number.isNaN(num);
  } // Empty


  if (!num) {
    return false;
  }

  return (// Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(num) || // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(num) || // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(num)
  );
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/MiniDecimal.js




/* eslint-disable max-classes-per-file */



function isEmpty(value) {
  return !value && value !== 0 && !Number.isNaN(value) || !String(value).trim();
}

/**
 * We can remove this when IE not support anymore
 */
var NumberDecimal = /*#__PURE__*/function () {
  function NumberDecimal(value) {
    (0,classCallCheck/* default */.Z)(this, NumberDecimal);

    (0,defineProperty/* default */.Z)(this, "origin", '');

    (0,defineProperty/* default */.Z)(this, "number", void 0);

    (0,defineProperty/* default */.Z)(this, "empty", void 0);

    if (isEmpty(value)) {
      this.empty = true;
      return;
    }

    this.origin = String(value);
    this.number = Number(value);
  }

  (0,createClass/* default */.Z)(NumberDecimal, [{
    key: "negate",
    value: function negate() {
      return new NumberDecimal(-this.toNumber());
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new NumberDecimal(value);
      }

      var target = Number(value);

      if (Number.isNaN(target)) {
        return this;
      }

      var number = this.number + target; // [Legacy] Back to safe integer

      if (number > Number.MAX_SAFE_INTEGER) {
        return new NumberDecimal(Number.MAX_SAFE_INTEGER);
      }

      if (number < Number.MIN_SAFE_INTEGER) {
        return new NumberDecimal(Number.MIN_SAFE_INTEGER);
      }

      var maxPrecision = Math.max(getNumberPrecision(this.number), getNumberPrecision(target));
      return new NumberDecimal(number.toFixed(maxPrecision));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return Number.isNaN(this.number);
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toNumber() === (target === null || target === void 0 ? void 0 : target.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!safe) {
        return this.origin;
      }

      if (this.isInvalidate()) {
        return '';
      }

      return num2str(this.number);
    }
  }]);

  return NumberDecimal;
}();
var BigIntDecimal = /*#__PURE__*/function () {
  /** BigInt will convert `0009` to `9`. We need record the len of decimal */
  function BigIntDecimal(value) {
    (0,classCallCheck/* default */.Z)(this, BigIntDecimal);

    (0,defineProperty/* default */.Z)(this, "origin", '');

    (0,defineProperty/* default */.Z)(this, "negative", void 0);

    (0,defineProperty/* default */.Z)(this, "integer", void 0);

    (0,defineProperty/* default */.Z)(this, "decimal", void 0);

    (0,defineProperty/* default */.Z)(this, "decimalLen", void 0);

    (0,defineProperty/* default */.Z)(this, "empty", void 0);

    (0,defineProperty/* default */.Z)(this, "nan", void 0);

    if (isEmpty(value)) {
      this.empty = true;
      return;
    }

    this.origin = String(value); // Act like Number convert

    if (value === '-' || Number.isNaN(value)) {
      this.nan = true;
      return;
    }

    var mergedValue = value; // We need convert back to Number since it require `toFixed` to handle this

    if (isE(mergedValue)) {
      mergedValue = Number(mergedValue);
    }

    mergedValue = typeof mergedValue === 'string' ? mergedValue : num2str(mergedValue);

    if (validateNumber(mergedValue)) {
      var trimRet = trimNumber(mergedValue);
      this.negative = trimRet.negative;
      var numbers = trimRet.trimStr.split('.');
      this.integer = BigInt(numbers[0]);
      var decimalStr = numbers[1] || '0';
      this.decimal = BigInt(decimalStr);
      this.decimalLen = decimalStr.length;
    } else {
      this.nan = true;
    }
  }

  (0,createClass/* default */.Z)(BigIntDecimal, [{
    key: "getMark",
    value: function getMark() {
      return this.negative ? '-' : '';
    }
  }, {
    key: "getIntegerStr",
    value: function getIntegerStr() {
      return this.integer.toString();
    }
  }, {
    key: "getDecimalStr",
    value: function getDecimalStr() {
      return this.decimal.toString().padStart(this.decimalLen, '0');
    }
    /**
     * Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
     * This is used for add function only.
     */

  }, {
    key: "alignDecimal",
    value: function alignDecimal(decimalLength) {
      var str = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(decimalLength, '0'));
      return BigInt(str);
    }
  }, {
    key: "negate",
    value: function negate() {
      var clone = new BigIntDecimal(this.toString());
      clone.negative = !clone.negative;
      return clone;
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new BigIntDecimal(value);
      }

      var offset = new BigIntDecimal(value);

      if (offset.isInvalidate()) {
        return this;
      }

      var maxDecimalLength = Math.max(this.getDecimalStr().length, offset.getDecimalStr().length);
      var myAlignedDecimal = this.alignDecimal(maxDecimalLength);
      var offsetAlignedDecimal = offset.alignDecimal(maxDecimalLength);
      var valueStr = (myAlignedDecimal + offsetAlignedDecimal).toString(); // We need fill string length back to `maxDecimalLength` to avoid parser failed

      var _trimNumber = trimNumber(valueStr),
          negativeStr = _trimNumber.negativeStr,
          trimStr = _trimNumber.trimStr;

      var hydrateValueStr = "".concat(negativeStr).concat(trimStr.padStart(maxDecimalLength + 1, '0'));
      return new BigIntDecimal("".concat(hydrateValueStr.slice(0, -maxDecimalLength), ".").concat(hydrateValueStr.slice(-maxDecimalLength)));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return this.nan;
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toString() === (target === null || target === void 0 ? void 0 : target.toString());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      if (this.isNaN()) {
        return NaN;
      }

      return Number(this.toString());
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!safe) {
        return this.origin;
      }

      if (this.isInvalidate()) {
        return '';
      }

      return trimNumber("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr;
    }
  }]);

  return BigIntDecimal;
}();
function getMiniDecimal(value) {
  // We use BigInt here.
  // Will fallback to Number if not support.
  if (supportBigInt()) {
    return new BigIntDecimal(value);
  }

  return new NumberDecimal(value);
}
/**
 * Align the logic of toFixed to around like 1.5 => 2.
 * If set `cutOnly`, will just remove the over decimal part.
 */

function toFixed(numStr, separatorStr, precision) {
  var cutOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (numStr === '') {
    return '';
  }

  var _trimNumber2 = trimNumber(numStr),
      negativeStr = _trimNumber2.negativeStr,
      integerStr = _trimNumber2.integerStr,
      decimalStr = _trimNumber2.decimalStr;

  var precisionDecimalStr = "".concat(separatorStr).concat(decimalStr);
  var numberWithoutDecimal = "".concat(negativeStr).concat(integerStr);

  if (precision >= 0) {
    // We will get last + 1 number to check if need advanced number
    var advancedNum = Number(decimalStr[precision]);

    if (advancedNum >= 5 && !cutOnly) {
      var advancedDecimal = getMiniDecimal(numStr).add("".concat(negativeStr, "0.").concat('0'.repeat(precision)).concat(10 - advancedNum));
      return toFixed(advancedDecimal.toString(), separatorStr, precision, cutOnly);
    }

    if (precision === 0) {
      return numberWithoutDecimal;
    }

    return "".concat(numberWithoutDecimal).concat(separatorStr).concat(decimalStr.padEnd(precision, '0').slice(0, precision));
  }

  if (precisionDecimalStr === '.0') {
    return numberWithoutDecimal;
  }

  return "".concat(numberWithoutDecimal).concat(precisionDecimalStr);
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/mini-decimal/es/index.js




/* harmony default export */ var es = (getMiniDecimal);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(31131);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/StepHandler.js


/* eslint-disable react/no-unknown-property */



/**
 * When click and hold on a button - the speed of auto changing the value.
 */
var STEP_INTERVAL = 200;
/**
 * When click and hold on a button - the delay before auto changing the value.
 */
var STEP_DELAY = 600;
function StepHandler(_ref) {
  var prefixCls = _ref.prefixCls,
    upNode = _ref.upNode,
    downNode = _ref.downNode,
    upDisabled = _ref.upDisabled,
    downDisabled = _ref.downDisabled,
    onStep = _ref.onStep;
  // ======================== Step ========================
  var stepTimeoutRef = react.useRef();
  var onStepRef = react.useRef();
  onStepRef.current = onStep;
  // We will interval update step when hold mouse down
  var onStepMouseDown = function onStepMouseDown(e, up) {
    e.preventDefault();
    onStepRef.current(up);
    // Loop step for interval
    function loopStep() {
      onStepRef.current(up);
      stepTimeoutRef.current = setTimeout(loopStep, STEP_INTERVAL);
    }
    // First time press will wait some time to trigger loop step update
    stepTimeoutRef.current = setTimeout(loopStep, STEP_DELAY);
  };
  var onStopStep = function onStopStep() {
    clearTimeout(stepTimeoutRef.current);
  };
  react.useEffect(function () {
    return onStopStep;
  }, []);
  // ======================= Render =======================
  if ((0,isMobile/* default */.Z)()) {
    return null;
  }
  var handlerClassName = "".concat(prefixCls, "-handler");
  var upClassName = classnames_default()(handlerClassName, "".concat(handlerClassName, "-up"), (0,defineProperty/* default */.Z)({}, "".concat(handlerClassName, "-up-disabled"), upDisabled));
  var downClassName = classnames_default()(handlerClassName, "".concat(handlerClassName, "-down"), (0,defineProperty/* default */.Z)({}, "".concat(handlerClassName, "-down-disabled"), downDisabled));
  var sharedHandlerProps = {
    unselectable: 'on',
    role: 'button',
    onMouseUp: onStopStep,
    onMouseLeave: onStopStep
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(handlerClassName, "-wrap")
  }, /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, sharedHandlerProps, {
    onMouseDown: function onMouseDown(e) {
      onStepMouseDown(e, true);
    },
    "aria-label": "Increase Value",
    "aria-disabled": upDisabled,
    className: upClassName
  }), upNode || /*#__PURE__*/react.createElement("span", {
    unselectable: "on",
    className: "".concat(prefixCls, "-handler-up-inner")
  })), /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, sharedHandlerProps, {
    onMouseDown: function onMouseDown(e) {
      onStepMouseDown(e, false);
    },
    "aria-label": "Decrease Value",
    "aria-disabled": downDisabled,
    className: downClassName
  }), downNode || /*#__PURE__*/react.createElement("span", {
    unselectable: "on",
    className: "".concat(prefixCls, "-handler-down-inner")
  })));
}
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/utils/numberUtil.js

function getDecupleSteps(step) {
  var stepStr = typeof step === 'number' ? num2str(step) : trimNumber(step).fullStr;
  var hasPoint = stepStr.includes('.');
  if (!hasPoint) {
    return step + '0';
  }
  return trimNumber(stepStr.replace(/(\d)\.(\d)/g, '$1$2.')).fullStr;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/hooks/useCursor.js


/**
 * Keep input cursor in the correct position if possible.
 * Is this necessary since we have `formatter` which may mass the content?
 */
function useCursor(input, focused) {
  var selectionRef = (0,react.useRef)(null);
  function recordCursor() {
    // Record position
    try {
      var start = input.selectionStart,
        end = input.selectionEnd,
        value = input.value;
      var beforeTxt = value.substring(0, start);
      var afterTxt = value.substring(end);
      selectionRef.current = {
        start: start,
        end: end,
        value: value,
        beforeTxt: beforeTxt,
        afterTxt: afterTxt
      };
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  }
  /**
   * Restore logic:
   *  1. back string same
   *  2. start string same
   */
  function restoreCursor() {
    if (input && selectionRef.current && focused) {
      try {
        var value = input.value;
        var _selectionRef$current = selectionRef.current,
          beforeTxt = _selectionRef$current.beforeTxt,
          afterTxt = _selectionRef$current.afterTxt,
          start = _selectionRef$current.start;
        var startPos = value.length;
        if (value.endsWith(afterTxt)) {
          startPos = value.length - selectionRef.current.afterTxt.length;
        } else if (value.startsWith(beforeTxt)) {
          startPos = beforeTxt.length;
        } else {
          var beforeLastChar = beforeTxt[start - 1];
          var newIndex = value.indexOf(beforeLastChar, start - 1);
          if (newIndex !== -1) {
            startPos = newIndex + 1;
          }
        }
        input.setSelectionRange(startPos, startPos);
      } catch (e) {
        (0,warning/* default */.ZP)(false, "Something warning of cursor restore. Please fire issue about this: ".concat(e.message));
      }
    }
  }
  return [recordCursor, restoreCursor];
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/hooks/useFrame.js


/**
 * Always trigger latest once when call multiple time
 */
/* harmony default export */ var useFrame = (function () {
  var idRef = (0,react.useRef)(0);
  var cleanUp = function cleanUp() {
    raf/* default.cancel */.Z.cancel(idRef.current);
  };
  (0,react.useEffect)(function () {
    return cleanUp;
  }, []);
  return function (callback) {
    cleanUp();
    idRef.current = (0,raf/* default */.Z)(function () {
      callback();
    });
  };
});
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/InputNumber.js





var _excluded = ["prefixCls", "className", "style", "min", "max", "step", "defaultValue", "value", "disabled", "readOnly", "upHandler", "downHandler", "keyboard", "controls", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep"];










/**
 * We support `stringMode` which need handle correct type when user call in onChange
 * format max or min value
 * 1. if isInvalid return null
 * 2. if precision is undefined, return decimal
 * 3. format with precision
 *    I. if max > 0, round down with precision. Example: max= 3.5, precision=0  afterFormat: 3
 *    II. if max < 0, round up with precision. Example: max= -3.5, precision=0  afterFormat: -4
 *    III. if min > 0, round up with precision. Example: min= 3.5, precision=0  afterFormat: 4
 *    IV. if min < 0, round down with precision. Example: max= -3.5, precision=0  afterFormat: -3
 */
var getDecimalValue = function getDecimalValue(stringMode, decimalValue) {
  if (stringMode || decimalValue.isEmpty()) {
    return decimalValue.toString();
  }
  return decimalValue.toNumber();
};
var getDecimalIfValidate = function getDecimalIfValidate(value) {
  var decimal = es(value);
  return decimal.isInvalidate() ? null : decimal;
};
var InputNumber = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-input-number' : _props$prefixCls,
    className = props.className,
    style = props.style,
    min = props.min,
    max = props.max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    defaultValue = props.defaultValue,
    value = props.value,
    disabled = props.disabled,
    readOnly = props.readOnly,
    upHandler = props.upHandler,
    downHandler = props.downHandler,
    keyboard = props.keyboard,
    _props$controls = props.controls,
    controls = _props$controls === void 0 ? true : _props$controls,
    stringMode = props.stringMode,
    parser = props.parser,
    formatter = props.formatter,
    precision = props.precision,
    decimalSeparator = props.decimalSeparator,
    onChange = props.onChange,
    onInput = props.onInput,
    onPressEnter = props.onPressEnter,
    onStep = props.onStep,
    inputProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var inputClassName = "".concat(prefixCls, "-input");
  var inputRef = react.useRef(null);
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    focus = _React$useState2[0],
    setFocus = _React$useState2[1];
  var userTypingRef = react.useRef(false);
  var compositionRef = react.useRef(false);
  var shiftKeyRef = react.useRef(false);
  // ============================ Value =============================
  // Real value control
  var _React$useState3 = react.useState(function () {
      return es(value !== null && value !== void 0 ? value : defaultValue);
    }),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    decimalValue = _React$useState4[0],
    setDecimalValue = _React$useState4[1];
  function setUncontrolledDecimalValue(newDecimal) {
    if (value === undefined) {
      setDecimalValue(newDecimal);
    }
  }
  // ====================== Parser & Formatter ======================
  /**
   * `precision` is used for formatter & onChange.
   * It will auto generate by `value` & `step`.
   * But it will not block user typing.
   *
   * Note: Auto generate `precision` is used for legacy logic.
   * We should remove this since we already support high precision with BigInt.
   *
   * @param number  Provide which number should calculate precision
   * @param userTyping  Change by user typing
   */
  var getPrecision = react.useCallback(function (numStr, userTyping) {
    if (userTyping) {
      return undefined;
    }
    if (precision >= 0) {
      return precision;
    }
    return Math.max(getNumberPrecision(numStr), getNumberPrecision(step));
  }, [precision, step]);
  // >>> Parser
  var mergedParser = react.useCallback(function (num) {
    var numStr = String(num);
    if (parser) {
      return parser(numStr);
    }
    var parsedStr = numStr;
    if (decimalSeparator) {
      parsedStr = parsedStr.replace(decimalSeparator, '.');
    }
    // [Legacy] We still support auto convert `$ 123,456` to `123456`
    return parsedStr.replace(/[^\w.-]+/g, '');
  }, [parser, decimalSeparator]);
  // >>> Formatter
  var inputValueRef = react.useRef('');
  var mergedFormatter = react.useCallback(function (number, userTyping) {
    if (formatter) {
      return formatter(number, {
        userTyping: userTyping,
        input: String(inputValueRef.current)
      });
    }
    var str = typeof number === 'number' ? num2str(number) : number;
    // User typing will not auto format with precision directly
    if (!userTyping) {
      var mergedPrecision = getPrecision(str, userTyping);
      if (validateNumber(str) && (decimalSeparator || mergedPrecision >= 0)) {
        // Separator
        var separatorStr = decimalSeparator || '.';
        str = toFixed(str, separatorStr, mergedPrecision);
      }
    }
    return str;
  }, [formatter, getPrecision, decimalSeparator]);
  // ========================== InputValue ==========================
  /**
   * Input text value control
   *
   * User can not update input content directly. It update with follow rules by priority:
   *  1. controlled `value` changed
   *    * [SPECIAL] Typing like `1.` should not immediately convert to `1`
   *  2. User typing with format (not precision)
   *  3. Blur or Enter trigger revalidate
   */
  var _React$useState5 = react.useState(function () {
      var initValue = defaultValue !== null && defaultValue !== void 0 ? defaultValue : value;
      if (decimalValue.isInvalidate() && ['string', 'number'].includes((0,esm_typeof/* default */.Z)(initValue))) {
        return Number.isNaN(initValue) ? '' : initValue;
      }
      return mergedFormatter(decimalValue.toString(), false);
    }),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    inputValue = _React$useState6[0],
    setInternalInputValue = _React$useState6[1];
  inputValueRef.current = inputValue;
  // Should always be string
  function setInputValue(newValue, userTyping) {
    setInternalInputValue(mergedFormatter(
    // Invalidate number is sometime passed by external control, we should let it go
    // Otherwise is controlled by internal interactive logic which check by userTyping
    // You can ref 'show limited value when input is not focused' test for more info.
    newValue.isInvalidate() ? newValue.toString(false) : newValue.toString(!userTyping), userTyping));
  }
  // >>> Max & Min limit
  var maxDecimal = react.useMemo(function () {
    return getDecimalIfValidate(max);
  }, [max, precision]);
  var minDecimal = react.useMemo(function () {
    return getDecimalIfValidate(min);
  }, [min, precision]);
  var upDisabled = react.useMemo(function () {
    if (!maxDecimal || !decimalValue || decimalValue.isInvalidate()) {
      return false;
    }
    return maxDecimal.lessEquals(decimalValue);
  }, [maxDecimal, decimalValue]);
  var downDisabled = react.useMemo(function () {
    if (!minDecimal || !decimalValue || decimalValue.isInvalidate()) {
      return false;
    }
    return decimalValue.lessEquals(minDecimal);
  }, [minDecimal, decimalValue]);
  // Cursor controller
  var _useCursor = useCursor(inputRef.current, focus),
    _useCursor2 = (0,slicedToArray/* default */.Z)(_useCursor, 2),
    recordCursor = _useCursor2[0],
    restoreCursor = _useCursor2[1];
  // ============================= Data =============================
  /**
   * Find target value closet within range.
   * e.g. [11, 28]:
   *    3  => 11
   *    23 => 23
   *    99 => 28
   */
  var getRangeValue = function getRangeValue(target) {
    // target > max
    if (maxDecimal && !target.lessEquals(maxDecimal)) {
      return maxDecimal;
    }
    // target < min
    if (minDecimal && !minDecimal.lessEquals(target)) {
      return minDecimal;
    }
    return null;
  };
  /**
   * Check value is in [min, max] range
   */
  var isInRange = function isInRange(target) {
    return !getRangeValue(target);
  };
  /**
   * Trigger `onChange` if value validated and not equals of origin.
   * Return the value that re-align in range.
   */
  var triggerValueUpdate = function triggerValueUpdate(newValue, userTyping) {
    var updateValue = newValue;
    var isRangeValidate = isInRange(updateValue) || updateValue.isEmpty();
    // Skip align value when trigger value is empty.
    // We just trigger onChange(null)
    // This should not block user typing
    if (!updateValue.isEmpty() && !userTyping) {
      // Revert value in range if needed
      updateValue = getRangeValue(updateValue) || updateValue;
      isRangeValidate = true;
    }
    if (!readOnly && !disabled && isRangeValidate) {
      var numStr = updateValue.toString();
      var mergedPrecision = getPrecision(numStr, userTyping);
      if (mergedPrecision >= 0) {
        updateValue = es(toFixed(numStr, '.', mergedPrecision));
        // When to fixed. The value may out of min & max range.
        // 4 in [0, 3.8] => 3.8 => 4 (toFixed)
        if (!isInRange(updateValue)) {
          updateValue = es(toFixed(numStr, '.', mergedPrecision, true));
        }
      }
      // Trigger event
      if (!updateValue.equals(decimalValue)) {
        setUncontrolledDecimalValue(updateValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(updateValue.isEmpty() ? null : getDecimalValue(stringMode, updateValue));
        // Reformat input if value is not controlled
        if (value === undefined) {
          setInputValue(updateValue, userTyping);
        }
      }
      return updateValue;
    }
    return decimalValue;
  };
  // ========================== User Input ==========================
  var onNextPromise = useFrame();
  // >>> Collect input value
  var collectInputValue = function collectInputValue(inputStr) {
    recordCursor();
    // Update inputValue incase input can not parse as number
    setInternalInputValue(inputStr);
    // Parse number
    if (!compositionRef.current) {
      var finalValue = mergedParser(inputStr);
      var finalDecimal = es(finalValue);
      if (!finalDecimal.isNaN()) {
        triggerValueUpdate(finalDecimal, true);
      }
    }
    // Trigger onInput later to let user customize value if they want do handle something after onChange
    onInput === null || onInput === void 0 ? void 0 : onInput(inputStr);
    // optimize for chinese input experience
    // https://github.com/ant-design/ant-design/issues/8196
    onNextPromise(function () {
      var nextInputStr = inputStr;
      if (!parser) {
        nextInputStr = inputStr.replace(/。/g, '.');
      }
      if (nextInputStr !== inputStr) {
        collectInputValue(nextInputStr);
      }
    });
  };
  // >>> Composition
  var onCompositionStart = function onCompositionStart() {
    compositionRef.current = true;
  };
  var onCompositionEnd = function onCompositionEnd() {
    compositionRef.current = false;
    collectInputValue(inputRef.current.value);
  };
  // >>> Input
  var onInternalInput = function onInternalInput(e) {
    collectInputValue(e.target.value);
  };
  // ============================= Step =============================
  var onInternalStep = function onInternalStep(up) {
    var _inputRef$current;
    // Ignore step since out of range
    if (up && upDisabled || !up && downDisabled) {
      return;
    }
    // Clear typing status since it may caused by up & down key.
    // We should sync with input value.
    userTypingRef.current = false;
    var stepDecimal = es(shiftKeyRef.current ? getDecupleSteps(step) : step);
    if (!up) {
      stepDecimal = stepDecimal.negate();
    }
    var target = (decimalValue || es(0)).add(stepDecimal.toString());
    var updatedValue = triggerValueUpdate(target, false);
    onStep === null || onStep === void 0 ? void 0 : onStep(getDecimalValue(stringMode, updatedValue), {
      offset: shiftKeyRef.current ? getDecupleSteps(step) : step,
      type: up ? 'up' : 'down'
    });
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  };
  // ============================ Flush =============================
  /**
   * Flush current input content to trigger value change & re-formatter input if needed
   */
  var flushInputValue = function flushInputValue(userTyping) {
    var parsedValue = es(mergedParser(inputValue));
    var formatValue = parsedValue;
    if (!parsedValue.isNaN()) {
      // Only validate value or empty value can be re-fill to inputValue
      // Reassign the formatValue within ranged of trigger control
      formatValue = triggerValueUpdate(parsedValue, userTyping);
    } else {
      formatValue = decimalValue;
    }
    if (value !== undefined) {
      // Reset back with controlled value first
      setInputValue(decimalValue, false);
    } else if (!formatValue.isNaN()) {
      // Reset input back since no validate value
      setInputValue(formatValue, false);
    }
  };
  // Solve the issue of the event triggering sequence when entering numbers in chinese input (Safari)
  var onBeforeInput = function onBeforeInput() {
    userTypingRef.current = true;
  };
  var onKeyDown = function onKeyDown(event) {
    var which = event.which,
      shiftKey = event.shiftKey;
    userTypingRef.current = true;
    if (shiftKey) {
      shiftKeyRef.current = true;
    } else {
      shiftKeyRef.current = false;
    }
    if (which === KeyCode/* default.ENTER */.Z.ENTER) {
      if (!compositionRef.current) {
        userTypingRef.current = false;
      }
      flushInputValue(false);
      onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(event);
    }
    if (keyboard === false) {
      return;
    }
    // Do step
    if (!compositionRef.current && [KeyCode/* default.UP */.Z.UP, KeyCode/* default.DOWN */.Z.DOWN].includes(which)) {
      onInternalStep(KeyCode/* default.UP */.Z.UP === which);
      event.preventDefault();
    }
  };
  var onKeyUp = function onKeyUp() {
    userTypingRef.current = false;
    shiftKeyRef.current = false;
  };
  // >>> Focus & Blur
  var onBlur = function onBlur() {
    flushInputValue(false);
    setFocus(false);
    userTypingRef.current = false;
  };
  // ========================== Controlled ==========================
  // Input by precision
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    if (!decimalValue.isInvalidate()) {
      setInputValue(decimalValue, false);
    }
  }, [precision]);
  // Input by value
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    var newValue = es(value);
    setDecimalValue(newValue);
    var currentParsedValue = es(mergedParser(inputValue));
    // When user typing from `1.2` to `1.`, we should not convert to `1` immediately.
    // But let it go if user set `formatter`
    if (!newValue.equals(currentParsedValue) || !userTypingRef.current || formatter) {
      // Update value as effect
      setInputValue(newValue, userTypingRef.current);
    }
  }, [value]);
  // ============================ Cursor ============================
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    if (formatter) {
      restoreCursor();
    }
  }, [inputValue]);
  // ============================ Render ============================
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-focused"), focus), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-readonly"), readOnly), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-not-a-number"), decimalValue.isNaN()), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-out-of-range"), !decimalValue.isInvalidate() && !isInRange(decimalValue)), _classNames)),
    style: style,
    onFocus: function onFocus() {
      setFocus(true);
    },
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onCompositionStart: onCompositionStart,
    onCompositionEnd: onCompositionEnd,
    onBeforeInput: onBeforeInput
  }, controls && /*#__PURE__*/react.createElement(StepHandler, {
    prefixCls: prefixCls,
    upNode: upHandler,
    downNode: downHandler,
    upDisabled: upDisabled,
    downDisabled: downDisabled,
    onStep: onInternalStep
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(inputClassName, "-wrap")
  }, /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({
    autoComplete: "off",
    role: "spinbutton",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": decimalValue.isInvalidate() ? null : decimalValue.toString(),
    step: step
  }, inputProps, {
    ref: (0,es_ref/* composeRef */.sQ)(inputRef, ref),
    className: inputClassName,
    value: inputValue,
    onChange: onInternalInput,
    disabled: disabled,
    readOnly: readOnly
  }))));
});
InputNumber.displayName = 'InputNumber';
/* harmony default export */ var es_InputNumber = (InputNumber);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/index.js

/* harmony default export */ var rc_input_number_es = (es_InputNumber);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 4 modules
var config_provider = __webpack_require__(58720);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(97647);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(65223);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__(9708);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var style = __webpack_require__(47673);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var es_style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(80110);
;// CONCATENATED MODULE: ./node_modules/antd/es/input-number/style/index.js




const genInputNumberStyles = token => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorBorder,
    borderRadius,
    fontSizeLG,
    controlHeightLG,
    controlHeightSM,
    colorError,
    inputPaddingHorizontalSM,
    colorTextDescription,
    motionDurationMid,
    colorPrimary,
    controlHeight,
    inputPaddingHorizontal,
    colorBgContainer,
    colorTextDisabled,
    borderRadiusSM,
    borderRadiusLG,
    controlWidth,
    handleVisible
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0,es_style/* resetComponent */.Wf)(token)), (0,style/* genBasicInputStyle */.ik)(token)), (0,style/* genStatusStyle */.bi)(token)), {
      display: 'inline-block',
      width: controlWidth,
      margin: 0,
      padding: 0,
      border: `${lineWidth}px ${lineType} ${colorBorder}`,
      borderRadius,
      '&-rtl': {
        direction: 'rtl',
        [`${componentCls}-input`]: {
          direction: 'rtl'
        }
      },
      '&-lg': {
        padding: 0,
        fontSize: fontSizeLG,
        borderRadius: borderRadiusLG,
        [`input${componentCls}-input`]: {
          height: controlHeightLG - 2 * lineWidth
        }
      },
      '&-sm': {
        padding: 0,
        borderRadius: borderRadiusSM,
        [`input${componentCls}-input`]: {
          height: controlHeightSM - 2 * lineWidth,
          padding: `0 ${inputPaddingHorizontalSM}px`
        }
      },
      '&:hover': Object.assign({}, (0,style/* genHoverStyle */.pU)(token)),
      '&-focused': Object.assign({}, (0,style/* genActiveStyle */.M1)(token)),
      '&-disabled': Object.assign(Object.assign({}, (0,style/* genDisabledStyle */.Xy)(token)), {
        [`${componentCls}-input`]: {
          cursor: 'not-allowed'
        }
      }),
      // ===================== Out Of Range =====================
      '&-out-of-range': {
        input: {
          color: colorError
        }
      },
      // Style for input-group: input with label, with button or dropdown...
      '&-group': Object.assign(Object.assign(Object.assign({}, (0,es_style/* resetComponent */.Wf)(token)), (0,style/* genInputGroupStyle */.s7)(token)), {
        '&-wrapper': {
          display: 'inline-block',
          textAlign: 'start',
          verticalAlign: 'top',
          [`${componentCls}-affix-wrapper`]: {
            width: '100%'
          },
          // Size
          '&-lg': {
            [`${componentCls}-group-addon`]: {
              borderRadius: borderRadiusLG
            }
          },
          '&-sm': {
            [`${componentCls}-group-addon`]: {
              borderRadius: borderRadiusSM
            }
          }
        }
      }),
      [componentCls]: {
        '&-input': Object.assign(Object.assign({
          width: '100%',
          height: controlHeight - 2 * lineWidth,
          padding: `0 ${inputPaddingHorizontal}px`,
          textAlign: 'start',
          backgroundColor: 'transparent',
          border: 0,
          borderRadius,
          outline: 0,
          transition: `all ${motionDurationMid} linear`,
          appearance: 'textfield',
          color: token.colorText,
          fontSize: 'inherit',
          verticalAlign: 'top'
        }, (0,style/* genPlaceholderStyle */.nz)(token.colorTextPlaceholder)), {
          '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
            margin: 0,
            /* stylelint-disable-next-line property-no-vendor-prefix */
            webkitAppearance: 'none',
            appearance: 'none'
          }
        })
      }
    })
  },
  // Handler
  {
    [componentCls]: {
      [`&:hover ${componentCls}-handler-wrap, &-focused ${componentCls}-handler-wrap`]: {
        opacity: 1
      },
      [`${componentCls}-handler-wrap`]: {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineEnd: 0,
        width: token.handleWidth,
        height: '100%',
        background: colorBgContainer,
        borderStartStartRadius: 0,
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius,
        borderEndStartRadius: 0,
        opacity: handleVisible === true ? 1 : 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        transition: `opacity ${motionDurationMid} linear ${motionDurationMid}`,
        // Fix input number inside Menu makes icon too large
        // We arise the selector priority by nest selector here
        // https://github.com/ant-design/ant-design/issues/14367
        [`${componentCls}-handler`]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'auto',
          height: '40%',
          [`
              ${componentCls}-handler-up-inner,
              ${componentCls}-handler-down-inner
            `]: {
            marginInlineEnd: 0,
            fontSize: token.handleFontSize
          }
        }
      },
      [`${componentCls}-handler`]: {
        height: '50%',
        overflow: 'hidden',
        color: colorTextDescription,
        fontWeight: 'bold',
        lineHeight: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderInlineStart: `${lineWidth}px ${lineType} ${colorBorder}`,
        transition: `all ${motionDurationMid} linear`,
        '&:active': {
          background: token.colorFillAlter
        },
        // Hover
        '&:hover': {
          height: `60%`,
          [`
              ${componentCls}-handler-up-inner,
              ${componentCls}-handler-down-inner
            `]: {
            color: colorPrimary
          }
        },
        '&-up-inner, &-down-inner': Object.assign(Object.assign({}, (0,es_style/* resetIcon */.Ro)()), {
          color: colorTextDescription,
          transition: `all ${motionDurationMid} linear`,
          userSelect: 'none'
        })
      },
      [`${componentCls}-handler-up`]: {
        borderStartEndRadius: borderRadius
      },
      [`${componentCls}-handler-down`]: {
        borderBlockStart: `${lineWidth}px ${lineType} ${colorBorder}`,
        borderEndEndRadius: borderRadius
      },
      // Disabled
      '&-disabled, &-readonly': {
        [`${componentCls}-handler-wrap`]: {
          display: 'none'
        }
      },
      [`
          ${componentCls}-handler-up-disabled,
          ${componentCls}-handler-down-disabled
        `]: {
        cursor: 'not-allowed'
      },
      [`
          ${componentCls}-handler-up-disabled:hover &-handler-up-inner,
          ${componentCls}-handler-down-disabled:hover &-handler-down-inner
        `]: {
        color: colorTextDisabled
      }
    }
  },
  // Border-less
  {
    [`${componentCls}-borderless`]: {
      borderColor: 'transparent',
      boxShadow: 'none',
      [`${componentCls}-handler-down`]: {
        borderBlockStartWidth: 0
      }
    }
  }];
};
const genAffixWrapperStyles = token => {
  const {
    componentCls,
    inputPaddingHorizontal,
    inputAffixPadding,
    controlWidth,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [`${componentCls}-affix-wrapper`]: Object.assign(Object.assign(Object.assign({}, (0,style/* genBasicInputStyle */.ik)(token)), (0,style/* genStatusStyle */.bi)(token)), {
      // or number handler will cover form status
      position: 'relative',
      display: 'inline-flex',
      width: controlWidth,
      padding: 0,
      paddingInlineStart: inputPaddingHorizontal,
      '&-lg': {
        borderRadius: borderRadiusLG
      },
      '&-sm': {
        borderRadius: borderRadiusSM
      },
      '&:not(&-disabled):hover': Object.assign(Object.assign({}, (0,style/* genHoverStyle */.pU)(token)), {
        zIndex: 1
      }),
      '&-focused, &:focus': {
        zIndex: 1
      },
      '&-disabled': {
        [`${componentCls}[disabled]`]: {
          background: 'transparent'
        }
      },
      [`> div${componentCls}`]: {
        width: '100%',
        border: 'none',
        outline: 'none',
        [`&${componentCls}-focused`]: {
          boxShadow: 'none !important'
        }
      },
      [`input${componentCls}-input`]: {
        padding: 0
      },
      '&::before': {
        width: 0,
        visibility: 'hidden',
        content: '"\\a0"'
      },
      [`${componentCls}-handler-wrap`]: {
        zIndex: 2
      },
      [componentCls]: {
        '&-prefix, &-suffix': {
          display: 'flex',
          flex: 'none',
          alignItems: 'center',
          pointerEvents: 'none'
        },
        '&-prefix': {
          marginInlineEnd: inputAffixPadding
        },
        '&-suffix': {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineEnd: 0,
          zIndex: 1,
          height: '100%',
          marginInlineEnd: inputPaddingHorizontal,
          marginInlineStart: inputAffixPadding
        }
      }
    })
  };
};
// ============================== Export ==============================
/* harmony default export */ var input_number_style = ((0,genComponentStyleHook/* default */.Z)('InputNumber', token => {
  const inputNumberToken = (0,style/* initInputToken */.e5)(token);
  return [genInputNumberStyles(inputNumberToken), genAffixWrapperStyles(inputNumberToken),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  (0,compact_item/* genCompactItemStyle */.c)(inputNumberToken)];
}, token => ({
  controlWidth: 90,
  handleWidth: token.controlHeightSM - token.lineWidth * 2,
  handleFontSize: token.fontSize / 2,
  handleVisible: 'auto'
})));
;// CONCATENATED MODULE: ./node_modules/antd/es/input-number/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













const input_number_InputNumber = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const size = react.useContext(SizeContext/* default */.Z);
  const [focused, setFocus] = react.useState(false);
  const inputRef = react.useRef(null);
  react.useImperativeHandle(ref, () => inputRef.current);
  const {
      className,
      size: customizeSize,
      disabled: customDisabled,
      prefixCls: customizePrefixCls,
      addonBefore,
      addonAfter,
      prefix,
      bordered = true,
      readOnly,
      status: customStatus,
      controls
    } = props,
    others = __rest(props, ["className", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "bordered", "readOnly", "status", "controls"]);
  const prefixCls = getPrefixCls('input-number', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = input_number_style(prefixCls);
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  let upIcon = /*#__PURE__*/react.createElement(icons_UpOutlined, {
    className: `${prefixCls}-handler-up-inner`
  });
  let downIcon = /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, {
    className: `${prefixCls}-handler-down-inner`
  });
  const controlsTemp = typeof controls === 'boolean' ? controls : undefined;
  if (typeof controls === 'object') {
    upIcon = typeof controls.upIcon === 'undefined' ? upIcon : /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-handler-up-inner`
    }, controls.upIcon);
    downIcon = typeof controls.downIcon === 'undefined' ? downIcon : /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-handler-down-inner`
    }, controls.downIcon);
  }
  const {
    hasFeedback,
    status: contextStatus,
    isFormItemInput,
    feedbackIcon
  } = react.useContext(form_context/* FormItemInputContext */.aM);
  const mergedStatus = (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus);
  const mergeSize = compactSize || customizeSize || size;
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const inputNumberClass = classnames_default()({
    [`${prefixCls}-lg`]: mergeSize === 'large',
    [`${prefixCls}-sm`]: mergeSize === 'small',
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-in-form-item`]: isFormItemInput
  }, (0,statusUtils/* getStatusClassNames */.Z)(prefixCls, mergedStatus), compactItemClassnames, hashId, className);
  let element = /*#__PURE__*/react.createElement(rc_input_number_es, Object.assign({
    ref: inputRef,
    disabled: mergedDisabled,
    className: inputNumberClass,
    upHandler: upIcon,
    downHandler: downIcon,
    prefixCls: prefixCls,
    readOnly: readOnly,
    controls: controlsTemp
  }, others));
  if (prefix != null || hasFeedback) {
    const affixWrapperCls = classnames_default()(`${prefixCls}-affix-wrapper`, (0,statusUtils/* getStatusClassNames */.Z)(`${prefixCls}-affix-wrapper`, mergedStatus, hasFeedback), {
      [`${prefixCls}-affix-wrapper-focused`]: focused,
      [`${prefixCls}-affix-wrapper-disabled`]: props.disabled,
      [`${prefixCls}-affix-wrapper-sm`]: mergeSize === 'small',
      [`${prefixCls}-affix-wrapper-lg`]: mergeSize === 'large',
      [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl',
      [`${prefixCls}-affix-wrapper-readonly`]: readOnly,
      [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
      // className will go to addon wrapper
      [`${className}`]: !(addonBefore || addonAfter) && className
    }, hashId);
    element = /*#__PURE__*/react.createElement("div", {
      className: affixWrapperCls,
      style: props.style,
      onMouseUp: () => inputRef.current.focus()
    }, prefix && /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-prefix`
    }, prefix), (0,reactNode/* cloneElement */.Tm)(element, {
      style: null,
      value: props.value,
      onFocus: event => {
        var _a;
        setFocus(true);
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, event);
      },
      onBlur: event => {
        var _a;
        setFocus(false);
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event);
      }
    }), hasFeedback && /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-suffix`
    }, feedbackIcon));
  }
  if (addonBefore != null || addonAfter != null) {
    const wrapperClassName = `${prefixCls}-group`;
    const addonClassName = `${wrapperClassName}-addon`;
    const addonBeforeNode = addonBefore ? /*#__PURE__*/react.createElement("div", {
      className: addonClassName
    }, addonBefore) : null;
    const addonAfterNode = addonAfter ? /*#__PURE__*/react.createElement("div", {
      className: addonClassName
    }, addonAfter) : null;
    const mergedWrapperClassName = classnames_default()(`${prefixCls}-wrapper`, wrapperClassName, hashId, {
      [`${wrapperClassName}-rtl`]: direction === 'rtl'
    });
    const mergedGroupClassName = classnames_default()(`${prefixCls}-group-wrapper`, {
      [`${prefixCls}-group-wrapper-sm`]: mergeSize === 'small',
      [`${prefixCls}-group-wrapper-lg`]: mergeSize === 'large',
      [`${prefixCls}-group-wrapper-rtl`]: direction === 'rtl'
    }, (0,statusUtils/* getStatusClassNames */.Z)(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId, className);
    element = /*#__PURE__*/react.createElement("div", {
      className: mergedGroupClassName,
      style: props.style
    }, /*#__PURE__*/react.createElement("div", {
      className: mergedWrapperClassName
    }, addonBeforeNode && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      status: true,
      override: true
    }, addonBeforeNode)), (0,reactNode/* cloneElement */.Tm)(element, {
      style: null,
      disabled: mergedDisabled
    }), addonAfterNode && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      status: true,
      override: true
    }, addonAfterNode))));
  }
  return wrapSSR(element);
});
const TypedInputNumber = input_number_InputNumber;
const PureInputNumber = props => /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
  theme: {
    components: {
      InputNumber: {
        handleVisible: true
      }
    }
  }
}, /*#__PURE__*/react.createElement(input_number_InputNumber, Object.assign({}, props)));
TypedInputNumber._InternalPanelDoNotUseOrYouWillBeFired = PureInputNumber;
/* harmony default export */ var input_number = (TypedInputNumber);

/***/ })

}]);