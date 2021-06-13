var ExtTimefieldComponent_1;
import { __decorate, __param } from "tslib";
//import EWCTimefield from '../dist/ext-timefield.component.js';
//inputs: (new EWCTimefield()).properties,
//import EWCTimefield from '@sencha/ext-web-components-classic/dist/ext-timefield.component.js';
import { EWCTimefield } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
let ExtTimefieldComponent = ExtTimefieldComponent_1 = class ExtTimefieldComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowOnlyWhitespace', 'allQuery', 'altFormats', 'alwaysOnTop', 'anchor', 'animateShadow', 'anyMatch', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoLoadOnValue', 'autoRender', 'undefined', 'autoSelect', 'autoSelectLast', 'autoSelectMatches', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'caseSensitive', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'clearFilterOnBlur', 'cls', 'undefined', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListConfig', 'defaultListenerScope', 'undefined', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'displayField', 'displayTpl', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enableRegEx', 'enforceMaxLength', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'forceResetCaret', 'forceSelection', 'format', 'formatText', 'formBind', 'formItemCls', 'frame', 'grow', 'growMax', 'growMin', 'growToLongestValue', 'height', 'hidden', 'hiddenDataCls', 'hiddenName', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'increment', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listConfig', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'matchFieldWidth', 'maxHeight', 'maxLength', 'maxLengthText', 'maxText', 'maxValue', 'maxWidth', 'minChars', 'minHeight', 'minLength', 'minLengthText', 'minText', 'minValue', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'undefined', 'name', 'nameable', 'openCls', 'overCls', 'undefined', 'undefined', 'padding', 'pageSize', 'pickerAlign', 'pickerMaxHeight', 'pickerOffset', 'undefined', 'plugins', 'preventMark', 'publishes', 'queryCaching', 'queryDelay', 'queryMode', 'queryParam', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selection', 'selectOnFocus', 'selectOnTab', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'snapToIncrement', 'stateEvents', 'stateful', 'stateId', 'store', 'stripCharsRe', 'style', 'submitFormat', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'transform', 'transformInPlace', 'triggerAction', 'triggerCls', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'typeAhead', 'typeAheadDelay', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valueField', 'valueNotFoundText', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype',], (new EWCTimefield()).events, ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'autosize', 'beforeactivate', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforequery', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'collapse', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'expand', 'focus', 'focusenter', 'focusleave', 'hide', 'keydown', 'keypress', 'keyup', 'move', 'paste', 'removed', 'render', 'resize', 'select', 'show', 'specialkey', 'staterestore', 'statesave', 'validitychange', 'writeablechange',], vc);
        this.xtype = 'timefield';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtTimefieldComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtTimefieldComponent = ExtTimefieldComponent_1 = __decorate([
    Component({
        selector: 'ExtTimefield',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowOnlyWhitespace', 'allQuery', 'altFormats', 'alwaysOnTop', 'anchor', 'animateShadow', 'anyMatch', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoLoadOnValue', 'autoRender', 'undefined', 'autoSelect', 'autoSelectLast', 'autoSelectMatches', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'caseSensitive', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'clearFilterOnBlur', 'cls', 'undefined', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListConfig', 'defaultListenerScope', 'undefined', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'displayField', 'displayTpl', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enableRegEx', 'enforceMaxLength', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'forceResetCaret', 'forceSelection', 'format', 'formatText', 'formBind', 'formItemCls', 'frame', 'grow', 'growMax', 'growMin', 'growToLongestValue', 'height', 'hidden', 'hiddenDataCls', 'hiddenName', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'increment', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listConfig', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'matchFieldWidth', 'maxHeight', 'maxLength', 'maxLengthText', 'maxText', 'maxValue', 'maxWidth', 'minChars', 'minHeight', 'minLength', 'minLengthText', 'minText', 'minValue', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'undefined', 'name', 'nameable', 'openCls', 'overCls', 'undefined', 'undefined', 'padding', 'pageSize', 'pickerAlign', 'pickerMaxHeight', 'pickerOffset', 'undefined', 'plugins', 'preventMark', 'publishes', 'queryCaching', 'queryDelay', 'queryMode', 'queryParam', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selection', 'selectOnFocus', 'selectOnTab', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'snapToIncrement', 'stateEvents', 'stateful', 'stateId', 'store', 'stripCharsRe', 'style', 'submitFormat', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'transform', 'transformInPlace', 'triggerAction', 'triggerCls', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'typeAhead', 'typeAheadDelay', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valueField', 'valueNotFoundText', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype',],
        outputs: ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'autosize', 'beforeactivate', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforequery', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'collapse', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'expand', 'focus', 'focusenter', 'focusleave', 'hide', 'keydown', 'keypress', 'keyup', 'move', 'paste', 'removed', 'render', 'resize', 'select', 'show', 'specialkey', 'staterestore', 'statesave', 'validitychange', 'writeablechange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtTimefieldComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtTimefieldComponent);
export { ExtTimefieldComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCTimefield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0VGltZWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dFRpbWVmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUFnRTtBQUNoRSwwQ0FBMEM7QUFDMUMsZ0dBQWdHO0FBQ2hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVMvQyxJQUFhLHFCQUFxQiw2QkFBbEMsTUFBYSxxQkFBc0IsU0FBUSxPQUFPO0lBQzlDLFlBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFFcEIsS0FBSyxDQUNELElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLG1CQUFtQixFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMscUJBQXFCLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxtQkFBbUIsRUFBQyxpQkFBaUIsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsb0JBQW9CLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsY0FBYyxFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLG1CQUFtQixFQUFDLHNCQUFzQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLGtCQUFrQixFQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLG9CQUFvQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxvQkFBb0IsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsb0JBQW9CLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxrQkFBa0IsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLHNCQUFzQixFQUFDLFlBQVksRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxFQUNwMUcsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUMzQixDQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLGVBQWUsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLG9CQUFvQixFQUFDLGlCQUFpQixFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBRSxFQUMxa0IsRUFBRSxDQUNMLENBQUE7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQTtJQUM1QixDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sZUFBZTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sV0FBVyxDQUFDLE9BQU87UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0NBQ0osQ0FBQTs7WUE5QmEsVUFBVTtZQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7WUFDekIsZ0JBQWdCOztBQUpmLHFCQUFxQjtJQVBqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLG1CQUFtQixFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMscUJBQXFCLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxtQkFBbUIsRUFBQyxpQkFBaUIsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsb0JBQW9CLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsY0FBYyxFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLG1CQUFtQixFQUFDLHNCQUFzQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLGtCQUFrQixFQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLG9CQUFvQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxvQkFBb0IsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsb0JBQW9CLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxrQkFBa0IsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLHNCQUFzQixFQUFDLFlBQVksRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRTtRQUM1MUcsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsZ0JBQWdCLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsb0JBQW9CLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFFO1FBQ25sQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBcUIsQ0FBQyxFQUFDLENBQUM7UUFDckYsUUFBUSxFQUFFLDJCQUEyQjtLQUN4QyxDQUFDO0lBSU8sV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO0dBSDFCLHFCQUFxQixDQWdDakM7U0FoQ1kscUJBQXFCO0FBbUNsQyw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpRkFBaUY7QUFDakYsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0oseUNBQXlDO0FBRXpDLCtDQUErQztBQUMvQyx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ1RpbWVmaWVsZCBmcm9tICcuLi9kaXN0L2V4dC10aW1lZmllbGQuY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ1RpbWVmaWVsZCgpKS5wcm9wZXJ0aWVzLFxuLy9pbXBvcnQgRVdDVGltZWZpZWxkIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLWNsYXNzaWMvZGlzdC9leHQtdGltZWZpZWxkLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBFV0NUaW1lZmllbGQgfSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2NvbW1vbi9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0VGltZWZpZWxkJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ291bnRlcicsJ2FjdGl2ZUVycm9yJywnYWN0aXZlRXJyb3JzVHBsJywnYWZ0ZXJCb2R5RWwnLCdhZnRlckxhYmVsVGV4dFRwbCcsJ2FmdGVyTGFiZWxUcGwnLCdhZnRlclN1YlRwbCcsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93QmxhbmsnLCdhbGxvd09ubHlXaGl0ZXNwYWNlJywnYWxsUXVlcnknLCdhbHRGb3JtYXRzJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmltYXRlU2hhZG93JywnYW55TWF0Y2gnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFFcnJvclRleHQnLCdhcmlhSGVscCcsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0VsJywnYXV0b0ZpdEVycm9ycycsJ2F1dG9IaWRlSW5wdXRNYXNrJywnYXV0b0xvYWRPblZhbHVlJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TZWxlY3QnLCdhdXRvU2VsZWN0TGFzdCcsJ2F1dG9TZWxlY3RNYXRjaGVzJywnYXV0b1Nob3cnLCdiYXNlQm9keUNscycsJ2Jhc2VDbHMnLCdiZWZvcmVCb2R5RWwnLCdiZWZvcmVMYWJlbFRleHRUcGwnLCdiZWZvcmVMYWJlbFRwbCcsJ2JlZm9yZVN1YlRwbCcsJ2JpbmQnLCdibGFua1RleHQnLCdib3JkZXInLCdjYXNlU2Vuc2l0aXZlJywnY2hlY2tDaGFuZ2VCdWZmZXInLCdjaGVja0NoYW5nZUV2ZW50cycsJ2NoaWxkRWxzJywnY2xlYXJGaWx0ZXJPbkJsdXInLCdjbHMnLCd1bmRlZmluZWQnLCdjb2x1bW5XaWR0aCcsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdExpc3RDb25maWcnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ3VuZGVmaW5lZCcsJ2RpcnR5Q2xzJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc2FibGVLZXlGaWx0ZXInLCdkaXNwbGF5RmllbGQnLCdkaXNwbGF5VHBsJywnZG9jaycsJ2RyYWdnYWJsZScsJ2VkaXRhYmxlJywnZW1wdHlDbHMnLCdlbXB0eVRleHQnLCdlbmFibGVLZXlFdmVudHMnLCdlbmFibGVSZWdFeCcsJ2VuZm9yY2VNYXhMZW5ndGgnLCdlcnJvck1zZ0NscycsJ2ZpZWxkQm9keUNscycsJ2ZpZWxkQ2xzJywnZmllbGRMYWJlbCcsJ2ZpZWxkU3R5bGUnLCdmaWVsZFN1YlRwbCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2ZvcmNlUmVzZXRDYXJldCcsJ2ZvcmNlU2VsZWN0aW9uJywnZm9ybWF0JywnZm9ybWF0VGV4dCcsJ2Zvcm1CaW5kJywnZm9ybUl0ZW1DbHMnLCdmcmFtZScsJ2dyb3cnLCdncm93TWF4JywnZ3Jvd01pbicsJ2dyb3dUb0xvbmdlc3RWYWx1ZScsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGRlbkRhdGFDbHMnLCdoaWRkZW5OYW1lJywnaGlkZUVtcHR5TGFiZWwnLCdoaWRlTGFiZWwnLCdoaWRlTW9kZScsJ2hpZGVUcmlnZ2VyJywnaHRtbCcsJ2lkJywnaW5jcmVtZW50JywnaW5wdXRBdHRyVHBsJywnaW5wdXRJZCcsJ2lucHV0TWFzaycsJ2lucHV0VHlwZScsJ2lucHV0V3JhcENscycsJ2ludmFsaWRDbHMnLCdpbnZhbGlkVGV4dCcsJ2lzVGV4dElucHV0JywnaXRlbUlkJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xhYmVsYWJsZVJlbmRlclRwbCcsJ2xhYmVsQWxpZ24nLCdsYWJlbEF0dHJUcGwnLCdsYWJlbENscycsJ2xhYmVsQ2xzRXh0cmEnLCdsYWJlbFBhZCcsJ2xhYmVsU2VwYXJhdG9yJywnbGFiZWxTdHlsZScsJ2xhYmVsV2lkdGgnLCdsaXF1aWRMYXlvdXQnLCdsaXN0Q29uZmlnJywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21hc2tSZScsJ21hdGNoRmllbGRXaWR0aCcsJ21heEhlaWdodCcsJ21heExlbmd0aCcsJ21heExlbmd0aFRleHQnLCdtYXhUZXh0JywnbWF4VmFsdWUnLCdtYXhXaWR0aCcsJ21pbkNoYXJzJywnbWluSGVpZ2h0JywnbWluTGVuZ3RoJywnbWluTGVuZ3RoVGV4dCcsJ21pblRleHQnLCdtaW5WYWx1ZScsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCdtc2dUYXJnZXQnLCd1bmRlZmluZWQnLCduYW1lJywnbmFtZWFibGUnLCdvcGVuQ2xzJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3BhZGRpbmcnLCdwYWdlU2l6ZScsJ3BpY2tlckFsaWduJywncGlja2VyTWF4SGVpZ2h0JywncGlja2VyT2Zmc2V0JywndW5kZWZpbmVkJywncGx1Z2lucycsJ3ByZXZlbnRNYXJrJywncHVibGlzaGVzJywncXVlcnlDYWNoaW5nJywncXVlcnlEZWxheScsJ3F1ZXJ5TW9kZScsJ3F1ZXJ5UGFyYW0nLCdyZWFkT25seScsJ3JlYWRPbmx5Q2xzJywncmVmZXJlbmNlJywncmVnZXgnLCdyZWdleFRleHQnLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXBlYXRUcmlnZ2VyQ2xpY2snLCdyZXF1aXJlZENscycsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2VsZWN0aW9uJywnc2VsZWN0T25Gb2N1cycsJ3NlbGVjdE9uVGFiJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3VuZGVmaW5lZCcsJ3NuYXBUb0luY3JlbWVudCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RvcmUnLCdzdHJpcENoYXJzUmUnLCdzdHlsZScsJ3N1Ym1pdEZvcm1hdCcsJ3N1Ym1pdFZhbHVlJywndGFiSW5kZXgnLCd0b0Zyb250T25TaG93JywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2Zvcm0nLCd0cmFuc2Zvcm1JblBsYWNlJywndHJpZ2dlckFjdGlvbicsJ3RyaWdnZXJDbHMnLCd0cmlnZ2VycycsJ3RyaWdnZXJXcmFwQ2xzJywndHdvV2F5QmluZGFibGUnLCd0eXBlQWhlYWQnLCd0eXBlQWhlYWREZWxheScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmFsaWRhdGVCbGFuaycsJ3ZhbGlkYXRlT25CbHVyJywndmFsaWRhdGVPbkNoYW5nZScsJ3ZhbGlkYXRlT25Gb2N1c0xlYXZlJywndmFsaWRhdGlvbicsJ3ZhbGlkYXRpb25GaWVsZCcsJ3ZhbGlkYXRvcicsJ3ZhbHVlJywndmFsdWVGaWVsZCcsJ3ZhbHVlTm90Rm91bmRUZXh0JywndmFsdWVQdWJsaXNoRXZlbnQnLCd2aWV3TW9kZWwnLCd2dHlwZScsJ3Z0eXBlVGV4dCcsJ3dlaWdodCcsJ3dpZHRoJywneHR5cGUnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2NyZWF0ZWQnLCdhY3RpdmF0ZScsJ2FkZGVkJywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2F1dG9zaXplJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzZWxlY3QnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXF1ZXJ5JywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2VsZWN0JywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NoYW5nZScsJ2NvbGxhcHNlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXJ0eWNoYW5nZScsJ2Rpc2FibGUnLCdlbmFibGUnLCdlcnJvcmNoYW5nZScsJ2V4cGFuZCcsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoaWRlJywna2V5ZG93bicsJ2tleXByZXNzJywna2V5dXAnLCdtb3ZlJywncGFzdGUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2VsZWN0Jywnc2hvdycsJ3NwZWNpYWxrZXknLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLCd2YWxpZGl0eWNoYW5nZScsJ3dyaXRlYWJsZWNoYW5nZScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0VGltZWZpZWxkQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VGltZWZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNvdW50ZXInLCdhY3RpdmVFcnJvcicsJ2FjdGl2ZUVycm9yc1RwbCcsJ2FmdGVyQm9keUVsJywnYWZ0ZXJMYWJlbFRleHRUcGwnLCdhZnRlckxhYmVsVHBsJywnYWZ0ZXJTdWJUcGwnLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbGxvd0JsYW5rJywnYWxsb3dPbmx5V2hpdGVzcGFjZScsJ2FsbFF1ZXJ5JywnYWx0Rm9ybWF0cycsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5pbWF0ZVNoYWRvdycsJ2FueU1hdGNoJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhRXJyb3JUZXh0JywnYXJpYUhlbHAnLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9FbCcsJ2F1dG9GaXRFcnJvcnMnLCdhdXRvSGlkZUlucHV0TWFzaycsJ2F1dG9Mb2FkT25WYWx1ZScsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2VsZWN0JywnYXV0b1NlbGVjdExhc3QnLCdhdXRvU2VsZWN0TWF0Y2hlcycsJ2F1dG9TaG93JywnYmFzZUJvZHlDbHMnLCdiYXNlQ2xzJywnYmVmb3JlQm9keUVsJywnYmVmb3JlTGFiZWxUZXh0VHBsJywnYmVmb3JlTGFiZWxUcGwnLCdiZWZvcmVTdWJUcGwnLCdiaW5kJywnYmxhbmtUZXh0JywnYm9yZGVyJywnY2FzZVNlbnNpdGl2ZScsJ2NoZWNrQ2hhbmdlQnVmZmVyJywnY2hlY2tDaGFuZ2VFdmVudHMnLCdjaGlsZEVscycsJ2NsZWFyRmlsdGVyT25CbHVyJywnY2xzJywndW5kZWZpbmVkJywnY29sdW1uV2lkdGgnLCdjb21wb25lbnRDbHMnLCdjb21wb25lbnRMYXlvdXQnLCdjb25zdHJhaW4nLCdjb25zdHJhaW50SW5zZXRzJywnY29uc3RyYWluVG8nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRBbGlnbicsJ2RlZmF1bHRMaXN0Q29uZmlnJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCd1bmRlZmluZWQnLCdkaXJ0eUNscycsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkaXNhYmxlS2V5RmlsdGVyJywnZGlzcGxheUZpZWxkJywnZGlzcGxheVRwbCcsJ2RvY2snLCdkcmFnZ2FibGUnLCdlZGl0YWJsZScsJ2VtcHR5Q2xzJywnZW1wdHlUZXh0JywnZW5hYmxlS2V5RXZlbnRzJywnZW5hYmxlUmVnRXgnLCdlbmZvcmNlTWF4TGVuZ3RoJywnZXJyb3JNc2dDbHMnLCdmaWVsZEJvZHlDbHMnLCdmaWVsZENscycsJ2ZpZWxkTGFiZWwnLCdmaWVsZFN0eWxlJywnZmllbGRTdWJUcGwnLCdmaXhlZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JjZVJlc2V0Q2FyZXQnLCdmb3JjZVNlbGVjdGlvbicsJ2Zvcm1hdCcsJ2Zvcm1hdFRleHQnLCdmb3JtQmluZCcsJ2Zvcm1JdGVtQ2xzJywnZnJhbWUnLCdncm93JywnZ3Jvd01heCcsJ2dyb3dNaW4nLCdncm93VG9Mb25nZXN0VmFsdWUnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRkZW5EYXRhQ2xzJywnaGlkZGVuTmFtZScsJ2hpZGVFbXB0eUxhYmVsJywnaGlkZUxhYmVsJywnaGlkZU1vZGUnLCdoaWRlVHJpZ2dlcicsJ2h0bWwnLCdpZCcsJ2luY3JlbWVudCcsJ2lucHV0QXR0clRwbCcsJ2lucHV0SWQnLCdpbnB1dE1hc2snLCdpbnB1dFR5cGUnLCdpbnB1dFdyYXBDbHMnLCdpbnZhbGlkQ2xzJywnaW52YWxpZFRleHQnLCdpc1RleHRJbnB1dCcsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYWJlbGFibGVSZW5kZXJUcGwnLCdsYWJlbEFsaWduJywnbGFiZWxBdHRyVHBsJywnbGFiZWxDbHMnLCdsYWJlbENsc0V4dHJhJywnbGFiZWxQYWQnLCdsYWJlbFNlcGFyYXRvcicsJ2xhYmVsU3R5bGUnLCdsYWJlbFdpZHRoJywnbGlxdWlkTGF5b3V0JywnbGlzdENvbmZpZycsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXNrUmUnLCdtYXRjaEZpZWxkV2lkdGgnLCdtYXhIZWlnaHQnLCdtYXhMZW5ndGgnLCdtYXhMZW5ndGhUZXh0JywnbWF4VGV4dCcsJ21heFZhbHVlJywnbWF4V2lkdGgnLCdtaW5DaGFycycsJ21pbkhlaWdodCcsJ21pbkxlbmd0aCcsJ21pbkxlbmd0aFRleHQnLCdtaW5UZXh0JywnbWluVmFsdWUnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbXNnVGFyZ2V0JywndW5kZWZpbmVkJywnbmFtZScsJ25hbWVhYmxlJywnb3BlbkNscycsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGFnZVNpemUnLCdwaWNrZXJBbGlnbicsJ3BpY2tlck1heEhlaWdodCcsJ3BpY2tlck9mZnNldCcsJ3VuZGVmaW5lZCcsJ3BsdWdpbnMnLCdwcmV2ZW50TWFyaycsJ3B1Ymxpc2hlcycsJ3F1ZXJ5Q2FjaGluZycsJ3F1ZXJ5RGVsYXknLCdxdWVyeU1vZGUnLCdxdWVyeVBhcmFtJywncmVhZE9ubHknLCdyZWFkT25seUNscycsJ3JlZmVyZW5jZScsJ3JlZ2V4JywncmVnZXhUZXh0JywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVwZWF0VHJpZ2dlckNsaWNrJywncmVxdWlyZWRDbHMnLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2Nyb2xsYWJsZScsJ3NlbGVjdGlvbicsJ3NlbGVjdE9uRm9jdXMnLCdzZWxlY3RPblRhYicsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCd1bmRlZmluZWQnLCdzbmFwVG9JbmNyZW1lbnQnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0b3JlJywnc3RyaXBDaGFyc1JlJywnc3R5bGUnLCdzdWJtaXRGb3JtYXQnLCdzdWJtaXRWYWx1ZScsJ3RhYkluZGV4JywndG9Gcm9udE9uU2hvdycsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhbnNmb3JtJywndHJhbnNmb3JtSW5QbGFjZScsJ3RyaWdnZXJBY3Rpb24nLCd0cmlnZ2VyQ2xzJywndHJpZ2dlcnMnLCd0cmlnZ2VyV3JhcENscycsJ3R3b1dheUJpbmRhYmxlJywndHlwZUFoZWFkJywndHlwZUFoZWFkRGVsYXknLCd1aScsJ3VpQ2xzJywndXNlckNscycsJ3ZhbGlkYXRlQmxhbmsnLCd2YWxpZGF0ZU9uQmx1cicsJ3ZhbGlkYXRlT25DaGFuZ2UnLCd2YWxpZGF0ZU9uRm9jdXNMZWF2ZScsJ3ZhbGlkYXRpb24nLCd2YWxpZGF0aW9uRmllbGQnLCd2YWxpZGF0b3InLCd2YWx1ZScsJ3ZhbHVlRmllbGQnLCd2YWx1ZU5vdEZvdW5kVGV4dCcsJ3ZhbHVlUHVibGlzaEV2ZW50Jywndmlld01vZGVsJywndnR5cGUnLCd2dHlwZVRleHQnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NUaW1lZmllbGQoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2NyZWF0ZWQnLCdhY3RpdmF0ZScsJ2FkZGVkJywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2F1dG9zaXplJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzZWxlY3QnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXF1ZXJ5JywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2VsZWN0JywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NoYW5nZScsJ2NvbGxhcHNlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXJ0eWNoYW5nZScsJ2Rpc2FibGUnLCdlbmFibGUnLCdlcnJvcmNoYW5nZScsJ2V4cGFuZCcsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoaWRlJywna2V5ZG93bicsJ2tleXByZXNzJywna2V5dXAnLCdtb3ZlJywncGFzdGUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2VsZWN0Jywnc2hvdycsJ3NwZWNpYWxrZXknLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLCd2YWxpZGl0eWNoYW5nZScsJ3dyaXRlYWJsZWNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICd0aW1lZmllbGQnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ1RpbWVmaWVsZCgpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19