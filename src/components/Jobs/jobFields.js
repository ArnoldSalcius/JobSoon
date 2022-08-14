

export const jobFields = [
    {
        field: 'Company Name',
        id: 'companyName',
        type: 'string',
        required: true
    },
    {
        field: 'Position',
        id: 'position',
        type: 'string',
        required: true
    },
    {
        field: 'Stack',
        id: 'stack',
        type: 'array',
        required: false
    },
    {
        field: 'Short Description',
        id: 'description',
        type: 'string',
        required: true
    },

    {
        field: 'Date Applied',
        id: 'date',
        type: 'date',
        required: false
    },

];


export const jobTabs = [
    {
        title: 'Applied',
        cName: 'progress'
    },
    {
        title: 'No Reply',
        cName: 'denied'
    },
    {
        title: 'Interested',
        cName: 'completed'
    },
];