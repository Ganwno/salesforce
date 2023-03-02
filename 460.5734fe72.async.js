"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[460],{

/***/ 6171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_LeftOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LeftOutlined.js
// This icon file is generated automatically.
var LeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };
/* harmony default export */ var asn_LeftOutlined = (LeftOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var LeftOutlined_LeftOutlined = function LeftOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LeftOutlined
  }));
};
LeftOutlined_LeftOutlined.displayName = 'LeftOutlined';
/* harmony default export */ var icons_LeftOutlined = (/*#__PURE__*/react.forwardRef(LeftOutlined_LeftOutlined));

/***/ }),

/***/ 18073:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_RightOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js
// This icon file is generated automatically.
var RightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
/* harmony default export */ var asn_RightOutlined = (RightOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var RightOutlined_RightOutlined = function RightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_RightOutlined
  }));
};
RightOutlined_RightOutlined.displayName = 'RightOutlined';
/* harmony default export */ var icons_RightOutlined = (/*#__PURE__*/react.forwardRef(RightOutlined_RightOutlined));

/***/ }),

/***/ 8745:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ genPurePanel; }
/* harmony export */ });
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21770);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53124);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58720);



/* istanbul ignore next */
function genPurePanel(Component, defaultPrefixCls, getDropdownCls) {
  return function PurePanel(props) {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const [popupHeight, setPopupHeight] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [popupWidth, setPopupWidth] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [open, setOpen] = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__/* .ConfigContext */ .E_);
    const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(entries => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
      theme: {
        token: {
          motionDurationFast: '0.01s',
          motionDurationMid: '0.01s',
          motionDurationSlow: '0.01s'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      ref: holderRef,
      style: {
        paddingBottom: popupHeight,
        position: 'relative',
        width: 'fit-content',
        minWidth: popupWidth
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, Object.assign({}, props, {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open: open,
      visible: open,
      getPopupContainer: () => holderRef.current
    }))));
  };
}

/***/ }),

/***/ 88258:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53124);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32983);



const defaultRenderEmpty = componentName => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__/* .ConfigConsumer */ .C, null, _ref => {
  let {
    getPrefixCls
  } = _ref;
  const prefix = getPrefixCls('empty');
  switch (componentName) {
    case 'Table':
    case 'List':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        image: _empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PRESENTED_IMAGE_SIMPLE */ .Z.PRESENTED_IMAGE_SIMPLE
      });
    case 'Select':
    case 'TreeSelect':
    case 'Cascader':
    case 'Transfer':
    case 'Mentions':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        image: _empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PRESENTED_IMAGE_SIMPLE */ .Z.PRESENTED_IMAGE_SIMPLE,
        className: `${prefix}-small`
      });
    /* istanbul ignore next */
    default:
      // Should never hit if we take all the component into consider.
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null);
  }
});
/* harmony default export */ __webpack_exports__["Z"] = (defaultRenderEmpty);

/***/ }),

/***/ 71648:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_dropdown; }
});

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(18073);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-dropdown/es/index.js + 3 modules
var es = __webpack_require__(60057);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 11 modules
var es_menu = __webpack_require__(68508);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/OverrideContext.js
var OverrideContext = __webpack_require__(76529);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/PurePanel.js
var PurePanel = __webpack_require__(8745);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/placements.js
var placements = __webpack_require__(80636);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(89705);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
// EXTERNAL MODULE: ./node_modules/antd/es/style/placementArrow.js
var placementArrow = __webpack_require__(97414);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/slide.js
var slide = __webpack_require__(67771);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/move.js
var move = __webpack_require__(33297);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(50438);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/button.js
const genButtonStyle = token => {
  const {
    componentCls,
    antCls,
    paddingXS,
    opacityLoading
  } = token;
  return {
    [`${componentCls}-button`]: {
      whiteSpace: 'nowrap',
      [`&${antCls}-btn-group > ${antCls}-btn`]: {
        [`&-loading, &-loading + ${antCls}-btn`]: {
          cursor: 'default',
          pointerEvents: 'none',
          opacity: opacityLoading
        },
        [`&:last-child:not(:first-child):not(${antCls}-btn-icon-only)`]: {
          paddingInline: paddingXS
        }
      }
    }
  };
};
/* harmony default export */ var style_button = (genButtonStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/status.js
const genStatusStyle = token => {
  const {
    componentCls,
    menuCls,
    colorError,
    colorTextLightSolid
  } = token;
  const itemCls = `${menuCls}-item`;
  return {
    [`${componentCls}, ${componentCls}-menu-submenu`]: {
      [`${menuCls} ${itemCls}`]: {
        [`&${itemCls}-danger:not(${itemCls}-disabled)`]: {
          color: colorError,
          '&:hover': {
            color: colorTextLightSolid,
            backgroundColor: colorError
          }
        }
      }
    }
  };
};
/* harmony default export */ var style_status = (genStatusStyle);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/roundedArrow.js
var roundedArrow = __webpack_require__(79511);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/index.js






// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    menuCls,
    zIndexPopup,
    dropdownArrowDistance,
    dropdownArrowOffset,
    sizePopupArrow,
    antCls,
    iconCls,
    motionDurationMid,
    dropdownPaddingVertical,
    fontSize,
    dropdownEdgeChildPadding,
    colorTextDisabled,
    fontSizeIcon,
    controlPaddingHorizontal,
    colorBgElevated,
    boxShadowPopoverArrow
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: zIndexPopup,
      display: 'block',
      // A placeholder out of dropdown visible range to avoid close when user moving
      '&::before': {
        position: 'absolute',
        insetBlock: -dropdownArrowDistance + sizePopupArrow / 2,
        // insetInlineStart: -7, // FIXME: Seems not work for hidden element
        zIndex: -9999,
        opacity: 0.0001,
        content: '""'
      },
      [`${componentCls}-wrap`]: {
        position: 'relative',
        [`${antCls}-btn > ${iconCls}-down`]: {
          fontSize: fontSizeIcon
        },
        [`${iconCls}-down::before`]: {
          transition: `transform ${motionDurationMid}`
        }
      },
      [`${componentCls}-wrap-open`]: {
        [`${iconCls}-down::before`]: {
          transform: `rotate(180deg)`
        }
      },
      [`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]: {
        display: 'none'
      },
      // =============================================================
      // ==                          Arrow                          ==
      // =============================================================
      // Offset the popover to account for the dropdown arrow
      [`
        &-show-arrow&-placement-topLeft,
        &-show-arrow&-placement-top,
        &-show-arrow&-placement-topRight
      `]: {
        paddingBottom: dropdownArrowDistance
      },
      [`
        &-show-arrow&-placement-bottomLeft,
        &-show-arrow&-placement-bottom,
        &-show-arrow&-placement-bottomRight
      `]: {
        paddingTop: dropdownArrowDistance
      },
      // Note: .popover-arrow is outer, .popover-arrow:after is inner
      [`${componentCls}-arrow`]: Object.assign({
        position: 'absolute',
        zIndex: 1,
        display: 'block'
      }, (0,roundedArrow/* roundedArrow */.r)(sizePopupArrow, token.borderRadiusXS, token.borderRadiusOuter, colorBgElevated, boxShadowPopoverArrow)),
      [`
        &-placement-top > ${componentCls}-arrow,
        &-placement-topLeft > ${componentCls}-arrow,
        &-placement-topRight > ${componentCls}-arrow
      `]: {
        bottom: dropdownArrowDistance,
        transform: 'translateY(100%) rotate(180deg)'
      },
      [`&-placement-top > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
      },
      [`&-placement-topLeft > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [`&-placement-topRight > ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [`
          &-placement-bottom > ${componentCls}-arrow,
          &-placement-bottomLeft > ${componentCls}-arrow,
          &-placement-bottomRight > ${componentCls}-arrow
        `]: {
        top: dropdownArrowDistance,
        transform: `translateY(-100%)`
      },
      [`&-placement-bottom > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: `translateY(-100%) translateX(-50%)`
      },
      [`&-placement-bottomLeft > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [`&-placement-bottomRight > ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      // =============================================================
      // ==                         Motion                          ==
      // =============================================================
      // When position is not enough for dropdown, the placement will revert.
      // We will handle this with revert motion name.
      [`&${antCls}-slide-down-enter${antCls}-slide-down-enter-active&-placement-bottomLeft,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active&-placement-bottomLeft
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active&-placement-bottom,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active&-placement-bottom,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active&-placement-bottomRight,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active&-placement-bottomRight`]: {
        animationName: slide/* slideUpIn */.fJ
      },
      [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active&-placement-topLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active&-placement-topLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active&-placement-top,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active&-placement-top,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active&-placement-topRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active&-placement-topRight`]: {
        animationName: slide/* slideDownIn */.Qt
      },
      [`&${antCls}-slide-down-leave${antCls}-slide-down-leave-active&-placement-bottomLeft,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active&-placement-bottom,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active&-placement-bottomRight`]: {
        animationName: slide/* slideUpOut */.Uw
      },
      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active&-placement-topLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active&-placement-top,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active&-placement-topRight`]: {
        animationName: slide/* slideDownOut */.ly
      }
    })
  }, {
    // =============================================================
    // ==                          Menu                           ==
    // =============================================================
    [`${componentCls} ${menuCls}`]: {
      position: 'relative',
      margin: 0
    },
    [`${menuCls}-submenu-popup`]: {
      position: 'absolute',
      zIndex: zIndexPopup,
      background: 'transparent',
      boxShadow: 'none',
      transformOrigin: '0 0',
      'ul,li': {
        listStyle: 'none'
      },
      ul: {
        marginInline: '0.3em'
      }
    },
    [`${componentCls}, ${componentCls}-menu-submenu`]: {
      [menuCls]: Object.assign(Object.assign({
        padding: dropdownEdgeChildPadding,
        listStyleType: 'none',
        backgroundColor: colorBgElevated,
        backgroundClip: 'padding-box',
        borderRadius: token.borderRadiusLG,
        outline: 'none',
        boxShadow: token.boxShadowSecondary
      }, (0,style/* genFocusStyle */.Qy)(token)), {
        [`${menuCls}-item-group-title`]: {
          padding: `${dropdownPaddingVertical}px ${controlPaddingHorizontal}px`,
          color: token.colorTextDescription,
          transition: `all ${motionDurationMid}`
        },
        // ======================= Item Content =======================
        [`${menuCls}-item`]: {
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          borderRadius: token.borderRadiusSM
        },
        [`${menuCls}-item-icon`]: {
          minWidth: fontSize,
          marginInlineEnd: token.marginXS,
          fontSize: token.fontSizeSM
        },
        [`${menuCls}-title-content`]: {
          flex: 'auto',
          '> a': {
            color: 'inherit',
            transition: `all ${motionDurationMid}`,
            '&:hover': {
              color: 'inherit'
            },
            '&::after': {
              position: 'absolute',
              inset: 0,
              content: '""'
            }
          }
        },
        // =========================== Item ===========================
        [`${menuCls}-item, ${menuCls}-submenu-title`]: Object.assign(Object.assign({
          clear: 'both',
          margin: 0,
          padding: `${dropdownPaddingVertical}px ${controlPaddingHorizontal}px`,
          color: token.colorText,
          fontWeight: 'normal',
          fontSize,
          lineHeight: token.lineHeight,
          cursor: 'pointer',
          transition: `all ${motionDurationMid}`,
          [`&:hover, &-active`]: {
            backgroundColor: token.controlItemBgHover
          }
        }, (0,style/* genFocusStyle */.Qy)(token)), {
          '&-selected': {
            color: token.colorPrimary,
            backgroundColor: token.controlItemBgActive,
            '&:hover, &-active': {
              backgroundColor: token.controlItemBgActiveHover
            }
          },
          '&-disabled': {
            color: colorTextDisabled,
            cursor: 'not-allowed',
            '&:hover': {
              color: colorTextDisabled,
              backgroundColor: colorBgElevated,
              cursor: 'not-allowed'
            },
            a: {
              pointerEvents: 'none'
            }
          },
          '&-divider': {
            height: 1,
            margin: `${token.marginXXS}px 0`,
            overflow: 'hidden',
            lineHeight: 0,
            backgroundColor: token.colorSplit
          },
          [`${componentCls}-menu-submenu-expand-icon`]: {
            position: 'absolute',
            insetInlineEnd: token.paddingXS,
            [`${componentCls}-menu-submenu-arrow-icon`]: {
              marginInlineEnd: '0 !important',
              color: token.colorTextDescription,
              fontSize: fontSizeIcon,
              fontStyle: 'normal'
            }
          }
        }),
        [`${menuCls}-item-group-list`]: {
          margin: `0 ${token.marginXS}px`,
          padding: 0,
          listStyle: 'none'
        },
        [`${menuCls}-submenu-title`]: {
          paddingInlineEnd: controlPaddingHorizontal + token.fontSizeSM
        },
        [`${menuCls}-submenu-vertical`]: {
          position: 'relative'
        },
        [`${menuCls}-submenu${menuCls}-submenu-disabled ${componentCls}-menu-submenu-title`]: {
          [`&, ${componentCls}-menu-submenu-arrow-icon`]: {
            color: colorTextDisabled,
            backgroundColor: colorBgElevated,
            cursor: 'not-allowed'
          }
        },
        // https://github.com/ant-design/ant-design/issues/19264
        [`${menuCls}-submenu-selected ${componentCls}-menu-submenu-title`]: {
          color: token.colorPrimary
        }
      })
    }
  },
  // Follow code may reuse in other components
  [(0,slide/* initSlideMotion */.oN)(token, 'slide-up'), (0,slide/* initSlideMotion */.oN)(token, 'slide-down'), (0,move/* initMoveMotion */.Fm)(token, 'move-up'), (0,move/* initMoveMotion */.Fm)(token, 'move-down'), (0,zoom/* initZoomMotion */._y)(token, 'zoom-big')]];
};
// ============================== Export ==============================
/* harmony default export */ var dropdown_style = ((0,genComponentStyleHook/* default */.Z)('Dropdown', (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const {
    marginXXS,
    sizePopupArrow,
    controlHeight,
    fontSize,
    lineHeight,
    paddingXXS,
    componentCls,
    borderRadiusOuter,
    borderRadiusLG
  } = token;
  const dropdownPaddingVertical = (controlHeight - fontSize * lineHeight) / 2;
  const {
    dropdownArrowOffset
  } = (0,placementArrow/* getArrowOffset */.fS)({
    sizePopupArrow,
    contentRadius: borderRadiusLG,
    borderRadiusOuter
  });
  const dropdownToken = (0,statistic/* merge */.TS)(token, {
    menuCls: `${componentCls}-menu`,
    rootPrefixCls,
    dropdownArrowDistance: sizePopupArrow / 2 + marginXXS,
    dropdownArrowOffset,
    dropdownPaddingVertical,
    dropdownEdgeChildPadding: paddingXXS
  });
  return [genBaseStyle(dropdownToken), style_button(dropdownToken), style_status(dropdownToken)];
}, token => ({
  zIndexPopup: token.zIndexPopupBase + 50
})));
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown-button.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const DropdownButton = props => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      prefixCls: customizePrefixCls,
      type = 'default',
      danger,
      disabled,
      loading,
      onClick,
      htmlType,
      children,
      className,
      menu,
      arrow,
      autoFocus,
      overlay,
      trigger,
      align,
      open,
      onOpenChange,
      placement,
      getPopupContainer,
      href,
      icon = /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null),
      title,
      buttonsRender = buttons => buttons,
      mouseEnterDelay,
      mouseLeaveDelay,
      overlayClassName,
      overlayStyle,
      destroyPopupOnHide,
      dropdownRender
    } = props,
    restProps = __rest(props, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]);
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const buttonPrefixCls = `${prefixCls}-button`;
  const [wrapSSR, hashId] = dropdown_style(prefixCls);
  const dropdownProps = {
    menu,
    arrow,
    autoFocus,
    align,
    disabled,
    trigger: disabled ? [] : trigger,
    onOpenChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayClassName,
    overlayStyle,
    destroyPopupOnHide,
    dropdownRender
  };
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const classes = classnames_default()(buttonPrefixCls, compactItemClassnames, className, hashId);
  if ('overlay' in props) {
    dropdownProps.overlay = overlay;
  }
  if ('open' in props) {
    dropdownProps.open = open;
  }
  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }
  const leftButton = /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: type,
    danger: danger,
    disabled: disabled,
    loading: loading,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  const rightButton = /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: type,
    danger: danger,
    icon: icon
  });
  const [leftButtonToRender, rightButtonToRender] = buttonsRender([leftButton, rightButton]);
  return wrapSSR( /*#__PURE__*/react.createElement(space/* default.Compact */.Z.Compact, Object.assign({
    className: classes,
    size: compactSize,
    block: true
  }, restProps), leftButtonToRender, /*#__PURE__*/react.createElement(dropdown, Object.assign({}, dropdownProps), rightButtonToRender)));
};
DropdownButton.__ANT_BUTTON = true;
/* harmony default export */ var dropdown_button = (DropdownButton);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown.js
















const Placements = (/* unused pure expression or super */ null && (['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom']));
const Dropdown = props => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  // Warning for deprecated usage
  if (false) {}
  const getTransitionName = () => {
    const rootPrefixCls = getPrefixCls();
    const {
      placement = '',
      transitionName
    } = props;
    if (transitionName !== undefined) {
      return transitionName;
    }
    if (placement.includes('top')) {
      return `${rootPrefixCls}-slide-down`;
    }
    return `${rootPrefixCls}-slide-up`;
  };
  const getPlacement = () => {
    const {
      placement
    } = props;
    if (!placement) {
      return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    }
    if (placement.includes('Center')) {
      const newPlacement = placement.slice(0, placement.indexOf('Center'));
       false ? 0 : void 0;
      return newPlacement;
    }
    return placement;
  };
  const {
    menu,
    arrow,
    prefixCls: customizePrefixCls,
    children,
    trigger,
    disabled,
    dropdownRender,
    getPopupContainer,
    overlayClassName,
    open,
    onOpenChange,
    // Deprecated
    visible,
    onVisibleChange,
    mouseEnterDelay = 0.15,
    mouseLeaveDelay = 0.1
  } = props;
  if (false) {}
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const [wrapSSR, hashId] = dropdown_style(prefixCls);
  const child = react.Children.only(children);
  const dropdownTrigger = (0,reactNode/* cloneElement */.Tm)(child, {
    className: classnames_default()(`${prefixCls}-trigger`, {
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, child.props.className),
    disabled
  });
  const triggerActions = disabled ? [] : trigger;
  let alignPoint;
  if (triggerActions && triggerActions.includes('contextMenu')) {
    alignPoint = true;
  }
  // =========================== Open ============================
  const [mergedOpen, setOpen] = (0,useMergedState/* default */.Z)(false, {
    value: open !== null && open !== void 0 ? open : visible
  });
  const onInnerOpenChange = (0,useEvent/* default */.Z)(nextOpen => {
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen);
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(nextOpen);
    setOpen(nextOpen);
  });
  // =========================== Overlay ============================
  const overlayClassNameCustomized = classnames_default()(overlayClassName, hashId, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  const builtinPlacements = (0,placements/* default */.Z)({
    arrowPointAtCenter: typeof arrow === 'object' && arrow.pointAtCenter,
    autoAdjustOverflow: true
  });
  const onMenuClick = react.useCallback(() => {
    setOpen(false);
  }, []);
  const renderOverlay = () => {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    const {
      overlay
    } = props;
    let overlayNode;
    if (menu === null || menu === void 0 ? void 0 : menu.items) {
      overlayNode = /*#__PURE__*/react.createElement(es_menu/* default */.Z, Object.assign({}, menu));
    } else if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    if (dropdownRender) {
      overlayNode = dropdownRender(overlayNode);
    }
    overlayNode = react.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/react.createElement("span", null, overlayNode) : overlayNode);
    return /*#__PURE__*/react.createElement(OverrideContext/* OverrideProvider */.J, {
      prefixCls: `${prefixCls}-menu`,
      expandIcon: /*#__PURE__*/react.createElement("span", {
        className: `${prefixCls}-menu-submenu-arrow`
      }, /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, {
        className: `${prefixCls}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: false,
      onClick: onMenuClick,
      validator: _ref3 => {
        let {
          mode
        } = _ref3;
        // Warning if use other mode
         false ? 0 : void 0;
      }
    }, /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, overlayNode));
  };
  // ============================ Render ============================
  return wrapSSR( /*#__PURE__*/react.createElement(es/* default */.Z, Object.assign({
    alignPoint: alignPoint
  }, props, {
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    visible: mergedOpen,
    builtinPlacements: builtinPlacements,
    arrow: !!arrow,
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: getTransitionName(),
    trigger: triggerActions,
    overlay: renderOverlay,
    placement: getPlacement(),
    onVisibleChange: onInnerOpenChange
  }), dropdownTrigger));
};
Dropdown.Button = dropdown_button;
// We don't care debug panel
const dropdown_PurePanel = (0,PurePanel/* default */.Z)(Dropdown, 'dropdown', prefixCls => prefixCls);
/* istanbul ignore next */
const WrapPurePanel = props => /*#__PURE__*/react.createElement(dropdown_PurePanel, Object.assign({}, props), /*#__PURE__*/react.createElement("span", null));
Dropdown._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;
/* harmony default export */ var dropdown = (Dropdown);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/index.js

