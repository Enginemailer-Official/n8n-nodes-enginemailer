import { INodeProperties } from 'n8n-workflow';

import * as addOrUpdate from './addOrUpdate';
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
				name: 'Add or Update Subscriber',
				value: 'addOrUpdate',
				description: 'Create a new subscriber or update the subscriber if the data exists.',
				action: 'Create a new subscriber or update the subscriber if the data exists.',
				routing: addOrUpdate.routing,
			},
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
	...addOrUpdate.description,
	...find.description,
	// TODO add respective description
];
