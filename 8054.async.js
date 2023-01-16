"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8054],{

/***/ 22284:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_DotChartOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DotChartOutlined.js
// This icon file is generated automatically.
var DotChartOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "dot-chart", "theme": "outlined" };
/* harmony default export */ var asn_DotChartOutlined = (DotChartOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(84089);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DotChartOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DotChartOutlined_DotChartOutlined = function DotChartOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DotChartOutlined
  }));
};
DotChartOutlined_DotChartOutlined.displayName = 'DotChartOutlined';
/* harmony default export */ var icons_DotChartOutlined = (/*#__PURE__*/react.forwardRef(DotChartOutlined_DotChartOutlined));

/***/ }),

/***/ 48054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ skeleton; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Element.js


const Element = props => {
  const {
    prefixCls,
    className,
    style,
    size,
    shape
  } = props;
  const sizeCls = classnames_default()({
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-sm`]: size === 'small'
  });
  const shapeCls = classnames_default()({
    [`${prefixCls}-circle`]: shape === 'circle',
    [`${prefixCls}-square`]: shape === 'square',
    [`${prefixCls}-round`]: shape === 'round'
  });
  const sizeStyle = react.useMemo(() => typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: `${size}px`
  } : {}, [size]);
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(prefixCls, sizeCls, shapeCls, className),
    style: Object.assign(Object.assign({}, sizeStyle), style)
  });
};
/* harmony default export */ var skeleton_Element = (Element);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 20 modules
var es = __webpack_require__(10248);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/style/index.js


const skeletonClsLoading = new es/* Keyframes */.E4(`ant-skeleton-loading`, {
  '0%': {
    transform: 'translateX(-37.5%)'
  },
  '100%': {
    transform: 'translateX(37.5%)'
  }
});
const genSkeletonElementCommonSize = size => ({
  height: size,
  lineHeight: `${size}px`
});
const genSkeletonElementAvatarSize = size => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
const genSkeletonColor = token => ({
  position: 'relative',
  // fix https://github.com/ant-design/ant-design/issues/36444
  // https://monshin.github.io/202109/css/safari-border-radius-overflow-hidden/
  /* stylelint-disable-next-line property-no-vendor-prefix,value-no-vendor-prefix */
  zIndex: 0,
  overflow: 'hidden',
  background: 'transparent',
  '&::after': {
    position: 'absolute',
    top: 0,
    insetInlineEnd: '-150%',
    bottom: 0,
    insetInlineStart: '-150%',
    background: token.skeletonLoadingBackground,
    animationName: skeletonClsLoading,
    animationDuration: token.skeletonLoadingMotionDuration,
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite',
    content: '""'
  }
});
const genSkeletonElementInputSize = size => Object.assign({
  width: size * 5,
  minWidth: size * 5
}, genSkeletonElementCommonSize(size));
const genSkeletonElementAvatar = token => {
  const {
    skeletonAvatarCls,
    color,
    controlHeight,
    controlHeightLG,
    controlHeightSM
  } = token;
  return {
    [`${skeletonAvatarCls}`]: Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: color
    }, genSkeletonElementAvatarSize(controlHeight)),
    [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
      borderRadius: '50%'
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
    [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
  };
};
const genSkeletonElementInput = token => {
  const {
    controlHeight,
    borderRadiusSM,
    skeletonInputCls,
    controlHeightLG,
    controlHeightSM,
    color
  } = token;
  return {
    [`${skeletonInputCls}`]: Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: color,
      borderRadius: borderRadiusSM
    }, genSkeletonElementInputSize(controlHeight)),
    [`${skeletonInputCls}-lg`]: Object.assign({}, genSkeletonElementInputSize(controlHeightLG)),
    [`${skeletonInputCls}-sm`]: Object.assign({}, genSkeletonElementInputSize(controlHeightSM))
  };
};
const genSkeletonElementImageSize = size => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
const genSkeletonElementImage = token => {
  const {
    skeletonImageCls,
    imageSizeBase,
    color,
    borderRadiusSM
  } = token;
  return {
    [`${skeletonImageCls}`]: Object.assign(Object.assign({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'top',
      background: color,
      borderRadius: borderRadiusSM
    }, genSkeletonElementImageSize(imageSizeBase * 2)), {
      [`${skeletonImageCls}-path`]: {
        fill: '#bfbfbf'
      },
      [`${skeletonImageCls}-svg`]: Object.assign(Object.assign({}, genSkeletonElementImageSize(imageSizeBase)), {
        maxWidth: imageSizeBase * 4,
        maxHeight: imageSizeBase * 4
      }),
      [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
        borderRadius: '50%'
      }
    }),
    [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
      borderRadius: '50%'
    }
  };
};
const genSkeletonElementButtonShape = (token, size, buttonCls) => {
  const {
    skeletonButtonCls
  } = token;
  return {
    [`${buttonCls}${skeletonButtonCls}-circle`]: {
      width: size,
      minWidth: size,
      borderRadius: '50%'
    },
    [`${buttonCls}${skeletonButtonCls}-round`]: {
      borderRadius: size
    }
  };
};
const genSkeletonElementButtonSize = size => Object.assign({
  width: size * 2,
  minWidth: size * 2
}, genSkeletonElementCommonSize(size));
const genSkeletonElementButton = token => {
  const {
    borderRadiusSM,
    skeletonButtonCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    color
  } = token;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [`${skeletonButtonCls}`]: Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: color,
      borderRadius: borderRadiusSM,
      width: controlHeight * 2,
      minWidth: controlHeight * 2
    }, genSkeletonElementButtonSize(controlHeight))
  }, genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls)), {
    [`${skeletonButtonCls}-lg`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightLG))
  }), genSkeletonElementButtonShape(token, controlHeightLG, `${skeletonButtonCls}-lg`)), {
    [`${skeletonButtonCls}-sm`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightSM))
  }), genSkeletonElementButtonShape(token, controlHeightSM, `${skeletonButtonCls}-sm`));
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    color,
    padding,
    marginSM,
    borderRadius,
    skeletonTitleHeight,
    skeletonBlockRadius,
    skeletonParagraphLineHeight,
    controlHeightXS,
    skeletonParagraphMarginTop
  } = token;
  return {
    [`${componentCls}`]: {
      display: 'table',
      width: '100%',
      [`${componentCls}-header`]: {
        display: 'table-cell',
        paddingInlineEnd: padding,
        verticalAlign: 'top',
        // Avatar
        [`${skeletonAvatarCls}`]: Object.assign({
          display: 'inline-block',
          verticalAlign: 'top',
          background: color
        }, genSkeletonElementAvatarSize(controlHeight)),
        [`${skeletonAvatarCls}-circle`]: {
          borderRadius: '50%'
        },
        [`${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
        [`${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
      },
      [`${componentCls}-content`]: {
        display: 'table-cell',
        width: '100%',
        verticalAlign: 'top',
        // Title
        [`${skeletonTitleCls}`]: {
          width: '100%',
          height: skeletonTitleHeight,
          background: color,
          borderRadius: skeletonBlockRadius,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: controlHeightSM
          }
        },
        // paragraph
        [`${skeletonParagraphCls}`]: {
          padding: 0,
          '> li': {
            width: '100%',
            height: skeletonParagraphLineHeight,
            listStyle: 'none',
            background: color,
            borderRadius: skeletonBlockRadius,
            '+ li': {
              marginBlockStart: controlHeightXS
            }
          }
        },
        [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: '61%'
        }
      },
      [`&-round ${componentCls}-content`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          borderRadius
        }
      }
    },
    [`${componentCls}-with-avatar ${componentCls}-content`]: {
      // Title
      [`${skeletonTitleCls}`]: {
        marginBlockStart: marginSM,
        [`+ ${skeletonParagraphCls}`]: {
          marginBlockStart: skeletonParagraphMarginTop
        }
      }
    },
    // Skeleton element
    [`${componentCls}${componentCls}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: 'inline-block',
      width: 'auto'
    }, genSkeletonElementButton(token)), genSkeletonElementAvatar(token)), genSkeletonElementInput(token)), genSkeletonElementImage(token)),
    // Skeleton Block Button, Input
    [`${componentCls}${componentCls}-block`]: {
      width: '100%',
      [`${skeletonButtonCls}`]: {
        width: '100%'
      },
      [`${skeletonInputCls}`]: {
        width: '100%'
      }
    },
    // With active animation
    [`${componentCls}${componentCls}-active`]: {
      [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonImageCls}
      `]: Object.assign({}, genSkeletonColor(token))
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var skeleton_style = ((0,genComponentStyleHook/* default */.Z)('Skeleton', token => {
  const {
    componentCls
  } = token;
  const skeletonToken = (0,statistic/* merge */.TS)(token, {
    skeletonAvatarCls: `${componentCls}-avatar`,
    skeletonTitleCls: `${componentCls}-title`,
    skeletonParagraphCls: `${componentCls}-paragraph`,
    skeletonButtonCls: `${componentCls}-button`,
    skeletonInputCls: `${componentCls}-input`,
    skeletonImageCls: `${componentCls}-image`,
    imageSizeBase: token.controlHeight * 1.5,
    skeletonTitleHeight: token.controlHeight / 2,
    skeletonBlockRadius: token.borderRadiusSM,
    skeletonParagraphLineHeight: token.controlHeight / 2,
    skeletonParagraphMarginTop: token.marginLG + token.marginXXS,
    borderRadius: 100,
    skeletonLoadingBackground: `linear-gradient(90deg, ${token.color} 25%, ${token.colorGradientEnd} 37%, ${token.color} 63%)`,
    skeletonLoadingMotionDuration: '1.4s'
  });
  return [genBaseStyle(skeletonToken)];
}, token => {
  const {
    colorFillContent,
    colorFill
  } = token;
  return {
    color: colorFillContent,
    colorGradientEnd: colorFill
  };
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Avatar.js






const SkeletonAvatar = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    active,
    shape = 'circle',
    size = 'default'
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapSSR, hashId] = skeleton_style(prefixCls);
  const otherProps = (0,omit/* default */.Z)(props, ['prefixCls', 'className']);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({
    prefixCls: `${prefixCls}-avatar`,
    shape: shape,
    size: size
  }, otherProps))));
};
/* harmony default export */ var Avatar = (SkeletonAvatar);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Button.js






const SkeletonButton = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    active,
    block = false,
    size = 'default'
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapSSR, hashId] = skeleton_style(prefixCls);
  const otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({
    prefixCls: `${prefixCls}-button`,
    size: size
  }, otherProps))));
};
/* harmony default export */ var Button = (SkeletonButton);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DotChartOutlined.js + 1 modules
var DotChartOutlined = __webpack_require__(22284);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Node.js





const SkeletonNode = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    active,
    children
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapSSR, hashId] = skeleton_style(prefixCls);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, hashId, className);
  const content = children !== null && children !== void 0 ? children : /*#__PURE__*/react.createElement(DotChartOutlined/* default */.Z, null);
  return wrapSSR( /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-image`, className),
    style: style
  }, content)));
};
/* harmony default export */ var Node = (SkeletonNode);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Image.js




