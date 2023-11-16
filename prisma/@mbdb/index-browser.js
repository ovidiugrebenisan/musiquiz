
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Art_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Cover_artScalarFieldEnum = {
  id: 'id',
  release: 'release',
  comment: 'comment',
  edit: 'edit',
  ordering: 'ordering',
  date_uploaded: 'date_uploaded',
  edits_pending: 'edits_pending',
  mime_type: 'mime_type',
  filesize: 'filesize',
  thumb_250_filesize: 'thumb_250_filesize',
  thumb_500_filesize: 'thumb_500_filesize',
  thumb_1200_filesize: 'thumb_1200_filesize'
};

exports.Prisma.Cover_art_typeScalarFieldEnum = {
  id: 'id',
  type_id: 'type_id'
};

exports.Prisma.Image_typeScalarFieldEnum = {
  mime_type: 'mime_type',
  suffix: 'suffix'
};

exports.Prisma.Release_group_cover_artScalarFieldEnum = {
  release_group: 'release_group',
  release: 'release'
};

exports.Prisma.Alternative_mediumScalarFieldEnum = {
  id: 'id',
  medium: 'medium',
  alternative_release: 'alternative_release',
  name: 'name'
};

exports.Prisma.Alternative_medium_trackScalarFieldEnum = {
  alternative_medium: 'alternative_medium',
  track: 'track',
  alternative_track: 'alternative_track'
};

exports.Prisma.Alternative_releaseScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  release: 'release',
  name: 'name',
  artist_credit: 'artist_credit',
  type: 'type',
  language: 'language',
  script: 'script',
  comment: 'comment'
};

exports.Prisma.Alternative_release_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Alternative_trackScalarFieldEnum = {
  id: 'id',
  name: 'name',
  artist_credit: 'artist_credit',
  ref_count: 'ref_count'
};

exports.Prisma.AnnotationScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  text: 'text',
  changelog: 'changelog',
  created: 'created'
};

exports.Prisma.ApplicationScalarFieldEnum = {
  id: 'id',
  owner: 'owner',
  name: 'name',
  oauth_id: 'oauth_id',
  oauth_secret: 'oauth_secret',
  oauth_redirect_uri: 'oauth_redirect_uri'
};

exports.Prisma.AreaScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  type: 'type',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  ended: 'ended',
  comment: 'comment'
};

exports.Prisma.Area_aliasScalarFieldEnum = {
  id: 'id',
  area: 'area',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Area_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Area_annotationScalarFieldEnum = {
  area: 'area',
  annotation: 'annotation'
};

exports.Prisma.Area_attributeScalarFieldEnum = {
  id: 'id',
  area: 'area',
  area_attribute_type: 'area_attribute_type',
  area_attribute_type_allowed_value: 'area_attribute_type_allowed_value',
  area_attribute_text: 'area_attribute_text'
};

exports.Prisma.Area_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Area_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  area_attribute_type: 'area_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Area_containmentScalarFieldEnum = {
  descendant: 'descendant',
  parent: 'parent',
  depth: 'depth'
};

exports.Prisma.Area_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Area_tagScalarFieldEnum = {
  area: 'area',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Area_tag_rawScalarFieldEnum = {
  area: 'area',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Area_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.ArtistScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  type: 'type',
  area: 'area',
  gender: 'gender',
  comment: 'comment',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  ended: 'ended',
  begin_area: 'begin_area',
  end_area: 'end_area'
};

exports.Prisma.Artist_aliasScalarFieldEnum = {
  id: 'id',
  artist: 'artist',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Artist_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Artist_annotationScalarFieldEnum = {
  artist: 'artist',
  annotation: 'annotation'
};

exports.Prisma.Artist_attributeScalarFieldEnum = {
  id: 'id',
  artist: 'artist',
  artist_attribute_type: 'artist_attribute_type',
  artist_attribute_type_allowed_value: 'artist_attribute_type_allowed_value',
  artist_attribute_text: 'artist_attribute_text'
};

exports.Prisma.Artist_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Artist_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  artist_attribute_type: 'artist_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Artist_creditScalarFieldEnum = {
  id: 'id',
  name: 'name',
  artist_count: 'artist_count',
  ref_count: 'ref_count',
  created: 'created',
  edits_pending: 'edits_pending',
  gid: 'gid'
};

exports.Prisma.Artist_credit_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Artist_credit_nameScalarFieldEnum = {
  artist_credit: 'artist_credit',
  position: 'position',
  artist: 'artist',
  name: 'name',
  join_phrase: 'join_phrase'
};

exports.Prisma.Artist_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Artist_ipiScalarFieldEnum = {
  artist: 'artist',
  ipi: 'ipi',
  edits_pending: 'edits_pending',
  created: 'created'
};

exports.Prisma.Artist_isniScalarFieldEnum = {
  artist: 'artist',
  isni: 'isni',
  edits_pending: 'edits_pending',
  created: 'created'
};

exports.Prisma.Artist_metaScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  rating_count: 'rating_count'
};

exports.Prisma.Artist_rating_rawScalarFieldEnum = {
  artist: 'artist',
  editor: 'editor',
  rating: 'rating'
};

exports.Prisma.Artist_tagScalarFieldEnum = {
  artist: 'artist',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Artist_tag_rawScalarFieldEnum = {
  artist: 'artist',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Artist_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Autoeditor_electionScalarFieldEnum = {
  id: 'id',
  candidate: 'candidate',
  proposer: 'proposer',
  seconder_1: 'seconder_1',
  seconder_2: 'seconder_2',
  status: 'status',
  yes_votes: 'yes_votes',
  no_votes: 'no_votes',
  propose_time: 'propose_time',
  open_time: 'open_time',
  close_time: 'close_time'
};

exports.Prisma.Autoeditor_election_voteScalarFieldEnum = {
  id: 'id',
  autoeditor_election: 'autoeditor_election',
  voter: 'voter',
  vote: 'vote',
  vote_time: 'vote_time'
};

exports.Prisma.CdtocScalarFieldEnum = {
  id: 'id',
  discid: 'discid',
  freedb_id: 'freedb_id',
  track_count: 'track_count',
  leadout_offset: 'leadout_offset',
  track_offset: 'track_offset',
  created: 'created'
};

exports.Prisma.Cdtoc_rawScalarFieldEnum = {
  id: 'id',
  release: 'release',
  discid: 'discid',
  track_count: 'track_count',
  leadout_offset: 'leadout_offset',
  track_offset: 'track_offset'
};

exports.Prisma.Country_areaScalarFieldEnum = {
  area: 'area'
};

exports.Prisma.Deleted_entityScalarFieldEnum = {
  gid: 'gid',
  data: 'data',
  deleted_at: 'deleted_at'
};

exports.Prisma.EditScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  type: 'type',
  status: 'status',
  autoedit: 'autoedit',
  open_time: 'open_time',
  close_time: 'close_time',
  expire_time: 'expire_time',
  language: 'language',
  quality: 'quality'
};

exports.Prisma.Edit_areaScalarFieldEnum = {
  edit: 'edit',
  area: 'area'
};

exports.Prisma.Edit_artistScalarFieldEnum = {
  edit: 'edit',
  artist: 'artist',
  status: 'status'
};

exports.Prisma.Edit_dataScalarFieldEnum = {
  edit: 'edit',
  data: 'data'
};

exports.Prisma.Edit_eventScalarFieldEnum = {
  edit: 'edit',
  event: 'event'
};

exports.Prisma.Edit_genreScalarFieldEnum = {
  edit: 'edit',
  genre: 'genre'
};

exports.Prisma.Edit_instrumentScalarFieldEnum = {
  edit: 'edit',
  instrument: 'instrument'
};

exports.Prisma.Edit_labelScalarFieldEnum = {
  edit: 'edit',
  label: 'label',
  status: 'status'
};

exports.Prisma.Edit_moodScalarFieldEnum = {
  edit: 'edit',
  mood: 'mood'
};

exports.Prisma.Edit_noteScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  edit: 'edit',
  text: 'text',
  post_time: 'post_time'
};

