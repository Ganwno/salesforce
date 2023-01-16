"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5045],{

/***/ 15045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_collapse; }
});

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(18073);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(73568);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(96774);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(62874);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/PanelContent.js



/* eslint-disable no-underscore-dangle */

/* eslint-disable react/prop-types */


var PanelContent = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classnames;

  var prefixCls = props.prefixCls,
      forceRender = props.forceRender,
      className = props.className,
      style = props.style,
      children = props.children,
      isActive = props.isActive,
      role = props.role;

  var _React$useState = react.useState(isActive || forceRender),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      rendered = _React$useState2[0],
      setRendered = _React$useState2[1];

  react.useEffect(function () {
    if (forceRender || isActive) {
      setRendered(true);
    }
  }, [forceRender, isActive]);

  if (!rendered) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: classnames_default()("".concat(prefixCls, "-content"), (_classnames = {}, (0,defineProperty/* default */.Z)(_classnames, "".concat(prefixCls, "-content-active"), isActive), (0,defineProperty/* default */.Z)(_classnames, "".concat(prefixCls, "-content-inactive"), !isActive), _classnames), className),
    style: style,
    role: role
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-content-box")
  }, children));
});
PanelContent.displayName = 'PanelContent';
/* harmony default export */ var es_PanelContent = (PanelContent);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/Panel.js







var _excluded = ["className", "id", "style", "prefixCls", "headerClass", "children", "isActive", "destroyInactivePanel", "accordion", "forceRender", "openMotion", "extra", "collapsible"];

/* eslint-disable react/prop-types */






var CollapsePanel = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(CollapsePanel, _React$Component);

  var _super = (0,createSuper/* default */.Z)(CollapsePanel);

  function CollapsePanel() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, CollapsePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onItemClick = function () {
      var _this$props = _this.props,
          onItemClick = _this$props.onItemClick,
          panelKey = _this$props.panelKey;

      if (typeof onItemClick === 'function') {
        onItemClick(panelKey);
      }
    };

    _this.handleKeyPress = function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.onItemClick();
      }
    };

    _this.renderIcon = function () {
      var _this$props2 = _this.props,
          showArrow = _this$props2.showArrow,
          expandIcon = _this$props2.expandIcon,
          prefixCls = _this$props2.prefixCls,
          collapsible = _this$props2.collapsible;

      if (!showArrow) {
        return null;
      }

      var iconNode = typeof expandIcon === 'function' ? expandIcon(_this.props) : /*#__PURE__*/react.createElement("i", {
        className: "arrow"
      });
      return iconNode && /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-expand-icon"),
        onClick: collapsible === 'header' || collapsible === 'icon' ? _this.onItemClick : null
      }, iconNode);
    };

    _this.renderTitle = function () {
      var _this$props3 = _this.props,
          header = _this$props3.header,
          prefixCls = _this$props3.prefixCls,
          collapsible = _this$props3.collapsible;
      return /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-header-text"),
        onClick: collapsible === 'header' ? _this.onItemClick : null
      }, header);
    };

    return _this;
  }

  (0,createClass/* default */.Z)(CollapsePanel, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !shallowequal_default()(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props4 = this.props,
          className = _this$props4.className,
          id = _this$props4.id,
          style = _this$props4.style,
          prefixCls = _this$props4.prefixCls,
          headerClass = _this$props4.headerClass,
          children = _this$props4.children,
          isActive = _this$props4.isActive,
          destroyInactivePanel = _this$props4.destroyInactivePanel,
          accordion = _this$props4.accordion,
          forceRender = _this$props4.forceRender,
          openMotion = _this$props4.openMotion,
          extra = _this$props4.extra,
          collapsible = _this$props4.collapsible,
          rest = (0,objectWithoutProperties/* default */.Z)(_this$props4, _excluded);

      var disabled = collapsible === 'disabled';
      var collapsibleHeader = collapsible === 'header';
      var collapsibleIcon = collapsible === 'icon';
      var itemCls = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item-active"), isActive), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item-disabled"), disabled), _classNames), className);
      var headerCls = classnames_default()("".concat(prefixCls, "-header"), (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, headerClass, headerClass), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-header-collapsible-only"), collapsibleHeader), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-icon-collapsible-only"), collapsibleIcon), _classNames2));
      /** header 节点属性 */

      var headerProps = {
        className: headerCls,
        'aria-expanded': isActive,
        'aria-disabled': disabled,
        onKeyPress: this.handleKeyPress
      };

      if (!collapsibleHeader && !collapsibleIcon) {
        headerProps.onClick = this.onItemClick;
        headerProps.role = accordion ? 'tab' : 'button';
        headerProps.tabIndex = disabled ? -1 : 0;
      }

      var ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean'; // https://github.com/ant-design/ant-design/pull/37419#issuecomment-1238812797

      delete rest.header;
      delete rest.panelKey;
      delete rest.onItemClick;
      delete rest.showArrow;
      delete rest.expandIcon;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, rest, {
        className: itemCls,
        style: style,
        id: id
      }), /*#__PURE__*/react.createElement("div", headerProps, this.renderIcon(), this.renderTitle(), ifExtraExist && /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra)), /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
        visible: isActive,
        leavedClassName: "".concat(prefixCls, "-content-hidden")
      }, openMotion, {
        forceRender: forceRender,
        removeOnLeave: destroyInactivePanel
      }), function (_ref, ref) {
        var motionClassName = _ref.className,
            motionStyle = _ref.style;
        return /*#__PURE__*/react.createElement(es_PanelContent, {
          ref: ref,
          prefixCls: prefixCls,
          className: motionClassName,
          style: motionStyle,
          isActive: isActive,
          forceRender: forceRender,
          role: accordion ? 'tabpanel' : null
        }, children);
      }));
    }
  }]);

  return CollapsePanel;
}(react.Component);

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  onItemClick: function onItemClick() {},
  headerClass: '',
  forceRender: false
};
/* harmony default export */ var Panel = (CollapsePanel);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/Collapse.js








