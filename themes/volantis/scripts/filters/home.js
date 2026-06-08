hexo.extend.filter.register('locals_get', function(locals) {

  const originalPosts = locals.posts;

  locals.homePosts = originalPosts.filter(post => {
    return post.group !== 'magazine';
  });

  return locals;
});