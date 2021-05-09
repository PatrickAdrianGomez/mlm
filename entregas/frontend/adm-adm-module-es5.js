(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm-adm-module"],{

/***/ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js ***!
  \******************************************************************************/
/*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickType", function() { return ClickType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function() { return ColumnChangesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMode", function() { return ColumnMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuType", function() { return ContextmenuType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function() { return DataTableBodyCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function() { return DataTableBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function() { return DataTableBodyRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function() { return DataTableColumnCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function() { return DataTableColumnCellTreeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function() { return DataTableColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function() { return DataTableColumnHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function() { return DataTableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function() { return DataTableFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function() { return DataTableHeaderCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function() { return DataTableHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function() { return DataTablePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function() { return DataTableRowWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function() { return DataTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function() { return DataTableSummaryRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function() { return DatatableFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function() { return DatatableGroupHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function() { return DatatableGroupHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function() { return DatatableRowDetailDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function() { return DatatableRowDetailTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function() { return DimensionsHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function() { return NgxDatatableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return OrderableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function() { return ResizeableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeightCache", function() { return RowHeightCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function() { return ScrollbarHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function() { return adjustColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function() { return columnGroupWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function() { return columnTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPin", function() { return columnsByPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function() { return columnsByPinArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function() { return columnsTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deCamelCase", function() { return deCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepValueGetter", function() { return deepValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function() { return emptyStringGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function() { return forceFillColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function() { return getTotalFlexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function() { return getVendorPrefixedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterForProp", function() { return getterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function() { return groupRowsByParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSortDir", function() { return nextSortDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function() { return numericIndexGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function() { return optionalGetterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByComparator", function() { return orderByComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRows", function() { return selectRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function() { return selectRowsBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function() { return setColumnDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function() { return shallowValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRows", function() { return sortRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleable", function() { return throttleable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTemplates", function() { return translateTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateXY", function() { return translateXY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
var ScrollbarHelper = /** @class */ (function () {
    function ScrollbarHelper(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    /**
     * @return {?}
     */
    ScrollbarHelper.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        /** @type {?} */
        var widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        /** @type {?} */
        var inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        /** @type {?} */
        var widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    };
    ScrollbarHelper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ScrollbarHelper.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    return ScrollbarHelper;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
var DimensionsHelper = /** @class */ (function () {
    function DimensionsHelper() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    DimensionsHelper.prototype.getDimensions = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element.getBoundingClientRect();
    };
    DimensionsHelper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return DimensionsHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
var ColumnChangesService = /** @class */ (function () {
    function ColumnChangesService() {
        this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(ColumnChangesService.prototype, "columnInputChanges$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.columnInputChanges.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColumnChangesService.prototype.onInputChange = /**
     * @return {?}
     */
    function () {
        this.columnInputChanges.next();
    };
    ColumnChangesService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return ColumnChangesService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableFooterTemplateDirective = /** @class */ (function () {
    function DataTableFooterTemplateDirective(template) {
        this.template = template;
    }
    DataTableFooterTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-footer-template]' },] }
    ];
    /** @nocollapse */
    DataTableFooterTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return DataTableFooterTemplateDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
var VisibilityDirective = /** @class */ (function () {
    function VisibilityDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.runCheck();
    };
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
    };
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.onVisibilityChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // trigger zone recalc for columns
        this.zone.run((/**
         * @return {?}
         */
        function () {
            _this.isVisible = true;
            _this.visible.emit(true);
        }));
    };
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.runCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var check = (/**
         * @return {?}
         */
        function () {
            // https://davidwalsh.name/offsetheight-visibility
            var _a = _this.element.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
            if (offsetHeight && offsetWidth) {
                clearTimeout(_this.timeout);
                _this.onVisibilityChange();
            }
            else {
                clearTimeout(_this.timeout);
                _this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.timeout = setTimeout((/**
                     * @return {?}
                     */
                    function () { return check(); }), 50);
                }));
            }
        });
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () { return check(); }));
    };
    VisibilityDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[visibilityObserver]' },] }
    ];
    /** @nocollapse */
    VisibilityDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    VisibilityDirective.propDecorators = {
        isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.visible',] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return VisibilityDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    DraggableDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroySubscription();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event: event,
                element: this.element,
                model: this.dragModel
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // we only want to drag the inner header text
        /** @type {?} */
        var isDragElm = ((/** @type {?} */ (event.target))).classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            /** @type {?} */
            var mouseDownPos_1 = { x: event.clientX, y: event.clientY };
            /** @type {?} */
            var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) { return _this.onMouseup(ev); }));
            /** @type {?} */
            var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) { return _this.move(ev, mouseDownPos_1); }));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event: event,
                element: this.element,
                model: this.dragModel
            });
        }
    };
    /**
     * @param {?} event
     * @param {?} mouseDownPos
     * @return {?}
     */
    DraggableDirective.prototype.move = /**
     * @param {?} event
     * @param {?} mouseDownPos
     * @return {?}
     */
    function (event, mouseDownPos) {
        if (!this.isDragging)
            return;
        /** @type {?} */
        var x = event.clientX - mouseDownPos.x;
        /** @type {?} */
        var y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = x + "px";
        if (this.dragY)
            this.element.style.top = y + "px";
        this.element.classList.add('dragging');
        this.dragging.emit({
            event: event,
            element: this.element,
            model: this.dragModel
        });
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype._destroySubscription = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    DraggableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[draggable]' },] }
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    DraggableDirective.propDecorators = {
        dragEventTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dragModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dragX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dragY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DraggableDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/** @type {?} */
var MouseEvent = (/** @type {?} */ ((((/** @type {?} */ ((typeof window !== 'undefined' && window)))) || ((/** @type {?} */ (global))))
    .MouseEvent));
/** @type {?} */
var KeyboardEvent = (/** @type {?} */ ((((/** @type {?} */ ((typeof window !== 'undefined' && window)))) || ((/** @type {?} */ (global))))
    .KeyboardEvent));
/** @type {?} */
var Event = (/** @type {?} */ ((((/** @type {?} */ ((typeof window !== 'undefined' && window)))) || ((/** @type {?} */ (global)))).Event));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResizeableDirective = /** @class */ (function () {
    function ResizeableDirective(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ResizeableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var renderer2 = this.renderer;
        /** @type {?} */
        var node = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(node, 'resize-handle');
        }
        else {
            renderer2.addClass(node, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, node);
    };
    /**
     * @return {?}
     */
    ResizeableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroySubscription();
    };
    /**
     * @return {?}
     */
    ResizeableDirective.prototype.onMouseup = /**
     * @return {?}
     */
    function () {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ResizeableDirective.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var isHandle = ((/** @type {?} */ (event.target))).classList.contains('resize-handle');
        /** @type {?} */
        var initialWidth = this.element.clientWidth;
        /** @type {?} */
        var mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            /** @type {?} */
            var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) { return _this.onMouseup(); }));
            /** @type {?} */
            var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.move(e, initialWidth, mouseDownScreenX); }));
            this.subscription.add(mouseMoveSub);
        }
    };
    /**
     * @param {?} event
     * @param {?} initialWidth
     * @param {?} mouseDownScreenX
     * @return {?}
     */
    ResizeableDirective.prototype.move = /**
     * @param {?} event
     * @param {?} initialWidth
     * @param {?} mouseDownScreenX
     * @return {?}
     */
    function (event, initialWidth, mouseDownScreenX) {
        /** @type {?} */
        var movementX = event.screenX - mouseDownScreenX;
        /** @type {?} */
        var newWidth = initialWidth + movementX;
        /** @type {?} */
        var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        /** @type {?} */
        var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = newWidth + "px";
        }
    };
    /**
     * @private
     * @return {?}
     */
    ResizeableDirective.prototype._destroySubscription = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    ResizeableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[resizeable]',
                    host: {
                        '[class.resizeable]': 'resizeEnabled'
                    }
                },] }
    ];
    /** @nocollapse */
    ResizeableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ResizeableDirective.propDecorators = {
        resizeEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
    };
    return ResizeableDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderableDirective = /** @class */ (function () {
    function OrderableDirective(differs, document) {
        this.document = document;
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.differ = differs.find({}).create();
    }
    /**
     * @return {?}
     */
    OrderableDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    };
    /**
     * @return {?}
     */
    OrderableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.draggables.forEach((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        }));
    };
    /**
     * @return {?}
     */
    OrderableDirective.prototype.updateSubscriptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            /** @type {?} */
            var subscribe = (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var currentValue = _a.currentValue, previousValue = _a.previousValue;
                unsubscribe_1({ previousValue: previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(_this.onDragStart.bind(_this));
                    currentValue.dragging.subscribe(_this.onDragging.bind(_this));
                    currentValue.dragEnd.subscribe(_this.onDragEnd.bind(_this));
                }
            });
            /** @type {?} */
            var unsubscribe_1 = (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var previousValue = _a.previousValue;
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            });
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe_1);
        }
    };
    /**
     * @return {?}
     */
    OrderableDirective.prototype.onDragStart = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        this.positions = {};
        /** @type {?} */
        var i = 0;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(this.draggables.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dragger = _c.value;
                /** @type {?} */
                var elm = dragger.element;
                /** @type {?} */
                var left = parseInt(elm.offsetLeft.toString(), 0);
                this.positions[dragger.dragModel.prop] = {
                    left: left,
                    right: left + parseInt(elm.offsetWidth.toString(), 0),
                    index: i++,
                    element: elm
                };
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    OrderableDirective.prototype.onDragging = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var element = _a.element, model = _a.model, event = _a.event;
        /** @type {?} */
        var prevPos = this.positions[model.prop];
        /** @type {?} */
        var target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    OrderableDirective.prototype.onDragEnd = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var element = _a.element, model = _a.model, event = _a.event;
        /** @type {?} */
        var prevPos = this.positions[model.prop];
        /** @type {?} */
        var target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model: model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    };
    /**
     * @param {?} model
     * @param {?} event
     * @return {?}
     */
    OrderableDirective.prototype.isTarget = /**
     * @param {?} model
     * @param {?} event
     * @return {?}
     */
    function (model, event) {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var x = event.x || event.clientX;
        /** @type {?} */
        var y = event.y || event.clientY;
        /** @type {?} */
        var targets = this.document.elementsFromPoint(x, y);
        var _loop_1 = function (prop) {
            // current column position which throws event.
            /** @type {?} */
            var pos = this_1.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el === pos.element; }))) {
                return { value: {
                        pos: pos,
                        i: i
                    } };
            }
            i++;
        };
        var this_1 = this;
        for (var prop in this.positions) {
            var state_1 = _loop_1(prop);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    /**
     * @private
     * @return {?}
     */
    OrderableDirective.prototype.createMapDiffs = /**
     * @private
     * @return {?}
     */
    function () {
        return this.draggables.toArray().reduce((/**
         * @param {?} acc
         * @param {?} curr
         * @return {?}
         */
        function (acc, curr) {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }), {});
    };
    OrderableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[orderable]' },] }
    ];
    /** @nocollapse */
    OrderableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    OrderableDirective.propDecorators = {
        reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        targetChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DraggableDirective, { descendants: true },] }]
    };
    return OrderableDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    Object.defineProperty(LongPressDirective.prototype, "press", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pressing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongPressDirective.prototype, "isLongPress", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isLongPressing;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    LongPressDirective.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        /** @type {?} */
        var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
        this.subscription = mouseup.subscribe((/**
         * @param {?} ev
         * @return {?}
         */
        function (ev) { return _this.onMouseup(); }));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.isLongPressing = true;
            _this.longPressStart.emit({
                event: event,
                model: _this.pressModel
            });
            _this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((/**
             * @param {?} mouseEvent
             * @return {?}
             */
            function (mouseEvent) { return _this.onMouseMove(mouseEvent); })));
            _this.loop(event);
        }), this.duration);
        this.loop(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LongPressDirective.prototype.onMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.pressing && !this.isLongPressing) {
            /** @type {?} */
            var xThres = Math.abs(event.clientX - this.mouseX) > 10;
            /** @type {?} */
            var yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LongPressDirective.prototype.loop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.isLongPressing) {
            this.timeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.longPressing.emit({
                    event: event,
                    model: _this.pressModel
                });
                _this.loop(event);
            }), 50);
        }
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.endPress = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.onMouseup = /**
     * @return {?}
     */
    function () {
        this.endPress();
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroySubscription();
    };
    /**
     * @private
     * @return {?}
     */
    LongPressDirective.prototype._destroySubscription = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    LongPressDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[long-press]' },] }
    ];
    LongPressDirective.propDecorators = {
        pressEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pressModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        longPressStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        longPressing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        longPressEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        press: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.press',] }],
        isLongPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.longpress',] }],
        onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
    };
    return LongPressDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollerComponent = /** @class */ (function () {
    function ScrollerComponent(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ScrollerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            /** @type {?} */
            var renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    };
    /**
     * @return {?}
     */
    ScrollerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    };
    /**
     * @param {?} offsetY
     * @return {?}
     */
    ScrollerComponent.prototype.setOffset = /**
     * @param {?} offsetY
     * @return {?}
     */
    function (offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ScrollerComponent.prototype.onScrolled = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var dom = (/** @type {?} */ (event.currentTarget));
        requestAnimationFrame((/**
         * @return {?}
         */
        function () {
            _this.scrollYPos = dom.scrollTop;
            _this.scrollXPos = dom.scrollLeft;
            _this.updateOffset();
        }));
    };
    /**
     * @return {?}
     */
    ScrollerComponent.prototype.updateOffset = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction: direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    };
    ScrollerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-scroller',
                    template: "\n    <ng-content></ng-content>\n  ",
                    host: {
                        class: 'datatable-scroll'
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    ScrollerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ScrollerComponent.propDecorators = {
        scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ScrollerComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatatableGroupHeaderTemplateDirective = /** @class */ (function () {
    function DatatableGroupHeaderTemplateDirective(template) {
        this.template = template;
    }
    DatatableGroupHeaderTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngx-datatable-group-header-template]'
                },] }
    ];
    /** @nocollapse */
    DatatableGroupHeaderTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return DatatableGroupHeaderTemplateDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatatableGroupHeaderDirective = /** @class */ (function () {
    function DatatableGroupHeaderDirective() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DatatableGroupHeaderDirective.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._templateInput || this._templateQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggle the expansion of a group
     */
    /**
     * Toggle the expansion of a group
     * @param {?} group
     * @return {?}
     */
    DatatableGroupHeaderDirective.prototype.toggleExpandGroup = /**
     * Toggle the expansion of a group
     * @param {?} group
     * @return {?}
     */
    function (group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    };
    /**
     * Expand all groups
     */
    /**
     * Expand all groups
     * @return {?}
     */
    DatatableGroupHeaderDirective.prototype.expandAllGroups = /**
     * Expand all groups
     * @return {?}
     */
    function () {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    };
    /**
     * Collapse all groups
     */
    /**
     * Collapse all groups
     * @return {?}
     */
    DatatableGroupHeaderDirective.prototype.collapseAllGroups = /**
     * Collapse all groups
     * @return {?}
     */
    function () {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    };
    DatatableGroupHeaderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-group-header' },] }
    ];
    DatatableGroupHeaderDirective.propDecorators = {
        rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
        _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
        toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DatatableGroupHeaderDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Always returns the empty string ''
 * @return {?}
 */
function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 * @param {?} prop
 * @return {?}
 */
function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param {?} row array of values
 * @param {?} index numeric index
 * @return {?} any or '' if invalid index
 */
function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    /** @type {?} */
    var value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param {?} obj object containing the field
 * @param {?} fieldName field name string
 * @return {?}
 */
function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    /** @type {?} */
    var value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    /** @type {?} */
    var current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    /** @type {?} */
    var split = path.split('.');
    if (split.length) {
        for (var i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} prop
 * @return {?}
 */
function optionalGetterForProp(prop) {
    return prop && ((/**
     * @param {?} row
     * @return {?}
     */
    function (row) { return getterForProp(prop)(row, prop); }));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param {?} rows
 *
 * @param {?=} from
 * @param {?=} to
 * @return {?}
 */
function groupRowsByParents(rows, from, to) {
    if (from && to) {
        /** @type {?} */
        var nodeById = {};
        /** @type {?} */
        var l = rows.length;
        /** @type {?} */
        var node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        // that's the root node
        /** @type {?} */
        var uniqIDs = rows.reduce((/**
         * @param {?} arr
         * @param {?} item
         * @return {?}
         */
        function (arr, item) {
            /** @type {?} */
            var toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }), []);
        for (var i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (var i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            /** @type {?} */
            var parent_1 = 0;
            /** @type {?} */
            var fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent_1 = fromValue;
            }
            node.parent = nodeById[parent_1];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        /** @type {?} */
        var resolvedRows_1 = [];
        nodeById[0].flatten((/**
         * @return {?}
         */
        function () {
            resolvedRows_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(resolvedRows_1, [this.row]);
        }), true);
        return resolvedRows_1;
    }
    else {
        return rows;
    }
}
var TreeNode = /** @class */ (function () {
    function TreeNode(row) {
        if (row === void 0) { row = null; }
        if (!row) {
            row = {
                level: -1,
                treeStatus: 'expanded'
            };
        }
        this.row = row;
        this.parent = null;
        this.children = [];
    }
    /**
     * @param {?} f
     * @param {?} recursive
     * @return {?}
     */
    TreeNode.prototype.flatten = /**
     * @param {?} f
     * @param {?} recursive
     * @return {?}
     */
    function (f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (var i = 0, l = this.children.length; i < l; i++) {
                /** @type {?} */
                var child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    };
    return TreeNode;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 * @param {?} str
 * @return {?}
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, (/**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @return {?}
     */
    function (a, b, c) {
        return b.trim() + c.toUpperCase();
    }));
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 * @param {?} str
 * @return {?}
 */
function deCamelCase(str) {
    return str.replace(/([A-Z])/g, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) { return " " + match; })).replace(/^./, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) { return match.toUpperCase(); }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 * @return {?}
 */
function id() {
    return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sets the column defaults
 * @param {?} columns
 * @return {?}
 */
function setColumnDefaults(columns) {
    var e_1, _a;
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    /** @type {?} */
    var treeColumnFound = false;
    try {
        for (var columns_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
            var column = columns_1_1.value;
            if (!column.$$id) {
                column.$$id = id();
            }
            // prop can be numeric; zero is valid not a missing prop
            // translate name => prop
            if (isNullOrUndefined(column.prop) && column.name) {
                column.prop = camelCase(column.name);
            }
            if (!column.$$valueGetter) {
                column.$$valueGetter = getterForProp(column.prop);
            }
            // format props if no name passed
            if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
                column.name = deCamelCase(String(column.prop));
            }
            if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
                column.name = ''; // Fixes IE and Edge displaying `null`
            }
            if (!column.hasOwnProperty('resizeable')) {
                column.resizeable = true;
            }
            if (!column.hasOwnProperty('sortable')) {
                column.sortable = true;
            }
            if (!column.hasOwnProperty('draggable')) {
                column.draggable = true;
            }
            if (!column.hasOwnProperty('canAutoResize')) {
                column.canAutoResize = true;
            }
            if (!column.hasOwnProperty('width')) {
                column.width = 150;
            }
            if (!column.hasOwnProperty('isTreeColumn')) {
                column.isTreeColumn = false;
            }
            else {
                if (column.isTreeColumn && !treeColumnFound) {
                    // If the first column with isTreeColumn is true found
                    // we mark that treeCoulmn is found
                    treeColumnFound = true;
                }
                else {
                    // After that isTreeColumn property for any other column
                    // will be set as false
                    column.isTreeColumn = false;
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return)) _a.call(columns_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 * @param {?} templates
 * @return {?}
 */
function translateTemplates(templates) {
    var e_2, _a, e_3, _b;
    /** @type {?} */
    var result = [];
    try {
        for (var templates_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(templates), templates_1_1 = templates_1.next(); !templates_1_1.done; templates_1_1 = templates_1.next()) {
            var temp = templates_1_1.value;
            /** @type {?} */
            var col = {};
            /** @type {?} */
            var props = Object.getOwnPropertyNames(temp);
            try {
                for (var props_1 = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(props)), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                    var prop = props_1_1.value;
                    col[prop] = temp[prop];
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (props_1_1 && !props_1_1.done && (_b = props_1.return)) _b.call(props_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            if (temp.headerTemplate) {
                col.headerTemplate = temp.headerTemplate;
            }
            if (temp.cellTemplate) {
                col.cellTemplate = temp.cellTemplate;
            }
            if (temp.summaryFunc) {
                col.summaryFunc = temp.summaryFunc;
            }
            if (temp.summaryTemplate) {
                col.summaryTemplate = temp.summaryTemplate;
            }
            result.push(col);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (templates_1_1 && !templates_1_1.done && (_a = templates_1.return)) _a.call(templates_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ColumnMode = {
    standard: 'standard',
    flex: 'flex',
    force: 'force',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var SelectionType = {
    single: 'single',
    multi: 'multi',
    multiClick: 'multiClick',
    cell: 'cell',
    checkbox: 'checkbox',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var SortType = {
    single: 'single',
    multi: 'multi',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ContextmenuType = {
    header: 'header',
    body: 'body',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableColumnHeaderDirective = /** @class */ (function () {
    function DataTableColumnHeaderDirective(template) {
        this.template = template;
    }
    DataTableColumnHeaderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-header-template]' },] }
    ];
    /** @nocollapse */
    DataTableColumnHeaderDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return DataTableColumnHeaderDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableColumnCellDirective = /** @class */ (function () {
    function DataTableColumnCellDirective(template) {
        this.template = template;
    }
    DataTableColumnCellDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-cell-template]' },] }
    ];
    /** @nocollapse */
    DataTableColumnCellDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return DataTableColumnCellDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableColumnCellTreeToggle = /** @class */ (function () {
    function DataTableColumnCellTreeToggle(template) {
        this.template = template;
    }
    DataTableColumnCellTreeToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-tree-toggle]' },] }
    ];
    /** @nocollapse */
    DataTableColumnCellTreeToggle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return DataTableColumnCellTreeToggle;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableColumnDirective = /** @class */ (function () {
    function DataTableColumnDirective(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    Object.defineProperty(DataTableColumnDirective.prototype, "cellTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cellTemplateInput || this._cellTemplateQuery;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnDirective.prototype, "headerTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._headerTemplateInput || this._headerTemplateQuery;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnDirective.prototype, "treeToggleTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableColumnDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    };
    DataTableColumnDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-column' },] }
    ];
    /** @nocollapse */
    DataTableColumnDirective.ctorParameters = function () { return [
        { type: ColumnChangesService }
    ]; };
    DataTableColumnDirective.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        frozenLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        frozenRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        flexGrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resizeable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        comparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canAutoResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checkboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerCheckboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cellClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isTreeColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        treeLevelIndent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        summaryFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        summaryTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _cellTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cellTemplate',] }],
        _cellTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
        _headerTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['headerTemplate',] }],
        _headerTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
        _treeToggleTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeToggleTemplate',] }],
        _treeToggleTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }]
    };
    return DataTableColumnDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatatableRowDetailTemplateDirective = /** @class */ (function () {
    function DatatableRowDetailTemplateDirective(template) {
        this.template = template;
    }
    DatatableRowDetailTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngx-datatable-row-detail-template]'
                },] }
    ];
    /** @nocollapse */
    DatatableRowDetailTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return DatatableRowDetailTemplateDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatatableRowDetailDirective = /** @class */ (function () {
    function DatatableRowDetailDirective() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DatatableRowDetailDirective.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._templateInput || this._templateQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggle the expansion of the row
     */
    /**
     * Toggle the expansion of the row
     * @param {?} row
     * @return {?}
     */
    DatatableRowDetailDirective.prototype.toggleExpandRow = /**
     * Toggle the expansion of the row
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    };
    /**
     * API method to expand all the rows.
     */
    /**
     * API method to expand all the rows.
     * @return {?}
     */
    DatatableRowDetailDirective.prototype.expandAllRows = /**
     * API method to expand all the rows.
     * @return {?}
     */
    function () {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    };
    /**
     * API method to collapse all the rows.
     */
    /**
     * API method to collapse all the rows.
     * @return {?}
     */
    DatatableRowDetailDirective.prototype.collapseAllRows = /**
     * API method to collapse all the rows.
     * @return {?}
     */
    function () {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    };
    DatatableRowDetailDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-row-detail' },] }
    ];
    DatatableRowDetailDirective.propDecorators = {
        rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
        _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
        toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DatatableRowDetailDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatatableFooterDirective = /** @class */ (function () {
    function DatatableFooterDirective() {
    }
    Object.defineProperty(DatatableFooterDirective.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._templateInput || this._templateQuery;
        },
        enumerable: true,
        configurable: true
    });
    DatatableFooterDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-footer' },] }
    ];
    DatatableFooterDirective.propDecorators = {
        footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
        _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: false },] }]
    };
    return DatatableFooterDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the columns by pin.
 * @param {?} cols
 * @return {?}
 */
function columnsByPin(cols) {
    var e_1, _a;
    /** @type {?} */
    var ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        try {
            for (var cols_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(cols), cols_1_1 = cols_1.next(); !cols_1_1.done; cols_1_1 = cols_1.next()) {
                var col = cols_1_1.value;
                if (col.frozenLeft) {
                    ret.left.push(col);
                }
                else if (col.frozenRight) {
                    ret.right.push(col);
                }
                else {
                    ret.center.push(col);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (cols_1_1 && !cols_1_1.done && (_a = cols_1.return)) _a.call(cols_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return ret;
}
/**
 * Returns the widths of all group sets of a column
 * @param {?} groups
 * @param {?} all
 * @return {?}
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */
function columnTotalWidth(columns, prop) {
    var e_2, _a;
    /** @type {?} */
    var totalWidth = 0;
    if (columns) {
        try {
            for (var columns_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
                var c = columns_1_1.value;
                /** @type {?} */
                var has = prop && c[prop];
                /** @type {?} */
                var width = has ? c[prop] : c.width;
                totalWidth = totalWidth + parseFloat(width);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return)) _a.call(columns_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */
function columnsTotalWidth(columns, prop) {
    var e_3, _a;
    /** @type {?} */
    var totalWidth = 0;
    try {
        for (var columns_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(columns), columns_2_1 = columns_2.next(); !columns_2_1.done; columns_2_1 = columns_2.next()) {
            var column = columns_2_1.value;
            /** @type {?} */
            var has = prop && column[prop];
            totalWidth = totalWidth + (has ? column[prop] : column.width);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (columns_2_1 && !columns_2_1.done && (_a = columns_2.return)) _a.call(columns_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return totalWidth;
}
/**
 * @param {?} val
 * @return {?}
 */
function columnsByPinArr(val) {
    /** @type {?} */
    var colsByPinArr = [];
    /** @type {?} */
    var colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
var  /**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
RowHeightCache = /** @class */ (function () {
    function RowHeightCache() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     */
    /**
     * Clear the Tree array.
     * @return {?}
     */
    RowHeightCache.prototype.clearCache = /**
     * Clear the Tree array.
     * @return {?}
     */
    function () {
        this.treeArray = [];
    };
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param {?} details
     * @return {?}
     */
    RowHeightCache.prototype.initCache = /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param {?} details
     * @return {?}
     */
    function (details) {
        var rows = details.rows, rowHeight = details.rowHeight, detailRowHeight = details.detailRowHeight, externalVirtual = details.externalVirtual, rowCount = details.rowCount, rowIndexes = details.rowIndexes, rowExpansions = details.rowExpansions;
        /** @type {?} */
        var isFn = typeof rowHeight === 'function';
        /** @type {?} */
        var isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (" + rowHeight + ") when 'scrollbarV' is enabled.");
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (" + detailRowHeight + ") when 'scrollbarV' is enabled.");
        }
        /** @type {?} */
        var n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (var i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (var i = 0; i < n; ++i) {
            /** @type {?} */
            var row = rows[i];
            /** @type {?} */
            var currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            /** @type {?} */
            var expanded = rowExpansions.get(row);
            if (row && expanded === 1) {
                if (isDetailFn) {
                    /** @type {?} */
                    var index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    };
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     */
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     * @param {?} scrollY
     * @return {?}
     */
    RowHeightCache.prototype.getRowIndex = /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     * @param {?} scrollY
     * @return {?}
     */
    function (scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    };
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     */
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     * @param {?} atRowIndex
     * @param {?} byRowHeight
     * @return {?}
     */
    RowHeightCache.prototype.update = /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     * @param {?} atRowIndex
     * @param {?} byRowHeight
     * @return {?}
     */
    function (atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error("Update at index " + atRowIndex + " with value " + byRowHeight + " failed:\n        Row Height cache not initialized.");
        }
        /** @type {?} */
        var n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
        }
    };
    /**
     * Range Sum query from 1 to the rowIndex
     */
    /**
     * Range Sum query from 1 to the rowIndex
     * @param {?} atIndex
     * @return {?}
     */
    RowHeightCache.prototype.query = /**
     * Range Sum query from 1 to the rowIndex
     * @param {?} atIndex
     * @return {?}
     */
    function (atIndex) {
        if (!this.treeArray.length) {
            throw new Error("query at index " + atIndex + " failed: Fenwick tree array not initialized.");
        }
        /** @type {?} */
        var sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    };
    /**
     * Find the total height between 2 row indexes
     */
    /**
     * Find the total height between 2 row indexes
     * @param {?} atIndexA
     * @param {?} atIndexB
     * @return {?}
     */
    RowHeightCache.prototype.queryBetween = /**
     * Find the total height between 2 row indexes
     * @param {?} atIndexA
     * @param {?} atIndexB
     * @return {?}
     */
    function (atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    };
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     */
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     * @private
     * @param {?} sum
     * @return {?}
     */
    RowHeightCache.prototype.calcRowIndex = /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     * @private
     * @param {?} sum
     * @return {?}
     */
    function (sum) {
        if (!this.treeArray.length)
            return 0;
        /** @type {?} */
        var pos = -1;
        /** @type {?} */
        var dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        /** @type {?} */
        var highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            /** @type {?} */
            var nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    };
    return RowHeightCache;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var cache = {};
/** @type {?} */
var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
var ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    /** @type {?} */
    var match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    /** @type {?} */
    var pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    /** @type {?} */
    var dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom: dom,
            lowercase: pre,
            css: "-" + pre + "-",
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
};
/** @type {?} */
var prefix = ((ɵ0))();
/**
 * @param {?} property
 * @return {?}
 */
function getVendorPrefixedName(property) {
    /** @type {?} */
    var name = camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// browser detection and prefixing tools
/** @type {?} */
var transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
/** @type {?} */
var backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
/** @type {?} */
var hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
/** @type {?} */
var hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
/** @type {?} */
var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
/** @type {?} */
var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
/**
 * @param {?} styles
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = "translate3d(" + x + "px, " + y + "px, 0)";
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camelCase(transform)] = "translate(" + x + "px, " + y + "px)";
        }
    }
    else {
        styles.top = y + "px";
        styles.left = x + "px";
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableBodyComponent = /** @class */ (function () {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    function DataTableBodyComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.selected = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new Map();
        this.rowExpansions = new Map();
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (/**
         * @param {?=} row
         * @param {?=} index
         * @return {?}
         */
        function (row, index) {
            if (!_this.rowDetail) {
                return 0;
            }
            /** @type {?} */
            var rowHeight = _this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : ((/** @type {?} */ (rowHeight)));
        });
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (/**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        function (index, row) {
            /** @type {?} */
            var idx = _this.getRowIndex(row);
            if (_this.trackByProp) {
                return row[_this.trackByProp];
            }
            else {
                return idx;
            }
        });
    }
    Object.defineProperty(DataTableBodyComponent.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._pageSize = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "rows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rows;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rows = val;
            this.rowExpansions.clear();
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columns;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._columns = val;
            /** @type {?} */
            var colsByPin = columnsByPin(val);
            this.columnGroupWidths = columnGroupWidths(colsByPin, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "offset", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offset;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._offset = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "rowCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rowCount;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rowCount = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "bodyWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            else {
                return '100%';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "bodyHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bodyHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.scrollbarV) {
                this._bodyHeight = val + 'px';
            }
            else {
                this._bodyHeight = 'auto';
            }
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "selectEnabled", {
        /**
         * Returns if selection is enabled.
         */
        get: /**
         * Returns if selection is enabled.
         * @return {?}
         */
        function () {
            return !!this.selectionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "scrollHeight", {
        /**
         * Property that would calculate the height of scroll bar
         * based on the row heights cache for virtual scroll and virtualization. Other scenarios
         * calculate scroll height automatically (as height will be undefined).
         */
        get: /**
         * Property that would calculate the height of scroll bar
         * based on the row heights cache for virtual scroll and virtualization. Other scenarios
         * calculate scroll height automatically (as height will be undefined).
         * @return {?}
         */
        function () {
            if (this.scrollbarV && this.virtualization && this.rowCount) {
                return this.rowHeightsCache.query(this.rowCount - 1);
            }
            // avoid TS7030: Not all code paths return a value.
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called after the constructor, initializing input properties
     */
    /**
     * Called after the constructor, initializing input properties
     * @return {?}
     */
    DataTableBodyComponent.prototype.ngOnInit = /**
     * Called after the constructor, initializing input properties
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, value = _a.value;
                if (type === 'row') {
                    _this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    _this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                _this.updateIndexes();
                _this.updateRows();
                _this.cd.markForCheck();
            }));
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, value = _a.value;
                if (type === 'group') {
                    _this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    _this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                _this.updateIndexes();
                _this.updateRows();
                _this.cd.markForCheck();
            }));
        }
    };
    /**
     * Called once, before the instance is destroyed.
     */
    /**
     * Called once, before the instance is destroyed.
     * @return {?}
     */
    DataTableBodyComponent.prototype.ngOnDestroy = /**
     * Called once, before the instance is destroyed.
     * @return {?}
     */
    function () {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    };
    /**
     * Updates the Y offset given a new offset.
     */
    /**
     * Updates the Y offset given a new offset.
     * @param {?=} offset
     * @return {?}
     */
    DataTableBodyComponent.prototype.updateOffsetY = /**
     * Updates the Y offset given a new offset.
     * @param {?=} offset
     * @return {?}
     */
    function (offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            /** @type {?} */
            var rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    };
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     * @param {?} event
     * @return {?}
     */
    DataTableBodyComponent.prototype.onBodyScroll = /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var scrollYPos = event.scrollYPos;
        /** @type {?} */
        var scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    };
    /**
     * Updates the page given a direction.
     */
    /**
     * Updates the page given a direction.
     * @param {?} direction
     * @return {?}
     */
    DataTableBodyComponent.prototype.updatePage = /**
     * Updates the page given a direction.
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /** @type {?} */
        var offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset: offset });
        }
    };
    /**
     * Updates the rows in the view port
     */
    /**
     * Updates the rows in the view port
     * @return {?}
     */
    DataTableBodyComponent.prototype.updateRows = /**
     * Updates the rows in the view port
     * @return {?}
     */
    function () {
        var _a = this.indexes, first = _a.first, last = _a.last;
        /** @type {?} */
        var rowIndex = first;
        /** @type {?} */
        var idx = 0;
        /** @type {?} */
        var temp = [];
        this.rowIndexes.clear();
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            /** @type {?} */
            var maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                /** @type {?} */
                var group = this.groupedRows[rowIndex];
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                /** @type {?} */
                var row = this.rows[rowIndex];
                if (row) {
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    };
    /**
     * Get the row height
     */
    /**
     * Get the row height
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.getRowHeight = /**
     * Get the row height
     * @param {?} row
     * @return {?}
     */
    function (row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return (/** @type {?} */ (this.rowHeight));
    };
    /**
     * @param group the group with all rows
     */
    /**
     * @param {?} group the group with all rows
     * @return {?}
     */
    DataTableBodyComponent.prototype.getGroupHeight = /**
     * @param {?} group the group with all rows
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var rowHeight = 0;
        if (group.value) {
            for (var index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    };
    /**
     * Calculate row height based on the expanded state of the row.
     */
    /**
     * Calculate row height based on the expanded state of the row.
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.getRowAndDetailHeight = /**
     * Calculate row height based on the expanded state of the row.
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var rowHeight = this.getRowHeight(row);
        /** @type {?} */
        var expanded = this.rowExpansions.get(row);
        // Adding detail row height if its expanded.
        if (expanded === 1) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    };
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * \@memberOf DataTableBodyComponent
     * @param {?} rows the row that needs to be placed in the 2D space.
     * @return {?} the CSS3 style to be applied
     *
     */
    DataTableBodyComponent.prototype.getRowsStyles = /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * \@memberOf DataTableBodyComponent
     * @param {?} rows the row that needs to be placed in the 2D space.
     * @return {?} the CSS3 style to be applied
     *
     */
    function (rows) {
        /** @type {?} */
        var styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            var idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                /** @type {?} */
                var row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            /** @type {?} */
            var pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    };
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * \@memberOf DataTableBodyComponent
     * @return {?} the CSS3 style to be applied
     *
     */
    DataTableBodyComponent.prototype.getBottomSummaryRowStyles = /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * \@memberOf DataTableBodyComponent
     * @return {?} the CSS3 style to be applied
     *
     */
    function () {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        /** @type {?} */
        var styles = { position: 'absolute' };
        /** @type {?} */
        var pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    };
    /**
     * Hides the loading indicator
     */
    /**
     * Hides the loading indicator
     * @return {?}
     */
    DataTableBodyComponent.prototype.hideIndicator = /**
     * Hides the loading indicator
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return (_this.loadingIndicator = false); }), 500);
    };
    /**
     * Updates the index of the rows in the viewport
     */
    /**
     * Updates the index of the rows in the viewport
     * @return {?}
     */
    DataTableBodyComponent.prototype.updateIndexes = /**
     * Updates the index of the rows in the viewport
     * @return {?}
     */
    function () {
        /** @type {?} */
        var first = 0;
        /** @type {?} */
        var last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                /** @type {?} */
                var height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first: first, last: last };
    };
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     * @return {?}
     */
    DataTableBodyComponent.prototype.refreshRowHeightCache = /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     * @return {?}
     */
    function () {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions: this.rowExpansions
            });
        }
    };
    /**
     * Gets the index for the view port
     */
    /**
     * Gets the index for the view port
     * @return {?}
     */
    DataTableBodyComponent.prototype.getAdjustedViewPortIndex = /**
     * Gets the index for the view port
     * @return {?}
     */
    function () {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        /** @type {?} */
        var viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    };
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.toggleRowExpansion = /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     * @param {?} row
     * @return {?}
     */
    function (row) {
        // Capture the row index of the first row that is visible on the viewport.
        /** @type {?} */
        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        /** @type {?} */
        var expanded = this.rowExpansions.get(row);
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            var detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            /** @type {?} */
            var idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        expanded = expanded ^= 1;
        this.rowExpansions.set(row, expanded);
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    };
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    /**
     * Expand/Collapse all the rows no matter what their state is.
     * @param {?} expanded
     * @return {?}
     */
    DataTableBodyComponent.prototype.toggleAllRows = /**
     * Expand/Collapse all the rows no matter what their state is.
     * @param {?} expanded
     * @return {?}
     */
    function (expanded) {
        var e_1, _a;
        // clear prev expansions
        this.rowExpansions.clear();
        /** @type {?} */
        var rowExpanded = expanded ? 1 : 0;
        // Capture the row index of the first row that is visible on the viewport.
        /** @type {?} */
        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(this.rows), _c = _b.next(); !_c.done; _c = _b.next()) {
                var row = _c.value;
                this.rowExpansions.set(row, rowExpanded);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    };
    /**
     * Recalculates the table
     */
    /**
     * Recalculates the table
     * @return {?}
     */
    DataTableBodyComponent.prototype.recalcLayout = /**
     * Recalculates the table
     * @return {?}
     */
    function () {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    };
    /**
     * Tracks the column
     */
    /**
     * Tracks the column
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    DataTableBodyComponent.prototype.columnTrackingFn = /**
     * Tracks the column
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    function (index, column) {
        return column.$$id;
    };
    /**
     * Gets the row pinning group styles
     */
    /**
     * Gets the row pinning group styles
     * @param {?} group
     * @return {?}
     */
    DataTableBodyComponent.prototype.stylesByGroup = /**
     * Gets the row pinning group styles
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var widths = this.columnGroupWidths;
        /** @type {?} */
        var offsetX = this.offsetX;
        /** @type {?} */
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            var bodyWidth = parseInt(this.innerWidth + '', 0);
            /** @type {?} */
            var totalDiff = widths.total - bodyWidth;
            /** @type {?} */
            var offsetDiff = totalDiff - offsetX;
            /** @type {?} */
            var offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    };
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.getRowExpanded = /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var e_2, _a;
        if (this.rowExpansions.size === 0 && this.groupExpansionDefault) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(this.groupedRows), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var group = _c.value;
                    this.rowExpansions.set(group, 1);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        /** @type {?} */
        var expanded = this.rowExpansions.get(row);
        return expanded === 1;
    };
    /**
     * Gets the row index given a row
     */
    /**
     * Gets the row index given a row
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.getRowIndex = /**
     * Gets the row index given a row
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return this.rowIndexes.get(row) || 0;
    };
    /**
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.onTreeAction = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.treeAction.emit({ row: row });
    };
    DataTableBodyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-body',
                    template: "\n    <datatable-selection\n      #selector\n      [selected]=\"selected\"\n      [rows]=\"rows\"\n      [selectCheck]=\"selectCheck\"\n      [selectEnabled]=\"selectEnabled\"\n      [selectionType]=\"selectionType\"\n      [rowIdentity]=\"rowIdentity\"\n      (select)=\"select.emit($event)\"\n      (activate)=\"activate.emit($event)\"\n    >\n      <datatable-progress *ngIf=\"loadingIndicator\"> </datatable-progress>\n      <datatable-scroller\n        *ngIf=\"rows?.length\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [scrollHeight]=\"scrollHeight\"\n        [scrollWidth]=\"columnGroupWidths?.total\"\n        (scroll)=\"onBodyScroll($event)\"\n      >\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'top'\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n        <datatable-row-wrapper\n          [groupedRows]=\"groupedRows\"\n          *ngFor=\"let group of temp; let i = index; trackBy: rowTrackingFn\"\n          [innerWidth]=\"innerWidth\"\n          [ngStyle]=\"getRowsStyles(group)\"\n          [rowDetail]=\"rowDetail\"\n          [groupHeader]=\"groupHeader\"\n          [offsetX]=\"offsetX\"\n          [detailRowHeight]=\"getDetailRowHeight(group[i], i)\"\n          [row]=\"group\"\n          [expanded]=\"getRowExpanded(group)\"\n          [rowIndex]=\"getRowIndex(group[i])\"\n          (rowContextmenu)=\"rowContextmenu.emit($event)\"\n        >\n          <datatable-body-row\n            *ngIf=\"!groupedRows; else groupedRowsTemplate\"\n            tabindex=\"-1\"\n            [isSelected]=\"selector.getRowSelected(group)\"\n            [innerWidth]=\"innerWidth\"\n            [offsetX]=\"offsetX\"\n            [columns]=\"columns\"\n            [rowHeight]=\"getRowHeight(group)\"\n            [row]=\"group\"\n            [rowIndex]=\"getRowIndex(group)\"\n            [expanded]=\"getRowExpanded(group)\"\n            [rowClass]=\"rowClass\"\n            [displayCheck]=\"displayCheck\"\n            [treeStatus]=\"group.treeStatus\"\n            (treeAction)=\"onTreeAction(group)\"\n            (activate)=\"selector.onActivate($event, indexes.first + i)\"\n          >\n          </datatable-body-row>\n          <ng-template #groupedRowsTemplate>\n            <datatable-body-row\n              *ngFor=\"let row of group.value; let i = index; trackBy: rowTrackingFn\"\n              tabindex=\"-1\"\n              [isSelected]=\"selector.getRowSelected(row)\"\n              [innerWidth]=\"innerWidth\"\n              [offsetX]=\"offsetX\"\n              [columns]=\"columns\"\n              [rowHeight]=\"getRowHeight(row)\"\n              [row]=\"row\"\n              [group]=\"group.value\"\n              [rowIndex]=\"getRowIndex(row)\"\n              [expanded]=\"getRowExpanded(row)\"\n              [rowClass]=\"rowClass\"\n              (activate)=\"selector.onActivate($event, i)\"\n            >\n            </datatable-body-row>\n          </ng-template>\n        </datatable-row-wrapper>\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'bottom'\"\n          [ngStyle]=\"getBottomSummaryRowStyles()\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n      </datatable-scroller>\n      <div class=\"empty-row\" *ngIf=\"!rows?.length && !loadingIndicator\" [innerHTML]=\"emptyMessage\"></div>\n    </datatable-selection>\n  ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        class: 'datatable-body'
                    }
                }] }
    ];
    /** @nocollapse */
    DataTableBodyComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    DataTableBodyComponent.propDecorators = {
        scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        emptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bodyWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
        bodyHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        detailToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        scroller: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [ScrollerComponent, { static: false },] }]
    };
    return DataTableBodyComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableHeaderComponent = /** @class */ (function () {
    function DataTableHeaderComponent(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
    }
    Object.defineProperty(DataTableHeaderComponent.prototype, "innerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._innerWidth;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this._innerWidth = val;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this._columns) {
                    /** @type {?} */
                    var colByPin = columnsByPin(_this._columns);
                    _this._columnGroupWidths = columnGroupWidths(colByPin, _this._columns);
                    _this.setStylesByGroup();
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._headerHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== 'auto') {
                this._headerHeight = val + "px";
            }
            else {
                this._headerHeight = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columns;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this._columns = val;
            /** @type {?} */
            var colsByPin = columnsByPin(val);
            this._columnsByPin = columnsByPinArr(val);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._columnGroupWidths = columnGroupWidths(colsByPin, val);
                _this.setStylesByGroup();
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "offsetX", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetX;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._offsetX = val;
            this.setStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onLongPressStart = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, model = _a.model;
        model.dragging = true;
        this.dragEventTarget = event;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onLongPressEnd = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var event = _a.event, model = _a.model;
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout((/**
         * @return {?}
         */
        function () {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            /** @type {?} */
            var column = _this._columns.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.$$id === model.$$id; }));
            if (column) {
                column.dragging = false;
            }
        }), 5);
    };
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            return '100%';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    DataTableHeaderComponent.prototype.trackByGroups = /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    function (index, colGroup) {
        return colGroup.type;
    };
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    DataTableHeaderComponent.prototype.columnTrackingFn = /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    function (index, column) {
        return column.$$id;
    };
    /**
     * @param {?} width
     * @param {?} column
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onColumnResized = /**
     * @param {?} width
     * @param {?} column
     * @return {?}
     */
    function (width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column: column,
            prevValue: column.width,
            newValue: width
        });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onColumnReordered = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, model = _a.model;
        /** @type {?} */
        var column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onTargetChanged = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, initialIndex = _a.initialIndex;
        if (prevIndex || prevIndex === 0) {
            /** @type {?} */
            var oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            /** @type {?} */
            var newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DataTableHeaderComponent.prototype.getColumn = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        /** @type {?} */
        var centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onSort = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var column = _a.column, prevValue = _a.prevValue, newValue = _a.newValue;
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        /** @type {?} */
        var sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts: sorts,
            column: column,
            prevValue: prevValue,
            newValue: newValue
        });
    };
    /**
     * @param {?} column
     * @param {?} prevValue
     * @param {?} newValue
     * @return {?}
     */
    DataTableHeaderComponent.prototype.calcNewSorts = /**
     * @param {?} column
     * @param {?} prevValue
     * @param {?} newValue
     * @return {?}
     */
    function (column, prevValue, newValue) {
        /** @type {?} */
        var idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        /** @type {?} */
        var sorts = this.sorts.map((/**
         * @param {?} s
         * @param {?} i
         * @return {?}
         */
        function (s, i) {
            s = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        }));
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    };
    /**
     * @return {?}
     */
    DataTableHeaderComponent.prototype.setStylesByGroup = /**
     * @return {?}
     */
    function () {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        this.cd.detectChanges();
    };
    /**
     * @param {?} group
     * @return {?}
     */
    DataTableHeaderComponent.prototype.calcStylesByGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var widths = this._columnGroupWidths;
        /** @type {?} */
        var offsetX = this.offsetX;
        /** @type {?} */
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            var totalDiff = widths.total - this.innerWidth;
            /** @type {?} */
            var offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    };
    DataTableHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-header',
                    template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      (targetChanged)=\"onTargetChanged($event)\"\n      [style.width.px]=\"_columnGroupWidths.total\"\n      class=\"datatable-header-inner\"\n    >\n      <div\n        *ngFor=\"let colGroup of _columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"_styleByGroup[colGroup.type]\"\n      >\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          [pressModel]=\"column\"\n          [pressEnabled]=\"reorderable && column.draggable\"\n          (longPressStart)=\"onLongPressStart($event)\"\n          (longPressEnd)=\"onLongPressEnd($event)\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && column.dragging\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [dragEventTarget]=\"dragEventTarget\"\n          [headerHeight]=\"headerHeight\"\n          [isTarget]=\"column.isTarget\"\n          [targetMarkerTemplate]=\"targetMarkerTemplate\"\n          [targetMarkerContext]=\"column.targetMarkerContext\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          [allRowsSelected]=\"allRowsSelected\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\"\n          (columnContextmenu)=\"columnContextmenu.emit($event)\"\n        >\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'datatable-header'
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    DataTableHeaderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    DataTableHeaderComponent.propDecorators = {
        sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dealsWithGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        headerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }]
    };
    return DataTableHeaderComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Throttle a function
 * @param {?} func
 * @param {?} wait
 * @param {?=} options
 * @return {?}
 */
function throttle(func, wait, options) {
    options = options || {};
    /** @type {?} */
    var context;
    /** @type {?} */
    var args;
    /** @type {?} */
    var result;
    /** @type {?} */
    var timeout = null;
    /** @type {?} */
    var previous = 0;
    /**
     * @return {?}
     */
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return (/**
     * @this {?}
     * @return {?}
     */
    function () {
        /** @type {?} */
        var now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        /** @type {?} */
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    });
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 * @param {?} duration
 * @param {?=} options
 * @return {?}
 */
function throttleable(duration, options) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @param {?} descriptor
     * @return {?}
     */
    function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: (/**
             * @return {?}
             */
            function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            })
        };
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Calculates the Total Flex Grow
 * @param {?} columns
 * @return {?}
 */
function getTotalFlexGrow(columns) {
    var e_1, _a;
    /** @type {?} */
    var totalFlexGrow = 0;
    try {
        for (var columns_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
            var c = columns_1_1.value;
            totalFlexGrow += c.flexGrow || 0;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return)) _a.call(columns_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @return {?}
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    /** @type {?} */
    var columnsWidth = columnsTotalWidth(allColumns);
    /** @type {?} */
    var totalFlexGrow = getTotalFlexGrow(allColumns);
    /** @type {?} */
    var colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 * @param {?} colsByGroup
 * @param {?} maxWidth
 * @param {?} totalFlexGrow
 * @return {?}
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    var e_2, _a, e_3, _b;
    // calculate total width and flexgrow points for coulumns that can be resized
    for (var attr in colsByGroup) {
        try {
            for (var _c = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(colsByGroup[attr])), _d = _c.next(); !_d.done; _d = _c.next()) {
                var column = _d.value;
                if (!column.canAutoResize) {
                    maxWidth -= column.width;
                    totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
                }
                else {
                    column.width = 0;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    /** @type {?} */
    var hasMinWidth = {};
    /** @type {?} */
    var remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        /** @type {?} */
        var widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (var attr in colsByGroup) {
            try {
                for (var _e = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(colsByGroup[attr])), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var column = _f.value;
                    // if the column can be resize and it hasn't reached its minimum width yet
                    if (column.canAutoResize && !hasMinWidth[column.prop]) {
                        /** @type {?} */
                        var newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                        if (column.minWidth !== undefined && newWidth < column.minWidth) {
                            remainingWidth += newWidth - column.minWidth;
                            column.width = column.minWidth;
                            hasMinWidth[column.prop] = true;
                        }
                        else {
                            column.width = newWidth;
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @param {?} startIdx
 * @param {?} allowBleed
 * @param {?=} defaultColWidth
 * @return {?}
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth) {
    var e_4, _a, e_5, _b;
    if (defaultColWidth === void 0) { defaultColWidth = 300; }
    /** @type {?} */
    var columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter((/**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return c.canAutoResize !== false;
    }));
    try {
        for (var columnsToResize_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(columnsToResize), columnsToResize_1_1 = columnsToResize_1.next(); !columnsToResize_1_1.done; columnsToResize_1_1 = columnsToResize_1.next()) {
            var column = columnsToResize_1_1.value;
            if (!column.$$oldWidth) {
                column.$$oldWidth = column.width;
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (columnsToResize_1_1 && !columnsToResize_1_1.done && (_a = columnsToResize_1.return)) _a.call(columnsToResize_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    /** @type {?} */
    var additionWidthPerColumn = 0;
    /** @type {?} */
    var exceedsWindow = false;
    /** @type {?} */
    var contentWidth = getContentWidth(allColumns, defaultColWidth);
    /** @type {?} */
    var remainingWidth = expectedWidth - contentWidth;
    /** @type {?} */
    var columnsProcessed = [];
    /** @type {?} */
    var remainingWidthLimit = 1;
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        try {
            for (var columnsToResize_2 = (e_5 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(columnsToResize)), columnsToResize_2_1 = columnsToResize_2.next(); !columnsToResize_2_1.done; columnsToResize_2_1 = columnsToResize_2.next()) {
                var column = columnsToResize_2_1.value;
                if (exceedsWindow && allowBleed) {
                    column.width = column.$$oldWidth || column.width || defaultColWidth;
                }
                else {
                    /** @type {?} */
                    var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                    if (column.minWidth && newSize < column.minWidth) {
                        column.width = column.minWidth;
                        columnsProcessed.push(column);
                    }
                    else if (column.maxWidth && newSize > column.maxWidth) {
                        column.width = column.maxWidth;
                        columnsProcessed.push(column);
                    }
                    else {
                        column.width = newSize;
                    }
                }
                column.width = Math.max(0, column.width);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (columnsToResize_2_1 && !columnsToResize_2_1.done && (_b = columnsToResize_2.return)) _b.call(columnsToResize_2);
            }
            finally { if (e_5) throw e_5.error; }
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 * @param {?} columnsToResize
 * @param {?} columnsProcessed
 * @return {?}
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    var e_6, _a;
    try {
        for (var columnsProcessed_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(columnsProcessed), columnsProcessed_1_1 = columnsProcessed_1.next(); !columnsProcessed_1_1.done; columnsProcessed_1_1 = columnsProcessed_1.next()) {
            var column = columnsProcessed_1_1.value;
            /** @type {?} */
            var index = columnsToResize.indexOf(column);
            columnsToResize.splice(index, 1);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (columnsProcessed_1_1 && !columnsProcessed_1_1.done && (_a = columnsProcessed_1.return)) _a.call(columnsProcessed_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
/**
 * Gets the width of the columns
 * @param {?} allColumns
 * @param {?=} defaultColWidth
 * @return {?}
 */
function getContentWidth(allColumns, defaultColWidth) {
    var e_7, _a;
    if (defaultColWidth === void 0) { defaultColWidth = 300; }
    /** @type {?} */
    var contentWidth = 0;
    try {
        for (var allColumns_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(allColumns), allColumns_1_1 = allColumns_1.next(); !allColumns_1_1.done; allColumns_1_1 = allColumns_1.next()) {
            var column = allColumns_1_1.value;
            contentWidth += column.width || defaultColWidth;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (allColumns_1_1 && !allColumns_1_1.done && (_a = allColumns_1.return)) _a.call(allColumns_1);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return contentWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var SortDirection = {
    asc: 'asc',
    desc: 'desc',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the next sort direction
 * @param {?} sortType
 * @param {?} current
 * @return {?}
 */
function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || (isNaN(parseFloat(b)) || !isFinite(b))) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 * @param {?} rows
 * @param {?} columns
 * @param {?} dirs
 * @return {?}
 */
function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(rows);
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     * @type {?}
     */
    var rowToIndexMap = new Map();
    rows.forEach((/**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    function (row, index) { return rowToIndexMap.set(row, index); }));
    /** @type {?} */
    var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(rows);
    /** @type {?} */
    var cols = columns.reduce((/**
     * @param {?} obj
     * @param {?} col
     * @return {?}
     */
    function (obj, col) {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }), {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    /** @type {?} */
    var cachedDirs = dirs.map((/**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        /** @type {?} */
        var prop = dir.prop;
        return {
            prop: prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    }));
    return temp.sort((/**
     * @param {?} rowA
     * @param {?} rowB
     * @return {?}
     */
    function (rowA, rowB) {
        var e_1, _a;
        try {
            for (var cachedDirs_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(cachedDirs), cachedDirs_1_1 = cachedDirs_1.next(); !cachedDirs_1_1.done; cachedDirs_1_1 = cachedDirs_1.next()) {
                var cachedDir = cachedDirs_1_1.value;
                // Get property and valuegetters for column to be sorted
                var prop = cachedDir.prop, valueGetter = cachedDir.valueGetter;
                // Get A and B cell values from rows based on properties of the columns
                /** @type {?} */
                var propA = valueGetter(rowA, prop);
                /** @type {?} */
                var propB = valueGetter(rowB, prop);
                // Compare function gets five parameters:
                // Two cell values to be compared as propA and propB
                // Two rows corresponding to the cells as rowA and rowB
                // Direction of the sort for this column as SortDirection
                // Compare can be a standard JS comparison function (a,b) => -1|0|1
                // as additional parameters are silently ignored. The whole row and sort
                // direction enable more complex sort logic.
                /** @type {?} */
                var comparison = cachedDir.dir !== SortDirection.desc
                    ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                    : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
                // Don't return 0 yet in case of needing to sort by next property
                if (comparison !== 0)
                    return comparison;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (cachedDirs_1_1 && !cachedDirs_1_1.done && (_a = cachedDirs_1.return)) _a.call(cachedDirs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatatableComponent = /** @class */ (function () {
    function DatatableComponent(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * \@memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was selected.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column sort was invoked.
         */
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column was resized.
         */
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowCount = 0;
        this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x; });
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
        // apply global settings from Module.forRoot
        if (this.configuration && this.configuration.messages) {
            this.messages = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this.configuration.messages);
        }
    }
    Object.defineProperty(DatatableComponent.prototype, "rows", {
        /**
         * Gets the rows.
         */
        get: /**
         * Gets the rows.
         * @return {?}
         */
        function () {
            return this._rows;
        },
        /**
         * Rows that are displayed in the table.
         */
        set: /**
         * Rows that are displayed in the table.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rows = val;
            if (val) {
                this._internalRows = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(val);
            }
            // auto sort on new updates
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            // recalculate sizes/etc
            this.recalculate();
            if (this._rows && this._groupRowsBy) {
                // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "groupRowsBy", {
        get: /**
         * @return {?}
         */
        function () {
            return this._groupRowsBy;
        },
        /**
         * This attribute allows the user to set the name of the column to group the data with
         */
        set: /**
         * This attribute allows the user to set the name of the column to group the data with
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this._groupRowsBy = val;
                if (this._rows && this._groupRowsBy) {
                    // cretes a new array with the data grouped
                    this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columns", {
        /**
         * Get the columns.
         */
        get: /**
         * Get the columns.
         * @return {?}
         */
        function () {
            return this._columns;
        },
        /**
         * Columns to be displayed.
         */
        set: /**
         * Columns to be displayed.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this._internalColumns = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(val);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
            }
            this._columns = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "limit", {
        /**
         * Gets the limit.
         */
        get: /**
         * Gets the limit.
         * @return {?}
         */
        function () {
            return this._limit;
        },
        /**
         * The page size to be shown.
         * Default value: `undefined`
         */
        set: /**
         * The page size to be shown.
         * Default value: `undefined`
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._limit = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "count", {
        /**
         * Gets the count.
         */
        get: /**
         * Gets the count.
         * @return {?}
         */
        function () {
            return this._count;
        },
        /**
         * The total count of all rows.
         * Default value: `0`
         */
        set: /**
         * The total count of all rows.
         * Default value: `0`
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._count = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "offset", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
        },
        /**
         * The current offset ( page - 1 ) shown.
         * Default value: `0`
         */
        set: /**
         * The current offset ( page - 1 ) shown.
         * Default value: `0`
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._offset = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedHeader", {
        /**
         * CSS class applied if the header height if fixed height.
         */
        get: /**
         * CSS class applied if the header height if fixed height.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headerHeight = this.headerHeight;
            return typeof headerHeight === 'string' ? (/** @type {?} */ (headerHeight)) !== 'auto' : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedRow", {
        /**
         * CSS class applied to the root element if
         * the row heights are fixed heights.
         */
        get: /**
         * CSS class applied to the root element if
         * the row heights are fixed heights.
         * @return {?}
         */
        function () {
            return this.rowHeight !== 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isVertScroll", {
        /**
         * CSS class applied to root element if
         * vertical scrolling is enabled.
         */
        get: /**
         * CSS class applied to root element if
         * vertical scrolling is enabled.
         * @return {?}
         */
        function () {
            return this.scrollbarV;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isVirtualized", {
        /**
         * CSS class applied to root element if
         * virtualization is enabled.
         */
        get: /**
         * CSS class applied to root element if
         * virtualization is enabled.
         * @return {?}
         */
        function () {
            return this.virtualization;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isHorScroll", {
        /**
         * CSS class applied to the root element
         * if the horziontal scrolling is enabled.
         */
        get: /**
         * CSS class applied to the root element
         * if the horziontal scrolling is enabled.
         * @return {?}
         */
        function () {
            return this.scrollbarH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSelectable", {
        /**
         * CSS class applied to root element is selectable.
         */
        get: /**
         * CSS class applied to root element is selectable.
         * @return {?}
         */
        function () {
            return this.selectionType !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCheckboxSelection", {
        /**
         * CSS class applied to root is checkbox selection.
         */
        get: /**
         * CSS class applied to root is checkbox selection.
         * @return {?}
         */
        function () {
            return this.selectionType === SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCellSelection", {
        /**
         * CSS class applied to root if cell selection.
         */
        get: /**
         * CSS class applied to root if cell selection.
         * @return {?}
         */
        function () {
            return this.selectionType === SelectionType.cell;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSingleSelection", {
        /**
         * CSS class applied to root if single select.
         */
        get: /**
         * CSS class applied to root if single select.
         * @return {?}
         */
        function () {
            return this.selectionType === SelectionType.single;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiSelection", {
        /**
         * CSS class added to root element if mulit select
         */
        get: /**
         * CSS class added to root element if mulit select
         * @return {?}
         */
        function () {
            return this.selectionType === SelectionType.multi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiClickSelection", {
        /**
         * CSS class added to root element if mulit click select
         */
        get: /**
         * CSS class added to root element if mulit click select
         * @return {?}
         */
        function () {
            return this.selectionType === SelectionType.multiClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columnTemplates", {
        /**
         * Returns the column templates.
         */
        get: /**
         * Returns the column templates.
         * @return {?}
         */
        function () {
            return this._columnTemplates;
        },
        /**
         * Column templates gathered from `ContentChildren`
         * if described in your markup.
         */
        set: /**
         * Column templates gathered from `ContentChildren`
         * if described in your markup.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._columnTemplates = val;
            this.translateColumns(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "allRowsSelected", {
        /**
         * Returns if all rows are selected.
         */
        get: /**
         * Returns if all rows are selected.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
            if (this.selectAllRowsOnPage) {
                /** @type {?} */
                var indexes = this.bodyComponent.indexes;
                /** @type {?} */
                var rowsOnPage = indexes.last - indexes.first;
                allRowsSelected = this.selected.length === rowsOnPage;
            }
            return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     */
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     * @return {?}
     */
    DatatableComponent.prototype.ngOnInit = /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     * @return {?}
     */
    function () {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    };
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     */
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     * @return {?}
     */
    DatatableComponent.prototype.ngAfterViewInit = /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame((/**
         * @return {?}
         */
        function () {
            _this.recalculate();
            // emit page for virtual server-side kickoff
            if (_this.externalPaging && _this.scrollbarV) {
                _this.page.emit({
                    count: _this.count,
                    pageSize: _this.pageSize,
                    limit: _this.limit,
                    offset: 0
                });
            }
        }));
    };
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     * @return {?}
     */
    DatatableComponent.prototype.ngAfterContentInit = /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     * @return {?}
     */
    function () {
        var _this = this;
        this.columnTemplates.changes.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.translateColumns(v); }));
        this.listenForColumnInputChanges();
    };
    /**
     * Translates the templates to the column objects
     */
    /**
     * Translates the templates to the column objects
     * @param {?} val
     * @return {?}
     */
    DatatableComponent.prototype.translateColumns = /**
     * Translates the templates to the column objects
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            /** @type {?} */
            var arr = val.toArray();
            if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    };
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param {?} originalArray the original array passed via parameter
     * @param {?} groupBy
     * @return {?}
     */
    DatatableComponent.prototype.groupArrayBy = /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param {?} originalArray the original array passed via parameter
     * @param {?} groupBy
     * @return {?}
     */
    function (originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        /** @type {?} */
        var map = new Map();
        /** @type {?} */
        var i = 0;
        originalArray.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        }));
        /** @type {?} */
        var addGroup = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            return { key: key, value: value };
        });
        // convert map back to a simple array of objects
        return Array.from(map, (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return addGroup(x[0], x[1]); }));
    };
    /*
     * Lifecycle hook that is called when Angular dirty checks a directive.
     */
    /*
       * Lifecycle hook that is called when Angular dirty checks a directive.
       */
    /**
     * @return {?}
     */
    DatatableComponent.prototype.ngDoCheck = /*
       * Lifecycle hook that is called when Angular dirty checks a directive.
       */
    /**
     * @return {?}
     */
    function () {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(this.rows);
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
        }
    };
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     */
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     * @return {?}
     */
    DatatableComponent.prototype.recalculate = /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     * @return {?}
     */
    function () {
        this.recalculateDims();
        this.recalculateColumns();
    };
    /**
     * Window resize handler to update sizes.
     */
    /**
     * Window resize handler to update sizes.
     * @return {?}
     */
    DatatableComponent.prototype.onWindowResize = /**
     * Window resize handler to update sizes.
     * @return {?}
     */
    function () {
        this.recalculate();
    };
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     */
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     * @param {?=} columns
     * @param {?=} forceIdx
     * @param {?=} allowBleed
     * @return {?}
     */
    DatatableComponent.prototype.recalculateColumns = /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     * @param {?=} columns
     * @param {?=} forceIdx
     * @param {?=} allowBleed
     * @return {?}
     */
    function (columns, forceIdx, allowBleed) {
        if (columns === void 0) { columns = this._internalColumns; }
        if (forceIdx === void 0) { forceIdx = -1; }
        if (allowBleed === void 0) { allowBleed = this.scrollbarH; }
        if (!columns)
            return undefined;
        /** @type {?} */
        var width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    };
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     */
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     * @return {?}
     */
    DatatableComponent.prototype.recalculateDims = /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            /** @type {?} */
            var height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    };
    /**
     * Recalculates the pages after a update.
     */
    /**
     * Recalculates the pages after a update.
     * @return {?}
     */
    DatatableComponent.prototype.recalculatePages = /**
     * Recalculates the pages after a update.
     * @return {?}
     */
    function () {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    };
    /**
     * Body triggered a page event.
     */
    /**
     * Body triggered a page event.
     * @param {?} __0
     * @return {?}
     */
    DatatableComponent.prototype.onBodyPage = /**
     * Body triggered a page event.
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var offset = _a.offset;
        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
            return;
        }
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    };
    /**
     * The body triggered a scroll event.
     */
    /**
     * The body triggered a scroll event.
     * @param {?} event
     * @return {?}
     */
    DatatableComponent.prototype.onBodyScroll = /**
     * The body triggered a scroll event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    };
    /**
     * The footer triggered a page event.
     */
    /**
     * The footer triggered a page event.
     * @param {?} event
     * @return {?}
     */
    DatatableComponent.prototype.onFooterPage = /**
     * The footer triggered a page event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    };
    /**
     * Recalculates the sizes of the page
     */
    /**
     * Recalculates the sizes of the page
     * @param {?=} val
     * @return {?}
     */
    DatatableComponent.prototype.calcPageSize = /**
     * Recalculates the sizes of the page
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (val === void 0) { val = this.rows; }
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            var size = Math.ceil(this.bodyHeight / ((/** @type {?} */ (this.rowHeight))));
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    };
    /**
     * Calculates the row count.
     */
    /**
     * Calculates the row count.
     * @param {?=} val
     * @return {?}
     */
    DatatableComponent.prototype.calcRowCount = /**
     * Calculates the row count.
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (val === void 0) { val = this.rows; }
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    };
    /**
     * The header triggered a contextmenu event.
     */
    /**
     * The header triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */
    DatatableComponent.prototype.onColumnContextmenu = /**
     * The header triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, column = _a.column;
        this.tableContextmenu.emit({ event: event, type: ContextmenuType.header, content: column });
    };
    /**
     * The body triggered a contextmenu event.
     */
    /**
     * The body triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */
    DatatableComponent.prototype.onRowContextmenu = /**
     * The body triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, row = _a.row;
        this.tableContextmenu.emit({ event: event, type: ContextmenuType.body, content: row });
    };
    /**
     * The header triggered a column resize event.
     */
    /**
     * The header triggered a column resize event.
     * @param {?} __0
     * @return {?}
     */
    DatatableComponent.prototype.onColumnResize = /**
     * The header triggered a column resize event.
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var column = _a.column, newValue = _a.newValue;
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        /** @type {?} */
        var idx;
        /** @type {?} */
        var cols = this._internalColumns.map((/**
         * @param {?} c
         * @param {?} i
         * @return {?}
         */
        function (c, i) {
            c = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        }));
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column: column,
            newValue: newValue
        });
    };
    /**
     * The header triggered a column re-order event.
     */
    /**
     * The header triggered a column re-order event.
     * @param {?} __0
     * @return {?}
     */
    DatatableComponent.prototype.onColumnReorder = /**
     * The header triggered a column re-order event.
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var column = _a.column, newValue = _a.newValue, prevValue = _a.prevValue;
        /** @type {?} */
        var cols = this._internalColumns.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, c);
        }));
        if (this.swapColumns) {
            /** @type {?} */
            var prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                /** @type {?} */
                var movedCol = cols[prevValue];
                for (var i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                /** @type {?} */
                var movedCol = cols[prevValue];
                for (var i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column: column,
            newValue: newValue,
            prevValue: prevValue
        });
    };
    /**
     * The header triggered a column sort event.
     */
    /**
     * The header triggered a column sort event.
     * @param {?} event
     * @return {?}
     */
    DatatableComponent.prototype.onColumnSort = /**
     * The header triggered a column sort event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    };
    /**
     * Toggle all row selection
     */
    /**
     * Toggle all row selection
     * @param {?} event
     * @return {?}
     */
    DatatableComponent.prototype.onHeaderSelect = /**
     * Toggle all row selection
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _a, _b;
        if (this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            /** @type {?} */
            var first = this.bodyComponent.indexes.first;
            /** @type {?} */
            var last = this.bodyComponent.indexes.last;
            /** @type {?} */
            var allSelected = this.selected.length === last - first;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                (_a = this.selected).push.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(this._internalRows.slice(first, last)));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            /** @type {?} */
            var allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                (_b = this.selected).push.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(this.rows));
            }
        }
        this.select.emit({
            selected: this.selected
        });
    };
    /**
     * A row was selected from body
     */
    /**
     * A row was selected from body
     * @param {?} event
     * @return {?}
     */
    DatatableComponent.prototype.onBodySelect = /**
     * A row was selected from body
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.select.emit(event);
    };
    /**
     * A row was expanded or collapsed for tree
     */
    /**
     * A row was expanded or collapsed for tree
     * @param {?} event
     * @return {?}
     */
    DatatableComponent.prototype.onTreeAction = /**
     * A row was expanded or collapsed for tree
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var row = event.row;
        // TODO: For duplicated items this will not work
        /** @type {?} */
        var rowIndex = this._rows.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r[_this.treeToRelation] === event.row[_this.treeToRelation]; }));
        this.treeAction.emit({ row: row, rowIndex: rowIndex });
    };
    /**
     * @return {?}
     */
    DatatableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) { return subscription.unsubscribe(); }));
    };
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     */
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     * @private
     * @return {?}
     */
    DatatableComponent.prototype.listenForColumnInputChanges = /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.columnTemplates) {
                _this.columnTemplates.notifyOnChanges();
            }
        })));
    };
    /**
     * @private
     * @return {?}
     */
    DatatableComponent.prototype.sortInternalRows = /**
     * @private
     * @return {?}
     */
    function () {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    };
    DatatableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-datatable',
                    template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    host: {
                        class: 'ngx-datatable'
                    },
                    styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;-webkit-transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
                }] }
    ];
    /** @nocollapse */
    DatatableComponent.ctorParameters = function () { return [
        { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: DimensionsHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
        { type: ColumnChangesService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['configuration',] }] }
    ]; };
    DatatableComponent.propDecorators = {
        targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columnMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        externalSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        limit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        swapColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectAllRowsOnPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        treeFromRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        treeToRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        tableContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        isFixedHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-header',] }],
        isFixedRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-row',] }],
        isVertScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-vertical',] }],
        isVirtualized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.virtualized',] }],
        isHorScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-horz',] }],
        isSelectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.selectable',] }],
        isCheckboxSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.checkbox-selection',] }],
        isCellSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.cell-selection',] }],
        isSingleSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.single-selection',] }],
        isMultiSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-selection',] }],
        isMultiClickSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-click-selection',] }],
        columnTemplates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DataTableColumnDirective,] }],
        rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailDirective, { static: false },] }],
        groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderDirective, { static: false },] }],
        footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableFooterDirective, { static: false },] }],
        bodyComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableBodyComponent, { static: false },] }],
        headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableHeaderComponent, { static: false },] }],
        rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        throttleable(5),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", void 0)
    ], DatatableComponent.prototype, "onWindowResize", null);
    return DatatableComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableHeaderCellComponent = /** @class */ (function () {
    function DataTableHeaderCellComponent(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "allRowsSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allRowsSelected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allRowsSelected = value;
            this.cellContext.allRowsSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "column", {
        get: /**
         * @return {?}
         */
        function () {
            return this._column;
        },
        set: /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            this._column = column;
            this.cellContext.column = column;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "sorts", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sorts;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._sorts = val;
            this.sortDir = this.calcSortDir(val);
            this.cellContext.sortDir = this.sortDir;
            this.sortClass = this.calcSortClass(this.sortDir);
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "columnCssClasses", {
        get: /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var cls = 'datatable-header-cell';
            if (this.column.sortable)
                cls += ' sortable';
            if (this.column.resizeable)
                cls += ' resizeable';
            if (this.column.headerClass) {
                if (typeof this.column.headerClass === 'string') {
                    cls += ' ' + this.column.headerClass;
                }
                else if (typeof this.column.headerClass === 'function') {
                    /** @type {?} */
                    var res = this.column.headerClass({
                        column: this.column
                    });
                    if (typeof res === 'string') {
                        cls += res;
                    }
                    else if (typeof res === 'object') {
                        /** @type {?} */
                        var keys = Object.keys(res);
                        try {
                            for (var keys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                                var k = keys_1_1.value;
                                if (res[k] === true)
                                    cls += " " + k;
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                }
            }
            /** @type {?} */
            var sortDir = this.sortDir;
            if (sortDir) {
                cls += " sort-active sort-" + sortDir;
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            // guaranteed to have a value by setColumnDefaults() in column-helper.ts
            return this.column.headerTemplate === undefined ? this.column.name : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "minWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "maxWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "isCheckboxable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    DataTableHeaderCellComponent.prototype.onContextmenu = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    };
    /**
     * @param {?} sorts
     * @return {?}
     */
    DataTableHeaderCellComponent.prototype.calcSortDir = /**
     * @param {?} sorts
     * @return {?}
     */
    function (sorts) {
        var _this = this;
        if (sorts && this.column) {
            /** @type {?} */
            var sort = sorts.find((/**
             * @param {?} s
             * @return {?}
             */
            function (s) {
                return s.prop === _this.column.prop;
            }));
            if (sort)
                return sort.dir;
        }
    };
    /**
     * @return {?}
     */
    DataTableHeaderCellComponent.prototype.onSort = /**
     * @return {?}
     */
    function () {
        if (!this.column.sortable)
            return;
        /** @type {?} */
        var newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue: newValue
        });
    };
    /**
     * @param {?} sortDir
     * @return {?}
     */
    DataTableHeaderCellComponent.prototype.calcSortClass = /**
     * @param {?} sortDir
     * @return {?}
     */
    function (sortDir) {
        if (sortDir === SortDirection.asc) {
            return "sort-btn sort-asc " + this.sortAscendingIcon;
        }
        else if (sortDir === SortDirection.desc) {
            return "sort-btn sort-desc " + this.sortDescendingIcon;
        }
        else {
            return "sort-btn";
        }
    };
    DataTableHeaderCellComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-header-cell',
                    template: "\n    <div class=\"datatable-header-cell-template-wrap\">\n      <ng-template\n        *ngIf=\"isTarget\"\n        [ngTemplateOutlet]=\"targetMarkerTemplate\"\n        [ngTemplateOutletContext]=\"targetMarkerContext\"\n      >\n      </ng-template>\n      <label *ngIf=\"isCheckboxable\" class=\"datatable-checkbox\">\n        <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"select.emit(!allRowsSelected)\" />\n      </label>\n      <span *ngIf=\"!column.headerTemplate\" class=\"datatable-header-cell-wrapper\">\n        <span class=\"datatable-header-cell-label draggable\" (click)=\"onSort()\" [innerHTML]=\"name\"> </span>\n      </span>\n      <ng-template\n        *ngIf=\"column.headerTemplate\"\n        [ngTemplateOutlet]=\"column.headerTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n      <span (click)=\"onSort()\" [class]=\"sortClass\"> </span>\n    </div>\n  ",
                    host: {
                        class: 'datatable-header-cell'
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    DataTableHeaderCellComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    DataTableHeaderCellComponent.propDecorators = {
        sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        targetMarkerContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.title',] }],
        minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
        onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
    };
    return DataTableHeaderCellComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableFooterComponent = /** @class */ (function () {
    function DataTableFooterComponent() {
        this.selectedCount = 0;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DataTableFooterComponent.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rowCount / this.pageSize > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableFooterComponent.prototype, "curPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    DataTableFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-footer',
                    template: "\n    <div\n      class=\"datatable-footer-inner\"\n      [ngClass]=\"{ 'selected-count': selectedMessage }\"\n      [style.height.px]=\"footerHeight\"\n    >\n      <ng-template\n        *ngIf=\"footerTemplate\"\n        [ngTemplateOutlet]=\"footerTemplate.template\"\n        [ngTemplateOutletContext]=\"{\n          rowCount: rowCount,\n          pageSize: pageSize,\n          selectedCount: selectedCount,\n          curPage: curPage,\n          offset: offset\n        }\"\n      >\n      </ng-template>\n      <div class=\"page-count\" *ngIf=\"!footerTemplate\">\n        <span *ngIf=\"selectedMessage\"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>\n        {{ rowCount?.toLocaleString() }} {{ totalMessage }}\n      </div>\n      <datatable-pager\n        *ngIf=\"!footerTemplate\"\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\"\n      >\n      </datatable-pager>\n    </div>\n  ",
                    host: {
                        class: 'datatable-footer'
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    DataTableFooterComponent.propDecorators = {
        footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DataTableFooterComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTablePagerComponent = /** @class */ (function () {
    function DataTablePagerComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    Object.defineProperty(DataTablePagerComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._size = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "count", {
        get: /**
         * @return {?}
         */
        function () {
            return this._count;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._count = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._page = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
            return Math.max(count || 0, 1);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTablePagerComponent.prototype.canPrevious = /**
     * @return {?}
     */
    function () {
        return this.page > 1;
    };
    /**
     * @return {?}
     */
    DataTablePagerComponent.prototype.canNext = /**
     * @return {?}
     */
    function () {
        return this.page < this.totalPages;
    };
    /**
     * @return {?}
     */
    DataTablePagerComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.selectPage(this.page - 1);
    };
    /**
     * @return {?}
     */
    DataTablePagerComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.selectPage(this.page + 1);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    DataTablePagerComponent.prototype.selectPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page: page
            });
        }
    };
    /**
     * @param {?=} page
     * @return {?}
     */
    DataTablePagerComponent.prototype.calcPages = /**
     * @param {?=} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var pages = [];
        /** @type {?} */
        var startPage = 1;
        /** @type {?} */
        var endPage = this.totalPages;
        /** @type {?} */
        var maxSize = 5;
        /** @type {?} */
        var isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (var num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: (/** @type {?} */ (((/** @type {?} */ (num)))))
            });
        }
        return pages;
    };
    DataTablePagerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-pager',
                    template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to first page\" href=\"javascript:void(0)\" (click)=\"selectPage(1)\">\n          <i class=\"{{ pagerPreviousIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to previous page\" href=\"javascript:void(0)\" (click)=\"prevPage()\">\n          <i class=\"{{ pagerLeftArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li\n        role=\"button\"\n        [attr.aria-label]=\"'page ' + pg.number\"\n        class=\"pages\"\n        *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\"\n      >\n        <a href=\"javascript:void(0)\" (click)=\"selectPage(pg.number)\">\n          {{ pg.text }}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to next page\" href=\"javascript:void(0)\" (click)=\"nextPage()\">\n          <i class=\"{{ pagerRightArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to last page\" href=\"javascript:void(0)\" (click)=\"selectPage(totalPages)\">\n          <i class=\"{{ pagerNextIcon }}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
                    host: {
                        class: 'datatable-pager'
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    DataTablePagerComponent.propDecorators = {
        pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DataTablePagerComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-progress',
                    template: "\n    <div class=\"progress-linear\" role=\"progressbar\">\n      <div class=\"container\">\n        <div class=\"bar\"></div>\n      </div>\n    </div>\n  ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    return ProgressBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Keys = {
    up: 38,
    down: 40,
    return: 13,
    escape: 27,
    left: 37,
    right: 39,
};
Keys[Keys.up] = 'up';
Keys[Keys.down] = 'down';
Keys[Keys.return] = 'return';
Keys[Keys.escape] = 'escape';
Keys[Keys.left] = 'left';
Keys[Keys.right] = 'right';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableBodyRowComponent = /** @class */ (function () {
    function DataTableBodyRowComponent(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    Object.defineProperty(DataTableBodyRowComponent.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columns;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._columns = val;
            this.recalculateColumns(val);
            this.buildStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "innerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._innerWidth;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this._columns) {
                /** @type {?} */
                var colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
            }
            this._innerWidth = val;
            this.recalculateColumns();
            this.buildStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "offsetX", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetX;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._offsetX = val;
            this.buildStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "cssClass", {
        get: /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var cls = 'datatable-body-row';
            if (this.isSelected) {
                cls += ' active';
            }
            if (this.rowIndex % 2 !== 0) {
                cls += ' datatable-row-odd';
            }
            if (this.rowIndex % 2 === 0) {
                cls += ' datatable-row-even';
            }
            if (this.rowClass) {
                /** @type {?} */
                var res = this.rowClass(this.row);
                if (typeof res === 'string') {
                    cls += " " + res;
                }
                else if (typeof res === 'object') {
                    /** @type {?} */
                    var keys = Object.keys(res);
                    try {
                        for (var keys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                            var k = keys_1_1.value;
                            if (res[k] === true) {
                                cls += " " + k;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "columnsTotalWidths", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columnGroupWidths.total;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    };
    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.trackByGroups = /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    function (index, colGroup) {
        return colGroup.type;
    };
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.columnTrackingFn = /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    function (index, column) {
        return column.$$id;
    };
    /**
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.buildStylesByGroup = /**
     * @return {?}
     */
    function () {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    };
    /**
     * @param {?} group
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.calcStylesByGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var widths = this._columnGroupWidths;
        /** @type {?} */
        var offsetX = this.offsetX;
        /** @type {?} */
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            var bodyWidth = parseInt(this.innerWidth + '', 0);
            /** @type {?} */
            var totalDiff = widths.total - bodyWidth;
            /** @type {?} */
            var offsetDiff = totalDiff - offsetX;
            /** @type {?} */
            var offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.onActivate = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isTargetRow = event.target === this._element;
        /** @type {?} */
        var isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                rowElement: this._element
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.onMouseenter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activate.emit({
            type: 'mouseenter',
            event: event,
            row: this.row,
            rowElement: this._element
        });
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.recalculateColumns = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (val === void 0) { val = this.columns; }
        this._columns = val;
        /** @type {?} */
        var colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    };
    /**
     * @return {?}
     */
    DataTableBodyRowComponent.prototype.onTreeAction = /**
     * @return {?}
     */
    function () {
        this.treeAction.emit();
    };
    DataTableBodyRowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-body-row',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div\n      *ngFor=\"let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups\"\n      class=\"datatable-row-{{ colGroup.type }} datatable-row-group\"\n      [ngStyle]=\"_groupStyles[colGroup.type]\"\n    >\n      <datatable-body-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [group]=\"group\"\n        [expanded]=\"expanded\"\n        [isSelected]=\"isSelected\"\n        [rowIndex]=\"rowIndex\"\n        [column]=\"column\"\n        [rowHeight]=\"rowHeight\"\n        [displayCheck]=\"displayCheck\"\n        [treeStatus]=\"treeStatus\"\n        (activate)=\"onActivate($event, ii)\"\n        (treeAction)=\"onTreeAction()\"\n      >\n      </datatable-body-cell>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    DataTableBodyRowComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
        { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    DataTableBodyRowComponent.propDecorators = {
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
        rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columnsTotalWidths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
        activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
        onMouseenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter', ['$event'],] }]
    };
    return DataTableBodyRowComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableRowWrapperComponent = /** @class */ (function () {
    function DataTableRowWrapperComponent(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this._expanded = false;
        this.rowDiffer = differs.find({}).create();
    }
    Object.defineProperty(DataTableRowWrapperComponent.prototype, "rowIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rowIndex;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rowIndex = val;
            this.rowContext.rowIndex = val;
            this.groupContext.rowIndex = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableRowWrapperComponent.prototype, "expanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expanded;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._expanded = val;
            this.groupContext.expanded = val;
            this.rowContext.expanded = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableRowWrapperComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DataTableRowWrapperComponent.prototype.onContextmenu = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    };
    /**
     * @return {?}
     */
    DataTableRowWrapperComponent.prototype.getGroupHeaderStyle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    };
    DataTableRowWrapperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-row-wrapper',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div *ngIf=\"groupHeader && groupHeader.template\" class=\"datatable-group-header\" [ngStyle]=\"getGroupHeaderStyle()\">\n      <ng-template\n        *ngIf=\"groupHeader && groupHeader.template\"\n        [ngTemplateOutlet]=\"groupHeader.template\"\n        [ngTemplateOutletContext]=\"groupContext\"\n      >\n      </ng-template>\n    </div>\n    <ng-content *ngIf=\"(groupHeader && groupHeader.template && expanded) || (!groupHeader || !groupHeader.template)\">\n    </ng-content>\n    <div\n      *ngIf=\"rowDetail && rowDetail.template && expanded\"\n      [style.height.px]=\"detailRowHeight\"\n      class=\"datatable-row-detail\"\n    >\n      <ng-template\n        *ngIf=\"rowDetail && rowDetail.template\"\n        [ngTemplateOutlet]=\"rowDetail.template\"\n        [ngTemplateOutletContext]=\"rowContext\"\n      >\n      </ng-template>\n    </div>\n  ",
                    host: {
                        class: 'datatable-row-wrapper'
                    }
                }] }
    ];
    /** @nocollapse */
    DataTableRowWrapperComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }
    ]; };
    DataTableRowWrapperComponent.propDecorators = {
        innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        detailRowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
    };
    return DataTableRowWrapperComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataTableBodyCellComponent = /** @class */ (function () {
    function DataTableBodyCellComponent(element, cd) {
        this.cd = cd;
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    Object.defineProperty(DataTableBodyCellComponent.prototype, "group", {
        get: /**
         * @return {?}
         */
        function () {
            return this._group;
        },
        set: /**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            this._group = group;
            this.cellContext.group = group;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "rowHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rowHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rowHeight = val;
            this.cellContext.rowHeight = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSelected;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isSelected = val;
            this.cellContext.isSelected = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "expanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expanded;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._expanded = val;
            this.cellContext.expanded = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "rowIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rowIndex;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rowIndex = val;
            this.cellContext.rowIndex = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "column", {
        get: /**
         * @return {?}
         */
        function () {
            return this._column;
        },
        set: /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            this._column = column;
            this.cellContext.column = column;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "row", {
        get: /**
         * @return {?}
         */
        function () {
            return this._row;
        },
        set: /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            this._row = row;
            this.cellContext.row = row;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "sorts", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sorts;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._sorts = val;
            this.calcSortDir = this.calcSortDir(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "treeStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._treeStatus;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
                this._treeStatus = 'collapsed';
            }
            else {
                this._treeStatus = status;
            }
            this.cellContext.treeStatus = this._treeStatus;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "columnCssClasses", {
        get: /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var cls = 'datatable-body-cell';
            if (this.column.cellClass) {
                if (typeof this.column.cellClass === 'string') {
                    cls += ' ' + this.column.cellClass;
                }
                else if (typeof this.column.cellClass === 'function') {
                    /** @type {?} */
                    var res = this.column.cellClass({
                        row: this.row,
                        group: this.group,
                        column: this.column,
                        value: this.value,
                        rowHeight: this.rowHeight
                    });
                    if (typeof res === 'string') {
                        cls += res;
                    }
                    else if (typeof res === 'object') {
                        /** @type {?} */
                        var keys = Object.keys(res);
                        try {
                            for (var keys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                                var k = keys_1_1.value;
                                if (res[k] === true) {
                                    cls += " " + k;
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                }
            }
            if (!this.sortDir) {
                cls += ' sort-active';
            }
            if (this.isFocused) {
                cls += ' active';
            }
            if (this.sortDir === SortDirection.asc) {
                cls += ' sort-asc';
            }
            if (this.sortDir === SortDirection.desc) {
                cls += ' sort-desc';
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "minWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "maxWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var height = this.rowHeight;
            if (isNaN(height)) {
                return height;
            }
            return height + 'px';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.checkValueUpdates();
    };
    /**
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    };
    /**
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.checkValueUpdates = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            /** @type {?} */
            var val = this.column.$$valueGetter(this.row, this.column.prop);
            /** @type {?} */
            var userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.isFocused = true;
    };
    /**
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activate.emit({
            type: 'click',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.onDblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activate.emit({
            type: 'dblclick',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isTargetCell = event.target === this._element;
        /** @type {?} */
        var isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.onCheckboxChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activate.emit({
            type: 'checkbox',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    };
    /**
     * @param {?} sorts
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.calcSortDir = /**
     * @param {?} sorts
     * @return {?}
     */
    function (sorts) {
        var _this = this;
        if (!sorts) {
            return;
        }
        /** @type {?} */
        var sort = sorts.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            return s.prop === _this.column.prop;
        }));
        if (sort) {
            return sort.dir;
        }
    };
    /**
     * @param {?} html
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.stripHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    };
    /**
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.onTreeAction = /**
     * @return {?}
     */
    function () {
        this.treeAction.emit(this.row);
    };
    /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    DataTableBodyCellComponent.prototype.calcLeftMargin = /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    function (column, row) {
        /** @type {?} */
        var levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    };
    DataTableBodyCellComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-body-cell',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"datatable-body-cell-label\" [style.margin-left.px]=\"calcLeftMargin(column, row)\">\n      <label\n        *ngIf=\"column.checkboxable && (!displayCheck || displayCheck(row, column, value))\"\n        class=\"datatable-checkbox\"\n      >\n        <input type=\"checkbox\" [checked]=\"isSelected\" (click)=\"onCheckboxChange($event)\" />\n      </label>\n      <ng-container *ngIf=\"column.isTreeColumn\">\n        <button\n          *ngIf=\"!column.treeToggleTemplate\"\n          class=\"datatable-tree-button\"\n          [disabled]=\"treeStatus === 'disabled'\"\n          (click)=\"onTreeAction()\"\n        >\n          <span>\n            <i *ngIf=\"treeStatus === 'loading'\" class=\"icon datatable-icon-collapse\"></i>\n            <i *ngIf=\"treeStatus === 'collapsed'\" class=\"icon datatable-icon-up\"></i>\n            <i *ngIf=\"treeStatus === 'expanded' || treeStatus === 'disabled'\" class=\"icon datatable-icon-down\"></i>\n          </span>\n        </button>\n        <ng-template\n          *ngIf=\"column.treeToggleTemplate\"\n          [ngTemplateOutlet]=\"column.treeToggleTemplate\"\n          [ngTemplateOutletContext]=\"{ cellContext: cellContext }\"\n        >\n        </ng-template>\n      </ng-container>\n\n      <span *ngIf=\"!column.cellTemplate\" [title]=\"sanitizedValue\" [innerHTML]=\"value\"> </span>\n      <ng-template\n        #cellTemplate\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    DataTableBodyCellComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    DataTableBodyCellComponent.propDecorators = {
        displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cellTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: true },] }],
        columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
        minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
        onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
        onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
        onDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dblclick', ['$event'],] }],
        onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
    };
    return DataTableBodyCellComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} selected
 * @param {?} row
 * @param {?} comparefn
 * @return {?}
 */
function selectRows(selected, row, comparefn) {
    /** @type {?} */
    var selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
/**
 * @param {?} selected
 * @param {?} rows
 * @param {?} index
 * @param {?} prevIndex
 * @param {?} comparefn
 * @return {?}
 */
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    /** @type {?} */
    var reverse = index < prevIndex;
    for (var i = 0; i < rows.length; i++) {
        /** @type {?} */
        var row = rows[i];
        /** @type {?} */
        var greater = i >= prevIndex && i <= index;
        /** @type {?} */
        var lesser = i <= prevIndex && i >= index;
        /** @type {?} */
        var range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Model() { }
if (false) {}
var DataTableSelectionComponent = /** @class */ (function () {
    function DataTableSelectionComponent() {
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    DataTableSelectionComponent.prototype.selectRow = /**
     * @param {?} event
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    function (event, index, row) {
        var _a;
        if (!this.selectEnabled)
            return;
        /** @type {?} */
        var chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        var multi = this.selectionType === SelectionType.multi;
        /** @type {?} */
        var multiClick = this.selectionType === SelectionType.multiClick;
        /** @type {?} */
        var selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(this.selected), row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        (_a = this.selected).push.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(selected));
        this.prevIndex = index;
        this.select.emit({
            selected: selected
        });
    };
    /**
     * @param {?} model
     * @param {?} index
     * @return {?}
     */
    DataTableSelectionComponent.prototype.onActivate = /**
     * @param {?} model
     * @param {?} index
     * @return {?}
     */
    function (model, index) {
        var type = model.type, event = model.event, row = model.row;
        /** @type {?} */
        var chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        var select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (((/** @type {?} */ (event))).keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    };
    /**
     * @param {?} model
     * @return {?}
     */
    DataTableSelectionComponent.prototype.onKeyboardFocus = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var keyCode = (/** @type {?} */ (model.event)).keyCode;
        /** @type {?} */
        var shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            /** @type {?} */
            var isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    };
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    DataTableSelectionComponent.prototype.focusRow = /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    function (rowElement, keyCode) {
        /** @type {?} */
        var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    };
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    DataTableSelectionComponent.prototype.getPrevNextRow = /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    function (rowElement, keyCode) {
        /** @type {?} */
        var parentElement = rowElement.parentElement;
        if (parentElement) {
            /** @type {?} */
            var focusElement = void 0;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    };
    /**
     * @param {?} cellElement
     * @param {?} rowElement
     * @param {?} keyCode
     * @param {?} cellIndex
     * @return {?}
     */
    DataTableSelectionComponent.prototype.focusCell = /**
     * @param {?} cellElement
     * @param {?} rowElement
     * @param {?} keyCode
     * @param {?} cellIndex
     * @return {?}
     */
    function (cellElement, rowElement, keyCode, cellIndex) {
        /** @type {?} */
        var nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            /** @type {?} */
            var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                /** @type {?} */
                var children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    DataTableSelectionComponent.prototype.getRowSelected = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    };
    /**
     * @param {?} row
     * @param {?} selected
     * @return {?}
     */
    DataTableSelectionComponent.prototype.getRowSelectedIdx = /**
     * @param {?} row
     * @param {?} selected
     * @return {?}
     */
    function (row, selected) {
        var _this = this;
        if (!selected || !selected.length)
            return -1;
        /** @type {?} */
        var rowId = this.rowIdentity(row);
        return selected.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            /** @type {?} */
            var id = _this.rowIdentity(r);
            return id === rowId;
        }));
    };
    DataTableSelectionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-selection',
                    template: "\n    <ng-content></ng-content>\n  ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    DataTableSelectionComponent.propDecorators = {
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DataTableSelectionComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ISummaryColumn() { }
if (false) {}
/**
 * @param {?} cells
 * @return {?}
 */
function defaultSumFunc(cells) {
    /** @type {?} */
    var cellsWithValues = cells.filter((/**
     * @param {?} cell
     * @return {?}
     */
    function (cell) { return !!cell; }));
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some((/**
     * @param {?} cell
     * @return {?}
     */
    function (cell) { return typeof cell !== 'number'; }))) {
        return null;
    }
    return cellsWithValues.reduce((/**
     * @param {?} res
     * @param {?} cell
     * @return {?}
     */
    function (res, cell) { return res + cell; }));
}
/**
 * @param {?} cells
 * @return {?}
 */
function noopSumFunc(cells) {
    return null;
}
var DataTableSummaryRowComponent = /** @class */ (function () {
    function DataTableSummaryRowComponent() {
        this.summaryRow = {};
    }
    /**
     * @return {?}
     */
    DataTableSummaryRowComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    };
    /**
     * @private
     * @return {?}
     */
    DataTableSummaryRowComponent.prototype.updateInternalColumns = /**
     * @private
     * @return {?}
     */
    function () {
        this._internalColumns = this.columns.map((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, col, { cellTemplate: col.summaryTemplate })); }));
    };
    /**
     * @private
     * @return {?}
     */
    DataTableSummaryRowComponent.prototype.updateValues = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.summaryRow = {};
        this.columns
            .filter((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return !col.summaryTemplate; }))
            .forEach((/**
         * @param {?} col
         * @return {?}
         */
        function (col) {
            /** @type {?} */
            var cellsFromSingleColumn = _this.rows.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return row[col.prop]; }));
            /** @type {?} */
            var sumFunc = _this.getSummaryFunction(col);
            _this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        }));
    };
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    DataTableSummaryRowComponent.prototype.getSummaryFunction = /**
     * @private
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    };
    DataTableSummaryRowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'datatable-summary-row',
                    template: "\n    <datatable-body-row\n      *ngIf=\"summaryRow && _internalColumns\"\n      tabindex=\"-1\"\n      [innerWidth]=\"innerWidth\"\n      [offsetX]=\"offsetX\"\n      [columns]=\"_internalColumns\"\n      [rowHeight]=\"rowHeight\"\n      [row]=\"summaryRow\"\n      [rowIndex]=\"-1\"\n    >\n    </datatable-body-row>\n  ",
                    host: {
                        class: 'datatable-summary-row'
                    }
                }] }
    ];
    DataTableSummaryRowComponent.propDecorators = {
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return DataTableSummaryRowComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDatatableModule = /** @class */ (function () {
    function NgxDatatableModule() {
    }
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param configuration
     */
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param {?} configuration
     * @return {?}
     */
    NgxDatatableModule.forRoot = /**
     * Configure global configuration via INgxDatatableConfig
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        return {
            ngModule: NgxDatatableModule,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    };
    NgxDatatableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
                    declarations: [
                        DataTableFooterTemplateDirective,
                        VisibilityDirective,
                        DraggableDirective,
                        ResizeableDirective,
                        OrderableDirective,
                        LongPressDirective,
                        ScrollerComponent,
                        DatatableComponent,
                        DataTableColumnDirective,
                        DataTableHeaderComponent,
                        DataTableHeaderCellComponent,
                        DataTableBodyComponent,
                        DataTableFooterComponent,
                        DataTablePagerComponent,
                        ProgressBarComponent,
                        DataTableBodyRowComponent,
                        DataTableRowWrapperComponent,
                        DatatableRowDetailDirective,
                        DatatableGroupHeaderDirective,
                        DatatableRowDetailTemplateDirective,
                        DataTableBodyCellComponent,
                        DataTableSelectionComponent,
                        DataTableColumnHeaderDirective,
                        DataTableColumnCellDirective,
                        DataTableColumnCellTreeToggle,
                        DatatableFooterDirective,
                        DatatableGroupHeaderTemplateDirective,
                        DataTableSummaryRowComponent
                    ],
                    exports: [
                        DatatableComponent,
                        DatatableRowDetailDirective,
                        DatatableGroupHeaderDirective,
                        DatatableRowDetailTemplateDirective,
                        DataTableColumnDirective,
                        DataTableColumnHeaderDirective,
                        DataTableColumnCellDirective,
                        DataTableColumnCellTreeToggle,
                        DataTableFooterTemplateDirective,
                        DatatableFooterDirective,
                        DataTablePagerComponent,
                        DatatableGroupHeaderTemplateDirective
                    ]
                },] }
    ];
    return NgxDatatableModule;
}());
/**
 * Interface definition for INgxDatatableConfig global configuration
 * @record
 */
function INgxDatatableConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ClickType = {
    single: 'single',
    double: 'double',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Column Type
 * @record
 */
function TableColumn() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SortPropDir() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
function elementsFromPoint(x, y) {
    /** @type {?} */
    var elements = [];
    /** @type {?} */
    var previousPointerEvents = [];
    /** @type {?} */
    var current;
    // TODO: window.getComputedStyle should be used with inferred type (Element)
    /** @type {?} */
    var i;
    /** @type {?} */
    var d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]);) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=swimlane-ngx-datatable.js.map


/***/ }),

/***/ "./node_modules/@tweenjs/tween.js/src/Tween.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tweenjs/tween.js/src/Tween.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */


var _Group = function () {
	this._tweens = {};
	this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
	getAll: function () {

		return Object.keys(this._tweens).map(function (tweenId) {
			return this._tweens[tweenId];
		}.bind(this));

	},

	removeAll: function () {

		this._tweens = {};

	},

	add: function (tween) {

		this._tweens[tween.getId()] = tween;
		this._tweensAddedDuringUpdate[tween.getId()] = tween;

	},

	remove: function (tween) {

		delete this._tweens[tween.getId()];
		delete this._tweensAddedDuringUpdate[tween.getId()];

	},

	update: function (time, preserve) {

		var tweenIds = Object.keys(this._tweens);

		if (tweenIds.length === 0) {
			return false;
		}

		time = time !== undefined ? time : TWEEN.now();

		// Tweens are updated in "batches". If you add a new tween during an update, then the
		// new tween will be updated in the next batch.
		// If you remove a tween during an update, it may or may not be updated. However,
		// if the removed tween was added during the current batch, then it will not be updated.
		while (tweenIds.length > 0) {
			this._tweensAddedDuringUpdate = {};

			for (var i = 0; i < tweenIds.length; i++) {

				var tween = this._tweens[tweenIds[i]];

				if (tween && tween.update(time) === false) {
					tween._isPlaying = false;

					if (!preserve) {
						delete this._tweens[tweenIds[i]];
					}
				}
			}

			tweenIds = Object.keys(this._tweensAddedDuringUpdate);
		}

		return true;

	}
};

var TWEEN = new _Group();

TWEEN.Group = _Group;
TWEEN._nextId = 0;
TWEEN.nextId = function () {
	return TWEEN._nextId++;
};


// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {
	TWEEN.now = function () {
		var time = process.hrtime();

		// Convert [seconds, nanoseconds] to milliseconds.
		return time[0] * 1000 + time[1] / 1000000;
	};
}
// In a browser, use self.performance.now if it is available.
else if (typeof (self) !== 'undefined' &&
         self.performance !== undefined &&
		 self.performance.now !== undefined) {
	// This must be bound, because directly assigning this function
	// leads to an invocation exception in Chrome.
	TWEEN.now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
	TWEEN.now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
	TWEEN.now = function () {
		return new Date().getTime();
	};
}


TWEEN.Tween = function (object, group) {
	this._object = object;
	this._valuesStart = {};
	this._valuesEnd = {};
	this._valuesStartRepeat = {};
	this._duration = 1000;
	this._repeat = 0;
	this._repeatDelayTime = undefined;
	this._yoyo = false;
	this._isPlaying = false;
	this._reversed = false;
	this._delayTime = 0;
	this._startTime = null;
	this._easingFunction = TWEEN.Easing.Linear.None;
	this._interpolationFunction = TWEEN.Interpolation.Linear;
	this._chainedTweens = [];
	this._onStartCallback = null;
	this._onStartCallbackFired = false;
	this._onUpdateCallback = null;
	this._onRepeatCallback = null;
	this._onCompleteCallback = null;
	this._onStopCallback = null;
	this._group = group || TWEEN;
	this._id = TWEEN.nextId();

};

TWEEN.Tween.prototype = {
	getId: function () {
		return this._id;
	},

	isPlaying: function () {
		return this._isPlaying;
	},

	to: function (properties, duration) {

		this._valuesEnd = properties;

		if (duration !== undefined) {
			this._duration = duration;
		}

		return this;

	},

	duration: function duration(d) {
		this._duration = d;
		return this;
	},

	start: function (time) {

		this._group.add(this);

		this._isPlaying = true;

		this._onStartCallbackFired = false;

		this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
		this._startTime += this._delayTime;

		for (var property in this._valuesEnd) {

			// Check if an Array was provided as property value
			if (this._valuesEnd[property] instanceof Array) {

				if (this._valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (this._object[property] === undefined) {
				continue;
			}

			// Save the starting value.
			this._valuesStart[property] = this._object[property];

			if ((this._valuesStart[property] instanceof Array) === false) {
				this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

		}

		return this;

	},

	stop: function () {

		if (!this._isPlaying) {
			return this;
		}

		this._group.remove(this);
		this._isPlaying = false;

		if (this._onStopCallback !== null) {
			this._onStopCallback(this._object);
		}

		this.stopChainedTweens();
		return this;

	},

	end: function () {

		this.update(Infinity);
		return this;

	},

	stopChainedTweens: function () {

		for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
			this._chainedTweens[i].stop();
		}

	},

	group: function (group) {
		this._group = group;
		return this;
	},

	delay: function (amount) {

		this._delayTime = amount;
		return this;

	},

	repeat: function (times) {

		this._repeat = times;
		return this;

	},

	repeatDelay: function (amount) {

		this._repeatDelayTime = amount;
		return this;

	},

	yoyo: function (yoyo) {

		this._yoyo = yoyo;
		return this;

	},

	easing: function (easingFunction) {

		this._easingFunction = easingFunction;
		return this;

	},

	interpolation: function (interpolationFunction) {

		this._interpolationFunction = interpolationFunction;
		return this;

	},

	chain: function () {

		this._chainedTweens = arguments;
		return this;

	},

	onStart: function (callback) {

		this._onStartCallback = callback;
		return this;

	},

	onUpdate: function (callback) {

		this._onUpdateCallback = callback;
		return this;

	},

	onRepeat: function onRepeat(callback) {

		this._onRepeatCallback = callback;
		return this;

	},

	onComplete: function (callback) {

		this._onCompleteCallback = callback;
		return this;

	},

	onStop: function (callback) {

		this._onStopCallback = callback;
		return this;

	},

	update: function (time) {

		var property;
		var elapsed;
		var value;

		if (time < this._startTime) {
			return true;
		}

		if (this._onStartCallbackFired === false) {

			if (this._onStartCallback !== null) {
				this._onStartCallback(this._object);
			}

			this._onStartCallbackFired = true;
		}

		elapsed = (time - this._startTime) / this._duration;
		elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

		value = this._easingFunction(elapsed);

		for (property in this._valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (this._valuesStart[property] === undefined) {
				continue;
			}

			var start = this._valuesStart[property] || 0;
			var end = this._valuesEnd[property];

			if (end instanceof Array) {

				this._object[property] = this._interpolationFunction(end, value);

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof (end) === 'string') {

					if (end.charAt(0) === '+' || end.charAt(0) === '-') {
						end = start + parseFloat(end);
					} else {
						end = parseFloat(end);
					}
				}

				// Protect against non numeric properties.
				if (typeof (end) === 'number') {
					this._object[property] = start + (end - start) * value;
				}

			}

		}

		if (this._onUpdateCallback !== null) {
			this._onUpdateCallback(this._object, elapsed);
		}

		if (elapsed === 1) {

			if (this._repeat > 0) {

				if (isFinite(this._repeat)) {
					this._repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in this._valuesStartRepeat) {

					if (typeof (this._valuesEnd[property]) === 'string') {
						this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
					}

					if (this._yoyo) {
						var tmp = this._valuesStartRepeat[property];

						this._valuesStartRepeat[property] = this._valuesEnd[property];
						this._valuesEnd[property] = tmp;
					}

					this._valuesStart[property] = this._valuesStartRepeat[property];

				}

				if (this._yoyo) {
					this._reversed = !this._reversed;
				}

				if (this._repeatDelayTime !== undefined) {
					this._startTime = time + this._repeatDelayTime;
				} else {
					this._startTime = time + this._delayTime;
				}

				if (this._onRepeatCallback !== null) {
					this._onRepeatCallback(this._object);
				}

				return true;

			} else {

				if (this._onCompleteCallback !== null) {

					this._onCompleteCallback(this._object);
				}

				for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					this._chainedTweens[i].start(this._startTime + this._duration);
				}

				return false;

			}

		}

		return true;

	}
};


TWEEN.Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

		},

		Out: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			k *= 2;

			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}

			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

	},

	Bezier: function (v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;

	},

	CatmullRom: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

		}

	},

	Utils: {

		Linear: function (p0, p1, t) {

			return (p1 - p0) * t + p0;

		},

		Bernstein: function (n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);

		},

		Factorial: (function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;

			};

		})(),

		CatmullRom: function (p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	if (true) {

		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return TWEEN;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	} else {}

})(this);


/***/ }),

/***/ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js ***!
  \*******************************************************************************************/
/*! exports provided: AngularMultiSelect, AngularMultiSelectModule, ClickOutsideDirective, Item, ListFilterPipe, TemplateRenderer, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelect", function() { return AngularMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelectModule", function() { return AngularMultiSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterPipe", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRenderer", function() { return TemplateRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DROPDOWN_CONTROL_VALIDATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return styleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return setPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return VirtualScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return VirtualScrollerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/src/Tween.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyException = /** @class */ (function () {
    function MyException(status, body) {
        this.status = status;
        this.body = body;
    }
    return MyException;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    ClickOutsideDirective.prototype.onClick = /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        /** @type {?} */
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[clickOutside]'
                },] }
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ClickOutsideDirective.propDecorators = {
        clickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event', '$event.target'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchstart', ['$event', '$event.target'],] }]
    };
    return ClickOutsideDirective;
}());
if (false) {}
var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    ScrollDirective.prototype.onClick = /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    function (event, targetElement) {
        this.scroll.emit(event);
    };
    ScrollDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[scroll]'
                },] }
    ];
    /** @nocollapse */
    ScrollDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ScrollDirective.propDecorators = {
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['scroll', ['$event'],] }]
    };
    return ScrollDirective;
}());
if (false) {}
var styleDirective = /** @class */ (function () {
    function styleDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    styleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.style.top = this.styleVal;
    };
    /**
     * @return {?}
     */
    styleDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.style.top = this.styleVal;
    };
    styleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[styleProp]'
                },] }
    ];
    /** @nocollapse */
    styleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    styleDirective.propDecorators = {
        styleVal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['styleProp',] }]
    };
    return styleDirective;
}());
if (false) {}
var setPosition = /** @class */ (function () {
    function setPosition(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    setPosition.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    };
    /**
     * @return {?}
     */
    setPosition.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    };
    setPosition.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[setPosition]'
                },] }
    ];
    /** @nocollapse */
    setPosition.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    setPosition.propDecorators = {
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['setPosition',] }]
    };
    return setPosition;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataService = /** @class */ (function () {
    function DataService() {
        this.filteredData = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    DataService.prototype.setData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.filteredData = data;
        this.subject.next(data);
    };
    /**
     * @return {?}
     */
    DataService.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
    };
    /**
     * @return {?}
     */
    DataService.prototype.getFilteredData = /**
     * @return {?}
     */
    function () {
        if (this.filteredData && this.filteredData.length > 0) {
            return this.filteredData;
        }
        else {
            return [];
        }
    };
    DataService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return DataService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe(ds) {
        this.ds = ds;
        this.filteredList = [];
    }
    /**
     * @param {?} items
     * @param {?} filter
     * @param {?} searchBy
     * @return {?}
     */
    ListFilterPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} filter
     * @param {?} searchBy
     * @return {?}
     */
    function (items, filter, searchBy) {
        var _this = this;
        if (!items || !filter) {
            this.ds.setData(items);
            return items;
        }
        this.filteredList = items.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.applyFilter(item, filter, searchBy); }));
        this.ds.setData(this.filteredList);
        return this.filteredList;
    };
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} searchBy
     * @return {?}
     */
    ListFilterPipe.prototype.applyFilter = /**
     * @param {?} item
     * @param {?} filter
     * @param {?} searchBy
     * @return {?}
     */
    function (item, filter, searchBy) {
        /** @type {?} */
        var found = false;
        if (searchBy.length > 0) {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var t = 0; t < searchBy.length; t++) {
                    if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                        if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }
        else {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var prop in item) {
                    if (filter && item[prop]) {
                        if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }
        return found;
    };
    ListFilterPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'listFilter',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    ListFilterPipe.ctorParameters = function () { return [
        { type: DataService }
    ]; };
    return ListFilterPipe;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'c-item',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    Item.ctorParameters = function () { return []; };
    Item.propDecorators = {
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }]
    };
    return Item;
}());
if (false) {}
var Badge = /** @class */ (function () {
    function Badge() {
    }
    Badge.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'c-badge',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    Badge.ctorParameters = function () { return []; };
    Badge.propDecorators = {
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }]
    };
    return Badge;
}());
if (false) {}
var Search = /** @class */ (function () {
    function Search() {
    }
    Search.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'c-search',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    Search.ctorParameters = function () { return []; };
    Search.propDecorators = {
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }]
    };
    return Search;
}());
if (false) {}
var TemplateRenderer = /** @class */ (function () {
    function TemplateRenderer(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    TemplateRenderer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.data.template, {
            '\$implicit': this.data,
            'item': this.item
        });
    };
    /**
     * @return {?}
     */
    TemplateRenderer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    TemplateRenderer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'c-templateRenderer',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    TemplateRenderer.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    TemplateRenderer.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TemplateRenderer;
}());
if (false) {}
var CIcon = /** @class */ (function () {
    function CIcon() {
    }
    CIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'c-icon',
                    template: "<svg *ngIf=\"name == 'remove'\" width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                        viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\">\n                        <g>\n                            <path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\"/>\n                        </g>\n                    </svg>\n            <svg *ngIf=\"name == 'angle-down'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n<g>\n\t<g id=\"_x31_0_34_\">\n\t\t<g>\n\t\t\t<path d=\"M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>\n<svg *ngIf=\"name == 'angle-up'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n<g>\n\t<g id=\"_x39__30_\">\n\t\t<g>\n\t\t\t<path d=\"M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z\"/>\n\t\t</g>\n\t</g>\n</g>\n\n</svg>\n<svg *ngIf=\"name == 'search'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 615.52 615.52\" style=\"enable-background:new 0 0 615.52 615.52;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<g id=\"Search__x28_and_thou_shall_find_x29_\">\n\t\t\t<g>\n\t\t\t\t<path d=\"M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n</g>\n\n</svg>\n<svg *ngIf=\"name == 'clear'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 51.976 51.976\" style=\"enable-background:new 0 0 51.976 51.976;\" xml:space=\"preserve\">\n<g>\n\t<path d=\"M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n\t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n\t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n\t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n\t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z\"/>\n</g>\n</svg>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                }] }
    ];
    CIcon.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CIcon;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY() {
    return {
        scrollThrottlingTime: 0,
        scrollDebounceTime: 0,
        scrollAnimationTime: 750,
        checkResizeInterval: 1000,
        resizeBypassRefreshThreshold: 5,
        modifyOverflowStyleOfParentScroll: true,
        stripedTable: false
    };
}
var VirtualScrollerComponent = /** @class */ (function () {
    function VirtualScrollerComponent(element, renderer, zone, changeDetectorRef, platformId, options) {
        this.element = element;
        this.renderer = renderer;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.window = window;
        this.executeRefreshOutsideAngularZone = false;
        this._enableUnequalChildrenSizes = false;
        this.useMarginInsteadOfTranslate = false;
        this.ssrViewportWidth = 1920;
        this.ssrViewportHeight = 1080;
        this._bufferAmount = 0;
        this._items = [];
        this.compareItems = (/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        function (item1, item2) { return item1 === item2; });
        this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.calculatedScrollbarWidth = 0;
        this.calculatedScrollbarHeight = 0;
        this.padding = 0;
        this.previousViewPort = (/** @type {?} */ ({}));
        this.cachedPageSize = 0;
        this.previousScrollNumberElements = 0;
        this.isAngularUniversalSSR = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(platformId);
        this.scrollThrottlingTime = options.scrollThrottlingTime;
        this.scrollDebounceTime = options.scrollDebounceTime;
        this.scrollAnimationTime = options.scrollAnimationTime;
        this.scrollbarWidth = options.scrollbarWidth;
        this.scrollbarHeight = options.scrollbarHeight;
        this.checkResizeInterval = options.checkResizeInterval;
        this.resizeBypassRefreshThreshold = options.resizeBypassRefreshThreshold;
        this.modifyOverflowStyleOfParentScroll = options.modifyOverflowStyleOfParentScroll;
        this.stripedTable = options.stripedTable;
        this.horizontal = false;
        this.resetWrapGroupDimensions();
    }
    Object.defineProperty(VirtualScrollerComponent.prototype, "viewPortInfo", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var pageInfo = this.previousViewPort || (/** @type {?} */ ({}));
            return {
                startIndex: pageInfo.startIndex || 0,
                endIndex: pageInfo.endIndex || 0,
                scrollStartPosition: pageInfo.scrollStartPosition || 0,
                scrollEndPosition: pageInfo.scrollEndPosition || 0,
                maxScrollPosition: pageInfo.maxScrollPosition || 0,
                startIndexWithBuffer: pageInfo.startIndexWithBuffer || 0,
                endIndexWithBuffer: pageInfo.endIndexWithBuffer || 0
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScrollerComponent.prototype, "enableUnequalChildrenSizes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._enableUnequalChildrenSizes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._enableUnequalChildrenSizes === value) {
                return;
            }
            this._enableUnequalChildrenSizes = value;
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScrollerComponent.prototype, "bufferAmount", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof (this._bufferAmount) === 'number' && this._bufferAmount >= 0) {
                return this._bufferAmount;
            }
            else {
                return this.enableUnequalChildrenSizes ? 5 : 0;
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bufferAmount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScrollerComponent.prototype, "scrollThrottlingTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollThrottlingTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._scrollThrottlingTime = value;
            this.updateOnScrollFunction();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScrollerComponent.prototype, "scrollDebounceTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollDebounceTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._scrollDebounceTime = value;
            this.updateOnScrollFunction();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.updateOnScrollFunction = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this_1 = this;
        if (this.scrollDebounceTime) {
            this.onScroll = (/** @type {?} */ (this.debounce((/**
             * @return {?}
             */
            function () {
                _this_1.refresh_internal(false);
            }), this.scrollDebounceTime)));
        }
        else if (this.scrollThrottlingTime) {
            this.onScroll = (/** @type {?} */ (this.throttleTrailing((/**
             * @return {?}
             */
            function () {
                _this_1.refresh_internal(false);
            }), this.scrollThrottlingTime)));
        }
        else {
            this.onScroll = (/**
             * @return {?}
             */
            function () {
                _this_1.refresh_internal(false);
            });
        }
    };
    Object.defineProperty(VirtualScrollerComponent.prototype, "checkResizeInterval", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checkResizeInterval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._checkResizeInterval === value) {
                return;
            }
            this._checkResizeInterval = value;
            this.addScrollEventHandlers();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScrollerComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === this._items) {
                return;
            }
            this._items = value || [];
            this.refresh_internal(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualScrollerComponent.prototype, "horizontal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._horizontal;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._horizontal = value;
            this.updateDirection();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.revertParentOverscroll = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollElement = this.getScrollElement();
        if (scrollElement && this.oldParentScrollOverflow) {
            scrollElement.style['overflow-y'] = this.oldParentScrollOverflow.y;
            scrollElement.style['overflow-x'] = this.oldParentScrollOverflow.x;
        }
        this.oldParentScrollOverflow = undefined;
    };
    Object.defineProperty(VirtualScrollerComponent.prototype, "parentScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parentScroll;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._parentScroll === value) {
                return;
            }
            this.revertParentOverscroll();
            this._parentScroll = value;
            this.addScrollEventHandlers();
            /** @type {?} */
            var scrollElement = this.getScrollElement();
            if (this.modifyOverflowStyleOfParentScroll && scrollElement !== this.element.nativeElement) {
                this.oldParentScrollOverflow = { x: scrollElement.style['overflow-x'], y: scrollElement.style['overflow-y'] };
                scrollElement.style['overflow-y'] = this.horizontal ? 'visible' : 'auto';
                scrollElement.style['overflow-x'] = this.horizontal ? 'auto' : 'visible';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VirtualScrollerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addScrollEventHandlers();
    };
    /**
     * @return {?}
     */
    VirtualScrollerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeScrollEventHandlers();
        this.revertParentOverscroll();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VirtualScrollerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var indexLengthChanged = this.cachedItemsLength !== this.items.length;
        this.cachedItemsLength = this.items.length;
        /** @type {?} */
        var firstRun = !changes.items || !changes.items.previousValue || changes.items.previousValue.length === 0;
        this.refresh_internal(indexLengthChanged || firstRun);
    };
    /**
     * @return {?}
     */
    VirtualScrollerComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.cachedItemsLength !== this.items.length) {
            this.cachedItemsLength = this.items.length;
            this.refresh_internal(true);
            return;
        }
        if (this.previousViewPort && this.viewPortItems && this.viewPortItems.length > 0) {
            /** @type {?} */
            var itemsArrayChanged = false;
            for (var i = 0; i < this.viewPortItems.length; ++i) {
                if (!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer + i], this.viewPortItems[i])) {
                    itemsArrayChanged = true;
                    break;
                }
            }
            if (itemsArrayChanged) {
                this.refresh_internal(true);
            }
        }
    };
    /**
     * @return {?}
     */
    VirtualScrollerComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.refresh_internal(true);
    };
    /**
     * @return {?}
     */
    VirtualScrollerComponent.prototype.invalidateAllCachedMeasurements = /**
     * @return {?}
     */
    function () {
        this.wrapGroupDimensions = {
            maxChildSizePerWrapGroup: [],
            numberOfKnownWrapGroupChildSizes: 0,
            sumOfKnownWrapGroupChildWidths: 0,
            sumOfKnownWrapGroupChildHeights: 0
        };
        this.minMeasuredChildWidth = undefined;
        this.minMeasuredChildHeight = undefined;
        this.refresh_internal(false);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    VirtualScrollerComponent.prototype.invalidateCachedMeasurementForItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.enableUnequalChildrenSizes) {
            /** @type {?} */
            var index = this.items && this.items.indexOf(item);
            if (index >= 0) {
                this.invalidateCachedMeasurementAtIndex(index);
            }
        }
        else {
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
        }
        this.refresh_internal(false);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    VirtualScrollerComponent.prototype.invalidateCachedMeasurementAtIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.enableUnequalChildrenSizes) {
            /** @type {?} */
            var cachedMeasurement = this.wrapGroupDimensions.maxChildSizePerWrapGroup[index];
            if (cachedMeasurement) {
                this.wrapGroupDimensions.maxChildSizePerWrapGroup[index] = undefined;
                --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= cachedMeasurement.childWidth || 0;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= cachedMeasurement.childHeight || 0;
            }
        }
        else {
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
        }
        this.refresh_internal(false);
    };
    /**
     * @param {?} item
     * @param {?=} alignToBeginning
     * @param {?=} additionalOffset
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    VirtualScrollerComponent.prototype.scrollInto = /**
     * @param {?} item
     * @param {?=} alignToBeginning
     * @param {?=} additionalOffset
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    function (item, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback) {
        if (alignToBeginning === void 0) { alignToBeginning = true; }
        if (additionalOffset === void 0) { additionalOffset = 0; }
        if (animationMilliseconds === void 0) { animationMilliseconds = undefined; }
        if (animationCompletedCallback === void 0) { animationCompletedCallback = undefined; }
        /** @type {?} */
        var index = this.items.indexOf(item);
        if (index === -1) {
            return;
        }
        this.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
    };
    /**
     * @param {?} index
     * @param {?=} alignToBeginning
     * @param {?=} additionalOffset
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    VirtualScrollerComponent.prototype.scrollToIndex = /**
     * @param {?} index
     * @param {?=} alignToBeginning
     * @param {?=} additionalOffset
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    function (index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback) {
        var _this_1 = this;
        if (alignToBeginning === void 0) { alignToBeginning = true; }
        if (additionalOffset === void 0) { additionalOffset = 0; }
        if (animationMilliseconds === void 0) { animationMilliseconds = undefined; }
        if (animationCompletedCallback === void 0) { animationCompletedCallback = undefined; }
        /** @type {?} */
        var maxRetries = 5;
        /** @type {?} */
        var retryIfNeeded = (/**
         * @return {?}
         */
        function () {
            --maxRetries;
            if (maxRetries <= 0) {
                if (animationCompletedCallback) {
                    animationCompletedCallback();
                }
                return;
            }
            /** @type {?} */
            var dimensions = _this_1.calculateDimensions();
            /** @type {?} */
            var desiredStartIndex = Math.min(Math.max(index, 0), dimensions.itemCount - 1);
            if (_this_1.previousViewPort.startIndex === desiredStartIndex) {
                if (animationCompletedCallback) {
                    animationCompletedCallback();
                }
                return;
            }
            _this_1.scrollToIndex_internal(index, alignToBeginning, additionalOffset, 0, retryIfNeeded);
        });
        this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, animationMilliseconds, retryIfNeeded);
    };
    /**
     * @protected
     * @param {?} index
     * @param {?=} alignToBeginning
     * @param {?=} additionalOffset
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    VirtualScrollerComponent.prototype.scrollToIndex_internal = /**
     * @protected
     * @param {?} index
     * @param {?=} alignToBeginning
     * @param {?=} additionalOffset
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    function (index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback) {
        if (alignToBeginning === void 0) { alignToBeginning = true; }
        if (additionalOffset === void 0) { additionalOffset = 0; }
        if (animationMilliseconds === void 0) { animationMilliseconds = undefined; }
        if (animationCompletedCallback === void 0) { animationCompletedCallback = undefined; }
        animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
        /** @type {?} */
        var dimensions = this.calculateDimensions();
        /** @type {?} */
        var scroll = this.calculatePadding(index, dimensions) + additionalOffset;
        if (!alignToBeginning) {
            scroll -= dimensions.wrapGroupsPerPage * dimensions[this._childScrollDim];
        }
        this.scrollToPosition(scroll, animationMilliseconds, animationCompletedCallback);
    };
    /**
     * @param {?} scrollPosition
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    VirtualScrollerComponent.prototype.scrollToPosition = /**
     * @param {?} scrollPosition
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    function (scrollPosition, animationMilliseconds, animationCompletedCallback) {
        var _this_1 = this;
        if (animationMilliseconds === void 0) { animationMilliseconds = undefined; }
        if (animationCompletedCallback === void 0) { animationCompletedCallback = undefined; }
        scrollPosition += this.getElementsOffset();
        animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
        /** @type {?} */
        var scrollElement = this.getScrollElement();
        /** @type {?} */
        var animationRequest;
        if (this.currentTween) {
            this.currentTween.stop();
            this.currentTween = undefined;
        }
        if (!animationMilliseconds) {
            this.renderer.setProperty(scrollElement, this._scrollType, scrollPosition);
            this.refresh_internal(false, animationCompletedCallback);
            return;
        }
        /** @type {?} */
        var tweenConfigObj = { scrollPosition: scrollElement[this._scrollType] };
        /** @type {?} */
        var newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__["Tween"](tweenConfigObj)
            .to({ scrollPosition: scrollPosition }, animationMilliseconds)
            .easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__["Easing"].Quadratic.Out)
            .onUpdate((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (isNaN(data.scrollPosition)) {
                return;
            }
            _this_1.renderer.setProperty(scrollElement, _this_1._scrollType, data.scrollPosition);
            _this_1.refresh_internal(false);
        }))
            .onStop((/**
         * @return {?}
         */
        function () {
            cancelAnimationFrame(animationRequest);
        }))
            .start();
        /** @type {?} */
        var animate = (/**
         * @param {?=} time
         * @return {?}
         */
        function (time) {
            if (!newTween["isPlaying"]()) {
                return;
            }
            newTween.update(time);
            if (tweenConfigObj.scrollPosition === scrollPosition) {
                _this_1.refresh_internal(false, animationCompletedCallback);
                return;
            }
            _this_1.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                animationRequest = requestAnimationFrame(animate);
            }));
        });
        animate();
        this.currentTween = newTween;
    };
    /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    VirtualScrollerComponent.prototype.getElementSize = /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var result = element.getBoundingClientRect();
        /** @type {?} */
        var styles = getComputedStyle(element);
        /** @type {?} */
        var marginTop = parseInt(styles['margin-top'], 10) || 0;
        /** @type {?} */
        var marginBottom = parseInt(styles['margin-bottom'], 10) || 0;
        /** @type {?} */
        var marginLeft = parseInt(styles['margin-left'], 10) || 0;
        /** @type {?} */
        var marginRight = parseInt(styles['margin-right'], 10) || 0;
        return {
            top: result.top + marginTop,
            bottom: result.bottom + marginBottom,
            left: result.left + marginLeft,
            right: result.right + marginRight,
            width: result.width + marginLeft + marginRight,
            height: result.height + marginTop + marginBottom
        };
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.checkScrollElementResized = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var boundingRect = this.getElementSize(this.getScrollElement());
        /** @type {?} */
        var sizeChanged;
        if (!this.previousScrollBoundingRect) {
            sizeChanged = true;
        }
        else {
            /** @type {?} */
            var widthChange = Math.abs(boundingRect.width - this.previousScrollBoundingRect.width);
            /** @type {?} */
            var heightChange = Math.abs(boundingRect.height - this.previousScrollBoundingRect.height);
            sizeChanged = widthChange > this.resizeBypassRefreshThreshold || heightChange > this.resizeBypassRefreshThreshold;
        }
        if (sizeChanged) {
            this.previousScrollBoundingRect = boundingRect;
            if (boundingRect.width > 0 && boundingRect.height > 0) {
                this.refresh_internal(false);
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.updateDirection = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.horizontal) {
            this._invisiblePaddingProperty = 'width';
            this._offsetType = 'offsetLeft';
            this._pageOffsetType = 'pageXOffset';
            this._childScrollDim = 'childWidth';
            this._marginDir = 'margin-left';
            this._translateDir = 'translateX';
            this._scrollType = 'scrollLeft';
        }
        else {
            this._invisiblePaddingProperty = 'height';
            this._offsetType = 'offsetTop';
            this._pageOffsetType = 'pageYOffset';
            this._childScrollDim = 'childHeight';
            this._marginDir = 'margin-top';
            this._translateDir = 'translateY';
            this._scrollType = 'scrollTop';
        }
    };
    /**
     * @protected
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    VirtualScrollerComponent.prototype.debounce = /**
     * @protected
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    function (func, wait) {
        /** @type {?} */
        var throttled = this.throttleTrailing(func, wait);
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () {
            throttled['cancel']();
            throttled.apply(this, arguments);
        });
        result['cancel'] = (/**
         * @return {?}
         */
        function () {
            throttled['cancel']();
        });
        return result;
    };
    /**
     * @protected
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    VirtualScrollerComponent.prototype.throttleTrailing = /**
     * @protected
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    function (func, wait) {
        /** @type {?} */
        var timeout = undefined;
        /** @type {?} */
        var _arguments = arguments;
        /** @type {?} */
        var result = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var _this = this;
            _arguments = arguments;
            if (timeout) {
                return;
            }
            if (wait <= 0) {
                func.apply(_this, _arguments);
            }
            else {
                timeout = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    timeout = undefined;
                    func.apply(_this, _arguments);
                }), wait);
            }
        });
        result['cancel'] = (/**
         * @return {?}
         */
        function () {
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
        });
        return result;
    };
    /**
     * @protected
     * @param {?} itemsArrayModified
     * @param {?=} refreshCompletedCallback
     * @param {?=} maxRunTimes
     * @return {?}
     */
    VirtualScrollerComponent.prototype.refresh_internal = /**
     * @protected
     * @param {?} itemsArrayModified
     * @param {?=} refreshCompletedCallback
     * @param {?=} maxRunTimes
     * @return {?}
     */
    function (itemsArrayModified, refreshCompletedCallback, maxRunTimes) {
        //note: maxRunTimes is to force it to keep recalculating if the previous iteration caused a re-render (different sliced items in viewport or scrollPosition changed).
        //The default of 2x max will probably be accurate enough without causing too large a performance bottleneck
        //The code would typically quit out on the 2nd iteration anyways. The main time it'd think more than 2 runs would be necessary would be for vastly different sized child items or if this is the 1st time the items array was initialized.
        //Without maxRunTimes, If the user is actively scrolling this code would become an infinite loop until they stopped scrolling. This would be okay, except each scroll event would start an additional infinte loop. We want to short-circuit it to prevent this.
        var _this_1 = this;
        if (refreshCompletedCallback === void 0) { refreshCompletedCallback = undefined; }
        if (maxRunTimes === void 0) { maxRunTimes = 2; }
        if (itemsArrayModified && this.previousViewPort && this.previousViewPort.scrollStartPosition > 0) {
            //if items were prepended, scroll forward to keep same items visible
            /** @type {?} */
            var oldViewPort_1 = this.previousViewPort;
            /** @type {?} */
            var oldViewPortItems_1 = this.viewPortItems;
            /** @type {?} */
            var oldRefreshCompletedCallback_1 = refreshCompletedCallback;
            refreshCompletedCallback = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var scrollLengthDelta = _this_1.previousViewPort.scrollLength - oldViewPort_1.scrollLength;
                if (scrollLengthDelta > 0 && _this_1.viewPortItems) {
                    /** @type {?} */
                    var oldStartItem_1 = oldViewPortItems_1[0];
                    /** @type {?} */
                    var oldStartItemIndex = _this_1.items.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return _this_1.compareItems(oldStartItem_1, x); }));
                    if (oldStartItemIndex > _this_1.previousViewPort.startIndexWithBuffer) {
                        /** @type {?} */
                        var itemOrderChanged = false;
                        for (var i = 1; i < _this_1.viewPortItems.length; ++i) {
                            if (!_this_1.compareItems(_this_1.items[oldStartItemIndex + i], oldViewPortItems_1[i])) {
                                itemOrderChanged = true;
                                break;
                            }
                        }
                        if (!itemOrderChanged) {
                            _this_1.scrollToPosition(_this_1.previousViewPort.scrollStartPosition + scrollLengthDelta, 0, oldRefreshCompletedCallback_1);
                            return;
                        }
                    }
                }
                if (oldRefreshCompletedCallback_1) {
                    oldRefreshCompletedCallback_1();
                }
            });
        }
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            requestAnimationFrame((/**
             * @return {?}
             */
            function () {
                if (itemsArrayModified) {
                    _this_1.resetWrapGroupDimensions();
                }
                /** @type {?} */
                var viewport = _this_1.calculateViewport();
                /** @type {?} */
                var startChanged = itemsArrayModified || viewport.startIndex !== _this_1.previousViewPort.startIndex;
                /** @type {?} */
                var endChanged = itemsArrayModified || viewport.endIndex !== _this_1.previousViewPort.endIndex;
                /** @type {?} */
                var scrollLengthChanged = viewport.scrollLength !== _this_1.previousViewPort.scrollLength;
                /** @type {?} */
                var paddingChanged = viewport.padding !== _this_1.previousViewPort.padding;
                /** @type {?} */
                var scrollPositionChanged = viewport.scrollStartPosition !== _this_1.previousViewPort.scrollStartPosition || viewport.scrollEndPosition !== _this_1.previousViewPort.scrollEndPosition || viewport.maxScrollPosition !== _this_1.previousViewPort.maxScrollPosition;
                _this_1.previousViewPort = viewport;
                if (scrollLengthChanged) {
                    _this_1.renderer.setStyle(_this_1.invisiblePaddingElementRef.nativeElement, _this_1._invisiblePaddingProperty, viewport.scrollLength + "px");
                }
                if (paddingChanged) {
                    if (_this_1.useMarginInsteadOfTranslate) {
                        _this_1.renderer.setStyle(_this_1.contentElementRef.nativeElement, _this_1._marginDir, viewport.padding + "px");
                    }
                    else {
                        _this_1.renderer.setStyle(_this_1.contentElementRef.nativeElement, 'transform', _this_1._translateDir + "(" + viewport.padding + "px)");
                        _this_1.renderer.setStyle(_this_1.contentElementRef.nativeElement, 'webkitTransform', _this_1._translateDir + "(" + viewport.padding + "px)");
                    }
                }
                if (_this_1.headerElementRef) {
                    /** @type {?} */
                    var scrollPosition = _this_1.getScrollElement()[_this_1._scrollType];
                    /** @type {?} */
                    var containerOffset = _this_1.getElementsOffset();
                    /** @type {?} */
                    var offset = Math.max(scrollPosition - viewport.padding - containerOffset + _this_1.headerElementRef.nativeElement.clientHeight, 0);
                    _this_1.renderer.setStyle(_this_1.headerElementRef.nativeElement, 'transform', _this_1._translateDir + "(" + offset + "px)");
                    _this_1.renderer.setStyle(_this_1.headerElementRef.nativeElement, 'webkitTransform', _this_1._translateDir + "(" + offset + "px)");
                }
                /** @type {?} */
                var changeEventArg = (startChanged || endChanged) ? {
                    startIndex: viewport.startIndex,
                    endIndex: viewport.endIndex,
                    scrollStartPosition: viewport.scrollStartPosition,
                    scrollEndPosition: viewport.scrollEndPosition,
                    startIndexWithBuffer: viewport.startIndexWithBuffer,
                    endIndexWithBuffer: viewport.endIndexWithBuffer,
                    maxScrollPosition: viewport.maxScrollPosition
                } : undefined;
                if (startChanged || endChanged || scrollPositionChanged) {
                    /** @type {?} */
                    var handleChanged = (/**
                     * @return {?}
                     */
                    function () {
                        // update the scroll list to trigger re-render of components in viewport
                        _this_1.viewPortItems = viewport.startIndexWithBuffer >= 0 && viewport.endIndexWithBuffer >= 0 ? _this_1.items.slice(viewport.startIndexWithBuffer, viewport.endIndexWithBuffer + 1) : [];
                        _this_1.vsUpdate.emit(_this_1.viewPortItems);
                        if (startChanged) {
                            _this_1.vsStart.emit(changeEventArg);
                        }
                        if (endChanged) {
                            _this_1.vsEnd.emit(changeEventArg);
                        }
                        if (startChanged || endChanged) {
                            _this_1.changeDetectorRef.markForCheck();
                            _this_1.vsChange.emit(changeEventArg);
                        }
                        if (maxRunTimes > 0) {
                            _this_1.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
                            return;
                        }
                        if (refreshCompletedCallback) {
                            refreshCompletedCallback();
                        }
                    });
                    if (_this_1.executeRefreshOutsideAngularZone) {
                        handleChanged();
                    }
                    else {
                        _this_1.zone.run(handleChanged);
                    }
                }
                else {
                    if (maxRunTimes > 0 && (scrollLengthChanged || paddingChanged)) {
                        _this_1.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
                        return;
                    }
                    if (refreshCompletedCallback) {
                        refreshCompletedCallback();
                    }
                }
            }));
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.getScrollElement = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.parentScroll instanceof Window ? document.scrollingElement || document.documentElement || document.body : this.parentScroll || this.element.nativeElement;
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.addScrollEventHandlers = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this_1 = this;
        if (this.isAngularUniversalSSR) {
            return;
        }
        /** @type {?} */
        var scrollElement = this.getScrollElement();
        this.removeScrollEventHandlers();
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (_this_1.parentScroll instanceof Window) {
                _this_1.disposeScrollHandler = _this_1.renderer.listen('window', 'scroll', _this_1.onScroll);
                _this_1.disposeResizeHandler = _this_1.renderer.listen('window', 'resize', _this_1.onScroll);
            }
            else {
                _this_1.disposeScrollHandler = _this_1.renderer.listen(scrollElement, 'scroll', _this_1.onScroll);
                if (_this_1._checkResizeInterval > 0) {
                    _this_1.checkScrollElementResizedTimer = (/** @type {?} */ (setInterval((/**
                     * @return {?}
                     */
                    function () { _this_1.checkScrollElementResized(); }), _this_1._checkResizeInterval)));
                }
            }
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.removeScrollEventHandlers = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.checkScrollElementResizedTimer) {
            clearInterval(this.checkScrollElementResizedTimer);
        }
        if (this.disposeScrollHandler) {
            this.disposeScrollHandler();
            this.disposeScrollHandler = undefined;
        }
        if (this.disposeResizeHandler) {
            this.disposeResizeHandler();
            this.disposeResizeHandler = undefined;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.getElementsOffset = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.isAngularUniversalSSR) {
            return 0;
        }
        /** @type {?} */
        var offset = 0;
        if (this.containerElementRef && this.containerElementRef.nativeElement) {
            offset += this.containerElementRef.nativeElement[this._offsetType];
        }
        if (this.parentScroll) {
            /** @type {?} */
            var scrollElement = this.getScrollElement();
            /** @type {?} */
            var elementClientRect = this.getElementSize(this.element.nativeElement);
            /** @type {?} */
            var scrollClientRect = this.getElementSize(scrollElement);
            if (this.horizontal) {
                offset += elementClientRect.left - scrollClientRect.left;
            }
            else {
                offset += elementClientRect.top - scrollClientRect.top;
            }
            if (!(this.parentScroll instanceof Window)) {
                offset += scrollElement[this._scrollType];
            }
        }
        return offset;
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.countItemsPerWrapGroup = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.isAngularUniversalSSR) {
            return Math.round(this.horizontal ? this.ssrViewportHeight / this.ssrChildHeight : this.ssrViewportWidth / this.ssrChildWidth);
        }
        /** @type {?} */
        var propertyName = this.horizontal ? 'offsetLeft' : 'offsetTop';
        /** @type {?} */
        var children = ((this.containerElementRef && this.containerElementRef.nativeElement) || this.contentElementRef.nativeElement).children;
        /** @type {?} */
        var childrenLength = children ? children.length : 0;
        if (childrenLength === 0) {
            return 1;
        }
        /** @type {?} */
        var firstOffset = children[0][propertyName];
        /** @type {?} */
        var result = 1;
        while (result < childrenLength && firstOffset === children[result][propertyName]) {
            ++result;
        }
        return result;
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.getScrollStartPosition = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var windowScrollValue = undefined;
        if (this.parentScroll instanceof Window) {
            windowScrollValue = window[this._pageOffsetType];
        }
        return windowScrollValue || this.getScrollElement()[this._scrollType] || 0;
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.resetWrapGroupDimensions = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var oldWrapGroupDimensions = this.wrapGroupDimensions;
        this.invalidateAllCachedMeasurements();
        if (!this.enableUnequalChildrenSizes || !oldWrapGroupDimensions || oldWrapGroupDimensions.numberOfKnownWrapGroupChildSizes === 0) {
            return;
        }
        /** @type {?} */
        var itemsPerWrapGroup = this.countItemsPerWrapGroup();
        for (var wrapGroupIndex = 0; wrapGroupIndex < oldWrapGroupDimensions.maxChildSizePerWrapGroup.length; ++wrapGroupIndex) {
            /** @type {?} */
            var oldWrapGroupDimension = oldWrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];
            if (!oldWrapGroupDimension || !oldWrapGroupDimension.items || !oldWrapGroupDimension.items.length) {
                continue;
            }
            if (oldWrapGroupDimension.items.length !== itemsPerWrapGroup) {
                return;
            }
            /** @type {?} */
            var itemsChanged = false;
            /** @type {?} */
            var arrayStartIndex = itemsPerWrapGroup * wrapGroupIndex;
            for (var i = 0; i < itemsPerWrapGroup; ++i) {
                if (!this.compareItems(oldWrapGroupDimension.items[i], this.items[arrayStartIndex + i])) {
                    itemsChanged = true;
                    break;
                }
            }
            if (!itemsChanged) {
                ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += oldWrapGroupDimension.childWidth || 0;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += oldWrapGroupDimension.childHeight || 0;
                this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = oldWrapGroupDimension;
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.calculateDimensions = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollElement = this.getScrollElement();
        /** @type {?} */
        var maxCalculatedScrollBarSize = 25;
        this.calculatedScrollbarHeight = Math.max(Math.min(scrollElement.offsetHeight - scrollElement.clientHeight, maxCalculatedScrollBarSize), this.calculatedScrollbarHeight);
        this.calculatedScrollbarWidth = Math.max(Math.min(scrollElement.offsetWidth - scrollElement.clientWidth, maxCalculatedScrollBarSize), this.calculatedScrollbarWidth);
        /** @type {?} */
        var viewportWidth = scrollElement.offsetWidth - (this.scrollbarWidth || this.calculatedScrollbarWidth || (this.horizontal ? 0 : maxCalculatedScrollBarSize));
        /** @type {?} */
        var viewportHeight = scrollElement.offsetHeight - (this.scrollbarHeight || this.calculatedScrollbarHeight || (this.horizontal ? maxCalculatedScrollBarSize : 0));
        /** @type {?} */
        var content = (this.containerElementRef && this.containerElementRef.nativeElement) || this.contentElementRef.nativeElement;
        /** @type {?} */
        var itemsPerWrapGroup = this.countItemsPerWrapGroup();
        /** @type {?} */
        var wrapGroupsPerPage;
        /** @type {?} */
        var defaultChildWidth;
        /** @type {?} */
        var defaultChildHeight;
        if (this.isAngularUniversalSSR) {
            viewportWidth = this.ssrViewportWidth;
            viewportHeight = this.ssrViewportHeight;
            defaultChildWidth = this.ssrChildWidth;
            defaultChildHeight = this.ssrChildHeight;
            /** @type {?} */
            var itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
            /** @type {?} */
            var itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
            wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
        }
        else if (!this.enableUnequalChildrenSizes) {
            if (content.children.length > 0) {
                if (!this.childWidth || !this.childHeight) {
                    if (!this.minMeasuredChildWidth && viewportWidth > 0) {
                        this.minMeasuredChildWidth = viewportWidth;
                    }
                    if (!this.minMeasuredChildHeight && viewportHeight > 0) {
                        this.minMeasuredChildHeight = viewportHeight;
                    }
                }
                /** @type {?} */
                var child = content.children[0];
                /** @type {?} */
                var clientRect = this.getElementSize(child);
                this.minMeasuredChildWidth = Math.min(this.minMeasuredChildWidth, clientRect.width);
                this.minMeasuredChildHeight = Math.min(this.minMeasuredChildHeight, clientRect.height);
            }
            defaultChildWidth = this.childWidth || this.minMeasuredChildWidth || viewportWidth;
            defaultChildHeight = this.childHeight || this.minMeasuredChildHeight || viewportHeight;
            /** @type {?} */
            var itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
            /** @type {?} */
            var itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
            wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
        }
        else {
            /** @type {?} */
            var scrollOffset = scrollElement[this._scrollType] - (this.previousViewPort ? this.previousViewPort.padding : 0);
            /** @type {?} */
            var arrayStartIndex = this.previousViewPort.startIndexWithBuffer || 0;
            /** @type {?} */
            var wrapGroupIndex = Math.ceil(arrayStartIndex / itemsPerWrapGroup);
            /** @type {?} */
            var maxWidthForWrapGroup = 0;
            /** @type {?} */
            var maxHeightForWrapGroup = 0;
            /** @type {?} */
            var sumOfVisibleMaxWidths = 0;
            /** @type {?} */
            var sumOfVisibleMaxHeights = 0;
            wrapGroupsPerPage = 0;
            for (var i = 0; i < content.children.length; ++i) {
                ++arrayStartIndex;
                /** @type {?} */
                var child = content.children[i];
                /** @type {?} */
                var clientRect = this.getElementSize(child);
                maxWidthForWrapGroup = Math.max(maxWidthForWrapGroup, clientRect.width);
                maxHeightForWrapGroup = Math.max(maxHeightForWrapGroup, clientRect.height);
                if (arrayStartIndex % itemsPerWrapGroup === 0) {
                    /** @type {?} */
                    var oldValue = this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];
                    if (oldValue) {
                        --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                        this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= oldValue.childWidth || 0;
                        this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= oldValue.childHeight || 0;
                    }
                    ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                    /** @type {?} */
                    var items = this.items.slice(arrayStartIndex - itemsPerWrapGroup, arrayStartIndex);
                    this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = {
                        childWidth: maxWidthForWrapGroup,
                        childHeight: maxHeightForWrapGroup,
                        items: items
                    };
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += maxWidthForWrapGroup;
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += maxHeightForWrapGroup;
                    if (this.horizontal) {
                        /** @type {?} */
                        var maxVisibleWidthForWrapGroup = Math.min(maxWidthForWrapGroup, Math.max(viewportWidth - sumOfVisibleMaxWidths, 0));
                        if (scrollOffset > 0) {
                            /** @type {?} */
                            var scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleWidthForWrapGroup);
                            maxVisibleWidthForWrapGroup -= scrollOffsetToRemove;
                            scrollOffset -= scrollOffsetToRemove;
                        }
                        sumOfVisibleMaxWidths += maxVisibleWidthForWrapGroup;
                        if (maxVisibleWidthForWrapGroup > 0 && viewportWidth >= sumOfVisibleMaxWidths) {
                            ++wrapGroupsPerPage;
                        }
                    }
                    else {
                        /** @type {?} */
                        var maxVisibleHeightForWrapGroup = Math.min(maxHeightForWrapGroup, Math.max(viewportHeight - sumOfVisibleMaxHeights, 0));
                        if (scrollOffset > 0) {
                            /** @type {?} */
                            var scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleHeightForWrapGroup);
                            maxVisibleHeightForWrapGroup -= scrollOffsetToRemove;
                            scrollOffset -= scrollOffsetToRemove;
                        }
                        sumOfVisibleMaxHeights += maxVisibleHeightForWrapGroup;
                        if (maxVisibleHeightForWrapGroup > 0 && viewportHeight >= sumOfVisibleMaxHeights) {
                            ++wrapGroupsPerPage;
                        }
                    }
                    ++wrapGroupIndex;
                    maxWidthForWrapGroup = 0;
                    maxHeightForWrapGroup = 0;
                }
            }
            /** @type {?} */
            var averageChildWidth = this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            /** @type {?} */
            var averageChildHeight = this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            defaultChildWidth = this.childWidth || averageChildWidth || viewportWidth;
            defaultChildHeight = this.childHeight || averageChildHeight || viewportHeight;
            if (this.horizontal) {
                if (viewportWidth > sumOfVisibleMaxWidths) {
                    wrapGroupsPerPage += Math.ceil((viewportWidth - sumOfVisibleMaxWidths) / defaultChildWidth);
                }
            }
            else {
                if (viewportHeight > sumOfVisibleMaxHeights) {
                    wrapGroupsPerPage += Math.ceil((viewportHeight - sumOfVisibleMaxHeights) / defaultChildHeight);
                }
            }
        }
        /** @type {?} */
        var itemCount = this.items.length;
        /** @type {?} */
        var itemsPerPage = itemsPerWrapGroup * wrapGroupsPerPage;
        /** @type {?} */
        var pageCount_fractional = itemCount / itemsPerPage;
        /** @type {?} */
        var numberOfWrapGroups = Math.ceil(itemCount / itemsPerWrapGroup);
        /** @type {?} */
        var scrollLength = 0;
        /** @type {?} */
        var defaultScrollLengthPerWrapGroup = this.horizontal ? defaultChildWidth : defaultChildHeight;
        if (this.enableUnequalChildrenSizes) {
            /** @type {?} */
            var numUnknownChildSizes = 0;
            for (var i = 0; i < numberOfWrapGroups; ++i) {
                /** @type {?} */
                var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
                if (childSize) {
                    scrollLength += childSize;
                }
                else {
                    ++numUnknownChildSizes;
                }
            }
            scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
        }
        else {
            scrollLength = numberOfWrapGroups * defaultScrollLengthPerWrapGroup;
        }
        if (this.headerElementRef) {
            scrollLength += this.headerElementRef.nativeElement.clientHeight;
        }
        /** @type {?} */
        var viewportLength = this.horizontal ? viewportWidth : viewportHeight;
        /** @type {?} */
        var maxScrollPosition = Math.max(scrollLength - viewportLength, 0);
        return {
            itemCount: itemCount,
            itemsPerWrapGroup: itemsPerWrapGroup,
            wrapGroupsPerPage: wrapGroupsPerPage,
            itemsPerPage: itemsPerPage,
            pageCount_fractional: pageCount_fractional,
            childWidth: defaultChildWidth,
            childHeight: defaultChildHeight,
            scrollLength: scrollLength,
            viewportLength: viewportLength,
            maxScrollPosition: maxScrollPosition
        };
    };
    /**
     * @protected
     * @param {?} arrayStartIndexWithBuffer
     * @param {?} dimensions
     * @return {?}
     */
    VirtualScrollerComponent.prototype.calculatePadding = /**
     * @protected
     * @param {?} arrayStartIndexWithBuffer
     * @param {?} dimensions
     * @return {?}
     */
    function (arrayStartIndexWithBuffer, dimensions) {
        if (dimensions.itemCount === 0) {
            return 0;
        }
        /** @type {?} */
        var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
        /** @type {?} */
        var startingWrapGroupIndex = Math.floor(arrayStartIndexWithBuffer / dimensions.itemsPerWrapGroup) || 0;
        if (!this.enableUnequalChildrenSizes) {
            return defaultScrollLengthPerWrapGroup * startingWrapGroupIndex;
        }
        /** @type {?} */
        var numUnknownChildSizes = 0;
        /** @type {?} */
        var result = 0;
        for (var i = 0; i < startingWrapGroupIndex; ++i) {
            /** @type {?} */
            var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
            if (childSize) {
                result += childSize;
            }
            else {
                ++numUnknownChildSizes;
            }
        }
        result += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
        return result;
    };
    /**
     * @protected
     * @param {?} scrollPosition
     * @param {?} dimensions
     * @return {?}
     */
    VirtualScrollerComponent.prototype.calculatePageInfo = /**
     * @protected
     * @param {?} scrollPosition
     * @param {?} dimensions
     * @return {?}
     */
    function (scrollPosition, dimensions) {
        /** @type {?} */
        var scrollPercentage = 0;
        if (this.enableUnequalChildrenSizes) {
            /** @type {?} */
            var numberOfWrapGroups = Math.ceil(dimensions.itemCount / dimensions.itemsPerWrapGroup);
            /** @type {?} */
            var totalScrolledLength = 0;
            /** @type {?} */
            var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
            for (var i = 0; i < numberOfWrapGroups; ++i) {
                /** @type {?} */
                var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
                if (childSize) {
                    totalScrolledLength += childSize;
                }
                else {
                    totalScrolledLength += defaultScrollLengthPerWrapGroup;
                }
                if (scrollPosition < totalScrolledLength) {
                    scrollPercentage = i / numberOfWrapGroups;
                    break;
                }
            }
        }
        else {
            scrollPercentage = scrollPosition / dimensions.scrollLength;
        }
        /** @type {?} */
        var startingArrayIndex_fractional = Math.min(Math.max(scrollPercentage * dimensions.pageCount_fractional, 0), dimensions.pageCount_fractional) * dimensions.itemsPerPage;
        /** @type {?} */
        var maxStart = dimensions.itemCount - dimensions.itemsPerPage - 1;
        /** @type {?} */
        var arrayStartIndex = Math.min(Math.floor(startingArrayIndex_fractional), maxStart);
        arrayStartIndex -= arrayStartIndex % dimensions.itemsPerWrapGroup; // round down to start of wrapGroup
        if (this.stripedTable) {
            /** @type {?} */
            var bufferBoundary = 2 * dimensions.itemsPerWrapGroup;
            if (arrayStartIndex % bufferBoundary !== 0) {
                arrayStartIndex = Math.max(arrayStartIndex - arrayStartIndex % bufferBoundary, 0);
            }
        }
        /** @type {?} */
        var arrayEndIndex = Math.ceil(startingArrayIndex_fractional) + dimensions.itemsPerPage - 1;
        /** @type {?} */
        var endIndexWithinWrapGroup = (arrayEndIndex + 1) % dimensions.itemsPerWrapGroup;
        if (endIndexWithinWrapGroup > 0) {
            arrayEndIndex += dimensions.itemsPerWrapGroup - endIndexWithinWrapGroup; // round up to end of wrapGroup
        }
        if (isNaN(arrayStartIndex)) {
            arrayStartIndex = 0;
        }
        if (isNaN(arrayEndIndex)) {
            arrayEndIndex = 0;
        }
        arrayStartIndex = Math.min(Math.max(arrayStartIndex, 0), dimensions.itemCount - 1);
        arrayEndIndex = Math.min(Math.max(arrayEndIndex, 0), dimensions.itemCount - 1);
        /** @type {?} */
        var bufferSize = this.bufferAmount * dimensions.itemsPerWrapGroup;
        /** @type {?} */
        var startIndexWithBuffer = Math.min(Math.max(arrayStartIndex - bufferSize, 0), dimensions.itemCount - 1);
        /** @type {?} */
        var endIndexWithBuffer = Math.min(Math.max(arrayEndIndex + bufferSize, 0), dimensions.itemCount - 1);
        return {
            startIndex: arrayStartIndex,
            endIndex: arrayEndIndex,
            startIndexWithBuffer: startIndexWithBuffer,
            endIndexWithBuffer: endIndexWithBuffer,
            scrollStartPosition: scrollPosition,
            scrollEndPosition: scrollPosition + dimensions.viewportLength,
            maxScrollPosition: dimensions.maxScrollPosition
        };
    };
    /**
     * @protected
     * @return {?}
     */
    VirtualScrollerComponent.prototype.calculateViewport = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dimensions = this.calculateDimensions();
        /** @type {?} */
        var offset = this.getElementsOffset();
        /** @type {?} */
        var scrollStartPosition = this.getScrollStartPosition();
        if (scrollStartPosition > (dimensions.scrollLength + offset) && !(this.parentScroll instanceof Window)) {
            scrollStartPosition = dimensions.scrollLength;
        }
        else {
            scrollStartPosition -= offset;
        }
        scrollStartPosition = Math.max(0, scrollStartPosition);
        /** @type {?} */
        var pageInfo = this.calculatePageInfo(scrollStartPosition, dimensions);
        /** @type {?} */
        var newPadding = this.calculatePadding(pageInfo.startIndexWithBuffer, dimensions);
        /** @type {?} */
        var newScrollLength = dimensions.scrollLength;
        return {
            startIndex: pageInfo.startIndex,
            endIndex: pageInfo.endIndex,
            startIndexWithBuffer: pageInfo.startIndexWithBuffer,
            endIndexWithBuffer: pageInfo.endIndexWithBuffer,
            padding: Math.round(newPadding),
            scrollLength: Math.round(newScrollLength),
            scrollStartPosition: pageInfo.scrollStartPosition,
            scrollEndPosition: pageInfo.scrollEndPosition,
            maxScrollPosition: pageInfo.maxScrollPosition
        };
    };
    VirtualScrollerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'virtual-scroller,[virtualScroller]',
                    exportAs: 'virtualScroller',
                    template: "\n    <div class=\"total-padding\" #invisiblePadding></div>\n    <div class=\"scrollable-content\" #content>\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[class.horizontal]': "horizontal",
                        '[class.vertical]': "!horizontal",
                        '[class.selfScroll]': "!parentScroll"
                    },
                    styles: ["\n    :host {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t:host.horizontal.selfScroll {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t:host.vertical.selfScroll {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content ::ng-deep > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t:host.horizontal {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t:host.horizontal .scrollable-content {\n\t\tdisplay: flex;\n\t}\n\t\n\t:host.horizontal .scrollable-content ::ng-deep > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    :host.horizontal .total-padding {\n      height: 100%;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    VirtualScrollerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['virtual-scroller-default-options',] }] }
    ]; };
    VirtualScrollerComponent.propDecorators = {
        executeRefreshOutsideAngularZone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        enableUnequalChildrenSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        useMarginInsteadOfTranslate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        modifyOverflowStyleOfParentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        stripedTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollbarWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollbarHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        childWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        childHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ssrChildWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ssrChildHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ssrViewportWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ssrViewportHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollAnimationTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resizeBypassRefreshThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollThrottlingTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollDebounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checkResizeInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        compareItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        parentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        vsUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        vsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        vsStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        vsEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }],
        invisiblePaddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['invisiblePadding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }],
        headerElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['header', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }],
        containerElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }]
    };
    return VirtualScrollerComponent;
}());
if (false) {}
var VirtualScrollerModule = /** @class */ (function () {
    function VirtualScrollerModule() {
    }
    VirtualScrollerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [VirtualScrollerComponent],
                    declarations: [VirtualScrollerComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    providers: [
                        {
                            provide: 'virtual-scroller-default-options',
                            useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
                        }
                    ]
                },] }
    ];
    return VirtualScrollerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return AngularMultiSelect; })),
    multi: true
};
/** @type {?} */
var DROPDOWN_CONTROL_VALIDATION = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return AngularMultiSelect; })),
    multi: true,
};
/** @type {?} */
var noop = (/**
 * @return {?}
 */
function () {
});
var ɵ0 = noop;
var AngularMultiSelect = /** @class */ (function () {
    function AngularMultiSelect(_elementRef, cdr, ds) {
        var _this = this;
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.ds = ds;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onScrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilterSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilterDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAddFilterNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGroupSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGroupDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.virtualdata = [];
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isActive = false;
        this.isSelectAll = false;
        this.isFilterSelectAll = false;
        this.isInfiniteFilterSelectAll = false;
        this.chunkIndex = [];
        this.cachedItems = [];
        this.groupCachedItems = [];
        this.itemHeight = 41.6;
        this.filterLength = 0;
        this.infiniteFilterLength = 0;
        this.dropdownListYOffset = 0;
        this.dropDownWidth = 0;
        this.dropDownTop = 0;
        this.dropDownLeft = 0;
        this.id = Math.random().toString(36).substring(2);
        this.defaultSettings = {
            singleSelection: false,
            text: 'Select',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            filterSelectAllText: 'Select all filtered results',
            filterUnSelectAllText: 'UnSelect all filtered results',
            enableSearchFilter: false,
            searchBy: [],
            maxHeight: 300,
            badgeShowLimit: 999999999999,
            classes: '',
            disabled: false,
            searchPlaceholderText: 'Search',
            showCheckbox: true,
            noDataLabel: 'No Data Available',
            searchAutofocus: true,
            lazyLoading: false,
            labelKey: 'itemName',
            primaryKey: 'id',
            position: 'bottom',
            autoPosition: true,
            enableFilterSelectAll: true,
            selectGroup: false,
            addNewItemOnFilter: false,
            addNewButtonText: "Add",
            escapeToClose: true,
            clearAll: true,
            tagToBody: true
        };
        this.randomSize = true;
        this.filteredList = [];
        this.virtualScroollInit = false;
        this.isDisabledItemPresent = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.searchTerm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
         * @param {?} term
         * @return {?}
         */
        function (term) { return term; }))).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.filterInfiniteList(val);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    AngularMultiSelect.prototype.onEscapeDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.settings.escapeToClose) {
            this.closeDropdown();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AngularMultiSelect.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isActive) {
            this.closeDropdown();
            /*             const elem = this.cuppaDropdown.nativeElement;
                        if(this.settings.autoPosition){
                            this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1;
                        }
                        this.dropDownLeft = elem.getBoundingClientRect().x; */
        }
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.cachedItems = this.cloneArray(this.data);
        if (this.settings.position == 'top') {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.selectedListHeight = { val: 0 };
                _this.selectedListHeight.val = _this.selectedListElem.nativeElement.clientHeight;
            }));
        }
        this.subscription = this.ds.getData().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                /** @type {?} */
                var len_1 = 0;
                data.forEach((/**
                 * @param {?} obj
                 * @param {?} i
                 * @return {?}
                 */
                function (obj, i) {
                    if (obj.disabled) {
                        _this.isDisabledItemPresent = true;
                    }
                    if (!obj.hasOwnProperty('grpTitle')) {
                        len_1++;
                    }
                }));
                _this.filterLength = len_1;
                _this.onFilterChange(data);
            }
        }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.calculateDropdownDirection();
        }));
        this.virtualScroollInit = false;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AngularMultiSelect.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.data && !changes.data.firstChange) {
            if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);
                if (this.data.length == 0) {
                    this.selectedItems = [];
                }
                this.groupCachedItems = this.cloneArray(this.groupedData);
            }
            this.cachedItems = this.cloneArray(this.data);
        }
        if (changes.settings && !changes.settings.firstChange) {
            this.settings = Object.assign(this.defaultSettings, this.settings);
        }
        if (changes.loading) {
        }
        if (this.settings.lazyLoading && this.virtualScroollInit && changes.data) {
            this.virtualdata = changes.data.currentValue;
        }
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.selectedItems) {
            if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
            }
        }
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.settings.lazyLoading) {
            // this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
        }
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
            this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            this.cdr.detectChanges();
        }
        //this.calculateDropdownDirection();
    };
    /**
     * @param {?} item
     * @param {?} index
     * @param {?} evt
     * @return {?}
     */
    AngularMultiSelect.prototype.onItemClick = /**
     * @param {?} item
     * @param {?} index
     * @param {?} evt
     * @return {?}
     */
    function (item, index, evt) {
        if (item.disabled) {
            return false;
        }
        if (this.settings.disabled) {
            return false;
        }
        /** @type {?} */
        var found = this.isSelected(item);
        /** @type {?} */
        var limit = this.selectedItems.length < this.settings.limitSelection ? true : false;
        if (!found) {
            if (this.settings.limitSelection) {
                if (limit) {
                    this.addSelected(item);
                    this.onSelect.emit(item);
                }
            }
            else {
                this.addSelected(item);
                this.onSelect.emit(item);
            }
        }
        else {
            this.removeSelected(item);
            this.onDeSelect.emit(item);
        }
        if (this.isSelectAll || this.data.length > this.selectedItems.length) {
            this.isSelectAll = false;
        }
        if (this.data.length == this.selectedItems.length) {
            this.isSelectAll = true;
        }
        if (this.settings.groupBy) {
            this.updateGroupInfo(item);
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    AngularMultiSelect.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AngularMultiSelect.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined && value !== null && value !== '') {
            if (this.settings.singleSelection) {
                if (this.settings.groupBy) {
                    this.groupedData = this.transformData(this.data, this.settings.groupBy);
                    this.groupCachedItems = this.cloneArray(this.groupedData);
                    this.selectedItems = [value[0]];
                }
                else {
                    try {
                        if (value.length > 1) {
                            this.selectedItems = [value[0]];
                            throw new MyException(404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                        }
                        else {
                            this.selectedItems = value;
                        }
                    }
                    catch (e) {
                        console.error(e.body.msg);
                    }
                }
            }
            else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.slice(0, this.settings.limitSelection);
                }
                else {
                    this.selectedItems = value;
                }
                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                    this.isSelectAll = true;
                }
                if (this.settings.groupBy) {
                    this.groupedData = this.transformData(this.data, this.settings.groupBy);
                    this.groupCachedItems = this.cloneArray(this.groupedData);
                }
            }
        }
        else {
            this.selectedItems = [];
        }
    };
    //From ControlValueAccessor interface
    //From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    AngularMultiSelect.prototype.registerOnChange = 
    //From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    //From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    AngularMultiSelect.prototype.registerOnTouched = 
    //From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    AngularMultiSelect.prototype.trackByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item[this.settings.primaryKey];
    };
    /**
     * @param {?} clickedItem
     * @return {?}
     */
    AngularMultiSelect.prototype.isSelected = /**
     * @param {?} clickedItem
     * @return {?}
     */
    function (clickedItem) {
        var _this = this;
        if (clickedItem.disabled) {
            return false;
        }
        /** @type {?} */
        var found = false;
        this.selectedItems && this.selectedItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (clickedItem[_this.settings.primaryKey] === item[_this.settings.primaryKey]) {
                found = true;
            }
        }));
        return found;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    AngularMultiSelect.prototype.addSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.disabled) {
            return;
        }
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
            this.closeDropdown();
        }
        else
            this.selectedItems.push(item);
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    };
    /**
     * @param {?} clickedItem
     * @return {?}
     */
    AngularMultiSelect.prototype.removeSelected = /**
     * @param {?} clickedItem
     * @return {?}
     */
    function (clickedItem) {
        var _this = this;
        this.selectedItems && this.selectedItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (clickedItem[_this.settings.primaryKey] === item[_this.settings.primaryKey]) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        }));
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    AngularMultiSelect.prototype.toggleDropdown = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.openDropdown();
            this.calculateDropdownDirection();
        }
        else {
            this.closeDropdown();
        }
        if (this.settings.lazyLoading) {
            this.virtualdata = this.data;
            this.virtualScroollInit = true;
        }
        evt.preventDefault();
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = true;
        if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.searchInput.nativeElement.focus();
            }), 0);
        }
        this.onOpen.emit(true);
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        if (this.searchInput && this.settings.lazyLoading) {
            this.searchInput.nativeElement.value = "";
        }
        if (this.searchInput) {
            this.searchInput.nativeElement.value = "";
        }
        this.filter = "";
        this.isActive = false;
        this.onClose.emit(false);
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.closeDropdownOnClickOut = /**
     * @return {?}
     */
    function () {
        if (this.isActive) {
            if (this.searchInput && this.settings.lazyLoading) {
                this.searchInput.nativeElement.value = "";
            }
            if (this.searchInput) {
                this.searchInput.nativeElement.value = "";
            }
            this.filter = "";
            this.isActive = false;
            this.clearSearch();
            this.onClose.emit(false);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AngularMultiSelect.prototype.toggleSelectAll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.isSelectAll) {
            this.selectedItems = [];
            if (this.settings.groupBy) {
                this.groupedData.forEach((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    obj.selected = !obj.disabled;
                }));
                this.groupCachedItems.forEach((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    obj.selected = !obj.disabled;
                }));
            }
            // this.selectedItems = this.data.slice();
            this.selectedItems = this.data.filter((/**
             * @param {?} individualData
             * @return {?}
             */
            function (individualData) { return !individualData.disabled; }));
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            if (this.settings.groupBy) {
                this.groupedData.forEach((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    obj.selected = false;
                }));
                this.groupCachedItems.forEach((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    obj.selected = false;
                }));
            }
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.calculateDropdownDirection();
        }));
        event.stopPropagation();
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.filterGroupedList = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.filter == "" || this.filter == null) {
            this.clearSearch();
            return;
        }
        this.groupedData = this.cloneArray(this.groupCachedItems);
        this.groupedData = this.groupedData.filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            /** @type {?} */
            var arr = [];
            if (obj[_this.settings.labelKey].toLowerCase().indexOf(_this.filter.toLowerCase()) > -1) {
                arr = obj.list;
            }
            else {
                arr = obj.list.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) {
                    return t[_this.settings.labelKey].toLowerCase().indexOf(_this.filter.toLowerCase()) > -1;
                }));
            }
            obj.list = arr;
            if (obj[_this.settings.labelKey].toLowerCase().indexOf(_this.filter.toLowerCase()) > -1) {
                return arr;
            }
            else {
                return arr.some((/**
                 * @param {?} cat
                 * @return {?}
                 */
                function (cat) {
                    return cat[_this.settings.labelKey].toLowerCase().indexOf(_this.filter.toLowerCase()) > -1;
                }));
            }
        }));
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.toggleFilterSelectAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isFilterSelectAll) {
            /** @type {?} */
            var added_1 = [];
            if (this.settings.groupBy) {
                this.groupedData.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    item.sele;
                    if (item.list) {
                        item.list.forEach((/**
                         * @param {?} el
                         * @return {?}
                         */
                        function (el) {
                            if (!_this.isSelected(el)) {
                                _this.addSelected(el);
                                added_1.push(el);
                            }
                        }));
                    }
                    _this.updateGroupInfo(item);
                }));
                this.ds.getFilteredData().forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    if (!_this.isSelected(el) && !el.hasOwnProperty('grpTitle')) {
                        _this.addSelected(el);
                        added_1.push(el);
                    }
                }));
            }
            else {
                this.ds.getFilteredData().forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (!_this.isSelected(item)) {
                        _this.addSelected(item);
                        added_1.push(item);
                    }
                }));
            }
            this.isFilterSelectAll = true;
            this.onFilterSelectAll.emit(added_1);
        }
        else {
            /** @type {?} */
            var removed_1 = [];
            if (this.settings.groupBy) {
                this.groupedData.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (item.list) {
                        item.list.forEach((/**
                         * @param {?} el
                         * @return {?}
                         */
                        function (el) {
                            if (_this.isSelected(el)) {
                                _this.removeSelected(el);
                                removed_1.push(el);
                            }
                        }));
                    }
                    _this.updateGroupInfo(item);
                }));
                this.ds.getFilteredData().forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    if (_this.isSelected(el)) {
                        _this.removeSelected(el);
                        removed_1.push(el);
                    }
                }));
            }
            else {
                this.ds.getFilteredData().forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (_this.isSelected(item)) {
                        _this.removeSelected(item);
                        removed_1.push(item);
                    }
                }));
            }
            this.isFilterSelectAll = false;
            this.onFilterDeSelectAll.emit(removed_1);
        }
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.toggleInfiniteFilterSelectAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isInfiniteFilterSelectAll) {
            this.virtualdata.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (!_this.isSelected(item)) {
                    _this.addSelected(item);
                }
            }));
            this.isInfiniteFilterSelectAll = true;
        }
        else {
            this.virtualdata.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (_this.isSelected(item)) {
                    _this.removeSelected(item);
                }
            }));
            this.isInfiniteFilterSelectAll = false;
        }
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.clearSearch = /**
     * @return {?}
     */
    function () {
        if (this.settings.groupBy) {
            this.groupedData = [];
            this.groupedData = this.cloneArray(this.groupCachedItems);
        }
        this.filter = "";
        this.isFilterSelectAll = false;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AngularMultiSelect.prototype.onFilterChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (this.filter && this.filter == "" || data.length == 0) {
            this.isFilterSelectAll = false;
        }
        /** @type {?} */
        var cnt = 0;
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!item.hasOwnProperty('grpTitle') && _this.isSelected(item)) {
                cnt++;
            }
        }));
        if (cnt > 0 && this.filterLength == cnt) {
            this.isFilterSelectAll = true;
        }
        else if (cnt > 0 && this.filterLength != cnt) {
            this.isFilterSelectAll = false;
        }
        this.cdr.detectChanges();
    };
    /**
     * @param {?} arr
     * @return {?}
     */
    AngularMultiSelect.prototype.cloneArray = /**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var copy;
        if (Array.isArray(arr)) {
            return JSON.parse(JSON.stringify(arr));
        }
        else if (typeof arr === 'object') {
            throw 'Cannot clone array containing an object!';
        }
        else {
            return arr;
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    AngularMultiSelect.prototype.updateGroupInfo = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (item.disabled) {
            return false;
        }
        /** @type {?} */
        var key = this.settings.groupBy;
        this.groupedData.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            /** @type {?} */
            var cnt = 0;
            if (obj.grpTitle && (item[key] == obj[key])) {
                if (obj.list) {
                    obj.list.forEach((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) {
                        if (_this.isSelected(el)) {
                            cnt++;
                        }
                    }));
                }
            }
            if (obj.list && (cnt === obj.list.length) && (item[key] == obj[key])) {
                obj.selected = true;
            }
            else if (obj.list && (cnt != obj.list.length) && (item[key] == obj[key])) {
                obj.selected = false;
            }
        }));
        this.groupCachedItems.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            /** @type {?} */
            var cnt = 0;
            if (obj.grpTitle && (item[key] == obj[key])) {
                if (obj.list) {
                    obj.list.forEach((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) {
                        if (_this.isSelected(el)) {
                            cnt++;
                        }
                    }));
                }
            }
            if (obj.list && (cnt === obj.list.length) && (item[key] == obj[key])) {
                obj.selected = true;
            }
            else if (obj.list && (cnt != obj.list.length) && (item[key] == obj[key])) {
                obj.selected = false;
            }
        }));
    };
    /**
     * @param {?} arr
     * @param {?} field
     * @return {?}
     */
    AngularMultiSelect.prototype.transformData = /**
     * @param {?} arr
     * @param {?} field
     * @return {?}
     */
    function (arr, field) {
        var _this = this;
        /** @type {?} */
        var groupedObj = arr.reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        function (prev, cur) {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }), {});
        /** @type {?} */
        var tempArr = [];
        Object.keys(groupedObj).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var obj = {};
            /** @type {?} */
            var disabledChildrens = [];
            obj["grpTitle"] = true;
            obj[_this.settings.labelKey] = x;
            obj[_this.settings.groupBy] = x;
            obj['selected'] = false;
            obj['list'] = [];
            /** @type {?} */
            var cnt = 0;
            groupedObj[x].forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item['list'] = [];
                if (item.disabled) {
                    _this.isDisabledItemPresent = true;
                    disabledChildrens.push(item);
                }
                obj.list.push(item);
                if (_this.isSelected(item)) {
                    cnt++;
                }
            }));
            if (cnt == obj.list.length) {
                obj.selected = true;
            }
            else {
                obj.selected = false;
            }
            // Check if current group item's all childrens are disabled or not
            obj['disabled'] = disabledChildrens.length === groupedObj[x].length;
            tempArr.push(obj);
            // obj.list.forEach((item: any) => {
            //     tempArr.push(item);
            // });
        }));
        return tempArr;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    AngularMultiSelect.prototype.filterInfiniteList = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        var _this = this;
        /** @type {?} */
        var filteredElems = [];
        if (this.settings.groupBy) {
            this.groupedData = this.groupCachedItems.slice();
        }
        else {
            this.data = this.cachedItems.slice();
            this.virtualdata = this.cachedItems.slice();
        }
        if ((evt != null || evt != '') && !this.settings.groupBy) {
            if (this.settings.searchBy.length > 0) {
                var _loop_1 = function (t) {
                    this_1.virtualdata.filter((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) {
                        if (el[_this.settings.searchBy[t].toString()].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                        }
                    }));
                };
                var this_1 = this;
                for (var t = 0; t < this.settings.searchBy.length; t++) {
                    _loop_1(t);
                }
            }
            else {
                this.virtualdata.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    for (var prop in el) {
                        if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                            break;
                        }
                    }
                }));
            }
            this.virtualdata = [];
            this.virtualdata = filteredElems;
            this.infiniteFilterLength = this.virtualdata.length;
        }
        if (evt.toString() != '' && this.settings.groupBy) {
            this.groupedData.filter((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                if (el.hasOwnProperty('grpTitle')) {
                    filteredElems.push(el);
                }
                else {
                    for (var prop in el) {
                        if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                            break;
                        }
                    }
                }
            }));
            this.groupedData = [];
            this.groupedData = filteredElems;
            this.infiniteFilterLength = this.groupedData.length;
        }
        else if (evt.toString() == '' && this.cachedItems.length > 0) {
            this.virtualdata = [];
            this.virtualdata = this.cachedItems;
            this.infiniteFilterLength = 0;
        }
        this.virtualScroller.refresh();
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.resetInfiniteSearch = /**
     * @return {?}
     */
    function () {
        this.filter = "";
        this.isInfiniteFilterSelectAll = false;
        this.virtualdata = [];
        this.virtualdata = this.cachedItems;
        this.groupedData = this.groupCachedItems;
        this.infiniteFilterLength = 0;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AngularMultiSelect.prototype.onScrollEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.endIndex === this.data.length - 1 || e.startIndex === 0) {
        }
        this.onScrollToEnd.emit(e);
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    AngularMultiSelect.prototype.selectGroup = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (item.disabled) {
            return false;
        }
        if (item.selected) {
            item.selected = false;
            item.list.forEach((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                _this.removeSelected(obj);
            }));
            this.onGroupDeSelect.emit(item);
            this.updateGroupInfo(item);
        }
        else {
            item.selected = true;
            item.list.forEach((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                if (!_this.isSelected(obj)) {
                    _this.addSelected(obj);
                }
            }));
            this.onGroupSelect.emit(item);
            this.updateGroupInfo(item);
        }
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.addFilterNewItem = /**
     * @return {?}
     */
    function () {
        this.onAddFilterNewItem.emit(this.filter);
        this.filterPipe = new ListFilterPipe(this.ds);
        this.filterPipe.transform(this.data, this.filter, this.settings.searchBy);
    };
    /**
     * @return {?}
     */
    AngularMultiSelect.prototype.calculateDropdownDirection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shouldOpenTowardsTop = this.settings.position == 'top';
        /** @type {?} */
        var elem = this.cuppaDropdown.nativeElement;
        /** @type {?} */
        var dropdownWidth = elem.clientWidth;
        this.dropDownWidth = dropdownWidth;
        this.dropDownLeft = elem.getBoundingClientRect().x;
        if (this.settings.position == 'top' && !this.settings.autoPosition) {
            this.openTowardsTop(true);
        }
        else if (this.settings.position == 'bottom' && !this.settings.autoPosition) {
            this.openTowardsTop(false);
        }
        if (this.settings.autoPosition) {
            /** @type {?} */
            var dropdownHeight = this.dropdownListElem.nativeElement.clientHeight;
            /** @type {?} */
            var viewportHeight = document.documentElement.clientHeight;
            /** @type {?} */
            var selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var spaceOnTop = selectedListBounds.top;
            /** @type {?} */
            var spaceOnBottom = viewportHeight - selectedListBounds.top;
            if (spaceOnBottom < spaceOnTop && dropdownHeight < spaceOnTop) {
                this.openTowardsTop(true);
            }
            else {
                this.openTowardsTop(false);
            }
            // Keep preference if there is not enough space on either the top or bottom
            /* 			if (spaceOnTop || spaceOnBottom) {
                            if (shouldOpenTowardsTop) {
                                shouldOpenTowardsTop = spaceOnTop;
                            } else {
                                shouldOpenTowardsTop = !spaceOnBottom;
                            }
                        } */
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AngularMultiSelect.prototype.openTowardsTop = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var elem = this.cuppaDropdown.nativeElement;
        if (value && this.selectedListElem.nativeElement.clientHeight) {
            this.dropdownListYOffset = 15 - this.selectedListElem.nativeElement.clientHeight;
            this.dropDownTop = elem.getBoundingClientRect().y - this.dropdownListElem.nativeElement.clientHeight - 15;
            this.settings.position = 'top';
        }
        else {
            this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1;
            this.dropdownListYOffset = 0;
            this.settings.position = 'bottom';
        }
    };
    /**
     * @param {?=} e
     * @return {?}
     */
    AngularMultiSelect.prototype.clearSelection = /**
     * @param {?=} e
     * @return {?}
     */
    function (e) {
        if (this.settings.groupBy) {
            this.groupCachedItems.forEach((/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                obj.selected = false;
            }));
        }
        this.clearSearch();
        this.selectedItems = [];
        this.isSelectAll = false;
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
        this.onDeSelectAll.emit(this.selectedItems);
    };
    AngularMultiSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'angular2-multiselect',
                    template: "<div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdownOnClickOut()\" #cuppaDropdown>\n    <div class=\"selected-list\" #selectedList>\n        <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\" [attr.tabindex]=\"0\">\n\n            <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\n            <span *ngIf=\"settings.singleSelection && !badgeTempl\">\n                <span *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\">\n                    {{item[settings.labelKey]}}\n                </span>\n            </span>\n            <span class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && settings.singleSelection && badgeTempl \">\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\">\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                    </span>\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                        <c-icon [name]=\"'remove'\"></c-icon>\n                    </span>\n                </div>\n            </span>\n            <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                    </span>\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                        <c-icon [name]=\"'remove'\"></c-icon>\n                    </span>\n                </div>\n            </div>\n            <span class=\"countplaceholder\" *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\n            <span class=\"c-remove clear-all\" *ngIf=\"settings.clearAll && selectedItems?.length > 0 && !settings.disabled\" (click)=\"clearSelection($event);$event.stopPropagation()\">\n                <c-icon [name]=\"'remove'\"></c-icon>\n            </span>\n            <span *ngIf=\"!isActive\" class=\"c-angle-down\">\n                <c-icon [name]=\"'angle-down'\"></c-icon>\n            </span>\n            <span *ngIf=\"isActive\" class=\"c-angle-up\">\n                <c-icon [name]=\"'angle-up'\"></c-icon>\n\n            </span>\n        </div>\n    </div>\n    <div #dropdownList class=\"dropdown-list tagToBody animated fadeIn\" \n    [style.width.px]=\"dropDownWidth\" \n    [style.top.px]=\"dropDownTop\" \n    [style.left.px]=\"dropDownLeft\" \n        [hidden]=\"!isActive\">\n        <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\" class=\"arrow-2\"></div>\n        <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\"></div>\n        <div class=\"list-area\" [ngClass]=\"{'single-select-mode': settings.singleSelection }\">\n            <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection && data?.length > 0 && !isDisabledItemPresent\"\n                >\n                <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                [id]=\"id\" (change)=\"toggleSelectAll($event)\"/>\n                <label [for]=\"id\">\n                    <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\n                    <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\n                </label>\n            </div>\n            <img class=\"loading-icon\" *ngIf=\"loading\" src=\"assets/img/loading.gif\" />\n            <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\n                <span class=\"c-search\" id=\"searchIcon\">\n                    <c-icon [name]=\"'search'\"></c-icon>\n                </span>\n                <span *ngIf=\"!settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"clearSearch()\">\n                    <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n                <span *ngIf=\"settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"resetInfiniteSearch()\">\n                    <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n\n                <input class=\"c-input\" *ngIf=\"settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" (keyup)=\"filterGroupedList()\" aria-labelledby=\"searchIcon\">\n                <input class=\"c-input\" *ngIf=\"!settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" aria-labelledby=\"searchIcon\">\n                <input class=\"c-input\" *ngIf=\"settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" (keyup)=\"searchTerm$.next($event.target.value)\" aria-labelledby=\"searchIcon\">\n                <!--            <input class=\"c-input\" *ngIf=\"!settings.lazyLoading && !searchTempl && settings.groupBy\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                [(ngModel)]=\"filter\" (keyup)=\"filterGroupList($event)\">-->\n                <c-templateRenderer *ngIf=\"searchTempl\" [data]=\"searchTempl\" [item]=\"item\"></c-templateRenderer>\n            </div>\n            <div class=\"filter-select-all\" *ngIf=\"!settings.lazyLoading && settings.enableFilterSelectAll && !isDisabledItemPresent\">\n                <div class=\"pure-checkbox select-all\" *ngIf=\"!settings.groupBy && filter?.length > 0 && filterLength > 0  && !settings.singleSelection\" (click)=\"toggleFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\" aria-labelledby=\"optionName\"\n                    aria-label=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n                <div class=\"pure-checkbox select-all\" *ngIf=\"settings.groupBy && filter?.length > 0 && groupedData?.length > 0  && !settings.singleSelection\" (click)=\"toggleFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isFilterSelectAll && filter?.length > 0\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                    aria-labelledby=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"filter-select-all\" *ngIf=\"settings.lazyLoading && settings.enableFilterSelectAll && !isDisabledItemPresent && !settings.singleSelection\">\n                <div class=\"pure-checkbox select-all\" *ngIf=\"filter?.length > 0 && infiniteFilterLength > 0\" (click)=\"toggleInfiniteFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isInfiniteFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                    aria-labelledby=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isInfiniteFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isInfiniteFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"filter-select-all\">\n                <label class=\"nodata-label\" *ngIf=\"!settings.groupBy && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n                <label class=\"nodata-label\" *ngIf=\"settings.groupBy && groupedData?.length == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n\n                <div class=\"btn-container\" *ngIf=\"settings.addNewItemOnFilter && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">\n                    <button class=\"c-btn btn-iceblue\" (click)=\"addFilterNewItem()\">{{settings.addNewButtonText}}</button>\n                </div>\n            </div>\n\n            <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        aria-labelledby=\"option\"/>\n                        <label>{{item[settings.labelKey]}}</label>\n                    </li>\n                </ul>\n            </div>\n            <!-- lazy loading -->\n            <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <li *ngFor=\"let item of scroll.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\"\n                        [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label>{{item[settings.labelKey]}}</label>\n                    </li>\n                </ul>\n            </div>\n            <!-- custom template -->\n            <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label></label>\n                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                    </li>\n                </ul>\n            </div>\n            <!-- lazy loading and custom template -->\n            <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll2 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" class=\"lazyContainer\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                    <li *ngFor=\"let item of scroll2.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\"\n                        [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label></label>\n                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                    </li>\n                </ul>\n            </div>\n            <!-- lazy loading, group By and custom template -->\n            <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll3 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <span *ngFor=\"let item of scroll3.viewPortItems; let i = index;\">\n                        <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label></label>\n                            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                        </li>\n                        <li *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label></label>\n                            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                        </li>\n                    </span>\n                </ul>\n            </div>\n            <!-- group By and custom template -->\n            <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <span *ngFor=\"let item of groupedData; let i = index;\">\n                        <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label>{{item[settings.labelKey]}}</label>\n                            <ul class=\"lazyContainer\">\n                                <span *ngFor=\"let val of item.list ; let j = index;\">\n                                    <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\"\n                                        class=\"pure-checkbox\">\n                                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(val)) || val.disabled\"\n                                        />\n                                        <label></label>\n                                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"val\"></c-templateRenderer>\n                                    </li>\n                                </span>\n                            </ul>\n\n                        </li>\n                    </span>\n                </ul>\n            </div>\n            <!-- lazy loading, group By -->\n            <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <virtual-scroller [items]=\"groupedData\" (vsUpdate)=\"viewPortItems = $event\" (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                    <ul virtualScroller #scroll4 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                        (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                        <span *ngFor=\"let item of scroll4.viewPortItems; let i = index;\">\n                            <li *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\"\n                                class=\"pure-checkbox\">\n                                <input *ngIf=\"settings.showCheckbox && !item.grpTitle && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\"\n                                    [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                                />\n                                <label>{{item[settings.labelKey]}}</label>\n                            </li>\n                            <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\"\n                                class=\"pure-checkbox\">\n                                <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                                />\n                                <label>{{item[settings.labelKey]}}</label>\n                            </li>\n                        </span>\n                    </ul>\n                </virtual-scroller>\n            </div>\n            <!-- group By -->\n            <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <span *ngFor=\"let item of groupedData ; let i = index;\">\n                        <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label>{{item[settings.labelKey]}}</label>\n                            <ul class=\"lazyContainer\">\n                                <span *ngFor=\"let val of item.list ; let j = index;\">\n                                    <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'selected-item': isSelected(val) == true,'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\"\n                                        class=\"pure-checkbox\">\n                                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(val)) || val.disabled\"\n                                        />\n                                        <label>{{val[settings.labelKey]}}</label>\n                                    </li>\n                                </span>\n                            </ul>\n                        </li>\n                    </span>\n                    <!-- <span *ngFor=\"let item of groupedData ; let i = index;\">\n                    <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                <li *ngIf=\"item.grpTitle && !settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                 <li  (click)=\"selectGroup(item)\" *ngIf=\"item.grpTitle && settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                </span> -->\n                </ul>\n            </div>\n            <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">{{settings.noDataLabel}}</h5>\n        </div>\n    </div>\n</div>",
                    host: { '[class]': 'defaultSettings.classes' },
                    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["virtual-scroll{display:block;width:100%}.cuppa-dropdown{position:relative}.c-btn{display:inline-block;border-width:1px;line-height:1.25;border-radius:3px;font-size:.85rem;padding:5px 10px;cursor:pointer;-webkit-box-align:center;align-items:center;min-height:38px}.c-btn.disabled{background:#ccc}.selected-list .c-list{float:left;padding:0;margin:0;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:4px 22px 4px 8px;border-radius:2px;margin-right:4px;margin-top:2px;float:left;position:relative}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .c-remove{position:absolute;right:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-angle-down,.selected-list .c-angle-up{width:12px;height:12px;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.selected-list .c-angle-down svg,.selected-list .c-angle-up svg{fill:#333}.selected-list .countplaceholder{position:absolute;right:45px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-btn{width:100%;padding:5px 10px;cursor:pointer;display:-webkit-box;display:flex;position:relative}.selected-list .c-btn .c-icon{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dropdown-list.tagToBody{position:fixed}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:99999}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list ul li{padding:10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#ccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-down,.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-down{bottom:-14px;top:unset;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.arrow-down.arrow-2{top:unset;bottom:-16px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative;padding-left:35px;height:35px}.list-filter input{border:0;width:100%;height:100%;padding:0}.list-filter input:focus{outline:0}.list-filter .c-search{position:absolute;top:9px;left:10px;width:15px;height:15px}.list-filter .c-search svg{fill:#888}.list-filter .c-clear{position:absolute;top:10px;right:10px;width:15px;height:15px}.list-filter .c-clear svg{fill:#888}.pure-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=checkbox]:focus+label:before,.pure-checkbox input[type=checkbox]:hover+label:before{background-color:#f2f2f2}.pure-checkbox input[type=checkbox]:active+label:before{-webkit-transition-duration:0s;transition-duration:0s}.pure-checkbox input[type=checkbox]:disabled+label{color:#ccc}.pure-checkbox input[type=checkbox]+label{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;font-weight:300}.pure-checkbox input[type=checkbox]+label:before{box-sizing:content-box;content:'';position:absolute;top:50%;left:0;width:15px;height:15px;margin-top:-9px;text-align:center;-webkit-transition:.4s;transition:.4s;border-radius:3px}.pure-checkbox input[type=checkbox]+label:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:3px;width:9px;height:4px;margin-top:-5px;border-style:solid;border-width:0 0 2px 2px;-webkit-border-image:none;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}.pure-checkbox input[type=checkbox]:disabled:focus+label:before .pure-checkbox input[type=checkbox]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}.pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}.pure-checkbox input[type=radio]:checked+label:after{-webkit-transform:scale(1);transform:scale(1)}.pure-checkbox input[type=radio]+label:before{border-radius:50%}.pure-checkbox input[type=checkbox]:checked+label:after{content:'';-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.list-message{text-align:center;margin:0;padding:15px 0;font-size:initial}.list-grp{padding:0 15px!important}.list-grp h4{text-transform:capitalize;margin:15px 0 0;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px!important}.grp-item{padding-left:30px!important}.grp-title{padding-bottom:0!important}.grp-title label{margin-bottom:0!important;font-weight:800;text-transform:capitalize}.grp-title:hover{background:0 0!important}.loading-icon{width:20px;position:absolute;right:10px;top:23px;z-index:1}.nodata-label{width:100%;text-align:center;padding:10px 0 0}.btn-container{text-align:center;padding:0 5px 10px}.clear-all{width:8px;position:absolute;top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}"]
                }] }
    ];
    /** @nocollapse */
    AngularMultiSelect.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: DataService }
    ]; };
    AngularMultiSelect.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        settings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelect',] }],
        onDeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelect',] }],
        onSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelectAll',] }],
        onDeSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelectAll',] }],
        onOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onOpen',] }],
        onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onClose',] }],
        onScrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onScrollToEnd',] }],
        onFilterSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onFilterSelectAll',] }],
        onFilterDeSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onFilterDeSelectAll',] }],
        onAddFilterNewItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onAddFilterNewItem',] }],
        onGroupSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onGroupSelect',] }],
        onGroupDeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onGroupDeSelect',] }],
        itemTempl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Item, { static: false },] }],
        badgeTempl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Badge, { static: false },] }],
        searchTempl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Search, { static: false },] }],
        searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput', { static: false },] }],
        selectedListElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['selectedList', { static: false },] }],
        dropdownListElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dropdownList', { static: false },] }],
        cuppaDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['cuppaDropdown', { static: false },] }],
        onEscapeDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.escape', ['$event'],] }],
        onScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:scroll', ['$event'],] }],
        virtualScroller: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [VirtualScrollerComponent, { static: false },] }]
    };
    return AngularMultiSelect;
}());
if (false) {}
var AngularMultiSelectModule = /** @class */ (function () {
    function AngularMultiSelectModule() {
    }
    AngularMultiSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], VirtualScrollerModule],
                    declarations: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon],
                    exports: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon],
                    providers: [DataService]
                },] }
    ];
    return AngularMultiSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular2-multiselect-dropdown.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/adm.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/adm.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-sidebar></app-sidebar>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <div class=\"main-panel\">\n      <div class=\"content\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <!--<app-footer></app-footer>-->\n  </div>\n  <!--<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n      <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li class=\"header-title\"> Sidebar Background</li>\n        <li class=\"adjustments-line\">\n          <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n            <div class=\"badge-colors text-center\">\n              <span class=\"badge filter badge-primary active\" data-color=\"primary\"></span>\n              <span class=\"badge filter badge-info\" data-color=\"blue\"></span>\n              <span class=\"badge filter badge-success\" data-color=\"green\"></span>\n            </div>\n            <div class=\"clearfix\"></div>\n          </a>\n        </li>\n        <li class=\"adjustments-line text-center color-change\">\n          <span class=\"color-label\">LIGHT MODE</span>\n          <span class=\"badge light-badge mr-2\"></span>\n          <span class=\"badge dark-badge ml-2\"></span>\n          <span class=\"color-label\">DARK MODE</span>\n        </li>\n        <li class=\"button-container\">\n          <a href=\"https://www.creative-tim.com/product/black-dashboard\" target=\"_blank\"\n            class=\"btn btn-primary btn-block btn-round\">Download Now</a>\n          <a href=\"https://demos.creative-tim.com/black-dashboard/docs/1.0/getting-started/introduction.html\"\n            target=\"_blank\" class=\"btn btn-default btn-block btn-round\">\n            Documentation\n          </a>\n        </li>\n        <li class=\"header-title\">Thank you for 95 shares!</li>\n        <li class=\"button-container text-center\">\n          <button id=\"twitter\" class=\"btn btn-round btn-info\"><i class=\"fab fa-twitter\"></i> &middot; 45</button>\n          <button id=\"facebook\" class=\"btn btn-round btn-info\"><i class=\"fab fa-facebook-f\"></i> &middot; 50</button>\n          <br>\n          <br>\n          <a class=\"github-button\" href=\"https://github.com/creativetimofficial/black-dashboard\"\n            data-icon=\"octicon-star\" data-size=\"large\" data-show-count=\"true\"\n            aria-label=\"Star ntkme/github-buttons on GitHub\">Star</a>\n        </li>\n      </ul>\n    </div>\n  </div>-->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/layouts/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/layouts/footer/footer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link\">\n            Creative Tim\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link\">\n            About Us\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link\">\n            Blog\n          </a>\n        </li>\n      </ul>\n      <div class=\"copyright\">\n        ©\n        <script>\n          document.write(new Date().getFullYear())\n        </script>2019 construido por \n        <a href=\"javascript:void(0)\" target=\"_blank\">Ventun</a>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/layouts/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/layouts/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg\" data=\"blue\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n            <div class=\"navbar-toggle d-inline\">\r\n                <button type=\"button\" class=\"navbar-toggler\">\r\n                    <span class=\"navbar-toggler-bar bar1\"></span>\r\n                    <span class=\"navbar-toggler-bar bar2\"></span>\r\n                    <span class=\"navbar-toggler-bar bar3\"></span>\r\n                </button>\r\n            </div>\r\n            <a class=\"navbar-brand\" style=\"top: 0;\">\r\n                <img src=\"/assets/img/ventun.png\">\r\n            </a>\r\n        </div>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navigation\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"input-group\">\r\n                    <h2 style=\"display: inline; padding: 0!important; margin: 10px 0 0 0!important; top: 20px!important;\">{{equipoActual}}</h2>\r\n                </li>\r\n                <!--<li class=\"search-bar input-group\">\r\n                    <button class=\"btn btn-link\" id=\"search-button\" data-toggle=\"modal\" data-target=\"#searchModal\"><i\r\n                            class=\"tim-icons icon-zoom-split\"></i>\r\n                        <span class=\"d-lg-none d-md-block\">Empresas</span>\r\n                    </button>\r\n                </li>\r\n                <li class=\"dropdown nav-item\">\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\r\n                        <div class=\"notification d-none d-lg-block d-xl-block\"></div>\r\n                        <i class=\"tim-icons icon-sound-wave\"></i>\r\n                        <p class=\"d-lg-none\">\r\n                            Notifications\r\n                        </p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu dropdown-menu-right dropdown-navbar\">\r\n                        <li class=\"nav-link\"><a href=\"#\" class=\"nav-item dropdown-item\">Mike John responded to your\r\n                                email</a></li>\r\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">You have 5 more\r\n                                tasks</a></li>\r\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">Your friend\r\n                                Michael is in town</a></li>\r\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">Another\r\n                                notification</a></li>\r\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">Another one</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>-->\r\n                <li class=\"dropdown nav-item\">\r\n                    <a class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\r\n                        <div class=\"photo\">\r\n                            <img src=\"{{urlGlobal}}{{perfil}}\">\r\n                        </div>\r\n                        <b class=\"caret d-none d-lg-block d-xl-block\" style=\"left: 50px!important;\"></b>\r\n                        <span>&nbsp;&nbsp;&nbsp;&nbsp;{{userName}}</span>\r\n                        <p class=\"d-lg-none\" (click)=\"cerrarSesion();\" routerLink=\"/sign/login\" routerLinkActive=\"active\">\r\n                            Cerrar Sessión\r\n                        </p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu dropdown-navbar\">\r\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\"\r\n                                routerLink=\"/profile\" routerLinkActive=\"active\">Perfil</a></li>\r\n                        <li class=\"dropdown-divider\"></li>\r\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" (click)=\"cerrarSesion();\"\r\n                                class=\"nav-item dropdown-item\" routerLink=\"/sign/login\" routerLinkActive=\"active\">Cerrar\r\n                                Sessión</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"separator d-lg-none\"></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <app-toast></app-toast>\r\n</nav>\r\n<div class=\"modal modal-search fade\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"searchModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <div class=\"input-group mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <label class=\"input-group-text\" style=\"background-color: var(--primary);width: 80px;\" for=\"listaEquipos\">Equipo</label>\r\n                    </div>\r\n                    <select class=\"custom-select\" id=\"listaEquipos\" name=\"listaEquipos\" #listaEquipos=\"ngModel\"  (ngModelChange)=\"updateEmp($event, true)\" [(ngModel)]=\"name\">\r\n                        <option [ngValue]=\"undefined\" selected>Elige un Equipo...</option>\r\n                        <option *ngFor=\"let equipo of lista\" [(ngValue)]=\"equipo.id\">{{equipo.valor}}</option>\r\n                    </select>\r\n                </div>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"tim-icons icon-simple-remove\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/layouts/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/layouts/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" style=\"height: 85vh; overflow: hidden;\">\n  <div class=\"logo\">\n    <a class=\"simple-text\">\n      <div class=\"logo-img\" (click)=\"minimizeSidebar()\">\n        <ng-container *ngIf=\"isCollapsedMenu;else templateName\">\n          <img src=\"/assets/img/ventun.png\" />\n        </ng-container>\n        <ng-template #templateName>\n          <img src=\"/assets/img/ventun.png\" />\n        </ng-template>\n      </div>\n    </a>\n  </div>\n\n  <div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n      <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n        <!--If is a single link-->\n        <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link' && menuitem.visible\">\n          <i class=\"tim-icons {{ menuitem.icontype }}\"></i>\n          <p>{{ menuitem.title }}</p>\n        </a>\n        <!--If it have a submenu-->\n        <a data-toggle=\"collapse\" href=\"#{{ menuitem.collapse }}\" *ngIf=\"menuitem.type === 'sub' && menuitem.visible\"\n          (click)=\"myFunc($event, menuitem); (menuitem.isCollapsed = !menuitem.isCollapsed)\"\n          [attr.aria-expanded]=\"!menuitem.isCollapsed\">\n          <i class=\"tim-icons {{ menuitem.icontype }}\"></i>\n          <p>{{ menuitem.title }}<b class=\"caret\"></b></p>\n        </a>\n\n        <!--Display the submenu items-->\n        <div id=\"{{ menuitem.collapse }}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n          <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n              <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                <span class=\"sidebar-mini-icon\">{{ childitem.ab }}</span>\n                <span class=\"sidebar-normal\">{{ childitem.title }}</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </li>\n      <li style=\"visibility: hidden; height: 80px;\"></li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/tools/show-errors/show-errors.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/tools/show-errors/show-errors.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"shouldShowErrors()\" class=\"roedor\">\n    <p class=\"globito\" *ngFor=\"let error of listOfErrors()\">{{error}}</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/agenda-pedido/agenda-pedido.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/agenda-pedido/agenda-pedido.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Agenda el Pedido</h3>\n<div class=\"container\">\n    <!--<div class=\"row\">\n        <div class=\"form-group\">\n            <label for=\"codigo\">Código Pedido</label><br>\n            <label class=\"text-primary\" style=\"font-size: 3em;\">201023000023</label>\n        </div>\n    </div>-->\n    <form (ngSubmit)=\"enviar()\" name=\"contextForm\" #contextForm=\"ngForm\" (keydown.enter)=\"$event.preventDefault()\">\n        <div class=\"row\">\n            <legend class=\"col-form-legend col-12\">Datos del Clientes</legend>\n            <div class=\"form-group col-6\">\n                <label for=\"telefono\">Teléfono del Cliente</label>\n                <input type=\"tel\" name=\"telefono\" id=\"telefono\" class=\"form-control\" placeholder=\"Teléfono del Cliente\"\n                    minlength=\"6\" aria-describedby=\"helpTelefono\" #telefono=\"ngModel\" [(ngModel)]=\"pedido.telefono\" \n                    (focus)=\"goSearch(mySearch)\" (keyup)=\"onSearch($event)\" required>\n                <app-show-errors [control]=\"telefono\" class=\"show-err\"></app-show-errors>\n                <angular2-multiselect [data]=\"listClonConsumer\" [(ngModel)]=\"selectedConsumer\"\n                    [settings]=\"settingsConsumer\" (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\"\n                    (onDeSelect)=\"OnItemDeSelect($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\"\n                    id=\"listConsumer\" name=\"listConsumer\">\n                    <c-search>\n                        <ng-template>\n                            <input id=\"mySearch\" name=\"mySearch\" #mySearch type=\"number\"\n                                placeholder=\"Busqueda de Clientes\"\n                                style=\"width: 100%; height: 100%;\" />\n                        </ng-template>\n                    </c-search>\n                    <c-item>\n                        <ng-template let-item=\"item\">\n                            <label style=\"color: #292929;width: 5em; cursor:pointer;\">{{item.phone}}</label>\n                            <label style=\"color: #292929;width: 30%; cursor:pointer;\">{{item.name}} {{item.lastName}}</label>\n                            <label style=\"color: #292929;width: 40%; cursor:pointer;\">{{item.address}}</label>\n                        </ng-template>\n                    </c-item>\n                </angular2-multiselect>\n            </div>\n            <div class=\"form-group col-6\">\n                \n            </div>\n            <div class=\"form-group col-6\">\n                <label for=\"nombreCliente\">Nombre del Cliente</label>\n                <input type=\"text\" name=\"nombreCliente\" id=\"nombreCliente\" class=\"form-control\"\n                    placeholder=\"Nombres del Cliente\" aria-describedby=\"helpNombres\" #nombreCliente=\"ngModel\"\n                    (focus)=\"goSearchOut(mySearch)\" [(ngModel)]=\"pedido.nombreCliente\" required>\n                <app-show-errors [control]=\"nombreCliente\" class=\"show-err\"></app-show-errors>\n            </div>\n            <div class=\"form-group col-6\">\n                <label for=\"apellidoCliente\">Apellidos del Cliente</label>\n                <input type=\"text\" name=\"apellidoCliente\" id=\"apellidoCliente\" class=\"form-control\"\n                    placeholder=\"Apellidos del Cliente\" aria-describedby=\"helpApellidos\" #apellidoCliente=\"ngModel\"\n                    (focus)=\"goSearchOut(mySearch)\" [(ngModel)]=\"pedido.apellidoCliente\" required>\n                <app-show-errors [control]=\"apellidoCliente\" class=\"show-err\"></app-show-errors>\n            </div>\n            <div class=\"form-group col-6\">\n                <label for=\"direccion\">Dirección del Cliente</label>\n                <input type=\"text\" name=\"direccion\" id=\"direccion\" class=\"form-control\"\n                    placeholder=\"Dirección del Cliente\" aria-describedby=\"helpDireccion\" #direccion=\"ngModel\"\n                    (focus)=\"goSearchOut(mySearch)\" [(ngModel)]=\"pedido.direccion\" required>\n                <app-show-errors [control]=\"direccion\" class=\"show-err\"></app-show-errors>\n            </div>\n            <div class=\"form-group col-6\" *ngIf=\"this.costoVisible == true\">\n                <label for=\"telefono\">Costo de Producto</label>\n                <input type=\"number\" name=\"costoP\" id=\"costoP\" class=\"form-control\" placeholder=\"Costo del Producto\"\n                    minlength=\"6\" (focus)=\"goSearchOut(mySearch)\" [(ngModel)]=\"this.costoP\" required (keyup)=\"cambiaCosto()\" (change)=\"cambiaCosto()\">\n            </div>\n            <div class=\"form-group col-12\" *ngIf=\"this.costoVisible == true\">\n                <label for=\"telefono\">Detalles de la Compra</label>\n                <input type=\"text\" name=\"compraP\" id=\"compraP\" class=\"form-control\" placeholder=\"Detalles de la Compra\"\n                    minlength=\"6\" (focus)=\"goSearchOut(mySearch)\" [(ngModel)]=\"this.compraP\" required>\n            </div>\n            <div class=\"form-group col-12\">\n                <label for=\"telefono\">Ubicación según el Mapa</label>\n                <input type=\"text\" name=\"geolocalizacion\" id=\"geolocalizacion\" class=\"form-control\"\n                    placeholder=\"Ubicación según el Mapa\" aria-describedby=\"helpGeolocalizacion\"\n                    #geolocalizacion=\"ngModel\" [(ngModel)]=\"pedido.geolocalizacion\" required>\n                <app-show-errors (focus)=\"goSearchOut(mySearch)\" [control]=\"geolocalizacion\" class=\"show-err\"></app-show-errors>\n            </div>\n        </div>\n        <div class=\"row\">\n            <button id=\"btnAgendar\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"contextForm.invalid\">Agendar</button>\n        </div>\n    </form>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-12 col-md-8\"></div>\n        <div class=\"col-12 col-md-4\" style=\"border: 1px solid #e14eca; padding: 10px;\">\n            <div class=\"form-group row\" *ngFor=\"let item of pedido.productos; let i=index\">\n                <label class=\"text-muted col-8\">{{item.nombre}}</label>\n                <label class=\"text-muted col-4\">{{item.cantidad}}<span\n                        style=\"color: red;\">x</span>{{item.costo}}</label>\n            </div>\n            <div class=\"row\">\n                <label class=\"text-muted col-6\"></label>\n                <label class=\"col-6\" style=\"color: white; font-size: 1.3em;\">Total: {{totalCompra}}bs</label>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/capture/capture.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/capture/capture.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>capture works!</p>\n\n<h1>\n    MDN - WebRTC: Still photo capture demo\n</h1>\n<p>\n    This example demonstrates how to set up a media stream using your built-in webcam, fetch an image from that stream, and create a PNG using that image.\n</p>\n<div class=\"camera\">\n<video id=\"video\">Video stream not available.</video>\n<button id=\"startbutton\">Take photo</button> \n</div>\n<canvas id=\"canvas\">\n</canvas>\n<div class=\"output\">\n<img id=\"photo\" alt=\"The screen capture will appear in this box.\"> \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/compra-producto/compra-producto.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/compra-producto/compra-producto.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"busqueda\">Búsqueda de productos</label>\n  <input type=\"search\" name=\"busqueda\" id=\"busqueda\" class=\"form-control\" placeholder=\"Búsqueda de Productos\" (keyup)=\"filterTable($event)\">\n</div>\n<div class=\"compras\">\n    <h3>Compra de Productos</h3>\n    <div class=\"row\">\n        <div class=\"col-6 col-md-9\">\n            <div class=\"row\">\n                <div class=\"producto card text-white\" style=\"margin: 10px!important; width: 200px; background-color: white; border-color: yellow;\"\n                    (click)=\"compraDirecta()\">\n                    <img class=\"card-img-top\" src=\"{{urlGlobal}}/assets/web.jpg\"\n                        style=\"height: 150px; width: 150px; background-color: white; display: block; margin: auto;\"\n                        alt=\"Imagen del producto\">\n                    <div class=\"card-body\" style=\"background-color: rgb(25, 92, 179);\">\n                        <div class=\"row card-title\">\n                            <h4 class=\"col-12\" style=\"margin-bottom: 0;\">Productos Varios</h4>\n                            <!--<h5 class=\"col-4\" style=\"top: 4px; margin-bottom: 0;\">{{item.costo}}bs</h5>-->\n                        </div>\n                        <p class=\"card-text\">Pedido Fuera del Sistema</p>\n                    </div>\n                </div>\n\n                <div class=\"producto card text-white\" *ngFor=\"let item of productos; let i=index\"\n                    style=\"margin: 10px!important; width: 200px; background-color: white; border-color: yellow;\"\n                    (click)=\"comprando(item)\">\n                    <img class=\"card-img-top\" src=\"{{urlGlobal}}{{item.imagen}}\"\n                        style=\"height: 150px; width: 150px; background-color: white; display: block; margin: auto;\"\n                        alt=\"Imagen del producto\">\n                    <div class=\"card-body\" style=\"background-color: rgb(25, 92, 179);\">\n                        <div class=\"row card-title\">\n                            <h4 class=\"col-8\" style=\"margin-bottom: 0;\">{{item.acronym}}</h4>\n                            <h5 class=\"col-4\" style=\"top: 4px; margin-bottom: 0;\">{{item.costo}}bs</h5>\n                        </div>\n                        <p class=\"card-text\">{{item.nombre}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-6 col-md-3\" *ngIf=\"compra.length>0\">\n            <div class=\"float-buy\"\n                style=\"width: 100%; overflow: hidden; position: -webkit-sticky; position: sticky; top: 25%; padding: 10px 10px 0 10px;\">\n                <div class=\"row\">\n                    <h3 class=\"col-12 col-md-8\">Detalle de la Compra</h3>\n                    <h4 class=\"col-12 col-md-4\" style=\"color: white; top: 20px;\">Total: {{totalCompra}}bs</h4>\n                </div>\n                <div class=\"minus row\" *ngFor=\"let prod of compra; let i=index\"\n                    style=\"font-size: 1.2em; color: whitesmoke; margin-bottom: 10px;\" (click)=\"quitar(prod.id)\">\n                    <div class=\"col-12\">{{prod.nombre}}</div>\n                    <div class=\"col\">{{prod.cantidad}}<span style=\"color: red;\">x</span>{{prod.costo}}bs</div>\n                    <div class=\"col-3\"><i class=\"far fa-minus-square fa-lg\" style=\"color: rgba(255, 0, 0, 0.9);\"></i>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <input class=\"col-12 btn btn-secondary\" type=\"button\" value=\"Comprar\" (click)=\"comprar()\">\n                </div>\n                <div class=\"row\">\n                    <input class=\"col-12 btn btn-warning\" type=\"button\" value=\"Cancelar\" (click)=\"cancelar()\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/configuration/configuration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/configuration/configuration.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal modal-search fade\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"searchModal\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <label class=\"input-group-text\" style=\"background-color: var(--primary);width: 80px;\" for=\"listaEquipos\">Equipo</label>\n                    </div>\n                    <select class=\"custom-select\" id=\"listaEquipos\" name=\"listaEquipos\" #listaEquipos=\"ngModel\"  (ngModelChange)=\"updateEmp($event)\" [(ngModel)]=\"name\">\n                        <option [ngValue]=\"undefined\" selected>Elige un Equipo...</option>\n                        <option *ngFor=\"let equipo of lista\" [(ngValue)]=\"equipo.id\">{{equipo.valor}}</option>\n                    </select>\n                </div>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"tim-icons icon-simple-remove\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h2>Mis Asociados</h2>\n    <div class=\"col-6 col-md-4 col-lg-3\" style=\"margin: 10px; float: left;\" *ngFor=\"let item of asociados\">\n        <span>{{item.profile.ci}} {{item.profile.expedido | expedido: ListDepts}}</span>\n        <div class=\"row ficha\" [routerLink]=\"['/descendenciaFicha', item._id]\" [routerLinkActive]=\"['linkActivo']\">\n            <div class=\"col-4\">\n                <ng-container *ngIf=\"item.profile?.photo; then conFoto; else sinFoto\"></ng-container>\n                <ng-template #conFoto>\n                    <img class=\"foto\" src=\"{{urlGlobal}}{{item.profile.photo}}\" srcset=\"{{urlGlobal}}{{item.profile.photo}} 100w\" alt=\"Foto de Perfil\">\n                </ng-template>\n                <ng-template #sinFoto>\n                    <img class=\"foto\" src=\"assets/img/noPicture.png\" srcset=\"assets/img/noPicture.png 200w\" alt=\"Sin foto de Perfil\">\n                </ng-template>\n            </div>\n            <div class=\"col-8\" style=\"overflow: hidden;\">\n                <p hidden>{{item._id}}</p>\n                <span class=\"row\">{{item.profile.firstName}} {{item.profile.lastNameP}}\n                    {{item.profile.lastNameM}}</span>\n                <span class=\"row\">{{item.contact?.phone}}</span>\n                <span class=\"row\">{{item.contact?.email}}</span>\n                <div class=\"row\" style=\"border-top: 1px solid red;\">\n                    <div class=\"col-4\"><span>1200bs</span></div>\n                    <div class=\"col-4\">\n                        <span>5 </span>\n                        <i class=\"fas fa-long-arrow-alt-right\" style=\"color: green;\"></i>\n                    </div>\n                    <div class=\"col-4\">\n                        <span>6 </span>\n                        <i class=\"fas fa-long-arrow-alt-down\" style=\"color: green;\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/descendencia-list/descendencia-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/descendencia-list/descendencia-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <h2 class=\"col-12 col-md-4 card-title\">Mis Asociados</h2>\n            <div class=\"col-12 col-md-8 toolbar\">\n                <button type=\"button\" class=\"btn-simple btn btn-info float-right\" (click)=\"exportFunction($event)\"><i\n                        class=\"fas fa-file-excel\"></i> Exportar a Excel</button>\n                <button type=\"button\" class=\"btn-simple btn btn-success float-right\"\n                    (click)=\"refreshFunction($event)\"><i class=\"fas fa-sync-alt\"></i> Actualizar Lista</button>\n                <button type=\"button\" class=\"btn-simple btn btn-primary float-right\" [routerLink]=\"['/invitacion']\"\n                    [routerLinkActive]=\"['linkActivo']\"><i class=\"fas fa-plus\"></i> Nueva Invitación</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"dataTables_wrapper\">\n            <div class=\"row\">\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"dataTables_length\" id=\"datatable_length\">\n                        <label class=\"float-left\" style=\"margin: 10px;\"> Mostrar</label>\n                        <select name=\"datatable_length\" aria-controls=\"datatable\"\n                            class=\"form-control float-left align-middle form-control-md\"\n                            (change)=\"entriesChange($event)\" style=\"width: 100px;\">\n                            <option value=\"10\" [selected]=\"entries==10\">10</option>\n                            <option value=\"25\" [selected]=\"entries==25\">25</option>\n                            <option value=\"-1\" [selected]=\"entries==-1\">All</option>\n                        </select>\n                        <label class=\"float-left\" style=\"margin: 10px;\"> asociados </label>\n                    </div>\n                </div>\n\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"dataTables_length\" id=\"datatable_status\">\n                        <i class=\"fas fa-filter float-left\" style=\"margin: 10px 0;\"></i>\n                        <label class=\"float-left\" style=\"margin: 10px;\"> Estado</label>\n                        <select name=\"datatable_status\" aria-controls=\"datatable\"\n                            class=\"form-control float-left align-middle form-control-md\" (change)=\"statusChange($event)\"\n                            style=\"width: 100px;\">\n                            <option value=\"1\" [selected]=\"estado==1\">Activo</option>\n                            <option value=\"0\" [selected]=\"estado==0\">Inactivo</option>\n                            <option value=\"2\" [selected]=\"estado==2\">Eliminado</option>\n                            <option value=\"3\" [selected]=\"estado==3\">Deudor</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-12 col-md-4\">\n                    <div id=\"datatable_filter\" class=\"dataTables_filter form-control-md\">\n                        <label>\n                            <input type=\"search\" class=\"form-control\" style=\"width: 100%;\" placeholder=\"Buscar...\"\n                                aria-controls=\"datatable\" (keyup)=\"filterTable($event)\" />\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <ngx-datatable class=\"bootstrap selection-cell\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n                [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"entries != -1 ? entries:undefined\"\n                (activate)=\"onActivate($event)\" [rows]=\"temp\" [loadingIndicator]=\"isLoading\"\n                [treeFromRelation]=\"parentId\" [treeToRelation]=\"id\" (treeAction)=\"onTreeAction($event)\">\n\n                <ngx-datatable-column name=\"C.I.\" [isTreeColumn]=\"true\" prop=\"profile.ci\" [treeLevelIndent]=\"20\">{{ci}}\n\n                    <ng-template ngx-datatable-tree-toggle let-tree=\"cellContext\">\n                        <button [disabled]=\"tree.treeStatus === 'disabled'\" (click)=\"tree.onTreeAction()\">\n                            <span *ngIf=\"tree.treeStatus === 'loading'\">\n                                <i class=\"fas fa-spinner fa-spin\"></i>\n                            </span>\n                            <span *ngIf=\"tree.treeStatus === 'collapsed'\">\n                                <i class=\"fas fa-level-up-alt\"></i>\n                            </span>\n                            <span *ngIf=\"tree.treeStatus === 'expanded'\">\n                                <i class=\"fas fa-level-down-alt\"></i>\n                            </span>\n                            <span *ngIf=\"tree.treeStatus === 'disabled'\">\n                                <i class=\"fas fa-skull-crossbones\"></i>\n                            </span>\n                        </button>\n                    </ng-template>\n\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Nombre\" prop=\"profile.firstName\">{{firstName}}</ngx-datatable-column>\n                <ngx-datatable-column name=\"Apellido Paterno\" prop=\"profile.lastNameP\">{{lastNameP}}\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Apellido Materno\" prop=\"profile.lastNameM\">{{lastNameM}}\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Estado\">\n                    <ng-template ngx-datatable-cell-template let-row=\"row\">\n                        <ng-container *ngIf=\"row.estado; else elseTemplate\">\n                            Activo\n                        </ng-container>\n                        <ng-template #elseTemplate>\n                            Inactivo\n                        </ng-template>\n                    </ng-template>\n                </ngx-datatable-column>\n\n\n                <ngx-datatable-column [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n                    [resizeable]=\"false\">\n                    <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n                        let-selectFn=\"selectFn\">\n                        Ficha\n                    </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\n                        let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n                        <a class=\"btn btn-round btn-warning btn-icon btn-sm\" (click)=\"deleteFunction($event)\">\n                            <i class=\"far fa-id-badge\" style=\"margin-top: 7px;\"></i></a> <!-- [routerLink]=\"['/descendenciaFicha', profile.firstName]\" [routerLinkActive]=\"['linkActivo']\">-->\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/descendencia-profile/descendencia-profile.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/descendencia-profile/descendencia-profile.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-user card\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\">Asociado {{title}}</h4>\n    </div>\n    <div class=\"card-body\">\n        <ul class=\"nav nav-tabs card-header-tabs\" style=\"margin-left: 0.1em!important;\">\n            <li class=\"nav-item\">\n                <a href=\"#resumen\" data-toggle=\"pill\" class=\"nav-link active\">Resumen</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#cuotas\" data-toggle=\"pill\" class=\"nav-link\">Cuotas</a>\n            </li>\n        </ul>\n        <div class=\"tab-content\" id=\"descendenciaTab\">\n            <div class=\"tab-pane fade show active container\" id=\"resumen\" role=\"tabpanel\" aria-labelledby=\"resumen-tab\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <h4>Información Personal</h4>\n                        <div class=\"row\">\n                            <label for=\"ci\">C.I.</label>\n                            <span id=\"ci\" name=\"ci\">{{person.profile?.ci}} {{person.profile?.expedido | expedido: ListDepts}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"nombre\">Nombre</label>\n                            <span id=\"nombre\" name=\"nombre\">{{person.profile?.lastNameP}} {{person.profile?.lastNameM}}\n                                {{person.profile?.firstName}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"fecha\">Fecha de Naciemiento</label>\n                            <span id=\"fecha\" name=\"fecha\">{{person.profile?.birthDate | date: 'shortDate'}}</span>\n                        </div>\n                        <br>\n                        <h4>Datos de Contacto</h4>\n                        <div class=\"row\">\n                            <label for=\"phone\">Teléfono</label>\n                            <span id=\"phone\" name=\"phone\">{{person.contact?.phone}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"email\">e-mail</label>\n                            <span id=\"email\" name=\"email\">{{person.contact?.email}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"web\">Página web</label>\n                            <span id=\"web\" name=\"web\">{{person.contact?.web}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"country\">País</label>\n                            <span id=\"country\" name=\"country\">{{person.contact?.address?.country | nombre: ListDepts}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"state\">Departamento</label>\n                            <span id=\"state\" name=\"state\">{{person.contact?.address?.state.id | nombre: ListDepts}}</span><!--valor en lugar de id-->\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"city\">Ciudad</label>\n                            <span id=\"city\" name=\"city\">{{person.contact?.address?.city.id | nombre: ListDepts}}</span><!--valor en lugar de id-->\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"especificLocation\">Dirección</label>\n                            <span id=\"especificLocation\"\n                                name=\"especificLocation\">{{person.contact?.address?.especificLocation}}</span>\n                        </div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"row\">\n                            <label for=\"foto\">Fotografía</label>\n                        </div>\n                        <div class=\"row\">\n                            <img id=\"foto\" style=\"width: 250px\" name=\"foto\" class=\"foto\" src=\"{{urlGlobal}}{{person.profile?.photo}}\"\n                                srcset=\"{{urlGlobal}}{{person.profile?.photo}} 200w\" alt=\"Sin foto de Perfil\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"tab-pane fade container\" id=\"cuotas\" role=\"tabpanel\" aria-labelledby=\"cuotas-tab\">\n                <div class=\"row\">\n                    <!--<div class=\"update ml-auto mr-auto\">\n                        <button class=\"btn btn-primary\" (click)=\"saveService()\">Save</button>\n                        <button type=\"button\" class=\"btn btn-info\" (click)=\"cancelStaff()\">Cancel</button>\n                        <a href=\"#profile\" class=\"nav-link btn btn-primary\">Profile</a>\n                    </div>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"container-fluid\">\n    <div class=\"col-4 col-md-3\" style=\"margin: 10px; float: left;\" *ngFor=\"let item of asociados\">\n        <div class=\"row ficha\" (click)=\"verAsociado(item._id)\">\n            <!--[routerLink]=\"['/descendenciaFicha', item._id]\" [routerLinkActive]=\"['linkActivo']\">-->\n            <div class=\"col-4\">\n                <ng-container *ngIf=\"item.profile?.photo; then conFoto; else sinFoto\"></ng-container>\n                <ng-template #conFoto>\n                    <img class=\"foto\" src=\"{{urlGlobal}}{{item.profile.photo}}\" srcset=\"{{urlGlobal}}{{item.profile.photo}} 100w\"\n                        alt=\"Foto de Perfil\">\n                </ng-template>\n                <ng-template #sinFoto>\n                    <img class=\"foto\" src=\"assets/img/noPicture.png\" srcset=\"assets/img/noPicture.png 200w\"\n                        alt=\"Sin foto de Perfil\">\n                </ng-template>\n            </div>\n            <div class=\"col-8\">\n                <p hidden>{{item._id}}</p>\n                <span class=\"row\">{{item.profile.firstName}} {{item.profile.lastNameP}}\n                    {{item.profile.lastNameM}}</span>\n                <span class=\"row\">{{item.contact?.phone}}</span>\n                <span class=\"row\">{{item.contact?.email}}</span>\n                <div class=\"row\" style=\"border-top: 1px solid red;\">\n                    <div class=\"col-4\"><span>1200bs</span></div>\n                    <div class=\"col-4\">\n                        <span>5 </span>\n                        <i class=\"fas fa-long-arrow-alt-right\" style=\"color: green;\"></i>\n                    </div>\n                    <div class=\"col-4\">\n                        <span>6 </span>\n                        <i class=\"fas fa-long-arrow-alt-down\" style=\"color: green;\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/ficha-pedido/ficha-pedido.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/ficha-pedido/ficha-pedido.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Pedidos {{titulo}}</h3>\n<div class=\"row\">\n    <div class=\"card ficha\" *ngFor=\"let item of pedidos; let i=index\" data-toggle=\"modal\"\n        data-target=\"#ampliado\" (click)=\"ampliar(item);\">\n        <h2 class=\"text-secondary text-center\"\n            style=\"padding: 5px 10px!important;margin-bottom: 0; text-decoration: underline solid var(--primary);\">\n            {{item.codigo}}</h2>\n        <h5 class=\"text-secondary text-center\" style=\"padding: 0!important; margin: 0!important; font-size: .9em;\">{{item.empresa}}</h5>\n        <ng-container *ngIf=\"item.usuario.id == ''; then thenTemplate; else elseTemplate\"></ng-container>\n        <ng-template #thenTemplate>\n            <img class=\"card-img-top\" src=\"{{urlGlobal}}{{urlImage}}\" alt=\"\"\n                style=\"height: 100px; width: 150px; display: block; margin: auto; border-radius: 30px; display: none;\">\n        </ng-template>\n        <ng-template #elseTemplate>\n            <img class=\"card-img-top\" src=\"{{urlGlobal}}{{item.usuario.fotografia}}\" alt=\"\"\n                style=\"height: 100px; width: 150px; display: block; margin: auto; border-radius: 30px;\">\n        </ng-template>\n\n        <div class=\"card-body\" style=\"padding-bottom: 5px;\">\n            <div class=\"row\">\n                <div class=\"col-12 text-center\" style=\"color: white; font-size: .8em;\">\n                    {{item.sucursal}}\n                </div>\n                <div class=\"col-6\" style=\"font-size: 1.3em;\">\n                    <a target=\"_blank\" style=\"color: white;\" (click)=\"mapa();\"\n                        href=\"{{item.geoData}}\">\n                        <i class=\"fas fa-map-marked-alt fa-lg\"></i> Origen\n                    </a></div>\n                <div class=\"col-6\" style=\"font-size: 1.3em;\">\n                    <a target=\"_blank\" href=\"{{item.geolocalizacion}}\" style=\"color: white;\" (click)=\"mapa();\">\n                        <i class=\"fas fa-map-marked-alt fa-lg\"></i> Destino\n                    </a>\n                </div>\n            </div>\n            <div class=\"row\">\n                <h4 class=\"card-text\" style=\"margin-top: 10px;\">{{item.fechaHora | date:'medium'}}</h4>\n            </div>\n            <div class=\"row\" *ngIf=\"estadoActual==5 || estadoActual==3 || estadoActual==2 || estadoActual==1\">\n                <div class=\"col-6\">Pendiente</div>\n                <div class=\"col-6\">\n                    <h4 class=\"card-text\" style=\"float: right; margin-bottom: 0; font-size: 1.1em;\">{{item.restarPendiente}}</h4>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"estadoActual==5 || estadoActual==3 || estadoActual==2\">\n                <div class=\"col-6\">Asignado</div>\n                <div class=\"col-6\">\n                    <h4 class=\"card-text\" style=\"float: right; margin-bottom: 0; font-size: 1.1em;\">{{item.restarAsignado}}</h4>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"estadoActual==5 || estadoActual==3\">\n                <div class=\"col-6\">Recogido</div>\n                <div class=\"col-6\">\n                    <h4 class=\"card-text\" style=\"float: right; margin-bottom: 0; font-size: 1.1em;\">{{item.restarRecogido}}</h4>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"estadoActual==5\">\n                <h4 class=\"card-text\" style=\"margin-top: 10px;\">{{item.entrega.entregadoPedido | date:'medium'}}</h4>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">Tiempo Total</div>\n                <div class=\"col-6\">\n                    <h4 class=\"card-text\" style=\"float: right; margin-bottom: 0; font-size: 1.1em;\">{{item.totalTiempo}}</h4>\n                </div>\n            </div>\n            <div class=\"row\" style=\"clear: both; border-top: 1px solid white;\">\n                <h4 class=\"col-12 text-center\" style=\"margin-bottom: 0; font-weight: bold;\">{{item.total}}Bs.</h4>\n            </div>\n        </div>\n        <div class=\"card-footer text-muted\" style=\"padding: 1px 10px!important;\" [ngStyle]=\"{'background-color': item.color}\" *ngIf=\"mostrar\">\n            <ng-container *ngIf=\"item.color == 'yellow'; else pietemplate\">\n                <div style=\"color: black!important;\">{{titulo}}</div>\n            </ng-container>\n            <ng-template #pietemplate>\n                <div style=\"color: white!important;\">{{titulo}}</div>\n            </ng-template>\n            \n        </div>\n    </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"ampliado\" tabindex=\"-1\" aria-labelledby=\"pedidoElegido\" aria-hidden=\"true\" *ngIf=\"muestra\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\" style=\"background-color: gainsboro;\">\n            <div class=\"modal-header\" style=\"background-color: var(--gray-dark);\">\n                <h5 class=\"modal-title\" id=\"pedidoElegido\" style=\"color: white; font-size: 1.1em;\">Pedidos {{titulo}}\n                </h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" style=\"margin-top: -30px;\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-header\"\n                style=\"border-bottom: 1px solid var(--gray-dark); margin-left: 30px!important; margin-right: 30px!important; padding-top: 5px; padding-bottom: 5px;\">\n                <h2 style=\"color: black; margin: 0 auto!important;\">{{elegido?.codigo}}</h2>\n            </div>\n            <div class=\"modal-body\" style=\"padding-bottom: 5px; padding-top: 5px;\">\n                <div class=\"row\">\n                    <h4 class=\"col-12\" style=\"color: black; margin-bottom: 5px;\">Nombre: {{elegido?.nombreCliente}}\n                        {{elegido?.apellidoCliente}}</h4>\n                    <h4 class=\"col-12\" style=\"color: black; margin-bottom: 5px;\">Dirección: {{elegido?.direccion}}</h4>\n                    <h4 class=\"col-12\" style=\"color: black; margin-bottom: 5px;\">\n                        Detalle\n                    </h4>\n                    <div class=\"col-12\" *ngFor=\"let prod of elegido?.productos; let i=index\">\n                        <div class=\"row\">\n                            <div class=\"col\"></div>\n                            <div class=\"col-9\" style=\"color: black;\">{{prod.nombre}}</div>\n                            <div class=\"col-2\" style=\"color: black;\">{{prod.cantidad}}</div>\n                        </div>\n                    </div>\n                    <h4 class=\"col-9\" style=\"color: black; margin-bottom: 0;\">Teléfono: {{elegido?.telefono}}</h4>\n                    <h3 class=\"col-2\" style=\"color: black; margin-bottom: 0; border-top: solid 1px black; padding-right: 20px;\">{{elegido?.total}}Bs</h3>\n                    <h4 class=\"col\"></h4>\n                </div>\n            </div>\n\n            <div class=\"modal-footer\" *ngIf=\"empresaDelivery\"\n                style=\"border-top: 1px solid var(--gray-dark); margin-left: 30px!important; margin-right: 30px!important;\">\n                <div class=\"row\">\n                    <h4 class=\"col-12\" style=\"color: black; margin: 0 auto!important;\">Pedido Asignado a:</h4>\n                    <h5 class=\"col-12\" style=\"color: black; margin: 0 auto!important;\">Nombre: {{elegido?.usuario.nombre}}</h5>\n                    <h5 class=\"col-6\" style=\"color: black; margin: 0 auto!important;\">Vehículo: {{elegido?.usuario.tipoVehiculo}}</h5>\n                    <h5 class=\"col-6\" style=\"color: black; margin: 0 auto!important;\">Placa: {{elegido?.usuario.placaVehiculo}}</h5>\n                </div>\n            </div>\n\n            <div class=\"modal-footer\" style=\"background-color: var(--gray-dark); color: white; padding-top: 5px; padding-bottom: 5px;\">\n                <input *ngIf=\"btnAccion != ''\" type=\"button\" class=\" btn btn-primary\"\n                    style=\"margin: 0 auto; width: 80%;\" value=\"{{btnAccion}}\"\n                    (click)=\"btnPedido(elegido?._id)\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/invitation-list/invitation-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/invitation-list/invitation-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <h2 class=\"col-12 col-md-4 card-title\">Lista de Invitados</h2>\n      <div class=\"col-12 col-md-8 toolbar\">\n        <button type=\"button\" class=\"btn-simple btn btn-info float-right\" (click)=\"exportFunction($event)\"><i\n            class=\"fas fa-file-excel\"></i> Exportar a Excel</button>\n        <button type=\"button\" class=\"btn-simple btn btn-success float-right\" (click)=\"refreshFunction($event)\"><i\n            class=\"fas fa-sync-alt\"></i> Actualizar Lista</button>\n        <button type=\"button\" class=\"btn-simple btn btn-primary float-right\" [routerLink]=\"['/invitacion']\"\n          [routerLinkActive]=\"['linkActivo']\"><i class=\"fas fa-plus\"></i> Nueva Invitación</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"dataTables_wrapper\">\n      <div class=\"row\">\n        <div class=\"col-6 col-md-4\">\n          <div class=\"dataTables_length\" id=\"datatable_length\">\n            <label class=\"float-left\" style=\"margin: 10px;\"> Mostrar</label>\n            <select name=\"datatable_length\" aria-controls=\"datatable\"\n              class=\"form-control float-left align-middle form-control-md\" (change)=\"entriesChange($event)\"\n              style=\"width: 100px;\">\n              <option value=\"10\" [selected]=\"entries==10\">10</option>\n              <option value=\"25\" [selected]=\"entries==25\">25</option>\n              <option value=\"-1\" [selected]=\"entries==-1\">All</option>\n            </select>\n            <label class=\"float-left\" style=\"margin: 10px;\"> invitaciones </label>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-4\">\n          <div class=\"dataTables_length\" id=\"datatable_status\">\n            <i class=\"fas fa-filter float-left\" style=\"margin: 10px 0;\"></i>\n            <label class=\"float-left\" style=\"margin: 10px;\"> Estado</label>\n            <select name=\"datatable_status\" aria-controls=\"datatable\"\n              class=\"form-control float-left align-middle form-control-md\" (change)=\"statusChange($event)\"\n              style=\"width: 100px;\">\n              <option value=\"1\" [selected]=\"estado==1\">Vigente</option>\n              <option value=\"0\" [selected]=\"estado==0\">Caduco</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div id=\"datatable_filter\" class=\"dataTables_filter form-control-md\">\n            <label>\n              <input type=\"search\" class=\"form-control\" style=\"width: 100%;\" placeholder=\"Buscar...\"\n                aria-controls=\"datatable\" (keyup)=\"filterTable($event)\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <!--\n          <ngx-datatable-column name=\"My Custom Column Header\" prop=\"client\">\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\n          <strong>{{ value.clientCode }} </strong> - {{ value.clientName }}\n        </ng-template>\n      </ngx-datatable-column>\n      -->\n      <ngx-datatable class=\"bootstrap selection-cell\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\" [limit]=\"entries != -1 ? entries:undefined\" (activate)=\"onActivate($event)\" [rows]=\"temp\" [loadingIndicator]=\"isLoading\">\n\n        <ngx-datatable-column name=\"C.I.\" prop=\"profile.ci\">{{ci}}</ngx-datatable-column>\n        <ngx-datatable-column name=\"Nombre\" prop=\"profile.firstName\">{{firstName}}</ngx-datatable-column>\n        <ngx-datatable-column name=\"Apellido Paterno\" prop=\"profile.lastNameP\">{{lastNameP}}</ngx-datatable-column>\n        <ngx-datatable-column name=\"Apellido Materno\" prop=\"profile.lastNameM\">{{lastNameM}}</ngx-datatable-column>\n        <ngx-datatable-column name=\"Fecha\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            {{row.date | date:'dd-MM-yyyy'}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Estado\">\n          <ng-template ngx-datatable-cell-template let-row=\"row\">\n            <ng-container *ngIf=\"row.estado; else elseTemplate\">\n              Vigente\n            </ng-container>\n            <ng-template #elseTemplate>\n              Caduco\n            </ng-template>\n          </ng-template>\n        </ngx-datatable-column>\n\n\n        <ngx-datatable-column [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\n          <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n            let-selectFn=\"selectFn\">\n            Acciones\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\n            let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n            <a class=\"btn btn-round btn-warning btn-icon btn-sm edit\" (click)=\"editFunction($event)\">\n              <i class=\"fas fa-user-edit\" style=\"margin-top: 7px;\"></i>\n            </a>\n            <a class=\"btn btn-round btn-danger btn-icon btn-sm remove\" (click)=\"deleteFunction($event)\"><i\n                class=\"fas fa-times\" style=\"margin-top: 7px;\"></i></a>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </div>\n\n  </div>\n  <!-- end content-->\n</div>\n<!--  end card  -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/invitation/invitation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/invitation/invitation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" (desdeElHijo)=\"recibeDeHijo($event)\">\n  <div class=\"form-sign center z-depth-4\">\n    <!--<img src=\"assets/img/logos/v.png\" alt=\"Ventun\">-->\n    <h2 class=\"center\">Invitación</h2>\n    <hr>\n    <form (ngSubmit)=\"onRegister()\" name=\"contextForm\" #contextForm=\"ngForm\" class=\"{{procesando}}\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"ci\">CI</label>\n          <input type=\"text\" name=\"ci\" #ci=\"ngModel\" [(ngModel)]=\"invitation.profile.ci\" id=\"ci\" class=\"form-control\"\n            placeholder=\"Cédula de Identidad\" minlength=\"6\" (focusout)=\"verificarUsuario()\" required>\n          <app-show-errors [control]=\"ci\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"expedido\" class=\"control-label\">Expedido en:</label>\n          <select name=\"expedido\" #expedido=\"ngModel\" [(ngModel)]=\"invitation.profile.expedido\" id=\"expedido\"\n            class=\"form-control\" aria-hidden=\"true\" required>\n            <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n            <option *ngFor='let littleDepa of depasCI' [ngValue]=\"littleDepa._id\">\n              {{littleDepa.name}}\n            </option>\n          </select>\n          <app-show-errors [control]=\"expedido\" class=\"show-err\"></app-show-errors>\n        </div>\n        <!--<div class=\"form-group col-6 col-md-4\">\n          <a class=\"btn btn-warning\" style=\"margin-top: 28px;\" (click)=\"verificarUsuario()\">Verificar Usuario</a>\n        </div>-->\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"nombre\">Nombre</label>\n          <input type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"invitation.profile.firstName\" id=\"nombre\"\n            class=\"form-control\" placeholder=\"Nombre Invitado\" minlength=\"3\" required>\n          <app-show-errors [control]=\"nombre\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"apellidoP\">Apellido Paterno</label>\n          <input type=\"text\" name=\"apellidoP\" #apellidoP=\"ngModel\" [(ngModel)]=\"invitation.profile.lastNameP\"\n            id=\"apellidoP\" class=\"form-control\" placeholder=\"Apellido Paterno\" minlength=\"3\" required>\n          <app-show-errors [control]=\"apellidoP\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"apellidoM\">Apellido Materno</label>\n          <input type=\"text\" name=\"apellidoM\" #apellidoM=\"ngModel\" [(ngModel)]=\"invitation.profile.lastNameM\"\n            id=\"apellidoM\" class=\"form-control\" placeholder=\"Apellido Materno\" minlength=\"3\" required>\n          <app-show-errors [control]=\"apellidoM\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"gender\">Sexo</label>\n          <select class=\"form-control\" name=\"gender\" #gender=\"ngModel\" [(ngModel)]=\"invitation.profile.gender\"\n            id=\"gender\" required>\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option [ngValue]=\"0\">\n              Hombre\n            </option>\n            <option [ngValue]=\"1\">\n              Mujer\n            </option>\n          </select>\n          <app-show-errors [control]=\"gender\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"birthDate\" class=\"optional\">Fecha de Nacimiento</label>\n          <input type=\"date\" name=\"birthDate\" #birthDate=\"ngModel\" [(ngModel)]=\"invitation.profile.birthDate\"\n            id=\"birthDate\" class=\"form-control\" placeholder=\"Fecha de Nacimiento\">\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"phone\">Teléfono</label>\n          <input type=\"phone\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"invitation.contact.phone\" id=\"phone\"\n            class=\"form-control\" placeholder=\"Número Telefónico\" minlength=\"7\" required>\n          <app-show-errors [control]=\"phone\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"email\" class=\"optional\">e-mail</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"invitation.contact.email\"\n            id=\"email\" placeholder=\"Correo Electrónico\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\">\n          <app-show-errors [control]=\"email\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\" hidden>\n          <label for=\"password\">Contraseña</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\"\n            [(ngModel)]=\"invitation.password\" id=\"password\" placeholder=\"Contraseña\">\n          <app-show-errors [control]=\"password\" class=\"show-err\"></app-show-errors>\n        </div>\n      </div>\n\n\n      <div>\n        <div class=\"form-group row\">\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"local\" class=\"control-label\">País</label>\n            <select name=\"local\" #local=\"ngModel\" [(ngModel)]=\"invitation.contact.address.country\" id=\"local\"\n              aria-hidden=\"true\" class=\"form-control\" (ngModelChange)=\"updateSelectedValue($event)\" required>\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleLocal of ListLOCMain' [ngValue]=\"littleLocal._id\">\n                {{littleLocal.name}}\n              </option>\n            </select>\n\n            <app-show-errors [control]=\"local\" class=\"show-err\"></app-show-errors>\n          </div>\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"depaMini\" class=\"control-label\">Departamento</label>\n            <select name=\"depaMini\" #depaMini=\"ngModel\" [(ngModel)]=\"invitation.contact.address.state.id\" id=\"depaMini\"\n              class=\"form-control\" aria-hidden=\"true\" (ngModelChange)=\"updateSelectDepartamento($event)\" required>\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleDepa of listDepa' [ngValue]=\"littleDepa._id\">\n                {{littleDepa.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"depaMini\" class=\"show-err\"></app-show-errors>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"cityMini\" class=\"control-label\">Ciudad</label>\n            <select class=\"form-control\" name=\"cityMini\" id=\"cityMini\" #cityMini=\"ngModel\"\n              [(ngModel)]=\"invitation.contact.address.city.id\" aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectCiudad($event)\" required>\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleCiudad of listCiudad' [ngValue]=\"littleCiudad._id\">\n                {{littleCiudad.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"cityMini\" class=\"show-err\"></app-show-errors>\n          </div>\n\n          <div class=\"form-group col-md-4 campoFormulario\">\n            <label for=\"zonaMini\" class=\"control-label\">Zona</label>\n            <select class=\"form-control\" name=\"zonaMini\" id=\"zonaMini\" #zonaMini=\"ngModel\"\n              [(ngModel)]=\"invitation.contact.address.zone.id\" aria-hidden=\"true\" required>\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleZona of listZona' [ngValue]=\"littleZona._id\">\n                {{littleZona.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"zonaMini\" class=\"show-err\"></app-show-errors>\n          </div>\n          <!---->\n          <div class=\"form-group col-md-8 campoFormulario\">\n            <label class=\"control-label\">\n              Calle\n            </label>\n            <input type=\"text\" name=\"streetDirecction\" class=\"form-control\" id=\"streetDirecction\"\n              #streetDirecction=\"ngModel\" [(ngModel)]=\"invitation.contact.address.especificLocation\" required>\n            <app-show-errors [control]=\"streetDirecction\" class=\"show-err\"></app-show-errors>\n          </div>\n          <div class=\"form-group col-md-4 campoFormulario\">\n            <label for=\"codePostal\" class=\"control-label optional\">Código Postal</label>\n            <input type=\"text\" placeholder=\"Code Postal\" class=\"form-control\" name=\"codePostal\" id=\"codePostal\"\n              #codePostal=\"ngModel\" [(ngModel)]=\"invitation.contact.codePostal\" minlength=\"4\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"companyName\">Empresa</label>\n          <input style=\"color: white;\" id=\"companyName\" name=\"companyName\" type=\"text\" class=\"form-control\"\n            value=\"{{companiaActual}}\" readonly>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"sucursalName\">Sucursal</label>\n          <select class=\"form-control\" id=\"sucursalName\" name=\"sucursalName\" #sucursalName=\"ngModel\"\n            [(ngModel)]=\"job.sucursalName\" (ngModelChange)=\"updateSelectSucursal($event)\" required>\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option *ngFor='let item of this.listSucursal' [ngValue]=\"item._id\">\n              {{item.name}}\n            </option>\n          </select>\n          <app-show-errors [control]=\"sucursalName\" class=\"show-err\"></app-show-errors>\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label for=\"typeAccount\">Rol</label>\n          <select class=\"form-control\" id=\"typeAccount\" name=\"typeAccount\" #typeAccount=\"ngModel\"\n            [(ngModel)]=\"job.typeAccount\" (ngModelChange)=\"updateSelectRol($event)\" required>\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option *ngFor='let item of this.ListRol' [ngValue]=\"item._id\">\n              {{item.name}}\n            </option>\n          </select>\n          <app-show-errors [control]=\"typeAccount\" class=\"show-err\"></app-show-errors>\n        </div>\n      </div>\n\n      <div class=\"form-row\" *ngIf=\"verVehiculo\">\n        <div class=\"form-gro col-md-6\">\n          <label for=\"tipoVehiculo\">Tipo Vehículo</label>\n          <select class=\"form-control\" id=\"tipoVehiculo\" name=\"tipoVehiculo\" #tipoVehiculo=\"ngModel\"\n            [(ngModel)]=\"invitation.vehiculo.tipoVehiculo\" (ngModelChange)=\"updateSelectVehiculo($event)\">\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option *ngFor='let item of this.ListVehiculo' [ngValue]=\"item._id\">\n              {{item.name}}\n            </option>\n          </select>\n        </div>\n        <div class=\"form-gro col-md-6\">\n          <label for=\"placaVehiculo\" class=\"control-label optional\">Placa Vehículo</label>\n          <input type=\"text\" placeholder=\"Placa vehículo\" class=\"form-control\" name=\"placaVehiculo\" id=\"placaVehiculo\"\n            #placaVehiculo=\"ngModel\" [(ngModel)]=\"invitation.vehiculo.placaVehiculo\" minlength=\"6\">\n        </div>\n        <div class=\"form-gro col-md-6\">\n          <label for=\"detallesVehiculo\" class=\"control-label optional\">Detalles Vehículo</label>\n          <textarea name=\"detallesVehiculo\" id=\"detallesVehiculo\" cols=\"30\" rows=\"10\" class=\"form-control\"\n            placeholder=\"Detalles sobre el vehículo\" #detallesVehiculo=\"ngModel\"\n            [(ngModel)]=\"invitation.vehiculo.detallesVehiculo\"></textarea>\n        </div>\n      </div>\n\n      <div class=\"form-row\" hidden>\n        <div class=\"form-group col-12\">\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input id=\"acuerdo\" name=\"acuerdo\" type=\"checkbox\" #acuerdo=\"ngModel\"\n                class=\"form-control form-check-input\" [(ngModel)]=\"invitation.estado\">\n              <span class=\"form-check-sign\">Estoy de acuerdo con Términos de Servicio y Política de Privacidad</span>\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\" style=\"margin-top: 15px;\">\n        <button *ngIf=\"usuarioValido\" type=\"submit\" class=\"btn btn-primary\"\n          [disabled]=\"contextForm.invalid\">Invitar</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"procesando {{esVisible}}\">\n  <h3>Procesando Solicitud</h3>\n  <i class=\"fas fa-spinner fa-lg fa-spin\" style=\"margin: 0 auto; display: block; color: white;\"></i>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/lista-agendados/lista-agendados.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/lista-agendados/lista-agendados.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <h2 class=\"col-12 col-md-4 card-title\">Estado de pedidos agendados</h2>\n            <div class=\"col-12 col-md-8 toolbar\">\n                <button type=\"button\" class=\"btn-simple btn btn-info float-right\" (click)=\"exportFunction($event)\"><i\n                        class=\"fas fa-file-excel\"></i> Exportar a Excel</button>\n                <button type=\"button\" class=\"btn-simple btn btn-success float-right\"\n                    (click)=\"refreshFunction($event)\"><i class=\"fas fa-sync-alt\"></i> Actualizar Lista</button>\n                <!--<button type=\"button\" class=\"btn-simple btn btn-primary float-right\" [routerLink]=\"['/cargaProducto']\"\n                    [routerLinkActive]=\"['linkActivo']\"><i class=\"fas fa-plus\"></i> Nuevo Producto</button>-->\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"dataTables_wrapper\">\n            <div class=\"row\">\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"dataTables_length\" id=\"datatable_length\">\n                        <label class=\"float-left\" style=\"margin: 10px;\"> Mostrar</label>\n                        <select name=\"datatable_length\" aria-controls=\"datatable\"\n                            class=\"form-control float-left align-middle form-control-md\"\n                            (change)=\"entriesChange($event)\" style=\"width: 100px;\">\n                            <option value=\"10\" [selected]=\"entries==10\">10</option>\n                            <option value=\"25\" [selected]=\"entries==25\">25</option>\n                            <option value=\"-1\" [selected]=\"entries==-1\">All</option>\n                        </select>\n                        <label class=\"float-left\" style=\"margin: 10px;\"> pedidos </label>\n                    </div>\n                </div>\n\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"dataTables_length\" id=\"datatable_status\">\n                        <i class=\"fas fa-filter float-left\" style=\"margin: 10px 0;\"></i>\n                        <label class=\"float-left\" style=\"margin: 10px;\"> Estado</label>\n                        <select name=\"datatable_status\" aria-controls=\"datatable\"\n                            class=\"form-control float-left align-middle form-control-md\" (change)=\"statusChange($event)\"\n                            style=\"width: 100px;\">\n                            <option value=\"1\" [selected]=\"estado==1\">Pendientes</option>\n                            <option value=\"0\" [selected]=\"estado==0\">Cancelados</option>\n                            <option value=\"2\" [selected]=\"estado==2\">Asignados</option>\n                            <option value=\"3\" [selected]=\"estado==3\">Recogidos</option>\n                            <option value=\"4\" [selected]=\"estado==4\">En Tránsito</option>\n                            <option value=\"5\" [selected]=\"estado==5\">Entregados</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-12 col-md-4\">\n                    <div id=\"datatable_filter\" class=\"dataTables_filter form-control-md\">\n                        <label>\n                            <input type=\"search\" class=\"form-control\" style=\"width: 100%;\" placeholder=\"Buscar...\"\n                                aria-controls=\"datatable\" (keyup)=\"filterTable($event)\" />\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <ngx-datatable class=\"bootstrap selection-cell\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n                [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"entries != -1 ? entries:undefined\"\n                (activate)=\"onActivate($event)\" [rows]=\"temp\" [loadingIndicator]=\"isLoading\"\n                [treeFromRelation]=\"parentId\" [treeToRelation]=\"id\" (treeAction)=\"onTreeAction($event)\">\n\n                <ngx-datatable-column name=\"Código\" prop=\"codigo\">{{codigo}}</ngx-datatable-column>\n                <ngx-datatable-column name=\"Nombre del Cliente\" prop=\"nombreCliente\">{{nombreCliente}}</ngx-datatable-column>\n                <ngx-datatable-column name=\"Apellido del Cliente\" prop=\"apellidoCliente\">{{apellidoCliente}}\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"Fecha y hora\" prop=\"fechaHora\">{{fechaHora|date:'short'}}\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Teléfono Cliente\" prop=\"telefono\">{{telefono}}\n                </ngx-datatable-column>\n                <!--<ngx-datatable-column name=\"Estado\">\n                    <ng-template ngx-datatable-cell-template let-row=\"row\">\n                        <ng-container *ngIf=\"row.estado; else elseTemplate\">\n                            Habilitado\n                        </ng-container>\n                        <ng-template #elseTemplate>\n                            Inhabilitado\n                        </ng-template>\n                    </ng-template>\n                </ngx-datatable-column>-->\n            </ngx-datatable>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/main/main.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/main/main.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n\n\n    <!--<input type=\"button\" value=\"capturar\" (click)=\"capturar()\">-->\n\n\n\n\n    <div class=\"card card-chart\">\n      <div class=\"card-header \">\n        <div class=\"row\">\n          <div class=\"col-sm-6 text-left\">\n            <h5 class=\"card-category\">Total</h5>\n            <h2 class=\"card-title\">Cuentas</h2>\n          </div>\n          <!--<div class=\"col-sm-6\">\n            <div class=\"btn-group btn-group-toggle float-right\" data-toggle=\"buttons\">\n              <label class=\"btn btn-sm btn-primary btn-simple active\" id=\"0\">\n                <input type=\"radio\" name=\"options\" checked>\n                <span class=\"d-none d-sm-block d-md-block d-lg-block d-xl-block\">Accounts</span>\n                <span class=\"d-block d-sm-none\">\n                  <i class=\"tim-icons icon-single-02\"></i>\n                </span>\n              </label>\n              <label class=\"btn btn-sm btn-primary btn-simple\" id=\"1\">\n                <input type=\"radio\" class=\"d-none d-sm-none\" name=\"options\">\n                <span class=\"d-none d-sm-block d-md-block d-lg-block d-xl-block\">Purchases</span>\n                <span class=\"d-block d-sm-none\">\n                  <i class=\"tim-icons icon-gift-2\"></i>\n                </span>\n              </label>\n              <label class=\"btn btn-sm btn-primary btn-simple\" id=\"2\">\n                <input type=\"radio\" class=\"d-none\" name=\"options\">\n                <span class=\"d-none d-sm-block d-md-block d-lg-block d-xl-block\">Sessions</span>\n                <span class=\"d-block d-sm-none\">\n                  <i class=\"tim-icons icon-tap-02\"></i>\n                </span>\n              </label>\n            </div>\n          </div>-->\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-area\">\n          <canvas id=\"chartBig1\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n    <div class=\"card card-chart\">\n      <div class=\"card-header\">\n        <h5 class=\"card-category\">Ventas</h5>\n        <h3 class=\"card-title\"><i class=\"tim-icons icon-bell-55 text-primary\"></i> 763,215</h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-area\">\n          <canvas id=\"chartLinePurple\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4\">\n    <div class=\"card card-chart\">\n      <div class=\"card-header\">\n        <h5 class=\"card-category\">Cobros diarios</h5>\n        <h3 class=\"card-title\"><i class=\"tim-icons icon-delivery-fast text-info\"></i> 3,500€</h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-area\">\n          <canvas id=\"CountryChart\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4\">\n    <div class=\"card card-chart\">\n      <div class=\"card-header\">\n        <h5 class=\"card-category\">Cantidad de Asociados</h5>\n        <h3 class=\"card-title\"><i class=\"tim-icons icon-send text-success\"></i> 12,100K</h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-area\">\n          <canvas id=\"chartLineGreen\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--<div class=\"row\">\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card card-tasks\">\n      <div class=\"card-header \">\n        <h6 class=\"title d-inline\">Asociados(5)</h6>\n        <p class=\"card-category d-inline\">today</p>\n        <div class=\"dropdown\">\n          <button type=\"button\" class=\"btn btn-link dropdown-toggle btn-icon\" data-toggle=\"dropdown\">\n            <i class=\"tim-icons icon-settings-gear-63\"></i>\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#pablo\">Action</a>\n            <a class=\"dropdown-item\" href=\"#pablo\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#pablo\">Something else</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body \">\n        <div class=\"table-full-width table-responsive\">\n          <table class=\"table\">\n            <tbody>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Update the Documentation</p>\n                  <p class=\"text-muted\">Dwuamish Head, Seattle, WA 8:47 AM</p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">GDPR Compliance</p>\n                  <p class=\"text-muted\">The GDPR is a regulation that requires businesses to protect the personal data\n                    and privacy of Europe citizens for transactions that occur within EU member states.</p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Solve the issues</p>\n                  <p class=\"text-muted\">Fifty percent of all respondents said they would be more likely to shop at a\n                    company </p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Release v2.0.0</p>\n                  <p class=\"text-muted\">Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM</p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Export the processed files</p>\n                  <p class=\"text-muted\">The report also shows that consumers will not easily forgive a company once a\n                    breach exposing their personal data occurs. </p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Arival at export process</p>\n                  <p class=\"text-muted\">Capitol Hill, Seattle, WA 12:34 AM</p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card \">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\"> Simple Table</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table tablesorter \" id=\"\">\n            <thead class=\" text-primary\">\n              <tr>\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  City\n                </th>\n                <th class=\"text-center\">\n                  Salary\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  Dakota Rice\n                </td>\n                <td>\n                  Niger\n                </td>\n                <td>\n                  Oud-Turnhout\n                </td>\n                <td class=\"text-center\">\n                  $36,738\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Minerva Hooper\n                </td>\n                <td>\n                  Curaçao\n                </td>\n                <td>\n                  Sinaai-Waas\n                </td>\n                <td class=\"text-center\">\n                  $23,789\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Sage Rodriguez\n                </td>\n                <td>\n                  Netherlands\n                </td>\n                <td>\n                  Baileux\n                </td>\n                <td class=\"text-center\">\n                  $56,142\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Philip Chaney\n                </td>\n                <td>\n                  Korea, South\n                </td>\n                <td>\n                  Overland Park\n                </td>\n                <td class=\"text-center\">\n                  $38,735\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Doris Greene\n                </td>\n                <td>\n                  Malawi\n                </td>\n                <td>\n                  Feldkirchen in Kärnten\n                </td>\n                <td class=\"text-center\">\n                  $63,542\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Mason Porter\n                </td>\n                <td>\n                  Chile\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-center\">\n                  $78,615\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Jon Porter\n                </td>\n                <td>\n                  Portugal\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-center\">\n                  $98,615\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/product-list/product-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/product-list/product-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <h2 class=\"col-12 col-md-4 card-title\">Lista de Productos</h2>\n            <div class=\"col-12 col-md-8 toolbar\">\n                <button type=\"button\" class=\"btn-simple btn btn-info float-right\" (click)=\"exportFunction($event)\"><i\n                        class=\"fas fa-file-excel\"></i> Exportar a Excel</button>\n                <button type=\"button\" class=\"btn-simple btn btn-success float-right\"\n                    (click)=\"refreshFunction($event)\"><i class=\"fas fa-sync-alt\"></i> Actualizar Lista</button>\n                <button type=\"button\" class=\"btn-simple btn btn-primary float-right\" [routerLink]=\"['/cargaProducto']\"\n                    [routerLinkActive]=\"['linkActivo']\"><i class=\"fas fa-plus\"></i> Nuevo Producto</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"dataTables_wrapper\">\n            <div class=\"row\">\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"dataTables_length\" id=\"datatable_length\">\n                        <label class=\"float-left\" style=\"margin: 10px;\"> Mostrar</label>\n                        <select name=\"datatable_length\" aria-controls=\"datatable\"\n                            class=\"form-control float-left align-middle form-control-md\"\n                            (change)=\"entriesChange($event)\" style=\"width: 100px;\">\n                            <option value=\"10\" [selected]=\"entries==10\">10</option>\n                            <option value=\"25\" [selected]=\"entries==25\">25</option>\n                            <option value=\"-1\" [selected]=\"entries==-1\">All</option>\n                        </select>\n                        <label class=\"float-left\" style=\"margin: 10px;\"> productos </label>\n                    </div>\n                </div>\n\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"dataTables_length\" id=\"datatable_status\">\n                        <i class=\"fas fa-filter float-left\" style=\"margin: 10px 0;\"></i>\n                        <label class=\"float-left\" style=\"margin: 10px;\"> Estado</label>\n                        <select name=\"datatable_status\" aria-controls=\"datatable\"\n                            class=\"form-control float-left align-middle form-control-md\" (change)=\"statusChange($event)\"\n                            style=\"width: 100px;\">\n                            <option value=\"1\" [selected]=\"estado==1\">Habilitado</option>\n                            <option value=\"0\" [selected]=\"estado==0\">Inhabilitado</option>\n                            <option value=\"2\" [selected]=\"estado==2\">Eliminado</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-12 col-md-4\">\n                    <div id=\"datatable_filter\" class=\"dataTables_filter form-control-md\">\n                        <label>\n                            <input type=\"search\" class=\"form-control\" style=\"width: 100%;\" placeholder=\"Buscar...\"\n                                aria-controls=\"datatable\" (keyup)=\"filterTable($event)\" />\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <ngx-datatable class=\"bootstrap selection-cell\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n                [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"entries != -1 ? entries:undefined\"\n                (activate)=\"onActivate($event)\" [rows]=\"temp\" [loadingIndicator]=\"isLoading\"\n                [treeFromRelation]=\"parentId\" [treeToRelation]=\"id\" (treeAction)=\"onTreeAction($event)\">\n\n                <ngx-datatable-column name=\"Código\" prop=\"acronym\">{{acronym}}</ngx-datatable-column>\n                <ngx-datatable-column name=\"Nombre del Producto\" prop=\"nombre\">{{nombre}}</ngx-datatable-column>\n                <ngx-datatable-column name=\"Descripción\" prop=\"descripcion\">{{descripcion}}</ngx-datatable-column>\n                <ngx-datatable-column name=\"Precio\" prop=\"costo\">{{costo}}</ngx-datatable-column>\n                <!--<ngx-datatable-column name=\"Estado\">\n                    <ng-template ngx-datatable-cell-template let-row=\"row\">\n                        <ng-container *ngIf=\"row.estado; else elseTemplate\">\n                            Habilitado\n                        </ng-container>\n                        <ng-template #elseTemplate>\n                            Inhabilitado\n                        </ng-template>\n                    </ng-template>\n                </ngx-datatable-column>-->\n\n\n                <ngx-datatable-column [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n                    [resizeable]=\"false\">\n                    <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n                        let-selectFn=\"selectFn\">\n                        Producto\n                    </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\n                        let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n                        <a class=\"btn btn-round btn-warning btn-icon btn-sm\" (click)=\"deleteFunction($event)\">\n                            <i class=\"far fa-id-badge\" style=\"margin-top: 7px;\"></i></a> <!-- [routerLink]=\"['/descendenciaFicha', profile.firstName]\" [routerLinkActive]=\"['linkActivo']\">-->\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/products-load/products-load.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/products-load/products-load.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{opcion}} producto</h3>\n<div class=\"container\">\n    <form (ngSubmit)=\"guardar()\" name=\"contextForm\" #contextForm=\"ngForm\">\n        <div class=\"row\">\n            <div class=\"form-group col-4\">\n                <label for=\"acronym\">Código de Producto</label>\n                <input type=\"text\" name=\"acronym\" id=\"acronym\" class=\"form-control\" placeholder=\"Código de Producto\"\n                    aria-describedby=\"helpCodigo\" #acronym=\"ngModel\" [(ngModel)]=\"producto.acronym\" required>\n                <app-show-errors [control]=\"acronym\" class=\"show-err\"></app-show-errors>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"nombre\">Nombre del Producto a la venta</label>\n                <input type=\"text\" name=\"nombre\" id=\"nombre\" class=\"form-control\"\n                    placeholder=\"Nombre del Producto a la venta\" aria-describedby=\"helpNombre\" #nombre=\"ngModel\"\n                    [(ngModel)]=\"producto.nombre\" required>\n                <app-show-errors [control]=\"nombre\" class=\"show-err\"></app-show-errors>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-4\">\n                <label>Imagen del Producto</label>\n                <div class=\"fileupload fileupload-new\" data-provides=\"fileupload\"><input type=\"hidden\">\n                    <div class=\"fileupload-new thumbnail\"><img class=\"e2e-inner-html-interpolated\" alt=\"\"\n                            src=\"{{urlGlobal}}{{urlImage}}\" style=\"width: 200px\">\n                    </div>\n                    <div class=\"fileupload-preview fileupload-exists thumbnail\" style=\"line-height: 10px;\"></div>\n                    <div class=\"user-edit-image-buttons\">\n                        <span class=\"btn btn-azure btn-file\">\n                            <app-upload [mostrar]='mostrar' [title]=\"title_upload\" [path]=\"path_server\"\n                                (desdeElHijo)=\"recibeDeHijo($event);\">\n                            </app-upload>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-8\">\n                <div class=\"row\">\n                    <div class=\"form-group col-12\">\n                        <label for=\"costo\">Costo del Producto (Bs)</label>\n                        <input type=\"number\" name=\"costo\" id=\"costo\" class=\"form-control\"\n                            placeholder=\"Precio del Producto a la Venta\" aria-describedby=\"helpCosto\" #costo=\"ngModel\"\n                            [(ngModel)]=\"producto.costo\" required>\n                        <app-show-errors [control]=\"costo\" class=\"show-err\"></app-show-errors>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-12\">\n                        <label for=\"descripcion\">Descripción del Producto</label>\n                        <textarea name=\"descripcion\" id=\"descripcion\" cols=\"30\" rows=\"20\"\n                            placeholder=\"Descripción del Producto\" class=\"form-control\"\n                            aria-describedby=\"helpDescripcion\" #descripcion=\"ngModel\"\n                            [(ngModel)]=\"producto.descripcion\"></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"contextForm.invalid\">Guardar</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/profile/profile.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/profile/profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"form-sign center z-depth-4\">\n    <!--<img src=\"assets/img/logos/v.png\" alt=\"Ventun\">-->\n    <h2 class=\"center\">Información Personal</h2>\n    <hr>\n    <form (ngSubmit)=\"onUpdate()\" name=\"contextForm\" #contextForm=\"ngForm\" *ngIf=\"perfil\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"ci\">CI</label>\n          <input type=\"text\" class=\"form-control\" name=\"ci\" #ci=\"ngModel\" [(ngModel)]=\"perfil.profile.ci\" id=\"ci\"\n            placeholder=\"Cédula de Identidad\" required>\n          <app-show-errors [control]=\"ci\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"expedido\" class=\"control-label\">Expedido en:</label>\n          <select class=\"form-control\" name=\"expedido\" id=\"expedido\" #expedido=\"ngModel\"\n            [(ngModel)]=\"perfil.profile.expedido\" required aria-hidden=\"true\">\n            <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n            <option *ngFor='let littleDepa of depasCI' [ngValue]=\"littleDepa._id\">\n              {{littleDepa.name}}\n            </option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"firstName\">Nombre</label>\n          <input type=\"text\" class=\"form-control\" name=\"firstName\" #firstName=\"ngModel\"\n            [(ngModel)]=\"perfil.profile.firstName\" id=\"firstName\" placeholder=\"Nombre Usuario\" required>\n          <app-show-errors [control]=\"firstName\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"lastNameP\">Apellido Paterno</label>\n          <input type=\"text\" class=\"form-control\" name=\"lastNameP\" #lastNameP=\"ngModel\"\n            [(ngModel)]=\"perfil.profile.lastNameP\" id=\"lastNameP\" placeholder=\"Apellido Paterno\" required>\n          <app-show-errors [control]=\"lastNameP\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"lastNameM\">Apellido Materno</label>\n          <input type=\"text\" class=\"form-control\" name=\"lastNameM\" #lastNameM=\"ngModel\"\n            [(ngModel)]=\"perfil.profile.lastNameM\" id=\"lastNameM\" placeholder=\"Apellido Materno\" required>\n          <app-show-errors [control]=\"lastNameM\" class=\"show-err\"></app-show-errors>\n        </div>\n\n\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"changePass\"></label>\n          <input class=\"form-control btn btn-primary\" type=\"button\" value=\"Cambio de Contraseña\" routerLink=\"/sign/password\" routerLinkActive=\"active\" name=\"changePass\" style=\"padding: 0 10px;\">\n        </div>\n\n\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"gender\">Sexo</label>\n          <select class=\"form-control\" id=\"gender\" name=\"gender\" #gender=\"ngModel\" tabindex=\"-1\"\n            [(ngModel)]=\"perfil.profile.gender\" required>\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option [ngValue]=\"0\">\n              Hombre\n            </option>\n            <option [ngValue]=\"1\">\n              Mujer\n            </option>\n          </select>\n        </div>\n        <!--\n          <input type=\"date\" id=\"bday\" name=\"bday\" max=today min=\"1919-01-01\" class=\"form-control\" #bday=\"ngModel\"\n              [ngModel]=\"mySeller.xCurrent.profile.birthDate | date:'yyyy-MM-dd'\"\n              (ngModelChange)=\"mySeller.xCurrent.profile.birthDate = $event\">\n        -->\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"birthDate\">Fecha de Nacimiento</label>\n          <input type=\"date\" class=\"form-control\" name=\"birthDate\" #birthDate=\"ngModel\"\n            [ngModel]=\"perfil?.profile.birthDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"perfil.profile.birthDate = $event\" id=\"birthDate\"\n            placeholder=\"Fecha de Nacimiento\">\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"phone\">Teléfono</label>\n          <input type=\"phone\" class=\"form-control\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"perfil.contact.phone\"\n            id=\"phone\" placeholder=\"Número Telefónico\" required>\n          <app-show-errors [control]=\"phone\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"email\">e-mail</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"perfil.contact.email\"\n            id=\"email\" placeholder=\"Correo Electrónico\">\n          <app-show-errors [control]=\"email\" class=\"show-err\"></app-show-errors>\n        </div>\n      </div>\n\n\n      <div>\n        <div class=\"form-group row\">\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"local\" class=\"control-label\">País</label>\n            <select class=\"form-control\" name=\"local\" id=\"local\" #local=\"ngModel\"\n              [(ngModel)]=\"perfil.contact.address.country\" required aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectedValue($event)\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleLocal of ListLOCMain' [ngValue]=\"littleLocal._id\">\n                {{littleLocal.name}}\n              </option>\n            </select>\n\n            <app-show-errors [control]=\"local\" class=\"show-err\"></app-show-errors>\n          </div>\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"depaMini\" class=\"control-label\">Departamento</label>\n            <select class=\"form-control\" name=\"depaMini\" id=\"depaMini\" #depaMini=\"ngModel\"\n              [(ngModel)]=\"perfil.contact.address.state.id\" required aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectDepartamento($event)\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleDepa of listDepa' [ngValue]=\"littleDepa._id\">\n                {{littleDepa.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"depaMini\" class=\"show-err\"></app-show-errors>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"cityMini\" class=\"control-label\">Ciudad</label>\n            <select class=\"form-control\" name=\"cityMini\" id=\"cityMini\" #cityMini=\"ngModel\"\n              [(ngModel)]=\"perfil.contact.address.city.id\" required aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectCiudad($event)\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleCiudad of listCiudad' [ngValue]=\"littleCiudad._id\">\n                {{littleCiudad.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"cityMini\" class=\"show-err\"></app-show-errors>\n          </div>\n\n          <div class=\"form-group col-md-4 campoFormulario\">\n            <label for=\"zonaMini\" class=\"control-label\">Zona</label>\n            <select tabindex=\"-1\" class=\"form-control\" name=\"zonaMini\" id=\"zonaMini\" #zonaMini=\"ngModel\"\n              [(ngModel)]=\"perfil.contact.address.zone.id\" required aria-hidden=\"true\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleZona of listZona' [ngValue]=\"littleZona._id\">\n                {{littleZona.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"zonaMini\" class=\"show-err\"></app-show-errors>\n          </div>\n          <div class=\"form-group col-md-8 campoFormulario\">\n            <label class=\"control-label\">\n              Street\n            </label>\n            <input name=\"streetDirecction\" class=\"form-control\" id=\"streetDirecction\" type=\"text\" required\n              #streetDirecction=\"ngModel\" [(ngModel)]=\"perfil.contact.address.especificLocation\">\n          </div>\n          <div class=\"form-group col-md-4 campoFormulario\">\n            <label for=\"codePostal\" class=\"control-label\">Zip Code</label>\n            <input type=\"text\" placeholder=\"Code Postal\" class=\"form-control\" name=\"codePostal\" id=\"codePostal\"\n              #codePostal=\"ngModel\" [(ngModel)]=\"perfil.contact.codePostal\" minlength=\"4\">\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"form-row\">\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label>Imagen Personal</label>\n            <div class=\"fileupload fileupload-new\" data-provides=\"fileupload\"><input type=\"hidden\">\n              <div class=\"fileupload-new thumbnail\"><img class=\"e2e-inner-html-interpolated\" alt=\"\"\n                  src=\"{{urlGlobal}}{{urlImage}}\" style=\"width: 200px\">\n              </div>\n              <div class=\"fileupload-preview fileupload-exists thumbnail\" style=\"line-height: 10px;\"></div>\n              <div class=\"user-edit-image-buttons\">\n                <span class=\"btn btn-azure btn-file\">\n                  <app-upload [mostrar]='mostrar' [title]=\"title_upload\" [path]=\"path_server\"\n                    (desdeElHijo)=\"recibeDeHijo($event);\">\n                  </app-upload>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--<div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"estado\">Estado</label>\n          <select class=\"form-control\" id=\"estado\" name=\"estado\" #estado=\"ngModel\" tabindex=\"-1\"\n            [(ngModel)]=\"perfil.estado\" required>\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option [ngValue]=\"1\">\n              Activo\n            </option>\n            <option [ngValue]=\"0\">\n              Inactivo\n            </option>\n          </select>\n        </div>\n      </div>-->\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"contextForm.invalid\">Modificar Usuario</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adm/views/staff-list/staff-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adm/views/staff-list/staff-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"fSeller\" name=\"fSeller\" #fSeller='ngForm' *ngIf=\"job\">\n  <div class=\"form-group col-md-6\">\n    <label for=\"ciMain\">ciMain</label>\n    <input type=\"text\" class=\"form-control\" name=\"ciMain\" #ciMain=\"ngModel\" [(ngModel)]=\"job.ciMain\"\n      id=\"ciMain\" placeholder=\"Apellidos\">\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label for=\"companyName\">companyName</label>\n    <input type=\"text\" class=\"form-control\" name=\"companyName\" #companyName=\"ngModel\" [(ngModel)]=\"job.companyName\"\n      id=\"companyName\" placeholder=\"Apellidos\">\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label for=\"typeAccount\">typeAccount</label>\n    <input type=\"text\" class=\"form-control\" name=\"typeAccount\" #typeAccount=\"ngModel\" [(ngModel)]=\"job.typeAccount\"\n      id=\"typeAccount\" placeholder=\"Apellidos\">\n  </div>\n  <button class=\"btn btn-primary\" (click)=\"guardar()\">GUARDAR</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/toast/toast.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/toast/toast.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}} alert-dismissable\">\n        {{alert.message}}\n        <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n    </div>-->\n<div aria-live=\"polite\" aria-atomic=\"true\" style=\"position: relative;\" attr.id=\"{{idx}}\">\n    <div style=\"position: absolute; top: 40px; right: 0;\">\n\n        <div class=\"toast {{tipoAlert}}\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-delay=\"4000\">\n            <div class=\"toast-header\">\n                <strong class=\"mr-auto\">{{title}}</strong>\n                <small class=\"text-muted\">Ahora</small>\n                <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"toast-body\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/upload/upload.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/upload/upload.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"divMainFile\">\n  <label for=\"imageUp\" style=\"margin-bottom:0; background-color: #344675;\">Elige un Imagen</label>\n  <input class=\"custom-control {{muestraUP}}\" type=\"file\" accept=\".jpeg, .jpg, .png, .bmp, .jfif\" name=\"imageUp\" id=\"imageUp\" value=\"Sube imagen\"(change)=\"onFileSelected($event)\" style=\"z-index: 0!important;\">\n\n  <div class=\"card text-center float-left  {{muestraMIDDLE}}\">\n    <div id=\"card-body\" class=\"card-body\">\n      <div class=\"card text-white cardCompleto float-left\" *ngFor=\"let item of datosImagen; let i=index\">\n        <img src=\"{{item.src}}\" class=\"figure-img img-fluid rounded img-thumbnail\" alt=\"{{item.dataName}}\"\n          style=\"max-width: 164!important; max-height: 224px; margin: 20px 10px;\">\n        <div class=\"card-img-overlay\">\n          <p class=\"card-text\">{{item.dataName}}</p>\n          <a href=\"#\" class=\"btn btn-round btn-warning btn-icon\" (click)=\"deleteFunction($event, item.dataName)\"\n            style=\"margin-top: 15%;\">\n            <i class=\"fas fa-times\" style=\"margin-top: 7px;\"></i>\n          </a>\n        </div>\n        <div class='progress'>\n          <div id='pbFile{{item.dataName}}' class='progress-bar progress-bar-striped bg-success' role='progressbar'\n            aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>\n        </div>\n      </div>\n    </div>\n    <hr style=\"clear: both;\">\n    <div class=\"card-footer text-muted {{muestraDOWN}}\" *ngIf=\"mostrar==true\">\n      <input class=\"btn btn-outline-primary\" type=\"button\" value=\"Subir Imagen\" (click)=\"onUpload()\">\n      <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Cancelar\" (click)=\"onCancel()\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/adm/adm-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/adm/adm-routing.module.ts ***!
  \*******************************************/
/*! exports provided: AdmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmRoutingModule", function() { return AdmRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm.component */ "./src/app/adm/adm.component.ts");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/adm/views/main/main.component.ts");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/profile/profile.component */ "./src/app/adm/views/profile/profile.component.ts");
/* harmony import */ var _views_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/staff-list/staff-list.component */ "./src/app/adm/views/staff-list/staff-list.component.ts");
/* harmony import */ var _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/invitation/invitation.component */ "./src/app/adm/views/invitation/invitation.component.ts");
/* harmony import */ var _views_descendencia_ficha_descendencia_ficha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/descendencia-ficha/descendencia-ficha.component */ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.ts");
/* harmony import */ var _views_descendencia_profile_descendencia_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/descendencia-profile/descendencia-profile.component */ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.ts");
/* harmony import */ var _views_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/invitation-list/invitation-list.component */ "./src/app/adm/views/invitation-list/invitation-list.component.ts");
/* harmony import */ var _views_descendencia_list_descendencia_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/descendencia-list/descendencia-list.component */ "./src/app/adm/views/descendencia-list/descendencia-list.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _views_products_load_products_load_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/products-load/products-load.component */ "./src/app/adm/views/products-load/products-load.component.ts");
/* harmony import */ var _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/product-list/product-list.component */ "./src/app/adm/views/product-list/product-list.component.ts");
/* harmony import */ var _views_compra_producto_compra_producto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/compra-producto/compra-producto.component */ "./src/app/adm/views/compra-producto/compra-producto.component.ts");
/* harmony import */ var _views_agenda_pedido_agenda_pedido_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/agenda-pedido/agenda-pedido.component */ "./src/app/adm/views/agenda-pedido/agenda-pedido.component.ts");
/* harmony import */ var _views_lista_agendados_lista_agendados_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/lista-agendados/lista-agendados.component */ "./src/app/adm/views/lista-agendados/lista-agendados.component.ts");
/* harmony import */ var _views_ficha_pedido_ficha_pedido_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/ficha-pedido/ficha-pedido.component */ "./src/app/adm/views/ficha-pedido/ficha-pedido.component.ts");
/* harmony import */ var _views_capture_capture_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/capture/capture.component */ "./src/app/adm/views/capture/capture.component.ts");




















var routes = [
    {
        path: '', component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }]
    },
    //{ path: '', redirectTo: 'main', pathMatch: 'full' },
    {
        path: 'main',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }]
    },
    {
        path: 'profile',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] }]
    },
    {
        path: 'job',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_6__["StaffListComponent"] }]
    },
    {
        path: 'invitacion',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__["InvitationComponent"] }]
    },
    {
        path: 'invitacion/:_id',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__["InvitationComponent"] }]
    },
    {
        path: 'invitacionLista',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_10__["InvitationListComponent"] }]
    },
    {
        path: 'descendenciaFicha',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_descendencia_ficha_descendencia_ficha_component__WEBPACK_IMPORTED_MODULE_8__["DescendenciaFichaComponent"] }]
    },
    {
        path: 'descendenciaFicha/:id',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_descendencia_profile_descendencia_profile_component__WEBPACK_IMPORTED_MODULE_9__["DescendenciaProfileComponent"] }]
    },
    {
        path: 'descendenciaLista',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]],
        children: [{ path: '', component: _views_descendencia_list_descendencia_list_component__WEBPACK_IMPORTED_MODULE_11__["DescendenciaListComponent"] }]
    },
    {
        path: 'cargaProducto',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_products_load_products_load_component__WEBPACK_IMPORTED_MODULE_13__["ProductsLoadComponent"] }]
    },
    {
        path: 'editaProducto/:producto',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_products_load_products_load_component__WEBPACK_IMPORTED_MODULE_13__["ProductsLoadComponent"] }]
    },
    {
        path: 'listaProductos',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__["ProductListComponent"] }]
    },
    {
        path: 'compraProductos',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_compra_producto_compra_producto_component__WEBPACK_IMPORTED_MODULE_15__["CompraProductoComponent"] }]
    },
    {
        path: 'agendaPedido',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_agenda_pedido_agenda_pedido_component__WEBPACK_IMPORTED_MODULE_16__["AgendaPedidoComponent"] }]
    },
    {
        path: 'pedidosAgendados',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_lista_agendados_lista_agendados_component__WEBPACK_IMPORTED_MODULE_17__["ListaAgendadosComponent"] }]
    },
    {
        path: 'pedidos/:estado',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_ficha_pedido_ficha_pedido_component__WEBPACK_IMPORTED_MODULE_18__["FichaPedidoComponent"] }]
    },
    {
        path: 'capture',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_capture_capture_component__WEBPACK_IMPORTED_MODULE_19__["CaptureComponent"] }]
    }
];
var AdmRoutingModule = /** @class */ (function () {
    function AdmRoutingModule() {
    }
    AdmRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdmRoutingModule);
    return AdmRoutingModule;
}());



/***/ }),

/***/ "./src/app/adm/adm.component.css":
/*!***************************************!*\
  !*** ./src/app/adm/adm.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS9hZG0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adm/adm.component.ts":
/*!**************************************!*\
  !*** ./src/app/adm/adm.component.ts ***!
  \**************************************/
/*! exports provided: AdmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmComponent", function() { return AdmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdmComponent = /** @class */ (function () {
    function AdmComponent() {
    }
    AdmComponent.prototype.ngOnInit = function () {
    };
    AdmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adm',
            template: __webpack_require__(/*! raw-loader!./adm.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/adm.component.html"),
            styles: [__webpack_require__(/*! ./adm.component.css */ "./src/app/adm/adm.component.css")]
        })
    ], AdmComponent);
    return AdmComponent;
}());



/***/ }),

/***/ "./src/app/adm/adm.module.ts":
/*!***********************************!*\
  !*** ./src/app/adm/adm.module.ts ***!
  \***********************************/
/*! exports provided: AdmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmModule", function() { return AdmModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _adm_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adm-routing.module */ "./src/app/adm/adm-routing.module.ts");
/* harmony import */ var _adm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adm.component */ "./src/app/adm/adm.component.ts");
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ "./src/app/adm/layouts/navbar/navbar.component.ts");
/* harmony import */ var _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/sidebar/sidebar.component */ "./src/app/adm/layouts/sidebar/sidebar.component.ts");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "./src/app/adm/layouts/footer/footer.component.ts");
/* harmony import */ var _modules_modules_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/modules.module */ "./src/app/modules/modules.module.ts");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/adm/views/main/main.component.ts");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/profile/profile.component */ "./src/app/adm/views/profile/profile.component.ts");
/* harmony import */ var _views_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/staff-list/staff-list.component */ "./src/app/adm/views/staff-list/staff-list.component.ts");
/* harmony import */ var _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/invitation/invitation.component */ "./src/app/adm/views/invitation/invitation.component.ts");
/* harmony import */ var _tools_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tools/show-errors/show-errors.component */ "./src/app/adm/tools/show-errors/show-errors.component.ts");
/* harmony import */ var _views_descendencia_ficha_descendencia_ficha_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/descendencia-ficha/descendencia-ficha.component */ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.ts");
/* harmony import */ var _views_descendencia_profile_descendencia_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/descendencia-profile/descendencia-profile.component */ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.ts");
/* harmony import */ var _views_descendencia_list_descendencia_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/descendencia-list/descendencia-list.component */ "./src/app/adm/views/descendencia-list/descendencia-list.component.ts");
/* harmony import */ var _views_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/invitation-list/invitation-list.component */ "./src/app/adm/views/invitation-list/invitation-list.component.ts");
/* harmony import */ var _pipes_expedido_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pipes/expedido.pipe */ "./src/app/pipes/expedido.pipe.ts");
/* harmony import */ var _pipes_nombre_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pipes/nombre.pipe */ "./src/app/pipes/nombre.pipe.ts");
/* harmony import */ var _views_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/configuration/configuration.component */ "./src/app/adm/views/configuration/configuration.component.ts");
/* harmony import */ var _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/product-list/product-list.component */ "./src/app/adm/views/product-list/product-list.component.ts");
/* harmony import */ var _views_products_load_products_load_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/products-load/products-load.component */ "./src/app/adm/views/products-load/products-load.component.ts");
/* harmony import */ var _views_compra_producto_compra_producto_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/compra-producto/compra-producto.component */ "./src/app/adm/views/compra-producto/compra-producto.component.ts");
/* harmony import */ var _views_agenda_pedido_agenda_pedido_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/agenda-pedido/agenda-pedido.component */ "./src/app/adm/views/agenda-pedido/agenda-pedido.component.ts");
/* harmony import */ var _views_lista_agendados_lista_agendados_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/lista-agendados/lista-agendados.component */ "./src/app/adm/views/lista-agendados/lista-agendados.component.ts");
/* harmony import */ var _views_ficha_pedido_ficha_pedido_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/ficha-pedido/ficha-pedido.component */ "./src/app/adm/views/ficha-pedido/ficha-pedido.component.ts");
/* harmony import */ var _views_capture_capture_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/capture/capture.component */ "./src/app/adm/views/capture/capture.component.ts");































var AdmModule = /** @class */ (function () {
    function AdmModule() {
    }
    AdmModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _adm_component__WEBPACK_IMPORTED_MODULE_7__["AdmComponent"],
                _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _views_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"],
                _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _views_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_14__["StaffListComponent"],
                _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_15__["InvitationComponent"],
                _tools_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_16__["ShowErrorsComponent"],
                _views_descendencia_ficha_descendencia_ficha_component__WEBPACK_IMPORTED_MODULE_17__["DescendenciaFichaComponent"],
                _views_descendencia_profile_descendencia_profile_component__WEBPACK_IMPORTED_MODULE_18__["DescendenciaProfileComponent"],
                _views_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_20__["InvitationListComponent"],
                _views_descendencia_list_descendencia_list_component__WEBPACK_IMPORTED_MODULE_19__["DescendenciaListComponent"],
                _pipes_expedido_pipe__WEBPACK_IMPORTED_MODULE_21__["ExpedidoPipe"],
                _pipes_nombre_pipe__WEBPACK_IMPORTED_MODULE_22__["NombrePipe"],
                _views_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_23__["ConfigurationComponent"],
                _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_24__["ProductListComponent"],
                _views_products_load_products_load_component__WEBPACK_IMPORTED_MODULE_25__["ProductsLoadComponent"],
                _views_compra_producto_compra_producto_component__WEBPACK_IMPORTED_MODULE_26__["CompraProductoComponent"],
                _views_agenda_pedido_agenda_pedido_component__WEBPACK_IMPORTED_MODULE_27__["AgendaPedidoComponent"],
                _views_lista_agendados_lista_agendados_component__WEBPACK_IMPORTED_MODULE_28__["ListaAgendadosComponent"],
                _views_ficha_pedido_ficha_pedido_component__WEBPACK_IMPORTED_MODULE_29__["FichaPedidoComponent"],
                _views_capture_capture_component__WEBPACK_IMPORTED_MODULE_30__["CaptureComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["AngularMultiSelectModule"],
                _adm_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdmRoutingModule"],
                _modules_modules_module__WEBPACK_IMPORTED_MODULE_11__["ModulesModule"]
            ]
        })
    ], AdmModule);
    return AdmModule;
}());



/***/ }),

/***/ "./src/app/adm/layouts/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/adm/layouts/footer/footer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adm/layouts/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adm/layouts/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/layouts/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/adm/layouts/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/adm/layouts/navbar/navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/adm/layouts/navbar/navbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown.nav-item>a {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbS9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi5uYXYtaXRlbT5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/adm/layouts/navbar/navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adm/layouts/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_change_live_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/change-live.service */ "./src/app/services/change-live.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(connexion, globalEquipo, changeTeam, _router) {
        this.connexion = connexion;
        this.globalEquipo = globalEquipo;
        this.changeTeam = changeTeam;
        this._router = _router;
        this.lista = [];
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["globalVars"].filesDomain;
        this.equipoActual = '';
        this.desdeElHijo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ListCompany = [];
        this.ListRol = [];
        this.listSucursal = [];
        this.todasSucursales = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.connexion.get_data<TypeContext>('typecontext').subscribe(reslo => {
          this.ListCompany = reslo.filter(LOC => (LOC.context_id == globalConfigurations.company) || (LOC.context_id == globalConfigurations.delivery));
          this.ListRol = reslo.filter(LOC => LOC.context_id == globalConfigurations.rol);
        }, error => {
          console.log('Hubo un problema al cargar datos. ' + error);
        });*/
        this.connexion.get_data('location').subscribe(function (reslo) {
            _this.ListCompany = reslo.filter(function (LOC) { return (LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["globalConfigurations"].company) || (LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["globalConfigurations"].delivery); });
            _this.ListRol = reslo.filter(function (LOC) { return LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["globalConfigurations"].rol; });
            _this.todasSucursales = reslo.filter(function (LOC) { return LOC.owner == null; });
        }, function (error) {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        setTimeout(function () {
            var anny = JSON.parse(localStorage.getItem('userCompany'));
            anny.forEach(function (element) {
                _this.ListCompany.forEach(function (comp) {
                    if (element.companyName == comp._id) {
                        _this.lista.push({ id: element.companyName, valor: comp.name });
                        if (localStorage.getItem('actual')) {
                            _this.updateEmp(localStorage.getItem('actual'), false);
                            _this.updateSuc(JSON.parse(localStorage.getItem('userCompany'))[0]);
                        }
                        else {
                            _this.updateEmp(element.companyName, false);
                        }
                    }
                });
            });
            _this.userName = localStorage.getItem('userName');
            _this.perfil = localStorage.getItem('photo');
        }, 1000);
    };
    NavbarComponent.prototype.updateEmp = function (id, bol) {
        var _this = this;
        this.ListCompany.forEach(function (comp) {
            if (id == comp._id) {
                _this.changeTeam.setEquipo(id);
                _this.desdeElHijo.emit(id);
                _this.globalEquipo.equipo = id;
                _this.equipoActual = comp.name;
            }
        });
        if (bol == true) {
            //this._router.navigate(['/invitacion/']);
            window.location.reload();
        }
    };
    NavbarComponent.prototype.updateSuc = function (jsonJob) {
        var _this = this;
        this.todasSucursales.forEach(function (suc) {
            if (jsonJob.sucursalName == suc._id) {
                _this.equipoActual = _this.equipoActual + ' - ' + suc.name;
            }
        });
    };
    NavbarComponent.prototype.cerrarSesion = function () {
        localStorage.clear();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
        { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
        { type: src_app_services_change_live_service__WEBPACK_IMPORTED_MODULE_5__["ChangeLiveService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NavbarComponent.prototype, "desdeElHijo", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/layouts/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/adm/layouts/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/adm/layouts/sidebar/sidebar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/adm/layouts/sidebar/sidebar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/adm/layouts/sidebar/sidebar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/adm/layouts/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");



var misc = {
    sidebar_mini_active: true
};
var permissions = [
    {
        // AQUEL ADMINISTRADOR QUE NO TIENE ASIGNADO UNA SUCURSAL O SUCURSAL = 0
        RoleID: 'ger',
        menuView: ["Registro de Ventas"],
        subMenuView: []
    },
    {
        RoleID: 'adm',
        menuView: [],
        subMenuView: []
    },
    {
        RoleID: 'cen',
        menuView: ["Registro de Ventas", "Registro de Usuarios", "Productos", "Pedidos"],
        subMenuView: []
    },
    {
        RoleID: 'sup',
        menuView: ["Tablero", "Reportes"],
        subMenuView: ["Lista de Productos", "Lista de Pedidos"]
    },
    {
        RoleID: 'dist',
        menuView: ["Registro de Usuarios", "Tablero", "Pendientes", 'Productos', "Asignados", "Pedidos", "Recogidos", "Entregados", "Reportes"],
        subMenuView: ["Lista de Productos", "Agregar Productos"]
    },
    {
        RoleID: 'rep',
        menuView: ["Registro de Usuarios", "Registro de Ventas", 'Productos', 'Pedidos'],
        subMenuView: ["Lista de Productos", "Agregar Productos", "Lista de Pedidos"]
    }
];
//Menu Items
var ROUTES = [
    {
        path: "/main",
        title: "Tablero",
        type: "link",
        icontype: "icon-components"
    },
    {
        path: "/invitacion",
        title: "Registro de Usuarios",
        type: "link",
        icontype: "icon-badge"
    },
    {
        path: "/compraProductos",
        title: "Registro de Ventas",
        type: "link",
        icontype: "icon-cart"
    },
    {
        path: "",
        title: "Productos",
        type: "sub",
        icontype: "icon-app",
        collapse: "",
        isCollapsed: true,
        children: [
            { path: "listaProductos", title: "Lista de Productos", type: "link", ab: "LP" },
            { path: "cargaProducto", title: "Agregar Productos", type: "link", ab: "AP" }
        ]
    },
    {
        path: "/pedidos/1",
        title: "Pendientes",
        type: "link",
        icontype: "icon-paper"
    },
    {
        path: "/pedidos/2",
        title: "Asignados",
        type: "link",
        icontype: "icon-user-run"
    },
    /*{
      path: "#",
      title: "Invitacion",
      type: "sub",
      icontype: "icon-single-02",
      collapse: "invitacion",
      isCollapsed: true,
      children: [
        { path: "invitacion", title: "Nueva Invitación", type: "link", ab: "II" },
        { path: "invitacionLista", title: "Lista de Invitaciones", type: "link", ab: "IL" }
      ] this.router.navigate(['/invitacion/' + this.activeRow._id]);
    },*/
    {
        path: "/pedidos/3",
        title: "Recogidos",
        type: "link",
        icontype: "icon-delivery-fast"
    },
    {
        path: "/pedidos/5",
        title: "Entregados",
        type: "link",
        icontype: "icon-tap-02"
    },
    {
        path: "",
        title: "Pedidos",
        type: "sub",
        icontype: "icon-tap-02",
        collapse: "",
        isCollapsed: true,
        children: [
            { path: "pedidosAgendados", title: "Lista de Pedidos", type: "link", ab: "LP" } /*,
            { path: "cargaProducto", title: "Agregar Productos", type: "link", ab: "AP" }*/
        ]
    },
    {
        path: "#",
        title: "Reportes",
        type: "sub",
        icontype: "icon-sound-wave",
        collapse: "reporte",
        isCollapsed: true,
        children: [
            { path: "reporte1", title: "Reporte 1", type: "link", ab: "R1" },
            { path: "reporte2", title: "Reporte 2", type: "link", ab: "R2" }
        ]
    } /*,
    {
      path: "#",
      title: "Comisión",
      type: "link",
      icontype: "icon-badge"
    }*/
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.isCollapsedMenu = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.permissionsEvent();
    };
    SidebarComponent.prototype.buscaRol = function () {
        var local = JSON.parse(localStorage.getItem('userCompany'));
        var rol = '';
        switch (local[0].typeAccount) {
            case src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["userPermissions"].adm:
                if (local[0].sucursalName == 0) {
                    rol = 'ger';
                }
                else {
                    rol = 'adm';
                }
                break;
            case src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["userPermissions"].dist:
                rol = 'dist';
                break;
            case src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["userPermissions"].rep:
                rol = 'rep';
                break;
            case src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["userPermissions"].sup:
                rol = 'sup';
                break;
            default:
                rol = 'rep';
                break;
        }
        return rol;
    };
    SidebarComponent.prototype.permissionsEvent = function () {
        var idPosition = 0;
        var rol = this.buscaRol();
        if (localStorage.getItem('userCompany')) {
            for (var i = 0; i < permissions.length; i++) {
                if (permissions[i].RoleID == rol) {
                    idPosition = i;
                }
            }
        }
        this.menuItems.forEach(function (element) {
            element.visible = true;
            permissions[idPosition].menuView.forEach(function (subElement) {
                if (element.title == subElement) {
                    element.visible = false;
                }
            });
            if (element.children) {
                element.children.forEach(function (childElement) {
                    childElement.visible = true;
                    permissions[idPosition].subMenuView.forEach(function (subElement) {
                        if (childElement.title == subElement) {
                            childElement.visible = false;
                        }
                    });
                });
            }
        });
    };
    SidebarComponent.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if (new Date().getTime() - start > milliseconds) {
                break;
            }
        }
    };
    SidebarComponent.prototype.myFunc = function (event, menuitem) {
        event.preventDefault();
        event.stopPropagation();
        this.sleep(10);
        if (menuitem.isCollapsing === undefined) {
            menuitem.isCollapsing = true;
            this.isCollapsedMenu = true;
            // menuitem.isCollapsed = !menuitem.isCollapsed;
            var element = event.target;
            while (element.getAttribute("data-toggle") != "collapse" &&
                element != document.getElementsByTagName("html")[0]) {
                element = element.parentNode;
            }
            element = element.parentNode.children[1];
            if (element.classList.contains("collapse") &&
                !element.classList.contains("show")) {
                element.classList = "before-collapsing";
                var style = element.scrollHeight;
                element.classList = "collapsing";
                setTimeout(function () {
                    element.setAttribute("style", "height:" + style + "px");
                }, 1);
                setTimeout(function () {
                    element.classList = "collapse show";
                    element.removeAttribute("style");
                    menuitem.isCollapsing = undefined;
                }, 350);
            }
            else {
                var style = element.scrollHeight;
                setTimeout(function () {
                    element.setAttribute("style", "height:" + (style + 20) + "px");
                }, 3);
                setTimeout(function () {
                    element.classList = "collapsing";
                }, 3);
                setTimeout(function () {
                    element.removeAttribute("style");
                }, 20);
                setTimeout(function () {
                    element.classList = "collapse";
                    menuitem.isCollapsing = undefined;
                }, 400);
            }
        }
    };
    SidebarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        console.log('body ', body);
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
            this.isCollapsedMenu = true;
        }
        else {
            misc.sidebar_mini_active = false;
            this.isCollapsedMenu = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
            this.isCollapsedMenu = false;
        }
        else {
            body.classList.add('sidebar-mini');
            misc.sidebar_mini_active = true;
            this.isCollapsedMenu = true;
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    SidebarComponent.prototype.showSidebarMessage = function (message) {
        /*this.toastr.show(
          '<span class="now-ui-icons ui-1_bell-53"></span>', message,
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-top-right"
          }
        );*/
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/layouts/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/adm/layouts/sidebar/sidebar.component.css")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/adm/tools/show-errors/show-errors.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/adm/tools/show-errors/show-errors.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".roedor{\r\n    color: red;\r\n}\r\n.globito{\r\n    color: red !important; \r\n    margin-left: 5px;\r\n    font-size: 0.75rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3Rvb2xzL3Nob3ctZXJyb3JzL3Nob3ctZXJyb3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWRtL3Rvb2xzL3Nob3ctZXJyb3JzL3Nob3ctZXJyb3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9lZG9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uZ2xvYml0b3tcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/adm/tools/show-errors/show-errors.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/adm/tools/show-errors/show-errors.component.ts ***!
  \****************************************************************/
/*! exports provided: ShowErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorsComponent", function() { return ShowErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowErrorsComponent = /** @class */ (function () {
    function ShowErrorsComponent() {
    }
    ShowErrorsComponent_1 = ShowErrorsComponent;
    ShowErrorsComponent.prototype.ngOnInit = function () {
    };
    ShowErrorsComponent.prototype.shouldShowErrors = function () {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
    };
    ShowErrorsComponent.prototype.listOfErrors = function () {
        var _this = this;
        //console.log('esto mandamos al directiva show erros:', this.control);
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field]); });
    };
    ShowErrorsComponent.prototype.getMessage = function (type, params) {
        return ShowErrorsComponent_1.errorMessages[type](params);
    };
    var ShowErrorsComponent_1;
    ShowErrorsComponent.errorMessages = {
        'required': function () { return 'Este campo es requerido.'; },
        'minlength': function (params) { return 'La cantidad mínima de caracteres es de ' + params.requiredLength + '.'; },
        'maxlength': function (params) { return 'La cantidad máxima de caracteres es de ' + params.requiredLength + '.'; },
        'pattern': function (params) { return 'The required pattern is: ' + 'mail@ejemplo.com'; },
        'email': function () { return 'El formato de correo es: mail@ejemplo.com'; },
        'years': function (params) { return params.message; },
        'countryCity': function (params) { return params.message; },
        'crisCode': function (params) { return params.message; },
        'telephoneNumbers': function (params) { return params.message; },
        'telephoneNumber': function (params) { return params.message; }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ShowErrorsComponent.prototype, "control", void 0);
    ShowErrorsComponent = ShowErrorsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-errors',
            template: __webpack_require__(/*! raw-loader!./show-errors.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/tools/show-errors/show-errors.component.html"),
            styles: [__webpack_require__(/*! ./show-errors.component.css */ "./src/app/adm/tools/show-errors/show-errors.component.css")]
        })
    ], ShowErrorsComponent);
    return ShowErrorsComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/agenda-pedido/agenda-pedido.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/adm/views/agenda-pedido/agenda-pedido.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cuppa-dropdown {\r\n    border: 1px #6c757d solid!important;\r\n    border-radius: 6px!important;\r\n    -webkit-border-radius: 6px!important;\r\n    -moz-border-radius: 6px!important;\r\n    -ms-border-radius: 6px!important;\r\n    -o-border-radius: 6px!important;\r\n}\r\n\r\n.muestraSeleccion {\r\n    display: block!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3ZpZXdzL2FnZW5kYS1wZWRpZG8vYWdlbmRhLXBlZGlkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hZG0vdmlld3MvYWdlbmRhLXBlZGlkby9hZ2VuZGEtcGVkaWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VwcGEtZHJvcGRvd24ge1xyXG4gICAgYm9yZGVyOiAxcHggIzZjNzU3ZCBzb2xpZCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHghaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHghaW1wb3J0YW50O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA2cHghaW1wb3J0YW50O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDZweCFpbXBvcnRhbnQ7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzOiA2cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXVlc3RyYVNlbGVjY2lvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/adm/views/agenda-pedido/agenda-pedido.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/adm/views/agenda-pedido/agenda-pedido.component.ts ***!
  \********************************************************************/
/*! exports provided: AgendaPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPedidoComponent", function() { return AgendaPedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");





var AgendaPedidoComponent = /** @class */ (function () {
    function AgendaPedidoComponent(connexion, router) {
        this.connexion = connexion;
        this.router = router;
        this.totalCompra = 0;
        this.costoP = 0;
        this.compraP = '';
        this.costoVisible = false;
        this.settingsConsumer = {};
        this.selectedConsumer = [];
        this.styleActual = '';
    }
    AgendaPedidoComponent.prototype.ngOnInit = function () {
        this.localCompany = JSON.parse(localStorage.getItem('userCompany'));
        if (this.localCompany) {
            this.codigoPedido = 0; //this.generaCodigoVerificacion();
            this.pedido = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_3__["Pedido"]();
            this.pedido.productos = JSON.parse(localStorage.getItem('pedido'));
            if (this.pedido.productos[0].id == '0') {
                this.costoVisible = true;
            }
            this.calculaTotal();
            this.listClonConsumer = new Array();
            this.settingsConsumer = {
                addNewItemOnFilter: true,
                singleSelection: true,
                text: "Seleccione uno",
                enableSearchFilter: true,
                classes: ""
            };
        }
        else {
            this.router.navigate(['/sign/login']);
        }
    };
    AgendaPedidoComponent.prototype.enviar = function () {
        var _this = this;
        document.getElementById("btnAgendar")['disabled'] = true;
        this.pedido.codigo = 0; //this.codigoPedido;
        this.pedido.fechaHora = new Date();
        this.pedido.usuario = { id: '', nombre: '', telefono: '', fotografia: '', tipoVehiculo: '', placaVehiculo: '', detallesVehiculo: '' };
        this.pedido.companyName = this.localCompany[0].companyName;
        if (this.localCompany[0].sucursalName) {
            this.pedido.sucursalName = this.localCompany[0].sucursalName;
        }
        else {
            this.pedido.sucursalName = '0';
        }
        if (this.costoVisible == true) {
            this.pedido.productos[0].nombre = this.compraP;
            this.totalCompra;
            this.pedido.productos[0].costo = this.totalCompra;
        }
        this.pedido.estadoActual = 1;
        this.pedido.ubicacionActual = this.pedido.geolocalizacion;
        this.pedido.entrega = { usuarioNombre: '', registroFoto: '', cancelaPedido: new Date(), asignadoPedido: new Date(), recogidoPedido: new Date(), entregadoPedido: new Date() };
        this.connexion.addObject('creaPedido', this.pedido).subscribe(function (regis) {
            console.log('Datos guardados con éxito.');
            _this.router.navigate(['/compraProductos']);
        }, function (error) { console.log('Error al guardar los datos.'); });
    };
    AgendaPedidoComponent.prototype.onSearch = function (event) {
        var _this = this;
        this.pedido.telefono = event.target.value;
        if (event.target.value.length >= 5) {
            //dropdown-list tagToBody animated fadeIn
            //list-filter $('.dropdown-list.tagToBody').addClass('muestraSeleccion');
            var styleFinal = this.styleActual + 'display: block!important';
            $('.list-filter').attr('style', 'display: none;');
            $('.dropdown-list.tagToBody').attr('style', styleFinal);
            $('#listConsumer').attr('style', 'display: block!important;');
            this.connexion.get_dataWithParams('buscaConsumer', '?phone=' + event.target.value).subscribe(function (regis) {
                _this.onDeSelectAll(regis);
                regis.forEach(function (client) {
                    client.address.forEach(function (direccion) {
                        _this.listClonConsumer.push({ ci: '0', phone: client['phone'], name: client['name'], lastName: client['lastName'], address: direccion['especificLocation'], geo: direccion['geoData'] });
                    });
                    //this.selectedConsumer = this.listClonConsumer;
                });
                if (regis.length == 0) {
                    $('.dropdown-list.tagToBody').attr('style', _this.styleActual);
                }
            });
        }
        else {
            if (event.target.value.length < 5) {
                $('.dropdown-list.tagToBody').attr('style', this.styleActual);
            }
        }
    };
    AgendaPedidoComponent.prototype.onItemSelect = function (item) {
        this.pedido.telefono = item.phone;
        this.pedido.nombreCliente = item.name;
        this.pedido.apellidoCliente = item.lastName;
        this.pedido.direccion = item.address;
        this.pedido.geolocalizacion = item.geo;
        this.goSearchOut();
        /*this.appt.clientId = item.id;
        this.idClient = item.id;
        this.nameClient = item.itemName;
        this.client.forEach(myclient => {
          if (myclient.clientID == this.idClient) {
            this.nameTip = myclient.lastName + ', ' + myclient.firstName;
            //this.memberTip = myclient.memberId;
            //this.planTip = myclient.healthPlan;
            //this.dobTip = myclient.dobFormat;
          }
        });*/
    };
    AgendaPedidoComponent.prototype.OnItemDeSelect = function (item) {
        /*this.appt.clientId = item.id;
        this.idClient = item.id;*/
    };
    AgendaPedidoComponent.prototype.onDeSelectAll = function (event) {
        this.listClonConsumer = [];
        this.selectedConsumer = [];
    };
    AgendaPedidoComponent.prototype.onSelectAll = function (event) {
    };
    /*goSearch(mySearch: ElementRef) {
      mySearch.nativeElement.focus();
      console.log(mySearch);
    }*/ //(focus)="goSearchOut(mySearch)"
    AgendaPedidoComponent.prototype.goSearchOut = function () {
        $('.dropdown-list.tagToBody').attr('style', this.styleActual);
        //$('#listConsumer').attr('style', 'display: none!important;');
        //listConsumer
    };
    AgendaPedidoComponent.prototype.goSearch = function (mySearch) {
        //mySearch.nativeElement.focus();
        this.styleActual = $('.dropdown-list.tagToBody').attr('style');
    };
    /*generaCodigoVerificacion = () => {
      return Math.random().toString(36).substring(7);
    }*/
    AgendaPedidoComponent.prototype.cambiaCosto = function () {
        var miCosto = 0;
        if (!this.costoP) {
            miCosto = 0;
        }
        else {
            miCosto = Number(this.costoP);
        }
        this.totalCompra = miCosto;
    };
    AgendaPedidoComponent.prototype.calculaTotal = function () {
        var _this = this;
        this.totalCompra = 0;
        this.pedido.productos.forEach(function (element) {
            _this.totalCompra += (Number(element.costo) * Number(element.cantidad));
        });
    };
    AgendaPedidoComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_4__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySearch', { static: false })
    ], AgendaPedidoComponent.prototype, "mySearch", void 0);
    AgendaPedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agenda-pedido',
            template: __webpack_require__(/*! raw-loader!./agenda-pedido.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/agenda-pedido/agenda-pedido.component.html"),
            styles: [__webpack_require__(/*! ./agenda-pedido.component.css */ "./src/app/adm/views/agenda-pedido/agenda-pedido.component.css")]
        })
    ], AgendaPedidoComponent);
    return AgendaPedidoComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/capture/capture.component.css":
/*!*********************************************************!*\
  !*** ./src/app/adm/views/capture/capture.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video {\r\n    border: 1px solid black;\r\n    box-shadow: 2px 2px 3px black;\r\n    width:320px;\r\n    height:240px;\r\n  }\r\n  \r\n  #photo {\r\n    border: 1px solid black;\r\n    box-shadow: 2px 2px 3px black;\r\n    width:320px;\r\n    height:240px;\r\n  }\r\n  \r\n  #canvas {\r\n    display:none;\r\n  }\r\n  \r\n  .camera {\r\n    width: 340px;\r\n    display:inline-block;\r\n  }\r\n  \r\n  .output {\r\n    width: 340px;\r\n    display:inline-block;\r\n  }\r\n  \r\n  #startbutton {\r\n    display:block;\r\n    position:relative;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    bottom:32px;\r\n    background-color: rgba(0, 150, 0, 0.5);\r\n    border: 1px solid rgba(255, 255, 255, 0.7);\r\n    box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.2);\r\n    font-size: 14px;\r\n    font-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n    color: rgba(255, 255, 255, 1.0);\r\n  }\r\n  \r\n  .contentarea {\r\n    font-size: 16px;\r\n    font-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n    width: 760px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3ZpZXdzL2NhcHR1cmUvY2FwdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHNDQUFzQztJQUN0QywwQ0FBMEM7SUFDMUMsOENBQThDO0lBQzlDLGVBQWU7SUFDZixpREFBaUQ7SUFDakQsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlEQUFpRDtJQUNqRCxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZG0vdmlld3MvY2FwdHVyZS9jYXB0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlkZW8ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCBibGFjaztcclxuICAgIHdpZHRoOjMyMHB4O1xyXG4gICAgaGVpZ2h0OjI0MHB4O1xyXG4gIH1cclxuICBcclxuICAjcGhvdG8ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCBibGFjaztcclxuICAgIHdpZHRoOjMyMHB4O1xyXG4gICAgaGVpZ2h0OjI0MHB4O1xyXG4gIH1cclxuICBcclxuICAjY2FudmFzIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmNhbWVyYSB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLm91dHB1dCB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgI3N0YXJ0YnV0dG9uIHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIGJvdHRvbTozMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDAsIDAuNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxLjApO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogNzYwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/adm/views/capture/capture.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adm/views/capture/capture.component.ts ***!
  \********************************************************/
/*! exports provided: CaptureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureComponent", function() { return CaptureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CaptureComponent = /** @class */ (function () {
    function CaptureComponent() {
        this.width = 320; // We will scale the photo width to this
        this.height = 0; // This will be computed based on the input stream
        // |streaming| indicates whether or not we're currently streaming
        // video from the camera. Obviously, we start at false.
        this.streaming = false;
        // The various HTML elements we need to configure or control. These
        // will be set by the startup() function.
        this.video = null;
        this.canvas = null;
        this.photo = null;
        this.startbutton = null;
    }
    CaptureComponent.prototype.ngOnInit = function () {
        this.startup();
    };
    CaptureComponent.prototype.startup = function () {
        this.video = document.getElementById('video');
        this.canvas = document.getElementById('canvas');
        this.photo = document.getElementById('photo');
        this.startbutton = document.getElementById('startbutton');
        var self = this;
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
            self.video.srcObject = stream;
            self.video.play();
        })
            .catch(function (err) {
            console.log("An error occurred: " + err);
        });
        this.video.addEventListener('canplay', function (ev) {
            if (!this.streaming) {
                this.height = this.video.videoHeight / (this.video.videoWidth / this.width);
                // Firefox currently has a bug where the height can't be read from
                // the video, so we will make assumptions if this happens.
                if (isNaN(this.height)) {
                    this.height = this.width / (4 / 3);
                }
                this.video.setAttribute('width', this.width);
                this.video.setAttribute('height', this.height);
                this.canvas.setAttribute('width', this.width);
                this.canvas.setAttribute('height', this.height);
                this.streaming = true;
            }
        }, false);
        this.startbutton.addEventListener('click', function (ev) {
            self.takepicture();
            ev.preventDefault();
        }, false);
        this.clearphoto();
    };
    // Fill the photo with an indication that none has been
    // captured.
    CaptureComponent.prototype.clearphoto = function () {
        var context = this.canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        var data = this.canvas.toDataURL('image/png');
        this.photo.setAttribute('src', data);
    };
    // Capture a photo by fetching the current contents of the video
    // and drawing it into a canvas, then converting that to a PNG
    // format data URL. By drawing it on an offscreen canvas and then
    // drawing that to the screen, we can change its size and/or apply
    // other changes before drawing it.
    CaptureComponent.prototype.takepicture = function () {
        var context = this.canvas.getContext('2d');
        if (this.width && this.height) {
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            context.drawImage(this.video, 0, 0, this.width, this.height);
            var data = this.canvas.toDataURL('image/png');
            this.photo.setAttribute('src', data);
        }
        else {
            this.clearphoto();
        }
    };
    CaptureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-capture',
            template: __webpack_require__(/*! raw-loader!./capture.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/capture/capture.component.html"),
            styles: [__webpack_require__(/*! ./capture.component.css */ "./src/app/adm/views/capture/capture.component.css")]
        })
    ], CaptureComponent);
    return CaptureComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/compra-producto/compra-producto.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adm/views/compra-producto/compra-producto.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".producto:hover {\r\n    box-shadow: 5px 5px 5px 0px rgba(255,255,255,0.6);\r\n}\r\n.minus:hover {\r\n    cursor: pointer!important;\r\n    color: rgba(255, 0, 0, 0.9)!important;\r\n    border-bottom: 1px solid rgba(255, 0, 0, 0.5);\r\n}\r\n.float-buy {\r\n    box-shadow: 0px 2px 20px 1px rgba(84,84,84,0.74);\r\n}\r\n@media (max-width: 576px) { \r\n    .compras {\r\n        font-size: .8em!important;\r\n    }\r\n    div.producto {\r\n        margin: 5px!important;\r\n        width: 100px; \r\n    }\r\n    .producto img.card-img-top {\r\n        height: 80px;\r\n        width: 80px;\r\n    }\r\n    .card-title h4 {\r\n        font-size: 1.5em;\r\n    }\r\n    .card-title h5 {\r\n        font-size: 1em;\r\n    }\r\n    .float-buy h3 {\r\n        font-size: 1.1em;\r\n        margin: 0 auto!important;\r\n        padding: 0 auto!important;\r\n    }\r\n    .float-buy h4 {\r\n        font-size: 1.3em;\r\n        top: 5px!important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3ZpZXdzL2NvbXByYS1wcm9kdWN0by9jb21wcmEtcHJvZHVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUdJLGlEQUFpRDtBQUNyRDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFDQUFxQztJQUNyQyw2Q0FBNkM7QUFDakQ7QUFFQTtJQUdJLGdEQUFnRDtBQUNwRDtBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG0vdmlld3MvY29tcHJhLXByb2R1Y3RvL2NvbXByYS1wcm9kdWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RvOmhvdmVyIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbn1cclxuLm1pbnVzOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlciFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSkhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZmxvYXQtYnV5IHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IDFweCByZ2JhKDg0LDg0LDg0LDAuNzQpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDIwcHggMXB4IHJnYmEoODQsODQsODQsMC43NCk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDIwcHggMXB4IHJnYmEoODQsODQsODQsMC43NCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgeyBcclxuICAgIC5jb21wcmFzIHtcclxuICAgICAgICBmb250LXNpemU6IC44ZW0haW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgZGl2LnByb2R1Y3RvIHtcclxuICAgICAgICBtYXJnaW46IDVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4OyBcclxuICAgIH1cclxuICAgIC5wcm9kdWN0byBpbWcuY2FyZC1pbWctdG9wIHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC10aXRsZSBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuICAgIC5jYXJkLXRpdGxlIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIC5mbG9hdC1idXkgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8haW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgYXV0byFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZmxvYXQtYnV5IGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgIHRvcDogNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/adm/views/compra-producto/compra-producto.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adm/views/compra-producto/compra-producto.component.ts ***!
  \************************************************************************/
/*! exports provided: CompraProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraProductoComponent", function() { return CompraProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");





var CompraProductoComponent = /** @class */ (function () {
    function CompraProductoComponent(cnx, router) {
        this.cnx = cnx;
        this.router = router;
        this.urlImage = '/assets/img/noProduct.png';
        this.compra = [];
        this.totalCompra = 0;
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalVars"].filesDomain;
        this.cont = 0;
    }
    CompraProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var localCompany = JSON.parse(localStorage.getItem('userCompany'));
        if (localCompany) {
            this.cnx.get_dataWithParams('products', '?companyName=' + localCompany[0].companyName + '&estado=1').subscribe(function (myProds) {
                _this.productos = myProds;
                _this.productosTodos = myProds;
            });
        }
        //this.compra = [];/*
        //this.compra.id = 0
        //this.compra.nombre = '';
        //this.compra.cantidad = 0;*/
    };
    CompraProductoComponent.prototype.comprando = function (item) {
        this.cont += 1;
        if (this.compra.length == 0) {
            this.compra.push({ id: item._id, nombre: item.nombre, cantidad: 1, costo: item.costo });
        }
        else {
            var nuevaCantidad = 1;
            var ubicacion = -1;
            for (var i = 0; i < this.compra.length; i++) {
                if (this.compra[i].id == item._id) {
                    nuevaCantidad = this.compra[i].cantidad + 1;
                    this.compra[i] = { id: item._id, nombre: item.nombre, cantidad: nuevaCantidad, costo: item.costo };
                    ubicacion = i;
                    break;
                }
            }
            if (ubicacion == -1) {
                this.compra.push({ id: item._id, nombre: item.nombre, cantidad: nuevaCantidad, costo: item.costo });
            }
        }
        this.calculaTotal();
    };
    CompraProductoComponent.prototype.quitar = function (id) {
        for (var i = 0; i < this.compra.length; i++) {
            if (this.compra[i].id == id) {
                var nuevaCantidad = this.compra[i].cantidad - 1;
                if (nuevaCantidad <= 0) {
                    this.compra.splice(i, 1);
                }
                else {
                    this.compra[i] = { id: this.compra[i].id, nombre: this.compra[i].nombre, cantidad: nuevaCantidad, costo: this.compra[i].costo };
                }
                break;
            }
        }
        this.calculaTotal();
    };
    CompraProductoComponent.prototype.calculaTotal = function () {
        var _this = this;
        this.totalCompra = 0;
        this.compra.forEach(function (element) {
            _this.totalCompra += (element.costo * element.cantidad);
        });
    };
    CompraProductoComponent.prototype.comprar = function () {
        localStorage.setItem('pedido', JSON.stringify(this.compra));
        this.router.navigate(['/agendaPedido']);
    };
    CompraProductoComponent.prototype.compraDirecta = function () {
        localStorage.setItem('pedido', JSON.stringify([{ id: 0, nombre: 'Productos Varios', cantidad: 1, costo: 0 }]));
        this.router.navigate(['/agendaPedido']);
    };
    CompraProductoComponent.prototype.cancelar = function () {
        this.compra = [];
    };
    CompraProductoComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value.toString().toLowerCase();
        this.productos = this.productosTodos.filter(function (d) {
            for (var key in d) {
                if (d[key]) {
                    try {
                        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
                            return true;
                        }
                    }
                    catch (error) {
                        console.log(d[key], error);
                    }
                }
            }
            return false;
        });
        console.log(this.productos);
    };
    CompraProductoComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CompraProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compra-producto',
            template: __webpack_require__(/*! raw-loader!./compra-producto.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/compra-producto/compra-producto.component.html"),
            styles: [__webpack_require__(/*! ./compra-producto.component.css */ "./src/app/adm/views/compra-producto/compra-producto.component.css")]
        })
    ], CompraProductoComponent);
    return CompraProductoComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/configuration/configuration.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/adm/views/configuration/configuration.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adm/views/configuration/configuration.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/adm/views/configuration/configuration.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent() {
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
    };
    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__(/*! raw-loader!./configuration.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/configuration/configuration.component.html"),
            styles: [__webpack_require__(/*! ./configuration.component.css */ "./src/app/adm/views/configuration/configuration.component.css")]
        })
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n    color: white;\r\n    text-align: left;\r\n}\r\n\r\n.foto {\r\n    margin: 5px 0;\r\n}\r\n\r\n.ficha {\r\n    cursor: pointer;\r\n    border: 1px solid black;\r\n    border-left: 4px solid silver;\r\n    padding-right: 4px;\r\n}\r\n\r\n.ficha:hover {\r\n    border: 1px solid silver;\r\n    box-shadow: 0 0 10px silver;\r\n    transition-duration: 300ms;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3ZpZXdzL2Rlc2NlbmRlbmNpYS1maWNoYS9kZXNjZW5kZW5jaWEtZmljaGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9hZG0vdmlld3MvZGVzY2VuZGVuY2lhLWZpY2hhL2Rlc2NlbmRlbmNpYS1maWNoYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZm90byB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uZmljaGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHNpbHZlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmZpY2hhOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHNpbHZlcjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.ts ***!
  \******************************************************************************/
/*! exports provided: DescendenciaFichaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescendenciaFichaComponent", function() { return DescendenciaFichaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/person */ "./src/app/models/person.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");






var DescendenciaFichaComponent = /** @class */ (function () {
    function DescendenciaFichaComponent(connexion, _router) {
        this.connexion = connexion;
        this._router = _router;
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalVars"].filesDomain;
        this.ListDepts = [];
        this.asociados = [];
    }
    DescendenciaFichaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connexion.get_dataWithParams('location', '?owner=5e14d611d235a7103c0ba4f6').subscribe(function (reslo) {
            _this.ListDepts = reslo;
        }, function (error) {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.person = new src_app_models_person__WEBPACK_IMPORTED_MODULE_2__["person"]();
        this.connexion.get_dataWithParamsOne('personAssociated', '?userID=' + localStorage.getItem('code').substr(1) + '&companyName=' + localStorage.getItem('actual')).subscribe(function (regis) {
            _this.person = regis[0];
            _this.asociados = regis[0].associated;
            console.log(regis[0].associated);
        }, function (error) {
            var errorMessage = error;
            switch (errorMessage.status) {
                case 400:
                    console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
                    break;
                default:
                    console.log('Ocurrió un error al intentar registrar el usuario. \n Por favor verifique los datos e intente nuevamente.', errorMessage.status);
                    break;
            }
        });
    };
    DescendenciaFichaComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    DescendenciaFichaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-descendencia-ficha',
            template: __webpack_require__(/*! raw-loader!./descendencia-ficha.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.html"),
            styles: [__webpack_require__(/*! ./descendencia-ficha.component.css */ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.css")]
        })
    ], DescendenciaFichaComponent);
    return DescendenciaFichaComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/descendencia-list/descendencia-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-list/descendencia-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9kZXNjZW5kZW5jaWEtbGlzdC9kZXNjZW5kZW5jaWEtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/adm/views/descendencia-list/descendencia-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-list/descendencia-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: DescendenciaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescendenciaListComponent", function() { return DescendenciaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");





var DescendenciaListComponent = /** @class */ (function () {
    function DescendenciaListComponent(cnx, ruta, router, toastService, cd) {
        this.cnx = cnx;
        this.ruta = ruta;
        this.router = router;
        this.toastService = toastService;
        this.cd = cd;
        this.entries = 10;
        this.status = 1;
        this.isLoading = true;
        this.temp = [];
    }
    DescendenciaListComponent.prototype.ngOnInit = function () {
        this.myID = localStorage.getItem('code').substr(1);
        this.obtenerDatos(1, this.myID);
    };
    DescendenciaListComponent.prototype.entriesChange = function ($event) {
        this.entries = $event.target.value;
    };
    DescendenciaListComponent.prototype.statusChange = function ($event) {
        this.status = $event.target.value;
        this.obtenerDatos(this.status, this.myID);
    };
    DescendenciaListComponent.prototype.obtenerDatos = function (state, id) {
        var _this = this;
        console.log(state, id);
        this.isLoading = true;
        this.cnx.get_dataWithParams('personAssociated', '?userID=' + id + '&companyName=' + localStorage.getItem('actual') + '&estado=' + state).subscribe(function (myAds) {
            console.log(myAds);
            _this.rows = myAds[0].associated;
            setTimeout(function () {
                _this.isLoading = false;
            }, 1500);
            _this.temp = myAds[0].associated.map(function (prop, key) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prop, { treeStatus: 'collapsed', parentId: null, id: key });
            });
        });
        this.isLoading = false;
    };
    DescendenciaListComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value.toString().toLowerCase();
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key]) {
                    try {
                        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
                            return true;
                        }
                    }
                    catch (error) {
                        console.log(d[key], error);
                    }
                }
            }
            return false;
        });
    };
    DescendenciaListComponent.prototype.refreshFunction = function (event) {
        event.preventDefault();
        this.obtenerDatos(this.status, this.myID);
    };
    DescendenciaListComponent.prototype.exportFunction = function (event) {
        event.preventDefault();
        this.error('Espacio Insuficiente en el Disco', 'MLM Export');
    };
    DescendenciaListComponent.prototype.success = function (message, title) {
        this.toastService.success(message, title);
    };
    DescendenciaListComponent.prototype.error = function (message, title) {
        this.toastService.error(message, title);
    };
    DescendenciaListComponent.prototype.onActivate = function (event) {
        this.activeRow = event.row;
    };
    DescendenciaListComponent.prototype.onTreeAction = function (event) {
        var _this = this;
        var index = event.rowIndex;
        var row = event.row;
        if (row.treeStatus === 'collapsed') {
            row.treeStatus = 'loading';
            var myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
            this.cnx.get_dataWithParams('personAssociated', '?userID=' + row._id + '&companyName=' + myCompanyName[0].companyName + '&estado=' + row.estado).subscribe(function (myTreeAssoc) {
                console.log('myAdsmyAds', myTreeAssoc);
                //this.rows = myTreeAssoc[0].associated;
                var data = myTreeAssoc[0].associated.map(function (prop, key) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prop, { treeStatus: 'collapsed', parentId: row.id, id: key });
                });
                _this.temp = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.temp, data);
            });
            row.treeStatus = 'expanded';
            this.cd.detectChanges();
        }
        else {
            row.treeStatus = 'collapsed';
            this.rows = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.rows);
            this.cd.detectChanges();
        }
    };
    DescendenciaListComponent.prototype.deleteFunction = function ($event) {
        $event.preventDefault();
        this.router.navigate(['/descendenciaFicha/' + this.activeRow._id]);
    };
    DescendenciaListComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    DescendenciaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-descendencia-list',
            template: __webpack_require__(/*! raw-loader!./descendencia-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/descendencia-list/descendencia-list.component.html"),
            styles: [__webpack_require__(/*! ./descendencia-list.component.css */ "./src/app/adm/views/descendencia-list/descendencia-list.component.css")]
        })
    ], DescendenciaListComponent);
    return DescendenciaListComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-profile/descendencia-profile.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.nav-pills {\r\n    margin-bottom: 50px;\r\n}\r\n\r\nul.nav-pills .active{\r\n    box-shadow: 0px 5px 15px 0px #ffffff4d;\r\n}\r\n\r\n#descendenciaTab {\r\n    padding-top: 16px;\r\n}\r\n\r\n.tab-pane {\r\n    background-color: #1e1e2f;\r\n}\r\n\r\nli.nav-item {\r\n    background-color: var(--gray-dark);\r\n    margin-right: 20px;\r\n    border-radius: 0.25rem;\r\n    -webkit-border-radius: 0.25rem;\r\n    -moz-border-radius: 0.25rem;\r\n    -ms-border-radius: 0.25rem;\r\n    -o-border-radius: 0.25rem;\r\n}\r\n\r\nspan {\r\n    color: white;\r\n    text-align: left;\r\n}\r\n\r\n.foto {\r\n    margin: 5px 0;\r\n}\r\n\r\n.ficha {\r\n    cursor: pointer;\r\n    border: 1px solid black;\r\n    border-left: 4px solid silver;\r\n    padding-right: 4px;\r\n}\r\n\r\n.ficha:hover {\r\n    border: 1px solid silver;\r\n    box-shadow: 0 0 10px silver;\r\n    transition-duration: 300ms;\r\n}\r\n\r\n#resumen label {\r\n    width: 200px;\r\n    margin: 5px 0;\r\n    font-size: 1.1em;\r\n}\r\n\r\n#resumen span {\r\n    margin: 5px 0;\r\n    font-size: 1.1em;\r\n}\r\n\r\n#resumen .row {\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3ZpZXdzL2Rlc2NlbmRlbmNpYS1wcm9maWxlL2Rlc2NlbmRlbmNpYS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9kZXNjZW5kZW5jaWEtcHJvZmlsZS9kZXNjZW5kZW5jaWEtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwubmF2LXBpbGxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbnVsLm5hdi1waWxscyAuYWN0aXZle1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDBweCAjZmZmZmZmNGQ7XHJcbn1cclxuXHJcbiNkZXNjZW5kZW5jaWFUYWIge1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuLnRhYi1wYW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMmY7XHJcbn1cclxuXHJcbmxpLm5hdi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAtby1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5mb3RvIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5maWNoYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgc2lsdmVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uZmljaGE6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggc2lsdmVyO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbn1cclxuXHJcbiNyZXN1bWVuIGxhYmVsIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4jcmVzdW1lbiBzcGFuIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4jcmVzdW1lbiAucm93IHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-profile/descendencia-profile.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DescendenciaProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescendenciaProfileComponent", function() { return DescendenciaProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_models_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/person */ "./src/app/models/person.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");






var DescendenciaProfileComponent = /** @class */ (function () {
    function DescendenciaProfileComponent(connexion, ruta, _router) {
        this.connexion = connexion;
        this.ruta = ruta;
        this._router = _router;
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalVars"].filesDomain;
        this.ListDepts = [];
        this.asociados = [];
    }
    DescendenciaProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connexion.get_data('location').subscribe(function (reslo) {
            _this.ListDepts = reslo;
        }, function (error) {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.person = new src_app_models_person__WEBPACK_IMPORTED_MODULE_4__["person"]();
        this.cargarDatos(this.ruta.snapshot.params['id']);
        console.log(this.ruta.snapshot.params['id']);
    };
    DescendenciaProfileComponent.prototype.cargarDatos = function (id) {
        var _this = this;
        var myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
        this.connexion.get_dataWithParamsOne('personAssociated', '?userID=' + id + '&companyName=' + localStorage.getItem('actual')).subscribe(function (regis) {
            console.log('regisaa', regis);
            _this.person = regis[0];
            _this.asociados = regis[0].associated;
        }, function (error) {
            var errorMessage = error;
            switch (errorMessage.status) {
                case 400:
                    console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
                    break;
                default:
                    console.log('Ocurrió un error al intentar registrar el usuario. \n Por favor verifique los datos e intente nuevamente.', errorMessage.status);
                    break;
            }
        });
    };
    DescendenciaProfileComponent.prototype.verAsociado = function (event) {
        this._router.navigate(['/descendenciaFicha/' + event]);
        this.cargarDatos(event);
    };
    DescendenciaProfileComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DescendenciaProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-descendencia-profile',
            template: __webpack_require__(/*! raw-loader!./descendencia-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/descendencia-profile/descendencia-profile.component.html"),
            styles: [__webpack_require__(/*! ./descendencia-profile.component.css */ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.css")]
        })
    ], DescendenciaProfileComponent);
    return DescendenciaProfileComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/ficha-pedido/ficha-pedido.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/adm/views/ficha-pedido/ficha-pedido.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ficha {\r\n    width: 250px;\r\n    margin-right: 10px;\r\n    background: rgb(108,117,125);\r\n    background: linear-gradient(180deg, rgba(108,117,125,1) 0%, rgba(50,50,93,1) 15%, rgba(108,117,125,1) 100%);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#6c757d\",endColorstr=\"#6c757d\",GradientType=1);\r\n    -webkit-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#6c757d\",endColorstr=\"#6c757d\",GradientType=1);\r\n}\r\n\r\n.ficha .card-footer {\r\n    border-top: 1px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3ZpZXdzL2ZpY2hhLXBlZGlkby9maWNoYS1wZWRpZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBRzVCLDJHQUEyRztJQUMzRywrR0FBK0c7SUFDL0csdUhBQXVIO0FBQzNIOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYWRtL3ZpZXdzL2ZpY2hhLXBlZGlkby9maWNoYS1wZWRpZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWNoYSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTA4LDExNywxMjUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDEwOCwxMTcsMTI1LDEpIDAlLCByZ2JhKDUwLDUwLDkzLDEpIDE1JSwgcmdiYSgxMDgsMTE3LDEyNSwxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxMDgsMTE3LDEyNSwxKSAwJSwgcmdiYSg1MCw1MCw5MywxKSAxNSUsIHJnYmEoMTA4LDExNywxMjUsMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDEwOCwxMTcsMTI1LDEpIDAlLCByZ2JhKDUwLDUwLDkzLDEpIDE1JSwgcmdiYSgxMDgsMTE3LDEyNSwxKSAxMDAlKTtcclxuICAgIGZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiM2Yzc1N2RcIixlbmRDb2xvcnN0cj1cIiM2Yzc1N2RcIixHcmFkaWVudFR5cGU9MSk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiM2Yzc1N2RcIixlbmRDb2xvcnN0cj1cIiM2Yzc1N2RcIixHcmFkaWVudFR5cGU9MSk7XHJcbn1cclxuXHJcbi5maWNoYSAuY2FyZC1mb290ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/adm/views/ficha-pedido/ficha-pedido.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/adm/views/ficha-pedido/ficha-pedido.component.ts ***!
  \******************************************************************/
/*! exports provided: FichaPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaPedidoComponent", function() { return FichaPedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");
/* harmony import */ var src_app_models_person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/person */ "./src/app/models/person.ts");







var FichaPedidoComponent = /** @class */ (function () {
    function FichaPedidoComponent(connexion, ruta, router, toastService) {
        this.connexion = connexion;
        this.ruta = ruta;
        this.router = router;
        this.toastService = toastService;
        this.titulo = '';
        this.pedidos = [];
        this.ListVehiculo = [];
        this.todasEmpresas = [];
        this.urlImage = '/assets/img/noPicture.png';
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalVars"].filesDomain;
        this.rolActual = '';
        this.btnAccion = '';
        //listSucursal: Location[] = [];
        this.todasSucursales = [];
        this.mostrar = true;
        this.empresaDelivery = false;
        this.muestra = true;
        this.entraMapa = false;
        this.persona = new src_app_models_person__WEBPACK_IMPORTED_MODULE_6__["person"]();
    }
    FichaPedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connexion.get_data('location').subscribe(function (reslo) {
            _this.todasSucursales = reslo.filter(function (LOC) { return (LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalConfigurations"].company) || (LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalConfigurations"].delivery); });
            //this.listSucursal = reslo.filter(LOC => LOC.typecon_id == localStorage.getItem('actual'));
            _this.ListVehiculo = reslo.filter(function (LOC) { return LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalConfigurations"].vehiculo; });
            _this.todasEmpresas = _this.todasSucursales; //reslo.filter(LOC => (LOC.context_id == globalConfigurations.company) || (LOC.context_id == globalConfigurations.delivery));
        }, function (error) {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.localCompany = JSON.parse(localStorage.getItem('userCompany'));
        this.rolActual = this.buscaRol();
        this.ruta.paramMap.subscribe(function (params) {
            _this.estadoActual = params.get('estado');
            if (((_this.rolActual == 'rep') || (_this.rolActual == 'cen')) && (_this.estadoActual == '1')) {
                /*this.connexion.get_dataId<person>('person', localStorage.getItem('code')).subscribe(
                  resp => {
                    console.log('resp', resp);
                    this.persona = resp[0];
                  }
                );*/
            }
            _this.cambiaTitulo(_this.estadoActual);
            setTimeout(function () {
                _this.cargaFichas(_this.estadoActual);
                _this.empresaDelivery = _this.verificaDelivery();
            }, 1000);
        });
    };
    FichaPedidoComponent.prototype.buscaRol = function () {
        var rol = '';
        switch (this.localCompany[0].typeAccount) {
            case src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["userPermissions"].adm:
                rol = 'adm';
                break;
            case src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["userPermissions"].dist:
                rol = 'dist';
                break;
            case src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["userPermissions"].rep:
                rol = 'rep';
                break;
            case src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["userPermissions"].sup:
                rol = 'sup';
                break;
            case src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["userPermissions"].cen:
                rol = 'cen';
                break;
            default:
                rol = '';
                break;
        }
        return rol;
    };
    FichaPedidoComponent.prototype.cambiaTitulo = function (estado) {
        if (this.rolActual != '') {
            switch (estado) {
                case '0':
                    this.titulo = 'Cancelados';
                    this.btnAccion = '';
                    this.mostrar = true;
                    break;
                case '1':
                    this.titulo = 'Pendientes';
                    if (this.rolActual == 'rep') {
                        this.btnAccion = 'Asignarme';
                    }
                    else {
                        this.btnAccion = 'Cancelar Pedido';
                    }
                    this.mostrar = true;
                    break;
                case '2':
                    this.titulo = 'Asignados';
                    if (this.rolActual == 'rep') {
                        this.btnAccion = 'Recogido';
                    }
                    else {
                        this.btnAccion = 'Cancelar Pedido';
                    }
                    this.mostrar = true;
                    break;
                case '3':
                    this.titulo = 'Recogidos';
                    if (this.rolActual == 'rep') {
                        this.btnAccion = 'Entregado';
                    }
                    else {
                        this.btnAccion = 'Cancelar Pedido';
                    }
                    this.mostrar = true;
                    break;
                case '4':
                    this.titulo = 'En Tránsito';
                    this.btnAccion = '';
                    this.mostrar = true;
                    break;
                case '5':
                    this.titulo = 'Entregados';
                    this.btnAccion = '';
                    this.mostrar = false;
                    break;
                default:
                    break;
            }
        }
        else {
            this.btnAccion = '';
            this.router.navigate(['/main']);
        }
    };
    FichaPedidoComponent.prototype.armaConsulta = function (estado) {
        var eleccion = '';
        if (this.localCompany) {
            if (src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["userPermissions"].adm == this.localCompany[0].typeAccount) {
                //eleccion = '&sucursalName=' + this.localCompany[0].sucursalName;
                if (this.empresaDelivery == false) {
                    eleccion = '&companyName=' + this.localCompany[0].companyName;
                }
            }
            if (src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["userPermissions"].rep == this.localCompany[0].typeAccount) {
                //eleccion = '&companyName=' + this.localCompany[0].companyName;
                if (estado != 1) {
                    eleccion += '&usuario.id=' + localStorage.code;
                }
            }
            if (src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["userPermissions"].sup == this.localCompany[0].typeAccount) {
                eleccion = '&companyName=' + this.localCompany[0].companyName;
                /*if (estado != 1) {
                  eleccion += '&usuario.id=' + localStorage.code;
                }*/
            }
        }
        return '?estadoActual=' + estado + eleccion;
    };
    FichaPedidoComponent.prototype.cargaFichas = function (estado) {
        var _this = this;
        var consulta = this.armaConsulta(estado);
        this.connexion.get_dataWithParamsNoAuth('pedido', consulta).subscribe(function (resp) {
            _this.pedidos = resp;
            _this.pedidos.forEach(function (element) {
                /*this.todasSucursales.forEach(sucursal => {
                  console.log(sucursal._id, element.sucursalName);
                  if (sucursal._id == element.sucursalName) {
                    element['Sucursal'] = sucursal.name;
                  }
                });*/
                var miniArray = [];
                element = _this.calculaTotal(element);
                switch (estado) {
                    case '1':
                        miniArray = _this.calculaHora(element, element.fechaHora, '');
                        element['restarPendiente'] = miniArray['restar'];
                        miniArray = _this.calculaHora(element, element.fechaHora, '');
                        element['totalTiempo'] = miniArray['restar'];
                        break;
                    case '2':
                        miniArray = _this.calculaHora(element, element.fechaHora, element.entrega.asignadoPedido);
                        element['restarPendiente'] = miniArray['restar'];
                        miniArray = _this.calculaHora(element, element.entrega.asignadoPedido, '');
                        element['restarAsignado'] = miniArray['restar'];
                        miniArray = _this.calculaHora(element, element.fechaHora, '');
                        element['totalTiempo'] = miniArray['restar'];
                        break;
                    case '3':
                        miniArray = _this.calculaHora(element, element.fechaHora, element.entrega.asignadoPedido);
                        element['restarPendiente'] = miniArray['restar'];
                        miniArray = _this.calculaHora(element, element.entrega.asignadoPedido, element.entrega.recogidoPedido);
                        element['restarAsignado'] = miniArray['restar'];
                        miniArray = _this.calculaHora(element, element.entrega.recogidoPedido, '');
                        element['restarRecogido'] = miniArray['restar'];
                        miniArray = _this.calculaHora(element, element.fechaHora, '');
                        element['totalTiempo'] = miniArray['restar'];
                        break;
                    case '0':
                        miniArray = _this.calculaHora(element, element.entrega.cancelaPedido, element.fechaHora);
                        element['restarCancelado'] = miniArray['restar'];
                        break;
                    case '5':
                        miniArray = _this.calculaHora(element, element.fechaHora, element.entrega.asignadoPedido);
                        element['restarPendiente'] = miniArray['restar'];
                        miniArray = _this.calculaHora(element, element.entrega.asignadoPedido, element.entrega.recogidoPedido);
                        element['restarAsignado'] = miniArray['restar'];
                        miniArray = _this.calculaHora(element, element.entrega.recogidoPedido, element.entrega.entregadoPedido);
                        element['restarRecogido'] = miniArray['restar'];
                        miniArray = _this.calculaHora(element, element.fechaHora, element.entrega.entregadoPedido);
                        element['totalTiempo'] = miniArray['restar'];
                        break;
                }
                for (var i = 0; i < _this.todasSucursales.length; i++) {
                    if (_this.todasSucursales[i]._id == element.sucursalName) {
                        element['sucursal'] = _this.todasSucursales[i].name;
                        element['geoData'] = _this.todasSucursales[i].geoData;
                    }
                }
                for (var i = 0; i < _this.todasEmpresas.length; i++) {
                    if (_this.todasEmpresas[i]._id == element.companyName) {
                        element['empresa'] = _this.todasEmpresas[i].name;
                    }
                }
            });
            console.log('this.pedidos', _this.pedidos);
        }, function (error) {
            console.log('Error: ', error);
        });
    };
    FichaPedidoComponent.prototype.calculaTotal = function (array) {
        var total = 0;
        array.productos.forEach(function (element) {
            total += element.cantidad * element.costo;
        });
        array['total'] = total;
        return array;
    };
    FichaPedidoComponent.prototype.calculaHora = function (array, fechaInicio, fechaFin) {
        var ahora;
        if (fechaFin == '') {
            ahora = new Date().getTime();
        }
        else {
            ahora = new Date(fechaFin).getTime();
        }
        console.log(fechaInicio, fechaFin);
        var tiempoTemp = (ahora - new Date(fechaInicio).getTime()) / (1000 * 60 * 60);
        var tiempoFinal = '';
        if (Math.trunc(tiempoTemp) > 0) {
            tiempoFinal = Math.trunc(tiempoTemp) + ' hrs ' + Math.trunc((-Math.trunc(tiempoTemp) + tiempoTemp) * 60) + ' min';
            array['color'] = 'red';
        }
        else {
            tiempoFinal = Math.trunc((-Math.trunc(tiempoTemp) + tiempoTemp) * 60) + ' min';
            if (Math.trunc((-Math.trunc(tiempoTemp) + tiempoTemp) * 60) < 3) {
                array['color'] = 'green';
            }
            else {
                if (Math.trunc((-Math.trunc(tiempoTemp) + tiempoTemp) * 60) < 7) {
                    array['color'] = 'yellow';
                }
                else {
                    array['color'] = 'red';
                }
            }
        }
        array['restar'] = tiempoFinal;
        return array;
    };
    FichaPedidoComponent.prototype.ampliar = function (item) {
        if (this.entraMapa) {
            this.muestra = false;
            this.entraMapa = false;
        }
        else {
            this.muestra = true;
        }
        this.elegido = item;
    };
    FichaPedidoComponent.prototype.mapa = function () {
        this.entraMapa = true;
        $('#ampliado').modal('hide');
    };
    FichaPedidoComponent.prototype.btnPedido = function (id) {
        var _this = this;
        this.pedidos.forEach(function (element) {
            if (element['_id'] == id) {
                _this.realizaCambio(element);
            }
        });
        $('#ampliado').modal('hide');
    };
    FichaPedidoComponent.prototype.realizaCambio = function (element) {
        var _this = this;
        var nuevoEstado = this.calculaEstado();
        element.estadoActual = nuevoEstado;
        if (nuevoEstado != 0) {
            element.usuario.id = localStorage.getItem('code');
            element.usuario.nombre = localStorage.getItem('userName');
            element.usuario.telefono = localStorage.getItem('userPhone');
            element.usuario.fotografia = localStorage.getItem('photo');
            //this.urlImage = element.usuario.fotografia;
            for (var i = 0; i < this.ListVehiculo.length; i++) {
                if (this.ListVehiculo[i]._id == JSON.parse(localStorage.getItem('vehiculo')).tipoVehiculo) { //this.persona.vehiculo.tipoVehiculo) {
                    element.usuario.tipoVehiculo = this.ListVehiculo[i].name;
                }
            }
            element.usuario.placaVehiculo = JSON.parse(localStorage.getItem('vehiculo')).placaVehiculo;
            element.usuario.detallesVehiculo = JSON.parse(localStorage.getItem('vehiculo')).detallesVehiculo;
        }
        switch (this.btnAccion) {
            case 'Asignarme':
                element.entrega.asignadoPedido = new Date();
                break;
            case 'Recogido':
                element.entrega.recogidoPedido = new Date();
                break;
            case 'Entregado':
                element.entrega.entregadoPedido = new Date();
                break;
            case 'Cancelar Pedido':
                element.entrega.cancelaPedido = new Date();
                break;
        }
        this.connexion.editObject('pedido', element).subscribe(function (resp) {
            _this.cargaFichas(_this.estadoActual);
        }, function (error) {
            console.log('Error: ' + error);
        });
        this.connexion.addObject('mailChangeStatus', element).subscribe(function (resp) {
            console.log(resp);
        });
    };
    FichaPedidoComponent.prototype.calculaEstado = function () {
        var nuevoEstado = this.estadoActual;
        if (this.rolActual == 'rep') {
            switch (this.estadoActual) {
                case '0':
                    nuevoEstado = 0;
                    break;
                case '1':
                    nuevoEstado = 2;
                    break;
                case '2':
                    nuevoEstado = 3;
                    break;
                case '3':
                    nuevoEstado = 5;
                    break;
                case '4':
                    nuevoEstado = 0;
                    break;
                default:
                    break;
            }
        }
        else {
            nuevoEstado = 0;
        }
        return nuevoEstado;
    };
    FichaPedidoComponent.prototype.verificaDelivery = function () {
        var compania = JSON.parse(localStorage.getItem('userCompany'))[0].companyName;
        var esDelivery = false;
        this.todasEmpresas.forEach(function (cias) {
            if (cias._id == compania) {
                if (cias.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalConfigurations"].delivery) {
                    esDelivery = true;
                }
            }
        });
        return esDelivery;
    };
    FichaPedidoComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
    ]; };
    FichaPedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ficha-pedido',
            template: __webpack_require__(/*! raw-loader!./ficha-pedido.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/ficha-pedido/ficha-pedido.component.html"),
            styles: [__webpack_require__(/*! ./ficha-pedido.component.css */ "./src/app/adm/views/ficha-pedido/ficha-pedido.component.css")]
        })
    ], FichaPedidoComponent);
    return FichaPedidoComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/invitation-list/invitation-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adm/views/invitation-list/invitation-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9pbnZpdGF0aW9uLWxpc3QvaW52aXRhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adm/views/invitation-list/invitation-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adm/views/invitation-list/invitation-list.component.ts ***!
  \************************************************************************/
/*! exports provided: InvitationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationListComponent", function() { return InvitationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_change_live_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/change-live.service */ "./src/app/services/change-live.service.ts");






var InvitationListComponent = /** @class */ (function () {
    function InvitationListComponent(cnx, router, toastService, inLive) {
        this.cnx = cnx;
        this.router = router;
        this.toastService = toastService;
        this.inLive = inLive;
        this.entries = 10;
        this.status = 1;
        this.isLoading = true;
        this.temp = [];
    }
    InvitationListComponent.prototype.ngOnInit = function () {
        //console.log(this.inLive.setEquipo());
        this.obtenerDatos(this.status);
    };
    InvitationListComponent.prototype.entriesChange = function ($event) {
        this.entries = $event.target.value;
    };
    InvitationListComponent.prototype.statusChange = function ($event) {
        this.status = $event.target.value;
        this.obtenerDatos(this.status);
    };
    InvitationListComponent.prototype.obtenerDatos = function (state) {
        var _this = this;
        this.isLoading = true;
        this.cnx.get_dataWithParams('invitation', '?estado=' + state + '&ciMain=' + localStorage.getItem('code').substr(1) + '&companyName=' + localStorage.getItem('actual')).subscribe(function (myAds) {
            _this.rows = myAds;
            setTimeout(function () {
                _this.isLoading = false;
            }, 1500);
            _this.temp = myAds.map(function (prop, key) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prop, { id: key });
            });
        });
        this.isLoading = false;
    };
    InvitationListComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value.toString().toLowerCase();
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key]) {
                    try {
                        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
                            return true;
                        }
                    }
                    catch (error) {
                        console.log(d[key], error);
                    }
                }
            }
            return false;
        });
    };
    InvitationListComponent.prototype.editFunction = function ($event) {
        $event.preventDefault();
        this.router.navigate(['/invitacion/' + this.activeRow._id]);
    };
    InvitationListComponent.prototype.deleteFunction = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.activeRow.estado = 0;
        var nuevaInvitacion;
        nuevaInvitacion = this.activeRow;
        this.cnx.editObject('invitationQuick', nuevaInvitacion).subscribe(function (resp) {
            console.log('RESP: ', resp);
            _this.obtenerDatos(_this.status);
        });
        //this.router.navigate(['/invitacion/' + this.activeRow._id]);
    };
    InvitationListComponent.prototype.refreshFunction = function (event) {
        event.preventDefault();
        this.obtenerDatos(this.status);
    };
    InvitationListComponent.prototype.exportFunction = function (event) {
        event.preventDefault();
        this.error('Espacio Insuficiente en el Disco', 'MLM Export');
    };
    InvitationListComponent.prototype.success = function (message, title) {
        this.toastService.success(message, title);
    };
    InvitationListComponent.prototype.error = function (message, title) {
        this.toastService.error(message, title);
    };
    InvitationListComponent.prototype.onActivate = function (event) {
        this.activeRow = event.row;
    };
    InvitationListComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: src_app_services_change_live_service__WEBPACK_IMPORTED_MODULE_5__["ChangeLiveService"] }
    ]; };
    InvitationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invitation-list',
            template: __webpack_require__(/*! raw-loader!./invitation-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/invitation-list/invitation-list.component.html"),
            styles: [__webpack_require__(/*! ./invitation-list.component.css */ "./src/app/adm/views/invitation-list/invitation-list.component.css")]
        })
    ], InvitationListComponent);
    return InvitationListComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/invitation/invitation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adm/views/invitation/invitation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".procesa {\r\n    opacity: .5;\r\n}\r\n\r\n.noProcesa {\r\n    opacity: 1;\r\n}\r\n\r\n.procesando {\r\n    background-color: var(--pink);\r\n    width: 30em;\r\n    height: 100px;\r\n    position: absolute;\r\n    border-radius: 20px;\r\n    align-content: center;\r\n    margin: 0 auto;\r\n    box-shadow: 5px 5px 8px -5px white;\r\n    -moz-box-shadow: 5px 5px 8px -5px white;\r\n    -webkit-box-shadow: 5px 5px 8px -5px white;\r\n    top: 50%;\r\n    left: calc(50% - 15em);\r\n}\r\n\r\n.procesando > h3{\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    margin: 0;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.visible {\r\n    display: block;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3ZpZXdzL2ludml0YXRpb24vaW52aXRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtDQUFrQztJQUNsQyx1Q0FBdUM7SUFDdkMsMENBQTBDO0lBQzFDLFFBQVE7SUFDUixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9pbnZpdGF0aW9uL2ludml0YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9jZXNhIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG4ubm9Qcm9jZXNhIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5wcm9jZXNhbmRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xyXG4gICAgd2lkdGg6IDMwZW07XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA4cHggLTVweCB3aGl0ZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCA4cHggLTVweCB3aGl0ZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCA4cHggLTVweCB3aGl0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxNWVtKTtcclxufVxyXG5cclxuLnByb2Nlc2FuZG8gPiBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLnZpc2libGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbnZpc2libGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/adm/views/invitation/invitation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adm/views/invitation/invitation.component.ts ***!
  \**************************************************************/
/*! exports provided: InvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationComponent", function() { return InvitationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_invitation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/invitation */ "./src/app/models/invitation.ts");
/* harmony import */ var src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_change_live_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/change-live.service */ "./src/app/services/change-live.service.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");











var InvitationComponent = /** @class */ (function () {
    function InvitationComponent(connexion, _router, route, toastService, globalEquipo, inLive) {
        this.connexion = connexion;
        this._router = _router;
        this.route = route;
        this.toastService = toastService;
        this.globalEquipo = globalEquipo;
        this.inLive = inLive;
        this.esVisible = 'invisible';
        this.procesando = 'noProcesa';
        this.usuarioValido = true;
        this.correct = false;
        this.ListCompany = [];
        //ListDelivery: Location[] = [];
        this.ListRol = [];
        this.ListVehiculo = [];
        this.ListLOC = [];
        this.ListLOCMain = [];
        this.listDepa = [];
        this.depasCI = [];
        this.listCiudad = [];
        this.listZona = [];
        this.listSucursal = [];
        this.isSaved = false;
        this.companiaActual = '';
        this.verVehiculo = false;
        this.invitation = new src_app_models_invitation__WEBPACK_IMPORTED_MODULE_4__["invitation"]();
        this.job = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["job"]();
        this.contact = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["contact"]();
        this.vehiculo = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["vehiculo"]();
        this.profile = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["profile"]();
        this.address = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["address"]();
        //this.field = new field();
        this.invitation.job = this.job;
        this.isSaved = false;
    }
    InvitationComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        if (localStorage.getItem('code').substring(0, 1) == '0') {
            alert('Su cuenta no está activada.\nPor favor active su cuenta antes de invitar a una persona.');
            this._router.navigate(['/profile']);
        }
        this.connexion.get_data('location').subscribe(function (reslo) {
            _this.ListLOC = reslo;
            _this.ListLOCMain = reslo.filter(function (LOC) { return LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__["globalConfigurations"].pais; });
            _this.depasCI = _this.ListLOC.filter(function (LOC) { return LOC.owner == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__["globalConfigurations"].ciudad; });
            _this.ListCompany = reslo.filter(function (LOC) { return (LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__["globalConfigurations"].company) || (LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__["globalConfigurations"].delivery); });
            _this.ListRol = reslo.filter(function (LOC) { return LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__["globalConfigurations"].rol; });
            _this.ListVehiculo = reslo.filter(function (LOC) { return LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__["globalConfigurations"].vehiculo; });
            _this.listSucursal = reslo.filter(function (LOC) { return LOC.owner == localStorage.getItem('actual'); });
        }, function (error) {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        /*this.connexion.get_dataWithParams<TypeContext>('typecontext', '?estado=1').subscribe(reslo => {
          this.ListCompany = reslo.filter(LOC => (LOC.context_id == globalConfigurations.company) || (LOC.context_id == globalConfigurations.delivery));
          this.ListRol = reslo.filter(LOC => LOC.context_id == globalConfigurations.rol);
          this.ListVehiculo = reslo.filter(LOC => LOC.context_id == globalConfigurations.vehiculo);
        }, error => {
          console.log('Hubo un problema al cargar datos. ' + error);
        });*/
        this.invitation.contact = this.contact;
        this.invitation.vehiculo = this.vehiculo;
        this.invitation.profile = this.profile;
        this.contact.address = this.address;
        this.address.country = '';
        this.address.city = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
        this.address.state = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
        this.address.zone = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
        //this.invitation.job.push(this.job);
        if (this.route.snapshot.params['_id']) {
            setTimeout(function () {
                _this.connexion.get_dataId('invitationQuick', _this.route.snapshot.params['_id']).subscribe(function (resp) {
                    _this.invitation = resp;
                    _this.editAddress(resp.contact.address);
                    _this.editCompany(resp.job);
                });
            }, 500);
        }
        setTimeout(function () {
            _this.updateEmp(localStorage.getItem('actual'));
            _this.verificaYCorrigeDelivery();
        }, 2000);
    };
    InvitationComponent.prototype.editAddress = function (direccion) {
        this.listDepa = this.ListLOC.filter(function (LOC) { return LOC.owner == direccion.country; });
        this.listCiudad = this.ListLOC.filter(function (LOC) { return LOC.owner == direccion.state.id; });
        this.listZona = this.ListLOC.filter(function (LOC) { return LOC.owner == direccion.city.id; });
    };
    InvitationComponent.prototype.editCompany = function (trabajo) {
        this.ListCompany = this.ListCompany.filter(function (LOC) { return LOC._id == trabajo.companyName; });
        this.ListRol = this.ListRol.filter(function (LOC) { return LOC._id == trabajo.typeAccount; });
    };
    InvitationComponent.prototype.verificarUsuario = function () {
        var _this = this;
        this.esVisible = 'visible';
        this.procesando = 'procesa';
        if (this.invitation.profile.ci) {
            this.connexion.get_dataWithParamsOne('personInvitation', '?ci=' + this.invitation.profile.ci + '&equipo=' + localStorage.getItem('actual')).subscribe(function (myUser) {
                if (myUser['id'] == 0) {
                    _this.usuarioValido = false;
                    _this.error(myUser['message'], 'Invitación a MLM');
                }
                else {
                    _this.usuarioValido = true;
                    _this.success(myUser['message'], 'Invitación a MLM');
                }
                _this.procesando = 'noProcesa';
                _this.esVisible = 'invisible';
            });
        }
        else {
            this.error('CI vacío', 'MLM Invitación');
        }
    };
    InvitationComponent.prototype.error = function (message, title) {
        this.toastService.error(message, title);
    };
    InvitationComponent.prototype.success = function (message, title) {
        this.toastService.success(message, title);
    };
    InvitationComponent.prototype.onRegister = function () {
        var _this = this;
        /*if (this.invitado) {
          for (let i = 0; i < this.invitado.associated.length; i++) {
            const element = this.invitado.associated[i];
            if ((element.companyName == this.job.companyName) && (element.typeAccount == this.job.typeAccount)) {
              this.error('Esta persona ya cuenta con una invitación.', 'MLM Invitación');
              return 0;
            }
          }
        }*/
        this.job.companyName = localStorage.getItem('actual');
        this.esVisible = 'visible';
        this.procesando = 'procesa';
        this.isSaved = true;
        this.agregarDireccion();
        this.invitation.estado = 1;
        this.invitation.job = { ciMain: localStorage.getItem('code').substr(1), companyName: this.job.companyName, sucursalName: this.job.sucursalName, typeAccount: this.job.typeAccount };
        var fechaHora = new Date();
        this.invitation.date = fechaHora;
        var pass = this.generarCodigo();
        this.invitation.codeInvitation = pass;
        this.invitation.password = pass;
        this.invitation.profile.photo = '/assets/img/noPicture.png';
        this.connexion.addObject('invitation', this.invitation).subscribe(function (regis) {
            _this.procesando = 'noProcesa';
            _this.esVisible = 'invisible';
            _this.correct = true;
            alert('La invitación fue realizada de manera correcta');
            _this._router.navigate(['/']);
        }, function (error) {
            _this.isSaved = false;
            var errorMessage = error;
            _this.correct = false;
            switch (errorMessage.status) {
                case 400:
                    _this.usuarioValido = false;
                    alert('El usuario ya fue invitado. \n Por favor intente nuevamente.');
                    break;
                default:
                    _this.usuarioValido = true;
                    alert('Ocurrió un error al intentar invitar el usuario. \n Por favor verifique los datos e intente nuevamente.');
                    break;
            }
        });
    };
    InvitationComponent.prototype.generarCodigo = function () {
        return 'ABC123';
    };
    InvitationComponent.prototype.agregarDireccion = function () {
        var local, paisMini, depaMini, cityMini, zonaMini;
        var objDepartamento;
        var objCiudad;
        var objZona;
        try {
            local = $('#local')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(local)) {
                var separador = local.split(": ", 2);
                paisMini = separador[1];
                depaMini = $('#depaMini')[0].value;
            }
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(depaMini)) {
                var separador = depaMini.split(": ", 2);
                objDepartamento = {
                    id: separador[1],
                    valor: $('#depaMini')[0].options[separador[0]].text
                };
            }
            cityMini = $('#cityMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(cityMini)) {
                var separador = cityMini.split(": ", 2);
                objCiudad = {
                    id: separador[1],
                    valor: $('#cityMini')[0].options[separador[0]].text
                };
            }
            ;
            zonaMini = $('#zonaMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(zonaMini)) {
                var separador = zonaMini.split(": ", 2);
                objZona = {
                    id: separador[1],
                    valor: $('#zonaMini')[0].options[separador[0]].text
                };
            }
            var objAddress = {
                country: paisMini,
                state: objDepartamento,
                city: objCiudad,
                zone: objZona,
                geoData: this.invitation.contact.address.geoData,
                especificLocation: this.invitation.contact.address.especificLocation
            };
            this.invitation.contact.address = objAddress;
        }
        catch (error) {
            console.log('Error', error);
        }
    };
    InvitationComponent.prototype.updateSelectedValue = function (index) {
        this.listDepa = this.ListLOC.filter(function (LOC) { return LOC.owner == index; });
    };
    InvitationComponent.prototype.updateSelectDepartamento = function (index) {
        this.listCiudad = this.ListLOC.filter(function (LOC) { return LOC.owner == index; });
    };
    InvitationComponent.prototype.updateSelectCiudad = function (index) {
        this.listZona = this.ListLOC.filter(function (LOC) { return LOC.owner == index; });
    };
    InvitationComponent.prototype.updateSelectSucursal = function (index) {
        //this.listSucursal = this.ListLOC.filter(LOC => LOC.owner == index);
    };
    InvitationComponent.prototype.updateSelectEquipo = function (index) {
        //this.ListCompany = this.ListCompany.filter(LOC => LOC._id == index);
    };
    InvitationComponent.prototype.updateSelectRol = function (index) {
        if (src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__["userPermissions"].rep == index) {
            this.verVehiculo = true;
        }
        else {
            this.verVehiculo = false;
        }
        //this.ListRol = this.ListRol.filter(LOC => LOC._id == index);
    };
    InvitationComponent.prototype.updateSelectVehiculo = function (index) {
    };
    InvitationComponent.prototype.updateEmp = function (id) {
        var _this = this;
        this.ListCompany.forEach(function (comp) {
            if (id == comp._id) {
                localStorage.setItem('actual', id);
                _this.companiaActual = comp.name;
            }
        });
    };
    InvitationComponent.prototype.recibeDeHijo = function (algo) {
        console.log('ALGO PASO AQUI', algo);
    };
    InvitationComponent.prototype.verificaYCorrigeDelivery = function () {
        var compania = JSON.parse(localStorage.getItem('userCompany'))[0].companyName;
        var esDelivery = false;
        this.ListCompany.forEach(function (cias) {
            if (cias._id == compania) {
                if (cias.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__["globalConfigurations"].delivery) {
                    esDelivery = true;
                }
            }
        });
        if (esDelivery) {
            this.eliminaDeLista(['dist', 'sup', 'adm']);
        }
        else {
            this.eliminaDeLista(['rep', 'cen']);
        }
    };
    InvitationComponent.prototype.eliminaDeLista = function (arrRol) {
        var _this = this;
        arrRol.forEach(function (rol) {
            var encontro = -1;
            for (var i = 0; i < _this.ListRol.length; i++) {
                if (_this.ListRol[i]._id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_10__["userPermissions"][rol]) {
                    encontro = i;
                }
            }
            if (encontro > -1) {
                _this.ListRol.splice(encontro, 1);
            }
        });
    };
    InvitationComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
        { type: src_app_services_change_live_service__WEBPACK_IMPORTED_MODULE_9__["ChangeLiveService"] }
    ]; };
    InvitationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invitation',
            template: __webpack_require__(/*! raw-loader!./invitation.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/invitation/invitation.component.html"),
            styles: [__webpack_require__(/*! ./invitation.component.css */ "./src/app/adm/views/invitation/invitation.component.css")]
        })
    ], InvitationComponent);
    return InvitationComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/lista-agendados/lista-agendados.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adm/views/lista-agendados/lista-agendados.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9saXN0YS1hZ2VuZGFkb3MvbGlzdGEtYWdlbmRhZG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adm/views/lista-agendados/lista-agendados.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adm/views/lista-agendados/lista-agendados.component.ts ***!
  \************************************************************************/
/*! exports provided: ListaAgendadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAgendadosComponent", function() { return ListaAgendadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");





var ListaAgendadosComponent = /** @class */ (function () {
    function ListaAgendadosComponent(cnx, ruta, router, toastService, cd) {
        this.cnx = cnx;
        this.ruta = ruta;
        this.router = router;
        this.toastService = toastService;
        this.cd = cd;
        this.entries = 10;
        this.status = 1;
        this.isLoading = true;
        this.temp = [];
    }
    ListaAgendadosComponent.prototype.ngOnInit = function () {
        this.localCompany = JSON.parse(localStorage.getItem('userCompany'));
        this.sucursalName = this.localCompany[0].sucursalName;
        this.obtenerDatos(1, this.sucursalName);
    };
    ListaAgendadosComponent.prototype.entriesChange = function ($event) {
        this.entries = $event.target.value;
    };
    ListaAgendadosComponent.prototype.statusChange = function ($event) {
        this.status = $event.target.value;
        this.obtenerDatos(this.status, this.myID);
    };
    ListaAgendadosComponent.prototype.obtenerDatos = function (state, id) {
        var _this = this;
        this.isLoading = true;
        this.cnx.get_dataWithParams('pedido', '?estadoActual=' + state + '&sucursalName=' + this.sucursalName).subscribe(function (myProds) {
            console.log(myProds);
            _this.rows = myProds;
            setTimeout(function () {
                _this.isLoading = false;
            }, 1500);
            _this.temp = myProds.map(function (prop, key) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prop, { parentId: null, id: key });
            });
        });
        this.isLoading = false;
    };
    ListaAgendadosComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value.toString().toLowerCase();
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key]) {
                    try {
                        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
                            return true;
                        }
                    }
                    catch (error) {
                        console.log(d[key], error);
                    }
                }
            }
            return false;
        });
    };
    ListaAgendadosComponent.prototype.refreshFunction = function (event) {
        event.preventDefault();
        this.obtenerDatos(this.status, this.myID);
    };
    ListaAgendadosComponent.prototype.exportFunction = function (event) {
        event.preventDefault();
        this.error('Espacio Insuficiente en el Disco', 'MLM Export');
    };
    ListaAgendadosComponent.prototype.success = function (message, title) {
        this.toastService.success(message, title);
    };
    ListaAgendadosComponent.prototype.error = function (message, title) {
        this.toastService.error(message, title);
    };
    ListaAgendadosComponent.prototype.onActivate = function (event) {
        this.activeRow = event.row;
    };
    ListaAgendadosComponent.prototype.onTreeAction = function (event) {
        /*const index = event.rowIndex;
        const row = event.row;
        if (row.treeStatus === 'collapsed') {
          row.treeStatus = 'loading';
    
          let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
          this.cnx.get_dataWithParams<person>('personAssociated', '?userID=' + row._id + '&companyName=' + myCompanyName[0].companyName + '&estado=' + row.estado).subscribe(myTreeAssoc => {
            console.log('myAdsmyAds', myTreeAssoc);
    
            //this.rows = myTreeAssoc[0].associated;
            let data = myTreeAssoc[0].associated.map((prop, key) => {
              return {
                ...prop,
                treeStatus: 'collapsed',
                parentId: row.id,
                id: key
              };
            });
            this.temp = [...this.temp, ...data]
          });
          row.treeStatus = 'expanded';
          this.cd.detectChanges();
        } else {
          row.treeStatus = 'collapsed';
          this.rows = [...this.rows];
          this.cd.detectChanges();
        }*/
    };
    ListaAgendadosComponent.prototype.deleteFunction = function ($event) {
        $event.preventDefault();
        //this.router.navigate(['/descendenciaFicha/' + this.activeRow._id]);
    };
    ListaAgendadosComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ListaAgendadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-agendados',
            template: __webpack_require__(/*! raw-loader!./lista-agendados.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/lista-agendados/lista-agendados.component.html"),
            styles: [__webpack_require__(/*! ./lista-agendados.component.css */ "./src/app/adm/views/lista-agendados/lista-agendados.component.css")]
        })
    ], ListaAgendadosComponent);
    return ListaAgendadosComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/main/main.component.css":
/*!***************************************************!*\
  !*** ./src/app/adm/views/main/main.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adm/views/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adm/views/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/person */ "./src/app/models/person.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");





var MainComponent = /** @class */ (function () {
    function MainComponent(connexion) {
        this.connexion = connexion;
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalVars"].filesDomain;
        this.constraints = {
            video: true,
            audio: true
        };
        this.video = document.querySelector('video');
    }
    MainComponent.prototype.ngOnInit = function () {
        this.person = new src_app_models_person__WEBPACK_IMPORTED_MODULE_2__["person"]();
        this.cargarDatos(localStorage.getItem('code').substring(1));
    };
    //capturar() {
    /*this.connexion.postData<any>('whatsAppConnect', '').subscribe( (resp) => {
      console.log(resp);
    });*/
    /*let mensaje = {'phone': '59172696012', 'body': 'https://goo.gl/maps/NnjNMgz9evAzJtiw9'};
    this.connexion.addObject<any>('whatsAppSend', mensaje).subscribe( (resp) => {
      console.log(resp);
    });*/
    /*function hasGetUserMedia() {
      return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
    }

    if (hasGetUserMedia()) {
      alert('TIENRE');
      navigator.mediaDevices.getUserMedia(this.constraints).
        then((stream) => { this.video.srcObject = stream });
    } else {
      alert('getUserMedia() is not supported by your browser');
    }*/
    //}
    MainComponent.prototype.cargarDatos = function (id) {
        var _this = this;
        this.connexion.get_dataId('person', id).subscribe(function (regis) {
            localStorage.setItem('photo', regis.profile.photo.toString());
            _this.person = regis;
        }, function (error) {
            var errorMessage = error;
            switch (errorMessage.status) {
                case 400:
                    console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
                    break;
                default:
                    console.log('Ocurrió un error al intentar registrar el usuario. \n Por favor verifique los datos e intente nuevamente.', errorMessage.status);
                    break;
            }
        });
    };
    MainComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/adm/views/main/main.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/product-list/product-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/adm/views/product-list/product-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adm/views/product-list/product-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/adm/views/product-list/product-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");





var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(cnx, ruta, router, toastService, cd) {
        this.cnx = cnx;
        this.ruta = ruta;
        this.router = router;
        this.toastService = toastService;
        this.cd = cd;
        this.entries = 10;
        this.status = 1;
        this.isLoading = true;
        this.temp = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.myID = localStorage.getItem('code').substr(1);
        this.obtenerDatos(1, this.myID);
    };
    ProductListComponent.prototype.entriesChange = function ($event) {
        this.entries = $event.target.value;
    };
    ProductListComponent.prototype.statusChange = function ($event) {
        this.status = $event.target.value;
        this.obtenerDatos(this.status, this.myID);
    };
    ProductListComponent.prototype.obtenerDatos = function (state, id) {
        var _this = this;
        var localCompany = JSON.parse(localStorage.getItem('userCompany'));
        if (localCompany) {
            this.isLoading = true;
            this.cnx.get_dataWithParams('products', '?companyName=' + localCompany[0].companyName + '&estado=' + state).subscribe(function (myProds) {
                console.log(myProds);
                _this.rows = myProds;
                setTimeout(function () {
                    _this.isLoading = false;
                }, 1500);
                _this.temp = myProds.map(function (prop, key) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prop, { parentId: null, id: key });
                });
            });
            this.isLoading = false;
        }
    };
    ProductListComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value.toString().toLowerCase();
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key]) {
                    try {
                        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
                            return true;
                        }
                    }
                    catch (error) {
                        console.log(d[key], error);
                    }
                }
            }
            return false;
        });
    };
    ProductListComponent.prototype.refreshFunction = function (event) {
        event.preventDefault();
        this.obtenerDatos(this.status, this.myID);
    };
    ProductListComponent.prototype.exportFunction = function (event) {
        event.preventDefault();
        this.error('Espacio Insuficiente en el Disco', 'MLM Export');
    };
    ProductListComponent.prototype.success = function (message, title) {
        this.toastService.success(message, title);
    };
    ProductListComponent.prototype.error = function (message, title) {
        this.toastService.error(message, title);
    };
    ProductListComponent.prototype.onActivate = function (event) {
        this.activeRow = event.row;
    };
    ProductListComponent.prototype.onTreeAction = function (event) {
        /*const index = event.rowIndex;
        const row = event.row;
        if (row.treeStatus === 'collapsed') {
          row.treeStatus = 'loading';
    
          let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
          this.cnx.get_dataWithParams<person>('personAssociated', '?userID=' + row._id + '&companyName=' + myCompanyName[0].companyName + '&estado=' + row.estado).subscribe(myTreeAssoc => {
            console.log('myAdsmyAds', myTreeAssoc);
    
            //this.rows = myTreeAssoc[0].associated;
            let data = myTreeAssoc[0].associated.map((prop, key) => {
              return {
                ...prop,
                treeStatus: 'collapsed',
                parentId: row.id,
                id: key
              };
            });
            this.temp = [...this.temp, ...data]
          });
          row.treeStatus = 'expanded';
          this.cd.detectChanges();
        } else {
          row.treeStatus = 'collapsed';
          this.rows = [...this.rows];
          this.cd.detectChanges();
        }*/
    };
    ProductListComponent.prototype.deleteFunction = function ($event) {
        $event.preventDefault();
        this.router.navigate(['/editaProducto/' + this.activeRow._id]);
        //this.router.navigate(['/descendenciaFicha/' + this.activeRow._id]);
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/adm/views/product-list/product-list.component.css")]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/products-load/products-load.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/adm/views/products-load/products-load.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9wcm9kdWN0cy1sb2FkL3Byb2R1Y3RzLWxvYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adm/views/products-load/products-load.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/adm/views/products-load/products-load.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductsLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsLoadComponent", function() { return ProductsLoadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");







var ProductsLoadComponent = /** @class */ (function () {
    function ProductsLoadComponent(connexion, _router, route, toastService) {
        this.connexion = connexion;
        this._router = _router;
        this.route = route;
        this.toastService = toastService;
        this.path_server = 'userFiles/imagesCompany';
        this.mostrar = true;
        this.title_upload = '';
        this.urlImage = '/assets/img/noProduct.png';
        this.opcion = 'Agregar';
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalVars"].filesDomain;
    }
    ProductsLoadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productoId = this.route.snapshot.params['producto'];
        this.producto = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_3__["Products"]();
        if (this.productoId) {
            this.connexion.get_dataId('products', this.productoId).subscribe(function (prod) {
                _this.producto = prod;
                //console.log(prod);
            }, function (error) {
                console.log('Ocurrió un error al intentar recuperar los datos.', error);
                _this.error('Ocurrió un error al intentar recuperar los datos.', 'Productos');
                _this._router.navigate(['/listaProductos']);
            });
        }
        else {
            this.urlImage = '/assets/img/noProduct.png';
            this.producto.imagen = this.urlImage;
            this.producto.existencia = 0;
            this.producto.estado = 1;
        }
    };
    ProductsLoadComponent.prototype.recibeDeHijo = function (event) {
        this.producto.imagen = event.upload.url;
        this.urlImage = event.upload.url;
    };
    ProductsLoadComponent.prototype.guardar = function () {
        var _this = this;
        if (this.productoId) {
            console.log('products', this.producto);
            this.connexion.editObject('products', this.producto).subscribe(function (resp) {
                //console.log('Datos editados con éxito.',resp);
                _this.success('Datos editados con éxito.', 'Productos');
                _this._router.navigate(['/listaProductos']);
            }, function (error) {
                //console.log('Ocurrió un error al intentar guardar los datos.', error);
                _this.error('Ocurrió un error al intentar guardar los datos.', 'Productos');
                //this._router.navigate(['/listaProductos']);
            });
        }
        else {
            var localCompany = JSON.parse(localStorage.getItem('userCompany'));
            if (localCompany) {
                this.producto.companyName = localCompany[0].companyName;
                this.producto.sucursalName = localCompany[0].sucursalName;
                this.connexion.addObject('products', this.producto).subscribe(function (regis) {
                    //console.log('Datos guardados con éxito.');
                    _this.success('Datos guardados con éxito.', 'Productos');
                    _this.success('Continúa creando nuevos productos', 'Productos');
                    _this.ngOnInit();
                }, function (error) {
                    _this.error('Error al guardar los datos.', 'Productos');
                    //console.log('Error al guardar los datos.'); 
                });
            }
            else {
                this._router.navigate(['/sign/login']);
            }
        }
    };
    ProductsLoadComponent.prototype.success = function (message, title) {
        this.toastService.success(message, title);
    };
    ProductsLoadComponent.prototype.error = function (message, title) {
        this.toastService.error(message, title);
    };
    ProductsLoadComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_4__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
    ]; };
    ProductsLoadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-load',
            template: __webpack_require__(/*! raw-loader!./products-load.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/products-load/products-load.component.html"),
            styles: [__webpack_require__(/*! ./products-load.component.css */ "./src/app/adm/views/products-load/products-load.component.css")]
        })
    ], ProductsLoadComponent);
    return ProductsLoadComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/adm/views/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adm/views/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adm/views/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(connexion, _router) {
        this.connexion = connexion;
        this._router = _router;
        this.ListLOC = [];
        this.ListLOCMain = [];
        this.listDepa = [];
        this.listCiudad = [];
        this.listZona = [];
        this.depasCI = [];
        this.path_server = 'userFiles/profile';
        this.mostrar = true;
        this.title_upload = '';
        this.urlImage = 'assets/img/noPicture.png';
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalVars"].filesDomain;
        this.selectedFile = [];
        this.scaledImage = [];
        this.thumbImage = [];
        this.datosImagen = [];
        this.porcentajeUpload = '0';
        this.nombreFile = '';
        this.countFiles = 0;
        this.reader = new FileReader();
        this.muestraUP = 'muestra';
        this.muestraMIDDLE = 'noMuestra';
        this.muestraDOWN = 'noMuestra';
        this.job = new _models_schema__WEBPACK_IMPORTED_MODULE_2__["job"]();
        this.contact = new _models_schema__WEBPACK_IMPORTED_MODULE_2__["contact"]();
        this.profile = new _models_schema__WEBPACK_IMPORTED_MODULE_2__["profile"]();
        this.address = new _models_schema__WEBPACK_IMPORTED_MODULE_2__["address"]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.connexion.get_data('location').subscribe(function (reslo) {
                _this.ListLOC = reslo;
                _this.ListLOCMain = reslo.filter(function (LOC) { return LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalConfigurations"].pais; });
                _this.depasCI = _this.ListLOC.filter(function (LOC) { return LOC.owner == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalConfigurations"].ciudad; });
            }, function (error) {
                console.log('Hubo un problema al cargar datos. ' + error);
            });
        }, 500);
        var codigo = localStorage.getItem('code').substr(1);
        if (codigo) {
            setTimeout(function () {
                _this.connexion.get_dataId('person', codigo).subscribe(function (myUser) {
                    _this.perfil = myUser;
                    _this.urlImage = myUser.profile.photo.toString();
                    _this.listDepa = _this.ListLOC.filter(function (LOC) { return LOC.owner == myUser.contact.address.country; });
                    _this.listCiudad = _this.ListLOC.filter(function (LOC) { return LOC.owner == myUser.contact.address.state.id; });
                    _this.listZona = _this.ListLOC.filter(function (LOC) { return LOC.owner == myUser.contact.address.city.id; });
                });
            }, 3000);
        }
    };
    ProfileComponent.prototype.recibeDeHijo = function (event) {
        this.perfil.profile.photo = event.upload.url;
        this.urlImage = event.upload.url;
    };
    ProfileComponent.prototype.onUpdate = function () {
        var _this = this;
        this.connexion.editObject('person', this.perfil).subscribe(function (regis) {
            localStorage.setItem('code', regis['estado'].toString() + regis['_id'].toString());
            alert('Actualización de Usuario Satisfactorio.');
            _this._router.navigate(['/']);
        }, function (error) {
            var errorMessage = error;
            switch (errorMessage.status) {
                case 400:
                    console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
                    break;
                default:
                    console.log('Ocurrió un error al intentar actualizar el usuario. \n Por favor verifique los datos e intente nuevamente.');
                    break;
            }
        });
    };
    ProfileComponent.prototype.agregarDireccion = function () {
        var local, paisMini, depaMini, cityMini, zonaMini;
        var objDepartamento;
        var objCiudad;
        var objZona;
        try {
            local = $('#local')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(local)) {
                var separador = local.split(": ", 2);
                paisMini = separador[1];
                depaMini = $('#depaMini')[0].value;
            }
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(depaMini)) {
                var separador = depaMini.split(": ", 2);
                objDepartamento = {
                    id: separador[1],
                    valor: $('#depaMini')[0].options[separador[0]].text
                };
            }
            cityMini = $('#cityMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(cityMini)) {
                var separador = cityMini.split(": ", 2);
                objCiudad = {
                    id: separador[1],
                    valor: $('#cityMini')[0].options[separador[0]].text
                };
            }
            ;
            zonaMini = $('#zonaMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(zonaMini)) {
                var separador = zonaMini.split(": ", 2);
                objZona = {
                    id: separador[1],
                    valor: $('#zonaMini')[0].options[separador[0]].text
                };
            }
            var objAddress = {
                country: paisMini,
                state: objDepartamento,
                city: objCiudad,
                zone: objZona,
                geoData: this.perfil.contact.address.geoData,
                especificLocation: this.perfil.contact.address.especificLocation
            };
            this.perfil.contact.address = objAddress;
        }
        catch (error) {
            console.log('Error', error);
        }
    };
    ProfileComponent.prototype.editSeller = function (direccion) {
        this.listDepa = this.ListLOC.filter(function (LOC) { return LOC.owner == direccion.country; });
        this.listCiudad = this.ListLOC.filter(function (LOC) { return LOC.owner == direccion.state.id; });
        this.listZona = this.ListLOC.filter(function (LOC) { return LOC.owner == direccion.city.id; });
    };
    // Method in component class
    ProfileComponent.prototype.updateSelectedValue = function (index) {
        this.listDepa = this.ListLOC.filter(function (LOC) { return LOC.owner == index; });
    };
    ProfileComponent.prototype.updateSelectDepartamento = function (index) {
        this.listCiudad = this.ListLOC.filter(function (LOC) { return LOC.owner == index; });
    };
    ProfileComponent.prototype.updateSelectCiudad = function (index) {
        this.listZona = this.ListLOC.filter(function (LOC) { return LOC.owner == index; });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/adm/views/profile/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/adm/views/staff-list/staff-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adm/views/staff-list/staff-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9zdGFmZi1saXN0L3N0YWZmLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adm/views/staff-list/staff-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adm/views/staff-list/staff-list.component.ts ***!
  \**************************************************************/
/*! exports provided: StaffListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffListComponent", function() { return StaffListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/job */ "./src/app/models/job.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_models_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/schema */ "./src/app/models/schema.ts");





var StaffListComponent = /** @class */ (function () {
    function StaffListComponent(cox) {
        this.cox = cox;
    }
    StaffListComponent.prototype.ngOnInit = function () {
        this.jjob = new src_app_models_job__WEBPACK_IMPORTED_MODULE_2__["jjob"]();
        this.job = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_4__["job"]();
        this.job.ciMain = 'A';
        this.job.companyName = 'B';
        this.job.typeAccount = 'C';
    };
    StaffListComponent.prototype.guardar = function () {
        console.log('ESTO ES JOB', this.job);
        this.jjob.job = this.job;
        this.cox.addObject('job', this.jjob).subscribe(function (res) {
            console.log(res);
        });
    };
    StaffListComponent.ctorParameters = function () { return [
        { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] }
    ]; };
    StaffListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-list',
            template: __webpack_require__(/*! raw-loader!./staff-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/adm/views/staff-list/staff-list.component.html"),
            styles: [__webpack_require__(/*! ./staff-list.component.css */ "./src/app/adm/views/staff-list/staff-list.component.css")]
        })
    ], StaffListComponent);
    return StaffListComponent;
}());



/***/ }),

/***/ "./src/app/models/alert.ts":
/*!*********************************!*\
  !*** ./src/app/models/alert.ts ***!
  \*********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    Alert.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/models/job.ts":
/*!*******************************!*\
  !*** ./src/app/models/job.ts ***!
  \*******************************/
/*! exports provided: jjob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jjob", function() { return jjob; });
var jjob = /** @class */ (function () {
    function jjob() {
    }
    return jjob;
}());



/***/ }),

/***/ "./src/app/models/person.ts":
/*!**********************************!*\
  !*** ./src/app/models/person.ts ***!
  \**********************************/
/*! exports provided: person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "person", function() { return person; });
var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());



/***/ }),

/***/ "./src/app/modules/modules.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/modules.module.ts ***!
  \*******************************************/
/*! exports provided: ModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesModule", function() { return ModulesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/modules/toast/toast.component.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/modules/upload/upload.component.ts");






var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]],
            exports: [
                _toast_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"]
            ]
        })
    ], ModulesModule);
    return ModulesModule;
}());



/***/ }),

/***/ "./src/app/modules/toast/toast.component.css":
/*!***************************************************!*\
  !*** ./src/app/modules/toast/toast.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toastMain {\r\n    z-index: 2050!important;\r\n}\r\n\r\n.toast {\r\n    width: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2FzdE1haW4ge1xyXG4gICAgei1pbmRleDogMjA1MCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b2FzdCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/toast/toast.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/toast/toast.component.ts ***!
  \**************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");




var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastService) {
        this.toastService = toastService;
        this.alerts = [];
    }
    ToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.toastService.onAlert(this.id)
            .subscribe(function (alert) {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
            _this.message = alert.message;
            _this.title = alert.title;
            _this.tipoAlert = _this.cssClass(alert);
            $('.toast').toast('show');
        });
    };
    ToastComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to avoid memory leaks
        this.subscription.unsubscribe();
    };
    ToastComponent.prototype.removeAlert = function (alert) {
        // remove specified alert from array
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    ToastComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success:
                return 'alert alert-success';
            case src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error:
                return 'alert alert-danger';
            case src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info:
                return 'alert alert-info';
            case src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    };
    ToastComponent.ctorParameters = function () { return [
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ToastComponent.prototype, "id", void 0);
    ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toast',
            template: __webpack_require__(/*! raw-loader!./toast.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/toast/toast.component.html"),
            styles: [__webpack_require__(/*! ./toast.component.css */ "./src/app/modules/toast/toast.component.css")]
        })
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/modules/upload/upload.component.css":
/*!*****************************************************!*\
  !*** ./src/app/modules/upload/upload.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#divMainFile {\r\n    display: block;\r\n    overflow: hidden;\r\n    background-color: lightgrey;\r\n}\r\n\r\n.muestra {\r\n    display: block;\r\n}\r\n\r\n.noMuestra {\r\n    display: none;\r\n}\r\n\r\n.cardCompleto:hover>div {\r\n    background-color: rgba(0,0,0,.4);\r\n}\r\n\r\n.cardCompleto:hover * {\r\n    background-color: var(--color-primary-soft);\r\n    opacity: 0.9;\r\n    filter:  alpha(opacity=90);\r\n    -webkit-filter:  alpha(opacity=90);\r\n}\r\n\r\n.card-text {\r\n    opacity: 0.5;\r\n    filter:  alpha(opacity=50);\r\n    -webkit-filter:  alpha(opacity=50);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXZNYWluRmlsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5tdWVzdHJhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubm9NdWVzdHJhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkQ29tcGxldG86aG92ZXI+ZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xyXG59XHJcblxyXG4uY2FyZENvbXBsZXRvOmhvdmVyICoge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1zb2Z0KTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGZpbHRlcjogIGFscGhhKG9wYWNpdHk9OTApO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6ICBhbHBoYShvcGFjaXR5PTkwKTtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBmaWx0ZXI6ICBhbHBoYShvcGFjaXR5PTUwKTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiAgYWxwaGEob3BhY2l0eT01MCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/upload/upload.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/upload/upload.component.ts ***!
  \****************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");





var UploadComponent = /** @class */ (function () {
    function UploadComponent(http) {
        this.http = http;
        this.selectedFile = [];
        this.scaledImage = [];
        this.thumbImage = [];
        this.datosImagen = [];
        this.porcentajeUpload = '0';
        this.nombreFile = '';
        this.countFiles = 0;
        this.reader = new FileReader();
        this.muestraUP = 'muestra';
        this.muestraMIDDLE = 'noMuestra';
        this.muestraDOWN = 'noMuestra';
        this.desdeElHijo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.upload = false;
    };
    UploadComponent.prototype.sizeCanva = function (canva, widthImg, heightImg, widthScale, heightScale) {
        if (widthImg > heightImg) {
            var scaleFactorWidth = widthScale / widthImg;
            canva.width = widthScale;
            canva.height = heightImg * scaleFactorWidth;
        }
        else {
            var scaleFactorHeight = heightScale / heightImg;
            canva.width = widthImg * scaleFactorHeight;
            canva.height = heightScale;
        }
        return canva;
    };
    UploadComponent.prototype.newtoBlob = function () {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (callback, type, quality) {
                var dataURL = this.toDataURL(type, quality).split(',')[1];
                setTimeout(function () {
                    var binStr = atob(dataURL);
                    var len = binStr.length;
                    var arr = new Uint8Array(len);
                    for (var i = 0; i < len; i++) {
                        arr[i] = binStr.charCodeAt(i);
                    }
                    callback(new Blob([arr], { type: type || 'image/jpeg' }));
                });
            }
        });
    };
    UploadComponent.prototype.onFileSelected = function (event) {
        console.log('this.path_serve', this.path_server);
        var myFiles = event.target.files;
        if (this.upload == true) {
            this.upload = false;
            this.onCancel();
        }
        for (var i = 0, f; f = myFiles[i]; i++) {
            this.selectedFile.push(f);
            this.reader = new FileReader();
            var self = this;
            this.reader.onload = (function (theFile) {
                return function (e) {
                    var miImg = new Image();
                    miImg.src = e.target.result;
                    (miImg.onload = function () {
                        var canvaScale = document.createElement('canvas');
                        var canvaThumb = document.createElement('canvas');
                        var crc2dScale = canvaScale.getContext('2d');
                        var crc2dThumb = canvaThumb.getContext('2d');
                        canvaScale = self.sizeCanva(canvaScale, miImg.width, miImg.height, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].widthScale, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].heightScale);
                        canvaThumb = self.sizeCanva(canvaThumb, miImg.width, miImg.height, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].thumbWidth, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].thumbHeight);
                        if (miImg.width > miImg.height) {
                            crc2dScale.drawImage(miImg, 0, 0, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].widthScale, canvaScale.height);
                            crc2dThumb.drawImage(miImg, 0, 0, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].thumbWidth, canvaThumb.height);
                        }
                        else {
                            crc2dScale.drawImage(miImg, 0, 0, canvaScale.width, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].heightScale);
                            crc2dThumb.drawImage(miImg, 0, 0, canvaThumb.width, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].thumbHeight);
                        }
                        var nuevaSRC = crc2dThumb.canvas.toDataURL('image/jpeg', 1);
                        if (!HTMLCanvasElement.prototype.toBlob) {
                            self.newtoBlob();
                        }
                        crc2dScale.canvas.toBlob(function (blob) {
                            self.scaledImage.push(blob);
                        }, 'image/jpeg', 1);
                        crc2dThumb.canvas.toBlob(function (blob) {
                            self.thumbImage.push(blob);
                        }, 'image/jpeg', 1);
                        self.datosImagen.push({ id: 'img' + theFile.name, src: nuevaSRC, 'dataName': theFile.name });
                    });
                };
            })(f);
            this.reader.readAsDataURL(f);
        }
        ;
        if (myFiles.length > 0) {
            this.muestraUP = 'muestra';
            this.muestraMIDDLE = 'muestra';
            this.muestraDOWN = 'muestra';
        }
    };
    UploadComponent.prototype.onCancel = function () {
        for (var i = 0; i < this.selectedFile.length; i++) {
            this.selectedFile.pop();
            this.datosImagen.pop();
        }
        this.datosImagen = [];
        this.selectedFile = [];
        this.reader.abort();
        this.reader.EMPTY;
        this.reader = new FileReader();
        $("#fileUpload").remove();
        this.muestraMIDDLE = 'noMuestra';
        this.muestraDOWN = 'noMuestra';
    };
    UploadComponent.prototype.deleteFunction = function ($event, name) {
        $event.preventDefault();
        if (confirm('¿ Está seguro que desea eliminar la imagen seleccionada. ?')) {
            var encuentra = -10;
            for (var i = 0; i < this.selectedFile.length; i++) {
                if (this.selectedFile[i].name == name) {
                    encuentra = i;
                    if (this.selectedFile.length == 1) {
                        this.onCancel();
                        return;
                    }
                }
            }
            if (encuentra >= 0) {
                this.scaledImage.splice(encuentra, 1);
                this.thumbImage.splice(encuentra, 1);
                this.datosImagen.splice(encuentra, 1);
                this.selectedFile.splice(encuentra, 1);
            }
        }
    };
    UploadComponent.prototype.onUpload = function () {
        var _this = this;
        if (!this.selectedFile) {
            console.log('Archivo Eliminado');
            return;
        }
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
        var dt = new Date();
        var _loop_1 = function (index) {
            var fdScale = new FormData();
            var nuevoNombre = this_1.changeName(this_1.selectedFile[index].name);
            try {
                fdScale.append('file_name', nuevoNombre);
                fdScale.append('file_path', this_1.path_server);
                fdScale.append('file', this_1.scaledImage[index], 'Scale' + dt.getUTCMinutes().toString() + dt.getUTCSeconds().toString() + dt.getUTCMilliseconds().toString() + nuevoNombre);
                this_1.http.post(src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalVars"].domain + '/api/v1/image/', fdScale, {
                    reportProgress: true,
                    observe: 'events',
                    headers: head
                }).subscribe(function (event) {
                    if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                        _this.porcentajeUpload = Math.round(event.loaded / event.total * 100) + "%";
                        document.getElementById("pbFile" + _this.selectedFile[index].name).style.width = _this.porcentajeUpload;
                        document.getElementById("pbFile" + _this.selectedFile[index].name).innerHTML = _this.porcentajeUpload;
                    }
                });
            }
            catch (error) {
                console.log('Error: ' + error);
            }
        };
        var this_1 = this;
        for (var index = 0; index < this.selectedFile.length; index++) {
            _loop_1(index);
        }
        for (var index = 0; index < this.selectedFile.length; index++) {
            var fdThumb = new FormData();
            var nuevoNombre = this.changeName(this.selectedFile[index].name);
            try {
                fdThumb.append('file_name', nuevoNombre);
                fdThumb.append('file_path', this.path_server + '/thumbnail');
                fdThumb.append('file', this.thumbImage[index], 'Thumb' + dt.getUTCMinutes().toString() + dt.getUTCSeconds().toString() + dt.getUTCMilliseconds().toString() + nuevoNombre);
                this.http.post(src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalVars"].domain + '/api/v1/image/', fdThumb, {
                    observe: 'events',
                    headers: head
                }).subscribe(function (event) {
                    if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                        _this.desdeElHijo.emit({ upload: event.body });
                        _this.muestraMIDDLE = 'noMuestra';
                        _this.muestraDOWN = 'noMuestra';
                    }
                });
            }
            catch (error) {
                console.log('Error: ' + error);
            }
        }
        this.upload = true;
    };
    UploadComponent.prototype.escapeRegExp = function (fileName) {
        return fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
    UploadComponent.prototype.changeName = function (nombre) {
        var replaceable = ['+', '-', '*', '`', '´', '[', ']', ' ', '{', '}', '(', ')'];
        for (var i = 0; i < replaceable.length; i++) {
            var rep = new RegExp(this.escapeRegExp(replaceable[i]), 'g');
            //nombre = nombre.replace(replaceable[i], '');
            nombre = nombre.replace(rep, '');
        }
        return nombre;
    };
    UploadComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('path')
    ], UploadComponent.prototype, "path_server", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mostrar')
    ], UploadComponent.prototype, "mostrar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title')
    ], UploadComponent.prototype, "title_upload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('name')
    ], UploadComponent.prototype, "file_name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('')
    ], UploadComponent.prototype, "desdeElHijo", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/upload/upload.component.html"),
            providers: [src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"]],
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/modules/upload/upload.component.css")]
        })
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/pipes/expedido.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/expedido.pipe.ts ***!
  \****************************************/
/*! exports provided: ExpedidoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedidoPipe", function() { return ExpedidoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExpedidoPipe = /** @class */ (function () {
    function ExpedidoPipe() {
    }
    ExpedidoPipe.prototype.transform = function (value, args) {
        var resp;
        args.forEach(function (depa) {
            if (depa._id == value) {
                resp = depa.acronym;
            }
        });
        return resp;
    };
    ExpedidoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'expedido'
        })
    ], ExpedidoPipe);
    return ExpedidoPipe;
}());



/***/ }),

/***/ "./src/app/pipes/nombre.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/nombre.pipe.ts ***!
  \**************************************/
/*! exports provided: NombrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NombrePipe", function() { return NombrePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NombrePipe = /** @class */ (function () {
    function NombrePipe() {
    }
    NombrePipe.prototype.transform = function (value, args) {
        var resp;
        args.forEach(function (depa) {
            if (depa._id == value) {
                resp = depa.name;
            }
        });
        return resp;
    };
    NombrePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'nombre'
        })
    ], NombrePipe);
    return NombrePipe;
}());



/***/ }),

/***/ "./src/app/services/change-live.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/change-live.service.ts ***!
  \*************************************************/
/*! exports provided: ChangeLiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLiveService", function() { return ChangeLiveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeLiveService = /** @class */ (function () {
    function ChangeLiveService() {
        this.mySomeThing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChangeLiveService.prototype.setEquipo = function (equipoActual) {
        localStorage.setItem('actual', equipoActual);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChangeLiveService.prototype, "mySomeThing", void 0);
    ChangeLiveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ChangeLiveService);
    return ChangeLiveService;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.domain = "http://localhost:3000";
        this.equipo = null;
    }
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ToastService = /** @class */ (function () {
    function ToastService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    // enable subscribing to alerts observable
    ToastService.prototype.onAlert = function (alertId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (x) { return x && x.alertId === alertId; }));
    };
    // convenience methods
    ToastService.prototype.success = function (message, title, alertId) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ message: message, title: title, type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, alertId: alertId }));
    };
    ToastService.prototype.error = function (message, title, alertId) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ message: message, title: title, type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, alertId: alertId }));
    };
    ToastService.prototype.info = function (message, title, alertId) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ message: message, title: title, type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, alertId: alertId }));
    };
    ToastService.prototype.warn = function (message, title, alertId) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ message: message, title: title, type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, alertId: alertId }));
    };
    // main alert method    
    ToastService.prototype.alert = function (alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    };
    // clear alerts
    ToastService.prototype.clear = function (alertId) {
        this.subject.next(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ alertId: alertId }));
    };
    ToastService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ToastService);
    return ToastService;
}());



/***/ })

}]);
//# sourceMappingURL=adm-adm-module-es5.js.map