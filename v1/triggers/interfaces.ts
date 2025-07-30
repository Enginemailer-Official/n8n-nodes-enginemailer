import {
	AllEntities,
	DisplayCondition,
	Entity,
	INodeProperties,
	NodeParameterValue,
} from 'n8n-workflow';

type EnginemailerTriggerMap = {
	subscriberTrigger: 'newSub';
	// | 'unsubscribed'
	// | 'tagged'
	// | 'deleted'
	// | 'untagged'
	// | 'updatedFields'
	// | 'triggeredAutoresponder'
	// | 'completedAutoresponder';
};

type Prefix<T> = {
	[K in keyof T as K extends 'resource'
		? 'resourceTrigger'
		: K extends 'operation'
			? 'operationTrigger'
			: K]: T[K];
};

export type EnginemailerTrigger = Prefix<AllEntities<EnginemailerTriggerMap>>;

export type EnginemailerTriggerSubscriber = Prefix<
	Entity<EnginemailerTriggerMap, 'subscriberTrigger'>
>;

type PropertiesOfTrigger<M extends { resourceTrigger: string; operationTrigger: string }> = (Omit<
	INodeProperties,
	'displayOptions'
> & {
	displayOptions?: {
		[key in 'show' | 'hide']?: {
			resourceTrigger?: Array<M['resourceTrigger']>;
			operationTrigger?: Array<M['operationTrigger']>;
			[otherKey: string]: Array<NodeParameterValue | DisplayCondition> | undefined;
		};
	};
})[];

export type TriggerSubscriberProperties = PropertiesOfTrigger<EnginemailerTriggerSubscriber>;