/* harmony default export */ var es_dropdown = (dropdown);

/***/ }),

/***/ 7293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": function() { return /* binding */ SiderContext; },
  "Z": function() { return /* binding */ layout_Sider; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/BarsOutlined.js
// This icon file is generated automatically.
var BarsOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };
/* harmony default export */ var asn_BarsOutlined = (BarsOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/BarsOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var BarsOutlined_BarsOutlined = function BarsOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_BarsOutlined
  }));
};
BarsOutlined_BarsOutlined.displayName = 'BarsOutlined';
/* harmony default export */ var icons_BarsOutlined = (/*#__PURE__*/react.forwardRef(BarsOutlined_BarsOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(6171);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(18073);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/isNumeric.js
const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);
/* harmony default export */ var _util_isNumeric = (isNumeric);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/layout.js + 2 modules
var layout = __webpack_require__(84321);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/Sider.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
const SiderContext = /*#__PURE__*/react.createContext({});
const generateId = (() => {
  let i = 0;
  return function () {
    let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return `${prefix}${i}`;
  };
})();
const Sider = /*#__PURE__*/react.forwardRef((_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      className,
      trigger,
      children,
      defaultCollapsed = false,
      theme = 'dark',
      style = {},
      collapsible = false,
      reverseArrow = false,
      width = 200,
      collapsedWidth = 80,
      zeroWidthTriggerStyle,
      breakpoint,
      onCollapse,
      onBreakpoint
    } = _a,
    props = __rest(_a, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);
  const {
    siderHook
  } = (0,react.useContext)(layout/* LayoutContext */.Gs);
  const [collapsed, setCollapsed] = (0,react.useState)('collapsed' in props ? props.collapsed : defaultCollapsed);
  const [below, setBelow] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if ('collapsed' in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);
  const handleSetCollapsed = (value, type) => {
    if (!('collapsed' in props)) {
      setCollapsed(value);
    }
    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  };
  // ========================= Responsive =========================
  const responsiveHandlerRef = (0,react.useRef)();
  responsiveHandlerRef.current = mql => {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive');
    }
  };
  (0,react.useEffect)(() => {
    function responsiveHandler(mql) {
      return responsiveHandlerRef.current(mql);
    }
    let mql;
    if (typeof window !== 'undefined') {
      const {
        matchMedia
      } = window;
      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia(`(max-width: ${dimensionMaxMap[breakpoint]})`);
        try {
          mql.addEventListener('change', responsiveHandler);
        } catch (error) {
          mql.addListener(responsiveHandler);
        }
        responsiveHandler(mql);
      }
    }
    return () => {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, [breakpoint]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.
  (0,react.useEffect)(() => {
    const uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const toggle = () => {
    handleSetCollapsed(!collapsed, 'clickTrigger');
  };
  const {
    getPrefixCls
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const renderSider = () => {
    const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    const divProps = (0,omit/* default */.Z)(props, ['collapsed']);
    const rawWidth = collapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    const siderWidth = _util_isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    // special trigger when collapsedWidth == 0
    const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/react.createElement("span", {
      onClick: toggle,
      className: classnames_default()(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? 'right' : 'left'}`),
      style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/react.createElement(icons_BarsOutlined, null)) : null;
    const iconObj = {
      expanded: reverseArrow ? /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(LeftOutlined/* default */.Z, null),
      collapsed: reverseArrow ? /*#__PURE__*/react.createElement(LeftOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, null)
    };
    const status = collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-trigger`,
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger) : null;
    const divStyle = Object.assign(Object.assign({}, style), {
      flex: `0 0 ${siderWidth}`,
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });
    const siderCls = classnames_default()(prefixCls, `${prefixCls}-${theme}`, {
      [`${prefixCls}-collapsed`]: !!collapsed,
      [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
      [`${prefixCls}-below`]: !!below,
      [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
    }, className);
    return /*#__PURE__*/react.createElement("aside", Object.assign({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref: ref
    }), /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-children`
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };
  const contextValue = react.useMemo(() => ({
    siderCollapsed: collapsed
  }), [collapsed]);
  return /*#__PURE__*/react.createElement(SiderContext.Provider, {
    value: contextValue
  }, renderSider());
});
if (false) {}
/* harmony default export */ var layout_Sider = (Sider);

/***/ }),

/***/ 84321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VY": function() { return /* binding */ Content; },
  "$_": function() { return /* binding */ Footer; },
  "h4": function() { return /* binding */ Header; },
  "Gs": function() { return /* binding */ LayoutContext; },
  "ZP": function() { return /* binding */ layout; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/style/light.js
const genLayoutLightStyle = token => {
  const {
    componentCls,
    colorBgContainer,
    colorBgBody,
    colorText
  } = token;
  return {
    [`${componentCls}-sider-light`]: {
      background: colorBgContainer,
      [`${componentCls}-sider-trigger`]: {
        color: colorText,
        background: colorBgContainer
      },
      [`${componentCls}-sider-zero-width-trigger`]: {
        color: colorText,
        background: colorBgContainer,
        border: `1px solid ${colorBgBody}`,
        borderInlineStart: 0
      }
    }
  };
};
/* harmony default export */ var light = (genLayoutLightStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/style/index.js


const genLayoutStyle = token => {
  const {
    antCls,
    // .ant
    componentCls,
    // .ant-layout
    colorText,
    colorTextLightSolid,
    colorBgHeader,
    colorBgBody,
    colorBgTrigger,
    layoutHeaderHeight,
    layoutHeaderPaddingInline,
    layoutHeaderColor,
    layoutFooterPadding,
    layoutTriggerHeight,
    layoutZeroTriggerSize,
    motionDurationMid,
    motionDurationSlow,
    fontSize,
    borderRadius
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({
      display: 'flex',
      flex: 'auto',
      flexDirection: 'column',
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: colorBgBody,
      '&, *': {
        boxSizing: 'border-box'
      },
      [`&${componentCls}-has-sider`]: {
        flexDirection: 'row',
        [`> ${componentCls}, > ${componentCls}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${componentCls}-header, &${componentCls}-footer`]: {
        flex: '0 0 auto'
      },
      [`${componentCls}-header`]: {
        height: layoutHeaderHeight,
        paddingInline: layoutHeaderPaddingInline,
        color: layoutHeaderColor,
        lineHeight: `${layoutHeaderHeight}px`,
        background: colorBgHeader,
        // Other components/menu/style/index.less line:686
        // Integration with header element so menu items have the same height
        [`${antCls}-menu`]: {
          lineHeight: 'inherit'
        }
      },
      [`${componentCls}-footer`]: {
        padding: layoutFooterPadding,
        color: colorText,
        fontSize,
        background: colorBgBody
      },
      [`${componentCls}-content`]: {
        flex: 'auto',
        // fix firefox can't set height smaller than content on flex item
        minHeight: 0
      },
      [`${componentCls}-sider`]: {
        position: 'relative',
        // fix firefox can't set width smaller than content on flex item
        minWidth: 0,
        background: colorBgHeader,
        transition: `all ${motionDurationMid}`,
        '&-children': {
          height: '100%',
          // Hack for fixing margin collapse bug
          // https://github.com/ant-design/ant-design/issues/7967
          // solution from https://stackoverflow.com/a/33132624/3040605
          marginTop: -0.1,
          paddingTop: 0.1,
          [`${antCls}-menu${antCls}-menu-inline-collapsed`]: {
            width: 'auto'
          }
        },
        '&-has-trigger': {
          paddingBottom: layoutTriggerHeight
        },
        '&-right': {
          order: 1
        },
        '&-trigger': {
          position: 'fixed',
          bottom: 0,
          zIndex: 1,
          height: layoutTriggerHeight,
          color: colorTextLightSolid,
          lineHeight: `${layoutTriggerHeight}px`,
          textAlign: 'center',
          background: colorBgTrigger,
          cursor: 'pointer',
          transition: `all ${motionDurationMid}`
        },
        '&-zero-width': {
          '> *': {
            overflow: 'hidden'
          },
          '&-trigger': {
            position: 'absolute',
            top: layoutHeaderHeight,
            insetInlineEnd: -layoutZeroTriggerSize,
            zIndex: 1,
            width: layoutZeroTriggerSize,
            height: layoutZeroTriggerSize,
            color: colorTextLightSolid,
            fontSize: token.fontSizeXL,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: colorBgHeader,
            borderStartStartRadius: 0,
            borderStartEndRadius: borderRadius,
            borderEndEndRadius: borderRadius,
            borderEndStartRadius: 0,
            cursor: 'pointer',
            transition: `background ${motionDurationSlow} ease`,
            '&::after': {
              position: 'absolute',
              inset: 0,
              background: 'transparent',
              transition: `all ${motionDurationSlow}`,
              content: '""'
            },
            '&:hover::after': {
              // FIXME: Hardcode, but seems no need to create a token for this
              background: `rgba(255, 255, 255, 0.2)`
            },
            '&-right': {
              insetInlineStart: -layoutZeroTriggerSize,
              borderStartStartRadius: borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: borderRadius
            }
          }
        }
      }
    }, light(token)), {
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    })
  };
};
// ============================== Export ==============================
/* harmony default export */ var style = ((0,genComponentStyleHook/* default */.Z)('Layout', token => {
  const {
    colorText,
    controlHeightSM,
    controlHeight,
    controlHeightLG,
    marginXXS
  } = token;
  const layoutHeaderPaddingInline = controlHeightLG * 1.25;
  const layoutToken = (0,statistic/* merge */.TS)(token, {
    // Layout
    layoutHeaderHeight: controlHeight * 2,
    layoutHeaderPaddingInline,
    layoutHeaderColor: colorText,
    layoutFooterPadding: `${controlHeightSM}px ${layoutHeaderPaddingInline}px`,
    layoutTriggerHeight: controlHeightLG + marginXXS * 2,
    layoutZeroTriggerSize: controlHeightLG
  });
  return [genLayoutStyle(layoutToken)];
}, token => {
  const {
    colorBgLayout
  } = token;
  return {
    colorBgHeader: '#001529',
    colorBgBody: colorBgLayout,
    colorBgTrigger: '#002140'
  };
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/layout.js

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const LayoutContext = /*#__PURE__*/react.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
function generator(_ref) {
  let {
    suffixCls,
    tagName,
    displayName
  } = _ref;
  return BasicComponent => {
    const Adapter = /*#__PURE__*/react.forwardRef((props, ref) => {
      const {
        getPrefixCls
      } = react.useContext(context/* ConfigContext */.E_);
      const {
        prefixCls: customizePrefixCls
      } = props;
      const prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
      return /*#__PURE__*/react.createElement(BasicComponent, Object.assign({
        ref: ref,
        prefixCls: prefixCls,
        tagName: tagName
      }, props));
    });
    if (false) {}
    return Adapter;
  };
}
const Basic = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls,
      className,
      children,
      tagName
    } = props,
    others = __rest(props, ["prefixCls", "className", "children", "tagName"]);
  const classString = classnames_default()(prefixCls, className);
  return /*#__PURE__*/react.createElement(tagName, Object.assign(Object.assign({
    className: classString
  }, others), {
    ref
  }), children);
});
const BasicLayout = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const [siders, setSiders] = react.useState([]);
  const {
      prefixCls,
      className,
      children,
      hasSider,
      tagName: Tag
    } = props,
    others = __rest(props, ["prefixCls", "className", "children", "hasSider", "tagName"]);
  const [wrapSSR, hashId] = style(prefixCls);
  const classString = classnames_default()(prefixCls, {
    [`${prefixCls}-has-sider`]: typeof hasSider === 'boolean' ? hasSider : siders.length > 0,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  const contextValue = react.useMemo(() => ({
    siderHook: {
      addSider: id => {
        setSiders(prev => [].concat((0,toConsumableArray/* default */.Z)(prev), [id]));
      },
      removeSider: id => {
        setSiders(prev => prev.filter(currentId => currentId !== id));
      }
    }
  }), []);
  return wrapSSR( /*#__PURE__*/react.createElement(LayoutContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement(Tag, Object.assign({
    ref: ref,
    className: classString
  }, others), children)));
});
const Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
const Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
const Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
const Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);

/* harmony default export */ var layout = (Layout);

/***/ }),

/***/ 76529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ OverrideProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

/** @internal Only used for Dropdown component. Do not use this in your production. */
const OverrideContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/** @internal Only used for Dropdown component. Do not use this in your production. */
const OverrideProvider = props => {
  const {
      children
    } = props,
    restProps = __rest(props, ["children"]);
  const override = react__WEBPACK_IMPORTED_MODULE_0__.useContext(OverrideContext);
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => Object.assign(Object.assign({}, override), restProps), [override, restProps.prefixCls,
  // restProps.expandIcon, Not mark as deps since this is a ReactNode
  restProps.mode, restProps.selectable
  // restProps.validator, Not mark as deps since this is a function
  ]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OverrideContext.Provider, {
    value: context
  }, children);
};
/* harmony default export */ __webpack_exports__["Z"] = (OverrideContext);

/***/ }),

/***/ 68508:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_menu; }
});

// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 24 modules
var es = __webpack_require__(97868);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(89705);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(10274);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/collapse.js
var collapse = __webpack_require__(33507);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/slide.js
var slide = __webpack_require__(67771);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(50438);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/horizontal.js
const getHorizontalStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    menuHorizontalHeight,
    colorSplit,
    lineWidth,
    lineType,
    menuItemPaddingInline
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      lineHeight: `${menuHorizontalHeight}px`,
      border: 0,
      borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
      boxShadow: 'none',
      '&::after': {
        display: 'block',
        clear: 'both',
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${componentCls}-item, ${componentCls}-submenu`]: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'bottom',
        paddingInline: menuItemPaddingInline
      },
      [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
        backgroundColor: 'transparent'
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`].join(',')
      },
      // ===================== Sub Menu =====================
      [`${componentCls}-submenu-arrow`]: {
        display: 'none'
      }
    }
  };
};
/* harmony default export */ var horizontal = (getHorizontalStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/rtl.js
const getRTLStyle = _ref => {
  let {
    componentCls,
    menuArrowOffset
  } = _ref;
  return {
    [`${componentCls}-rtl`]: {
      direction: 'rtl'
    },
    [`${componentCls}-submenu-rtl`]: {
      transformOrigin: '100% 0'
    },
    // Vertical Arrow
    [`${componentCls}-rtl${componentCls}-vertical,
    ${componentCls}-submenu-rtl ${componentCls}-vertical`]: {
      [`${componentCls}-submenu-arrow`]: {
        '&::before': {
          transform: `rotate(-45deg) translateY(-${menuArrowOffset})`
        },
        '&::after': {
          transform: `rotate(45deg) translateY(${menuArrowOffset})`
        }
      }
    }
  };
};
/* harmony default export */ var rtl = (getRTLStyle);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/theme.js

const accessibilityFocus = token => Object.assign({}, (0,style/* genFocusOutline */.oN)(token));
const getThemeStyle = (token, themeSuffix) => {
  const {
    componentCls,
    colorItemText,
    colorItemTextSelected,
    colorItemTextSelectedHorizontal,
    colorGroupTitle,
    colorItemBg,
    colorSubItemBg,
    colorItemBgSelectedHorizontal,
    colorItemBgSelected,
    colorActiveBarHeight,
    colorActiveBarWidth,
    colorActiveBarBorderSize,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOut,
    menuItemPaddingInline,
    motionDurationMid,
    colorItemTextHover,
    lineType,
    colorSplit,
    // Disabled
    colorItemTextDisabled,
    // Danger
    colorDangerItemText,
    colorDangerItemTextHover,
    colorDangerItemTextSelected,
    colorDangerItemBgActive,
    colorDangerItemBgSelected,
    colorItemBgHover,
    menuSubMenuBg
  } = token;
  return {
    [`${componentCls}-${themeSuffix}`]: {
      color: colorItemText,
      background: colorItemBg,
      [`&${componentCls}-root:focus-visible`]: Object.assign({}, accessibilityFocus(token)),
      // ======================== Item ========================
      [`${componentCls}-item-group-title`]: {
        color: colorGroupTitle
      },
      [`${componentCls}-submenu-selected`]: {
        [`> ${componentCls}-submenu-title`]: {
          color: colorItemTextSelected
        }
      },
      // Disabled
      [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
        color: `${colorItemTextDisabled} !important`
      },
      // Hover
      [`${componentCls}-item:hover, ${componentCls}-submenu-title:hover`]: {
        [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
          color: colorItemTextHover
        }
      },
      [`&:not(${componentCls}-horizontal)`]: {
        [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
          '&:hover': {
            backgroundColor: colorItemBgHover
          },
          '&:active': {
            backgroundColor: colorItemBgSelected
          }
        },
        [`${componentCls}-submenu-title`]: {
          '&:hover': {
            backgroundColor: colorItemBgHover
          },
          '&:active': {
            backgroundColor: colorItemBgSelected
          }
        }
      },
      // Danger - only Item has
      [`${componentCls}-item-danger`]: {
        color: colorDangerItemText,
        [`&${componentCls}-item:hover`]: {
          [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
            color: colorDangerItemTextHover
          }
        },
        [`&${componentCls}-item:active`]: {
          background: colorDangerItemBgActive
        }
      },
      [`${componentCls}-item a`]: {
        '&, &:hover': {
          color: 'inherit'
        }
      },
      [`${componentCls}-item-selected`]: {
        color: colorItemTextSelected,
        // Danger
        [`&${componentCls}-item-danger`]: {
          color: colorDangerItemTextSelected
        },
        [`a, a:hover`]: {
          color: 'inherit'
        }
      },
      [`&:not(${componentCls}-horizontal) ${componentCls}-item-selected`]: {
        backgroundColor: colorItemBgSelected,
        // Danger
        [`&${componentCls}-item-danger`]: {
          backgroundColor: colorDangerItemBgSelected
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        [`&:not(${componentCls}-item-disabled):focus-visible`]: Object.assign({}, accessibilityFocus(token))
      },
      [`&${componentCls}-submenu > ${componentCls}`]: {
        backgroundColor: menuSubMenuBg
      },
      [`&${componentCls}-popup > ${componentCls}`]: {
        backgroundColor: colorItemBg
      },
      // ====================== Horizontal ======================
      [`&${componentCls}-horizontal`]: Object.assign(Object.assign({}, themeSuffix === 'dark' ? {
        borderBottom: 0
      } : {}), {
        [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
          top: colorActiveBarBorderSize,
          marginTop: -colorActiveBarBorderSize,
          marginBottom: 0,
          borderRadius: token.radiusItem,
          '&::after': {
            position: 'absolute',
            insetInline: menuItemPaddingInline,
            bottom: 0,
            borderBottom: `${colorActiveBarHeight}px solid transparent`,
            transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            content: '""'
          },
          [`&:hover, &-active, &-open`]: {
            '&::after': {
              borderBottomWidth: colorActiveBarHeight,
              borderBottomColor: colorItemTextSelectedHorizontal
            }
          },
          [`&-selected`]: {
            color: colorItemTextSelectedHorizontal,
            backgroundColor: colorItemBgSelectedHorizontal,
            '&::after': {
              borderBottomWidth: colorActiveBarHeight,
              borderBottomColor: colorItemTextSelectedHorizontal
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${componentCls}-root`]: {
        [`&${componentCls}-inline, &${componentCls}-vertical`]: {
          borderInlineEnd: `${colorActiveBarBorderSize}px ${lineType} ${colorSplit}`
        }
      },
      // ======================== Inline ========================
      [`&${componentCls}-inline`]: {
        // Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          background: colorSubItemBg
        },
        // Item
        [`${componentCls}-item, ${componentCls}-submenu-title`]: colorActiveBarBorderSize && colorActiveBarWidth ? {
          width: `calc(100% + ${colorActiveBarBorderSize}px)`
        } : {},
        [`${componentCls}-item`]: {
          position: 'relative',
          '&::after': {
            position: 'absolute',
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${colorActiveBarWidth}px solid ${colorItemTextSelected}`,
            transform: 'scaleY(0.0001)',
            opacity: 0,
            transition: [`transform ${motionDurationMid} ${motionEaseOut}`, `opacity ${motionDurationMid} ${motionEaseOut}`].join(','),
            content: '""'
          },
          // Danger
          [`&${componentCls}-item-danger`]: {
            '&::after': {
              borderInlineEndColor: colorDangerItemTextSelected
            }
          }
        },
        [`${componentCls}-selected, ${componentCls}-item-selected`]: {
          '&::after': {
            transform: 'scaleY(1)',
            opacity: 1,
            transition: [`transform ${motionDurationMid} ${motionEaseInOut}`, `opacity ${motionDurationMid} ${motionEaseInOut}`].join(',')
          }
        }
      }
    }
  };
};
/* harmony default export */ var theme = (getThemeStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/vertical.js

const getVerticalInlineStyle = token => {
  const {
    componentCls,
    menuItemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    marginXXS
  } = token;
  const paddingWithArrow = padding + menuArrowSize + marginXS;
  return {
    [`${componentCls}-item`]: {
      position: 'relative'
    },
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: menuItemHeight,
      lineHeight: `${menuItemHeight}px`,
      paddingInline: padding,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginInline: itemMarginInline,
      marginBlock: marginXXS,
      width: `calc(100% - ${itemMarginInline * 2}px)`
    },
    // disable margin collapsed
    [`${componentCls}-submenu`]: {
      paddingBottom: 0.02
    },
    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: menuItemHeight,
      lineHeight: `${menuItemHeight}px`
    },
    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow
    }
  };
};
const getVerticalStyle = token => {
  const {
    componentCls,
    iconCls,
    menuItemHeight,
    colorTextLightSolid,
    dropdownWidth,
    controlHeightLG,
    motionDurationMid,
    motionEaseOut,
    paddingXL,
    fontSizeSM,
    fontSizeLG,
    motionDurationSlow,
    paddingXS,
    boxShadowSecondary
  } = token;
  const inlineItemStyle = {
    height: menuItemHeight,
    lineHeight: `${menuItemHeight}px`,
    listStylePosition: 'inside',
    listStyleType: 'disc'
  };
  return [{
    [componentCls]: {
      [`&-inline, &-vertical`]: Object.assign({
        [`&${componentCls}-root`]: {
          boxShadow: 'none'
        }
      }, getVerticalInlineStyle(token))
    },
    [`${componentCls}-submenu-popup`]: {
      [`${componentCls}-vertical`]: Object.assign(Object.assign({}, getVerticalInlineStyle(token)), {
        boxShadow: boxShadowSecondary
      })
    }
  },
  // Vertical only
  {
    [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
      minWidth: dropdownWidth,
      maxHeight: `calc(100vh - ${controlHeightLG * 2.5}px)`,
      padding: '0',
      overflow: 'hidden',
      borderInlineEnd: 0,
      // https://github.com/ant-design/ant-design/issues/22244
      // https://github.com/ant-design/ant-design/issues/26812
      "&:not([class*='-active'])": {
        overflowX: 'hidden',
        overflowY: 'auto'
      }
    }
  },
  // Inline Only
  {
    [`${componentCls}-inline`]: {
      width: '100%',
      // Motion enhance for first level
      [`&${componentCls}-root`]: {
        [`${componentCls}-item, ${componentCls}-submenu-title`]: {
          display: 'flex',
          alignItems: 'center',
          transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationMid} ${motionEaseOut}`].join(','),
          [`> ${componentCls}-title-content`]: {
            flex: 'auto',
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          },
          '> *': {
            flex: 'none'
          }
        }
      },
      // >>>>> Sub
      [`${componentCls}-sub${componentCls}-inline`]: {
        padding: 0,
        border: 0,
        borderRadius: 0,
        boxShadow: 'none',
        [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
        [`& ${componentCls}-item-group-title`]: {
          paddingInlineStart: paddingXL
        }
      },
      // >>>>> Item
      [`${componentCls}-item`]: inlineItemStyle
    }
  },
  // Inline Collapse Only
  {
    [`${componentCls}-inline-collapsed`]: {
      width: menuItemHeight * 2,
      [`&${componentCls}-root`]: {
        [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
          [`> ${componentCls}-inline-collapsed-noicon`]: {
            fontSize: fontSizeLG,
            textAlign: 'center'
          }
        }
      },
      [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
        insetInlineStart: 0,
        paddingInline: `calc(50% - ${fontSizeSM}px)`,
        textOverflow: 'clip',
        [`${componentCls}-submenu-arrow`]: {
          opacity: 0
        },
        [`${componentCls}-item-icon, ${iconCls}`]: {
          margin: 0,
          fontSize: fontSizeLG,
          lineHeight: `${menuItemHeight}px`,
          '+ span': {
            display: 'inline-block',
            opacity: 0
          }
        }
      },
      [`${componentCls}-item-icon, ${iconCls}`]: {
        display: 'inline-block'
      },
      '&-tooltip': {
        pointerEvents: 'none',
        [`${componentCls}-item-icon, ${iconCls}`]: {
          display: 'none'
        },
        'a, a:hover': {
          color: colorTextLightSolid
        }
      },
      [`${componentCls}-item-group-title`]: Object.assign(Object.assign({}, style/* textEllipsis */.vS), {
        paddingInline: paddingXS
      })
    }
  }];
};
/* harmony default export */ var vertical = (getVerticalStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/index.js








const genMenuItemStyle = token => {
  const {
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    controlHeightSM
  } = token;
  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: 'relative',
      display: 'block',
      margin: 0,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(','),
      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: fontSize,
        fontSize,
        transition: [`font-size ${motionDurationMid} ${motionEaseOut}`, `margin ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow}`].join(','),
        '+ span': {
          marginInlineStart: controlHeightSM - fontSize,
          opacity: 1,
          transition: [`opacity ${motionDurationSlow} ${motionEaseInOut}`, `margin ${motionDurationSlow}`, `color ${motionDurationSlow}`].join(',')
        }
      },
      [`${componentCls}-item-icon`]: Object.assign({}, (0,style/* resetIcon */.Ro)()),
      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: 'none !important',
      cursor: 'not-allowed',
      '&::after': {
        borderColor: 'transparent !important'
      },
      a: {
        color: 'inherit !important'
      },
      [`> ${componentCls}-submenu-title`]: {
        color: 'inherit !important',
        cursor: 'not-allowed'
      }
    }
  };
};
const genSubMenuArrowStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset
  } = token;
  return {
    [`${componentCls}-submenu`]: {
      [`&-expand-icon, &-arrow`]: {
        position: 'absolute',
        top: '50%',
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: 'currentcolor',
        transform: 'translateY(-50%)',
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
      },
      '&-arrow': {
        // →
        '&::before, &::after': {
          position: 'absolute',
          width: menuArrowSize * 0.6,
          height: menuArrowSize * 0.15,
          backgroundColor: 'currentcolor',
          borderRadius,
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `transform ${motionDurationSlow} ${motionEaseInOut}`, `top ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow} ${motionEaseInOut}`].join(','),
          content: '""'
        },
        '&::before': {
          transform: `rotate(45deg) translateY(-${menuArrowOffset})`
        },
        '&::after': {
          transform: `rotate(-45deg) translateY(${menuArrowOffset})`
        }
      }
    }
  };
};
// =============================== Base ===============================
const getBaseStyle = token => {
  const {
    antCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    lineHeight,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    radiusSubMenuItem,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    menuPanelMaskInset
  } = token;
  return [
  // Misc
  {
    '': {
      [`${componentCls}`]: Object.assign(Object.assign({}, (0,style/* clearFix */.dF)()), {
        // Hidden
        [`&-hidden`]: {
          display: 'none'
        }
      })
    },
    [`${componentCls}-submenu-hidden`]: {
      display: 'none'
    }
  }, {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), (0,style/* clearFix */.dF)()), {
      marginBottom: 0,
      paddingInlineStart: 0,
      // Override default ul/ol
      fontSize,
      lineHeight: 0,
      listStyle: 'none',
      outline: 'none',
      transition: [`background ${motionDurationSlow}`,
      // Magic cubic here but smooth transition
      `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`].join(','),
      [`ul, ol`]: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      // Overflow ellipsis
      [`&-overflow`]: {
        display: 'flex',
        [`${componentCls}-item`]: {
          flex: 'none'
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
        borderRadius: token.radiusItem
      },
      [`${componentCls}-item-group-title`]: {
        padding: `${paddingXS}px ${padding}px`,
        fontSize,
        lineHeight,
        transition: `all ${motionDurationSlow}`
      },
      [`&-horizontal ${componentCls}-submenu`]: {
        transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
        transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationMid} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-submenu ${componentCls}-sub`]: {
        cursor: 'initial',
        transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-title-content`]: {
        transition: `color ${motionDurationSlow}`
      },
      [`${componentCls}-item a`]: {
        '&::before': {
          position: 'absolute',
          inset: 0,
          backgroundColor: 'transparent',
          content: '""'
        }
      },
      // Removed a Badge related style seems it's safe
      // https://github.com/ant-design/ant-design/issues/19809
      // >>>>> Divider
      [`${componentCls}-item-divider`]: {
        overflow: 'hidden',
        lineHeight: 0,
        borderColor: colorSplit,
        borderStyle: lineType,
        borderTopWidth: lineWidth,
        marginBlock: lineWidth,
        padding: 0,
        '&-dashed': {
          borderStyle: 'dashed'
        }
      }
    }), genMenuItemStyle(token)), {
      [`${componentCls}-item-group`]: {
        [`${componentCls}-item-group-list`]: {
          margin: 0,
          padding: 0,
          [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            paddingInline: `${fontSize * 2}px ${padding}px`
          }
        }
      },
      // ======================= Sub Menu =======================
      '&-submenu': {
        '&-popup': {
          position: 'absolute',
          zIndex: zIndexPopup,
          background: 'transparent',
          borderRadius: borderRadiusLG,
          boxShadow: 'none',
          transformOrigin: '0 0',
          // https://github.com/ant-design/ant-design/issues/13955
          '&::before': {
            position: 'absolute',
            inset: `${menuPanelMaskInset}px 0 0`,
            zIndex: -1,
            width: '100%',
            height: '100%',
            opacity: 0,
            content: '""'
          }
        },
        // https://github.com/ant-design/ant-design/issues/13955
        '&-placement-rightTop::before': {
          top: 0,
          insetInlineStart: menuPanelMaskInset
        },
        [`> ${componentCls}`]: Object.assign(Object.assign(Object.assign({
          borderRadius: borderRadiusLG
        }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), {
          [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
            borderRadius: radiusSubMenuItem
          },
          [`${componentCls}-submenu-title::after`]: {
            transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
          }
        })
      }
    }), genSubMenuArrowStyle(token)), {
      [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
        // ↓
        '&::before': {
          transform: `rotate(-45deg) translateX(${menuArrowOffset})`
        },
        '&::after': {
          transform: `rotate(45deg) translateX(-${menuArrowOffset})`
        }
      },
      [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
        // ↑
        transform: `translateY(-${menuArrowSize * 0.2}px)`,
        '&::after': {
          transform: `rotate(-45deg) translateX(-${menuArrowOffset})`
        },
        '&::before': {
          transform: `rotate(45deg) translateX(${menuArrowOffset})`
        }
      }
    })
  },
  // Integration with header element so menu items have the same height
  {
    [`${antCls}-layout-header`]: {
      [componentCls]: {
        lineHeight: 'inherit'
      }
    }
  }];
};
// ============================== Export ==============================
/* harmony default export */ var menu_style = ((prefixCls, injectStyle) => {
  const useOriginHook = (0,genComponentStyleHook/* default */.Z)('Menu', (token, _ref) => {
    let {
      overrideComponentToken
    } = _ref;
    // Dropdown will handle menu style self. We do not need to handle this.
    if (injectStyle === false) {
      return [];
    }
    const {
      colorBgElevated,
      colorPrimary,
      colorError,
      colorErrorHover,
      colorTextLightSolid,
      colorTextSecondary
    } = token;
    const {
      controlHeightLG,
      fontSize
    } = token;
    const menuArrowSize = fontSize / 7 * 5;
    // Menu Token
    const menuToken = (0,statistic/* merge */.TS)(token, {
      menuItemHeight: controlHeightLG,
      menuItemPaddingInline: token.margin,
      menuArrowSize,
      menuHorizontalHeight: controlHeightLG * 1.15,
      menuArrowOffset: `${menuArrowSize * 0.25}px`,
      menuPanelMaskInset: -7,
      menuSubMenuBg: colorBgElevated
    });
    const menuDarkToken = (0,statistic/* merge */.TS)(menuToken, {
      colorItemText: new dist_module/* TinyColor */.C(colorTextLightSolid).setAlpha(0.65).toRgbString(),
      colorItemTextHover: colorTextLightSolid,
      colorGroupTitle: colorTextSecondary,
      colorItemTextSelected: colorTextLightSolid,
      colorItemBg: '#001529',
      colorSubItemBg: '#000c17',
      colorItemBgActive: 'transparent',
      colorItemBgSelected: colorPrimary,
      colorActiveBarWidth: 0,
      colorActiveBarHeight: 0,
      colorActiveBarBorderSize: 0,
      // Disabled
      colorItemTextDisabled: new dist_module/* TinyColor */.C(colorTextLightSolid).setAlpha(0.25).toRgbString(),
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorErrorHover,
      colorDangerItemTextSelected: colorTextLightSolid,
      colorDangerItemBgActive: colorError,
      colorDangerItemBgSelected: colorError,
      menuSubMenuBg: '#001529'
    }, Object.assign({}, overrideComponentToken));
    return [
    // Basic
    getBaseStyle(menuToken),
    // Horizontal
    horizontal(menuToken),
    // Vertical
    vertical(menuToken),
    // Theme
    theme(menuToken, 'light'), theme(menuDarkToken, 'dark'),
    // RTL
    rtl(menuToken),
    // Motion
    (0,collapse/* default */.Z)(menuToken), (0,slide/* initSlideMotion */.oN)(menuToken, 'slide-up'), (0,slide/* initSlideMotion */.oN)(menuToken, 'slide-down'), (0,zoom/* initZoomMotion */._y)(menuToken, 'zoom-big')];
  }, token => {
    const {
      colorPrimary,
      colorError,
      colorTextDisabled,
      colorErrorBg,
      colorText,
      colorTextDescription,
      colorBgContainer,
      colorFillAlter,
      colorFillContent,
      lineWidth,
      lineWidthBold,
      controlItemBgActive,
      colorBgTextHover
    } = token;
    return {
      dropdownWidth: 160,
      zIndexPopup: token.zIndexPopupBase + 50,
      radiusItem: token.borderRadiusLG,
      radiusSubMenuItem: token.borderRadiusSM,
      colorItemText: colorText,
      colorItemTextHover: colorText,
      colorItemTextHoverHorizontal: colorPrimary,
      colorGroupTitle: colorTextDescription,
      colorItemTextSelected: colorPrimary,
      colorItemTextSelectedHorizontal: colorPrimary,
      colorItemBg: colorBgContainer,
      colorItemBgHover: colorBgTextHover,
      colorItemBgActive: colorFillContent,
      colorSubItemBg: colorFillAlter,
      colorItemBgSelected: controlItemBgActive,
      colorItemBgSelectedHorizontal: 'transparent',
      colorActiveBarWidth: 0,
      colorActiveBarHeight: lineWidthBold,
      colorActiveBarBorderSize: lineWidth,
      // Disabled
      colorItemTextDisabled: colorTextDisabled,
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorError,
      colorDangerItemTextSelected: colorError,
      colorDangerItemBgActive: colorErrorBg,
      colorDangerItemBgSelected: colorErrorBg,
      itemMarginInline: token.marginXXS
    };
  });
  return useOriginHook(prefixCls);
});
// EXTERNAL MODULE: ./node_modules/antd/es/menu/OverrideContext.js
var OverrideContext = __webpack_require__(76529);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuDivider.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const MenuDivider = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      dashed
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "dashed"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('menu', customizePrefixCls);
  const classString = classnames_default()({
    [`${prefixCls}-item-divider-dashed`]: !!dashed
  }, className);
  return /*#__PURE__*/react.createElement(es/* Divider */.iz, Object.assign({
    className: classString
  }, restProps));
};
/* harmony default export */ var menu_MenuDivider = (MenuDivider);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__(7293);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(83062);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuContext.js

