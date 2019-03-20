import React from "react";
import {shallow} from "enzyme";
import Where from "profile/about/where/Where";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Where />);
});

it('should have the proper heading', () => {
    expect(wrapper.find('.About-section-header').text()).toContain('WHERE?');
});
