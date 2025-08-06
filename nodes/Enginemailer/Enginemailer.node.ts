import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import * as subscriber from './v1/actions/subscriber';
import { BASE_URL } from './v1/transport';
import { loadOptions } from './v1/methods';

export class Enginemailer implements INodeType {
	description: INodeTypeDescription = {
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

	methods = { loadOptions };
}

// import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';
// import { EnginemailerV1 } from './v1/EnginemailerV1.node';

// export class Enginemailer extends VersionedNodeType {
// 	constructor() {
// 		const baseDescription: INodeTypeBaseDescription = {
// 			displayName: 'Enginemailer',
// 			name: 'enginemailer',
// 			icon: 'file:EM_Logo_Square.svg',
// 			group: ['output'],
// 			subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
// 			description: 'Consume Enginemailer API',
// 			defaultVersion: 1,
// 		};

// 		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
// 			1: new EnginemailerV1(baseDescription),
// 		};

// 		super(nodeVersions, baseDescription);
// 	}
// }
