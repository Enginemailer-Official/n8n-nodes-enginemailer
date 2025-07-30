import { SubscriberProperties } from '../../interfaces';

export const subscriberFindDescription: SubscriberProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['find'],
			},
		},
		default: '',
		description: 'Email of the subscriber',
	},
];