const MenuContext = /*#__PURE__*/(0,react.createContext)({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false
});
/* harmony default export */ var menu_MenuContext = (MenuContext);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuItem.js









const MenuItem = props => {
  const {
    className,
    children,
    icon,
    title,
    danger
  } = props;
  const {
    prefixCls,
    firstLevel,
    direction,
    disableMenuItemTitleTooltip,
    inlineCollapsed: isInlineCollapsed
  } = react.useContext(menu_MenuContext);
  const renderItemChildren = inlineCollapsed => {
    const wrapNode = /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-title-content`
    }, children);
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    if (!icon || (0,reactNode/* isValidElement */.l$)(children) && children.type === 'span') {
      if (children && inlineCollapsed && firstLevel && typeof children === 'string') {
        return /*#__PURE__*/react.createElement("div", {
          className: `${prefixCls}-inline-collapsed-noicon`
        }, children.charAt(0));
      }
    }
    return wrapNode;
  };
  const renderItem = _ref => {
    let {
      siderCollapsed
    } = _ref;
    var _a;
    let tooltipTitle = title;
    if (typeof title === 'undefined') {
      tooltipTitle = firstLevel ? children : '';
    } else if (title === false) {
      tooltipTitle = '';
    }
    const tooltipProps = {
      title: tooltipTitle
    };
    if (!siderCollapsed && !isInlineCollapsed) {
      tooltipProps.title = null;
      // Reset `open` to fix control mode tooltip display not correct
      // ref: https://github.com/ant-design/ant-design/issues/16742
      tooltipProps.open = false;
    }
    const childrenLength = (0,toArray/* default */.Z)(children).length;
    let returnNode = /*#__PURE__*/react.createElement(es/* Item */.ck, Object.assign({}, (0,omit/* default */.Z)(props, ['title', 'icon', 'danger']), {
      className: classnames_default()({
        [`${prefixCls}-item-danger`]: danger,
        [`${prefixCls}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
      }, className),
      title: typeof title === 'string' ? title : undefined
    }), (0,reactNode/* cloneElement */.Tm)(icon, {
      className: classnames_default()((0,reactNode/* isValidElement */.l$)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', `${prefixCls}-item-icon`)
    }), renderItemChildren(isInlineCollapsed));
    if (!disableMenuItemTitleTooltip) {
      returnNode = /*#__PURE__*/react.createElement(tooltip/* default */.Z, Object.assign({}, tooltipProps, {
        placement: direction === 'rtl' ? 'left' : 'right',
        overlayClassName: `${prefixCls}-inline-collapsed-tooltip`
      }), returnNode);
    }
    return returnNode;
  };
  return /*#__PURE__*/react.createElement(Sider/* SiderContext.Consumer */.D.Consumer, null, renderItem);
};
/* harmony default export */ var menu_MenuItem = (MenuItem);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/SubMenu.js