/* eslint-disable react/prop-types */






function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;

  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = (0,esm_typeof/* default */.Z)(currentActiveKey);

    currentActiveKey = activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
  }

  return currentActiveKey.map(function (key) {
    return String(key);
  });
}

var Collapse = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Collapse, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Collapse);

  function Collapse(_props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Collapse);

    _this = _super.call(this, _props);

    _this.onClickItem = function (key) {
      var activeKey = _this.state.activeKey;

      if (_this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = (0,toConsumableArray/* default */.Z)(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;

        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }

      _this.setActiveKey(activeKey);
    };

    _this.getNewChild = function (child, index) {
      if (!child) return null;
      var activeKey = _this.state.activeKey;
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          openMotion = _this$props.openMotion,
          accordion = _this$props.accordion,
          rootDestroyInactivePanel = _this$props.destroyInactivePanel,
          expandIcon = _this$props.expandIcon,
          collapsible = _this$props.collapsible; // If there is no key provide, use the panel order as default key

      var key = child.key || String(index);
      var _child$props = child.props,
          header = _child$props.header,
          headerClass = _child$props.headerClass,
          destroyInactivePanel = _child$props.destroyInactivePanel,
          childCollapsible = _child$props.collapsible;
      var isActive = false;

      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
      var props = {
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel: destroyInactivePanel !== null && destroyInactivePanel !== void 0 ? destroyInactivePanel : rootDestroyInactivePanel,
        openMotion: openMotion,
        accordion: accordion,
        children: child.props.children,
        onItemClick: mergeCollapsible === 'disabled' ? null : _this.onClickItem,
        expandIcon: expandIcon,
        collapsible: mergeCollapsible
      }; // https://github.com/ant-design/ant-design/issues/20479

      if (typeof child.type === 'string') {
        return child;
      }

      Object.keys(props).forEach(function (propName) {
        if (typeof props[propName] === 'undefined') {
          delete props[propName];
        }
      });
      return /*#__PURE__*/react.cloneElement(child, props);
    };

    _this.getItems = function () {
      var children = _this.props.children;
      return (0,toArray/* default */.Z)(children).map(_this.getNewChild);
    };

    _this.setActiveKey = function (activeKey) {
      if (!('activeKey' in _this.props)) {
        _this.setState({
          activeKey: activeKey
        });
      }

      _this.props.onChange(_this.props.accordion ? activeKey[0] : activeKey);
    };

    var _activeKey = _props.activeKey,
        defaultActiveKey = _props.defaultActiveKey;
    var currentActiveKey = defaultActiveKey;

    if ('activeKey' in _props) {
      currentActiveKey = _activeKey;
    }

    _this.state = {
      activeKey: getActiveKeysArray(currentActiveKey)
    };
    return _this;
  }

  (0,createClass/* default */.Z)(Collapse, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowequal_default()(this.props, nextProps) || !shallowequal_default()(this.state, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          style = _this$props2.style,
          accordion = _this$props2.accordion;
      var collapseClassName = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, prefixCls, true), (0,defineProperty/* default */.Z)(_classNames, className, !!className), _classNames));
      return /*#__PURE__*/react.createElement("div", {
        className: collapseClassName,
        style: style,
        role: accordion ? 'tablist' : null
      }, this.getItems());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};

      if ('activeKey' in nextProps) {
        newState.activeKey = getActiveKeysArray(nextProps.activeKey);
      }

      return newState;
    }
  }]);

  return Collapse;
}(react.Component);

