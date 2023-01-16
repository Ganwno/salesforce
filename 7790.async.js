"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7790],{

/***/ 27790:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ es_message; }
});

// UNUSED EXPORTS: actDestroy, actWrapper

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/rc-util/es/React/render.js
var render = __webpack_require__(38135);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 4 modules
var config_provider = __webpack_require__(58720);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(50888);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(21640);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(4340);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(89739);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__(78860);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(62874);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./node_modules/rc-notification/es/Notice.js





var Notify = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    style = props.style,
    className = props.className,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 4.5 : _props$duration,
    eventKey = props.eventKey,
    content = props.content,
    closable = props.closable,
    _props$closeIcon = props.closeIcon,
    closeIcon = _props$closeIcon === void 0 ? 'x' : _props$closeIcon,
    divProps = props.props,
    onClick = props.onClick,
    onNoticeClose = props.onNoticeClose;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    hovering = _React$useState2[0],
    setHovering = _React$useState2[1];
  // ======================== Close =========================
  var onInternalClose = function onInternalClose() {
    onNoticeClose(eventKey);
  };
  // ======================== Effect ========================
  react.useEffect(function () {
    if (!hovering && duration > 0) {
      var timeout = setTimeout(function () {
        onInternalClose();
      }, duration * 1000);
      return function () {
        clearTimeout(timeout);
      };
    }
  }, [duration, hovering]);
  // ======================== Render ========================
  var noticePrefixCls = "".concat(prefixCls, "-notice");
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, divProps, {
    ref: ref,
    className: classnames_default()(noticePrefixCls, className, (0,defineProperty/* default */.Z)({}, "".concat(noticePrefixCls, "-closable"), closable)),
    style: style,
    onMouseEnter: function onMouseEnter() {
      setHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      setHovering(false);
    },
    onClick: onClick
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(noticePrefixCls, "-content")
  }, content), closable && /*#__PURE__*/react.createElement("a", {
    tabIndex: 0,
    className: "".concat(noticePrefixCls, "-close"),
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onInternalClose();
    }
  }, closeIcon));
});
/* harmony default export */ var Notice = (Notify);
;// CONCATENATED MODULE: ./node_modules/rc-notification/es/Notifications.js









