/* eslint-disable dot-notation */
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import Col from '..';
import Row from '../../row';

describe('Layout', () => {
    afterEach(cleanup);
    it('gutter & tag prop', () => {
        const { container, getByText } = render(
            <Row gutter="24">
                <Col span="24">24</Col>
                <Col span="12">12</Col>
                <Col span="12">12</Col>
                <Col span="8">8</Col>
                <Col span="8">8</Col>
                <Col span="8">8</Col>
                <Col span="6">6</Col>
                <Col span="6">6</Col>
                <Col span="6">6</Col>
                <Col span="6">6</Col>
                <Col span="7">7</Col>
                <Col span="6">6</Col>
                <Col span="5">5</Col>
                <Col span="4">4</Col>
                <Col span="3">3</Col>
                <Col tag="p" span="2">
                    2
                </Col>
            </Row>,
        );
        const root = container.querySelector('div[class="mul-row"]') as any;
        const firstChild = getByText('24');
        const lastChiild = getByText('2');
        expect(root).toBeTruthy();
        expect(root).toHaveStyle({ marginLeft: '-0.75rem', marginRight: '-0.75rem' });
        expect(firstChild.tagName).toBe('DIV');
        expect(lastChiild.tagName).toBe('P');
        expect(firstChild).toHaveStyle({ paddingLeft: '0.75rem', paddingRight: '0.75rem' });
        expect(lastChiild).toHaveStyle({ paddingLeft: '0.75rem', paddingRight: '0.75rem' });
        expect(firstChild).toHaveClass('mul-col mul-col--24');
        expect(lastChiild).toHaveClass('mul-col mul-col--2');
    });
});
