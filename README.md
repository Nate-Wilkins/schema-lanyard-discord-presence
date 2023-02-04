# schema-lanyard-discord-presence

> Schema to type and validate Lanyard discord presence data.

```
yarn add schema-lanyard-discord-presence
```

## Usage

```typescript
import { SchemaDiscordPresence, DiscordPresence } from 'schema-lanyard-discord-presence';

const discordPresence: DiscordPresence = SchemaDiscordPresence.validate(data);
```
