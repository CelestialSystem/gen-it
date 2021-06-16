import './SimpleDragDropComponent.html';

export default class SimpleDragDropComponent {
    extnameToProperty = (cmpObj) => {
        for (var prop in cmpObj) {
            this[prop] = cmpObj[prop];
        }
    }

    onReadyParent = ({ detail: { cmpObj } }) => {
        this.extnameToProperty(cmpObj);
        this.source = new Ext.drag.Source({
            element: this.item.el,
            constrain: this.parent.el,
            listeners: {
                dragstart: this.onDragStart,
                dragmove: this.onDragMove,
                dragend: this.onDragEnd
            }
        });
    };

    onDragStart = () => {
        //console.log('start');
    };

    onDragMove = (source, info) => {
        const pos = info.element.current;
        const html = Ext.String.format(
            'X: {0}, Y: {1}',
            Math.round(pos.x),
            Math.round(pos.y)
        );
        this.item.setHtml(html);
    };

    onDragEnd = () => {
        this.item.setHtml("Drag Me!");
    };

    doDestroy = () => {
        Ext.destroy(this.source);
    };
}
