import './List.css'

const List = () => {
    return (
        <div className="list-container">
            <div className="list-item">
                <img src="/icon1.png" alt="icon1" />
                <div className="list-item-title">Declarative</div>
                <div className="list-item-paragraph">React makes it painless to create interactive UIs.</div>
            </div>
            <div className="list-item">
                <img src="/icon2.png" alt="icon2" />
                <div className="list-item-title">Components</div>
                <div className="list-item-paragraph">Build encapsulated components that manage their state.</div>
            </div>
            <div className="list-item">
                <img src="/icon3.png" alt="icon3" />
                <div className="list-item-title">Single-Way</div>
                <div className="list-item-paragraph">A set of immutable values are passed to the component's.</div>
            </div>
            <div className="list-item">
                <img src="/icon4.png" alt="icon4" />
                <div className="list-item-title">JSX</div>
                <div className="list-item-paragraph">Statically-typed, designed to run on modern browsers.</div>
            </div>
        </div>
    )
}

export default List