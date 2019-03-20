import React from "react";
import {shallow} from "enzyme";
import Who from "profile/about/who/Who";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Who />);
});

it('should have the proper heading', () => {
    expect(wrapper.find('.About-section-header').text()).toContain('WHO?');
});
