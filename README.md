![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# Enginemailer n8n node

## Reference

[Repo template](https://github.com/n8n-io/n8n-nodes-starter/generate)

[n8n node creation tutorial](https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/)

[Folder structure reference](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost)

## Prerequisites

- NodeJS minimum version 20.
- n8n local installation with:
  ```
  npm install n8n -g
  ```
- Recommended: follow [n8n's guide](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/) to set up your development environment.

## Installation

1. After clone the repo, run `npm i` to install dependencies

## Run in Development

Reference: [run your node locally](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/)

1. After modified the code, run `npm run build` to transpile TypeScript file to JavaScript, and generate icon to display in the node. All generated JavaScript file will park under `/dist` directory.
2. Run `npm link` to push this npm package to your machine.
3. cd to your n8n installation directory, which should park at `%USERPROFILE%\.n8n` in Windows.
4. Create directory `custom` if it isn't exist.
5. cd to `custom` directory, and run `npm link n8n-nodes-enginemailer`
6. cd back to your project directory, and run `n8n start` to run the n8n instance in your machine. You will need to press `o` key as instructed after running `n8n start` to open n8n in browser.

## Project Structure

```
.
├── dist/ (generated after run npm run build)
├── v1/
├── Enginemailer.node.json
├── Enginemailer.node.ts
├── EnginemailerTrigger.node.json
├── EnginemailerTrigger.node.ts
```

### Project Root Structure Overview

1. dist/
   - Directory to store all generated JavaScript files after running `npm run build`.
2. v1/
   - Source directory for v1 nodes.
3. Enginemailer.node.json
   - Enginemailer Action Node metadata.
4. Enginemailer.node.ts
   - Enginemailer Action Node entry file.
5. EnginemailerTrigger.node.json
   - Enginemailer Trigger Node metadata.
6. EnginemailerTrigger.node.ts
   - Enginemailer Trigger Node entry file.

## v1 Structure

v1 using **declarative style** to create action node, and **programmatic style** to create trigger node. [Check here](https://docs.n8n.io/integrations/creating-nodes/plan/choose-node-method/) for more details.

```
.
├── v1/
│   ├── actions/
│   ├── methods/
│   ├── transport/
│   ├── triggers/
│   ├── EnginemailerApiV1.credentials.ts
```

### v1 Structure Overview

1. actions/
   - Store all action node related files, including interfaces, description and routing.
2. methods/
   - Store all custom methods, currently store all functions related to dropdown API call.
3. transport/
   - Store all functions/config related to API request.
4. triggers/
   - Store all trigger node related files, including interfaces, description and execution.
5. EnginemailerApiV1.credentials.ts
   - Define credential type for user to configure, currently only allow API key.

## Node Creation

Some concepts to understand before proceed to node creation

1. Resource:
   - Represents category of data or functionality, can treat it as module.
2. Operation:
   - Represents an action/function that you can perform on the resource.

For example:

- Resource: Subscriber
- Operation: Find
- After combine would be: A function to find subscriber.

> Note: due to naming convention rule in n8n, we cannot define `resource` and `operation` in both Action and Trigger node, so for Trigger, the naming has changed to `resourceTrigger` and `operationTrigger`

### Action Node add new resource/operation

1. If the function need to have new resource, then go to `Enginemailer.node.ts` to add new options object under `options` array
2. Go to `{version}/actions/{resource}`, if is a new resource, create new folder under `actions` folder
3. In `actions` folder, Go to `interfaces.ts`, and add resource/operation name accordingly in `EnginemailerMap`
4. Go to `{resource}` folder, and create new folder with `{operation}` name.
5. In `{operation}` folder, create `index.ts`, `description.ts`, and `routing.ts`
6. Define the fields that you need user to input for this operation in `descripition.ts`
7. Define the API structure for the new function in `routing.ts`
8. Import both `description.ts` and `routing.ts` in `index.ts`, and export it
9. Go to `{resource}/index.ts`, and define its properties and add as new option in `options` field, import the `index.ts` file in `{operation}`, and use spread operator `...` to expand it at the bottom part of the properties.

### Trigger Node add new resource/operation

Most of the parts is same as Action, except it is using `execution` rather than `routing`, so you need to

1. Define its custom execution function, can refer `triggers/subscriber/new/execution.ts`,
2. Export operation folder in `triggers/{resource}/index.ts`, to allow polling function able to use it.
3. Add function call handler in `EnginemailerTrigger.node.ts` - `poll` function if a new resource created.

## Logging

1. Logging in n8n is different with normal nodeJS or browser developer console way to debug.
2. According to [n8n's logging](https://docs.n8n.io/hosting/logging-monitoring/logging/), you would need to set `N8N_LOG_LEVEL` to `debug` and `N8N_LOG_OUTPUT` to `console` as environment variables. With bash terminal (git bash), you can do it easily by
   ```
   export N8N_LOG_LEVEL=debug
   export N8N_LOG_OUTPUT=console
   ```
3. To add log in your function, you need to write as below:
   ```
   this.logger.log("custom message")
   ```
4. Custom log should appear in terminal when running `n8n start`
