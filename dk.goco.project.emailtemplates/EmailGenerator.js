
const NewMessageTemplateBuild = require('./templates/NewMessageEmailTemplate')

exports.newMessageTemplate = function (from, title, message) {
    var template = NewMessageTemplateBuild.html
    template = template.replace("#from", from)
    template = template.replace("#title", title)
    template = template.replace("#message", message)
    template = template.replace("#from", from)
    return template
}
