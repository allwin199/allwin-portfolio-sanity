const contributions = {
    name: "contributions",
    title: "Contributions",
    type: "document",
    fields: [
        {
            name: "organization",
            title: "Organization",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {source: "organization"}
        },
        {
            name: "issue",
            title: "Issue",
            type: "string"
        },
        {
            name: "issue_id",
            title: "Issue Id",
            type: "string"
        },
        {
            name: "url",
            title: "Url",
            type: "url"
        },
        {
            name: "content1",
            title: "Content1",
            type: "string",
        },
        {
            name: "content2",
            title: "Content2",
            type: "string",
        },
        {
            name: "content3",
            title: "Content3",
            type: "string",
        }
    ],
    orderings: [
        {
            title: 'Created At, Newest First',
            name: 'createdAtDesc',
            by: [
              {field: 'slug', direction: 'asc'}
            ]
        },
    ]
}

export default contributions;