// ant-notification ant-notification-topRight
var Notifications = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-notification' : _props$prefixCls,
    container = props.container,
    motion = props.motion,
    maxCount = props.maxCount,
    className = props.className,
    style = props.style,
    onAllRemoved = props.onAllRemoved;
  var _React$useState = react.useState([]),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    configList = _React$useState2[0],
    setConfigList = _React$useState2[1];
  // ======================== Close =========================
  var onNoticeClose = function onNoticeClose(key) {
    var _config$onClose;
    // Trigger close event
    var config = configList.find(function (item) {
      return item.key === key;
    });
    config === null || config === void 0 ? void 0 : (_config$onClose = config.onClose) === null || _config$onClose === void 0 ? void 0 : _config$onClose.call(config);
    setConfigList(function (list) {
      return list.filter(function (item) {
        return item.key !== key;
      });
    });
  };
  // ========================= Refs =========================
  react.useImperativeHandle(ref, function () {
    return {
      open: function open(config) {
        setConfigList(function (list) {
          var clone = (0,toConsumableArray/* default */.Z)(list);
          // Replace if exist
          var index = clone.findIndex(function (item) {
            return item.key === config.key;
          });
          if (index >= 0) {
            clone[index] = config;
          } else {
            clone.push(config);
          }
          if (maxCount > 0 && clone.length > maxCount) {
            clone = clone.slice(-maxCount);
          }
          return clone;
        });
      },
      close: function close(key) {
        onNoticeClose(key);
      },
      destroy: function destroy() {
        setConfigList([]);
      }
    };
  });
  // ====================== Placements ======================
  var _React$useState3 = react.useState({}),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    placements = _React$useState4[0],
    setPlacements = _React$useState4[1];
  react.useEffect(function () {
    var nextPlacements = {};
    configList.forEach(function (config) {
      var _config$placement = config.placement,
        placement = _config$placement === void 0 ? 'topRight' : _config$placement;
      if (placement) {
        nextPlacements[placement] = nextPlacements[placement] || [];
        nextPlacements[placement].push(config);
      }
    });
    // Fill exist placements to avoid empty list causing remove without motion
    Object.keys(placements).forEach(function (placement) {
      nextPlacements[placement] = nextPlacements[placement] || [];
    });
    setPlacements(nextPlacements);
  }, [configList]);
  // Clean up container if all notices fade out
  var onAllNoticeRemoved = function onAllNoticeRemoved(placement) {
    setPlacements(function (originPlacements) {
      var clone = (0,objectSpread2/* default */.Z)({}, originPlacements);
      var list = clone[placement] || [];
      if (!list.length) {
        delete clone[placement];
      }
      return clone;
    });
  };
  // Effect tell that placements is empty now
  var emptyRef = react.useRef(false);
  react.useEffect(function () {
    if (Object.keys(placements).length > 0) {
      emptyRef.current = true;
    } else if (emptyRef.current) {
      // Trigger only when from exist to empty
      onAllRemoved === null || onAllRemoved === void 0 ? void 0 : onAllRemoved();
      emptyRef.current = false;
    }
  }, [placements]);
  // ======================== Render ========================
  if (!container) {
    return null;
  }
  var placementList = Object.keys(placements);
  return /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(react.Fragment, null, placementList.map(function (placement) {
    var placementConfigList = placements[placement];
    var keys = placementConfigList.map(function (config) {
      return {
        config: config,
        key: config.key
      };
    });
    var placementMotion = typeof motion === 'function' ? motion(placement) : motion;
    return /*#__PURE__*/react.createElement(es/* CSSMotionList */.V, (0,esm_extends/* default */.Z)({
      key: placement,
      className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(placement), className === null || className === void 0 ? void 0 : className(placement)),
      style: style === null || style === void 0 ? void 0 : style(placement),
      keys: keys,
      motionAppear: true
    }, placementMotion, {
      onAllRemoved: function onAllRemoved() {
        onAllNoticeRemoved(placement);
      }
    }), function (_ref, nodeRef) {
      var config = _ref.config,
        motionClassName = _ref.className,
        motionStyle = _ref.style;
      var key = config.key;
      var configClassName = config.className,
        configStyle = config.style;
      return /*#__PURE__*/react.createElement(Notice, (0,esm_extends/* default */.Z)({}, config, {
        ref: nodeRef,
        prefixCls: prefixCls,
        className: classnames_default()(motionClassName, configClassName),
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), configStyle),
        key: key,
        eventKey: key,
        onNoticeClose: onNoticeClose
      }));
    });
  })), container);
});
if (false) {}
/* harmony default export */ var es_Notifications = (Notifications);
;// CONCATENATED MODULE: ./node_modules/rc-notification/es/useNotification.js



var _excluded = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"];


