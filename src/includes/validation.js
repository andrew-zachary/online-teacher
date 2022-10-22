import { 
    Form as VeeForm, 
    Field as VeeField,
    ErrorMessage as VeeErrorMessage,
    defineRule,
    configure,
} from 'vee-validate';
import { required, email } from '@vee-validate/rules';

export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('VeeErrorMessage', VeeErrorMessage);

        defineRule('required', required);
        defineRule('email', email);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `errors.${ctx.field}.${ctx.rule.name}`,
                    email: `errors.${ctx.field}.${ctx.rule.name}`
                }
                const message = messages[ctx.rule.name];
                return message;
            }
        });
    }
}