import React from "react"

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError:true};
    }

    componentDidCatch(error, info) {
        console.error(error, info.componentStack);
    }

    render() {
        if (this.state.hasError)
        return this.props.fallback;

        return this.props.children;
    }

}