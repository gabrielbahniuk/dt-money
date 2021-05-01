import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website Development</td>
            <td className='deposit'>€7000</td>
            <td>Development</td>
            <td>21.05.2020</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className='withdraw'>- €900</td>
            <td>House</td>
            <td>01.02.2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}