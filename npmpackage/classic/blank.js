var xtypes = [
  'button',
  'cycle',
  'segmentedbutton',
  'splitbutton',
  'calendar-event',
  'calendar-form-add',
  'calendar-calendar-picker',
  'calendar-form-edit',
  'calendar-daysheader',
  'calendar-weeksheader',
  'calendar-list',
  'calendar-day',
  'calendar-days',
  'calendar-month',
  'calendar',
  'calendar-week',
  'calendar-weeks',
  'calendar-dayview',
  'calendar-daysview',
  'calendar-monthview',
  'calendar-multiview',
  'calendar-weekview',
  'calendar-weeksview',
  'axis',
  'axis3d',
  'cartesian',
  'chart',
  'interaction',
  'legend',
  'chartnavigator',
  'polar',
  'spacefilling',
  'component',
  'box',
  'buttongroup',
  'container',
  'viewport',
  'd3-canvas',
  'd3-heatmap',
  'd3-pack',
  'd3-partition',
  'd3-sunburst',
  'd3-tree',
  'd3-horizontal-tree',
  'd3-treemap',
  'd3-svg',
  'd3',
  'dashboard-column',
  'dashboard',
  'dashboard-panel',
  'draw',
  'surface',
  'editor',
  'flash',
  'checkboxgroup',
  'field',
  'checkboxfield',
  'checkbox',
  'combobox',
  'combo',
  'datefield',
  'displayfield',
  'filefield',
  'fileuploadfield',
  'filebutton',
  'hiddenfield',
  'hidden',
  'htmleditor',
  'numberfield',
  'pickerfield',
  'radiofield',
  'radio',
  'spinnerfield',
  'tagfield',
  'textfield',
  'textareafield',
  'textarea',
  'timefield',
  'triggerfield',
  'trigger',
  'fieldcontainer',
  'fieldset',
  'label',
  'form',
  'radiogroup',
  'celleditor',
  'actioncolumn',
  'booleancolumn',
  'checkcolumn',
  'gridcolumn',
  'datecolumn',
  'numbercolumn',
  'rownumberer',
  'templatecolumn',
  'widgetcolumn',
  'headercontainer',
  'gridpanel',
  'grid',
  'propertygrid',
  'roweditor',
  'roweditorbuttons',
  'image',
  'imagecomponent',
  'columnsplitter',
  'treelist',
  'treelistitem',
  'loadmask',
  'menubar',
  'menucheckitem',
  'colormenu',
  'datemenu',
  'menuitem',
  'menu',
  'menuseparator',
  'header',
  'panel',
  'tablepanel',
  'title',
  'tool',
  'colorpicker',
  'datepicker',
  'monthpicker',
  'timepicker',
  'pivotd3container',
  'pivotheatmap',
  'pivottreemap',
  'pivotgrid',
  'mzpivotgrid',
  'pivotconfigfield',
  'pivotconfigcontainer',
  'pivotconfigpanel',
  'progress',
  'progressbarwidget',
  'progressbar',
  'bordersplitter',
  'splitter',
  'multislider',
  'slider',
  'sliderfield',
  'slidertip',
  'sliderwidget',
  'sparklinebar',
  'sparkline',
  'sparklinebox',
  'sparklinebullet',
  'sparklinediscrete',
  'sparklineline',
  'sparklinepie',
  'sparklinetristate',
  'tabbar',
  'tabpanel',
  'tab',
  'quicktip',
  'tip',
  'tooltip',
  'breadcrumb',
  'tbfill',
  'tbitem',
  'pagingtoolbar',
  'tbseparator',
  'tbspacer',
  'tbtext',
  'toolbar',
  'treecolumn',
  'treepanel',
  'treeview',
  'colorbutton',
  'colorpickercolormap',
  'colorpickercolorpreview',
  'colorfield',
  'colorselector',
  'colorpickerslider',
  'colorpickerslideralpha',
  'colorpickersliderhue',
  'colorpickerslidersaturation',
  'colorpickerslidervalue',
  'desktop',
  'taskbar',
  'trayclock',
  'video',
  'wallpaper',
  'eventrecordermanager',
  'explorer',
  'itemselectorfield',
  'itemselector',
  'multiselectfield',
  'multiselect',
  'searchfield',
  'gauge',
  'gmappanel',
  'uxiframe',
  'rating',
  'statusbar',
  'treepicker',
  'boundlist',
  'multiselector',
  'multiselector-search',
  'tableview',
  'gridview',
  'dataview',
  'widget',
  'messagebox',
  'toast',
  'window'
]
var classes = [
    'Ext.data.virtual.Store',
    'Ext.grid.rowedit.Plugin',

    'Ext.grid.plugin.CellEditing',
    'Ext.ux.ajax.JsonSimlet',
    'Ext.chart.series.Pie',
    'Ext.data.virtual.Store',
    'Ext.grid.rowedit.Plugin',
    'Ext.field.InputMask',
    'Ext.data.validator.Format',
    'Ext.grid.plugin.*',
    'Ext.dataview.plugin.*',
    'Ext.pivot.plugin.*',
    'Ext.plugin.*',
    'Ext.chart.plugin.*',
    'Ext.draw.plugin.*',
    'Ext.dataview.*',
    'Ext.data.validator.*',
    'Ext.layout.*',
    'Ext.ux.gauge.*',
    'Ext.grid.filters.Plugin',
    'Ext.*'


]

exports.getXtypes = () => {return xtypes};
exports.getCreates = () => {return require("../util").getCreatesForPackage(xtypes, classes)}

