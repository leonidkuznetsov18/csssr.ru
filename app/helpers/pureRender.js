import deepEqual from 'deep-equal';

function shouldPureComponentUpdate(nextProps, nextState) {
	return !deepEqual(this.props, nextProps) || !deepEqual(this.state, nextState);
}

export default function pureRender(component) {
	component.prototype.shouldComponentUpdate = shouldPureComponentUpdate;
}
