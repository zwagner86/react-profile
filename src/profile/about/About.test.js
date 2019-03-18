import React from "react";
import {shallow} from "enzyme";
import About from "profile/about/About";
import Who from "profile/about/who/Who";
import What from "profile/about/what/What";
import Where from "profile/about/where/Where";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<About />);
});

it('shows Who section', () => {
    expect(wrapper.find(Who).length).toEqual(1);
});

it('shows What section', () => {
    expect(wrapper.find(What).length).toEqual(1);
});

it('shows Where section', () => {
    expect(wrapper.find(Where).length).toEqual(1);
});