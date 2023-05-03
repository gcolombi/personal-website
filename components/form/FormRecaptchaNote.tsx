export default function FormRecaptchaNote() {
    return (
        <>
            {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY &&
                <div className="o-wysiwyg">
                    <p><small>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy">Privacy Policy</a> as well as <a href="https://policies.google.com/terms">Google Terms of Service</a> applies.</small></p>
                </div>
            }
        </>
    );
}