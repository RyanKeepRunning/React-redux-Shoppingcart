import React from 'react';
import {shallow} from 'enzyme';
import {Item} from './Item';
import {findByAttribute} from '../../utils/index';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
// const mockStore = configureMockStore()({});
function setup(){
    const props = {
        deleteItem:jest.fn(),
        item:{name:'abc',quantity:15}
    }
    const component = shallow(
                                <Item {...props}/>
                            );
    return component;
}

describe('Item component',()=>{
    let component;
    beforeEach(()=>{
        component= setup();
    })
    it('Item should render without errors',()=>{
        const wrapper = findByAttribute(component,'item')
        console.log(wrapper.debug());
        expect(wrapper.length).toBe(1);
    });

    it('Item text should render without errors',()=>{
        const item = component.text();
        expect(item).toBe(`Item:abc Quantity:15`);
    });
})


