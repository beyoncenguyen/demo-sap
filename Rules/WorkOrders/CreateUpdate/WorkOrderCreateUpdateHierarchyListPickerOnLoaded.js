import libVal from '../../Common/Library/ValidationLibrary';
export default function WorkOrderCreateUpdateHierarchyListPickerOnLoaded(control) {
    if (libVal.evalIsEmpty(control.getPageProxy().binding)) {
        control.getPageProxy()._context.binding = control.binding;
    }
    let name = control.getName();
    let context = control.getPageProxy();
    let formCellContainer = context.getControl('FormCellContainer');
    var extension;
    var value;

    if (name === 'FuncLocHierarchyExtensionControl') {
        value = formCellContainer.getControl('FuncLocHierarchyExtensionControl').getValue();
        if (!value) {
            value = context.binding.HeaderFunctionLocation;
        }
        if (value) {
            extension = formCellContainer.getControl('FuncLocHierarchyExtensionControl')._control._extension;
        }
    } else {
        value = formCellContainer.getControl('EquipHierarchyExtensionControl').getValue();
        if (!value) {
            value = context.binding.HeaderEquipment;
        }
        if (value) {
            extension = formCellContainer.getControl('EquipHierarchyExtensionControl')._control._extension;
        }
    }
    if (extension) {
        extension.setData(value);
    }
}
