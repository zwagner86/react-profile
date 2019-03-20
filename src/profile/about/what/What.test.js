import React from "react";
import {shallow} from "enzyme";
import {whatSectionDescription} from "personal-site-data";
import What from "profile/about/what/What";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<What />);
});

it('should have the proper heading', () => {
    expect(wrapper.find('.About-section-header').text()).toContain('WHAT?');
});

it('should render the description', () => {
    expect(wrapper.find('.About-section-description').text()).toEqual(whatSectionDescription);
});
