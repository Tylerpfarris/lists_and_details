import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeyArnoldContainer from './HeyArnoldContainer';


describe('HeyArnoldContainer', () => {
    it('renders a list of characters to the page', async () => {
        render(
            <MemoryRouter>
               <HeyArnoldContainer /> 
            </MemoryRouter>
            );

        screen.getByText('Loading...')
        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).toMatchSnapshot()
    })
});