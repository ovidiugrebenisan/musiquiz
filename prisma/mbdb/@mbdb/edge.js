
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Code\\musiquiz\\prisma\\mbdb\\@mbdb",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x"
      }
    ],
    "previewFeatures": [
      "fullTextSearch",
      "multiSchema"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_MB",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBwcmV2aWV3RmVhdHVyZXMgPSBbImZ1bGxUZXh0U2VhcmNoIiwgIm11bHRpU2NoZW1hIl0NCiAgb3V0cHV0ID0gIkBtYmRiIg0KICBiaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiLCAicmhlbC1vcGVuc3NsLTEuMC54Il0NCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkxfTUIiKQ0KICBzY2hlbWFzICA9IFsiY292ZXJfYXJ0X2FyY2hpdmUiLCAibXVzaWNicmFpbnoiLCAibXVzaXF1aXoiXQ0KfQ0KDQptb2RlbCBhcnRfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJhcnRfdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgiY292ZXJfYXJ0X2FyY2hpdmUiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGNvdmVyX2FydCB7DQogIGlkICAgICAgICAgICAgICAgICAgQmlnSW50ICAgQGlkDQogIHJlbGVhc2UgICAgICAgICAgICAgSW50DQogIGNvbW1lbnQgICAgICAgICAgICAgU3RyaW5nICAgQGRlZmF1bHQoIiIpDQogIGVkaXQgICAgICAgICAgICAgICAgSW50DQogIG9yZGVyaW5nICAgICAgICAgICAgSW50DQogIGRhdGVfdXBsb2FkZWQgICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBlZGl0c19wZW5kaW5nICAgICAgIEludCAgICAgIEBkZWZhdWx0KDApDQogIG1pbWVfdHlwZSAgICAgICAgICAgU3RyaW5nDQogIGZpbGVzaXplICAgICAgICAgICAgSW50Pw0KICB0aHVtYl8yNTBfZmlsZXNpemUgIEludD8NCiAgdGh1bWJfNTAwX2ZpbGVzaXplICBJbnQ/DQogIHRodW1iXzEyMDBfZmlsZXNpemUgSW50Pw0KDQogIEBAaW5kZXgoW3JlbGVhc2VdLCBtYXA6ICJjb3Zlcl9hcnRfaWR4X3JlbGVhc2UiKQ0KICBAQHNjaGVtYSgiY292ZXJfYXJ0X2FyY2hpdmUiKQ0KfQ0KDQptb2RlbCBjb3Zlcl9hcnRfdHlwZSB7DQogIGlkICAgICAgQmlnSW50DQogIHR5cGVfaWQgSW50DQoNCiAgQEBpZChbaWQsIHR5cGVfaWRdKQ0KICBAQHNjaGVtYSgiY292ZXJfYXJ0X2FyY2hpdmUiKQ0KfQ0KDQptb2RlbCBpbWFnZV90eXBlIHsNCiAgbWltZV90eXBlIFN0cmluZyBAaWQNCiAgc3VmZml4ICAgIFN0cmluZw0KDQogIEBAc2NoZW1hKCJjb3Zlcl9hcnRfYXJjaGl2ZSIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfZ3JvdXBfY292ZXJfYXJ0IHsNCiAgcmVsZWFzZV9ncm91cCBJbnQgQGlkDQogIHJlbGVhc2UgICAgICAgSW50DQoNCiAgQEBzY2hlbWEoImNvdmVyX2FydF9hcmNoaXZlIikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhbHRlcm5hdGl2ZV9tZWRpdW0gew0KICBpZCAgICAgICAgICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbWVkaXVtICAgICAgICAgICAgICBJbnQNCiAgYWx0ZXJuYXRpdmVfcmVsZWFzZSBJbnQNCiAgbmFtZSAgICAgICAgICAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyDQoNCiAgQEBpbmRleChbYWx0ZXJuYXRpdmVfcmVsZWFzZV0sIG1hcDogImFsdGVybmF0aXZlX21lZGl1bV9pZHhfYWx0ZXJuYXRpdmVfcmVsZWFzZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFsdGVybmF0aXZlX21lZGl1bV90cmFjayB7DQogIGFsdGVybmF0aXZlX21lZGl1bSBJbnQNCiAgdHJhY2sgICAgICAgICAgICAgIEludA0KICBhbHRlcm5hdGl2ZV90cmFjayAgSW50DQoNCiAgQEBpZChbYWx0ZXJuYXRpdmVfbWVkaXVtLCB0cmFja10pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgYWx0ZXJuYXRpdmVfcmVsZWFzZSB7DQogIGlkICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBnaWQgICAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJhbHRlcm5hdGl2ZV9yZWxlYXNlX2lkeF9naWQiKSBAZGIuVXVpZA0KICByZWxlYXNlICAgICAgIEludA0KICBuYW1lICAgICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXINCiAgYXJ0aXN0X2NyZWRpdCBJbnQ/DQogIHR5cGUgICAgICAgICAgSW50DQogIGxhbmd1YWdlICAgICAgSW50DQogIHNjcmlwdCAgICAgICAgSW50DQogIGNvbW1lbnQgICAgICAgU3RyaW5nICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KDQogIEBAaW5kZXgoW2FydGlzdF9jcmVkaXRdLCBtYXA6ICJhbHRlcm5hdGl2ZV9yZWxlYXNlX2lkeF9hcnRpc3RfY3JlZGl0IikNCiAgQEBpbmRleChbbGFuZ3VhZ2UsIHNjcmlwdF0sIG1hcDogImFsdGVybmF0aXZlX3JlbGVhc2VfaWR4X2xhbmd1YWdlX3NjcmlwdCIpDQogIEBAaW5kZXgoW25hbWVdLCBtYXA6ICJhbHRlcm5hdGl2ZV9yZWxlYXNlX2lkeF9uYW1lIikNCiAgQEBpbmRleChbcmVsZWFzZV0sIG1hcDogImFsdGVybmF0aXZlX3JlbGVhc2VfaWR4X3JlbGVhc2UiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBhbHRlcm5hdGl2ZV9yZWxlYXNlX3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZw0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhbHRlcm5hdGl2ZV90cmFjayB7DQogIGlkICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXINCiAgYXJ0aXN0X2NyZWRpdCBJbnQ/DQogIHJlZl9jb3VudCAgICAgSW50ICAgICBAZGVmYXVsdCgwKQ0KDQogIEBAaW5kZXgoW2FydGlzdF9jcmVkaXRdLCBtYXA6ICJhbHRlcm5hdGl2ZV90cmFja19pZHhfYXJ0aXN0X2NyZWRpdCIpDQogIEBAaW5kZXgoW25hbWVdLCBtYXA6ICJhbHRlcm5hdGl2ZV90cmFja19pZHhfbmFtZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFubm90YXRpb24gew0KICBpZCAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGVkaXRvciAgICBJbnQNCiAgdGV4dCAgICAgIFN0cmluZz8NCiAgY2hhbmdlbG9nIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpDQogIGNyZWF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFwcGxpY2F0aW9uIHsNCiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgb3duZXIgICAgICAgICAgICAgIEludA0KICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nDQogIG9hdXRoX2lkICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAiYXBwbGljYXRpb25faWR4X29hdXRoX2lkIikNCiAgb2F1dGhfc2VjcmV0ICAgICAgIFN0cmluZw0KICBvYXV0aF9yZWRpcmVjdF91cmkgU3RyaW5nPw0KDQogIEBAaW5kZXgoW293bmVyXSwgbWFwOiAiYXBwbGljYXRpb25faWR4X293bmVyIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhcmVhIHsNCiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZ2lkICAgICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJhcmVhX2lkeF9naWQiKSBAZGIuVXVpZA0KICBuYW1lICAgICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICB0eXBlICAgICAgICAgICAgIEludD8NCiAgZWRpdHNfcGVuZGluZyAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBiZWdpbl9kYXRlX3llYXIgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9tb250aCBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfZGF5ICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV95ZWFyICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfbW9udGggICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX2RheSAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRlZCAgICAgICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCiAgY29tbWVudCAgICAgICAgICBTdHJpbmcgICAgQGRlZmF1bHQoIiIpIEBkYi5WYXJDaGFyKDI1NSkNCg0KICBAQGluZGV4KFtuYW1lXSwgbWFwOiAiYXJlYV9pZHhfbmFtZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgYXJlYV9hbGlhcyB7DQogIGlkICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgYXJlYSAgICAgICAgICAgICAgIEludA0KICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGxvY2FsZSAgICAgICAgICAgICBTdHJpbmc/DQogIGVkaXRzX3BlbmRpbmcgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHR5cGUgICAgICAgICAgICAgICBJbnQ/DQogIHNvcnRfbmFtZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYmVnaW5fZGF0ZV95ZWFyICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9tb250aCAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9kYXkgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfeWVhciAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfbW9udGggICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfZGF5ICAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgcHJpbWFyeV9mb3JfbG9jYWxlIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCiAgZW5kZWQgICAgICAgICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCg0KICBAQGluZGV4KFthcmVhXSwgbWFwOiAiYXJlYV9hbGlhc19pZHhfYXJlYSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFyZWFfYWxpYXNfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJhcmVhX2FsaWFzX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgYXJlYV9hbm5vdGF0aW9uIHsNCiAgYXJlYSAgICAgICBJbnQNCiAgYW5ub3RhdGlvbiBJbnQNCg0KICBAQGlkKFthcmVhLCBhbm5vdGF0aW9uXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhcmVhX2F0dHJpYnV0ZSB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGFyZWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQNCiAgYXJlYV9hdHRyaWJ1dGVfdHlwZSAgICAgICAgICAgICAgIEludA0KICBhcmVhX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWUgSW50Pw0KICBhcmVhX2F0dHJpYnV0ZV90ZXh0ICAgICAgICAgICAgICAgU3RyaW5nPw0KDQogIEBAaW5kZXgoW2FyZWFdLCBtYXA6ICJhcmVhX2F0dHJpYnV0ZV9pZHhfYXJlYSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFyZWFfYXR0cmlidXRlX3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KICBjb21tZW50ICAgICBTdHJpbmcgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcigyNTUpDQogIGZyZWVfdGV4dCAgIEJvb2xlYW4NCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogImFyZWFfYXR0cmlidXRlX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgYXJlYV9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIHsNCiAgaWQgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGFyZWFfYXR0cmlidXRlX3R5cGUgSW50DQogIHZhbHVlICAgICAgICAgICAgICAgU3RyaW5nPw0KICBwYXJlbnQgICAgICAgICAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uICAgICAgICAgU3RyaW5nPw0KICBnaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJhcmVhX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBpbmRleChbYXJlYV9hdHRyaWJ1dGVfdHlwZV0sIG1hcDogImFyZWFfYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZV9pZHhfbmFtZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFyZWFfY29udGFpbm1lbnQgew0KICBkZXNjZW5kYW50IEludA0KICBwYXJlbnQgICAgIEludA0KICBkZXB0aCAgICAgIEludCBAZGIuU21hbGxJbnQNCg0KICBAQGlkKFtkZXNjZW5kYW50LCBwYXJlbnRdKQ0KICBAQGluZGV4KFtwYXJlbnRdLCBtYXA6ICJhcmVhX2NvbnRhaW5tZW50X2lkeF9wYXJlbnQiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBhcmVhX2dpZF9yZWRpcmVjdCB7DQogIGdpZCAgICAgU3RyaW5nICAgIEBpZCBAZGIuVXVpZA0KICBuZXdfaWQgIEludA0KICBjcmVhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpbmRleChbbmV3X2lkXSwgbWFwOiAiYXJlYV9naWRfcmVkaXJlY3RfaWR4X25ld19pZCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFyZWFfdGFnIHsNCiAgYXJlYSAgICAgICAgIEludA0KICB0YWcgICAgICAgICAgSW50DQogIGNvdW50ICAgICAgICBJbnQNCiAgbGFzdF91cGRhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpZChbYXJlYSwgdGFnXSkNCiAgQEBpbmRleChbdGFnXSwgbWFwOiAiYXJlYV90YWdfaWR4X3RhZyIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFyZWFfdGFnX3JhdyB7DQogIGFyZWEgICAgICBJbnQNCiAgZWRpdG9yICAgIEludA0KICB0YWcgICAgICAgSW50DQogIGlzX3Vwdm90ZSBCb29sZWFuIEBkZWZhdWx0KHRydWUpDQoNCiAgQEBpZChbYXJlYSwgZWRpdG9yLCB0YWddKQ0KICBAQGluZGV4KFthcmVhXSwgbWFwOiAiYXJlYV90YWdfcmF3X2lkeF9hcmVhIikNCiAgQEBpbmRleChbZWRpdG9yXSwgbWFwOiAiYXJlYV90YWdfcmF3X2lkeF9lZGl0b3IiKQ0KICBAQGluZGV4KFt0YWddLCBtYXA6ICJhcmVhX3RhZ19yYXdfaWR4X3RhZyIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFyZWFfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJhcmVhX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhcnRpc3Qgew0KICBpZCAgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBnaWQgICAgICAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlKG1hcDogImFydGlzdF9pZHhfZ2lkIikgQGRiLlV1aWQNCiAgbmFtZSAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgc29ydF9uYW1lICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYmVnaW5fZGF0ZV95ZWFyICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfbW9udGggSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX2RheSAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfeWVhciAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX21vbnRoICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9kYXkgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgdHlwZSAgICAgICAgICAgICBJbnQ/DQogIGFyZWEgICAgICAgICAgICAgSW50Pw0KICBnZW5kZXIgICAgICAgICAgIEludD8NCiAgY29tbWVudCAgICAgICAgICBTdHJpbmcgICAgQGRlZmF1bHQoIiIpIEBkYi5WYXJDaGFyKDI1NSkNCiAgZWRpdHNfcGVuZGluZyAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBlbmRlZCAgICAgICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCiAgYmVnaW5fYXJlYSAgICAgICBJbnQ/DQogIGVuZF9hcmVhICAgICAgICAgSW50Pw0KDQogIEBAaW5kZXgoW2FyZWFdLCBtYXA6ICJhcnRpc3RfaWR4X2FyZWEiKQ0KICBAQGluZGV4KFtiZWdpbl9hcmVhXSwgbWFwOiAiYXJ0aXN0X2lkeF9iZWdpbl9hcmVhIikNCiAgQEBpbmRleChbZW5kX2FyZWFdLCBtYXA6ICJhcnRpc3RfaWR4X2VuZF9hcmVhIikNCiAgQEBpbmRleChbbmFtZV0sIG1hcDogImFydGlzdF9pZHhfbmFtZSIpDQogIEBAaW5kZXgoW3NvcnRfbmFtZV0sIG1hcDogImFydGlzdF9pZHhfc29ydF9uYW1lIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhcnRpc3RfYWxpYXMgew0KICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGFydGlzdCAgICAgICAgICAgICBJbnQNCiAgbmFtZSAgICAgICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBsb2NhbGUgICAgICAgICAgICAgU3RyaW5nPw0KICBlZGl0c19wZW5kaW5nICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICB0eXBlICAgICAgICAgICAgICAgSW50Pw0KICBzb3J0X25hbWUgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGJlZ2luX2RhdGVfeWVhciAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfbW9udGggICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfZGF5ICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX3llYXIgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX21vbnRoICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX2RheSAgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIHByaW1hcnlfZm9yX2xvY2FsZSBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQogIGVuZGVkICAgICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBpbmRleChbYXJ0aXN0XSwgbWFwOiAiYXJ0aXN0X2FsaWFzX2lkeF9hcnRpc3QiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBhcnRpc3RfYWxpYXNfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJhcnRpc3RfYWxpYXNfdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBhcnRpc3RfYW5ub3RhdGlvbiB7DQogIGFydGlzdCAgICAgSW50DQogIGFubm90YXRpb24gSW50DQoNCiAgQEBpZChbYXJ0aXN0LCBhbm5vdGF0aW9uXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhcnRpc3RfYXR0cmlidXRlIHsNCiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBhcnRpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQNCiAgYXJ0aXN0X2F0dHJpYnV0ZV90eXBlICAgICAgICAgICAgICAgSW50DQogIGFydGlzdF9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIEludD8NCiAgYXJ0aXN0X2F0dHJpYnV0ZV90ZXh0ICAgICAgICAgICAgICAgU3RyaW5nPw0KDQogIEBAaW5kZXgoW2FydGlzdF0sIG1hcDogImFydGlzdF9hdHRyaWJ1dGVfaWR4X2FydGlzdCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFydGlzdF9hdHRyaWJ1dGVfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIGNvbW1lbnQgICAgIFN0cmluZyAgQGRlZmF1bHQoIiIpIEBkYi5WYXJDaGFyKDI1NSkNCiAgZnJlZV90ZXh0ICAgQm9vbGVhbg0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAiYXJ0aXN0X2F0dHJpYnV0ZV90eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFydGlzdF9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIHsNCiAgaWQgICAgICAgICAgICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgYXJ0aXN0X2F0dHJpYnV0ZV90eXBlIEludA0KICB2YWx1ZSAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICBwYXJlbnQgICAgICAgICAgICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciAgICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiAgICAgICAgICAgU3RyaW5nPw0KICBnaWQgICAgICAgICAgICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogImFydGlzdF9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAaW5kZXgoW2FydGlzdF9hdHRyaWJ1dGVfdHlwZV0sIG1hcDogImFydGlzdF9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlX2lkeF9uYW1lIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhcnRpc3RfY3JlZGl0IHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYXJ0aXN0X2NvdW50ICBJbnQgICAgICAgQGRiLlNtYWxsSW50DQogIHJlZl9jb3VudCAgICAgSW50PyAgICAgIEBkZWZhdWx0KDApDQogIGNyZWF0ZWQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgZWRpdHNfcGVuZGluZyBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZ2lkICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJhcnRpc3RfY3JlZGl0X2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGFydGlzdF9jcmVkaXRfZ2lkX3JlZGlyZWN0IHsNCiAgZ2lkICAgICBTdHJpbmcgICAgQGlkIEBkYi5VdWlkDQogIG5ld19pZCAgSW50DQogIGNyZWF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtuZXdfaWRdLCBtYXA6ICJhcnRpc3RfY3JlZGl0X2dpZF9yZWRpcmVjdF9pZHhfbmV3X2lkIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgYXJ0aXN0X2NyZWRpdF9uYW1lIHsNCiAgYXJ0aXN0X2NyZWRpdCBJbnQNCiAgcG9zaXRpb24gICAgICBJbnQgICAgQGRiLlNtYWxsSW50DQogIGFydGlzdCAgICAgICAgSW50DQogIG5hbWUgICAgICAgICAgU3RyaW5nIEBkYi5WYXJDaGFyDQogIGpvaW5fcGhyYXNlICAgU3RyaW5nIEBkZWZhdWx0KCIiKQ0KDQogIEBAaWQoW2FydGlzdF9jcmVkaXQsIHBvc2l0aW9uXSkNCiAgQEBpbmRleChbYXJ0aXN0XSwgbWFwOiAiYXJ0aXN0X2NyZWRpdF9uYW1lX2lkeF9hcnRpc3QiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBhcnRpc3RfZ2lkX3JlZGlyZWN0IHsNCiAgZ2lkICAgICBTdHJpbmcgICAgQGlkIEBkYi5VdWlkDQogIG5ld19pZCAgSW50DQogIGNyZWF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtuZXdfaWRdLCBtYXA6ICJhcnRpc3RfZ2lkX3JlZGlyZWN0X2lkeF9uZXdfaWQiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGFydGlzdF9pcGkgew0KICBhcnRpc3QgICAgICAgIEludA0KICBpcGkgICAgICAgICAgIFN0cmluZyAgICBAZGIuQ2hhcigxMSkNCiAgZWRpdHNfcGVuZGluZyBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgY3JlYXRlZCAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAaWQoW2FydGlzdCwgaXBpXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhcnRpc3RfaXNuaSB7DQogIGFydGlzdCAgICAgICAgSW50DQogIGlzbmkgICAgICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDE2KQ0KICBlZGl0c19wZW5kaW5nIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBjcmVhdGVkICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpZChbYXJ0aXN0LCBpc25pXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhcnRpc3RfbWV0YSB7DQogIGlkICAgICAgICAgICBJbnQgIEBpZA0KICByYXRpbmcgICAgICAgSW50PyBAZGIuU21hbGxJbnQNCiAgcmF0aW5nX2NvdW50IEludD8NCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGFydGlzdF9yYXRpbmdfcmF3IHsNCiAgYXJ0aXN0IEludA0KICBlZGl0b3IgSW50DQogIHJhdGluZyBJbnQgQGRiLlNtYWxsSW50DQoNCiAgQEBpZChbYXJ0aXN0LCBlZGl0b3JdKQ0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJhcnRpc3RfcmF0aW5nX3Jhd19pZHhfZWRpdG9yIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgaXMgYSBwYXJ0aXRpb24gdGFibGUgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL3BhcnRpdGlvbi10YWJsZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuDQptb2RlbCBhcnRpc3RfcmVsZWFzZSB7DQogIGlzX3RyYWNrX2FydGlzdCAgICBCb29sZWFuDQogIGFydGlzdCAgICAgICAgICAgICBJbnQNCiAgZmlyc3RfcmVsZWFzZV9kYXRlIEludD8NCiAgY2F0YWxvZ19udW1iZXJzICAgIFN0cmluZ1tdDQogIGNvdW50cnlfY29kZSAgICAgICBTdHJpbmc/ICBAZGIuQ2hhcigyKQ0KICBiYXJjb2RlICAgICAgICAgICAgQmlnSW50Pw0KICBzb3J0X2NoYXJhY3RlciAgICAgU3RyaW5nICAgQGRiLkNoYXIoMSkNCiAgcmVsZWFzZSAgICAgICAgICAgIEludA0KDQogIEBAaWdub3JlDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGlzIGEgcGFydGl0aW9uIHRhYmxlIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9wYXJ0aXRpb24tdGFibGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lg0KbW9kZWwgYXJ0aXN0X3JlbGVhc2VfZ3JvdXAgew0KICBpc190cmFja19hcnRpc3QgICAgQm9vbGVhbg0KICBhcnRpc3QgICAgICAgICAgICAgSW50DQogIHVub2ZmaWNpYWwgICAgICAgICBCb29sZWFuDQogIHByaW1hcnlfdHlwZSAgICAgICBJbnQ/ICAgIEBkYi5TbWFsbEludA0KICBzZWNvbmRhcnlfdHlwZXMgICAgSW50W10gICBAZGIuU21hbGxJbnQNCiAgZmlyc3RfcmVsZWFzZV9kYXRlIEludD8NCiAgc29ydF9jaGFyYWN0ZXIgICAgIFN0cmluZyAgQGRiLkNoYXIoMSkNCiAgcmVsZWFzZV9ncm91cCAgICAgIEludA0KDQogIEBAaWdub3JlDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuDQptb2RlbCBhcnRpc3RfcmVsZWFzZV9ncm91cF9wZW5kaW5nX3VwZGF0ZSB7DQogIHJlbGVhc2VfZ3JvdXAgSW50DQoNCiAgQEBpbmRleChbcmVsZWFzZV9ncm91cF0sIG1hcDogImFydGlzdF9yZWxlYXNlX2dyb3VwX3BlbmRpbmdfdXBkYXRlX2lkeF9yZWxlYXNlX2dyb3VwIiwgdHlwZTogSGFzaCkNCiAgQEBpZ25vcmUNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4NCm1vZGVsIGFydGlzdF9yZWxlYXNlX3BlbmRpbmdfdXBkYXRlIHsNCiAgcmVsZWFzZSBJbnQNCg0KICBAQGluZGV4KFtyZWxlYXNlXSwgbWFwOiAiYXJ0aXN0X3JlbGVhc2VfcGVuZGluZ191cGRhdGVfaWR4X3JlbGVhc2UiLCB0eXBlOiBIYXNoKQ0KICBAQGlnbm9yZQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBhcnRpc3RfdGFnIHsNCiAgYXJ0aXN0ICAgICAgIEludA0KICB0YWcgICAgICAgICAgSW50DQogIGNvdW50ICAgICAgICBJbnQNCiAgbGFzdF91cGRhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpZChbYXJ0aXN0LCB0YWddKQ0KICBAQGluZGV4KFt0YWddLCBtYXA6ICJhcnRpc3RfdGFnX2lkeF90YWciKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBhcnRpc3RfdGFnX3JhdyB7DQogIGFydGlzdCAgICBJbnQNCiAgZWRpdG9yICAgIEludA0KICB0YWcgICAgICAgSW50DQogIGlzX3Vwdm90ZSBCb29sZWFuIEBkZWZhdWx0KHRydWUpDQoNCiAgQEBpZChbYXJ0aXN0LCBlZGl0b3IsIHRhZ10pDQogIEBAaW5kZXgoW2VkaXRvcl0sIG1hcDogImFydGlzdF90YWdfcmF3X2lkeF9lZGl0b3IiKQ0KICBAQGluZGV4KFt0YWddLCBtYXA6ICJhcnRpc3RfdGFnX3Jhd19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgYXJ0aXN0X3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAiYXJ0aXN0X3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhdXRvZWRpdG9yX2VsZWN0aW9uIHsNCiAgaWQgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBjYW5kaWRhdGUgICAgSW50DQogIHByb3Bvc2VyICAgICBJbnQNCiAgc2Vjb25kZXJfMSAgIEludD8NCiAgc2Vjb25kZXJfMiAgIEludD8NCiAgc3RhdHVzICAgICAgIEludCAgICAgICBAZGVmYXVsdCgxKQ0KICB5ZXNfdm90ZXMgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIG5vX3ZvdGVzICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgcHJvcG9zZV90aW1lIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIG9wZW5fdGltZSAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcHR6KDYpDQogIGNsb3NlX3RpbWUgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBhdXRvZWRpdG9yX2VsZWN0aW9uX3ZvdGUgew0KICBpZCAgICAgICAgICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGF1dG9lZGl0b3JfZWxlY3Rpb24gSW50DQogIHZvdGVyICAgICAgICAgICAgICAgSW50DQogIHZvdGUgICAgICAgICAgICAgICAgSW50DQogIHZvdGVfdGltZSAgICAgICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGNkdG9jIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGRpc2NpZCAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlKG1hcDogImNkdG9jX2lkeF9kaXNjaWQiKSBAZGIuQ2hhcigyOCkNCiAgZnJlZWRiX2lkICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDgpDQogIHRyYWNrX2NvdW50ICAgIEludA0KICBsZWFkb3V0X29mZnNldCBJbnQNCiAgdHJhY2tfb2Zmc2V0ICAgSW50W10NCiAgY3JlYXRlZCAgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtmcmVlZGJfaWRdLCBtYXA6ICJjZHRvY19pZHhfZnJlZWRiX2lkIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgY2R0b2NfcmF3IHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHJlbGVhc2UgICAgICAgIEludA0KICBkaXNjaWQgICAgICAgICBTdHJpbmcgQGRiLkNoYXIoMjgpDQogIHRyYWNrX2NvdW50ICAgIEludA0KICBsZWFkb3V0X29mZnNldCBJbnQNCiAgdHJhY2tfb2Zmc2V0ICAgSW50W10NCg0KICBAQHVuaXF1ZShbdHJhY2tfY291bnQsIGxlYWRvdXRfb2Zmc2V0LCB0cmFja19vZmZzZXRdLCBtYXA6ICJjZHRvY19yYXdfdG9jIikNCiAgQEBpbmRleChbZGlzY2lkXSwgbWFwOiAiY2R0b2NfcmF3X2Rpc2NpZCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGNvdW50cnlfYXJlYSB7DQogIGFyZWEgSW50IEBpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGRlbGV0ZWRfZW50aXR5IHsNCiAgZ2lkICAgICAgICBTdHJpbmcgICBAaWQgQGRiLlV1aWQNCiAgZGF0YSAgICAgICBKc29uDQogIGRlbGV0ZWRfYXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXQgew0KICBpZCAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZWRpdG9yICAgICAgSW50DQogIHR5cGUgICAgICAgIEludCAgICAgICBAZGIuU21hbGxJbnQNCiAgc3RhdHVzICAgICAgSW50ICAgICAgIEBkYi5TbWFsbEludA0KICBhdXRvZWRpdCAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkgQGRiLlNtYWxsSW50DQogIG9wZW5fdGltZSAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGNsb3NlX3RpbWUgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wdHooNikNCiAgZXhwaXJlX3RpbWUgRGF0ZVRpbWUgIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsYW5ndWFnZSAgICBJbnQ/DQogIHF1YWxpdHkgICAgIEludCAgICAgICBAZGVmYXVsdCgxKSBAZGIuU21hbGxJbnQNCg0KICBAQGluZGV4KFtjbG9zZV90aW1lXSwgbWFwOiAiZWRpdF9pZHhfY2xvc2VfdGltZSIsIHR5cGU6IEJyaW4pDQogIEBAaW5kZXgoW2VkaXRvciwgaWQoc29ydDogRGVzYyldLCBtYXA6ICJlZGl0X2lkeF9lZGl0b3JfaWRfZGVzYyIpDQogIEBAaW5kZXgoW2VkaXRvciwgb3Blbl90aW1lXSwgbWFwOiAiZWRpdF9pZHhfZWRpdG9yX29wZW5fdGltZSIpDQogIEBAaW5kZXgoW2V4cGlyZV90aW1lXSwgbWFwOiAiZWRpdF9pZHhfZXhwaXJlX3RpbWUiLCB0eXBlOiBCcmluKQ0KICBAQGluZGV4KFtvcGVuX3RpbWVdLCBtYXA6ICJlZGl0X2lkeF9vcGVuX3RpbWUiLCB0eXBlOiBCcmluKQ0KICBAQGluZGV4KFt0eXBlLCBpZF0sIG1hcDogImVkaXRfaWR4X3R5cGVfaWQiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0X2FyZWEgew0KICBlZGl0IEludA0KICBhcmVhIEludA0KDQogIEBAaWQoW2VkaXQsIGFyZWFdKQ0KICBAQGluZGV4KFthcmVhXSwgbWFwOiAiZWRpdF9hcmVhX2lkeCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXRfYXJ0aXN0IHsNCiAgZWRpdCAgIEludA0KICBhcnRpc3QgSW50DQogIHN0YXR1cyBJbnQgQGRiLlNtYWxsSW50DQoNCiAgQEBpZChbZWRpdCwgYXJ0aXN0XSkNCiAgQEBpbmRleChbYXJ0aXN0XSwgbWFwOiAiZWRpdF9hcnRpc3RfaWR4IikNCiAgQEBpbmRleChbc3RhdHVzXSwgbWFwOiAiZWRpdF9hcnRpc3RfaWR4X3N0YXR1cyIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGVkaXRfZGF0YSB7DQogIGVkaXQgSW50ICBAaWQNCiAgZGF0YSBKc29uDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdF9ldmVudCB7DQogIGVkaXQgIEludA0KICBldmVudCBJbnQNCg0KICBAQGlkKFtlZGl0LCBldmVudF0pDQogIEBAaW5kZXgoW2V2ZW50XSwgbWFwOiAiZWRpdF9ldmVudF9pZHgiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0X2dlbnJlIHsNCiAgZWRpdCAgSW50DQogIGdlbnJlIEludA0KDQogIEBAaWQoW2VkaXQsIGdlbnJlXSkNCiAgQEBpbmRleChbZ2VucmVdLCBtYXA6ICJlZGl0X2dlbnJlX2lkeCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXRfaW5zdHJ1bWVudCB7DQogIGVkaXQgICAgICAgSW50DQogIGluc3RydW1lbnQgSW50DQoNCiAgQEBpZChbZWRpdCwgaW5zdHJ1bWVudF0pDQogIEBAaW5kZXgoW2luc3RydW1lbnRdLCBtYXA6ICJlZGl0X2luc3RydW1lbnRfaWR4IikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdF9sYWJlbCB7DQogIGVkaXQgICBJbnQNCiAgbGFiZWwgIEludA0KICBzdGF0dXMgSW50IEBkYi5TbWFsbEludA0KDQogIEBAaWQoW2VkaXQsIGxhYmVsXSkNCiAgQEBpbmRleChbbGFiZWxdLCBtYXA6ICJlZGl0X2xhYmVsX2lkeCIpDQogIEBAaW5kZXgoW3N0YXR1c10sIG1hcDogImVkaXRfbGFiZWxfaWR4X3N0YXR1cyIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXRfbW9vZCB7DQogIGVkaXQgSW50DQogIG1vb2QgSW50DQoNCiAgQEBpZChbZWRpdCwgbW9vZF0pDQogIEBAaW5kZXgoW21vb2RdLCBtYXA6ICJlZGl0X21vb2RfaWR4IikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdF9ub3RlIHsNCiAgaWQgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBlZGl0b3IgICAgSW50DQogIGVkaXQgICAgICBJbnQNCiAgdGV4dCAgICAgIFN0cmluZw0KICBwb3N0X3RpbWUgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtlZGl0XSwgbWFwOiAiZWRpdF9ub3RlX2lkeF9lZGl0IikNCiAgQEBpbmRleChbZWRpdG9yXSwgbWFwOiAiZWRpdF9ub3RlX2lkeF9lZGl0b3IiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0X25vdGVfY2hhbmdlIHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBzdGF0dXMgICAgICAgIGVkaXRfbm90ZV9zdGF0dXM/DQogIGVkaXRfbm90ZSAgICAgSW50DQogIGNoYW5nZV9lZGl0b3IgSW50DQogIGNoYW5nZV90aW1lICAgRGF0ZVRpbWU/ICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBvbGRfbm90ZSAgICAgIFN0cmluZw0KICBuZXdfbm90ZSAgICAgIFN0cmluZw0KICByZWFzb24gICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAaW5kZXgoW2VkaXRfbm90ZV0sIG1hcDogImVkaXRfbm90ZV9jaGFuZ2VfaWR4X2VkaXRfbm90ZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXRfbm90ZV9yZWNpcGllbnQgew0KICByZWNpcGllbnQgSW50DQogIGVkaXRfbm90ZSBJbnQNCg0KICBAQGlkKFtyZWNpcGllbnQsIGVkaXRfbm90ZV0pDQogIEBAaW5kZXgoW3JlY2lwaWVudF0sIG1hcDogImVkaXRfbm90ZV9yZWNpcGllbnRfaWR4X3JlY2lwaWVudCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXRfcGxhY2Ugew0KICBlZGl0ICBJbnQNCiAgcGxhY2UgSW50DQoNCiAgQEBpZChbZWRpdCwgcGxhY2VdKQ0KICBAQGluZGV4KFtwbGFjZV0sIG1hcDogImVkaXRfcGxhY2VfaWR4IikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdF9yZWNvcmRpbmcgew0KICBlZGl0ICAgICAgSW50DQogIHJlY29yZGluZyBJbnQNCg0KICBAQGlkKFtlZGl0LCByZWNvcmRpbmddKQ0KICBAQGluZGV4KFtyZWNvcmRpbmddLCBtYXA6ICJlZGl0X3JlY29yZGluZ19pZHgiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0X3JlbGVhc2Ugew0KICBlZGl0ICAgIEludA0KICByZWxlYXNlIEludA0KDQogIEBAaWQoW2VkaXQsIHJlbGVhc2VdKQ0KICBAQGluZGV4KFtyZWxlYXNlXSwgbWFwOiAiZWRpdF9yZWxlYXNlX2lkeCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXRfcmVsZWFzZV9ncm91cCB7DQogIGVkaXQgICAgICAgICAgSW50DQogIHJlbGVhc2VfZ3JvdXAgSW50DQoNCiAgQEBpZChbZWRpdCwgcmVsZWFzZV9ncm91cF0pDQogIEBAaW5kZXgoW3JlbGVhc2VfZ3JvdXBdLCBtYXA6ICJlZGl0X3JlbGVhc2VfZ3JvdXBfaWR4IikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdF9zZXJpZXMgew0KICBlZGl0ICAgSW50DQogIHNlcmllcyBJbnQNCg0KICBAQGlkKFtlZGl0LCBzZXJpZXNdKQ0KICBAQGluZGV4KFtzZXJpZXNdLCBtYXA6ICJlZGl0X3Nlcmllc19pZHgiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0X3VybCB7DQogIGVkaXQgSW50DQogIHVybCAgSW50DQoNCiAgQEBpZChbZWRpdCwgdXJsXSkNCiAgQEBpbmRleChbdXJsXSwgbWFwOiAiZWRpdF91cmxfaWR4IikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdF93b3JrIHsNCiAgZWRpdCBJbnQNCiAgd29yayBJbnQNCg0KICBAQGlkKFtlZGl0LCB3b3JrXSkNCiAgQEBpbmRleChbd29ya10sIG1hcDogImVkaXRfd29ya19pZHgiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBlZGl0b3Igew0KICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNjQpDQogIHByaXZzICAgICAgICAgICAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMCkNCiAgZW1haWwgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig2NCkNCiAgd2Vic2l0ZSAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpDQogIGJpbyAgICAgICAgICAgICAgICBTdHJpbmc/DQogIG1lbWJlcl9zaW5jZSAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBlbWFpbF9jb25maXJtX2RhdGUgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsYXN0X2xvZ2luX2RhdGUgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGFzdF91cGRhdGVkICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGJpcnRoX2RhdGUgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUNCiAgZ2VuZGVyICAgICAgICAgICAgIEludD8NCiAgYXJlYSAgICAgICAgICAgICAgIEludD8NCiAgcGFzc3dvcmQgICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigxMjgpDQogIGhhMSAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLkNoYXIoMzIpDQogIGRlbGV0ZWQgICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdG9yX2NvbGxlY3Rpb24gew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJlZGl0b3JfY29sbGVjdGlvbl9pZHhfZ2lkIikgQGRiLlV1aWQNCiAgZWRpdG9yICAgICAgSW50DQogIG5hbWUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXINCiAgcHVibGljICAgICAgQm9vbGVhbiBAZGVmYXVsdChmYWxzZSkNCiAgZGVzY3JpcHRpb24gU3RyaW5nICBAZGVmYXVsdCgiIikNCiAgdHlwZSAgICAgICAgSW50DQoNCiAgQEBpbmRleChbZWRpdG9yXSwgbWFwOiAiZWRpdG9yX2NvbGxlY3Rpb25faWR4X2VkaXRvciIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgZWRpdG9yX2NvbGxlY3Rpb25fYXJlYSB7DQogIGNvbGxlY3Rpb24gSW50DQogIGFyZWEgICAgICAgSW50DQogIGFkZGVkICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgcG9zaXRpb24gICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgY29tbWVudCAgICBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEBpZChbY29sbGVjdGlvbiwgYXJlYV0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgZWRpdG9yX2NvbGxlY3Rpb25fYXJ0aXN0IHsNCiAgY29sbGVjdGlvbiBJbnQNCiAgYXJ0aXN0ICAgICBJbnQNCiAgYWRkZWQgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBwb3NpdGlvbiAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBjb21tZW50ICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQGlkKFtjb2xsZWN0aW9uLCBhcnRpc3RdKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0b3JfY29sbGVjdGlvbl9jb2xsYWJvcmF0b3Igew0KICBjb2xsZWN0aW9uIEludA0KICBlZGl0b3IgICAgIEludA0KDQogIEBAaWQoW2NvbGxlY3Rpb24sIGVkaXRvcl0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgZWRpdG9yX2NvbGxlY3Rpb25fZGVsZXRlZF9lbnRpdHkgew0KICBjb2xsZWN0aW9uIEludA0KICBnaWQgICAgICAgIFN0cmluZyAgICBAZGIuVXVpZA0KICBhZGRlZCAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHBvc2l0aW9uICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGNvbW1lbnQgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAaWQoW2NvbGxlY3Rpb24sIGdpZF0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgZWRpdG9yX2NvbGxlY3Rpb25fZXZlbnQgew0KICBjb2xsZWN0aW9uIEludA0KICBldmVudCAgICAgIEludA0KICBhZGRlZCAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHBvc2l0aW9uICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGNvbW1lbnQgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAaWQoW2NvbGxlY3Rpb24sIGV2ZW50XSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdG9yX2NvbGxlY3Rpb25fZ2lkX3JlZGlyZWN0IHsNCiAgZ2lkICAgICBTdHJpbmcgICAgQGlkIEBkYi5VdWlkDQogIG5ld19pZCAgSW50DQogIGNyZWF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtuZXdfaWRdLCBtYXA6ICJlZGl0b3JfY29sbGVjdGlvbl9naWRfcmVkaXJlY3RfaWR4X25ld19pZCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgZWRpdG9yX2NvbGxlY3Rpb25faW5zdHJ1bWVudCB7DQogIGNvbGxlY3Rpb24gSW50DQogIGluc3RydW1lbnQgSW50DQogIGFkZGVkICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgcG9zaXRpb24gICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgY29tbWVudCAgICBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEBpZChbY29sbGVjdGlvbiwgaW5zdHJ1bWVudF0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgZWRpdG9yX2NvbGxlY3Rpb25fbGFiZWwgew0KICBjb2xsZWN0aW9uIEludA0KICBsYWJlbCAgICAgIEludA0KICBhZGRlZCAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHBvc2l0aW9uICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGNvbW1lbnQgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAaWQoW2NvbGxlY3Rpb24sIGxhYmVsXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBlZGl0b3JfY29sbGVjdGlvbl9wbGFjZSB7DQogIGNvbGxlY3Rpb24gSW50DQogIHBsYWNlICAgICAgSW50DQogIGFkZGVkICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgcG9zaXRpb24gICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgY29tbWVudCAgICBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEBpZChbY29sbGVjdGlvbiwgcGxhY2VdKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGVkaXRvcl9jb2xsZWN0aW9uX3JlY29yZGluZyB7DQogIGNvbGxlY3Rpb24gSW50DQogIHJlY29yZGluZyAgSW50DQogIGFkZGVkICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgcG9zaXRpb24gICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgY29tbWVudCAgICBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEBpZChbY29sbGVjdGlvbiwgcmVjb3JkaW5nXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBlZGl0b3JfY29sbGVjdGlvbl9yZWxlYXNlIHsNCiAgY29sbGVjdGlvbiBJbnQNCiAgcmVsZWFzZSAgICBJbnQNCiAgYWRkZWQgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBwb3NpdGlvbiAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBjb21tZW50ICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQGlkKFtjb2xsZWN0aW9uLCByZWxlYXNlXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBlZGl0b3JfY29sbGVjdGlvbl9yZWxlYXNlX2dyb3VwIHsNCiAgY29sbGVjdGlvbiAgICBJbnQNCiAgcmVsZWFzZV9ncm91cCBJbnQNCiAgYWRkZWQgICAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBwb3NpdGlvbiAgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBjb21tZW50ICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQGlkKFtjb2xsZWN0aW9uLCByZWxlYXNlX2dyb3VwXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBlZGl0b3JfY29sbGVjdGlvbl9zZXJpZXMgew0KICBjb2xsZWN0aW9uIEludA0KICBzZXJpZXMgICAgIEludA0KICBhZGRlZCAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHBvc2l0aW9uICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGNvbW1lbnQgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAaWQoW2NvbGxlY3Rpb24sIHNlcmllc10pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXRvcl9jb2xsZWN0aW9uX3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KICBlbnRpdHlfdHlwZSBTdHJpbmcgIEBkYi5WYXJDaGFyKDUwKQ0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAiZWRpdG9yX2NvbGxlY3Rpb25fdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGVkaXRvcl9jb2xsZWN0aW9uX3dvcmsgew0KICBjb2xsZWN0aW9uIEludA0KICB3b3JrICAgICAgIEludA0KICBhZGRlZCAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHBvc2l0aW9uICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGNvbW1lbnQgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAaWQoW2NvbGxlY3Rpb24sIHdvcmtdKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0b3JfbGFuZ3VhZ2Ugew0KICBlZGl0b3IgICBJbnQNCiAgbGFuZ3VhZ2UgSW50DQogIGZsdWVuY3kgIGZsdWVuY3kNCg0KICBAQGlkKFtlZGl0b3IsIGxhbmd1YWdlXSkNCiAgQEBpbmRleChbbGFuZ3VhZ2VdLCBtYXA6ICJlZGl0b3JfbGFuZ3VhZ2VfaWR4X2xhbmd1YWdlIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBlZGl0b3Jfb2F1dGhfdG9rZW4gew0KICBpZCAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBlZGl0b3IgICAgICAgICAgICAgICAgSW50DQogIGFwcGxpY2F0aW9uICAgICAgICAgICBJbnQNCiAgYXV0aG9yaXphdGlvbl9jb2RlICAgIFN0cmluZz8NCiAgcmVmcmVzaF90b2tlbiAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZShtYXA6ICJlZGl0b3Jfb2F1dGhfdG9rZW5faWR4X3JlZnJlc2hfdG9rZW4iKQ0KICBhY2Nlc3NfdG9rZW4gICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICBAdW5pcXVlKG1hcDogImVkaXRvcl9vYXV0aF90b2tlbl9pZHhfYWNjZXNzX3Rva2VuIikNCiAgZXhwaXJlX3RpbWUgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHNjb3BlICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApDQogIGdyYW50ZWQgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgY29kZV9jaGFsbGVuZ2UgICAgICAgIFN0cmluZz8NCiAgY29kZV9jaGFsbGVuZ2VfbWV0aG9kIG9hdXRoX2NvZGVfY2hhbGxlbmdlX21ldGhvZD8NCg0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJlZGl0b3Jfb2F1dGhfdG9rZW5faWR4X2VkaXRvciIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXRvcl9wcmVmZXJlbmNlIHsNCiAgaWQgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBlZGl0b3IgSW50DQogIG5hbWUgICBTdHJpbmcgQGRiLlZhckNoYXIoNTApDQogIHZhbHVlICBTdHJpbmcgQGRiLlZhckNoYXIoMTAwKQ0KDQogIEBAdW5pcXVlKFtlZGl0b3IsIG5hbWVdLCBtYXA6ICJlZGl0b3JfcHJlZmVyZW5jZV9pZHhfZWRpdG9yX25hbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0b3Jfc3Vic2NyaWJlX2FydGlzdCB7DQogIGlkICAgICAgICAgICAgIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBlZGl0b3IgICAgICAgICBJbnQNCiAgYXJ0aXN0ICAgICAgICAgSW50DQogIGxhc3RfZWRpdF9zZW50IEludA0KDQogIEBAdW5pcXVlKFtlZGl0b3IsIGFydGlzdF0sIG1hcDogImVkaXRvcl9zdWJzY3JpYmVfYXJ0aXN0X2lkeF91bmlxIikNCiAgQEBpbmRleChbYXJ0aXN0XSwgbWFwOiAiZWRpdG9yX3N1YnNjcmliZV9hcnRpc3RfaWR4X2FydGlzdCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGVkaXRvcl9zdWJzY3JpYmVfYXJ0aXN0X2RlbGV0ZWQgew0KICBlZGl0b3IgICAgIEludA0KICBnaWQgICAgICAgIFN0cmluZyBAZGIuVXVpZA0KICBkZWxldGVkX2J5IEludA0KDQogIEBAaWQoW2VkaXRvciwgZ2lkXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdG9yX3N1YnNjcmliZV9jb2xsZWN0aW9uIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBlZGl0b3IgICAgICAgICBJbnQNCiAgY29sbGVjdGlvbiAgICAgSW50DQogIGxhc3RfZWRpdF9zZW50IEludA0KICBhdmFpbGFibGUgICAgICBCb29sZWFuIEBkZWZhdWx0KHRydWUpDQogIGxhc3Rfc2Vlbl9uYW1lIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQ0KDQogIEBAdW5pcXVlKFtlZGl0b3IsIGNvbGxlY3Rpb25dLCBtYXA6ICJlZGl0b3Jfc3Vic2NyaWJlX2NvbGxlY3Rpb25faWR4X3VuaXEiKQ0KICBAQGluZGV4KFtjb2xsZWN0aW9uXSwgbWFwOiAiZWRpdG9yX3N1YnNjcmliZV9jb2xsZWN0aW9uX2lkeF9jb2xsZWN0aW9uIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdG9yX3N1YnNjcmliZV9lZGl0b3Igew0KICBpZCAgICAgICAgICAgICAgICBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZWRpdG9yICAgICAgICAgICAgSW50DQogIHN1YnNjcmliZWRfZWRpdG9yIEludA0KICBsYXN0X2VkaXRfc2VudCAgICBJbnQNCg0KICBAQHVuaXF1ZShbZWRpdG9yLCBzdWJzY3JpYmVkX2VkaXRvcl0sIG1hcDogImVkaXRvcl9zdWJzY3JpYmVfZWRpdG9yX2lkeF91bmlxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdG9yX3N1YnNjcmliZV9sYWJlbCB7DQogIGlkICAgICAgICAgICAgIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBlZGl0b3IgICAgICAgICBJbnQNCiAgbGFiZWwgICAgICAgICAgSW50DQogIGxhc3RfZWRpdF9zZW50IEludA0KDQogIEBAdW5pcXVlKFtlZGl0b3IsIGxhYmVsXSwgbWFwOiAiZWRpdG9yX3N1YnNjcmliZV9sYWJlbF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2xhYmVsXSwgbWFwOiAiZWRpdG9yX3N1YnNjcmliZV9sYWJlbF9pZHhfbGFiZWwiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0b3Jfc3Vic2NyaWJlX2xhYmVsX2RlbGV0ZWQgew0KICBlZGl0b3IgICAgIEludA0KICBnaWQgICAgICAgIFN0cmluZyBAZGIuVXVpZA0KICBkZWxldGVkX2J5IEludA0KDQogIEBAaWQoW2VkaXRvciwgZ2lkXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZWRpdG9yX3N1YnNjcmliZV9zZXJpZXMgew0KICBpZCAgICAgICAgICAgICBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZWRpdG9yICAgICAgICAgSW50DQogIHNlcmllcyAgICAgICAgIEludA0KICBsYXN0X2VkaXRfc2VudCBJbnQNCg0KICBAQHVuaXF1ZShbZWRpdG9yLCBzZXJpZXNdLCBtYXA6ICJlZGl0b3Jfc3Vic2NyaWJlX3Nlcmllc19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW3Nlcmllc10sIG1hcDogImVkaXRvcl9zdWJzY3JpYmVfc2VyaWVzX2lkeF9zZXJpZXMiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBlZGl0b3Jfc3Vic2NyaWJlX3Nlcmllc19kZWxldGVkIHsNCiAgZWRpdG9yICAgICBJbnQNCiAgZ2lkICAgICAgICBTdHJpbmcgQGRiLlV1aWQNCiAgZGVsZXRlZF9ieSBJbnQNCg0KICBAQGlkKFtlZGl0b3IsIGdpZF0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgZXZlbnQgew0KICBpZCAgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBnaWQgICAgICAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlKG1hcDogImV2ZW50X2lkeF9naWQiKSBAZGIuVXVpZA0KICBuYW1lICAgICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBiZWdpbl9kYXRlX3llYXIgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9tb250aCBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfZGF5ICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV95ZWFyICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfbW9udGggICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX2RheSAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICB0aW1lICAgICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZSg2KQ0KICB0eXBlICAgICAgICAgICAgIEludD8NCiAgY2FuY2VsbGVkICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQogIHNldGxpc3QgICAgICAgICAgU3RyaW5nPw0KICBjb21tZW50ICAgICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBlZGl0c19wZW5kaW5nICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGVuZGVkICAgICAgICAgICAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQ0KDQogIEBAaW5kZXgoW25hbWVdLCBtYXA6ICJldmVudF9pZHhfbmFtZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgZXZlbnRfYWxpYXMgew0KICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGV2ZW50ICAgICAgICAgICAgICBJbnQNCiAgbmFtZSAgICAgICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBsb2NhbGUgICAgICAgICAgICAgU3RyaW5nPw0KICBlZGl0c19wZW5kaW5nICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICB0eXBlICAgICAgICAgICAgICAgSW50Pw0KICBzb3J0X25hbWUgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGJlZ2luX2RhdGVfeWVhciAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfbW9udGggICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfZGF5ICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX3llYXIgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX21vbnRoICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX2RheSAgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIHByaW1hcnlfZm9yX2xvY2FsZSBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQogIGVuZGVkICAgICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBpbmRleChbZXZlbnRdLCBtYXA6ICJldmVudF9hbGlhc19pZHhfZXZlbnQiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBldmVudF9hbGlhc190eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcNCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogImV2ZW50X2FsaWFzX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZXZlbnRfYW5ub3RhdGlvbiB7DQogIGV2ZW50ICAgICAgSW50DQogIGFubm90YXRpb24gSW50DQoNCiAgQEBpZChbZXZlbnQsIGFubm90YXRpb25dKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGV2ZW50X2F0dHJpYnV0ZSB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBldmVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludA0KICBldmVudF9hdHRyaWJ1dGVfdHlwZSAgICAgICAgICAgICAgIEludA0KICBldmVudF9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIEludD8NCiAgZXZlbnRfYXR0cmlidXRlX3RleHQgICAgICAgICAgICAgICBTdHJpbmc/DQoNCiAgQEBpbmRleChbZXZlbnRdLCBtYXA6ICJldmVudF9hdHRyaWJ1dGVfaWR4X2V2ZW50IikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZXZlbnRfYXR0cmlidXRlX3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KICBjb21tZW50ICAgICBTdHJpbmcgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcigyNTUpDQogIGZyZWVfdGV4dCAgIEJvb2xlYW4NCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogImV2ZW50X2F0dHJpYnV0ZV90eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGV2ZW50X2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWUgew0KICBpZCAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGV2ZW50X2F0dHJpYnV0ZV90eXBlIEludA0KICB2YWx1ZSAgICAgICAgICAgICAgICBTdHJpbmc/DQogIHBhcmVudCAgICAgICAgICAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiAgICAgICAgICBTdHJpbmc/DQogIGdpZCAgICAgICAgICAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJldmVudF9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAaW5kZXgoW2V2ZW50X2F0dHJpYnV0ZV90eXBlXSwgbWFwOiAiZXZlbnRfYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZV9pZHhfbmFtZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGV2ZW50X2dpZF9yZWRpcmVjdCB7DQogIGdpZCAgICAgU3RyaW5nICAgIEBpZCBAZGIuVXVpZA0KICBuZXdfaWQgIEludA0KICBjcmVhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpbmRleChbbmV3X2lkXSwgbWFwOiAiZXZlbnRfZ2lkX3JlZGlyZWN0X2lkeF9uZXdfaWQiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGV2ZW50X21ldGEgew0KICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgIEBpZA0KICByYXRpbmcgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgIEBkYi5TbWFsbEludA0KICByYXRpbmdfY291bnQgICAgICAgSW50Pw0KICBldmVudF9hcnRfcHJlc2VuY2UgZXZlbnRfYXJ0X3ByZXNlbmNlIEBkZWZhdWx0KGFic2VudCkNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGV2ZW50X3JhdGluZ19yYXcgew0KICBldmVudCAgSW50DQogIGVkaXRvciBJbnQNCiAgcmF0aW5nIEludCBAZGIuU21hbGxJbnQNCg0KICBAQGlkKFtldmVudCwgZWRpdG9yXSkNCiAgQEBpbmRleChbZWRpdG9yXSwgbWFwOiAiZXZlbnRfcmF0aW5nX3Jhd19pZHhfZWRpdG9yIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZXZlbnRfdGFnIHsNCiAgZXZlbnQgICAgICAgIEludA0KICB0YWcgICAgICAgICAgSW50DQogIGNvdW50ICAgICAgICBJbnQNCiAgbGFzdF91cGRhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpZChbZXZlbnQsIHRhZ10pDQogIEBAaW5kZXgoW3RhZ10sIG1hcDogImV2ZW50X3RhZ19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZXZlbnRfdGFnX3JhdyB7DQogIGV2ZW50ICAgICBJbnQNCiAgZWRpdG9yICAgIEludA0KICB0YWcgICAgICAgSW50DQogIGlzX3Vwdm90ZSBCb29sZWFuIEBkZWZhdWx0KHRydWUpDQoNCiAgQEBpZChbZXZlbnQsIGVkaXRvciwgdGFnXSkNCiAgQEBpbmRleChbZWRpdG9yXSwgbWFwOiAiZXZlbnRfdGFnX3Jhd19pZHhfZWRpdG9yIikNCiAgQEBpbmRleChbdGFnXSwgbWFwOiAiZXZlbnRfdGFnX3Jhd19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZXZlbnRfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJldmVudF90eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGdlbmRlciB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJnZW5kZXJfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBnZW5yZSB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGdpZCAgICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUobWFwOiAiZ2VucmVfaWR4X2dpZCIpIEBkYi5VdWlkDQogIG5hbWUgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGNvbW1lbnQgICAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcigyNTUpDQogIGVkaXRzX3BlbmRpbmcgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGdlbnJlX2FsaWFzIHsNCiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBnZW5yZSAgICAgICAgICAgICAgSW50DQogIG5hbWUgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgbG9jYWxlICAgICAgICAgICAgIFN0cmluZz8NCiAgZWRpdHNfcGVuZGluZyAgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgdHlwZSAgICAgICAgICAgICAgIEludD8NCiAgc29ydF9uYW1lICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBiZWdpbl9kYXRlX3llYXIgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX21vbnRoICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX2RheSAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV95ZWFyICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9tb250aCAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9kYXkgICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBwcmltYXJ5X2Zvcl9sb2NhbGUgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQ0KICBlbmRlZCAgICAgICAgICAgICAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQ0KDQogIEBAaW5kZXgoW2dlbnJlXSwgbWFwOiAiZ2VucmVfYWxpYXNfaWR4X2dlbnJlIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgZ2VucmVfYWxpYXNfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJnZW5yZV9hbGlhc190eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGdlbnJlX2Fubm90YXRpb24gew0KICBnZW5yZSAgICAgIEludA0KICBhbm5vdGF0aW9uIEludA0KDQogIEBAaWQoW2dlbnJlLCBhbm5vdGF0aW9uXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBpbnN0cnVtZW50IHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZ2lkICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJpbnN0cnVtZW50X2lkeF9naWQiKSBAZGIuVXVpZA0KICBuYW1lICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICB0eXBlICAgICAgICAgIEludD8NCiAgZWRpdHNfcGVuZGluZyBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBjb21tZW50ICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBkZXNjcmlwdGlvbiAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQGluZGV4KFtuYW1lXSwgbWFwOiAiaW5zdHJ1bWVudF9pZHhfbmFtZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgaW5zdHJ1bWVudF9hbGlhcyB7DQogIGlkICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgaW5zdHJ1bWVudCAgICAgICAgIEludA0KICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGxvY2FsZSAgICAgICAgICAgICBTdHJpbmc/DQogIGVkaXRzX3BlbmRpbmcgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHR5cGUgICAgICAgICAgICAgICBJbnQ/DQogIHNvcnRfbmFtZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYmVnaW5fZGF0ZV95ZWFyICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9tb250aCAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9kYXkgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfeWVhciAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfbW9udGggICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfZGF5ICAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgcHJpbWFyeV9mb3JfbG9jYWxlIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCiAgZW5kZWQgICAgICAgICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCg0KICBAQGluZGV4KFtpbnN0cnVtZW50XSwgbWFwOiAiaW5zdHJ1bWVudF9hbGlhc19pZHhfaW5zdHJ1bWVudCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGluc3RydW1lbnRfYWxpYXNfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJpbnN0cnVtZW50X2FsaWFzX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgaW5zdHJ1bWVudF9hbm5vdGF0aW9uIHsNCiAgaW5zdHJ1bWVudCBJbnQNCiAgYW5ub3RhdGlvbiBJbnQNCg0KICBAQGlkKFtpbnN0cnVtZW50LCBhbm5vdGF0aW9uXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBpbnN0cnVtZW50X2F0dHJpYnV0ZSB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGluc3RydW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQNCiAgaW5zdHJ1bWVudF9hdHRyaWJ1dGVfdHlwZSAgICAgICAgICAgICAgIEludA0KICBpbnN0cnVtZW50X2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWUgSW50Pw0KICBpbnN0cnVtZW50X2F0dHJpYnV0ZV90ZXh0ICAgICAgICAgICAgICAgU3RyaW5nPw0KDQogIEBAaW5kZXgoW2luc3RydW1lbnRdLCBtYXA6ICJpbnN0cnVtZW50X2F0dHJpYnV0ZV9pZHhfaW5zdHJ1bWVudCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGluc3RydW1lbnRfYXR0cmlidXRlX3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KICBjb21tZW50ICAgICBTdHJpbmcgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcigyNTUpDQogIGZyZWVfdGV4dCAgIEJvb2xlYW4NCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogImluc3RydW1lbnRfYXR0cmlidXRlX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgaW5zdHJ1bWVudF9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIHsNCiAgaWQgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGluc3RydW1lbnRfYXR0cmlidXRlX3R5cGUgSW50DQogIHZhbHVlICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICBwYXJlbnQgICAgICAgICAgICAgICAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgICAgICAgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgU3RyaW5nPw0KICBnaWQgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJpbnN0cnVtZW50X2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBpbmRleChbaW5zdHJ1bWVudF9hdHRyaWJ1dGVfdHlwZV0sIG1hcDogImluc3RydW1lbnRfYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZV9pZHhfbmFtZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGluc3RydW1lbnRfZ2lkX3JlZGlyZWN0IHsNCiAgZ2lkICAgICBTdHJpbmcgICAgQGlkIEBkYi5VdWlkDQogIG5ld19pZCAgSW50DQogIGNyZWF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtuZXdfaWRdLCBtYXA6ICJpbnN0cnVtZW50X2dpZF9yZWRpcmVjdF9pZHhfbmV3X2lkIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgaW5zdHJ1bWVudF90YWcgew0KICBpbnN0cnVtZW50ICAgSW50DQogIHRhZyAgICAgICAgICBJbnQNCiAgY291bnQgICAgICAgIEludA0KICBsYXN0X3VwZGF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGlkKFtpbnN0cnVtZW50LCB0YWddKQ0KICBAQGluZGV4KFt0YWddLCBtYXA6ICJpbnN0cnVtZW50X3RhZ19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgaW5zdHJ1bWVudF90YWdfcmF3IHsNCiAgaW5zdHJ1bWVudCBJbnQNCiAgZWRpdG9yICAgICBJbnQNCiAgdGFnICAgICAgICBJbnQNCiAgaXNfdXB2b3RlICBCb29sZWFuIEBkZWZhdWx0KHRydWUpDQoNCiAgQEBpZChbaW5zdHJ1bWVudCwgZWRpdG9yLCB0YWddKQ0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJpbnN0cnVtZW50X3RhZ19yYXdfaWR4X2VkaXRvciIpDQogIEBAaW5kZXgoW2luc3RydW1lbnRdLCBtYXA6ICJpbnN0cnVtZW50X3RhZ19yYXdfaWR4X2luc3RydW1lbnQiKQ0KICBAQGluZGV4KFt0YWddLCBtYXA6ICJpbnN0cnVtZW50X3RhZ19yYXdfaWR4X3RhZyIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGluc3RydW1lbnRfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJpbnN0cnVtZW50X3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgaXNvXzMxNjZfMSB7DQogIGFyZWEgSW50DQogIGNvZGUgU3RyaW5nIEBpZCBAZGIuQ2hhcigyKQ0KDQogIEBAaW5kZXgoW2FyZWFdLCBtYXA6ICJpc29fMzE2Nl8xX2lkeF9hcmVhIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgaXNvXzMxNjZfMiB7DQogIGFyZWEgSW50DQogIGNvZGUgU3RyaW5nIEBpZCBAZGIuVmFyQ2hhcigxMCkNCg0KICBAQGluZGV4KFthcmVhXSwgbWFwOiAiaXNvXzMxNjZfMl9pZHhfYXJlYSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGlzb18zMTY2XzMgew0KICBhcmVhIEludA0KICBjb2RlIFN0cmluZyBAaWQgQGRiLkNoYXIoNCkNCg0KICBAQGluZGV4KFthcmVhXSwgbWFwOiAiaXNvXzMxNjZfM19pZHhfYXJlYSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgaXNyYyB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHJlY29yZGluZyAgICAgSW50DQogIGlzcmMgICAgICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDEyKQ0KICBzb3VyY2UgICAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZWRpdHNfcGVuZGluZyBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgY3JlYXRlZCAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAdW5pcXVlKFtpc3JjLCByZWNvcmRpbmddLCBtYXA6ICJpc3JjX2lkeF9pc3JjX3JlY29yZGluZyIpDQogIEBAaW5kZXgoW2lzcmNdLCBtYXA6ICJpc3JjX2lkeF9pc3JjIikNCiAgQEBpbmRleChbcmVjb3JkaW5nXSwgbWFwOiAiaXNyY19pZHhfcmVjb3JkaW5nIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBpc3djIHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB3b3JrICAgICAgICAgIEludA0KICBpc3djICAgICAgICAgIFN0cmluZz8gIEBkYi5DaGFyKDE1KQ0KICBzb3VyY2UgICAgICAgIEludD8gICAgIEBkYi5TbWFsbEludA0KICBlZGl0c19wZW5kaW5nIEludCAgICAgIEBkZWZhdWx0KDApDQogIGNyZWF0ZWQgICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAdW5pcXVlKFtpc3djLCB3b3JrXSwgbWFwOiAiaXN3Y19pZHhfaXN3YyIpDQogIEBAaW5kZXgoW3dvcmtdLCBtYXA6ICJpc3djX2lkeF93b3JrIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2FyZWFfYXJlYSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcmVhX2FyZWFfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcmVhX2FyZWFfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfYXJlYV9hcnRpc3Qgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfYXJlYV9hcnRpc3RfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcmVhX2FydGlzdF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9hcmVhX2V2ZW50IHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2FyZWFfZXZlbnRfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcmVhX2V2ZW50X2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2FyZWFfZ2VucmUgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfYXJlYV9nZW5yZV9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FyZWFfZ2VucmVfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfYXJlYV9pbnN0cnVtZW50IHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2FyZWFfaW5zdHJ1bWVudF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FyZWFfaW5zdHJ1bWVudF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9hcmVhX2xhYmVsIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2FyZWFfbGFiZWxfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcmVhX2xhYmVsX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2FyZWFfbW9vZCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcmVhX21vb2RfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcmVhX21vb2RfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfYXJlYV9wbGFjZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcmVhX3BsYWNlX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfYXJlYV9wbGFjZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9hcmVhX3JlY29yZGluZyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcmVhX3JlY29yZGluZ19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FyZWFfcmVjb3JkaW5nX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2FyZWFfcmVsZWFzZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcmVhX3JlbGVhc2VfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcmVhX3JlbGVhc2VfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfYXJlYV9yZWxlYXNlX2dyb3VwIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2FyZWFfcmVsZWFzZV9ncm91cF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FyZWFfcmVsZWFzZV9ncm91cF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9hcmVhX3NlcmllcyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcmVhX3Nlcmllc19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FyZWFfc2VyaWVzX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2FyZWFfdXJsIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2FyZWFfdXJsX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfYXJlYV91cmxfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfYXJlYV93b3JrIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2FyZWFfd29ya19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FyZWFfd29ya19pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9hcnRpc3RfYXJ0aXN0IHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2FydGlzdF9hcnRpc3RfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcnRpc3RfYXJ0aXN0X2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2FydGlzdF9ldmVudCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcnRpc3RfZXZlbnRfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcnRpc3RfZXZlbnRfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfYXJ0aXN0X2dlbnJlIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2FydGlzdF9nZW5yZV9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FydGlzdF9nZW5yZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9hcnRpc3RfaW5zdHJ1bWVudCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcnRpc3RfaW5zdHJ1bWVudF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FydGlzdF9pbnN0cnVtZW50X2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2FydGlzdF9sYWJlbCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcnRpc3RfbGFiZWxfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcnRpc3RfbGFiZWxfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfYXJ0aXN0X21vb2Qgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfYXJ0aXN0X21vb2RfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcnRpc3RfbW9vZF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9hcnRpc3RfcGxhY2Ugew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfYXJ0aXN0X3BsYWNlX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfYXJ0aXN0X3BsYWNlX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2FydGlzdF9yZWNvcmRpbmcgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfYXJ0aXN0X3JlY29yZGluZ19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FydGlzdF9yZWNvcmRpbmdfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfYXJ0aXN0X3JlbGVhc2Ugew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfYXJ0aXN0X3JlbGVhc2VfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9hcnRpc3RfcmVsZWFzZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9hcnRpc3RfcmVsZWFzZV9ncm91cCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcnRpc3RfcmVsZWFzZV9ncm91cF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FydGlzdF9yZWxlYXNlX2dyb3VwX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2FydGlzdF9zZXJpZXMgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfYXJ0aXN0X3Nlcmllc19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FydGlzdF9zZXJpZXNfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfYXJ0aXN0X3VybCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcnRpc3RfdXJsX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfYXJ0aXN0X3VybF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9hcnRpc3Rfd29yayB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9hcnRpc3Rfd29ya19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2FydGlzdF93b3JrX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2V2ZW50X2V2ZW50IHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2V2ZW50X2V2ZW50X2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZXZlbnRfZXZlbnRfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfZXZlbnRfZ2VucmUgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfZXZlbnRfZ2VucmVfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9ldmVudF9nZW5yZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9ldmVudF9pbnN0cnVtZW50IHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2V2ZW50X2luc3RydW1lbnRfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9ldmVudF9pbnN0cnVtZW50X2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2V2ZW50X2xhYmVsIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2V2ZW50X2xhYmVsX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZXZlbnRfbGFiZWxfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfZXZlbnRfbW9vZCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9ldmVudF9tb29kX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZXZlbnRfbW9vZF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9ldmVudF9wbGFjZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9ldmVudF9wbGFjZV9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2V2ZW50X3BsYWNlX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2V2ZW50X3JlY29yZGluZyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9ldmVudF9yZWNvcmRpbmdfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9ldmVudF9yZWNvcmRpbmdfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfZXZlbnRfcmVsZWFzZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9ldmVudF9yZWxlYXNlX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZXZlbnRfcmVsZWFzZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9ldmVudF9yZWxlYXNlX2dyb3VwIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2V2ZW50X3JlbGVhc2VfZ3JvdXBfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9ldmVudF9yZWxlYXNlX2dyb3VwX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2V2ZW50X3NlcmllcyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9ldmVudF9zZXJpZXNfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9ldmVudF9zZXJpZXNfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfZXZlbnRfdXJsIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2V2ZW50X3VybF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2V2ZW50X3VybF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9ldmVudF93b3JrIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2V2ZW50X3dvcmtfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9ldmVudF93b3JrX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2dlbnJlX2dlbnJlIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2dlbnJlX2dlbnJlX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZ2VucmVfZ2VucmVfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfZ2VucmVfaW5zdHJ1bWVudCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9nZW5yZV9pbnN0cnVtZW50X2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZ2VucmVfaW5zdHJ1bWVudF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9nZW5yZV9sYWJlbCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9nZW5yZV9sYWJlbF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2dlbnJlX2xhYmVsX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2dlbnJlX21vb2Qgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfZ2VucmVfbW9vZF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2dlbnJlX21vb2RfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfZ2VucmVfcGxhY2Ugew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfZ2VucmVfcGxhY2VfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9nZW5yZV9wbGFjZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9nZW5yZV9yZWNvcmRpbmcgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfZ2VucmVfcmVjb3JkaW5nX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZ2VucmVfcmVjb3JkaW5nX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2dlbnJlX3JlbGVhc2Ugew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfZ2VucmVfcmVsZWFzZV9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2dlbnJlX3JlbGVhc2VfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfZ2VucmVfcmVsZWFzZV9ncm91cCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9nZW5yZV9yZWxlYXNlX2dyb3VwX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZ2VucmVfcmVsZWFzZV9ncm91cF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9nZW5yZV9zZXJpZXMgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfZ2VucmVfc2VyaWVzX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZ2VucmVfc2VyaWVzX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2dlbnJlX3VybCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9nZW5yZV91cmxfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9nZW5yZV91cmxfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfZ2VucmVfd29yayB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9nZW5yZV93b3JrX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfZ2VucmVfd29ya19pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9pbnN0cnVtZW50X2luc3RydW1lbnQgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfaW5zdHJ1bWVudF9pbnN0cnVtZW50X2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfaW5zdHJ1bWVudF9pbnN0cnVtZW50X2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2luc3RydW1lbnRfbGFiZWwgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfaW5zdHJ1bWVudF9sYWJlbF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2luc3RydW1lbnRfbGFiZWxfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfaW5zdHJ1bWVudF9tb29kIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2luc3RydW1lbnRfbW9vZF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2luc3RydW1lbnRfbW9vZF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9pbnN0cnVtZW50X3BsYWNlIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2luc3RydW1lbnRfcGxhY2VfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9pbnN0cnVtZW50X3BsYWNlX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2luc3RydW1lbnRfcmVjb3JkaW5nIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2luc3RydW1lbnRfcmVjb3JkaW5nX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfaW5zdHJ1bWVudF9yZWNvcmRpbmdfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfaW5zdHJ1bWVudF9yZWxlYXNlIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2luc3RydW1lbnRfcmVsZWFzZV9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2luc3RydW1lbnRfcmVsZWFzZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9pbnN0cnVtZW50X3JlbGVhc2VfZ3JvdXAgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfaW5zdHJ1bWVudF9yZWxlYXNlX2dyb3VwX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfaW5zdHJ1bWVudF9yZWxlYXNlX2dyb3VwX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2luc3RydW1lbnRfc2VyaWVzIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2luc3RydW1lbnRfc2VyaWVzX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfaW5zdHJ1bWVudF9zZXJpZXNfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfaW5zdHJ1bWVudF91cmwgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfaW5zdHJ1bWVudF91cmxfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9pbnN0cnVtZW50X3VybF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9pbnN0cnVtZW50X3dvcmsgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfaW5zdHJ1bWVudF93b3JrX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfaW5zdHJ1bWVudF93b3JrX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2xhYmVsX2xhYmVsIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2xhYmVsX2xhYmVsX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfbGFiZWxfbGFiZWxfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfbGFiZWxfbW9vZCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9sYWJlbF9tb29kX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfbGFiZWxfbW9vZF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9sYWJlbF9wbGFjZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9sYWJlbF9wbGFjZV9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2xhYmVsX3BsYWNlX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2xhYmVsX3JlY29yZGluZyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9sYWJlbF9yZWNvcmRpbmdfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9sYWJlbF9yZWNvcmRpbmdfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfbGFiZWxfcmVsZWFzZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9sYWJlbF9yZWxlYXNlX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfbGFiZWxfcmVsZWFzZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9sYWJlbF9yZWxlYXNlX2dyb3VwIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2xhYmVsX3JlbGVhc2VfZ3JvdXBfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9sYWJlbF9yZWxlYXNlX2dyb3VwX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX2xhYmVsX3NlcmllcyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9sYWJlbF9zZXJpZXNfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9sYWJlbF9zZXJpZXNfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfbGFiZWxfdXJsIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2xhYmVsX3VybF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX2xhYmVsX3VybF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9sYWJlbF93b3JrIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX2xhYmVsX3dvcmtfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9sYWJlbF93b3JrX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX21vb2RfbW9vZCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9tb29kX21vb2RfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9tb29kX21vb2RfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfbW9vZF9wbGFjZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9tb29kX3BsYWNlX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfbW9vZF9wbGFjZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9tb29kX3JlY29yZGluZyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9tb29kX3JlY29yZGluZ19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX21vb2RfcmVjb3JkaW5nX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX21vb2RfcmVsZWFzZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9tb29kX3JlbGVhc2VfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9tb29kX3JlbGVhc2VfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfbW9vZF9yZWxlYXNlX2dyb3VwIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX21vb2RfcmVsZWFzZV9ncm91cF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX21vb2RfcmVsZWFzZV9ncm91cF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9tb29kX3NlcmllcyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9tb29kX3Nlcmllc19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX21vb2Rfc2VyaWVzX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX21vb2RfdXJsIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX21vb2RfdXJsX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfbW9vZF91cmxfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfbW9vZF93b3JrIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX21vb2Rfd29ya19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX21vb2Rfd29ya19pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9wbGFjZV9wbGFjZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9wbGFjZV9wbGFjZV9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3BsYWNlX3BsYWNlX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX3BsYWNlX3JlY29yZGluZyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9wbGFjZV9yZWNvcmRpbmdfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9wbGFjZV9yZWNvcmRpbmdfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfcGxhY2VfcmVsZWFzZSB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9wbGFjZV9yZWxlYXNlX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfcGxhY2VfcmVsZWFzZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9wbGFjZV9yZWxlYXNlX2dyb3VwIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX3BsYWNlX3JlbGVhc2VfZ3JvdXBfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9wbGFjZV9yZWxlYXNlX2dyb3VwX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX3BsYWNlX3NlcmllcyB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9wbGFjZV9zZXJpZXNfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9wbGFjZV9zZXJpZXNfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfcGxhY2VfdXJsIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX3BsYWNlX3VybF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3BsYWNlX3VybF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9wbGFjZV93b3JrIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX3BsYWNlX3dvcmtfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9wbGFjZV93b3JrX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX3JlY29yZGluZ19yZWNvcmRpbmcgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfcmVjb3JkaW5nX3JlY29yZGluZ19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3JlY29yZGluZ19yZWNvcmRpbmdfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfcmVjb3JkaW5nX3JlbGVhc2Ugew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfcmVjb3JkaW5nX3JlbGVhc2VfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9yZWNvcmRpbmdfcmVsZWFzZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9yZWNvcmRpbmdfcmVsZWFzZV9ncm91cCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9yZWNvcmRpbmdfcmVsZWFzZV9ncm91cF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3JlY29yZGluZ19yZWxlYXNlX2dyb3VwX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX3JlY29yZGluZ19zZXJpZXMgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfcmVjb3JkaW5nX3Nlcmllc19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3JlY29yZGluZ19zZXJpZXNfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfcmVjb3JkaW5nX3VybCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9yZWNvcmRpbmdfdXJsX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfcmVjb3JkaW5nX3VybF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9yZWNvcmRpbmdfd29yayB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9yZWNvcmRpbmdfd29ya19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3JlY29yZGluZ193b3JrX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX3JlbGVhc2VfZ3JvdXBfcmVsZWFzZV9ncm91cCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9yZWxlYXNlX2dyb3VwX3JlbGVhc2VfZ3JvdXBfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9yZWxlYXNlX2dyb3VwX3JlbGVhc2VfZ3JvdXBfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfcmVsZWFzZV9ncm91cF9zZXJpZXMgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfcmVsZWFzZV9ncm91cF9zZXJpZXNfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9yZWxlYXNlX2dyb3VwX3Nlcmllc19pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9yZWxlYXNlX2dyb3VwX3VybCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9yZWxlYXNlX2dyb3VwX3VybF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3JlbGVhc2VfZ3JvdXBfdXJsX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX3JlbGVhc2VfZ3JvdXBfd29yayB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9yZWxlYXNlX2dyb3VwX3dvcmtfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9yZWxlYXNlX2dyb3VwX3dvcmtfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfcmVsZWFzZV9yZWxlYXNlIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX3JlbGVhc2VfcmVsZWFzZV9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3JlbGVhc2VfcmVsZWFzZV9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9yZWxlYXNlX3JlbGVhc2VfZ3JvdXAgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfcmVsZWFzZV9yZWxlYXNlX2dyb3VwX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfcmVsZWFzZV9yZWxlYXNlX2dyb3VwX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX3JlbGVhc2Vfc2VyaWVzIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxpbmsgICAgICAgICAgIEludA0KICBlbnRpdHkwICAgICAgICBJbnQNCiAgZW50aXR5MSAgICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBsaW5rX29yZGVyICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZW50aXR5MF9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KICBlbnRpdHkxX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQoNCiAgQEB1bmlxdWUoW2VudGl0eTAsIGVudGl0eTEsIGxpbmssIGxpbmtfb3JkZXJdLCBtYXA6ICJsX3JlbGVhc2Vfc2VyaWVzX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfcmVsZWFzZV9zZXJpZXNfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfcmVsZWFzZV91cmwgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfcmVsZWFzZV91cmxfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF9yZWxlYXNlX3VybF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9yZWxlYXNlX3dvcmsgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfcmVsZWFzZV93b3JrX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfcmVsZWFzZV93b3JrX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX3Nlcmllc19zZXJpZXMgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfc2VyaWVzX3Nlcmllc19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3Nlcmllc19zZXJpZXNfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfc2VyaWVzX3VybCB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9zZXJpZXNfdXJsX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfc2VyaWVzX3VybF9pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF9zZXJpZXNfd29yayB7DQogIGlkICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsaW5rICAgICAgICAgICBJbnQNCiAgZW50aXR5MCAgICAgICAgSW50DQogIGVudGl0eTEgICAgICAgIEludA0KICBlZGl0c19wZW5kaW5nICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbGlua19vcmRlciAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGVudGl0eTBfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCiAgZW50aXR5MV9jcmVkaXQgU3RyaW5nICAgIEBkZWZhdWx0KCIiKQ0KDQogIEBAdW5pcXVlKFtlbnRpdHkwLCBlbnRpdHkxLCBsaW5rLCBsaW5rX29yZGVyXSwgbWFwOiAibF9zZXJpZXNfd29ya19pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3Nlcmllc193b3JrX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsX3VybF91cmwgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfdXJsX3VybF9pZHhfdW5pcSIpDQogIEBAaW5kZXgoW2VudGl0eTFdLCBtYXA6ICJsX3VybF91cmxfaWR4X2VudGl0eTEiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxfdXJsX3dvcmsgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfdXJsX3dvcmtfaWR4X3VuaXEiKQ0KICBAQGluZGV4KFtlbnRpdHkxXSwgbWFwOiAibF91cmxfd29ya19pZHhfZW50aXR5MSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbF93b3JrX3dvcmsgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGluayAgICAgICAgICAgSW50DQogIGVudGl0eTAgICAgICAgIEludA0KICBlbnRpdHkxICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxpbmtfb3JkZXIgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBlbnRpdHkwX2NyZWRpdCBTdHJpbmcgICAgQGRlZmF1bHQoIiIpDQogIGVudGl0eTFfY3JlZGl0IFN0cmluZyAgICBAZGVmYXVsdCgiIikNCg0KICBAQHVuaXF1ZShbZW50aXR5MCwgZW50aXR5MSwgbGluaywgbGlua19vcmRlcl0sIG1hcDogImxfd29ya193b3JrX2lkeF91bmlxIikNCiAgQEBpbmRleChbZW50aXR5MV0sIG1hcDogImxfd29ya193b3JrX2lkeF9lbnRpdHkxIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsYWJlbCB7DQogIGlkICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGdpZCAgICAgICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUobWFwOiAibGFiZWxfaWR4X2dpZCIpIEBkYi5VdWlkDQogIG5hbWUgICAgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGJlZ2luX2RhdGVfeWVhciAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX21vbnRoIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9kYXkgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX3llYXIgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9tb250aCAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfZGF5ICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGxhYmVsX2NvZGUgICAgICAgSW50Pw0KICB0eXBlICAgICAgICAgICAgIEludD8NCiAgYXJlYSAgICAgICAgICAgICBJbnQ/DQogIGNvbW1lbnQgICAgICAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcigyNTUpDQogIGVkaXRzX3BlbmRpbmcgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgZW5kZWQgICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBpbmRleChbYXJlYV0sIG1hcDogImxhYmVsX2lkeF9hcmVhIikNCiAgQEBpbmRleChbbmFtZV0sIG1hcDogImxhYmVsX2lkeF9uYW1lIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsYWJlbF9hbGlhcyB7DQogIGlkICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGFiZWwgICAgICAgICAgICAgIEludA0KICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGxvY2FsZSAgICAgICAgICAgICBTdHJpbmc/DQogIGVkaXRzX3BlbmRpbmcgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHR5cGUgICAgICAgICAgICAgICBJbnQ/DQogIHNvcnRfbmFtZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYmVnaW5fZGF0ZV95ZWFyICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9tb250aCAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9kYXkgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfeWVhciAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfbW9udGggICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfZGF5ICAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgcHJpbWFyeV9mb3JfbG9jYWxlIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCiAgZW5kZWQgICAgICAgICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCg0KICBAQGluZGV4KFtsYWJlbF0sIG1hcDogImxhYmVsX2FsaWFzX2lkeF9sYWJlbCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGxhYmVsX2FsaWFzX3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZw0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAibGFiZWxfYWxpYXNfdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBsYWJlbF9hbm5vdGF0aW9uIHsNCiAgbGFiZWwgICAgICBJbnQNCiAgYW5ub3RhdGlvbiBJbnQNCg0KICBAQGlkKFtsYWJlbCwgYW5ub3RhdGlvbl0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbGFiZWxfYXR0cmlidXRlIHsNCiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxhYmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50DQogIGxhYmVsX2F0dHJpYnV0ZV90eXBlICAgICAgICAgICAgICAgSW50DQogIGxhYmVsX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWUgSW50Pw0KICBsYWJlbF9hdHRyaWJ1dGVfdGV4dCAgICAgICAgICAgICAgIFN0cmluZz8NCg0KICBAQGluZGV4KFtsYWJlbF0sIG1hcDogImxhYmVsX2F0dHJpYnV0ZV9pZHhfbGFiZWwiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBsYWJlbF9hdHRyaWJ1dGVfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIGNvbW1lbnQgICAgIFN0cmluZyAgQGRlZmF1bHQoIiIpIEBkYi5WYXJDaGFyKDI1NSkNCiAgZnJlZV90ZXh0ICAgQm9vbGVhbg0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAibGFiZWxfYXR0cmlidXRlX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbGFiZWxfYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZSB7DQogIGlkICAgICAgICAgICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGFiZWxfYXR0cmlidXRlX3R5cGUgSW50DQogIHZhbHVlICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgcGFyZW50ICAgICAgICAgICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciAgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uICAgICAgICAgIFN0cmluZz8NCiAgZ2lkICAgICAgICAgICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogImxhYmVsX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBpbmRleChbbGFiZWxfYXR0cmlidXRlX3R5cGVdLCBtYXA6ICJsYWJlbF9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlX2lkeF9uYW1lIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbGFiZWxfZ2lkX3JlZGlyZWN0IHsNCiAgZ2lkICAgICBTdHJpbmcgICAgQGlkIEBkYi5VdWlkDQogIG5ld19pZCAgSW50DQogIGNyZWF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtuZXdfaWRdLCBtYXA6ICJsYWJlbF9naWRfcmVkaXJlY3RfaWR4X25ld19pZCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbGFiZWxfaXBpIHsNCiAgbGFiZWwgICAgICAgICBJbnQNCiAgaXBpICAgICAgICAgICBTdHJpbmcgICAgQGRiLkNoYXIoMTEpDQogIGVkaXRzX3BlbmRpbmcgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGNyZWF0ZWQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGlkKFtsYWJlbCwgaXBpXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsYWJlbF9pc25pIHsNCiAgbGFiZWwgICAgICAgICBJbnQNCiAgaXNuaSAgICAgICAgICBTdHJpbmcgICAgQGRiLkNoYXIoMTYpDQogIGVkaXRzX3BlbmRpbmcgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGNyZWF0ZWQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGlkKFtsYWJlbCwgaXNuaV0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbGFiZWxfbWV0YSB7DQogIGlkICAgICAgICAgICBJbnQgIEBpZA0KICByYXRpbmcgICAgICAgSW50PyBAZGIuU21hbGxJbnQNCiAgcmF0aW5nX2NvdW50IEludD8NCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIGxhYmVsX3JhdGluZ19yYXcgew0KICBsYWJlbCAgSW50DQogIGVkaXRvciBJbnQNCiAgcmF0aW5nIEludCBAZGIuU21hbGxJbnQNCg0KICBAQGlkKFtsYWJlbCwgZWRpdG9yXSkNCiAgQEBpbmRleChbZWRpdG9yXSwgbWFwOiAibGFiZWxfcmF0aW5nX3Jhd19pZHhfZWRpdG9yIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbGFiZWxfdGFnIHsNCiAgbGFiZWwgICAgICAgIEludA0KICB0YWcgICAgICAgICAgSW50DQogIGNvdW50ICAgICAgICBJbnQNCiAgbGFzdF91cGRhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpZChbbGFiZWwsIHRhZ10pDQogIEBAaW5kZXgoW3RhZ10sIG1hcDogImxhYmVsX3RhZ19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbGFiZWxfdGFnX3JhdyB7DQogIGxhYmVsICAgICBJbnQNCiAgZWRpdG9yICAgIEludA0KICB0YWcgICAgICAgSW50DQogIGlzX3Vwdm90ZSBCb29sZWFuIEBkZWZhdWx0KHRydWUpDQoNCiAgQEBpZChbbGFiZWwsIGVkaXRvciwgdGFnXSkNCiAgQEBpbmRleChbZWRpdG9yXSwgbWFwOiAibGFiZWxfdGFnX3Jhd19pZHhfZWRpdG9yIikNCiAgQEBpbmRleChbdGFnXSwgbWFwOiAibGFiZWxfdGFnX3Jhd19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbGFiZWxfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJsYWJlbF90eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbGFuZ3VhZ2Ugew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGlzb19jb2RlXzJ0IFN0cmluZz8gQHVuaXF1ZShtYXA6ICJsYW5ndWFnZV9pZHhfaXNvX2NvZGVfMnQiKSBAZGIuQ2hhcigzKQ0KICBpc29fY29kZV8yYiBTdHJpbmc/IEB1bmlxdWUobWFwOiAibGFuZ3VhZ2VfaWR4X2lzb19jb2RlXzJiIikgQGRiLkNoYXIoMykNCiAgaXNvX2NvZGVfMSAgU3RyaW5nPyBAdW5pcXVlKG1hcDogImxhbmd1YWdlX2lkeF9pc29fY29kZV8xIikgQGRiLkNoYXIoMikNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigxMDApDQogIGZyZXF1ZW5jeSAgIEludCAgICAgQGRlZmF1bHQoMCkgQGRiLlNtYWxsSW50DQogIGlzb19jb2RlXzMgIFN0cmluZz8gQHVuaXF1ZShtYXA6ICJsYW5ndWFnZV9pZHhfaXNvX2NvZGVfMyIpIEBkYi5DaGFyKDMpDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBsaW5rIHsNCiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbGlua190eXBlICAgICAgICBJbnQNCiAgYmVnaW5fZGF0ZV95ZWFyICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfbW9udGggSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX2RheSAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfeWVhciAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX21vbnRoICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9kYXkgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYXR0cmlidXRlX2NvdW50ICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgY3JlYXRlZCAgICAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBlbmRlZCAgICAgICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCg0KICBAQGluZGV4KFtsaW5rX3R5cGUsIGF0dHJpYnV0ZV9jb3VudF0sIG1hcDogImxpbmtfaWR4X3R5cGVfYXR0ciIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGxpbmtfYXR0cmlidXRlIHsNCiAgbGluayAgICAgICAgICAgSW50DQogIGF0dHJpYnV0ZV90eXBlIEludA0KICBjcmVhdGVkICAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAaWQoW2xpbmssIGF0dHJpYnV0ZV90eXBlXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbGlua19hdHRyaWJ1dGVfY3JlZGl0IHsNCiAgbGluayAgICAgICAgICAgSW50DQogIGF0dHJpYnV0ZV90eXBlIEludA0KICBjcmVkaXRlZF9hcyAgICBTdHJpbmcNCg0KICBAQGlkKFtsaW5rLCBhdHRyaWJ1dGVfdHlwZV0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGxpbmtfYXR0cmlidXRlX3RleHRfdmFsdWUgew0KICBsaW5rICAgICAgICAgICBJbnQNCiAgYXR0cmlidXRlX3R5cGUgSW50DQogIHRleHRfdmFsdWUgICAgIFN0cmluZw0KDQogIEBAaWQoW2xpbmssIGF0dHJpYnV0ZV90eXBlXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbGlua19hdHRyaWJ1dGVfdHlwZSB7DQogIGlkICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgcGFyZW50ICAgICAgIEludD8NCiAgcm9vdCAgICAgICAgIEludA0KICBjaGlsZF9vcmRlciAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGdpZCAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJsaW5rX2F0dHJpYnV0ZV90eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KICBuYW1lICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NSkNCiAgZGVzY3JpcHRpb24gIFN0cmluZz8NCiAgbGFzdF91cGRhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbGlua19jcmVkaXRhYmxlX2F0dHJpYnV0ZV90eXBlIHsNCiAgYXR0cmlidXRlX3R5cGUgSW50IEBpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGxpbmtfdGV4dF9hdHRyaWJ1dGVfdHlwZSB7DQogIGF0dHJpYnV0ZV90eXBlIEludCBAaWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBsaW5rX3R5cGUgew0KICBpZCAgICAgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBwYXJlbnQgICAgICAgICAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgZ2lkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJsaW5rX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQogIGVudGl0eV90eXBlMCAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDUwKQ0KICBlbnRpdHlfdHlwZTEgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcig1MCkNCiAgbmFtZSAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjU1KQ0KICBkZXNjcmlwdGlvbiAgICAgICAgIFN0cmluZz8NCiAgbGlua19waHJhc2UgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjU1KQ0KICByZXZlcnNlX2xpbmtfcGhyYXNlIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTUpDQogIGxvbmdfbGlua19waHJhc2UgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NSkNCiAgcHJpb3JpdHkgICAgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBpc19kZXByZWNhdGVkICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCiAgaGFzX2RhdGVzICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQodHJ1ZSkNCiAgZW50aXR5MF9jYXJkaW5hbGl0eSBJbnQgICAgICAgQGRlZmF1bHQoMCkgQGRiLlNtYWxsSW50DQogIGVudGl0eTFfY2FyZGluYWxpdHkgSW50ICAgICAgIEBkZWZhdWx0KDApIEBkYi5TbWFsbEludA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIGxpbmtfdHlwZV9hdHRyaWJ1dGVfdHlwZSB7DQogIGxpbmtfdHlwZSAgICAgIEludA0KICBhdHRyaWJ1dGVfdHlwZSBJbnQNCiAgbWluICAgICAgICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBtYXggICAgICAgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpZChbbGlua190eXBlLCBhdHRyaWJ1dGVfdHlwZV0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbWVkaXVtIHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgcmVsZWFzZSAgICAgICBJbnQNCiAgcG9zaXRpb24gICAgICBJbnQNCiAgZm9ybWF0ICAgICAgICBJbnQ/DQogIG5hbWUgICAgICAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcg0KICBlZGl0c19wZW5kaW5nIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHRyYWNrX2NvdW50ICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQoNCiAgQEBpbmRleChbcmVsZWFzZSwgcG9zaXRpb25dLCBtYXA6ICJtZWRpdW1faWR4X3JlbGVhc2VfcG9zaXRpb24iKQ0KICBAQGluZGV4KFt0cmFja19jb3VudF0sIG1hcDogIm1lZGl1bV9pZHhfdHJhY2tfY291bnQiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIG1lZGl1bV9hdHRyaWJ1dGUgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG1lZGl1bSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludA0KICBtZWRpdW1fYXR0cmlidXRlX3R5cGUgICAgICAgICAgICAgICBJbnQNCiAgbWVkaXVtX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWUgSW50Pw0KICBtZWRpdW1fYXR0cmlidXRlX3RleHQgICAgICAgICAgICAgICBTdHJpbmc/DQoNCiAgQEBpbmRleChbbWVkaXVtXSwgbWFwOiAibWVkaXVtX2F0dHJpYnV0ZV9pZHhfbWVkaXVtIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbWVkaXVtX2F0dHJpYnV0ZV90eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDI1NSkNCiAgY29tbWVudCAgICAgU3RyaW5nICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBmcmVlX3RleHQgICBCb29sZWFuDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJtZWRpdW1fYXR0cmlidXRlX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbWVkaXVtX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfZm9ybWF0IHsNCiAgbWVkaXVtX2Zvcm1hdCAgICAgICAgIEludA0KICBtZWRpdW1fYXR0cmlidXRlX3R5cGUgSW50DQoNCiAgQEBpZChbbWVkaXVtX2Zvcm1hdCwgbWVkaXVtX2F0dHJpYnV0ZV90eXBlXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbWVkaXVtX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWUgew0KICBpZCAgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBtZWRpdW1fYXR0cmlidXRlX3R5cGUgSW50DQogIHZhbHVlICAgICAgICAgICAgICAgICBTdHJpbmc/DQogIHBhcmVudCAgICAgICAgICAgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyICAgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uICAgICAgICAgICBTdHJpbmc/DQogIGdpZCAgICAgICAgICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAibWVkaXVtX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBpbmRleChbbWVkaXVtX2F0dHJpYnV0ZV90eXBlXSwgbWFwOiAibWVkaXVtX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X25hbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBtZWRpdW1fYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZV9hbGxvd2VkX2Zvcm1hdCB7DQogIG1lZGl1bV9mb3JtYXQgICAgICAgICAgICAgICAgICAgICAgIEludA0KICBtZWRpdW1fYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZSBJbnQNCg0KICBAQGlkKFttZWRpdW1fZm9ybWF0LCBtZWRpdW1fYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZV0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgbWVkaXVtX2NkdG9jIHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbWVkaXVtICAgICAgICBJbnQNCiAgY2R0b2MgICAgICAgICBJbnQNCiAgZWRpdHNfcGVuZGluZyBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAdW5pcXVlKFttZWRpdW0sIGNkdG9jXSwgbWFwOiAibWVkaXVtX2NkdG9jX2lkeF91bmlxIikNCiAgQEBpbmRleChbY2R0b2NdLCBtYXA6ICJtZWRpdW1fY2R0b2NfaWR4X2NkdG9jIikNCiAgQEBpbmRleChbbWVkaXVtXSwgbWFwOiAibWVkaXVtX2NkdG9jX2lkeF9tZWRpdW0iKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBtZWRpdW1fZm9ybWF0IHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDEwMCkNCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIHllYXIgICAgICAgIEludD8gICAgQGRiLlNtYWxsSW50DQogIGhhc19kaXNjaWRzIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogIm1lZGl1bV9mb3JtYXRfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbWVkaXVtX2luZGV4IHsNCiAgbWVkaXVtIEludCAgICAgICAgICAgICAgICAgIEBpZA0KICB0b2MgICAgVW5zdXBwb3J0ZWQoImN1YmUiKT8NCg0KICBAQGluZGV4KFt0b2NdLCBtYXA6ICJtZWRpdW1faW5kZXhfaWR4IiwgdHlwZTogR2lzdCkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBtb29kIHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZ2lkICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJtb29kX2lkeF9naWQiKSBAZGIuVXVpZA0KICBuYW1lICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBjb21tZW50ICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBlZGl0c19wZW5kaW5nIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBtb29kX2FsaWFzIHsNCiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBtb29kICAgICAgICAgICAgICAgSW50DQogIG5hbWUgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgbG9jYWxlICAgICAgICAgICAgIFN0cmluZz8NCiAgZWRpdHNfcGVuZGluZyAgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgdHlwZSAgICAgICAgICAgICAgIEludD8NCiAgc29ydF9uYW1lICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBiZWdpbl9kYXRlX3llYXIgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX21vbnRoICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX2RheSAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV95ZWFyICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9tb250aCAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9kYXkgICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBwcmltYXJ5X2Zvcl9sb2NhbGUgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQ0KICBlbmRlZCAgICAgICAgICAgICAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQ0KDQogIEBAaW5kZXgoW21vb2RdLCBtYXA6ICJtb29kX2FsaWFzX2lkeF9tb29kIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgbW9vZF9hbGlhc190eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcNCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogIm1vb2RfYWxpYXNfdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBtb29kX2Fubm90YXRpb24gew0KICBtb29kICAgICAgIEludA0KICBhbm5vdGF0aW9uIEludA0KDQogIEBAaWQoW21vb2QsIGFubm90YXRpb25dKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgb2xkX2VkaXRvcl9uYW1lIHsNCiAgbmFtZSBTdHJpbmcgQGRiLlZhckNoYXIoNjQpDQoNCiAgQEBpZ25vcmUNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBvcmRlcmFibGVfbGlua190eXBlIHsNCiAgbGlua190eXBlIEludCBAaWQNCiAgZGlyZWN0aW9uIEludCBAZGVmYXVsdCgxKSBAZGIuU21hbGxJbnQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHBsYWNlIHsNCiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZ2lkICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQHVuaXF1ZShtYXA6ICJwbGFjZV9pZHhfZ2lkIikgQGRiLlV1aWQNCiAgbmFtZSAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiLlZhckNoYXINCiAgdHlwZSAgICAgICAgICAgICBJbnQ/DQogIGFkZHJlc3MgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcg0KICBhcmVhICAgICAgICAgICAgIEludD8NCiAgY29vcmRpbmF0ZXMgICAgICBVbnN1cHBvcnRlZCgicG9pbnQiKT8NCiAgY29tbWVudCAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRlZmF1bHQoIiIpIEBkYi5WYXJDaGFyKDI1NSkNCiAgZWRpdHNfcGVuZGluZyAgICBJbnQgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgICBEYXRlVGltZT8gICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICBiZWdpbl9kYXRlX3llYXIgIEludD8gICAgICAgICAgICAgICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9tb250aCBJbnQ/ICAgICAgICAgICAgICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfZGF5ICAgSW50PyAgICAgICAgICAgICAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV95ZWFyICAgIEludD8gICAgICAgICAgICAgICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfbW9udGggICBJbnQ/ICAgICAgICAgICAgICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX2RheSAgICAgSW50PyAgICAgICAgICAgICAgICAgIEBkYi5TbWFsbEludA0KICBlbmRlZCAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkNCg0KICBAQGluZGV4KFthcmVhXSwgbWFwOiAicGxhY2VfaWR4X2FyZWEiKQ0KICBAQGluZGV4KFtuYW1lXSwgbWFwOiAicGxhY2VfaWR4X25hbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHBsYWNlX2FsaWFzIHsNCiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBwbGFjZSAgICAgICAgICAgICAgSW50DQogIG5hbWUgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgbG9jYWxlICAgICAgICAgICAgIFN0cmluZz8NCiAgZWRpdHNfcGVuZGluZyAgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgdHlwZSAgICAgICAgICAgICAgIEludD8NCiAgc29ydF9uYW1lICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBiZWdpbl9kYXRlX3llYXIgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX21vbnRoICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX2RheSAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV95ZWFyICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9tb250aCAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9kYXkgICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBwcmltYXJ5X2Zvcl9sb2NhbGUgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQ0KICBlbmRlZCAgICAgICAgICAgICAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQ0KDQogIEBAaW5kZXgoW3BsYWNlXSwgbWFwOiAicGxhY2VfYWxpYXNfaWR4X3BsYWNlIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcGxhY2VfYWxpYXNfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJwbGFjZV9hbGlhc190eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHBsYWNlX2Fubm90YXRpb24gew0KICBwbGFjZSAgICAgIEludA0KICBhbm5vdGF0aW9uIEludA0KDQogIEBAaWQoW3BsYWNlLCBhbm5vdGF0aW9uXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBwbGFjZV9hdHRyaWJ1dGUgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgcGxhY2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQNCiAgcGxhY2VfYXR0cmlidXRlX3R5cGUgICAgICAgICAgICAgICBJbnQNCiAgcGxhY2VfYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZSBJbnQ/DQogIHBsYWNlX2F0dHJpYnV0ZV90ZXh0ICAgICAgICAgICAgICAgU3RyaW5nPw0KDQogIEBAaW5kZXgoW3BsYWNlXSwgbWFwOiAicGxhY2VfYXR0cmlidXRlX2lkeF9wbGFjZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHBsYWNlX2F0dHJpYnV0ZV90eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDI1NSkNCiAgY29tbWVudCAgICAgU3RyaW5nICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBmcmVlX3RleHQgICBCb29sZWFuDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJwbGFjZV9hdHRyaWJ1dGVfdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBwbGFjZV9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIHsNCiAgaWQgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBwbGFjZV9hdHRyaWJ1dGVfdHlwZSBJbnQNCiAgdmFsdWUgICAgICAgICAgICAgICAgU3RyaW5nPw0KICBwYXJlbnQgICAgICAgICAgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyICAgICAgICAgIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gICAgICAgICAgU3RyaW5nPw0KICBnaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAicGxhY2VfYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQGluZGV4KFtwbGFjZV9hdHRyaWJ1dGVfdHlwZV0sIG1hcDogInBsYWNlX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X25hbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBwbGFjZV9naWRfcmVkaXJlY3Qgew0KICBnaWQgICAgIFN0cmluZyAgICBAaWQgQGRiLlV1aWQNCiAgbmV3X2lkICBJbnQNCiAgY3JlYXRlZCBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAaW5kZXgoW25ld19pZF0sIG1hcDogInBsYWNlX2dpZF9yZWRpcmVjdF9pZHhfbmV3X2lkIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBwbGFjZV9tZXRhIHsNCiAgaWQgICAgICAgICAgIEludCAgQGlkDQogIHJhdGluZyAgICAgICBJbnQ/IEBkYi5TbWFsbEludA0KICByYXRpbmdfY291bnQgSW50Pw0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgcGxhY2VfcmF0aW5nX3JhdyB7DQogIHBsYWNlICBJbnQNCiAgZWRpdG9yIEludA0KICByYXRpbmcgSW50IEBkYi5TbWFsbEludA0KDQogIEBAaWQoW3BsYWNlLCBlZGl0b3JdKQ0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJwbGFjZV9yYXRpbmdfcmF3X2lkeF9lZGl0b3IiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBwbGFjZV90YWcgew0KICBwbGFjZSAgICAgICAgSW50DQogIHRhZyAgICAgICAgICBJbnQNCiAgY291bnQgICAgICAgIEludA0KICBsYXN0X3VwZGF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGlkKFtwbGFjZSwgdGFnXSkNCiAgQEBpbmRleChbdGFnXSwgbWFwOiAicGxhY2VfdGFnX2lkeF90YWciKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBwbGFjZV90YWdfcmF3IHsNCiAgcGxhY2UgICAgIEludA0KICBlZGl0b3IgICAgSW50DQogIHRhZyAgICAgICBJbnQNCiAgaXNfdXB2b3RlIEJvb2xlYW4gQGRlZmF1bHQodHJ1ZSkNCg0KICBAQGlkKFtwbGFjZSwgZWRpdG9yLCB0YWddKQ0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJwbGFjZV90YWdfcmF3X2lkeF9lZGl0b3IiKQ0KICBAQGluZGV4KFt0YWddLCBtYXA6ICJwbGFjZV90YWdfcmF3X2lkeF90YWciKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBwbGFjZV90eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDI1NSkNCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogInBsYWNlX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCByZWNvcmRpbmcgew0KICBpZCAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBnaWQgICAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlKG1hcDogInJlY29yZGluZ19pZHhfZ2lkIikgQGRiLlV1aWQNCiAgbmFtZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYXJ0aXN0X2NyZWRpdCBJbnQNCiAgbGVuZ3RoICAgICAgICBJbnQ/DQogIGNvbW1lbnQgICAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcigyNTUpDQogIGVkaXRzX3BlbmRpbmcgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgdmlkZW8gICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBpbmRleChbYXJ0aXN0X2NyZWRpdF0sIG1hcDogInJlY29yZGluZ19pZHhfYXJ0aXN0X2NyZWRpdCIpDQogIEBAaW5kZXgoW25hbWVdLCBtYXA6ICJyZWNvcmRpbmdfaWR4X25hbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHJlY29yZGluZ19hbGlhcyB7DQogIGlkICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgcmVjb3JkaW5nICAgICAgICAgIEludA0KICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGxvY2FsZSAgICAgICAgICAgICBTdHJpbmc/DQogIGVkaXRzX3BlbmRpbmcgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHR5cGUgICAgICAgICAgICAgICBJbnQ/DQogIHNvcnRfbmFtZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYmVnaW5fZGF0ZV95ZWFyICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9tb250aCAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9kYXkgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfeWVhciAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfbW9udGggICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfZGF5ICAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgcHJpbWFyeV9mb3JfbG9jYWxlIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCiAgZW5kZWQgICAgICAgICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCg0KICBAQGluZGV4KFtyZWNvcmRpbmddLCBtYXA6ICJyZWNvcmRpbmdfYWxpYXNfaWR4X3JlY29yZGluZyIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlY29yZGluZ19hbGlhc190eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcNCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogInJlY29yZGluZ19hbGlhc190eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlY29yZGluZ19hbm5vdGF0aW9uIHsNCiAgcmVjb3JkaW5nICBJbnQNCiAgYW5ub3RhdGlvbiBJbnQNCg0KICBAQGlkKFtyZWNvcmRpbmcsIGFubm90YXRpb25dKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHJlY29yZGluZ19hdHRyaWJ1dGUgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHJlY29yZGluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludA0KICByZWNvcmRpbmdfYXR0cmlidXRlX3R5cGUgICAgICAgICAgICAgICBJbnQNCiAgcmVjb3JkaW5nX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWUgSW50Pw0KICByZWNvcmRpbmdfYXR0cmlidXRlX3RleHQgICAgICAgICAgICAgICBTdHJpbmc/DQoNCiAgQEBpbmRleChbcmVjb3JkaW5nXSwgbWFwOiAicmVjb3JkaW5nX2F0dHJpYnV0ZV9pZHhfcmVjb3JkaW5nIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVjb3JkaW5nX2F0dHJpYnV0ZV90eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDI1NSkNCiAgY29tbWVudCAgICAgU3RyaW5nICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBmcmVlX3RleHQgICBCb29sZWFuDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJyZWNvcmRpbmdfYXR0cmlidXRlX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVjb3JkaW5nX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWUgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICByZWNvcmRpbmdfYXR0cmlidXRlX3R5cGUgSW50DQogIHZhbHVlICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogIHBhcmVudCAgICAgICAgICAgICAgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyICAgICAgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uICAgICAgICAgICAgICBTdHJpbmc/DQogIGdpZCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAicmVjb3JkaW5nX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBpbmRleChbcmVjb3JkaW5nX2F0dHJpYnV0ZV90eXBlXSwgbWFwOiAicmVjb3JkaW5nX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X25hbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCByZWNvcmRpbmdfZmlyc3RfcmVsZWFzZV9kYXRlIHsNCiAgcmVjb3JkaW5nIEludCAgQGlkDQogIHllYXIgICAgICBJbnQ/IEBkYi5TbWFsbEludA0KICBtb250aCAgICAgSW50PyBAZGIuU21hbGxJbnQNCiAgZGF5ICAgICAgIEludD8gQGRiLlNtYWxsSW50DQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVjb3JkaW5nX2dpZF9yZWRpcmVjdCB7DQogIGdpZCAgICAgU3RyaW5nICAgIEBpZCBAZGIuVXVpZA0KICBuZXdfaWQgIEludA0KICBjcmVhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpbmRleChbbmV3X2lkXSwgbWFwOiAicmVjb3JkaW5nX2dpZF9yZWRpcmVjdF9pZHhfbmV3X2lkIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCByZWNvcmRpbmdfbWV0YSB7DQogIGlkICAgICAgICAgICBJbnQgIEBpZA0KICByYXRpbmcgICAgICAgSW50PyBAZGIuU21hbGxJbnQNCiAgcmF0aW5nX2NvdW50IEludD8NCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHJlY29yZGluZ19yYXRpbmdfcmF3IHsNCiAgcmVjb3JkaW5nIEludA0KICBlZGl0b3IgICAgSW50DQogIHJhdGluZyAgICBJbnQgQGRiLlNtYWxsSW50DQoNCiAgQEBpZChbcmVjb3JkaW5nLCBlZGl0b3JdKQ0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJyZWNvcmRpbmdfcmF0aW5nX3Jhd19pZHhfZWRpdG9yIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVjb3JkaW5nX3RhZyB7DQogIHJlY29yZGluZyAgICBJbnQNCiAgdGFnICAgICAgICAgIEludA0KICBjb3VudCAgICAgICAgSW50DQogIGxhc3RfdXBkYXRlZCBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAaWQoW3JlY29yZGluZywgdGFnXSkNCiAgQEBpbmRleChbdGFnXSwgbWFwOiAicmVjb3JkaW5nX3RhZ19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVjb3JkaW5nX3RhZ19yYXcgew0KICByZWNvcmRpbmcgSW50DQogIGVkaXRvciAgICBJbnQNCiAgdGFnICAgICAgIEludA0KICBpc191cHZvdGUgQm9vbGVhbiBAZGVmYXVsdCh0cnVlKQ0KDQogIEBAaWQoW3JlY29yZGluZywgZWRpdG9yLCB0YWddKQ0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJyZWNvcmRpbmdfdGFnX3Jhd19pZHhfZWRpdG9yIikNCiAgQEBpbmRleChbdGFnXSwgbWFwOiAicmVjb3JkaW5nX3RhZ19yYXdfaWR4X3RhZyIpDQogIEBAaW5kZXgoW3JlY29yZGluZ10sIG1hcDogInJlY29yZGluZ190YWdfcmF3X2lkeF90cmFjayIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgcmVsZWFzZSB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGdpZCAgICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUobWFwOiAicmVsZWFzZV9pZHhfZ2lkIikgQGRiLlV1aWQNCiAgbmFtZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYXJ0aXN0X2NyZWRpdCBJbnQNCiAgcmVsZWFzZV9ncm91cCBJbnQNCiAgc3RhdHVzICAgICAgICBJbnQ/DQogIHBhY2thZ2luZyAgICAgSW50Pw0KICBsYW5ndWFnZSAgICAgIEludD8NCiAgc2NyaXB0ICAgICAgICBJbnQ/DQogIGJhcmNvZGUgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkNCiAgY29tbWVudCAgICAgICBTdHJpbmcgICAgQGRlZmF1bHQoIiIpIEBkYi5WYXJDaGFyKDI1NSkNCiAgZWRpdHNfcGVuZGluZyBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgcXVhbGl0eSAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoLTEpIEBkYi5TbWFsbEludA0KICBsYXN0X3VwZGF0ZWQgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpbmRleChbYXJ0aXN0X2NyZWRpdF0sIG1hcDogInJlbGVhc2VfaWR4X2FydGlzdF9jcmVkaXQiKQ0KICBAQGluZGV4KFtuYW1lXSwgbWFwOiAicmVsZWFzZV9pZHhfbmFtZSIpDQogIEBAaW5kZXgoW3JlbGVhc2VfZ3JvdXBdLCBtYXA6ICJyZWxlYXNlX2lkeF9yZWxlYXNlX2dyb3VwIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCByZWxlYXNlX2FsaWFzIHsNCiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICByZWxlYXNlICAgICAgICAgICAgSW50DQogIG5hbWUgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgbG9jYWxlICAgICAgICAgICAgIFN0cmluZz8NCiAgZWRpdHNfcGVuZGluZyAgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgdHlwZSAgICAgICAgICAgICAgIEludD8NCiAgc29ydF9uYW1lICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBiZWdpbl9kYXRlX3llYXIgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX21vbnRoICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBiZWdpbl9kYXRlX2RheSAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV95ZWFyICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9tb250aCAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBlbmRfZGF0ZV9kYXkgICAgICAgSW50PyAgICAgIEBkYi5TbWFsbEludA0KICBwcmltYXJ5X2Zvcl9sb2NhbGUgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQ0KICBlbmRlZCAgICAgICAgICAgICAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQ0KDQogIEBAaW5kZXgoW3JlbGVhc2VdLCBtYXA6ICJyZWxlYXNlX2FsaWFzX2lkeF9yZWxlYXNlIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVsZWFzZV9hbGlhc190eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcNCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfYW5ub3RhdGlvbiB7DQogIHJlbGVhc2UgICAgSW50DQogIGFubm90YXRpb24gSW50DQoNCiAgQEBpZChbcmVsZWFzZSwgYW5ub3RhdGlvbl0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgcmVsZWFzZV9hdHRyaWJ1dGUgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICByZWxlYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50DQogIHJlbGVhc2VfYXR0cmlidXRlX3R5cGUgICAgICAgICAgICAgICBJbnQNCiAgcmVsZWFzZV9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIEludD8NCiAgcmVsZWFzZV9hdHRyaWJ1dGVfdGV4dCAgICAgICAgICAgICAgIFN0cmluZz8NCg0KICBAQGluZGV4KFtyZWxlYXNlXSwgbWFwOiAicmVsZWFzZV9hdHRyaWJ1dGVfaWR4X3JlbGVhc2UiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCByZWxlYXNlX2F0dHJpYnV0ZV90eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDI1NSkNCiAgY29tbWVudCAgICAgU3RyaW5nICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBmcmVlX3RleHQgICBCb29sZWFuDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJyZWxlYXNlX2F0dHJpYnV0ZV90eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZSB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICByZWxlYXNlX2F0dHJpYnV0ZV90eXBlIEludA0KICB2YWx1ZSAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgcGFyZW50ICAgICAgICAgICAgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyICAgICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiAgICAgICAgICAgIFN0cmluZz8NCiAgZ2lkICAgICAgICAgICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAicmVsZWFzZV9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAaW5kZXgoW3JlbGVhc2VfYXR0cmlidXRlX3R5cGVdLCBtYXA6ICJyZWxlYXNlX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X25hbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCByZWxlYXNlX2NvdW50cnkgew0KICByZWxlYXNlICAgIEludA0KICBjb3VudHJ5ICAgIEludA0KICBkYXRlX3llYXIgIEludD8gQGRiLlNtYWxsSW50DQogIGRhdGVfbW9udGggSW50PyBAZGIuU21hbGxJbnQNCiAgZGF0ZV9kYXkgICBJbnQ/IEBkYi5TbWFsbEludA0KDQogIEBAaWQoW3JlbGVhc2UsIGNvdW50cnldKQ0KICBAQGluZGV4KFtjb3VudHJ5XSwgbWFwOiAicmVsZWFzZV9jb3VudHJ5X2lkeF9jb3VudHJ5IikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVsZWFzZV9maXJzdF9yZWxlYXNlX2RhdGUgew0KICByZWxlYXNlIEludCAgQGlkDQogIHllYXIgICAgSW50PyBAZGIuU21hbGxJbnQNCiAgbW9udGggICBJbnQ/IEBkYi5TbWFsbEludA0KICBkYXkgICAgIEludD8gQGRiLlNtYWxsSW50DQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVsZWFzZV9naWRfcmVkaXJlY3Qgew0KICBnaWQgICAgIFN0cmluZyAgICBAaWQgQGRiLlV1aWQNCiAgbmV3X2lkICBJbnQNCiAgY3JlYXRlZCBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAaW5kZXgoW25ld19pZF0sIG1hcDogInJlbGVhc2VfZ2lkX3JlZGlyZWN0X2lkeF9uZXdfaWQiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHJlbGVhc2VfZ3JvdXAgew0KICBpZCAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBnaWQgICAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlKG1hcDogInJlbGVhc2VfZ3JvdXBfaWR4X2dpZCIpIEBkYi5VdWlkDQogIG5hbWUgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGFydGlzdF9jcmVkaXQgSW50DQogIHR5cGUgICAgICAgICAgSW50Pw0KICBjb21tZW50ICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBlZGl0c19wZW5kaW5nIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpbmRleChbYXJ0aXN0X2NyZWRpdF0sIG1hcDogInJlbGVhc2VfZ3JvdXBfaWR4X2FydGlzdF9jcmVkaXQiKQ0KICBAQGluZGV4KFtuYW1lXSwgbWFwOiAicmVsZWFzZV9ncm91cF9pZHhfbmFtZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgcmVsZWFzZV9ncm91cF9hbGlhcyB7DQogIGlkICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgcmVsZWFzZV9ncm91cCAgICAgIEludA0KICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGxvY2FsZSAgICAgICAgICAgICBTdHJpbmc/DQogIGVkaXRzX3BlbmRpbmcgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkNCiAgbGFzdF91cGRhdGVkICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIHR5cGUgICAgICAgICAgICAgICBJbnQ/DQogIHNvcnRfbmFtZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYmVnaW5fZGF0ZV95ZWFyICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9tb250aCAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgYmVnaW5fZGF0ZV9kYXkgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfeWVhciAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfbW9udGggICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgZW5kX2RhdGVfZGF5ICAgICAgIEludD8gICAgICBAZGIuU21hbGxJbnQNCiAgcHJpbWFyeV9mb3JfbG9jYWxlIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCiAgZW5kZWQgICAgICAgICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkNCg0KICBAQGluZGV4KFtyZWxlYXNlX2dyb3VwXSwgbWFwOiAicmVsZWFzZV9ncm91cF9hbGlhc19pZHhfcmVsZWFzZV9ncm91cCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfZ3JvdXBfYWxpYXNfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJyZWxlYXNlX2dyb3VwX2FsaWFzX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVsZWFzZV9ncm91cF9hbm5vdGF0aW9uIHsNCiAgcmVsZWFzZV9ncm91cCBJbnQNCiAgYW5ub3RhdGlvbiAgICBJbnQNCg0KICBAQGlkKFtyZWxlYXNlX2dyb3VwLCBhbm5vdGF0aW9uXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCByZWxlYXNlX2dyb3VwX2F0dHJpYnV0ZSB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHJlbGVhc2VfZ3JvdXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQNCiAgcmVsZWFzZV9ncm91cF9hdHRyaWJ1dGVfdHlwZSAgICAgICAgICAgICAgIEludA0KICByZWxlYXNlX2dyb3VwX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWUgSW50Pw0KICByZWxlYXNlX2dyb3VwX2F0dHJpYnV0ZV90ZXh0ICAgICAgICAgICAgICAgU3RyaW5nPw0KDQogIEBAaW5kZXgoW3JlbGVhc2VfZ3JvdXBdLCBtYXA6ICJyZWxlYXNlX2dyb3VwX2F0dHJpYnV0ZV9pZHhfcmVsZWFzZV9ncm91cCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfZ3JvdXBfYXR0cmlidXRlX3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KICBjb21tZW50ICAgICBTdHJpbmcgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcigyNTUpDQogIGZyZWVfdGV4dCAgIEJvb2xlYW4NCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogInJlbGVhc2VfZ3JvdXBfYXR0cmlidXRlX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVsZWFzZV9ncm91cF9hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIHsNCiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHJlbGVhc2VfZ3JvdXBfYXR0cmlidXRlX3R5cGUgSW50DQogIHZhbHVlICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICBwYXJlbnQgICAgICAgICAgICAgICAgICAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgICAgICAgICAgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICBnaWQgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJyZWxlYXNlX2dyb3VwX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBpbmRleChbcmVsZWFzZV9ncm91cF9hdHRyaWJ1dGVfdHlwZV0sIG1hcDogInJlbGVhc2VfZ3JvdXBfYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZV9pZHhfbmFtZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfZ3JvdXBfZ2lkX3JlZGlyZWN0IHsNCiAgZ2lkICAgICBTdHJpbmcgICAgQGlkIEBkYi5VdWlkDQogIG5ld19pZCAgSW50DQogIGNyZWF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtuZXdfaWRdLCBtYXA6ICJyZWxlYXNlX2dyb3VwX2dpZF9yZWRpcmVjdF9pZHhfbmV3X2lkIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCByZWxlYXNlX2dyb3VwX21ldGEgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgSW50ICBAaWQNCiAgcmVsZWFzZV9jb3VudCAgICAgICAgICAgIEludCAgQGRlZmF1bHQoMCkNCiAgZmlyc3RfcmVsZWFzZV9kYXRlX3llYXIgIEludD8gQGRiLlNtYWxsSW50DQogIGZpcnN0X3JlbGVhc2VfZGF0ZV9tb250aCBJbnQ/IEBkYi5TbWFsbEludA0KICBmaXJzdF9yZWxlYXNlX2RhdGVfZGF5ICAgSW50PyBAZGIuU21hbGxJbnQNCiAgcmF0aW5nICAgICAgICAgICAgICAgICAgIEludD8gQGRiLlNtYWxsSW50DQogIHJhdGluZ19jb3VudCAgICAgICAgICAgICBJbnQ/DQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVsZWFzZV9ncm91cF9wcmltYXJ5X3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAicmVsZWFzZV9ncm91cF9wcmltYXJ5X3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCByZWxlYXNlX2dyb3VwX3JhdGluZ19yYXcgew0KICByZWxlYXNlX2dyb3VwIEludA0KICBlZGl0b3IgICAgICAgIEludA0KICByYXRpbmcgICAgICAgIEludCBAZGIuU21hbGxJbnQNCg0KICBAQGlkKFtyZWxlYXNlX2dyb3VwLCBlZGl0b3JdKQ0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJyZWxlYXNlX2dyb3VwX3JhdGluZ19yYXdfaWR4X2VkaXRvciIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfZ3JvdXBfc2Vjb25kYXJ5X3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZw0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAicmVsZWFzZV9ncm91cF9zZWNvbmRhcnlfdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCByZWxlYXNlX2dyb3VwX3NlY29uZGFyeV90eXBlX2pvaW4gew0KICByZWxlYXNlX2dyb3VwICBJbnQNCiAgc2Vjb25kYXJ5X3R5cGUgSW50DQogIGNyZWF0ZWQgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGlkKFtyZWxlYXNlX2dyb3VwLCBzZWNvbmRhcnlfdHlwZV0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfZ3JvdXBfdGFnIHsNCiAgcmVsZWFzZV9ncm91cCBJbnQNCiAgdGFnICAgICAgICAgICBJbnQNCiAgY291bnQgICAgICAgICBJbnQNCiAgbGFzdF91cGRhdGVkICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAaWQoW3JlbGVhc2VfZ3JvdXAsIHRhZ10pDQogIEBAaW5kZXgoW3RhZ10sIG1hcDogInJlbGVhc2VfZ3JvdXBfdGFnX2lkeF90YWciKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCByZWxlYXNlX2dyb3VwX3RhZ19yYXcgew0KICByZWxlYXNlX2dyb3VwIEludA0KICBlZGl0b3IgICAgICAgIEludA0KICB0YWcgICAgICAgICAgIEludA0KICBpc191cHZvdGUgICAgIEJvb2xlYW4gQGRlZmF1bHQodHJ1ZSkNCg0KICBAQGlkKFtyZWxlYXNlX2dyb3VwLCBlZGl0b3IsIHRhZ10pDQogIEBAaW5kZXgoW2VkaXRvcl0sIG1hcDogInJlbGVhc2VfZ3JvdXBfdGFnX3Jhd19pZHhfZWRpdG9yIikNCiAgQEBpbmRleChbdGFnXSwgbWFwOiAicmVsZWFzZV9ncm91cF90YWdfcmF3X2lkeF90YWciKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCByZWxlYXNlX2xhYmVsIHsNCiAgaWQgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHJlbGVhc2UgICAgICAgIEludA0KICBsYWJlbCAgICAgICAgICBJbnQ/DQogIGNhdGFsb2dfbnVtYmVyIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpDQogIGxhc3RfdXBkYXRlZCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpbmRleChbbGFiZWxdLCBtYXA6ICJyZWxlYXNlX2xhYmVsX2lkeF9sYWJlbCIpDQogIEBAaW5kZXgoW3JlbGVhc2VdLCBtYXA6ICJyZWxlYXNlX2xhYmVsX2lkeF9yZWxlYXNlIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVsZWFzZV9tZXRhIHsNCiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICBAaWQNCiAgZGF0ZV9hZGRlZCAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGluZm9fdXJsICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQ0KICBhbWF6b25fYXNpbiAgICAgICAgU3RyaW5nPyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQ0KICBjb3Zlcl9hcnRfcHJlc2VuY2UgY292ZXJfYXJ0X3ByZXNlbmNlIEBkZWZhdWx0KGFic2VudCkNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCByZWxlYXNlX3BhY2thZ2luZyB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJyZWxlYXNlX3BhY2thZ2luZ19pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCByZWxlYXNlX3JhdyB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHRpdGxlICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NSkNCiAgYXJ0aXN0ICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQ0KICBhZGRlZCAgICAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQogIGxhc3RfbW9kaWZpZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgbG9va3VwX2NvdW50ICBJbnQ/ICAgICAgQGRlZmF1bHQoMCkNCiAgbW9kaWZ5X2NvdW50ICBJbnQ/ICAgICAgQGRlZmF1bHQoMCkNCiAgc291cmNlICAgICAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMCkNCiAgYmFyY29kZSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQ0KICBjb21tZW50ICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2Vfc3RhdHVzIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDI1NSkNCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogInJlbGVhc2Vfc3RhdHVzX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfdGFnIHsNCiAgcmVsZWFzZSAgICAgIEludA0KICB0YWcgICAgICAgICAgSW50DQogIGNvdW50ICAgICAgICBJbnQNCiAgbGFzdF91cGRhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpZChbcmVsZWFzZSwgdGFnXSkNCiAgQEBpbmRleChbdGFnXSwgbWFwOiAicmVsZWFzZV90YWdfaWR4X3RhZyIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHJlbGVhc2VfdGFnX3JhdyB7DQogIHJlbGVhc2UgICBJbnQNCiAgZWRpdG9yICAgIEludA0KICB0YWcgICAgICAgSW50DQogIGlzX3Vwdm90ZSBCb29sZWFuIEBkZWZhdWx0KHRydWUpDQoNCiAgQEBpZChbcmVsZWFzZSwgZWRpdG9yLCB0YWddKQ0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJyZWxlYXNlX3RhZ19yYXdfaWR4X2VkaXRvciIpDQogIEBAaW5kZXgoW3RhZ10sIG1hcDogInJlbGVhc2VfdGFnX3Jhd19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVsZWFzZV91bmtub3duX2NvdW50cnkgew0KICByZWxlYXNlICAgIEludCAgQGlkDQogIGRhdGVfeWVhciAgSW50PyBAZGIuU21hbGxJbnQNCiAgZGF0ZV9tb250aCBJbnQ/IEBkYi5TbWFsbEludA0KICBkYXRlX2RheSAgIEludD8gQGRiLlNtYWxsSW50DQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgcmVwbGljYXRpb25fY29udHJvbCB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGN1cnJlbnRfc2NoZW1hX3NlcXVlbmNlICAgICAgSW50DQogIGN1cnJlbnRfcmVwbGljYXRpb25fc2VxdWVuY2UgSW50Pw0KICBsYXN0X3JlcGxpY2F0aW9uX2RhdGUgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBzY3JpcHQgew0KICBpZCAgICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBpc29fY29kZSAgIFN0cmluZyBAdW5pcXVlKG1hcDogInNjcmlwdF9pZHhfaXNvX2NvZGUiKSBAZGIuQ2hhcig0KQ0KICBpc29fbnVtYmVyIFN0cmluZyBAZGIuQ2hhcigzKQ0KICBuYW1lICAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigxMDApDQogIGZyZXF1ZW5jeSAgSW50ICAgIEBkZWZhdWx0KDApIEBkYi5TbWFsbEludA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgc2VyaWVzIHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZ2lkICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJzZXJpZXNfaWR4X2dpZCIpIEBkYi5VdWlkDQogIG5hbWUgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGNvbW1lbnQgICAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCIiKSBAZGIuVmFyQ2hhcigyNTUpDQogIHR5cGUgICAgICAgICAgSW50DQogIG9yZGVyaW5nX3R5cGUgSW50DQogIGVkaXRzX3BlbmRpbmcgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtuYW1lXSwgbWFwOiAic2VyaWVzX2lkeF9uYW1lIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCBzZXJpZXNfYWxpYXMgew0KICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHNlcmllcyAgICAgICAgICAgICBJbnQNCiAgbmFtZSAgICAgICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBsb2NhbGUgICAgICAgICAgICAgU3RyaW5nPw0KICBlZGl0c19wZW5kaW5nICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICB0eXBlICAgICAgICAgICAgICAgSW50Pw0KICBzb3J0X25hbWUgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGJlZ2luX2RhdGVfeWVhciAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfbW9udGggICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfZGF5ICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX3llYXIgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX21vbnRoICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX2RheSAgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIHByaW1hcnlfZm9yX2xvY2FsZSBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQogIGVuZGVkICAgICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBpbmRleChbc2VyaWVzXSwgbWFwOiAic2VyaWVzX2FsaWFzX2lkeF9zZXJpZXMiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBzZXJpZXNfYWxpYXNfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJzZXJpZXNfYWxpYXNfdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBzZXJpZXNfYW5ub3RhdGlvbiB7DQogIHNlcmllcyAgICAgSW50DQogIGFubm90YXRpb24gSW50DQoNCiAgQEBpZChbc2VyaWVzLCBhbm5vdGF0aW9uXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCBzZXJpZXNfYXR0cmlidXRlIHsNCiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBzZXJpZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQNCiAgc2VyaWVzX2F0dHJpYnV0ZV90eXBlICAgICAgICAgICAgICAgSW50DQogIHNlcmllc19hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIEludD8NCiAgc2VyaWVzX2F0dHJpYnV0ZV90ZXh0ICAgICAgICAgICAgICAgU3RyaW5nPw0KDQogIEBAaW5kZXgoW3Nlcmllc10sIG1hcDogInNlcmllc19hdHRyaWJ1dGVfaWR4X3NlcmllcyIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHNlcmllc19hdHRyaWJ1dGVfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIGNvbW1lbnQgICAgIFN0cmluZyAgQGRlZmF1bHQoIiIpIEBkYi5WYXJDaGFyKDI1NSkNCiAgZnJlZV90ZXh0ICAgQm9vbGVhbg0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAic2VyaWVzX2F0dHJpYnV0ZV90eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHNlcmllc19hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIHsNCiAgaWQgICAgICAgICAgICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgc2VyaWVzX2F0dHJpYnV0ZV90eXBlIEludA0KICB2YWx1ZSAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICBwYXJlbnQgICAgICAgICAgICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciAgICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiAgICAgICAgICAgU3RyaW5nPw0KICBnaWQgICAgICAgICAgICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogInNlcmllc19hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAaW5kZXgoW3Nlcmllc19hdHRyaWJ1dGVfdHlwZV0sIG1hcDogInNlcmllc19hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlX2lkeF9uYW1lIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgc2VyaWVzX2dpZF9yZWRpcmVjdCB7DQogIGdpZCAgICAgU3RyaW5nICAgIEBpZCBAZGIuVXVpZA0KICBuZXdfaWQgIEludA0KICBjcmVhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpbmRleChbbmV3X2lkXSwgbWFwOiAic2VyaWVzX2dpZF9yZWRpcmVjdF9pZHhfbmV3X2lkIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgc2VyaWVzX29yZGVyaW5nX3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAic2VyaWVzX29yZGVyaW5nX3R5cGVfaWR4X2dpZCIpIEBkYi5VdWlkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgc2VyaWVzX3RhZyB7DQogIHNlcmllcyAgICAgICBJbnQNCiAgdGFnICAgICAgICAgIEludA0KICBjb3VudCAgICAgICAgSW50DQogIGxhc3RfdXBkYXRlZCBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAaWQoW3NlcmllcywgdGFnXSkNCiAgQEBpbmRleChbdGFnXSwgbWFwOiAic2VyaWVzX3RhZ19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgc2VyaWVzX3RhZ19yYXcgew0KICBzZXJpZXMgICAgSW50DQogIGVkaXRvciAgICBJbnQNCiAgdGFnICAgICAgIEludA0KICBpc191cHZvdGUgQm9vbGVhbiBAZGVmYXVsdCh0cnVlKQ0KDQogIEBAaWQoW3NlcmllcywgZWRpdG9yLCB0YWddKQ0KICBAQGluZGV4KFtlZGl0b3JdLCBtYXA6ICJzZXJpZXNfdGFnX3Jhd19pZHhfZWRpdG9yIikNCiAgQEBpbmRleChbc2VyaWVzXSwgbWFwOiAic2VyaWVzX3RhZ19yYXdfaWR4X3NlcmllcyIpDQogIEBAaW5kZXgoW3RhZ10sIG1hcDogInNlcmllc190YWdfcmF3X2lkeF90YWciKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCBzZXJpZXNfdHlwZSB7DQogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNTUpDQogIGVudGl0eV90eXBlIFN0cmluZyAgQGRiLlZhckNoYXIoNTApDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJzZXJpZXNfdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQptb2RlbCB0YWcgew0KICBpZCAgICAgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICBTdHJpbmcgQHVuaXF1ZShtYXA6ICJ0YWdfaWR4X25hbWUiKSBAZGIuVmFyQ2hhcigyNTUpDQogIHJlZl9jb3VudCBJbnQgICAgQGRlZmF1bHQoMCkNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHRhZ19yZWxhdGlvbiB7DQogIHRhZzEgICAgICAgICBJbnQNCiAgdGFnMiAgICAgICAgIEludA0KICB3ZWlnaHQgICAgICAgSW50DQogIGxhc3RfdXBkYXRlZCBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAaWQoW3RhZzEsIHRhZzJdKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHRyYWNrIHsNCiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZ2lkICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJ0cmFja19pZHhfZ2lkIikgQGRiLlV1aWQNCiAgcmVjb3JkaW5nICAgICBJbnQNCiAgbWVkaXVtICAgICAgICBJbnQNCiAgcG9zaXRpb24gICAgICBJbnQNCiAgbnVtYmVyICAgICAgICBTdHJpbmcNCiAgbmFtZSAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgYXJ0aXN0X2NyZWRpdCBJbnQNCiAgbGVuZ3RoICAgICAgICBJbnQ/DQogIGVkaXRzX3BlbmRpbmcgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgaXNfZGF0YV90cmFjayBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBpbmRleChbYXJ0aXN0X2NyZWRpdF0sIG1hcDogInRyYWNrX2lkeF9hcnRpc3RfY3JlZGl0IikNCiAgQEBpbmRleChbbWVkaXVtLCBwb3NpdGlvbl0sIG1hcDogInRyYWNrX2lkeF9tZWRpdW1fcG9zaXRpb24iKQ0KICBAQGluZGV4KFtyZWNvcmRpbmddLCBtYXA6ICJ0cmFja19pZHhfcmVjb3JkaW5nIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgdHJhY2tfZ2lkX3JlZGlyZWN0IHsNCiAgZ2lkICAgICBTdHJpbmcgICAgQGlkIEBkYi5VdWlkDQogIG5ld19pZCAgSW50DQogIGNyZWF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtuZXdfaWRdLCBtYXA6ICJ0cmFja19naWRfcmVkaXJlY3RfaWR4X25ld19pZCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHRyYWNrX3JhdyB7DQogIGlkICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgcmVsZWFzZSAgSW50DQogIHRpdGxlICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KICBhcnRpc3QgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkNCiAgc2VxdWVuY2UgSW50DQoNCiAgQEBpbmRleChbcmVsZWFzZV0sIG1hcDogInRyYWNrX3Jhd19pZHhfcmVsZWFzZSIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHVucmVmZXJlbmNlZF9yb3dfbG9nIHsNCiAgdGFibGVfbmFtZSBTdHJpbmcgICAgQGRiLlZhckNoYXINCiAgcm93X2lkICAgICBJbnQNCiAgaW5zZXJ0ZWQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KDQogIEBAaWQoW3RhYmxlX25hbWUsIHJvd19pZF0pDQogIEBAaW5kZXgoW2luc2VydGVkXSwgbWFwOiAidW5yZWZlcmVuY2VkX3Jvd19sb2dfaWR4X2luc2VydGVkIiwgdHlwZTogQnJpbikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KLy8vIFRoaXMgdGFibGUgY29udGFpbnMgY2hlY2sgY29uc3RyYWludHMgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2NoZWNrLWNvbnN0cmFpbnRzIGZvciBtb3JlIGluZm8uDQptb2RlbCB1cmwgew0KICBpZCAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBnaWQgICAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlKG1hcDogInVybF9pZHhfZ2lkIikgQGRiLlV1aWQNCiAgdXJsICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZShtYXA6ICJ1cmxfaWR4X3VybCIpDQogIGVkaXRzX3BlbmRpbmcgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCB1cmxfZ2lkX3JlZGlyZWN0IHsNCiAgZ2lkICAgICBTdHJpbmcgICAgQGlkIEBkYi5VdWlkDQogIG5ld19pZCAgSW50DQogIGNyZWF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGluZGV4KFtuZXdfaWRdLCBtYXA6ICJ1cmxfZ2lkX3JlZGlyZWN0X2lkeF9uZXdfaWQiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCB2b3RlIHsNCiAgaWQgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZWRpdG9yICAgICBJbnQNCiAgZWRpdCAgICAgICBJbnQNCiAgdm90ZSAgICAgICBJbnQgICAgICAgQGRiLlNtYWxsSW50DQogIHZvdGVfdGltZSAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCiAgc3VwZXJzZWRlZCBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBpbmRleChbZWRpdF0sIG1hcDogInZvdGVfaWR4X2VkaXQiKQ0KICBAQGluZGV4KFtlZGl0b3IsIHZvdGVfdGltZV0sIG1hcDogInZvdGVfaWR4X2VkaXRvcl92b3RlX3RpbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHdvcmsgew0KICBpZCAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBnaWQgICAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlKG1hcDogIndvcmtfaWR4X2dpZCIpIEBkYi5VdWlkDQogIG5hbWUgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIHR5cGUgICAgICAgICAgSW50Pw0KICBjb21tZW50ICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBlZGl0c19wZW5kaW5nIEludCAgICAgICBAZGVmYXVsdCgwKQ0KICBsYXN0X3VwZGF0ZWQgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpbmRleChbbmFtZV0sIG1hcDogIndvcmtfaWR4X25hbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQovLy8gVGhpcyB0YWJsZSBjb250YWlucyBjaGVjayBjb25zdHJhaW50cyBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvY2hlY2stY29uc3RyYWludHMgZm9yIG1vcmUgaW5mby4NCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIGFuIGV4cHJlc3Npb24gaW5kZXggd2hpY2ggcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2QvZXhwcmVzc2lvbi1pbmRleGVzIGZvciBtb3JlIGluZm8uDQovLy8gVGhpcyBtb2RlbCBjb250YWlucyBhbiBleHByZXNzaW9uIGluZGV4IHdoaWNoIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL2V4cHJlc3Npb24taW5kZXhlcyBmb3IgbW9yZSBpbmZvLg0KLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgYW4gZXhwcmVzc2lvbiBpbmRleCB3aGljaCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9leHByZXNzaW9uLWluZGV4ZXMgZm9yIG1vcmUgaW5mby4NCm1vZGVsIHdvcmtfYWxpYXMgew0KICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHdvcmsgICAgICAgICAgICAgICBJbnQNCiAgbmFtZSAgICAgICAgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcg0KICBsb2NhbGUgICAgICAgICAgICAgU3RyaW5nPw0KICBlZGl0c19wZW5kaW5nICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGxhc3RfdXBkYXRlZCAgICAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQ0KICB0eXBlICAgICAgICAgICAgICAgSW50Pw0KICBzb3J0X25hbWUgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyDQogIGJlZ2luX2RhdGVfeWVhciAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfbW9udGggICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGJlZ2luX2RhdGVfZGF5ICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX3llYXIgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX21vbnRoICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIGVuZF9kYXRlX2RheSAgICAgICBJbnQ/ICAgICAgQGRiLlNtYWxsSW50DQogIHByaW1hcnlfZm9yX2xvY2FsZSBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQogIGVuZGVkICAgICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBpbmRleChbd29ya10sIG1hcDogIndvcmtfYWxpYXNfaWR4X3dvcmsiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCB3b3JrX2FsaWFzX3R5cGUgew0KICBpZCAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgIFN0cmluZw0KICBwYXJlbnQgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyIEludCAgICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KICBnaWQgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAid29ya19hbGlhc190eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHdvcmtfYW5ub3RhdGlvbiB7DQogIHdvcmsgICAgICAgSW50DQogIGFubm90YXRpb24gSW50DQoNCiAgQEBpZChbd29yaywgYW5ub3RhdGlvbl0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgd29ya19hdHRyaWJ1dGUgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB3b3JrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50DQogIHdvcmtfYXR0cmlidXRlX3R5cGUgICAgICAgICAgICAgICBJbnQNCiAgd29ya19hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlIEludD8NCiAgd29ya19hdHRyaWJ1dGVfdGV4dCAgICAgICAgICAgICAgIFN0cmluZz8NCg0KICBAQGluZGV4KFt3b3JrXSwgbWFwOiAid29ya19hdHRyaWJ1dGVfaWR4X3dvcmsiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCB3b3JrX2F0dHJpYnV0ZV90eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDI1NSkNCiAgY29tbWVudCAgICAgU3RyaW5nICBAZGVmYXVsdCgiIikgQGRiLlZhckNoYXIoMjU1KQ0KICBmcmVlX3RleHQgICBCb29sZWFuDQogIHBhcmVudCAgICAgIEludD8NCiAgY2hpbGRfb3JkZXIgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGdpZCAgICAgICAgIFN0cmluZyAgQHVuaXF1ZShtYXA6ICJ3b3JrX2F0dHJpYnV0ZV90eXBlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCm1vZGVsIHdvcmtfYXR0cmlidXRlX3R5cGVfYWxsb3dlZF92YWx1ZSB7DQogIGlkICAgICAgICAgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB3b3JrX2F0dHJpYnV0ZV90eXBlIEludA0KICB2YWx1ZSAgICAgICAgICAgICAgIFN0cmluZz8NCiAgcGFyZW50ICAgICAgICAgICAgICBJbnQ/DQogIGNoaWxkX29yZGVyICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmlwdGlvbiAgICAgICAgIFN0cmluZz8NCiAgZ2lkICAgICAgICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUobWFwOiAid29ya19hdHRyaWJ1dGVfdHlwZV9hbGxvd2VkX3ZhbHVlX2lkeF9naWQiKSBAZGIuVXVpZA0KDQogIEBAaW5kZXgoW3dvcmtfYXR0cmlidXRlX3R5cGVdLCBtYXA6ICJ3b3JrX2F0dHJpYnV0ZV90eXBlX2FsbG93ZWRfdmFsdWVfaWR4X25hbWUiKQ0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQptb2RlbCB3b3JrX2dpZF9yZWRpcmVjdCB7DQogIGdpZCAgICAgU3RyaW5nICAgIEBpZCBAZGIuVXVpZA0KICBuZXdfaWQgIEludA0KICBjcmVhdGVkIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpDQoNCiAgQEBpbmRleChbbmV3X2lkXSwgbWFwOiAid29ya19naWRfcmVkaXJlY3RfaWR4X25ld19pZCIpDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgd29ya19sYW5ndWFnZSB7DQogIHdvcmsgICAgICAgICAgSW50DQogIGxhbmd1YWdlICAgICAgSW50DQogIGVkaXRzX3BlbmRpbmcgSW50ICAgICAgIEBkZWZhdWx0KDApDQogIGNyZWF0ZWQgICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGlkKFt3b3JrLCBsYW5ndWFnZV0pDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgd29ya19tZXRhIHsNCiAgaWQgICAgICAgICAgIEludCAgQGlkDQogIHJhdGluZyAgICAgICBJbnQ/IEBkYi5TbWFsbEludA0KICByYXRpbmdfY291bnQgSW50Pw0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCi8vLyBUaGlzIHRhYmxlIGNvbnRhaW5zIGNoZWNrIGNvbnN0cmFpbnRzIGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9jaGVjay1jb25zdHJhaW50cyBmb3IgbW9yZSBpbmZvLg0KbW9kZWwgd29ya19yYXRpbmdfcmF3IHsNCiAgd29yayAgIEludA0KICBlZGl0b3IgSW50DQogIHJhdGluZyBJbnQgQGRiLlNtYWxsSW50DQoNCiAgQEBpZChbd29yaywgZWRpdG9yXSkNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgd29ya190YWcgew0KICB3b3JrICAgICAgICAgSW50DQogIHRhZyAgICAgICAgICBJbnQNCiAgY291bnQgICAgICAgIEludA0KICBsYXN0X3VwZGF0ZWQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikNCg0KICBAQGlkKFt3b3JrLCB0YWddKQ0KICBAQGluZGV4KFt0YWddLCBtYXA6ICJ3b3JrX3RhZ19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgd29ya190YWdfcmF3IHsNCiAgd29yayAgICAgIEludA0KICBlZGl0b3IgICAgSW50DQogIHRhZyAgICAgICBJbnQNCiAgaXNfdXB2b3RlIEJvb2xlYW4gQGRlZmF1bHQodHJ1ZSkNCg0KICBAQGlkKFt3b3JrLCBlZGl0b3IsIHRhZ10pDQogIEBAaW5kZXgoW3RhZ10sIG1hcDogIndvcmtfdGFnX3Jhd19pZHhfdGFnIikNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KbW9kZWwgd29ya190eXBlIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDI1NSkNCiAgcGFyZW50ICAgICAgSW50Pw0KICBjaGlsZF9vcmRlciBJbnQgICAgIEBkZWZhdWx0KDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8NCiAgZ2lkICAgICAgICAgU3RyaW5nICBAdW5pcXVlKG1hcDogIndvcmtfdHlwZV9pZHhfZ2lkIikgQGRiLlV1aWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQplbnVtIGNvdmVyX2FydF9wcmVzZW5jZSB7DQogIGFic2VudA0KICBwcmVzZW50DQogIGRhcmtlbmVkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KZW51bSBlZGl0X25vdGVfc3RhdHVzIHsNCiAgZGVsZXRlZA0KICBlZGl0ZWQNCg0KICBAQHNjaGVtYSgibXVzaWNicmFpbnoiKQ0KfQ0KDQplbnVtIGV2ZW50X2FydF9wcmVzZW5jZSB7DQogIGFic2VudA0KICBwcmVzZW50DQogIGRhcmtlbmVkDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KZW51bSBmbHVlbmN5IHsNCiAgYmFzaWMNCiAgaW50ZXJtZWRpYXRlDQogIGFkdmFuY2VkDQogIG5hdGl2ZQ0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCmVudW0gb2F1dGhfY29kZV9jaGFsbGVuZ2VfbWV0aG9kIHsNCiAgcGxhaW4NCiAgUzI1Ng0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQoNCmVudW0gcmF0YWJsZV9lbnRpdHlfdHlwZSB7DQogIGFydGlzdA0KICBldmVudA0KICBsYWJlbA0KICBwbGFjZQ0KICByZWNvcmRpbmcNCiAgcmVsZWFzZV9ncm91cA0KICB3b3JrDQoNCiAgQEBzY2hlbWEoIm11c2ljYnJhaW56IikNCn0NCg0KZW51bSB0YWdnYWJsZV9lbnRpdHlfdHlwZSB7DQogIGFyZWENCiAgYXJ0aXN0DQogIGV2ZW50DQogIGluc3RydW1lbnQNCiAgbGFiZWwNCiAgcGxhY2UNCiAgcmVjb3JkaW5nDQogIHJlbGVhc2UNCiAgcmVsZWFzZV9ncm91cA0KICBzZXJpZXMNCiAgd29yaw0KDQogIEBAc2NoZW1hKCJtdXNpY2JyYWlueiIpDQp9DQo=",
  "inlineSchemaHash": "27de7c55b7841f5245317f0b39bf04c2d079d9a6114473759b44889a686ecf71",
  "noEngine": false
}
config.dirname = '/'

defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_MB: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_MB'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_MB || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