const path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';
const SkeletonImage = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    active
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapSSR, hashId] = skeleton_style(prefixCls);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-image`, className),
    style: style
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${prefixCls}-image-svg`
  }, /*#__PURE__*/react.createElement("path", {
    d: path,
    className: `${prefixCls}-image-path`
  })))));
};
/* harmony default export */ var Image = (SkeletonImage);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Input.js






const SkeletonInput = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    active,
    block,
    size = 'default'
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapSSR, hashId] = skeleton_style(prefixCls);
  const otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({
    prefixCls: `${prefixCls}-input`,
    size: size
  }, otherProps))));
};
/* harmony default export */ var Input = (SkeletonInput);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Paragraph.js



const Paragraph = props => {
  const getWidth = index => {
    const {
      width,
      rows = 2
    } = props;
    if (Array.isArray(width)) {
      return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
      return width;
    }
    return undefined;
  };
  const {
    prefixCls,
    className,
    style,
    rows
  } = props;
  const rowList = (0,toConsumableArray/* default */.Z)(Array(rows)).map((_, index) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  react.createElement("li", {
    key: index,
    style: {
      width: getWidth(index)
    }
  }));
  return /*#__PURE__*/react.createElement("ul", {
    className: classnames_default()(prefixCls, className),
    style: style
  }, rowList);
};
/* harmony default export */ var skeleton_Paragraph = (Paragraph);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Title.js
/* eslint-disable jsx-a11y/heading-has-content */


