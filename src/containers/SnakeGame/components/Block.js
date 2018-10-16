import React, { PureComponent } from 'react';

class Block extends PureComponent {
    render() {
        const {
            classStyle,
        } = this.props;
        return (
            <div className={classStyle} />
        );
    }
}

export default Block;
