const HANDLERS_PATH = './views/templates/';

class TemplateHandler {

    getTemplate(templateName) {
        const templatePath = `${HANDLERS_PATH}${templateName}.hbs`;
        console.log(templatePath);
        return new Promise((resolve, reject) => {
            $.get(templatePath)
                .done(resolve)
                .fail(reject);
        });
    }

    setTemplate(templateName, targetSelector, dataObject) {
        return this.getTemplate(templateName)
            .then((template) => {
                const compiledTemplate = Handlebars.compile(template);
                const templateHtml = compiledTemplate(dataObject);
                const $wrappedTemplate = $('<div/>');
                $wrappedTemplate.html(templateHtml);
                $(targetSelector).html($wrappedTemplate.html());

                return template;
            }).catch(console.log);
    }

}
const templateHandler = new TemplateHandler();
export { templateHandler };