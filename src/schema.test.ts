import { SchemaDiscordPresence } from './schema';

const createLanyardApiData = (data?: any) => ({
  spotify: {
    track_id: '3xGBB3KwYrSLPL5gJRMxTX',
    timestamps: {
      start: 1676237731539,
      end: 1676237998539,
    },
    song: 'Blame Me',
    artist: 'The Pretty Reckless',
    album_art_url:
      'https://i.scdn.co/image/ab67616d0000b27322a54730f9c6d2ff1eb119d2',
    album: 'Going To Hell (Deluxe Edition)',
  },
  listening_to_spotify: false,
  kv: {},
  discord_user: {
    username: 'nate-wilkins',
    public_flags: 64,
    id: '194976024457510912',
    display_name: null,
    discriminator: '5455',
    bot: false,
    avatar_decoration: null,
    avatar: 'abe8b7a14d105e50135dc08c9611d380',
  },
  discord_status: 'online',
  activities: [
    {
      type: 4,
      state: '😼',
      name: 'Custom Status',
      id: 'custom',
      emoji: {
        name: 'eyesshaking',
        id: '662645652668547083',
        animated: true,
      },
      created_at: 1675542370754,
    },
    {
      type: 0,
      timestamps: {
        start: 1675547220000,
      },
      state: 'Editing DiscordPresence.test.tsx',
      name: 'Neovim',
      id: 'adcc4377e4f48e4d',
      details: 'Working on react-discord-presence',
      created_at: 1675547708661,
      assets: {
        small_text: 'React',
        small_image: '794715645786587137',
        large_text: 'Neovide',
        large_image: '794715651365273600',
      },
      application_id: '793271441293967371',
    },
  ],
  active_on_discord_web: false,
  active_on_discord_mobile: false,
  active_on_discord_desktop: true,
  ...data,
});

test('when using valid discord presence schema', async () => {
  // Given discord presence schema.
  // And valid discord presence data.
  const data = createLanyardApiData();

  // When validating the data.
  await expect(
    (async () => {
      await SchemaDiscordPresence.validate(data);
    })(),
  )
    // Then the validation passed.
    .resolves.toBeFalsy();
});

test('when using valid discord presence schema without spotify data', async () => {
  // Given discord presence schema.
  // And valid discord presence data.
  const data = createLanyardApiData({ spotify: undefined });

  // When validating the data.
  await expect(
    (async () => {
      await SchemaDiscordPresence.validate(data);
    })(),
  )
    // Then the validation passed.
    .resolves.toBeFalsy();
});