var defaultGetContainer = function defaultGetContainer() {
  return document.body;
};
var uniqueKey = 0;
function mergeConfig() {
  var clone = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach(function (obj) {
    if (obj) {
      Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        if (val !== undefined) {
          clone[key] = val;
        }
      });
    }
  });
  return clone;
}
function useNotification() {
  var rootConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _rootConfig$getContai = rootConfig.getContainer,
    getContainer = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai,
    motion = rootConfig.motion,
    prefixCls = rootConfig.prefixCls,
    maxCount = rootConfig.maxCount,
    className = rootConfig.className,
    style = rootConfig.style,
    onAllRemoved = rootConfig.onAllRemoved,
    shareConfig = (0,objectWithoutProperties/* default */.Z)(rootConfig, _excluded);
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    container = _React$useState2[0],
    setContainer = _React$useState2[1];
  var notificationsRef = react.useRef();
  var contextHolder = /*#__PURE__*/react.createElement(es_Notifications, {
    container: container,
    ref: notificationsRef,
    prefixCls: prefixCls,
    motion: motion,
    maxCount: maxCount,
    className: className,
    style: style,
    onAllRemoved: onAllRemoved
  });
  var _React$useState3 = react.useState([]),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    taskQueue = _React$useState4[0],
    setTaskQueue = _React$useState4[1];
  // ========================= Refs =========================
  var api = react.useMemo(function () {
    return {
      open: function open(config) {
        var mergedConfig = mergeConfig(shareConfig, config);
        if (mergedConfig.key === null || mergedConfig.key === undefined) {
          mergedConfig.key = "rc-notification-".concat(uniqueKey);
          uniqueKey += 1;
        }
        setTaskQueue(function (queue) {
          return [].concat((0,toConsumableArray/* default */.Z)(queue), [{
            type: 'open',
            config: mergedConfig
          }]);
        });
      },
      close: function close(key) {
        setTaskQueue(function (queue) {
          return [].concat((0,toConsumableArray/* default */.Z)(queue), [{
            type: 'close',
            key: key
          }]);
        });
      },
      destroy: function destroy() {
        setTaskQueue(function (queue) {
          return [].concat((0,toConsumableArray/* default */.Z)(queue), [{
            type: 'destroy'
          }]);
        });
      }
    };
  }, []);
  // ======================= Container ======================
  // React 18 should all in effect that we will check container in each render
  // Which means getContainer should be stable.
  react.useEffect(function () {
    setContainer(getContainer());
  });
  // ======================== Effect ========================
  react.useEffect(function () {
    // Flush task when node ready
    if (notificationsRef.current && taskQueue.length) {
      taskQueue.forEach(function (task) {
        switch (task.type) {
          case 'open':
            notificationsRef.current.open(task.config);
            break;
          case 'close':
            notificationsRef.current.close(task.key);
            break;
          case 'destroy':
            notificationsRef.current.destroy();
            break;
        }
      });
      setTaskQueue([]);
    }
  }, [taskQueue]);
  // ======================== Return ========================
  return [api, contextHolder];
}
;// CONCATENATED MODULE: ./node_modules/rc-notification/es/index.js



// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 20 modules
var cssinjs_es = __webpack_require__(10248);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/message/style/index.js
// deps-lint-skip-all



