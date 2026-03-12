function CountList({ obj }) {
    function contrl(id) {
        alert(id);
    }

    return (
        <button onClick={function () { contrl(obj.id) }}>
            {obj.value}
        </button>
    )
}

export default CountList