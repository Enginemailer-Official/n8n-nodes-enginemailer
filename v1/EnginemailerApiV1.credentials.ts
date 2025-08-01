import {
	IAuthenticate,
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';
import { BASE_URL } from './transport';

export class EnginemailerApiV1 implements ICredentialType {
	name = 'EnginemailerApiV1';
	displayName = 'Enginemailer API v1';
	icon: Icon = 'file:../EM_Logo_Square.svg';
	documentationUrl = 'TODO add url';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'APIKey',
			type: 'string',
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
	} as IAuthenticateGeneric;
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
