const AppSelector = props => {
    return (
        <>
            {Object.keys(props.apps).map(app =>
                <button
                    key={app}
                    style={{ margin: '3px' }}
                    onClick={() => props.select(app)}>
                    {props.apps[app].title}
                </button>
            )}
        </>
    )
}

export default AppSelector
