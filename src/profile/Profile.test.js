import React from "react";
import {shallow} from "enzyme";
import Profile from "profile/Profile";
import Summary from "profile/summary/Summary";
import About from "profile/about/About";
import Menu from "common/menu/Menu";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Profile />);
});

it('shows Summary', () => {
    expect(wrapper.find(Summary).length).toEqual(1);
});

it('shows About', () => {
    expect(wrapper.find(About).length).toEqual(1);
});

it('shows Menu', () => {
    expect(wrapper.find(Menu).length).toEqual(1);
});