exports.Prisma.Edit_note_changeScalarFieldEnum = {
  id: 'id',
  status: 'status',
  edit_note: 'edit_note',
  change_editor: 'change_editor',
  change_time: 'change_time',
  old_note: 'old_note',
  new_note: 'new_note',
  reason: 'reason'
};

exports.Prisma.Edit_note_recipientScalarFieldEnum = {
  recipient: 'recipient',
  edit_note: 'edit_note'
};

exports.Prisma.Edit_placeScalarFieldEnum = {
  edit: 'edit',
  place: 'place'
};

exports.Prisma.Edit_recordingScalarFieldEnum = {
  edit: 'edit',
  recording: 'recording'
};

exports.Prisma.Edit_releaseScalarFieldEnum = {
  edit: 'edit',
  release: 'release'
};

exports.Prisma.Edit_release_groupScalarFieldEnum = {
  edit: 'edit',
  release_group: 'release_group'
};

exports.Prisma.Edit_seriesScalarFieldEnum = {
  edit: 'edit',
  series: 'series'
};

exports.Prisma.Edit_urlScalarFieldEnum = {
  edit: 'edit',
  url: 'url'
};

exports.Prisma.Edit_workScalarFieldEnum = {
  edit: 'edit',
  work: 'work'
};

exports.Prisma.EditorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  privs: 'privs',
  email: 'email',
  website: 'website',
  bio: 'bio',
  member_since: 'member_since',
  email_confirm_date: 'email_confirm_date',
  last_login_date: 'last_login_date',
  last_updated: 'last_updated',
  birth_date: 'birth_date',
  gender: 'gender',
  area: 'area',
  password: 'password',
  ha1: 'ha1',
  deleted: 'deleted'
};

exports.Prisma.Editor_collectionScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  editor: 'editor',
  name: 'name',
  public: 'public',
  description: 'description',
  type: 'type'
};

