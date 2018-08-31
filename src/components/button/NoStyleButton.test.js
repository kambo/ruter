import React from 'react';
import NoStyleButton from './NoStyleButton';
import {mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('NoStyleButton', () => {
	function mountComponent(props = {}) {
		return mount(<NoStyleButton text='TEST TEXT' onClick={jest.fn()}/>);
	}
	it('Should render', () => {
		expect(NoStyleButton).toBeOk;
	});
	it('Should contain text REACT SF', () => {
		const wrapper = mountComponent();
		expect(wrapper.text()).toEqual('TEST TEXT');
	});
});