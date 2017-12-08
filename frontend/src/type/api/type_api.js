import $ from "jquery";

export const getTypes = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/types',
    })
}

export const getType = (typeId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/types/' + typeId
    })
}

export const createType = (typeData) => {
    return $.ajax({
        method: 'POST',
        url: '/api/types',
        data: {
            type: {
                name: typeData.name,
                category: typeData.category,
                type_fields_attributes: typeData.fieldTypes
            }
        }
    })
}

