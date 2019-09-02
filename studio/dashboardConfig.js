export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d6d61ea126d1e9b06a15495',
                  title: 'Sanity Studio',
                  name: 'wcorner-sapper-studio',
                  apiId: '9187c728-ed42-4c99-aac3-717ba3db0aa4'
                },
                {
                  buildHookId: '5d6d61ea8674004d562b9971',
                  title: 'Blog Website',
                  name: 'wcorner-sapper',
                  apiId: 'ca3df6c4-8189-4023-a240-09a404fb8dd2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wcorner/wcorner-sapper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://wcorner-sapper.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