const SubMenu = props => {
  var _a;
  const {
    popupClassName,
    icon,
    title,
    theme: customTheme
  } = props;
  const context = react.useContext(menu_MenuContext);
  const {
    prefixCls,
    inlineCollapsed,
    theme: contextTheme,
    mode
  } = context;
  const parentPath = (0,es/* useFullPath */.Xl)();
  let titleNode;
  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-inline-collapsed-noicon`
    }, title.charAt(0)) : /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title);
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    const titleIsSpan = (0,reactNode/* isValidElement */.l$)(title) && title.type === 'span';
    titleNode = /*#__PURE__*/react.createElement(react.Fragment, null, (0,reactNode/* cloneElement */.Tm)(icon, {
      className: classnames_default()((0,reactNode/* isValidElement */.l$)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', `${prefixCls}-item-icon`)
    }), titleIsSpan ? title : /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title));
  }
  const contextValue = react.useMemo(() => Object.assign(Object.assign({}, context), {
    firstLevel: false
  }), [context]);
  const popupOffset = mode === 'horizontal' ? [0, 8] : [10, 0];
  return /*#__PURE__*/react.createElement(menu_MenuContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement(es/* SubMenu */.Wd, Object.assign({
    popupOffset: popupOffset
  }, (0,omit/* default */.Z)(props, ['icon']), {
    title: titleNode,
    popupClassName: classnames_default()(prefixCls, popupClassName, `${prefixCls}-${customTheme || contextTheme}`)
  })));
};
/* harmony default export */ var menu_SubMenu = (SubMenu);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/hooks/useItems.js
var useItems_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function convertItemsToNodes(list) {
  return (list || []).map((opt, index) => {
    if (opt && typeof opt === 'object') {
      const _a = opt,
        {
          label,
          children,
          key,
          type
        } = _a,
        restProps = useItems_rest(_a, ["label", "children", "key", "type"]);
      const mergedKey = key !== null && key !== void 0 ? key : `tmp-${index}`;
      // MenuItemGroup & SubMenuItem
      if (children || type === 'group') {
        if (type === 'group') {
          // Group
          return /*#__PURE__*/react.createElement(es/* ItemGroup */.BW, Object.assign({
            key: mergedKey
          }, restProps, {
            title: label
          }), convertItemsToNodes(children));
        }
        // Sub Menu
        return /*#__PURE__*/react.createElement(menu_SubMenu, Object.assign({
          key: mergedKey
        }, restProps, {
          title: label
        }), convertItemsToNodes(children));
      }
      // MenuItem & Divider
      if (type === 'divider') {
        return /*#__PURE__*/react.createElement(menu_MenuDivider, Object.assign({
          key: mergedKey
        }, restProps));
      }
      return /*#__PURE__*/react.createElement(menu_MenuItem, Object.assign({
        key: mergedKey
      }, restProps), label);
    }
    return null;
  }).filter(opt => opt);
}
// FIXME: Move logic here in v5
/**
 * We simply convert `items` to ReactNode for reuse origin component logic. But we need move all the
 * logic from component into this hooks when in v5
 */
function useItems(items) {
  return react.useMemo(() => {
    if (!items) {
      return items;
    }
    return convertItemsToNodes(items);
  }, [items]);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/menu.js
var menu_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















const InternalMenu = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  var _a;
  const override = react.useContext(OverrideContext/* default */.Z);
  const overrideObj = override || {};
  const {
    getPrefixCls,
    getPopupContainer,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const rootPrefixCls = getPrefixCls();
  const {
      prefixCls: customizePrefixCls,
      className,
      theme = 'light',
      expandIcon,
      _internalDisableMenuItemTitleTooltip,
      inlineCollapsed,
      siderCollapsed,
      items,
      children,
      rootClassName,
      mode,
      selectable,
      onClick
    } = props,
    restProps = menu_rest(props, ["prefixCls", "className", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick"]);
  const passedProps = (0,omit/* default */.Z)(restProps, ['collapsedWidth']);
  // ========================= Items ===========================
  const mergedChildren = useItems(items) || children;
  // ======================== Warning ==========================
   false ? 0 : void 0;
   false ? 0 : void 0;
   false ? 0 : void 0;
  (_a = overrideObj.validator) === null || _a === void 0 ? void 0 : _a.call(overrideObj, {
    mode
  });
  // ========================== Click ==========================
  // Tell dropdown that item clicked
  const onItemClick = (0,useEvent/* default */.Z)(function () {
    var _a;
    onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, arguments);
    (_a = overrideObj.onClick) === null || _a === void 0 ? void 0 : _a.call(overrideObj);
  });
  // ========================== Mode ===========================
  const mergedMode = overrideObj.mode || mode;
  // ======================= Selectable ========================
  const mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
  // ======================== Collapsed ========================
  // Inline Collapsed
  const mergedInlineCollapsed = react.useMemo(() => {
    if (siderCollapsed !== undefined) {
      return siderCollapsed;
    }
    return inlineCollapsed;
  }, [inlineCollapsed, siderCollapsed]);
  const defaultMotions = {
    horizontal: {
      motionName: `${rootPrefixCls}-slide-up`
    },
    inline: (0,motion/* default */.ZP)(rootPrefixCls),
    other: {
      motionName: `${rootPrefixCls}-zoom-big`
    }
  };
  const prefixCls = getPrefixCls('menu', customizePrefixCls || overrideObj.prefixCls);
  const [wrapSSR, hashId] = menu_style(prefixCls, !override);
  const menuClassName = classnames_default()(`${prefixCls}-${theme}`, className);
  // ====================== Expand Icon ========================
  let mergedExpandIcon;
  if (typeof expandIcon === 'function') {
    mergedExpandIcon = expandIcon;
  } else {
    mergedExpandIcon = (0,reactNode/* cloneElement */.Tm)(expandIcon || overrideObj.expandIcon, {
      className: `${prefixCls}-submenu-expand-icon`
    });
  }
  // ======================== Context ==========================
  const contextValue = react.useMemo(() => ({
    prefixCls,
    inlineCollapsed: mergedInlineCollapsed || false,
    direction,
    firstLevel: true,
    theme,
    mode: mergedMode,
    disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
  }), [prefixCls, mergedInlineCollapsed, direction, _internalDisableMenuItemTitleTooltip, theme]);
  // ========================= Render ==========================
  return wrapSSR( /*#__PURE__*/react.createElement(OverrideContext/* default.Provider */.Z.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(menu_MenuContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement(es/* default */.ZP, Object.assign({
    getPopupContainer: getPopupContainer,
    overflowedIndicator: /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null),
    overflowedIndicatorPopupClassName: `${prefixCls}-${theme}`,
    mode: mergedMode,
    selectable: mergedSelectable,
    onClick: onItemClick
  }, passedProps, {
    inlineCollapsed: mergedInlineCollapsed,
    className: menuClassName,
    prefixCls: prefixCls,
    direction: direction,
    defaultMotions: defaultMotions,
    expandIcon: mergedExpandIcon,
    ref: ref,
    rootClassName: classnames_default()(rootClassName, hashId)
  }), mergedChildren))));
});
/* harmony default export */ var menu = (InternalMenu);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/index.js








const Menu = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  const menuRef = (0,react.useRef)(null);
  const context = react.useContext(Sider/* SiderContext */.D);
  (0,react.useImperativeHandle)(ref, () => ({
    menu: menuRef.current,
    focus: options => {
      var _a;
      (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus(options);
    }
  }));
  return /*#__PURE__*/react.createElement(menu, Object.assign({
    ref: menuRef
  }, props, context));
});
Menu.Item = menu_MenuItem;
Menu.SubMenu = menu_SubMenu;
Menu.Divider = menu_MenuDivider;
Menu.ItemGroup = es/* ItemGroup */.BW;
/* harmony default export */ var es_menu = (Menu);

/***/ }),

/***/ 67527:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_select; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var es_warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(31131);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useBaseProps.js
/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */

var BaseSelectContext = /*#__PURE__*/react.createContext(null);
function useBaseProps() {
  return react.useContext(BaseSelectContext);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useDelayReset.js


/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */

function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      bool = _React$useState2[0],
      setBool = _React$useState2[1];

  var delayRef = react.useRef(null);

  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };

  react.useEffect(function () {
    return cancelLatest;
  }, []);

  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);

      if (callback) {
        callback();
      }
    }, timeout);
  };

  return [bool, delaySetBool, cancelLatest];
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useLock.js

/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */

function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = react.useRef(null);
  var timeoutRef = react.useRef(null); // Clean up

  react.useEffect(function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }

  return [function () {
    return lockRef.current;
  }, doLock];
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useSelectTriggerControl.js

function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
  var propsRef = react.useRef(null);
  propsRef.current = {
    open: open,
    triggerOpen: triggerOpen,
    customizedTrigger: customizedTrigger
  };
  react.useEffect(function () {
    function onGlobalMouseDown(event) {
      var _propsRef$current;

      // If trigger is customized, Trigger will take control of popupVisible
      if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
        return;
      }

      var target = event.target;

      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }

      if (propsRef.current.open && elements().filter(function (element) {
        return element;
      }).every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }

    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(64217);
// EXTERNAL MODULE: ./node_modules/rc-overflow/es/index.js + 4 modules
var es = __webpack_require__(34243);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/TransBtn.js



var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
      customizeIcon = _ref.customizeIcon,
      customizeIconProps = _ref.customizeIconProps,
      _onMouseDown = _ref.onMouseDown,
      onClick = _ref.onClick,
      children = _ref.children;
  var icon;

  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }

  return /*#__PURE__*/react.createElement("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();

      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};

/* harmony default export */ var es_TransBtn = (TransBtn);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/Input.js






var Input = function Input(_ref, ref) {
  var _inputNode2, _inputNode2$props;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      inputElement = _ref.inputElement,
      disabled = _ref.disabled,
      tabIndex = _ref.tabIndex,
      autoFocus = _ref.autoFocus,
      autoComplete = _ref.autoComplete,
      editable = _ref.editable,
      activeDescendantId = _ref.activeDescendantId,
      value = _ref.value,
      maxLength = _ref.maxLength,
      _onKeyDown = _ref.onKeyDown,
      _onMouseDown = _ref.onMouseDown,
      _onChange = _ref.onChange,
      onPaste = _ref.onPaste,
      _onCompositionStart = _ref.onCompositionStart,
      _onCompositionEnd = _ref.onCompositionEnd,
      open = _ref.open,
      attrs = _ref.attrs;
  var inputNode = inputElement || /*#__PURE__*/react.createElement("input", null);
  var _inputNode = inputNode,
      originRef = _inputNode.ref,
      originProps = _inputNode.props;
  var onOriginKeyDown = originProps.onKeyDown,
      onOriginChange = originProps.onChange,
      onOriginMouseDown = originProps.onMouseDown,
      onOriginCompositionStart = originProps.onCompositionStart,
      onOriginCompositionEnd = originProps.onCompositionEnd,
      style = originProps.style;
  (0,es_warning/* warning */.Kp)(!('maxLength' in inputNode.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled.");
  inputNode = /*#__PURE__*/react.cloneElement(inputNode, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    type: 'search'
  }, originProps), {}, {
    // Override over origin props
    id: id,
    ref: (0,es_ref/* composeRef */.sQ)(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    autoFocus: autoFocus,
    className: classnames_default()("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': activeDescendantId
  }, attrs), {}, {
    value: editable ? value : '',
    maxLength: maxLength,
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), {}, {
      opacity: editable ? null : 0
    }),
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);

      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);

      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);

      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);

      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);

      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};

var RefInput = /*#__PURE__*/react.forwardRef(Input);
RefInput.displayName = 'Input';
/* harmony default export */ var Selector_Input = (RefInput);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/commonUtil.js

function commonUtil_toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value !== undefined ? [value] : [];
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
/** Is client side and not jsdom */

var isBrowserClient =  true && isClient;
function hasValue(value) {
  return value !== undefined && value !== null;
}

function isTitleType(title) {
  return ['string', 'number'].includes((0,esm_typeof/* default */.Z)(title));
}

function getTitle(item) {
  var title = undefined;

  if (item) {
    if (isTitleType(item.title)) {
      title = item.title.toString();
    } else if (isTitleType(item.label)) {
      title = item.label.toString();
    }
  }

  return title;
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useLayoutEffect.js
/* eslint-disable react-hooks/rules-of-hooks */


/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */

function useLayoutEffect_useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (isBrowserClient) {
    /* istanbul ignore next */
    react.useLayoutEffect(effect, deps);
  } else {
    react.useEffect(effect, deps);
  }
}
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/MultipleSelector.js












function itemKey(value) {
  var _value$key;

  return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}

var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};

var SelectSelector = function SelectSelector(props) {
  var id = props.id,
      prefixCls = props.prefixCls,
      values = props.values,
      open = props.open,
      searchValue = props.searchValue,
      autoClearSearchValue = props.autoClearSearchValue,
      inputRef = props.inputRef,
      placeholder = props.placeholder,
      disabled = props.disabled,
      mode = props.mode,
      showSearch = props.showSearch,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      activeDescendantId = props.activeDescendantId,
      tabIndex = props.tabIndex,
      removeIcon = props.removeIcon,
      maxTagCount = props.maxTagCount,
      maxTagTextLength = props.maxTagTextLength,
      _props$maxTagPlacehol = props.maxTagPlaceholder,
      maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
    return "+ ".concat(omittedValues.length, " ...");
  } : _props$maxTagPlacehol,
      tagRender = props.tagRender,
      onToggleOpen = props.onToggleOpen,
      onRemove = props.onRemove,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = react.useRef(null);

  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      inputWidth = _useState2[0],
      setInputWidth = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var selectionPrefixCls = "".concat(prefixCls, "-selection"); // ===================== Search ======================

  var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused); // We measure width and set to the input immediately

  useLayoutEffect_useLayoutEffect(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]); // ===================== Render ======================
  // >>> Render Selector Node. Includes Item & Rest

  function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()("".concat(selectionPrefixCls, "-item"), (0,defineProperty/* default */.Z)({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
      title: getTitle(item)
    }, /*#__PURE__*/react.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  }

  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };

    return /*#__PURE__*/react.createElement("span", {
      onMouseDown: onMouseDown
    }, tagRender({
      label: content,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    }));
  }

  function renderItem(valueItem) {
    var itemDisabled = valueItem.disabled,
        label = valueItem.label,
        value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;

    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);

        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }

    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onRemove(valueItem);
    };

    return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
  }

  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector({
      title: content
    }, content, false);
  } // >>> Input Node


  var inputNode = /*#__PURE__*/react.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /*#__PURE__*/react.createElement(Selector_Input, {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: (0,pickAttrs/* default */.Z)(props, true)
  }), /*#__PURE__*/react.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0")); // >>> Selections

  var selectionNode = /*#__PURE__*/react.createElement(es/* default */.Z, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem: renderItem,
    renderRest: renderRest,
    suffix: inputNode,
    itemKey: itemKey,
    maxCount: maxTagCount
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/react.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};

/* harmony default export */ var MultipleSelector = (SelectSelector);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/SingleSelector.js






var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
      prefixCls = props.prefixCls,
      id = props.id,
      inputRef = props.inputRef,
      disabled = props.disabled,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      activeDescendantId = props.activeDescendantId,
      mode = props.mode,
      open = props.open,
      values = props.values,
      placeholder = props.placeholder,
      tabIndex = props.tabIndex,
      showSearch = props.showSearch,
      searchValue = props.searchValue,
      activeValue = props.activeValue,
      maxLength = props.maxLength,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      inputChanged = _React$useState2[0],
      setInputChanged = _React$useState2[1];

  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';

  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }

  react.useEffect(function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]); // Not show text when closed expect combobox mode

  var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue; // Get title

  var title = getTitle(item);

  var renderPlaceholder = function renderPlaceholder() {
    if (item) {
      return null;
    }

    var hiddenStyle = hasTextInput ? {
      visibility: 'hidden'
    } : undefined;
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-selection-placeholder"),
      style: hiddenStyle
    }, placeholder);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /*#__PURE__*/react.createElement(Selector_Input, {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: (0,pickAttrs/* default */.Z)(props, true),
    maxLength: combobox ? maxLength : undefined
  })), !combobox && item && !hasTextInput && /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: title
  }, item.label), renderPlaceholder());
};

/* harmony default export */ var Selector_SingleSelector = (SingleSelector);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/keyUtil.js

/** keyCode Judgment function */

function isValidateOpenKey(currentKeyCode) {
  return ![// System function button
  KeyCode/* default.ESC */.Z.ESC, KeyCode/* default.SHIFT */.Z.SHIFT, KeyCode/* default.BACKSPACE */.Z.BACKSPACE, KeyCode/* default.TAB */.Z.TAB, KeyCode/* default.WIN_KEY */.Z.WIN_KEY, KeyCode/* default.ALT */.Z.ALT, KeyCode/* default.META */.Z.META, KeyCode/* default.WIN_KEY_RIGHT */.Z.WIN_KEY_RIGHT, KeyCode/* default.CTRL */.Z.CTRL, KeyCode/* default.SEMICOLON */.Z.SEMICOLON, KeyCode/* default.EQUALS */.Z.EQUALS, KeyCode/* default.CAPS_LOCK */.Z.CAPS_LOCK, KeyCode/* default.CONTEXT_MENU */.Z.CONTEXT_MENU, // F1-F12
  KeyCode/* default.F1 */.Z.F1, KeyCode/* default.F2 */.Z.F2, KeyCode/* default.F3 */.Z.F3, KeyCode/* default.F4 */.Z.F4, KeyCode/* default.F5 */.Z.F5, KeyCode/* default.F6 */.Z.F6, KeyCode/* default.F7 */.Z.F7, KeyCode/* default.F8 */.Z.F8, KeyCode/* default.F9 */.Z.F9, KeyCode/* default.F10 */.Z.F10, KeyCode/* default.F11 */.Z.F11, KeyCode/* default.F12 */.Z.F12].includes(currentKeyCode);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/index.js



/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */








var Selector = function Selector(props, ref) {
  var inputRef = (0,react.useRef)(null);
  var compositionStatusRef = (0,react.useRef)(false);
  var prefixCls = props.prefixCls,
      open = props.open,
      mode = props.mode,
      showSearch = props.showSearch,
      tokenWithEnter = props.tokenWithEnter,
      autoClearSearchValue = props.autoClearSearchValue,
      onSearch = props.onSearch,
      onSearchSubmit = props.onSearchSubmit,
      onToggleOpen = props.onToggleOpen,
      onInputKeyDown = props.onInputKeyDown,
      domRef = props.domRef; // ======================= Ref =======================

  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  }); // ====================== Input ======================

  var _useLock = useLock(0),
      _useLock2 = (0,slicedToArray/* default */.Z)(_useLock, 2),
      getInputMouseDown = _useLock2[0],
      setInputMouseDown = _useLock2[1];

  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;

    if (which === KeyCode/* default.UP */.Z.UP || which === KeyCode/* default.DOWN */.Z.DOWN) {
      event.preventDefault();
    }

    if (onInputKeyDown) {
      onInputKeyDown(event);
    }

    if (which === KeyCode/* default.ENTER */.Z.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
    }

    if (isValidateOpenKey(which)) {
      onToggleOpen(true);
    }
  };
  /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */


  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  }; // When paste come, ignore next onChange


  var pastedTextRef = (0,react.useRef)(null);

  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };

  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };

  var onInputCompositionEnd = function onInputCompositionEnd(e) {
    compositionStatusRef.current = false; // Trigger search again to support `tokenSeparators` with typewriting

    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };

  var onInputChange = function onInputChange(event) {
    var value = event.target.value; // Pasted text should replace back to origin content

    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }

    pastedTextRef.current = null;
    triggerOnSearch(value);
  };

  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };

  var onClick = function onClick(_ref) {
    var target = _ref.target;

    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;

      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };

  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown(); // when mode is combobox, don't prevent default behavior
    // https://github.com/ant-design/ant-design/issues/37320

    if (event.target !== inputRef.current && !inputMouseDown && mode !== 'combobox') {
      event.preventDefault();
    }

    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open && autoClearSearchValue !== false) {
        onSearch('', true, false);
      }

      onToggleOpen();
    }
  }; // ================= Inner Selector ==================


  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = mode === 'multiple' || mode === 'tags' ? /*#__PURE__*/react.createElement(MultipleSelector, (0,esm_extends/* default */.Z)({}, props, sharedProps)) : /*#__PURE__*/react.createElement(Selector_SingleSelector, (0,esm_extends/* default */.Z)({}, props, sharedProps));
  return /*#__PURE__*/react.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};

var ForwardSelector = /*#__PURE__*/react.forwardRef(Selector);
ForwardSelector.displayName = 'Selector';
/* harmony default export */ var es_Selector = (ForwardSelector);
// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 15 modules
var rc_trigger_es = __webpack_require__(81263);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/SelectTrigger.js




var _excluded = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];




var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};

var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls,
      disabled = props.disabled,
      visible = props.visible,
      children = props.children,
      popupElement = props.popupElement,
      containerWidth = props.containerWidth,
      animation = props.animation,
      transitionName = props.transitionName,
      dropdownStyle = props.dropdownStyle,
      dropdownClassName = props.dropdownClassName,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'ltr' : _props$direction,
      placement = props.placement,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      dropdownRender = props.dropdownRender,
      dropdownAlign = props.dropdownAlign,
      getPopupContainer = props.getPopupContainer,
      empty = props.empty,
      getTriggerDOMNode = props.getTriggerDOMNode,
      onPopupVisibleChange = props.onPopupVisibleChange,
      onPopupMouseEnter = props.onPopupMouseEnter,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;

  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }

  var builtInPlacements = react.useMemo(function () {
    return getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [dropdownMatchSelectWidth]); // ===================== Motion ======================

  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName; // ======================= Ref =======================

  var popupRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });

  var popupStyle = (0,objectSpread2/* default */.Z)({
    minWidth: containerWidth
  }, dropdownStyle);

  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }

  return /*#__PURE__*/react.createElement(rc_trigger_es/* default */.Z, (0,esm_extends/* default */.Z)({}, restProps, {
    showAction: onPopupVisibleChange ? ['click'] : [],
    hideAction: onPopupVisibleChange ? ['click'] : [],
    popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
    builtinPlacements: builtInPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /*#__PURE__*/react.createElement("div", {
      ref: popupRef,
      onMouseEnter: onPopupMouseEnter
    }, popupNode),
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: classnames_default()(dropdownClassName, (0,defineProperty/* default */.Z)({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode,
    onPopupVisibleChange: onPopupVisibleChange
  }), children);
};

var RefSelectTrigger = /*#__PURE__*/react.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
/* harmony default export */ var es_SelectTrigger = (RefSelectTrigger);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js
var esm_toArray = __webpack_require__(84506);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/valueUtil.js





function getKey(data, index) {
  var key = data.key;
  var value;

  if ('value' in data) {
    value = data.value;
  }

  if (key !== null && key !== undefined) {
    return key;
  }

  if (value !== undefined) {
    return value;
  }

  return "rc-index-key-".concat(index);
}

function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {},
      label = _ref.label,
      value = _ref.value,
      options = _ref.options;

  return {
    label: label || (childrenAsData ? 'children' : 'label'),
    value: value || 'value',
    options: options || 'options'
  };
}
/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */

function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      fieldNames = _ref2.fieldNames,
      childrenAsData = _ref2.childrenAsData;

  var flattenList = [];

  var _fillFieldNames = fillFieldNames(fieldNames, false),
      fieldLabel = _fillFieldNames.label,
      fieldValue = _fillFieldNames.value,
      fieldOptions = _fillFieldNames.options;

  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      var label = data[fieldLabel];

      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue]; // Option

        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data,
          label: label,
          value: value
        });
      } else {
        var grpLabel = label;

        if (grpLabel === undefined && childrenAsData) {
          grpLabel = data.label;
        } // Option Group


        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }

  dig(options, false);
  return flattenList;
}
/**
 * Inject `props` into `option` for legacy usage
 */

function injectPropsWithOption(option) {
  var newOption = (0,objectSpread2/* default */.Z)({}, option);

  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        (0,es_warning/* default */.ZP)(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }

  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }

  var match = false;

  function separate(str, _ref3) {
    var _ref4 = (0,esm_toArray/* default */.Z)(_ref3),
        token = _ref4[0],
        restTokens = _ref4.slice(1);

    if (!token) {
      return [str];
    }

    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat((0,toConsumableArray/* default */.Z)(prevList), (0,toConsumableArray/* default */.Z)(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }

  var list = separate(text, tokens);
  return match ? list : null;
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/BaseSelect.js







var BaseSelect_excluded = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];















var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabIndex'];
function BaseSelect_isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var BaseSelect = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _customizeRawInputEle, _classNames2;

  var id = props.id,
      prefixCls = props.prefixCls,
      className = props.className,
      showSearch = props.showSearch,
      tagRender = props.tagRender,
      direction = props.direction,
      omitDomProps = props.omitDomProps,
      displayValues = props.displayValues,
      onDisplayValuesChange = props.onDisplayValuesChange,
      emptyOptions = props.emptyOptions,
      _props$notFoundConten = props.notFoundContent,
      notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
      onClear = props.onClear,
      mode = props.mode,
      disabled = props.disabled,
      loading = props.loading,
      getInputElement = props.getInputElement,
      getRawInputElement = props.getRawInputElement,
      open = props.open,
      defaultOpen = props.defaultOpen,
      onDropdownVisibleChange = props.onDropdownVisibleChange,
      activeValue = props.activeValue,
      onActiveValueChange = props.onActiveValueChange,
      activeDescendantId = props.activeDescendantId,
      searchValue = props.searchValue,
      autoClearSearchValue = props.autoClearSearchValue,
      onSearch = props.onSearch,
      onSearchSplit = props.onSearchSplit,
      tokenSeparators = props.tokenSeparators,
      allowClear = props.allowClear,
      showArrow = props.showArrow,
      inputIcon = props.inputIcon,
      clearIcon = props.clearIcon,
      OptionList = props.OptionList,
      animation = props.animation,
      transitionName = props.transitionName,
      dropdownStyle = props.dropdownStyle,
      dropdownClassName = props.dropdownClassName,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      dropdownRender = props.dropdownRender,
      dropdownAlign = props.dropdownAlign,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      _props$showAction = props.showAction,
      showAction = _props$showAction === void 0 ? [] : _props$showAction,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onKeyUp = props.onKeyUp,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, BaseSelect_excluded); // ============================== MISC ==============================


  var multiple = BaseSelect_isMultiple(mode);
  var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';

  var domProps = (0,objectSpread2/* default */.Z)({}, restProps);

  DEFAULT_OMIT_PROPS.forEach(function (propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
    delete domProps[propName];
  }); // ============================= Mobile =============================

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      mobile = _React$useState2[0],
      setMobile = _React$useState2[1];

  react.useEffect(function () {
    // Only update on the client side
    setMobile((0,isMobile/* default */.Z)());
  }, []); // ============================== Refs ==============================

  var containerRef = react.useRef(null);
  var selectorDomRef = react.useRef(null);
  var triggerRef = react.useRef(null);
  var selectorRef = react.useRef(null);
  var listRef = react.useRef(null);
  /** Used for component focused management */

  var _useDelayReset = useDelayReset(),
      _useDelayReset2 = (0,slicedToArray/* default */.Z)(_useDelayReset, 3),
      mockFocused = _useDelayReset2[0],
      setMockFocused = _useDelayReset2[1],
      cancelSetMockFocused = _useDelayReset2[2]; // =========================== Imperative ===========================


  react.useImperativeHandle(ref, function () {
    var _selectorRef$current, _selectorRef$current2;

    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;

        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      }
    };
  }); // ========================== Search Value ==========================

  var mergedSearchValue = react.useMemo(function () {
    var _displayValues$;

    if (mode !== 'combobox') {
      return searchValue;
    }

    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
  }, [searchValue, mode, displayValues]); // ========================== Custom Input ==========================
  // Only works in `combobox`

  var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null; // Used for customize replacement for `rc-cascader`

  var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
  var customizeRawInputRef = (0,es_ref/* useComposeRef */.x1)(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref); // ============================== Open ==============================

  var _useMergedState = (0,useMergedState/* default */.Z)(undefined, {
    defaultValue: defaultOpen,
    value: open
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      innerOpen = _useMergedState2[0],
      setInnerOpen = _useMergedState2[1];

  var mergedOpen = innerOpen; // Not trigger `open` in `combobox` when `notFoundContent` is empty

  var emptyListContent = !notFoundContent && emptyOptions;

  if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
    mergedOpen = false;
  }

  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = react.useCallback(function (newOpen) {
    var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;

    if (!disabled) {
      setInnerOpen(nextOpen);

      if (mergedOpen !== nextOpen) {
        onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
      }
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]); // ============================= Search =============================

  var tokenWithEnter = react.useMemo(function () {
    return (tokenSeparators || []).some(function (tokenSeparator) {
      return ['\n', '\r\n'].includes(tokenSeparator);
    });
  }, [tokenSeparators]);

  var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null); // Check if match the `tokenSeparators`

    var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators); // Ignore combobox since it's not split-able

    if (mode !== 'combobox' && patchLabels) {
      newSearchText = '';
      onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels); // Should close when paste finish

      onToggleOpen(false); // Tell Selector that break next actions

      ret = false;
    }

    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? 'typing' : 'effect'
      });
    }

    return ret;
  }; // Only triggered when menu is closed & mode is tags
  // If menu is open, OptionList will take charge
  // If mode isn't tags, press enter is not meaningful when you can't see any option


  var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
    // prevent empty tags from appearing when you click the Enter button
    if (!searchText || !searchText.trim()) {
      return;
    }

    onSearch(searchText, {
      source: 'submit'
    });
  }; // Close will clean up single mode search text


  react.useEffect(function () {
    if (!mergedOpen && !multiple && mode !== 'combobox') {
      onInternalSearch('', false, false);
    }
  }, [mergedOpen]); // ============================ Disabled ============================
  // Close dropdown & remove focus state when disabled change

  react.useEffect(function () {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }

    if (disabled) {
      setMockFocused(false);
    }
  }, [disabled]); // ============================ Keyboard ============================

  /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */

  var _useLock = useLock(),
      _useLock2 = (0,slicedToArray/* default */.Z)(_useLock, 2),
      getClearLock = _useLock2[0],
      setClearLock = _useLock2[1]; // KeyDown


  var onInternalKeyDown = function onInternalKeyDown(event) {
    var clearLock = getClearLock();
    var which = event.which;

    if (which === KeyCode/* default.ENTER */.Z.ENTER) {
      // Do not submit form when type in the input
      if (mode !== 'combobox') {
        event.preventDefault();
      } // We only manage open state here, close logic should handle by list component


      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }

    setClearLock(!!mergedSearchValue); // Remove value by `backspace`

    if (which === KeyCode/* default.BACKSPACE */.Z.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = (0,toConsumableArray/* default */.Z)(displayValues);

      var removedDisplayValue = null;

      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];

        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }

      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: 'remove',
          values: [removedDisplayValue]
        });
      }
    }

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    if (mergedOpen && listRef.current) {
      var _listRef$current2;

      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
  }; // KeyUp


  var onInternalKeyUp = function onInternalKeyUp(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    if (mergedOpen && listRef.current) {
      var _listRef$current3;

      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }

    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
  }; // ============================ Selector ============================


  var onSelectorRemove = function onSelectorRemove(val) {
    var newValues = displayValues.filter(function (i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: 'remove',
      values: [val]
    });
  }; // ========================== Focus / Blur ==========================

  /** Record real focus status */


  var focusRef = react.useRef(false);

  var onContainerFocus = function onContainerFocus() {
    setMockFocused(true);

    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      } // `showAction` should handle `focus` if set


      if (showAction.includes('focus')) {
        onToggleOpen(true);
      }
    }

    focusRef.current = true;
  };

  var onContainerBlur = function onContainerBlur() {
    setMockFocused(false, function () {
      focusRef.current = false;
      onToggleOpen(false);
    });

    if (disabled) {
      return;
    }

    if (mergedSearchValue) {
      // `tags` mode should move `searchValue` into values
      if (mode === 'tags') {
        onSearch(mergedSearchValue, {
          source: 'submit'
        });
      } else if (mode === 'multiple') {
        // `multiple` mode only clean the search value but not trigger event
        onSearch('', {
          source: 'blur'
        });
      }
    }

    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  }; // Give focus back of Select


  var activeTimeoutIds = [];
  react.useEffect(function () {
    return function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);

  var onInternalMouseDown = function onInternalMouseDown(event) {
    var _triggerRef$current;

    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement(); // We should give focus back to selector if clicked item is not focusable

    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function () {
        var index = activeTimeoutIds.indexOf(timeoutId);

        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }

        cancelSetMockFocused();

        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;

          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }

    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }

    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
  }; // ============================ Dropdown ============================


  var _React$useState3 = react.useState(null),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      containerWidth = _React$useState4[0],
      setContainerWidth = _React$useState4[1];

  var _React$useState5 = react.useState({}),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      forceUpdate = _React$useState6[1]; // We need force update here since popup dom is render async


  function onPopupMouseEnter() {
    forceUpdate({});
  }

  (0,useLayoutEffect/* default */.Z)(function () {
    if (triggerOpen) {
      var _containerRef$current;

      var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);

      if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
        setContainerWidth(newWidth);
      }
    }
  }, [triggerOpen]); // Used for raw custom input trigger

  var onTriggerVisibleChange;

  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
      onToggleOpen(newOpen);
    };
  } // Close when click on non-select element


  useSelectTriggerControl(function () {
    var _triggerRef$current2;

    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen, !!customizeRawInputElement); // ============================ Context =============================

  var baseSelectContext = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      notFoundContent: notFoundContent,
      open: mergedOpen,
      triggerOpen: triggerOpen,
      id: id,
      showSearch: mergedShowSearch,
      multiple: multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]); // ==================================================================
  // ==                            Render                            ==
  // ==================================================================
  // ============================= Arrow ==============================

  var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !multiple && mode !== 'combobox';
  var arrowNode;

  if (mergedShowArrow) {
    arrowNode = /*#__PURE__*/react.createElement(es_TransBtn, {
      className: classnames_default()("".concat(prefixCls, "-arrow"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-arrow-loading"), loading)),
      customizeIcon: inputIcon,
      customizeIconProps: {
        loading: loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  } // ============================= Clear ==============================


  var clearNode;

  var onClearMouseDown = function onClearMouseDown() {
    var _selectorRef$current4;

    onClear === null || onClear === void 0 ? void 0 : onClear();
    (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 ? void 0 : _selectorRef$current4.focus();
    onDisplayValuesChange([], {
      type: 'clear',
      values: displayValues
    });
    onInternalSearch('', false, false);
  };

  if (!disabled && allowClear && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '')) {
    clearNode = /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: clearIcon
    }, "\xD7");
  } // =========================== OptionList ===========================


  var optionList = /*#__PURE__*/react.createElement(OptionList, {
    ref: listRef
  }); // ============================= Select =============================

  var mergedClassName = classnames_default()(prefixCls, className, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-multiple"), multiple), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-single"), !multiple), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2)); // >>> Selector

  var selectorNode = /*#__PURE__*/react.createElement(es_SelectTrigger, {
    ref: triggerRef,
    disabled: disabled,
    prefixCls: prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    containerWidth: containerWidth,
    animation: animation,
    transitionName: transitionName,
    dropdownStyle: dropdownStyle,
    dropdownClassName: dropdownClassName,
    direction: direction,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    dropdownRender: dropdownRender,
    dropdownAlign: dropdownAlign,
    placement: placement,
    getPopupContainer: getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode() {
      return selectorDomRef.current;
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter: onPopupMouseEnter
  }, customizeRawInputElement ? /*#__PURE__*/react.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /*#__PURE__*/react.createElement(es_Selector, (0,esm_extends/* default */.Z)({}, props, {
    domRef: selectorDomRef,
    prefixCls: prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id: id,
    showSearch: mergedShowSearch,
    autoClearSearchValue: autoClearSearchValue,
    mode: mode,
    activeDescendantId: activeDescendantId,
    tagRender: tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen: onToggleOpen,
    activeValue: activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter: tokenWithEnter
  }))); // >>> Render

  var renderNode; // Render raw

  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/react.createElement("span", {
      style: {
        width: 0,
        height: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(displayValues.map(function (_ref) {
      var label = _ref.label,
          value = _ref.value;
      return ['number', 'string'].includes((0,esm_typeof/* default */.Z)(label)) ? label : value;
    }).join(', '))), selectorNode, arrowNode, clearNode);
  }

  return /*#__PURE__*/react.createElement(BaseSelectContext.Provider, {
    value: baseSelectContext
  }, renderNode);
}); // Set display name for dev

if (false) {}

/* harmony default export */ var es_BaseSelect = (BaseSelect);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useCache.js



/**
 * Cache `value` related LabeledValue & options.
 */
/* harmony default export */ var useCache = (function (labeledValues, valueOptions) {
  var cacheRef = react.useRef({
    values: new Map(),
    options: new Map()
  });
  var filledLabeledValues = react.useMemo(function () {
    var _cacheRef$current = cacheRef.current,
        prevValueCache = _cacheRef$current.values,
        prevOptionCache = _cacheRef$current.options; // Fill label by cache

    var patchedValues = labeledValues.map(function (item) {
      if (item.label === undefined) {
        var _prevValueCache$get;

        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }

      return item;
    }); // Refresh cache

    var valueCache = new Map();
    var optionCache = new Map();
    patchedValues.forEach(function (item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.current.values = valueCache;
    cacheRef.current.options = optionCache;
    return patchedValues;
  }, [labeledValues, valueOptions]);
  var getOption = react.useCallback(function (val) {
    return valueOptions.get(val) || cacheRef.current.options.get(val);
  }, [valueOptions]);
  return [filledLabeledValues, getOption];
});
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useFilterOptions.js






function includes(test, search) {
  return commonUtil_toArray(test).join('').toUpperCase().includes(search);
}

/* harmony default export */ var useFilterOptions = (function (options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return react.useMemo(function () {
    if (!searchValue || filterOption === false) {
      return options;
    }

    var fieldOptions = fieldNames.options,
        fieldLabel = fieldNames.label,
        fieldValue = fieldNames.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOption === 'function';
    var upperSearch = searchValue.toUpperCase();
    var filterFunc = customizeFilter ? filterOption : function (_, option) {
      // Use provided `optionFilterProp`
      if (optionFilterProp) {
        return includes(option[optionFilterProp], upperSearch);
      } // Auto select `label` or `value` by option type


      if (option[fieldOptions]) {
        // hack `fieldLabel` since `OptionGroup` children is not `label`
        return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
      }

      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function (opt) {
      return injectPropsWithOption(opt);
    } : function (opt) {
      return opt;
    };
    options.forEach(function (item) {
      // Group should check child options
      if (item[fieldOptions]) {
        // Check group first
        var matchGroup = filterFunc(searchValue, wrapOption(item));

        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          // Check option
          var subOptions = item[fieldOptions].filter(function (subItem) {
            return filterFunc(searchValue, wrapOption(subItem));
          });

          if (subOptions.length) {
            filteredOptions.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, (0,defineProperty/* default */.Z)({}, fieldOptions, subOptions)));
          }
        }

        return;
      }

      if (filterFunc(searchValue, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
});
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useId.js



var uuid = 0;
/** Is client side and not jsdom */

var useId_isBrowserClient =  true && (0,canUseDom/* default */.Z)();
/** Get unique id for accessibility usage */

function getUUID() {
  var retId; // Test never reach

  /* istanbul ignore if */

  if (useId_isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }

  return retId;
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerId = _React$useState2[0],
      setInnerId = _React$useState2[1];

  react.useEffect(function () {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var Children_toArray = __webpack_require__(50344);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/legacyUtil.js


var legacyUtil_excluded = ["children", "value"],
    _excluded2 = ["children"];



function convertNodeToOption(node) {
  var _ref = node,
      key = _ref.key,
      _ref$props = _ref.props,
      children = _ref$props.children,
      value = _ref$props.value,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref$props, legacyUtil_excluded);

  return (0,objectSpread2/* default */.Z)({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}

function legacyUtil_convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0,Children_toArray/* default */.Z)(nodes).map(function (node, index) {
    if (! /*#__PURE__*/react.isValidElement(node) || !node.type) {
      return null;
    }

    var _ref2 = node,
        isSelectOptGroup = _ref2.type.isSelectOptGroup,
        key = _ref2.key,
        _ref2$props = _ref2.props,
        children = _ref2$props.children,
        restProps = (0,objectWithoutProperties/* default */.Z)(_ref2$props, _excluded2);

    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }

    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: legacyUtil_convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useOptions.js


/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */

function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
  return react.useMemo(function () {
    var mergedOptions = options;
    var childrenAsData = !options;

    if (childrenAsData) {
      mergedOptions = legacyUtil_convertChildrenToData(children);
    }

    var valueOptions = new Map();
    var labelOptions = new Map();

    var setLabelOptions = function setLabelOptions(labelOptionsMap, option, key) {
      if (key && typeof key === 'string') {
        labelOptionsMap.set(option[key], option);
      }
    };

    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];

        if (!option[fieldNames.options] || isChildren) {
          valueOptions.set(option[fieldNames.value], option);
          setLabelOptions(labelOptions, option, fieldNames.label); // https://github.com/ant-design/ant-design/issues/35304

          setLabelOptions(labelOptions, option, optionFilterProp);
          setLabelOptions(labelOptions, option, optionLabelProp);
        } else {
          dig(option[fieldNames.options], true);
        }
      }
    }

    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions: valueOptions,
      labelOptions: labelOptions
    };
  }, [options, children, fieldNames, optionFilterProp, optionLabelProp]);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useRefFunc.js

/**
 * Same as `React.useCallback` but always return a memoized function
 * but redirect to real function.
 */

function useRefFunc(callback) {
  var funcRef = react.useRef();
  funcRef.current = callback;
  var cacheFn = react.useCallback(function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/OptGroup.js
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};

OptGroup.isSelectOptGroup = true;
/* harmony default export */ var es_OptGroup = (OptGroup);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Option.js
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};

Option.isSelectOption = true;
/* harmony default export */ var es_Option = (Option);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(56982);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/rc-virtual-list/es/index.js + 14 modules
var rc_virtual_list_es = __webpack_require__(73453);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/SelectContext.js

var SelectContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_SelectContext = (SelectContext);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/platformUtil.js
/* istanbul ignore file */
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/OptionList.js





var OptionList_excluded = ["disabled", "title", "children", "style", "className"];











 // export interface OptionListProps<OptionsType extends object[]> {

function OptionList_isTitleType(content) {
  return typeof content === 'string' || typeof content === 'number';
}
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */


var OptionList = function OptionList(_, ref) {
  var _useBaseProps = useBaseProps(),
      prefixCls = _useBaseProps.prefixCls,
      id = _useBaseProps.id,
      open = _useBaseProps.open,
      multiple = _useBaseProps.multiple,
      mode = _useBaseProps.mode,
      searchValue = _useBaseProps.searchValue,
      toggleOpen = _useBaseProps.toggleOpen,
      notFoundContent = _useBaseProps.notFoundContent,
      onPopupScroll = _useBaseProps.onPopupScroll;

  var _React$useContext = react.useContext(es_SelectContext),
      flattenOptions = _React$useContext.flattenOptions,
      onActiveValue = _React$useContext.onActiveValue,
      defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption,
      onSelect = _React$useContext.onSelect,
      menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon,
      rawValues = _React$useContext.rawValues,
      fieldNames = _React$useContext.fieldNames,
      virtual = _React$useContext.virtual,
      listHeight = _React$useContext.listHeight,
      listItemHeight = _React$useContext.listItemHeight;

  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = (0,useMemo/* default */.Z)(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  }); // =========================== List ===========================

  var listRef = react.useRef(null);

  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };

  var scrollIntoView = function scrollIntoView(args) {
    if (listRef.current) {
      listRef.current.scrollTo(typeof args === 'number' ? {
        index: args
      } : args);
    }
  }; // ========================== Active ==========================


  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;

    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
          group = _memoFlattenOptions$c.group,
          data = _memoFlattenOptions$c.data;

      if (!group && !data.disabled) {
        return current;
      }
    }

    return -1;
  };

  var _React$useState = react.useState(function () {
    return getEnabledActiveIndex(0);
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    }; // Trigger active event

    var flattenItem = memoFlattenOptions[index];

    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }

    onActiveValue(flattenItem.value, index, info);
  }; // Auto active first item when list length or searchValue changed


  (0,react.useEffect)(function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]); // https://github.com/ant-design/ant-design/issues/34975

  var isSelected = react.useCallback(function (value) {
    return rawValues.has(value) && mode !== 'combobox';
  }, [mode, (0,toConsumableArray/* default */.Z)(rawValues).toString(), rawValues.size]); // Auto scroll to item position in single mode

  (0,react.useEffect)(function () {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && rawValues.size === 1) {
        var value = Array.from(rawValues)[0];
        var index = memoFlattenOptions.findIndex(function (_ref) {
          var data = _ref.data;
          return data.value === value;
        });

        if (index !== -1) {
          setActive(index);
          scrollIntoView(index);
        }
      }
    }); // Force trigger scrollbar visible when open

    if (open) {
      var _listRef$current;

      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }

    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open, searchValue]); // ========================== Values ==========================

  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    } // Single mode should always close by select


    if (!multiple) {
      toggleOpen(false);
    }
  }; // ========================= Keyboard =========================


  react.useImperativeHandle(ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which,
            ctrlKey = event.ctrlKey;

        switch (which) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case KeyCode/* default.N */.Z.N:
          case KeyCode/* default.P */.Z.P:
          case KeyCode/* default.UP */.Z.UP:
          case KeyCode/* default.DOWN */.Z.DOWN:
            {
              var offset = 0;

              if (which === KeyCode/* default.UP */.Z.UP) {
                offset = -1;
              } else if (which === KeyCode/* default.DOWN */.Z.DOWN) {
                offset = 1;
              } else if (isPlatformMac() && ctrlKey) {
                if (which === KeyCode/* default.N */.Z.N) {
                  offset = 1;
                } else if (which === KeyCode/* default.P */.Z.P) {
                  offset = -1;
                }
              }

              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }

              break;
            }
          // >>> Select

          case KeyCode/* default.ENTER */.Z.ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];

              if (item && !item.data.disabled) {
                onSelectValue(item.value);
              } else {
                onSelectValue(undefined);
              }

              if (open) {
                event.preventDefault();
              }

              break;
            }
          // >>> Close

          case KeyCode/* default.ESC */.Z.ESC:
            {
              toggleOpen(false);

              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  }); // ========================== Render ==========================

  if (memoFlattenOptions.length === 0) {
    return /*#__PURE__*/react.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }

  var omitFieldNameList = Object.keys(fieldNames).map(function (key) {
    return fieldNames[key];
  });

  var getLabel = function getLabel(item) {
    return item.label;
  };

  function getItemAriaProps(item, index) {
    var group = item.group;
    return {
      role: group ? 'presentation' : 'option',
      id: "".concat(id, "_list_").concat(index)
    };
  }

  var renderItem = function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = (0,pickAttrs/* default */.Z)(itemData, true);
    var mergedLabel = getLabel(item);
    return item ? /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
    }, attrs, {
      key: index
    }, getItemAriaProps(item, index), {
      "aria-selected": isSelected(value)
    }), value) : null;
  };

  var a11yProps = {
    role: 'listbox',
    id: "".concat(id, "_list")
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, virtual && /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, a11yProps, {
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/react.createElement(rc_virtual_list_es/* default */.Z, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: listHeight,
    itemHeight: listItemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onPopupScroll,
    virtual: virtual,
    innerProps: virtual ? null : a11yProps
  }, function (item, itemIndex) {
    var _classNames;

    var group = item.group,
        groupOption = item.groupOption,
        data = item.data,
        label = item.label,
        value = item.value;
    var key = data.key; // Group

    if (group) {
      var _data$title;

      var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : OptionList_isTitleType(label) ? label.toString() : undefined;
      return /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(itemPrefixCls, "".concat(itemPrefixCls, "-group")),
        title: groupTitle
      }, label !== undefined ? label : key);
    }

    var disabled = data.disabled,
        title = data.title,
        children = data.children,
        style = data.style,
        className = data.className,
        otherProps = (0,objectWithoutProperties/* default */.Z)(data, OptionList_excluded);

    var passedProps = (0,omit/* default */.Z)(otherProps, omitFieldNameList); // Option

    var selected = isSelected(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classnames_default()(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = getLabel(item);
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected; // https://github.com/ant-design/ant-design/issues/34145

    var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value; // https://github.com/ant-design/ant-design/issues/26717

    var optionTitle = OptionList_isTitleType(content) ? content.toString() : undefined;

    if (title !== undefined) {
      optionTitle = title;
    }

    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, (0,pickAttrs/* default */.Z)(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }

        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), /*#__PURE__*/react.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), /*#__PURE__*/react.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '✓' : null));
  }));
};

var RefOptionList = /*#__PURE__*/react.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';
/* harmony default export */ var es_OptionList = (RefOptionList);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/warningPropsUtil.js








function warningProps(props) {
  var mode = props.mode,
      options = props.options,
      children = props.children,
      backfill = props.backfill,
      allowClear = props.allowClear,
      placeholder = props.placeholder,
      getInputElement = props.getInputElement,
      showSearch = props.showSearch,
      onSearch = props.onSearch,
      defaultOpen = props.defaultOpen,
      autoFocus = props.autoFocus,
      labelInValue = props.labelInValue,
      value = props.value,
      inputValue = props.inputValue,
      optionLabelProp = props.optionLabelProp;
  var multiple = isMultiple(mode);
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || convertChildrenToData(children); // `tags` should not set option as disabled

  warning(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.'); // `combobox` & `tags` should option be `string` type

  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }

      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    warning(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  } // `combobox` should not use `optionLabelProp`


  warning(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.'); // Only `combobox` support `backfill`

  warning(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.'); // Only `combobox` support `getInputElement`

  warning(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.'); // Customize `getInputElement` should not use `allowClear` & `placeholder`

  noteOnce(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.'); // `onSearch` should use in `combobox` or `showSearch`

  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    warning(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }

  noteOnce(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');

  if (value !== undefined && value !== null) {
    var values = toArray(value);
    warning(!labelInValue || values.every(function (val) {
      return _typeof(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
    warning(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  } // Syntactic sugar should use correct children type


  if (children) {
    var invalidateChildType = null;
    toNodeArray(children).some(function (node) {
      if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
        return false;
      }

      var _ref = node,
          type = _ref.type;

      if (type.isSelectOption) {
        return false;
      }

      if (type.isSelectOptGroup) {
        var allChildrenValid = toNodeArray(node.props.children).every(function (subNode) {
          if (! /*#__PURE__*/React.isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }

          invalidateChildType = subNode.type;
          return false;
        });

        if (allChildrenValid) {
          return false;
        }

        return true;
      }

      invalidateChildType = type;
      return true;
    });

    if (invalidateChildType) {
      warning(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }

    warning(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
} // value in Select option should not be null
// note: OptGroup has options too


function warningNullOptions(options, fieldNames) {
  if (options) {
    var recursiveOptions = function recursiveOptions(optionsList) {
      var inGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      for (var i = 0; i < optionsList.length; i++) {
        var option = optionsList[i];

        if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
          warning(false, '`value` in Select options should not be `null`.');
          return true;
        }

        if (!inGroup && Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options]) && recursiveOptions(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options], true)) {
          break;
        }
      }
    };

    recursiveOptions(options);
  }
}
/* harmony default export */ var warningPropsUtil = ((/* unused pure expression or super */ null && (warningProps)));
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Select.js







var Select_excluded = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];

/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */
















var OMIT_DOM_PROPS = ['inputValue'];

function isRawValue(value) {
  return !value || (0,esm_typeof/* default */.Z)(value) !== 'object';
}

var Select = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var id = props.id,
      mode = props.mode,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
      backfill = props.backfill,
      fieldNames = props.fieldNames,
      inputValue = props.inputValue,
      searchValue = props.searchValue,
      onSearch = props.onSearch,
      _props$autoClearSearc = props.autoClearSearchValue,
      autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
      onSelect = props.onSelect,
      onDeselect = props.onDeselect,
      _props$dropdownMatchS = props.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
      filterOption = props.filterOption,
      filterSort = props.filterSort,
      optionFilterProp = props.optionFilterProp,
      optionLabelProp = props.optionLabelProp,
      options = props.options,
      children = props.children,
      defaultActiveFirstOption = props.defaultActiveFirstOption,
      menuItemSelectedIcon = props.menuItemSelectedIcon,
      virtual = props.virtual,
      _props$listHeight = props.listHeight,
      listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
      _props$listItemHeight = props.listItemHeight,
      listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
      value = props.value,
      defaultValue = props.defaultValue,
      labelInValue = props.labelInValue,
      onChange = props.onChange,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, Select_excluded);

  var mergedId = useId(id);
  var multiple = BaseSelect_isMultiple(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = react.useMemo(function () {
    if (filterOption === undefined && mode === 'combobox') {
      return false;
    }

    return filterOption;
  }, [filterOption, mode]); // ========================= FieldNames =========================

  var mergedFieldNames = react.useMemo(function () {
    return fillFieldNames(fieldNames, childrenAsData);
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [// We stringify fieldNames to avoid unnecessary re-renders.
  JSON.stringify(fieldNames), childrenAsData]
  /* eslint-enable react-hooks/exhaustive-deps */
  ); // =========================== Search ===========================

  var _useMergedState = (0,useMergedState/* default */.Z)('', {
    value: searchValue !== undefined ? searchValue : inputValue,
    postState: function postState(search) {
      return search || '';
    }
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      mergedSearchValue = _useMergedState2[0],
      setSearchValue = _useMergedState2[1]; // =========================== Option ===========================


  var parsedOptions = useOptions(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions,
      labelOptions = parsedOptions.labelOptions,
      mergedOptions = parsedOptions.options; // ========================= Wrap Value =========================

  var convert2LabelValues = react.useCallback(function (draftValues) {
    // Convert to array
    var valueList = commonUtil_toArray(draftValues); // Convert to labelInValue type

    return valueList.map(function (val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled;
      var rawTitle; // Fill label & value

      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;

        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }

      var option = valueOptions.get(rawValue);

      if (option) {
        var _option$key;

        // Fill missing props
        if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
        if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        rawTitle = option === null || option === void 0 ? void 0 : option.title; // Warning if label not same as provided

        if (false) { var optionLabel; }
      }

      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled,
        title: rawTitle
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]); // =========================== Values ===========================

  var _useMergedState3 = (0,useMergedState/* default */.Z)(defaultValue, {
    value: value
  }),
      _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
      internalValue = _useMergedState4[0],
      setInternalValue = _useMergedState4[1]; // Merged value with LabelValueType


  var rawLabeledValues = react.useMemo(function () {
    var _values$;

    var values = convert2LabelValues(internalValue); // combobox no need save value when it's no value

    if (mode === 'combobox' && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
      return [];
    }

    return values;
  }, [internalValue, convert2LabelValues, mode]); // Fill label with cache to avoid option remove

  var _useCache = useCache(rawLabeledValues, valueOptions),
      _useCache2 = (0,slicedToArray/* default */.Z)(_useCache, 2),
      mergedValues = _useCache2[0],
      getMixedOption = _useCache2[1];

  var displayValues = react.useMemo(function () {
    // `null` need show as placeholder instead
    // https://github.com/ant-design/ant-design/issues/25057
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];

      if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
        return [];
      }
    }

    return mergedValues.map(function (item) {
      var _item$label;

      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mode, mergedValues]);
  /** Convert `displayValues` to raw value type set */

  var rawValues = react.useMemo(function () {
    return new Set(mergedValues.map(function (val) {
      return val.value;
    }));
  }, [mergedValues]);
  react.useEffect(function () {
    if (mode === 'combobox') {
      var _mergedValues$;

      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
      setSearchValue(hasValue(strValue) ? String(strValue) : '');
    }
  }, [mergedValues]); // ======================= Display Option =======================
  // Create a placeholder item if not exist in `options`

  var createTagOption = useRefFunc(function (val, label) {
    var _ref;

    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _ref = {}, (0,defineProperty/* default */.Z)(_ref, mergedFieldNames.value, val), (0,defineProperty/* default */.Z)(_ref, mergedFieldNames.label, mergedLabel), _ref;
  }); // Fill tag as option if mode is `tags`

  var filledTagOptions = react.useMemo(function () {
    if (mode !== 'tags') {
      return mergedOptions;
    } // >>> Tag mode


    var cloneOptions = (0,toConsumableArray/* default */.Z)(mergedOptions); // Check if value exist in options (include new patch item)


    var existOptions = function existOptions(val) {
      return valueOptions.has(val);
    }; // Fill current value as option


    (0,toConsumableArray/* default */.Z)(mergedValues).sort(function (a, b) {
      return a.value < b.value ? -1 : 1;
    }).forEach(function (item) {
      var val = item.value;

      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });

    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp); // Fill options with search value if needed

  var filledSearchOptions = react.useMemo(function () {
    if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function (item) {
      return item[optionFilterProp || 'value'] === mergedSearchValue;
    })) {
      return filteredOptions;
    } // Fill search value as option


    return [createTagOption(mergedSearchValue)].concat((0,toConsumableArray/* default */.Z)(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]);
  var orderedFilteredOptions = react.useMemo(function () {
    if (!filterSort) {
      return filledSearchOptions;
    }

    return (0,toConsumableArray/* default */.Z)(filledSearchOptions).sort(function (a, b) {
      return filterSort(a, b);
    });
  }, [filledSearchOptions, filterSort]);
  var displayOptions = react.useMemo(function () {
    return flattenOptions(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData: childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]); // =========================== Change ===========================

  var triggerChange = function triggerChange(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);

    if (onChange && ( // Trigger event only when value changed
    labeledValues.length !== mergedValues.length || labeledValues.some(function (newVal, index) {
      var _mergedValues$index;

      return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function (v) {
        return v.value;
      });
      var returnOptions = labeledValues.map(function (v) {
        return injectPropsWithOption(getMixedOption(v.value));
      });
      onChange( // Value
      multiple ? returnValues : returnValues[0], // Option
      multiple ? returnOptions : returnOptions[0]);
    }
  }; // ======================= Accessibility ========================


  var _React$useState = react.useState(null),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      activeValue = _React$useState2[0],
      setActiveValue = _React$useState2[1];

  var _React$useState3 = react.useState(0),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      accessibilityIndex = _React$useState4[0],
      setAccessibilityIndex = _React$useState4[1];

  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
  var onActiveValue = react.useCallback(function (active, index) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref2$source = _ref2.source,
        source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;

    setAccessibilityIndex(index);

    if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
      setActiveValue(String(active));
    }
  }, [backfill, mode]); // ========================= OptionList =========================

  var triggerSelect = function triggerSelect(val, selected, type) {
    var getSelectEnt = function getSelectEnt() {
      var _option$key2;

      var option = getMixedOption(val);
      return [labelInValue ? {
        label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, injectPropsWithOption(option)];
    };

    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(),
          _getSelectEnt2 = (0,slicedToArray/* default */.Z)(_getSelectEnt, 2),
          wrappedValue = _getSelectEnt2[0],
          _option = _getSelectEnt2[1];

      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type !== 'clear') {
      var _getSelectEnt3 = getSelectEnt(),
          _getSelectEnt4 = (0,slicedToArray/* default */.Z)(_getSelectEnt3, 2),
          _wrappedValue = _getSelectEnt4[0],
          _option2 = _getSelectEnt4[1];

      onDeselect(_wrappedValue, _option2);
    }
  }; // Used for OptionList selection


  var onInternalSelect = useRefFunc(function (val, info) {
    var cloneValues; // Single mode always trigger select only with option list

    var mergedSelect = multiple ? info.selected : true;

    if (mergedSelect) {
      cloneValues = multiple ? [].concat((0,toConsumableArray/* default */.Z)(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function (v) {
        return v.value !== val;
      });
    }

    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect); // Clean search value if single or configured

    if (mode === 'combobox') {
      // setSearchValue(String(val));
      setActiveValue('');
    } else if (!BaseSelect_isMultiple || autoClearSearchValue) {
      setSearchValue('');
      setActiveValue('');
    }
  }); // ======================= Display Change =======================
  // BaseSelect display values change

  var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
    triggerChange(nextValues);
    var type = info.type,
        values = info.values;

    if (type === 'remove' || type === 'clear') {
      values.forEach(function (item) {
        triggerSelect(item.value, false, type);
      });
    }
  }; // =========================== Search ===========================


  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null); // [Submit] Tag mode should flush input

    if (info.source === 'submit') {
      var formatted = (searchText || '').trim(); // prevent empty tags from appearing when you click the Enter button

      if (formatted) {
        var newRawValues = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue('');
      }

      return;
    }

    if (info.source !== 'blur') {
      if (mode === 'combobox') {
        triggerChange(searchText);
      }

      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
    }
  };

  var onInternalSearchSplit = function onInternalSearchSplit(words) {
    var patchValues = words;

    if (mode !== 'tags') {
      patchValues = words.map(function (word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function (val) {
        return val !== undefined;
      });
    }

    var newRawValues = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(rawValues), (0,toConsumableArray/* default */.Z)(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function (newRawValue) {
      triggerSelect(newRawValue, true);
    });
  }; // ========================== Context ===========================


  var selectContext = react.useMemo(function () {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: menuItemSelectedIcon,
      rawValues: rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      childrenAsData: childrenAsData
    });
  }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]); // ========================== Warning ===========================

  if (false) {} // ==============================================================
  // ==                          Render                          ==
  // ==============================================================


  return /*#__PURE__*/react.createElement(es_SelectContext.Provider, {
    value: selectContext
  }, /*#__PURE__*/react.createElement(es_BaseSelect, (0,esm_extends/* default */.Z)({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls: prefixCls,
    ref: ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode: mode // >>> Values
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange // >>> Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    autoClearSearchValue: autoClearSearchValue,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth // >>> OptionList
    ,
    OptionList: es_OptionList,
    emptyOptions: !displayOptions.length // >>> Accessibility
    ,
    activeValue: activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});

if (false) {}

var TypedSelect = Select;
TypedSelect.Option = es_Option;
TypedSelect.OptGroup = es_OptGroup;
/* harmony default export */ var es_Select = (TypedSelect);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/index.js






/* harmony default export */ var rc_select_es = (es_Select);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/defaultRenderEmpty.js
var defaultRenderEmpty = __webpack_require__(88258);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(97647);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(65223);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__(9708);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(63606);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(4340);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(97937);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(80882);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(50888);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(68795);
;// CONCATENATED MODULE: ./node_modules/antd/es/select/utils/iconUtil.js







function getIcons(_ref) {
  let {
    suffixIcon,
    clearIcon,
    menuItemSelectedIcon,
    removeIcon,
    loading,
    multiple,
    hasFeedback,
    prefixCls,
    showArrow,
    feedbackIcon
  } = _ref;
  // Clear Icon
  const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null);
  // Validation Feedback Icon
  const getSuffixIconNode = arrowIcon => /*#__PURE__*/react.createElement(react.Fragment, null, showArrow !== false && arrowIcon, hasFeedback && feedbackIcon);
  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode( /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
      spin: true
    }));
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = _ref2 => {
      let {
        open,
        showSearch
      } = _ref2;
      if (open && showSearch) {
        return getSuffixIconNode( /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, {
          className: iconCls
        }));
      }
      return getSuffixIconNode( /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, {
        className: iconCls
      }));
    };
  }
  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null);
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/slide.js
var slide = __webpack_require__(67771);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/move.js
var move = __webpack_require__(33297);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
;// CONCATENATED MODULE: ./node_modules/antd/es/select/style/dropdown.js


const genItemStyle = token => {
  const {
    controlPaddingHorizontal
  } = token;
  return {
    position: 'relative',
    display: 'block',
    minHeight: token.controlHeight,
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    boxSizing: 'border-box'
  };
};
const genSingleStyle = token => {
  const {
    antCls,
    componentCls
  } = token;
  const selectItemCls = `${componentCls}-item`;
  return [{
    [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      top: -9999,
      zIndex: token.zIndexPopup,
      boxSizing: 'border-box',
      padding: token.paddingXXS,
      overflow: 'hidden',
      fontSize: token.fontSize,
      // Fix select render lag of long text in chrome
      // https://github.com/ant-design/ant-design/issues/11456
      // https://github.com/ant-design/ant-design/issues/11843
      fontVariant: 'initial',
      backgroundColor: token.colorBgElevated,
      borderRadius: token.borderRadiusLG,
      outline: 'none',
      boxShadow: token.boxShadowSecondary,
      [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active&-placement-bottomLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active&-placement-bottomLeft
          `]: {
        animationName: slide/* slideUpIn */.fJ
      },
      [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active&-placement-topLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active&-placement-topLeft
          `]: {
        animationName: slide/* slideDownIn */.Qt
      },
      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active&-placement-bottomLeft`]: {
        animationName: slide/* slideUpOut */.Uw
      },
      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active&-placement-topLeft`]: {
        animationName: slide/* slideDownOut */.ly
      },
      '&-hidden': {
        display: 'none'
      },
      '&-empty': {
        color: token.colorTextDisabled
      },
      // ========================= Options =========================
      [`${selectItemCls}-empty`]: Object.assign(Object.assign({}, genItemStyle(token)), {
        color: token.colorTextDisabled
      }),
      [`${selectItemCls}`]: Object.assign(Object.assign({}, genItemStyle(token)), {
        cursor: 'pointer',
        transition: `background ${token.motionDurationSlow} ease`,
        borderRadius: token.borderRadiusSM,
        // =========== Group ============
        '&-group': {
          color: token.colorTextDescription,
          fontSize: token.fontSizeSM,
          cursor: 'default'
        },
        // =========== Option ===========
        '&-option': {
          display: 'flex',
          '&-content': Object.assign({
            flex: 'auto'
          }, style/* textEllipsis */.vS),
          '&-state': {
            flex: 'none'
          },
          [`&-active:not(${selectItemCls}-option-disabled)`]: {
            backgroundColor: token.controlItemBgHover
          },
          [`&-selected:not(${selectItemCls}-option-disabled)`]: {
            color: token.colorText,
            fontWeight: token.fontWeightStrong,
            backgroundColor: token.controlItemBgActive,
            [`${selectItemCls}-option-state`]: {
              color: token.colorPrimary
            }
          },
          '&-disabled': {
            [`&${selectItemCls}-option-selected`]: {
              backgroundColor: token.colorBgContainerDisabled
            },
            color: token.colorTextDisabled,
            cursor: 'not-allowed'
          },
          '&-grouped': {
            paddingInlineStart: token.controlPaddingHorizontal * 2
          }
        }
      }),
      // =========================== RTL ===========================
      '&-rtl': {
        direction: 'rtl'
      }
    })
  },
  // Follow code may reuse in other components
  (0,slide/* initSlideMotion */.oN)(token, 'slide-up'), (0,slide/* initSlideMotion */.oN)(token, 'slide-down'), (0,move/* initMoveMotion */.Fm)(token, 'move-up'), (0,move/* initMoveMotion */.Fm)(token, 'move-down')];
};
/* harmony default export */ var dropdown = (genSingleStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/select/style/multiple.js


const FIXED_ITEM_MARGIN = 2;
function getSelectItemStyle(_ref) {
  let {
    controlHeightSM,
    controlHeight,
    lineWidth: borderWidth
  } = _ref;
  const selectItemDist = (controlHeight - controlHeightSM) / 2 - borderWidth;
  const selectItemMargin = Math.ceil(selectItemDist / 2);
  return [selectItemDist, selectItemMargin];
}
function genSizeStyle(token, suffix) {
  const {
    componentCls,
    iconCls
  } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token.controlHeightSM;
  const [selectItemDist] = getSelectItemStyle(token);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
  return {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: '100%',
          display: 'inline-flex'
        }
      },
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        // Multiple is little different that horizontal is follow the vertical
        padding: `${selectItemDist - FIXED_ITEM_MARGIN}px ${FIXED_ITEM_MARGIN * 2}px`,
        borderRadius: token.borderRadius,
        [`${componentCls}-show-search&`]: {
          cursor: 'text'
        },
        [`${componentCls}-disabled&`]: {
          background: token.colorBgContainerDisabled,
          cursor: 'not-allowed'
        },
        '&:after': {
          display: 'inline-block',
          width: 0,
          margin: `${FIXED_ITEM_MARGIN}px 0`,
          lineHeight: `${selectItemHeight}px`,
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token.fontSizeIcon + token.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        position: 'relative',
        display: 'flex',
        flex: 'none',
        boxSizing: 'border-box',
        maxWidth: '100%',
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: `${selectItemHeight - token.lineWidth * 2}px`,
        background: token.colorFillSecondary,
        border: `${token.lineWidth}px solid ${token.colorSplit}`,
        borderRadius: token.borderRadiusSM,
        cursor: 'default',
        transition: `font-size ${token.motionDurationSlow}, line-height ${token.motionDurationSlow}, height ${token.motionDurationSlow}`,
        userSelect: 'none',
        marginInlineEnd: FIXED_ITEM_MARGIN * 2,
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS / 2,
        [`${componentCls}-disabled&`]: {
          color: token.colorTextDisabled,
          borderColor: token.colorBorder,
          cursor: 'not-allowed'
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        '&-content': {
          display: 'inline-block',
          marginInlineEnd: token.paddingXS / 2,
          overflow: 'hidden',
          whiteSpace: 'pre',
          textOverflow: 'ellipsis'
        },
        '&-remove': Object.assign(Object.assign({}, (0,style/* resetIcon */.Ro)()), {
          display: 'inline-block',
          color: token.colorIcon,
          fontWeight: 'bold',
          fontSize: 10,
          lineHeight: 'inherit',
          cursor: 'pointer',
          [`> ${iconCls}`]: {
            verticalAlign: '-0.2em'
          },
          '&:hover': {
            color: token.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${componentCls}-selection-search`]: {
        display: 'inline-flex',
        position: 'relative',
        maxWidth: '100%',
        marginInlineStart: token.inputPaddingHorizontalBase - selectItemDist,
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: `${selectItemHeight}px`,
          transition: `all ${token.motionDurationSlow}`
        },
        '&-input': {
          width: '100%',
          minWidth: 4.1 // fix search cursor missing
        },

        '&-mirror': {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: 'auto',
          zIndex: 999,
          whiteSpace: 'pre',
          visibility: 'hidden'
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder `]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: 'translateY(-50%)',
        transition: `all ${token.motionDurationSlow}`
      }
    }
  };
}
function genMultipleStyle(token) {
  const {
    componentCls
  } = token;
  const smallToken = (0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightSM,
    controlHeightSM: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const [, smSelectItemMargin] = getSelectItemStyle(token);
  return [genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  genSizeStyle(smallToken, 'sm'),
  // Padding
  {
    [`${componentCls}-multiple${componentCls}-sm`]: {
      [`${componentCls}-selection-placeholder`]: {
        insetInlineStart: token.controlPaddingHorizontalSM - token.lineWidth,
        insetInlineEnd: 'auto'
      },
      // https://github.com/ant-design/ant-design/issues/29559
      [`${componentCls}-selection-search`]: {
        marginInlineStart: smSelectItemMargin
      }
    }
  },
  // ======================== Large ========================
  // Shared
  genSizeStyle((0,statistic/* merge */.TS)(token, {
    fontSize: token.fontSizeLG,
    controlHeight: token.controlHeightLG,
    controlHeightSM: token.controlHeight,
    borderRadius: token.borderRadiusLG,
    borderRadiusSM: token.borderRadius
  }), 'lg')];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/select/style/single.js


function single_genSizeStyle(token, suffix) {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    borderRadius
  } = token;
  const selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
  return {
    [`${componentCls}-single${suffixCls}`]: {
      fontSize: token.fontSize,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
        display: 'flex',
        borderRadius,
        [`${componentCls}-selection-search`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          '&-input': {
            width: '100%'
          }
        },
        [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${selectHeightWithoutBorder}px`,
          transition: `all ${token.motionDurationSlow}`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          '@supports (-moz-appearance: meterbar)': {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        },
        [`${componentCls}-selection-item`]: {
          position: 'relative',
          userSelect: 'none'
        },
        [`${componentCls}-selection-placeholder`]: {
          transition: 'none',
          pointerEvents: 'none'
        },
        // For common baseline align
        [['&:after', /* For '' value baseline align */
        `${componentCls}-selection-item:after`, /* For undefined value baseline align */
        `${componentCls}-selection-placeholder:after`].join(',')]: {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"'
        }
      }),
      [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
        paddingInlineEnd: selectionItemPadding
      },
      // Opacity selection if open
      [`&${componentCls}-open ${componentCls}-selection-item`]: {
        color: token.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selector`]: {
          width: '100%',
          height: token.controlHeight,
          padding: `0 ${inputPaddingHorizontalBase}px`,
          [`${componentCls}-selection-search-input`]: {
            height: selectHeightWithoutBorder
          },
          '&:after': {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        }
      },
      [`&${componentCls}-customize-input`]: {
        [`${componentCls}-selector`]: {
          '&:after': {
            display: 'none'
          },
          [`${componentCls}-selection-search`]: {
            position: 'static',
            width: '100%'
          },
          [`${componentCls}-selection-placeholder`]: {
            position: 'absolute',
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${inputPaddingHorizontalBase}px`,
            '&:after': {
              display: 'none'
            }
          }
        }
      }
    }
  };
}
function single_genSingleStyle(token) {
  const {
    componentCls
  } = token;
  const inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [single_genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  single_genSizeStyle((0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightSM,
    borderRadius: token.borderRadiusSM
  }), 'sm'),
  // padding
  {
    [`${componentCls}-single${componentCls}-sm`]: {
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selection-search`]: {
          insetInlineStart: inputPaddingHorizontalSM,
          insetInlineEnd: inputPaddingHorizontalSM
        },
        [`${componentCls}-selector`]: {
          padding: `0 ${inputPaddingHorizontalSM}px`
        },
        // With arrow should provides `padding-right` to show the arrow
        [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
          insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
        },
        [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
          paddingInlineEnd: token.fontSize * 1.5
        }
      }
    }
  },
  // ======================== Large ========================
  // Shared
  single_genSizeStyle((0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  }), 'lg')];
}
// EXTERNAL MODULE: ./node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(80110);
;// CONCATENATED MODULE: ./node_modules/antd/es/select/style/index.js






// ============================= Selector =============================
const genSelectorStyle = token => {
  const {
    componentCls
  } = token;
  return {
    position: 'relative',
    backgroundColor: token.colorBgContainer,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    input: {
      cursor: 'pointer'
    },
    [`${componentCls}-show-search&`]: {
      cursor: 'text',
      input: {
        cursor: 'auto',
        color: 'inherit'
      }
    },
    [`${componentCls}-disabled&`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: 'not-allowed',
      [`${componentCls}-multiple&`]: {
        background: token.colorBgContainerDisabled
      },
      input: {
        cursor: 'not-allowed'
      }
    }
  };
};
// ============================== Status ==============================
const genStatusStyle = function (rootSelectCls, token) {
  let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const {
    componentCls,
    borderHoverColor,
    outlineColor,
    antCls
  } = token;
  const overwriteStyle = overwriteDefaultBorder ? {
    [`${componentCls}-selector`]: {
      borderColor: borderHoverColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: Object.assign(Object.assign({}, overwriteStyle), {
        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${outlineColor}`,
          borderInlineEndWidth: `${token.controlLineWidth}px !important`,
          outline: 0
        },
        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          borderInlineEndWidth: `${token.controlLineWidth}px !important`
        }
      })
    }
  };
};
// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      '&::-webkit-search-cancel-button': {
        display: 'none',
        '-webkit-appearance': 'none'
      }
    }
  };
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      [`&:not(&-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: 'normal'
      }, style/* textEllipsis */.vS),
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, style/* textEllipsis */.vS), {
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: 'none'
      }),
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: Object.assign(Object.assign({}, (0,style/* resetIcon */.Ro)()), {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: 'center',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        [iconCls]: {
          verticalAlign: 'top',
          transition: `transform ${token.motionDurationSlow}`,
          '> svg': {
            verticalAlign: 'top'
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: 'auto'
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: 'not-allowed'
        },
        '> *:not(:last-child)': {
          marginInlineEnd: 8 // FIXME: magic
        }
      }),

      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: 'inline-block',
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        background: token.colorBgContainer,
        cursor: 'pointer',
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: 'auto',
        '&:before': {
          display: 'block'
        },
        '&:hover': {
          color: token.colorTextTertiary
        }
      },
      '&:hover': {
        [`${componentCls}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXXS
      }
    }
  };
};
// ============================== Styles ==============================
const genSelectStyle = token => {
  const {
    componentCls
  } = token;
  return [{
    [componentCls]: {
      // ==================== BorderLess ====================
      [`&-borderless ${componentCls}-selector`]: {
        backgroundColor: `transparent !important`,
        borderColor: `transparent !important`,
        boxShadow: `none !important`
      },
      // ==================== In Form ====================
      '&&-in-form-item': {
        width: '100%'
      }
    }
  },
  // =====================================================
  // ==                       LTR                       ==
  // =====================================================
  // Base
  genBaseStyle(token),
  // Single
  single_genSingleStyle(token),
  // Multiple
  genMultipleStyle(token),
  // Dropdown
  dropdown(token),
  // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  {
    [`${componentCls}-rtl`]: {
      direction: 'rtl'
    }
  },
  // =====================================================
  // ==                     Status                      ==
  // =====================================================
  genStatusStyle(componentCls, (0,statistic/* merge */.TS)(token, {
    borderHoverColor: token.colorPrimaryHover,
    outlineColor: token.controlOutline
  })), genStatusStyle(`${componentCls}-status-error`, (0,statistic/* merge */.TS)(token, {
    borderHoverColor: token.colorErrorHover,
    outlineColor: token.colorErrorOutline
  }), true), genStatusStyle(`${componentCls}-status-warning`, (0,statistic/* merge */.TS)(token, {
    borderHoverColor: token.colorWarningHover,
    outlineColor: token.colorWarningOutline
  }), true),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  (0,compact_item/* genCompactItemStyle */.c)(token, {
    borderElCls: `${componentCls}-selector`,
    focusElCls: `${componentCls}-focused`
  })];
};
// ============================== Export ==============================
/* harmony default export */ var select_style = ((0,genComponentStyleHook/* default */.Z)('Select', (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = (0,statistic/* merge */.TS)(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.paddingSM - 1
  });
  return [genSelectStyle(selectToken)];
}, token => ({
  zIndexPopup: token.zIndexPopupBase + 50
})));
// EXTERNAL MODULE: ./node_modules/antd/es/_util/PurePanel.js
var PurePanel = __webpack_require__(8745);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
;// CONCATENATED MODULE: ./node_modules/antd/es/select/index.js
// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
