exports.Prisma.Editor_collection_areaScalarFieldEnum = {
  collection: 'collection',
  area: 'area',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_artistScalarFieldEnum = {
  collection: 'collection',
  artist: 'artist',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_collaboratorScalarFieldEnum = {
  collection: 'collection',
  editor: 'editor'
};

exports.Prisma.Editor_collection_deleted_entityScalarFieldEnum = {
  collection: 'collection',
  gid: 'gid',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_eventScalarFieldEnum = {
  collection: 'collection',
  event: 'event',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Editor_collection_instrumentScalarFieldEnum = {
  collection: 'collection',
  instrument: 'instrument',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_labelScalarFieldEnum = {
  collection: 'collection',
  label: 'label',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_placeScalarFieldEnum = {
  collection: 'collection',
  place: 'place',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_recordingScalarFieldEnum = {
  collection: 'collection',
  recording: 'recording',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_releaseScalarFieldEnum = {
  collection: 'collection',
  release: 'release',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_release_groupScalarFieldEnum = {
  collection: 'collection',
  release_group: 'release_group',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_seriesScalarFieldEnum = {
  collection: 'collection',
  series: 'series',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_collection_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entity_type: 'entity_type',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Editor_collection_workScalarFieldEnum = {
  collection: 'collection',
  work: 'work',
  added: 'added',
  position: 'position',
  comment: 'comment'
};

exports.Prisma.Editor_languageScalarFieldEnum = {
  editor: 'editor',
  language: 'language',
  fluency: 'fluency'
};

exports.Prisma.Editor_oauth_tokenScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  application: 'application',
  authorization_code: 'authorization_code',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expire_time: 'expire_time',
  scope: 'scope',
  granted: 'granted',
  code_challenge: 'code_challenge',
  code_challenge_method: 'code_challenge_method'
};

exports.Prisma.Editor_preferenceScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  name: 'name',
  value: 'value'
};

exports.Prisma.Editor_subscribe_artistScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  artist: 'artist',
  last_edit_sent: 'last_edit_sent'
};

exports.Prisma.Editor_subscribe_artist_deletedScalarFieldEnum = {
  editor: 'editor',
  gid: 'gid',
  deleted_by: 'deleted_by'
};

exports.Prisma.Editor_subscribe_collectionScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  collection: 'collection',
  last_edit_sent: 'last_edit_sent',
  available: 'available',
  last_seen_name: 'last_seen_name'
};

exports.Prisma.Editor_subscribe_editorScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  subscribed_editor: 'subscribed_editor',
  last_edit_sent: 'last_edit_sent'
};

exports.Prisma.Editor_subscribe_labelScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  label: 'label',
  last_edit_sent: 'last_edit_sent'
};

exports.Prisma.Editor_subscribe_label_deletedScalarFieldEnum = {
  editor: 'editor',
  gid: 'gid',
  deleted_by: 'deleted_by'
};

exports.Prisma.Editor_subscribe_seriesScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  series: 'series',
  last_edit_sent: 'last_edit_sent'
};

exports.Prisma.Editor_subscribe_series_deletedScalarFieldEnum = {
  editor: 'editor',
  gid: 'gid',
  deleted_by: 'deleted_by'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  time: 'time',
  type: 'type',
  cancelled: 'cancelled',
  setlist: 'setlist',
  comment: 'comment',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  ended: 'ended'
};

exports.Prisma.Event_aliasScalarFieldEnum = {
  id: 'id',
  event: 'event',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Event_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Event_annotationScalarFieldEnum = {
  event: 'event',
  annotation: 'annotation'
};

exports.Prisma.Event_attributeScalarFieldEnum = {
  id: 'id',
  event: 'event',
  event_attribute_type: 'event_attribute_type',
  event_attribute_type_allowed_value: 'event_attribute_type_allowed_value',
  event_attribute_text: 'event_attribute_text'
};

exports.Prisma.Event_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Event_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  event_attribute_type: 'event_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Event_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Event_metaScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  rating_count: 'rating_count',
  event_art_presence: 'event_art_presence'
};

exports.Prisma.Event_rating_rawScalarFieldEnum = {
  event: 'event',
  editor: 'editor',
  rating: 'rating'
};

exports.Prisma.Event_tagScalarFieldEnum = {
  event: 'event',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Event_tag_rawScalarFieldEnum = {
  event: 'event',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Event_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.GenderScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.GenreScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  comment: 'comment',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated'
};

exports.Prisma.Genre_aliasScalarFieldEnum = {
  id: 'id',
  genre: 'genre',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Genre_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Genre_annotationScalarFieldEnum = {
  genre: 'genre',
  annotation: 'annotation'
};

exports.Prisma.InstrumentScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  type: 'type',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  comment: 'comment',
  description: 'description'
};

exports.Prisma.Instrument_aliasScalarFieldEnum = {
  id: 'id',
  instrument: 'instrument',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Instrument_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Instrument_annotationScalarFieldEnum = {
  instrument: 'instrument',
  annotation: 'annotation'
};

exports.Prisma.Instrument_attributeScalarFieldEnum = {
  id: 'id',
  instrument: 'instrument',
  instrument_attribute_type: 'instrument_attribute_type',
  instrument_attribute_type_allowed_value: 'instrument_attribute_type_allowed_value',
  instrument_attribute_text: 'instrument_attribute_text'
};

exports.Prisma.Instrument_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Instrument_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  instrument_attribute_type: 'instrument_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Instrument_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Instrument_tagScalarFieldEnum = {
  instrument: 'instrument',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Instrument_tag_rawScalarFieldEnum = {
  instrument: 'instrument',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Instrument_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Iso_3166_1ScalarFieldEnum = {
  area: 'area',
  code: 'code'
};

exports.Prisma.Iso_3166_2ScalarFieldEnum = {
  area: 'area',
  code: 'code'
};

exports.Prisma.Iso_3166_3ScalarFieldEnum = {
  area: 'area',
  code: 'code'
};

exports.Prisma.IsrcScalarFieldEnum = {
  id: 'id',
  recording: 'recording',
  isrc: 'isrc',
  source: 'source',
  edits_pending: 'edits_pending',
  created: 'created'
};

exports.Prisma.IswcScalarFieldEnum = {
  id: 'id',
  work: 'work',
  iswc: 'iswc',
  source: 'source',
  edits_pending: 'edits_pending',
  created: 'created'
};

exports.Prisma.L_area_areaScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_artistScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_eventScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_genreScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_instrumentScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_labelScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_moodScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_placeScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_recordingScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_area_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_artistScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_eventScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_genreScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_instrumentScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_labelScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_moodScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_placeScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_recordingScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_artist_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_eventScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_genreScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_instrumentScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_labelScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_moodScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_placeScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_recordingScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_event_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_genreScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_instrumentScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_labelScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_moodScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_placeScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_recordingScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_genre_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_instrumentScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_labelScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_moodScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_placeScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_recordingScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_instrument_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_label_labelScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_label_moodScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_label_placeScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_label_recordingScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_label_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_label_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_label_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_label_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_label_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_mood_moodScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_mood_placeScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_mood_recordingScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_mood_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_mood_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_mood_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_mood_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_mood_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_place_placeScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_place_recordingScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_place_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_place_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_place_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_place_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_place_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_recording_recordingScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_recording_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_recording_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_recording_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_recording_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_recording_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_release_group_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_release_group_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_release_group_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_release_group_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_release_releaseScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_release_release_groupScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_release_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_release_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_release_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_series_seriesScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_series_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_series_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_url_urlScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_url_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.L_work_workScalarFieldEnum = {
  id: 'id',
  link: 'link',
  entity0: 'entity0',
  entity1: 'entity1',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  link_order: 'link_order',
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.LabelScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  label_code: 'label_code',
  type: 'type',
  area: 'area',
  comment: 'comment',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  ended: 'ended'
};

exports.Prisma.Label_aliasScalarFieldEnum = {
  id: 'id',
  label: 'label',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Label_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Label_annotationScalarFieldEnum = {
  label: 'label',
  annotation: 'annotation'
};

exports.Prisma.Label_attributeScalarFieldEnum = {
  id: 'id',
  label: 'label',
  label_attribute_type: 'label_attribute_type',
  label_attribute_type_allowed_value: 'label_attribute_type_allowed_value',
  label_attribute_text: 'label_attribute_text'
};

exports.Prisma.Label_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Label_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  label_attribute_type: 'label_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Label_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Label_ipiScalarFieldEnum = {
  label: 'label',
  ipi: 'ipi',
  edits_pending: 'edits_pending',
  created: 'created'
};

exports.Prisma.Label_isniScalarFieldEnum = {
  label: 'label',
  isni: 'isni',
  edits_pending: 'edits_pending',
  created: 'created'
};

exports.Prisma.Label_metaScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  rating_count: 'rating_count'
};

exports.Prisma.Label_rating_rawScalarFieldEnum = {
  label: 'label',
  editor: 'editor',
  rating: 'rating'
};

exports.Prisma.Label_tagScalarFieldEnum = {
  label: 'label',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Label_tag_rawScalarFieldEnum = {
  label: 'label',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Label_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.LanguageScalarFieldEnum = {
  id: 'id',
  iso_code_2t: 'iso_code_2t',
  iso_code_2b: 'iso_code_2b',
  iso_code_1: 'iso_code_1',
  name: 'name',
  frequency: 'frequency',
  iso_code_3: 'iso_code_3'
};

exports.Prisma.LinkScalarFieldEnum = {
  id: 'id',
  link_type: 'link_type',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  attribute_count: 'attribute_count',
  created: 'created',
  ended: 'ended'
};

exports.Prisma.Link_attributeScalarFieldEnum = {
  link: 'link',
  attribute_type: 'attribute_type',
  created: 'created'
};

exports.Prisma.Link_attribute_creditScalarFieldEnum = {
  link: 'link',
  attribute_type: 'attribute_type',
  credited_as: 'credited_as'
};

exports.Prisma.Link_attribute_text_valueScalarFieldEnum = {
  link: 'link',
  attribute_type: 'attribute_type',
  text_value: 'text_value'
};

exports.Prisma.Link_attribute_typeScalarFieldEnum = {
  id: 'id',
  parent: 'parent',
  root: 'root',
  child_order: 'child_order',
  gid: 'gid',
  name: 'name',
  description: 'description',
  last_updated: 'last_updated'
};

exports.Prisma.Link_creditable_attribute_typeScalarFieldEnum = {
  attribute_type: 'attribute_type'
};

exports.Prisma.Link_text_attribute_typeScalarFieldEnum = {
  attribute_type: 'attribute_type'
};

exports.Prisma.Link_typeScalarFieldEnum = {
  id: 'id',
  parent: 'parent',
  child_order: 'child_order',
  gid: 'gid',
  entity_type0: 'entity_type0',
  entity_type1: 'entity_type1',
  name: 'name',
  description: 'description',
  link_phrase: 'link_phrase',
  reverse_link_phrase: 'reverse_link_phrase',
  long_link_phrase: 'long_link_phrase',
  priority: 'priority',
  last_updated: 'last_updated',
  is_deprecated: 'is_deprecated',
  has_dates: 'has_dates',
  entity0_cardinality: 'entity0_cardinality',
  entity1_cardinality: 'entity1_cardinality'
};

exports.Prisma.Link_type_attribute_typeScalarFieldEnum = {
  link_type: 'link_type',
  attribute_type: 'attribute_type',
  min: 'min',
  max: 'max',
  last_updated: 'last_updated'
};

exports.Prisma.MediumScalarFieldEnum = {
  id: 'id',
  release: 'release',
  position: 'position',
  format: 'format',
  name: 'name',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  track_count: 'track_count'
};

exports.Prisma.Medium_attributeScalarFieldEnum = {
  id: 'id',
  medium: 'medium',
  medium_attribute_type: 'medium_attribute_type',
  medium_attribute_type_allowed_value: 'medium_attribute_type_allowed_value',
  medium_attribute_text: 'medium_attribute_text'
};

exports.Prisma.Medium_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Medium_attribute_type_allowed_formatScalarFieldEnum = {
  medium_format: 'medium_format',
  medium_attribute_type: 'medium_attribute_type'
};

exports.Prisma.Medium_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  medium_attribute_type: 'medium_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Medium_attribute_type_allowed_value_allowed_formatScalarFieldEnum = {
  medium_format: 'medium_format',
  medium_attribute_type_allowed_value: 'medium_attribute_type_allowed_value'
};

exports.Prisma.Medium_cdtocScalarFieldEnum = {
  id: 'id',
  medium: 'medium',
  cdtoc: 'cdtoc',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated'
};

exports.Prisma.Medium_formatScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  year: 'year',
  has_discids: 'has_discids',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Medium_indexScalarFieldEnum = {
  medium: 'medium'
};

exports.Prisma.MoodScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  comment: 'comment',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated'
};

exports.Prisma.Mood_aliasScalarFieldEnum = {
  id: 'id',
  mood: 'mood',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Mood_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Mood_annotationScalarFieldEnum = {
  mood: 'mood',
  annotation: 'annotation'
};

exports.Prisma.Orderable_link_typeScalarFieldEnum = {
  link_type: 'link_type',
  direction: 'direction'
};

exports.Prisma.PlaceScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  type: 'type',
  address: 'address',
  area: 'area',
  comment: 'comment',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  ended: 'ended'
};

exports.Prisma.Place_aliasScalarFieldEnum = {
  id: 'id',
  place: 'place',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Place_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Place_annotationScalarFieldEnum = {
  place: 'place',
  annotation: 'annotation'
};

exports.Prisma.Place_attributeScalarFieldEnum = {
  id: 'id',
  place: 'place',
  place_attribute_type: 'place_attribute_type',
  place_attribute_type_allowed_value: 'place_attribute_type_allowed_value',
  place_attribute_text: 'place_attribute_text'
};

exports.Prisma.Place_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Place_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  place_attribute_type: 'place_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Place_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Place_metaScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  rating_count: 'rating_count'
};

exports.Prisma.Place_rating_rawScalarFieldEnum = {
  place: 'place',
  editor: 'editor',
  rating: 'rating'
};

exports.Prisma.Place_tagScalarFieldEnum = {
  place: 'place',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Place_tag_rawScalarFieldEnum = {
  place: 'place',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Place_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.RecordingScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  artist_credit: 'artist_credit',
  length: 'length',
  comment: 'comment',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  video: 'video'
};

exports.Prisma.Recording_aliasScalarFieldEnum = {
  id: 'id',
  recording: 'recording',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Recording_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Recording_annotationScalarFieldEnum = {
  recording: 'recording',
  annotation: 'annotation'
};

exports.Prisma.Recording_attributeScalarFieldEnum = {
  id: 'id',
  recording: 'recording',
  recording_attribute_type: 'recording_attribute_type',
  recording_attribute_type_allowed_value: 'recording_attribute_type_allowed_value',
  recording_attribute_text: 'recording_attribute_text'
};

exports.Prisma.Recording_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Recording_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  recording_attribute_type: 'recording_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Recording_first_release_dateScalarFieldEnum = {
  recording: 'recording',
  year: 'year',
  month: 'month',
  day: 'day'
};

exports.Prisma.Recording_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Recording_metaScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  rating_count: 'rating_count'
};

exports.Prisma.Recording_rating_rawScalarFieldEnum = {
  recording: 'recording',
  editor: 'editor',
  rating: 'rating'
};

exports.Prisma.Recording_tagScalarFieldEnum = {
  recording: 'recording',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Recording_tag_rawScalarFieldEnum = {
  recording: 'recording',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.ReleaseScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  artist_credit: 'artist_credit',
  release_group: 'release_group',
  status: 'status',
  packaging: 'packaging',
  language: 'language',
  script: 'script',
  barcode: 'barcode',
  comment: 'comment',
  edits_pending: 'edits_pending',
  quality: 'quality',
  last_updated: 'last_updated'
};

exports.Prisma.Release_aliasScalarFieldEnum = {
  id: 'id',
  release: 'release',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Release_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_annotationScalarFieldEnum = {
  release: 'release',
  annotation: 'annotation'
};

exports.Prisma.Release_attributeScalarFieldEnum = {
  id: 'id',
  release: 'release',
  release_attribute_type: 'release_attribute_type',
  release_attribute_type_allowed_value: 'release_attribute_type_allowed_value',
  release_attribute_text: 'release_attribute_text'
};

exports.Prisma.Release_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  release_attribute_type: 'release_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_countryScalarFieldEnum = {
  release: 'release',
  country: 'country',
  date_year: 'date_year',
  date_month: 'date_month',
  date_day: 'date_day'
};

exports.Prisma.Release_first_release_dateScalarFieldEnum = {
  release: 'release',
  year: 'year',
  month: 'month',
  day: 'day'
};

exports.Prisma.Release_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Release_groupScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  artist_credit: 'artist_credit',
  type: 'type',
  comment: 'comment',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated'
};

exports.Prisma.Release_group_aliasScalarFieldEnum = {
  id: 'id',
  release_group: 'release_group',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Release_group_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_group_annotationScalarFieldEnum = {
  release_group: 'release_group',
  annotation: 'annotation'
};

exports.Prisma.Release_group_attributeScalarFieldEnum = {
  id: 'id',
  release_group: 'release_group',
  release_group_attribute_type: 'release_group_attribute_type',
  release_group_attribute_type_allowed_value: 'release_group_attribute_type_allowed_value',
  release_group_attribute_text: 'release_group_attribute_text'
};

exports.Prisma.Release_group_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_group_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  release_group_attribute_type: 'release_group_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_group_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Release_group_metaScalarFieldEnum = {
  id: 'id',
  release_count: 'release_count',
  first_release_date_year: 'first_release_date_year',
  first_release_date_month: 'first_release_date_month',
  first_release_date_day: 'first_release_date_day',
  rating: 'rating',
  rating_count: 'rating_count'
};

exports.Prisma.Release_group_primary_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_group_rating_rawScalarFieldEnum = {
  release_group: 'release_group',
  editor: 'editor',
  rating: 'rating'
};

exports.Prisma.Release_group_secondary_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_group_secondary_type_joinScalarFieldEnum = {
  release_group: 'release_group',
  secondary_type: 'secondary_type',
  created: 'created'
};

exports.Prisma.Release_group_tagScalarFieldEnum = {
  release_group: 'release_group',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Release_group_tag_rawScalarFieldEnum = {
  release_group: 'release_group',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Release_labelScalarFieldEnum = {
  id: 'id',
  release: 'release',
  label: 'label',
  catalog_number: 'catalog_number',
  last_updated: 'last_updated'
};

exports.Prisma.Release_metaScalarFieldEnum = {
  id: 'id',
  date_added: 'date_added',
  info_url: 'info_url',
  amazon_asin: 'amazon_asin',
  cover_art_presence: 'cover_art_presence'
};

exports.Prisma.Release_packagingScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_rawScalarFieldEnum = {
  id: 'id',
  title: 'title',
  artist: 'artist',
  added: 'added',
  last_modified: 'last_modified',
  lookup_count: 'lookup_count',
  modify_count: 'modify_count',
  source: 'source',
  barcode: 'barcode',
  comment: 'comment'
};

exports.Prisma.Release_statusScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Release_tagScalarFieldEnum = {
  release: 'release',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Release_tag_rawScalarFieldEnum = {
  release: 'release',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Release_unknown_countryScalarFieldEnum = {
  release: 'release',
  date_year: 'date_year',
  date_month: 'date_month',
  date_day: 'date_day'
};

exports.Prisma.Replication_controlScalarFieldEnum = {
  id: 'id',
  current_schema_sequence: 'current_schema_sequence',
  current_replication_sequence: 'current_replication_sequence',
  last_replication_date: 'last_replication_date'
};

exports.Prisma.ScriptScalarFieldEnum = {
  id: 'id',
  iso_code: 'iso_code',
  iso_number: 'iso_number',
  name: 'name',
  frequency: 'frequency'
};

exports.Prisma.SeriesScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  comment: 'comment',
  type: 'type',
  ordering_type: 'ordering_type',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated'
};

exports.Prisma.Series_aliasScalarFieldEnum = {
  id: 'id',
  series: 'series',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Series_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Series_annotationScalarFieldEnum = {
  series: 'series',
  annotation: 'annotation'
};

exports.Prisma.Series_attributeScalarFieldEnum = {
  id: 'id',
  series: 'series',
  series_attribute_type: 'series_attribute_type',
  series_attribute_type_allowed_value: 'series_attribute_type_allowed_value',
  series_attribute_text: 'series_attribute_text'
};

exports.Prisma.Series_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Series_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  series_attribute_type: 'series_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Series_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Series_ordering_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Series_tagScalarFieldEnum = {
  series: 'series',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Series_tag_rawScalarFieldEnum = {
  series: 'series',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Series_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entity_type: 'entity_type',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ref_count: 'ref_count'
};

exports.Prisma.Tag_relationScalarFieldEnum = {
  tag1: 'tag1',
  tag2: 'tag2',
  weight: 'weight',
  last_updated: 'last_updated'
};

exports.Prisma.TrackScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  recording: 'recording',
  medium: 'medium',
  position: 'position',
  number: 'number',
  name: 'name',
  artist_credit: 'artist_credit',
  length: 'length',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  is_data_track: 'is_data_track'
};

exports.Prisma.Track_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Track_rawScalarFieldEnum = {
  id: 'id',
  release: 'release',
  title: 'title',
  artist: 'artist',
  sequence: 'sequence'
};

exports.Prisma.Unreferenced_row_logScalarFieldEnum = {
  table_name: 'table_name',
  row_id: 'row_id',
  inserted: 'inserted'
};

exports.Prisma.UrlScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  url: 'url',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated'
};

exports.Prisma.Url_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.VoteScalarFieldEnum = {
  id: 'id',
  editor: 'editor',
  edit: 'edit',
  vote: 'vote',
  vote_time: 'vote_time',
  superseded: 'superseded'
};

exports.Prisma.WorkScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  name: 'name',
  type: 'type',
  comment: 'comment',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated'
};

exports.Prisma.Work_aliasScalarFieldEnum = {
  id: 'id',
  work: 'work',
  name: 'name',
  locale: 'locale',
  edits_pending: 'edits_pending',
  last_updated: 'last_updated',
  type: 'type',
  sort_name: 'sort_name',
  begin_date_year: 'begin_date_year',
  begin_date_month: 'begin_date_month',
  begin_date_day: 'begin_date_day',
  end_date_year: 'end_date_year',
  end_date_month: 'end_date_month',
  end_date_day: 'end_date_day',
  primary_for_locale: 'primary_for_locale',
  ended: 'ended'
};

exports.Prisma.Work_alias_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Work_annotationScalarFieldEnum = {
  work: 'work',
  annotation: 'annotation'
};

exports.Prisma.Work_attributeScalarFieldEnum = {
  id: 'id',
  work: 'work',
  work_attribute_type: 'work_attribute_type',
  work_attribute_type_allowed_value: 'work_attribute_type_allowed_value',
  work_attribute_text: 'work_attribute_text'
};

exports.Prisma.Work_attribute_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  free_text: 'free_text',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Work_attribute_type_allowed_valueScalarFieldEnum = {
  id: 'id',
  work_attribute_type: 'work_attribute_type',
  value: 'value',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.Work_gid_redirectScalarFieldEnum = {
  gid: 'gid',
  new_id: 'new_id',
  created: 'created'
};

exports.Prisma.Work_languageScalarFieldEnum = {
  work: 'work',
  language: 'language',
  edits_pending: 'edits_pending',
  created: 'created'
};

exports.Prisma.Work_metaScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  rating_count: 'rating_count'
};

exports.Prisma.Work_rating_rawScalarFieldEnum = {
  work: 'work',
  editor: 'editor',
  rating: 'rating'
};

exports.Prisma.Work_tagScalarFieldEnum = {
  work: 'work',
  tag: 'tag',
  count: 'count',
  last_updated: 'last_updated'
};

exports.Prisma.Work_tag_rawScalarFieldEnum = {
  work: 'work',
  editor: 'editor',
  tag: 'tag',
  is_upvote: 'is_upvote'
};

exports.Prisma.Work_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parent: 'parent',
  child_order: 'child_order',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.art_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.cover_artOrderByRelevanceFieldEnum = {
  comment: 'comment',
  mime_type: 'mime_type'
};

exports.Prisma.image_typeOrderByRelevanceFieldEnum = {
  mime_type: 'mime_type',
  suffix: 'suffix'
};

exports.Prisma.alternative_mediumOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.alternative_releaseOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.alternative_release_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.alternative_trackOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.annotationOrderByRelevanceFieldEnum = {
  text: 'text',
  changelog: 'changelog'
};

exports.Prisma.applicationOrderByRelevanceFieldEnum = {
  name: 'name',
  oauth_id: 'oauth_id',
  oauth_secret: 'oauth_secret',
  oauth_redirect_uri: 'oauth_redirect_uri'
};

exports.Prisma.areaOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.area_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.area_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.area_attributeOrderByRelevanceFieldEnum = {
  area_attribute_text: 'area_attribute_text'
};

exports.Prisma.area_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.area_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.area_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.area_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.artistOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  sort_name: 'sort_name',
  comment: 'comment'
};

exports.Prisma.artist_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.artist_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.artist_attributeOrderByRelevanceFieldEnum = {
  artist_attribute_text: 'artist_attribute_text'
};

exports.Prisma.artist_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.artist_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.artist_creditOrderByRelevanceFieldEnum = {
  name: 'name',
  gid: 'gid'
};

exports.Prisma.artist_credit_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.artist_credit_nameOrderByRelevanceFieldEnum = {
  name: 'name',
  join_phrase: 'join_phrase'
};

exports.Prisma.artist_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.artist_ipiOrderByRelevanceFieldEnum = {
  ipi: 'ipi'
};

exports.Prisma.artist_isniOrderByRelevanceFieldEnum = {
  isni: 'isni'
};

exports.Prisma.artist_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.cdtocOrderByRelevanceFieldEnum = {
  discid: 'discid',
  freedb_id: 'freedb_id'
};

exports.Prisma.cdtoc_rawOrderByRelevanceFieldEnum = {
  discid: 'discid'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.deleted_entityOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.edit_noteOrderByRelevanceFieldEnum = {
  text: 'text'
};

exports.Prisma.edit_note_changeOrderByRelevanceFieldEnum = {
  old_note: 'old_note',
  new_note: 'new_note',
  reason: 'reason'
};

exports.Prisma.editorOrderByRelevanceFieldEnum = {
  name: 'name',
  email: 'email',
  website: 'website',
  bio: 'bio',
  password: 'password',
  ha1: 'ha1'
};

exports.Prisma.editor_collectionOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  description: 'description'
};

exports.Prisma.editor_collection_areaOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_artistOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_deleted_entityOrderByRelevanceFieldEnum = {
  gid: 'gid',
  comment: 'comment'
};

exports.Prisma.editor_collection_eventOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.editor_collection_instrumentOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_labelOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_placeOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_recordingOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_releaseOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_release_groupOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_seriesOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_collection_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  entity_type: 'entity_type',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.editor_collection_workOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.editor_oauth_tokenOrderByRelevanceFieldEnum = {
  authorization_code: 'authorization_code',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  code_challenge: 'code_challenge'
};

exports.Prisma.editor_preferenceOrderByRelevanceFieldEnum = {
  name: 'name',
  value: 'value'
};

exports.Prisma.editor_subscribe_artist_deletedOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.editor_subscribe_collectionOrderByRelevanceFieldEnum = {
  last_seen_name: 'last_seen_name'
};

exports.Prisma.editor_subscribe_label_deletedOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.editor_subscribe_series_deletedOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.eventOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  setlist: 'setlist',
  comment: 'comment'
};

exports.Prisma.event_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.event_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.event_attributeOrderByRelevanceFieldEnum = {
  event_attribute_text: 'event_attribute_text'
};

exports.Prisma.event_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.event_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.event_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.event_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.genderOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.genreOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.genre_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.genre_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.instrumentOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment',
  description: 'description'
};

exports.Prisma.instrument_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.instrument_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.instrument_attributeOrderByRelevanceFieldEnum = {
  instrument_attribute_text: 'instrument_attribute_text'
};

exports.Prisma.instrument_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.instrument_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.instrument_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.instrument_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.iso_3166_1OrderByRelevanceFieldEnum = {
  code: 'code'
};

exports.Prisma.iso_3166_2OrderByRelevanceFieldEnum = {
  code: 'code'
};

exports.Prisma.iso_3166_3OrderByRelevanceFieldEnum = {
  code: 'code'
};

exports.Prisma.isrcOrderByRelevanceFieldEnum = {
  isrc: 'isrc'
};

exports.Prisma.iswcOrderByRelevanceFieldEnum = {
  iswc: 'iswc'
};

exports.Prisma.l_area_areaOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_artistOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_eventOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_genreOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_instrumentOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_labelOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_moodOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_placeOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_recordingOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_area_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_artistOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_eventOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_genreOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_instrumentOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_labelOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_moodOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_placeOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_recordingOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_artist_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_eventOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_genreOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_instrumentOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_labelOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_moodOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_placeOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_recordingOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_event_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_genreOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_instrumentOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_labelOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_moodOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_placeOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_recordingOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_genre_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_instrumentOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_labelOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_moodOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_placeOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_recordingOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_instrument_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_label_labelOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_label_moodOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_label_placeOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_label_recordingOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_label_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_label_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_label_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_label_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_label_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_mood_moodOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_mood_placeOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_mood_recordingOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_mood_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_mood_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_mood_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_mood_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_mood_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_place_placeOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_place_recordingOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_place_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_place_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_place_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_place_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_place_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_recording_recordingOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_recording_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_recording_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_recording_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_recording_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_recording_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_release_group_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_release_group_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_release_group_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_release_group_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_release_releaseOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_release_release_groupOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_release_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_release_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_release_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_series_seriesOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_series_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_series_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_url_urlOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_url_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.l_work_workOrderByRelevanceFieldEnum = {
  entity0_credit: 'entity0_credit',
  entity1_credit: 'entity1_credit'
};

exports.Prisma.labelOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.label_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.label_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.label_attributeOrderByRelevanceFieldEnum = {
  label_attribute_text: 'label_attribute_text'
};

exports.Prisma.label_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.label_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.label_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.label_ipiOrderByRelevanceFieldEnum = {
  ipi: 'ipi'
};

exports.Prisma.label_isniOrderByRelevanceFieldEnum = {
  isni: 'isni'
};

exports.Prisma.label_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.languageOrderByRelevanceFieldEnum = {
  iso_code_2t: 'iso_code_2t',
  iso_code_2b: 'iso_code_2b',
  iso_code_1: 'iso_code_1',
  name: 'name',
  iso_code_3: 'iso_code_3'
};

exports.Prisma.link_attribute_creditOrderByRelevanceFieldEnum = {
  credited_as: 'credited_as'
};

exports.Prisma.link_attribute_text_valueOrderByRelevanceFieldEnum = {
  text_value: 'text_value'
};

exports.Prisma.link_attribute_typeOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  description: 'description'
};

exports.Prisma.link_typeOrderByRelevanceFieldEnum = {
  gid: 'gid',
  entity_type0: 'entity_type0',
  entity_type1: 'entity_type1',
  name: 'name',
  description: 'description',
  link_phrase: 'link_phrase',
  reverse_link_phrase: 'reverse_link_phrase',
  long_link_phrase: 'long_link_phrase'
};

exports.Prisma.mediumOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.medium_attributeOrderByRelevanceFieldEnum = {
  medium_attribute_text: 'medium_attribute_text'
};

exports.Prisma.medium_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.medium_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.medium_formatOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.moodOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.mood_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.mood_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.placeOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  address: 'address',
  comment: 'comment'
};

exports.Prisma.place_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.place_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.place_attributeOrderByRelevanceFieldEnum = {
  place_attribute_text: 'place_attribute_text'
};

exports.Prisma.place_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.place_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.place_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.place_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.recordingOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.recording_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.recording_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.recording_attributeOrderByRelevanceFieldEnum = {
  recording_attribute_text: 'recording_attribute_text'
};

exports.Prisma.recording_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.recording_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.recording_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.releaseOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  barcode: 'barcode',
  comment: 'comment'
};

exports.Prisma.release_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.release_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.release_attributeOrderByRelevanceFieldEnum = {
  release_attribute_text: 'release_attribute_text'
};

exports.Prisma.release_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.release_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.release_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.release_groupOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.release_group_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.release_group_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.release_group_attributeOrderByRelevanceFieldEnum = {
  release_group_attribute_text: 'release_group_attribute_text'
};

exports.Prisma.release_group_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.release_group_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.release_group_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.release_group_primary_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.release_group_secondary_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.release_labelOrderByRelevanceFieldEnum = {
  catalog_number: 'catalog_number'
};

exports.Prisma.release_metaOrderByRelevanceFieldEnum = {
  info_url: 'info_url',
  amazon_asin: 'amazon_asin'
};

exports.Prisma.release_packagingOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.release_rawOrderByRelevanceFieldEnum = {
  title: 'title',
  artist: 'artist',
  barcode: 'barcode',
  comment: 'comment'
};

exports.Prisma.release_statusOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.scriptOrderByRelevanceFieldEnum = {
  iso_code: 'iso_code',
  iso_number: 'iso_number',
  name: 'name'
};

exports.Prisma.seriesOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.series_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.series_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.series_attributeOrderByRelevanceFieldEnum = {
  series_attribute_text: 'series_attribute_text'
};

exports.Prisma.series_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.series_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.series_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.series_ordering_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.series_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  entity_type: 'entity_type',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.tagOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.trackOrderByRelevanceFieldEnum = {
  gid: 'gid',
  number: 'number',
  name: 'name'
};

exports.Prisma.track_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.track_rawOrderByRelevanceFieldEnum = {
  title: 'title',
  artist: 'artist'
};

exports.Prisma.unreferenced_row_logOrderByRelevanceFieldEnum = {
  table_name: 'table_name'
};

exports.Prisma.urlOrderByRelevanceFieldEnum = {
  gid: 'gid',
  url: 'url'
};

exports.Prisma.url_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.workOrderByRelevanceFieldEnum = {
  gid: 'gid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.work_aliasOrderByRelevanceFieldEnum = {
  name: 'name',
  locale: 'locale',
  sort_name: 'sort_name'
};

exports.Prisma.work_alias_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.work_attributeOrderByRelevanceFieldEnum = {
  work_attribute_text: 'work_attribute_text'
};

exports.Prisma.work_attribute_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.work_attribute_type_allowed_valueOrderByRelevanceFieldEnum = {
  value: 'value',
  description: 'description',
  gid: 'gid'
};

exports.Prisma.work_gid_redirectOrderByRelevanceFieldEnum = {
  gid: 'gid'
};

exports.Prisma.work_typeOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  gid: 'gid'
};
exports.edit_note_status = exports.$Enums.edit_note_status = {
  deleted: 'deleted',
  edited: 'edited'
};

