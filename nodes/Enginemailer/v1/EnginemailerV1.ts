import { INodeType, INodeTypeBaseDescription, INodeTypeDescription } from 'n8n-workflow';
import { loadOptions } from './methods';
import { versionDescription } from './actions/versionDescription';

export class EnginemailerV1 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			...versionDescription,
		};
	}

	methods = { loadOptions };
}