const genMessageStyle = token => {
  const {
    componentCls,
    iconCls,
    boxShadowSecondary,
    colorBgElevated,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    borderRadiusLG,
    zIndexPopup,
    // Custom token
    messageNoticeContentPadding
  } = token;
  const messageMoveIn = new cssinjs_es/* Keyframes */.E4('MessageMoveIn', {
    '0%': {
      padding: 0,
      transform: 'translateY(-100%)',
      opacity: 0
    },
    '100%': {
      padding: paddingXS,
      transform: 'translateY(0)',
      opacity: 1
    }
  });
  const messageMoveOut = new cssinjs_es/* Keyframes */.E4('MessageMoveOut', {
    '0%': {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1
    },
    '100%': {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
  // ============================ Holder ============================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'fixed',
      top: marginXS,
      width: '100%',
      pointerEvents: 'none',
      zIndex: zIndexPopup,
      [`${componentCls}-move-up`]: {
        animationFillMode: 'forwards'
      },
      [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
        animationName: messageMoveIn,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
        animationPlayState: 'running'
      },
      [`${componentCls}-move-up-leave`]: {
        animationName: messageMoveOut,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
        animationPlayState: 'running'
      },
      '&-rtl': {
        direction: 'rtl',
        span: {
          direction: 'rtl'
        }
      }
    })
  },
  // ============================ Notice ============================
  {
    [`${componentCls}-notice`]: {
      padding: paddingXS,
      textAlign: 'center',
      [iconCls]: {
        verticalAlign: 'text-bottom',
        marginInlineEnd: marginXS,
        fontSize: fontSizeLG
      },
      [`${componentCls}-notice-content`]: {
        display: 'inline-block',
        padding: messageNoticeContentPadding,
        background: colorBgElevated,
        borderRadius: borderRadiusLG,
        boxShadow: boxShadowSecondary,
        pointerEvents: 'all'
      },
      [`${componentCls}-success ${iconCls}`]: {
        color: colorSuccess
      },
      [`${componentCls}-error ${iconCls}`]: {
        color: colorError
      },
      [`${componentCls}-warning ${iconCls}`]: {
        color: colorWarning
      },
      [`
        ${componentCls}-info ${iconCls},
        ${componentCls}-loading ${iconCls}`]: {
        color: colorInfo
      }
    }
  },
  // ============================= Pure =============================
  {
    [`${componentCls}-notice-pure-panel`]: {
      padding: 0,
      textAlign: 'start'
    }
  }];
};
// ============================== Export ==============================
/* harmony default export */ var message_style = ((0,genComponentStyleHook/* default */.Z)('Message', token => {
  // Gen-style functions here
  const combinedToken = (0,statistic/* merge */.TS)(token, {
    messageNoticeContentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
  });
  return [genMessageStyle(combinedToken)];
}, token => ({
  height: 150,
  zIndexPopup: token.zIndexPopupBase + 10
})));
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
;// CONCATENATED MODULE: ./node_modules/antd/es/message/PurePanel.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const TypeIcon = {
  info: /*#__PURE__*/react.createElement(InfoCircleFilled/* default */.Z, null),
  success: /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.Z, null),
  error: /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null),
  warning: /*#__PURE__*/react.createElement(ExclamationCircleFilled/* default */.Z, null),
  loading: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null)
};
function PureContent(_ref) {
  let {
    prefixCls,
    type,
    icon,
    children
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-custom-content`, `${prefixCls}-${type}`)
  }, icon || TypeIcon[type], /*#__PURE__*/react.createElement("span", null, children));
}
/** @private Internal Component. Do not use in your production. */
function PurePanel(props) {
  const {
      prefixCls: staticPrefixCls,
      className,
      type,
      icon,
      content
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "type", "icon", "content"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  const [, hashId] = message_style(prefixCls);
  return /*#__PURE__*/react.createElement(Notice, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    className: classnames_default()(className, hashId, `${prefixCls}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /*#__PURE__*/react.createElement(PureContent, {
      prefixCls: prefixCls,
      type: type,
      icon: icon
    }, content)
  }));
}
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(97937);
;// CONCATENATED MODULE: ./node_modules/antd/es/message/util.js
function getMotion(prefixCls, transitionName) {
  return {
    motionName: transitionName !== null && transitionName !== void 0 ? transitionName : `${prefixCls}-move-up`
  };
}
/** Wrap message open with promise like function */
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise(resolve => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/message/useMessage.js
var useMessage_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const DEFAULT_OFFSET = 8;
const DEFAULT_DURATION = 3;
const Holder = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    top,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    rtl,
    transitionName,
    onAllRemoved
  } = props;
  const {
    getPrefixCls,
    getPopupContainer
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  const [, hashId] = message_style(prefixCls);
  // =============================== Style ===============================
  const getStyle = () => ({
    left: '50%',
    transform: 'translateX(-50%)',
    top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
  });
  const getClassName = () => classnames_default()(hashId, rtl ? `${prefixCls}-rtl` : '');
  // ============================== Motion ===============================
  const getNotificationMotion = () => getMotion(prefixCls, transitionName);
  // ============================ Close Icon =============================
  const mergedCloseIcon = /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-close-x`
  }, /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: `${prefixCls}-close-icon`
  }));
  // ============================== Origin ===============================
  const [api, holder] = useNotification({
    prefixCls,
    style: getStyle,
    className: getClassName,
    motion: getNotificationMotion,
    closable: false,
    closeIcon: mergedCloseIcon,
    duration: DEFAULT_DURATION,
    getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
    maxCount,
    onAllRemoved
  });
  // ================================ Ref ================================
  react.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    hashId
  }));
  return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
let keyIndex = 0;
function useInternalMessage(notificationConfig) {
  const holderRef = react.useRef(null);
  // ================================ API ================================
  const wrapAPI = react.useMemo(() => {
    // Wrap with notification content
    // >>> close
    const close = key => {
      var _a;
      (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
    };
    // >>> Open
    const open = config => {
      if (!holderRef.current) {
         false ? 0 : void 0;
        const fakeResult = () => {};
        fakeResult.then = () => {};
        return fakeResult;
      }
      const {
        open: originOpen,
        prefixCls,
        hashId
      } = holderRef.current;
      const noticePrefixCls = `${prefixCls}-notice`;
      const {
          content,
          icon,
          type,
          key,
          className,
          onClose
        } = config,
        restConfig = useMessage_rest(config, ["content", "icon", "type", "key", "className", "onClose"]);
      let mergedKey = key;
      if (mergedKey === undefined || mergedKey === null) {
        keyIndex += 1;
        mergedKey = `antd-message-${keyIndex}`;
      }
      return wrapPromiseFn(resolve => {
        originOpen(Object.assign(Object.assign({}, restConfig), {
          key: mergedKey,
          content: /*#__PURE__*/react.createElement(PureContent, {
            prefixCls: prefixCls,
            type: type,
            icon: icon
          }, content),
          placement: 'top',
          className: classnames_default()(type && `${noticePrefixCls}-${type}`, hashId, className),
          onClose: () => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            resolve();
          }
        }));
        // Return close function
        return () => {
          close(mergedKey);
        };
      });
    };
    // >>> destroy
    const destroy = key => {
      var _a;
      if (key !== undefined) {
        close(key);
      } else {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
      }
    };
    const clone = {
      open,
      destroy
    };
    const keys = ['info', 'success', 'warning', 'error', 'loading'];
    keys.forEach(type => {
      const typeOpen = (jointContent, duration, onClose) => {
        let config;
        if (jointContent && typeof jointContent === 'object' && 'content' in jointContent) {
          config = jointContent;
        } else {
          config = {
            content: jointContent
          };
        }
        // Params
        let mergedDuration;
        let mergedOnClose;
        if (typeof duration === 'function') {
          mergedOnClose = duration;
        } else {
          mergedDuration = duration;
          mergedOnClose = onClose;
        }
        const mergedConfig = Object.assign(Object.assign({
          onClose: mergedOnClose,
          duration: mergedDuration
        }, config), {
          type
        });
        return open(mergedConfig);
      };
      clone[type] = typeOpen;
    });
    return clone;
  }, []);
  // ============================== Return ===============================
  return [wrapAPI, /*#__PURE__*/react.createElement(Holder, Object.assign({
    key: "message-holder"
  }, notificationConfig, {
    ref: holderRef
  }))];
}
function useMessage(notificationConfig) {
  return useInternalMessage(notificationConfig);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/message/index.js







const methods = ['success', 'info', 'warning', 'error', 'loading'];
let message = null;
let act = callback => callback();
let taskQueue = [];
let defaultGlobalConfig = {};
function getGlobalContext() {
  const {
    prefixCls: globalPrefixCls,
    getContainer: globalGetContainer,
    rtl,
    maxCount,
    top
  } = defaultGlobalConfig;
  const mergedPrefixCls = globalPrefixCls !== null && globalPrefixCls !== void 0 ? globalPrefixCls : (0,config_provider/* globalConfig */.w6)().getPrefixCls('message');
  const mergedContainer = (globalGetContainer === null || globalGetContainer === void 0 ? void 0 : globalGetContainer()) || document.body;
  return {
    prefixCls: mergedPrefixCls,
    container: mergedContainer,
    rtl,
    maxCount,
    top
  };
}
const GlobalHolder = /*#__PURE__*/react.forwardRef((_, ref) => {
  const [prefixCls, setPrefixCls] = react.useState();
  const [container, setContainer] = react.useState();
  const [maxCount, setMaxCount] = react.useState();
  const [rtl, setRTL] = react.useState();
  const [top, setTop] = react.useState();
  const [api, holder] = useInternalMessage({
    prefixCls,
    getContainer: () => container,
    maxCount,
    rtl,
    top
  });
  const global = (0,config_provider/* globalConfig */.w6)();
  const rootPrefixCls = global.getRootPrefixCls();
  const rootIconPrefixCls = global.getIconPrefixCls();
  const sync = () => {
    const {
      prefixCls: nextGlobalPrefixCls,
      container: nextGlobalContainer,
      maxCount: nextGlobalMaxCount,
      rtl: nextGlobalRTL,
      top: nextTop
    } = getGlobalContext();
    setPrefixCls(nextGlobalPrefixCls);
    setContainer(nextGlobalContainer);
    setMaxCount(nextGlobalMaxCount);
    setRTL(nextGlobalRTL);
    setTop(nextTop);
  };
  react.useEffect(sync, []);
  react.useImperativeHandle(ref, () => {
    const instance = Object.assign({}, api);
    Object.keys(instance).forEach(method => {
      instance[method] = function () {
        sync();
        return api[method].apply(api, arguments);
      };
    });
    return {
      instance,
      sync
    };
  });
  return /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: rootIconPrefixCls
  }, holder);
});
function flushNotice() {
  if (!message) {
    const holderFragment = document.createDocumentFragment();
    const newMessage = {
      fragment: holderFragment
    };
    message = newMessage;
    // Delay render to avoid sync issue
    act(() => {
      (0,render/* render */.s)( /*#__PURE__*/react.createElement(GlobalHolder, {
        ref: node => {
          const {
            instance,
            sync
          } = node || {};
          // React 18 test env will throw if call immediately in ref
          Promise.resolve().then(() => {
            if (!newMessage.instance && instance) {
              newMessage.instance = instance;
              newMessage.sync = sync;
              flushNotice();
            }
          });
        }
      }), holderFragment);
    });
    return;
  }
  // Notification not ready
  if (!message.instance) {
    return;
  }
  // >>> Execute task
  taskQueue.forEach(task => {
    const {
      type,
      skipped
    } = task;
    // Only `skipped` when user call notice but cancel it immediately
    // and instance not ready
    if (!skipped) {
      switch (type) {
        case 'open':
          {
            act(() => {
              const closeFn = message.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
            break;
          }
        case 'destroy':
          act(() => {
            message === null || message === void 0 ? void 0 : message.instance.destroy(task.key);
          });
          break;
        // Other type open
        default:
          {
            act(() => {
              var _message$instance;
              const closeFn = (_message$instance = message.instance)[type].apply(_message$instance, (0,toConsumableArray/* default */.Z)(task.args));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
          }
      }
    }
  });
  // Clean up
  taskQueue = [];
}
function setMessageGlobalConfig(config) {
  defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
  // Trigger sync for it
  act(() => {
    var _a;
    (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
  });
}
function message_open(config) {
  const result = wrapPromiseFn(resolve => {
    let closeFn;
    const task = {
      type: 'open',
      config,
      resolve,
      setCloseFn: fn => {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
}
function typeOpen(type, args) {
  const result = wrapPromiseFn(resolve => {
    let closeFn;
    const task = {
      type,
      args,
      resolve,
      setCloseFn: fn => {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
}
function destroy(key) {
  taskQueue.push({
    type: 'destroy',
    key
  });
  flushNotice();
}
const baseStaticMethods = {
  open: message_open,
  destroy,
  config: setMessageGlobalConfig,
  useMessage: useMessage,
  _InternalPanelDoNotUseOrYouWillBeFired: PurePanel
};
const staticMethods = baseStaticMethods;
methods.forEach(type => {
  staticMethods[type] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return typeOpen(type, args);
  };
});
// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
const noop = () => {};
/** @private Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actWrapper = (/* unused pure expression or super */ null && (noop));
if (false) {}
/** @private Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actDestroy = (/* unused pure expression or super */ null && (noop));
if (false) {}
/* harmony default export */ var es_message = (staticMethods);

/***/ })

}]);