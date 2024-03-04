

const Button = () => {

    const buttonstyle = {
        backgroundcolor: "blue",
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    }
    return (
        <button type="button" class="btn btn-primary" style={buttonstyle}>Primary</button>

    )
}
export default Button