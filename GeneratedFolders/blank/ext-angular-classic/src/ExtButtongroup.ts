//import EWCButtongroup from '../dist/ext-buttongroup.component.js';
//inputs: (new EWCButtongroup()).properties,
//import EWCButtongroup from '@sencha/ext-web-components-classic/dist/ext-buttongroup.component.js';
import { EWCButtongroup } from '@sencha/ext-web-components-classic';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './common/angularbase';

@Component({
    selector: 'ExtButtongroup',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columns','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultButtonUI','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','dockedItems','draggable','expandToolText','fbar','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','glyph','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','undefined','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','tbar','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','enable','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','move','remove','removed','render','resize','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtButtongroupComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtButtongroupComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columns','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultButtonUI','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','dockedItems','draggable','expandToolText','fbar','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','glyph','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','undefined','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','tbar','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
            (new EWCButtongroup()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','enable','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','move','remove','removed','render','resize','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat',],
            vc
        )
        this.xtype = 'buttongroup'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCButtongroup()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
