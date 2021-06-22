export default {
    name: "person",
    title: "Person",
    type: "document",
    fields: [
        {
            name: "firstName",
            title: "First Name",
            type: "string",
        },
        {
            name: "lastName",
            title: "Last Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "firstName",
                maxLength: 100,
            },
        },
        {
            name: "id",
            title: "ID",
            type: "number",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
};
