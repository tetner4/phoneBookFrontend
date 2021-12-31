const successStyle = {
color: "green",
background: 'lightgrey',
fontSize: '20px',
borderStyle: 'solid',
borderSadius: '5px',
padding: '10px',
marginBottom: '10px',
}

const errorStyle = {
    color: "red",
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderSadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    }




const Notification = ({message}) => {
    if (message === null){
        return null
    }

    if (message.includes('ERROR')) {
        return(
            <div style={errorStyle}>{message}</div>
        )

    } else {
        return(
            <div style={successStyle}>{message}</div>
        )
    }
}

export default Notification