# schema-lanyard-discord-presence

[![Version](http://img.shields.io/npm/v/schema-lanyard-discord-presence.svg?style=flat-square)](https://www.npmjs.org/package/schema-lanyard-discord-presence)
[![Build](https://img.shields.io/travis/Nate-Wilkins/schema-lanyard-discord-presence/main?style=flat-square)](https://app.travis-ci.com/github/Nate-Wilkins/schema-lanyard-discord-presence)
[![Open Issues](https://img.shields.io/github/issues-raw/Nate-Wilkins/schema-lanyard-discord-presence?style=flat-square)](https://github.com/Nate-Wilkins/schema-lanyard-discord-presence/issues)
[![License](https://img.shields.io/github/license/Nate-Wilkins/schema-lanyard-discord-presence?color=%2308F&style=flat-square)](https://github.com/Nate-Wilkins/schema-lanyard-discord-presence/blob/main/LICENSE)

> Schema to type and validate Lanyard discord presence data.

```
yarn add schema-lanyard-discord-presence
```

## Usage

```typescript
import { SchemaDiscordPresence, DiscordPresence } from 'schema-lanyard-discord-presence';

const discordPresence: DiscordPresence = await SchemaDiscordPresence.validate(data);
```

## External Resources

- [Lanyard API](https://github.com/Phineas/lanyard)
- [Discord API Public Flags](https://discord.com/developers/docs/resources/user#user-object-user-flags)
- [React Discord Presence](https://github.com/Nate-Wilkins/react-discord-presence)

## Roadmap

- Add more data properties from the Lanyard API.
- Update yup to support nullable and default behaviors.
