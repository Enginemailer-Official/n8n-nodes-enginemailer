import {
	IAuthenticate,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';
import { BASE_URL } from '../nodes/Enginemailer/v1/transport';

export class EnginemailerV1Api implements ICredentialType {
	name = 'enginemailerV1Api';
	displayName = 'Enginemailer V1 API';
	icon: Icon = 'file:../nodes/Enginemailer/EM_Logo_Square.svg';
	documentationUrl = 'TODO add url';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'APIKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticate = {
		type: 'generic',
		properties: {
			headers: {
				APIKey: '={{$credentials.APIKey}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: BASE_URL,
			url: '/connect',
			method: 'GET',
			headers: {
				APIKey: '={{$credentials.APIKey}}',
			},
		},
	};
}
