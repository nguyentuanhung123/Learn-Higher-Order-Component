

const widthName = (OldComponent) => {

    return function EnhancedComponent(props){

        return(
            <OldComponent {...props} name = 'withName' />
        )
    }
}

export default widthName;