Collapse.defaultProps = {
  prefixCls: 'rc-collapse',
  onChange: function onChange() {},
  accordion: false,
  destroyInactivePanel: false
};
Collapse.Panel = Panel;
/* harmony default export */ var es_Collapse = (Collapse);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/index.js

/* harmony default export */ var rc_collapse_es = (es_Collapse);
var es_Panel = es_Collapse.Panel;

// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/CollapsePanel.js





const CollapsePanel_CollapsePanel = props => {
   false ? 0 : void 0;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const {
    prefixCls: customizePrefixCls,
    className = '',
    showArrow = true
  } = props;
  const prefixCls = getPrefixCls('collapse', customizePrefixCls);
  const collapsePanelClassName = classnames_default()({
    [`${prefixCls}-no-arrow`]: !showArrow
  }, className);
  return /*#__PURE__*/react.createElement(rc_collapse_es.Panel, Object.assign({}, props, {
    prefixCls: prefixCls,
    className: collapsePanelClassName
  }));
};
/* harmony default export */ var collapse_CollapsePanel = (CollapsePanel_CollapsePanel);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/collapse.js
var collapse = __webpack_require__(33507);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/style/index.js



const genBaseStyle = token => {
  const {
    componentCls,
    collapseContentBg,
    padding,
    collapseContentPaddingHorizontal,
    collapseHeaderBg,
    collapseHeaderPadding,
    collapsePanelBorderRadius,
    lineWidth,
    lineType,
    colorBorder,
    colorText,
    colorTextHeading,
    colorTextDisabled,
    fontSize,
    lineHeight,
    marginSM,
    paddingSM,
    motionDurationSlow,
    fontSizeIcon
  } = token;
  const borderBase = `${lineWidth}px ${lineType} ${colorBorder}`;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      backgroundColor: collapseHeaderBg,
      border: borderBase,
      borderBottom: 0,
      borderRadius: `${collapsePanelBorderRadius}px`,
      [`&-rtl`]: {
        direction: 'rtl'
      },
      [`& > ${componentCls}-item`]: {
        borderBottom: borderBase,
        [`&:last-child`]: {
          [`
            &,
            & > ${componentCls}-header`]: {
            borderRadius: `0 0 ${collapsePanelBorderRadius}px ${collapsePanelBorderRadius}px`
          }
        },
        [`> ${componentCls}-header`]: {
          position: 'relative',
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          padding: collapseHeaderPadding,
          color: colorTextHeading,
          lineHeight,
          cursor: 'pointer',
          transition: `all ${motionDurationSlow}, visibility 0s`,
          [`> ${componentCls}-header-text`]: {
            flex: 'auto'
          },
          '&:focus': {
            outline: 'none'
          },
          // >>>>> Arrow
          [`${componentCls}-expand-icon`]: {
            height: fontSize * lineHeight,
            display: 'flex',
            alignItems: 'center',
            paddingInlineEnd: marginSM
          },
          [`${componentCls}-arrow`]: Object.assign(Object.assign({}, (0,style/* resetIcon */.Ro)()), {
            fontSize: fontSizeIcon,
            svg: {
              transition: `transform ${motionDurationSlow}`
            }
          }),
          // >>>>> Text
          [`${componentCls}-header-text`]: {
            marginInlineEnd: 'auto'
          }
        },
        [`${componentCls}-header-collapsible-only`]: {
          cursor: 'default',
          [`${componentCls}-header-text`]: {
            flex: 'none',
            cursor: 'pointer'
          }
        },
        [`${componentCls}-icon-collapsible-only`]: {
          cursor: 'default',
          [`${componentCls}-expand-icon`]: {
            cursor: 'pointer'
          }
        },
        [`&${componentCls}-no-arrow`]: {
          [`> ${componentCls}-header`]: {
            paddingInlineStart: paddingSM
          }
        }
      },
      [`${componentCls}-content`]: {
        color: colorText,
        backgroundColor: collapseContentBg,
        borderTop: borderBase,
        [`& > ${componentCls}-content-box`]: {
          padding: `${padding}px ${collapseContentPaddingHorizontal}px`
        },
        [`&-hidden`]: {
          display: 'none'
        }
      },
      [`${componentCls}-item:last-child`]: {
        [`> ${componentCls}-content`]: {
          borderRadius: `0 0 ${collapsePanelBorderRadius}px ${collapsePanelBorderRadius}px`
        }
      },
      [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
        [`
          &,
          & > .arrow
        `]: {
          color: colorTextDisabled,
          cursor: 'not-allowed'
        }
      },
      // ========================== Icon Position ==========================
      [`&${componentCls}-icon-position-end`]: {
        [`& > ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            [`${componentCls}-expand-icon`]: {
              order: 1,
              paddingInlineEnd: 0,
              paddingInlineStart: marginSM
            }
          }
        }
      }
    })
  };
};
const genArrowStyle = token => {
  const {
    componentCls
  } = token;
  const fixedSelector = `> ${componentCls}-item > ${componentCls}-header ${componentCls}-arrow svg`;
  return {
    [`${componentCls}-rtl`]: {
      [fixedSelector]: {
        transform: `rotate(180deg)`
      }
    }
  };
};
const genBorderlessStyle = token => {
  const {
    componentCls,
    collapseHeaderBg,
    paddingXXS,
    colorBorder
  } = token;
  return {
    [`${componentCls}-borderless`]: {
      backgroundColor: collapseHeaderBg,
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: `1px solid ${colorBorder}`
      },
      [`
        > ${componentCls}-item:last-child,
        > ${componentCls}-item:last-child ${componentCls}-header
      `]: {
        borderRadius: 0
      },
      [`> ${componentCls}-item:last-child`]: {
        borderBottom: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content`]: {
        backgroundColor: 'transparent',
        borderTop: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content > ${componentCls}-content-box`]: {
        paddingTop: paddingXXS
      }
    }
  };
};
const genGhostStyle = token => {
  const {
    componentCls,
    paddingSM
  } = token;
  return {
    [`${componentCls}-ghost`]: {
      backgroundColor: 'transparent',
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: 0,
        [`> ${componentCls}-content`]: {
          backgroundColor: 'transparent',
          border: 0,
          [`> ${componentCls}-content-box`]: {
            paddingBlock: paddingSM
          }
        }
      }
    }
  };
};
/* harmony default export */ var collapse_style = ((0,genComponentStyleHook/* default */.Z)('Collapse', token => {
  const collapseToken = (0,statistic/* merge */.TS)(token, {
    collapseContentBg: token.colorBgContainer,
    collapseHeaderBg: token.colorFillAlter,
    collapseHeaderPadding: `${token.paddingSM}px ${token.padding}px`,
    collapsePanelBorderRadius: token.borderRadiusLG,
    collapseContentPaddingHorizontal: 16 // Fixed value
  });

  return [genBaseStyle(collapseToken), genBorderlessStyle(collapseToken), genGhostStyle(collapseToken), genArrowStyle(collapseToken), (0,collapse/* default */.Z)(collapseToken)];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/Collapse.js












const Collapse_Collapse = props => {
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
    prefixCls: customizePrefixCls,
    className = '',
    bordered = true,
    ghost,
    expandIconPosition = 'start'
  } = props;
  const prefixCls = getPrefixCls('collapse', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [wrapSSR, hashId] = collapse_style(prefixCls);
  // Warning if use legacy type `expandIconPosition`
   false ? 0 : void 0;
  // Align with logic position
  const mergedExpandIconPosition = react.useMemo(() => {
    if (expandIconPosition === 'left') {
      return 'start';
    }
    return expandIconPosition === 'right' ? 'end' : expandIconPosition;
  }, [expandIconPosition]);
  const renderExpandIcon = function () {
    let panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      expandIcon
    } = props;
    const icon = expandIcon ? expandIcon(panelProps) : /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, {
      rotate: panelProps.isActive ? 90 : undefined
    });
    return (0,reactNode/* cloneElement */.Tm)(icon, () => ({
      className: classnames_default()(icon.props.className, `${prefixCls}-arrow`)
    }));
  };
  const collapseClassName = classnames_default()(`${prefixCls}-icon-position-${mergedExpandIconPosition}`, {
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-ghost`]: !!ghost
  }, className, hashId);
  const openMotion = Object.assign(Object.assign({}, (0,motion/* default */.ZP)(rootPrefixCls)), {
    motionAppear: false,
    leavedClassName: `${prefixCls}-content-hidden`
  });
  const getItems = () => {
    const {
      children
    } = props;
    return (0,toArray/* default */.Z)(children).map((child, index) => {
      var _a;
      if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) {
        const key = child.key || String(index);
        const {
          disabled,
          collapsible
        } = child.props;
        const childProps = Object.assign(Object.assign({}, (0,omit/* default */.Z)(child.props, ['disabled'])), {
          key,
          collapsible: collapsible !== null && collapsible !== void 0 ? collapsible : disabled ? 'disabled' : undefined
        });
        return (0,reactNode/* cloneElement */.Tm)(child, childProps);
      }
      return child;
    });
  };
  return wrapSSR( /*#__PURE__*/react.createElement(rc_collapse_es, Object.assign({
    openMotion: openMotion
  }, props, {
    expandIcon: renderExpandIcon,
    prefixCls: prefixCls,
    className: collapseClassName
  }), getItems()));
};
Collapse_Collapse.Panel = collapse_CollapsePanel;
/* harmony default export */ var collapse_Collapse = (Collapse_Collapse);
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/index.js

/* harmony default export */ var es_collapse = (collapse_Collapse);

/***/ })

}]);