import { INodeProperties } from 'n8n-workflow';

import * as newSub from './new';
import * as unsubscribed from './unsubscribed';
import * as tagged from './tagged';
import * as deleted from './deleted';
import * as untagged from './untagged';
import * as fieldsUpdated from './fieldsUpdated';
import * as autoresponderTriggered from './autoresponderTriggered';
import * as autoresponderCompleted from './autoresponderCompleted';

export { newSub };
export { unsubscribed };
export { deleted };
export { tagged };
export { untagged };
export { fieldsUpdated };
export { autoresponderTriggered };
export { autoresponderCompleted };

export const description: INodeProperties[] = [
	{
		displayName: 'Event',
		name: 'operationTrigger',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
			},
		},
		options: [
			{
				name: 'New Subscriber',
				value: 'newSub',
				description: 'Triggers when a new subscriber is created',
				action: 'On subscribed',
			},
			{
				name: 'Subscriber Completed Autoresponder',
				value: 'autoresponderCompleted',
				description: 'Triggers when a subscriber receives the last email in an autoresponder',
				action: 'On autoresponder completed',
			},
			{
				name: 'Subscriber Deleted',
				value: 'deleted',
				description: 'Triggers when a subscriber is deleted',
				action: 'On subscriber deleted',
			},
			{
				name: 'Subscriber Fields Updated',
				value: 'fieldsUpdated',
				description: "Triggers when a subscriber's fields have been updated",
				action: "On subscriber's fields updated",
			},
			{
				name: 'Subscriber Tagged With a Subcategory',
				value: 'tagged',
				description: 'Triggers when a subscriber is tagged with a subcategory',
				action: 'On tagged with subcategory',
			},
			{
				name: 'Subscriber Triggered Autoresponder',
				value: 'autoresponderTriggered',
				description: 'Triggers when a subscriber receives the first email in an autoresponder',
				action: 'On autoresponder triggered',
			},
			{
				name: 'Subscriber Unsubscribed',
				value: 'unsubscribed',
				description: 'Triggers when a subscriber unsubscribes',
				action: 'On unsubscribed',
			},
			{
				name: 'Subscriber Untagged From a Subcategory',
				value: 'untagged',
				description: 'Triggers when a subscriber is untagged from a subcategory',
				action: 'On untagged with subcategory',
			},
		],
		default: 'newSub',
	},
	...newSub.description,
	...unsubscribed.description,
	...tagged.description,
	...deleted.description,
	...untagged.description,
	...fieldsUpdated.description,
	...autoresponderTriggered.description,
	...autoresponderCompleted.description,
];
