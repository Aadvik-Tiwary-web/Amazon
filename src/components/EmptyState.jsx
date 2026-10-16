import { Link } from 'react-router-dom';
export default function EmptyState({icon='♡',title,description,action='Explore products',to='/'}){return <div className="empty-state"><div className="empty-icon">{icon}</div><h2>{title}</h2><p>{description}</p><Link className="primary-button" to={to}>{action}</Link></div>}
