const works = {
    name: "works",
    title: "Works",
    type: "document",
    fields: [
        {
            name: "project_name",
            title: "Project Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {source: "project_name"}
        },
        {
            name: "project_desc",
            title: "Project Description",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {hotspot: true},
            fields: [ 
                {
                    name: "alt",
                    title: "alt",
                    type: "string"
                }
            ]
        },
        {
            name: "github_url",
            title: "Github Url",
            type: "url"
        },
        {
            name: "contract_url",
            title: "Contract Url",
            type: "url"
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
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
        }
    ]
}

export default works;