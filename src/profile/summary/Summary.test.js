import React from "react";
import {shallow} from "enzyme";
import Summary from "profile/summary/Summary";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Summary />);
});

it('should render profile image', () => {
    expect(wrapper.find('.Summary-pic-img').length).toEqual(1);
});

it('should contain my info', () => {
    expect(wrapper.text()).toContain('Front End Engineer');
    expect(wrapper.text()).toContain('Chicago');
    expect(wrapper.text()).toContain('SpotHero');
});

it('should have a GitHub link', () => {
    expect(wrapper.find('a.Summary-github-link').length).toEqual(1);
});

it('should have a LinkedIn link', () => {
    expect(wrapper.find('a.Summary-linkedin-link').length).toEqual(1);
});
