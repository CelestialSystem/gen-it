import { __decorate, __extends, __param } from "tslib";
//import EWCSegmentedbutton from '../dist/ext-segmentedbutton.component.js';
//inputs: (new EWCSegmentedbutton()).properties,
//import EWCSegmentedbutton from '@sencha/ext-web-components-classic/dist/ext-segmentedbutton.component.js';
import { EWCSegmentedbutton } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
var ExtSegmentedbuttonComponent = /** @class */ (function (_super) {
    __extends(ExtSegmentedbuttonComponent, _super);
    function ExtSegmentedbuttonComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowDepress', 'allowFocusingDisabledChildren', 'allowMultiple', 'allowToggle', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'border', 'bubbleEvents', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'defaultUI', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'forceSelection', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'value', 'vertical', 'viewModel', 'weight', 'width', 'xtype',], (new EWCSegmentedbutton()).events, ['ready', 'created', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'childmove', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'staterestore', 'statesave', 'toggle',], vc) || this;
        _this.xtype = 'segmentedbutton';
        return _this;
    }
    ExtSegmentedbuttonComponent_1 = ExtSegmentedbuttonComponent;
    ExtSegmentedbuttonComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSegmentedbuttonComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSegmentedbuttonComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSegmentedbuttonComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSegmentedbuttonComponent_1;
    ExtSegmentedbuttonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtSegmentedbuttonComponent = ExtSegmentedbuttonComponent_1 = __decorate([
        Component({
            selector: 'ExtSegmentedbutton',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowDepress', 'allowFocusingDisabledChildren', 'allowMultiple', 'allowToggle', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'border', 'bubbleEvents', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'defaultUI', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'forceSelection', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'value', 'vertical', 'viewModel', 'weight', 'width', 'xtype',],
            outputs: ['ready', 'created', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'childmove', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'staterestore', 'statesave', 'toggle',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSegmentedbuttonComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtSegmentedbuttonComponent);
    return ExtSegmentedbuttonComponent;
}(EngBase));
export { ExtSegmentedbuttonComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCSegmentedbutton()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0U2VnbWVudGVkYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dFNlZ21lbnRlZGJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQTRFO0FBQzVFLGdEQUFnRDtBQUNoRCw0R0FBNEc7QUFDNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTL0M7SUFBaUQsK0NBQU87SUFDcEQscUNBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFIeEIsWUFLSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxTQUFTLEVBQUMscUJBQXFCLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQywrQkFBK0IsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLFFBQVEs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Li9kaXN0L2V4dC1zZWdtZW50ZWRidXR0b24uY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ1NlZ21lbnRlZGJ1dHRvbigpKS5wcm9wZXJ0aWVzLFxuLy9pbXBvcnQgRVdDU2VnbWVudGVkYnV0dG9uIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLWNsYXNzaWMvZGlzdC9leHQtc2VnbWVudGVkYnV0dG9uLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBFV0NTZWdtZW50ZWRidXR0b24gfSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2NvbW1vbi9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0U2VnbWVudGVkYnV0dG9uJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aW9ucycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVDb3VudGVyJywnYWN0aXZlSXRlbScsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93RGVwcmVzcycsJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJywnYWxsb3dNdWx0aXBsZScsJ2FsbG93VG9nZ2xlJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmNob3JTaXplJywnYW5pbWF0ZVNoYWRvdycsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRGVzdHJveScsJ2F1dG9FbCcsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VDbHMnLCdiaW5kJywnYm9yZGVyJywnYnViYmxlRXZlbnRzJywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGVmYXVsdFVJJywnZGV0YWNoT25SZW1vdmUnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkQ2xzJywnZG9jaycsJ2RyYWdnYWJsZScsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNhYmxlQ29udGFpbmVyJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2ZvcmNlU2VsZWN0aW9uJywnZm9ybUJpbmQnLCdmcmFtZScsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaHRtbCcsJ2lkJywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaXRlbUlkJywnaXRlbXMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3R5bGUnLCdzdXNwZW5kTGF5b3V0JywndGFiR3VhcmQnLCd0YWJJbmRleCcsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2YWx1ZScsJ3ZlcnRpY2FsJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2lkdGgnLCd4dHlwZScsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnY3JlYXRlZCcsJ2FjdGl2YXRlJywnYWRkJywnYWRkZWQnLCdhZnRlcmxheW91dCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWFkZCcsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlbW92ZScsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjaGFuZ2UnLCdjaGlsZG1vdmUnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2Rpc2FibGUnLCdlbmFibGUnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ21vdmUnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsJ3RvZ2dsZScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0U2VnbWVudGVkYnV0dG9uQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0U2VnbWVudGVkYnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGlvbnMnLCdhY3RpdmVDaGlsZFRhYkluZGV4JywnYWN0aXZlQ291bnRlcicsJ2FjdGl2ZUl0ZW0nLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbGxvd0RlcHJlc3MnLCdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsJ2FsbG93TXVsdGlwbGUnLCdhbGxvd1RvZ2dsZScsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5jaG9yU2l6ZScsJ2FuaW1hdGVTaGFkb3cnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0Rlc3Ryb3knLCdhdXRvRWwnLCdhdXRvUmVuZGVyJywndW5kZWZpbmVkJywnYXV0b1Nob3cnLCdiYXNlQ2xzJywnYmluZCcsJ2JvcmRlcicsJ2J1YmJsZUV2ZW50cycsJ2NoaWxkRWxzJywnY2xzJywnY29sdW1uV2lkdGgnLCdjb21wb25lbnRDbHMnLCdjb21wb25lbnRMYXlvdXQnLCdjb25zdHJhaW4nLCdjb25zdHJhaW50SW5zZXRzJywnY29uc3RyYWluVG8nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRBbGlnbicsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VHlwZScsJ2RlZmF1bHRVSScsJ2RldGFjaE9uUmVtb3ZlJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2RvY2snLCdkcmFnZ2FibGUnLCdmaXhlZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JjZVNlbGVjdGlvbicsJ2Zvcm1CaW5kJywnZnJhbWUnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2h0bWwnLCdpZCcsJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2l0ZW1JZCcsJ2l0ZW1zJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xheW91dCcsJ2xpcXVpZExheW91dCcsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCduYW1lYWJsZScsJ25hbWVIb2xkZXInLCdvdmVyQ2xzJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywncGFkZGluZycsJ3BsdWdpbnMnLCdwdWJsaXNoZXMnLCdyZWZlcmVuY2UnLCdyZWZlcmVuY2VIb2xkZXInLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2Nyb2xsYWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0eWxlJywnc3VzcGVuZExheW91dCcsJ3RhYkd1YXJkJywndGFiSW5kZXgnLCd0b0Zyb250T25TaG93JywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmFsdWUnLCd2ZXJ0aWNhbCcsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dpZHRoJywneHR5cGUnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ1NlZ21lbnRlZGJ1dHRvbigpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnY3JlYXRlZCcsJ2FjdGl2YXRlJywnYWRkJywnYWRkZWQnLCdhZnRlcmxheW91dCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWFkZCcsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlbW92ZScsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjaGFuZ2UnLCdjaGlsZG1vdmUnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2Rpc2FibGUnLCdlbmFibGUnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ21vdmUnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsJ3RvZ2dsZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdzZWdtZW50ZWRidXR0b24nXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ1NlZ21lbnRlZGJ1dHRvbigpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19