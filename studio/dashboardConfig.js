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
                  buildHookId: '5f50aafe1b7c83b686b75cb2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sm1nxcji',
                  apiId: '13845f94-ff0f-48d4-b92d-19d301e49def'
                },
                {
                  buildHookId: '5f50aafe05d522b87b40b9a1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8ieikjcf',
                  apiId: 'e9dd1f91-634b-4533-9194-9b7713380e60'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/admariner/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8ieikjcf.netlify.app', category: 'apps'}
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
