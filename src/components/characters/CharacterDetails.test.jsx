import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

describe('CharacterDetails', () => {
  it('renders a character from the id onto the page ', async () => {
    render(
      <MemoryRouter>
        <CharacterDetails
          match={{
            params: {
              id: '5da237699734fdcb7bef8f7c',
            },
          }}
        />
      </MemoryRouter>
    );
      
    screen.getByText('Loading...');

    const divEl = await screen.findByRole('display', {
      name: 'character details',
    });
    expect(divEl).toMatchSnapshot();
  });
});