exports.fluency = exports.$Enums.fluency = {
  basic: 'basic',
  intermediate: 'intermediate',
  advanced: 'advanced',
  native: 'native'
};

exports.oauth_code_challenge_method = exports.$Enums.oauth_code_challenge_method = {
  plain: 'plain',
  S256: 'S256'
};

exports.event_art_presence = exports.$Enums.event_art_presence = {
  absent: 'absent',
  present: 'present',
  darkened: 'darkened'
};

exports.cover_art_presence = exports.$Enums.cover_art_presence = {
  absent: 'absent',
  present: 'present',
  darkened: 'darkened'
};

exports.Prisma.ModelName = {
  art_type: 'art_type',
  cover_art: 'cover_art',
  cover_art_type: 'cover_art_type',
  image_type: 'image_type',
  release_group_cover_art: 'release_group_cover_art',
  alternative_medium: 'alternative_medium',
  alternative_medium_track: 'alternative_medium_track',
  alternative_release: 'alternative_release',
  alternative_release_type: 'alternative_release_type',
  alternative_track: 'alternative_track',
  annotation: 'annotation',
  application: 'application',
  area: 'area',
  area_alias: 'area_alias',
  area_alias_type: 'area_alias_type',
  area_annotation: 'area_annotation',
  area_attribute: 'area_attribute',
  area_attribute_type: 'area_attribute_type',
  area_attribute_type_allowed_value: 'area_attribute_type_allowed_value',
  area_containment: 'area_containment',
  area_gid_redirect: 'area_gid_redirect',
  area_tag: 'area_tag',
  area_tag_raw: 'area_tag_raw',
  area_type: 'area_type',
  artist: 'artist',
  artist_alias: 'artist_alias',
  artist_alias_type: 'artist_alias_type',
  artist_annotation: 'artist_annotation',
  artist_attribute: 'artist_attribute',
  artist_attribute_type: 'artist_attribute_type',
  artist_attribute_type_allowed_value: 'artist_attribute_type_allowed_value',
  artist_credit: 'artist_credit',
  artist_credit_gid_redirect: 'artist_credit_gid_redirect',
  artist_credit_name: 'artist_credit_name',
  artist_gid_redirect: 'artist_gid_redirect',
  artist_ipi: 'artist_ipi',
  artist_isni: 'artist_isni',
  artist_meta: 'artist_meta',
  artist_rating_raw: 'artist_rating_raw',
  artist_tag: 'artist_tag',
  artist_tag_raw: 'artist_tag_raw',
  artist_type: 'artist_type',
  autoeditor_election: 'autoeditor_election',
  autoeditor_election_vote: 'autoeditor_election_vote',
  cdtoc: 'cdtoc',
  cdtoc_raw: 'cdtoc_raw',
  country_area: 'country_area',
  deleted_entity: 'deleted_entity',
  edit: 'edit',
  edit_area: 'edit_area',
  edit_artist: 'edit_artist',
  edit_data: 'edit_data',
  edit_event: 'edit_event',
  edit_genre: 'edit_genre',
  edit_instrument: 'edit_instrument',
  edit_label: 'edit_label',
  edit_mood: 'edit_mood',
  edit_note: 'edit_note',
  edit_note_change: 'edit_note_change',
  edit_note_recipient: 'edit_note_recipient',
  edit_place: 'edit_place',
  edit_recording: 'edit_recording',
  edit_release: 'edit_release',
  edit_release_group: 'edit_release_group',
  edit_series: 'edit_series',
  edit_url: 'edit_url',
  edit_work: 'edit_work',
  editor: 'editor',
  editor_collection: 'editor_collection',
  editor_collection_area: 'editor_collection_area',
  editor_collection_artist: 'editor_collection_artist',
  editor_collection_collaborator: 'editor_collection_collaborator',
  editor_collection_deleted_entity: 'editor_collection_deleted_entity',
  editor_collection_event: 'editor_collection_event',
  editor_collection_gid_redirect: 'editor_collection_gid_redirect',
  editor_collection_instrument: 'editor_collection_instrument',
  editor_collection_label: 'editor_collection_label',
  editor_collection_place: 'editor_collection_place',
  editor_collection_recording: 'editor_collection_recording',
  editor_collection_release: 'editor_collection_release',
  editor_collection_release_group: 'editor_collection_release_group',
  editor_collection_series: 'editor_collection_series',
  editor_collection_type: 'editor_collection_type',
  editor_collection_work: 'editor_collection_work',
  editor_language: 'editor_language',
  editor_oauth_token: 'editor_oauth_token',
  editor_preference: 'editor_preference',
  editor_subscribe_artist: 'editor_subscribe_artist',
  editor_subscribe_artist_deleted: 'editor_subscribe_artist_deleted',
  editor_subscribe_collection: 'editor_subscribe_collection',
  editor_subscribe_editor: 'editor_subscribe_editor',
  editor_subscribe_label: 'editor_subscribe_label',
  editor_subscribe_label_deleted: 'editor_subscribe_label_deleted',
  editor_subscribe_series: 'editor_subscribe_series',
  editor_subscribe_series_deleted: 'editor_subscribe_series_deleted',
  event: 'event',
  event_alias: 'event_alias',
  event_alias_type: 'event_alias_type',
  event_annotation: 'event_annotation',
  event_attribute: 'event_attribute',
  event_attribute_type: 'event_attribute_type',
  event_attribute_type_allowed_value: 'event_attribute_type_allowed_value',
  event_gid_redirect: 'event_gid_redirect',
  event_meta: 'event_meta',
  event_rating_raw: 'event_rating_raw',
  event_tag: 'event_tag',
  event_tag_raw: 'event_tag_raw',
  event_type: 'event_type',
  gender: 'gender',
  genre: 'genre',
  genre_alias: 'genre_alias',
  genre_alias_type: 'genre_alias_type',
  genre_annotation: 'genre_annotation',
  instrument: 'instrument',
  instrument_alias: 'instrument_alias',
  instrument_alias_type: 'instrument_alias_type',
  instrument_annotation: 'instrument_annotation',
  instrument_attribute: 'instrument_attribute',
  instrument_attribute_type: 'instrument_attribute_type',
  instrument_attribute_type_allowed_value: 'instrument_attribute_type_allowed_value',
  instrument_gid_redirect: 'instrument_gid_redirect',
  instrument_tag: 'instrument_tag',
  instrument_tag_raw: 'instrument_tag_raw',
  instrument_type: 'instrument_type',
  iso_3166_1: 'iso_3166_1',
  iso_3166_2: 'iso_3166_2',
  iso_3166_3: 'iso_3166_3',
  isrc: 'isrc',
  iswc: 'iswc',
  l_area_area: 'l_area_area',
  l_area_artist: 'l_area_artist',
  l_area_event: 'l_area_event',
  l_area_genre: 'l_area_genre',
  l_area_instrument: 'l_area_instrument',
  l_area_label: 'l_area_label',
  l_area_mood: 'l_area_mood',
  l_area_place: 'l_area_place',
  l_area_recording: 'l_area_recording',
  l_area_release: 'l_area_release',
  l_area_release_group: 'l_area_release_group',
  l_area_series: 'l_area_series',
  l_area_url: 'l_area_url',
  l_area_work: 'l_area_work',
  l_artist_artist: 'l_artist_artist',
  l_artist_event: 'l_artist_event',
  l_artist_genre: 'l_artist_genre',
  l_artist_instrument: 'l_artist_instrument',
  l_artist_label: 'l_artist_label',
  l_artist_mood: 'l_artist_mood',
  l_artist_place: 'l_artist_place',
  l_artist_recording: 'l_artist_recording',
  l_artist_release: 'l_artist_release',
  l_artist_release_group: 'l_artist_release_group',
  l_artist_series: 'l_artist_series',
  l_artist_url: 'l_artist_url',
  l_artist_work: 'l_artist_work',
  l_event_event: 'l_event_event',
  l_event_genre: 'l_event_genre',
  l_event_instrument: 'l_event_instrument',
  l_event_label: 'l_event_label',
  l_event_mood: 'l_event_mood',
  l_event_place: 'l_event_place',
  l_event_recording: 'l_event_recording',
  l_event_release: 'l_event_release',
  l_event_release_group: 'l_event_release_group',
  l_event_series: 'l_event_series',
  l_event_url: 'l_event_url',
  l_event_work: 'l_event_work',
  l_genre_genre: 'l_genre_genre',
  l_genre_instrument: 'l_genre_instrument',
  l_genre_label: 'l_genre_label',
  l_genre_mood: 'l_genre_mood',
  l_genre_place: 'l_genre_place',
  l_genre_recording: 'l_genre_recording',
  l_genre_release: 'l_genre_release',
  l_genre_release_group: 'l_genre_release_group',
  l_genre_series: 'l_genre_series',
  l_genre_url: 'l_genre_url',
  l_genre_work: 'l_genre_work',
  l_instrument_instrument: 'l_instrument_instrument',
  l_instrument_label: 'l_instrument_label',
  l_instrument_mood: 'l_instrument_mood',
  l_instrument_place: 'l_instrument_place',
  l_instrument_recording: 'l_instrument_recording',
  l_instrument_release: 'l_instrument_release',
  l_instrument_release_group: 'l_instrument_release_group',
  l_instrument_series: 'l_instrument_series',
  l_instrument_url: 'l_instrument_url',
  l_instrument_work: 'l_instrument_work',
  l_label_label: 'l_label_label',
  l_label_mood: 'l_label_mood',
  l_label_place: 'l_label_place',
  l_label_recording: 'l_label_recording',
  l_label_release: 'l_label_release',
  l_label_release_group: 'l_label_release_group',
  l_label_series: 'l_label_series',
  l_label_url: 'l_label_url',
  l_label_work: 'l_label_work',
  l_mood_mood: 'l_mood_mood',
  l_mood_place: 'l_mood_place',
  l_mood_recording: 'l_mood_recording',
  l_mood_release: 'l_mood_release',
  l_mood_release_group: 'l_mood_release_group',
  l_mood_series: 'l_mood_series',
  l_mood_url: 'l_mood_url',
  l_mood_work: 'l_mood_work',
  l_place_place: 'l_place_place',
  l_place_recording: 'l_place_recording',
  l_place_release: 'l_place_release',
  l_place_release_group: 'l_place_release_group',
  l_place_series: 'l_place_series',
  l_place_url: 'l_place_url',
  l_place_work: 'l_place_work',
  l_recording_recording: 'l_recording_recording',
  l_recording_release: 'l_recording_release',
  l_recording_release_group: 'l_recording_release_group',
  l_recording_series: 'l_recording_series',
  l_recording_url: 'l_recording_url',
  l_recording_work: 'l_recording_work',
  l_release_group_release_group: 'l_release_group_release_group',
  l_release_group_series: 'l_release_group_series',
  l_release_group_url: 'l_release_group_url',
  l_release_group_work: 'l_release_group_work',
  l_release_release: 'l_release_release',
  l_release_release_group: 'l_release_release_group',
  l_release_series: 'l_release_series',
  l_release_url: 'l_release_url',
  l_release_work: 'l_release_work',
  l_series_series: 'l_series_series',
  l_series_url: 'l_series_url',
  l_series_work: 'l_series_work',
  l_url_url: 'l_url_url',
  l_url_work: 'l_url_work',
  l_work_work: 'l_work_work',
  label: 'label',
  label_alias: 'label_alias',
  label_alias_type: 'label_alias_type',
  label_annotation: 'label_annotation',
  label_attribute: 'label_attribute',
  label_attribute_type: 'label_attribute_type',
  label_attribute_type_allowed_value: 'label_attribute_type_allowed_value',
  label_gid_redirect: 'label_gid_redirect',
  label_ipi: 'label_ipi',
  label_isni: 'label_isni',
  label_meta: 'label_meta',
  label_rating_raw: 'label_rating_raw',
  label_tag: 'label_tag',
  label_tag_raw: 'label_tag_raw',
  label_type: 'label_type',
  language: 'language',
  link: 'link',
  link_attribute: 'link_attribute',
  link_attribute_credit: 'link_attribute_credit',
  link_attribute_text_value: 'link_attribute_text_value',
  link_attribute_type: 'link_attribute_type',
  link_creditable_attribute_type: 'link_creditable_attribute_type',
  link_text_attribute_type: 'link_text_attribute_type',
  link_type: 'link_type',
  link_type_attribute_type: 'link_type_attribute_type',
  medium: 'medium',
  medium_attribute: 'medium_attribute',
  medium_attribute_type: 'medium_attribute_type',
  medium_attribute_type_allowed_format: 'medium_attribute_type_allowed_format',
  medium_attribute_type_allowed_value: 'medium_attribute_type_allowed_value',
  medium_attribute_type_allowed_value_allowed_format: 'medium_attribute_type_allowed_value_allowed_format',
  medium_cdtoc: 'medium_cdtoc',
  medium_format: 'medium_format',
  medium_index: 'medium_index',
  mood: 'mood',
  mood_alias: 'mood_alias',
  mood_alias_type: 'mood_alias_type',
  mood_annotation: 'mood_annotation',
  orderable_link_type: 'orderable_link_type',
  place: 'place',
  place_alias: 'place_alias',
  place_alias_type: 'place_alias_type',
  place_annotation: 'place_annotation',
  place_attribute: 'place_attribute',
  place_attribute_type: 'place_attribute_type',
  place_attribute_type_allowed_value: 'place_attribute_type_allowed_value',
  place_gid_redirect: 'place_gid_redirect',
  place_meta: 'place_meta',
  place_rating_raw: 'place_rating_raw',
  place_tag: 'place_tag',
  place_tag_raw: 'place_tag_raw',
  place_type: 'place_type',
  recording: 'recording',
  recording_alias: 'recording_alias',
  recording_alias_type: 'recording_alias_type',
  recording_annotation: 'recording_annotation',
  recording_attribute: 'recording_attribute',
  recording_attribute_type: 'recording_attribute_type',
  recording_attribute_type_allowed_value: 'recording_attribute_type_allowed_value',
  recording_first_release_date: 'recording_first_release_date',
  recording_gid_redirect: 'recording_gid_redirect',
  recording_meta: 'recording_meta',
  recording_rating_raw: 'recording_rating_raw',
  recording_tag: 'recording_tag',
  recording_tag_raw: 'recording_tag_raw',
  release: 'release',
  release_alias: 'release_alias',
  release_alias_type: 'release_alias_type',
  release_annotation: 'release_annotation',
  release_attribute: 'release_attribute',
  release_attribute_type: 'release_attribute_type',
  release_attribute_type_allowed_value: 'release_attribute_type_allowed_value',
  release_country: 'release_country',
  release_first_release_date: 'release_first_release_date',
  release_gid_redirect: 'release_gid_redirect',
  release_group: 'release_group',
  release_group_alias: 'release_group_alias',
  release_group_alias_type: 'release_group_alias_type',
  release_group_annotation: 'release_group_annotation',
  release_group_attribute: 'release_group_attribute',
  release_group_attribute_type: 'release_group_attribute_type',
  release_group_attribute_type_allowed_value: 'release_group_attribute_type_allowed_value',
  release_group_gid_redirect: 'release_group_gid_redirect',
  release_group_meta: 'release_group_meta',
  release_group_primary_type: 'release_group_primary_type',
  release_group_rating_raw: 'release_group_rating_raw',
  release_group_secondary_type: 'release_group_secondary_type',
  release_group_secondary_type_join: 'release_group_secondary_type_join',
  release_group_tag: 'release_group_tag',
  release_group_tag_raw: 'release_group_tag_raw',
  release_label: 'release_label',
  release_meta: 'release_meta',
  release_packaging: 'release_packaging',
  release_raw: 'release_raw',
  release_status: 'release_status',
  release_tag: 'release_tag',
  release_tag_raw: 'release_tag_raw',
  release_unknown_country: 'release_unknown_country',
  replication_control: 'replication_control',
  script: 'script',
  series: 'series',
  series_alias: 'series_alias',
  series_alias_type: 'series_alias_type',
  series_annotation: 'series_annotation',
  series_attribute: 'series_attribute',
  series_attribute_type: 'series_attribute_type',
  series_attribute_type_allowed_value: 'series_attribute_type_allowed_value',
  series_gid_redirect: 'series_gid_redirect',
  series_ordering_type: 'series_ordering_type',
  series_tag: 'series_tag',
  series_tag_raw: 'series_tag_raw',
  series_type: 'series_type',
  tag: 'tag',
  tag_relation: 'tag_relation',
  track: 'track',
  track_gid_redirect: 'track_gid_redirect',
  track_raw: 'track_raw',
  unreferenced_row_log: 'unreferenced_row_log',
  url: 'url',
  url_gid_redirect: 'url_gid_redirect',
  vote: 'vote',
  work: 'work',
  work_alias: 'work_alias',
  work_alias_type: 'work_alias_type',
  work_annotation: 'work_annotation',
  work_attribute: 'work_attribute',
  work_attribute_type: 'work_attribute_type',
  work_attribute_type_allowed_value: 'work_attribute_type_allowed_value',
  work_gid_redirect: 'work_gid_redirect',
  work_language: 'work_language',
  work_meta: 'work_meta',
  work_rating_raw: 'work_rating_raw',
  work_tag: 'work_tag',
  work_tag_raw: 'work_tag_raw',
  work_type: 'work_type'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
