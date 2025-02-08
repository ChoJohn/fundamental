
import classNames from 'classnames';
import './index.css';

export const Row = ({ children, direction, width }) => <div className="flex" style={{ width, flexDirection: direction }}>{ children }</div>;
export const Column = ({ children, grow, width }) => <div className={ classNames("column", grow ? `grow-${grow}` : null) } style={{ width }}>{ children }</div>;

export const Center = ({ children }) => (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        {children}
    </div>
);