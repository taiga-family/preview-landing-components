"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[921],{

/***/ 2921:
/*!**************************************************!*\
  !*** ./apps/demo/src/app/home/home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 5983);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 9289);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/core */ 6268);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/core */ 6839);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ 6781);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ 7939);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/kit */ 8665);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/kit */ 9421);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/kit */ 6706);
/* harmony import */ var _tinkoff_ng_event_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinkoff/ng-event-plugins */ 1350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/core */ 6420);










function HomeComponent_tui_checkbox_labeled_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-checkbox-labeled", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", label_r1 === ctx_r0.labels[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", label_r1, " ");
  }
}
let HomeComponent = /*#__PURE__*/(() => {
  var _class;
  class HomeComponent {
    constructor() {
      this.labels = ['New', 'Read', 'Archived', 'Junk'];
      this.tags = ['Angular', 'Open source'];
      this.date = null;
    }
    onDay(date) {
      this.date = date;
    }
  }
  _class = HomeComponent;
  _class.ɵfac = function HomeComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 9,
    consts: [[1, "title"], ["tuiHintContent", "Customizable for any use case", 1, "tui-space_vertical-10", 3, "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"], [1, "flex"], [1, "date"], ["required", "", 3, "ngModel", "ngModelChange", "click.capture.stop", "keydown.capture.stop", "mousedown.capture.stop"], ["placeholder", "dd.mm.yyyy", "tuiTextfield", ""], [1, "calendar", 3, "value", "dayClick", "event.prevent.silent"], ["size", "l", "class", "tui-space_bottom-4", 3, "ngModel", 4, "ngFor", "ngForOf"], [1, "controls"], ["size", "l", 1, "tui-space_right-3", 3, "ngModel", "showIcons"], ["size", "m", "step", "any", "tuiSlider", "", "type", "range", 1, "tui-space_vertical-6", 3, "max", "ngModel"], [1, "icons"], ["appearance", "", "icon", "tuiIconVolumeXLarge", "shape", "rounded", "title", "Mute speaker", "tuiIconButton", "", "type", "button", 1, "button"], ["appearance", "", "icon", "tuiIconMicOffLarge", "shape", "rounded", "title", "Mute microphone", "tuiIconButton", "", "type", "button", 1, "button"], ["appearance", "", "icon", "tuiIconPhoneForwardedLarge", "shape", "rounded", "title", "Forward call", "tuiIconButton", "", "type", "button", 1, "error"], ["size", "l", 1, "tui-space_bottom-4", 3, "ngModel"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dozens of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " components\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-input-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_tui_input_tag_ngModelChange_4_listener($event) {
          return ctx.tags = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "tui-input-date", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_tui_input_date_ngModelChange_7_listener($event) {
          return ctx.date = $event;
        })("click.capture.stop", function HomeComponent_Template_tui_input_date_click_capture_stop_7_listener() {
          return 0;
        })("keydown.capture.stop", function HomeComponent_Template_tui_input_date_keydown_capture_stop_7_listener() {
          return 0;
        })("mousedown.capture.stop", function HomeComponent_Template_tui_input_date_mousedown_capture_stop_7_listener() {
          return 0;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Choose date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-calendar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClick", function HomeComponent_Template_tui_calendar_dayClick_10_listener($event) {
          return ctx.onDay($event);
        })("event.prevent.silent", function HomeComponent_Template_tui_calendar_event_prevent_silent_10_listener() {
          return 0;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_tui_checkbox_labeled_12_Template, 2, 2, "tui-checkbox-labeled", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Push notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "button", 12)(20, "button", 13)(21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("ngModel", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", true)("showIcons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 140)("ngModel", 80);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _tinkoff_ng_event_plugins__WEBPACK_IMPORTED_MODULE_3__.EventPluginsModule, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__.TuiInputTagModule, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__.TuiInputTagComponent, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__.TuiToggleModule, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__.TuiToggleComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiCalendarModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiCalendarComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiTextfieldControllerModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiTextfieldLabelOutsideDirective, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__.TuiInputDateModule, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__.TuiInputDateComponent, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__.TuiInputDateDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__.TuiTextfieldComponent, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__.TuiCheckboxLabeledModule, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_10__.TuiCheckboxLabeledComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__.TuiButtonModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__.TuiButtonComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__.TuiHintModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__.TuiHintOptionsDirective, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_13__.TuiSliderModule, _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_13__.TuiSliderComponent],
    styles: ["/**\n * @deprecated remove in 4.0\n */\n/**\n * @description:\n * disable smooth scrolling when users have prefers-reduced-motion enabled\n */\n/*\nEvery max-width of breakpoint is equal:\nnext min-width - 60% from 1px (1/16 * 0.6 = 0.0375)\n*/\n.title {\n  font-size: 3.5rem;\n  line-height: 4.0625rem;\n  margin: 0;\n}\n.flex {\n  display: flex;\n}\n.date {\n  width: 18rem;\n  margin-right: 2.8125rem;\n}\n.calendar {\n  box-shadow: 0 1.5rem 1rem rgba(0, 0, 0, 0.03), 0 0.75rem 0.75rem rgba(0, 0, 0, 0.04), 0 0.25rem 0.375rem rgba(0, 0, 0, 0.05);\n  border-radius: var(--tui-radius-m);\n  border: 1px solid var(--tui-base-03);\n  margin-top: 0.25rem;\n  width: 18rem;\n  box-sizing: border-box;\n  height: auto;\n}\n.controls {\n  flex: 1;\n  margin-left: 2.8125rem;\n}\n.icons {\n  display: flex;\n  justify-content: space-between;\n}\n.button,\n.error {\n  transition-property: color, background;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  background: var(--tui-base-02);\n  color: var(--tui-primary);\n}\n.button:hover,\n.error:hover,\n.button:active,\n.error:active {\n  background: var(--tui-base-03);\n  color: var(--tui-primary-hover);\n}\n.error {\n  color: var(--tui-negative);\n}\n.error:hover,\n.error:active {\n  color: var(--tui-negative-hover);\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return HomeComponent;
})();


/***/ }),

/***/ 806:
/*!*******************************************************************!*\
  !*** ./node_modules/@maskito/angular/fesm2015/maskito-angular.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaskitoCva: () => (/* binding */ MaskitoCva),
/* harmony export */   MaskitoDirective: () => (/* binding */ MaskitoDirective),
/* harmony export */   MaskitoModule: () => (/* binding */ MaskitoModule),
/* harmony export */   MaskitoPipe: () => (/* binding */ MaskitoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _maskito_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @maskito/core */ 7618);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4911);






let MaskitoCva = /*#__PURE__*/(() => {
  class MaskitoCva {
    constructor(accessor) {
      this.accessor = accessor;
      this.maskito = _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS;
      const original = accessor.writeValue.bind(accessor);
      accessor.writeValue = value => {
        var _a;
        original((0,_maskito_core__WEBPACK_IMPORTED_MODULE_0__.maskitoTransform)(String(value !== null && value !== void 0 ? value : ''), (_a = this.maskito) !== null && _a !== void 0 ? _a : _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS));
      };
    }
  }
  MaskitoCva.ɵfac = function MaskitoCva_Factory(t) {
    return new (t || MaskitoCva)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor));
  };
  MaskitoCva.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: MaskitoCva,
    selectors: [["input", "maskito", ""], ["textarea", "maskito", ""]],
    hostBindings: function MaskitoCva_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MaskitoCva_input_HostBindingHandler($event) {
          return ctx.accessor._handleInput($event.target.value);
        })("blur", function MaskitoCva_blur_HostBindingHandler() {
          return ctx.accessor.onTouched();
        })("compositionstart", function MaskitoCva_compositionstart_HostBindingHandler() {
          return ctx.accessor._compositionStart();
        })("compositionend", function MaskitoCva_compositionend_HostBindingHandler($event) {
          return ctx.accessor._compositionEnd($event.target.value);
        });
      }
    },
    inputs: {
      maskito: "maskito"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor
    }])]
  });
  return MaskitoCva;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MaskitoDirective = /*#__PURE__*/(() => {
  class MaskitoDirective {
    constructor(ngZone, elementRef) {
      this.ngZone = ngZone;
      this.elementRef = elementRef;
      this.maskedElement = null;
      this.maskito = _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS;
      this.maskitoElement = _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_ELEMENT_PREDICATE;
    }
    ngOnChanges() {
      var _a;
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
        (_a = this.maskedElement) === null || _a === void 0 ? void 0 : _a.destroy();
        const predicate = this.maskitoElement;
        const predicateResult = yield predicate(this.elementRef.nativeElement);
        if (this.maskitoElement !== predicate) {
          // Ignore the result of the predicate if the
          // maskito element has changed before the predicate was resolved.
          return;
        }
        this.ngZone.runOutsideAngular(() => {
          var _a;
          this.maskedElement = new _maskito_core__WEBPACK_IMPORTED_MODULE_0__.Maskito(predicateResult, (_a = this.maskito) !== null && _a !== void 0 ? _a : _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS);
        });
      });
    }
    ngOnDestroy() {
      var _a;
      (_a = this.maskedElement) === null || _a === void 0 ? void 0 : _a.destroy();
    }
  }
  MaskitoDirective.ɵfac = function MaskitoDirective_Factory(t) {
    return new (t || MaskitoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  MaskitoDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: MaskitoDirective,
    selectors: [["", "maskito", ""]],
    inputs: {
      maskito: "maskito",
      maskitoElement: "maskitoElement"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
  return MaskitoDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MaskitoPipe = /*#__PURE__*/(() => {
  class MaskitoPipe {
    transform(value, maskitoOptions) {
      return (0,_maskito_core__WEBPACK_IMPORTED_MODULE_0__.maskitoTransform)(String(value !== null && value !== void 0 ? value : ''), maskitoOptions !== null && maskitoOptions !== void 0 ? maskitoOptions : _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS);
    }
  }
  MaskitoPipe.ɵfac = function MaskitoPipe_Factory(t) {
    return new (t || MaskitoPipe)();
  };
  MaskitoPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "maskito",
    type: MaskitoPipe,
    pure: true
  });
  return MaskitoPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MaskitoModule = /*#__PURE__*/(() => {
  class MaskitoModule {}
  MaskitoModule.ɵfac = function MaskitoModule_Factory(t) {
    return new (t || MaskitoModule)();
  };
  MaskitoModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MaskitoModule
  });
  MaskitoModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  return MaskitoModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=maskito-angular.js.map

/***/ }),

/***/ 7618:
/*!*************************************************!*\
  !*** ./node_modules/@maskito/core/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MASKITO_DEFAULT_ELEMENT_PREDICATE: () => (/* binding */ MASKITO_DEFAULT_ELEMENT_PREDICATE),
/* harmony export */   MASKITO_DEFAULT_OPTIONS: () => (/* binding */ MASKITO_DEFAULT_OPTIONS),
/* harmony export */   Maskito: () => (/* binding */ Maskito),
/* harmony export */   maskitoPipe: () => (/* binding */ maskitoPipe),
/* harmony export */   maskitoTransform: () => (/* binding */ maskitoTransform)
/* harmony export */ });
const MASKITO_DEFAULT_ELEMENT_PREDICATE = e => e.querySelector('input,textarea') || e;
const MASKITO_DEFAULT_OPTIONS = {
  mask: /^.*$/,
  preprocessors: [],
  postprocessors: [],
  plugins: [],
  overwriteMode: 'shift'
};
class MaskHistory {
  constructor() {
    this.now = null;
    this.past = [];
    this.future = [];
  }
  undo() {
    const state = this.past.pop();
    if (state && this.now) {
      this.future.push(this.now);
      this.updateElement(state, 'historyUndo');
    }
  }
  redo() {
    const state = this.future.pop();
    if (state && this.now) {
      this.past.push(this.now);
      this.updateElement(state, 'historyRedo');
    }
  }
  updateHistory(state) {
    if (!this.now) {
      this.now = state;
      return;
    }
    const isValueChanged = this.now.value !== state.value;
    const isSelectionChanged = this.now.selection.some((item, index) => item !== state.selection[index]);
    if (!isValueChanged && !isSelectionChanged) {
      return;
    }
    if (isValueChanged) {
      this.past.push(this.now);
      this.future = [];
    }
    this.now = state;
  }
  updateElement(state, inputType) {
    this.now = state;
    this.updateElementState(state, {
      inputType,
      data: null
    });
  }
}
function areElementValuesEqual(sampleState, ...states) {
  return states.every(({
    value
  }) => value === sampleState.value);
}
function areElementStatesEqual(sampleState, ...states) {
  return states.every(({
    value,
    selection
  }) => value === sampleState.value && selection[0] === sampleState.selection[0] && selection[1] === sampleState.selection[1]);
}
function applyOverwriteMode({
  value,
  selection
}, newCharacters, mode) {
  const [from, to] = selection;
  const computedMode = typeof mode === 'function' ? mode({
    value,
    selection
  }) : mode;
  return {
    value,
    selection: computedMode === 'replace' ? [from, from + newCharacters.length] : [from, to]
  };
}
function isFixedCharacter(char) {
  return typeof char === 'string';
}
function getLeadingFixedCharacters(mask, validatedValuePart, newCharacter, initialElementState) {
  let leadingFixedCharacters = '';
  for (let i = validatedValuePart.length; i < mask.length; i++) {
    const charConstraint = mask[i];
    const isInitiallyExisted = (initialElementState === null || initialElementState === void 0 ? void 0 : initialElementState.value[i]) === charConstraint;
    if (!isFixedCharacter(charConstraint) || charConstraint === newCharacter && !isInitiallyExisted) {
      return leadingFixedCharacters;
    }
    leadingFixedCharacters += charConstraint;
  }
  return leadingFixedCharacters;
}
function validateValueWithMask(value, maskExpression) {
  if (Array.isArray(maskExpression)) {
    return value.length === maskExpression.length && Array.from(value).every((char, i) => {
      const charConstraint = maskExpression[i];
      return isFixedCharacter(charConstraint) ? char === charConstraint : char.match(charConstraint);
    });
  }
  return maskExpression.test(value);
}
function guessValidValueByPattern(elementState, mask, initialElementState) {
  let maskedFrom = null;
  let maskedTo = null;
  const maskedValue = Array.from(elementState.value).reduce((validatedCharacters, char, charIndex) => {
    const leadingCharacters = getLeadingFixedCharacters(mask, validatedCharacters, char, initialElementState);
    const newValidatedChars = validatedCharacters + leadingCharacters;
    const charConstraint = mask[newValidatedChars.length];
    if (isFixedCharacter(charConstraint)) {
      return newValidatedChars + charConstraint;
    }
    if (!char.match(charConstraint)) {
      return newValidatedChars;
    }
    if (maskedFrom === null && charIndex >= elementState.selection[0]) {
      maskedFrom = newValidatedChars.length;
    }
    if (maskedTo === null && charIndex >= elementState.selection[1]) {
      maskedTo = newValidatedChars.length;
    }
    return newValidatedChars + char;
  }, '');
  const trailingFixedCharacters = getLeadingFixedCharacters(mask, maskedValue, '', initialElementState);
  return {
    value: validateValueWithMask(maskedValue + trailingFixedCharacters, mask) ? maskedValue + trailingFixedCharacters : maskedValue,
    selection: [maskedFrom !== null && maskedFrom !== void 0 ? maskedFrom : maskedValue.length, maskedTo !== null && maskedTo !== void 0 ? maskedTo : maskedValue.length]
  };
}
function guessValidValueByRegExp({
  value,
  selection
}, maskRegExp) {
  const [from, to] = selection;
  let newFrom = from;
  let newTo = to;
  const validatedValue = Array.from(value).reduce((validatedValuePart, char, i) => {
    const newPossibleValue = validatedValuePart + char;
    if (from === i) {
      newFrom = validatedValuePart.length;
    }
    if (to === i) {
      newTo = validatedValuePart.length;
    }
    return newPossibleValue.match(maskRegExp) ? newPossibleValue : validatedValuePart;
  }, '');
  return {
    value: validatedValue,
    selection: [newFrom, newTo]
  };
}
function calibrateValueByMask(elementState, mask, initialElementState = null) {
  if (validateValueWithMask(elementState.value, mask)) {
    return elementState;
  }
  const {
    value,
    selection
  } = Array.isArray(mask) ? guessValidValueByPattern(elementState, mask, initialElementState) : guessValidValueByRegExp(elementState, mask);
  return {
    selection,
    value: Array.isArray(mask) ? value.slice(0, mask.length) : value
  };
}
function removeFixedMaskCharacters(initialElementState, mask) {
  if (!Array.isArray(mask)) {
    return initialElementState;
  }
  const [from, to] = initialElementState.selection;
  const selection = [];
  const unmaskedValue = Array.from(initialElementState.value).reduce((rawValue, char, i) => {
    const charConstraint = mask[i];
    if (i === from) {
      selection.push(rawValue.length);
    }
    if (i === to) {
      selection.push(rawValue.length);
    }
    return isFixedCharacter(charConstraint) && charConstraint === char ? rawValue : rawValue + char;
  }, '');
  if (selection.length < 2) {
    selection.push(...new Array(2 - selection.length).fill(unmaskedValue.length));
  }
  return {
    value: unmaskedValue,
    selection: [selection[0], selection[1]]
  };
}
class MaskModel {
  constructor(initialElementState, maskOptions) {
    this.initialElementState = initialElementState;
    this.maskOptions = maskOptions;
    this.value = '';
    this.selection = [0, 0];
    const {
      value,
      selection
    } = calibrateValueByMask(initialElementState, this.getMaskExpression(initialElementState));
    this.value = value;
    this.selection = selection;
  }
  addCharacters([from, to], newCharacters) {
    const {
      value
    } = this;
    const maskExpression = this.getMaskExpression({
      value: value.slice(0, from) + newCharacters + value.slice(to),
      selection: [from + newCharacters.length, from + newCharacters.length]
    });
    const initialElementState = {
      value,
      selection: [from, to]
    };
    const unmaskedElementState = removeFixedMaskCharacters(initialElementState, maskExpression);
    const [unmaskedFrom, unmaskedTo] = applyOverwriteMode(unmaskedElementState, newCharacters, this.maskOptions.overwriteMode).selection;
    const newUnmaskedLeadingValuePart = unmaskedElementState.value.slice(0, unmaskedFrom) + newCharacters;
    const newCaretIndex = newUnmaskedLeadingValuePart.length;
    const maskedElementState = calibrateValueByMask({
      value: newUnmaskedLeadingValuePart + unmaskedElementState.value.slice(unmaskedTo),
      selection: [newCaretIndex, newCaretIndex]
    }, maskExpression, initialElementState);
    const isInvalidCharsInsertion =
    // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
    value.slice(0, unmaskedFrom) === calibrateValueByMask({
      value: newUnmaskedLeadingValuePart,
      selection: [newCaretIndex, newCaretIndex]
    }, maskExpression, initialElementState).value;
    if (isInvalidCharsInsertion || areElementStatesEqual(this, maskedElementState) // If typing new characters does not change value
    ) {
      throw new Error('Invalid mask value');
    }
    this.value = maskedElementState.value;
    this.selection = maskedElementState.selection;
  }
  deleteCharacters([from, to]) {
    if (from === to || !to) {
      return;
    }
    const {
      value
    } = this;
    const maskExpression = this.getMaskExpression({
      value: value.slice(0, from) + value.slice(to),
      selection: [from, from]
    });
    const initialElementState = {
      value,
      selection: [from, to]
    };
    const unmaskedElementState = removeFixedMaskCharacters(initialElementState, maskExpression);
    const [unmaskedFrom, unmaskedTo] = unmaskedElementState.selection;
    const newUnmaskedValue = unmaskedElementState.value.slice(0, unmaskedFrom) + unmaskedElementState.value.slice(unmaskedTo);
    const maskedElementState = calibrateValueByMask({
      value: newUnmaskedValue,
      selection: [unmaskedFrom, unmaskedFrom]
    }, maskExpression, initialElementState);
    this.value = maskedElementState.value;
    this.selection = maskedElementState.selection;
  }
  getMaskExpression(elementState) {
    const {
      mask
    } = this.maskOptions;
    return typeof mask === 'function' ? mask(elementState) : mask;
  }
}
class EventListener {
  constructor(element) {
    this.element = element;
    this.listeners = [];
  }
  listen(eventType, fn, options) {
    const untypedFn = fn;
    this.element.addEventListener(eventType, untypedFn, options);
    this.listeners.push(() => this.element.removeEventListener(eventType, untypedFn));
  }
  destroy() {
    this.listeners.forEach(stopListen => stopListen());
  }
}

/**
 * Checks if the passed keyboard event match the required hotkey.
 *
 * We intentionally use legacy {@link KeyboardEvent#keyCode `keyCode`} property. It is more
 * "keyboard-layout"-independent than {@link KeyboardEvent#key `key`} or {@link KeyboardEvent#code `code`} properties.
 *
 * @example
 * input.addEventListener('keydown', (event) => {
 *     if (isHotkey(event, HotkeyModifier.CTRL | HotkeyModifier.SHIFT, HotkeyCode.Z)) {
 *         // redo hotkey pressed
 *     }
 * })
 *
 * @see {@link https://github.com/taiga-family/maskito/issues/315 `KeyboardEvent#code` issue}
 *
 * @return will return `true` only if the {@link HotkeyCode} matches and only the necessary
 * {@link HotkeyModifier modifiers} have been pressed
 */
function isHotkey(event, modifiers, hotkeyCode) {
  return event.ctrlKey === !!(modifiers & 1
  /* CTRL */) && event.altKey === !!(modifiers & 2
  /* ALT */) && event.shiftKey === !!(modifiers & 4
  /* SHIFT */) && event.metaKey === !!(modifiers & 8
  /* META */) && event.keyCode === hotkeyCode;
}
function isRedo(event) {
  return isHotkey(event, 1
  /* CTRL */, 89
  /* Y */) ||
  // Windows
  isHotkey(event, 1
  /* CTRL */ | 4
  /* SHIFT */, 90
  /* Z */) ||
  // Windows & Android
  isHotkey(event, 8
  /* META */ | 4
  /* SHIFT */, 90
  /* Z */) // macOS & iOS
  ;
}

function isUndo(event) {
  return isHotkey(event, 1
  /* CTRL */, 90
  /* Z */) ||
  // Windows & Android
  isHotkey(event, 8
  /* META */, 90
  /* Z */) // macOS & iOS
  ;
}

/**
 * "beforeinput" is more appropriate event for preprocessing of the input masking (than `keydown`):
 * - `keydown` is not triggered by predictive text from native mobile keyboards.
 * - `keydown` is triggered by system key combinations (we don't need them, and they should be manually filtered).
 * - Dropping text inside input triggers `beforeinput` (but not `keydown`).
 * ___
 * "beforeinput" is not supported by Chrome 49+ (only from 60+) and by Firefox 52+ (only from 87+).
 *
 * @see https://caniuse.com/?search=beforeinput
 * @see https://taiga-ui.dev/browser-support
 */
function isBeforeInputEventSupported(element) {
  return 'onbeforeinput' in element;
}
function isEventProducingCharacter({
  key,
  ctrlKey,
  metaKey,
  altKey
}) {
  const isSystemKeyCombinations = ctrlKey || metaKey || altKey;
  const isSingleUnicodeChar = /^.$/u.test(key); // 4-byte characters case (e.g. smile)

  return !isSystemKeyCombinations && key !== 'Backspace' && isSingleUnicodeChar;
}
function getLineSelection({
  value,
  selection
}, isForward) {
  const [from, to] = selection;
  if (from !== to) {
    return [from, to];
  }
  const nearestBreak = isForward ? value.slice(from).indexOf('\n') + 1 || value.length : value.slice(0, to).lastIndexOf('\n') + 1;
  const selectFrom = isForward ? from : nearestBreak;
  const selectTo = isForward ? nearestBreak : to;
  return [selectFrom, selectTo];
}
function getNotEmptySelection({
  value,
  selection
}, isForward) {
  const [from, to] = selection;
  if (from !== to) {
    return [from, to];
  }
  const notEmptySelection = isForward ? [from, to + 1] : [from - 1, to];
  return notEmptySelection.map(x => Math.min(Math.max(x, 0), value.length));
}
const TRAILING_SPACES_REG = /\s+$/g;
const LEADING_SPACES_REG = /^\s+/g;
const SPACE_REG = /\s/;
function getWordSelection({
  value,
  selection
}, isForward) {
  const [from, to] = selection;
  if (from !== to) {
    return [from, to];
  }
  if (isForward) {
    const valueAfterSelectionStart = value.slice(from);
    const [leadingSpaces] = valueAfterSelectionStart.match(LEADING_SPACES_REG) || [''];
    const nearestWordEndIndex = valueAfterSelectionStart.replace(LEADING_SPACES_REG, '') // TODO replace with `String.trimStart` after bumping Firefox to 61+
    .search(SPACE_REG);
    return [from, nearestWordEndIndex !== -1 ? from + leadingSpaces.length + nearestWordEndIndex : value.length];
  }
  const valueBeforeSelectionEnd = value.slice(0, to);
  const [trailingSpaces] = valueBeforeSelectionEnd.match(TRAILING_SPACES_REG) || [''];
  const selectedWordLength = valueBeforeSelectionEnd.replace(TRAILING_SPACES_REG, '') // TODO replace with `String.trimEnd` after bumping Firefox to 61+
  .split('').reverse().findIndex(char => char.match(SPACE_REG));
  return [selectedWordLength !== -1 ? to - trailingSpaces.length - selectedWordLength : 0, to];
}

/* eslint-disable @typescript-eslint/ban-types */

/**
 * @internal
 */
function maskitoPipe(processors = []) {
  return (initialData, ...readonlyArgs) => processors.reduce((data, fn) => Object.assign(Object.assign({}, data), fn(data, ...readonlyArgs)), initialData);
}
function maskitoTransform(valueOrState, maskitoOptions) {
  const options = Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), maskitoOptions);
  const preprocessor = maskitoPipe(options.preprocessors);
  const postprocessor = maskitoPipe(options.postprocessors);
  const initialElementState = typeof valueOrState === 'string' ? {
    value: valueOrState,
    selection: [0, 0]
  } : valueOrState;
  const {
    elementState
  } = preprocessor({
    elementState: initialElementState,
    data: ''
  }, 'validation');
  const maskModel = new MaskModel(elementState, options);
  const {
    value,
    selection
  } = postprocessor(maskModel, initialElementState);
  return typeof valueOrState === 'string' ? value : {
    value,
    selection
  };
}
class Maskito extends MaskHistory {
  constructor(element, maskitoOptions) {
    super();
    this.element = element;
    this.maskitoOptions = maskitoOptions;
    this.isTextArea = this.element.nodeName === 'TEXTAREA';
    this.eventListener = new EventListener(this.element);
    this.options = Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), this.maskitoOptions);
    this.preprocessor = maskitoPipe(this.options.preprocessors);
    this.postprocessor = maskitoPipe(this.options.postprocessors);
    this.teardowns = this.options.plugins.map(plugin => plugin(this.element, this.options));
    this.ensureValueFitsMask();
    this.updateHistory(this.elementState);
    this.eventListener.listen('keydown', event => {
      if (isRedo(event)) {
        event.preventDefault();
        return this.redo();
      }
      if (isUndo(event)) {
        event.preventDefault();
        return this.undo();
      }
    });
    if (isBeforeInputEventSupported(element)) {
      this.eventListener.listen('beforeinput', event => {
        const isForward = event.inputType.includes('Forward');
        this.updateHistory(this.elementState);
        switch (event.inputType) {
          // historyUndo/historyRedo will not be triggered if value was modified programmatically
          case 'historyUndo':
            event.preventDefault();
            return this.undo();
          case 'historyRedo':
            event.preventDefault();
            return this.redo();
          case 'deleteByCut':
          case 'deleteContentBackward':
          case 'deleteContentForward':
            return this.handleDelete({
              event,
              isForward,
              selection: getNotEmptySelection(this.elementState, isForward)
            });
          case 'deleteWordForward':
          case 'deleteWordBackward':
            return this.handleDelete({
              event,
              isForward,
              selection: getWordSelection(this.elementState, isForward),
              force: true
            });
          case 'deleteSoftLineBackward':
          case 'deleteSoftLineForward':
          case 'deleteHardLineBackward':
          case 'deleteHardLineForward':
            return this.handleDelete({
              event,
              isForward,
              selection: getLineSelection(this.elementState, isForward),
              force: true
            });
          case 'insertCompositionText':
            return;
          // will be handled inside `compositionend` event

          case 'insertLineBreak':
            return this.handleEnter(event);
          case 'insertFromPaste':
          case 'insertText':
          case 'insertFromDrop':
          default:
            return this.handleInsert(event, event.data || '');
        }
      });
    } else {
      /** TODO: drop it after browser support bump (Firefox 87+)
       * Also, replace union types `Event | TypedInputEvent` with `TypedInputEvent` inside:
       *** {@link handleDelete}
       *** {@link handleInsert}
       */
      this.eventListener.listen('keydown', event => this.handleKeydown(event));
      this.eventListener.listen('paste', event => {
        var _a;
        return this.handleInsert(event, ((_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text/plain')) || '');
      });
    }
    this.eventListener.listen('input', ({
      inputType
    }) => {
      if (inputType === 'insertCompositionText') {
        return; // will be handled inside `compositionend` event
      }

      this.ensureValueFitsMask();
      this.updateHistory(this.elementState);
    });
    this.eventListener.listen('compositionend', () => {
      this.ensureValueFitsMask();
      this.updateHistory(this.elementState);
    });
  }
  get elementState() {
    const {
      value,
      selectionStart,
      selectionEnd
    } = this.element;
    return {
      value,
      selection: [selectionStart || 0, selectionEnd || 0]
    };
  }
  get maxLength() {
    const {
      maxLength
    } = this.element;
    return maxLength === -1 ? Infinity : maxLength;
  }
  destroy() {
    this.eventListener.destroy();
    this.teardowns.forEach(teardown => teardown === null || teardown === void 0 ? void 0 : teardown());
  }
  updateElementState({
    value,
    selection
  }, eventInit = {
    inputType: 'insertText',
    data: null
  }) {
    const initialValue = this.elementState.value;
    this.updateValue(value);
    this.updateSelectionRange(selection);
    if (initialValue !== value) {
      this.dispatchInputEvent(eventInit);
    }
  }
  updateSelectionRange([from, to]) {
    var _a, _b;
    if (this.element.selectionStart !== from || this.element.selectionEnd !== to) {
      (_b = (_a = this.element).setSelectionRange) === null || _b === void 0 ? void 0 : _b.call(_a, from, to);
    }
  }
  updateValue(value) {
    this.element.value = value;
  }
  ensureValueFitsMask() {
    this.updateElementState(maskitoTransform(this.elementState, this.options));
  }
  dispatchInputEvent(eventInit = {
    inputType: 'insertText',
    data: null
  }) {
    const globalObject = typeof window !== 'undefined' ? window : globalThis; // TODO: replace `globalObject` with `globalThis` after bumping Firefox to 65+
    // @see https://caniuse.com/?search=globalThis

    if (globalObject === null || globalObject === void 0 ? void 0 : globalObject.InputEvent) {
      this.element.dispatchEvent(new InputEvent('input', Object.assign(Object.assign({}, eventInit), {
        bubbles: true,
        cancelable: false
      })));
    }
  }
  handleKeydown(event) {
    const pressedKey = event.key;
    const isForward = pressedKey === 'Delete';
    switch (pressedKey) {
      case 'Backspace':
      case 'Delete':
        return this.handleDelete({
          event,
          isForward,
          selection: getNotEmptySelection(this.elementState, isForward)
        });
      case 'Enter':
        return this.handleEnter(event);
    }
    if (!isEventProducingCharacter(event)) {
      return;
    }
    this.handleInsert(event, pressedKey);
  }
  handleDelete({
    event,
    selection,
    isForward,
    force = false
  }) {
    const initialState = {
      value: this.elementState.value,
      selection
    };
    const [initialFrom, initialTo] = initialState.selection;
    const {
      elementState
    } = this.preprocessor({
      elementState: initialState,
      data: ''
    }, isForward ? 'deleteForward' : 'deleteBackward');
    const maskModel = new MaskModel(elementState, this.options);
    const [from, to] = elementState.selection;
    maskModel.deleteCharacters([from, to]);
    const newElementState = this.postprocessor(maskModel, initialState);
    const newPossibleValue = initialState.value.slice(0, initialFrom) + initialState.value.slice(initialTo);
    if (newPossibleValue === newElementState.value && !force) {
      return;
    }
    event.preventDefault();
    if (areElementValuesEqual(initialState, elementState, maskModel, newElementState)) {
      // User presses Backspace/Delete for the fixed value
      return this.updateSelectionRange(isForward ? [to, to] : [from, from]);
    } // TODO: drop it when `event: Event | TypedInputEvent` => `event: TypedInputEvent`

    const inputTypeFallback = isForward ? 'deleteContentForward' : 'deleteContentBackward';
    this.updateElementState(newElementState, {
      inputType: 'inputType' in event ? event.inputType : inputTypeFallback,
      data: null
    });
    this.updateHistory(newElementState);
  }
  handleInsert(event, data) {
    const initialElementState = this.elementState;
    const {
      elementState,
      data: insertedText = data
    } = this.preprocessor({
      data,
      elementState: initialElementState
    }, 'insert');
    const maskModel = new MaskModel(elementState, this.options);
    try {
      maskModel.addCharacters(elementState.selection, insertedText);
    } catch (_a) {
      return event.preventDefault();
    }
    const [from, to] = elementState.selection;
    const newPossibleValue = elementState.value.slice(0, from) + data + elementState.value.slice(to);
    const newElementState = this.postprocessor(maskModel, initialElementState);
    if (newElementState.value.length > this.maxLength) {
      return event.preventDefault();
    }
    if (newPossibleValue !== newElementState.value) {
      event.preventDefault();
      this.updateElementState(newElementState, {
        data,
        inputType: 'inputType' in event ? event.inputType : 'insertText'
      });
      this.updateHistory(newElementState);
    }
  }
  handleEnter(event) {
    if (this.isTextArea) {
      this.handleInsert(event, '\n');
    }
  }
}


/***/ }),

/***/ 1262:
/*!************************************************!*\
  !*** ./node_modules/@maskito/kit/index.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maskitoAddOnFocusPlugin: () => (/* binding */ maskitoAddOnFocusPlugin),
/* harmony export */   maskitoCaretGuard: () => (/* binding */ maskitoCaretGuard),
/* harmony export */   maskitoDateOptionsGenerator: () => (/* binding */ maskitoDateOptionsGenerator),
/* harmony export */   maskitoDateRangeOptionsGenerator: () => (/* binding */ maskitoDateRangeOptionsGenerator),
/* harmony export */   maskitoDateTimeOptionsGenerator: () => (/* binding */ maskitoDateTimeOptionsGenerator),
/* harmony export */   maskitoEventHandler: () => (/* binding */ maskitoEventHandler),
/* harmony export */   maskitoNumberOptionsGenerator: () => (/* binding */ maskitoNumberOptionsGenerator),
/* harmony export */   maskitoParseNumber: () => (/* binding */ maskitoParseNumber),
/* harmony export */   maskitoPostfixPostprocessorGenerator: () => (/* binding */ maskitoPostfixPostprocessorGenerator),
/* harmony export */   maskitoPrefixPostprocessorGenerator: () => (/* binding */ maskitoPrefixPostprocessorGenerator),
/* harmony export */   maskitoRejectEvent: () => (/* binding */ maskitoRejectEvent),
/* harmony export */   maskitoRemoveOnBlurPlugin: () => (/* binding */ maskitoRemoveOnBlurPlugin),
/* harmony export */   maskitoTimeOptionsGenerator: () => (/* binding */ maskitoTimeOptionsGenerator),
/* harmony export */   maskitoWithPlaceholder: () => (/* binding */ maskitoWithPlaceholder)
/* harmony export */ });
/* harmony import */ var _maskito_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @maskito/core */ 7618);

const DEFAULT_DECIMAL_PSEUDO_SEPARATORS = ['.', ',', 'б', 'ю'];
const DEFAULT_MIN_DATE = new Date('0001-01-01');
const DEFAULT_MAX_DATE = new Date('9999-12-31');
const DEFAULT_TIME_SEGMENT_MAX_VALUES = {
  hours: 23,
  minutes: 59,
  seconds: 59,
  milliseconds: 999
};

/**
 * {@link https://unicode-table.com/en/00A0/ Non-breaking space}.
 */
const CHAR_NO_BREAK_SPACE = '\u00A0';
/**
 * {@link https://unicode-table.com/en/2013/ EN dash}
 * is used to indicate a range of numbers or a span of time.
 * @example 2006–2022
 */

const CHAR_EN_DASH = '\u2013';
/**
 * {@link https://unicode-table.com/en/2014/ EM dash}
 * is used to mark a break in a sentence.
 * @example Taiga UI — powerful set of open source components for Angular
 * ___
 * Don't confuse with {@link CHAR_EN_DASH} or {@link CHAR_HYPHEN}!
 */

const CHAR_EM_DASH = '\u2014';
/**
 * {@link https://unicode-table.com/en/002D/ Hyphen (minus sign)}
 * is used to combine words.
 * @example well-behaved
 * ___
 * Don't confuse with {@link CHAR_EN_DASH} or {@link CHAR_EM_DASH}!
 */

const CHAR_HYPHEN = '\u002D';
/**
 * {@link https://unicode-table.com/en/2212/ Minus}
 * is used as math operator symbol or before negative digits.
 * ---
 * Can be used as `&minus;`. Don't confuse with {@link CHAR_HYPHEN}
 */

const CHAR_MINUS = '\u2212';
const POSSIBLE_DATE_RANGE_SEPARATOR = [CHAR_HYPHEN, CHAR_EN_DASH, CHAR_EM_DASH, CHAR_MINUS];
const POSSIBLE_DATE_TIME_SEPARATOR = [',', ' '];
const TIME_FIXED_CHARACTERS = [':', '.'];
const TIME_SEGMENT_VALUE_LENGTHS = {
  hours: 2,
  minutes: 2,
  seconds: 2,
  milliseconds: 3
};

/**
 * Clamps a value between two inclusive limits
 *
 * @param value
 * @param min lower limit
 * @param max upper limit
 */
function clamp(value, min, max) {
  const clampedValue = Math.min(Number(max), Math.max(Number(min), Number(value)));
  return value instanceof Date ? new Date(clampedValue) : clampedValue;
}
function appendDate(initialDate, {
  day,
  month,
  year
} = {}) {
  const date = new Date(initialDate);
  if (day) {
    date.setDate(date.getDate() + day);
  }
  if (month) {
    date.setMonth(date.getMonth() + month);
  }
  if (year) {
    date.setFullYear(date.getFullYear() + year);
  }
  return date;
}
const getDateSegmentValueLength = dateString => {
  var _a, _b, _c;
  return {
    day: ((_a = dateString.match(/d/g)) === null || _a === void 0 ? void 0 : _a.length) || 0,
    month: ((_b = dateString.match(/m/g)) === null || _b === void 0 ? void 0 : _b.length) || 0,
    year: ((_c = dateString.match(/y/g)) === null || _c === void 0 ? void 0 : _c.length) || 0
  };
};
function dateToSegments(date) {
  return {
    day: String(date.getDate()).padStart(2, '0'),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    year: String(date.getFullYear()).padStart(4, '0'),
    hours: String(date.getHours()).padStart(2, '0'),
    minutes: String(date.getMinutes()).padStart(2, '0'),
    seconds: String(date.getSeconds()).padStart(2, '0'),
    milliseconds: String(date.getMilliseconds()).padStart(3, '0')
  };
}
function isDateStringComplete(dateString, dateModeTemplate) {
  if (dateString.length < dateModeTemplate.length) {
    return false;
  }
  return dateString.split(/\D/).every(segment => !segment.match(/^0+$/));
}
function parseDateRangeString(dateRange, dateModeTemplate, rangeSeparator) {
  const digitsInDate = dateModeTemplate.replace(/\W/g, '').length;
  return dateRange.replace(rangeSeparator, '').match(new RegExp(`(\\D*\\d[^\\d\\s]*){1,${digitsInDate}}`, 'g')) || [];
}

/**
 * @deprecated use `Object.fromEntries` instead
 * (check browser support first https://caniuse.com/mdn-javascript_builtins_object_fromentries)
 * ___
 * TODO: after we bump Firefox to 63+ replace this function with `Object.fromEntries`.
 * TODO: Add `es2019.object` to `tsconfig.json` => `compilerOptions.lib`.
 *
 */
function getObjectFromEntries(keyValuePairs) {
  return keyValuePairs.reduce((obj, [key, val]) => Object.assign(Object.assign({}, obj), {
    [key]: val
  }), {});
}
function parseDateString(dateString, fullMode) {
  const cleanMode = fullMode.replace(/[^dmy]/g, '');
  const onlyDigitsDate = dateString.replace(/\D+/g, '');
  const dateSegments = {
    day: onlyDigitsDate.slice(cleanMode.indexOf('d'), cleanMode.lastIndexOf('d') + 1),
    month: onlyDigitsDate.slice(cleanMode.indexOf('m'), cleanMode.lastIndexOf('m') + 1),
    year: onlyDigitsDate.slice(cleanMode.indexOf('y'), cleanMode.lastIndexOf('y') + 1)
  };
  return getObjectFromEntries(Object.entries(dateSegments).filter(([_, value]) => Boolean(value)).sort(([a], [b]) => fullMode.toLowerCase().indexOf(a[0]) > fullMode.toLowerCase().indexOf(b[0]) ? 1 : -1));
}
function segmentsToDate(parsedDate, parsedTime) {
  var _a, _b, _c, _d, _e, _f, _g;
  const year = ((_a = parsedDate.year) === null || _a === void 0 ? void 0 : _a.length) === 2 ? `20${parsedDate.year}` : parsedDate.year;
  const date = new Date(Number(year !== null && year !== void 0 ? year : '0'), Number((_b = parsedDate.month) !== null && _b !== void 0 ? _b : '1') - 1, Number((_c = parsedDate.day) !== null && _c !== void 0 ? _c : '1'), Number((_d = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.hours) !== null && _d !== void 0 ? _d : '0'), Number((_e = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.minutes) !== null && _e !== void 0 ? _e : '0'), Number((_f = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.seconds) !== null && _f !== void 0 ? _f : '0'), Number((_g = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.milliseconds) !== null && _g !== void 0 ? _g : '0')); // needed for years less than 1900

  date.setFullYear(Number(year !== null && year !== void 0 ? year : '0'));
  return date;
}
const DATE_TIME_SEPARATOR = ', ';
function toDateString({
  day,
  month,
  year,
  hours,
  minutes,
  seconds,
  milliseconds
}, dateMode, timeMode) {
  var _a;
  const safeYear = ((_a = dateMode.match(/y/g)) === null || _a === void 0 ? void 0 : _a.length) === 2 ? year === null || year === void 0 ? void 0 : year.slice(-2) : year;
  const fullMode = dateMode + (timeMode ? DATE_TIME_SEPARATOR + timeMode : '');
  return fullMode.replace(/d+/g, day !== null && day !== void 0 ? day : '').replace(/m+/g, month !== null && month !== void 0 ? month : '').replace(/y+/g, safeYear !== null && safeYear !== void 0 ? safeYear : '').replace(/H+/g, hours !== null && hours !== void 0 ? hours : '').replace(/MSS/g, milliseconds !== null && milliseconds !== void 0 ? milliseconds : '').replace(/M+/g, minutes !== null && minutes !== void 0 ? minutes : '').replace(/S+/g, seconds !== null && seconds !== void 0 ? seconds : '').replace(/^\D+/g, '').replace(/\D+$/g, '');
}
function padWithZeroesUntilValid(segmentValue, paddedMaxValue, prefixedZeroesCount = 0) {
  if (Number(segmentValue.padEnd(paddedMaxValue.length, '0')) <= Number(paddedMaxValue)) {
    return {
      validatedSegmentValue: segmentValue,
      prefixedZeroesCount
    };
  }
  if (segmentValue.endsWith('0')) {
    // 00:|00 => Type 9 => 00:09|
    return padWithZeroesUntilValid(`0${segmentValue.slice(0, paddedMaxValue.length - 1)}`, paddedMaxValue, prefixedZeroesCount + 1);
  } // |19:00 => Type 2 => 2|0:00

  return padWithZeroesUntilValid(`${segmentValue.slice(0, paddedMaxValue.length - 1)}0`, paddedMaxValue, prefixedZeroesCount);
}
const dateMaxValues = {
  day: 31,
  month: 12,
  year: 9999
};
function validateDateString({
  dateString,
  dateModeTemplate,
  offset,
  selection: [from, to]
}) {
  const parsedDate = parseDateString(dateString, dateModeTemplate);
  const dateSegments = Object.entries(parsedDate);
  const validatedDateSegments = {};
  let paddedZeroes = 0;
  for (const [segmentName, segmentValue] of dateSegments) {
    const validatedDate = toDateString(validatedDateSegments, dateModeTemplate);
    const maxSegmentValue = dateMaxValues[segmentName];
    const fantomSeparator = validatedDate.length && 1;
    const lastSegmentDigitIndex = offset + validatedDate.length + fantomSeparator + getDateSegmentValueLength(dateModeTemplate)[segmentName];
    const isLastSegmentDigitAdded = lastSegmentDigitIndex >= from && lastSegmentDigitIndex === to;
    if (isLastSegmentDigitAdded && Number(segmentValue) > Number(maxSegmentValue)) {
      // 3|1.10.2010 => Type 9 => 3|1.10.2010
      return {
        validatedDateString: '',
        updatedSelection: [from, to]
      }; // prevent changes
    }

    if (isLastSegmentDigitAdded && Number(segmentValue) < 1) {
      // 31.0|1.2010 => Type 0 => 31.0|1.2010
      return {
        validatedDateString: '',
        updatedSelection: [from, to]
      }; // prevent changes
    }

    const {
      validatedSegmentValue,
      prefixedZeroesCount
    } = padWithZeroesUntilValid(segmentValue, `${maxSegmentValue}`);
    paddedZeroes += prefixedZeroesCount;
    validatedDateSegments[segmentName] = validatedSegmentValue;
  }
  const validatedDateString = toDateString(validatedDateSegments, dateModeTemplate);
  const addedDateSegmentSeparators = validatedDateString.length - dateString.length;
  return {
    validatedDateString,
    updatedSelection: [from + paddedZeroes + addedDateSegmentSeparators, to + paddedZeroes + addedDateSegmentSeparators]
  };
}

/**
 * Copy-pasted solution from lodash
 * @see https://lodash.com/docs/4.17.15#escapeRegExp
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = new RegExp(reRegExpChar.source);
function escapeRegExp(str) {
  return str && reHasRegExpChar.test(str) ? str.replace(reRegExpChar, '\\$&') : str;
}
function findCommonBeginningSubstr(a, b) {
  let res = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return res;
    }
    res += a[i];
  }
  return res;
}

/**
 * Returns current active element, including shadow dom
 *
 * @return element or null
 */
function getFocused({
  activeElement
}) {
  if (!(activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot)) {
    return activeElement;
  }
  let element = activeElement.shadowRoot.activeElement;
  while (element === null || element === void 0 ? void 0 : element.shadowRoot) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function identity(x) {
  return x;
}
function isEmpty(entity) {
  return !entity || typeof entity === 'object' && Object.keys(entity).length === 0;
}
function raiseSegmentValueToMin(segments, fullMode) {
  const segmentsLength = getDateSegmentValueLength(fullMode);
  return getObjectFromEntries(Object.entries(segments).map(([key, value]) => {
    const segmentLength = segmentsLength[key];
    return [key, value.length === segmentLength && value.match(/^0+$/) ? '1'.padStart(segmentLength, '0') : value];
  }));
}
function createMinMaxDatePostprocessor({
  dateModeTemplate,
  min = DEFAULT_MIN_DATE,
  max = DEFAULT_MAX_DATE,
  rangeSeparator = '',
  dateSegmentSeparator = '.'
}) {
  return ({
    value,
    selection
  }) => {
    const endsWithRangeSeparator = rangeSeparator && value.endsWith(rangeSeparator);
    const dateStrings = parseDateRangeString(value, dateModeTemplate, rangeSeparator);
    let validatedValue = '';
    for (const dateString of dateStrings) {
      validatedValue += validatedValue ? rangeSeparator : '';
      const parsedDate = parseDateString(dateString, dateModeTemplate);
      if (!isDateStringComplete(dateString, dateModeTemplate)) {
        const fixedDate = raiseSegmentValueToMin(parsedDate, dateModeTemplate);
        const fixedValue = toDateString(fixedDate, dateModeTemplate);
        const tail = dateString.endsWith(dateSegmentSeparator) ? dateSegmentSeparator : '';
        validatedValue += fixedValue + tail;
        continue;
      }
      const date = segmentsToDate(parsedDate);
      const clampedDate = clamp(date, min, max);
      validatedValue += toDateString(dateToSegments(clampedDate), dateModeTemplate);
    }
    return {
      selection,
      value: validatedValue + (endsWithRangeSeparator ? rangeSeparator : '')
    };
  };
}
function normalizeDatePreprocessor({
  dateModeTemplate,
  dateSegmentsSeparator,
  rangeSeparator = ''
}) {
  return ({
    elementState,
    data
  }) => {
    const separator = rangeSeparator ? new RegExp(`${rangeSeparator}|-`) : DATE_TIME_SEPARATOR;
    const possibleDates = data.split(separator);
    const dates = data.includes(DATE_TIME_SEPARATOR) ? [possibleDates[0]] : possibleDates;
    if (dates.every(date => date.trim().split(/\D/).length === dateModeTemplate.split(dateSegmentsSeparator).length)) {
      const newData = dates.map(date => normalizeDateString(date, dateModeTemplate, dateSegmentsSeparator)).join(rangeSeparator);
      return {
        elementState,
        data: `${newData}${data.includes(DATE_TIME_SEPARATOR) ? DATE_TIME_SEPARATOR + possibleDates[1] || '' : ''}`
      };
    }
    return {
      elementState,
      data
    };
  };
}
function normalizeDateString(dateString, template, separator) {
  const dateSegments = dateString.split(/\D/);
  const templateSegments = template.split(separator);
  const normalizedSegments = dateSegments.map((segment, index) => index === templateSegments.length - 1 ? segment : segment.padStart(templateSegments[index].length, '0'));
  return normalizedSegments.join(separator);
}
function maskitoPostfixPostprocessorGenerator(postfix) {
  const postfixRE = new RegExp(`${escapeRegExp(postfix)}$`);
  return postfix ? ({
    value,
    selection
  }, initialElementState) => {
    if (!value && !initialElementState.value.endsWith(postfix)) {
      // cases when developer wants input to be empty (programmatically)
      return {
        value,
        selection
      };
    }
    if (!value.endsWith(postfix) && !initialElementState.value.endsWith(postfix)) {
      return {
        selection,
        value: value + postfix
      };
    }
    const initialValueBeforePostfix = initialElementState.value.replace(postfixRE, '');
    const postfixWasModified = initialElementState.selection[1] >= initialValueBeforePostfix.length;
    const alreadyExistedValueBeforePostfix = findCommonBeginningSubstr(initialValueBeforePostfix, value);
    return {
      selection,
      value: Array.from(postfix).reverse().reduce((newValue, char, index) => {
        const i = newValue.length - 1 - index;
        const isInitiallyMirroredChar = alreadyExistedValueBeforePostfix[i] === char && postfixWasModified;
        return newValue[i] !== char || isInitiallyMirroredChar ? newValue.slice(0, i + 1) + char + newValue.slice(i + 1) : newValue;
      }, value)
    };
  } : identity;
}
function maskitoPrefixPostprocessorGenerator(prefix) {
  return prefix ? ({
    value,
    selection
  }, initialElementState) => {
    if (value.startsWith(prefix) ||
    // already valid
    !value && !initialElementState.value.startsWith(prefix) // cases when developer wants input to be empty
    ) {
      return {
        value,
        selection
      };
    }
    const [from, to] = selection;
    const requiredPrefix = Array.from(prefix).reduce((computedPrefix, char, i) => {
      const newValue = computedPrefix + value;
      return newValue[i] === char ? computedPrefix : computedPrefix + char;
    }, '');
    return {
      selection: [from + requiredPrefix.length, to + requiredPrefix.length],
      value: requiredPrefix + value
    };
  } : identity;
}
function createValidDatePreprocessor({
  dateModeTemplate,
  dateSegmentsSeparator,
  rangeSeparator = ''
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    if (data === dateSegmentsSeparator) {
      return {
        elementState,
        data: selection[0] === value.length ? data : ''
      };
    }
    if (POSSIBLE_DATE_RANGE_SEPARATOR.includes(data)) {
      return {
        elementState,
        data: rangeSeparator
      };
    }
    const newCharacters = data.replace(new RegExp(`[^\\d${escapeRegExp(dateSegmentsSeparator)}${rangeSeparator}]`, 'g'), '');
    if (!newCharacters) {
      return {
        elementState,
        data: ''
      };
    }
    const [from, rawTo] = selection;
    let to = rawTo + data.length;
    const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);
    const dateStrings = parseDateRangeString(newPossibleValue, dateModeTemplate, rangeSeparator);
    let validatedValue = '';
    const hasRangeSeparator = Boolean(rangeSeparator) && newPossibleValue.includes(rangeSeparator);
    for (const dateString of dateStrings) {
      const {
        validatedDateString,
        updatedSelection
      } = validateDateString({
        dateString,
        dateModeTemplate,
        offset: validatedValue ? validatedValue.length + rangeSeparator.length : 0,
        selection: [from, to]
      });
      if (dateString && !validatedDateString) {
        return {
          elementState,
          data: ''
        }; // prevent changes
      }

      to = updatedSelection[1];
      validatedValue += hasRangeSeparator && validatedValue ? rangeSeparator + validatedDateString : validatedDateString;
    }
    const newData = validatedValue.slice(from, to);
    return {
      elementState: {
        selection,
        value: validatedValue.slice(0, from) + newData.split(dateSegmentsSeparator).map(segment => '0'.repeat(segment.length)).join(dateSegmentsSeparator) + validatedValue.slice(to)
      },
      data: newData
    };
  };
}
function maskitoEventHandler(name, handler, eventListenerOptions) {
  return (element, maskitoOptions) => {
    const listener = () => handler(element, maskitoOptions);
    element.addEventListener(name, listener, eventListenerOptions);
    return () => element.removeEventListener(name, listener, eventListenerOptions);
  };
}
function maskitoAddOnFocusPlugin(value) {
  return maskitoEventHandler('focus', element => {
    if (!element.value) {
      element.value = value;
      element.dispatchEvent(new Event('input'));
    }
  });
}
function maskitoCaretGuard(guard) {
  return element => {
    const document = element.ownerDocument;
    let isPointerDown = 0;
    const onPointerDown = () => isPointerDown++;
    const onPointerUp = () => {
      isPointerDown = Math.max(--isPointerDown, 0);
    };
    const listener = () => {
      if (getFocused(document) !== element) {
        return;
      }
      if (isPointerDown) {
        return document.addEventListener('mouseup', listener, {
          once: true,
          passive: true
        });
      }
      const start = element.selectionStart || 0;
      const end = element.selectionEnd || 0;
      const [fromLimit, toLimit] = guard(element.value, [start, end]);
      if (fromLimit > start || toLimit < end) {
        element.setSelectionRange(clamp(start, fromLimit, toLimit), clamp(end, fromLimit, toLimit));
      }
    };
    document.addEventListener('selectionchange', listener, {
      passive: true
    });
    element.addEventListener('mousedown', onPointerDown, {
      passive: true
    });
    document.addEventListener('mouseup', onPointerUp, {
      passive: true
    });
    return () => {
      document.removeEventListener('selectionchange', listener);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('mouseup', onPointerUp);
    };
  };
}
function maskitoRejectEvent(element) {
  const listener = () => {
    const value = element.value;
    element.addEventListener('beforeinput', event => {
      if (event.defaultPrevented && value === element.value) {
        element.dispatchEvent(new CustomEvent('maskitoReject', {
          bubbles: true
        }));
      }
    }, {
      once: true
    });
  };
  element.addEventListener('beforeinput', listener, true);
  return () => element.removeEventListener('beforeinput', listener, true);
}
function maskitoRemoveOnBlurPlugin(value) {
  return maskitoEventHandler('blur', element => {
    if (element.value === value) {
      element.value = '';
      element.dispatchEvent(new Event('input'));
    }
  });
}
function maskitoWithPlaceholder(placeholder, focusedOnly = false) {
  const removePlaceholder = value => {
    for (let i = value.length - 1; i >= 0; i--) {
      if (value[i] !== placeholder[i]) {
        return value.slice(0, i + 1);
      }
    }
    return '';
  };
  const plugins = [maskitoCaretGuard(value => [0, removePlaceholder(value).length])];
  let focused = false;
  if (focusedOnly) {
    const focus = maskitoEventHandler('focus', element => {
      focused = true;
      element.value += placeholder.slice(element.value.length);
      element.dispatchEvent(new Event('input'));
    }, {
      capture: true
    });
    const blur = maskitoEventHandler('blur', element => {
      focused = false;
      element.value = removePlaceholder(element.value);
      element.dispatchEvent(new Event('input'));
    }, {
      capture: true
    });
    plugins.push(focus, blur);
  }
  return {
    plugins,
    removePlaceholder,
    preprocessors: [({
      elementState,
      data
    }) => {
      const {
        value,
        selection
      } = elementState;
      return {
        elementState: {
          selection,
          value: removePlaceholder(value)
        },
        data
      };
    }],
    postprocessors: [({
      value,
      selection
    }, initialElementState) => initialElementState.value && (focused || !focusedOnly) ? {
      value: value + placeholder.slice(value.length),
      selection
    } : {
      value,
      selection
    }]
  };
}
function createZeroPlaceholdersPreprocessor() {
  return ({
    elementState
  }, actionType) => {
    const {
      value,
      selection
    } = elementState;
    if (!value || isLastChar(value, selection)) {
      return {
        elementState
      };
    }
    const [from, to] = selection;
    const zeroes = value.slice(from, to).replace(/\d/g, '0');
    const newValue = value.slice(0, from) + zeroes + value.slice(to);
    if (actionType === 'validation' || actionType === 'insert' && from === to) {
      return {
        elementState: {
          selection,
          value: newValue
        }
      };
    }
    return {
      elementState: {
        selection: actionType === 'deleteBackward' || actionType === 'insert' ? [from, from] : [to, to],
        value: newValue
      }
    };
  };
}
function isLastChar(value, [_, to]) {
  return to === value.length;
}
function maskitoDateOptionsGenerator({
  mode,
  separator = '.',
  max,
  min
}) {
  const dateModeTemplate = mode.split('/').join(separator);
  return Object.assign(Object.assign({}, _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS), {
    mask: Array.from(dateModeTemplate).map(char => char === separator ? char : /\d/),
    overwriteMode: 'replace',
    preprocessors: [createZeroPlaceholdersPreprocessor(), normalizeDatePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: separator
    }), createValidDatePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: separator
    })],
    postprocessors: [createMinMaxDatePostprocessor({
      min,
      max,
      dateModeTemplate,
      dateSegmentSeparator: separator
    })]
  });
}
function createMinMaxRangeLengthPostprocessor({
  dateModeTemplate,
  rangeSeparator,
  minLength,
  maxLength,
  max = DEFAULT_MAX_DATE
}) {
  if (isEmpty(minLength) && isEmpty(maxLength)) {
    return identity;
  }
  return ({
    value,
    selection
  }) => {
    const dateStrings = parseDateRangeString(value, dateModeTemplate, rangeSeparator);
    if (dateStrings.length !== 2 || dateStrings.some(date => !isDateStringComplete(date, dateModeTemplate))) {
      return {
        value,
        selection
      };
    }
    const [fromDate, toDate] = dateStrings.map(dateString => segmentsToDate(parseDateString(dateString, dateModeTemplate)));
    const minDistantToDate = appendDate(fromDate, Object.assign(Object.assign({}, minLength), {
      // 06.02.2023 - 07.02.2023 => {minLength: {day: 3}} => 06.02.2023 - 08.02.2023
      // "from"-day is included in the range
      day: (minLength === null || minLength === void 0 ? void 0 : minLength.day) && minLength.day - 1
    }));
    const maxDistantToDate = !isEmpty(maxLength) ? appendDate(fromDate, Object.assign(Object.assign({}, maxLength), {
      day: (maxLength === null || maxLength === void 0 ? void 0 : maxLength.day) && maxLength.day - 1
    })) : max;
    const minLengthClampedToDate = clamp(toDate, minDistantToDate, max);
    const minMaxLengthClampedToDate = minLengthClampedToDate > maxDistantToDate ? maxDistantToDate : minLengthClampedToDate;
    return {
      selection,
      value: dateStrings[0] + rangeSeparator + toDateString(dateToSegments(minMaxLengthClampedToDate), dateModeTemplate)
    };
  };
}
function createSwapDatesPostprocessor({
  dateModeTemplate,
  rangeSeparator
}) {
  return ({
    value,
    selection
  }) => {
    const dateStrings = parseDateRangeString(value, dateModeTemplate, rangeSeparator);
    const isDateRangeComplete = dateStrings.length === 2 && dateStrings.every(date => isDateStringComplete(date, dateModeTemplate));
    const [from, to] = selection;
    const caretAtTheEnd = from >= value.length;
    const allValueSelected = from === 0 && to >= value.length; // dropping text inside with a pointer

    if (!(caretAtTheEnd || allValueSelected) || !isDateRangeComplete) {
      return {
        value,
        selection
      };
    }
    const [fromDate, toDate] = dateStrings.map(dateString => segmentsToDate(parseDateString(dateString, dateModeTemplate)));
    return {
      selection,
      value: fromDate > toDate ? dateStrings.reverse().join(rangeSeparator) : value
    };
  };
}
function maskitoDateRangeOptionsGenerator({
  mode,
  separator = '.',
  min,
  max,
  minLength,
  maxLength,
  dateSeparator = separator,
  rangeSeparator = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`
}) {
  const dateModeTemplate = mode.split('/').join(dateSeparator);
  const dateMask = Array.from(dateModeTemplate).map(char => char === dateSeparator ? char : /\d/);
  return Object.assign(Object.assign({}, _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS), {
    mask: [...dateMask, ...Array.from(rangeSeparator), ...dateMask],
    overwriteMode: 'replace',
    preprocessors: [createZeroPlaceholdersPreprocessor(), normalizeDatePreprocessor({
      dateModeTemplate,
      rangeSeparator,
      dateSegmentsSeparator: dateSeparator
    }), createValidDatePreprocessor({
      dateModeTemplate,
      rangeSeparator,
      dateSegmentsSeparator: dateSeparator
    })],
    postprocessors: [createMinMaxDatePostprocessor({
      min,
      max,
      dateModeTemplate,
      rangeSeparator,
      dateSegmentSeparator: dateSeparator
    }), createMinMaxRangeLengthPostprocessor({
      dateModeTemplate,
      minLength,
      maxLength,
      max,
      rangeSeparator
    }), createSwapDatesPostprocessor({
      dateModeTemplate,
      rangeSeparator
    })]
  });
}
function padTimeSegments(timeSegments) {
  return getObjectFromEntries(Object.entries(timeSegments).map(([segmentName, segmentValue]) => [segmentName, `${segmentValue}`.padEnd(TIME_SEGMENT_VALUE_LENGTHS[segmentName], '0')]));
}

/**
 * @param timeString can be with/without fixed characters
 */

function parseTimeString(timeString) {
  const onlyDigits = timeString.replace(/\D+/g, '');
  const timeSegments = {
    hours: onlyDigits.slice(0, 2),
    minutes: onlyDigits.slice(2, 4),
    seconds: onlyDigits.slice(4, 6),
    milliseconds: onlyDigits.slice(6, 9)
  };
  return getObjectFromEntries(Object.entries(timeSegments).filter(([_, value]) => Boolean(value)));
}
function toTimeString({
  hours = '',
  minutes = '',
  seconds = '',
  milliseconds = ''
}) {
  const mm = minutes && `:${minutes}`;
  const ss = seconds && `:${seconds}`;
  const ms = milliseconds && `.${milliseconds}`;
  return `${hours}${mm}${ss}${ms}`;
}
const TRAILING_TIME_SEGMENT_SEPARATOR_REG = new RegExp(`[${TIME_FIXED_CHARACTERS.map(escapeRegExp).join('')}]$`);
function validateTimeString({
  timeString,
  paddedMaxValues,
  offset,
  selection: [from, to]
}) {
  const parsedTime = parseTimeString(timeString);
  const possibleTimeSegments = Object.entries(parsedTime);
  const validatedTimeSegments = {};
  let paddedZeroes = 0;
  for (const [segmentName, segmentValue] of possibleTimeSegments) {
    const validatedTime = toTimeString(validatedTimeSegments);
    const maxSegmentValue = paddedMaxValues[segmentName];
    const fantomSeparator = validatedTime.length && 1;
    const lastSegmentDigitIndex = offset + validatedTime.length + fantomSeparator + TIME_SEGMENT_VALUE_LENGTHS[segmentName];
    const isLastSegmentDigitAdded = lastSegmentDigitIndex >= from && lastSegmentDigitIndex <= to;
    if (isLastSegmentDigitAdded && Number(segmentValue) > Number(maxSegmentValue)) {
      // 2|0:00 => Type 9 => 2|0:00
      return {
        validatedTimeString: '',
        updatedTimeSelection: [from, to]
      }; // prevent changes
    }

    const {
      validatedSegmentValue,
      prefixedZeroesCount
    } = padWithZeroesUntilValid(segmentValue, `${maxSegmentValue}`);
    paddedZeroes += prefixedZeroesCount;
    validatedTimeSegments[segmentName] = validatedSegmentValue;
  }
  const [trailingSegmentSeparator = ''] = timeString.match(TRAILING_TIME_SEGMENT_SEPARATOR_REG) || [];
  const validatedTimeString = toTimeString(validatedTimeSegments) + trailingSegmentSeparator;
  const addedDateSegmentSeparators = Math.max(validatedTimeString.length - timeString.length, 0);
  return {
    validatedTimeString,
    updatedTimeSelection: [from + paddedZeroes + addedDateSegmentSeparators, to + paddedZeroes + addedDateSegmentSeparators]
  };
}
function isDateTimeStringComplete(dateTimeString, dateMode, timeMode) {
  return dateTimeString.length >= dateMode.length + timeMode.length + DATE_TIME_SEPARATOR.length && dateTimeString.split(DATE_TIME_SEPARATOR)[0].split(/\D/).every(segment => !segment.match(/^0+$/));
}
function parseDateTimeString(dateTime, dateModeTemplate) {
  const hasSeparator = dateTime.includes(DATE_TIME_SEPARATOR);
  return [dateTime.slice(0, dateModeTemplate.length), dateTime.slice(hasSeparator ? dateModeTemplate.length + DATE_TIME_SEPARATOR.length : dateModeTemplate.length)];
}
function createMinMaxDateTimePostprocessor({
  dateModeTemplate,
  timeMode,
  min = DEFAULT_MIN_DATE,
  max = DEFAULT_MAX_DATE
}) {
  return ({
    value,
    selection
  }) => {
    const [dateString, timeString] = parseDateTimeString(value, dateModeTemplate);
    const parsedDate = parseDateString(dateString, dateModeTemplate);
    const parsedTime = parseTimeString(timeString);
    if (!isDateTimeStringComplete(value, dateModeTemplate, timeMode)) {
      const fixedDate = raiseSegmentValueToMin(parsedDate, dateModeTemplate);
      const {
        year,
        month,
        day
      } = isDateStringComplete(dateString, dateModeTemplate) ? dateToSegments(clamp(segmentsToDate(fixedDate), min, max)) : fixedDate;
      const fixedValue = toDateString(Object.assign({
        year,
        month,
        day
      }, parsedTime), dateModeTemplate, timeMode);
      const tail = value.slice(fixedValue.length);
      return {
        selection,
        value: fixedValue + tail
      };
    }
    const date = segmentsToDate(parsedDate, parsedTime);
    const clampedDate = clamp(date, min, max);
    const validatedValue = toDateString(dateToSegments(clampedDate), dateModeTemplate, timeMode);
    return {
      selection,
      value: validatedValue
    };
  };
}
function createValidDateTimePreprocessor({
  dateModeTemplate,
  dateSegmentsSeparator
}) {
  const invalidCharsRegExp = new RegExp(`[^\\d${TIME_FIXED_CHARACTERS.map(escapeRegExp).join('')}${escapeRegExp(dateSegmentsSeparator)}]+`);
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    if (data === dateSegmentsSeparator) {
      return {
        elementState,
        data: selection[0] === value.length ? data : ''
      };
    }
    if (POSSIBLE_DATE_TIME_SEPARATOR.includes(data)) {
      return {
        elementState,
        data: DATE_TIME_SEPARATOR
      };
    }
    const newCharacters = data.replace(invalidCharsRegExp, '');
    if (!newCharacters) {
      return {
        elementState,
        data: ''
      };
    }
    const [from, rawTo] = selection;
    let to = rawTo + data.length;
    const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);
    const [dateString, timeString] = parseDateTimeString(newPossibleValue, dateModeTemplate);
    let validatedValue = '';
    const hasDateTimeSeparator = newPossibleValue.includes(DATE_TIME_SEPARATOR);
    const {
      validatedDateString,
      updatedSelection
    } = validateDateString({
      dateString,
      dateModeTemplate,
      offset: 0,
      selection: [from, to]
    });
    if (dateString && !validatedDateString) {
      return {
        elementState,
        data: ''
      }; // prevent changes
    }

    to = updatedSelection[1];
    validatedValue += validatedDateString;
    const paddedMaxValues = padTimeSegments(DEFAULT_TIME_SEGMENT_MAX_VALUES);
    const {
      validatedTimeString,
      updatedTimeSelection
    } = validateTimeString({
      timeString,
      paddedMaxValues,
      offset: validatedValue.length + DATE_TIME_SEPARATOR.length,
      selection: [from, to]
    });
    if (timeString && !validatedTimeString) {
      return {
        elementState,
        data: ''
      }; // prevent changes
    }

    to = updatedTimeSelection[1];
    validatedValue += hasDateTimeSeparator ? DATE_TIME_SEPARATOR + validatedTimeString : validatedTimeString;
    const newData = validatedValue.slice(from, to);
    return {
      elementState: {
        selection,
        value: validatedValue.slice(0, from) + newData.split(dateSegmentsSeparator).map(segment => '0'.repeat(segment.length)).join(dateSegmentsSeparator) + validatedValue.slice(to)
      },
      data: newData
    };
  };
}
function maskitoDateTimeOptionsGenerator({
  dateMode,
  timeMode,
  dateSeparator = '.',
  min,
  max
}) {
  const dateModeTemplate = dateMode.split('/').join(dateSeparator);
  return Object.assign(Object.assign({}, _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS), {
    mask: [...Array.from(dateModeTemplate).map(char => char === dateSeparator ? char : /\d/), ...DATE_TIME_SEPARATOR.split(''), ...Array.from(timeMode).map(char => TIME_FIXED_CHARACTERS.includes(char) ? char : /\d/)],
    overwriteMode: 'replace',
    preprocessors: [createZeroPlaceholdersPreprocessor(), normalizeDatePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: dateSeparator
    }), createValidDateTimePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: dateSeparator
    })],
    postprocessors: [createMinMaxDateTimePostprocessor({
      min,
      max,
      dateModeTemplate,
      timeMode
    })]
  });
}
function generateMaskExpression({
  decimalSeparator,
  isNegativeAllowed,
  precision,
  thousandSeparator,
  prefix,
  postfix,
  decimalPseudoSeparators = [],
  pseudoMinuses = []
}) {
  const computedPrefix = computeAllOptionalCharsRegExp(prefix);
  const digit = '\\d';
  const optionalMinus = isNegativeAllowed ? `[${CHAR_MINUS}${pseudoMinuses.map(x => `\\${x}`).join('')}]?` : '';
  const integerPart = thousandSeparator ? `[${digit}${escapeRegExp(thousandSeparator).replace(/\s/g, '\\s')}]*` : `[${digit}]*`;
  const decimalPart = precision > 0 ? `([${escapeRegExp(decimalSeparator)}${decimalPseudoSeparators.map(escapeRegExp).join('')}]${digit}{0,${Number.isFinite(precision) ? precision : ''}})?` : '';
  const computedPostfix = computeAllOptionalCharsRegExp(postfix);
  return new RegExp(`^${computedPrefix}${optionalMinus}${integerPart}${decimalPart}${computedPostfix}$`);
}
function computeAllOptionalCharsRegExp(str) {
  return str ? `${str.split('').map(char => `${escapeRegExp(char)}?`).join('')}` : '';
}
function maskitoParseNumber(maskedNumber, decimalSeparator = '.') {
  const hasNegativeSign = !!maskedNumber.match(new RegExp(`^\\D*[${CHAR_MINUS}\\${CHAR_HYPHEN}${CHAR_EN_DASH}${CHAR_EM_DASH}]`));
  const unmaskedNumber = maskedNumber.replace(new RegExp(`[^\\d${escapeRegExp(decimalSeparator)}]`, 'g'), '').replace(decimalSeparator, '.');
  return unmaskedNumber ? Number((hasNegativeSign ? CHAR_HYPHEN : '') + unmaskedNumber) : NaN;
}

/**
 * Convert number to string with replacing exponent part on decimals
 *
 * @param value the number
 * @return string representation of a number
 */
function stringifyNumberWithoutExp(value) {
  const valueAsString = String(value);
  const [numberPart, expPart] = valueAsString.split('e-');
  let valueWithoutExp = valueAsString;
  if (expPart) {
    const [, fractionalPart] = numberPart.split('.');
    const decimalDigits = Number(expPart) + ((fractionalPart === null || fractionalPart === void 0 ? void 0 : fractionalPart.length) || 0);
    valueWithoutExp = value.toFixed(decimalDigits);
  }
  return valueWithoutExp;
}
function validateDecimalPseudoSeparators({
  decimalSeparator,
  thousandSeparator,
  decimalPseudoSeparators = DEFAULT_DECIMAL_PSEUDO_SEPARATORS
}) {
  return decimalPseudoSeparators.filter(char => char !== thousandSeparator && char !== decimalSeparator);
}

/**
 * If `decimalZeroPadding` is `true`, it pads decimal part with zeroes
 * (until number of digits after decimalSeparator is equal to the `precision`).
 * @example 1,42 => (`precision` is equal to 4) => 1,4200.
 */

function createDecimalZeroPaddingPostprocessor({
  decimalSeparator,
  precision,
  decimalZeroPadding,
  postfix
}) {
  if (precision <= 0 || !decimalZeroPadding) {
    return identity;
  }
  const trailingPostfixRegExp = new RegExp(`${escapeRegExp(postfix)}$`);
  return ({
    value,
    selection
  }) => {
    if (Number.isNaN(maskitoParseNumber(value, decimalSeparator))) {
      return {
        value,
        selection
      };
    }
    const [integerPart, decimalPart = ''] = value.replace(trailingPostfixRegExp, '').split(decimalSeparator);
    return {
      value: integerPart + decimalSeparator + decimalPart.padEnd(precision, '0') + postfix,
      selection
    };
  };
}

/**
 * This preprocessor works only once at initialization phase (when `new Maskito(...)` is executed).
 * This preprocessor helps to avoid conflicts during transition from one mask to another (for the same input).
 * For example, the developer changes postfix (or other mask's props) during run-time.
 * ```
 * let maskitoOptions = maskitoNumberOptionsGenerator({postfix: ' year'});
 * // [3 seconds later]
 * maskitoOptions = maskitoNumberOptionsGenerator({postfix: ' years'});
 * ```
 */

function createInitializationOnlyPreprocessor({
  decimalSeparator,
  decimalPseudoSeparators,
  pseudoMinuses
}) {
  let isInitializationPhase = true;
  const cleanNumberMask = generateMaskExpression({
    decimalSeparator,
    decimalPseudoSeparators,
    pseudoMinuses,
    prefix: '',
    postfix: '',
    thousandSeparator: '',
    precision: Infinity,
    isNegativeAllowed: true
  });
  return ({
    elementState,
    data
  }) => {
    if (!isInitializationPhase) {
      return {
        elementState,
        data
      };
    }
    isInitializationPhase = false;
    return {
      elementState: (0,_maskito_core__WEBPACK_IMPORTED_MODULE_0__.maskitoTransform)(elementState, {
        mask: cleanNumberMask
      }),
      data
    };
  };
}

/**
 * It removes repeated leading zeroes for integer part.
 * @example 0,|00005 => Backspace => |5
 * @example -0,|00005 => Backspace => -|5
 * @example User types "000000" => 0|
 * @example 0| => User types "5" => 5|
 */

function createLeadingZeroesValidationPostprocessor(decimalSeparator, thousandSeparator) {
  const trimLeadingZeroes = value => {
    const escapedThousandSeparator = escapeRegExp(thousandSeparator);
    return value.replace(
    // all leading zeroes followed by another zero
    new RegExp(`^(\\D+)?[0${escapedThousandSeparator}]+(?=0)`), '$1').replace(
    // zero followed by not-zero digit
    new RegExp(`^(\\D+)?[0${escapedThousandSeparator}]+(?=[1-9])`), '$1');
  };
  const countTrimmedZeroesBefore = (value, index) => {
    const valueBefore = value.slice(0, index);
    const followedByZero = value.slice(index).startsWith('0');
    return valueBefore.length - trimLeadingZeroes(valueBefore).length + (followedByZero ? 1 : 0);
  };
  return ({
    value,
    selection
  }) => {
    const [from, to] = selection;
    const hasDecimalSeparator = value.includes(decimalSeparator);
    const [integerPart, decimalPart = ''] = value.split(decimalSeparator);
    const zeroTrimmedIntegerPart = trimLeadingZeroes(integerPart);
    if (integerPart === zeroTrimmedIntegerPart) {
      return {
        value,
        selection
      };
    }
    const newFrom = from - countTrimmedZeroesBefore(value, from);
    const newTo = to - countTrimmedZeroesBefore(value, to);
    return {
      value: zeroTrimmedIntegerPart + (hasDecimalSeparator ? decimalSeparator : '') + decimalPart,
      selection: [Math.max(newFrom, 0), Math.max(newTo, 0)]
    };
  };
}

/**
 * This postprocessor is connected with {@link createMinMaxPlugin}:
 * both validate `min`/`max` bounds of entered value (but at the different point of time).
 */

function createMinMaxPostprocessor({
  min,
  max,
  decimalSeparator
}) {
  return ({
    value,
    selection
  }) => {
    const parsedNumber = maskitoParseNumber(value, decimalSeparator);
    const limitedValue =
    /**
     * We cannot limit lower bound if user enters positive number.
     * The same for upper bound and negative number.
     * ___
     * @example (min = 5)
     * Empty input => Without this condition user cannot type 42 (the first digit will be rejected)
     * ___
     * @example (max = -10)
     * Value is -10 => Without this condition user cannot delete 0 to enter another digit
     */
    parsedNumber > 0 ? Math.min(parsedNumber, max) : Math.max(parsedNumber, min);
    if (!Number.isNaN(parsedNumber) && limitedValue !== parsedNumber) {
      const newValue = `${limitedValue}`.replace('.', decimalSeparator).replace(CHAR_HYPHEN, CHAR_MINUS);
      return {
        value: newValue,
        selection: [newValue.length, newValue.length]
      };
    }
    return {
      value,
      selection
    };
  };
}

/**
 * Manage caret-navigation when user "deletes" non-removable digits or separators
 * @example 1,|42 => Backspace => 1|,42 (only if `decimalZeroPadding` is `true`)
 * @example 1|,42 => Delete => 1,|42 (only if `decimalZeroPadding` is `true`)
 * @example 0,|00 => Delete => 0,0|0 (only if `decimalZeroPadding` is `true`)
 * @example 1 |000 => Backspace => 1| 000 (always)
 */
function createNonRemovableCharsDeletionPreprocessor({
  decimalSeparator,
  thousandSeparator,
  decimalZeroPadding
}) {
  return ({
    elementState,
    data
  }, actionType) => {
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const selectedCharacters = value.slice(from, to);
    const nonRemovableSeparators = decimalZeroPadding ? [decimalSeparator, thousandSeparator] : [thousandSeparator];
    const areNonRemovableZeroesSelected = decimalZeroPadding && from > value.indexOf(decimalSeparator) && Boolean(selectedCharacters.match(/^0+$/gi));
    if (actionType !== 'deleteBackward' && actionType !== 'deleteForward' || !nonRemovableSeparators.includes(selectedCharacters) && !areNonRemovableZeroesSelected) {
      return {
        elementState,
        data
      };
    }
    return {
      elementState: {
        value,
        selection: actionType === 'deleteForward' ? [to, to] : [from, from]
      },
      data
    };
  };
}

/**
 * It pads integer part with zero if user types decimal separator (for empty input).
 * @example Empty input => User types "," (decimal separator) => 0,|
 */

function createNotEmptyIntegerPartPreprocessor({
  decimalSeparator,
  precision
}) {
  const startWithDecimalSepRegExp = new RegExp(`^\\D*${escapeRegExp(decimalSeparator)}`);
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const [from] = selection;
    if (precision <= 0 || value.includes(decimalSeparator) || !data.match(startWithDecimalSepRegExp)) {
      return {
        elementState,
        data
      };
    }
    const digitsBeforeCursor = value.slice(0, from).match(/\d+/);
    return {
      elementState,
      data: digitsBeforeCursor ? data : `0${data}`
    };
  };
}

/**
 * It replaces pseudo characters with valid one.
 * @example User types '.' (but separator is equal to comma) => dot is replaced with comma.
 * @example User types hyphen / en-dash / em-dash => it is replaced with minus.
 */
function createPseudoCharactersPreprocessor(validCharacter, pseudoCharacters) {
  const pseudoCharactersRegExp = new RegExp(`[${pseudoCharacters.join('')}]`, 'gi');
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    return {
      elementState: {
        selection,
        value: value.replace(pseudoCharactersRegExp, validCharacter)
      },
      data: data.replace(pseudoCharactersRegExp, validCharacter)
    };
  };
}

/**
 * It rejects new typed decimal separator if it already exists in text field.
 * Behaviour is similar to native <input type="number"> (Chrome).
 * @example 1|23,45 => Press comma (decimal separator) => 1|23,45 (do nothing).
 */

function createRepeatedDecimalSeparatorPreprocessor(decimalSeparator) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    return {
      elementState,
      data: !value.includes(decimalSeparator) || value.slice(from, to + 1).includes(decimalSeparator) ? data : data.replace(new RegExp(escapeRegExp(decimalSeparator), 'gi'), '')
    };
  };
}

/**
 * It adds symbol for separating thousands.
 * @example 1000000 => (thousandSeparator is equal to space) => 1 000 000.
 */

function createThousandSeparatorPostprocessor({
  thousandSeparator,
  decimalSeparator,
  prefix,
  postfix
}) {
  if (!thousandSeparator) {
    return identity;
  }
  const prefixReg = new RegExp(`^${escapeRegExp(prefix)}${CHAR_MINUS}?`);
  const postfixReg = new RegExp(`${escapeRegExp(postfix)}$`);
  const isAllSpaces = (...chars) => chars.every(x => /\s/.test(x));
  return ({
    value,
    selection
  }) => {
    const [integerPart, decimalPart = ''] = value.split(decimalSeparator);
    const [initialFrom, initialTo] = selection;
    let [from, to] = selection;
    const cleanIntegerPart = integerPart.replace(prefixReg, '').replace(postfixReg, '');
    const [integerPartPrefix = ''] = integerPart.match(prefixReg) || [];
    const [integerPartPostfix = ''] = integerPart.match(postfixReg) || [];
    const processedIntegerPart = Array.from(cleanIntegerPart).reduceRight((formattedValuePart, char, i) => {
      const isLeadingThousandSeparator = !i && char === thousandSeparator;
      const isPositionForSeparator = !isLeadingThousandSeparator && formattedValuePart.length && (formattedValuePart.length + 1) % 4 === 0;
      if (isPositionForSeparator && (char === thousandSeparator || isAllSpaces(char, thousandSeparator))) {
        return thousandSeparator + formattedValuePart;
      }
      if (char === thousandSeparator && !isPositionForSeparator) {
        if (i && i <= initialFrom) {
          from--;
        }
        if (i && i <= initialTo) {
          to--;
        }
        return formattedValuePart;
      }
      if (!isPositionForSeparator) {
        return char + formattedValuePart;
      }
      if (i <= initialFrom) {
        from++;
      }
      if (i <= initialTo) {
        to++;
      }
      return char + thousandSeparator + formattedValuePart;
    }, '');
    return {
      value: integerPartPrefix + processedIntegerPart + integerPartPostfix + (value.includes(decimalSeparator) ? decimalSeparator : '') + decimalPart,
      selection: [from, to]
    };
  };
}

/**
 * It drops decimal part if precision is zero.
 * @example User pastes '123.45' (but precision is zero) => 123
 */

function createZeroPrecisionPreprocessor(precision, decimalSeparator) {
  if (precision > 0) {
    return identity;
  }
  const decimalPartRegExp = new RegExp(`${escapeRegExp(decimalSeparator)}.*$`, 'g');
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const newValue = value.replace(decimalPartRegExp, '');
    return {
      elementState: {
        selection: [Math.min(from, newValue.length), Math.min(to, newValue.length)],
        value: newValue
      },
      data: data.replace(decimalPartRegExp, '')
    };
  };
}
const DUMMY_SELECTION = [0, 0];
/**
 * It removes repeated leading zeroes for integer part on blur-event.
 * @example 000000 => blur => 0
 * @example 00005 => blur => 5
 */

function createLeadingZeroesValidationPlugin(decimalSeparator, thousandSeparator) {
  const dropRepeatedLeadingZeroes = createLeadingZeroesValidationPostprocessor(decimalSeparator, thousandSeparator);
  return maskitoEventHandler('blur', element => {
    const newValue = dropRepeatedLeadingZeroes({
      value: element.value,
      selection: DUMMY_SELECTION
    }, {
      value: '',
      selection: DUMMY_SELECTION
    }).value;
    if (element.value !== newValue) {
      element.value = newValue;
      element.dispatchEvent(new Event('input'));
    }
  }, {
    capture: true
  });
}

/**
 * This plugin is connected with {@link createMinMaxPostprocessor}:
 * both validate `min`/`max` bounds of entered value (but at the different point of time).
 */

function createMinMaxPlugin({
  min,
  max,
  decimalSeparator
}) {
  return maskitoEventHandler('blur', (element, options) => {
    const parsedNumber = maskitoParseNumber(element.value, decimalSeparator);
    const clampedNumber = clamp(parsedNumber, min, max);
    if (!Number.isNaN(parsedNumber) && parsedNumber !== clampedNumber) {
      element.value = (0,_maskito_core__WEBPACK_IMPORTED_MODULE_0__.maskitoTransform)(stringifyNumberWithoutExp(clampedNumber), options);
      element.dispatchEvent(new Event('input'));
    }
  }, {
    capture: true
  });
}

/**
 * It pads EMPTY integer part with zero if decimal parts exists.
 * It works on blur event only!
 * @example 1|,23 => Backspace => Blur => 0,23
 */

function createNotEmptyIntegerPlugin(decimalSeparator) {
  return maskitoEventHandler('blur', element => {
    const newValue = element.value.replace(new RegExp(`^(\\D+)?${escapeRegExp(decimalSeparator)}`), `$10${decimalSeparator}`);
    if (newValue !== element.value) {
      element.value = newValue;
      element.dispatchEvent(new Event('input'));
    }
  }, {
    capture: true
  });
}
function maskitoNumberOptionsGenerator({
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  precision = 0,
  thousandSeparator = CHAR_NO_BREAK_SPACE,
  decimalSeparator = '.',
  decimalPseudoSeparators,
  decimalZeroPadding = false,
  prefix = '',
  postfix = ''
} = {}) {
  const pseudoMinuses = [CHAR_HYPHEN, CHAR_EN_DASH, CHAR_EM_DASH].filter(char => char !== thousandSeparator && char !== decimalSeparator);
  const validatedDecimalPseudoSeparators = validateDecimalPseudoSeparators({
    decimalSeparator,
    thousandSeparator,
    decimalPseudoSeparators
  });
  return Object.assign(Object.assign({}, _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS), {
    mask: generateMaskExpression({
      decimalSeparator,
      precision,
      thousandSeparator,
      prefix,
      postfix,
      isNegativeAllowed: min < 0
    }),
    preprocessors: [createInitializationOnlyPreprocessor({
      decimalSeparator,
      decimalPseudoSeparators: validatedDecimalPseudoSeparators,
      pseudoMinuses
    }), createPseudoCharactersPreprocessor(CHAR_MINUS, pseudoMinuses), createPseudoCharactersPreprocessor(decimalSeparator, validatedDecimalPseudoSeparators), createNotEmptyIntegerPartPreprocessor({
      decimalSeparator,
      precision
    }), createNonRemovableCharsDeletionPreprocessor({
      decimalSeparator,
      decimalZeroPadding,
      thousandSeparator
    }), createZeroPrecisionPreprocessor(precision, decimalSeparator), createRepeatedDecimalSeparatorPreprocessor(decimalSeparator)],
    postprocessors: [createMinMaxPostprocessor({
      decimalSeparator,
      min,
      max
    }), maskitoPrefixPostprocessorGenerator(prefix), maskitoPostfixPostprocessorGenerator(postfix), createThousandSeparatorPostprocessor({
      decimalSeparator,
      thousandSeparator,
      prefix,
      postfix
    }), createDecimalZeroPaddingPostprocessor({
      decimalSeparator,
      decimalZeroPadding,
      precision,
      postfix
    })],
    plugins: [createLeadingZeroesValidationPlugin(decimalSeparator, thousandSeparator), createNotEmptyIntegerPlugin(decimalSeparator), createMinMaxPlugin({
      min,
      max,
      decimalSeparator
    })],
    overwriteMode: decimalZeroPadding ? ({
      value,
      selection: [from]
    }) => from <= value.indexOf(decimalSeparator) ? 'shift' : 'replace' : 'shift'
  });
}
function createMaxValidationPreprocessor(timeSegmentMaxValues) {
  const paddedMaxValues = padTimeSegments(timeSegmentMaxValues);
  const invalidCharsRegExp = new RegExp(`[^\\d${TIME_FIXED_CHARACTERS.map(escapeRegExp).join('')}]+`);
  return ({
    elementState,
    data
  }, actionType) => {
    if (actionType === 'deleteBackward' || actionType === 'deleteForward') {
      return {
        elementState,
        data
      };
    }
    const {
      value,
      selection
    } = elementState;
    if (actionType === 'validation') {
      const {
        validatedTimeString,
        updatedTimeSelection
      } = validateTimeString({
        timeString: value,
        paddedMaxValues,
        offset: 0,
        selection
      });
      return {
        elementState: {
          value: validatedTimeString,
          selection: updatedTimeSelection
        },
        data
      };
    }
    const newCharacters = data.replace(invalidCharsRegExp, '');
    const [from, rawTo] = selection;
    let to = rawTo + newCharacters.length; // to be conformed with `overwriteMode: replace`

    const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);
    const {
      validatedTimeString,
      updatedTimeSelection
    } = validateTimeString({
      timeString: newPossibleValue,
      paddedMaxValues,
      offset: 0,
      selection: [from, to]
    });
    if (newPossibleValue && !validatedTimeString) {
      return {
        elementState,
        data: ''
      }; // prevent changes
    }

    to = updatedTimeSelection[1];
    const newData = validatedTimeString.slice(from, to);
    return {
      elementState: {
        selection,
        value: validatedTimeString.slice(0, from) + '0'.repeat(newData.length) + validatedTimeString.slice(to)
      },
      data: newData
    };
  };
}
function maskitoTimeOptionsGenerator({
  mode,
  timeSegmentMaxValues = {}
}) {
  const enrichedTimeSegmentMaxValues = Object.assign(Object.assign({}, DEFAULT_TIME_SEGMENT_MAX_VALUES), timeSegmentMaxValues);
  return Object.assign(Object.assign({}, _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS), {
    mask: Array.from(mode).map(char => TIME_FIXED_CHARACTERS.includes(char) ? char : /\d/),
    preprocessors: [createZeroPlaceholdersPreprocessor(), createMaxValidationPreprocessor(enrichedTimeSegmentMaxValues)],
    overwriteMode: 'replace'
  });
}


/***/ }),

/***/ 4950:
/*!**********************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-coercion.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tuiCoerceBooleanProperty: () => (/* binding */ tuiCoerceBooleanProperty)
/* harmony export */ });
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @example {@link https://material.angular.io/cdk/coercion/api#functions}
 */
function tuiCoerceBooleanProperty(value) {
  // If you don't mind "[object Object]" in your strings, then you will not need this rule.
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  return value !== null && typeof value !== `undefined` && `${value}` !== `false`;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-coercion.js.map

/***/ }),

/***/ 8029:
/*!***********************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-date-time.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATE_FILLER_LENGTH: () => (/* binding */ DATE_FILLER_LENGTH),
/* harmony export */   DATE_RANGE_FILLER_LENGTH: () => (/* binding */ DATE_RANGE_FILLER_LENGTH),
/* harmony export */   DAYS_IN_LEAP_YEAR: () => (/* binding */ DAYS_IN_LEAP_YEAR),
/* harmony export */   DAYS_IN_NORMAL_YEAR: () => (/* binding */ DAYS_IN_NORMAL_YEAR),
/* harmony export */   DAYS_IN_WEEK: () => (/* binding */ DAYS_IN_WEEK),
/* harmony export */   HOURS_IN_DAY: () => (/* binding */ HOURS_IN_DAY),
/* harmony export */   MAX_MONTH: () => (/* binding */ MAX_MONTH),
/* harmony export */   MAX_YEAR: () => (/* binding */ MAX_YEAR),
/* harmony export */   MILLISECONDS_IN_DAY: () => (/* binding */ MILLISECONDS_IN_DAY),
/* harmony export */   MILLISECONDS_IN_HOUR: () => (/* binding */ MILLISECONDS_IN_HOUR),
/* harmony export */   MILLISECONDS_IN_MINUTE: () => (/* binding */ MILLISECONDS_IN_MINUTE),
/* harmony export */   MILLISECONDS_IN_SECOND: () => (/* binding */ MILLISECONDS_IN_SECOND),
/* harmony export */   MINUTES_IN_HOUR: () => (/* binding */ MINUTES_IN_HOUR),
/* harmony export */   MIN_DAY: () => (/* binding */ MIN_DAY),
/* harmony export */   MIN_MONTH: () => (/* binding */ MIN_MONTH),
/* harmony export */   MIN_YEAR: () => (/* binding */ MIN_YEAR),
/* harmony export */   MONTHS_IN_YEAR: () => (/* binding */ MONTHS_IN_YEAR),
/* harmony export */   RANGE_SEPARATOR_CHAR: () => (/* binding */ RANGE_SEPARATOR_CHAR),
/* harmony export */   SECONDS_IN_MINUTE: () => (/* binding */ SECONDS_IN_MINUTE),
/* harmony export */   TUI_DATE_FORMAT: () => (/* binding */ TUI_DATE_FORMAT),
/* harmony export */   TUI_DATE_SEPARATOR: () => (/* binding */ TUI_DATE_SEPARATOR),
/* harmony export */   TUI_FIRST_DAY: () => (/* binding */ TUI_FIRST_DAY),
/* harmony export */   TUI_LAST_DAY: () => (/* binding */ TUI_LAST_DAY),
/* harmony export */   TuiDay: () => (/* binding */ TuiDay),
/* harmony export */   TuiDayRange: () => (/* binding */ TuiDayRange),
/* harmony export */   TuiMonth: () => (/* binding */ TuiMonth),
/* harmony export */   TuiMonthRange: () => (/* binding */ TuiMonthRange),
/* harmony export */   TuiTime: () => (/* binding */ TuiTime),
/* harmony export */   TuiYear: () => (/* binding */ TuiYear),
/* harmony export */   changeDateSeparator: () => (/* binding */ changeDateSeparator),
/* harmony export */   tuiDateClamp: () => (/* binding */ tuiDateClamp)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk/constants */ 7007);
/* harmony import */ var _taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk/utils */ 8715);
/* harmony import */ var _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk/classes */ 9838);
/* harmony import */ var _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk/enums */ 3448);
/* harmony import */ var _taiga_ui_cdk_exceptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk/exceptions */ 9663);
/* harmony import */ var _taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk/utils/math */ 5618);






function tuiDateClamp(date, min, max) {
  if (max && max < date) {
    return max;
  }
  if (min && min > date) {
    return min;
  }
  return date;
}
const DAYS_IN_WEEK = 7;
const DAYS_IN_NORMAL_YEAR = 365;
const DAYS_IN_LEAP_YEAR = 366;
const MONTHS_IN_YEAR = 12;
const MIN_DAY = 1;
const MIN_MONTH = 0;
const MAX_MONTH = 11;
const MIN_YEAR = 0;
const MAX_YEAR = 9999;
const RANGE_SEPARATOR_CHAR = `${_taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_0__.CHAR_NO_BREAK_SPACE}${_taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_0__.CHAR_EN_DASH}${_taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_0__.CHAR_NO_BREAK_SPACE}`;
const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;

/**
 * @internal 'dd.mm.yyyy'.length
 * Used in:
 * - {@link TuiInputDateComponent}
 * - {@link TuiInputDateRangeComponent}
 * - {@link TuiInputDateTimeComponent}
 */
const DATE_FILLER_LENGTH = 10;
/**
 * @internal
 * Used in {@link TuiInputDateRangeComponent}
 */
const DATE_RANGE_FILLER_LENGTH = 2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;

/**
 * Active date format for Taiga UI
 */
const TUI_DATE_FORMAT = (0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(`DMY`);

/**
 * Date separator for Taiga UI components
 */
const TUI_DATE_SEPARATOR = (0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(`.`);
const changeDateSeparator = (dateString, newDateSeparator) => dateString.replace(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);

/**
 * Immutable year object
 * @nosideeffects
 */
class TuiYear {
  constructor(year) {
    this.year = year;
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(TuiYear.isValidYear(year));
  }
  /**
   * Checks year for validity
   */
  static isValidYear(year) {
    return Number.isInteger(year) && (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiInRange)(year, MIN_YEAR, MAX_YEAR + 1);
  }
  /**
   * Check if passed year is a leap year
   */
  static isLeapYear(year) {
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(TuiYear.isValidYear(year));
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /**
   * Returns amount of leap years from year 0 to the passed one
   */
  static getAbsoluteLeapYears(year) {
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(TuiYear.isValidYear(year));
    return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
  }
  static lengthBetween(from, to) {
    return to.year - from.year;
  }
  /**
   * Normalizes year by clamping it between min and max years
   */
  static normalizeYearPart(year) {
    return (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiNormalizeToIntNumber)(year, MIN_YEAR, MAX_YEAR);
  }
  get formattedYear() {
    return String(this.year).padStart(4, `0`);
  }
  get isLeapYear() {
    return TuiYear.isLeapYear(this.year);
  }
  /**
   * Returns amount of leap years from year 0 to current
   */
  get absoluteLeapYears() {
    return TuiYear.getAbsoluteLeapYears(this.year);
  }
  /**
   * Passed year is after current
   */
  yearBefore({
    year
  }) {
    return this.year < year;
  }
  /**
   * Passed year is the same or after current
   */
  yearSameOrBefore({
    year
  }) {
    return this.year <= year;
  }
  /**
   * Passed year is the same as current
   */
  yearSame({
    year
  }) {
    return this.year === year;
  }
  /**
   * Passed year is either the same of before the current
   */
  yearSameOrAfter({
    year
  }) {
    return this.year >= year;
  }
  /**
   * Passed year is before current
   */
  yearAfter({
    year
  }) {
    return this.year > year;
  }
  /**
   * Immutably offsets year
   */
  append({
    year = 0
  }) {
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(Number.isInteger(year));
    const resultYear = this.year + year;
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(TuiYear.isValidYear(resultYear));
    return new TuiYear(resultYear);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  toJSON() {
    return this.formattedYear;
  }
}

/**
 * Immutable object consisting of year and month
 */
class TuiMonth extends TuiYear {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year, month) {
    super(year);
    this.month = month;
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(TuiMonth.isValidMonth(year, month));
  }
  /**
   * Tests month and year for validity
   */
  static isValidMonth(year, month) {
    return TuiYear.isValidYear(year) && TuiMonth.isValidMonthPart(month);
  }
  /**
   * Returns number of days in a month
   */
  static getMonthDaysCount(month, isLeapYear) {
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(TuiMonth.isValidMonthPart(month));
    switch (month) {
      case _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiMonthNumber.February:
        return isLeapYear ? 29 : 28;
      case _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiMonthNumber.April:
      case _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiMonthNumber.June:
      case _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiMonthNumber.September:
      case _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiMonthNumber.November:
        return 30;
      default:
        return 31;
    }
  }
  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  static currentLocal() {
    const nativeDate = new Date();
    return new TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }
  /**
   * Returns current month and year based on UTC
   */
  static currentUtc() {
    const nativeDate = new Date();
    return new TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }
  static lengthBetween(from, to) {
    const absoluteFrom = from.month + from.year * 12;
    const absoluteTo = to.month + to.year * 12;
    return absoluteTo - absoluteFrom;
  }
  /**
   * Normalizes number by clamping it between min and max month
   */
  static normalizeMonthPart(month) {
    return (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiNormalizeToIntNumber)(month, MIN_MONTH, MAX_MONTH);
  }
  /**
   * Tests month for validity
   */
  static isValidMonthPart(month) {
    return Number.isInteger(month) && (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiInRange)(month, MIN_MONTH, MAX_MONTH + 1);
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, `0`);
  }
  /**
   * Returns days in a month
   */
  get daysCount() {
    return TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }
  /**
   * Passed month and year are after current
   */
  monthBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
  }
  /**
   * Passed month and year are after or the same as current
   */
  monthSameOrBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
  }
  /**
   * Passed month and year are the same as current
   */
  monthSame(another) {
    return this.yearSame(another) && this.month === another.month;
  }
  /**
   * Passed month and year are either before or equal to current
   */
  monthSameOrAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
  }
  /**
   * Passed month and year are before current
   */
  monthAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
  }
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @return new month and year object as a result of offsetting current
   */
  append({
    year = 0,
    month = 0
  }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    return new TuiMonth(Math.floor(totalMonths / MONTHS_IN_YEAR), totalMonths % MONTHS_IN_YEAR);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
}

// TODO: Localized formatting
/**
 * Immutable date object, consisting of day, month and year
 */
class TuiDay extends TuiMonth {
  constructor(year, month, day) {
    super(year, month);
    this.day = day;
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(TuiDay.isValidDay(year, month, day));
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} based on local time zone
   */
  static fromLocalNativeDate(date) {
    return new TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} using UTC
   */
  static fromUtcNativeDate(date) {
    return new TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  /**
   * Check validity of year, month and day
   *
   * @param year
   * @param month
   * @param day
   * @return boolean validity
   */
  static isValidDay(year, month, day) {
    return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiInRange)(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
  }
  /**
   * Current day based on local time zone
   */
  static currentLocal() {
    const nativeDate = new Date();
    const year = nativeDate.getFullYear();
    const month = nativeDate.getMonth();
    const day = nativeDate.getDate();
    return new TuiDay(year, month, day);
  }
  /**
   * Returns current day based on UTC
   */
  static currentUtc() {
    const nativeDate = new Date();
    const year = nativeDate.getUTCFullYear();
    const month = nativeDate.getUTCMonth();
    const day = nativeDate.getUTCDate();
    return new TuiDay(year, month, day);
  }
  /**
   * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
   *
   * @param year any year value, including invalid
   * @param month any month value, including invalid (months start with 0)
   * @param day any day value, including invalid
   * @return normalized date
   */
  static normalizeOf(year, month, day) {
    const normalizedYear = TuiYear.normalizeYearPart(year);
    const normalizedMonth = TuiMonth.normalizeMonthPart(month);
    const normalizedDay = TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
    return new TuiDay(normalizedYear, normalizedMonth, normalizedDay);
  }
  static lengthBetween(from, to) {
    return Math.round((to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) / (1000 * 60 * 60 * 24));
  }
  static parseRawDateString(date, dateMode = `DMY`) {
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(date.length === DATE_FILLER_LENGTH, `[parseRawDateString]: wrong date string length`);
    switch (dateMode) {
      case `YMD`:
        return {
          day: parseInt(date.slice(8, 10), 10),
          month: parseInt(date.slice(5, 7), 10) - 1,
          year: parseInt(date.slice(0, 4), 10)
        };
      case `MDY`:
        return {
          day: parseInt(date.slice(3, 5), 10),
          month: parseInt(date.slice(0, 2), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
      default:
      case `DMY`:
        return {
          day: parseInt(date.slice(0, 2), 10),
          month: parseInt(date.slice(3, 5), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
    }
  }
  // TODO: Move month and year related code corresponding classes
  /**
   * Parsing a string with date with normalization
   *
   * @param rawDate date string
   * @param dateMode date format of the date string (DMY | MDY | YMD)
   * @return normalized date
   */
  static normalizeParse(rawDate, dateMode = `DMY`) {
    const {
      day,
      month,
      year
    } = this.parseRawDateString(rawDate, dateMode);
    return TuiDay.normalizeOf(year, month, day);
  }
  /**
   * Parsing a date stringified in a toJSON format
   * @param yearMonthDayString date string in format of YYYY-MM-DD
   * @return date
   * @throws exceptions if any part of the date is invalid
   */
  static jsonParse(yearMonthDayString) {
    const {
      day,
      month,
      year
    } = this.parseRawDateString(yearMonthDayString, `YMD`);
    if (!TuiYear.isValidYear(year)) {
      throw new _taiga_ui_cdk_exceptions__WEBPACK_IMPORTED_MODULE_5__.TuiInvalidYearException(year);
    }
    if (!TuiMonth.isValidMonth(year, month)) {
      throw new _taiga_ui_cdk_exceptions__WEBPACK_IMPORTED_MODULE_5__.TuiInvalidMonthException(month);
    }
    if (!Number.isInteger(day) || !(0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiInRange)(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) {
      throw new _taiga_ui_cdk_exceptions__WEBPACK_IMPORTED_MODULE_5__.TuiInvalidDayException(day);
    }
    return new TuiDay(year, month, day);
  }
  static normalizeDayPart(day, month, year) {
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(TuiMonth.isValidMonth(year, month));
    const monthDaysCount = TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year));
    return (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiNormalizeToIntNumber)(day, 1, monthDaysCount);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, `0`);
  }
  get isWeekend() {
    const dayOfWeek = this.dayOfWeek(false);
    return dayOfWeek === _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiDayOfWeek.Saturday || dayOfWeek === _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiDayOfWeek.Sunday;
  }
  /**
   * Returns day of week
   *
   * @param startFromMonday whether week starts from Monday and not from Sunday
   * @return day of week (from 0 to 6)
   */
  dayOfWeek(startFromMonday = true) {
    const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return dayOfWeek < 0 ? 6 : dayOfWeek;
  }
  /**
   * Passed date is after current
   */
  dayBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
  }
  /**
   * Passed date is after or equals to current
   */
  daySameOrBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
  }
  /**
   * Passed date is the same as current
   */
  daySame(another) {
    return this.monthSame(another) && this.day === another.day;
  }
  /**
   * Passed date is either before or the same as current
   */
  daySameOrAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
  }
  /**
   * Passed date is before current
   */
  dayAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
  }
  /**
   * Clamping date between two limits
   *
   * @param min
   * @param max
   * @return clamped date
   */
  dayLimit(min, max) {
    if (min !== null && this.dayBefore(min)) {
      return min;
    }
    if (max !== null && this.dayAfter(max)) {
      return max;
    }
    return this;
  }
  /**
   * Immutably alters current day by passed offset
   *
   * If resulting month has more days than original one, date is rounded to the maximum day
   * in the resulting month. Offset of days will be calculated based on the resulted year and month
   * to not interfere with parent classes methods
   *
   * @param offset
   * @return new date object as a result of offsetting current
   */
  append({
    year = 0,
    month = 0,
    day = 0
  }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
    let months = totalMonths % MONTHS_IN_YEAR;
    let days = Math.min(this.day, TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) + day;
    while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
      days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
      if (months === _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiMonthNumber.December) {
        years++;
        months = _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiMonthNumber.January;
      } else {
        months++;
      }
    }
    while (days < MIN_DAY) {
      if (months === _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiMonthNumber.January) {
        years--;
        months = _taiga_ui_cdk_enums__WEBPACK_IMPORTED_MODULE_4__.TuiMonthNumber.December;
      } else {
        months--;
      }
      days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    }
    return new TuiDay(years, months, days);
  }
  /**
   * Returns formatted whole date
   */
  getFormattedDay(dateFormat, separator) {
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(separator.length === 1, `Separator should consist of only 1 symbol`);
    const dd = this.formattedDayPart;
    const mm = this.formattedMonthPart;
    const yyyy = this.formattedYear;
    switch (dateFormat) {
      case `YMD`:
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case `MDY`:
        return `${mm}${separator}${dd}${separator}${yyyy}`;
      case `DMY`:
      default:
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }
  toString(dateFormat = `DMY`, separator = `.`) {
    return this.getFormattedDay(dateFormat, separator);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month, this.day);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
}

/**
 * An immutable range of two {@link TuiMonth} objects
 */
class TuiMonthRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(from.monthSameOrBefore(to));
  }
  static sort(month1, month2) {
    return month1.monthSameOrBefore(month2) ? new TuiMonthRange(month1, month2) : new TuiMonthRange(month2, month1);
  }
  get isSingleMonth() {
    return this.from.monthSame(this.to);
  }
  monthSame(another) {
    return this.from.monthSame(another.from) && this.to.monthSame(another.to);
  }
  toString() {
    return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
  }
}

/**
 * An immutable range of two {@link TuiDay} objects
 */
class TuiDayRange extends TuiMonthRange {
  constructor(from, to) {
    super(from, to);
    this.from = from;
    this.to = to;
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(from.daySameOrBefore(to));
  }
  /**
   * Creates range from two days after sorting them
   *
   * @param day1
   * @param day2
   * @return new range with sorted days
   */
  static sort(day1, day2) {
    return day1.daySameOrBefore(day2) ? new TuiDayRange(day1, day2) : new TuiDayRange(day2, day1);
  }
  /**
   * Parse and correct a day range in string format
   *
   * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
   * @param dateMode {@link TuiDateMode}
   * @return normalized day range object
   */
  static normalizeParse(rangeString, dateMode = `DMY`) {
    const leftDay = TuiDay.normalizeParse(rangeString.slice(0, DATE_FILLER_LENGTH), dateMode);
    if (rangeString.length < DATE_RANGE_FILLER_LENGTH) {
      return new TuiDayRange(leftDay, leftDay);
    }
    return TuiDayRange.sort(leftDay, TuiDay.normalizeParse(rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length), dateMode));
  }
  get isSingleDay() {
    return this.from.daySame(this.to);
  }
  /**
   * Tests ranges for identity
   *
   * @param another second range to test against current
   * @return `true` if days are identical
   */
  daySame(another) {
    return this.from.daySame(another.from) && this.to.daySame(another.to);
  }
  /**
   * Locks range between two days included, or limits from one side if the other is null
   *
   * @param min
   * @param max
   * @return range — clamped range
   */
  dayLimit(min, max) {
    return new TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
  }
  /**
   * Human readable format.
   */
  getFormattedDayRange(dateFormat, dateSeparator) {
    const from = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);
    return `${from}${RANGE_SEPARATOR_CHAR}${to}`;
  }
  toString(dateFormat = `DMY`, dateSeparator = `.`) {
    const from = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);
    return `${from}${RANGE_SEPARATOR_CHAR}${to}`;
  }
}
const TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);
const TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);

/**
 * Immutable time object with hours, minutes, seconds and ms
 */
class TuiTime {
  constructor(hours, minutes, seconds = 0, ms = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.ms = ms;
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(TuiTime.isValidTime(hours, minutes, seconds, ms), `Time must be real, but got:`, hours, minutes, seconds, ms);
  }
  /**
   * Checks if time is valid
   */
  static isValidTime(hours, minutes, seconds = 0, ms = 0) {
    return Number.isInteger(hours) && (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiInRange)(hours, 0, HOURS_IN_DAY) && Number.isInteger(minutes) && (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiInRange)(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiInRange)(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && (0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiInRange)(ms, 0, 1000);
  }
  /**
   * Current UTC time.
   */
  static current() {
    return TuiTime.fromAbsoluteMilliseconds(Date.now() % MILLISECONDS_IN_DAY);
  }
  /**
   * Current time in local timezone
   */
  static currentLocal() {
    const date = new Date();
    return TuiTime.fromAbsoluteMilliseconds((Date.now() - date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE) % MILLISECONDS_IN_DAY);
  }
  /**
   * Calculates TuiTime from milliseconds
   */
  static fromAbsoluteMilliseconds(milliseconds) {
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert(Number.isInteger(milliseconds));
    ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_2__.tuiAssert.assert((0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_3__.tuiInRange)(milliseconds, 0, MILLISECONDS_IN_DAY), `Milliseconds must be below ${MILLISECONDS_IN_DAY} (milliseconds in a day).`);
    const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor(milliseconds % MILLISECONDS_IN_HOUR / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE / 1000) || 0;
    const ms = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE % 1000) || 0;
    return new TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Parses string into TuiTime object
   */
  static fromString(time) {
    const hours = Number(time.slice(0, 2));
    const minutes = Number(time.slice(3, 5));
    const seconds = Number(time.slice(6, 8)) || 0;
    const ms = Number(time.slice(9, 12)) || 0;
    return new TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Converts Date object into TuiTime
   * @param date
   */
  static fromLocalNativeDate(date) {
    return new TuiTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  }
  /**
   * Shifts time by hours and minutes
   */
  shift({
    hours = 0,
    minutes = 0,
    seconds = 0,
    ms = 0
  }) {
    const newMs = (1000 + this.ms + ms % 1000) % 1000;
    const secondsInMs = ms < 0 ? Math.ceil(ms / 1000) : Math.floor(ms / 1000);
    const secondsToAdd = secondsInMs + seconds;
    const newSeconds = (60 + this.seconds + secondsToAdd % 60) % 60;
    const minutesInSeconds = secondsToAdd < 0 ? Math.ceil(secondsToAdd / 60) : Math.floor(secondsToAdd / 60);
    const minutesToAdd = minutesInSeconds + minutes;
    const newMinutes = (60 + this.minutes + minutesToAdd % 60) % 60;
    const hoursInMinutes = minutesToAdd < 0 ? Math.ceil(minutesToAdd / 60) : Math.floor(minutesToAdd / 60);
    const hoursToAdd = hoursInMinutes + hours;
    const newHours = (24 + this.hours + hoursToAdd % 24) % 24;
    return new TuiTime(newHours, newMinutes, newSeconds, newMs);
  }
  /**
   * Converts TuiTime to string
   */
  toString(mode) {
    const needAddMs = mode === `HH:MM:SS.MSS` || !mode && this.ms > 0;
    const needAddSeconds = needAddMs || mode === `HH:MM:SS` || !mode && this.seconds > 0;
    return `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}` + `${needAddSeconds ? `:${this.formatTime(this.seconds)}` : ``}` + `${needAddMs ? `.${this.formatTime(this.ms, 3)}` : ``}`;
  }
  valueOf() {
    return this.toAbsoluteMilliseconds();
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  /**
   * Converts TuiTime to milliseconds
   */
  toAbsoluteMilliseconds() {
    return this.hours * MILLISECONDS_IN_HOUR + this.minutes * MILLISECONDS_IN_MINUTE + this.seconds * 1000 + this.ms;
  }
  formatTime(time, digits = 2) {
    return String(time).padStart(digits, `0`);
  }
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-date-time.js.map

/***/ }),

/***/ 9644:
/*!***********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-auto-focus.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractTuiAutofocusHandler: () => (/* binding */ AbstractTuiAutofocusHandler),
/* harmony export */   TUI_AUTOFOCUS_DEFAULT_OPTIONS: () => (/* binding */ TUI_AUTOFOCUS_DEFAULT_OPTIONS),
/* harmony export */   TUI_AUTOFOCUS_HANDLER: () => (/* binding */ TUI_AUTOFOCUS_HANDLER),
/* harmony export */   TUI_AUTOFOCUS_OPTIONS: () => (/* binding */ TUI_AUTOFOCUS_OPTIONS),
/* harmony export */   TUI_AUTOFOCUS_PROVIDERS: () => (/* binding */ TUI_AUTOFOCUS_PROVIDERS),
/* harmony export */   TuiAutoFocusDirective: () => (/* binding */ TuiAutoFocusDirective),
/* harmony export */   TuiAutoFocusModule: () => (/* binding */ TuiAutoFocusModule),
/* harmony export */   TuiDefaultAutofocusHandler: () => (/* binding */ TuiDefaultAutofocusHandler),
/* harmony export */   TuiIosAutofocusHandler: () => (/* binding */ TuiIosAutofocusHandler),
/* harmony export */   TuiSynchronousAutofocusHandler: () => (/* binding */ TuiSynchronousAutofocusHandler),
/* harmony export */   tuiAutoFocusOptionsProvider: () => (/* binding */ tuiAutoFocusOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/cdk/coercion */ 4950);
/* harmony import */ var _taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/cdk/services */ 704);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 883);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9022);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9348);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4923);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7898);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-web-apis/common */ 5393);
/* harmony import */ var _taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk/tokens */ 1976);
/* harmony import */ var _taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/cdk/utils */ 8715);
/* harmony import */ var _taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk/constants */ 7007);
/* harmony import */ var _taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk/utils */ 963);













let AbstractTuiAutofocusHandler = /*#__PURE__*/(() => {
  class AbstractTuiAutofocusHandler {
    constructor(focusable, el) {
      this.focusable = focusable;
      this.el = el;
    }
    get element() {
      var _a;
      return ((_a = this.focusable) === null || _a === void 0 ? void 0 : _a.nativeFocusableElement) || this.el.nativeElement;
    }
    get isTextFieldElement() {
      return this.element.matches(`input, textarea, [contenteditable]`);
    }
  }
  AbstractTuiAutofocusHandler.ɵfac = function AbstractTuiAutofocusHandler_Factory(t) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
  };
  AbstractTuiAutofocusHandler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: AbstractTuiAutofocusHandler
  });
  return AbstractTuiAutofocusHandler;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = `.ng-animating`;
let TuiDefaultAutofocusHandler = /*#__PURE__*/(() => {
  class TuiDefaultAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(focusable, el, animationFrame$) {
      super(focusable, el);
      this.animationFrame$ = animationFrame$;
    }
    setFocus() {
      if (this.isTextFieldElement) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.race)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(TIMEOUT), this.animationFrame$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.throttleTime)(_taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_4__.POLLING_TIME), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => this.element.closest(NG_ANIMATION_SELECTOR)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.skipWhile)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1))).subscribe(() => this.element.focus({
          preventScroll: true
        }));
      } else {
        this.element.focus({
          preventScroll: true
        });
      }
    }
  }
  TuiDefaultAutofocusHandler.ɵfac = function TuiDefaultAutofocusHandler_Factory(t) {
    return new (t || TuiDefaultAutofocusHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_8__.TUI_FOCUSABLE_ITEM_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_FRAME));
  };
  TuiDefaultAutofocusHandler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDefaultAutofocusHandler,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiDefaultAutofocusHandler;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TEXTFIELD_ATTRS = [`type`, `inputMode`, `autocomplete`, `accept`, `min`, `max`, `step`, `pattern`, `size`, `maxlength`];
let TuiIosAutofocusHandler = /*#__PURE__*/(() => {
  class TuiIosAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(focusable, el, renderer, zone, win) {
      super(focusable, el);
      this.renderer = renderer;
      this.zone = zone;
      this.win = win;
      this.patchCssStyles();
    }
    setFocus() {
      if (this.isTextFieldElement) {
        this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
      } else {
        this.element.focus({
          preventScroll: true
        });
      }
    }
    iosWebkitAutofocus() {
      var _a;
      const fakeInput = this.makeFakeInput();
      const duration = this.getDurationTimeBeforeFocus();
      let fakeFocusTimeoutId = 0;
      let elementFocusTimeoutId = 0;
      const blurHandler = () => fakeInput.focus({
        preventScroll: true
      });
      const focusHandler = () => {
        clearTimeout(fakeFocusTimeoutId);
        fakeFocusTimeoutId = this.win.setTimeout(() => {
          clearTimeout(elementFocusTimeoutId);
          fakeInput.removeEventListener(`blur`, blurHandler);
          fakeInput.removeEventListener(`focus`, focusHandler);
          elementFocusTimeoutId = this.win.setTimeout(() => {
            this.element.focus({
              preventScroll: false
            });
            fakeInput.remove();
          }, duration);
        });
      };
      fakeInput.addEventListener(`blur`, blurHandler, {
        once: true
      });
      fakeInput.addEventListener(`focus`, focusHandler);
      if (this.insideDialog()) {
        this.win.document.body.appendChild(fakeInput);
      } else {
        (_a = this.element.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(fakeInput);
      }
      fakeInput.focus({
        preventScroll: true
      });
    }
    /**
     * @note:
     * emulate textfield position in layout with cursor
     * before focus to real textfield element
     *
     * required note:
     * [fakeInput.readOnly = true] ~
     * don't use {readOnly: true} value, it's doesn't work for emulate autofill
     *
     * [fakeInput.style.opacity = 0] ~
     * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
     *
     * [fakeInput.style.fontSize = 16px] ~
     * disable possible auto zoom
     *
     * [fakeInput.style.top/left] ~
     * emulate position cursor before focus to real textfield element
     */
    makeFakeInput() {
      const fakeInput = this.renderer.createElement(`input`);
      const rect = this.element.getBoundingClientRect();
      this.patchFakeInputFromFocusableElement(fakeInput);
      fakeInput.style.height = (0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_10__.tuiPx)(rect.height);
      fakeInput.style.width = (0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_10__.tuiPx)(rect.width / 2);
      fakeInput.style.position = `fixed`;
      fakeInput.style.zIndex = `-99999999`;
      fakeInput.style.caretColor = `transparent`;
      fakeInput.style.border = `none`;
      fakeInput.style.outline = `none`;
      fakeInput.style.color = `transparent`;
      fakeInput.style.background = `transparent`;
      fakeInput.style.cursor = `none`;
      fakeInput.style.fontSize = (0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_10__.tuiPx)(16);
      fakeInput.style.top = (0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_10__.tuiPx)(rect.top);
      fakeInput.style.left = (0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_10__.tuiPx)(rect.left);
      return fakeInput;
    }
    getDurationTimeBeforeFocus() {
      return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue(`--tui-duration`)) || 0;
    }
    /**
     * @note:
     * unfortunately, in older versions of iOS
     * there is a bug that the fake input cursor
     * will move along with the dialog animation
     * and then that dialog will be shaking
     */
    insideDialog() {
      return !!this.element.closest(`tui-dialog`);
    }
    /**
     * @note:
     * This is necessary so that the viewport isn't recalculated
     * and then the dialogs don't shake.
     *
     * Also, we need to fixed height viewport,
     * so that when focusing the dialogs don't shake
     */
    patchCssStyles() {
      const doc = this.win.document;
      for (const element of [doc.documentElement, doc.body]) {
        element.style.setProperty(`overflow`, `auto`);
        element.style.setProperty(`height`, `100%`);
      }
    }
    /**
     * @note:
     * inherit basic attributes values from real input
     * for help iOS detect what do you want see on keyboard,
     * for example [inputMode=numeric, autocomplete=cc-number]
     */
    patchFakeInputFromFocusableElement(fakeInput) {
      TEXTFIELD_ATTRS.forEach(attr => {
        const value = this.element.getAttribute(attr);
        if ((0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_11__.tuiIsPresent)(value)) {
          fakeInput.setAttribute(attr, value);
        }
      });
    }
  }
  TuiIosAutofocusHandler.ɵfac = function TuiIosAutofocusHandler_Factory(t) {
    return new (t || TuiIosAutofocusHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_8__.TUI_FOCUSABLE_ITEM_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_9__.WINDOW));
  };
  TuiIosAutofocusHandler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiIosAutofocusHandler,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiIosAutofocusHandler;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_AUTOFOCUS_DEFAULT_OPTIONS = {
  delay: NaN // NaN = no delay/sync
};

const TUI_AUTOFOCUS_OPTIONS = (0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_11__.tuiCreateToken)(TUI_AUTOFOCUS_DEFAULT_OPTIONS);
function tuiAutoFocusOptionsProvider(options) {
  return (0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_11__.tuiProvideOptions)(TUI_AUTOFOCUS_OPTIONS, options, TUI_AUTOFOCUS_DEFAULT_OPTIONS);
}
const TUI_AUTOFOCUS_HANDLER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(`[TUI_AUTOFOCUS_HANDLER]`);
const TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  useFactory: (focusable, el, animationFrame$, renderer, zone, win, isIos) => isIos ? new TuiIosAutofocusHandler(focusable, el, renderer, zone, win) : new TuiDefaultAutofocusHandler(focusable, el, animationFrame$),
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self(), _taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_8__.TUI_FOCUSABLE_ITEM_ACCESSOR], _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_FRAME, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_9__.WINDOW, _taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_8__.TUI_IS_IOS]
}, _taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_12__.TuiDestroyService];
let TuiAutoFocusDirective = /*#__PURE__*/(() => {
  class TuiAutoFocusDirective {
    constructor(handler, options, destroy$) {
      this.handler = handler;
      this.options = options;
      this.destroy$ = destroy$;
      this.autoFocus = true;
    }
    ngAfterViewInit() {
      if ((0,_taiga_ui_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.tuiCoerceBooleanProperty)(this.autoFocus)) {
        this.focus();
      }
    }
    focus() {
      if (Number.isNaN(this.options.delay)) {
        void Promise.resolve().then(() => this.handler.setFocus());
      } else {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(this.options.delay).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(() => this.handler.setFocus());
      }
    }
  }
  TuiAutoFocusDirective.ɵfac = function TuiAutoFocusDirective_Factory(t) {
    return new (t || TuiAutoFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_AUTOFOCUS_HANDLER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_AUTOFOCUS_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_12__.TuiDestroyService, 2));
  };
  TuiAutoFocusDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiAutoFocusDirective,
    selectors: [["", "tuiAutoFocus", ""]],
    inputs: {
      autoFocus: ["tuiAutoFocus", "autoFocus"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"](TUI_AUTOFOCUS_PROVIDERS)]
  });
  return TuiAutoFocusDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiAutoFocusModule = /*#__PURE__*/(() => {
  class TuiAutoFocusModule {}
  TuiAutoFocusModule.ɵfac = function TuiAutoFocusModule_Factory(t) {
    return new (t || TuiAutoFocusModule)();
  };
  TuiAutoFocusModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiAutoFocusModule
  });
  TuiAutoFocusModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return TuiAutoFocusModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiSynchronousAutofocusHandler = /*#__PURE__*/(() => {
  class TuiSynchronousAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(focusable, el) {
      super(focusable, el);
    }
    setFocus() {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  TuiSynchronousAutofocusHandler.ɵfac = function TuiSynchronousAutofocusHandler_Factory(t) {
    return new (t || TuiSynchronousAutofocusHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_8__.TUI_FOCUSABLE_ITEM_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  TuiSynchronousAutofocusHandler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiSynchronousAutofocusHandler,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiSynchronousAutofocusHandler;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-auto-focus.js.map

/***/ }),

/***/ 1006:
/*!***********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-autofilled.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiAutofilledDirective: () => (/* binding */ TuiAutofilledDirective),
/* harmony export */   TuiAutofilledModule: () => (/* binding */ TuiAutofilledModule),
/* harmony export */   TuiAutofilledStyleComponent: () => (/* binding */ TuiAutofilledStyleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk/services */ 704);




let TuiAutofilledStyleComponent = /*#__PURE__*/(() => {
  class TuiAutofilledStyleComponent {}
  TuiAutofilledStyleComponent.ɵfac = function TuiAutofilledStyleComponent_Factory(t) {
    return new (t || TuiAutofilledStyleComponent)();
  };
  TuiAutofilledStyleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiAutofilledStyleComponent,
    selectors: [["ng-component"]],
    hostAttrs: [1, "tui-autofilled-styles"],
    decls: 0,
    vars: 0,
    template: function TuiAutofilledStyleComponent_Template(rf, ctx) {},
    styles: [".tui-autofill input,input.tui-autofill{transition:box-shadow .01s}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAutofilledStyleComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiAutofilledDirective = /*#__PURE__*/(() => {
  class TuiAutofilledDirective {
    constructor(directiveStyles) {
      this.autofilled = false;
      this.tuiAutofilledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      directiveStyles.addComponent(TuiAutofilledStyleComponent);
    }
    transitionStartHandler({
      propertyName,
      target
    }) {
      var _a;
      const matchedAutofill = propertyName.includes('box-shadow') && ((_a = target) === null || _a === void 0 ? void 0 : _a.matches('input'));
      if (matchedAutofill) {
        this.autofilled = !this.autofilled;
        this.tuiAutofilledChange.emit(this.autofilled);
      }
    }
  }
  TuiAutofilledDirective.ɵfac = function TuiAutofilledDirective_Factory(t) {
    return new (t || TuiAutofilledDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_1__.TuiDirectiveStylesService));
  };
  TuiAutofilledDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiAutofilledDirective,
    selectors: [["", "tuiAutofilledChange", ""]],
    hostAttrs: [1, "tui-autofill"],
    hostVars: 2,
    hostBindings: function TuiAutofilledDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionstart", function TuiAutofilledDirective_transitionstart_HostBindingHandler($event) {
          return ctx.transitionStartHandler($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_autofilled", ctx.autofilled);
      }
    },
    outputs: {
      tuiAutofilledChange: "tuiAutofilledChange"
    }
  });
  return TuiAutofilledDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiAutofilledModule = /*#__PURE__*/(() => {
  class TuiAutofilledModule {}
  TuiAutofilledModule.ɵfac = function TuiAutofilledModule_Factory(t) {
    return new (t || TuiAutofilledModule)();
  };
  TuiAutofilledModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiAutofilledModule
  });
  TuiAutofilledModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return TuiAutofilledModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-autofilled.js.map

/***/ }),

/***/ 5690:
/*!********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-checked.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiCheckedDirective: () => (/* binding */ TuiCheckedDirective),
/* harmony export */   TuiCheckedModule: () => (/* binding */ TuiCheckedModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);


let TuiCheckedDirective = /*#__PURE__*/(() => {
  class TuiCheckedDirective {
    constructor() {
      this.indeterminate = false;
      this.checked = false;
      this.tuiCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get isChecked() {
      return this.checked;
    }
    get isIndeterminate() {
      return this.indeterminate;
    }
    set tuiChecked(checked) {
      this.checked = checked || false;
      this.indeterminate = checked === null;
    }
    onChange({
      checked
    }) {
      this.checked = checked;
      this.indeterminate = false;
      this.tuiCheckedChange.emit(checked);
    }
  }
  TuiCheckedDirective.ɵfac = function TuiCheckedDirective_Factory(t) {
    return new (t || TuiCheckedDirective)();
  };
  TuiCheckedDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiCheckedDirective,
    selectors: [["input", "tuiChecked", ""], ["input", "tuiCheckedChange", ""]],
    hostVars: 2,
    hostBindings: function TuiCheckedDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TuiCheckedDirective_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("checked", ctx.isChecked)("indeterminate", ctx.isIndeterminate);
      }
    },
    inputs: {
      tuiChecked: "tuiChecked"
    },
    outputs: {
      tuiCheckedChange: "tuiCheckedChange"
    }
  });
  return TuiCheckedDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiCheckedModule = /*#__PURE__*/(() => {
  class TuiCheckedModule {}
  TuiCheckedModule.ɵfac = function TuiCheckedModule_Factory(t) {
    return new (t || TuiCheckedModule)();
  };
  TuiCheckedModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiCheckedModule
  });
  TuiCheckedModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return TuiCheckedModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-checked.js.map

/***/ }),

/***/ 713:
/*!**************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focus-visible.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiFocusVisibleDirective: () => (/* binding */ TuiFocusVisibleDirective),
/* harmony export */   TuiFocusVisibleModule: () => (/* binding */ TuiFocusVisibleModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk/services */ 704);





/**
 * Directive to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
let TuiFocusVisibleDirective = /*#__PURE__*/(() => {
  class TuiFocusVisibleDirective {
    constructor(tuiFocusVisibleChange) {
      this.tuiFocusVisibleChange = tuiFocusVisibleChange;
    }
  }
  TuiFocusVisibleDirective.ɵfac = function TuiFocusVisibleDirective_Factory(t) {
    return new (t || TuiFocusVisibleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_1__.TuiFocusVisibleService));
  };
  TuiFocusVisibleDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiFocusVisibleDirective,
    selectors: [["", "tuiFocusVisibleChange", ""]],
    outputs: {
      tuiFocusVisibleChange: "tuiFocusVisibleChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_1__.TuiDestroyService, _taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_1__.TuiFocusVisibleService])]
  });
  return TuiFocusVisibleDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiFocusVisibleModule = /*#__PURE__*/(() => {
  class TuiFocusVisibleModule {}
  TuiFocusVisibleModule.ɵfac = function TuiFocusVisibleModule_Factory(t) {
    return new (t || TuiFocusVisibleModule)();
  };
  TuiFocusVisibleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiFocusVisibleModule
  });
  TuiFocusVisibleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return TuiFocusVisibleModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-focus-visible.js.map

/***/ }),

/***/ 160:
/*!**********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focusable.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiFocusableDirective: () => (/* binding */ TuiFocusableDirective),
/* harmony export */   TuiFocusableModule: () => (/* binding */ TuiFocusableModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);



/**
 * Abstraction over `tabindex`
 */
let TuiFocusableDirective = /*#__PURE__*/(() => {
  class TuiFocusableDirective {
    constructor() {
      /**
       * Element can be focused with keyboard
       */
      this.focusable = true;
    }
    get tabIndex() {
      return this.focusable ? 0 : -1;
    }
  }
  TuiFocusableDirective.ɵfac = function TuiFocusableDirective_Factory(t) {
    return new (t || TuiFocusableDirective)();
  };
  TuiFocusableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiFocusableDirective,
    selectors: [["", "tuiFocusable", ""]],
    hostVars: 1,
    hostBindings: function TuiFocusableDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);
      }
    },
    inputs: {
      focusable: ["tuiFocusable", "focusable"]
    }
  });
  return TuiFocusableDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiFocusableModule = /*#__PURE__*/(() => {
  class TuiFocusableModule {}
  TuiFocusableModule.ɵfac = function TuiFocusableModule_Factory(t) {
    return new (t || TuiFocusableModule)();
  };
  TuiFocusableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiFocusableModule
  });
  TuiFocusableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return TuiFocusableModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-focusable.js.map

/***/ }),

/***/ 5974:
/*!********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focused.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiFocusedDirective: () => (/* binding */ TuiFocusedDirective),
/* harmony export */   TuiFocusedModule: () => (/* binding */ TuiFocusedModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk/observables */ 4521);
/* harmony import */ var _taiga_ui_cdk_utils_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk/utils/focus */ 6470);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1886);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9348);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8509);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1802);







/**
 * Directive to monitor focus/blur status, works with focusIn/focus-out
 * instead of focus/blur to sync events order with Internet Explorer and
 * other focus related directives that require bubbling
 */
let TuiFocusedDirective = /*#__PURE__*/(() => {
  class TuiFocusedDirective {
    constructor({
      nativeElement
    }, zone) {
      this.tuiFocusedChange = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.merge)((0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_1__.tuiTypedFromEvent)(nativeElement, 'focusin'), (0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_1__.tuiTypedFromEvent)(nativeElement, 'focusout')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => (0,_taiga_ui_cdk_utils_focus__WEBPACK_IMPORTED_MODULE_3__.tuiIsNativeFocused)(nativeElement)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.skip)(1), (0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_1__.tuiZoneOptimized)(zone));
    }
  }
  TuiFocusedDirective.ɵfac = function TuiFocusedDirective_Factory(t) {
    return new (t || TuiFocusedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
  };
  TuiFocusedDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
    type: TuiFocusedDirective,
    selectors: [["", "tuiFocusedChange", ""]],
    outputs: {
      tuiFocusedChange: "tuiFocusedChange"
    }
  });
  return TuiFocusedDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiFocusedModule = /*#__PURE__*/(() => {
  class TuiFocusedModule {}
  TuiFocusedModule.ɵfac = function TuiFocusedModule_Factory(t) {
    return new (t || TuiFocusedModule)();
  };
  TuiFocusedModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: TuiFocusedModule
  });
  TuiFocusedModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({});
  return TuiFocusedModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-focused.js.map

/***/ }),

/***/ 8159:
/*!********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-hovered.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiHoveredDirective: () => (/* binding */ TuiHoveredDirective),
/* harmony export */   TuiHoveredModule: () => (/* binding */ TuiHoveredModule),
/* harmony export */   TuiHoveredService: () => (/* binding */ TuiHoveredService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk/constants */ 7007);
/* harmony import */ var _taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk/observables */ 4521);
/* harmony import */ var _taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk/utils */ 7899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7112);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1886);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9348);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8509);








function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !(0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_0__.tuiIsElement)(relatedTarget) || !(0,_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_0__.tuiIsElement)(currentTarget) || !currentTarget.contains(relatedTarget);
}
let TuiHoveredService = /*#__PURE__*/(() => {
  class TuiHoveredService extends rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable {
    constructor(el, zone) {
      super(subscriber => this.stream$.subscribe(subscriber));
      this.el = el;
      this.zone = zone;
      this.stream$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_3__.tuiTypedFromEvent)(this.el.nativeElement, `mouseenter`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_5__.ALWAYS_TRUE_HANDLER)), (0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_3__.tuiTypedFromEvent)(this.el.nativeElement, `mouseleave`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_5__.ALWAYS_FALSE_HANDLER)),
      // Hello, Safari
      (0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_3__.tuiTypedFromEvent)(this.el.nativeElement, `mouseout`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(movedOut), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_taiga_ui_cdk_constants__WEBPACK_IMPORTED_MODULE_5__.ALWAYS_FALSE_HANDLER))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_3__.tuiZoneOptimized)(this.zone));
    }
  }
  TuiHoveredService.ɵfac = function TuiHoveredService_Factory(t) {
    return new (t || TuiHoveredService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone));
  };
  TuiHoveredService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: TuiHoveredService,
    factory: TuiHoveredService.ɵfac
  });
  return TuiHoveredService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHoveredDirective = /*#__PURE__*/(() => {
  class TuiHoveredDirective {
    constructor(tuiHoveredChange) {
      this.tuiHoveredChange = tuiHoveredChange;
    }
  }
  TuiHoveredDirective.ɵfac = function TuiHoveredDirective_Factory(t) {
    return new (t || TuiHoveredDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](TuiHoveredService));
  };
  TuiHoveredDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: TuiHoveredDirective,
    selectors: [["", "tuiHoveredChange", ""]],
    outputs: {
      tuiHoveredChange: "tuiHoveredChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([TuiHoveredService])]
  });
  return TuiHoveredDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHoveredModule = /*#__PURE__*/(() => {
  class TuiHoveredModule {}
  TuiHoveredModule.ɵfac = function TuiHoveredModule_Factory(t) {
    return new (t || TuiHoveredModule)();
  };
  TuiHoveredModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: TuiHoveredModule
  });
  TuiHoveredModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({});
  return TuiHoveredModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-hovered.js.map

/***/ }),

/***/ 9899:
/*!*********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-obscured.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiObscuredDirective: () => (/* binding */ TuiObscuredDirective),
/* harmony export */   TuiObscuredModule: () => (/* binding */ TuiObscuredModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk_directives_active_zone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk/directives/active-zone */ 6851);
/* harmony import */ var _taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk/observables */ 4521);
/* harmony import */ var _taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk/services */ 704);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4231);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9348);










/**
 * Directive that monitors element visibility
 */
let TuiObscuredDirective = /*#__PURE__*/(() => {
  class TuiObscuredDirective {
    constructor(activeZone, obscured$) {
      this.enabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      const mapped$ = obscured$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(obscuredBy => !!obscuredBy && (!activeZone || !obscuredBy.length || obscuredBy.every(element => !activeZone.contains(element)))));
      this.tuiObscured = this.enabled$.pipe((0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_2__.tuiIfMap)(() => mapped$));
    }
    set tuiObscuredEnabled(enabled) {
      this.enabled$.next(enabled);
    }
  }
  TuiObscuredDirective.ɵfac = function TuiObscuredDirective_Factory(t) {
    return new (t || TuiObscuredDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_taiga_ui_cdk_directives_active_zone__WEBPACK_IMPORTED_MODULE_4__.TuiActiveZoneDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_5__.TuiObscuredService, 2));
  };
  TuiObscuredDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: TuiObscuredDirective,
    selectors: [["", "tuiObscured", ""]],
    inputs: {
      tuiObscuredEnabled: "tuiObscuredEnabled"
    },
    outputs: {
      tuiObscured: "tuiObscured"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_5__.TuiObscuredService, _taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_5__.TuiParentsScrollService, _taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_5__.TuiDestroyService])]
  });
  return TuiObscuredDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiObscuredModule = /*#__PURE__*/(() => {
  class TuiObscuredModule {}
  TuiObscuredModule.ɵfac = function TuiObscuredModule_Factory(t) {
    return new (t || TuiObscuredModule)();
  };
  TuiObscuredModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TuiObscuredModule
  });
  TuiObscuredModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
  return TuiObscuredModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-obscured.js.map

/***/ }),

/***/ 5777:
/*!********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-pressed.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiPressedDirective: () => (/* binding */ TuiPressedDirective),
/* harmony export */   TuiPressedModule: () => (/* binding */ TuiPressedModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk/observables */ 4521);
/* harmony import */ var _taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk/tokens */ 1976);




let TuiPressedDirective = /*#__PURE__*/(() => {
  class TuiPressedDirective {
    constructor(el, takeOnlyTrustedEvents) {
      this.el = el;
      this.takeOnlyTrustedEvents = takeOnlyTrustedEvents;
      this.tuiPressedChange = (0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_0__.tuiPressedObservable)(this.el.nativeElement, {
        onlyTrusted: this.takeOnlyTrustedEvents
      });
    }
  }
  TuiPressedDirective.ɵfac = function TuiPressedDirective_Factory(t) {
    return new (t || TuiPressedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_cdk_tokens__WEBPACK_IMPORTED_MODULE_2__.TUI_TAKE_ONLY_TRUSTED_EVENTS));
  };
  TuiPressedDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: TuiPressedDirective,
    selectors: [["", "tuiPressedChange", ""]],
    outputs: {
      tuiPressedChange: "tuiPressedChange"
    }
  });
  return TuiPressedDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiPressedModule = /*#__PURE__*/(() => {
  class TuiPressedModule {}
  TuiPressedModule.ɵfac = function TuiPressedModule_Factory(t) {
    return new (t || TuiPressedModule)();
  };
  TuiPressedModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TuiPressedModule
  });
  TuiPressedModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  return TuiPressedModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-pressed.js.map

/***/ }),

/***/ 8689:
/*!****************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-prevent-default.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiPreventDefaultDirective: () => (/* binding */ TuiPreventDefaultDirective),
/* harmony export */   TuiPreventDefaultModule: () => (/* binding */ TuiPreventDefaultModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk/observables */ 4521);
/* harmony import */ var _taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk/services */ 704);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7898);








/**
 * @description:
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
let TuiPreventDefaultDirective = /*#__PURE__*/(() => {
  class TuiPreventDefaultDirective {
    constructor(el, zone, destroy$) {
      this.el = el;
      this.zone = zone;
      this.destroy$ = destroy$;
      this.eventName = '';
    }
    ngOnInit() {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.el.nativeElement, this.eventName, {
        passive: false
      }).pipe((0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_1__.tuiZonefree)(this.zone), (0,_taiga_ui_cdk_observables__WEBPACK_IMPORTED_MODULE_1__.tuiPreventDefault)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe();
    }
  }
  TuiPreventDefaultDirective.ɵfac = function TuiPreventDefaultDirective_Factory(t) {
    return new (t || TuiPreventDefaultDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_4__.TuiDestroyService, 2));
  };
  TuiPreventDefaultDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: TuiPreventDefaultDirective,
    selectors: [["", "tuiPreventDefault", ""]],
    inputs: {
      eventName: ["tuiPreventDefault", "eventName"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_taiga_ui_cdk_services__WEBPACK_IMPORTED_MODULE_4__.TuiDestroyService])]
  });
  return TuiPreventDefaultDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @deprecated Use (event.prevent.silent)=(0) instead.
 */
let TuiPreventDefaultModule = /*#__PURE__*/(() => {
  class TuiPreventDefaultModule {}
  TuiPreventDefaultModule.ɵfac = function TuiPreventDefaultModule_Factory(t) {
    return new (t || TuiPreventDefaultModule)();
  };
  TuiPreventDefaultModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TuiPreventDefaultModule
  });
  TuiPreventDefaultModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
  return TuiPreventDefaultModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-prevent-default.js.map

/***/ }),

/***/ 5321:
/*!*************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-repeat-times.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiRepeatTimesContext: () => (/* binding */ TuiRepeatTimesContext),
/* harmony export */   TuiRepeatTimesDirective: () => (/* binding */ TuiRepeatTimesDirective),
/* harmony export */   TuiRepeatTimesModule: () => (/* binding */ TuiRepeatTimesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk/utils/math */ 5618);



const MAX_VALUE = 0x10000;
class TuiRepeatTimesContext {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
}
/**
 * Directive similar to ngFor but using a number of repetitions rather than an array
 *
 * {@link TuiRepeatTimesDirective.tuiRepeatTimesOf requested number of times}.
 * {@link TuiRepeatTimesContext context} for every instance of the template inherits outer context and stores
 * {@link TuiRepeatTimesContext.$implicit index} of a template instance.
 */
let TuiRepeatTimesDirective = /*#__PURE__*/(() => {
  class TuiRepeatTimesDirective {
    constructor(viewContainer, templateRef) {
      this.viewContainer = viewContainer;
      this.templateRef = templateRef;
    }
    set tuiRepeatTimesOf(count) {
      const safeCount = Math.floor((0,_taiga_ui_cdk_utils_math__WEBPACK_IMPORTED_MODULE_0__.tuiClamp)(count, 0, MAX_VALUE));
      const {
        length
      } = this.viewContainer;
      if (count < length) {
        this.removeContainers(length - count);
      } else {
        this.addContainers(safeCount);
      }
    }
    addContainers(count) {
      for (let index = this.viewContainer.length; index < count; index++) {
        this.viewContainer.createEmbeddedView(this.templateRef, new TuiRepeatTimesContext(index));
      }
    }
    removeContainers(amount) {
      for (let index = 0; index < amount; index++) {
        this.viewContainer.remove();
      }
    }
  }
  TuiRepeatTimesDirective.ɵfac = function TuiRepeatTimesDirective_Factory(t) {
    return new (t || TuiRepeatTimesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
  };
  TuiRepeatTimesDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: TuiRepeatTimesDirective,
    selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
    inputs: {
      tuiRepeatTimesOf: "tuiRepeatTimesOf"
    }
  });
  return TuiRepeatTimesDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiRepeatTimesModule = /*#__PURE__*/(() => {
  class TuiRepeatTimesModule {}
  TuiRepeatTimesModule.ɵfac = function TuiRepeatTimesModule_Factory(t) {
    return new (t || TuiRepeatTimesModule)();
  };
  TuiRepeatTimesModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TuiRepeatTimesModule
  });
  TuiRepeatTimesModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  return TuiRepeatTimesModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-directives-repeat-times.js.map

/***/ }),

/***/ 5197:
/*!***************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-browser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tuiIsEdge: () => (/* binding */ tuiIsEdge),
/* harmony export */   tuiIsEdgeOlderThan: () => (/* binding */ tuiIsEdgeOlderThan),
/* harmony export */   tuiIsFirefox: () => (/* binding */ tuiIsFirefox),
/* harmony export */   tuiIsSafari: () => (/* binding */ tuiIsSafari)
/* harmony export */ });
function tuiIsEdge(userAgent) {
  return userAgent.toLowerCase().includes(`edge`);
}
const EDGE = `edge/`;
function tuiIsEdgeOlderThan(version, userAgent) {
  const currentVersion = parseInt(userAgent.slice(userAgent.toLowerCase().indexOf(EDGE) + EDGE.length), 10);
  return currentVersion < version;
}
function tuiIsFirefox(userAgent) {
  return userAgent.toLowerCase().includes(`firefox`);
}
function tuiIsSafari({
  ownerDocument: doc
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const win = doc === null || doc === void 0 ? void 0 : doc.defaultView;
  const isMacOsSafari = typeof win.safari !== `undefined` && ((_b = (_a = win.safari) === null || _a === void 0 ? void 0 : _a.pushNotification) === null || _b === void 0 ? void 0 : _b.toString()) === `[object SafariRemoteNotification]`;
  const isIosSafari = !!((_d = (_c = win.navigator) === null || _c === void 0 ? void 0 : _c.vendor) === null || _d === void 0 ? void 0 : _d.includes(`Apple`)) && !((_f = (_e = win.navigator) === null || _e === void 0 ? void 0 : _e.userAgent) === null || _f === void 0 ? void 0 : _f.includes(`CriOS`)) && !((_h = (_g = win.navigator) === null || _g === void 0 ? void 0 : _g.userAgent) === null || _h === void 0 ? void 0 : _h.includes(`FxiOS`));
  return isMacOsSafari || isIosSafari;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-utils-browser.js.map

/***/ }),

/***/ 963:
/*!**************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-format.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tuiPx: () => (/* binding */ tuiPx)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk/classes */ 9838);


/**
 * Adds 'px' to the number and turns it into a string
 */
function tuiPx(value) {
  ngDevMode && _taiga_ui_cdk_classes__WEBPACK_IMPORTED_MODULE_0__.tuiAssert.assert(Number.isFinite(value), `Value must be finite number`);
  return `${value}px`;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-cdk-utils-format.js.map

/***/ }),

/***/ 883:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/node_modules/rxjs/_esm2015/internal/observable/race.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RaceOperator: () => (/* binding */ RaceOperator),
/* harmony export */   RaceSubscriber: () => (/* binding */ RaceSubscriber),
/* harmony export */   race: () => (/* binding */ race)
/* harmony export */ });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ 6041);
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ 8474);
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ 7490);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ 3556);




function race(...observables) {
  if (observables.length === 1) {
    if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }
  return (0,_fromArray__WEBPACK_IMPORTED_MODULE_1__.fromArray)(observables, undefined).lift(new RaceOperator());
}
class RaceOperator {
  call(subscriber, source) {
    return source.subscribe(new RaceSubscriber(subscriber));
  }
}
class RaceSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__.OuterSubscriber {
  constructor(destination) {
    super(destination);
    this.hasFirst = false;
    this.observables = [];
    this.subscriptions = [];
  }
  _next(observable) {
    this.observables.push(observable);
  }
  _complete() {
    const observables = this.observables;
    const len = observables.length;
    if (len === 0) {
      this.destination.complete();
    } else {
      for (let i = 0; i < len && !this.hasFirst; i++) {
        const observable = observables[i];
        const subscription = (0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__.subscribeToResult)(this, observable, undefined, i);
        if (this.subscriptions) {
          this.subscriptions.push(subscription);
        }
        this.add(subscription);
      }
      this.observables = null;
    }
  }
  notifyNext(_outerValue, innerValue, outerIndex) {
    if (!this.hasFirst) {
      this.hasFirst = true;
      for (let i = 0; i < this.subscriptions.length; i++) {
        if (i !== outerIndex) {
          let subscription = this.subscriptions[i];
          subscription.unsubscribe();
          this.remove(subscription);
        }
      }
      this.subscriptions = null;
    }
    this.destination.next(innerValue);
  }
}
//# sourceMappingURL=race.js.map

/***/ }),

/***/ 3746:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/cdk/node_modules/rxjs/_esm2015/internal/operators/skipWhile.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skipWhile: () => (/* binding */ skipWhile)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 1009);

function skipWhile(predicate) {
  return source => source.lift(new SkipWhileOperator(predicate));
}
class SkipWhileOperator {
  constructor(predicate) {
    this.predicate = predicate;
  }
  call(subscriber, source) {
    return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
  }
}
class SkipWhileSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, predicate) {
    super(destination);
    this.predicate = predicate;
    this.skipping = true;
    this.index = 0;
  }
  _next(value) {
    const destination = this.destination;
    if (this.skipping) {
      this.tryCallPredicate(value);
    }
    if (!this.skipping) {
      destination.next(value);
    }
  }
  tryCallPredicate(value) {
    try {
      const result = this.predicate(value, this.index++);
      this.skipping = Boolean(result);
    } catch (err) {
      this.destination.error(err);
    }
  }
}
//# sourceMappingURL=skipWhile.js.map

/***/ }),

/***/ 6700:
/*!**************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-animations.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tuiDropdownAnimation: () => (/* binding */ tuiDropdownAnimation),
/* harmony export */   tuiFadeIn: () => (/* binding */ tuiFadeIn),
/* harmony export */   tuiFadeInBottom: () => (/* binding */ tuiFadeInBottom),
/* harmony export */   tuiFadeInList: () => (/* binding */ tuiFadeInList),
/* harmony export */   tuiFadeInTop: () => (/* binding */ tuiFadeInTop),
/* harmony export */   tuiHeightCollapse: () => (/* binding */ tuiHeightCollapse),
/* harmony export */   tuiHeightCollapseList: () => (/* binding */ tuiHeightCollapseList),
/* harmony export */   tuiPop: () => (/* binding */ tuiPop),
/* harmony export */   tuiScaleIn: () => (/* binding */ tuiScaleIn),
/* harmony export */   tuiScaleInList: () => (/* binding */ tuiScaleInList),
/* harmony export */   tuiSlideIn: () => (/* binding */ tuiSlideIn),
/* harmony export */   tuiSlideInBottom: () => (/* binding */ tuiSlideInBottom),
/* harmony export */   tuiSlideInBottomList: () => (/* binding */ tuiSlideInBottomList),
/* harmony export */   tuiSlideInLeft: () => (/* binding */ tuiSlideInLeft),
/* harmony export */   tuiSlideInLeftList: () => (/* binding */ tuiSlideInLeftList),
/* harmony export */   tuiSlideInRight: () => (/* binding */ tuiSlideInRight),
/* harmony export */   tuiSlideInRightList: () => (/* binding */ tuiSlideInRightList),
/* harmony export */   tuiSlideInTop: () => (/* binding */ tuiSlideInTop),
/* harmony export */   tuiSlideInTopList: () => (/* binding */ tuiSlideInTopList),
/* harmony export */   tuiWidthCollapse: () => (/* binding */ tuiWidthCollapse),
/* harmony export */   tuiWidthCollapseList: () => (/* binding */ tuiWidthCollapseList)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2405);

const TRANSITION = `{{duration}}ms ease-in-out`;
const DURATION = {
  params: {
    duration: 300
  }
};
const STAGGER = 300;
const tuiHeightCollapse = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiHeightCollapse`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: `*`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: `*`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0
}))], DURATION)]);
const tuiHeightCollapseList = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiHeightCollapseList`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: `*`
}))])], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: `*`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0
}))])], {
  optional: true
})], DURATION)]);
const tuiWidthCollapse = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiWidthCollapse`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: `*`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: `*`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: 0
}))], DURATION)]);
const tuiWidthCollapseList = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiWidthCollapseList`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: `*`
}))])], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: `*`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  width: 0
}))])], {
  optional: true
})], DURATION)]);
const tuiFadeIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiFadeIn`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}))], DURATION)]);
const tuiFadeInList = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiFadeInList`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}))])], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}))])], {
  optional: true
})], DURATION)]);
const tuiFadeInTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiFadeInTop`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(-10px)`,
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`,
  opacity: 1
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`,
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(-10px)`,
  opacity: 0
}))], DURATION)]);
const tuiFadeInBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiFadeInBottom`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(10px)`,
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`,
  opacity: 1
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`,
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(10px)`,
  opacity: 0
}))], DURATION)]);
const tuiDropdownAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiDropdownAnimation`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(-10px)`,
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`,
  opacity: 1
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`,
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(-10px)`,
  opacity: 0
}))], DURATION)]);
const tuiScaleIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiScaleIn`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(1)`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(1)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(0)`
}))], DURATION)]);
const tuiPop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiPop`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(1.1)`
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(1)`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(1)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(1.1)`
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(0)`
}))], DURATION)]);
const tuiScaleInList = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiScaleInList`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(1)`
}))])], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(1)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `scale(0)`
}))])], {
  optional: true
})], DURATION)]);
const tuiSlideIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiSlideIn`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => left`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(-100%)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`left => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(-100%)`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => right`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(100%)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`right => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(100%)`
}))], DURATION)]);
const tuiSlideInLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiSlideInLeft`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(-100%)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(-100%)`
}))], DURATION)]);
const tuiSlideInLeftList = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiSlideInLeftList`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(-100%)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}))])], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(-100%)`
}))])], {
  optional: true
})], DURATION)]);
const tuiSlideInRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiSlideInRight`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(100%)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(100%)`
}))], DURATION)]);
const tuiSlideInRightList = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiSlideInRightList`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(100%)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}))])], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateX(100%)`
}))])], {
  optional: true
})], DURATION)]);
const tuiSlideInTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiSlideInTop`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translate3d(0,{{start}},0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translate3d(0,{{end}},0)`
}))], {
  params: {
    end: 0,
    start: `100%`,
    duration: 300
  }
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translate3d(0,{{end}},0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translate3d(0,{{start}},0)`
}))], {
  params: {
    end: 0,
    start: `100%`,
    duration: 300
  }
})]);
const tuiSlideInTopList = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiSlideInTopList`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(100%)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`
}))])], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(100%)`
}))])], {
  optional: true
})], DURATION)]);
const tuiSlideInBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiSlideInBottom`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(-100%)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`
}))], DURATION), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(-100%)`
}))], DURATION)]);
const tuiSlideInBottomList = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(`tuiSlideInBottomList`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(`* => *`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:enter`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(-100%)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`
}))])], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(`:leave`, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(0)`
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(STAGGER, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: `translateY(-100%)`
}))])], {
  optional: true
})], DURATION)]);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-animations.js.map

/***/ }),

/***/ 6268:
/*!*********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-button.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_BUTTON_DEFAULT_OPTIONS: () => (/* binding */ TUI_BUTTON_DEFAULT_OPTIONS),
/* harmony export */   TUI_BUTTON_OPTIONS: () => (/* binding */ TUI_BUTTON_OPTIONS),
/* harmony export */   TuiButtonComponent: () => (/* binding */ TuiButtonComponent),
/* harmony export */   TuiButtonModule: () => (/* binding */ TuiButtonModule),
/* harmony export */   tuiButtonOptionsProvider: () => (/* binding */ tuiButtonOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/core/directives */ 3071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 453);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8004);
/* harmony import */ var _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core/enums */ 4311);
/* harmony import */ var _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/core/components/svg */ 9313);
/* harmony import */ var _taiga_ui_core_components_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/core/components/loader */ 2694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @taiga-ui/core/directives/wrapper */ 3585);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);


















const _c0 = ["tuiButton", ""];
function TuiButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TuiButtonComponent_span_4_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 8);
  }
  if (rf & 2) {
    const text_r5 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", text_r5);
  }
}
function TuiButtonComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiButtonComponent_span_4_tui_svg_1_Template, 1, 1, "tui-svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r1.icon);
  }
}
function TuiButtonComponent_span_6_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 8);
  }
  if (rf & 2) {
    const text_r7 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", text_r7);
  }
}
function TuiButtonComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiButtonComponent_span_6_tui_svg_1_Template, 1, 1, "tui-svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r2.iconRight);
  }
}
function TuiButtonComponent_tui_loader_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-loader", 10);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inheritColor", true)("size", ctx_r3.loaderSize);
  }
}
const _c1 = ["*"];
const TUI_BUTTON_DEFAULT_OPTIONS = {
  size: `l`,
  shape: null,
  appearance: _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_1__.TuiAppearance.Primary
};
/**
 * Default parameters for button component
 */
const TUI_BUTTON_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiCreateToken)(TUI_BUTTON_DEFAULT_OPTIONS);
function tuiButtonOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiProvideOptions)(TUI_BUTTON_OPTIONS, options, TUI_BUTTON_DEFAULT_OPTIONS);
}
let TuiButtonComponent = /*#__PURE__*/(() => {
  class TuiButtonComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.AbstractTuiInteractive {
    constructor(mode, el, options) {
      var _a;
      super();
      this.mode = mode;
      this.el = el;
      this.options = options;
      this.mode$ = ((_a = this.mode) === null || _a === void 0 ? void 0 : _a.change$) || rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
      this.appearance = null;
      this.disabled = false;
      this.shape = this.options.shape;
      this.showLoader = false;
      this.size = this.options.size;
      this.appearance$ = this.mode$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => this.computedAppearance), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)());
    }
    get nativeFocusableElement() {
      return this.nativeDisabled ? null : this.el.nativeElement;
    }
    get focused() {
      return !this.showLoader && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.tuiIsNativeFocused)(this.el.nativeElement);
    }
    get loaderSize() {
      return this.size === 'l' || this.size === 'xl' ? 'm' : 's';
    }
    get computedAppearance() {
      var _a;
      return (_a = this.appearance) !== null && _a !== void 0 ? _a : this.options.appearance || '';
    }
    get nativeDisabled() {
      return this.computedDisabled || this.showLoader ? '' : null;
    }
    get tabIndex() {
      return this.focusable ? 0 : -1;
    }
    onFocused(focused) {
      this.updateFocused(focused);
    }
  }
  TuiButtonComponent.ɵfac = function TuiButtonComponent_Factory(t) {
    return new (t || TuiButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_9__.TuiModeDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_BUTTON_OPTIONS));
  };
  TuiButtonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiButtonComponent,
    selectors: [["button", "tuiButton", ""], ["button", "tuiIconButton", ""], ["a", "tuiButton", ""], ["a", "tuiIconButton", ""]],
    hostVars: 7,
    hostBindings: function TuiButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function TuiButtonComponent_focusin_HostBindingHandler() {
          return ctx.onFocused(true);
        })("focusout", function TuiButtonComponent_focusout_HostBindingHandler() {
          return ctx.onFocused(false);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-shape", ctx.shape)("data-size", ctx.size)("data-appearance", ctx.computedAppearance)("disabled", ctx.nativeDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_loading", ctx.showLoader);
      }
    },
    inputs: {
      appearance: "appearance",
      disabled: "disabled",
      icon: "icon",
      iconRight: "iconRight",
      shape: "shape",
      showLoader: "showLoader",
      size: "size"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiAsFocusableItemAccessor)(TuiButtonComponent), _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__.TuiDestroyService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 8,
    vars: 10,
    consts: [[4, "ngIf"], ["tuiWrapper", "", 1, "t-wrapper", 3, "active", "appearance", "disabled", "hover"], [1, "t-content"], ["class", "t-left", 4, "ngIf"], ["class", "t-right", 4, "ngIf"], ["class", "t-loader", 3, "inheritColor", "size", 4, "ngIf"], [1, "t-left"], ["class", "t-icon", 3, "src", 4, "polymorpheusOutlet"], [1, "t-icon", 3, "src"], [1, "t-right"], [1, "t-loader", 3, "inheritColor", "size"]],
    template: function TuiButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiButtonComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiButtonComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiButtonComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiButtonComponent_tui_loader_7_Template, 1, 2, "tui-loader", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx.appearance$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.pseudoActive)("appearance", ctx.computedAppearance)("disabled", ctx.computedDisabled)("hover", ctx.pseudoHover);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
      }
    },
    dependencies: [_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_12__.TuiSvgComponent, _taiga_ui_core_components_loader__WEBPACK_IMPORTED_MODULE_13__.TuiLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_15__.TuiWrapperDirective, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__.PolymorpheusOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:inline-block;flex-shrink:0;vertical-align:top;border-radius:var(--tui-radius-m);-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;outline:none;color:inherit}[data-shape=rounded][_nghost-%COMP%]{border-radius:6.25rem}[data-size=xs][_nghost-%COMP%]{height:var(--tui-height-xs);font-weight:normal}[data-size=xs][data-shape=square][_nghost-%COMP%], [data-size=xs][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-xs)}[data-size=s][_nghost-%COMP%]{height:var(--tui-height-s);font-weight:normal}[data-size=s][data-shape=square][_nghost-%COMP%], [data-size=s][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-s)}[data-size=m][_nghost-%COMP%]{height:var(--tui-height-m);font:var(--tui-font-text-m);font-weight:bold}[data-size=m][data-shape=square][_nghost-%COMP%], [data-size=m][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold}[data-size=l][data-shape=square][_nghost-%COMP%], [data-size=l][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-l)}[data-size=xl][_nghost-%COMP%]{height:3.75rem;font:var(--tui-font-text-m);font-weight:bold}[data-size=xl][data-shape=square][_nghost-%COMP%], [data-size=xl][tuiIconButton][_nghost-%COMP%]{width:3.75rem}[tuiIconButton][_nghost-%COMP%]{font-size:0!important}[tuiIconButton][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0!important}.t-loader[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:default}.t-left[_ngcontent-%COMP%]{margin-right:.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.375rem}[data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.25rem}.t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .25rem}[data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .375rem}[data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.125rem 0 .25rem}.t-icon[_ngcontent-%COMP%]{display:flex;max-width:100%;max-height:100%;align-items:center;justify-content:center}.t-left[_ngcontent-%COMP%], .t-right[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1rem;height:1rem}[tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.t-wrapper[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;isolation:isolate}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .375rem)}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-size=s][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .75rem)}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 1.5rem)}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.25rem)}[data-size=xl][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.5rem)}[data-shape=square][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0}.t-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center;text-align:center}._loading[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{opacity:0}"],
    changeDetection: 0
  });
  return TuiButtonComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiButtonModule = /*#__PURE__*/(() => {
  class TuiButtonModule {}
  TuiButtonModule.ɵfac = function TuiButtonModule_Factory(t) {
    return new (t || TuiButtonModule)();
  };
  TuiButtonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiButtonModule
  });
  TuiButtonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__.PolymorpheusModule, _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_15__.TuiWrapperModule, _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_12__.TuiSvgModule, _taiga_ui_core_components_loader__WEBPACK_IMPORTED_MODULE_13__.TuiLoaderModule]]
  });
  return TuiButtonModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-button.js.map

/***/ }),

/***/ 5983:
/*!***********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-calendar.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiCalendarComponent: () => (/* binding */ TuiCalendarComponent),
/* harmony export */   TuiCalendarModule: () => (/* binding */ TuiCalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk */ 1968);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8029);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core/constants */ 2490);
/* harmony import */ var _taiga_ui_core_components_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core/components/scrollbar */ 3718);
/* harmony import */ var _taiga_ui_core_components_primitive_year_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core/components/primitive-year-picker */ 5853);
/* harmony import */ var _taiga_ui_core_internal_primitive_year_month_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core/internal/primitive-year-month-pagination */ 9317);
/* harmony import */ var _taiga_ui_core_components_primitive_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core/components/primitive-calendar */ 7870);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6733);















function TuiCalendarComponent_tui_scrollbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-scrollbar", 2)(1, "tui-primitive-year-picker", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearClick", function TuiCalendarComponent_tui_scrollbar_0_Template_tui_primitive_year_picker_yearClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onPickerYearClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialItem", ctx_r0.year)("max", ctx_r0.computedMax)("min", ctx_r0.computedMin)("value", ctx_r0.value);
  }
}
function TuiCalendarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-primitive-year-month-pagination", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TuiCalendarComponent_ng_template_1_Template_tui_primitive_year_month_pagination_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onPaginationValueChange($event));
    })("yearClick", function TuiCalendarComponent_ng_template_1_Template_tui_primitive_year_month_pagination_yearClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onPaginationYearClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-primitive-calendar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClick", function TuiCalendarComponent_ng_template_1_Template_tui_primitive_calendar_dayClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onDayClick($event));
    })("hoveredItemChange", function TuiCalendarComponent_ng_template_1_Template_tui_primitive_calendar_hoveredItemChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onHoveredItemChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiMapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r2.computedMaxViewedMonth)("min", ctx_r2.computedMinViewedMonth)("value", ctx_r2.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabledItemHandler", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 9, ctx_r2.disabledItemHandler, ctx_r2.disabledItemHandlerMapper, ctx_r2.computedMin, ctx_r2.computedMax))("hoveredItem", ctx_r2.hoveredItem)("markerHandler", ctx_r2.markerHandler)("month", ctx_r2.month)("showAdjacent", ctx_r2.showAdjacent)("value", ctx_r2.value);
  }
}
let TuiCalendarComponent = /*#__PURE__*/(() => {
  class TuiCalendarComponent {
    constructor() {
      this._value = null;
      this.month = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiMonth.currentLocal();
      this.disabledItemHandler = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.ALWAYS_FALSE_HANDLER;
      this.min = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_FIRST_DAY;
      this.max = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_LAST_DAY;
      this.minViewedMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_FIRST_DAY;
      this.maxViewedMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_LAST_DAY;
      this.hoveredItem = null;
      this.showAdjacent = true;
      this.markerHandler = _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_3__.TUI_DEFAULT_MARKER_HANDLER;
      this.dayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.monthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.hoveredItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.year = null;
      this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => item => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
    }
    set value(value) {
      this._value = value;
      if (this.showAdjacent && value instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiDay) {
        this.month = value;
      }
    }
    get value() {
      return this._value;
    }
    get computedMin() {
      var _a;
      return (_a = this.min) !== null && _a !== void 0 ? _a : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_FIRST_DAY;
    }
    get computedMax() {
      var _a;
      return (_a = this.max) !== null && _a !== void 0 ? _a : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_LAST_DAY;
    }
    get computedMinViewedMonth() {
      var _a;
      const min = this.computedMin;
      const minViewed = (_a = this.minViewedMonth) !== null && _a !== void 0 ? _a : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_FIRST_DAY;
      return minViewed.monthSameOrAfter(min) ? minViewed : min;
    }
    get computedMaxViewedMonth() {
      var _a;
      const max = this.computedMax;
      const maxViewed = (_a = this.maxViewedMonth) !== null && _a !== void 0 ? _a : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_LAST_DAY;
      return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
    }
    onPaginationYearClick(year) {
      this.year = year;
    }
    onPickerYearClick({
      year
    }) {
      this.year = null;
      this.updateViewedMonth(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiMonth(year, this.month.month));
    }
    onPaginationValueChange(month) {
      this.updateViewedMonth(month);
    }
    onDayClick(day) {
      this.dayClick.emit(day);
    }
    onHoveredItemChange(day) {
      this.updateHoveredDay(day);
    }
    updateViewedMonth(month) {
      if (this.month.monthSame(month)) {
        return;
      }
      this.month = month;
      this.monthChange.emit(month);
    }
    updateHoveredDay(day) {
      if ((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.tuiNullableSame)(this.hoveredItem, day, (a, b) => a.daySame(b))) {
        return;
      }
      this.hoveredItem = day;
      this.hoveredItemChange.emit(day);
    }
  }
  TuiCalendarComponent.ɵfac = function TuiCalendarComponent_Factory(t) {
    return new (t || TuiCalendarComponent)();
  };
  TuiCalendarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiCalendarComponent,
    selectors: [["tui-calendar"]],
    inputs: {
      month: "month",
      disabledItemHandler: "disabledItemHandler",
      min: "min",
      max: "max",
      minViewedMonth: "minViewedMonth",
      maxViewedMonth: "maxViewedMonth",
      hoveredItem: "hoveredItem",
      showAdjacent: "showAdjacent",
      markerHandler: "markerHandler",
      value: "value"
    },
    outputs: {
      dayClick: "dayClick",
      monthChange: "monthChange",
      hoveredItemChange: "hoveredItemChange"
    },
    decls: 3,
    vars: 2,
    consts: [["automation-id", "tui-calendar__scrollbar", "class", "t-scrollbar", 4, "ngIf", "ngIfElse"], ["calendar", ""], ["automation-id", "tui-calendar__scrollbar", 1, "t-scrollbar"], ["automation-id", "tui-calendar__year", 3, "initialItem", "max", "min", "value", "yearClick"], ["automation-id", "tui-calendar__pagination", 1, "t-pagination", 3, "max", "min", "value", "valueChange", "yearClick"], ["automation-id", "tui-calendar__calendar", 3, "disabledItemHandler", "hoveredItem", "markerHandler", "month", "showAdjacent", "value", "dayClick", "hoveredItemChange"]],
    template: function TuiCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiCalendarComponent_tui_scrollbar_0_Template, 2, 4, "tui-scrollbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiCalendarComponent_ng_template_1_Template, 3, 14, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.year)("ngIfElse", _r1);
      }
    },
    dependencies: [_taiga_ui_core_components_scrollbar__WEBPACK_IMPORTED_MODULE_5__.TuiScrollbarComponent, _taiga_ui_core_components_primitive_year_picker__WEBPACK_IMPORTED_MODULE_6__.TuiPrimitiveYearPickerComponent, _taiga_ui_core_internal_primitive_year_month_pagination__WEBPACK_IMPORTED_MODULE_7__.TuiPrimitiveYearMonthPaginationComponent, _taiga_ui_core_components_primitive_calendar__WEBPACK_IMPORTED_MODULE_8__.TuiPrimitiveCalendarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.TuiMapperPipe],
    styles: ["[_nghost-%COMP%]{display:block;height:18.25rem;width:15.75rem;padding:1rem 1.125rem;box-sizing:content-box}.t-scrollbar[_ngcontent-%COMP%]{height:18.25rem;width:16.875rem}.t-pagination[_ngcontent-%COMP%]{margin-bottom:1rem}"],
    changeDetection: 0
  });
  return TuiCalendarComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiCalendarModule = /*#__PURE__*/(() => {
  class TuiCalendarModule {}
  TuiCalendarModule.ɵfac = function TuiCalendarModule_Factory(t) {
    return new (t || TuiCalendarModule)();
  };
  TuiCalendarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiCalendarModule
  });
  TuiCalendarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _taiga_ui_core_internal_primitive_year_month_pagination__WEBPACK_IMPORTED_MODULE_7__.TuiPrimitiveYearMonthPaginationModule, _taiga_ui_core_components_primitive_calendar__WEBPACK_IMPORTED_MODULE_8__.TuiPrimitiveCalendarModule, _taiga_ui_core_components_primitive_year_picker__WEBPACK_IMPORTED_MODULE_6__.TuiPrimitiveYearPickerModule, _taiga_ui_core_components_scrollbar__WEBPACK_IMPORTED_MODULE_5__.TuiScrollbarModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.TuiMapperPipeModule]]
  });
  return TuiCalendarModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-calendar.js.map

/***/ }),

/***/ 8397:
/*!************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-data-list.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiDataListComponent: () => (/* binding */ TuiDataListComponent),
/* harmony export */   TuiDataListDirective: () => (/* binding */ TuiDataListDirective),
/* harmony export */   TuiDataListModule: () => (/* binding */ TuiDataListModule),
/* harmony export */   TuiOptGroupDirective: () => (/* binding */ TuiOptGroupDirective),
/* harmony export */   TuiOptionComponent: () => (/* binding */ TuiOptionComponent),
/* harmony export */   tuiAsDataList: () => (/* binding */ tuiAsDataList)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk */ 4521);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/cdk */ 7899);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @taiga-ui/cdk */ 5351);
/* harmony import */ var _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/core/directives */ 9289);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var _taiga_ui_core_directives_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core/directives/dropdown */ 7383);
/* harmony import */ var _tinkoff_ng_event_plugins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinkoff/ng-event-plugins */ 1350);
/* harmony import */ var _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/components/svg */ 9313);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6733);


















const _c0 = ["tuiOption", ""];
function TuiOptionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", text_r3, "\n");
  }
}
function TuiOptionComponent_ng_template_1_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 3);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.icons.more);
  }
}
function TuiOptionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiOptionComponent_ng_template_1_tui_svg_1_Template, 1, 1, "tui-svg", 2);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dropdown);
  }
}
const _c1 = function (a0) {
  return {
    $implicit: a0
  };
};
const _c2 = ["*"];
function TuiDataListComponent_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", text_r2, " ");
  }
}
function TuiDataListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiDataListComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r0.emptyContent || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.defaultEmptyContent$));
  }
}
function shouldFocus({
  currentTarget
}) {
  return !(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiIsNativeFocused)(currentTarget);
}
// TODO: Consider all use cases for aria roles
let TuiOptionComponent = /*#__PURE__*/(() => {
  class TuiOptionComponent {
    constructor(content, dataList, el, host, dropdown, icons) {
      this.content = content;
      this.dataList = dataList;
      this.el = el;
      this.host = host;
      this.dropdown = dropdown;
      this.icons = icons;
      /** @deprecated use size on {@link TuiDataListComponent} instead */
      this.size = null;
      this.role = 'option';
      this.disabled = false;
    }
    get active() {
      return !!this.dropdown && !!this.dropdown.dropdownBoxRef;
    }
    onClick() {
      if (this.host && this.value !== undefined) {
        this.host.handleOption(this.value);
      }
    }
    // @bad TODO: Consider aria-activedescendant for proper accessibility implementation
    onMouseMove({
      currentTarget
    }) {
      currentTarget.focus({
        preventScroll: true
      });
    }
    // Preventing focus loss upon focused option removal
    ngOnDestroy() {
      var _a;
      (_a = this.dataList) === null || _a === void 0 ? void 0 : _a.handleFocusLossIfNecessary(this.el.nativeElement);
    }
  }
  TuiOptionComponent.ɵfac = function TuiOptionComponent_Factory(t) {
    return new (t || TuiOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.TUI_OPTION_CONTENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TuiDataListComponent), 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.TUI_DATA_LIST_HOST, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives_dropdown__WEBPACK_IMPORTED_MODULE_3__.TuiDropdownDirective, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.TUI_COMMON_ICONS));
  };
  TuiOptionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiOptionComponent,
    selectors: [["button", "tuiOption", ""], ["a", "tuiOption", ""]],
    hostAttrs: ["tabIndex", "-1", "type", "button"],
    hostVars: 5,
    hostBindings: function TuiOptionComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiOptionComponent_click_HostBindingHandler() {
          return ctx.onClick();
        })("mousemove.silent", function TuiOptionComponent_mousemove_silent_HostBindingHandler($event) {
          return ctx.onMouseMove($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null)("data-size", ctx.size)("role", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_with-dropdown", ctx.active);
      }
    },
    inputs: {
      size: "size",
      role: "role",
      disabled: "disabled",
      value: "value"
    },
    attrs: _c0,
    ngContentSelectors: _c2,
    decls: 3,
    vars: 4,
    consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["base", ""], ["class", "t-arrow", 3, "src", 4, "ngIf"], [1, "t-arrow", 3, "src"]],
    template: function TuiOptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiOptionComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiOptionComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx.content || _r1)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _r1));
      }
    },
    dependencies: [_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_4__.TuiSvgComponent, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__.PolymorpheusOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
    styles: ["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;justify-content:space-between;text-align:left;color:var(--tui-text-01);border-radius:var(--tui-radius-s);outline:none;text-decoration:none;cursor:pointer;background-clip:padding-box}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[_nghost-%COMP%]:focus, ._with-dropdown[_nghost-%COMP%]{background-color:var(--tui-clear)}[_nghost-%COMP%]   [data-list-size=\"s\"][_nghost-%COMP%], [data-list-size=\"s\"]   [_nghost-%COMP%], [_nghost-%COMP%]   [data-list-size=\"xs\"][_nghost-%COMP%], [data-list-size=\"xs\"]   [_nghost-%COMP%], [data-size=s][data-size=s][_nghost-%COMP%], [data-size=xs][data-size=xs][_nghost-%COMP%]{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2rem;padding:.3125rem .5rem}[_nghost-%COMP%]   [data-list-size=\"m\"][_nghost-%COMP%], [data-list-size=\"m\"]   [_nghost-%COMP%], [data-size=m][data-size=m][_nghost-%COMP%]{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2.5rem;padding:.375rem .5rem}[_nghost-%COMP%]   [data-list-size=\"l\"][_nghost-%COMP%], [data-list-size=\"l\"]   [_nghost-%COMP%], [data-size=l][data-size=l][_nghost-%COMP%]{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-m);min-height:2.75rem;padding:.375rem .625rem}.t-arrow[_ngcontent-%COMP%]{margin:0 -.5rem 0 .75rem}"],
    changeDetection: 0
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_tinkoff_ng_event_plugins__WEBPACK_IMPORTED_MODULE_8__.shouldCall)(shouldFocus)], TuiOptionComponent.prototype, "onMouseMove", null);
  return TuiOptionComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// TODO: Consider aria-activedescendant for proper accessibility implementation
let TuiDataListComponent = /*#__PURE__*/(() => {
  class TuiDataListComponent {
    constructor(controller, el, defaultEmptyContent$) {
      var _a;
      this.controller = controller;
      this.el = el;
      this.defaultEmptyContent$ = defaultEmptyContent$;
      this.options = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__.EMPTY_QUERY;
      this.role = 'listbox';
      this.size = ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.size) || 'm';
    }
    get empty$() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiQueryListChanges)(this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(({
        length
      }) => !length));
    }
    onFocusIn(relatedTarget, currentTarget) {
      if (!currentTarget.contains(relatedTarget) && !this.origin) {
        this.origin = relatedTarget;
      }
    }
    noop() {}
    onKeyDownArrow(current, step) {
      const {
        elements
      } = this;
      (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiMoveFocus)(elements.indexOf(current), elements, step);
    }
    // TODO: Consider aria-activedescendant for proper accessibility implementation
    handleFocusLossIfNecessary(element = this.el.nativeElement) {
      if (this.origin && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiIsNativeFocusedIn)(element)) {
        (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiSetNativeMouseFocused)(this.origin, true, true);
      }
    }
    getOptions(includeDisabled = false) {
      return this.options.filter(({
        disabled
      }) => includeDisabled || !disabled).map(({
        value
      }) => value).filter(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_12__.tuiIsPresent);
    }
    onFocus({
      target
    }, top) {
      if (!(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_13__.tuiIsElement)(target)) {
        return;
      }
      const {
        elements
      } = this;
      (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiMoveFocus)(top ? -1 : elements.length, elements, top ? 1 : -1);
      this.handleFocusLossIfNecessary(target);
    }
    get elements() {
      return Array.from(this.el.nativeElement.querySelectorAll('[tuiOption]'));
    }
  }
  TuiDataListComponent.ɵfac = function TuiDataListComponent_Factory(t) {
    return new (t || TuiDataListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_14__.TUI_TEXTFIELD_WATCHED_CONTROLLER, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.TUI_NOTHING_FOUND_MESSAGE));
  };
  TuiDataListComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiDataListComponent,
    selectors: [["tui-data-list"]],
    contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, TuiOptionComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
      }
    },
    hostVars: 2,
    hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
          return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
        })("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
          return ctx.noop();
        })("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
          return ctx.onKeyDownArrow($event.target, 1);
        })("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
          return ctx.onKeyDownArrow($event.target, -1);
        })("wheel.silent.passive", function TuiDataListComponent_wheel_silent_passive_HostBindingHandler() {
          return ctx.handleFocusLossIfNecessary();
        })("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
          return ctx.handleFocusLossIfNecessary($event.target);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("data-list-size", ctx.size);
      }
    },
    inputs: {
      role: "role",
      emptyContent: "emptyContent",
      size: "size"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.tuiAsDataListAccessor)(TuiDataListComponent), _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_14__.TEXTFIELD_CONTROLLER_PROVIDER])],
    ngContentSelectors: _c2,
    decls: 5,
    vars: 3,
    consts: [["tabindex", "0", 1, "t-trap", 3, "focusin"], ["class", "t-empty", 4, "ngIf"], [1, "t-empty"], [4, "polymorpheusOutlet"]],
    template: function TuiDataListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function TuiDataListComponent_Template_div_focusin_0_listener($event) {
          return ctx.onFocus($event, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiDataListComponent_div_2_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function TuiDataListComponent_Template_div_focusin_4_listener($event) {
          return ctx.onFocus($event, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.empty$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__.PolymorpheusOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-03)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-list-size=s]{--tui-data-list-margin: 0rem}tui-data-list[data-list-size=s]>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2rem;padding:.3125rem .5rem}tui-data-list[data-list-size=m]>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2.5rem;padding:.375rem .5rem}tui-data-list[data-list-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-list-size=l]>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-m);min-height:2.75rem;padding:.375rem .625rem}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-02);flex-direction:column;line-height:1rem}tui-data-list[data-list-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-list-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-list-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);height:1px;background:var(--tui-base-03)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=\"\"]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:\"\"}tui-opt-group[data-label=\"\"]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__.tuiPure], TuiDataListComponent.prototype, "empty$", null);
  return TuiDataListComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDataListDirective = /*#__PURE__*/(() => {
  class TuiDataListDirective {}
  TuiDataListDirective.ɵfac = function TuiDataListDirective_Factory(t) {
    return new (t || TuiDataListDirective)();
  };
  TuiDataListDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDataListDirective,
    selectors: [["ng-template", "tuiDataList", ""]]
  });
  return TuiDataListDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function tuiAsDataList(useExisting) {
  return {
    provide: TuiDataListDirective,
    useExisting
  };
}
let TuiOptGroupDirective = /*#__PURE__*/(() => {
  class TuiOptGroupDirective {}
  TuiOptGroupDirective.ɵfac = function TuiOptGroupDirective_Factory(t) {
    return new (t || TuiOptGroupDirective)();
  };
  TuiOptGroupDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiOptGroupDirective,
    selectors: [["tui-opt-group"]],
    hostAttrs: ["role", "group"],
    hostVars: 1,
    hostBindings: function TuiOptGroupDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-label", ctx.label);
      }
    },
    inputs: {
      label: "label"
    }
  });
  return TuiOptGroupDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDataListModule = /*#__PURE__*/(() => {
  class TuiDataListModule {}
  TuiDataListModule.ɵfac = function TuiDataListModule_Factory(t) {
    return new (t || TuiDataListModule)();
  };
  TuiDataListModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiDataListModule
  });
  TuiDataListModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_4__.TuiSvgModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__.PolymorpheusModule]]
  });
  return TuiDataListModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-data-list.js.map

/***/ }),

/***/ 4470:
/*!*********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-dialog.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_DIALOGS_CLOSE: () => (/* binding */ TUI_DIALOGS_CLOSE),
/* harmony export */   TUI_DIALOG_DEFAULT_OPTIONS: () => (/* binding */ TUI_DIALOG_DEFAULT_OPTIONS),
/* harmony export */   TUI_DIALOG_OPTIONS: () => (/* binding */ TUI_DIALOG_OPTIONS),
/* harmony export */   TuiDialogCloseService: () => (/* binding */ TuiDialogCloseService),
/* harmony export */   TuiDialogComponent: () => (/* binding */ TuiDialogComponent),
/* harmony export */   TuiDialogDirective: () => (/* binding */ TuiDialogDirective),
/* harmony export */   TuiDialogModule: () => (/* binding */ TuiDialogModule),
/* harmony export */   TuiDialogService: () => (/* binding */ TuiDialogService),
/* harmony export */   tuiDialogOptionsProvider: () => (/* binding */ tuiDialogOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @taiga-ui/cdk */ 9644);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 4521);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ 7899);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_core_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @taiga-ui/core/animations */ 6700);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 453);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8132);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 4511);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 1070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 1209);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5333);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1813);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 1749);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-web-apis/common */ 5393);
/* harmony import */ var _taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core/utils */ 5771);
/* harmony import */ var _taiga_ui_core_components_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @taiga-ui/core/components/button */ 6268);

















function TuiDialogComponent_header_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", text_r4, " ");
  }
}
function TuiDialogComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiDialogComponent_header_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r0.header)("polymorpheusOutletContext", ctx_r0.context);
  }
}
function TuiDialogComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8)(3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogComponent_ng_container_4_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.context.$implicit.complete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const text_r5 = ctx.polymorpheusOutlet;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", text_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ((tmp_1_0 = ctx_r1.context.data) == null ? null : tmp_1_0.button) || "OK", " ");
  }
}
function TuiDialogComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiDialogComponent_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.close$.next());
    })("mousedown.prevent.silent", function TuiDialogComponent_div_6_Template_button_mousedown_prevent_silent_1_listener() {
      return 0;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx_r2.fullscreen ? "secondary" : "")("icon", ctx_r2.icons.close)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r2.closeWord$));
  }
}
const TUI_DIALOG_DEFAULT_OPTIONS = {
  size: `m`,
  required: false,
  closeable: true,
  dismissible: true,
  label: ``,
  header: ``
};
/**
 * A stream to close dialogs
 */
const TUI_DIALOGS_CLOSE = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY);
/**
 * Default parameters for dialog component
 */
const TUI_DIALOG_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(TUI_DIALOG_DEFAULT_OPTIONS);
function tuiDialogOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiProvideOptions)(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
const SCROLLBAR_PLACEHOLDER = 17;
let TuiDialogCloseService = /*#__PURE__*/(() => {
  class TuiDialogCloseService extends rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable {
    constructor(win, doc, el) {
      super(subscriber => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.esc$, this.mousedown$).subscribe(subscriber));
      this.win = win;
      this.doc = doc;
      this.el = el;
      this.esc$ = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiTypedFromEvent)(this.doc, `keydown`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => {
        const target = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.tuiGetActualTarget)(event);
        return event.key === `Escape` && !event.defaultPrevented && (this.element.contains(target) || this.isOutside(target));
      }));
      this.mousedown$ = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiTypedFromEvent)(this.doc, `mousedown`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => (0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__.tuiGetViewportWidth)(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER && this.isOutside((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.tuiGetActualTarget)(event))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiTypedFromEvent)(this.doc, `mouseup`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.tuiGetActualTarget), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(target => this.isOutside(target)))));
    }
    get element() {
      return this.el.nativeElement;
    }
    isOutside(target) {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.tuiIsElement)(target) && (!(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.tuiContainsOrAfter)(this.element, target) || target === this.element);
    }
  }
  TuiDialogCloseService.ɵfac = function TuiDialogCloseService_Factory(t) {
    return new (t || TuiDialogCloseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_12__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  TuiDialogCloseService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TuiDialogCloseService,
    factory: TuiDialogCloseService.ɵfac
  });
  return TuiDialogCloseService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const REQUIRED_ERROR = new Error('Required dialog was dismissed');
let TuiDialogComponent = /*#__PURE__*/(() => {
  class TuiDialogComponent {
    constructor(duration, isMobile, context, destroy$, dialogClose$, close$, closeWord$, icons) {
      this.duration = duration;
      this.isMobile = isMobile;
      this.context = context;
      this.closeWord$ = closeWord$;
      this.icons = icons;
      this.animation = {
        value: '',
        params: {
          start: '40px',
          duration: this.duration
        }
      };
      this.fullscreenAnimation = {
        value: '',
        params: {
          start: '100vh',
          duration: this.duration
        }
      };
      this.close$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.close$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => toObservable(context.closeable))), dialogClose$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => toObservable(context.dismissible))), close$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__.ALWAYS_TRUE_HANDLER))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(destroy$)).subscribe(() => {
        this.close();
      });
    }
    get size() {
      return this.context.size;
    }
    get header() {
      return this.context.header;
    }
    get slideInTop() {
      return this.fullscreen || this.isMobile ? this.fullscreenAnimation : this.animation;
    }
    get fullscreen() {
      return !this.isMobile && (this.size === 'fullscreen' || this.size === 'page');
    }
    close() {
      if (this.context.required) {
        this.context.$implicit.error(REQUIRED_ERROR);
      } else {
        this.context.$implicit.complete();
      }
    }
  }
  TuiDialogComponent.ɵfac = function TuiDialogComponent_Factory(t) {
    return new (t || TuiDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_17__.TUI_ANIMATIONS_DURATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TUI_IS_MOBILE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_19__.POLYMORPHEUS_CONTEXT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_20__.TuiDestroyService, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiDialogCloseService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_DIALOGS_CLOSE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_17__.TUI_CLOSE_WORD), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_17__.TUI_COMMON_ICONS));
  };
  TuiDialogComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiDialogComponent,
    selectors: [["tui-dialog"]],
    hostVars: 6,
    hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-appearance", ctx.context.appearance)("data-size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@tuiSlideInTop", ctx.slideInTop)("@tuiFadeIn", ctx.slideInTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_centered", ctx.header);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_20__.TuiDestroyService, TuiDialogCloseService])],
    decls: 7,
    vars: 6,
    consts: [["class", "t-header", 4, "ngIf"], [1, "t-content"], [1, "t-heading", 3, "id", "textContent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-filler"], ["class", "t-wrapper", 4, "ngIf"], [1, "t-header"], [3, "innerHTML"], [1, "t-buttons"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"], [1, "t-wrapper"], ["automation-id", "tui-dialog__close", "shape", "rounded", "size", "s", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "appearance", "icon", "title", "click", "mousedown.prevent.silent"]],
    template: function TuiDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiDialogComponent_header_0_Template, 2, 2, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiDialogComponent_ng_container_4_Template, 5, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiDialogComponent_div_6_Template, 3, 5, "div", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.context.id)("textContent", ctx.context.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.context.closeable);
      }
    },
    dependencies: [_taiga_ui_core_components_button__WEBPACK_IMPORTED_MODULE_21__.TuiButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_19__.PolymorpheusOutletDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.TuiAutoFocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1rem;border:2.5rem solid transparent}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:0 1.125rem 1.875rem #0000007a;content:\"\";border-radius:inherit;pointer-events:none}[data-size=auto][_nghost-%COMP%]{width:auto}[data-size=s][_nghost-%COMP%]{width:30rem}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[data-size=s][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:.5rem;font:var(--tui-font-heading-5)}[data-size=m][_nghost-%COMP%]{width:42.5rem}[data-size=m][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:.75rem;font:var(--tui-font-heading-4)}[data-size=l][_nghost-%COMP%]{width:55rem}[data-size=l][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:1rem}[data-size=fullscreen][_nghost-%COMP%], [data-size=page][_nghost-%COMP%]{min-width:100vw;min-height:100%;border-radius:0;border:none;background:var(--tui-elevation-01);box-shadow:0 4rem var(--tui-elevation-01)}[data-size=fullscreen][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:3rem calc(50vw - (45rem / 2))}[data-size=fullscreen][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:1rem}[data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0}._centered[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]{min-width:100%;width:100%;max-width:100%;border-radius:0;border:none;margin:auto 0 0}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:.5rem;font:var(--tui-font-heading-5)}.t-heading[_ngcontent-%COMP%]{margin:0;word-wrap:break-word;font:var(--tui-font-heading-3)}.t-heading[_ngcontent-%COMP%]:empty{display:none}.t-header[_ngcontent-%COMP%]{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}[data-size=fullscreen][_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{flex:1}.t-content[_ngcontent-%COMP%]{border-radius:inherit;padding:2rem;background:var(--tui-elevation-01)}.t-content[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-wrapper[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1;order:-1}.t-filler[_ngcontent-%COMP%]{flex-grow:1}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:fixed;top:1.5rem;right:1.5rem;display:none;color:var(--tui-base-01)}.t-dialog:last-of-type[_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], .t-dialog:last-of-type   [_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]:not([data-size=\"fullscreen\"]):not([data-size=\"page\"])   .t-close[_ngcontent-%COMP%]{animation:tuiFadeIn var(--tui-duration);background:rgba(104,104,104,.96)}[_nghost-%COMP%]:not([data-size=\"fullscreen\"]):not([data-size=\"page\"])   .t-close[_ngcontent-%COMP%]:hover{background:rgba(159,159,159,.86)}[_nghost-%COMP%]:not([data-size=\"fullscreen\"]).ng-animating   .t-close[_ngcontent-%COMP%]{display:none}tui-root._mobile[_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;background:transparent!important;color:var(--tui-text-01);opacity:.5}.t-buttons[_ngcontent-%COMP%]{margin-top:1.25rem;text-align:right}"],
    data: {
      animation: [_taiga_ui_core_animations__WEBPACK_IMPORTED_MODULE_23__.tuiSlideInTop, _taiga_ui_core_animations__WEBPACK_IMPORTED_MODULE_23__.tuiFadeIn]
    }
  });
  return TuiDialogComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function toObservable(valueOrStream) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.isObservable)(valueOrStream) ? valueOrStream : (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.of)(valueOrStream);
}
const DIALOG = new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_19__.PolymorpheusComponent(TuiDialogComponent);
let TuiDialogService = /*#__PURE__*/(() => {
  class TuiDialogService extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_26__.AbstractTuiDialogService {
    constructor() {
      super(...arguments);
      this.component = DIALOG;
      this.defaultOptions = Object.assign(Object.assign({}, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(TUI_DIALOG_OPTIONS)), {
        data: undefined
      });
    }
  }
  TuiDialogService.ɵfac = /* @__PURE__ */function () {
    let ɵTuiDialogService_BaseFactory;
    return function TuiDialogService_Factory(t) {
      return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TuiDialogService)))(t || TuiDialogService);
    };
  }();
  TuiDialogService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TuiDialogService,
    factory: TuiDialogService.ɵfac,
    providedIn: `root`
  });
  return TuiDialogService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDialogDirective = /*#__PURE__*/(() => {
  class TuiDialogDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_26__.AbstractTuiDialogDirective {}
  TuiDialogDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiDialogDirective_BaseFactory;
    return function TuiDialogDirective_Factory(t) {
      return (ɵTuiDialogDirective_BaseFactory || (ɵTuiDialogDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TuiDialogDirective)))(t || TuiDialogDirective);
    };
  }();
  TuiDialogDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDialogDirective,
    selectors: [["ng-template", "tuiDialog", ""]],
    inputs: {
      options: ["tuiDialogOptions", "options"],
      open: ["tuiDialog", "open"]
    },
    outputs: {
      openChange: "tuiDialogChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_26__.AbstractTuiDialogService,
      useExisting: TuiDialogService
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiDialogDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDialogModule = /*#__PURE__*/(() => {
  class TuiDialogModule {}
  TuiDialogModule.ɵfac = function TuiDialogModule_Factory(t) {
    return new (t || TuiDialogModule)();
  };
  TuiDialogModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiDialogModule
  });
  TuiDialogModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.tuiAsDialog)(TuiDialogService)],
    imports: [[_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_19__.PolymorpheusModule, _taiga_ui_core_components_button__WEBPACK_IMPORTED_MODULE_21__.TuiButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.TuiAutoFocusModule]]
  });
  return TuiDialogModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-dialog.js.map

/***/ }),

/***/ 7614:
/*!******************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-hosted-dropdown.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiAccessorProxyDirective: () => (/* binding */ TuiAccessorProxyDirective),
/* harmony export */   TuiDropdownOpenMonitorDirective: () => (/* binding */ TuiDropdownOpenMonitorDirective),
/* harmony export */   TuiHostedDropdownComponent: () => (/* binding */ TuiHostedDropdownComponent),
/* harmony export */   TuiHostedDropdownConnectorDirective: () => (/* binding */ TuiHostedDropdownConnectorDirective),
/* harmony export */   TuiHostedDropdownModule: () => (/* binding */ TuiHostedDropdownModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core/abstract */ 8305);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @taiga-ui/cdk */ 9502);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @taiga-ui/cdk */ 6851);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @taiga-ui/cdk */ 9899);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk */ 4521);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk */ 7899);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core/directives/dropdown */ 7383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5333);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1749);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 4900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 4776);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 8004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 8557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6424);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8442);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1209);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 453);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 5047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 4911);
/* harmony import */ var _taiga_ui_core_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @taiga-ui/core/utils/miscellaneous */ 6775);
/* harmony import */ var _tinkoff_ng_event_plugins__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @tinkoff/ng-event-plugins */ 1350);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 6733);



















const _c0 = ["wrapper"];
function TuiHostedDropdownComponent_div_0_ng_template_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const text_r7 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", text_r7, " ");
  }
}
const _c1 = function (a0, a1) {
  return {
    $implicit: a0,
    close: a1
  };
};
function TuiHostedDropdownComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TuiHostedDropdownComponent_div_0_ng_template_3_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiHostedDropdownComponent_div_0_ng_template_3_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r4.content)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, _r2, ctx_r4.close));
  }
}
function TuiHostedDropdownComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiActiveZoneChange", function TuiHostedDropdownComponent_div_0_Template_div_tuiActiveZoneChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onActiveZone($event));
    })("tuiObscured", function TuiHostedDropdownComponent_div_0_Template_div_tuiObscured_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onHostObscured($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiHostedDropdownComponent_div_0_ng_template_3_Template, 4, 5, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const isOpen_r1 = ctx.tuiLet;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdown", _r3)("tuiDropdownManual", isOpen_r1 && ctx_r0.canOpen)("tuiDropdownSided", ctx_r0.sided)("tuiObscuredEnabled", isOpen_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheus", ctx_r0.context);
  }
}
const _c2 = ["*"];
let TuiAccessorProxyDirective = /*#__PURE__*/(() => {
  class TuiAccessorProxyDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_1__.TuiPositionAccessor {
    constructor() {
      super(...arguments);
      this.type = 'dummy';
    }
    getPosition() {
      return [0, 0];
    }
  }
  TuiAccessorProxyDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiAccessorProxyDirective_BaseFactory;
    return function TuiAccessorProxyDirective_Factory(t) {
      return (ɵTuiAccessorProxyDirective_BaseFactory || (ɵTuiAccessorProxyDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TuiAccessorProxyDirective)))(t || TuiAccessorProxyDirective);
    };
  }();
  TuiAccessorProxyDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiAccessorProxyDirective,
    selectors: [["", "tuiAccessorProxy", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_1__.TuiPositionAccessor,
      multi: true,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), TuiAccessorProxyDirective], TuiAccessorProxyDirective],
      useFactory: (accessor, fallback) => accessor || fallback
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiAccessorProxyDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_HOSTED_DROPDOWN_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(`[TUI_HOSTED_DROPDOWN_COMPONENT]`);
let TuiDropdownOpenMonitorDirective = /*#__PURE__*/(() => {
  class TuiDropdownOpenMonitorDirective {
    constructor(destroy$, hosted, dropdown, open) {
      open === null || open === void 0 ? void 0 : open.tuiDropdownOpenChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(value => value && open.dropdown === dropdown && !hosted.focused), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(destroy$)).subscribe(() => {
        var _a;
        (_a = hosted.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.focus();
        hosted.updateOpen(true);
      });
    }
  }
  TuiDropdownOpenMonitorDirective.ɵfac = function TuiDropdownOpenMonitorDirective_Factory(t) {
    return new (t || TuiDropdownOpenMonitorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiDestroyService, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_HOSTED_DROPDOWN_COMPONENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__.TuiDropdownDirective, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__.TuiDropdownOpenDirective, 8));
  };
  TuiDropdownOpenMonitorDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownOpenMonitorDirective,
    selectors: [["", "tuiDropdownOpenMonitor", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiDestroyService])]
  });
  return TuiDropdownOpenMonitorDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHostedDropdownConnectorDirective = /*#__PURE__*/(() => {
  class TuiHostedDropdownConnectorDirective {}
  TuiHostedDropdownConnectorDirective.ɵfac = function TuiHostedDropdownConnectorDirective_Factory(t) {
    return new (t || TuiHostedDropdownConnectorDirective)();
  };
  TuiHostedDropdownConnectorDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHostedDropdownConnectorDirective,
    selectors: [["", "tuiHostedDropdownHost", ""]]
  });
  return TuiHostedDropdownConnectorDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function shouldClose(event) {
  var _a;
  return 'key' in event && event.key.toLowerCase() === 'escape' && this.canOpen && this.open && !((_a = this.dropdown) === null || _a === void 0 ? void 0 : _a.nextElementSibling);
}
/* eslint-disable @typescript-eslint/member-ordering */
let TuiHostedDropdownComponent = /*#__PURE__*/(() => {
  class TuiHostedDropdownComponent {
    constructor(hover$, el) {
      this.hover$ = hover$;
      this.el = el;
      /** TODO: rename in 4.0 */
      this.openChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
      this.sided = false;
      this.canOpen = true;
      this.hostHover$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.tuiTypedFromEvent)(this.el.nativeElement, 'mouseover').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(e => this.computedHost.contains((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiGetActualTarget)(e))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(visible => {
        var _a, _b;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(visible).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)((visible ? (_a = this.hover$) === null || _a === void 0 ? void 0 : _a.showDelay : (_b = this.hover$) === null || _b === void 0 ? void 0 : _b.hideDelay) || 0));
      })), this.hover$ || rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([visible, hovered]) => visible && hovered));
      this.open$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(this.openChange, this.hostHover$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.share)());
      this.focusedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.close = () => this.updateOpen(false);
    }
    set open(open) {
      this.openChange.next(open);
    }
    get open() {
      return this.openChange.value;
    }
    get host() {
      var _a;
      return ((_a = this.dropdownHost) === null || _a === void 0 ? void 0 : _a.nativeElement) || this.el.nativeElement;
    }
    get computedHost() {
      var _a;
      return ((_a = this.dropdownHost) === null || _a === void 0 ? void 0 : _a.nativeElement) || this.nativeFocusableElement || this.el.nativeElement;
    }
    get dropdown() {
      var _a, _b;
      return (_b = (_a = this.dropdownDirective) === null || _a === void 0 ? void 0 : _a.dropdownBoxRef) === null || _b === void 0 ? void 0 : _b.location.nativeElement;
    }
    get nativeFocusableElement() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__.tuiIsNativeKeyboardFocusable)(this.host) ? this.host : (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__.tuiGetClosestFocusable)({
        initial: this.host,
        root: this.el.nativeElement
      });
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__.tuiIsNativeFocusedIn)(this.host) || this.open && !!this.wrapper && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__.tuiIsNativeFocusedIn)(this.wrapper.nativeElement);
    }
    onFocusIn(target) {
      if (!this.computedHost.contains(target)) {
        this.updateOpen(false);
      }
    }
    onClick(target) {
      var _a;
      if (!this.hostEditable && this.computedHost.contains(target) && !((_a = this.hover$) === null || _a === void 0 ? void 0 : _a.hovered)) {
        this.updateOpen(!this.open);
      }
    }
    onKeyDownEsc(event) {
      event.preventDefault();
      this.closeDropdown();
    }
    onArrow(event, down) {
      this.focusDropdown(event, down);
    }
    onKeydown({
      key,
      target,
      defaultPrevented
    }) {
      if (!defaultPrevented && (0,_taiga_ui_core_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_20__.tuiIsEditingKey)(key) && this.hostEditable && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiIsHTMLElement)(target) && !(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiIsElementEditable)(target)) {
        this.focusHost();
      }
    }
    onActiveZone(active) {
      this.updateFocused(active);
      if (!active) {
        this.updateOpen(false);
      }
    }
    onHostObscured(obscured) {
      if (obscured) {
        this.closeDropdown();
      }
    }
    updateOpen(open) {
      if (!open || this.canOpen) {
        this.open = open;
      }
    }
    get hostEditable() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiIsElementEditable)(this.computedHost);
    }
    focusDropdown(event, first) {
      const host = this.nativeFocusableElement;
      if (!host || !(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiIsHTMLElement)(host) || !(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiIsElement)(event.target) || !host.contains(event.target)) {
        return;
      }
      if (!this.wrapper || !this.open || !this.dropdown || !(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiIsHTMLElement)(this.wrapper.nativeElement.nextElementSibling)) {
        this.updateOpen(true);
        if (!(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiIsElementEditable)(host)) {
          event.preventDefault();
        }
        return;
      }
      const initial = first ? this.wrapper.nativeElement : this.wrapper.nativeElement.nextElementSibling;
      const focusable = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__.tuiGetClosestFocusable)({
        initial,
        root: this.wrapper.nativeElement,
        previous: !first
      });
      if (!focusable) {
        return;
      }
      focusable.focus();
      event.preventDefault();
    }
    closeDropdown() {
      if (this.focused) {
        this.focusHost();
      }
      this.updateOpen(false);
    }
    focusHost() {
      const host = this.nativeFocusableElement;
      if (host) {
        host.focus({
          preventScroll: true
        });
      }
    }
    updateFocused(focused) {
      this.focusedChange.emit(focused);
    }
  }
  TuiHostedDropdownComponent.ɵfac = function TuiHostedDropdownComponent_Factory(t) {
    return new (t || TuiHostedDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__.TuiDropdownHoverDirective, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  TuiHostedDropdownComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiHostedDropdownComponent,
    selectors: [["tui-hosted-dropdown"]],
    contentQueries: function TuiHostedDropdownComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, TuiHostedDropdownConnectorDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownHost = _t.first);
      }
    },
    viewQuery: function TuiHostedDropdownComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__.TuiDropdownDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.TuiActiveZoneDirective, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownDirective = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.activeZone = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function TuiHostedDropdownComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function TuiHostedDropdownComponent_focusin_HostBindingHandler($event) {
          return ctx.onFocusIn($event.target);
        })("click", function TuiHostedDropdownComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event.target);
        })("keydown.silent.capture", function TuiHostedDropdownComponent_keydown_silent_capture_HostBindingHandler($event) {
          return ctx.onKeyDownEsc($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown.arrowDown", function TuiHostedDropdownComponent_keydown_arrowDown_HostBindingHandler($event) {
          return ctx.onArrow($event, true);
        })("keydown.arrowUp", function TuiHostedDropdownComponent_keydown_arrowUp_HostBindingHandler($event) {
          return ctx.onArrow($event, false);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_hosted_dropdown_focused", ctx.focused);
      }
    },
    inputs: {
      content: "content",
      sided: "sided",
      canOpen: "canOpen",
      open: "open"
    },
    outputs: {
      open$: "openChange",
      focusedChange: "focusedChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.tuiAsFocusableItemAccessor)(TuiHostedDropdownComponent), {
      provide: TuiAccessorProxyDirective,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self(), _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_1__.TuiPositionAccessor]],
      useFactory: position => position === null || position === void 0 ? void 0 : position[0]
    }, {
      provide: TUI_HOSTED_DROPDOWN_COMPONENT,
      useExisting: TuiHostedDropdownComponent
    }])],
    ngContentSelectors: _c2,
    decls: 2,
    vars: 3,
    consts: [["tuiAccessorProxy", "", "tuiDropdownOpenMonitor", "", "class", "t-wrapper", 3, "tuiDropdown", "tuiDropdownManual", "tuiDropdownSided", "tuiObscuredEnabled", "tuiActiveZoneChange", "tuiObscured", 4, "tuiLet"], ["tuiAccessorProxy", "", "tuiDropdownOpenMonitor", "", 1, "t-wrapper", 3, "tuiDropdown", "tuiDropdownManual", "tuiDropdownSided", "tuiObscuredEnabled", "tuiActiveZoneChange", "tuiObscured"], ["activeZone", "tuiActiveZone"], [3, "polymorpheus"], ["dropdown", "polymorpheus"], [1, "t-dropdown", 3, "keydown"], ["wrapper", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
    template: function TuiHostedDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiHostedDropdownComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.open$)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ctx.openChange.value);
      }
    },
    dependencies: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiLetDirective, TuiAccessorProxyDirective, TuiDropdownOpenMonitorDirective, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__.TuiDropdownDirective, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__.TuiDropdownDriverDirective, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__.TuiDropdownManualDirective, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__.TuiDropdownPositionSidedDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.TuiActiveZoneDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_24__.TuiObscuredDirective, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_25__.PolymorpheusTemplate, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_25__.PolymorpheusOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{display:inline-flex}.t-wrapper[_ngcontent-%COMP%]{border-radius:inherit;height:inherit;flex:1 1 auto;width:100%}.t-dropdown[_ngcontent-%COMP%]{height:100%}"],
    changeDetection: 0
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,_tinkoff_ng_event_plugins__WEBPACK_IMPORTED_MODULE_28__.shouldCall)(shouldClose)], TuiHostedDropdownComponent.prototype, "onKeyDownEsc", null);
  return TuiHostedDropdownComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHostedDropdownModule = /*#__PURE__*/(() => {
  class TuiHostedDropdownModule {}
  TuiHostedDropdownModule.ɵfac = function TuiHostedDropdownModule_Factory(t) {
    return new (t || TuiHostedDropdownModule)();
  };
  TuiHostedDropdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiHostedDropdownModule
  });
  TuiHostedDropdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_25__.PolymorpheusModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiLetModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_24__.TuiObscuredModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.TuiActiveZoneModule, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_5__.TuiDropdownModule]]
  });
  return TuiHostedDropdownModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-hosted-dropdown.js.map

/***/ }),

/***/ 8289:
/*!*******************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiLinkComponent: () => (/* binding */ TuiLinkComponent),
/* harmony export */   TuiLinkModule: () => (/* binding */ TuiLinkModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 4521);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/core/providers */ 9098);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/core/components/svg */ 9313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6733);














// @bad TODO: Think about extending Interactive
const _c0 = ["tuiLink", ""];
function TuiLinkComponent_tui_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.icon || "");
  }
}
function TuiLinkComponent_tui_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.icon || "");
  }
}
const _c1 = ["*"];
let TuiLinkComponent = /*#__PURE__*/(() => {
  class TuiLinkComponent {
    constructor(el, mode$, focusVisible$) {
      this.el = el;
      this.mode$ = mode$;
      this.pseudo = false;
      this.icon = '';
      this.iconAlign = 'right';
      this.iconRotated = false;
      this.mode = null;
      this.focusVisible = false;
      this.focusedChange = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.merge)((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiTypedFromEvent)(this.el.nativeElement, 'focusin').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.ALWAYS_TRUE_HANDLER)), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiTypedFromEvent)(this.el.nativeElement, 'focusout').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.ALWAYS_FALSE_HANDLER)));
      focusVisible$.subscribe(visible => {
        this.focusVisible = visible;
      });
    }
    get nativeFocusableElement() {
      return this.el.nativeElement;
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsNativeFocused)(this.nativeFocusableElement);
    }
    get hasIcon() {
      return !!this.icon;
    }
    get iconAlignLeft() {
      return this.hasIcon && this.iconAlign === 'left';
    }
    get iconAlignRight() {
      return this.hasIcon && this.iconAlign === 'right';
    }
  }
  TuiLinkComponent.ɵfac = function TuiLinkComponent_Factory(t) {
    return new (t || TuiLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_6__.TUI_MODE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiFocusVisibleService));
  };
  TuiLinkComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiLinkComponent,
    selectors: [["a", "tuiLink", ""], ["button", "tuiLink", ""]],
    hostVars: 7,
    hostBindings: function TuiLinkComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("$.data-mode.attr", function TuiLinkComponent___data_mode_attr_HostBindingHandler() {
          return ctx.mode$;
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-host-mode", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_pseudo", ctx.pseudo)("_icon-rotated", ctx.iconRotated)("_focus-visible", ctx.focusVisible);
      }
    },
    inputs: {
      pseudo: "pseudo",
      icon: "icon",
      iconAlign: "iconAlign",
      iconRotated: "iconRotated",
      mode: "mode"
    },
    exportAs: ["tuiLink"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.tuiAsFocusableItemAccessor)(TuiLinkComponent), _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiFocusVisibleService, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiDestroyService, _taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_9__.MODE_PROVIDER])],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 4,
    vars: 2,
    consts: [["class", "t-icon t-icon_left", 3, "src", 4, "ngIf"], [1, "t-content"], ["class", "t-icon t-icon_right", 3, "src", 4, "ngIf"], [1, "t-icon", "t-icon_left", 3, "src"], [1, "t-icon", "t-icon_right", 3, "src"]],
    template: function TuiLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiLinkComponent_tui_svg_0_Template, 1, 1, "tui-svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiLinkComponent_tui_svg_3_Template, 1, 1, "tui-svg", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconAlignLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconAlignRight);
      }
    },
    dependencies: [_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_10__.TuiSvgComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
    styles: ["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-decoration:none;text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],
    changeDetection: 0
  });
  return TuiLinkComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiLinkModule = /*#__PURE__*/(() => {
  class TuiLinkModule {}
  TuiLinkModule.ɵfac = function TuiLinkModule_Factory(t) {
    return new (t || TuiLinkModule)();
  };
  TuiLinkModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiLinkModule
  });
  TuiLinkModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_10__.TuiSvgModule]]
  });
  return TuiLinkModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-link.js.map

/***/ }),

/***/ 2694:
/*!*********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-loader.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_LOADER_DEFAULT_OPTIONS: () => (/* binding */ TUI_LOADER_DEFAULT_OPTIONS),
/* harmony export */   TUI_LOADER_OPTIONS: () => (/* binding */ TUI_LOADER_OPTIONS),
/* harmony export */   TuiLoaderComponent: () => (/* binding */ TuiLoaderComponent),
/* harmony export */   TuiLoaderModule: () => (/* binding */ TuiLoaderModule),
/* harmony export */   tuiLoaderOptionsProvider: () => (/* binding */ tuiLoaderOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 5197);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_core_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/utils/miscellaneous */ 6775);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);









/** Default values for the loader options. */
function TuiLoaderComponent_div_2_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", text_r3, " ");
  }
}
function TuiLoaderComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiLoaderComponent_div_2_div_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-text_horizontal", ctx_r1.isHorizontal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r1.textContent);
  }
}
function TuiLoaderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiLoaderComponent_div_2_div_3_Template, 2, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-loader_horizontal", ctx_r0.isHorizontal)("t-loader_inherit-color", ctx_r0.inheritColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-size", ctx_r0.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasText);
  }
}
const _c0 = ["*"];
const TUI_LOADER_DEFAULT_OPTIONS = {
  size: `m`,
  inheritColor: false,
  overlay: false
};
/**
 * Default parameters for loader component
 */
const TUI_LOADER_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(TUI_LOADER_DEFAULT_OPTIONS);
function tuiLoaderOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiProvideOptions)(TUI_LOADER_OPTIONS, options, TUI_LOADER_DEFAULT_OPTIONS);
}
let TuiLoaderComponent = /*#__PURE__*/(() => {
  class TuiLoaderComponent {
    constructor(doc, el, isIos, options) {
      this.doc = doc;
      this.el = el;
      this.isIos = isIos;
      this.options = options;
      this.size = this.options.size;
      this.inheritColor = this.options.inheritColor;
      this.overlay = this.options.overlay;
      this.loading = true;
      this.isApple = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiIsSafari)(this.el.nativeElement) || this.isIos;
    }
    set showLoader(value) {
      // @bad TODO: https://github.com/angular/angular/issues/32083 think of a better way
      if (value && this.focused) {
        (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiBlurNativeFocused)(this.doc);
      }
      this.loading = value;
    }
    get hasOverlay() {
      return this.overlay && this.loading;
    }
    get hasText() {
      return !!this.textContent;
    }
    get isHorizontal() {
      return !(0,_taiga_ui_core_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_4__.tuiSizeBigger)(this.size);
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiIsNativeFocusedIn)(this.el.nativeElement);
    }
  }
  TuiLoaderComponent.ɵfac = function TuiLoaderComponent_Factory(t) {
    return new (t || TuiLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TUI_IS_IOS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_LOADER_OPTIONS));
  };
  TuiLoaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiLoaderComponent,
    selectors: [["tui-loader"]],
    hostVars: 2,
    hostBindings: function TuiLoaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_loading", ctx.loading);
      }
    },
    inputs: {
      size: "size",
      inheritColor: "inheritColor",
      overlay: "overlay",
      textContent: "textContent",
      showLoader: "showLoader"
    },
    ngContentSelectors: _c0,
    decls: 3,
    vars: 7,
    consts: [[1, "t-content", 3, "disabled"], ["class", "t-loader", 3, "t-loader_horizontal", "t-loader_inherit-color", 4, "ngIf"], [1, "t-loader"], ["automation-id", "tui-loader__loader", "focusable", "false", "viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg", 1, "t-icon"], ["cx", "50", "cy", "50", "r", "50", "stroke-dasharray", "314", 1, "t-circle"], ["automation-id", "tui-loader__text", "class", "t-text", 3, "t-text_horizontal", 4, "ngIf"], ["automation-id", "tui-loader__text", 1, "t-text"], [4, "polymorpheusOutlet"]],
    template: function TuiLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiLoaderComponent_div_2_Template, 4, 6, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-content_has-overlay", ctx.hasOverlay)("t-content_loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading && !ctx.isApple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("inert", ctx.loading || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__.PolymorpheusOutletDirective],
    styles: ["@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:-66}50%{stroke-dashoffset:-314}to{stroke-dashoffset:-66}}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(0)}50%{transform:rotate(1turn)}to{transform:rotate(3turn)}}[_nghost-%COMP%]{position:relative;display:flex;min-width:1.5rem}._loading[_nghost-%COMP%]{overflow:hidden}.t-content[_ngcontent-%COMP%]{z-index:0;min-width:100%;height:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:100%;flex-shrink:0;align-self:center;color:var(--tui-text-01);stroke:var(--tui-primary);animation:tuiFadeIn var(--tui-duration)}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-loader[data-size=xs][_ngcontent-%COMP%]{font-size:.75rem;stroke-width:38}.t-loader[data-size=s][_ngcontent-%COMP%]{font-size:1rem;stroke-width:25}.t-loader[data-size=m][_ngcontent-%COMP%]{font-size:1.5rem;stroke-width:17}.t-loader[data-size=l][_ngcontent-%COMP%]{font-size:2.5rem;stroke-width:15}.t-loader[data-size=xl][_ngcontent-%COMP%]{font-size:3.5rem;stroke-width:14}.t-loader[data-size=xxl][_ngcontent-%COMP%]{font-size:5rem;stroke-width:10}.t-text[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1rem;color:inherit;max-width:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}.t-icon[_ngcontent-%COMP%]{display:block;min-width:1em;max-width:1em;min-height:1em;max-height:1em;margin:.25rem -.5em;border-radius:100%;overflow:hidden;transform:scaleY(-1);animation:_ngcontent-%COMP%_tuiLoaderRotate 3s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}.t-circle[_ngcontent-%COMP%]{fill:none;stroke:inherit;stroke-width:inherit;animation:_ngcontent-%COMP%_tuiLoaderDashOffset 3s linear infinite}"],
    changeDetection: 0
  });
  return TuiLoaderComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiLoaderModule = /*#__PURE__*/(() => {
  class TuiLoaderModule {}
  TuiLoaderModule.ɵfac = function TuiLoaderModule_Factory(t) {
    return new (t || TuiLoaderModule)();
  };
  TuiLoaderModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiLoaderModule
  });
  TuiLoaderModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__.PolymorpheusModule]]
  });
  return TuiLoaderModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-loader.js.map

/***/ }),

/***/ 7870:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-calendar.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiPrimitiveCalendarComponent: () => (/* binding */ TuiPrimitiveCalendarComponent),
/* harmony export */   TuiPrimitiveCalendarModule: () => (/* binding */ TuiPrimitiveCalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk */ 9502);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/cdk */ 5321);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk */ 8159);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/cdk */ 5777);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/cdk */ 1968);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8029);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core/constants */ 2490);
/* harmony import */ var _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/enums */ 4311);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _taiga_ui_core_pipes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/core/pipes */ 6746);
/* harmony import */ var _taiga_ui_core_pipes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/core/pipes */ 6642);











function TuiPrimitiveCalendarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", day_r2);
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
  }
  if (rf & 2) {
    const markers_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", (markers_r12 == null ? null : markers_r12[1]) || "");
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_div_4_div_2_Template, 1, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const markers_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", markers_r12 == null ? null : markers_r12[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", markers_r12.length > 1);
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onItemClick(item_r9));
    })("tuiHoveredChange", function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.onItemHovered($event && item_r9));
    })("tuiPressedChange", function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_tuiPressedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onItemPressed($event && item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiMapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_div_4_Template, 3, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "tuiMapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-cell_interval", ctx_r10.itemIsInterval(item_r9))("t-cell_today", ctx_r10.itemIsToday(item_r9))("t-cell_unavailable", ctx_r10.itemIsUnavailable(item_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-range", ctx_r10.getItemRange(item_r9))("data-state", ctx_r10.getItemState(item_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-item_unavailable", ctx_r10.itemIsUnavailable(item_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 13, item_r9, ctx_r10.dayTypeHandler));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.day, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](5, 16, item_r9, ctx_r10.toMarkers, ctx_r10.itemIsToday(item_r9), !!ctx_r10.getItemRange(item_r9)));
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template, 6, 21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.tuiLet;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.itemIsUnavailable(item_r9) || ctx_r8.showAdjacent);
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const colIndex_r7 = ctx.$implicit;
    const rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", sheet_r3[rowIndex_r5][colIndex_r7]);
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r5 = ctx.$implicit;
    const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRepeatTimesOf", sheet_r3[rowIndex_r5].length);
  }
}
function TuiPrimitiveCalendarComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveCalendarComponent_div_4_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sheet_r3 = ctx.tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRepeatTimesOf", sheet_r3.length);
  }
}
let TuiPrimitiveCalendarComponent = /*#__PURE__*/(() => {
  class TuiPrimitiveCalendarComponent {
    constructor(unorderedWeekDays$, dayTypeHandler) {
      this.unorderedWeekDays$ = unorderedWeekDays$;
      this.dayTypeHandler = dayTypeHandler;
      this.pressedItem = null;
      this.today = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiDay.currentLocal();
      this.month = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiMonth.currentLocal();
      this.disabledItemHandler = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.ALWAYS_FALSE_HANDLER;
      this.markerHandler = _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_3__.TUI_DEFAULT_MARKER_HANDLER;
      this.value = null;
      this.hoveredItem = null;
      this.showAdjacent = true;
      this.hoveredItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.dayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.toMarkers = (day, today, inRange) => {
        if (today || inRange) {
          return null;
        }
        const markers = this.markerHandler(day);
        return markers.length === 0 ? null : markers;
      };
    }
    get isSingleDayRange() {
      return this.value instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiDayRange && this.value.isSingleDay;
    }
    /**
     * @deprecated: use {@link this.isSingleDayRange}
     */
    get isSingle() {
      return this.isSingleDayRange;
    }
    getItemState(item) {
      const {
        disabledItemHandler,
        pressedItem,
        hoveredItem
      } = this;
      if (disabledItemHandler(item)) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_4__.TuiInteractiveState.Disabled;
      }
      if (pressedItem === null || pressedItem === void 0 ? void 0 : pressedItem.daySame(item)) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_4__.TuiInteractiveState.Active;
      }
      if (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.daySame(item)) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_4__.TuiInteractiveState.Hover;
      }
      return null;
    }
    getItemRange(item) {
      const {
        value,
        hoveredItem
      } = this;
      if (!value) {
        return null;
      }
      if (value instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiDay) {
        return value.daySame(item) ? _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_4__.TuiRangeState.Single : null;
      }
      if (!(value instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiDayRange)) {
        return value.find(day => day.daySame(item)) ? _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_4__.TuiRangeState.Single : null;
      }
      if (value.from.daySame(item) && !value.isSingleDay || (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.dayAfter(value.from)) && value.from.daySame(item) && value.isSingleDay || (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.daySame(item)) && hoveredItem.dayBefore(value.from) && value.isSingleDay) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_4__.TuiRangeState.Start;
      }
      if (value.to.daySame(item) && !value.isSingleDay || (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.dayBefore(value.from)) && value.from.daySame(item) && value.isSingleDay || (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.daySame(item)) && hoveredItem.dayAfter(value.from) && value.isSingleDay) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_4__.TuiRangeState.End;
      }
      return value.isSingleDay && value.from.daySame(item) ? _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_4__.TuiRangeState.Single : null;
    }
    itemIsToday(item) {
      return this.today.daySame(item);
    }
    itemIsUnavailable(item) {
      return !this.month.monthSame(item);
    }
    itemIsInterval(day) {
      const {
        value,
        hoveredItem
      } = this;
      if (!(value instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiDayRange)) {
        return false;
      }
      if (!value.isSingleDay) {
        return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
      }
      if (hoveredItem === null) {
        return false;
      }
      const range = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiDayRange.sort(value.from, hoveredItem);
      return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
    }
    onItemHovered(item) {
      this.updateHoveredItem(item || null);
    }
    onItemPressed(item) {
      this.pressedItem = item || null;
    }
    onItemClick(item) {
      this.dayClick.emit(item);
    }
    updateHoveredItem(day) {
      if ((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiNullableSame)(this.hoveredItem, day, (a, b) => a.daySame(b))) {
        return;
      }
      this.hoveredItem = day;
      this.hoveredItemChange.emit(day);
    }
  }
  TuiPrimitiveCalendarComponent.ɵfac = function TuiPrimitiveCalendarComponent_Factory(t) {
    return new (t || TuiPrimitiveCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_6__.TUI_SHORT_WEEK_DAYS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_6__.TUI_DAY_TYPE_HANDLER));
  };
  TuiPrimitiveCalendarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiPrimitiveCalendarComponent,
    selectors: [["tui-primitive-calendar"]],
    hostVars: 2,
    hostBindings: function TuiPrimitiveCalendarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_single", ctx.isSingleDayRange);
      }
    },
    inputs: {
      month: "month",
      disabledItemHandler: "disabledItemHandler",
      markerHandler: "markerHandler",
      value: "value",
      hoveredItem: "hoveredItem",
      showAdjacent: "showAdjacent"
    },
    outputs: {
      hoveredItemChange: "hoveredItemChange",
      dayClick: "dayClick"
    },
    decls: 6,
    vars: 9,
    consts: [[1, "t-row", "t-row_weekday"], ["class", "t-cell", 3, "textContent", 4, "ngFor", "ngForOf"], ["id", "date-rows", 4, "tuiLet"], [1, "t-cell", 3, "textContent"], ["id", "date-rows"], ["automation-id", "tui-primitive-calendar__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-primitive-calendar__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [4, "tuiLet"], ["automation-id", "tui-primitive-calendar__cell", "class", "t-cell", 3, "t-cell_interval", "t-cell_today", "t-cell_unavailable", "click", "tuiHoveredChange", "tuiPressedChange", 4, "ngIf"], ["automation-id", "tui-primitive-calendar__cell", 1, "t-cell", 3, "click", "tuiHoveredChange", "tuiPressedChange"], ["automation-id", "tui-primitive-calendar__item", 1, "t-item"], ["class", "t-dots", 4, "ngIf"], [1, "t-dots"], [1, "t-dot"], ["class", "t-dot", 3, "backgroundColor", 4, "ngIf"]],
    template: function TuiPrimitiveCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveCalendarComponent_div_1_Template, 1, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "tuiOrderWeekDays");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiPrimitiveCalendarComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "tuiCalendarSheet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.unorderedWeekDays$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx.month, true));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.TuiLetDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__.TuiRepeatTimesDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.TuiHoveredDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__.TuiPressedDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _taiga_ui_core_pipes__WEBPACK_IMPORTED_MODULE_12__.TuiOrderWeekDaysPipe, _taiga_ui_core_pipes__WEBPACK_IMPORTED_MODULE_13__.TuiCalendarSheetPipe, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.TuiMapperPipe],
    styles: ["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;height:2.25rem;isolation:isolate}.t-item[_ngcontent-%COMP%]{position:relative;flex:1;line-height:2rem;border-radius:var(--tui-radius-m)}.t-item[_ngcontent-%COMP%]:before, .t-item[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;border-radius:var(--tui-radius-m)}.t-item[_ngcontent-%COMP%]:after{border-radius:.5rem}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:2.25rem;text-align:center;outline:none;cursor:pointer;background-clip:content-box;box-sizing:border-box;border:.125rem solid transparent}.t-cell[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;border-radius:var(--tui-radius-m)}.t-cell_today[_ngcontent-%COMP%]:after{position:absolute;left:50%;transform:translate(-50%);content:\"\";bottom:.3125rem;height:.125rem;width:.75rem;border-radius:.375rem;background-color:var(--tui-text-01)}.t-cell_interval[_ngcontent-%COMP%]:before{background:var(--tui-base-02)}._single[_nghost-%COMP%]   .t-cell_interval[_ngcontent-%COMP%]:before{background:var(--tui-secondary-hover)}.t-cell_interval[_ngcontent-%COMP%]:not(:last-child):before{right:-.25rem;border-top-right-radius:0;border-bottom-right-radius:0}.t-cell_interval[_ngcontent-%COMP%]:not([data-range=\"start\"]):not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell_interval[_ngcontent-%COMP%]:last-child:first-child:before{right:0}.t-cell_interval[_ngcontent-%COMP%]:first-child > .t-item[_ngcontent-%COMP%]{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.t-cell_interval[_ngcontent-%COMP%]:last-child > .t-item[_ngcontent-%COMP%]{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.t-cell_interval[_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{border-radius:0}.t-cell[data-range][_ngcontent-%COMP%]:after{background-color:var(--tui-primary-text)}.t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{color:var(--tui-primary-text)}.t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary)}.t-cell[data-range][data-state=hover][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][data-state=hover][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary-hover)}.t-cell[data-range][data-state=active][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][data-state=active][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary-active)}.t-cell[data-range=end][_ngcontent-%COMP%]:before{background:var(--tui-base-02)}._single[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]:before{background:var(--tui-secondary-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=end][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before{left:.625rem;border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=end][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{left:-2rem;right:100%;transform:translate(1.6rem) scaleY(.83) scaleX(.5) rotate(45deg)}.t-cell[data-range=start][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before{right:.625rem;border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{left:100%;right:-2rem;transform:translate(-1.6rem) scaleY(.83) scaleX(.5) rotate(45deg)}.t-cell[data-range=single][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{display:none}.t-cell[data-state=disabled][_ngcontent-%COMP%]{pointer-events:none}.t-cell[data-state=disabled][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{opacity:.36}.t-cell[data-state=hover][_ngcontent-%COMP%]:hover:not([data-range]) > .t-item[_ngcontent-%COMP%]{background-color:var(--tui-secondary-hover)}.t-cell[data-state=active][_ngcontent-%COMP%]:hover:not([data-range]) > .t-item[_ngcontent-%COMP%]{background-color:var(--tui-secondary-active)}[_nghost-%COMP%]{width:15.75rem}.t-row[_ngcontent-%COMP%]{justify-content:flex-start}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row_weekday[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none}.t-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.t-item_unavailable[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:-.5rem;padding-bottom:.25rem}.t-dot[_ngcontent-%COMP%]{display:inline-block;width:.25rem;height:.25rem;border-radius:100%;margin:0 .0625rem}"],
    changeDetection: 0
  });
  return TuiPrimitiveCalendarComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiPrimitiveCalendarModule = /*#__PURE__*/(() => {
  class TuiPrimitiveCalendarModule {}
  TuiPrimitiveCalendarModule.ɵfac = function TuiPrimitiveCalendarModule_Factory(t) {
    return new (t || TuiPrimitiveCalendarModule)();
  };
  TuiPrimitiveCalendarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiPrimitiveCalendarModule
  });
  TuiPrimitiveCalendarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.TuiLetModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.TuiMapperPipeModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__.TuiRepeatTimesModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.TuiHoveredModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__.TuiPressedModule, _taiga_ui_core_pipes__WEBPACK_IMPORTED_MODULE_13__.TuiCalendarSheetPipeModule, _taiga_ui_core_pipes__WEBPACK_IMPORTED_MODULE_12__.TuiOrderWeekDaysPipeModule]]
  });
  return TuiPrimitiveCalendarModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-primitive-calendar.js.map

/***/ }),

/***/ 8878:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-checkbox.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_CHECKBOX_DEFAULT_OPTIONS: () => (/* binding */ TUI_CHECKBOX_DEFAULT_OPTIONS),
/* harmony export */   TUI_CHECKBOX_OPTIONS: () => (/* binding */ TUI_CHECKBOX_OPTIONS),
/* harmony export */   TuiPrimitiveCheckboxComponent: () => (/* binding */ TuiPrimitiveCheckboxComponent),
/* harmony export */   TuiPrimitiveCheckboxModule: () => (/* binding */ TuiPrimitiveCheckboxModule),
/* harmony export */   tuiCheckboxOptionsProvider: () => (/* binding */ tuiCheckboxOptionsProvider)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core/enums */ 4311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core/components/svg */ 9313);
/* harmony import */ var _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/directives/wrapper */ 3585);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);











/** Default values for the checkbox options. */
function TuiPrimitiveCheckboxComponent_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 2);
  }
  if (rf & 2) {
    const src_r1 = ctx.polymorpheusOutlet;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-mark_on", !ctx_r0.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r1);
  }
}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
const _c1 = ["*"];
const TUI_CHECKBOX_DEFAULT_OPTIONS = {
  size: `m`,
  appearances: {
    unchecked: _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_1__.TuiAppearance.Outline,
    checked: _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_1__.TuiAppearance.Primary,
    indeterminate: _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_1__.TuiAppearance.Primary
  },
  icons: {
    checked: ({
      $implicit
    }) => $implicit === `m` ? `tuiIconCheck` : `tuiIconCheckLarge`,
    indeterminate: ({
      $implicit
    }) => $implicit === `m` ? `tuiIconMinus` : `tuiIconMinusLarge`
  }
};
/**
 * Default parameters for checkbox component
 */
const TUI_CHECKBOX_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiCreateToken)(TUI_CHECKBOX_DEFAULT_OPTIONS);
function tuiCheckboxOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiProvideOptions)(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
let TuiPrimitiveCheckboxComponent = /*#__PURE__*/(() => {
  class TuiPrimitiveCheckboxComponent {
    constructor(options) {
      this.options = options;
      this.size = this.options.size;
      this.disabled = false;
      this.focused = false;
      this.hovered = false;
      this.pressed = false;
      this.invalid = false;
      this.icon = this.options.icons.checked;
      this.value = false;
    }
    set valueSetter(value) {
      if (value !== false) {
        this.setCurrentIcon(value);
      }
      this.value = value;
    }
    get appearance() {
      switch (this.value) {
        case false:
          return this.options.appearances.unchecked;
        case true:
          return this.options.appearances.checked;
        default:
          return this.options.appearances.indeterminate;
      }
    }
    get empty() {
      return this.value === false;
    }
    setCurrentIcon(value) {
      this.icon = value === null ? this.options.icons.indeterminate : this.options.icons.checked;
    }
  }
  TuiPrimitiveCheckboxComponent.ɵfac = function TuiPrimitiveCheckboxComponent_Factory(t) {
    return new (t || TuiPrimitiveCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_CHECKBOX_OPTIONS));
  };
  TuiPrimitiveCheckboxComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiPrimitiveCheckboxComponent,
    selectors: [["tui-primitive-checkbox"]],
    hostVars: 1,
    hostBindings: function TuiPrimitiveCheckboxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-size", ctx.size);
      }
    },
    inputs: {
      size: "size",
      disabled: "disabled",
      focused: "focused",
      hovered: "hovered",
      pressed: "pressed",
      invalid: "invalid",
      valueSetter: ["value", "valueSetter"]
    },
    ngContentSelectors: _c1,
    decls: 3,
    vars: 10,
    consts: [["tuiWrapper", "", 3, "active", "appearance", "disabled", "focus", "hover", "invalid"], ["class", "t-mark", 3, "t-mark_on", "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-mark", 3, "src"]],
    template: function TuiPrimitiveCheckboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveCheckboxComponent_tui_svg_1_Template, 1, 3, "tui-svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.pressed)("appearance", ctx.appearance)("disabled", ctx.disabled)("focus", ctx.focused)("hover", ctx.hovered)("invalid", ctx.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx.icon)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.size));
      }
    },
    dependencies: [_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_3__.TuiSvgComponent, _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_4__.TuiWrapperDirective, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__.PolymorpheusOutletDirective],
    styles: ["[_nghost-%COMP%]{display:block;font-size:0;flex-shrink:0}[data-size=m][_nghost-%COMP%]{width:1rem;height:1rem;border-radius:var(--tui-radius-xs)}[data-size=l][_nghost-%COMP%]{width:1.5rem;height:1.5rem;border-radius:var(--tui-radius-s)}.t-mark[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;width:100%;height:100%;transform:scale(0)}.t-mark_on[_ngcontent-%COMP%]{transform:scale(1)}"],
    changeDetection: 0
  });
  return TuiPrimitiveCheckboxComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiPrimitiveCheckboxModule = /*#__PURE__*/(() => {
  class TuiPrimitiveCheckboxModule {}
  TuiPrimitiveCheckboxModule.ɵfac = function TuiPrimitiveCheckboxModule_Factory(t) {
    return new (t || TuiPrimitiveCheckboxModule)();
  };
  TuiPrimitiveCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiPrimitiveCheckboxModule
  });
  TuiPrimitiveCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_3__.TuiSvgModule, _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_4__.TuiWrapperModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__.PolymorpheusModule]]
  });
  return TuiPrimitiveCheckboxModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-primitive-checkbox.js.map

/***/ }),

/***/ 4902:
/*!************************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-spin-button.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiPrimitiveSpinButtonComponent: () => (/* binding */ TuiPrimitiveSpinButtonComponent),
/* harmony export */   TuiPrimitiveSpinButtonModule: () => (/* binding */ TuiPrimitiveSpinButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var _taiga_ui_core_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/components/button */ 6268);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6733);









function TuiPrimitiveSpinButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPrimitiveSpinButtonComponent_ng_container_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onLeftClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPrimitiveSpinButtonComponent_ng_container_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onRightClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const texts_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-hidden", ctx_r0.leftComputedDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusable", ctx_r0.computedFocusable)("icon", ctx_r0.icons.decrement)("title", texts_r1[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-hidden", ctx_r0.rightComputedDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusable", ctx_r0.computedFocusable)("icon", ctx_r0.icons.increment)("title", texts_r1[1]);
  }
}
const _c0 = ["*"];
let TuiPrimitiveSpinButtonComponent = /*#__PURE__*/(() => {
  class TuiPrimitiveSpinButtonComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiInteractive {
    constructor(el, icons, spinTexts$) {
      super();
      this.el = el;
      this.icons = icons;
      this.spinTexts$ = spinTexts$;
      this.disabled = false;
      this.leftDisabled = false;
      this.rightDisabled = false;
      this.leftClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiIsNativeFocusedIn)(this.el.nativeElement);
    }
    get leftComputedDisabled() {
      return this.computedDisabled || this.leftDisabled;
    }
    get rightComputedDisabled() {
      return this.computedDisabled || this.rightDisabled;
    }
    onLeftClick() {
      if (!this.leftComputedDisabled) {
        this.leftClick.emit();
      }
    }
    onRightClick() {
      if (!this.rightComputedDisabled) {
        this.rightClick.emit();
      }
    }
    onFocused(focused) {
      this.updateFocused(focused);
    }
    onFocusVisible(focusVisible) {
      this.updateFocusVisible(focusVisible);
    }
  }
  TuiPrimitiveSpinButtonComponent.ɵfac = function TuiPrimitiveSpinButtonComponent_Factory(t) {
    return new (t || TuiPrimitiveSpinButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_3__.TUI_SPIN_ICONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_3__.TUI_SPIN_TEXTS));
  };
  TuiPrimitiveSpinButtonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiPrimitiveSpinButtonComponent,
    selectors: [["tui-primitive-spin-button"]],
    hostBindings: function TuiPrimitiveSpinButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown.silent.prevent", function TuiPrimitiveSpinButtonComponent_mousedown_silent_prevent_HostBindingHandler() {
          return 0;
        })("keydown.arrowLeft.prevent", function TuiPrimitiveSpinButtonComponent_keydown_arrowLeft_prevent_HostBindingHandler() {
          return ctx.onLeftClick();
        })("keydown.arrowRight.prevent", function TuiPrimitiveSpinButtonComponent_keydown_arrowRight_prevent_HostBindingHandler() {
          return ctx.onRightClick();
        })("focusin", function TuiPrimitiveSpinButtonComponent_focusin_HostBindingHandler() {
          return ctx.onFocused(true);
        })("focusout", function TuiPrimitiveSpinButtonComponent_focusout_HostBindingHandler() {
          return ctx.onFocused(false);
        });
      }
    },
    inputs: {
      disabled: "disabled",
      leftDisabled: "leftDisabled",
      rightDisabled: "rightDisabled"
    },
    outputs: {
      leftClick: "leftClick",
      rightClick: "rightClick"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], ["appearance", "flat", "automation-id", "tui-primitive-spin-button__left", "size", "xs", "tuiIconButton", "", "type", "button", 3, "focusable", "icon", "title", "click"], [1, "t-content", "t-calendar-title"], ["appearance", "flat", "automation-id", "tui-primitive-spin-button__right", "size", "xs", "tuiIconButton", "", "type", "button", 3, "focusable", "icon", "title", "click"]],
    template: function TuiPrimitiveSpinButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiPrimitiveSpinButtonComponent_ng_container_0_Template, 5, 10, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.spinTexts$));
      }
    },
    dependencies: [_taiga_ui_core_components_button__WEBPACK_IMPORTED_MODULE_4__.TuiButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:bold}.t-hidden[_ngcontent-%COMP%]{visibility:hidden}.t-content[_ngcontent-%COMP%]{padding:0 .5rem}"],
    changeDetection: 0
  });
  return TuiPrimitiveSpinButtonComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiPrimitiveSpinButtonModule = /*#__PURE__*/(() => {
  class TuiPrimitiveSpinButtonModule {}
  TuiPrimitiveSpinButtonModule.ɵfac = function TuiPrimitiveSpinButtonModule_Factory(t) {
    return new (t || TuiPrimitiveSpinButtonModule)();
  };
  TuiPrimitiveSpinButtonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiPrimitiveSpinButtonModule
  });
  TuiPrimitiveSpinButtonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _taiga_ui_core_components_button__WEBPACK_IMPORTED_MODULE_4__.TuiButtonModule]]
  });
  return TuiPrimitiveSpinButtonModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-primitive-spin-button.js.map

/***/ }),

/***/ 6420:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-textfield.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_ICON_PADDINGS: () => (/* binding */ TUI_ICON_PADDINGS),
/* harmony export */   TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS: () => (/* binding */ TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS),
/* harmony export */   TUI_PRIMITIVE_TEXTFIELD_OPTIONS: () => (/* binding */ TUI_PRIMITIVE_TEXTFIELD_OPTIONS),
/* harmony export */   TuiPrimitiveTextfieldComponent: () => (/* binding */ TuiPrimitiveTextfieldComponent),
/* harmony export */   TuiPrimitiveTextfieldDirective: () => (/* binding */ TuiPrimitiveTextfieldDirective),
/* harmony export */   TuiPrimitiveTextfieldModule: () => (/* binding */ TuiPrimitiveTextfieldModule),
/* harmony export */   TuiTextfieldComponent: () => (/* binding */ TuiTextfieldComponent),
/* harmony export */   TuiValueDecorationComponent: () => (/* binding */ TuiValueDecorationComponent),
/* harmony export */   tuiPrimitiveTextfieldOptionsProvider: () => (/* binding */ tuiPrimitiveTextfieldOptionsProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 4911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @taiga-ui/cdk */ 1006);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @taiga-ui/cdk */ 160);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/cdk */ 7899);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @taiga-ui/cdk */ 5351);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_core_directives_hint__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @taiga-ui/core/directives/hint */ 6839);
/* harmony import */ var _taiga_ui_core_directives_textfield_controller__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/core/directives */ 9289);
/* harmony import */ var _taiga_ui_core_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/core/utils/miscellaneous */ 6775);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6424);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 409);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5333);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8004);
/* harmony import */ var _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @taiga-ui/core/components/svg */ 9313);
/* harmony import */ var _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core/enums */ 4311);
/* harmony import */ var _taiga_ui_core_components_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @taiga-ui/core/components/tooltip */ 9816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @taiga-ui/core/directives/wrapper */ 3585);
/* harmony import */ var _taiga_ui_core_directives_mask_accessor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @taiga-ui/core/directives/mask-accessor */ 589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @taiga-ui/core/abstract */ 8305);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);































const _c0 = ["pre"];
const _c1 = ["focusableElement"];
function TuiPrimitiveTextfieldComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TuiPrimitiveTextfieldComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TuiPrimitiveTextfieldComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TuiPrimitiveTextfieldComponent_div_12_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 20);
  }
  if (rf & 2) {
    const src_r12 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r12);
  }
}
const _c2 = function (a0) {
  return {
    $implicit: a0
  };
};
function TuiPrimitiveTextfieldComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveTextfieldComponent_div_12_tui_svg_1_Template, 1, 1, "tui-svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r4.iconLeftContent)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r4.size));
  }
}
function TuiPrimitiveTextfieldComponent_label_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-placeholder_raised", ctx_r5.placeholderRaised);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r5.computedId);
  }
}
function TuiPrimitiveTextfieldComponent_div_20_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 24);
  }
  if (rf & 2) {
    const src_r14 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r14);
  }
}
function TuiPrimitiveTextfieldComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveTextfieldComponent_div_20_tui_svg_1_Template, 1, 1, "tui-svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r7.controller.customContent);
  }
}
function TuiPrimitiveTextfieldComponent_span_21_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 27);
  }
  if (rf & 2) {
    const src_r16 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r16);
  }
}
function TuiPrimitiveTextfieldComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click.stop", function TuiPrimitiveTextfieldComponent_span_21_Template_span_click_stop_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveTextfieldComponent_span_21_tui_svg_1_Template, 1, 1, "tui-svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r8.iconCleaner || ctx_r8.controller.options.iconCleaner)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r8.size));
  }
}
function TuiPrimitiveTextfieldComponent_tui_tooltip_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-tooltip", 28);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r9.hintOptions == null ? null : ctx_r9.hintOptions.content)("describeId", ctx_r9.computedId);
  }
}
function TuiPrimitiveTextfieldComponent_div_23_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 20);
  }
  if (rf & 2) {
    const src_r20 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r20);
  }
}
function TuiPrimitiveTextfieldComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveTextfieldComponent_div_23_tui_svg_1_Template, 1, 1, "tui-svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r10.iconContent)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r10.size));
  }
}
const _c3 = [[["input"]], [["select"]], [["tuiContent"]], "*"];
const _c4 = ["input", "select", "tuiContent", "*"];
const _c5 = ["tuiTextfield", ""];
let TuiValueDecorationComponent = /*#__PURE__*/(() => {
  class TuiValueDecorationComponent {
    constructor(textfield, fontsReady$) {
      this.textfield = textfield;
      this.fontsReady$ = fontsReady$;
      this.prefix$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
      this.pre$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.fontsReady$, this.prefix$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(() => {
        var _a;
        return !!((_a = this.pre) === null || _a === void 0 ? void 0 : _a.nativeElement.isConnected);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
        var _a;
        return ((_a = this.pre) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetWidth) || 0;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)());
    }
    get isContextTable() {
      return this.textfield.appearance === _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_7__.TuiAppearance.Table;
    }
    get value() {
      return this.textfield.value;
    }
    get filler() {
      const {
        focused,
        placeholder,
        exampleText,
        value,
        textfield
      } = this;
      if (placeholder && exampleText) {
        return '';
      }
      return focused ? exampleText || textfield.filler.slice(value.length) : '';
    }
    get prefix() {
      return this.decorationsVisible ? this.textfield.prefix : '';
    }
    get postfix() {
      return this.decorationsVisible ? this.computedPostfix : '';
    }
    ngDoCheck() {
      this.prefix$.next(this.prefix);
    }
    get placeholder() {
      var _a;
      return ((_a = this.textfield.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.placeholder) || '';
    }
    get exampleText() {
      return !this.value && this.focused ? this.placeholder : '';
    }
    get decorationsVisible() {
      return !!this.value || this.focused && !this.placeholder;
    }
    get focused() {
      return this.textfield.computedFocused && !this.textfield.readOnly;
    }
    get computedPostfix() {
      return this.textfield.postfix && (this.filler || this.value) ? ` ${this.textfield.postfix}` : this.textfield.postfix;
    }
  }
  TuiValueDecorationComponent.ɵfac = function TuiValueDecorationComponent_Factory(t) {
    return new (t || TuiValueDecorationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.TUI_FOCUSABLE_ITEM_ACCESSOR), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.TUI_FONTS_READY));
  };
  TuiValueDecorationComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiValueDecorationComponent,
    selectors: [["tui-value-decoration"]],
    viewQuery: function TuiValueDecorationComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pre = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function TuiValueDecorationComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationstart", function TuiValueDecorationComponent_animationstart_HostBindingHandler() {
          return ctx.ngDoCheck();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_table", ctx.isContextTable)("_filler", ctx.filler);
      }
    },
    decls: 5,
    vars: 4,
    consts: [[1, "t-prefix", 3, "textContent"], ["pre", ""], [1, "t-ghost", 3, "textContent"], [1, "t-filler", 3, "textContent"], [1, "t-postfix", 3, "textContent"]],
    template: function TuiValueDecorationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0, 1)(2, "span", 2)(3, "span", 3)(4, "span", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", ctx.prefix);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", ctx.filler);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", ctx.postfix);
      }
    },
    styles: ["[_nghost-%COMP%]{position:absolute;display:block;width:100%;line-height:var(--tui-height);margin-top:calc(var(--tui-height) / -2);box-sizing:content-box;color:var(--tui-text-03);animation:tuiPresent 1s;white-space:nowrap}._table[_nghost-%COMP%]{position:static;margin-top:0}._filler[_nghost-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}tui-primitive-textfield   [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]{color:var(--tui-text-03-night)}tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]{line-height:calc(var(--tui-height) - .25rem)}.t-ghost[_ngcontent-%COMP%]{visibility:hidden;white-space:pre;text-overflow:clip}.t-prefix[_ngcontent-%COMP%], .t-postfix[_ngcontent-%COMP%]{white-space:pre;color:var(--tui-text-01)}tui-primitive-textfield   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]   .t-prefix[_ngcontent-%COMP%], tui-primitive-textfield   [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]   .t-prefix[_ngcontent-%COMP%], tui-primitive-textfield   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]   .t-postfix[_ngcontent-%COMP%], tui-primitive-textfield   [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]   .t-postfix[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.t-filler[_ngcontent-%COMP%]{max-width:100%;white-space:nowrap}"]
  });
  return TuiValueDecorationComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_ICON_PADDINGS = {
  s: 1.25,
  m: 1.75,
  l: 2.25
};
let TuiPrimitiveTextfieldComponent = /*#__PURE__*/(() => {
  class TuiPrimitiveTextfieldComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__.AbstractTuiInteractive {
    constructor(controller, hintOptions, options, el) {
      super();
      this.controller = controller;
      this.hintOptions = hintOptions;
      this.options = options;
      this.el = el;
      this.editable = true;
      /** @deprecated use `tuiTextfieldFiller` from {@link TuiTextfieldControllerModule} instead */
      this.textfieldFiller = '';
      /**
       * @deprecated:
       * use `tuiTextfieldOptionsProvider({iconCleaner: `tuiIconChevronUp`})`
       */
      this.iconCleaner = this.options.iconCleaner;
      this.readOnly = false;
      this.invalid = false;
      this.disabled = false;
      /** @deprecated use `tuiTextfieldPrefix` from {@link TuiTextfieldControllerModule} instead */
      this.textfieldPrefix = '';
      /** @deprecated use `tuiTextfieldPostfix` from {@link TuiTextfieldControllerModule} instead */
      this.textfieldPostfix = '';
      this.value = '';
      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.autofilled = false;
    }
    get prefix() {
      return this.textfieldPrefix || this.controller.prefix;
    }
    get postfix() {
      return this.textfieldPostfix || this.controller.postfix;
    }
    get filler() {
      return this.textfieldFiller || this.controller.filler;
    }
    get nativeFocusableElement() {
      if (this.computedDisabled || !this.focusableElement) {
        return null;
      }
      const {
        nativeElement
      } = this.focusableElement;
      return nativeElement.previousElementSibling || nativeElement;
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiIsNativeFocusedIn)(this.el.nativeElement);
    }
    get appearance() {
      return this.controller.appearance;
    }
    get size() {
      return this.controller.size;
    }
    get computedInvalid() {
      return !this.readOnly && !this.disabled && this.invalid;
    }
    get inputHidden() {
      var _a;
      return !!((_a = this.content) === null || _a === void 0 ? void 0 : _a.length);
    }
    get hasValue() {
      return !!this.value;
    }
    get hasCleaner() {
      return this.controller.cleaner && this.hasValue && !this.computedDisabled && !this.readOnly;
    }
    get hasTooltip() {
      var _a;
      return !!((_a = this.hintOptions) === null || _a === void 0 ? void 0 : _a.content) && !this.computedDisabled;
    }
    get hasCustomContent() {
      return !!this.controller.customContent;
    }
    get placeholderVisible() {
      var _a;
      const hasDecor = ((_a = this.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.placeholder) || this.prefix || this.postfix || this.filler;
      const showDecor = hasDecor && !this.readOnly && this.computedFocused;
      return !this.hasValue && !showDecor;
    }
    get hasPlaceholder() {
      return this.placeholderRaisable || this.placeholderVisible;
    }
    get placeholderRaised() {
      return this.placeholderRaisable && (this.computedFocused && !this.readOnly || this.hasValue || this.autofilled);
    }
    get borderStart() {
      return this.iconLeftContent ? this.iconPaddingLeft : 0;
    }
    get borderEnd() {
      return (0,_taiga_ui_core_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_11__.tuiGetBorder)(!!this.iconContent, this.hasCleaner, this.hasTooltip, this.hasCustomContent, this.size);
    }
    get iconContent() {
      return this.controller.icon;
    }
    get iconLeftContent() {
      return this.controller.iconLeft;
    }
    get showHint() {
      var _a;
      return !!((_a = this.hintOptions) === null || _a === void 0 ? void 0 : _a.content) && (this.options.hintOnDisabled || !this.computedDisabled);
    }
    // Safari expiration date autofill workaround
    get name() {
      var _a;
      return ((_a = this.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.autocomplete) === 'cc-exp' ? 'ccexpiryyear' : null;
    }
    get computedId() {
      var _a;
      return ((_a = this.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.id) || '';
    }
    onFocused(focused) {
      this.updateFocused(focused);
    }
    getIndent$(element) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(element, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => -1 * Math.max(element.scrollLeft, 0)));
    }
    clear() {
      if (this.nativeFocusableElement) {
        this.nativeFocusableElement.value = '';
      }
      this.updateValue('');
    }
    onMouseDown(event) {
      const {
        nativeFocusableElement
      } = this;
      if (!nativeFocusableElement || event.target === nativeFocusableElement) {
        return;
      }
      event.preventDefault();
      nativeFocusableElement.focus();
    }
    onModelChange(value) {
      this.updateValue(value);
    }
    onAutofilled(autofilled) {
      this.updateAutofilled(autofilled);
    }
    detectRetargetFromLabel(event) {
      if ((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_13__.tuiRetargetedBoundaryCrossing)(event)) {
        event.stopImmediatePropagation();
      }
    }
    get iconPaddingLeft() {
      return TUI_ICON_PADDINGS[this.size];
    }
    get placeholderRaisable() {
      return this.size !== 's' && !this.controller.labelOutside;
    }
    updateAutofilled(autofilled) {
      if (this.autofilled === autofilled) {
        return;
      }
      this.autofilled = autofilled;
    }
    updateValue(value) {
      this.value = value;
      this.valueChange.emit(value);
    }
  }
  TuiPrimitiveTextfieldComponent.ɵfac = function TuiPrimitiveTextfieldComponent_Factory(t) {
    return new (t || TuiPrimitiveTextfieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives_textfield_controller__WEBPACK_IMPORTED_MODULE_14__.TUI_TEXTFIELD_WATCHED_CONTROLLER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives_hint__WEBPACK_IMPORTED_MODULE_15__.TuiHintOptionsDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives_textfield_controller__WEBPACK_IMPORTED_MODULE_14__.TUI_TEXTFIELD_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  TuiPrimitiveTextfieldComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiPrimitiveTextfieldComponent,
    selectors: [["tui-primitive-textfield"]],
    contentQueries: function TuiPrimitiveTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__.PolymorpheusOutletDirective, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t);
      }
    },
    viewQuery: function TuiPrimitiveTextfieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusableElement = _t.first);
      }
    },
    hostVars: 15,
    hostBindings: function TuiPrimitiveTextfieldComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function TuiPrimitiveTextfieldComponent_focusin_HostBindingHandler() {
          return ctx.onFocused(true);
        })("focusout", function TuiPrimitiveTextfieldComponent_focusout_HostBindingHandler() {
          return ctx.onFocused(false);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--border-start", ctx.borderStart, "rem")("--border-end", ctx.borderEnd, "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_autofilled", ctx.autofilled)("_label-outside", ctx.controller.labelOutside)("_readonly", ctx.readOnly)("_invalid", ctx.computedInvalid)("_hidden", ctx.inputHidden);
      }
    },
    inputs: {
      editable: "editable",
      textfieldFiller: ["filler", "textfieldFiller"],
      iconCleaner: "iconCleaner",
      readOnly: "readOnly",
      invalid: "invalid",
      disabled: "disabled",
      textfieldPrefix: ["prefix", "textfieldPrefix"],
      textfieldPostfix: ["postfix", "textfieldPostfix"],
      value: "value"
    },
    outputs: {
      valueChange: "valueChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.tuiAsFocusableItemAccessor)(TuiPrimitiveTextfieldComponent), _taiga_ui_core_directives_textfield_controller__WEBPACK_IMPORTED_MODULE_14__.TEXTFIELD_CONTROLLER_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c4,
    decls: 24,
    vars: 37,
    consts: [[4, "ngIf"], ["automation-id", "tui-primitive-textfield__wrapper", "tuiWrapper", "", 3, "active", "appearance", "disabled", "focus", "hover", "invalid", "readOnly", "click.prevent.silent", "mousedown", "tuiAutofilledChange"], ["automation-id", "tui-primitive-textfield__native-input", "tuiMaskAccessor", "", 1, "t-input", 3, "disabled", "id", "ngModel", "readOnly", "tuiFocusable", "ngModelChange"], ["focusableElement", ""], ["automation-id", "tui-primitive-textfield__value", "class", "t-input t-input_template", 4, "ngIf"], [1, "t-content"], ["class", "t-icon t-icon_left t-textfield-icon", 4, "ngIf"], [1, "t-wrapper"], ["automation-id", "tui-primitive-textfield__placeholder", "class", "t-placeholder", 3, "t-placeholder_raised", "for", 4, "ngIf"], [1, "t-wrapper-value-decoration"], ["aria-hidden", "true", "automation-id", "tui-primitive-textfield__value-decoration", 1, "t-value-decoration"], ["decor", ""], [1, "t-icons"], ["automation-id", "tui-primitive-textfield__custom-content", "class", "t-custom-content", 4, "ngIf"], ["appearance", "icon", "automation-id", "tui-primitive-textfield__cleaner", "tuiWrapper", "", "class", "t-cleaner", 3, "click.stop", 4, "ngIf"], ["automation-id", "tui-primitive-textfield__tooltip", "class", "t-tooltip", 3, "content", "describeId", 4, "ngIf"], ["class", "t-icon t-textfield-icon", 4, "ngIf"], ["automation-id", "tui-primitive-textfield__value", 1, "t-input", "t-input_template"], [1, "t-icon", "t-icon_left", "t-textfield-icon"], ["appearance", "icon", "tuiWrapper", "", 3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "icon", "tuiWrapper", "", 3, "src"], ["automation-id", "tui-primitive-textfield__placeholder", 1, "t-placeholder", 3, "for"], ["automation-id", "tui-primitive-textfield__custom-content", 1, "t-custom-content"], ["class", "t-custom-icon", 3, "src", 4, "polymorpheusOutlet"], [1, "t-custom-icon", 3, "src"], ["appearance", "icon", "automation-id", "tui-primitive-textfield__cleaner", "tuiWrapper", "", 1, "t-cleaner", 3, "click.stop"], [3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "src"], ["automation-id", "tui-primitive-textfield__tooltip", 1, "t-tooltip", 3, "content", "describeId"], [1, "t-icon", "t-textfield-icon"]],
    template: function TuiPrimitiveTextfieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiPrimitiveTextfieldComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiPrimitiveTextfieldComponent_ng_container_2_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click.prevent.silent", function TuiPrimitiveTextfieldComponent_Template_div_click_prevent_silent_4_listener($event) {
          return ctx.detectRetargetFromLabel($event);
        })("mousedown", function TuiPrimitiveTextfieldComponent_Template_div_mousedown_4_listener($event) {
          return ctx.onMouseDown($event);
        })("tuiAutofilledChange", function TuiPrimitiveTextfieldComponent_Template_div_tuiAutofilledChange_4_listener($event) {
          return ctx.onAutofilled($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiPrimitiveTextfieldComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.onModelChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TuiPrimitiveTextfieldComponent_div_10_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TuiPrimitiveTextfieldComponent_div_12_Template, 2, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TuiPrimitiveTextfieldComponent_label_14_Template, 2, 3, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "tui-value-decoration", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TuiPrimitiveTextfieldComponent_div_20_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TuiPrimitiveTextfieldComponent_span_21_Template, 2, 4, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TuiPrimitiveTextfieldComponent_tui_tooltip_22_Template, 1, 2, "tui-tooltip", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TuiPrimitiveTextfieldComponent_div_23_Template, 2, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 29, ctx.content == null ? null : ctx.content.changes));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 31, ctx.hintOptions == null ? null : ctx.hintOptions.change$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--text-indent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 33, _r6.pre$), "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.pseudoActive)("appearance", ctx.appearance)("disabled", ctx.disabled)("focus", ctx.computedFocused)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.computedDisabled)("id", ctx.id)("ngModel", ctx.value)("readOnly", ctx.readOnly || !ctx.editable)("tuiFocusable", ctx.computedFocusable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", ctx.computedInvalid)("name", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconLeftContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-indent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 35, ctx.getIndent$(_r2)), "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-has-value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasCustomContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasCleaner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconContent);
      }
    },
    dependencies: [_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_17__.TuiSvgComponent, TuiValueDecorationComponent, _taiga_ui_core_components_tooltip__WEBPACK_IMPORTED_MODULE_18__.TuiTooltipComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_20__.TuiWrapperDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.TuiAutofilledDirective, _taiga_ui_core_directives_mask_accessor__WEBPACK_IMPORTED_MODULE_22__.TuiMaskAccessorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_24__.TuiFocusableDirective, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__.PolymorpheusOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:block;text-align:left;border-radius:var(--tui-radius-m);height:var(--tui-height);min-height:var(--tui-height);max-height:var(--tui-height)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}.t-input[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input[_ngcontent-%COMP%]::-webkit-caps-lock-indicator, .t-input[_ngcontent-%COMP%]::-webkit-contacts-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{opacity:1}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus, .t-input   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:focus, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01-night)!important;border-color:var(--tui-autofill-night);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill-night) inset!important}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, .t-input   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]::placeholder, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]::placeholder{color:var(--tui-text-03-night)}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"s\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size=\"s\"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size=\"s\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"m\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"m\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size=\"m\"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size=\"m\"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size=\"m\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"m\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"l\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size=\"l\"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size=\"l\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-input   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], .t-input   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input.t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em;-webkit-user-select:none}.t-content[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;box-sizing:border-box;align-items:center;overflow:hidden}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-l)}.t-wrapper[_ngcontent-%COMP%]{flex:1;min-width:0;-webkit-padding-end:.25rem;padding-inline-end:.25rem}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill)}._invalid[_nghost-%COMP%]:not(._focused)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill-night)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01)}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}._focused[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-start:-.375rem;margin-inline-start:-.375rem}[data-size=m][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-start:-.125rem;margin-inline-start:-.125rem;-webkit-margin-end:.375rem;margin-inline-end:.375rem}[data-size=l][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-end:.75rem;margin-inline-end:.75rem}.t-icons[_ngcontent-%COMP%]{display:flex;align-items:center}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}[data-size=s][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{-webkit-margin-end:-.375rem;margin-inline-end:-.375rem}[_nghost-%COMP%]:not([data-size=\"s\"])   .t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){-webkit-margin-start:.25rem;margin-inline-start:.25rem}._autofilled[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled[_nghost-%COMP%]   .t-value-decoration[_ngcontent-%COMP%]:not(.t-has-value){visibility:hidden}.t-custom-content[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;min-width:2rem;height:2rem;pointer-events:none}.t-custom-icon[_ngcontent-%COMP%]{width:2rem;height:100%}.t-input[_ngcontent-%COMP%]:not(:first-child){display:none}[data-size][_nghost-%COMP%]   .t-input_template[_ngcontent-%COMP%]{display:flex;width:calc(100% - 1rem);max-width:calc(100% - 1rem);align-items:center;pointer-events:none;-webkit-padding-end:0;padding-inline-end:0}.t-text-template[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-wrapper-value-decoration[_ngcontent-%COMP%]{position:relative;pointer-events:none}"],
    changeDetection: 0
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_26__.tuiPure], TuiPrimitiveTextfieldComponent.prototype, "getIndent$", null);
  return TuiPrimitiveTextfieldComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiPrimitiveTextfieldDirective = /*#__PURE__*/(() => {
  class TuiPrimitiveTextfieldDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_27__.AbstractTuiTextfieldHost {
    constructor(textfield) {
      /**
       * TuiPrimitiveTextfieldComponent satisfies all required parts of
       * AbstractTuiControl interface. A new interface is not introduced
       * so AbstractTuiControl is automatically injected for all other controls.
       */
      super(textfield);
      this.textfield = textfield;
    }
    get readOnly() {
      return this.textfield.readOnly || !this.textfield.editable;
    }
    onValueChange(value) {
      this.textfield.onModelChange(value);
    }
  }
  TuiPrimitiveTextfieldDirective.ɵfac = function TuiPrimitiveTextfieldDirective_Factory(t) {
    return new (t || TuiPrimitiveTextfieldDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiPrimitiveTextfieldComponent));
  };
  TuiPrimitiveTextfieldDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiPrimitiveTextfieldDirective,
    selectors: [["tui-primitive-textfield"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_28__.tuiAsTextfieldHost)(TuiPrimitiveTextfieldDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiPrimitiveTextfieldDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiTextfieldComponent = /*#__PURE__*/(() => {
  class TuiTextfieldComponent {
    constructor(host, controller, el, idService, legacyMask) {
      this.host = host;
      this.controller = controller;
      this.el = el;
      this.idService = idService;
      this.legacyMask = legacyMask;
      this.host.process(this.el.nativeElement);
    }
    get id() {
      return this.el.nativeElement.id || this.idService.generate();
    }
    get inputMode() {
      return this.el.nativeElement.inputMode || this.host.inputMode;
    }
  }
  TuiTextfieldComponent.ɵfac = function TuiTextfieldComponent_Factory(t) {
    return new (t || TuiTextfieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_28__.TUI_TEXTFIELD_HOST), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives_textfield_controller__WEBPACK_IMPORTED_MODULE_14__.TUI_TEXTFIELD_WATCHED_CONTROLLER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_29__.TuiIdService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_28__.TUI_LEGACY_MASK, 8));
  };
  TuiTextfieldComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiTextfieldComponent,
    selectors: [["input", "tuiTextfield", ""], ["textarea", "tuiTextfield", ""]],
    hostAttrs: ["type", "text"],
    hostVars: 7,
    hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TuiTextfieldComponent_input_HostBindingHandler($event) {
          return !ctx.legacyMask && ctx.host.onValueChange($event.target.value);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabIndex", ctx.host.focusable ? 0 : -1)("readOnly", ctx.host.readOnly)("value", ctx.host.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("inputMode", ctx.inputMode)("aria-invalid", ctx.host.invalid)("disabled", ctx.host.disabled || null);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_core_directives_textfield_controller__WEBPACK_IMPORTED_MODULE_14__.TEXTFIELD_CONTROLLER_PROVIDER])],
    attrs: _c5,
    decls: 0,
    vars: 0,
    template: function TuiTextfieldComponent_Template(rf, ctx) {},
    styles: ["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:hover, [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}[_nghost-%COMP%]::-webkit-caps-lock-indicator, [_nghost-%COMP%]::-webkit-contacts-auto-fill-button, [_nghost-%COMP%]::-webkit-credit-card-auto-fill-button, [_nghost-%COMP%]::-webkit-credentials-auto-fill-button, [_nghost-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}[_nghost-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   [_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]::placeholder{opacity:1}[tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]:-webkit-autofill:hover, [_nghost-%COMP%]   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]:-webkit-autofill:focus, [_nghost-%COMP%]   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:focus, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01-night)!important;border-color:var(--tui-autofill-night);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill-night) inset!important}[tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]::placeholder, [_nghost-%COMP%]   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]::placeholder, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]::placeholder{color:var(--tui-text-03-night)}[data-size=s][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size=\"s\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size=\"s\"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size=\"s\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size=\"m\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"m\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size=\"m\"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size=\"m\"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size=\"m\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"m\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size=\"l\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size=\"l\"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size=\"l\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em;-webkit-user-select:none}textarea[_nghost-%COMP%]{white-space:pre-wrap}textarea[_nghost-%COMP%]   tui-textarea._ios[_nghost-%COMP%], tui-textarea._ios   [_nghost-%COMP%], textarea[_nghost-%COMP%]   tui-text-area._ios[_nghost-%COMP%], tui-text-area._ios   [_nghost-%COMP%]{padding-left:.8125rem}"],
    changeDetection: 0
  });
  return TuiTextfieldComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiPrimitiveTextfieldModule = /*#__PURE__*/(() => {
  class TuiPrimitiveTextfieldModule {}
  TuiPrimitiveTextfieldModule.ɵfac = function TuiPrimitiveTextfieldModule_Factory(t) {
    return new (t || TuiPrimitiveTextfieldModule)();
  };
  TuiPrimitiveTextfieldModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiPrimitiveTextfieldModule
  });
  TuiPrimitiveTextfieldModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__.PolymorpheusModule, _taiga_ui_core_directives_mask_accessor__WEBPACK_IMPORTED_MODULE_22__.TuiMaskAccessorModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_24__.TuiFocusableModule, _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_20__.TuiWrapperModule, _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_17__.TuiSvgModule, _taiga_ui_core_components_tooltip__WEBPACK_IMPORTED_MODULE_18__.TuiTooltipModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.TuiAutofilledModule]]
  });
  return TuiPrimitiveTextfieldModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @deprecated:
 * use {@link TUI_TEXTFIELD_DEFAULT_OPTIONS}
 */
const TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS = _taiga_ui_core_directives_textfield_controller__WEBPACK_IMPORTED_MODULE_14__.TUI_TEXTFIELD_DEFAULT_OPTIONS;
/**
 * @deprecated:
 * use {@link TUI_TEXTFIELD_OPTIONS}
 */
const TUI_PRIMITIVE_TEXTFIELD_OPTIONS = _taiga_ui_core_directives_textfield_controller__WEBPACK_IMPORTED_MODULE_14__.TUI_TEXTFIELD_OPTIONS;
/**
 * @deprecated:
 * use {@link tuiTextfieldOptionsProvider}
 */
const tuiPrimitiveTextfieldOptionsProvider = _taiga_ui_core_directives_textfield_controller__WEBPACK_IMPORTED_MODULE_14__.tuiTextfieldOptionsProvider;

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-primitive-textfield.js.map

/***/ }),

/***/ 5853:
/*!************************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-year-picker.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiPrimitiveYearPickerComponent: () => (/* binding */ TuiPrimitiveYearPickerComponent),
/* harmony export */   TuiPrimitiveYearPickerModule: () => (/* binding */ TuiPrimitiveYearPickerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 5321);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 9502);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk */ 8159);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/cdk */ 5777);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8029);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 5618);
/* harmony import */ var _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core/enums */ 4311);
/* harmony import */ var _taiga_ui_core_directives_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core/directives/scroll-into-view */ 1899);







function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.tuiLet;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onItemClick(item_r5));
    })("tuiHoveredChange", function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.tuiLet;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onItemHovered($event, item_r5));
    })("tuiPressedChange", function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template_div_tuiPressedChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.tuiLet;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onItemPressed($event, item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.tuiLet;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-cell_interval", ctx_r4.itemIsInterval(item_r5))("t-cell_today", ctx_r4.itemIsToday(item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiScrollIntoView", ctx_r4.scrollItemIntoView(item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-range", ctx_r4.getItemRange(item_r5))("data-state", ctx_r4.getItemState(item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5);
  }
}
function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template, 3, 8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const colIndex_r3 = ctx.$implicit;
    const rowIndex_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", ctx_r2.getItem(rowIndex_r1, colIndex_r3));
  }
}
function TuiPrimitiveYearPickerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiPrimitiveYearPickerComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRepeatTimesOf", 4);
  }
}
const LIMIT = 100;
const ITEMS_IN_ROW = 4;
let TuiPrimitiveYearPickerComponent = /*#__PURE__*/(() => {
  class TuiPrimitiveYearPickerComponent {
    constructor() {
      this.hoveredItem = null;
      this.pressedItem = null;
      this.currentYear = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiMonth.currentLocal().year;
      this.value = null;
      this.initialItem = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiMonth.currentLocal();
      this.min = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_FIRST_DAY;
      this.max = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_LAST_DAY;
      this.disabledItemHandler = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.ALWAYS_FALSE_HANDLER;
      this.yearClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get computedMin() {
      var _a;
      return (_a = this.min) !== null && _a !== void 0 ? _a : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_FIRST_DAY;
    }
    get computedMax() {
      var _a;
      return (_a = this.max) !== null && _a !== void 0 ? _a : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_LAST_DAY;
    }
    get isSingle() {
      return this.isRange(this.value) && this.value.from.yearSame(this.value.to);
    }
    get rows() {
      return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
    }
    get calculatedMin() {
      const initial = this.initialItem.year - LIMIT;
      const min = this.computedMin;
      return min.year > initial ? min.year : initial;
    }
    get calculatedMax() {
      const initial = this.initialItem.year + LIMIT;
      const max = this.computedMax;
      return max.year < initial ? max.year + 1 : initial;
    }
    isRange(item) {
      return item instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiMonthRange;
    }
    scrollItemIntoView(item) {
      return this.initialItem.year === item;
    }
    getItem(rowIndex, colIndex) {
      return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }
    getItemState(item) {
      const {
        disabledItemHandler,
        pressedItem,
        hoveredItem
      } = this;
      const max = this.computedMax;
      if (max.year < item || disabledItemHandler !== _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.ALWAYS_FALSE_HANDLER && disabledItemHandler(item)) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_3__.TuiInteractiveState.Disabled;
      }
      if (pressedItem === item) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_3__.TuiInteractiveState.Active;
      }
      if (hoveredItem === item) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_3__.TuiInteractiveState.Hover;
      }
      return null;
    }
    getItemRange(item) {
      const {
        value,
        hoveredItem
      } = this;
      if (value === null) {
        return null;
      }
      if (value instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiYear) {
        return value.year === item ? _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_3__.TuiRangeState.Single : null;
      }
      if (!(value instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiMonthRange)) {
        return value.find(day => day.year === item) ? _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_3__.TuiRangeState.Single : null;
      }
      if (value.from.year === item && !value.from.yearSame(value.to) || hoveredItem !== null && hoveredItem > value.from.year && value.from.year === item && value.from.yearSame(value.to) || hoveredItem !== null && hoveredItem === item && hoveredItem < value.from.year && value.from.yearSame(value.to)) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_3__.TuiRangeState.Start;
      }
      if (value.to.year === item && !value.from.yearSame(value.to) || hoveredItem !== null && hoveredItem < value.from.year && value.from.year === item && value.from.yearSame(value.to) || hoveredItem !== null && hoveredItem === item && hoveredItem > value.from.year && value.from.yearSame(value.to)) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_3__.TuiRangeState.End;
      }
      return value.from.yearSame(value.to) && value.from.year === item ? _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_3__.TuiRangeState.Single : null;
    }
    itemIsToday(item) {
      return this.currentYear === item;
    }
    itemIsInterval(item) {
      const {
        value,
        hoveredItem
      } = this;
      if (value === null || !this.isRange(value)) {
        return false;
      }
      if (!value.from.yearSame(value.to)) {
        return value.from.year <= item && value.to.year > item;
      }
      if (hoveredItem === null || value.from.year === hoveredItem) {
        return false;
      }
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.tuiInRange)(item, Math.min(value.from.year, hoveredItem), Math.max(value.from.year, hoveredItem));
    }
    onItemHovered(hovered, item) {
      this.updateHoveredItem(hovered, item);
    }
    onItemPressed(pressed, item) {
      this.updatePressedItem(pressed, item);
    }
    onItemClick(item) {
      this.yearClick.emit(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiYear(item));
    }
    updateHoveredItem(hovered, item) {
      this.hoveredItem = hovered ? item : null;
    }
    updatePressedItem(pressed, item) {
      this.pressedItem = pressed ? item : null;
    }
  }
  TuiPrimitiveYearPickerComponent.ɵfac = function TuiPrimitiveYearPickerComponent_Factory(t) {
    return new (t || TuiPrimitiveYearPickerComponent)();
  };
  TuiPrimitiveYearPickerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiPrimitiveYearPickerComponent,
    selectors: [["tui-primitive-year-picker"]],
    hostVars: 2,
    hostBindings: function TuiPrimitiveYearPickerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_single", ctx.isSingle);
      }
    },
    inputs: {
      value: "value",
      initialItem: "initialItem",
      min: "min",
      max: "max",
      disabledItemHandler: "disabledItemHandler"
    },
    outputs: {
      yearClick: "yearClick"
    },
    decls: 1,
    vars: 1,
    consts: [["automation-id", "tui-primitive-year-picker__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-primitive-year-picker__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-primitive-year-picker__cell", "class", "t-cell", 3, "t-cell_interval", "t-cell_today", "tuiScrollIntoView", "click", "tuiHoveredChange", "tuiPressedChange", 4, "tuiLet"], ["automation-id", "tui-primitive-year-picker__cell", 1, "t-cell", 3, "tuiScrollIntoView", "click", "tuiHoveredChange", "tuiPressedChange"], [1, "t-item"]],
    template: function TuiPrimitiveYearPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiPrimitiveYearPickerComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRepeatTimesOf", ctx.rows);
      }
    },
    dependencies: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.TuiRepeatTimesDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TuiLetDirective, _taiga_ui_core_directives_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__.TuiScrollIntoViewDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.TuiHoveredDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__.TuiPressedDirective],
    styles: ["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;height:2.25rem;isolation:isolate}.t-item[_ngcontent-%COMP%]{position:relative;flex:1;line-height:2rem;border-radius:var(--tui-radius-m)}.t-item[_ngcontent-%COMP%]:before, .t-item[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;border-radius:var(--tui-radius-m)}.t-item[_ngcontent-%COMP%]:after{border-radius:.5rem}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:3.9375rem;text-align:center;outline:none;cursor:pointer;background-clip:content-box;box-sizing:border-box;border:.125rem solid transparent}.t-cell[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;border-radius:var(--tui-radius-m)}.t-cell_today[_ngcontent-%COMP%]:after{position:absolute;left:50%;transform:translate(-50%);content:\"\";bottom:.3125rem;height:.125rem;width:.75rem;border-radius:.375rem;background-color:var(--tui-text-01)}.t-cell_interval[_ngcontent-%COMP%]:before{background:var(--tui-base-02)}._single[_nghost-%COMP%]   .t-cell_interval[_ngcontent-%COMP%]:before{background:var(--tui-secondary-hover)}.t-cell_interval[_ngcontent-%COMP%]:not(:last-child):before{right:-.25rem;border-top-right-radius:0;border-bottom-right-radius:0}.t-cell_interval[_ngcontent-%COMP%]:not([data-range=\"start\"]):not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell_interval[_ngcontent-%COMP%]:last-child:first-child:before{right:0}.t-cell_interval[_ngcontent-%COMP%]:first-child > .t-item[_ngcontent-%COMP%]{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.t-cell_interval[_ngcontent-%COMP%]:last-child > .t-item[_ngcontent-%COMP%]{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.t-cell_interval[_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{border-radius:0}.t-cell[data-range][_ngcontent-%COMP%]:after{background-color:var(--tui-primary-text)}.t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{color:var(--tui-primary-text)}.t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary)}.t-cell[data-range][data-state=hover][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][data-state=hover][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary-hover)}.t-cell[data-range][data-state=active][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][data-state=active][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary-active)}.t-cell[data-range=end][_ngcontent-%COMP%]:before{background:var(--tui-base-02)}._single[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]:before{background:var(--tui-secondary-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=end][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before{left:.625rem;border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=end][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{left:-2rem;right:100%;transform:translate(1.6rem) scaleY(.83) scaleX(.5) rotate(45deg)}.t-cell[data-range=start][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before{right:.625rem;border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{left:100%;right:-2rem;transform:translate(-1.6rem) scaleY(.83) scaleX(.5) rotate(45deg)}.t-cell[data-range=single][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{display:none}.t-cell[data-state=disabled][_ngcontent-%COMP%]{pointer-events:none}.t-cell[data-state=disabled][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{opacity:.36}.t-cell[data-state=hover][_ngcontent-%COMP%]:hover:not([data-range]) > .t-item[_ngcontent-%COMP%]{background-color:var(--tui-secondary-hover)}.t-cell[data-state=active][_ngcontent-%COMP%]:hover:not([data-range]) > .t-item[_ngcontent-%COMP%]{background-color:var(--tui-secondary-active)}[_nghost-%COMP%]{width:15.75rem}.t-row[_ngcontent-%COMP%]{margin:.875rem 0}.t-row[_ngcontent-%COMP%]:first-child{margin-top:0}.t-row[_ngcontent-%COMP%]:last-child{margin-bottom:0}"],
    changeDetection: 0
  });
  return TuiPrimitiveYearPickerComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiPrimitiveYearPickerModule = /*#__PURE__*/(() => {
  class TuiPrimitiveYearPickerModule {}
  TuiPrimitiveYearPickerModule.ɵfac = function TuiPrimitiveYearPickerModule_Factory(t) {
    return new (t || TuiPrimitiveYearPickerModule)();
  };
  TuiPrimitiveYearPickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiPrimitiveYearPickerModule
  });
  TuiPrimitiveYearPickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.TuiHoveredModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__.TuiPressedModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.TuiRepeatTimesModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TuiLetModule, _taiga_ui_core_directives_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__.TuiScrollIntoViewModule]]
  });
  return TuiPrimitiveYearPickerModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-primitive-year-picker.js.map

/***/ }),

/***/ 3718:
/*!************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-scrollbar.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SCROLL_REF_SELECTOR: () => (/* binding */ SCROLL_REF_SELECTOR),
/* harmony export */   TuiScrollRefDirective: () => (/* binding */ TuiScrollRefDirective),
/* harmony export */   TuiScrollableDirective: () => (/* binding */ TuiScrollableDirective),
/* harmony export */   TuiScrollbarComponent: () => (/* binding */ TuiScrollbarComponent),
/* harmony export */   TuiScrollbarModule: () => (/* binding */ TuiScrollbarModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 8910);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 5197);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 7899);
/* harmony import */ var _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/constants */ 2490);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-web-apis/common */ 5393);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6733);









/** @deprecated import from `@taiga-ui/cdk` instead */
function TuiScrollbarComponent_tui_scroll_controls_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-scroll-controls", 2);
  }
}
const _c0 = ["*"];
const SCROLL_REF_SELECTOR = '[tuiScrollRef]';
/** @deprecated import from `@taiga-ui/cdk` instead */
let TuiScrollRefDirective = /*#__PURE__*/(() => {
  class TuiScrollRefDirective {}
  TuiScrollRefDirective.ɵfac = function TuiScrollRefDirective_Factory(t) {
    return new (t || TuiScrollRefDirective)();
  };
  TuiScrollRefDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiScrollRefDirective,
    selectors: [["", "tuiScrollRef", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_SCROLL_REF,
      useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }])]
  });
  return TuiScrollRefDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiScrollableDirective = /*#__PURE__*/(() => {
  class TuiScrollableDirective {
    constructor(el) {
      this.el = el;
    }
    ngOnInit() {
      this.el.nativeElement.dispatchEvent(new CustomEvent(_taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_2__.TUI_SCROLLABLE, {
        bubbles: true,
        detail: this.el.nativeElement
      }));
    }
  }
  TuiScrollableDirective.ɵfac = function TuiScrollableDirective_Factory(t) {
    return new (t || TuiScrollableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  TuiScrollableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiScrollableDirective,
    selectors: [["", "tuiScrollable", ""]]
  });
  return TuiScrollableDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// TODO: Remove all legacy code in 4.0
let TuiScrollbarComponent = /*#__PURE__*/(() => {
  class TuiScrollbarComponent {
    constructor(cssRef, el, userAgent, isIos) {
      this.cssRef = cssRef;
      this.el = el;
      this.userAgent = userAgent;
      this.isIos = isIos;
      this.delegated = false;
      this.isLegacy = !this.cssRef.supports('position', 'sticky') || (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiIsFirefox)(this.userAgent) && !this.cssRef.supports('scrollbar-width', 'none');
      this.hidden = false;
      this.browserScrollRef = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(this.el.nativeElement);
    }
    get showScrollbars() {
      return !this.hidden && !this.isIos && (!this.isLegacy || this.delegated);
    }
    get showNative() {
      return this.isLegacy && !this.hidden && !this.delegated;
    }
    onScrollable(element) {
      this.delegated = true;
      this.browserScrollRef.nativeElement = element;
    }
    scrollIntoView(detail) {
      var _a;
      if (this.delegated) {
        return;
      }
      const {
        nativeElement
      } = this.browserScrollRef;
      const {
        offsetTop,
        offsetLeft
      } = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.tuiGetElementOffset)(nativeElement, detail);
      const {
        clientHeight,
        clientWidth
      } = nativeElement;
      const {
        offsetHeight,
        offsetWidth
      } = detail;
      const scrollTop = offsetTop + offsetHeight / 2 - clientHeight / 2;
      const scrollLeft = offsetLeft + offsetWidth / 2 - clientWidth / 2;
      // ?. for our clients on Windows XP and Chrome 49
      (_a = nativeElement.scrollTo) === null || _a === void 0 ? void 0 : _a.call(nativeElement, scrollLeft, scrollTop);
    }
  }
  TuiScrollbarComponent.ɵfac = function TuiScrollbarComponent_Factory(t) {
    return new (t || TuiScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_5__.CSS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_5__.USER_AGENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_IS_IOS));
  };
  TuiScrollbarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiScrollbarComponent,
    selectors: [["tui-scrollbar"]],
    hostVars: 2,
    hostBindings: function TuiScrollbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tui-scrollable.stop", function TuiScrollbarComponent_tui_scrollable_stop_HostBindingHandler($event) {
          return ctx.onScrollable($event.detail);
        })("tui-scroll-into-view.stop", function TuiScrollbarComponent_tui_scroll_into_view_stop_HostBindingHandler($event) {
          return ctx.scrollIntoView($event.detail);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_legacy", ctx.showNative);
      }
    },
    inputs: {
      hidden: "hidden"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_SCROLL_REF,
      deps: [TuiScrollbarComponent],
      useFactory: ({
        browserScrollRef
      }) => browserScrollRef
    }])],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [["class", "t-bars", 4, "ngIf"], [1, "t-content"], [1, "t-bars"]],
    template: function TuiScrollbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiScrollbarComponent_tui_scroll_controls_0_Template, 1, 0, "tui-scroll-controls", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showScrollbars);
      }
    },
    dependencies: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TuiScrollControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    styles: ["[_nghost-%COMP%]{position:relative;display:flex;isolation:isolate;overflow:auto}[_nghost-%COMP%]:not(._legacy){scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%]:not(._legacy)::-webkit-scrollbar, [_nghost-%COMP%]:not(._legacy)::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}._legacy[_nghost-%COMP%]{overflow:overlay}@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm){._legacy[_nghost-%COMP%]::-webkit-scrollbar, ._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb{width:1rem;height:1rem;border-radius:6.25rem;background-clip:padding-box;border:.375rem solid transparent}._legacy[_nghost-%COMP%]::-webkit-scrollbar{background-color:transparent}._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--tui-clear-hover)}._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--tui-clear-active)}._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--tui-text-03)}}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;width:100%;height:-webkit-max-content;height:max-content}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],
    changeDetection: 0
  });
  return TuiScrollbarComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiScrollbarModule = /*#__PURE__*/(() => {
  class TuiScrollbarModule {}
  TuiScrollbarModule.ɵfac = function TuiScrollbarModule_Factory(t) {
    return new (t || TuiScrollbarModule)();
  };
  TuiScrollbarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiScrollbarModule
  });
  TuiScrollbarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TuiScrollControlsModule]]
  });
  return TuiScrollbarModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-scrollbar.js.map

/***/ }),

/***/ 9313:
/*!******************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-svg.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_DEPRECATED_ICONS: () => (/* binding */ TUI_DEPRECATED_ICONS),
/* harmony export */   TUI_SVG_DEFAULT_OPTIONS: () => (/* binding */ TUI_SVG_DEFAULT_OPTIONS),
/* harmony export */   TUI_SVG_OPTIONS: () => (/* binding */ TUI_SVG_OPTIONS),
/* harmony export */   TUI_SVG_SRC_INTERCEPTORS: () => (/* binding */ TUI_SVG_SRC_INTERCEPTORS),
/* harmony export */   TuiSvgComponent: () => (/* binding */ TuiSvgComponent),
/* harmony export */   TuiSvgModule: () => (/* binding */ TuiSvgModule),
/* harmony export */   tuiSvgOptionsProvider: () => (/* binding */ tuiSvgOptionsProvider),
/* harmony export */   tuiSvgSrcInterceptors: () => (/* binding */ tuiSvgSrcInterceptors)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 4911);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 3232);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-web-apis/common */ 5393);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @taiga-ui/cdk */ 9502);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 6033);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk */ 9838);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/cdk */ 7899);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @taiga-ui/cdk */ 5351);
/* harmony import */ var _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/core/constants */ 2490);
/* harmony import */ var _taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @taiga-ui/core/services */ 4888);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var _taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/utils */ 6775);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1209);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 2425);


















function TuiSvgComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
  }
  if (rf & 2) {
    const innerHTML_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", innerHTML_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function TuiSvgComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function TuiSvgComponent_ng_container_0_ng_template_2_Template__svg_svg_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r4.use, null, "xlink");
  }
}
function TuiSvgComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiSvgComponent_ng_container_0_div_1_Template, 1, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiSvgComponent_ng_container_0_ng_template_2_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isInnerHTML)("ngIfElse", _r3);
  }
}
const TUI_DEPRECATED_ICONS = {
  tuiIconAttach: `tuiIconPaperclip`,
  tuiIconAttention: `tuiIconAlertCircle`,
  tuiIconBackCircle: `tuiIconArrowLeftCircle`,
  tuiIconCall: `tuiIconPhone`,
  tuiIconCallIn: `tuiIconPhoneIncoming`,
  tuiIconCallOut: `tuiIconPhoneOutgoing`,
  tuiIconCallTransfer: `tuiIconPhoneForwarded`,
  tuiIconCancel: `tuiIconXCircle`,
  tuiIconCancelCircle: `tuiIconSlash`,
  tuiIconCard: `tuiIconCreditCard`,
  tuiIconCards: `tuiIconCreditCard`,
  tuiIconChartBar: `tuiIconBarChart`,
  tuiIconChart: `tuiIconBarChart`,
  tuiIconCheckList: `tuiIconClipboard`,
  tuiIconCloseCircle: `tuiIconXCircle`,
  tuiIconCollapse: `tuiIconMinimize`,
  tuiIconComment: `tuiIconMessageSquare`,
  tuiIconCommentFw: `tuiIconMessageForward`,
  tuiIconCompany: `tuiIconBriefcase`,
  tuiIconDefaultDoc: `tuiIconFile`,
  tuiIconDesktop: `tuiIconMonitor`,
  tuiIconDesktopOff: `tuiIconMonitorOff`,
  tuiIconDislike: `tuiIconThumbsDown`,
  tuiIconDone: `tuiIconCheckCircle`,
  tuiIconDraft: `tuiIconEdit2`,
  tuiIconEyeOpen: `tuiIconEye`,
  tuiIconEyeClosed: `tuiIconEyeOff`,
  tuiIconExpand: `tuiIconMaximize`,
  tuiIconExternal: `tuiIconExternalLink`,
  tuiIconFrame: `tuiIconLayout`,
  tuiIconGeo: `tuiIconMapPin`,
  tuiIconHeartFilled: `tuiIconHeart`,
  tuiIconHide: `tuiIconEyeOff`,
  tuiIconImg: `tuiIconImage`,
  tuiIconInfoCircle: `tuiIconInfo`,
  tuiIconLike: `tuiIconThumbsUp`,
  tuiIconLockOpen: `tuiIconUnlock`,
  tuiIconMobile: `tuiIconSmartphone`,
  tuiIconMoreHor: `tuiIconMoreHorizontal`,
  tuiIconMoreVer: `tuiIconMoreVertical`,
  tuiIconMoreVert: `tuiIconMoreVertical`,
  tuiIconPicture: `tuiIconImage`,
  tuiIconPin: `tuiIconMapPin`,
  tuiIconPrint: `tuiIconPrinter`,
  tuiIconRefresh: `tuiIconRefreshCw`,
  tuiIconRemove: `tuiIconX`,
  tuiIconShow: `tuiIconEye`,
  tuiIconSound: `tuiIconVolume`,
  tuiIconSoundOff: `tuiIconVolumeX`,
  tuiIconStarFilled: `tuiIconStar`,
  tuiIconStop: `tuiIconSquare`,
  tuiIconStructure: `tuiIconGrid`,
  tuiIconTime: `tuiIconClock`,
  tuiIconTooltip: `tuiIconHelpCircle`,
  tuiIconViewList: `tuiIconList`,
  tuiIconWifiOn: `tuiIconWifi`
};
const TUI_SVG_DEFAULT_OPTIONS = {
  iconsPlace: _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_DEFAULT_ICONS_PLACE,
  path: (0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__.tuiIconsPathFactory)(_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_DEFAULT_ICONS_PLACE),
  srcProcessor: rxjs__WEBPACK_IMPORTED_MODULE_3__.identity,
  contentProcessor: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.tuiSvgLinearGradientProcessor,
  deprecated: src => {
    const oldIcon = src.replace(`Large`, ``).replace(`Outline`, ``);
    const newIcon = TUI_DEPRECATED_ICONS[oldIcon];
    return newIcon ? `${oldIcon}/(Large|Outline) is deprecated, use ${newIcon}/(Large|Outline) instead` : ``;
  }
};
/**
 * SVG component options
 */
const TUI_SVG_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiCreateTokenFromFactory)(() => ({
  iconsPlace: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_ICONS_PLACE),
  path: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_ICONS_PATH),
  deprecated: TUI_SVG_DEFAULT_OPTIONS.deprecated,
  srcProcessor: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_SVG_SRC_PROCESSOR),
  contentProcessor: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_SVG_CONTENT_PROCESSOR)
}));
const TUI_SVG_SRC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(`[TUI_SVG_SRC_INTERCEPTORS]`);
function tuiSvgSrcInterceptors(interceptor) {
  return {
    provide: TUI_SVG_SRC_INTERCEPTORS,
    useValue: interceptor,
    multi: true
  };
}
const tuiSvgOptionsProvider = options => ({
  provide: TUI_SVG_OPTIONS,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), TUI_SVG_OPTIONS], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_ICONS_PLACE], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_ICONS_PATH], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_SVG_SRC_PROCESSOR], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_SVG_CONTENT_PROCESSOR]],
  useFactory: (fallback, iconsPlace, path, srcProcessor, contentProcessor) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    return {
      iconsPlace: (_c = (_b = (_a = options.iconsPlace) !== null && _a !== void 0 ? _a : fallback === null || fallback === void 0 ? void 0 : fallback.iconsPlace) !== null && _b !== void 0 ? _b : iconsPlace) !== null && _c !== void 0 ? _c : TUI_SVG_DEFAULT_OPTIONS.iconsPlace,
      path: (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsString)(options.path) ? (0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__.tuiIconsPathFactory)(options.path) : (_f = (_e = (_d = options.path) !== null && _d !== void 0 ? _d : fallback === null || fallback === void 0 ? void 0 : fallback.path) !== null && _e !== void 0 ? _e : path) !== null && _f !== void 0 ? _f : TUI_SVG_DEFAULT_OPTIONS.path,
      deprecated: (_h = (_g = options.deprecated) !== null && _g !== void 0 ? _g : fallback === null || fallback === void 0 ? void 0 : fallback.deprecated) !== null && _h !== void 0 ? _h : TUI_SVG_DEFAULT_OPTIONS.deprecated,
      srcProcessor: (_l = (_k = (_j = options.srcProcessor) !== null && _j !== void 0 ? _j : fallback === null || fallback === void 0 ? void 0 : fallback.srcProcessor) !== null && _k !== void 0 ? _k : srcProcessor) !== null && _l !== void 0 ? _l : TUI_SVG_DEFAULT_OPTIONS.srcProcessor,
      contentProcessor: (_p = (_o = (_m = options.contentProcessor) !== null && _m !== void 0 ? _m : fallback === null || fallback === void 0 ? void 0 : fallback.contentProcessor) !== null && _o !== void 0 ? _o : contentProcessor) !== null && _p !== void 0 ? _p : TUI_SVG_DEFAULT_OPTIONS.contentProcessor
    };
  }
});
const UNDEFINED_NAMED_ICON = 'Attempted to use undefined named icon';
const MISSING_EXTERNAL_ICON = 'External icon is missing on the given URL';
const FAILED_EXTERNAL_ICON = 'Failed to load external SVG';
// TODO: Consider moving to CDK along with SvgService and SvgDefsHostComponent
let TuiSvgComponent = /*#__PURE__*/(() => {
  class TuiSvgComponent {
    constructor(doc, win, options, srcInterceptors, tuiSanitizer, svgService, staticRequestService, sanitizer, el, baseHref) {
      this.doc = doc;
      this.win = win;
      this.options = options;
      this.srcInterceptors = srcInterceptors;
      this.tuiSanitizer = tuiSanitizer;
      this.svgService = svgService;
      this.staticRequestService = staticRequestService;
      this.sanitizer = sanitizer;
      this.el = el;
      this.baseHref = baseHref;
      this.src$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.ReplaySubject(1);
      this.icon = '';
      this.innerHTML$ = this.src$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => {
        if ((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsString)(this.icon)) {
          return this.isExternal ? this.getExternalIcon(this.icon) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.getSafeHtml(this.icon));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.icon);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''));
    }
    set src(src) {
      var _a;
      const deprecated = this.options.deprecated(String(src));
      ngDevMode && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiAssert.assert(!deprecated, deprecated);
      this.icon = ((_a = this.srcInterceptors) !== null && _a !== void 0 ? _a : []).reduce((newSrc, interceptor) => interceptor(newSrc, this.options), this.options.srcProcessor(src || ''));
      this.src$.next();
    }
    get src() {
      return this.icon;
    }
    get use() {
      if ((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsString)(this.icon)) {
        return this.icon.includes('.svg#') ? this.icon : this.resolveName(this.icon, this.options.path);
      }
      return '';
    }
    get isInnerHTML() {
      return !(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsString)(this.icon) || this.isSrc || this.isExternal || this.isName && this.isShadowDOM;
    }
    get isShadowDOM() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__.tuiGetDocumentOrShadowRoot)(this.el.nativeElement) !== this.doc;
    }
    get isUse() {
      return this.use.replace(_taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_12__.TUI_CACHE_BUSTING_PAYLOAD, '').includes('.svg#');
    }
    get isExternal() {
      return this.isUrl || this.isCrossDomain;
    }
    get isUrl() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsString)(this.icon) && this.icon.replace(_taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_12__.TUI_CACHE_BUSTING_PAYLOAD, '').endsWith('.svg');
    }
    get isSrc() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsString)(this.icon) && (0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__.tuiIsPresumedHTMLString)(this.icon);
    }
    get isName() {
      return !this.isUrl && !this.isUse && !this.isSrc;
    }
    get isCrossDomain() {
      const {
        use,
        isUse,
        win
      } = this;
      return isUse && use.startsWith('http') && !!win.origin && !use.startsWith(win.origin);
    }
    onError(message = MISSING_EXTERNAL_ICON) {
      const {
        icon
      } = this;
      const event = new CustomEvent(_taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_12__.TUI_ICON_ERROR, {
        bubbles: true,
        detail: {
          message,
          icon: icon
        }
      });
      ngDevMode && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.tuiAssert.assert(false, message, icon);
      this.el.nativeElement.dispatchEvent(event);
    }
    resolveName(name, iconsPath) {
      return iconsPath(name, this.baseHref);
    }
    getSafeHtml(src) {
      return this.isSrc ? this.sanitize(src) : this.process(src);
    }
    process(src) {
      const icon = this.svgService.getOriginal(src);
      if (this.isName && !icon && !!src) {
        this.onError(UNDEFINED_NAMED_ICON);
      }
      // Empty line for innerHTML when icon is shown through USE tag
      return !this.isShadowDOM || !this.isName ? '' : this.sanitize(icon || '');
    }
    sanitize(src) {
      src = this.options.contentProcessor(src);
      return this.tuiSanitizer && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsString)(src) ? this.sanitizer.bypassSecurityTrustHtml(this.tuiSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, src) || '') : src;
    }
    getExternalIcon(src) {
      const url = src.includes('.svg') ? src : this.use;
      return this.staticRequestService.request(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
        this.onError(FAILED_EXTERNAL_ICON);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)('');
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(response => this.sanitize(response.replace('<svg', '<svg focusable="false"'))));
    }
  }
  TuiSvgComponent.ɵfac = function TuiSvgComponent_Factory(t) {
    return new (t || TuiSvgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_16__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_SVG_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_SVG_SRC_INTERCEPTORS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_1__.TUI_SANITIZER, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_17__.TuiSvgService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TuiStaticRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_20__.TUI_BASE_HREF));
  };
  TuiSvgComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiSvgComponent,
    selectors: [["tui-svg"]],
    inputs: {
      src: "src"
    },
    decls: 2,
    vars: 3,
    consts: [[4, "tuiLet"], ["class", "t-src", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["useTemplate", ""], [1, "t-src", 3, "innerHTML"], ["focusable", "false", "height", "100%", "version", "1.1", "width", "100%", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "xmlns", "http://www.w3.org/2000/svg", 1, "t-svg", 3, "error"]],
    template: function TuiSvgComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiSvgComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.innerHTML$));
      }
    },
    dependencies: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.TuiLetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{display:inline-flex;vertical-align:middle;flex-shrink:0;align-items:center;justify-content:center;line-height:0;height:1.5rem;width:1.5rem;fill:transparent;stroke:transparent;font-size:1rem}.t-src[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;align-items:center;justify-content:center}.t-svg[_ngcontent-%COMP%]{overflow:visible}"],
    changeDetection: 0
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.tuiPure], TuiSvgComponent.prototype, "resolveName", null);
  return TuiSvgComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiSvgModule = /*#__PURE__*/(() => {
  class TuiSvgModule {}
  TuiSvgModule.ɵfac = function TuiSvgModule_Factory(t) {
    return new (t || TuiSvgModule)();
  };
  TuiSvgModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiSvgModule
  });
  TuiSvgModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.TuiLetModule]]
  });
  return TuiSvgModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-svg.js.map

/***/ }),

/***/ 9816:
/*!**********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-tooltip.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiTooltipComponent: () => (/* binding */ TuiTooltipComponent),
/* harmony export */   TuiTooltipModule: () => (/* binding */ TuiTooltipModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core/directives/hint */ 6839);
/* harmony import */ var _taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core/providers */ 9098);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1749);
/* harmony import */ var _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core/components/svg */ 9313);
/* harmony import */ var _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core/directives/wrapper */ 3585);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6733);


















function TuiTooltipComponent_tui_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 3);
  }
  if (rf & 2) {
    const src_r2 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r2);
  }
}
let TuiTooltipComponent = /*#__PURE__*/(() => {
  class TuiTooltipComponent extends _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__.TuiHintOptionsDirective {
    constructor(destroy$, mode$, options, isMobile) {
      super(options);
      this.isMobile = isMobile;
      this.mode = null;
      this.describeId = '';
      mode$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroy$)).subscribe(mode => {
        this.mode = mode;
      });
    }
    get computedAppearance() {
      return this.appearance || this.mode || '';
    }
    stopOnMobile(event) {
      var _a;
      if (this.isMobile) {
        event.preventDefault();
        event.stopPropagation();
      }
      (_a = this.driver$) === null || _a === void 0 ? void 0 : _a.toggle();
    }
  }
  TuiTooltipComponent.ɵfac = function TuiTooltipComponent_Factory(t) {
    return new (t || TuiTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TuiDestroyService, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_4__.TUI_MODE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__.TUI_HINT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.TUI_IS_MOBILE));
  };
  TuiTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiTooltipComponent,
    selectors: [["tui-tooltip"]],
    viewQuery: function TuiTooltipComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__.TuiHintHoverDirective, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.driver$ = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function TuiTooltipComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function TuiTooltipComponent_mousedown_HostBindingHandler($event) {
          return ctx.stopOnMobile($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-appearance", ctx.computedAppearance);
      }
    },
    inputs: {
      content: "content",
      direction: "direction",
      appearance: "appearance",
      showDelay: "showDelay",
      hideDelay: "hideDelay",
      describeId: "describeId",
      context: "context"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TuiDestroyService, _taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_6__.MODE_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 11,
    consts: [["appearance", "icon", "automation-id", "tui-tooltip__icon", "tuiWrapper", "", 1, "t-tooltip-icon", 3, "hover", "tuiHint", "tuiHintAppearance", "tuiHintContext", "tuiHintDescribe", "tuiHintDirection", "tuiHintHideDelay", "tuiHintShowDelay"], ["driver", "tuiHintHover"], [3, "src", 4, "polymorpheusOutlet"], [3, "src"]],
    template: function TuiTooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiTooltipComponent_tui_svg_3_Template, 1, 1, "tui-svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hover", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 9, _r0) || null)("tuiHint", ctx.content)("tuiHintAppearance", ctx.computedAppearance)("tuiHintContext", ctx.context)("tuiHintDescribe", ctx.describeId)("tuiHintDirection", ctx.direction)("tuiHintHideDelay", ctx.hideDelay)("tuiHintShowDelay", ctx.showDelay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx.icon);
      }
    },
    dependencies: [_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_7__.TuiSvgComponent, _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_8__.TuiWrapperDirective, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__.TuiHintDirective, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__.TuiHintDriverDirective, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__.TuiHintHoverDirective, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__.TuiHintPositionDirective, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__.TuiHintDescribeDirective, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__.PolymorpheusOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-block;width:1.5rem;height:1.5rem;vertical-align:middle;font-size:0;line-height:0;pointer-events:auto;cursor:pointer;color:var(--tui-text-01)}[data-appearance=error][_nghost-%COMP%]{color:var(--tui-error-fill)}.t-tooltip-icon[_ngcontent-%COMP%]{display:inline-block;width:100%;height:100%;color:inherit}[tuiWrapper][data-appearance=\"textfield\"][data-state=\"disabled\"][_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%], [tuiWrapper][data-appearance=\"textfield\"][data-state=\"disabled\"]   [_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%]{opacity:1}"],
    changeDetection: 0
  });
  return TuiTooltipComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiTooltipModule = /*#__PURE__*/(() => {
  class TuiTooltipModule {}
  TuiTooltipModule.ɵfac = function TuiTooltipModule_Factory(t) {
    return new (t || TuiTooltipModule)();
  };
  TuiTooltipModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiTooltipModule
  });
  TuiTooltipModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_8__.TuiWrapperModule, _taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_7__.TuiSvgModule, _taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_1__.TuiHintModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__.PolymorpheusModule]]
  });
  return TuiTooltipModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-components-tooltip.js.map

/***/ }),

/***/ 7383:
/*!***********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-dropdown.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_DROPDOWN_COMPONENT: () => (/* binding */ TUI_DROPDOWN_COMPONENT),
/* harmony export */   TUI_DROPDOWN_DEFAULT_OPTIONS: () => (/* binding */ TUI_DROPDOWN_DEFAULT_OPTIONS),
/* harmony export */   TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS: () => (/* binding */ TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS),
/* harmony export */   TUI_DROPDOWN_HOVER_OPTIONS: () => (/* binding */ TUI_DROPDOWN_HOVER_OPTIONS),
/* harmony export */   TUI_DROPDOWN_OPTIONS: () => (/* binding */ TUI_DROPDOWN_OPTIONS),
/* harmony export */   TuiDropdownComponent: () => (/* binding */ TuiDropdownComponent),
/* harmony export */   TuiDropdownContextDirective: () => (/* binding */ TuiDropdownContextDirective),
/* harmony export */   TuiDropdownDirective: () => (/* binding */ TuiDropdownDirective),
/* harmony export */   TuiDropdownDriverDirective: () => (/* binding */ TuiDropdownDriverDirective),
/* harmony export */   TuiDropdownHostDirective: () => (/* binding */ TuiDropdownHostDirective),
/* harmony export */   TuiDropdownHoverDirective: () => (/* binding */ TuiDropdownHoverDirective),
/* harmony export */   TuiDropdownManualDirective: () => (/* binding */ TuiDropdownManualDirective),
/* harmony export */   TuiDropdownModule: () => (/* binding */ TuiDropdownModule),
/* harmony export */   TuiDropdownOpenDirective: () => (/* binding */ TuiDropdownOpenDirective),
/* harmony export */   TuiDropdownOptionsDirective: () => (/* binding */ TuiDropdownOptionsDirective),
/* harmony export */   TuiDropdownPositionDirective: () => (/* binding */ TuiDropdownPositionDirective),
/* harmony export */   TuiDropdownPositionSidedDirective: () => (/* binding */ TuiDropdownPositionSidedDirective),
/* harmony export */   TuiDropdownSelectionDirective: () => (/* binding */ TuiDropdownSelectionDirective),
/* harmony export */   tuiDropdownHoverOptionsProvider: () => (/* binding */ tuiDropdownHoverOptionsProvider),
/* harmony export */   tuiDropdownOptionsProvider: () => (/* binding */ tuiDropdownOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-web-apis/common */ 5393);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @taiga-ui/cdk */ 6851);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @taiga-ui/cdk */ 941);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @taiga-ui/cdk */ 8159);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk */ 552);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/cdk */ 5351);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @taiga-ui/cdk */ 963);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @taiga-ui/cdk */ 7899);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/core/abstract */ 8305);
/* harmony import */ var _taiga_ui_core_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @taiga-ui/core/animations */ 6700);
/* harmony import */ var _taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @taiga-ui/core/providers */ 9098);
/* harmony import */ var _taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @taiga-ui/core/services */ 4888);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2739);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1749);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 4787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 4900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 1570);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 8557);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! rxjs/operators */ 8004);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4911);
/* harmony import */ var _taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core/utils */ 5771);
/* harmony import */ var _taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @taiga-ui/core/utils */ 6775);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4511);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 1209);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs */ 6424);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs */ 8442);
/* harmony import */ var _taiga_ui_core_components_scrollbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @taiga-ui/core/components/scrollbar */ 3718);
/* harmony import */ var _tinkoff_ng_event_plugins__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @tinkoff/ng-event-plugins */ 1350);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ 6733);
























/**
 * A component to display a dropdown
 */
function TuiDropdownComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", text_r2, " ");
  }
}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
const TUI_DROPDOWN_COMPONENT = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateTokenFromFactory)(() => TuiDropdownComponent);
let TuiDropdownOpenDirective = /*#__PURE__*/(() => {
  class TuiDropdownOpenDirective {
    constructor() {
      this.tuiDropdownOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    set tuiDropdownOpen(open) {
      var _a;
      (_a = this.dropdown) === null || _a === void 0 ? void 0 : _a.toggle(open);
    }
  }
  TuiDropdownOpenDirective.ɵfac = function TuiDropdownOpenDirective_Factory(t) {
    return new (t || TuiDropdownOpenDirective)();
  };
  TuiDropdownOpenDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownOpenDirective,
    selectors: [["", "tuiDropdownOpen", ""], ["", "tuiDropdownOpenChange", ""]],
    inputs: {
      tuiDropdownOpen: "tuiDropdownOpen"
    },
    outputs: {
      tuiDropdownOpenChange: "tuiDropdownOpenChange"
    }
  });
  return TuiDropdownOpenDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDropdownDirective = /*#__PURE__*/(() => {
  class TuiDropdownDirective {
    constructor(destroy$, el, dropdown, injector, dropdownService, open) {
      this.el = el;
      this.dropdown = dropdown;
      this.injector = injector;
      this.dropdownService = dropdownService;
      this.open = open;
      this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.dropdownBoxRef = null;
      this.type = 'dropdown';
      this.component = new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__.PolymorpheusComponent(this.dropdown, this.injector);
      if (this.open && !this.open.dropdown) {
        this.open.dropdown = this;
      } else {
        this.open = null;
      }
      // Ignore multiple change detection triggers at the same frame
      this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.throttleTime)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(destroy$)).subscribe(() => {
        var _a, _b;
        (_a = this.dropdownBoxRef) === null || _a === void 0 ? void 0 : _a.changeDetectorRef.detectChanges();
        (_b = this.dropdownBoxRef) === null || _b === void 0 ? void 0 : _b.changeDetectorRef.markForCheck();
      });
    }
    get position() {
      return (0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__.tuiCheckFixedPosition)(this.el.nativeElement) ? 'fixed' : 'absolute';
    }
    ngAfterViewChecked() {
      this.refresh$.next();
    }
    ngOnChanges() {
      if (!this.content) {
        this.toggle(false);
      }
    }
    ngOnDestroy() {
      this.toggle(false);
      if (this.open) {
        this.open.dropdown = undefined;
      }
    }
    getClientRect() {
      return this.el.nativeElement.getBoundingClientRect();
    }
    toggle(show) {
      var _a, _b;
      if (show && this.content && !this.dropdownBoxRef) {
        this.dropdownBoxRef = this.dropdownService.add(this.component);
        (_a = this.open) === null || _a === void 0 ? void 0 : _a.tuiDropdownOpenChange.emit(true);
      } else if (!show && this.dropdownBoxRef) {
        this.dropdownService.remove(this.dropdownBoxRef);
        this.dropdownBoxRef = null;
        (_b = this.open) === null || _b === void 0 ? void 0 : _b.tuiDropdownOpenChange.emit(false);
      }
    }
  }
  TuiDropdownDirective.ɵfac = function TuiDropdownDirective_Factory(t) {
    return new (t || TuiDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiDestroyService, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_DROPDOWN_COMPONENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.INJECTOR), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.TuiDropdownPortalService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiDropdownOpenDirective, 8));
  };
  TuiDropdownDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownDirective,
    selectors: [["", "tuiDropdown", "", 5, "ng-container"]],
    inputs: {
      content: ["tuiDropdown", "content"]
    },
    exportAs: ["tuiDropdown"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiDestroyService, (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsRectAccessor)(TuiDropdownDirective), (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsVehicle)(TuiDropdownDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__.tuiPure], TuiDropdownDirective.prototype, "position", null);
  return TuiDropdownDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Default values for hint options */
const TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
  showDelay: 200,
  hideDelay: 500
};
/**
 * Default parameters for dropdown hover directive
 */
const TUI_DROPDOWN_HOVER_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
function tuiDropdownHoverOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiProvideOptions)(TUI_DROPDOWN_HOVER_OPTIONS, options, TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
}
let TuiDropdownHoverDirective = /*#__PURE__*/(() => {
  class TuiDropdownHoverDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiDriver {
    constructor(hovered$, options, parentHover) {
      super(subscriber => this.stream$.subscribe(subscriber));
      this.hovered$ = hovered$;
      this.options = options;
      this.parentHover = parentHover;
      this.toggle$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.stream$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this.toggle$, this.hovered$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(visible => (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(visible).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.delay)(visible ? this.showDelay : this.hideDelay))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(visible => {
        this.hovered = visible;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.share)());
      this.showDelay = this.options.showDelay;
      this.hideDelay = this.options.hideDelay;
      this.hovered = false;
      this.type = 'dropdown';
    }
    toggle(visible) {
      var _a;
      (_a = this.parentHover) === null || _a === void 0 ? void 0 : _a.toggle(visible);
      this.toggle$.next(visible);
    }
  }
  TuiDropdownHoverDirective.ɵfac = function TuiDropdownHoverDirective_Factory(t) {
    return new (t || TuiDropdownHoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TuiHoveredService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_DROPDOWN_HOVER_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiDropdownHoverDirective, 12));
  };
  TuiDropdownHoverDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownHoverDirective,
    selectors: [["", "tuiDropdownHover", "", 5, "ng-container"]],
    inputs: {
      showDelay: ["tuiDropdownShowDelay", "showDelay"],
      hideDelay: ["tuiDropdownHideDelay", "hideDelay"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsDriver)(TuiDropdownHoverDirective), _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TuiHoveredService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiDropdownHoverDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Default values for dropdown options */
const TUI_DROPDOWN_DEFAULT_OPTIONS = {
  align: 'left',
  direction: null,
  limitWidth: 'auto',
  maxHeight: 400,
  minHeight: 80,
  offset: 4,
  appearance: ''
};
/**
 * Default parameters for dropdown directive
 */
const TUI_DROPDOWN_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(TUI_DROPDOWN_DEFAULT_OPTIONS);
const tuiDropdownOptionsProvider = override => ({
  provide: TUI_DROPDOWN_OPTIONS,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), TuiDropdownOptionsDirective], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), TUI_DROPDOWN_OPTIONS]],
  useFactory: (0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_19__.tuiOverrideOptions)(override, TUI_DROPDOWN_DEFAULT_OPTIONS)
});
let TuiDropdownOptionsDirective = /*#__PURE__*/(() => {
  class TuiDropdownOptionsDirective {
    constructor(options) {
      this.options = options;
      this.align = this.options.align;
      this.appearance = this.options.appearance;
      this.direction = this.options.direction;
      this.limitWidth = this.options.limitWidth;
      this.minHeight = this.options.minHeight;
      this.maxHeight = this.options.maxHeight;
      this.offset = this.options.offset;
    }
  }
  TuiDropdownOptionsDirective.ɵfac = function TuiDropdownOptionsDirective_Factory(t) {
    return new (t || TuiDropdownOptionsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_DROPDOWN_OPTIONS, 4));
  };
  TuiDropdownOptionsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownOptionsDirective,
    selectors: [["", "tuiDropdownAlign", ""], ["", "tuiDropdownAppearance", ""], ["", "tuiDropdownDirection", ""], ["", "tuiDropdownLimitWidth", ""], ["", "tuiDropdownMinHeight", ""], ["", "tuiDropdownMaxHeight", ""], ["", "tuiDropdownOffset", ""]],
    inputs: {
      align: ["tuiDropdownAlign", "align"],
      appearance: ["tuiDropdownAppearance", "appearance"],
      direction: ["tuiDropdownDirection", "direction"],
      limitWidth: ["tuiDropdownLimitWidth", "limitWidth"],
      minHeight: ["tuiDropdownMinHeight", "minHeight"],
      maxHeight: ["tuiDropdownMaxHeight", "maxHeight"],
      offset: ["tuiDropdownOffset", "offset"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: TUI_DROPDOWN_OPTIONS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TuiDropdownOptionsDirective)
    }])]
  });
  return TuiDropdownOptionsDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @description:
 * This component is used to show template in a portal
 * using default style of white rounded box with a shadow
 */
let TuiDropdownComponent = /*#__PURE__*/(() => {
  class TuiDropdownComponent {
    constructor(visualViewportService, position$, destroy$, directive, animation, el, accessor, win, mode$, options, hoverDirective) {
      this.directive = directive;
      this.animation = animation;
      this.el = el;
      this.accessor = accessor;
      this.win = win;
      this.mode$ = mode$;
      this.options = options;
      this.hoverDirective = hoverDirective;
      position$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(point => this.directive.position === 'fixed' ? visualViewportService.correct(point) : point), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(destroy$)).subscribe(([top, left]) => {
        this.update(top, left);
      });
      this.updateWidth(this.accessor.getClientRect().width);
    }
    onHoveredChange(hovered) {
      if (this.hoverDirective) {
        this.hoverDirective.toggle(hovered);
      }
    }
    onTopFocus() {
      this.moveFocusOutside(true);
    }
    onBottomFocus() {
      this.moveFocusOutside(false);
    }
    update(top, left) {
      var _a;
      const {
        style
      } = this.el.nativeElement;
      const {
        right
      } = this.el.nativeElement.getBoundingClientRect();
      const {
        maxHeight,
        offset
      } = this.options;
      const {
        innerHeight
      } = this.win;
      const clientRect = (_a = this.el.nativeElement.offsetParent) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
      const {
        position
      } = this.directive;
      const rect = this.accessor.getClientRect();
      const offsetX = position === 'fixed' ? 0 : -((clientRect === null || clientRect === void 0 ? void 0 : clientRect.left) || 0);
      const offsetY = position === 'fixed' ? 0 : -((clientRect === null || clientRect === void 0 ? void 0 : clientRect.top) || 0);
      top += offsetY;
      left += offsetX;
      const isIntersecting = left < rect.right && right > rect.left && top < offsetY + 2 * offset;
      const available = isIntersecting ? rect.top - 2 * offset : offsetY + innerHeight - top - offset;
      style.position = position;
      style.top = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiPx)(Math.max(top, offsetY + offset));
      style.left = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiPx)(left);
      style.maxHeight = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiPx)(Math.min(maxHeight, available));
      style.width = '';
      style.minWidth = '';
      this.updateWidth(rect.width);
    }
    updateWidth(width) {
      const {
        style
      } = this.el.nativeElement;
      switch (this.options.limitWidth) {
        case 'min':
          style.minWidth = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiPx)(width);
          break;
        case 'fixed':
          style.width = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiPx)(width);
          break;
        case 'auto':
          break;
      }
    }
    moveFocusOutside(previous) {
      const {
        nativeElement
      } = this.directive.el;
      const {
        ownerDocument
      } = nativeElement;
      const root = ownerDocument ? ownerDocument.body : nativeElement;
      let focusable = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.tuiGetClosestFocusable)({
        initial: nativeElement,
        root,
        previous
      });
      while (focusable !== null && nativeElement.contains(focusable)) {
        focusable = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.tuiGetClosestFocusable)({
          initial: focusable,
          root,
          previous
        });
      }
      focusable === null || focusable === void 0 ? void 0 : focusable.focus();
    }
  }
  TuiDropdownComponent.ɵfac = function TuiDropdownComponent_Factory(t) {
    return new (t || TuiDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_23__.TuiVisualViewportService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_23__.TuiPositionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiDestroyService, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiDropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__.TUI_ANIMATION_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiRectAccessor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_25__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__.TUI_MODE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_DROPDOWN_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiDropdownHoverDirective, 8));
  };
  TuiDropdownComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiDropdownComponent,
    selectors: [["tui-dropdown"]],
    hostVars: 2,
    hostBindings: function TuiDropdownComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("$.data-mode.attr", function TuiDropdownComponent___data_mode_attr_HostBindingHandler() {
          return ctx.mode$;
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-appearance", ctx.options.appearance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@tuiDropdownAnimation", ctx.animation);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiDestroyService, _taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_23__.TuiPositionService, (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiPositionAccessorFor)('dropdown'), (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiRectAccessorFor)('dropdown', TuiDropdownDirective), _taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_26__.MODE_PROVIDER])],
    decls: 5,
    vars: 4,
    consts: [["tuiActiveZone", "", "tuiOverscroll", "all", 1, "t-scroll", 3, "tuiHoveredChange"], ["activeZone", "tuiActiveZone"], ["tabindex", "0", 3, "focus"], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"]],
    template: function TuiDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-scrollbar", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiHoveredChange", function TuiDropdownComponent_Template_tui_scrollbar_tuiHoveredChange_0_listener($event) {
          return ctx.onHoveredChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TuiDropdownComponent_Template_div_focus_2_listener() {
          return ctx.onTopFocus();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiDropdownComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TuiDropdownComponent_Template_div_focus_4_listener() {
          return ctx.onBottomFocus();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx.directive.content)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, _r0));
      }
    },
    dependencies: [_taiga_ui_core_components_scrollbar__WEBPACK_IMPORTED_MODULE_27__.TuiScrollbarComponent, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__.TuiActiveZoneDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_29__.TuiOverscrollDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TuiHoveredDirective, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__.PolymorpheusOutletDirective],
    styles: ["[_nghost-%COMP%]{box-shadow:0 1.5rem 1rem #00000008,0 .75rem .75rem #0000000a,0 .25rem .375rem #0000000d;position:absolute;display:flex;background:var(--tui-elevation-02);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-base-04);box-sizing:border-box;max-width:calc(100% - 8px);isolation:isolate;pointer-events:auto}.ng-animating[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]:not([style*=\"top\"]){visibility:hidden}[data-mode=onDark][_nghost-%COMP%]{--tui-text-01: var(--tui-text-01-night);--tui-clear: var(--tui-clear-inverse);background:#222;border:1px solid #808080}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-width:100%}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"],
    data: {
      animation: [_taiga_ui_core_animations__WEBPACK_IMPORTED_MODULE_30__.tuiDropdownAnimation]
    }
  });
  return TuiDropdownComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function activeZoneFilter(target) {
  return !this.activeZone.contains(target);
}
let TuiDropdownContextDirective = /*#__PURE__*/(() => {
  class TuiDropdownContextDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiDriver {
    constructor(activeZone) {
      super(subscriber => this.stream$.subscribe(subscriber));
      this.activeZone = activeZone;
      this.stream$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.currentRect = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_31__.EMPTY_CLIENT_RECT;
      this.type = 'dropdown';
    }
    onContextMenu(x, y) {
      this.currentRect = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_32__.tuiPointToClientRect)(x, y);
      this.stream$.next(true);
    }
    closeDropdown() {
      this.stream$.next(false);
    }
    getClientRect() {
      return this.currentRect;
    }
  }
  TuiDropdownContextDirective.ɵfac = function TuiDropdownContextDirective_Factory(t) {
    return new (t || TuiDropdownContextDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__.TuiActiveZoneDirective));
  };
  TuiDropdownContextDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownContextDirective,
    selectors: [["", "tuiDropdown", "", "tuiDropdownContext", ""]],
    hostBindings: function TuiDropdownContextDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu.prevent.stop", function TuiDropdownContextDirective_contextmenu_prevent_stop_HostBindingHandler($event) {
          return ctx.onContextMenu($event.clientX, $event.clientY);
        })("click.silent", function TuiDropdownContextDirective_click_silent_HostBindingHandler($event) {
          return ctx.closeDropdown($event.target);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("contextmenu.capture.silent", function TuiDropdownContextDirective_contextmenu_capture_silent_HostBindingHandler($event) {
          return ctx.closeDropdown($event.target);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown.esc", function TuiDropdownContextDirective_keydown_esc_HostBindingHandler($event) {
          return ctx.closeDropdown($event.currentTarget);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__.TuiActiveZoneDirective, (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsDriver)(TuiDropdownContextDirective), (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsRectAccessor)(TuiDropdownContextDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_tinkoff_ng_event_plugins__WEBPACK_IMPORTED_MODULE_33__.shouldCall)(activeZoneFilter)], TuiDropdownContextDirective.prototype, "closeDropdown", null);
  return TuiDropdownContextDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDropdownDriverDirective = /*#__PURE__*/(() => {
  class TuiDropdownDriverDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.AbstractTuiDriverDirective {
    // TODO: Figure out why this is necessary under nx test runner
    constructor(destroy$, drivers, vehicles) {
      super(destroy$, drivers, vehicles);
      this.type = 'dropdown';
    }
  }
  TuiDropdownDriverDirective.ɵfac = function TuiDropdownDriverDirective_Factory(t) {
    return new (t || TuiDropdownDriverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiDestroyService, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiDriver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiVehicle));
  };
  TuiDropdownDriverDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownDriverDirective,
    selectors: [["", "tuiDropdown", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiDestroyService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiDropdownDriverDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDropdownHostDirective = /*#__PURE__*/(() => {
  class TuiDropdownHostDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiRectAccessor {
    constructor() {
      super(...arguments);
      this.type = 'dropdown';
    }
    getClientRect() {
      var _a;
      return ((_a = this.tuiDropdownHost) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_31__.EMPTY_CLIENT_RECT;
    }
  }
  TuiDropdownHostDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiDropdownHostDirective_BaseFactory;
    return function TuiDropdownHostDirective_Factory(t) {
      return (ɵTuiDropdownHostDirective_BaseFactory || (ɵTuiDropdownHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TuiDropdownHostDirective)))(t || TuiDropdownHostDirective);
    };
  }();
  TuiDropdownHostDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownHostDirective,
    selectors: [["", "tuiDropdown", "", "tuiDropdownHost", ""]],
    inputs: {
      tuiDropdownHost: "tuiDropdownHost"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsRectAccessor)(TuiDropdownHostDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiDropdownHostDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDropdownManualDirective = /*#__PURE__*/(() => {
  class TuiDropdownManualDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiDriver {
    constructor() {
      super(subscriber => this.stream$.subscribe(subscriber));
      this.stream$ = new rxjs__WEBPACK_IMPORTED_MODULE_34__.BehaviorSubject(false);
      this.tuiDropdownManual = false;
      this.type = 'dropdown';
    }
    ngOnChanges() {
      this.stream$.next(this.tuiDropdownManual);
    }
  }
  TuiDropdownManualDirective.ɵfac = function TuiDropdownManualDirective_Factory(t) {
    return new (t || TuiDropdownManualDirective)();
  };
  TuiDropdownManualDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownManualDirective,
    selectors: [["", "tuiDropdown", "", "tuiDropdownManual", ""]],
    inputs: {
      tuiDropdownManual: "tuiDropdownManual"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsDriver)(TuiDropdownManualDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return TuiDropdownManualDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDropdownPositionDirective = /*#__PURE__*/(() => {
  class TuiDropdownPositionDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiPositionAccessor {
    constructor(options, viewport, accessors, directive) {
      super();
      this.options = options;
      this.viewport = viewport;
      this.accessors = accessors;
      this.directive = directive;
      this.type = 'dropdown';
    }
    getPosition({
      width,
      height
    }) {
      var _a, _b;
      if (!width && !height) {
        this.previous = undefined;
      }
      const hostRect = (_b = (_a = this.accessor) === null || _a === void 0 ? void 0 : _a.getClientRect()) !== null && _b !== void 0 ? _b : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_31__.EMPTY_CLIENT_RECT;
      const viewportRect = this.viewport.getClientRect();
      const {
        minHeight,
        align,
        direction,
        offset
      } = this.options;
      const viewport = {
        top: viewportRect.top - offset,
        bottom: viewportRect.bottom + offset,
        right: viewportRect.right - offset,
        left: viewportRect.left + offset
      };
      const previous = this.previous || direction || 'bottom';
      const available = {
        top: hostRect.top - 2 * offset - viewport.top,
        bottom: viewport.bottom - hostRect.bottom - 2 * offset
      };
      const right = Math.max(hostRect.right - width, offset);
      const left = hostRect.left + width < viewport.right ? hostRect.left : right;
      const position = {
        top: hostRect.top - offset - height,
        bottom: hostRect.bottom + offset,
        right: Math.max(viewport.left, right),
        center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right ? hostRect.left + hostRect.width / 2 - width / 2 : right,
        left: Math.max(viewport.left, left)
      };
      const better = available.top > available.bottom ? 'top' : 'bottom';
      if (available[previous] > minHeight && direction || available[previous] > height) {
        return [position[previous], position[align]];
      }
      this.previous = better;
      return [position[better], position[align]];
    }
    get accessor() {
      return (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiFallbackRectAccessor)('dropdown')(this.accessors, this.directive);
    }
  }
  TuiDropdownPositionDirective.ɵfac = function TuiDropdownPositionDirective_Factory(t) {
    return new (t || TuiDropdownPositionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_DROPDOWN_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__.TUI_VIEWPORT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiRectAccessor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiDropdownDirective));
  };
  TuiDropdownPositionDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownPositionDirective,
    selectors: [["", "tuiDropdown", "", 3, "tuiDropdownCustomPosition", "", 3, "tuiDropdownSided", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsPositionAccessor)(TuiDropdownPositionDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__.tuiPure], TuiDropdownPositionDirective.prototype, "accessor", null);
  return TuiDropdownPositionDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDropdownPositionSidedDirective = /*#__PURE__*/(() => {
  class TuiDropdownPositionSidedDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiPositionAccessor {
    constructor(options, viewport, vertical) {
      super();
      this.options = options;
      this.viewport = viewport;
      this.vertical = vertical;
      this.previous = this.options.direction || 'bottom';
      this.tuiDropdownSided = '';
      this.tuiDropdownSidedOffset = 4;
      this.type = 'dropdown';
    }
    getPosition(rect) {
      var _a, _b;
      if (this.tuiDropdownSided === false) {
        return this.vertical.getPosition(rect);
      }
      const {
        height,
        width
      } = rect;
      const hostRect = (_b = (_a = this.vertical.accessor) === null || _a === void 0 ? void 0 : _a.getClientRect()) !== null && _b !== void 0 ? _b : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_31__.EMPTY_CLIENT_RECT;
      const viewport = this.viewport.getClientRect();
      const {
        direction,
        minHeight,
        offset
      } = this.options;
      const align = this.options.align === 'center' ? 'left' : this.options.align;
      const available = {
        top: hostRect.bottom - viewport.top,
        left: hostRect.left - offset - viewport.left,
        right: viewport.right - hostRect.right - offset,
        bottom: viewport.bottom - hostRect.top
      };
      const position = {
        top: hostRect.bottom - height + this.tuiDropdownSidedOffset + 1,
        left: hostRect.left - width - offset,
        right: hostRect.right + offset,
        bottom: hostRect.top - this.tuiDropdownSidedOffset - 1 // 1 for border
      };

      const better = available.top > available.bottom ? 'top' : 'bottom';
      const maxLeft = available.left > available.right ? position.left : position.right;
      const left = available[align] > width ? position[align] : maxLeft;
      if (available[this.previous] > minHeight && direction || this.previous === better) {
        return [position[this.previous], left];
      }
      this.previous = better;
      return [position[better], left];
    }
  }
  TuiDropdownPositionSidedDirective.ɵfac = function TuiDropdownPositionSidedDirective_Factory(t) {
    return new (t || TuiDropdownPositionSidedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_DROPDOWN_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__.TUI_VIEWPORT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiDropdownPositionDirective));
  };
  TuiDropdownPositionSidedDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownPositionSidedDirective,
    selectors: [["", "tuiDropdownSided", ""]],
    inputs: {
      tuiDropdownSided: "tuiDropdownSided",
      tuiDropdownSidedOffset: "tuiDropdownSidedOffset"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TuiDropdownPositionDirective, (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsPositionAccessor)(TuiDropdownPositionSidedDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiDropdownPositionSidedDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDropdownSelectionDirective = /*#__PURE__*/(() => {
  class TuiDropdownSelectionDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.TuiDriver {
    constructor(range, doc, selection$, el, vcr, dropdown) {
      super(subscriber => this.stream$.subscribe(subscriber));
      this.range = range;
      this.doc = doc;
      this.selection$ = selection$;
      this.el = el;
      this.vcr = vcr;
      this.dropdown = dropdown;
      this.handler$ = new rxjs__WEBPACK_IMPORTED_MODULE_34__.BehaviorSubject(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_31__.ALWAYS_TRUE_HANDLER);
      this.stream$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_35__.combineLatest)([this.handler$, this.selection$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(() => this.getRange()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_36__.distinctUntilChanged)())]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(([handler, range]) => {
        const contained = this.el.nativeElement.contains(range.commonAncestorContainer);
        this.range = contained && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_32__.tuiIsTextNode)(range.commonAncestorContainer) ? range : this.range;
        return contained && handler(this.range) || this.inDropdown(range);
      }));
      this.position = 'selection';
      this.type = 'dropdown';
    }
    set tuiDropdownSelection(visible) {
      if (!(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiIsString)(visible)) {
        this.handler$.next(visible);
      }
    }
    getClientRect() {
      switch (this.position) {
        case 'tag':
          {
            const {
              commonAncestorContainer
            } = this.range;
            const element = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_32__.tuiIsElement)(commonAncestorContainer) ? commonAncestorContainer : commonAncestorContainer.parentNode;
            return element && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_32__.tuiIsElement)(element) ? element.getBoundingClientRect() : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_31__.EMPTY_CLIENT_RECT;
          }
        case 'word':
          return (0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__.tuiGetWordRange)(this.range).getBoundingClientRect();
        default:
          return this.range.getBoundingClientRect();
      }
    }
    ngOnDestroy() {
      if (this.ghost) {
        this.vcr.element.nativeElement.removeChild(this.ghost);
      }
    }
    getRange() {
      const active = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.tuiGetNativeFocused)(this.doc);
      const selection = this.doc.getSelection();
      if (active && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_32__.tuiIsTextfield)(active) && this.el.nativeElement.contains(active)) {
        return this.veryVerySadInputFix(active);
      }
      return (selection === null || selection === void 0 ? void 0 : selection.rangeCount) ? selection.getRangeAt(0) : this.range;
    }
    /**
     * Check if Node is inside dropdown
     */
    boxContains(node) {
      var _a;
      return !!((_a = this.dropdown.dropdownBoxRef) === null || _a === void 0 ? void 0 : _a.location.nativeElement.contains(node));
    }
    /**
     * Check if given range is at least partially inside dropdown
     */
    inDropdown(range) {
      const {
        startContainer,
        endContainer
      } = range;
      const {
        nativeElement
      } = this.el;
      const inDropdown = this.boxContains(range.commonAncestorContainer);
      const hostToDropdown = this.boxContains(endContainer) && nativeElement.contains(startContainer);
      const dropdownToHost = this.boxContains(startContainer) && nativeElement.contains(endContainer);
      return inDropdown || hostToDropdown || dropdownToHost;
    }
    veryVerySadInputFix(element) {
      const {
        ghost = this.initGhost(element)
      } = this;
      const {
        top,
        left,
        width,
        height
      } = element.getBoundingClientRect();
      const {
        selectionStart,
        selectionEnd,
        value
      } = element;
      const range = this.doc.createRange();
      const hostRect = this.el.nativeElement.getBoundingClientRect();
      ghost.style.top = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiPx)(top - hostRect.top);
      ghost.style.left = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiPx)(left - hostRect.left);
      ghost.style.width = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiPx)(width);
      ghost.style.height = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiPx)(height);
      ghost.textContent = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_31__.CHAR_ZERO_WIDTH_SPACE + value + _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_31__.CHAR_NO_BREAK_SPACE;
      range.setStart(ghost.firstChild, selectionStart || 0);
      range.setEnd(ghost.firstChild, selectionEnd || 0);
      return range;
    }
    /**
     * Create an invisible DIV styled exactly like input/textarea element inside directive
     */
    initGhost(element) {
      const ghost = this.doc.createElement('div');
      const {
        font,
        letterSpacing,
        textTransform,
        padding
      } = getComputedStyle(element);
      ghost.style.position = 'absolute';
      ghost.style.pointerEvents = 'none';
      ghost.style.opacity = '0';
      ghost.style.whiteSpace = 'pre-wrap';
      ghost.style.font = font;
      ghost.style.letterSpacing = letterSpacing;
      ghost.style.textTransform = textTransform;
      ghost.style.padding = padding;
      this.vcr.element.nativeElement.appendChild(ghost);
      this.ghost = ghost;
      return ghost;
    }
  }
  TuiDropdownSelectionDirective.ɵfac = function TuiDropdownSelectionDirective_Factory(t) {
    return new (t || TuiDropdownSelectionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_37__.TUI_RANGE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_38__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__.TUI_SELECTION_STREAM), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiDropdownDirective));
  };
  TuiDropdownSelectionDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiDropdownSelectionDirective,
    selectors: [["", "tuiDropdown", "", "tuiDropdownSelection", ""]],
    inputs: {
      position: ["tuiDropdownSelectionPosition", "position"],
      tuiDropdownSelection: "tuiDropdownSelection"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsDriver)(TuiDropdownSelectionDirective), (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_9__.tuiAsRectAccessor)(TuiDropdownSelectionDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiDropdownSelectionDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiDropdownModule = /*#__PURE__*/(() => {
  class TuiDropdownModule {}
  TuiDropdownModule.ɵfac = function TuiDropdownModule_Factory(t) {
    return new (t || TuiDropdownModule)();
  };
  TuiDropdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiDropdownModule
  });
  TuiDropdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__.PolymorpheusModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__.TuiActiveZoneModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_29__.TuiOverscrollModule, _taiga_ui_core_components_scrollbar__WEBPACK_IMPORTED_MODULE_27__.TuiScrollbarModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TuiHoveredModule]]
  });
  return TuiDropdownModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-directives-dropdown.js.map

/***/ }),

/***/ 6839:
/*!*******************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-hint.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_HINT_COMPONENT: () => (/* binding */ TUI_HINT_COMPONENT),
/* harmony export */   TUI_HINT_DEFAULT_OPTIONS: () => (/* binding */ TUI_HINT_DEFAULT_OPTIONS),
/* harmony export */   TUI_HINT_OPTIONS: () => (/* binding */ TUI_HINT_OPTIONS),
/* harmony export */   TuiHintComponent: () => (/* binding */ TuiHintComponent),
/* harmony export */   TuiHintDescribeDirective: () => (/* binding */ TuiHintDescribeDirective),
/* harmony export */   TuiHintDirective: () => (/* binding */ TuiHintDirective),
/* harmony export */   TuiHintDriverDirective: () => (/* binding */ TuiHintDriverDirective),
/* harmony export */   TuiHintHostDirective: () => (/* binding */ TuiHintHostDirective),
/* harmony export */   TuiHintHoverDirective: () => (/* binding */ TuiHintHoverDirective),
/* harmony export */   TuiHintManualDirective: () => (/* binding */ TuiHintManualDirective),
/* harmony export */   TuiHintModule: () => (/* binding */ TuiHintModule),
/* harmony export */   TuiHintOptionsDirective: () => (/* binding */ TuiHintOptionsDirective),
/* harmony export */   TuiHintPointerDirective: () => (/* binding */ TuiHintPointerDirective),
/* harmony export */   TuiHintPositionDirective: () => (/* binding */ TuiHintPositionDirective),
/* harmony export */   tuiHintOptionsProvider: () => (/* binding */ tuiHintOptionsProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 4911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 6851);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @taiga-ui/cdk */ 8159);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @taiga-ui/cdk */ 7899);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @taiga-ui/cdk */ 5618);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @taiga-ui/cdk */ 963);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @taiga-ui/cdk */ 5351);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @taiga-ui/cdk */ 4521);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core/abstract */ 8305);
/* harmony import */ var _taiga_ui_core_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @taiga-ui/core/animations */ 6700);
/* harmony import */ var _taiga_ui_core_directives_mode__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @taiga-ui/core/directives/mode */ 3071);
/* harmony import */ var _taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core/services */ 4888);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var _taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/utils */ 6775);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 1749);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 4842);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 5333);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 1570);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 4249);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 3843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs/operators */ 8004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs/operators */ 4776);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4511);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1209);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 5484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs */ 553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! rxjs */ 6424);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @taiga-ui/core/constants */ 2490);






















/**
 * A component to display a hint
 */
function TuiHintComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 1);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
const TUI_HINT_COMPONENT = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateTokenFromFactory)(() => TuiHintComponent);

/** Default values for hint options */
const TUI_HINT_DEFAULT_OPTIONS = {
  direction: 'bottom-left',
  showDelay: 500,
  hideDelay: 200,
  appearance: '',
  icon: 'tuiIconHelpCircle'
};
/**
 * Default parameters for hint directive
 */
const TUI_HINT_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(TUI_HINT_DEFAULT_OPTIONS);
const tuiHintOptionsProvider = override => ({
  provide: TUI_HINT_OPTIONS,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), TuiHintOptionsDirective], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), TUI_HINT_OPTIONS]],
  useFactory: (0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__.tuiOverrideOptions)(override, TUI_HINT_DEFAULT_OPTIONS)
});
let TuiHintOptionsDirective = /*#__PURE__*/(() => {
  class TuiHintOptionsDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.AbstractTuiController {
    constructor(options) {
      super();
      this.options = options;
      this.direction = this.options.direction;
      this.appearance = this.options.appearance;
      this.showDelay = this.options.showDelay;
      this.hideDelay = this.options.hideDelay;
      this.icon = this.options.icon;
    }
  }
  TuiHintOptionsDirective.ɵfac = function TuiHintOptionsDirective_Factory(t) {
    return new (t || TuiHintOptionsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_HINT_OPTIONS, 4));
  };
  TuiHintOptionsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHintOptionsDirective,
    selectors: [["", "tuiHintContent", ""]],
    inputs: {
      content: ["tuiHintContent", "content"],
      direction: ["tuiHintDirection", "direction"],
      appearance: ["tuiHintAppearance", "appearance"],
      showDelay: ["tuiHintShowDelay", "showDelay"],
      hideDelay: ["tuiHintHideDelay", "hideDelay"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: TUI_HINT_OPTIONS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TuiHintOptionsDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiHintOptionsDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHintDirective = /*#__PURE__*/(() => {
  class TuiHintDirective {
    constructor(el, component, hintService, options, activeZone) {
      this.el = el;
      this.component = component;
      this.hintService = hintService;
      this.options = options;
      this.activeZone = activeZone;
      this.tuiHintAppearance = null;
      this.type = 'hint';
    }
    get appearance() {
      var _a;
      return (_a = this.tuiHintAppearance) !== null && _a !== void 0 ? _a : this.options.appearance;
    }
    ngOnChanges() {
      if (!this.content) {
        this.toggle(false);
      }
    }
    ngOnDestroy() {
      this.toggle(false);
    }
    getClientRect() {
      return this.el.nativeElement.getBoundingClientRect();
    }
    toggle(show) {
      if (show && this.content) {
        this.hintService.add(this);
      } else {
        this.hintService.remove(this);
      }
    }
  }
  TuiHintDirective.ɵfac = function TuiHintDirective_Factory(t) {
    return new (t || TuiHintDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__.PolymorpheusComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_5__.TuiHintService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_HINT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TuiActiveZoneDirective, 8));
  };
  TuiHintDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHintDirective,
    selectors: [["", "tuiHint", "", 5, "ng-container"]],
    inputs: {
      content: ["tuiHint", "content"],
      context: ["tuiHintContext", "context"],
      tuiHintAppearance: "tuiHintAppearance"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiAsRectAccessor)(TuiHintDirective), (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiAsVehicle)(TuiHintDirective), {
      provide: _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__.PolymorpheusComponent,
      deps: [TUI_HINT_COMPONENT, _angular_core__WEBPACK_IMPORTED_MODULE_0__.INJECTOR],
      useClass: _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__.PolymorpheusComponent
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return TuiHintDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* eslint-disable rxjs/no-unsafe-takeuntil */
let TuiHintHoverDirective = /*#__PURE__*/(() => {
  class TuiHintHoverDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.TuiDriver {
    constructor(hovered$, options, el) {
      super(subscriber => this.stream$.subscribe(subscriber));
      this.hovered$ = hovered$;
      this.options = options;
      this.el = el;
      this.visible = false;
      this.toggle$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
      this.stream$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.toggle$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(visible => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(visible).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.delay)(visible ? 0 : this.hideDelay))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.hovered$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.repeat)()), this.hovered$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(visible => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(visible).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.delay)(visible ? this.showDelay : this.hideDelay))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.toggle$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.repeat)())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(() => this.enabled), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(value => value && !(0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__.tuiIsObscured)(this.el.nativeElement)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(visible => {
        this.visible = visible;
      }));
      this.showDelay = this.options.showDelay;
      this.hideDelay = this.options.hideDelay;
      this.type = 'hint';
      this.enabled = true;
    }
    toggle(visible = !this.visible) {
      this.toggle$.next(visible);
    }
  }
  TuiHintHoverDirective.ɵfac = function TuiHintHoverDirective_Factory(t) {
    return new (t || TuiHintHoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TuiHoveredService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_HINT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  TuiHintHoverDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHintHoverDirective,
    selectors: [["", "tuiHint", "", 5, "ng-container"]],
    inputs: {
      showDelay: ["tuiHintShowDelay", "showDelay"],
      hideDelay: ["tuiHintHideDelay", "hideDelay"]
    },
    exportAs: ["tuiHintHover"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiAsDriver)(TuiHintHoverDirective), _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TuiHoveredService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiHintHoverDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHintPointerDirective = /*#__PURE__*/(() => {
  class TuiHintPointerDirective extends TuiHintHoverDirective {
    constructor() {
      super(...arguments);
      this.currentRect = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__.EMPTY_CLIENT_RECT;
    }
    onMove({
      clientX,
      clientY
    }) {
      this.currentRect = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_20__.tuiPointToClientRect)(clientX, clientY);
    }
    getClientRect() {
      return this.currentRect;
    }
  }
  TuiHintPointerDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiHintPointerDirective_BaseFactory;
    return function TuiHintPointerDirective_Factory(t) {
      return (ɵTuiHintPointerDirective_BaseFactory || (ɵTuiHintPointerDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TuiHintPointerDirective)))(t || TuiHintPointerDirective);
    };
  }();
  TuiHintPointerDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHintPointerDirective,
    selectors: [["", "tuiHint", "", "tuiHintPointer", ""]],
    hostBindings: function TuiHintPointerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove.silent", function TuiHintPointerDirective_mousemove_silent_HostBindingHandler($event) {
          return ctx.onMove($event);
        });
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiAsRectAccessor)(TuiHintPointerDirective), (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiAsDriver)(TuiHintPointerDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiHintPointerDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const GAP = 4;
let TuiHintComponent = /*#__PURE__*/(() => {
  class TuiHintComponent {
    constructor(hovered$, position$, destroy$, animation, pointer, accessor, el, polymorpheus, hover, mode, visualViewportService, viewport) {
      var _a;
      this.animation = animation;
      this.pointer = pointer;
      this.accessor = accessor;
      this.el = el;
      this.polymorpheus = polymorpheus;
      this.hover = hover;
      this.mode = mode;
      this.visualViewportService = visualViewportService;
      this.viewport = viewport;
      this.appearance = this.polymorpheus.$implicit.appearance || ((_a = this.mode) === null || _a === void 0 ? void 0 : _a.mode);
      position$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(point => this.visualViewportService.correct(point)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(destroy$)).subscribe(([top, left]) => {
        this.update(top, left);
      });
      hovered$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(destroy$)).subscribe(hover => this.hover.toggle(hover));
    }
    get content() {
      return this.polymorpheus.$implicit.content;
    }
    get context() {
      return this.polymorpheus.$implicit.context;
    }
    onClick(target) {
      if (!this.el.nativeElement.contains(target) && !this.hover.el.nativeElement.contains(target) || (0,_taiga_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__.tuiIsObscured)(this.hover.el.nativeElement)) {
        this.hover.toggle(false);
      }
    }
    update(top, left) {
      const {
        height,
        width
      } = this.el.nativeElement.getBoundingClientRect();
      const {
        style
      } = this.el.nativeElement;
      const rect = this.accessor.getClientRect();
      const viewport = this.viewport.getClientRect();
      if (rect === _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__.EMPTY_CLIENT_RECT) {
        return;
      }
      const safeLeft = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiClamp)(left, GAP, viewport.width - width - GAP);
      const [beakTop, beakLeft] = this.visualViewportService.correct([rect.top + rect.height / 2 - top, rect.left + rect.width / 2 - safeLeft]);
      style.top = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.tuiPx)(top);
      style.left = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.tuiPx)(safeLeft);
      style.setProperty('--top', (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.tuiPx)((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiClamp)(beakTop, 0.5, height - 1)));
      style.setProperty('--left', (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.tuiPx)((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiClamp)(beakLeft, 0.5, width - 1)));
    }
  }
  TuiHintComponent.ɵfac = function TuiHintComponent_Factory(t) {
    return new (t || TuiHintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TuiHoveredService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_5__.TuiPositionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiDestroyService, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__.TUI_ANIMATION_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiHintPointerDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.TuiRectAccessor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__.POLYMORPHEUS_CONTEXT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiHintHoverDirective), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_directives_mode__WEBPACK_IMPORTED_MODULE_25__.TuiModeDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_5__.TuiVisualViewportService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__.TUI_VIEWPORT));
  };
  TuiHintComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiHintComponent,
    selectors: [["tui-hint"]],
    hostVars: 4,
    hostBindings: function TuiHintComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiHintComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event.target);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-appearance", ctx.appearance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@tuiFadeIn", ctx.animation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_untouchable", ctx.pointer);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiDestroyService, _taiga_ui_core_services__WEBPACK_IMPORTED_MODULE_5__.TuiPositionService, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_18__.TuiHoveredService, (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiPositionAccessorFor)('hint'), (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiRectAccessorFor)('hint', TuiHintDirective)])],
    decls: 1,
    vars: 2,
    consts: [[3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
    template: function TuiHintComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiHintComponent_span_0_Template, 1, 1, "span", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx.content)("polymorpheusOutletContext", ctx.context);
      }
    },
    dependencies: [_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__.PolymorpheusOutletDirective],
    styles: ["[_nghost-%COMP%]{position:absolute;max-width:18rem;min-height:var(--tui-height-m);padding:.75rem 1rem;background:var(--tui-primary);border-radius:var(--tui-radius-l);color:var(--tui-primary-text);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;word-wrap:break-word}[_nghost-%COMP%]:before{content:\"\";position:absolute;top:var(--top);left:var(--left);width:.5rem;height:.5rem;border-radius:.125rem;box-sizing:border-box;background:inherit;transform:translate(-50%,-50%) rotate(45deg)}[data-appearance=error][_nghost-%COMP%]{background:var(--tui-error-fill)}[data-appearance=onDark][_nghost-%COMP%]{background:var(--tui-elevation-02);color:var(--tui-text-01);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}[_nghost-%COMP%]:not([style*=\"top\"]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}"],
    data: {
      animation: [_taiga_ui_core_animations__WEBPACK_IMPORTED_MODULE_26__.tuiFadeIn]
    },
    changeDetection: 0
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__.tuiPure], TuiHintComponent.prototype, "update", null);
  return TuiHintComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHintDescribeDirective = /*#__PURE__*/(() => {
  class TuiHintDescribeDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.TuiDriver {
    constructor(zone, doc, el) {
      super(subscriber => this.stream$.subscribe(subscriber));
      this.zone = zone;
      this.doc = doc;
      this.el = el;
      this.id$ = new rxjs__WEBPACK_IMPORTED_MODULE_29__.ReplaySubject(1);
      this.stream$ = this.id$.pipe((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_30__.tuiIfMap)(() => (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_30__.tuiTypedFromEvent)(this.doc, 'keydown', {
        capture: true
      }), _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiIsPresent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => this.focused ? (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(false) : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_30__.tuiTypedFromEvent)(this.doc, 'keyup'), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_30__.tuiTypedFromEvent)(this.element, 'blur')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(() => this.focused))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.debounce)(visible => visible ? (0,rxjs__WEBPACK_IMPORTED_MODULE_32__.timer)(1000) : (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.startWith)(false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_35__.skip)(1), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_30__.tuiZoneOptimized)(this.zone));
      this.tuiHintDescribe = '';
      this.type = 'hint';
    }
    ngOnChanges() {
      this.id$.next(this.tuiHintDescribe);
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_36__.tuiIsNativeFocused)(this.element);
    }
    get element() {
      return this.doc.getElementById(this.tuiHintDescribe || '') || this.el.nativeElement;
    }
  }
  TuiHintDescribeDirective.ɵfac = function TuiHintDescribeDirective_Factory(t) {
    return new (t || TuiHintDescribeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_37__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  TuiHintDescribeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHintDescribeDirective,
    selectors: [["", "tuiHintDescribe", ""]],
    inputs: {
      tuiHintDescribe: "tuiHintDescribe"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiAsDriver)(TuiHintDescribeDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__.tuiPure], TuiHintDescribeDirective.prototype, "element", null);
  return TuiHintDescribeDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHintDriverDirective = /*#__PURE__*/(() => {
  class TuiHintDriverDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.AbstractTuiDriverDirective {
    // TODO: Figure out why this is necessary under nx test runner
    constructor(destroy$, drivers, vehicles) {
      super(destroy$, drivers, vehicles);
      this.type = 'hint';
    }
  }
  TuiHintDriverDirective.ɵfac = function TuiHintDriverDirective_Factory(t) {
    return new (t || TuiHintDriverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiDestroyService, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.TuiDriver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.TuiVehicle));
  };
  TuiHintDriverDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHintDriverDirective,
    selectors: [["", "tuiHint", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiDestroyService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiHintDriverDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHintHostDirective = /*#__PURE__*/(() => {
  class TuiHintHostDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.TuiRectAccessor {
    constructor() {
      super(...arguments);
      this.type = 'hint';
    }
    getClientRect() {
      var _a;
      return ((_a = this.tuiHintHost) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__.EMPTY_CLIENT_RECT;
    }
  }
  TuiHintHostDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiHintHostDirective_BaseFactory;
    return function TuiHintHostDirective_Factory(t) {
      return (ɵTuiHintHostDirective_BaseFactory || (ɵTuiHintHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TuiHintHostDirective)))(t || TuiHintHostDirective);
    };
  }();
  TuiHintHostDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHintHostDirective,
    selectors: [["", "tuiHint", "", "tuiHintHost", ""]],
    inputs: {
      tuiHintHost: "tuiHintHost"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiAsRectAccessor)(TuiHintHostDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiHintHostDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHintManualDirective = /*#__PURE__*/(() => {
  class TuiHintManualDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.TuiDriver {
    constructor(hover) {
      super(subscriber => this.stream$.subscribe(subscriber));
      this.stream$ = new rxjs__WEBPACK_IMPORTED_MODULE_38__.BehaviorSubject(false);
      this.tuiHintManual = false;
      this.type = 'hint';
      hover.enabled = false;
    }
    ngOnChanges() {
      this.stream$.next(this.tuiHintManual);
    }
  }
  TuiHintManualDirective.ɵfac = function TuiHintManualDirective_Factory(t) {
    return new (t || TuiHintManualDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiHintHoverDirective));
  };
  TuiHintManualDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHintManualDirective,
    selectors: [["", "tuiHint", "", "tuiHintManual", ""]],
    inputs: {
      tuiHintManual: "tuiHintManual"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiAsDriver)(TuiHintManualDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return TuiHintManualDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const OFFSET = 8;
const ARROW_OFFSET = 22;
const TOP = 0;
const LEFT = 1;
let TuiHintPositionDirective = /*#__PURE__*/(() => {
  class TuiHintPositionDirective extends _taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.TuiPositionAccessor {
    constructor(options, viewport, directive, accessors) {
      super();
      this.options = options;
      this.viewport = viewport;
      this.directive = directive;
      this.accessors = accessors;
      this.points = _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_39__.TUI_HINT_DIRECTIONS.reduce((acc, direction) => Object.assign(Object.assign({}, acc), {
        [direction]: [0, 0]
      }), {});
      this.direction = this.options.direction;
      this.type = 'hint';
    }
    // eslint-disable-next-line max-statements
    getPosition({
      width,
      height
    }) {
      var _a, _b;
      const hostRect = (_b = (_a = this.accessor) === null || _a === void 0 ? void 0 : _a.getClientRect()) !== null && _b !== void 0 ? _b : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_19__.EMPTY_CLIENT_RECT;
      const leftCenter = hostRect.left + hostRect.width / 2;
      const topCenter = hostRect.top + hostRect.height / 2;
      this.points['top-left'][TOP] = hostRect.top - height - OFFSET;
      this.points['top-left'][LEFT] = leftCenter - width + ARROW_OFFSET;
      this.points.top[TOP] = this.points['top-left'][TOP];
      this.points.top[LEFT] = leftCenter - width / 2;
      this.points['top-right'][TOP] = this.points['top-left'][TOP];
      this.points['top-right'][LEFT] = leftCenter - ARROW_OFFSET;
      this.points['bottom-left'][TOP] = hostRect.bottom + OFFSET;
      this.points['bottom-left'][LEFT] = this.points['top-left'][LEFT];
      this.points.bottom[TOP] = this.points['bottom-left'][TOP];
      this.points.bottom[LEFT] = this.points.top[LEFT];
      this.points['bottom-right'][TOP] = this.points['bottom-left'][TOP];
      this.points['bottom-right'][LEFT] = this.points['top-right'][LEFT];
      this.points['left-top'][TOP] = topCenter - height + ARROW_OFFSET;
      this.points['left-top'][LEFT] = hostRect.left - width - OFFSET;
      this.points.left[TOP] = topCenter - height / 2;
      this.points.left[LEFT] = this.points['left-top'][LEFT];
      this.points['left-bottom'][TOP] = topCenter - ARROW_OFFSET;
      this.points['left-bottom'][LEFT] = this.points['left-top'][LEFT];
      this.points['right-top'][TOP] = this.points['left-top'][TOP];
      this.points['right-top'][LEFT] = hostRect.right + OFFSET;
      this.points.right[TOP] = this.points.left[TOP];
      this.points.right[LEFT] = this.points['right-top'][LEFT];
      this.points['right-bottom'][TOP] = this.points['left-bottom'][TOP];
      this.points['right-bottom'][LEFT] = this.points['right-top'][LEFT];
      if (this.checkPosition(this.points[this.direction], width, height)) {
        return this.points[this.direction];
      }
      const direction = _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_39__.TUI_HINT_DIRECTIONS.find(direction => this.checkPosition(this.points[direction], width, height));
      return this.points[direction || this.fallback];
    }
    get accessor() {
      return (0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiFallbackRectAccessor)('hint')(this.accessors, this.directive);
    }
    get fallback() {
      return this.points.top[TOP] > this.viewport.getClientRect().bottom - this.points.bottom[TOP] ? 'top' : 'bottom';
    }
    checkPosition([top, left], width, height) {
      const viewport = this.viewport.getClientRect();
      return top > OFFSET && left > OFFSET && top + height < viewport.bottom - OFFSET && left + width < viewport.right - OFFSET;
    }
  }
  TuiHintPositionDirective.ɵfac = function TuiHintPositionDirective_Factory(t) {
    return new (t || TuiHintPositionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_HINT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_24__.TUI_VIEWPORT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TuiHintDirective), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.TuiRectAccessor));
  };
  TuiHintPositionDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiHintPositionDirective,
    selectors: [["", "tuiHint", "", 3, "tuiHintCustomPosition", ""]],
    inputs: {
      direction: ["tuiHintDirection", "direction"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_core_abstract__WEBPACK_IMPORTED_MODULE_7__.tuiAsPositionAccessor)(TuiHintPositionDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__.tuiPure], TuiHintPositionDirective.prototype, "accessor", null);
  return TuiHintPositionDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiHintModule = /*#__PURE__*/(() => {
  class TuiHintModule {}
  TuiHintModule.ɵfac = function TuiHintModule_Factory(t) {
    return new (t || TuiHintModule)();
  };
  TuiHintModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiHintModule
  });
  TuiHintModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_37__.CommonModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__.PolymorpheusModule]]
  });
  return TuiHintModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-directives-hint.js.map

/***/ }),

/***/ 589:
/*!****************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-mask-accessor.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiMaskAccessorDirective: () => (/* binding */ TuiMaskAccessorDirective),
/* harmony export */   TuiMaskAccessorModule: () => (/* binding */ TuiMaskAccessorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);




let TuiMaskAccessorDirective = /*#__PURE__*/(() => {
  class TuiMaskAccessorDirective {}
  TuiMaskAccessorDirective.ɵfac = function TuiMaskAccessorDirective_Factory(t) {
    return new (t || TuiMaskAccessorDirective)();
  };
  TuiMaskAccessorDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiMaskAccessorDirective,
    selectors: [["input", "tuiMaskAccessor", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.TUI_VALUE_ACCESSOR], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor],
      multi: true,
      useFactory: (accessor, fallback) => accessor ? accessor[0] : fallback
    }])]
  });
  return TuiMaskAccessorDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @internal
 */
let TuiMaskAccessorModule = /*#__PURE__*/(() => {
  class TuiMaskAccessorModule {}
  TuiMaskAccessorModule.ɵfac = function TuiMaskAccessorModule_Factory(t) {
    return new (t || TuiMaskAccessorModule)();
  };
  TuiMaskAccessorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiMaskAccessorModule
  });
  TuiMaskAccessorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return TuiMaskAccessorModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-directives-mask-accessor.js.map

/***/ }),

/***/ 3071:
/*!*******************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-mode.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiModeDirective: () => (/* binding */ TuiModeDirective),
/* harmony export */   TuiModeModule: () => (/* binding */ TuiModeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);



let TuiModeDirective = /*#__PURE__*/(() => {
  class TuiModeDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.AbstractTuiController {
    constructor() {
      super(...arguments);
      this.mode = null;
    }
  }
  TuiModeDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiModeDirective_BaseFactory;
    return function TuiModeDirective_Factory(t) {
      return (ɵTuiModeDirective_BaseFactory || (ɵTuiModeDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TuiModeDirective)))(t || TuiModeDirective);
    };
  }();
  TuiModeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: TuiModeDirective,
    selectors: [["", "tuiMode", ""]],
    inputs: {
      mode: ["tuiMode", "mode"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiModeDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiModeModule = /*#__PURE__*/(() => {
  class TuiModeModule {}
  TuiModeModule.ɵfac = function TuiModeModule_Factory(t) {
    return new (t || TuiModeModule)();
  };
  TuiModeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TuiModeModule
  });
  TuiModeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  return TuiModeModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-directives-mode.js.map

/***/ }),

/***/ 1899:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-scroll-into-view.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiScrollIntoViewDirective: () => (/* binding */ TuiScrollIntoViewDirective),
/* harmony export */   TuiScrollIntoViewModule: () => (/* binding */ TuiScrollIntoViewModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/constants */ 2490);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 553);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1749);








/**
 * Directive scrolls element into view inside tui-scrollbar
 */
let TuiScrollIntoViewDirective = /*#__PURE__*/(() => {
  class TuiScrollIntoViewDirective {
    constructor(el, destroy$) {
      this.el = el;
      this.destroy$ = destroy$;
    }
    set tuiScrollIntoView(scroll) {
      if (!scroll) {
        return;
      }
      // Timeout is necessary in order to give element render cycle to get into its final spot
      // (for example if it is inside dropdown box which has to be positioned first)
      (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.destroy$)).subscribe(() => {
        this.el.nativeElement.dispatchEvent(new CustomEvent(_taiga_ui_core_constants__WEBPACK_IMPORTED_MODULE_2__.TUI_SCROLL_INTO_VIEW, {
          bubbles: true,
          detail: this.el.nativeElement
        }));
      });
    }
  }
  TuiScrollIntoViewDirective.ɵfac = function TuiScrollIntoViewDirective_Factory(t) {
    return new (t || TuiScrollIntoViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiDestroyService, 2));
  };
  TuiScrollIntoViewDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: TuiScrollIntoViewDirective,
    selectors: [["", "tuiScrollIntoView", ""]],
    inputs: {
      tuiScrollIntoView: "tuiScrollIntoView"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiDestroyService])]
  });
  return TuiScrollIntoViewDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiScrollIntoViewModule = /*#__PURE__*/(() => {
  class TuiScrollIntoViewModule {}
  TuiScrollIntoViewModule.ɵfac = function TuiScrollIntoViewModule_Factory(t) {
    return new (t || TuiScrollIntoViewModule)();
  };
  TuiScrollIntoViewModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TuiScrollIntoViewModule
  });
  TuiScrollIntoViewModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
  return TuiScrollIntoViewModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-directives-scroll-into-view.js.map

/***/ }),

/***/ 9289:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-textfield-controller.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TEXTFIELD_CONTROLLER_PROVIDER: () => (/* binding */ TEXTFIELD_CONTROLLER_PROVIDER),
/* harmony export */   TUI_TEXTFIELD_APPEARANCE_DIRECTIVE: () => (/* binding */ TUI_TEXTFIELD_APPEARANCE_DIRECTIVE),
/* harmony export */   TUI_TEXTFIELD_CLEANER: () => (/* binding */ TUI_TEXTFIELD_CLEANER),
/* harmony export */   TUI_TEXTFIELD_CUSTOM_CONTENT: () => (/* binding */ TUI_TEXTFIELD_CUSTOM_CONTENT),
/* harmony export */   TUI_TEXTFIELD_DEFAULT_OPTIONS: () => (/* binding */ TUI_TEXTFIELD_DEFAULT_OPTIONS),
/* harmony export */   TUI_TEXTFIELD_FILLER: () => (/* binding */ TUI_TEXTFIELD_FILLER),
/* harmony export */   TUI_TEXTFIELD_ICON: () => (/* binding */ TUI_TEXTFIELD_ICON),
/* harmony export */   TUI_TEXTFIELD_ICON_LEFT: () => (/* binding */ TUI_TEXTFIELD_ICON_LEFT),
/* harmony export */   TUI_TEXTFIELD_LABEL_OUTSIDE: () => (/* binding */ TUI_TEXTFIELD_LABEL_OUTSIDE),
/* harmony export */   TUI_TEXTFIELD_OPTIONS: () => (/* binding */ TUI_TEXTFIELD_OPTIONS),
/* harmony export */   TUI_TEXTFIELD_POSTFIX: () => (/* binding */ TUI_TEXTFIELD_POSTFIX),
/* harmony export */   TUI_TEXTFIELD_PREFIX: () => (/* binding */ TUI_TEXTFIELD_PREFIX),
/* harmony export */   TUI_TEXTFIELD_SIZE: () => (/* binding */ TUI_TEXTFIELD_SIZE),
/* harmony export */   TUI_TEXTFIELD_WATCHED_CONTROLLER: () => (/* binding */ TUI_TEXTFIELD_WATCHED_CONTROLLER),
/* harmony export */   TuiTextfieldAppearanceDirective: () => (/* binding */ TuiTextfieldAppearanceDirective),
/* harmony export */   TuiTextfieldCleanerDirective: () => (/* binding */ TuiTextfieldCleanerDirective),
/* harmony export */   TuiTextfieldController: () => (/* binding */ TuiTextfieldController),
/* harmony export */   TuiTextfieldControllerModule: () => (/* binding */ TuiTextfieldControllerModule),
/* harmony export */   TuiTextfieldCustomContentDirective: () => (/* binding */ TuiTextfieldCustomContentDirective),
/* harmony export */   TuiTextfieldFillerDirective: () => (/* binding */ TuiTextfieldFillerDirective),
/* harmony export */   TuiTextfieldIconDirective: () => (/* binding */ TuiTextfieldIconDirective),
/* harmony export */   TuiTextfieldIconLeftDirective: () => (/* binding */ TuiTextfieldIconLeftDirective),
/* harmony export */   TuiTextfieldLabelOutsideDirective: () => (/* binding */ TuiTextfieldLabelOutsideDirective),
/* harmony export */   TuiTextfieldPostfixDirective: () => (/* binding */ TuiTextfieldPostfixDirective),
/* harmony export */   TuiTextfieldPrefixDirective: () => (/* binding */ TuiTextfieldPrefixDirective),
/* harmony export */   TuiTextfieldSizeDirective: () => (/* binding */ TuiTextfieldSizeDirective),
/* harmony export */   tuiTextfieldOptionsProvider: () => (/* binding */ tuiTextfieldOptionsProvider)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ 4521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4553);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1749);






class TuiTextfieldController {
  constructor(change$, options, legacyAppearance, appearanceDirective, cleanerDirective, customContentDirective, iconDirective, iconLeftDirective, labelOutsideDirective, sizeDirective, prefixDirective, postfixDirective, fillerDirective) {
    this.change$ = change$;
    this.options = options;
    this.legacyAppearance = legacyAppearance;
    this.appearanceDirective = appearanceDirective;
    this.cleanerDirective = cleanerDirective;
    this.customContentDirective = customContentDirective;
    this.iconDirective = iconDirective;
    this.iconLeftDirective = iconLeftDirective;
    this.labelOutsideDirective = labelOutsideDirective;
    this.sizeDirective = sizeDirective;
    this.prefixDirective = prefixDirective;
    this.postfixDirective = postfixDirective;
    this.fillerDirective = fillerDirective;
  }
  get appearance() {
    return this.appearanceDirective.appearance || this.legacyAppearance;
  }
  get cleaner() {
    return this.cleanerDirective.cleaner;
  }
  get customContent() {
    return this.customContentDirective.customContent || ``;
  }
  get icon() {
    return this.iconDirective.icon;
  }
  get iconLeft() {
    return this.iconLeftDirective.iconLeft;
  }
  get labelOutside() {
    return this.labelOutsideDirective.labelOutside;
  }
  get size() {
    return this.sizeDirective.size;
  }
  get prefix() {
    return this.prefixDirective.prefix;
  }
  get postfix() {
    return this.postfixDirective.postfix;
  }
  get filler() {
    return this.fillerDirective.filler;
  }
}

/** Default values for primitive textfield options */
const TUI_TEXTFIELD_DEFAULT_OPTIONS = {
  iconCleaner: `tuiIconClose`,
  hintOnDisabled: false
};
/**
 * Default parameters for textfield
 */
const TUI_TEXTFIELD_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateToken)(TUI_TEXTFIELD_DEFAULT_OPTIONS);
function tuiTextfieldOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiProvideOptions)(TUI_TEXTFIELD_OPTIONS, options, TUI_TEXTFIELD_DEFAULT_OPTIONS);
}

// TODO: rename to TUI_TEXTFIELD_APPEARANCE in v4
const TUI_TEXTFIELD_APPEARANCE_DIRECTIVE = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldAppearanceDirective());
let TuiTextfieldAppearanceDirective = /*#__PURE__*/(() => {
  class TuiTextfieldAppearanceDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {
    constructor() {
      super(...arguments);
      // it's an empty string by default for backward compatibility
      // (see comment https://github.com/taiga-family/taiga-ui/pull/3007#issuecomment-1315179508)
      this.appearance = '';
    }
  }
  TuiTextfieldAppearanceDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldAppearanceDirective_BaseFactory;
    return function TuiTextfieldAppearanceDirective_Factory(t) {
      return (ɵTuiTextfieldAppearanceDirective_BaseFactory || (ɵTuiTextfieldAppearanceDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldAppearanceDirective)))(t || TuiTextfieldAppearanceDirective);
    };
  }();
  TuiTextfieldAppearanceDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldAppearanceDirective,
    selectors: [["", "tuiTextfieldAppearance", ""]],
    inputs: {
      appearance: ["tuiTextfieldAppearance", "appearance"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldAppearanceDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldAppearanceDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_CLEANER = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldCleanerDirective());
let TuiTextfieldCleanerDirective = /*#__PURE__*/(() => {
  class TuiTextfieldCleanerDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {
    constructor() {
      super(...arguments);
      this.cleaner = false;
    }
  }
  TuiTextfieldCleanerDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldCleanerDirective_BaseFactory;
    return function TuiTextfieldCleanerDirective_Factory(t) {
      return (ɵTuiTextfieldCleanerDirective_BaseFactory || (ɵTuiTextfieldCleanerDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldCleanerDirective)))(t || TuiTextfieldCleanerDirective);
    };
  }();
  TuiTextfieldCleanerDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldCleanerDirective,
    selectors: [["", "tuiTextfieldCleaner", ""]],
    inputs: {
      cleaner: ["tuiTextfieldCleaner", "cleaner"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_CLEANER,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldCleanerDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldCleanerDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_CUSTOM_CONTENT = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldCustomContentDirective());
let TuiTextfieldCustomContentDirective = /*#__PURE__*/(() => {
  class TuiTextfieldCustomContentDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {}
  TuiTextfieldCustomContentDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldCustomContentDirective_BaseFactory;
    return function TuiTextfieldCustomContentDirective_Factory(t) {
      return (ɵTuiTextfieldCustomContentDirective_BaseFactory || (ɵTuiTextfieldCustomContentDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldCustomContentDirective)))(t || TuiTextfieldCustomContentDirective);
    };
  }();
  TuiTextfieldCustomContentDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldCustomContentDirective,
    selectors: [["", "tuiTextfieldCustomContent", ""]],
    inputs: {
      customContent: ["tuiTextfieldCustomContent", "customContent"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_CUSTOM_CONTENT,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldCustomContentDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldCustomContentDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_FILLER = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldFillerDirective());
let TuiTextfieldFillerDirective = /*#__PURE__*/(() => {
  class TuiTextfieldFillerDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {
    constructor() {
      super(...arguments);
      this.filler = '';
    }
  }
  TuiTextfieldFillerDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldFillerDirective_BaseFactory;
    return function TuiTextfieldFillerDirective_Factory(t) {
      return (ɵTuiTextfieldFillerDirective_BaseFactory || (ɵTuiTextfieldFillerDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldFillerDirective)))(t || TuiTextfieldFillerDirective);
    };
  }();
  TuiTextfieldFillerDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldFillerDirective,
    selectors: [["", "tuiTextfieldFiller", ""]],
    inputs: {
      filler: ["tuiTextfieldFiller", "filler"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_FILLER,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldFillerDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldFillerDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_ICON = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldIconDirective());
let TuiTextfieldIconDirective = /*#__PURE__*/(() => {
  class TuiTextfieldIconDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {}
  TuiTextfieldIconDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldIconDirective_BaseFactory;
    return function TuiTextfieldIconDirective_Factory(t) {
      return (ɵTuiTextfieldIconDirective_BaseFactory || (ɵTuiTextfieldIconDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldIconDirective)))(t || TuiTextfieldIconDirective);
    };
  }();
  TuiTextfieldIconDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldIconDirective,
    selectors: [["", "tuiTextfieldIcon", ""]],
    inputs: {
      icon: ["tuiTextfieldIcon", "icon"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_ICON,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldIconDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldIconDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_ICON_LEFT = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldIconLeftDirective());
let TuiTextfieldIconLeftDirective = /*#__PURE__*/(() => {
  class TuiTextfieldIconLeftDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {}
  TuiTextfieldIconLeftDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldIconLeftDirective_BaseFactory;
    return function TuiTextfieldIconLeftDirective_Factory(t) {
      return (ɵTuiTextfieldIconLeftDirective_BaseFactory || (ɵTuiTextfieldIconLeftDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldIconLeftDirective)))(t || TuiTextfieldIconLeftDirective);
    };
  }();
  TuiTextfieldIconLeftDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldIconLeftDirective,
    selectors: [["", "tuiTextfieldIconLeft", ""]],
    inputs: {
      iconLeft: ["tuiTextfieldIconLeft", "iconLeft"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_ICON_LEFT,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldIconLeftDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldIconLeftDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_LABEL_OUTSIDE = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldLabelOutsideDirective());
let TuiTextfieldLabelOutsideDirective = /*#__PURE__*/(() => {
  class TuiTextfieldLabelOutsideDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {
    constructor() {
      super(...arguments);
      this.labelOutside = false;
    }
  }
  TuiTextfieldLabelOutsideDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldLabelOutsideDirective_BaseFactory;
    return function TuiTextfieldLabelOutsideDirective_Factory(t) {
      return (ɵTuiTextfieldLabelOutsideDirective_BaseFactory || (ɵTuiTextfieldLabelOutsideDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldLabelOutsideDirective)))(t || TuiTextfieldLabelOutsideDirective);
    };
  }();
  TuiTextfieldLabelOutsideDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldLabelOutsideDirective,
    selectors: [["", "tuiTextfieldLabelOutside", ""]],
    inputs: {
      labelOutside: ["tuiTextfieldLabelOutside", "labelOutside"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldLabelOutsideDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldLabelOutsideDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_POSTFIX = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldPostfixDirective());
let TuiTextfieldPostfixDirective = /*#__PURE__*/(() => {
  class TuiTextfieldPostfixDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {
    constructor() {
      super(...arguments);
      this.postfix = '';
    }
  }
  TuiTextfieldPostfixDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldPostfixDirective_BaseFactory;
    return function TuiTextfieldPostfixDirective_Factory(t) {
      return (ɵTuiTextfieldPostfixDirective_BaseFactory || (ɵTuiTextfieldPostfixDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldPostfixDirective)))(t || TuiTextfieldPostfixDirective);
    };
  }();
  TuiTextfieldPostfixDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldPostfixDirective,
    selectors: [["", "tuiTextfieldPostfix", ""]],
    inputs: {
      postfix: ["tuiTextfieldPostfix", "postfix"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_POSTFIX,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldPostfixDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldPostfixDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_PREFIX = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldPrefixDirective());
let TuiTextfieldPrefixDirective = /*#__PURE__*/(() => {
  class TuiTextfieldPrefixDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {
    constructor() {
      super(...arguments);
      this.prefix = '';
    }
  }
  TuiTextfieldPrefixDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldPrefixDirective_BaseFactory;
    return function TuiTextfieldPrefixDirective_Factory(t) {
      return (ɵTuiTextfieldPrefixDirective_BaseFactory || (ɵTuiTextfieldPrefixDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldPrefixDirective)))(t || TuiTextfieldPrefixDirective);
    };
  }();
  TuiTextfieldPrefixDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldPrefixDirective,
    selectors: [["", "tuiTextfieldPrefix", ""]],
    inputs: {
      prefix: ["tuiTextfieldPrefix", "prefix"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_PREFIX,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldPrefixDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldPrefixDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_SIZE = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiCreateTokenFromFactory)(() => new TuiTextfieldSizeDirective());
let TuiTextfieldSizeDirective = /*#__PURE__*/(() => {
  class TuiTextfieldSizeDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiController {
    constructor() {
      super(...arguments);
      this.size = 'l';
    }
  }
  TuiTextfieldSizeDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiTextfieldSizeDirective_BaseFactory;
    return function TuiTextfieldSizeDirective_Factory(t) {
      return (ɵTuiTextfieldSizeDirective_BaseFactory || (ɵTuiTextfieldSizeDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiTextfieldSizeDirective)))(t || TuiTextfieldSizeDirective);
    };
  }();
  TuiTextfieldSizeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiTextfieldSizeDirective,
    selectors: [["", "tuiTextfieldSize", ""]],
    inputs: {
      size: ["tuiTextfieldSize", "size"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: TUI_TEXTFIELD_SIZE,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => TuiTextfieldSizeDirective)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiTextfieldSizeDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiTextfieldControllerModule = /*#__PURE__*/(() => {
  class TuiTextfieldControllerModule {}
  TuiTextfieldControllerModule.ɵfac = function TuiTextfieldControllerModule_Factory(t) {
    return new (t || TuiTextfieldControllerModule)();
  };
  TuiTextfieldControllerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TuiTextfieldControllerModule
  });
  TuiTextfieldControllerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
  return TuiTextfieldControllerModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TUI_TEXTFIELD_WATCHED_CONTROLLER = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken(`[TUI_TEXTFIELD_WATCHED_CONTROLLER]`);
const TEXTFIELD_CONTROLLER_PROVIDER = [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TuiDestroyService, {
  provide: TUI_TEXTFIELD_WATCHED_CONTROLLER,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TuiDestroyService, TUI_TEXTFIELD_OPTIONS, _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_4__.TUI_TEXTFIELD_APPEARANCE, TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TUI_TEXTFIELD_CLEANER, TUI_TEXTFIELD_CUSTOM_CONTENT, TUI_TEXTFIELD_ICON, TUI_TEXTFIELD_ICON_LEFT, TUI_TEXTFIELD_LABEL_OUTSIDE, TUI_TEXTFIELD_SIZE, TUI_TEXTFIELD_PREFIX, TUI_TEXTFIELD_POSTFIX, TUI_TEXTFIELD_FILLER],
  useFactory: (cdr, destroy$, options, legacyAppearance, ...controllers) => {
    const change$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(...controllers.map(({
      change$
    }) => change$ || rxjs__WEBPACK_IMPORTED_MODULE_6__.NEVER)).pipe((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.tuiWatch)(cdr), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(destroy$));
    change$.subscribe();
    return new TuiTextfieldController(change$, options, legacyAppearance, ...controllers);
  }
}];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-directives-textfield-controller.js.map

/***/ }),

/***/ 3585:
/*!**********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-wrapper.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiWrapperDirective: () => (/* binding */ TuiWrapperDirective),
/* harmony export */   TuiWrapperModule: () => (/* binding */ TuiWrapperModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core/enums */ 4311);
/* harmony import */ var _taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core/providers */ 9098);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);






let TuiWrapperDirective = /*#__PURE__*/(() => {
  class TuiWrapperDirective {
    constructor(mode$) {
      this.mode$ = mode$;
      this.disabled = false;
      this.readOnly = false;
      this.hover = null;
      this.active = null;
      this.focus = false;
      this.invalid = false;
      this.appearance = '';
    }
    get computedInvalid() {
      return !this.disabled && !this.readOnly && this.invalid;
    }
    get computedFocused() {
      return this.focus && !this.disabled;
    }
    get interactiveState() {
      if (this.disabled) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__.TuiInteractiveState.Disabled;
      }
      if (this.readOnly) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__.TuiInteractiveState.Readonly;
      }
      if (this.active) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__.TuiInteractiveState.Active;
      }
      if (this.hover) {
        return _taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__.TuiInteractiveState.Hover;
      }
      return null;
    }
    get noHover() {
      return this.readOnly || this.hover === false;
    }
    get noActive() {
      return this.readOnly || this.active === false;
    }
  }
  TuiWrapperDirective.ɵfac = function TuiWrapperDirective_Factory(t) {
    return new (t || TuiWrapperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.TUI_MODE));
  };
  TuiWrapperDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: TuiWrapperDirective,
    selectors: [["", "tuiWrapper", ""]],
    hostVars: 10,
    hostBindings: function TuiWrapperDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("$.data-mode.attr", function TuiWrapperDirective___data_mode_attr_HostBindingHandler() {
          return ctx.mode$;
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-appearance", ctx.appearance)("data-state", ctx.interactiveState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_invalid", ctx.computedInvalid)("_focused", ctx.computedFocused)("_no-hover", ctx.noHover)("_no-active", ctx.noActive);
      }
    },
    inputs: {
      disabled: "disabled",
      readOnly: "readOnly",
      hover: "hover",
      active: "active",
      focus: "focus",
      invalid: "invalid",
      appearance: "appearance"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_3__.MODE_PROVIDER])]
  });
  return TuiWrapperDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiWrapperModule = /*#__PURE__*/(() => {
  class TuiWrapperModule {}
  TuiWrapperModule.ɵfac = function TuiWrapperModule_Factory(t) {
    return new (t || TuiWrapperModule)();
  };
  TuiWrapperModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TuiWrapperModule
  });
  TuiWrapperModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  return TuiWrapperModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-directives-wrapper.js.map

/***/ }),

/***/ 9317:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-internal-primitive-year-month-pagination.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiPrimitiveYearMonthPaginationComponent: () => (/* binding */ TuiPrimitiveYearMonthPaginationComponent),
/* harmony export */   TuiPrimitiveYearMonthPaginationModule: () => (/* binding */ TuiPrimitiveYearMonthPaginationModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 160);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8029);
/* harmony import */ var _taiga_ui_core_components_primitive_spin_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/components/primitive-spin-button */ 4902);
/* harmony import */ var _taiga_ui_core_components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core/components/link */ 8289);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _taiga_ui_core_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core/pipes */ 8817);












function TuiPrimitiveYearMonthPaginationComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.value.formattedYear, " ");
  }
}
function TuiPrimitiveYearMonthPaginationComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiPrimitiveYearMonthPaginationComponent_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onYearClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiFocusable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.value.formattedYear, " ");
  }
}
let TuiPrimitiveYearMonthPaginationComponent = /*#__PURE__*/(() => {
  class TuiPrimitiveYearMonthPaginationComponent {
    constructor() {
      this.value = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiMonth.currentLocal();
      this.min = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_FIRST_DAY;
      this.max = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_LAST_DAY;
      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.yearClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get computedMin() {
      var _a;
      return (_a = this.min) !== null && _a !== void 0 ? _a : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_FIRST_DAY;
    }
    get computedMax() {
      var _a;
      return (_a = this.max) !== null && _a !== void 0 ? _a : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TUI_LAST_DAY;
    }
    get prevMonthDisabled() {
      return this.value.monthSameOrBefore(this.computedMin);
    }
    get nextMonthDisabled() {
      return this.value.monthSameOrAfter(this.computedMax);
    }
    get oneYear() {
      const {
        computedMin,
        computedMax
      } = this;
      return computedMin.year === computedMax.year;
    }
    onYearClick() {
      this.yearClick.next(this.value);
    }
    onPrevMonthClick() {
      this.appendValueWithLimit({
        month: -1
      });
    }
    onNextMonthClick() {
      this.appendValueWithLimit({
        month: 1
      });
    }
    appendValueWithLimit(date) {
      const newMonth = this.value.append(date);
      const {
        computedMin,
        computedMax
      } = this;
      if (computedMin.monthSameOrAfter(newMonth)) {
        this.updateValue(computedMin);
        return;
      }
      this.updateValue(computedMax.monthSameOrBefore(newMonth) ? computedMax : newMonth);
    }
    updateValue(value) {
      if (this.value.monthSame(value)) {
        return;
      }
      this.value = value;
      this.valueChange.emit(value);
    }
  }
  TuiPrimitiveYearMonthPaginationComponent.ɵfac = function TuiPrimitiveYearMonthPaginationComponent_Factory(t) {
    return new (t || TuiPrimitiveYearMonthPaginationComponent)();
  };
  TuiPrimitiveYearMonthPaginationComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiPrimitiveYearMonthPaginationComponent,
    selectors: [["tui-primitive-year-month-pagination"]],
    inputs: {
      value: "value",
      min: "min",
      max: "max"
    },
    outputs: {
      valueChange: "valueChange",
      yearClick: "yearClick"
    },
    decls: 7,
    vars: 10,
    consts: [[3, "focusable", "leftDisabled", "rightDisabled", "leftClick", "rightClick"], [4, "ngIf", "ngIfElse"], ["button", ""], ["id", "year-btn", "automation-id", "tui-primitive-year-month-pagination__year-button", "tuiLink", "", "type", "button", 3, "tuiFocusable", "click"]],
    template: function TuiPrimitiveYearMonthPaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-primitive-spin-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("leftClick", function TuiPrimitiveYearMonthPaginationComponent_Template_tui_primitive_spin_button_leftClick_0_listener() {
          return ctx.onPrevMonthClick();
        })("rightClick", function TuiPrimitiveYearMonthPaginationComponent_Template_tui_primitive_spin_button_rightClick_0_listener() {
          return ctx.onNextMonthClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "tuiMonth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiPrimitiveYearMonthPaginationComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiPrimitiveYearMonthPaginationComponent_ng_template_5_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusable", false)("leftDisabled", ctx.prevMonthDisabled)("rightDisabled", ctx.nextMonthDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx.value)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.oneYear)("ngIfElse", _r1);
      }
    },
    dependencies: [_taiga_ui_core_components_primitive_spin_button__WEBPACK_IMPORTED_MODULE_2__.TuiPrimitiveSpinButtonComponent, _taiga_ui_core_components_link__WEBPACK_IMPORTED_MODULE_3__.TuiLinkComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.TuiFocusableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _taiga_ui_core_pipes__WEBPACK_IMPORTED_MODULE_6__.TuiMonthPipe],
    styles: ["[_nghost-%COMP%]{display:block}"],
    changeDetection: 0
  });
  return TuiPrimitiveYearMonthPaginationComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiPrimitiveYearMonthPaginationModule = /*#__PURE__*/(() => {
  class TuiPrimitiveYearMonthPaginationModule {}
  TuiPrimitiveYearMonthPaginationModule.ɵfac = function TuiPrimitiveYearMonthPaginationModule_Factory(t) {
    return new (t || TuiPrimitiveYearMonthPaginationModule)();
  };
  TuiPrimitiveYearMonthPaginationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiPrimitiveYearMonthPaginationModule
  });
  TuiPrimitiveYearMonthPaginationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.TuiFocusableModule, _taiga_ui_core_components_primitive_spin_button__WEBPACK_IMPORTED_MODULE_2__.TuiPrimitiveSpinButtonModule, _taiga_ui_core_components_link__WEBPACK_IMPORTED_MODULE_3__.TuiLinkModule, _taiga_ui_core_pipes__WEBPACK_IMPORTED_MODULE_6__.TuiMonthPipeModule]]
  });
  return TuiPrimitiveYearMonthPaginationModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-internal-primitive-year-month-pagination.js.map

/***/ }),

/***/ 6642:
/*!************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-calendar-sheet.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiCalendarSheetPipe: () => (/* binding */ TuiCalendarSheetPipe),
/* harmony export */   TuiCalendarSheetPipeModule: () => (/* binding */ TuiCalendarSheetPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ 8029);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 9838);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 5618);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);






/**
 * Computes day of week offset of the beginning of the month
 */
const getMonthStartDaysOffset = (month, firstDayOfWeek) => {
  const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
  return startMonthOffsetFromSunday >= firstDayOfWeek ? startMonthOffsetFromSunday - firstDayOfWeek : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
};
/**
 * Calculated day on a calendar grid
 * @return resulting day on these coordinates (could exceed passed month)
 */
const getDayFromMonthRowCol = ({
  month,
  rowIndex,
  colIndex,
  firstDayOfWeek
}) => {
  ngDevMode && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiAssert.assert(Number.isInteger(rowIndex));
  ngDevMode && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiAssert.assert((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiInRange)(rowIndex, 0, 6));
  ngDevMode && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiAssert.assert(Number.isInteger(colIndex));
  ngDevMode && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiAssert.assert((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiInRange)(colIndex, 0, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.DAYS_IN_WEEK));
  let day = rowIndex * _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.DAYS_IN_WEEK + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;
  if (day > month.daysCount) {
    day -= month.daysCount;
    month = month.append({
      month: 1
    });
  }
  if (day <= 0) {
    month = month.append({
      month: -1
    });
    day = month.daysCount + day;
  }
  return new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDay(month.year, month.month, day);
};
const CALENDAR_ROWS_COUNT = 6;
let TuiCalendarSheetPipe = /*#__PURE__*/(() => {
  class TuiCalendarSheetPipe {
    constructor(firstDayOfWeek) {
      this.firstDayOfWeek = firstDayOfWeek;
      this.currentMonth = null;
      this.currentSheet = [];
    }
    transform(month, showAdjacentDays = false) {
      var _a;
      if ((_a = this.currentMonth) === null || _a === void 0 ? void 0 : _a.monthSame(month)) {
        return this.currentSheet;
      }
      const sheet = [];
      for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
        const row = [];
        for (let colIndex = 0; colIndex < _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.DAYS_IN_WEEK; colIndex++) {
          const day = getDayFromMonthRowCol({
            month,
            rowIndex,
            colIndex,
            firstDayOfWeek: this.firstDayOfWeek
          });
          const isPrevMonthDay = (day, relativeToMonth = month) => day.year < relativeToMonth.year || day.month < relativeToMonth.month;
          const isNextMonthDay = (day, relativeToMonth = month) => day.year > relativeToMonth.year || day.month > relativeToMonth.month;
          if (isPrevMonthDay(day) && !showAdjacentDays) {
            continue;
          }
          if (isNextMonthDay(day) && !showAdjacentDays) {
            break;
          }
          row.push(day);
        }
        sheet.push(row);
      }
      this.currentSheet = sheet.filter(row => row.length);
      this.currentMonth = month;
      return this.currentSheet;
    }
  }
  TuiCalendarSheetPipe.ɵfac = function TuiCalendarSheetPipe_Factory(t) {
    return new (t || TuiCalendarSheetPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_4__.TUI_FIRST_DAY_OF_WEEK, 16));
  };
  TuiCalendarSheetPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({
    name: "tuiCalendarSheet",
    type: TuiCalendarSheetPipe,
    pure: true
  });
  return TuiCalendarSheetPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiCalendarSheetPipeModule = /*#__PURE__*/(() => {
  class TuiCalendarSheetPipeModule {}
  TuiCalendarSheetPipeModule.ɵfac = function TuiCalendarSheetPipeModule_Factory(t) {
    return new (t || TuiCalendarSheetPipeModule)();
  };
  TuiCalendarSheetPipeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TuiCalendarSheetPipeModule
  });
  TuiCalendarSheetPipeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
  return TuiCalendarSheetPipeModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-pipes-calendar-sheet.js.map

/***/ }),

/***/ 8817:
/*!***************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-month.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiMonthPipe: () => (/* binding */ TuiMonthPipe),
/* harmony export */   TuiMonthPipeModule: () => (/* binding */ TuiMonthPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2425);





let TuiMonthPipe = /*#__PURE__*/(() => {
  class TuiMonthPipe {
    constructor(months$) {
      this.months$ = months$;
    }
    transform({
      month
    }) {
      return this.months$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(months => months[month]));
    }
  }
  TuiMonthPipe.ɵfac = function TuiMonthPipe_Factory(t) {
    return new (t || TuiMonthPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.TUI_MONTHS, 16));
  };
  TuiMonthPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "tuiMonth",
    type: TuiMonthPipe,
    pure: true
  });
  return TuiMonthPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiMonthPipeModule = /*#__PURE__*/(() => {
  class TuiMonthPipeModule {}
  TuiMonthPipeModule.ɵfac = function TuiMonthPipeModule_Factory(t) {
    return new (t || TuiMonthPipeModule)();
  };
  TuiMonthPipeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TuiMonthPipeModule
  });
  TuiMonthPipeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  return TuiMonthPipeModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-pipes-month.js.map

/***/ }),

/***/ 6746:
/*!*************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-order-week-days.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiOrderWeekDaysPipe: () => (/* binding */ TuiOrderWeekDaysPipe),
/* harmony export */   TuiOrderWeekDaysPipeModule: () => (/* binding */ TuiOrderWeekDaysPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2425);




let TuiOrderWeekDaysPipe = /*#__PURE__*/(() => {
  class TuiOrderWeekDaysPipe {
    constructor(firstDayOfWeekIndex) {
      this.firstDayOfWeekIndex = firstDayOfWeekIndex;
    }
    transform(mondayFirstWeekDays$) {
      return mondayFirstWeekDays$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(convertToSundayFirstWeekFormat), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(weekDays => [...weekDays.slice(this.firstDayOfWeekIndex), ...weekDays.slice(0, this.firstDayOfWeekIndex)]));
    }
  }
  TuiOrderWeekDaysPipe.ɵfac = function TuiOrderWeekDaysPipe_Factory(t) {
    return new (t || TuiOrderWeekDaysPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.TUI_FIRST_DAY_OF_WEEK, 16));
  };
  TuiOrderWeekDaysPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "tuiOrderWeekDays",
    type: TuiOrderWeekDaysPipe,
    pure: true
  });
  return TuiOrderWeekDaysPipe;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function convertToSundayFirstWeekFormat(weekDaysNames) {
  const sundayIndex = weekDaysNames.length - 1;
  return [weekDaysNames[sundayIndex], ...weekDaysNames.slice(0, sundayIndex)];
}
let TuiOrderWeekDaysPipeModule = /*#__PURE__*/(() => {
  class TuiOrderWeekDaysPipeModule {}
  TuiOrderWeekDaysPipeModule.ɵfac = function TuiOrderWeekDaysPipeModule_Factory(t) {
    return new (t || TuiOrderWeekDaysPipeModule)();
  };
  TuiOrderWeekDaysPipeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TuiOrderWeekDaysPipeModule
  });
  TuiOrderWeekDaysPipeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  return TuiOrderWeekDaysPipeModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-pipes-order-week-days.js.map

/***/ }),

/***/ 9098:
/*!*************************************************************************!*\
  !*** ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-providers.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MODE_PROVIDER: () => (/* binding */ MODE_PROVIDER),
/* harmony export */   TUI_IS_MOBILE_RES_PROVIDER: () => (/* binding */ TUI_IS_MOBILE_RES_PROVIDER),
/* harmony export */   tuiWatchedControllerFactory: () => (/* binding */ tuiWatchedControllerFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/core/tokens */ 8394);
/* harmony import */ var _taiga_ui_core_directives_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core/directives/mode */ 3071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1209);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1749);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 4521);







/**
 * @deprecated: drop in v4.0
 */
const TUI_IS_MOBILE_RES_PROVIDER = {
  provide: _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_0__.TUI_IS_MOBILE_RES,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf(), _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_0__.TUI_IS_MOBILE_RES], _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef],
  useFactory: (mobile$, {
    nativeElement
  }) => {
    nativeElement[`$.class._mobile`] = mobile$;
    return mobile$;
  }
};
const MODE_PROVIDER = {
  provide: _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_0__.TUI_MODE,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), _taiga_ui_core_directives_mode__WEBPACK_IMPORTED_MODULE_2__.TuiModeDirective], _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef],
  useFactory: (mode, {
    nativeElement
  }) => {
    const mode$ = mode ? mode.change$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => mode.mode)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    nativeElement[`$.data-mode.attr`] = mode$;
    return mode$;
  }
};
function tuiWatchedControllerFactory(controller, cdr, destroy$) {
  controller.change$.pipe((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.tuiWatch)(cdr), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(destroy$)).subscribe();
  return controller;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-core-providers.js.map

/***/ }),

/***/ 4752:
/*!*********************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-classes.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiDayRangePeriod: () => (/* binding */ TuiDayRangePeriod),
/* harmony export */   TuiNamedDay: () => (/* binding */ TuiNamedDay),
/* harmony export */   TuiStringifiableItem: () => (/* binding */ TuiStringifiableItem)
/* harmony export */ });
class TuiDayRangePeriod {
  constructor(range, name, content) {
    this.range = range;
    this.name = name;
    this.content = content;
  }
  toString() {
    return this.name;
  }
}
class TuiNamedDay {
  constructor(day, name, displayDay = day) {
    this.day = day;
    this.name = name;
    this.displayDay = displayDay;
  }
  toString() {
    return this.name;
  }
}

/**
 * Wrapper around an item to add `toString()` method
 */
class TuiStringifiableItem {
  constructor(item, stringify) {
    this.item = item;
    this.stringify = stringify;
  }
  toString() {
    return this.stringify(this.item);
  }
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-classes.js.map

/***/ }),

/***/ 9421:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-components-checkbox-labeled.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiCheckboxLabeledComponent: () => (/* binding */ TuiCheckboxLabeledComponent),
/* harmony export */   TuiCheckboxLabeledModule: () => (/* binding */ TuiCheckboxLabeledModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 8394);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 8878);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core */ 9098);
/* harmony import */ var _taiga_ui_kit_components_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit/components/checkbox */ 147);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6733);










const _c0 = ["*"];
let TuiCheckboxLabeledComponent = /*#__PURE__*/(() => {
  class TuiCheckboxLabeledComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.AbstractTuiNullableControl {
    constructor(control, cdr, mode$, options) {
      super(control, cdr);
      this.mode$ = mode$;
      this.options = options;
      this.size = this.options.size;
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiIsNativeFocused)(this.nativeFocusableElement);
    }
    get nativeFocusableElement() {
      return this.checkbox ? this.checkbox.nativeFocusableElement : null;
    }
    onFocused(focused) {
      this.updateFocused(focused);
    }
    /** @deprecated use 'value' setter */
    onModelChange(value) {
      this.value = value;
    }
  }
  TuiCheckboxLabeledComponent.ɵfac = function TuiCheckboxLabeledComponent_Factory(t) {
    return new (t || TuiCheckboxLabeledComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TUI_MODE), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TUI_CHECKBOX_OPTIONS));
  };
  TuiCheckboxLabeledComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TuiCheckboxLabeledComponent,
    selectors: [["tui-checkbox-labeled"]],
    viewQuery: function TuiCheckboxLabeledComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_taiga_ui_kit_components_checkbox__WEBPACK_IMPORTED_MODULE_6__.TuiCheckboxComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.checkbox = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function TuiCheckboxLabeledComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("$.data-mode.attr", function TuiCheckboxLabeledComponent___data_mode_attr_HostBindingHandler() {
          return ctx.mode$;
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-size", ctx.size);
      }
    },
    inputs: {
      size: "size"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.tuiAsFocusableItemAccessor)(TuiCheckboxLabeledComponent), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiAsControl)(TuiCheckboxLabeledComponent), _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__.MODE_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 4,
    vars: 12,
    consts: [[1, "t-wrapper"], [3, "disabled", "focusable", "nativeId", "pseudoActive", "pseudoFocus", "pseudoHover", "pseudoInvalid", "readOnly", "size", "ngModel", "ngModelChange", "focusedChange"], [1, "t-content"]],
    template: function TuiCheckboxLabeledComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0)(1, "tui-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TuiCheckboxLabeledComponent_Template_tui_checkbox_ngModelChange_1_listener($event) {
          return ctx.value = $event;
        })("focusedChange", function TuiCheckboxLabeledComponent_Template_tui_checkbox_focusedChange_1_listener($event) {
          return ctx.onFocused($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.computedDisabled)("focusable", ctx.focusable)("nativeId", ctx.nativeId)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.pseudoFocus)("pseudoHover", ctx.pseudoHover)("pseudoInvalid", ctx.computedInvalid)("readOnly", ctx.readOnly)("size", ctx.size)("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("t-content_disabled", ctx.computedDisabled);
      }
    },
    dependencies: [_taiga_ui_kit_components_checkbox__WEBPACK_IMPORTED_MODULE_6__.TuiCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: ["[_nghost-%COMP%]{position:relative;display:block;line-height:0}._disabled[_nghost-%COMP%], ._readonly[_nghost-%COMP%]{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{display:inline-flex;max-width:100%;cursor:pointer}._disabled[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{cursor:default}[data-mode=onDark][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-s);line-height:1rem;word-wrap:break-word;min-width:0}.t-content_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{margin-left:.5rem}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);margin-left:.75rem}"],
    changeDetection: 0
  });
  return TuiCheckboxLabeledComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiCheckboxLabeledModule = /*#__PURE__*/(() => {
  class TuiCheckboxLabeledModule {}
  TuiCheckboxLabeledModule.ɵfac = function TuiCheckboxLabeledModule_Factory(t) {
    return new (t || TuiCheckboxLabeledModule)();
  };
  TuiCheckboxLabeledModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TuiCheckboxLabeledModule
  });
  TuiCheckboxLabeledModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _taiga_ui_kit_components_checkbox__WEBPACK_IMPORTED_MODULE_6__.TuiCheckboxModule]]
  });
  return TuiCheckboxLabeledModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-components-checkbox-labeled.js.map

/***/ }),

/***/ 147:
/*!*********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-components-checkbox.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiCheckboxComponent: () => (/* binding */ TuiCheckboxComponent),
/* harmony export */   TuiCheckboxModule: () => (/* binding */ TuiCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 5690);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ 160);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/cdk */ 5974);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/cdk */ 713);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 8878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6733);









const _c0 = ["focusableElement"];
let TuiCheckboxComponent = /*#__PURE__*/(() => {
  class TuiCheckboxComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.AbstractTuiNullableControl {
    constructor(control, options, cdr) {
      super(control, cdr);
      this.options = options;
      this.size = this.options.size;
    }
    get nativeFocusableElement() {
      return !this.focusableElement || this.computedDisabled ? null : this.focusableElement.nativeElement;
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiIsNativeFocused)(this.nativeFocusableElement);
    }
    get computedFocusable() {
      return this.interactive && this.focusable;
    }
    /** @deprecated use 'value' setter */
    onChecked(checked) {
      this.value = checked;
    }
    onFocused(focused) {
      this.updateFocused(focused);
    }
    onFocusVisible(focusVisible) {
      this.updateFocusVisible(focusVisible);
    }
  }
  TuiCheckboxComponent.ɵfac = function TuiCheckboxComponent_Factory(t) {
    return new (t || TuiCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TUI_CHECKBOX_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  TuiCheckboxComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TuiCheckboxComponent,
    selectors: [["tui-checkbox"]],
    viewQuery: function TuiCheckboxComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusableElement = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function TuiCheckboxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-size", ctx.size);
      }
    },
    inputs: {
      size: "size"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiAsFocusableItemAccessor)(TuiCheckboxComponent), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiAsControl)(TuiCheckboxComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 11,
    consts: [[3, "disabled", "focused", "hovered", "invalid", "pressed", "size", "value"], ["automation-id", "tui-checkbox__native", "type", "checkbox", 1, "t-native", 3, "disabled", "id", "tuiFocusable", "tuiChecked", "tuiCheckedChange", "tuiFocusedChange", "tuiFocusVisibleChange"], ["focusableElement", ""]],
    template: function TuiCheckboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-primitive-checkbox", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tuiCheckedChange", function TuiCheckboxComponent_Template_input_tuiCheckedChange_1_listener($event) {
          return ctx.value = $event;
        })("tuiFocusedChange", function TuiCheckboxComponent_Template_input_tuiFocusedChange_1_listener($event) {
          return ctx.onFocused($event);
        })("tuiFocusVisibleChange", function TuiCheckboxComponent_Template_input_tuiFocusVisibleChange_1_listener($event) {
          return ctx.onFocusVisible($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disabled)("focused", ctx.computedFocusVisible)("hovered", ctx.pseudoHover)("invalid", ctx.computedInvalid)("pressed", ctx.pseudoActive)("size", ctx.size)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disabled)("id", ctx.id)("tuiFocusable", ctx.computedFocusable)("tuiChecked", ctx.value);
      }
    },
    dependencies: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiPrimitiveCheckboxComponent, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TuiCheckedDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiFocusableDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.TuiFocusedDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__.TuiFocusVisibleDirective],
    styles: ["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:block;flex-shrink:0}[data-size=m][_nghost-%COMP%]{width:1rem;height:1rem}[data-size=l][_nghost-%COMP%]{width:1.5rem;height:1.5rem}._readonly[_nghost-%COMP%]   tui-primitive-checkbox[_ngcontent-%COMP%]{pointer-events:none}.t-native[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.t-native[_ngcontent-%COMP%]:-webkit-autofill, .t-native[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-native[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}"],
    changeDetection: 0
  });
  return TuiCheckboxComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiCheckboxModule = /*#__PURE__*/(() => {
  class TuiCheckboxModule {}
  TuiCheckboxModule.ɵfac = function TuiCheckboxModule_Factory(t) {
    return new (t || TuiCheckboxModule)();
  };
  TuiCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TuiCheckboxModule
  });
  TuiCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TuiCheckedModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TuiFocusableModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.TuiFocusedModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__.TuiFocusVisibleModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiPrimitiveCheckboxModule]]
  });
  return TuiCheckboxModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-components-checkbox.js.map

/***/ }),

/***/ 8665:
/*!***********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-components-input-date.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiInputDateComponent: () => (/* binding */ TuiInputDateComponent),
/* harmony export */   TuiInputDateDirective: () => (/* binding */ TuiInputDateDirective),
/* harmony export */   TuiInputDateModule: () => (/* binding */ TuiInputDateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 4911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _maskito_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @maskito/core */ 7618);
/* harmony import */ var _maskito_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @maskito/kit */ 1262);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @taiga-ui/cdk */ 9502);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @taiga-ui/cdk */ 8689);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 8029);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @taiga-ui/cdk */ 5351);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @taiga-ui/core */ 7614);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @taiga-ui/core */ 6420);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @taiga-ui/core */ 9313);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @taiga-ui/core */ 5983);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @taiga-ui/core */ 8289);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @taiga-ui/core */ 9289);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @taiga-ui/core */ 3585);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 8394);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 2490);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @taiga-ui/core */ 4470);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @taiga-ui/core */ 8305);
/* harmony import */ var _taiga_ui_kit_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/kit/constants */ 3242);
/* harmony import */ var _taiga_ui_kit_tokens__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @taiga-ui/kit/tokens */ 4119);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1749);
/* harmony import */ var _taiga_ui_kit_directives__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @taiga-ui/kit/directives */ 24);
/* harmony import */ var _maskito_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @maskito/angular */ 806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 6733);























function TuiInputDateComponent_tui_primitive_textfield_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-primitive-textfield", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusedChange", function TuiInputDateComponent_tui_primitive_textfield_1_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onFocused($event));
    })("valueChange", function TuiInputDateComponent_tui_primitive_textfield_1_Template_tui_primitive_textfield_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onValueChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 1, ["ngProjectAs", "input", 5, ["input"]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filler_r5 = ctx.tuiLet;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.computedDisabled)("focusable", ctx_r0.computedFocusable)("invalid", ctx_r0.computedInvalid)("maskito", ctx_r0.computedMask)("nativeId", ctx_r0.nativeId)("pseudoFocus", ctx_r0.pseudoFocus)("pseudoHover", ctx_r0.pseudoHover)("readOnly", ctx_r0.readOnly)("tuiTextfieldFiller", ctx_r0.getComputedFiller(filler_r5 || ""))("tuiTextfieldIcon", ctx_r0.calendarIcon && _r1)("value", ctx_r0.computedValue);
  }
}
function TuiInputDateComponent_ng_template_3_tui_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TuiInputDateComponent_ng_template_3_tui_svg_0_Template_tui_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.onIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const src_r11 = ctx.polymorpheusOutlet;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("t-icon", !ctx_r9.computedDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", src_r11);
  }
}
function TuiInputDateComponent_ng_template_3_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 9);
  }
}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
function TuiInputDateComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TuiInputDateComponent_ng_template_3_tui_svg_0_Template, 1, 3, "tui-svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiInputDateComponent_ng_template_3_input_1_Template, 1, 0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("polymorpheusOutlet", ctx_r2.calendarIcon)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r2.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isMobile && ctx_r2.nativePicker);
  }
}
function TuiInputDateComponent_ng_template_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TuiInputDateComponent_ng_template_5_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onDayClick(ctx_r15.items[0].day));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r14.items[0], " ");
  }
}
function TuiInputDateComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-calendar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dayClick", function TuiInputDateComponent_ng_template_5_Template_tui_calendar_dayClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.onDayClick($event));
    })("monthChange", function TuiInputDateComponent_ng_template_5_Template_tui_calendar_monthChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.onMonthChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiInputDateComponent_ng_template_5_div_1_Template, 3, 1, "div", 11);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabledItemHandler", ctx_r4.disabledItemHandler)("markerHandler", ctx_r4.markerHandler)("max", ctx_r4.computedMax)("min", ctx_r4.computedMin)("month", ctx_r4.computedActiveYearMonth)("value", ctx_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.items.length === 1);
  }
}
const _c1 = ["*", [["input"]]];
const _c2 = ["*", "input"];
let TuiNativeDateDirective = /*#__PURE__*/(() => {
  class TuiNativeDateDirective {
    constructor(host, dateFormat) {
      this.host = host;
      this.dateFormat = dateFormat;
    }
    get value() {
      return this.host.value.length === _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.DATE_FILLER_LENGTH ? _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TuiDay.normalizeParse(this.host.value, this.dateFormat).toString('YMD', '-') : '';
    }
    get max() {
      return this.host.max.toJSON();
    }
    get min() {
      return this.host.min.toJSON();
    }
    onChange(value) {
      this.host.onValueChange(value ? _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TuiDay.normalizeParse(value, 'YMD').toString(this.dateFormat) : '');
    }
  }
  TuiNativeDateDirective.ɵfac = function TuiNativeDateDirective_Factory(t) {
    return new (t || TuiNativeDateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TUI_TEXTFIELD_HOST), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TUI_DATE_FORMAT));
  };
  TuiNativeDateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiNativeDateDirective,
    selectors: [["input", "tuiDate", ""]],
    hostAttrs: ["type", "date"],
    hostVars: 4,
    hostBindings: function TuiNativeDateDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TuiNativeDateDirective_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("click.stop.silent", function TuiNativeDateDirective_click_stop_silent_HostBindingHandler() {
          return 0;
        })("input.stop.silent", function TuiNativeDateDirective_input_stop_silent_HostBindingHandler() {
          return 0;
        })("mousedown.stop.silent", function TuiNativeDateDirective_mousedown_stop_silent_HostBindingHandler() {
          return 0;
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("tabIndex", -1)("value", ctx.value)("max", ctx.max)("min", ctx.min);
      }
    }
  });
  return TuiNativeDateDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiInputDateComponent = /*#__PURE__*/(() => {
  class TuiInputDateComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.AbstractTuiNullableControl {
    constructor(control, cdr, injector, isMobile, dialogs, mobileCalendar, dateFormat, dateSeparator, dateTexts$, valueTransformer, options, textfieldSize) {
      super(control, cdr, valueTransformer);
      this.injector = injector;
      this.isMobile = isMobile;
      this.dialogs = dialogs;
      this.mobileCalendar = mobileCalendar;
      this.dateFormat = dateFormat;
      this.dateSeparator = dateSeparator;
      this.dateTexts$ = dateTexts$;
      this.valueTransformer = valueTransformer;
      this.options = options;
      this.textfieldSize = textfieldSize;
      this.month = null;
      this.min = this.options.min;
      this.max = this.options.max;
      this.disabledItemHandler = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.ALWAYS_FALSE_HANDLER;
      this.markerHandler = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TUI_DEFAULT_MARKER_HANDLER;
      this.items = [];
      this.defaultActiveYearMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TuiMonth.currentLocal();
      this.open = false;
      this.filler$ = this.dateTexts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(dateTexts => (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.changeDateSeparator)(dateTexts[this.dateFormat], this.dateSeparator)));
    }
    get size() {
      return this.textfieldSize.size;
    }
    get computedMin() {
      var _a;
      return (_a = this.min) !== null && _a !== void 0 ? _a : this.options.min;
    }
    get computedMax() {
      var _a;
      return (_a = this.max) !== null && _a !== void 0 ? _a : this.options.max;
    }
    get nativeFocusableElement() {
      return this.textfield ? this.textfield.nativeFocusableElement : null;
    }
    get focused() {
      var _a;
      return !!((_a = this.textfield) === null || _a === void 0 ? void 0 : _a.focused);
    }
    get computedMobile() {
      return this.isMobile && (!!this.mobileCalendar || this.nativePicker);
    }
    get nativePicker() {
      return this.options.nativePicker;
    }
    get calendarIcon() {
      return this.options.icon;
    }
    get computedValue() {
      const {
        value,
        nativeValue,
        activeItem
      } = this;
      if (activeItem) {
        return String(activeItem);
      }
      return value ? value.toString(this.dateFormat, this.dateSeparator) : nativeValue;
    }
    get computedActiveYearMonth() {
      if (this.items[0] && this.value && this.value.daySame(this.items[0].day)) {
        return this.items[0].displayDay;
      }
      return this.month || this.value || (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiDateClamp)(this.defaultActiveYearMonth, this.computedMin, this.computedMax);
    }
    get nativeValue() {
      var _a;
      return ((_a = this.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.value) || '';
    }
    set nativeValue(value) {
      if (!this.nativeFocusableElement) {
        return;
      }
      this.nativeFocusableElement.value = value;
    }
    get canOpen() {
      return this.interactive && !this.computedMobile;
    }
    get computedMask() {
      return this.activeItem ? _maskito_core__WEBPACK_IMPORTED_MODULE_0__.MASKITO_DEFAULT_OPTIONS : this.computeMaskOptions(this.dateFormat, this.dateSeparator, this.computedMin, this.computedMax);
    }
    get activeItem() {
      const {
        value
      } = this;
      return value && this.items.find(item => item.day.daySame(value)) || null;
    }
    onClick() {
      if (!this.isMobile) {
        this.open = !this.open;
      }
    }
    getComputedFiller(filler) {
      return this.activeItem ? '' : filler;
    }
    // noinspection JSUnusedGlobalSymbols
    /**
     * TODO: Remove in 4.0
     * @deprecated: use {@link onIconClick} instead
     */
    onMobileClick() {
      this.onIconClick();
    }
    onIconClick() {
      if (!this.computedMobile || !this.mobileCalendar) {
        return;
      }
      this.dialogs.open(new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__.PolymorpheusComponent(this.mobileCalendar, this.injector), {
        size: 'fullscreen',
        closeable: false,
        data: {
          single: true,
          min: this.min,
          max: this.max,
          disabledItemHandler: this.disabledItemHandler
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(value => {
        this.value = value;
      });
    }
    onValueChange(value) {
      if (this.control) {
        this.control.updateValueAndValidity({
          emitEvent: false
        });
      }
      if (!value) {
        this.onOpenChange(true);
      }
      this.value = value.length !== _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.DATE_FILLER_LENGTH ? null : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TuiDay.normalizeParse(value, this.dateFormat);
    }
    onDayClick(value) {
      this.value = value;
      this.open = false;
    }
    onMonthChange(month) {
      this.month = month;
    }
    onOpenChange(open) {
      this.open = open;
    }
    onFocused(focused) {
      this.updateFocused(focused);
    }
    setDisabledState() {
      super.setDisabledState();
      this.open = false;
    }
    writeValue(value) {
      super.writeValue(value);
      this.nativeValue = value ? this.computedValue : '';
    }
    valueIdenticalComparator(oldValue, newValue) {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__.tuiNullableSame)(oldValue, newValue, (a, b) => a.daySame(b));
    }
    computeMaskOptions(mode, separator, min, max) {
      return (0,_maskito_kit__WEBPACK_IMPORTED_MODULE_1__.maskitoDateOptionsGenerator)({
        separator,
        mode: _taiga_ui_kit_constants__WEBPACK_IMPORTED_MODULE_12__.TUI_DATE_MODE_MASKITO_ADAPTER[mode],
        min: min.toLocalNativeDate(),
        max: max.toLocalNativeDate()
      });
    }
  }
  TuiInputDateComponent.ɵfac = function TuiInputDateComponent_Factory(t) {
    return new (t || TuiInputDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.TUI_IS_MOBILE), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_15__.TuiDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_kit_tokens__WEBPACK_IMPORTED_MODULE_16__.TUI_MOBILE_CALENDAR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TUI_DATE_FORMAT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.TUI_DATE_SEPARATOR), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_kit_tokens__WEBPACK_IMPORTED_MODULE_16__.TUI_DATE_TEXTS), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_kit_tokens__WEBPACK_IMPORTED_MODULE_16__.TUI_DATE_VALUE_TRANSFORMER, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_kit_tokens__WEBPACK_IMPORTED_MODULE_16__.TUI_INPUT_DATE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_17__.TUI_TEXTFIELD_SIZE));
  };
  TuiInputDateComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TuiInputDateComponent,
    selectors: [["tui-input-date"]],
    viewQuery: function TuiInputDateComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_18__.TuiPrimitiveTextfieldComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.textfield = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function TuiInputDateComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TuiInputDateComponent_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-size", ctx.size);
      }
    },
    inputs: {
      min: "min",
      max: "max",
      disabledItemHandler: "disabledItemHandler",
      markerHandler: "markerHandler",
      items: "items",
      defaultActiveYearMonth: "defaultActiveYearMonth"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.tuiAsFocusableItemAccessor)(TuiInputDateComponent), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiAsControl)(TuiInputDateComponent), (0,_taiga_ui_kit_tokens__WEBPACK_IMPORTED_MODULE_16__.tuiDateStreamWithTransformer)(_taiga_ui_kit_tokens__WEBPACK_IMPORTED_MODULE_16__.TUI_DATE_VALUE_TRANSFORMER)]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c2,
    decls: 7,
    vars: 7,
    consts: [[1, "t-hosted", 3, "canOpen", "content", "open", "openChange"], ["automation-id", "tui-input-date-range__textfield", "tuiValueAccessor", "", "class", "t-textfield", 3, "disabled", "focusable", "invalid", "maskito", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldFiller", "tuiTextfieldIcon", "value", "focusedChange", "valueChange", 4, "tuiLet"], ["iconContent", ""], [3, "polymorpheus"], ["dropdown", "polymorpheus"], ["automation-id", "tui-input-date-range__textfield", "tuiValueAccessor", "", 1, "t-textfield", 3, "disabled", "focusable", "invalid", "maskito", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldFiller", "tuiTextfieldIcon", "value", "focusedChange", "valueChange"], ["appearance", "icon", "automation-id", "tui-input-date-range__icon", "tuiWrapper", "", 3, "t-icon", "src", "click", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiDate", "", "class", "t-native-input", 4, "ngIf"], ["appearance", "icon", "automation-id", "tui-input-date-range__icon", "tuiWrapper", "", 3, "src", "click"], ["tuiDate", "", 1, "t-native-input"], ["automation-id", "tui-input-date__calendar", "tuiPreventDefault", "mousedown", 3, "disabledItemHandler", "markerHandler", "max", "min", "month", "value", "dayClick", "monthChange"], ["tuiPreventDefault", "mousedown", "class", "t-button", 4, "ngIf"], ["tuiPreventDefault", "mousedown", 1, "t-button"], ["tuiLink", "", "type", "button", 3, "click"]],
    template: function TuiInputDateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tui-hosted-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("openChange", function TuiInputDateComponent_Template_tui_hosted_dropdown_openChange_0_listener($event) {
          return ctx.onOpenChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiInputDateComponent_tui_primitive_textfield_1_Template, 3, 11, "tui-primitive-textfield", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TuiInputDateComponent_ng_template_3_Template, 2, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TuiInputDateComponent_ng_template_5_Template, 2, 7, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("canOpen", ctx.canOpen)("content", _r3)("open", ctx.open && ctx.canOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx.filler$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("polymorpheus", ctx.type);
      }
    },
    dependencies: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_19__.TuiHostedDropdownComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_18__.TuiPrimitiveTextfieldComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_20__.TuiSvgComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_21__.TuiCalendarComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_22__.TuiLinkComponent, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiLetDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_18__.TuiPrimitiveTextfieldDirective, _taiga_ui_kit_directives__WEBPACK_IMPORTED_MODULE_24__.TuiValueAccessorDirective, _maskito_angular__WEBPACK_IMPORTED_MODULE_25__.MaskitoDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_17__.TuiTextfieldFillerDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_17__.TuiTextfieldIconDirective, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__.PolymorpheusOutletDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_26__.TuiWrapperDirective, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, TuiNativeDateDirective, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__.PolymorpheusTemplate, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__.TuiPreventDefaultDirective, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-icon[_ngcontent-%COMP%]{pointer-events:auto}.t-button[_ngcontent-%COMP%]{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--tui-base-03)}.t-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;text-align:center}.t-native-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;pointer-events:auto;font-size:2rem}"],
    changeDetection: 0
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_30__.tuiPure], TuiInputDateComponent.prototype, "computeMaskOptions", null);
  return TuiInputDateComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiInputDateDirective = /*#__PURE__*/(() => {
  class TuiInputDateDirective extends _taiga_ui_core__WEBPACK_IMPORTED_MODULE_31__.AbstractTuiTextfieldHost {
    get value() {
      return this.host.computedValue;
    }
    get max() {
      return this.host.computedMax;
    }
    get min() {
      return this.host.computedMin;
    }
    onValueChange(value) {
      if (!value) {
        this.host.nativeValue = '';
      }
      this.host.onValueChange(value);
    }
    process(input) {
      input.inputMode = 'numeric';
    }
  }
  TuiInputDateDirective.ɵfac = /* @__PURE__ */function () {
    let ɵTuiInputDateDirective_BaseFactory;
    return function TuiInputDateDirective_Factory(t) {
      return (ɵTuiInputDateDirective_BaseFactory || (ɵTuiInputDateDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TuiInputDateDirective)))(t || TuiInputDateDirective);
    };
  }();
  TuiInputDateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: TuiInputDateDirective,
    selectors: [["tui-input-date"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([(0,_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.tuiAsTextfieldHost)(TuiInputDateDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiInputDateDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiInputDateModule = /*#__PURE__*/(() => {
  class TuiInputDateModule {}
  TuiInputDateModule.ɵfac = function TuiInputDateModule_Factory(t) {
    return new (t || TuiInputDateModule)();
  };
  TuiInputDateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TuiInputDateModule
  });
  TuiInputDateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _maskito_angular__WEBPACK_IMPORTED_MODULE_25__.MaskitoModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__.PolymorpheusModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_26__.TuiWrapperModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_28__.TuiPreventDefaultModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_21__.TuiCalendarModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_20__.TuiSvgModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_22__.TuiLinkModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_19__.TuiHostedDropdownModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_18__.TuiPrimitiveTextfieldModule, _taiga_ui_kit_directives__WEBPACK_IMPORTED_MODULE_24__.TuiValueAccessorModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiLetModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_17__.TuiTextfieldControllerModule]]
  });
  return TuiInputDateModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-components-input-date.js.map

/***/ }),

/***/ 6781:
/*!**********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-components-input-tag.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_INPUT_TAG_DEFAULT_OPTIONS: () => (/* binding */ TUI_INPUT_TAG_DEFAULT_OPTIONS),
/* harmony export */   TUI_INPUT_TAG_OPTIONS: () => (/* binding */ TUI_INPUT_TAG_OPTIONS),
/* harmony export */   TuiInputTagComponent: () => (/* binding */ TuiInputTagComponent),
/* harmony export */   TuiInputTagModule: () => (/* binding */ TuiInputTagModule),
/* harmony export */   tuiInputTagOptionsProvider: () => (/* binding */ tuiInputTagOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @taiga-ui/cdk */ 6851);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @taiga-ui/cdk */ 160);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 7899);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @taiga-ui/cdk */ 8159);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/core */ 7614);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @taiga-ui/core */ 9313);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/core */ 3718);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @taiga-ui/core */ 9816);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @taiga-ui/core */ 3585);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core */ 3071);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/core */ 8394);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/core */ 6839);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/core */ 9289);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/core */ 8397);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @taiga-ui/core */ 9098);
/* harmony import */ var _taiga_ui_kit_providers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @taiga-ui/kit/providers */ 8388);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var _taiga_ui_kit_components_tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @taiga-ui/kit/components/tag */ 4414);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);

















const _c0 = ["focusableElement"];
const _c1 = ["tagsContainer"];
const _c2 = ["cleaner"];
const _c3 = ["errorIcon"];
const _c4 = ["tag"];
function TuiInputTagComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TuiInputTagComponent_div_5_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 21);
  }
  if (rf & 2) {
    const src_r11 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r11);
  }
}
const _c5 = function (a0) {
  return {
    $implicit: a0
  };
};
function TuiInputTagComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputTagComponent_div_5_tui_svg_1_Template, 1, 1, "tui-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r1.iconLeft)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c5, ctx_r1.size));
  }
}
function TuiInputTagComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-placeholder_raised", ctx_r2.placeholderRaised);
  }
}
function TuiInputTagComponent_ng_container_11_tui_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-tag", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("edited", function TuiInputTagComponent_ng_container_11_tui_tag_1_Template_tui_tag_edited_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const index_r14 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onTagEdited($event, index_r14));
    })("keydown.arrowLeft.prevent", function TuiInputTagComponent_ng_container_11_tui_tag_1_Template_tui_tag_keydown_arrowLeft_prevent_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const index_r14 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.onTagKeyDownArrowLeft(index_r14));
    })("keydown.arrowRight.prevent", function TuiInputTagComponent_ng_container_11_tui_tag_1_Template_tui_tag_keydown_arrowRight_prevent_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const index_r14 = restoredCtx.index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.onTagKeyDownArrowRight(index_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r12.computedDisabled || ctx_r12.disabledItemHandler(item_r13))("editable", ctx_r12.editable && !ctx_r12.readOnly)("hoverable", !ctx_r12.readOnly)("leftContent", ctx_r12.getLeftContent(item_r13))("maxLength", ctx_r12.maxLength)("removable", !ctx_r12.readOnly && ctx_r12.removable)("separator", ctx_r12.separator)("size", ctx_r12.controller.size)("status", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 11, ctx_r12.status$))("tuiFocusable", false)("value", item_r13.toString());
  }
}
function TuiInputTagComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputTagComponent_ng_container_11_tui_tag_1_Template, 3, 13, "tui-tag", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.trackByFn);
  }
}
function TuiInputTagComponent_ng_template_12_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-text_comma", ctx_r20.computedFocused && !ctx_r20.inputHidden)("t-text_disabled", ctx_r20.disabledItemHandler(item_r21))("t-text_error", !ctx_r20.tagValidator(item_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", item_r21);
  }
}
function TuiInputTagComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiInputTagComponent_ng_template_12_span_0_Template, 1, 7, "span", 26);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.value);
  }
}
function TuiInputTagComponent_div_22_ng_container_1_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-svg", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click.stop", function TuiInputTagComponent_div_22_ng_container_1_tui_svg_1_Template_tui_svg_click_stop_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.onCleanerClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const src_r26 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r26);
  }
}
function TuiInputTagComponent_div_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputTagComponent_div_22_ng_container_1_tui_svg_1_Template, 2, 1, "tui-svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r22.iconCleaner)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c5, ctx_r22.size));
  }
}
function TuiInputTagComponent_div_22_tui_tooltip_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-tooltip", 34);
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r23.hintOptions == null ? null : ctx_r23.hintOptions.content)("describeId", ctx_r23.id);
  }
}
function TuiInputTagComponent_div_22_div_3_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 21);
  }
  if (rf & 2) {
    const src_r31 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r31);
  }
}
function TuiInputTagComponent_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputTagComponent_div_22_div_3_tui_svg_1_Template, 1, 1, "tui-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r24.icon)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c5, ctx_r24.size));
  }
}
function TuiInputTagComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputTagComponent_div_22_ng_container_1_Template, 2, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputTagComponent_div_22_tui_tooltip_2_Template, 1, 2, "tui-tooltip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiInputTagComponent_div_22_div_3_Template, 2, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.hasCleaner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.showHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.icon);
  }
}
function TuiInputTagComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 36);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.icons.error);
  }
}
const _c6 = [[["tuiContent"]], [["select"]], "*"];
const _c7 = ["tuiContent", "select", "*"];
const TUI_INPUT_TAG_DEFAULT_OPTIONS = {
  separator: `,`,
  uniqueTags: true,
  tagStatus: `primary`
};
/**
 * Default parameters for InputTag component
 */
const TUI_INPUT_TAG_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(TUI_INPUT_TAG_DEFAULT_OPTIONS);
function tuiInputTagOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiProvideOptions)(TUI_INPUT_TAG_OPTIONS, options, TUI_INPUT_TAG_DEFAULT_OPTIONS);
}
const TAG_SIZE_REM = {
  s: 1.25,
  m: 1.5,
  l: 2
};
const LINE_HEIGHT_REM = {
  s: 1,
  m: 1.25,
  l: 1.25
};
const TAG_VERTICAL_SPACE_REM = 0.125;
let TuiInputTagComponent = /*#__PURE__*/(() => {
  class TuiInputTagComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.AbstractTuiMultipleControl {
    constructor(control, cdr, el, modeDirective, mode$, hintOptions, controller, options, parentHostedDropdown, icons) {
      super(control, cdr);
      this.el = el;
      this.modeDirective = modeDirective;
      this.mode$ = mode$;
      this.hintOptions = hintOptions;
      this.controller = controller;
      this.options = options;
      this.parentHostedDropdown = parentHostedDropdown;
      this.icons = icons;
      this.tags = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.EMPTY_QUERY;
      this.separator = this.options.separator;
      this.search = '';
      this.editable = true;
      this.tagValidator = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.ALWAYS_TRUE_HANDLER;
      // TODO: 4.0 Consider removing and use rows = 1 instead
      this.expandable = true;
      this.rows = Infinity;
      this.inputHidden = false;
      this.uniqueTags = this.options.uniqueTags;
      this.maxLength = null;
      this.placeholder = '';
      this.removable = true;
      this.disabledItemHandler = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.ALWAYS_FALSE_HANDLER;
      this.searchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.status$ = this.mode$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => this.status));
      this.open = false;
    }
    set pseudoFocusedSetter(value) {
      if (!value && !this.focused) {
        this.scrollTo(0);
      }
      this.pseudoFocus = value;
    }
    get nativeFocusableElement() {
      return !this.focusableElement || this.computedDisabled ? null : this.focusableElement.nativeElement;
    }
    get focused() {
      var _a;
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsNativeFocusedIn)(this.el.nativeElement) || !!((_a = this.hostedDropdown) === null || _a === void 0 ? void 0 : _a.focused);
    }
    get appearance() {
      return this.controller.appearance;
    }
    get size() {
      return this.controller.size;
    }
    get labelOutside() {
      const {
        size,
        labelOutside
      } = this.controller;
      return size === 's' || labelOutside;
    }
    get iconLeft() {
      return this.controller.iconLeft;
    }
    get icon() {
      return this.controller.icon;
    }
    get iconCleaner() {
      return this.controller.options.iconCleaner;
    }
    get hasCleaner() {
      return this.controller.cleaner && this.hasValue && this.interactive;
    }
    get hasNativeValue() {
      return !!this.search;
    }
    get hasValue() {
      return !!this.value.length || this.hasNativeValue;
    }
    get hasPlaceholder() {
      return !this.labelOutside || !this.hasValue && (!this.hasExampleText || this.inputHidden);
    }
    get placeholderRaised() {
      return !this.labelOutside && (this.computedFocused && !this.readOnly || this.hasValue);
    }
    get hasExampleText() {
      var _a;
      return !!((_a = this.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.placeholder) && this.computedFocused && !this.hasValue && !this.readOnly;
    }
    get hasRightIcons() {
      var _a;
      return this.hasCleaner || !!this.icon || !!((_a = this.hintOptions) === null || _a === void 0 ? void 0 : _a.content) && !this.computedDisabled;
    }
    get showHint() {
      var _a;
      return !!((_a = this.hintOptions) === null || _a === void 0 ? void 0 : _a.content) && (this.controller.options.hintOnDisabled || !this.computedDisabled);
    }
    get status() {
      var _a;
      return ((_a = this.modeDirective) === null || _a === void 0 ? void 0 : _a.mode) ? 'default' : this.options.tagStatus;
    }
    get canOpen() {
      return this.interactive && !!this.datalist;
    }
    get computeMaxHeight() {
      return this.expandable ? this.rows * this.lineHeight : null;
    }
    detectRetargetFromLabel(event) {
      if ((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.tuiRetargetedBoundaryCrossing)(event)) {
        event.stopImmediatePropagation();
      }
    }
    getLeftContent(tag) {
      return !this.tagValidator(tag) && this.errorIconTemplate ? this.errorIconTemplate : '';
    }
    onCleanerClick() {
      var _a;
      this.updateSearch('');
      this.clear();
      this.focusInput();
      (_a = this.parentHostedDropdown) === null || _a === void 0 ? void 0 : _a.updateOpen(true);
    }
    onActiveZone(active) {
      this.open = false;
      this.addTag();
      this.updateFocused(active);
      if (!active && !this.computedFocused) {
        this.scrollTo(0);
      }
    }
    onMouseDown(event) {
      var _a;
      const actualTarget = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.tuiGetActualTarget)(event);
      if (!this.focusableElement || actualTarget === this.focusableElement.nativeElement || !(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.tuiIsElement)(event.target) || ((_a = this.cleanerSvg) === null || _a === void 0 ? void 0 : _a.nativeElement.contains(event.target)) || this.tagsContainer && actualTarget !== this.tagsContainer.nativeElement && this.tagsContainer.nativeElement.contains(actualTarget)) {
        return;
      }
      event.preventDefault();
      this.focusInput();
    }
    onFieldKeyDownBackspace(event) {
      if (!this.labelOutside && !this.hasNativeValue && this.value.length) {
        this.deleteLastEnabledItem();
      } else {
        this.onFieldKeyDownArrowLeft(event);
      }
    }
    onFieldKeyDownArrowLeft(event) {
      if (!this.labelOutside || this.hasNativeValue || !this.value.length) {
        return;
      }
      event.preventDefault();
      this.tags.last.nativeElement.focus();
    }
    onFieldKeyDownEnter() {
      this.addTag();
      this.scrollTo();
    }
    onTagKeyDownArrowLeft(currentIndex) {
      if (currentIndex > 0) {
        this.onScrollKeyDown(currentIndex, -1);
      }
    }
    onTagKeyDownArrowRight(currentIndex) {
      if (currentIndex === this.value.length - 1) {
        this.focusInput();
      } else {
        this.onScrollKeyDown(currentIndex, 1);
      }
    }
    onTagEdited(value, index) {
      this.focusInput(value === '');
      this.value = this.filterValue(this.value.map((tag, tagIndex) => tagIndex !== index ? tag : value.split(this.separator).map(tag => tag.trim()).filter(Boolean)).reduce((result, item) => result.concat(item), []));
    }
    handleOption(item) {
      this.focusInput();
      this.updateSearch('');
      this.value = this.filterValue(this.value.concat(item));
      this.open = false;
      this.scrollTo();
    }
    onInput(value) {
      const array = value.split(this.separator);
      const tags = array.map(item => this.clippedValue(item.trim())).filter((item, index, {
        length
      }) => item.length > 0 && index !== length - 1);
      const validated = tags.filter(tag => !this.disabledItemHandler(tag));
      if (array.length > 1) {
        this.updateSearch(this.clippedValue(array[array.length - 1].trim()));
        this.value = this.filterValue([...this.value, ...validated]);
      } else {
        this.updateSearch(this.clippedValue(value));
      }
      this.open = this.hasNativeValue;
    }
    onPaste(event) {
      const pasted = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.tuiGetClipboardDataText)(event);
      this.onInput(pasted || '');
    }
    onDrop({
      dataTransfer
    }) {
      if (dataTransfer) {
        this.onInput(dataTransfer.getData('text') || '');
      }
    }
    setDisabledState() {
      super.setDisabledState();
      this.open = false;
    }
    trackByFn(_, tag) {
      // Actually tag has TuiStringifiableItem type not string
      return tag.toString();
    }
    scrollTo(scrollLeft) {
      var _a;
      if (scrollLeft === void 0) {
        scrollLeft = (_a = this.scrollBar) === null || _a === void 0 ? void 0 : _a.nativeElement.scrollWidth;
      }
      // Allow change detection to run and add new tag to DOM
      setTimeout(() => {
        if (this.scrollBar) {
          this.scrollBar.nativeElement.scrollLeft = scrollLeft || 0;
        }
      });
    }
    filterValue(value) {
      const seen = new Set();
      return value.reverse().filter(item => !this.uniqueTags || item && !seen.has(item) && seen.add(item)).reverse();
    }
    onScrollKeyDown(currentIndex, flag) {
      const tag = this.tags.find((_item, index) => index === currentIndex + flag);
      if (!tag || !this.scrollBar) {
        return;
      }
      tag.nativeElement.focus();
      if (flag * this.scrollBar.nativeElement.clientWidth - flag * tag.nativeElement.offsetLeft - tag.nativeElement.clientWidth < 0) {
        this.scrollBar.nativeElement.scrollLeft += flag * tag.nativeElement.clientWidth;
      }
    }
    updateSearch(value) {
      if (this.focusableElement) {
        this.focusableElement.nativeElement.value = value;
      }
      this.search = value;
      this.searchChange.emit(value);
    }
    addTag() {
      var _a, _b;
      const inputValue = (_b = (_a = this.search) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
      if (!inputValue || this.disabledItemHandler(inputValue)) {
        return;
      }
      this.updateSearch('');
      this.value = this.filterValue(this.value.concat(inputValue));
    }
    deleteLastEnabledItem() {
      for (let index = this.value.length - 1; index >= 0; index--) {
        if (!this.disabledItemHandler(this.value[index])) {
          this.value = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiArrayRemove)(this.value, index);
          break;
        }
      }
    }
    focusInput(preventScroll = false) {
      var _a;
      (_a = this.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.focus({
        preventScroll
      });
    }
    clippedValue(value) {
      return value.slice(0, this.maxLength || value.length);
    }
    get lineHeight() {
      return this.labelOutside ? TAG_SIZE_REM[this.controller.size] + 2 * TAG_VERTICAL_SPACE_REM : LINE_HEIGHT_REM[this.controller.size];
    }
  }
  TuiInputTagComponent.ɵfac = function TuiInputTagComponent_Factory(t) {
    return new (t || TuiInputTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__.TuiModeDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__.TUI_MODE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_10__.TuiHintOptionsDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__.TUI_TEXTFIELD_WATCHED_CONTROLLER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_INPUT_TAG_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__.TuiHostedDropdownComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__.TUI_COMMON_ICONS));
  };
  TuiInputTagComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiInputTagComponent,
    selectors: [["tui-input-tag"]],
    contentQueries: function TuiInputTagComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_13__.TuiDataListDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datalist = _t.first);
      }
    },
    viewQuery: function TuiInputTagComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__.TuiHostedDropdownComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_14__.TuiScrollbarComponent, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hostedDropdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusableElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagsContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cleanerSvg = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errorIconTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tags = _t);
      }
    },
    hostVars: 7,
    hostBindings: function TuiInputTagComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_expandable", ctx.expandable)("_label-outside", ctx.labelOutside)("_icon-left", ctx.iconLeft);
      }
    },
    inputs: {
      separator: "separator",
      search: "search",
      editable: "editable",
      tagValidator: "tagValidator",
      expandable: "expandable",
      rows: "rows",
      inputHidden: "inputHidden",
      uniqueTags: "uniqueTags",
      maxLength: "maxLength",
      placeholder: "placeholder",
      removable: "removable",
      disabledItemHandler: "disabledItemHandler",
      pseudoFocusedSetter: ["pseudoFocused", "pseudoFocusedSetter"]
    },
    outputs: {
      searchChange: "searchChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__.tuiAsFocusableItemAccessor)(TuiInputTagComponent), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiAsControl)(TuiInputTagComponent), (0,_taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__.tuiAsDataListHost)(TuiInputTagComponent), _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__.TEXTFIELD_CONTROLLER_PROVIDER, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_16__.MODE_PROVIDER], [_taiga_ui_kit_providers__WEBPACK_IMPORTED_MODULE_17__.FIXED_DROPDOWN_CONTROLLER_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c7,
    decls: 25,
    vars: 34,
    consts: [[4, "ngIf"], [1, "t-hosted", 3, "canOpen", "content", "open", "openChange", "tuiActiveZoneChange"], ["tuiWrapper", "", 3, "appearance", "disabled", "focus", "hover", "invalid", "readOnly", "click.prevent.silent", "mousedown"], [1, "t-content"], ["class", "t-icon t-icon_left t-textfield-icon t-icon-wrapper", 4, "ngIf"], [1, "t-wrapper"], [1, "t-absolute-wrapper"], ["automation-id", "tui-input-tag__placeholder", "class", "t-placeholder", 3, "t-placeholder_raised", 4, "ngIf"], [1, "t-scrollbar", 3, "hidden"], [1, "t-tags"], [4, "ngIf", "ngIfElse"], ["text", ""], [1, "t-input-wrapper"], [1, "t-ghost"], ["automation-id", "tui-input-tag__native", "type", "text", 1, "t-native", 3, "disabled", "id", "ngModel", "placeholder", "readOnly", "tuiFocusable", "drop.prevent", "keydown.arrowLeft", "keydown.backspace", "keydown.enter.prevent", "ngModelChange", "paste.prevent"], ["focusableElement", ""], [1, "t-value-content"], ["class", "t-icons t-icon-wrapper", 4, "ngIf"], ["errorIcon", ""], [1, "t-icon", "t-icon_left", "t-textfield-icon", "t-icon-wrapper"], ["appearance", "icon", "tuiWrapper", "", 3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "icon", "tuiWrapper", "", 3, "src"], ["automation-id", "tui-input-tag__placeholder", 1, "t-placeholder"], ["automation-id", "tui-input-tag__tag", "class", "t-tag", 3, "disabled", "editable", "hoverable", "leftContent", "maxLength", "removable", "separator", "size", "status", "tuiFocusable", "value", "edited", "keydown.arrowLeft.prevent", "keydown.arrowRight.prevent", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["automation-id", "tui-input-tag__tag", 1, "t-tag", 3, "disabled", "editable", "hoverable", "leftContent", "maxLength", "removable", "separator", "size", "status", "tuiFocusable", "value", "edited", "keydown.arrowLeft.prevent", "keydown.arrowRight.prevent"], ["tag", ""], ["class", "t-text", 3, "t-text_comma", "t-text_disabled", "t-text_error", "textContent", 4, "ngFor", "ngForOf"], [1, "t-text", 3, "textContent"], [1, "t-icons", "t-icon-wrapper"], ["automation-id", "tui-input-tag__tooltip", "class", "t-tooltip", 3, "content", "describeId", 4, "ngIf"], ["class", "t-icon t-textfield-icon", 4, "ngIf"], ["appearance", "icon", "automation-id", "tui-input-tag__cleaner", "tuiWrapper", "", "class", "t-cleaner", 3, "src", "click.stop", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "icon", "automation-id", "tui-input-tag__cleaner", "tuiWrapper", "", 1, "t-cleaner", 3, "src", "click.stop"], ["cleaner", ""], ["automation-id", "tui-input-tag__tooltip", 1, "t-tooltip", 3, "content", "describeId"], [1, "t-icon", "t-textfield-icon"], [1, "t-error-icon", 3, "src"]],
    template: function TuiInputTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiInputTagComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-hosted-dropdown", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openChange", function TuiInputTagComponent_Template_tui_hosted_dropdown_openChange_2_listener($event) {
          return ctx.open = $event;
        })("tuiActiveZoneChange", function TuiInputTagComponent_Template_tui_hosted_dropdown_tuiActiveZoneChange_2_listener($event) {
          return ctx.onActiveZone($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click.prevent.silent", function TuiInputTagComponent_Template_div_click_prevent_silent_3_listener($event) {
          return ctx.detectRetargetFromLabel($event);
        })("mousedown", function TuiInputTagComponent_Template_div_mousedown_3_listener($event) {
          return ctx.onMouseDown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiInputTagComponent_div_5_Template, 2, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TuiInputTagComponent_div_8_Template, 2, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-scrollbar", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TuiInputTagComponent_ng_container_11_Template, 2, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TuiInputTagComponent_ng_template_12_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop.prevent", function TuiInputTagComponent_Template_input_drop_prevent_17_listener($event) {
          return ctx.onDrop($event);
        })("keydown.arrowLeft", function TuiInputTagComponent_Template_input_keydown_arrowLeft_17_listener($event) {
          return ctx.onFieldKeyDownArrowLeft($event);
        })("keydown.backspace", function TuiInputTagComponent_Template_input_keydown_backspace_17_listener($event) {
          return ctx.onFieldKeyDownBackspace($event);
        })("keydown.enter.prevent", function TuiInputTagComponent_Template_input_keydown_enter_prevent_17_listener() {
          return ctx.onFieldKeyDownEnter();
        })("ngModelChange", function TuiInputTagComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.onInput($event);
        })("paste.prevent", function TuiInputTagComponent_Template_input_paste_prevent_17_listener($event) {
          return ctx.onPaste($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](21, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TuiInputTagComponent_div_22_Template, 4, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TuiInputTagComponent_ng_template_23_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 32, ctx.hintOptions == null ? null : ctx.hintOptions.change$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("canOpen", ctx.canOpen)("content", ctx.datalist || "")("open", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx.appearance)("disabled", ctx.computedDisabled)("focus", ctx.computedFocused)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx.computeMaxHeight, "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.expandable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-tags_empty", (!ctx.focused || ctx.inputHidden) && !(ctx.value == null ? null : ctx.value.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.labelOutside)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-input-wrapper_collapsed", ctx.computedDisabled || ctx.readOnly || ctx.inputHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("t-native_hidden", ctx.inputHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.computedDisabled)("id", ctx.id)("ngModel", ctx.search)("placeholder", ctx.placeholder)("readOnly", ctx.readOnly || ctx.inputHidden)("tuiFocusable", ctx.computedFocusable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxLength", ctx.maxLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasRightIcons);
      }
    },
    dependencies: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__.TuiHostedDropdownComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_18__.TuiSvgComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_14__.TuiScrollbarComponent, _taiga_ui_kit_components_tag__WEBPACK_IMPORTED_MODULE_19__.TuiTagComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_20__.TuiTooltipComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.TuiActiveZoneDirective, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_23__.TuiWrapperDirective, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_24__.PolymorpheusOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_25__.TuiFocusableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:block;text-align:left;border-radius:var(--tui-radius-m);height:var(--tui-height);min-height:var(--tui-height);max-height:var(--tui-height)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}.t-input[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input[_ngcontent-%COMP%]::-webkit-caps-lock-indicator, .t-input[_ngcontent-%COMP%]::-webkit-contacts-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{opacity:1}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus, .t-input   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:focus, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01-night)!important;border-color:var(--tui-autofill-night);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill-night) inset!important}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, .t-input   [tuiWrapper][data-mode=\"onDark\"][_nghost-%COMP%]::placeholder, [tuiWrapper][data-mode=\"onDark\"]   [_nghost-%COMP%]::placeholder{color:var(--tui-text-03-night)}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"s\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size=\"s\"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size=\"s\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"m\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"m\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size=\"m\"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size=\"m\"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size=\"m\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"m\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"l\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size=\"l\"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size=\"l\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-input   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], .t-input   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input.t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em;-webkit-user-select:none}.t-content[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;box-sizing:border-box;align-items:center;overflow:hidden}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-l)}.t-wrapper[_ngcontent-%COMP%]{flex:1;min-width:0;-webkit-padding-end:.25rem;padding-inline-end:.25rem}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill)}._invalid[_nghost-%COMP%]:not(._focused)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill-night)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01)}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}._focused[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-start:-.375rem;margin-inline-start:-.375rem}[data-size=m][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-start:-.125rem;margin-inline-start:-.125rem;-webkit-margin-end:.375rem;margin-inline-end:.375rem}[data-size=l][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-end:.75rem;margin-inline-end:.75rem}.t-icons[_ngcontent-%COMP%]{display:flex;align-items:center}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}[data-size=s][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{-webkit-margin-end:-.375rem;margin-inline-end:-.375rem}[_nghost-%COMP%]:not([data-size=\"s\"])   .t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){-webkit-margin-start:.25rem;margin-inline-start:.25rem}[_nghost-%COMP%]{cursor:text}._expandable[_nghost-%COMP%]{height:auto;max-height:none}._disabled[_nghost-%COMP%]{pointer-events:none}._readonly[_nghost-%COMP%]{cursor:default}[data-size=m][_nghost-%COMP%]{line-height:1rem}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-scrollbar[_ngcontent-%COMP%]{-webkit-margin-start:-.25rem;margin-inline-start:-.25rem;min-width:100%;scroll-behavior:smooth}[_nghost-%COMP%]:not(._label-outside)   .t-scrollbar[_ngcontent-%COMP%], ._label-outside._icon-left[_nghost-%COMP%]   .t-scrollbar[_ngcontent-%COMP%]{margin:0}[data-size=s]._icon-left[_nghost-%COMP%]   .t-scrollbar[_ngcontent-%COMP%]{-webkit-margin-start:.25rem;margin-inline-start:.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-scrollbar[_ngcontent-%COMP%]{border-top:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-scrollbar[_ngcontent-%COMP%]{border-top:1.25rem solid transparent}.t-tags[_ngcontent-%COMP%]{display:flex;-webkit-padding-start:.25rem;padding-inline-start:.25rem}.t-tags_expandable[_ngcontent-%COMP%]{overflow:hidden}.t-tags_empty[_ngcontent-%COMP%]{height:0}._expandable[_nghost-%COMP%]   .t-tags[_ngcontent-%COMP%]{flex-wrap:wrap;white-space:normal;overflow:hidden}._readonly[_nghost-%COMP%]   .t-tags[_ngcontent-%COMP%]{pointer-events:none}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-tags[_ngcontent-%COMP%], [data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-tags[_ngcontent-%COMP%]{padding:0}.t-content[_ngcontent-%COMP%]{align-items:flex-start}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{min-height:var(--tui-height-s)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{min-height:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{min-height:var(--tui-height-l)}[data-size=s][_nghost-%COMP%]   .t-icon-wrapper[_ngcontent-%COMP%]{height:var(--tui-height-s)}[data-size=m][_nghost-%COMP%]   .t-icon-wrapper[_ngcontent-%COMP%]{height:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]   .t-icon-wrapper[_ngcontent-%COMP%]{height:var(--tui-height-l)}.t-absolute-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}[data-size=m][_nghost-%COMP%]   .t-absolute-wrapper[_ngcontent-%COMP%]{height:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]   .t-absolute-wrapper[_ngcontent-%COMP%]{height:var(--tui-height-l)}.t-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:0;box-sizing:border-box}[data-size=s][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{min-height:var(--tui-height-s);padding:calc((var(--tui-height-s) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{min-height:var(--tui-height-m);padding:calc((var(--tui-height-m) - var(--tui-height-xs) - .25rem) / 2) 0}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height-l) - var(--tui-height-s) - .25rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height-m) - 2rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height-l) - 2.5rem) / 2) 0}.t-tag[_ngcontent-%COMP%]{margin:.125rem .5rem .125rem -.25rem;-webkit-margin-start:-.25rem;margin-inline-start:-.25rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem;max-width:100%;flex-shrink:0}[data-size=m][_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{-webkit-margin-start:-.125rem;margin-inline-start:-.125rem;-webkit-margin-end:.375rem;margin-inline-end:.375rem}.t-text[_ngcontent-%COMP%]:after{content:\",\\a0\"}.t-text_disabled[_ngcontent-%COMP%]{color:var(--tui-text-03)}.t-text_error[_ngcontent-%COMP%]{color:var(--tui-negative)}.t-text[_ngcontent-%COMP%]:not(.t-text_comma):last-of-type:after{content:\"\"}[_nghost-%COMP%]:not(._expandable)   .t-text[_ngcontent-%COMP%]{white-space:nowrap}.t-input-wrapper[_ngcontent-%COMP%], .t-value-content[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;max-width:100%}[data-size=s][_nghost-%COMP%]   .t-input-wrapper[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-value-content[_ngcontent-%COMP%]{min-height:1.5rem}[data-size=m][_nghost-%COMP%]   .t-input-wrapper[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-value-content[_ngcontent-%COMP%]{min-height:calc(var(--tui-height-xs) + 2 * .125rem)}[data-size=l][_nghost-%COMP%]   .t-input-wrapper[_ngcontent-%COMP%], [data-size=l][_nghost-%COMP%]   .t-value-content[_ngcontent-%COMP%]{min-height:calc(var(--tui-height-s) + 2 * .125rem)}[_nghost-%COMP%]:not(._label-outside)   .t-input-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]:not(._label-outside)   .t-value-content[_ngcontent-%COMP%]{min-height:1rem}.t-input-wrapper_collapsed[_ngcontent-%COMP%]{flex:0;-webkit-margin-start:-.5rem;margin-inline-start:-.5rem}.t-value-content[_ngcontent-%COMP%]:empty{display:none}.t-ghost[_ngcontent-%COMP%]{visibility:hidden;white-space:pre;text-overflow:clip;min-width:.125rem}[_nghost-%COMP%]:not(._expandable)   .t-ghost[_ngcontent-%COMP%]{min-width:2rem}.t-native[_ngcontent-%COMP%]{margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;padding:0;cursor:inherit}.t-native[_ngcontent-%COMP%]:-webkit-autofill, .t-native[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-native[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}.t-native_hidden[_ngcontent-%COMP%]{opacity:0;text-indent:-10em}.t-native[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-native[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03-night)}._focused[_nghost-%COMP%]   .t-native[_ngcontent-%COMP%]:not(:-moz-read-only)::placeholder{opacity:1}._focused[_nghost-%COMP%]   .t-native[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}.t-error-icon[_ngcontent-%COMP%]{display:block;color:var(--tui-error-fill);width:1rem;height:1rem}"],
    changeDetection: 0
  });
  return TuiInputTagComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiInputTagModule = /*#__PURE__*/(() => {
  class TuiInputTagModule {}
  TuiInputTagModule.ɵfac = function TuiInputTagModule_Factory(t) {
    return new (t || TuiInputTagModule)();
  };
  TuiInputTagModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiInputTagModule
  });
  TuiInputTagModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_26__.TuiScrollService],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_24__.PolymorpheusModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_25__.TuiFocusableModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_27__.TuiHoveredModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_22__.TuiActiveZoneModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_18__.TuiSvgModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_14__.TuiScrollbarModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_20__.TuiTooltipModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_12__.TuiHostedDropdownModule, _taiga_ui_kit_components_tag__WEBPACK_IMPORTED_MODULE_19__.TuiTagModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_23__.TuiWrapperModule]]
  });
  return TuiInputTagModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-components-input-tag.js.map

/***/ }),

/***/ 6706:
/*!*******************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-components-slider.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_SLIDER_DEFAULT_OPTIONS: () => (/* binding */ TUI_SLIDER_DEFAULT_OPTIONS),
/* harmony export */   TUI_SLIDER_OPTIONS: () => (/* binding */ TUI_SLIDER_OPTIONS),
/* harmony export */   TuiSliderComponent: () => (/* binding */ TuiSliderComponent),
/* harmony export */   TuiSliderKeyStepsDirective: () => (/* binding */ TuiSliderKeyStepsDirective),
/* harmony export */   TuiSliderModule: () => (/* binding */ TuiSliderModule),
/* harmony export */   TuiSliderReadonlyDirective: () => (/* binding */ TuiSliderReadonlyDirective),
/* harmony export */   TuiSliderThumbLabelComponent: () => (/* binding */ TuiSliderThumbLabelComponent),
/* harmony export */   tuiSliderOptionsProvider: () => (/* binding */ tuiSliderOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 4521);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ 5197);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/cdk */ 5351);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/cdk */ 5618);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/cdk */ 9838);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @taiga-ui/cdk */ 4950);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @taiga-ui/cdk */ 704);
/* harmony import */ var _taiga_ui_kit_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @taiga-ui/kit/utils */ 4238);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4911);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-web-apis/common */ 5393);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1813);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 1570);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 5333);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 1749);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 5047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 8442);













const _c0 = ["type", "range", "tuiSlider", ""];
const _c1 = ["tuiSliderThumbLabel", ""];
function TuiSliderThumbLabelComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c2 = ["*", [["input", "type", "range"]]];
const _c3 = ["*", "input[type=range]"];
const TUI_SLIDER_DEFAULT_OPTIONS = {
  size: `m`,
  trackColor: `var(--tui-base-03)`
};
/**
 * Default parameters for Slider component
 */
const TUI_SLIDER_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(TUI_SLIDER_DEFAULT_OPTIONS);
function tuiSliderOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiProvideOptions)(TUI_SLIDER_OPTIONS, options, TUI_SLIDER_DEFAULT_OPTIONS);
}
let TuiSliderComponent = /*#__PURE__*/(() => {
  class TuiSliderComponent {
    constructor(control, cdr, options, el, userAgent, injector) {
      var _a;
      this.control = control;
      this.options = options;
      this.el = el;
      this.userAgent = userAgent;
      this.injector = injector;
      this.size = this.options.size;
      this.segments = 1;
      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel) {
        /**
         * The ValueAccessor.writeValue method is called twice on any value accessor during component initialization,
         * when a control is bound using [(ngModel)], first time with a phantom null value.
         * With `changeDetection: ChangeDetectionStrategy.OnPush` the second call of writeValue with real value don't re-render the view.
         * ___
         * See this {@link https://github.com/angular/angular/issues/14988 issue}
         */
        (_a = control.valueChanges) === null || _a === void 0 ? void 0 : _a.pipe((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiWatch)(cdr), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe();
      }
    }
    get min() {
      return Number(this.el.nativeElement.min);
    }
    get max() {
      return Number(this.el.nativeElement.max || 100);
    }
    get step() {
      return Number(this.el.nativeElement.step) || 1;
    }
    get value() {
      const {
        el,
        control,
        hasKeySteps
      } = this;
      if (!hasKeySteps && control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel) {
        /**
         * If developer uses `[(ngModel)]` and programmatically change value,
         * the `el.nativeElement.value` is equal to the previous value at this moment.
         */
        return control.viewModel;
      }
      return Number(el.nativeElement.value) || 0;
    }
    set value(newValue) {
      this.el.nativeElement.value = `${newValue}`;
    }
    get valuePercentage() {
      return 100 * (this.value - this.min) / (this.max - this.min) || 0;
    }
    get segmentWidth() {
      return 100 / Math.max(1, this.segments);
    }
    // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
    get isOldEdge() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__.tuiIsEdgeOlderThan)(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.CHROMIUM_EDGE_START_VERSION, this.userAgent);
    }
    get hasKeySteps() {
      return Boolean(this.injector.get(TuiSliderKeyStepsDirective, null));
    }
  }
  TuiSliderComponent.ɵfac = function TuiSliderComponent_Factory(t) {
    return new (t || TuiSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_SLIDER_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_7__.USER_AGENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
  };
  TuiSliderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiSliderComponent,
    selectors: [["input", "type", "range", "tuiSlider", ""]],
    hostVars: 9,
    hostBindings: function TuiSliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TuiSliderComponent_input_HostBindingHandler() {
          return 0;
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--tui-slider-track-color", ctx.options.trackColor)("--tui-slider-fill-percentage", ctx.valuePercentage, "%")("--tui-slider-segment-width", ctx.segmentWidth, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_old-edge", ctx.isOldEdge);
      }
    },
    inputs: {
      size: "size",
      segments: "segments"
    },
    attrs: _c0,
    decls: 0,
    vars: 0,
    template: function TuiSliderComponent_Template(rf, ctx) {},
    styles: ["[_nghost-%COMP%]{display:block;width:100%;color:var(--tui-primary);cursor:pointer}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}[_nghost-%COMP%]:not(._old-edge){-webkit-appearance:none;-moz-appearance:none;appearance:none;height:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]:not(._old-edge)::-webkit-slider-container{border-radius:inherit}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-runnable-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .625rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor var(--tui-slider-fill-percentage),transparent var(--tui-slider-fill-percentage));background-position-x:0,.375rem,0;background-size:calc(100% - 1rem),calc(100% - 1rem),auto}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-runnable-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor var(--tui-slider-fill-percentage),transparent var(--tui-slider-fill-percentage));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .625rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.375rem;background-size:calc(100% - 1rem)}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background-color:currentColor;border:none;border-radius:50%;height:1rem;width:1rem;margin-top:-.4375rem}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb:hover{background:var(--tui-primary-hover)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb:active{background:var(--tui-primary-active)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background-color:currentColor;border:none;border-radius:50%;height:.5rem;width:.5rem;margin-top:-.1875rem}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb:hover{background:var(--tui-primary-hover)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb:active{background:var(--tui-primary-active)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{-moz-appearance:none;appearance:none;background-color:currentColor;border:none;border-radius:50%;height:1rem;width:1rem}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb:hover{background:var(--tui-primary-hover)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb:active{background:var(--tui-primary-active)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{-moz-appearance:none;appearance:none;background-color:currentColor;border:none;border-radius:50%;height:.5rem;width:.5rem}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb:hover{background:var(--tui-primary-hover)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb:active{background:var(--tui-primary-active)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)::-moz-range-progress{border-radius:inherit}[_nghost-%COMP%]:not(._old-edge)::-moz-range-progress{height:.125rem;background:currentColor;border-top-right-radius:0;border-bottom-right-radius:0}._old-edge[_nghost-%COMP%]::-ms-thumb{background:currentColor;border-radius:50%}._old-edge[_nghost-%COMP%]::-ms-fill-lower{background:currentColor}._old-edge[_nghost-%COMP%]::-ms-track{background:var(--tui-slider-track-color);border:none}"],
    changeDetection: 0
  });
  (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_9__.tuiPure], TuiSliderComponent.prototype, "hasKeySteps", null);
  return TuiSliderComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiSliderKeyStepsDirective = /*#__PURE__*/(() => {
  class TuiSliderKeyStepsDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.AbstractTuiControl {
    constructor(control, cdr, el, slider) {
      super(control, cdr);
      this.el = el;
      this.slider = slider;
    }
    get nativeFocusableElement() {
      return this.computedDisabled ? null : this.el.nativeElement;
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__.tuiIsNativeFocused)(this.nativeFocusableElement);
    }
    get min() {
      return this.keySteps[0][1];
    }
    get max() {
      return this.keySteps[this.keySteps.length - 1][1];
    }
    updateControlValue() {
      this.value = (0,_taiga_ui_kit_utils__WEBPACK_IMPORTED_MODULE_12__.tuiPercentageToKeyStepValue)(this.slider.valuePercentage, this.keySteps);
    }
    writeValue(controlValue) {
      if (controlValue === null) {
        return;
      }
      const clampedControlValue = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_13__.tuiClamp)(controlValue, this.min, this.max);
      ngDevMode && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.tuiAssert.assert(controlValue === clampedControlValue, '\n[SliderKeySteps]: You cannot programmatically set value which is less/more than min/max');
      this.slider.value = this.transformToNativeValue(clampedControlValue);
    }
    getFallbackValue() {
      return 0;
    }
    transformToNativeValue(controlValue) {
      const {
        min,
        max
      } = this.slider;
      const newValuePercentage = (0,_taiga_ui_kit_utils__WEBPACK_IMPORTED_MODULE_12__.tuiKeyStepValueToPercentage)(controlValue, this.keySteps);
      return newValuePercentage * (max - min) / 100 + min;
    }
  }
  TuiSliderKeyStepsDirective.ɵfac = function TuiSliderKeyStepsDirective_Factory(t) {
    return new (t || TuiSliderKeyStepsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TuiSliderComponent)));
  };
  TuiSliderKeyStepsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiSliderKeyStepsDirective,
    selectors: [["input", "tuiSlider", "", "keySteps", ""]],
    hostVars: 4,
    hostBindings: function TuiSliderKeyStepsDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TuiSliderKeyStepsDirective_input_HostBindingHandler() {
          return ctx.updateControlValue();
        })("change", function TuiSliderKeyStepsDirective_change_HostBindingHandler() {
          return ctx.updateControlValue();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.computedDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.safeCurrentValue)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max);
      }
    },
    inputs: {
      keySteps: "keySteps"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return TuiSliderKeyStepsDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const SLIDER_INTERACTION_KEYS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown']);
/**
 * Native <input type='range' readonly> doesn't work.
 * This directive imitates this native behaviour.
 */
let TuiSliderReadonlyDirective = /*#__PURE__*/(() => {
  class TuiSliderReadonlyDirective {
    constructor(el, doc, destroy$) {
      this.readonly = true;
      const touchStart$ = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiTypedFromEvent)(el.nativeElement, 'touchstart', {
        passive: false
      });
      const touchMove$ = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiTypedFromEvent)(doc, 'touchmove', {
        passive: false
      });
      const touchEnd$ = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiTypedFromEvent)(doc, 'touchend', {
        passive: true
      });
      const shouldPreventMove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(touchStart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(e => this.preventEvent(e)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.ALWAYS_TRUE_HANDLER)), touchEnd$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.ALWAYS_FALSE_HANDLER)));
      /**
       * @bad TODO think about another solution.
       * Keep in mind that preventing touch event (on slider) inside `@HostListener('touchstart')` doesn't work for mobile chrome.
       */
      (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([touchMove$, shouldPreventMove$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(([_, shouldPreventMove]) => shouldPreventMove), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(destroy$)).subscribe(([moveEvent]) => this.preventEvent(moveEvent));
    }
    preventEvent(event) {
      if (event.cancelable && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_21__.tuiCoerceBooleanProperty)(this.readonly)) {
        event.preventDefault();
      }
    }
    preventKeyboardInteraction(event) {
      if (SLIDER_INTERACTION_KEYS.has(event.key)) {
        this.preventEvent(event);
      }
    }
  }
  TuiSliderReadonlyDirective.ɵfac = function TuiSliderReadonlyDirective_Factory(t) {
    return new (t || TuiSliderReadonlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiDestroyService, 2));
  };
  TuiSliderReadonlyDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiSliderReadonlyDirective,
    selectors: [["input", "tuiSlider", "", "readonly", ""]],
    hostBindings: function TuiSliderReadonlyDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function TuiSliderReadonlyDirective_mousedown_HostBindingHandler($event) {
          return ctx.preventEvent($event);
        })("keydown", function TuiSliderReadonlyDirective_keydown_HostBindingHandler($event) {
          return ctx.preventKeyboardInteraction($event);
        });
      }
    },
    inputs: {
      readonly: "readonly"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_23__.TuiDestroyService])]
  });
  return TuiSliderReadonlyDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiSliderThumbLabelComponent = /*#__PURE__*/(() => {
  class TuiSliderThumbLabelComponent {
    get size() {
      var _a;
      return ((_a = this.slider) === null || _a === void 0 ? void 0 : _a.size) || 'm';
    }
    get ratio() {
      var _a;
      return (((_a = this.slider) === null || _a === void 0 ? void 0 : _a.valuePercentage) || 0) / 100;
    }
    get ghostLeft() {
      var _a;
      return this.ratio * (((_a = this.slider) === null || _a === void 0 ? void 0 : _a.el.nativeElement.offsetWidth) || 0);
    }
    ngAfterContentInit() {
      var _a;
      ngDevMode && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.tuiAssert.assert(Boolean((_a = this.control) === null || _a === void 0 ? void 0 : _a.valueChanges), '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\n' + 'Use [(ngModel)] or [formControl] or formControlName for correct work.');
    }
  }
  TuiSliderThumbLabelComponent.ɵfac = function TuiSliderThumbLabelComponent_Factory(t) {
    return new (t || TuiSliderThumbLabelComponent)();
  };
  TuiSliderThumbLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiSliderThumbLabelComponent,
    selectors: [["", "tuiSliderThumbLabel", ""]],
    contentQueries: function TuiSliderThumbLabelComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, TuiSliderComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.control = _t.first);
      }
    },
    attrs: _c1,
    ngContentSelectors: _c3,
    decls: 5,
    vars: 8,
    consts: [[4, "ngIf"], [1, "t-ghost"]],
    template: function TuiSliderThumbLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiSliderThumbLabelComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx.control == null ? null : ctx.control.valueChanges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--tui-slider-thumb-ratio", ctx.ratio)("left", ctx.ghostLeft, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-size", ctx.size);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{position:relative}.t-ghost[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s][_ngcontent-%COMP%]{width:.5rem;height:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem))}.t-ghost[data-size=m][_ngcontent-%COMP%]{width:1rem;height:1rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -1rem))}"],
    changeDetection: 0
  });
  return TuiSliderThumbLabelComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiSliderModule = /*#__PURE__*/(() => {
  class TuiSliderModule {}
  TuiSliderModule.ɵfac = function TuiSliderModule_Factory(t) {
    return new (t || TuiSliderModule)();
  };
  TuiSliderModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiSliderModule
  });
  TuiSliderModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule]]
  });
  return TuiSliderModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-components-slider.js.map

/***/ }),

/***/ 4414:
/*!****************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-components-tag.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_TAG_DEFAULT_OPTIONS: () => (/* binding */ TUI_TAG_DEFAULT_OPTIONS),
/* harmony export */   TUI_TAG_OPTIONS: () => (/* binding */ TUI_TAG_OPTIONS),
/* harmony export */   TuiTagComponent: () => (/* binding */ TuiTagComponent),
/* harmony export */   TuiTagModule: () => (/* binding */ TuiTagModule),
/* harmony export */   tuiTagOptionsProvider: () => (/* binding */ tuiTagOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 2694);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 9313);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ 6775);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 8394);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 9098);
/* harmony import */ var _taiga_ui_kit_utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/kit/utils/format */ 1309);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3226);














/** Default values for the tag options. */
const _c0 = ["input"];
function TuiTagComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const text_r5 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", text_r5, " ");
  }
}
function TuiTagComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTagComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r0.leftContent);
  }
}
function TuiTagComponent_tui_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-loader", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inheritColor", true)("size", ctx_r1.loaderSize);
  }
}
function TuiTagComponent_tui_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiTagComponent_tui_svg_4_Template_tui_svg_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.remove($event));
    })("mousedown.stop.prevent.silent", function TuiTagComponent_tui_svg_4_Template_tui_svg_mousedown_stop_prevent_silent_0_listener() {
      return 0;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.icons.close);
  }
}
function TuiTagComponent_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TuiTagComponent_input_5_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onBlur());
    })("keydown", function TuiTagComponent_input_5_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onKeyDown($event));
    })("ngModelChange", function TuiTagComponent_input_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.editedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxLength", ctx_r3.maxLength);
  }
}
const TUI_TAG_DEFAULT_OPTIONS = {
  size: `m`,
  status: `default`,
  autoColor: false
};
/**
 * Default parameters for Tag component
 */
const TUI_TAG_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiCreateToken)(TUI_TAG_DEFAULT_OPTIONS);
function tuiTagOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiProvideOptions)(TUI_TAG_OPTIONS, options, TUI_TAG_DEFAULT_OPTIONS);
}
let TuiTagComponent = /*#__PURE__*/(() => {
  class TuiTagComponent {
    constructor(el, mode$, options, icons) {
      this.el = el;
      this.mode$ = mode$;
      this.options = options;
      this.icons = icons;
      // TODO: Possibly implement standard focus mechanisms and outline
      this.value = '';
      this.editable = false;
      this.separator = ',';
      this.maxLength = null;
      this.size = this.options.size;
      this.showLoader = false;
      this.status = this.options.status;
      this.hoverable = false;
      this.removable = false;
      this.disabled = false;
      this.autoColor = this.options.autoColor;
      this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.editing = false;
      this.editedText = null;
    }
    set input(input) {
      if (input) {
        input.nativeElement.focus();
      }
    }
    get backgroundColor() {
      return this.autoColor ? (0,_taiga_ui_kit_utils_format__WEBPACK_IMPORTED_MODULE_2__.tuiStringHashToHsl)(this.value) : null;
    }
    get canRemove() {
      return this.removable && !this.disabled && !this.showLoader;
    }
    get displayText() {
      return this.editedText === null ? this.value : this.editedText;
    }
    get loaderSize() {
      return (0,_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.tuiSizeBigger)(this.size) ? 's' : 'xs';
    }
    edit(event) {
      if (!this.canEdit) {
        return;
      }
      event.preventDefault();
      this.editing = true;
      this.editedText = this.value;
    }
    remove(event) {
      if (!this.canRemove) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this.edited.emit('');
    }
    onInput(value) {
      const newTags = value.split(this.separator);
      if (newTags.length > 1) {
        this.save(String(newTags));
        return;
      }
      this.editedText = value;
    }
    onKeyDown(event) {
      event.stopPropagation();
      switch (event.key.toLowerCase()) {
        case 'enter':
          event.preventDefault();
          this.save(this.editedText || '');
          break;
        case 'escape':
        case 'esc':
          event.preventDefault();
          this.stopEditing();
          this.el.nativeElement.focus();
          break;
        default:
          break;
      }
    }
    onBlur() {
      if (this.editedText !== null) {
        this.save(this.editedText);
      }
    }
    get canEdit() {
      return this.editable && !this.disabled && !this.showLoader;
    }
    stopEditing() {
      this.editing = false;
      this.editedText = null;
    }
    save(value) {
      this.stopEditing();
      this.edited.emit(value.trim());
    }
  }
  TuiTagComponent.ɵfac = function TuiTagComponent_Factory(t) {
    return new (t || TuiTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TUI_MODE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_TAG_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TUI_COMMON_ICONS));
  };
  TuiTagComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiTagComponent,
    selectors: [["tui-tag"], ["a", "tuiTag", ""], ["button", "tuiTag", ""]],
    viewQuery: function TuiTagComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
      }
    },
    hostVars: 10,
    hostBindings: function TuiTagComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("$.data-mode.attr", function TuiTagComponent___data_mode_attr_HostBindingHandler() {
          return ctx.mode$;
        })("keydown.enter", function TuiTagComponent_keydown_enter_HostBindingHandler($event) {
          return ctx.edit($event);
        })("keydown.delete", function TuiTagComponent_keydown_delete_HostBindingHandler($event) {
          return ctx.remove($event);
        })("keydown.backspace", function TuiTagComponent_keydown_backspace_HostBindingHandler($event) {
          return ctx.remove($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-size", ctx.size)("data-status", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_hoverable", ctx.hoverable)("_disabled", ctx.disabled)("_autocolor", ctx.autoColor)("_editing", ctx.editing);
      }
    },
    inputs: {
      value: "value",
      editable: "editable",
      separator: "separator",
      maxLength: "maxLength",
      size: "size",
      showLoader: "showLoader",
      status: "status",
      hoverable: "hoverable",
      removable: "removable",
      disabled: "disabled",
      autoColor: "autoColor",
      leftContent: "leftContent"
    },
    outputs: {
      edited: "edited"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.MODE_PROVIDER])],
    decls: 6,
    vars: 7,
    consts: [[1, "t-tag", 3, "dblclick"], ["class", "t-content", 4, "ngIf"], ["automation-id", "tui-tag__text", 1, "t-text", 3, "textContent"], ["class", "t-content", 3, "inheritColor", "size", 4, "ngIf"], ["automation-id", "tui-tag__remove", "class", "t-icon", 3, "src", "click", "mousedown.stop.prevent.silent", 4, "ngIf"], ["automation-id", "tui-tag__edit", "type", "text", "class", "t-edit", 3, "ngModel", "blur", "keydown", "ngModelChange", 4, "ngIf"], [1, "t-content"], [4, "polymorpheusOutlet"], [1, "t-content", 3, "inheritColor", "size"], ["automation-id", "tui-tag__remove", 1, "t-icon", 3, "src", "click", "mousedown.stop.prevent.silent"], ["automation-id", "tui-tag__edit", "type", "text", 1, "t-edit", 3, "ngModel", "blur", "keydown", "ngModelChange"], ["input", ""]],
    template: function TuiTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TuiTagComponent_Template_div_dblclick_0_listener($event) {
          return ctx.edit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiTagComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiTagComponent_tui_loader_3_Template, 1, 2, "tui-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiTagComponent_tui_svg_4_Template, 1, 1, "tui-svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiTagComponent_input_5_Template, 2, 2, "input", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leftContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", ctx.displayText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canRemove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);
      }
    },
    dependencies: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiLoaderComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiSvgComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__.PolymorpheusOutletDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel],
    styles: ["[_nghost-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-block;font:var(--tui-font-text-s);line-height:1.25rem;max-width:100%;cursor:default;outline:none;text-decoration:none;padding:0;border:0}[_nghost-%COMP%]:after{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";box-sizing:border-box;border-radius:inherit;pointer-events:none}._hoverable[_nghost-%COMP%]:hover[data-status=custom]:after, ._hoverable[_nghost-%COMP%]:active[data-status=custom]:after{background-color:var(--tui-clear)}[_nghost-%COMP%]:focus:after{border:2px solid var(--tui-focus)}[data-size=s][_nghost-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;border-radius:var(--tui-radius-xs)}[data-size=m][_nghost-%COMP%]{border-radius:var(--tui-radius-xs)}[data-size=l][_nghost-%COMP%]{border-radius:var(--tui-radius-s)}[data-status=primary][_nghost-%COMP%]{background-color:var(--tui-primary);color:var(--tui-primary-text)}[data-status=primary]._hoverable[_nghost-%COMP%]:hover{background-color:var(--tui-primary-hover)}[data-status=primary]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-primary-active)}[data-status=error][_nghost-%COMP%]{background-color:var(--tui-error-bg);color:var(--tui-text-01)}[data-status=error]._hoverable[_nghost-%COMP%]:hover, [data-status=error]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-error-bg-hover)}[data-status=error][data-mode=onDark][_nghost-%COMP%]{background-color:var(--tui-error-bg-night);color:var(--tui-text-01-night)}[data-status=error][data-mode=onDark]._hoverable[_nghost-%COMP%]:hover, [data-status=error][data-mode=onDark]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-error-bg-night-hover)}[data-status=success][_nghost-%COMP%]{background-color:var(--tui-success-bg);color:var(--tui-text-01)}[data-status=success]._hoverable[_nghost-%COMP%]:hover, [data-status=success]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-success-bg-hover)}[data-status=success][data-mode=onDark][_nghost-%COMP%]{background-color:var(--tui-success-bg-night);color:var(--tui-text-01-night)}[data-status=success][data-mode=onDark]._hoverable[_nghost-%COMP%]:hover, [data-status=success][data-mode=onDark]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-success-bg-night-hover)}[data-status=warning][_nghost-%COMP%]{background-color:var(--tui-warning-bg);color:var(--tui-text-01)}[data-status=warning]._hoverable[_nghost-%COMP%]:hover, [data-status=warning]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-warning-bg-hover)}[data-status=warning][data-mode=onDark][_nghost-%COMP%]{background-color:var(--tui-warning-bg-night);color:var(--tui-text-01-night)}[data-status=warning][data-mode=onDark]._hoverable[_nghost-%COMP%]:hover, [data-status=warning][data-mode=onDark]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-warning-bg-night-hover)}[data-status=default][_nghost-%COMP%]{color:var(--tui-text-01-night);background-color:var(--tui-base-06)}[data-status=default][_nghost-%COMP%]:not([data-mode])._hoverable:hover{background-color:var(--tui-base-07)}[data-status=default][_nghost-%COMP%]:not([data-mode])._hoverable:active{background-color:var(--tui-base-08)}[data-status=default][data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-01-night);background-color:var(--tui-clear-inverse)}[data-status=default][data-mode=onDark]._hoverable[_nghost-%COMP%]:hover{background-color:var(--tui-clear-inverse-hover)}[data-status=default][data-mode=onDark]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-clear-inverse-active)}[data-status=default][data-mode=onDark][_nghost-%COMP%]:focus:after{border:2px solid var(--tui-base-01)}[data-status=default][data-mode=onLight][_nghost-%COMP%]{background-color:var(--tui-clear);color:var(--tui-text-01)}[data-status=default][data-mode=onLight]._hoverable[_nghost-%COMP%]:hover{background-color:var(--tui-clear-hover)}[data-status=default][data-mode=onLight]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-clear-active)}._editing[_nghost-%COMP%]{background:transparent!important}._disabled[_nghost-%COMP%]{pointer-events:none;opacity:var(--tui-disabled-opacity)}._hoverable[_nghost-%COMP%]{cursor:pointer}._autocolor[_nghost-%COMP%]{color:#000c}.t-text[_ngcontent-%COMP%]{white-space:pre;overflow:hidden;text-overflow:ellipsis;padding-right:.02em}.t-tag[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:flex;width:auto;align-items:center;font:inherit;border-radius:inherit}[data-size=s][_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{height:1.25rem;padding:0 .375rem}[data-size=m][_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{height:var(--tui-height-xs);padding:0 .5rem}[data-size=l][_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{height:var(--tui-height-s);padding:0 .75rem}._editing[_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{visibility:hidden}.t-edit[_ngcontent-%COMP%]{margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;font:inherit;color:var(--tui-text-01);width:100%;height:100%;box-sizing:border-box;padding:0 .5rem}.t-edit[_ngcontent-%COMP%]:-webkit-autofill, .t-edit[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-edit[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}[data-size=s][_nghost-%COMP%]   .t-edit[_ngcontent-%COMP%]{padding:0 .375rem}[data-size=m][_nghost-%COMP%]   .t-edit[_ngcontent-%COMP%]{padding:0 .5rem}[data-size=l][_nghost-%COMP%]   .t-edit[_ngcontent-%COMP%]{padding:0 .75rem}.t-icon[_ngcontent-%COMP%]{width:1rem;height:100%;cursor:pointer;pointer-events:all;opacity:var(--tui-disabled-opacity);-webkit-margin-start:.25rem;margin-inline-start:.25rem;-webkit-margin-end:-.25rem;margin-inline-end:-.25rem}.t-icon[_ngcontent-%COMP%]:hover{opacity:1}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{-webkit-margin-start:0;margin-inline-start:0}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]     svg{transform:scale(.75)}.t-content[_ngcontent-%COMP%]{width:1rem;height:1rem;-webkit-margin-end:.25rem;margin-inline-end:.25rem}"],
    changeDetection: 0
  });
  return TuiTagComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiTagModule = /*#__PURE__*/(() => {
  class TuiTagModule {}
  TuiTagModule.ɵfac = function TuiTagModule_Factory(t) {
    return new (t || TuiTagModule)();
  };
  TuiTagModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiTagModule
  });
  TuiTagModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiSvgModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiLoaderModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__.PolymorpheusModule]]
  });
  return TuiTagModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-components-tag.js.map

/***/ }),

/***/ 7939:
/*!*******************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-components-toggle.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_TOGGLE_DEFAULT_OPTIONS: () => (/* binding */ TUI_TOGGLE_DEFAULT_OPTIONS),
/* harmony export */   TUI_TOGGLE_OPTIONS: () => (/* binding */ TUI_TOGGLE_OPTIONS),
/* harmony export */   TuiToggleComponent: () => (/* binding */ TuiToggleComponent),
/* harmony export */   TuiToggleModule: () => (/* binding */ TuiToggleModule),
/* harmony export */   tuiToggleOptionsProvider: () => (/* binding */ tuiToggleOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/cdk */ 5690);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/cdk */ 160);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @taiga-ui/cdk */ 5974);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @taiga-ui/cdk */ 713);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 4226);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 6470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ 1976);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @taiga-ui/cdk */ 5777);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core */ 2694);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/core */ 9313);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/core */ 3585);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 4311);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6733);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6254);













/** Default values for the toggle options. */
const _c0 = ["focusableElement"];
function TuiToggleComponent_tui_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-loader", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inheritColor", true)("showLoader", ctx_r0.value)("size", ctx_r0.loaderSize);
  }
}
function TuiToggleComponent_span_3_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 10);
  }
  if (rf & 2) {
    const src_r6 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r6);
  }
}
const _c1 = function (a0) {
  return {
    $implicit: a0
  };
};
function TuiToggleComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiToggleComponent_span_3_tui_svg_1_Template, 1, 1, "tui-svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r1.iconOn)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.size));
  }
}
function TuiToggleComponent_tui_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-loader", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inheritColor", true)("showLoader", !ctx_r2.value)("size", ctx_r2.loaderSize);
  }
}
function TuiToggleComponent_span_6_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 12);
  }
  if (rf & 2) {
    const src_r8 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r8);
  }
}
function TuiToggleComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiToggleComponent_span_6_tui_svg_1_Template, 1, 1, "tui-svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("polymorpheusOutlet", ctx_r3.iconOff)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r3.size));
  }
}
const TUI_TOGGLE_DEFAULT_OPTIONS = {
  icons: {
    toggleOff({
      $implicit
    }) {
      return $implicit === `m` ? `tuiIconToggleOff` : `tuiIconToggleOffLarge`;
    },
    toggleOn({
      $implicit
    }) {
      return $implicit === `m` ? `tuiIconToggleOn` : `tuiIconToggleOnLarge`;
    }
  },
  appearances: {
    checked: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiAppearance.Primary,
    unchecked: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiAppearance.Secondary
  },
  singleColor: false,
  showIcons: false,
  size: `m`
};
/**
 * Default parameters for Toggle component
 */
const TUI_TOGGLE_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiCreateToken)(TUI_TOGGLE_DEFAULT_OPTIONS);
function tuiToggleOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiProvideOptions)(TUI_TOGGLE_OPTIONS, options, TUI_TOGGLE_DEFAULT_OPTIONS);
}
let TuiToggleComponent = /*#__PURE__*/(() => {
  class TuiToggleComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.AbstractTuiControl {
    constructor(control, cdr, modeDirective, options) {
      super(control, cdr);
      this.modeDirective = modeDirective;
      this.options = options;
      this.singleColor = this.options.singleColor;
      this.showIcons = this.options.showIcons;
      this.showLoader = false;
      this.size = this.options.size;
    }
    get iconOn() {
      return this.options.icons.toggleOn;
    }
    get iconOff() {
      return this.options.icons.toggleOff;
    }
    get nativeFocusableElement() {
      return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
      return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.tuiIsNativeFocused)(this.nativeFocusableElement);
    }
    get appearance() {
      return this.singleColor || this.value ? this.options.appearances.checked : this.options.appearances.unchecked;
    }
    get sizeM() {
      return this.size === 'm';
    }
    get loaderSize() {
      return this.sizeM ? 'xs' : 's';
    }
    get hostMode() {
      return this.modeDirective ? this.modeDirective.mode : null;
    }
    /** @deprecated use 'value' setter */
    onChecked(checked) {
      this.value = checked;
    }
    onFocused(focused) {
      this.updateFocused(focused);
    }
    onFocusVisible(focusVisible) {
      this.updateFocusVisible(focusVisible);
    }
    getFallbackValue() {
      return false;
    }
  }
  TuiToggleComponent.ɵfac = function TuiToggleComponent_Factory(t) {
    return new (t || TuiToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiModeDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TUI_TOGGLE_OPTIONS));
  };
  TuiToggleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TuiToggleComponent,
    selectors: [["tui-toggle"]],
    viewQuery: function TuiToggleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusableElement = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function TuiToggleComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-size", ctx.size)("data-mode", ctx.hostMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_checked", ctx.value);
      }
    },
    inputs: {
      singleColor: "singleColor",
      showIcons: "showIcons",
      showLoader: "showLoader",
      size: "size"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.tuiAsFocusableItemAccessor)(TuiToggleComponent), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiAsControl)(TuiToggleComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 9,
    vars: 16,
    consts: [["tuiWrapper", "", 3, "active", "appearance", "disabled", "focus", "hover", "invalid", "readOnly"], [1, "t-toggle"], ["class", "t-loader", 3, "inheritColor", "showLoader", "size", 4, "ngIf"], ["class", "t-icon-wrapper", 4, "ngIf"], [1, "t-circle"], ["automation-id", "tui-toggle__checkbox", "role", "switch", "type", "checkbox", 1, "t-checkbox", 3, "disabled", "id", "tuiFocusable", "tuiChecked", "tuiCheckedChange", "tuiFocusedChange", "tuiFocusVisibleChange"], ["focusableElement", ""], [1, "t-loader", 3, "inheritColor", "showLoader", "size"], [1, "t-icon-wrapper"], ["automation-id", "tui-toggle__check-icon", "class", "t-icon", 3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-toggle__check-icon", 1, "t-icon", 3, "src"], ["automation-id", "tui-toggle__cancel-icon", "class", "t-icon t-icon_off", 3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-toggle__cancel-icon", 1, "t-icon", "t-icon_off", 3, "src"]],
    template: function TuiToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiToggleComponent_tui_loader_2_Template, 1, 3, "tui-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiToggleComponent_span_3_Template, 2, 4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TuiToggleComponent_tui_loader_5_Template, 1, 3, "tui-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiToggleComponent_span_6_Template, 2, 4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiCheckedChange", function TuiToggleComponent_Template_input_tuiCheckedChange_7_listener($event) {
          return ctx.value = $event;
        })("tuiFocusedChange", function TuiToggleComponent_Template_input_tuiFocusedChange_7_listener($event) {
          return ctx.onFocused($event);
        })("tuiFocusVisibleChange", function TuiToggleComponent_Template_input_tuiFocusVisibleChange_7_listener($event) {
          return ctx.onFocusVisible($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.pseudoActive)("appearance", ctx.appearance)("disabled", ctx.computedDisabled)("focus", ctx.computedFocusVisible)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIcons && !ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIcons && !ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("id", ctx.id)("tuiFocusable", ctx.focusable)("tuiChecked", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.value);
      }
    },
    dependencies: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__.TuiLoaderComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__.TuiSvgComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_10__.TuiWrapperDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__.PolymorpheusOutletDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_13__.TuiCheckedDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.TuiFocusableDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__.TuiFocusedDirective, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_16__.TuiFocusVisibleDirective],
    styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;vertical-align:middle;overflow:hidden;border-radius:6.25rem}[data-size=m][_nghost-%COMP%]{width:2rem;height:1rem}[data-size=l][_nghost-%COMP%]{width:3rem;height:1.5rem}.t-checkbox[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;height:100%;width:100%;opacity:0;cursor:pointer}.t-checkbox[_ngcontent-%COMP%]:-webkit-autofill, .t-checkbox[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-checkbox[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}._disabled[_nghost-%COMP%]   .t-checkbox[_ngcontent-%COMP%]{pointer-events:none;cursor:default}.t-toggle[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;justify-content:center}[data-size=m][_nghost-%COMP%]   .t-toggle[_ngcontent-%COMP%]{width:3rem;height:1rem;transform:translate(-1rem)}[data-size=l][_nghost-%COMP%]   .t-toggle[_ngcontent-%COMP%]{width:4.5rem;height:1.5rem;transform:translate(-1.5rem)}._checked[_nghost-%COMP%]   .t-toggle[_ngcontent-%COMP%]{transform:translate(0)}.t-circle[_ngcontent-%COMP%]{margin:.125rem 0;flex-shrink:0;border-radius:100%;background-color:var(--tui-base-01)}._disabled[_nghost-%COMP%]   .t-circle_light[_ngcontent-%COMP%]{opacity:.24}[data-size=m][_nghost-%COMP%]   .t-circle[_ngcontent-%COMP%]{width:.75rem;height:.75rem}[data-size=l][_nghost-%COMP%]   .t-circle[_ngcontent-%COMP%]{width:1rem;height:1rem}._disabled[_nghost-%COMP%]   .t-circle[_ngcontent-%COMP%]{background-color:var(--tui-base-01)}[_nghost-%COMP%]:not(._checked)   .t-loader[_ngcontent-%COMP%]{color:var(--tui-base-06)}[_nghost-%COMP%]:not(._checked)._disabled   .t-loader[_ngcontent-%COMP%]{color:var(--tui-base-05)}[_nghost-%COMP%]:not(._checked)[data-mode=onDark]   .t-loader[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}[_nghost-%COMP%]:not(._checked)[data-mode=onDark]._disabled   .t-loader[_ngcontent-%COMP%]{color:var(--tui-clear-inverse-active)}[_nghost-%COMP%]:not(._checked)[data-mode=onLight]   .t-loader[_ngcontent-%COMP%]{color:var(--tui-text-03)}[_nghost-%COMP%]:not(._checked)[data-mode=onLight]._disabled   .t-loader[_ngcontent-%COMP%]{color:var(--tui-clear-active)}[data-size=m][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%]{width:.75rem;margin:0 .2rem;transform:scale(.75)}[data-size=l][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%]{width:1rem;margin:0 .25rem}.t-icon-wrapper[_ngcontent-%COMP%]{display:flex}.t-icon[_ngcontent-%COMP%]{opacity:.8}.t-icon_off[_ngcontent-%COMP%]{color:var(--tui-base-06)}._disabled[_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-base-05)}[data-mode=onDark][_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark]._disabled[_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-clear-inverse-active)}[data-mode=onLight][_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight]._disabled[_nghost-%COMP%]   .t-icon_off[_ngcontent-%COMP%]{color:var(--tui-clear-active)}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1rem;transform:scale(.75)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{margin:0 .125rem;width:1.5rem;height:1.5rem}[_nghost-%COMP%]:hover   .t-icon[_ngcontent-%COMP%]{opacity:1}"],
    changeDetection: 0
  });
  return TuiToggleComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiToggleModule = /*#__PURE__*/(() => {
  class TuiToggleModule {}
  TuiToggleModule.ɵfac = function TuiToggleModule_Factory(t) {
    return new (t || TuiToggleModule)();
  };
  TuiToggleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiToggleModule
  });
  TuiToggleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__.TuiFocusedModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.TuiFocusableModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_17__.TuiPressedModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_16__.TuiFocusVisibleModule, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_13__.TuiCheckedModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_10__.TuiWrapperModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__.TuiSvgModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__.TuiLoaderModule, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__.PolymorpheusModule]]
  });
  return TuiToggleModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-components-toggle.js.map

/***/ }),

/***/ 3242:
/*!***********************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-constants.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATE_TIME_SEPARATOR: () => (/* binding */ DATE_TIME_SEPARATOR),
/* harmony export */   DEFAULT_ROUTER_LINK_OPTIONS: () => (/* binding */ DEFAULT_ROUTER_LINK_OPTIONS),
/* harmony export */   EMPTY_MASK: () => (/* binding */ EMPTY_MASK),
/* harmony export */   GROUP_CLASS_NAMES: () => (/* binding */ GROUP_CLASS_NAMES),
/* harmony export */   MASK_AFTER_CODE_REGEXP: () => (/* binding */ MASK_AFTER_CODE_REGEXP),
/* harmony export */   MAX_DAY_RANGE_LENGTH_MAPPER: () => (/* binding */ MAX_DAY_RANGE_LENGTH_MAPPER),
/* harmony export */   MAX_TIME_VALUES: () => (/* binding */ MAX_TIME_VALUES),
/* harmony export */   TUI_DATE_MODE_MASKITO_ADAPTER: () => (/* binding */ TUI_DATE_MODE_MASKITO_ADAPTER),
/* harmony export */   TUI_FLOATING_PRECISION: () => (/* binding */ TUI_FLOATING_PRECISION),
/* harmony export */   TUI_PHONE_MASK: () => (/* binding */ TUI_PHONE_MASK),
/* harmony export */   TUI_TIME_MASK: () => (/* binding */ TUI_TIME_MASK)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 2490);


const TUI_DATE_MODE_MASKITO_ADAPTER = {
  DMY: `dd/mm/yyyy`,
  MDY: `mm/dd/yyyy`,
  YMD: `yyyy/mm/dd`
};
const DATE_TIME_SEPARATOR = `, `;

/**
 * @deprecated Use {@link https://github.com/taiga-family/maskito Maskito} instead
 * TODO: delete in v4.0
 */
const EMPTY_MASK = {
  mask() {
    return false;
  }
};

/**
 * @deprecated unused constant
 * TODO: delete in v4.0
 */
const GROUP_CLASS_NAMES = [`_active`, `_disabled`, `_focused`, `_focus-visible`, `_hosted_dropdown_focused`, `ng-invalid`, `ng-touched`, `_pressed`, `_readonly`];
const MASK_AFTER_CODE_REGEXP = /\([#]+\)|[#\- ]/g;
const TUI_PHONE_MASK = [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.CHAR_PLUS, `7`, ` `, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, ` `, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.CHAR_HYPHEN, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.CHAR_HYPHEN, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP];
/**
 * @deprecated Use {@link https://maskito.dev/kit/time Time} from {@link https://github.com/taiga-family/maskito Maskito} instead
 * TODO: delete in v4.0
 */
const TUI_TIME_MASK = [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, `:`, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP];

/**
 * Used as a limit for eliminating JS issues with floating point math
 */
const TUI_FLOATING_PRECISION = 7;
const MAX_DAY_RANGE_LENGTH_MAPPER = (min, value, maxLength, backwards) => {
  if (!(value === null || value === void 0 ? void 0 : value.isSingleDay) || !maxLength) {
    return min;
  }
  const negativeMaxLength = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiObjectFromEntries)(Object.entries(maxLength).map(([key, value]) => [key, -value]));
  const dateShift = value.from.append(backwards ? negativeMaxLength : maxLength).append({
    day: !backwards ? -1 : 1
  });
  if (backwards) {
    return dateShift.dayBefore(min) ? min : dateShift;
  }
  if (!min) {
    return dateShift;
  }
  return dateShift.dayAfter(min) ? min : dateShift;
};
const MAX_TIME_VALUES = {
  HH: 23,
  MM: 59,
  SS: 59,
  MS: 999
};
const DEFAULT_ROUTER_LINK_OPTIONS = {
  fragment: ``,
  preserveFragment: true,
  replaceUrl: false,
  skipLocationChange: false,
  queryParams: null,
  useHref: false,
  target: null
};

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-constants.js.map

/***/ }),

/***/ 24:
/*!***************************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-directives-value-accessor.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TuiValueAccessorDirective: () => (/* binding */ TuiValueAccessorDirective),
/* harmony export */   TuiValueAccessorModule: () => (/* binding */ TuiValueAccessorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _taiga_ui_kit_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/kit/providers */ 8388);



let TuiValueAccessorDirective = /*#__PURE__*/(() => {
  class TuiValueAccessorDirective {}
  TuiValueAccessorDirective.ɵfac = function TuiValueAccessorDirective_Factory(t) {
    return new (t || TuiValueAccessorDirective)();
  };
  TuiValueAccessorDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TuiValueAccessorDirective,
    selectors: [["", "tuiValueAccessor", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_kit_providers__WEBPACK_IMPORTED_MODULE_1__.TUI_VALUE_ACCESSOR_PROVIDER])]
  });
  return TuiValueAccessorDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TuiValueAccessorModule = /*#__PURE__*/(() => {
  class TuiValueAccessorModule {}
  TuiValueAccessorModule.ɵfac = function TuiValueAccessorModule_Factory(t) {
    return new (t || TuiValueAccessorModule)();
  };
  TuiValueAccessorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TuiValueAccessorModule
  });
  TuiValueAccessorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return TuiValueAccessorModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-directives-value-accessor.js.map

/***/ }),

/***/ 8388:
/*!***********************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-providers.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIXED_DROPDOWN_CONTROLLER_PROVIDER: () => (/* binding */ FIXED_DROPDOWN_CONTROLLER_PROVIDER),
/* harmony export */   TUI_MONTH_FORMATTER_PROVIDER: () => (/* binding */ TUI_MONTH_FORMATTER_PROVIDER),
/* harmony export */   TUI_VALUE_ACCESSOR_PROVIDER: () => (/* binding */ TUI_VALUE_ACCESSOR_PROVIDER)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 8817);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 7383);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 8394);
/* harmony import */ var _taiga_ui_kit_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/kit/tokens */ 4119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1209);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9401);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3226);






const TUI_MONTH_FORMATTER_PROVIDER = {
  provide: _taiga_ui_kit_tokens__WEBPACK_IMPORTED_MODULE_0__.TUI_MONTH_FORMATTER,
  deps: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiMonthPipe],
  useFactory: pipe => month => month ? pipe.transform(month).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(formatted => `${formatted} ${month.formattedYear}`)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(``)
};
const FIXED_DROPDOWN_CONTROLLER_PROVIDER = (0,_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.tuiDropdownOptionsProvider)({
  limitWidth: `fixed`,
  align: `right`
});
const TUI_VALUE_ACCESSOR_PROVIDER = {
  provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TUI_VALUE_ACCESSOR,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_6__.Self(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR]],
  useFactory: rxjs__WEBPACK_IMPORTED_MODULE_8__.identity
};

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-providers.js.map

/***/ }),

/***/ 4119:
/*!********************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-tokens.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TUI_CALENDAR_DATE_STREAM: () => (/* binding */ TUI_CALENDAR_DATE_STREAM),
/* harmony export */   TUI_CALENDAR_MONTHS: () => (/* binding */ TUI_CALENDAR_MONTHS),
/* harmony export */   TUI_CANCEL_WORD: () => (/* binding */ TUI_CANCEL_WORD),
/* harmony export */   TUI_CHOOSE_DAY_OR_RANGE_TEXTS: () => (/* binding */ TUI_CHOOSE_DAY_OR_RANGE_TEXTS),
/* harmony export */   TUI_COPY_TEXTS: () => (/* binding */ TUI_COPY_TEXTS),
/* harmony export */   TUI_COUNTRIES: () => (/* binding */ TUI_COUNTRIES),
/* harmony export */   TUI_COUNTRIES_MASKS: () => (/* binding */ TUI_COUNTRIES_MASKS),
/* harmony export */   TUI_DATE_RANGE_VALUE_TRANSFORMER: () => (/* binding */ TUI_DATE_RANGE_VALUE_TRANSFORMER),
/* harmony export */   TUI_DATE_TEXTS: () => (/* binding */ TUI_DATE_TEXTS),
/* harmony export */   TUI_DATE_TIME_VALUE_TRANSFORMER: () => (/* binding */ TUI_DATE_TIME_VALUE_TRANSFORMER),
/* harmony export */   TUI_DATE_VALUE_TRANSFORMER: () => (/* binding */ TUI_DATE_VALUE_TRANSFORMER),
/* harmony export */   TUI_DEFAULT_ITEMS_HANDLERS: () => (/* binding */ TUI_DEFAULT_ITEMS_HANDLERS),
/* harmony export */   TUI_DIGITAL_INFORMATION_UNITS: () => (/* binding */ TUI_DIGITAL_INFORMATION_UNITS),
/* harmony export */   TUI_DONE_WORD: () => (/* binding */ TUI_DONE_WORD),
/* harmony export */   TUI_FILE_TEXTS: () => (/* binding */ TUI_FILE_TEXTS),
/* harmony export */   TUI_FROM_TO_TEXTS: () => (/* binding */ TUI_FROM_TO_TEXTS),
/* harmony export */   TUI_HIDE_TEXT: () => (/* binding */ TUI_HIDE_TEXT),
/* harmony export */   TUI_INPUT_DATE_DEFAULT_OPTIONS: () => (/* binding */ TUI_INPUT_DATE_DEFAULT_OPTIONS),
/* harmony export */   TUI_INPUT_DATE_OPTIONS: () => (/* binding */ TUI_INPUT_DATE_OPTIONS),
/* harmony export */   TUI_INPUT_FILE_TEXTS: () => (/* binding */ TUI_INPUT_FILE_TEXTS),
/* harmony export */   TUI_ITEMS_HANDLERS: () => (/* binding */ TUI_ITEMS_HANDLERS),
/* harmony export */   TUI_MOBILE_CALENDAR: () => (/* binding */ TUI_MOBILE_CALENDAR),
/* harmony export */   TUI_MONTH_FORMATTER: () => (/* binding */ TUI_MONTH_FORMATTER),
/* harmony export */   TUI_MORE_WORD: () => (/* binding */ TUI_MORE_WORD),
/* harmony export */   TUI_MULTI_SELECT_TEXTS: () => (/* binding */ TUI_MULTI_SELECT_TEXTS),
/* harmony export */   TUI_OTHER_DATE_TEXT: () => (/* binding */ TUI_OTHER_DATE_TEXT),
/* harmony export */   TUI_PAGINATION_TEXTS: () => (/* binding */ TUI_PAGINATION_TEXTS),
/* harmony export */   TUI_PASSWORD_TEXTS: () => (/* binding */ TUI_PASSWORD_TEXTS),
/* harmony export */   TUI_PLUS_MINUS_TEXTS: () => (/* binding */ TUI_PLUS_MINUS_TEXTS),
/* harmony export */   TUI_PROMPT_WORDS: () => (/* binding */ TUI_PROMPT_WORDS),
/* harmony export */   TUI_SHOW_ALL_TEXT: () => (/* binding */ TUI_SHOW_ALL_TEXT),
/* harmony export */   TUI_TAB_MARGIN: () => (/* binding */ TUI_TAB_MARGIN),
/* harmony export */   TUI_TIME_TEXTS: () => (/* binding */ TUI_TIME_TEXTS),
/* harmony export */   TUI_VALIDATION_ERRORS: () => (/* binding */ TUI_VALIDATION_ERRORS),
/* harmony export */   tuiDateStreamWithTransformer: () => (/* binding */ tuiDateStreamWithTransformer),
/* harmony export */   tuiInputDateOptionsProvider: () => (/* binding */ tuiInputDateOptionsProvider),
/* harmony export */   tuiItemsHandlersProvider: () => (/* binding */ tuiItemsHandlersProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3226);
/* harmony import */ var _taiga_ui_kit_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/kit/utils */ 1470);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ 8715);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ 8029);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ 7007);
/* harmony import */ var _taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/i18n */ 1196);
/* harmony import */ var _taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/i18n */ 5144);






/**
 * Stream that emits calendar data change
 */
const TUI_CALENDAR_DATE_STREAM = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(`[TUI_CALENDAR_DATE_STREAM]`);
function tuiDateStreamWithTransformer(transformer) {
  return {
    provide: TUI_CALENDAR_DATE_STREAM,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), transformer]],
    useFactory: _taiga_ui_kit_utils__WEBPACK_IMPORTED_MODULE_2__.tuiControlValueFactory
  };
}
const TUI_COUNTRIES_MASKS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateToken)({
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AD]: `+376###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AE]: `+971-##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AF]: `+93##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AG]: `+1(268) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AI]: `+1(264) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AL]: `+355(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AM]: `+374##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AO]: `+244(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AR]: `+54(###) ####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AT]: `+43(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AU]: `+61#-####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AW]: `+297###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.AZ]: `+994##-###-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BA]: `+387 ###-####-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BB]: `+1(246) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BD]: `+880##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BE]: `+32(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BF]: `+226##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BG]: `+359(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BH]: `+973####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BI]: `+257##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BJ]: `+229##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BL]: `+590 ## ## ## ## ##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BM]: `+1(441) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BN]: `+673###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BO]: `+591#-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BQ]: `+599-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BR]: `+55(##) ####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BS]: `+1(242) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BT]: `+975#-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BW]: `+267##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BY]: `+375(##) ###-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.BZ]: `+501###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CA]: `+1(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CD]: `+243(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CF]: `+236-##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CG]: `+242##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CH]: `+41##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CI]: `+225##-##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CL]: `+56#-####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CM]: `+237#####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CN]: `+86(###) ####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CO]: `+57(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CR]: `+506####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CU]: `+53#-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CV]: `+238(###) ##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CW]: `+5999-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CY]: `+357##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.CZ]: `+420(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.DE]: `+49(###) ###-###-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.DJ]: `+253##-##-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.DK]: `+45##-##-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.DM]: `+1(767) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.DO]: `+1(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.DZ]: `+213##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.EC]: `+593##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.EE]: `+372####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.EG]: `+20(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ER]: `+291#-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ES]: `+34(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ET]: `+251##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.FI]: `+358(###) ###-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.FJ]: `+679##-#####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.FK]: `+500#####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.FM]: `+691###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.FR]: `+33 ## ## ## ## ##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GA]: `+241##-##-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GB]: `+44##-####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GD]: `+1(473) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GE]: `+995(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GF]: `+594 ## ## ## ## ##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GH]: `+233(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GI]: `+350###-#####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GL]: `+299##-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GM]: `+220(###) ##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GN]: `+224##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GP]: `+590 ## ## ## ## ##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GQ]: `+240##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GR]: `+30(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GT]: `+502#-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GW]: `+245#-######`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.GY]: `+592###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.HK]: `+852####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.HN]: `+504####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.HR]: `+385##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.HT]: `+509##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.HU]: `+36(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ID]: `+62(###) ###-##-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.IE]: `+353(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.IL]: `+972##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.IN]: `+91(####) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.IQ]: `+964(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.IR]: `+98(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.IS]: `+354###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.IT]: `+39(###) ####-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.JM]: `+1(876) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.JO]: `+962#-####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.JP]: `+81-##-####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KE]: `+254###-######`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KG]: `+996(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KH]: `+855##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KM]: `+269##-#####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KN]: `+1(869) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KP]: `+850####-#############`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KR]: `+82##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KW]: `+965####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KY]: `+1(345) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.KZ]: `+7(###) ###-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LA]: `+856##-##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LB]: `+961##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LC]: `+1(758) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LI]: `+423(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LK]: `+94##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LR]: `+231##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LS]: `+266#-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LT]: `+370(###) ##-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LU]: `+352(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LV]: `+371##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.LY]: `+218##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MA]: `+212##-####-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MC]: `+377###-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MD]: `+373####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ME]: `+382##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MF]: `+590 ## ## ## ## ##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MG]: `+261##-##-#####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MK]: `+389##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ML]: `+223##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MM]: `+95##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MN]: `+976##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MO]: `+853####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MQ]: `+596 ## ## ## ## ##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MR]: `+222##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MS]: `+1(664) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MT]: `+356####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MU]: `+230####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MV]: `+960###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MW]: `+265#-####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MX]: `+52(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MY]: `+60(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.MZ]: `+258##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.NA]: `+264##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.NC]: `+687 ### ###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.NE]: `+227##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.NG]: `+234(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.NI]: `+505####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.NL]: `+31##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.NO]: `+47(###) ##-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.NP]: `+977##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.NZ]: `+64(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.OM]: `+968##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PA]: `+507###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PE]: `+51(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PF]: `+689 ## ## ## ##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PG]: `+675(###) ##-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PH]: `+63(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PK]: `+92(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PL]: `+48(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PT]: `+351##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PW]: `+680###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.PY]: `+595(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.QA]: `+974####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.RE]: `+262 ## ## ## ## ##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.RO]: `+40##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.RS]: `+381##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.RU]: `+7### ###-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.RW]: `+250(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SA]: `+966#-####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SB]: `+677###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SC]: `+248#-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SD]: `+249##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SE]: `+46##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SG]: `+65####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SH]: `+290####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SI]: `+386##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SK]: `+421(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SL]: `+232##-######`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SM]: `+378####-######`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SN]: `+221##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SO]: `+252##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SR]: `+597###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ST]: `+239##-#####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SV]: `+503##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SX]: `+1(721) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SY]: `+963##-####-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.SZ]: `+268##-##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TC]: `+1(649) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TD]: `+235##-##-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TG]: `+228##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TH]: `+66##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TJ]: `+992##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TL]: `+670###-#####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TM]: `+993#-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TN]: `+216##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TO]: `+676#####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TR]: `+90(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TT]: `+1(868) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TW]: `+886#-####-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.TZ]: `+255##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.UA]: `+380(##) ###-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.UG]: `+256(###) ###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.US]: `+1(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.UY]: `+598#-###-##-##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.UZ]: `+998##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.VC]: `+1(784) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.VE]: `+58(###) ###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.VG]: `+1(284)###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.VN]: `+84(###) ####-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.VU]: `+678##-#####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.WS]: `+685##-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.XK]: `+383##-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.YE]: `+967###-###-###`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.YT]: `+262 ## ## ## ## ##`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ZA]: `+27##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ZM]: `+260##-###-####`,
  [_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.TuiCountryIsoCode.ZW]: `+263#-######`
});

// TODO: Refactor to use `AbstractTuiValueTransformer` and add ability to provide it for all controls
/**
 * Control value transformer of TuiDay to custom value format for InputDate* components
 */
const TUI_DATE_VALUE_TRANSFORMER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(`[TUI_DATE_VALUE_TRANSFORMER]`);
/**
 * Control value transformer for InputDateRange component
 */
const TUI_DATE_RANGE_VALUE_TRANSFORMER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(`[TUI_DATE_RANGE_VALUE_TRANSFORMER]`);
/**
 * Control value transformer for InputDateTime component
 */
const TUI_DATE_TIME_VALUE_TRANSFORMER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(`[TUI_DATE_TIME_VALUE_TRANSFORMER]`);
const TUI_PROMPT_WORDS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`prompt`));
const TUI_CANCEL_WORD = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`cancel`));
const TUI_DONE_WORD = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`done`));
const TUI_MORE_WORD = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`more`));
const TUI_HIDE_TEXT = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`hide`));
const TUI_SHOW_ALL_TEXT = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`showAll`));
const TUI_OTHER_DATE_TEXT = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`otherDate`));
const TUI_CHOOSE_DAY_OR_RANGE_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`mobileCalendarTexts`));
const TUI_FROM_TO_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`range`));
const TUI_PLUS_MINUS_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`countTexts`));
const TUI_TIME_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`time`));
const TUI_DATE_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`dateTexts`));
const TUI_DIGITAL_INFORMATION_UNITS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`digitalInformationUnits`));
const TUI_COPY_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`copyTexts`));
const TUI_PASSWORD_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`passwordTexts`));
const TUI_CALENDAR_MONTHS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`shortCalendarMonths`));
const TUI_FILE_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`fileTexts`));
const TUI_PAGINATION_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`pagination`));
const TUI_INPUT_FILE_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`inputFileTexts`));
const TUI_MULTI_SELECT_TEXTS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`multiSelectTexts`));
const TUI_COUNTRIES = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateTokenFromFactory)((0,_taiga_ui_i18n__WEBPACK_IMPORTED_MODULE_5__.tuiExtractI18n)(`countries`));
const TUI_INPUT_DATE_DEFAULT_OPTIONS = {
  icon: ({
    $implicit
  }) => $implicit === `s` ? `tuiIconCalendar` : `tuiIconCalendarLarge`,
  min: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TUI_FIRST_DAY,
  max: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.TUI_LAST_DAY,
  nativePicker: false
};
/**
 * Default parameters for InputDate component
 */
const TUI_INPUT_DATE_OPTIONS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateToken)(TUI_INPUT_DATE_DEFAULT_OPTIONS);
function tuiInputDateOptionsProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiProvideOptions)(TUI_INPUT_DATE_OPTIONS, options, TUI_INPUT_DATE_DEFAULT_OPTIONS);
}
const TUI_DEFAULT_ITEMS_HANDLERS = {
  stringify: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TUI_DEFAULT_STRINGIFY,
  identityMatcher: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.TUI_DEFAULT_IDENTITY_MATCHER,
  disabledItemHandler: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__.ALWAYS_FALSE_HANDLER
};
/**
 * Default items handlers for components
 */
const TUI_ITEMS_HANDLERS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateToken)(TUI_DEFAULT_ITEMS_HANDLERS);
function tuiItemsHandlersProvider(options) {
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiProvideOptions)(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}

/**
 * A component for mobile data picker
 */
const TUI_MOBILE_CALENDAR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(`[TUI_MOBILE_CALENDAR]`);

/**
 * A function to get localized formatted month
 */
const TUI_MONTH_FORMATTER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(`[TUI_MONTH_FORMATTER]`);

/**
 * Margin between tabs
 */
const TUI_TAB_MARGIN = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateToken)(24);

/**
 * Validation errors
 */
const TUI_VALIDATION_ERRORS = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.tuiCreateToken)({});

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-tokens.js.map

/***/ }),

/***/ 1309:
/*!**************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-utils-format.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tuiStringHashToHsl: () => (/* binding */ tuiStringHashToHsl)
/* harmony export */ });
/**
 * Converts a string to an HSL color
 * @param value string to convert
 * @return HSL color string
 */
// @bad TODO: convert stringHashToHsl to stringHashToRgb
function tuiStringHashToHsl(value) {
  if (value === ``) {
    return ``;
  }
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
    hash &= hash;
  }
  const hue = hash % 360;
  const saturation = 60 + hash % 5;
  const lightness = 80 + hash % 5;
  return `hsl(${hue},${saturation}%,${lightness}%)`;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-utils-format.js.map

/***/ }),

/***/ 4238:
/*!************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-utils-math.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tuiHorizontalDirectionToNumber: () => (/* binding */ tuiHorizontalDirectionToNumber),
/* harmony export */   tuiKeyStepValueToPercentage: () => (/* binding */ tuiKeyStepValueToPercentage),
/* harmony export */   tuiPercentageToKeyStepValue: () => (/* binding */ tuiPercentageToKeyStepValue)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ 5618);
/* harmony import */ var _taiga_ui_kit_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/kit/constants */ 3242);



/**
 * @internal
 */
function tuiHorizontalDirectionToNumber(direction) {
  switch (direction) {
    case `left`:
      return -1;
    case `right`:
      return 1;
  }
}
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
  const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
  const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
  const upperStep = keySteps[keyStepUpperIndex] || keySteps[keySteps.length - 1];
  return [lowerStep, upperStep];
}
function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
  const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
  const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
  return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiRound)(controlValue, _taiga_ui_kit_constants__WEBPACK_IMPORTED_MODULE_1__.TUI_FLOATING_PRECISION);
}
function tuiKeyStepValueToPercentage(value, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
  const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
  return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-utils-math.js.map

/***/ }),

/***/ 1470:
/*!*********************************************************************************!*\
  !*** ./node_modules/@taiga-ui/kit/fesm2015/taiga-ui-kit-utils-miscellaneous.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tuiControlValueFactory: () => (/* binding */ tuiControlValueFactory),
/* harmony export */   tuiCreateDefaultDayRangePeriods: () => (/* binding */ tuiCreateDefaultDayRangePeriods),
/* harmony export */   tuiCreateTimePeriods: () => (/* binding */ tuiCreateTimePeriods),
/* harmony export */   tuiGetPrecision: () => (/* binding */ tuiGetPrecision),
/* harmony export */   tuiIsFlat: () => (/* binding */ tuiIsFlat)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ 8029);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ 4521);
/* harmony import */ var _taiga_ui_kit_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/kit/classes */ 4752);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1209);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2425);




function tuiCreateDefaultDayRangePeriods(periodTitles = [`For all the time`, `Today`, `Yesterday`, `Current week`, `Current month`, `Previous month`]) {
  const today = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDay.currentLocal();
  const yesterday = today.append({
    day: -1
  });
  const startOfWeek = today.append({
    day: -today.dayOfWeek()
  });
  const endOfWeek = startOfWeek.append({
    day: 6
  });
  const startOfMonth = today.append({
    day: 1 - today.day
  });
  const endOfMonth = startOfMonth.append({
    month: 1,
    day: -1
  });
  const startOfLastMonth = startOfMonth.append({
    month: -1
  });
  return [new _taiga_ui_kit_classes__WEBPACK_IMPORTED_MODULE_1__.TuiDayRangePeriod(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDayRange(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TUI_FIRST_DAY, today), periodTitles[0]), new _taiga_ui_kit_classes__WEBPACK_IMPORTED_MODULE_1__.TuiDayRangePeriod(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDayRange(today, today), periodTitles[1]), new _taiga_ui_kit_classes__WEBPACK_IMPORTED_MODULE_1__.TuiDayRangePeriod(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDayRange(yesterday, yesterday), periodTitles[2]), new _taiga_ui_kit_classes__WEBPACK_IMPORTED_MODULE_1__.TuiDayRangePeriod(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDayRange(startOfWeek, endOfWeek), periodTitles[3]), new _taiga_ui_kit_classes__WEBPACK_IMPORTED_MODULE_1__.TuiDayRangePeriod(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDayRange(startOfMonth, endOfMonth), periodTitles[4]), new _taiga_ui_kit_classes__WEBPACK_IMPORTED_MODULE_1__.TuiDayRangePeriod(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDayRange(startOfLastMonth, startOfMonth.append({
    day: -1
  })), periodTitles[5])];
}
function tuiCreateTimePeriods(minHour = 0, maxHour = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.HOURS_IN_DAY, minutes = [0, 30]) {
  const timeArray = [];
  for (let i = minHour; i < maxHour; i++) {
    for (const minute of minutes) {
      const time = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiTime(i, minute);
      timeArray.push(time);
    }
  }
  return timeArray;
}

/**
 * @return fractional length
 */
function tuiGetPrecision(num) {
  const [, fractionPart = ``] = String(num).split(`.`);
  return fractionPart.length;
}
function tuiIsFlat(items) {
  return !Array.isArray(items[0]);
}

/**
 * @internal
 */
function tuiControlValueFactory(control, valueTransformer) {
  return control ? (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiControlValue)(control).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => valueTransformer ? valueTransformer.fromControlValue(value) : value)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=taiga-ui-kit-utils-miscellaneous.js.map

/***/ }),

/***/ 4553:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/never.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NEVER: () => (/* binding */ NEVER),
/* harmony export */   never: () => (/* binding */ never)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 8132);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ 6811);


const NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(_util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);
function never() {
  return NEVER;
}
//# sourceMappingURL=never.js.map

/***/ }),

/***/ 4249:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounce.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 6142);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 6811);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 134);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 6974);




function debounce(durationSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    let durationSubscriber = null;
    const emit = () => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      hasValue = true;
      lastValue = value;
      durationSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, emit, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop);
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber);
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = durationSubscriber = null;
    }));
  });
}
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ 4900:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delay: () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8634);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delayWhen */ 5839);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 553);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__.delayWhen)(() => duration);
}
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ 5839:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delayWhen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delayWhen: () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 6543);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./take */ 1813);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignoreElements */ 1105);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapTo */ 7376);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeMap */ 9342);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 6974);






function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__.ignoreElements)()), source.pipe(delayWhen(delayDurationSelector)));
  }
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((value, index) => (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(delayDurationSelector(value, index)).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_5__.mapTo)(value)));
}
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ 1105:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ignoreElements: () => (/* binding */ ignoreElements)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 6142);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 134);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 6811);



function ignoreElements() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop));
  });
}
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ 4842:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/repeat.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   repeat: () => (/* binding */ repeat)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/empty */ 453);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 6142);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OperatorSubscriber */ 134);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 6974);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 553);





function repeat(countOrConfig) {
  let count = Infinity;
  let delay;
  if (countOrConfig != null) {
    if (typeof countOrConfig === 'object') {
      ({
        count = Infinity,
        delay
      } = countOrConfig);
    } else {
      count = countOrConfig;
    }
  }
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let soFar = 0;
    let sourceSub;
    const resubscribe = () => {
      sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
      sourceSub = null;
      if (delay != null) {
        const notifier = typeof delay === 'number' ? (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(delay) : (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(delay(soFar));
        const notifierSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__.createOperatorSubscriber)(subscriber, () => {
          notifierSubscriber.unsubscribe();
          subscribeToSource();
        });
        notifier.subscribe(notifierSubscriber);
      } else {
        subscribeToSource();
      }
    };
    const subscribeToSource = () => {
      let syncUnsub = false;
      sourceSub = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__.createOperatorSubscriber)(subscriber, undefined, () => {
        if (++soFar < count) {
          if (sourceSub) {
            resubscribe();
          } else {
            syncUnsub = true;
          }
        } else {
          subscriber.complete();
        }
      }));
      if (syncUnsub) {
        resubscribe();
      }
    };
    subscribeToSource();
  });
}
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ 4776:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skip: () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ 5333);

function skip(count) {
  return (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)((_, index) => count <= index);
}
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ 3985:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 6142);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 134);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 6974);



function throttle(durationSelector, config) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    const {
      leading = true,
      trailing = false
    } = config !== null && config !== void 0 ? config : {};
    let hasValue = false;
    let sendValue = null;
    let throttled = null;
    let isComplete = false;
    const endThrottling = () => {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    const cleanupThrottling = () => {
      throttled = null;
      isComplete && subscriber.complete();
    };
    const startThrottle = value => throttled = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, endThrottling, cleanupThrottling));
    const send = () => {
      if (hasValue) {
        hasValue = false;
        const value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, () => {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ 2739:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttleTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttleTime: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8634);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ 3985);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 553);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler, config) {
  const duration$ = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(duration, scheduler);
  return (0,_throttle__WEBPACK_IMPORTED_MODULE_2__.throttle)(() => duration$, config);
}
//# sourceMappingURL=throttleTime.js.map

/***/ })

}]);