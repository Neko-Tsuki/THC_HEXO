const pagination = require('hexo-pagination');

hexo.extend.generator.register('before_generate', function(locals){

  const config = this.config;

  const posts = locals.posts.filter(post => {
    return post.group !== 'magazine';
  });

  return pagination('', posts, {
    perPage: config.index_generator.per_page,
    layout: ['index'],
    data: {
      __index: true
    }
  });
});
