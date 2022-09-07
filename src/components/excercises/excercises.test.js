import { render, screen } from '@testing-library/react';
import ExcercisesPage from '../../pages/excercises/ExcercisesPage';
import respose from '../../data.json';

beforeAll(() => jest.spyOn(window, 'fetch'))

test('rederizar la lista de ejercicios', () => {
    render(<ExcercisesPage />)
    for (let excercise of respose.results.data) {
        expect(screen.getByText(excercise.name)).toBeInTheDocument();
    }
})


test('renderizar lista de ejercicios desde la API', async () => {
    window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => respose,
    })

    render(<ExcercisesPage />)
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_EXCERCISES_ENDPOINT);
    
    for (let excercise of respose.results.data) {
        expect(await screen.getByText(excercise.name)).toBeInTheDocument()
    }
})