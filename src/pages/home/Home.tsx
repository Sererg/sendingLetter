import { EmailEditor } from "../../components/email-editor/EmailEditor";
import { EmailList } from "../../components/email-list/EmailList";

export const Home = () => {
    return (
        <div
        style={{
            display: 'grid',
            gridTemplateColumns: '1fr .6fr',
            padding: '2rem',
        }}
        
        >
            <EmailEditor/>
            <EmailList/>
        </div>
    );
};
