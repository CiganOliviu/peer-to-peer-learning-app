import React from 'react';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <ErrorComponent />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
