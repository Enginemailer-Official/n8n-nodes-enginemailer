import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';
import { EnginemailerV1 } from './v1/EnginemailerV1';

export class Enginemailer extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Enginemailer',
			name: 'enginemailer',
			icon: 'file:EM_Logo_Square.svg',
			group: ['output'],
			subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
			description: 'Consume Enginemailer API',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new EnginemailerV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
