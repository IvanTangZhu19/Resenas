import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        Reviews: 'Reviews',
        MyReviews: ' My Reviews',
        language: 'Language',
        change_language: 'Change Language',
        comments: 'Comments',
        login: 'Login',
        register: 'Register',
        LoginFirst: 'You have to log in first to make your first review.',
        noComments: 'there are no comments'
    },
    es: {
        Reviews: 'Reseñas',
        MyReviews: ' Mis reseñas',
        language: 'Idioma',
        change_language: 'Cambiar idioma',
        comments: 'Comentarios',
        login: 'Inicio de sesión',
        register: 'Registro',
        LoginFirst: 'Tienes que iniciar sesión primero para hacer tu primera reseña',
        noComments: 'No hay comentarios'
    }
};

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages
});

export default i18n;