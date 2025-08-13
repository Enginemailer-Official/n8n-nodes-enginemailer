/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import { INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { BASE_URL } from '../transport';

import * as subscriber from './subscriber';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Enginemailer',
	name: 'enginemailer',
	icon: 'file:EM_Logo_Square.svg',
	group: ['output'],
	version: 1,
	subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
	description: 'Consume Enginemailer API',
	defaults: {
		name: 'Enginemailer',
	},
	inputs: [NodeConnectionType.Main],
	outputs: [NodeConnectionType.Main],
	credentials: [
		{
			name: 'enginemailerV1Api',
			required: true,
		},
	],
	requestDefaults: {
		baseURL: BASE_URL,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	},
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Subscriber',
					value: 'subscriber',
				},
			],
			default: 'subscriber',
		},
		...subscriber.description,
	],
};
