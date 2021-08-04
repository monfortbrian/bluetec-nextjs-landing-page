export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '610a816a5af654c075c8aec9',
                  title: 'Sanity Studio',
                  name: 'bluetec-nextjs-landing-page-studio',
                  apiId: '11c9ec0e-0007-4f45-8856-381df0768a28'
                },
                {
                  buildHookId: '610a816af2c2a1d111db2823',
                  title: 'Landing pages Website',
                  name: 'bluetec-nextjs-landing-page',
                  apiId: 'ff7cfb70-d82d-4cf5-87ac-c3c0db45e4b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/monfortbrian/bluetec-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bluetec-nextjs-landing-page.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
