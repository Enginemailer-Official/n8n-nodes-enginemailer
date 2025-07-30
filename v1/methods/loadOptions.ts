import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { apiRequest } from '../transport';

export async function getListOfForms(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const endpoint = '/listforms';
	const responseData = await apiRequest.call(this, 'GET', endpoint, {});

	const returnData: INodePropertyOptions[] = [];

	for (const data of responseData) {
		returnData.push({
			name: data.Name as string,
			value: data.id as number,
		});
	}

	return returnData;
}

export async function getListOfLandingPages(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const endpoint = '/listpages';
	const responseData = await apiRequest.call(this, 'GET', endpoint, {});

	const returnData: INodePropertyOptions[] = [];

	for (const data of responseData) {
		returnData.push({
			name: data.Name as string,
			value: data.id as number,
		});
	}

	return returnData;
}

export async function getListOfPopups(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const endpoint = '/listpopups';
	const responseData = await apiRequest.call(this, 'GET', endpoint, {});

	const returnData: INodePropertyOptions[] = [];

	for (const data of responseData) {
		returnData.push({
			name: data.Name as string,
			value: data.id as number,
		});
	}

	return returnData;
}