const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
const InternalSelect = (_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      bordered = true,
      className,
      getPopupContainer,
      popupClassName,
      dropdownClassName,
      listHeight = 256,
      placement,
      listItemHeight = 24,
      size: customizeSize,
      disabled: customDisabled,
      notFoundContent,
      status: customStatus,
      showArrow
    } = _a,
    props = __rest(_a, ["prefixCls", "bordered", "className", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow"]);
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction,
    virtual,
    dropdownMatchSelectWidth,
    select
  } = react.useContext(context/* ConfigContext */.E_);
  const size = react.useContext(SizeContext/* default */.Z);
  const prefixCls = getPrefixCls('select', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const [wrapSSR, hashId] = select_style(prefixCls);
  const mode = react.useMemo(() => {
    const {
      mode: m
    } = props;
    if (m === 'combobox') {
      return undefined;
    }
    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }
    return m;
  }, [props.mode]);
  const isMultiple = mode === 'multiple' || mode === 'tags';
  const mergedShowArrow = showArrow !== undefined ? showArrow : props.loading || !(isMultiple || mode === 'combobox');
  // ===================== Form Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = react.useContext(form_context/* FormItemInputContext */.aM);
  const mergedStatus = (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus);
  // ===================== Empty =====================
  let mergedNotFound;
  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = (renderEmpty || defaultRenderEmpty/* default */.Z)('Select');
  }
  // ===================== Icons =====================
  const {
    suffixIcon,
    itemIcon,
    removeIcon,
    clearIcon
  } = getIcons(Object.assign(Object.assign({}, props), {
    multiple: isMultiple,
    hasFeedback,
    feedbackIcon,
    showArrow: mergedShowArrow,
    prefixCls
  }));
  const selectProps = (0,omit/* default */.Z)(props, ['suffixIcon', 'itemIcon']);
  const rcSelectRtlDropdownClassName = classnames_default()(popupClassName || dropdownClassName, {
    [`${prefixCls}-dropdown-${direction}`]: direction === 'rtl'
  }, hashId);
  const mergedSize = compactSize || customizeSize || size;
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const mergedClassName = classnames_default()({
    [`${prefixCls}-lg`]: mergedSize === 'large',
    [`${prefixCls}-sm`]: mergedSize === 'small',
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-in-form-item`]: isFormItemInput
  }, (0,statusUtils/* getStatusClassNames */.Z)(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className, hashId);
  // ===================== Placement =====================
  const getPlacement = () => {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };
  // ====================== Warning ======================
  if (false) {}
  // ====================== Render =======================
  return wrapSSR( /*#__PURE__*/react.createElement(rc_select_es, Object.assign({
    ref: ref,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    showSearch: select === null || select === void 0 ? void 0 : select.showSearch
  }, selectProps, {
    transitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, (0,motion/* getTransitionDirection */.q0)(placement), props.transitionName),
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    placement: getPlacement(),
    direction: direction,
    inputIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropdownClassName,
    showArrow: hasFeedback || showArrow,
    disabled: mergedDisabled
  })));
};
const select_Select = /*#__PURE__*/react.forwardRef(InternalSelect);
// We don't care debug panel
/* istanbul ignore next */
const select_PurePanel = (0,PurePanel/* default */.Z)(select_Select);
select_Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
select_Select.Option = es_Option;
select_Select.OptGroup = es_OptGroup;
select_Select._InternalPanelDoNotUseOrYouWillBeFired = select_PurePanel;
/* harmony default export */ var es_select = (select_Select);

/***/ }),

/***/ 26713:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": function() { return /* binding */ SpaceContext; },
  "Z": function() { return /* binding */ space; }
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
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js
var useFlexGapSupport = __webpack_require__(98082);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/Item.js


function Item(_ref) {
  let {
    className,
    direction,
    index,
    marginDirection,
    children,
    split,
    wrap
  } = _ref;
  const {
    horizontalSize,
    verticalSize,
    latestIndex,
    supportFlexGap
  } = react.useContext(SpaceContext);
  let style = {};
  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = {
          marginBottom: horizontalSize / (split ? 2 : 1)
        };
      }
    } else {
      style = Object.assign(Object.assign({}, index < latestIndex && {
        [marginDirection]: horizontalSize / (split ? 2 : 1)
      }), wrap && {
        paddingBottom: verticalSize
      });
    }
  }
  if (children === null || children === undefined) {
    return null;
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/react.createElement("span", {
    className: `${className}-split`,
    style: style
  }, split));
}
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
// EXTERNAL MODULE: ./node_modules/antd/es/space/style/index.js + 1 modules
var space_style = __webpack_require__(51916);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








const SpaceContext = /*#__PURE__*/react.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
});
const spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
function getNumberSize(size) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}
const Space = props => {
  const {
    getPrefixCls,
    space,
    direction: directionConfig
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      size = (space === null || space === void 0 ? void 0 : space.size) || 'small',
      align,
      className,
      children,
      direction = 'horizontal',
      prefixCls: customizePrefixCls,
      split,
      style,
      wrap = false
    } = props,
    otherProps = __rest(props, ["size", "align", "className", "children", "direction", "prefixCls", "split", "style", "wrap"]);
  const supportFlexGap = (0,useFlexGapSupport/* default */.Z)();
  const [horizontalSize, verticalSize] = react.useMemo(() => (Array.isArray(size) ? size : [size, size]).map(item => getNumberSize(item)), [size]);
  const childNodes = (0,toArray/* default */.Z)(children, {
    keepEmpty: true
  });
  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const prefixCls = getPrefixCls('space', customizePrefixCls);
  const [wrapSSR, hashId] = (0,space_style/* default */.Z)(prefixCls);
  const cn = classnames_default()(prefixCls, hashId, `${prefixCls}-${direction}`, {
    [`${prefixCls}-rtl`]: directionConfig === 'rtl',
    [`${prefixCls}-align-${mergedAlign}`]: mergedAlign
  }, className);
  const itemClassName = `${prefixCls}-item`;
  const marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';
  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    const key = child && child.key || `${itemClassName}-${i}`;
    return /*#__PURE__*/react.createElement(Item, {
      className: itemClassName,
      key: key,
      direction: direction,
      index: i,
      marginDirection: marginDirection,
      split: split,
      wrap: wrap
    }, child);
  });
  const spaceContext = react.useMemo(() => ({
    horizontalSize,
    verticalSize,
    latestIndex,
    supportFlexGap
  }), [horizontalSize, verticalSize, latestIndex, supportFlexGap]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = 'wrap';
    // Patch for gap not support
    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }
  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }
  return wrapSSR( /*#__PURE__*/react.createElement("div", Object.assign({
    className: cn,
    style: Object.assign(Object.assign({}, gapStyle), style)
  }, otherProps), /*#__PURE__*/react.createElement(SpaceContext.Provider, {
    value: spaceContext
  }, nodes)));
};
const CompoundedSpace = Space;
CompoundedSpace.Compact = Compact/* default */.ZP;
/* harmony default export */ var space = (CompoundedSpace);

/***/ }),

/***/ 33507:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const genCollapseMotion = token => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: 'hidden',
      '&-active': {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: 'hidden',
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});
/* harmony default export */ __webpack_exports__["Z"] = (genCollapseMotion);

/***/ }),

/***/ 33297:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fm": function() { return /* binding */ initMoveMotion; }
/* harmony export */ });
/* unused harmony exports moveDownIn, moveDownOut, moveLeftIn, moveLeftOut, moveRightIn, moveRightOut, moveUpIn, moveUpOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10248);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93590);


const moveDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveDownIn', {
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveDownOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveLeftIn', {
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveLeftOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveRightIn', {
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveRightOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveUpIn', {
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveUpOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveMotion = {
  'move-up': {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  'move-down': {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  'move-left': {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  'move-right': {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .R)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

/***/ }),

/***/ 73453:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ rc_virtual_list_es; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(48555);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Filler.js






/**
 * Fill component to provided the scroll content real height.
 */
var Filler = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var height = _ref.height,
    offset = _ref.offset,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize,
    innerProps = _ref.innerProps;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offset !== undefined) {
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, innerStyle), {}, {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    style: innerStyle,
    className: classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, innerProps), children)));
});
Filler.displayName = 'Filler';
/* harmony default export */ var es_Filler = (Filler);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(73568);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/ScrollBar.js








var MIN_SIZE = 20;
function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}
var ScrollBar = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ScrollBar, _React$Component);
  var _super = (0,createSuper/* default */.Z)(ScrollBar);
  function ScrollBar() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, ScrollBar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.moveRaf = null;
    _this.scrollbarRef = /*#__PURE__*/react.createRef();
    _this.thumbRef = /*#__PURE__*/react.createRef();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };
    _this.delayHidden = function () {
      clearTimeout(_this.visibleTimeout);
      _this.setState({
        visible: true
      });
      _this.visibleTimeout = setTimeout(function () {
        _this.setState({
          visible: false
        });
      }, 2000);
    };
    _this.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };
    _this.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };
    _this.patchEvents = function () {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);
      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);
      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };
    _this.removeEvents = function () {
      var _this$scrollbarRef$cu;
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);
      (_this$scrollbarRef$cu = _this.scrollbarRef.current) === null || _this$scrollbarRef$cu === void 0 ? void 0 : _this$scrollbarRef$cu.removeEventListener('touchstart', _this.onScrollbarTouchStart);
      if (_this.thumbRef.current) {
        _this.thumbRef.current.removeEventListener('touchstart', _this.onMouseDown);
        _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);
        _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);
      }
      raf/* default.cancel */.Z.cancel(_this.moveRaf);
    };
    _this.onMouseDown = function (e) {
      var onStartMove = _this.props.onStartMove;
      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });
      onStartMove();
      _this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    };
    _this.onMouseMove = function (e) {
      var _this$state = _this.state,
        dragging = _this$state.dragging,
        pageY = _this$state.pageY,
        startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      raf/* default.cancel */.Z.cancel(_this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = _this.getEnableScrollRange();
        var enableHeightRange = _this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = (0,raf/* default */.Z)(function () {
          onScroll(newScrollTop);
        });
      }
    };
    _this.onMouseUp = function () {
      var onStopMove = _this.props.onStopMove;
      _this.setState({
        dragging: false
      });
      onStopMove();
      _this.removeEvents();
    };
    _this.getSpinHeight = function () {
      var _this$props = _this.props,
        height = _this$props.height,
        count = _this$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };
    _this.getEnableScrollRange = function () {
      var _this$props2 = _this.props,
        scrollHeight = _this$props2.scrollHeight,
        height = _this$props2.height;
      return scrollHeight - height || 0;
    };
    _this.getEnableHeightRange = function () {
      var height = _this.props.height;
      var spinHeight = _this.getSpinHeight();
      return height - spinHeight || 0;
    };
    _this.getTop = function () {
      var scrollTop = _this.props.scrollTop;
      var enableScrollRange = _this.getEnableScrollRange();
      var enableHeightRange = _this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    };
    _this.showScroll = function () {
      var _this$props3 = _this.props,
        height = _this$props3.height,
        scrollHeight = _this$props3.scrollHeight;
      return scrollHeight > height;
    };
    return _this;
  }
  (0,createClass/* default */.Z)(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
      clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value:
    // ====================== Render =======================
    function render() {
      var _this$state2 = this.state,
        dragging = _this$state2.dragging,
        visible = _this$state2.visible;
      var prefixCls = this.props.prefixCls;
      var spinHeight = this.getSpinHeight();
      var top = this.getTop();
      var canScroll = this.showScroll();
      var mergedVisible = canScroll && visible;
      return /*#__PURE__*/react.createElement("div", {
        ref: this.scrollbarRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
        style: {
          width: 8,
          top: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: mergedVisible ? null : 'none'
        },
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, /*#__PURE__*/react.createElement("div", {
        ref: this.thumbRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar-thumb"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
        style: {
          width: '100%',
          height: spinHeight,
          top: top,
          left: 0,
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 99,
          cursor: 'pointer',
          userSelect: 'none'
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]);
  return ScrollBar;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Item.js

function Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = react.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/react.cloneElement(children, {
    ref: refFunc
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useChildren.js


function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return /*#__PURE__*/react.createElement(Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(34203);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/CacheMap.js


// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    (0,classCallCheck/* default */.Z)(this, CacheMap);
    this.maps = void 0;
    this.maps = Object.create(null);
  }
  (0,createClass/* default */.Z)(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap;
}();
/* harmony default export */ var utils_CacheMap = (CacheMap);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useHeights.js






function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = react.useState(0),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = (0,react.useRef)(new Map());
  var heightsRef = (0,react.useRef)(new utils_CacheMap());
  var collectRafRef = (0,react.useRef)();
  function cancelRaf() {
    raf/* default.cancel */.Z.cancel(collectRafRef.current);
  }
  function collectHeight() {
    cancelRaf();
    collectRafRef.current = (0,raf/* default */.Z)(function () {
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = (0,findDOMNode/* default */.Z)(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });
      // Always trigger update mark to tell parent that should re-calculate heights when resized
      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
    // Instance changed
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  (0,react.useEffect)(function () {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useScrollTo.js

/* eslint-disable no-param-reassign */


function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = react.useRef();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    }
    // Normal scroll logic
    raf/* default.cancel */.Z.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && (0,esm_typeof/* default */.Z)(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      // We will retry 3 times in case dynamic height shaking
      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        // Go to next frame if height not exist
        if (height) {
          var mergedAlign = targetAlign || align;
          // Get top & bottom
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);
          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          }
          // Scroll to
          var targetTop = null;
          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;
            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;
            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;
                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }
          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        // We will retry since element may not sync height as it described
        scrollRef.current = (0,raf/* default */.Z)(function () {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll(times - 1, newTargetAlign);
        }, 2); // Delay 2 to wait for List collect heights
      };

      syncScroll(3);
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/algorithmUtil.js
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2;
  // Balance
  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);
    if (index % 2) {
      return start + stepIndex + 1;
    }
    return start - stepIndex;
  }
  // One is out of range
  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }
  return start + (index - beforeCount);
}
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }
    return notExistKey;
  }
  // Loop to find diff one
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useDiffItem.js



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = react.useState(data),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  react.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/isFirefox.js

var isFF = (typeof navigator === "undefined" ? "undefined" : (0,esm_typeof/* default */.Z)(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ var isFirefox = (isFF);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js

/* harmony default export */ var useOriginScroll = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = (0,react.useRef)(false);
  var lockTimeoutRef = (0,react.useRef)(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  }
  // Pass to ref since global add is in closure
  var scrollPingRef = (0,react.useRef)({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll =
    // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top ||
    // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
});
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = (0,react.useRef)(0);
  var nextFrameRef = (0,react.useRef)(null);
  // Firefox patch
  var wheelValueRef = (0,react.useRef)(null);
  var isMouseScrollRef = (0,react.useRef)(false);
  // Scroll status sync
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual) return;
    raf/* default.cancel */.Z.cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(deltaY)) return;
    // Proxy of scroll events
    if (!isFirefox) {
      event.preventDefault();
    }
    nextFrameRef.current = (0,raf/* default */.Z)(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = (0,react.useRef)(false);
  var touchYRef = (0,react.useRef)(0);
  var elementRef = (0,react.useRef)(null);
  // Smooth scroll
  var intervalRef = (0,react.useRef)(null);
  /* eslint-disable prefer-const */
  var cleanUpEvents;
  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      // Smooth interval
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };
  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  (0,useLayoutEffect/* default */.Z)(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }
    return function () {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/List.js





var _excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll", "onVisibleChange", "innerProps"];













var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVisibleChange = props.onVisibleChange,
    innerProps = props.innerProps,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  // ================================= MISC =================================
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    scrollTop = _useState2[0],
    setScrollTop = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    scrollMoving = _useState4[0],
    setScrollMoving = _useState4[1];
  var mergedClassName = classnames_default()(prefixCls, className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = (0,react.useRef)();
  var fillerInnerRef = (0,react.useRef)();
  var scrollBarRef = (0,react.useRef)(); // Hack on scrollbar to enable flash call
  // =============================== Item Key ===============================
  var getKey = react.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  };
  // ================================ Scroll ================================
  function syncScrollTop(newTop) {
    setScrollTop(function (origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  // ================================ Legacy ================================
  // Put ref here since the range is generate by follow
  var rangeRef = (0,react.useRef)({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = (0,react.useRef)();
  var _useDiffItem = useDiffItem(mergedData, getKey),
    _useDiffItem2 = (0,slicedToArray/* default */.Z)(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  // ================================ Height ================================
  var _useHeights = useHeights(getKey, null, null),
    _useHeights2 = (0,slicedToArray/* default */.Z)(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];
  // ========================== Visible Calculation =========================
  var _React$useMemo = react.useMemo(function () {
      if (!useVirtual) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      // Always use virtual scroll bar in avoid shaking
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i = 0; i < dataLen; i += 1) {
        var item = mergedData[i];
        var key = getKey(item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
        // Check item top in the range
        if (currentItemBottom >= scrollTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        }
        // Check item bottom in the range. We will render additional one item for motion usage
        if (currentItemBottom > scrollTop + height && endIndex === undefined) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      // When scrollTop at the end but data cut to small count will reach this
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === undefined) {
        endIndex = mergedData.length - 1;
      }
      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, mergedData.length);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    offset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  // =============================== In Range ===============================
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = (0,react.useRef)(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  // ================================ Scroll ================================
  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  }
  // When data size reduce. It may trigger native scroll event back to fit scroll position
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    }
    // Trigger origin onScroll
    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  }
  // Since this added in global,should use ref to keep update
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
      syncScrollTop(function (top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }),
    _useFrameWheel2 = (0,slicedToArray/* default */.Z)(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];
  // Mobile touch move
  useMobileTouchMove(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  (0,useLayoutEffect/* default */.Z)(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }
    componentRef.current.addEventListener('wheel', onRawWheel);
    componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      if (componentRef.current) {
        componentRef.current.removeEventListener('wheel', onRawWheel);
        componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
        componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
      }
    };
  }, [useVirtual]);
  // ================================= Ref ==================================
  var scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
    var _scrollBarRef$current;
    (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
  });
  react.useImperativeHandle(ref, function () {
    return {
      scrollTo: scrollTo
    };
  });
  // ================================ Effect ================================
  /** We need told outside that some list not rendered */
  (0,useLayoutEffect/* default */.Z)(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);
  // ================================ Render ================================
  var listChildren = useChildren(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = (0,objectSpread2/* default */.Z)((0,defineProperty/* default */.Z)({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, restProps), /*#__PURE__*/react.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll
  }, /*#__PURE__*/react.createElement(es_Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offset: offset,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps: innerProps
  }, listChildren)), useVirtual && /*#__PURE__*/react.createElement(ScrollBar, {
    ref: scrollBarRef,
    prefixCls: prefixCls,
    scrollTop: scrollTop,
    height: height,
    scrollHeight: scrollHeight,
    count: mergedData.length,
    onScroll: onScrollBar,
    onStartMove: function onStartMove() {
      setScrollMoving(true);
    },
    onStopMove: function onStopMove() {
      setScrollMoving(false);
    }
  }));
}
var List = /*#__PURE__*/react.forwardRef(RawList);
List.displayName = 'List';
/* harmony default export */ var es_List = (List);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/index.js

/* harmony default export */ var rc_virtual_list_es = (es_List);

/***/ })

}]);