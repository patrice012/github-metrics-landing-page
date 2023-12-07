export const Heading = ({label, tag}) => {
    return (
        <div className="primary">
            <span className="tag">{ tag}</span>
            <h4 className="label">{label}</h4>
        </div>
    );
}