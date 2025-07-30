import {
	IAuthenticate,
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class EnginemailerApiV1 implements ICredentialType {
	name = 'EnginemailerApiV1';
	displayName = 'Enginemailer API v1';
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
}
