import * as yup from 'yup';

const SchemaDiscordPresenceUser = yup.object({
  username: yup.string().defined(),
  public_flags: yup.number().defined(),
  id: yup.string().defined(),
  display_name: yup.string().nullable(),
  discriminator: yup.string().defined(),
  bot: yup.boolean().defined(),
  avatar_decoration: yup.mixed().nullable(),
  avatar: yup.string().defined(),
});

const SchemaDiscordPresenceActivityAssets = yup.object({
  small_text: yup
    .string()
    .nullable()
    .optional()
    .default(null),
  small_image: yup
    .string()
    .nullable()
    .optional()
    .default(null),
  large_text: yup.string().defined(),
  large_image: yup.string().defined(),
});

const SchemaDiscordPresenceActivity = yup.object({
  type: yup.number().defined(),
  timestamps: yup
    .object({
      start: yup
        .number()
        .nullable()
        .optional()
        .default(null),
      end: yup
        .number()
        .nullable()
        .optional()
        .default(null),
    })
    .nullable()
    .optional()
    .default(null),
  state: yup
    .string()
    .nullable()
    .optional()
    .default(null),
  session_id: yup
    .string()
    .nullable()
    .optional()
    .default(null),
  name: yup
    .string()
    .defined()
    .default(null),
  id: yup.string().defined(),
  details: yup
    .string()
    .nullable()
    .optional()
    .default(null),
  created_at: yup.number().defined(),
  buttons: yup
    .array()
    .of(yup.string().defined())
    .nullable()
    .optional()
    .default(null),
  assets: SchemaDiscordPresenceActivityAssets.nullable()
    .optional()
    .default(null),
  emoji: yup
    .object({
      name: yup.string().defined(),
      id: yup
        .string()
        .nullable()
        .optional()
        .default(null),
      animated: yup
        .boolean()
        .nullable()
        .optional()
        .default(null),
    })
    .nullable()
    .optional()
    .default(null),
  application_id: yup
    .string()
    .nullable()
    .optional()
    .default(null),
});

export const SchemaDiscordPresence = yup.object({
  spotify: yup
    .mixed()
    .nullable()
    .defined(),
  listening_to_spotify: yup.boolean().defined(),
  kv: yup.mixed().defined(),
  discord_user: SchemaDiscordPresenceUser.defined(),
  discord_status: yup
    .string()
    .oneOf(['online', 'idle', 'dnd', 'offline'])
    .defined(),
  activities: yup
    .array()
    .of(SchemaDiscordPresenceActivity)
    .defined(),
  active_on_discord_web: yup.boolean().defined(),
  active_on_discord_mobile: yup.boolean().defined(),
  active_on_discord_desktop: yup.boolean().defined(),
});

export type DiscordPresence = yup.InferType<typeof SchemaDiscordPresence>;
