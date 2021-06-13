var ExtGridviewComponent_1;
import { __decorate, __param } from "tslib";
//import EWCGridview from '../dist/ext-gridview.component.js';
//inputs: (new EWCGridview()).properties,
//import EWCGridview from '@sencha/ext-web-components-classic/dist/ext-gridview.component.js';
import { EWCGridview } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
let ExtGridviewComponent = ExtGridviewComponent_1 = class ExtGridviewComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'draggable', 'emptyText', 'enableTextSelection', 'firstCls', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lastCls', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'markDirty', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'stripeRows', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',], (new EWCGridview()).events, ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecellclick', 'beforecellcontextmenu', 'beforecelldblclick', 'beforecellkeydown', 'beforecellmousedown', 'beforecellmouseup', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforerowbodyclick', 'beforerowbodycontextmenu', 'beforerowbodydblclick', 'beforerowbodykeydown', 'beforerowbodykeypress', 'beforerowbodykeyup', 'beforerowbodylongpress', 'beforerowbodymousedown', 'beforerowbodymouseup', 'beforerowexit', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'cellclick', 'cellcontextmenu', 'celldblclick', 'cellkeydown', 'cellmousedown', 'cellmouseup', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'rowbodyclick', 'rowbodycontextmenu', 'rowbodydblclick', 'rowbodykeydown', 'rowbodykeypress', 'rowbodykeyup', 'rowbodylongpress', 'rowbodymousedown', 'rowbodymouseup', 'rowclick', 'rowcontextmenu', 'rowdblclick', 'rowkeydown', 'rowmousedown', 'rowmouseup', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',], vc);
        this.xtype = 'gridview';
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
ExtGridviewComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtGridviewComponent = ExtGridviewComponent_1 = __decorate([
    Component({
        selector: 'ExtGridview',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'draggable', 'emptyText', 'enableTextSelection', 'firstCls', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lastCls', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'markDirty', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'stripeRows', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',],
        outputs: ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecellclick', 'beforecellcontextmenu', 'beforecelldblclick', 'beforecellkeydown', 'beforecellmousedown', 'beforecellmouseup', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforerowbodyclick', 'beforerowbodycontextmenu', 'beforerowbodydblclick', 'beforerowbodykeydown', 'beforerowbodykeypress', 'beforerowbodykeyup', 'beforerowbodylongpress', 'beforerowbodymousedown', 'beforerowbodymouseup', 'beforerowexit', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'cellclick', 'cellcontextmenu', 'celldblclick', 'cellkeydown', 'cellmousedown', 'cellmouseup', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'rowbodyclick', 'rowbodycontextmenu', 'rowbodydblclick', 'rowbodykeydown', 'rowbodykeypress', 'rowbodykeyup', 'rowbodylongpress', 'rowbodymousedown', 'rowbodymouseup', 'rowclick', 'rowcontextmenu', 'rowdblclick', 'rowkeydown', 'rowmousedown', 'rowmouseup', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtGridviewComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtGridviewComponent);
export { ExtGridviewComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCGridview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0R3JpZHZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvRXh0R3JpZHZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBOEQ7QUFDOUQseUNBQXlDO0FBQ3pDLDhGQUE4RjtBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDakUsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTL0MsSUFBYSxvQkFBb0IsNEJBQWpDLE1BQWEsb0JBQXFCLFNBQVEsT0FBTztJQUM3QyxZQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBRXBCLEtBQUssQ0FDRCxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGtCQUFrQixFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsc0JBQXNCLEVBQUMsZ0JBQWdCLEVBQUMscUJBQXFCLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxxQkFBcUIsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMseUJBQXlCLEVBQUMsd0JBQXdCLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFD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eUI7QUFDekIsMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ0dyaWR2aWV3IGZyb20gJy4uL2Rpc3QvZXh0LWdyaWR2aWV3LmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NHcmlkdmlldygpKS5wcm9wZXJ0aWVzLFxuLy9pbXBvcnQgRVdDR3JpZHZpZXcgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1ncmlkdmlldy5jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgRVdDR3JpZHZpZXcgfSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2NvbW1vbi9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0R3JpZHZpZXcnLFxuICAgIGlucHV0czogWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3RpdmVDb3VudGVyJywnYWxpZ25PblNjcm9sbCcsJ2FsaWduVGFyZ2V0JywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9FbCcsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VDbHMnLCdiaW5kJywnYmxvY2tSZWZyZXNoJywnYm9yZGVyJywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZlckVtcHR5VGV4dCcsJ2RlZmVySW5pdGlhbFJlZnJlc2gnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkQ2xzJywnZGlzYWJsZVNlbGVjdGlvbicsJ2RvY2snLCdkcmFnZ2FibGUnLCdlbXB0eVRleHQnLCdlbmFibGVUZXh0U2VsZWN0aW9uJywnZmlyc3RDbHMnLCdmaXhlZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JtQmluZCcsJ2ZyYW1lJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdodG1sJywnaWQnLCdpdGVtQ2xzJywnaXRlbUlkJywnaXRlbVNlbGVjdG9yJywnaXRlbVRwbCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXN0Q2xzJywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdsb2FkaW5nQ2xzJywnbG9hZGluZ0hlaWdodCcsJ2xvYWRpbmdUZXh0JywnbG9hZGluZ1VzZU1zZycsJ2xvYWRNYXNrJywnbWFyZ2luJywnbWFya0RpcnR5JywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCd1bmRlZmluZWQnLCduYW1lYWJsZScsJ25hdmlnYXRpb25Nb2RlbCcsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdvdmVySXRlbUNscycsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJlc2VydmVTY3JvbGxPblJlZnJlc2gnLCdwcmVzZXJ2ZVNjcm9sbE9uUmVsb2FkJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3NhdmVEZWxheScsJ3Njcm9sbGFibGUnLCdzZWxlY3RlZEl0ZW1DbHMnLCdzZWxlY3Rpb24nLCdzZWxlY3Rpb25Nb2RlbCcsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCd1bmRlZmluZWQnLCdzaW5nbGVTZWxlY3QnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0b3JlJywnc3RyaXBlUm93cycsJ3N0eWxlJywndGFiSW5kZXgnLCd0aHJvdHRsZWRVcGRhdGUnLCd0b0Zyb250T25TaG93JywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFja092ZXInLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2lkdGgnLCd4dHlwZScsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnY3JlYXRlZCcsJ2FjdGl2YXRlJywnYWRkZWQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVjZWxsY2xpY2snLCdiZWZvcmVjZWxsY29udGV4dG1lbnUnLCdiZWZvcmVjZWxsZGJsY2xpY2snLCdiZWZvcmVjZWxsa2V5ZG93bicsJ2JlZm9yZWNlbGxtb3VzZWRvd24nLCdiZWZvcmVjZWxsbW91c2V1cCcsJ2JlZm9yZWNvbnRhaW5lcmNsaWNrJywnYmVmb3JlY29udGFpbmVyY29udGV4dG1lbnUnLCdiZWZvcmVjb250YWluZXJkYmxjbGljaycsJ2JlZm9yZWNvbnRhaW5lcmtleWRvd24nLCdiZWZvcmVjb250YWluZXJrZXlwcmVzcycsJ2JlZm9yZWNvbnRhaW5lcmtleXVwJywnYmVmb3JlY29udGFpbmVybW91c2Vkb3duJywnYmVmb3JlY29udGFpbmVybW91c2VvdXQnLCdiZWZvcmVjb250YWluZXJtb3VzZW92ZXInLCdiZWZvcmVjb250YWluZXJtb3VzZXVwJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc2VsZWN0JywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVpdGVtY2xpY2snLCdiZWZvcmVpdGVtY29udGV4dG1lbnUnLCdiZWZvcmVpdGVtZGJsY2xpY2snLCdiZWZvcmVpdGVta2V5ZG93bicsJ2JlZm9yZWl0ZW1rZXlwcmVzcycsJ2JlZm9yZWl0ZW1rZXl1cCcsJ2JlZm9yZWl0ZW1sb25ncHJlc3MnLCdiZWZvcmVpdGVtbW91c2Vkb3duJywnYmVmb3JlaXRlbW1vdXNlZW50ZXInLCdiZWZvcmVpdGVtbW91c2VsZWF2ZScsJ2JlZm9yZWl0ZW1tb3VzZXVwJywnYmVmb3JlcmVmcmVzaCcsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXJvd2JvZHljbGljaycsJ2JlZm9yZXJvd2JvZHljb250ZXh0bWVudScsJ2JlZm9yZXJvd2JvZHlkYmxjbGljaycsJ2JlZm9yZXJvd2JvZHlrZXlkb3duJywnYmVmb3Jlcm93Ym9keWtleXByZXNzJywnYmVmb3Jlcm93Ym9keWtleXVwJywnYmVmb3Jlcm93Ym9keWxvbmdwcmVzcycsJ2JlZm9yZXJvd2JvZHltb3VzZWRvd24nLCdiZWZvcmVyb3dib2R5bW91c2V1cCcsJ2JlZm9yZXJvd2V4aXQnLCdiZWZvcmVzZWxlY3QnLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JveHJlYWR5JywnY2VsbGNsaWNrJywnY2VsbGNvbnRleHRtZW51JywnY2VsbGRibGNsaWNrJywnY2VsbGtleWRvd24nLCdjZWxsbW91c2Vkb3duJywnY2VsbG1vdXNldXAnLCdjb250YWluZXJjbGljaycsJ2NvbnRhaW5lcmNvbnRleHRtZW51JywnY29udGFpbmVyZGJsY2xpY2snLCdjb250YWluZXJrZXlkb3duJywnY29udGFpbmVya2V5cHJlc3MnLCdjb250YWluZXJrZXl1cCcsJ2NvbnRhaW5lcm1vdXNlZG93bicsJ2NvbnRhaW5lcm1vdXNlb3V0JywnY29udGFpbmVybW91c2VvdmVyJywnY29udGFpbmVybW91c2V1cCcsJ2RlYWN0aXZhdGUnLCdkZXNlbGVjdCcsJ2Rlc3Ryb3knLCdkaXNhYmxlJywnZW5hYmxlJywnZm9jdXMnLCdmb2N1c2NoYW5nZScsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ2hpZ2hsaWdodGl0ZW0nLCdpdGVtYWRkJywnaXRlbWNsaWNrJywnaXRlbWNvbnRleHRtZW51JywnaXRlbWRibGNsaWNrJywnaXRlbWtleWRvd24nLCdpdGVta2V5cHJlc3MnLCdpdGVta2V5dXAnLCdpdGVtbG9uZ3ByZXNzJywnaXRlbW1vdXNlZG93bicsJ2l0ZW1tb3VzZWVudGVyJywnaXRlbW1vdXNlbGVhdmUnLCdpdGVtbW91c2V1cCcsJ2l0ZW1yZW1vdmUnLCdpdGVtdXBkYXRlJywnbW92ZScsJ3JlZnJlc2gnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywncm93Ym9keWNsaWNrJywncm93Ym9keWNvbnRleHRtZW51Jywncm93Ym9keWRibGNsaWNrJywncm93Ym9keWtleWRvd24nLCdyb3dib2R5a2V5cHJlc3MnLCdyb3dib2R5a2V5dXAnLCdyb3dib2R5bG9uZ3ByZXNzJywncm93Ym9keW1vdXNlZG93bicsJ3Jvd2JvZHltb3VzZXVwJywncm93Y2xpY2snLCdyb3djb250ZXh0bWVudScsJ3Jvd2RibGNsaWNrJywncm93a2V5ZG93bicsJ3Jvd21vdXNlZG93bicsJ3Jvd21vdXNldXAnLCdzZWxlY3QnLCdzZWxlY3Rpb25jaGFuZ2UnLCdzaG93Jywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJywndW5oaWdobGlnaHRpdGVtJywndmlld3JlYWR5JyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRHcmlkdmlld0NvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEdyaWR2aWV3Q29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNvdW50ZXInLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuaW1hdGVTaGFkb3cnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYmFzZUNscycsJ2JpbmQnLCdibG9ja1JlZnJlc2gnLCdib3JkZXInLCdjaGlsZEVscycsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmVyRW1wdHlUZXh0JywnZGVmZXJJbml0aWFsUmVmcmVzaCcsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkaXNhYmxlU2VsZWN0aW9uJywnZG9jaycsJ2RyYWdnYWJsZScsJ2VtcHR5VGV4dCcsJ2VuYWJsZVRleHRTZWxlY3Rpb24nLCdmaXJzdENscycsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2Zvcm1CaW5kJywnZnJhbWUnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2h0bWwnLCdpZCcsJ2l0ZW1DbHMnLCdpdGVtSWQnLCdpdGVtU2VsZWN0b3InLCdpdGVtVHBsJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xhc3RDbHMnLCdsaXF1aWRMYXlvdXQnLCdsaXN0ZW5lcnMnLCdsaXZlRHJhZycsJ2xvYWRlcicsJ2xvYWRpbmdDbHMnLCdsb2FkaW5nSGVpZ2h0JywnbG9hZGluZ1RleHQnLCdsb2FkaW5nVXNlTXNnJywnbG9hZE1hc2snLCdtYXJnaW4nLCdtYXJrRGlydHknLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ3VuZGVmaW5lZCcsJ25hbWVhYmxlJywnbmF2aWdhdGlvbk1vZGVsJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ292ZXJJdGVtQ2xzJywncGFkZGluZycsJ3BsdWdpbnMnLCdwcmVzZXJ2ZVNjcm9sbE9uUmVmcmVzaCcsJ3ByZXNlcnZlU2Nyb2xsT25SZWxvYWQnLCdwdWJsaXNoZXMnLCdyZWZlcmVuY2UnLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2Nyb2xsYWJsZScsJ3NlbGVjdGVkSXRlbUNscycsJ3NlbGVjdGlvbicsJ3NlbGVjdGlvbk1vZGVsJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3VuZGVmaW5lZCcsJ3NpbmdsZVNlbGVjdCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RvcmUnLCdzdHJpcGVSb3dzJywnc3R5bGUnLCd0YWJJbmRleCcsJ3Rocm90dGxlZFVwZGF0ZScsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYWNrT3ZlcicsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NHcmlkdmlldygpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnY3JlYXRlZCcsJ2FjdGl2YXRlJywnYWRkZWQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVjZWxsY2xpY2snLCdiZWZvcmVjZWxsY29udGV4dG1lbnUnLCdiZWZvcmVjZWxsZGJsY2xpY2snLCdiZWZvcmVjZWxsa2V5ZG93bicsJ2JlZm9yZWNlbGxtb3VzZWRvd24nLCdiZWZvcmVjZWxsbW91c2V1cCcsJ2JlZm9yZWNvbnRhaW5lcmNsaWNrJywnYmVmb3JlY29udGFpbmVyY29udGV4dG1lbnUnLCdiZWZvcmVjb250YWluZXJkYmxjbGljaycsJ2JlZm9yZWNvbnRhaW5lcmtleWRvd24nLCdiZWZvcmVjb250YWluZXJrZXlwcmVzcycsJ2JlZm9yZWNvbnRhaW5lcmtleXVwJywnYmVmb3JlY29udGFpbmVybW91c2Vkb3duJywnYmVmb3JlY29udGFpbmVybW91c2VvdXQnLCdiZWZvcmVjb250YWluZXJtb3VzZW92ZXInLCdiZWZvcmVjb250YWluZXJtb3VzZXVwJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc2VsZWN0JywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVpdGVtY2xpY2snLCdiZWZvcmVpdGVtY29udGV4dG1lbnUnLCdiZWZvcmVpdGVtZGJsY2xpY2snLCdiZWZvcmVpdGVta2V5ZG93bicsJ2JlZm9yZWl0ZW1rZXlwcmVzcycsJ2JlZm9yZWl0ZW1rZXl1cCcsJ2JlZm9yZWl0ZW1sb25ncHJlc3MnLCdiZWZvcmVpdGVtbW91c2Vkb3duJywnYmVmb3JlaXRlbW1vdXNlZW50ZXInLCdiZWZvcmVpdGVtbW91c2VsZWF2ZScsJ2JlZm9yZWl0ZW1tb3VzZXVwJywnYmVmb3JlcmVmcmVzaCcsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXJvd2JvZHljbGljaycsJ2JlZm9yZXJvd2JvZHljb250ZXh0bWVudScsJ2JlZm9yZXJvd2JvZHlkYmxjbGljaycsJ2JlZm9yZXJvd2JvZHlrZXlkb3duJywnYmVmb3Jlcm93Ym9keWtleXByZXNzJywnYmVmb3Jlcm93Ym9keWtleXVwJywnYmVmb3Jlcm93Ym9keWxvbmdwcmVzcycsJ2JlZm9yZXJvd2JvZHltb3VzZWRvd24nLCdiZWZvcmVyb3dib2R5bW91c2V1cCcsJ2JlZm9yZXJvd2V4aXQnLCdiZWZvcmVzZWxlY3QnLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JveHJlYWR5JywnY2VsbGNsaWNrJywnY2VsbGNvbnRleHRtZW51JywnY2VsbGRibGNsaWNrJywnY2VsbGtleWRvd24nLCdjZWxsbW91c2Vkb3duJywnY2VsbG1vdXNldXAnLCdjb250YWluZXJjbGljaycsJ2NvbnRhaW5lcmNvbnRleHRtZW51JywnY29udGFpbmVyZGJsY2xpY2snLCdjb250YWluZXJrZXlkb3duJywnY29udGFpbmVya2V5cHJlc3MnLCdjb250YWluZXJrZXl1cCcsJ2NvbnRhaW5lcm1vdXNlZG93bicsJ2NvbnRhaW5lcm1vdXNlb3V0JywnY29udGFpbmVybW91c2VvdmVyJywnY29udGFpbmVybW91c2V1cCcsJ2RlYWN0aXZhdGUnLCdkZXNlbGVjdCcsJ2Rlc3Ryb3knLCdkaXNhYmxlJywnZW5hYmxlJywnZm9jdXMnLCdmb2N1c2NoYW5nZScsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ2hpZ2hsaWdodGl0ZW0nLCdpdGVtYWRkJywnaXRlbWNsaWNrJywnaXRlbWNvbnRleHRtZW51JywnaXRlbWRibGNsaWNrJywnaXRlbWtleWRvd24nLCdpdGVta2V5cHJlc3MnLCdpdGVta2V5dXAnLCdpdGVtbG9uZ3ByZXNzJywnaXRlbW1vdXNlZG93bicsJ2l0ZW1tb3VzZWVudGVyJywnaXRlbW1vdXNlbGVhdmUnLCdpdGVtbW91c2V1cCcsJ2l0ZW1yZW1vdmUnLCdpdGVtdXBkYXRlJywnbW92ZScsJ3JlZnJlc2gnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywncm93Ym9keWNsaWNrJywncm93Ym9keWNvbnRleHRtZW51Jywncm93Ym9keWRibGNsaWNrJywncm93Ym9keWtleWRvd24nLCdyb3dib2R5a2V5cHJlc3MnLCdyb3dib2R5a2V5dXAnLCdyb3dib2R5bG9uZ3ByZXNzJywncm93Ym9keW1vdXNlZG93bicsJ3Jvd2JvZHltb3VzZXVwJywncm93Y2xpY2snLCdyb3djb250ZXh0bWVudScsJ3Jvd2RibGNsaWNrJywncm93a2V5ZG93bicsJ3Jvd21vdXNlZG93bicsJ3Jvd21vdXNldXAnLCdzZWxlY3QnLCdzZWxlY3Rpb25jaGFuZ2UnLCdzaG93Jywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJywndW5oaWdobGlnaHRpdGVtJywndmlld3JlYWR5JyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2dyaWR2aWV3J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NHcmlkdmlldygpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19