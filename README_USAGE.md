# n8n-nodes-enginemailer

This is an n8n community node. It lets you use Enginemailer in your n8n workflows, including creating, updating, and deleting subscriber, as well as send email to others.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- Subscriber
  - Add or update a subscriber
  - Deactivate a subscriber
  - Delete a subscriber
  - Find a subscriber
  - Send email
  - Tag a subscriber to subcategory
  - Untag a subscriber from subcategory

## Events

- Subscriber
  - On autoresponder completed
  - On autoresponder triggered
  - On subscribed
  - On subscriber deleted
  - On subscriber's fields updated
  - On tagged with subcategory
  - On unsubscribed
  - On untagged with subcategory

## Credentials

You can use these credentials to authenticate the following nodes:

- Enginemailer
- Enginemailer Trigger

### Prerequisites

Create an [Enginemailer](https://www.enginemailer.com/) account.

### Supported authentication methods

- API key

### Related resources

Refer to [Enginemailer's API documentation](https://connect.enginemailer.com/n8n/index.html) for more information about the service.

### Using API Key

To configure this credential, you'll need:

- An **API Key**: Generate an API key from the **Enginemailer** account -> API Keys. Refer to the [API Authentication documentation](https://enginemailer.zendesk.com/hc/en-us/articles/360057634711-Manage-API-keys-for-your-account) for more detailed instructions.

## Compatibility

- Tested with version 1.103.2

## Usage

### Node parameters

Use these parameters to configure your node.

#### Poll Times

n8n's Enginemailer trigger node uses polling for check for updates on configured Enginemailer resources. The **Poll Times** parameter configures the querying frequency:

- Every Minute
- Every Hour
- Every Day
- Every Week
- Every Month
- Every X: Check for updates every given number of minutes or hours.
- Custom: Customize the polling interval by providing a cron expression.
  Use the **Add Poll Time** button to add more polling intervals.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Enginemailer's API documentation](https://connect.enginemailer.com/n8n/index.html)
