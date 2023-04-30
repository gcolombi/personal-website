export default function Footer() {
    return (
        <footer className="c-footer">
            <div className="c-footer__content o-container u-text--center o-wysiwyg">
                <p>&copy; {new Date().getFullYear()} Next.js. All rights reserved.</p>
            </div>
        </footer>
    );
}