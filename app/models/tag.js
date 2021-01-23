import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  name: attr('string'),
  image: attr('string'),
  imageMeta: attr(),
  content: attr('string'),
  html: attr(),

  // workaround for unstable ember-data relationship id sorting
  // see: https://discuss.emberjs.com/t/manual-pagination-in-ember-data-relationships/18087
  _postIds: attr(),

  posts: hasMany('content'),

  meta: attr(),
});
