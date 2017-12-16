import $ from "jquery";

export const getTemplates = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/templates',
    })
}

export const getTemplate = (templateId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/templates/' + templateId
    })
}

export const createTemplate = (templateData) => {
    return $.ajax({
        method: 'POST',
        url: '/api/templates',
        data: {
            template: {
                name: templateData.name,
                category: templateData.category,
                template_fields_attributes: templateData.fieldTemplates
            }
        }
    })
}

