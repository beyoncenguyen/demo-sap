import NotificationTypePkrDefault from './NotificationTypePkrDefault';

export default function PriorityQueryOptions(context) {
    if (context.binding['@odata.type'] === '#sap_mobile.InspectionCharacteristic') { 
        return NotificationTypePkrDefault(context).then(notificationType => { 
            return context.read('/SAPAssetManager/Services/AssetManager.service', `NotificationTypes('${notificationType}')`, [], '').then(notifTypeRecord => { 
                return `$filter=PriorityType eq '${notifTypeRecord.PriorityType}'&$orderby=Priority`; 
            }); 
        });
     } 
    return "$filter=PriorityType eq '{{#Property:PriorityType}}'&$orderby=Priority";
}