import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';
import { EnginemailerTriggerV1 } from './v1/EnginemailerTriggerV1';

export class EnginemailerTrigger extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Enginemailer Trigger',
			name: 'enginemailerTrigger',
			icon: 'file:EM_Logo_Square.svg',
			group: ['trigger'],
			description: 'Trigger based on subscriber events through polling',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new EnginemailerTriggerV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
