import { INodeProperties } from 'n8n-workflow';

import * as find from './find';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
			},
		},
		options: [
			{
				name: 'Find Subscriber',
				value: 'find',
				description: 'Search for an existing subscriber in your account',
				action: 'Search for an existing subscriber in your account',
				routing: find.routing,
			}, //TODO continue add
		],
		default: 'find', //TODO change
	},
	...find.description,
	// TODO add respective description
];
