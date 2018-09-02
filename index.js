d3.json('javascript.json', function (error, data) {
    if (error) throw error
    markmap('svg#mindmap', data, {
        preset: 'colorful', // or default
        linkShape: 'diagonal' // or bracket
    })
})