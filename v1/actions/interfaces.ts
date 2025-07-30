import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type EnginemailerMap = {
	subscriber: 'addOrUpdate' | 'deactivate' | 'delete' | 'tag' | 'untag' | 'find' | 'sendEmail';
};

export type Enginemailer = AllEntities<EnginemailerMap>;

export type EnginemailerSubscriber = Entity<EnginemailerMap, 'subscriber'>;

export type SubscriberProperties = PropertiesOf<EnginemailerSubscriber>;
