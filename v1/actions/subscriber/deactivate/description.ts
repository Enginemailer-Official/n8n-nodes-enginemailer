import { SubscriberProperties } from '../../interfaces';

export const subscriberDeactivateDescription: SubscriberProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['deactivate'],
			},
		},
		default: '',
		description: 'Email of the subscriber',
	},
];
