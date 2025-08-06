import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { apiRequest } from '../transport';

export async function getListOfForms(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const endpoint = '/listforms';
	return await loadOptionsAPIRequest(this, endpoint);
}

export async function getListOfLandingPages(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const endpoint = '/listpages';
	return await loadOptionsAPIRequest(this, endpoint);
}

export async function getListOfPopups(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const endpoint = '/listpopups';
	return await loadOptionsAPIRequest(this, endpoint);
}

export async function getListOfSubcategories(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const endpoint = '/listsubcategories';
	return await loadOptionsAPIRequest(this, endpoint);
}

export async function getListOfAutoresponders(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const endpoint = '/listautoresponders';
	return await loadOptionsAPIRequest(this, endpoint);
}

export async function getListOfCampaigns(this: ILoadOptionsFunctions) {
	const endpoint = '/listcampaigns';
	return await loadOptionsAPIRequest(this, endpoint);
}

export async function getListOfTemplates(this: ILoadOptionsFunctions) {
	const endpoint = '/listtemplates';
	return await loadOptionsAPIRequest(this, endpoint);
}

async function loadOptionsAPIRequest(
	func: ILoadOptionsFunctions,
	endpoint: string,
): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequest.call(func, 'GET', endpoint, {});

	const returnData: INodePropertyOptions[] = [];

	const operation = func.getNodeParameter('operation', 'ignore');

	// prepend All options
	if (
		!(
			((operation === 'addOrUpdate' || operation === 'tag' || operation === 'untag') &&
				endpoint === '/listsubcategories') ||
			(operation === 'sendEmail' && endpoint === '/listtemplates')
		)
	) {
		returnData.push({ name: 'All', value: 'All' });
	}

	for (const data of responseData) {
		returnData.push({
			name: data.Name as string,
			value: data.id as number,
		});
	}

	return returnData;
}