const Title = _ref => {
  let {
    prefixCls,
    className,
    width,
    style
  } = _ref;
  return /*#__PURE__*/react.createElement("h3", {
    className: classnames_default()(prefixCls, className),
    style: Object.assign({
      width
    }, style)
  });
};
/* harmony default export */ var skeleton_Title = (Title);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Skeleton.js












function getComponentProps(prop) {
  if (prop && typeof prop === 'object') {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }
  return {
    size: 'large',
    shape: 'circle'
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};
  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }
  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
const Skeleton = props => {
  const {
    prefixCls: customizePrefixCls,
    loading,
    className,
    style,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round
  } = props;
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapSSR, hashId] = skeleton_style(prefixCls);
  if (loading || !('loading' in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;
    // Avatar
    let avatarNode;
    if (hasAvatar) {
      const avatarProps = Object.assign(Object.assign({
        prefixCls: `${prefixCls}-avatar`
      }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
      // We direct use SkeletonElement as avatar in skeleton internal.
      avatarNode = /*#__PURE__*/react.createElement("div", {
        className: `${prefixCls}-header`
      }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({}, avatarProps)));
    }
    let contentNode;
    if (hasTitle || hasParagraph) {
      // Title
      let $title;
      if (hasTitle) {
        const titleProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-title`
        }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
        $title = /*#__PURE__*/react.createElement(skeleton_Title, Object.assign({}, titleProps));
      }
      // Paragraph
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-paragraph`
        }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
        paragraphNode = /*#__PURE__*/react.createElement(skeleton_Paragraph, Object.assign({}, paragraphProps));
      }
      contentNode = /*#__PURE__*/react.createElement("div", {
        className: `${prefixCls}-content`
      }, $title, paragraphNode);
    }
    const cls = classnames_default()(prefixCls, {
      [`${prefixCls}-with-avatar`]: hasAvatar,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-round`]: round
    }, className, hashId);
    return wrapSSR( /*#__PURE__*/react.createElement("div", {
      className: cls,
      style: style
    }, avatarNode, contentNode));
  }
  return typeof children !== 'undefined' ? children : null;
};
Skeleton.Button = Button;
Skeleton.Avatar = Avatar;
Skeleton.Input = Input;
Skeleton.Image = Image;
Skeleton.Node = Node;
/* harmony default export */ var skeleton_Skeleton = (Skeleton);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/index.js

/* harmony default export */ var skeleton = (skeleton_Skeleton);

/***/ })

}]);